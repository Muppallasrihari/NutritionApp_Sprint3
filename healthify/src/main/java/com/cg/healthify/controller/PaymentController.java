package com.cg.healthify.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.healthify.beans.Payment;
import com.cg.healthify.service.MapValidationErrorService;
import com.cg.healthify.service.PaymentServiceImpl;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
	@Autowired
	private PaymentServiceImpl paymentServiceImpl;
	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	@PostMapping("/{paymentIdentifier}")
	public ResponseEntity<?> addAndUpdatePayment(@Valid @RequestBody Payment payment, BindingResult result,@PathVariable String paymentIdentifier) {
		ResponseEntity<?> errorMsg = mapValidationErrorService.mapValidationError(result);
		if (errorMsg != null)
			return errorMsg;
		Payment payment1 = paymentServiceImpl.addPayment(paymentIdentifier, payment);
		return new ResponseEntity<Payment>(payment1, HttpStatus.OK);
	}

	@GetMapping("/{transactionId}")
	public Payment getPaymentDetails(@PathVariable String transactionId) {
		return paymentServiceImpl.findPaymentByTransactionId(transactionId);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> DeletePaymentById(@PathVariable String id) {
		paymentServiceImpl.deletePaymentById(id);
		return new ResponseEntity<String>("Payment having Transaction ID: " + id + " is deleted.", HttpStatus.OK);
	}

	@GetMapping("/allpayments")
	public List<Payment> getAllPayments() {
		return paymentServiceImpl.getAllPayments();
	}
}
