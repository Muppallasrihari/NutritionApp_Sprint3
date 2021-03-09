package com.cg.healthify.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.healthify.beans.Customer;
import com.cg.healthify.beans.Payment;
import com.cg.healthify.exceptions.PaymentIdNotFoundException;
import com.cg.healthify.repository.PaymentRepository;
import com.cg.healthify.service.PaymentServiceImpl;

@SpringBootTest
public class PaymentServiceTest {

	@MockBean
	private PaymentRepository paymentRepository;

	@Autowired
	private PaymentServiceImpl service;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}

	Payment payment, payment1, payment2;
	
	@Test
	public void findPaymentByTransactionId() {

		Payment payment = new Payment();
		payment.setTransactionId("1-PAY");
		payment.setPaymentGateway("UPI");

		when(paymentRepository.findByTransactionId("1-PAY")).thenReturn(payment);
		Payment pay = service.findPaymentByTransactionId("1-PAY");
		assertEquals(pay, payment);
	}

	@Test
	public void findPaymentByTransactionIdNotFound() {

		Payment payment = new Payment();
		payment.setTransactionId("1-PAY");
		payment.setPaymentGateway("UPI");

		when(paymentRepository.findByTransactionId("2-PAY"))
				.thenThrow(new PaymentIdNotFoundException("Payment ID not found"));
		// Payment pay = service.findPaymentByTransactionId("2-PAY");
		assertThrows(PaymentIdNotFoundException.class, () -> service.findPaymentByTransactionId("2-PAY"));
	}

	@Test
	public void findAllPayments() {
		payment1 = new Payment(1L, "1-PAY", 1000.0, "P01", "UPI", 10.0, null);
		payment2 = new Payment(2L, "2-PAY", 3000.0, "P02", "PAYTM", 15.0, null);
		List<Payment> payment = new ArrayList<Payment>();
		payment.add(payment1);
		payment.add(payment2);
		when(paymentRepository.findAll()).thenReturn(payment);
		assertEquals(payment.size(), 2);
	}

	@Test
	public void deletePaymentByUsingId() {
		payment1 = new Payment(1L, "1-PAY", 1000.0, "P01", "UPI", 10.0, null);
		paymentRepository.deleteById(payment1.getId());
		assertNotNull(payment1);

	}

}
