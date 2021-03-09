package com.cg.healthify.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.Customer;
import com.cg.healthify.beans.Payment;
import com.cg.healthify.exceptions.PaymentIdNotFoundException;
import com.cg.healthify.repository.CustomerRepository;
import com.cg.healthify.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private PaymentRepository paymentRepository;
	Integer PTSsequence = 0;
	String paymentTransactionId;

	
	@Override
	public Payment addPayment(String paymentIdentifier, Payment payment) {
		// Double f=Customer.this.getNutritionPlan().getPrice();
		try {
			Customer customer = customerRepository.findByPaymentIdentifier(paymentIdentifier);
			String NutitionPlanId = customer.getPlanId();
			
			System.out.println(customer.getPaymentIdentifier());
			// NutritionPlan nut =new NutritionPlan();
			/**
			 * -----------------------------------PAYMENT SILVER
			 * PLAN--------------------------------------------------
			 **/

			if (payment.getId() == null && NutitionPlanId.toUpperCase().equals("SILVER")) {
				if (payment.getPaymentGateway().equals("PAYTM")) {
					payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
					payment.setDiscount(8.0);
					Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.08);
					payment.setActualAmount(amt);
				} else

				if (payment.getPaymentGateway().equals("UPI")) {
					payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
					payment.setDiscount(7.0);
					Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.07);
					payment.setActualAmount(amt);
				}
				else if (payment.getPaymentGateway().equals("CARD")) {
						payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
						payment.setDiscount(5.0);
						Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.05);
						payment.setActualAmount(amt);
					}
			}
			/**
			 * -------------------------------------PAYMENT-GOLD-PLAN--------------------------------------------------------------
			 **/
			if (payment.getId() == null && NutitionPlanId.toUpperCase().equals("GOLD")) {
				if (payment.getPaymentGateway().equals("PAYTM")) {
					payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
					payment.setDiscount(10.0);
					Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.10);
					payment.setActualAmount(amt);
				}
				if (payment.getPaymentGateway().equals("UPI")) {
					payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
					payment.setDiscount(15.0);
					Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.15);
					payment.setActualAmount(amt);
				}
				if (payment.getPaymentGateway().equals("CARD")) {
					payment.setCurrentAmount(customer.getNutritionPlan().getPrice());
					payment.setDiscount(5.0);
					Double amt = payment.getCurrentAmount() - (payment.getCurrentAmount() *0.05);
					payment.setActualAmount(amt);
				}
			}
			/**
			 * -----------------------------------------------------------------------------------------------------------------
			 **/
			PTSsequence++;
			paymentTransactionId = Integer.toString(PTSsequence) + "-PAY";
			payment.setTransactionId(paymentTransactionId);
			customer.setPaymentIdentifier(paymentIdentifier);
			payment.setPaymentIdentifier(paymentIdentifier);
			payment.setCustomer(customer);

			/**
			 * ------------------------------------------------------------------------------------------------------------------
			 **/

			/**
			 * ----------------------------------UPDATE-PLAN--------------------------------------------------------------------
			 **/
			if (payment.getId() != null) {
				payment.setTransactionId(paymentTransactionId);
				customer.setPaymentIdentifier(paymentIdentifier);
				payment.setPaymentIdentifier(paymentIdentifier);
				payment.setCustomer(customer);
			}
			return paymentRepository.save(payment);
		} catch (Exception e) {
			throw new PaymentIdNotFoundException("Specified Payment is not there, Please check your id");
		}
	}

	/**
	 * ----------------------------------------------------------------------------------------------------------------
	 **/
	@Override
	public Payment findPaymentByTransactionId(String transactionId) {
		Payment pay = paymentRepository.findByTransactionId(transactionId);
		if (pay == null) {
			throw new PaymentIdNotFoundException("Pay Id:" + transactionId + " not found");
		}
		return pay;
	}

	@Override
	public int deletePaymentById(String transactionId) {
		int result = 0;
		Payment pay = paymentRepository.findByTransactionId(transactionId);
		if (pay == null) {
			throw new PaymentIdNotFoundException("Pay Id:" + transactionId + " not found");
		} else {
			result = 1;
			paymentRepository.delete(pay);
		}
		return result;

	}

	@Override
	public List<Payment> getAllPayments() {
		return paymentRepository.findAll();

	}

}
