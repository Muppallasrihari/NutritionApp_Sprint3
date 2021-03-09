package com.cg.healthify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

	Payment findByTransactionId(String transactionId);

	Payment findByPaymentIdentifier(String paymentIdentifier);

}