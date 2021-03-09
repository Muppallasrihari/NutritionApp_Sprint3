package com.cg.healthify.controller;

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
import com.cg.healthify.beans.Customer;
import com.cg.healthify.service.CustomerService;
import com.cg.healthify.service.MapValidationErrorService;

import java.util.Optional;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {

@Autowired	
private CustomerService customerService;
@Autowired
private MapValidationErrorService mapValidationErrorService;


/**-------------------------------ADD and UPDATE CUSTOMER DATA----------------------------------------**/

	@PostMapping("")
	public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer,BindingResult result) {
	ResponseEntity<?> errorMsg=	mapValidationErrorService.mapValidationError(result);
	if(errorMsg!=null)return errorMsg;
		Customer cust=customerService.save(customer);
		return new ResponseEntity<Customer>(cust,HttpStatus.OK);
	}
/**---------------------------------------------------------------------------------------------------**/
	
	
/**------------------------------FIND CUSTOMER BY CUSTOEMR-ID-----------------------------------------**/	
	
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Long id){
		Optional<Customer> cust=customerService.findCustomerById(id);
		Customer cus=cust.get();
		return new ResponseEntity<Customer>(cus,HttpStatus.OK);
	}
/**---------------------------------------------------------------------------------------------------**/	
	

/**---------------------------------FIND ALL CUSTOMER DETAILS------------------------------------------**/	
	@GetMapping("/all")
	public Iterable<Customer> getAllCustomer(){
		return customerService.getAllCustomerDetails();
	}
/**---------------------------------------------------------------------------------------------------**/
	
	
/**-------------------------------DELETE CUSTOMER BY CUSTOMER ID---------------------------------------**/	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> DeleteCustomerById(@PathVariable Long id){
		int cust=customerService.deleteCustomerById(id);
		return new ResponseEntity<String>("Customer with ID "+id+" was deleted",HttpStatus.OK);
	}
}
/**--------------------------**************************************-------------------------------------**/