package com.cg.healthify.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findByCustomerIdentifier(String customerIdentifier);
	Optional<Customer> findById(Long id);
	Customer findByPaymentIdentifier(String paymentIdentifier);
}
