package com.cg.healthify.service;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cg.healthify.beans.Customer;

@Service
public interface CustomerService {
	public Customer save(Customer customer);
	
	public Optional<Customer> findCustomerById(Long id);
	
	public Iterable<Customer>getAllCustomerDetails();
	
	public int deleteCustomerById(Long id);

}