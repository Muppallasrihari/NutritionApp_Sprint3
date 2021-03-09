package com.cg.healthify.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.Customer;
import com.cg.healthify.beans.DietPlan;
import com.cg.healthify.beans.Exercise;
import com.cg.healthify.beans.NutritionPlan;
import com.cg.healthify.exceptions.CustomerException;
import com.cg.healthify.repository.CustomerRepository;
import com.cg.healthify.repository.DietPlanRepository;
import com.cg.healthify.repository.ExerciseRepository;
import com.cg.healthify.repository.NutritionPlanRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

@Autowired
private CustomerRepository customerRepository;
@Autowired
private DietPlanRepository dietPlanRepository;
@Autowired
private NutritionPlanRepository nutritionPlanRepository;
@Autowired
private ExerciseRepository exerciseRepository;

/**-----------------------------Create Customer Data Along with Connected Entities----------**/
@Override
public Customer save(Customer customer) {
System.out.println(customer.getId());	
int inc=customer.getContact().charAt(0)+customer.getContact().charAt(1)+customer.getContact().charAt(2);
try {
	customer.setCustomerIdentifier("C0"+inc);
	customer.setPaymentIdentifier("P0"+inc);
//	customer.setExIdentifier("E0"+inc);
	String dummyPassword=customer.getName().split(" ")[0]+customer.getCustomerIdentifier();
		customer.setPassword(dummyPassword);
/**------------------------------------------DIET PLAN PART---------------------------------------------------------------**/			
	 DietPlan dietplan=dietPlanRepository.findByFoodType(customer.getFoodType().toUpperCase());
	 if(dietplan!=null) {
		 customer.setDietPlan(dietplan); 
	 }
/**-----------------------------------------------------------------------------------------------------------------------**/	 

/**-------------------------------------NUTRITION PLAN PART---------------------------------------------------------------**/	 
	 NutritionPlan plan=nutritionPlanRepository.findByPlanId(customer.getPlanId().toUpperCase());
	 if(plan!=null) {
		 customer.setNutritionPlan(plan);
	 }
/**-----------------------------------------------------------------------------------------------------------------------**/	 
		
/**-------------------------------------EXERCISE PART---------------------------------------------------------------------**/	 
	 Exercise exercise = exerciseRepository.findByExIdentifier(customer.getExIdentifier().toUpperCase());
		if(exercise!=null) {
			 customer.setExercise(exercise); 
		 }	 
		return customerRepository.save(customer);
	}
/**-----------------------------------------------------------------------------------------------------------------------**/	
	catch(Exception e) {
		throw new CustomerException("Error Occured in this ID:"+customer.getCustomerIdentifier());
	}
	
	}
/**----------------------------------------------------------------------------------------**/

/**-------------------------------Find Customer By CustomerIdentifier---------------------------------------**/
@Override
public Optional<Customer> findCustomerById(Long id) {
	Optional<Customer> customer=customerRepository.findById(id);
	if(customer==null) {
		throw new CustomerException("Id: "+id+" doesn't exists");
	}
	return customer;
}

/**--------------------------------------------------------------------------------------------------------**/


/**---------------------------Get List of All Customer Details---------------------------------------------**/
@Override
public Iterable<Customer>getAllCustomerDetails(){
	return customerRepository.findAll();
}

/**--------------------------------------------------------------------------------------------------------**/


/**------------------------------Delete Customer By CustomerIdentifier-------------------------------------**/
@Override
public int deleteCustomerById(Long id) {
	int res=0;
	Optional<Customer> customer=customerRepository.findById(id);
	Customer cus=customer.get();
	if(cus==null) {
		throw new CustomerException("Id: "+id+" doesn't exists");
	}else {
		customerRepository.delete(cus);
		res=1;
	}
	return res;
}
}
/**-------------------------------------------------------------------------------------------------------**/
