package com.cg.healthify.test;
import org.h2.api.CustomDataTypesHandler;
import org.junit.jupiter.api.Test;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.cg.healthify.beans.Payment;
import com.cg.healthify.beans.WeightLog;
import com.cg.healthify.exceptions.CustomerException;
import com.cg.healthify.beans.CaloriesLog;
import com.cg.healthify.beans.Customer;
import com.cg.healthify.beans.DietPlan;
import com.cg.healthify.beans.Exercise;
import com.cg.healthify.beans.NutritionPlan;

import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class CustomerModuleTests {

	@LocalServerPort
	private int port;
	private NutritionPlan nutritionPlan=null;
	private DietPlan dietPlan=null;
	private List<Payment> payment=new ArrayList<>();
	private List<WeightLog> weightLog=new ArrayList<>();
	private Exercise exercise=null;
	private CaloriesLog calories =null;

	private String getRootUrl()
	{
		return "http://localhost:" + port;
	}
	@Autowired
	private TestRestTemplate restTemplate;

/**------------------------------------ADD CUSTOMER TEST CASES--------------------------------------------**/	
	@SuppressWarnings("deprecation")
	@Test
	public void addCustomer() throws Exception {
		LocalDate date = LocalDate.of(2020, 02, 1);
		LocalDate date1 = LocalDate.of(2020, 02, 2);	
<<<<<<< HEAD
		Customer cust=new Customer(18L,"1111122437","Asmita Singh","Female","C017","P017","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
=======
		Customer cust=new Customer(17L,"1111122333","Asmita Singh","Female","C013","P013","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
>>>>>>> branch 'master' of https://github.com/Muppallasrihari/sprint2_NutritionApp.git
		ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
				Customer.class);
		assertNotNull(postResponse);
		assertThat(postResponse.getStatusCode(), is(HttpStatus.OK));
	}
/*------------------------------------------EXCEPTION---------------------------------------------*/	
	@SuppressWarnings("deprecation")
	@Test
	public void addCustomerException() throws CustomerException {
		LocalDate date = LocalDate.of(2020, 02, 1);
		LocalDate date1 = LocalDate.of(2020, 02, 2);	
<<<<<<< HEAD
		Customer cust=new Customer(18L,"1111122436","Asmita Singh","Female","C016","P016","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
		ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
				Customer.class);
		assertThat(postResponse.getStatusCode(), is(HttpStatus.BAD_REQUEST));
	}
/**--------------------------------------------------------------------------------------------------**/	


/**-------------------------------------FIND CUSTOMER TEST CASES-------------------------------------**/	
	@SuppressWarnings("deprecation")
	@Test
	public void findCustomerById() {
		LocalDate date = LocalDate.of(2020, 02, 22);
		LocalDate date1 = LocalDate.of(2020, 02, 2);	
		Customer cust=new Customer(18L,"1111122436","Asmita Singh","Female","C016","P016","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
		//ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
			//	Customer.class);
		ResponseEntity<Customer> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/api/customer/C016",Customer.class);
		assertThat(postResponse1.getStatusCode(), is(HttpStatus.OK));
=======
		Customer cust=new Customer(2L,"1234567890","Asmita Singh","Female","C01","P01","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
		ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
				Customer.class);
		assertThat(postResponse.getStatusCode(), is(HttpStatus.BAD_REQUEST));
	}
/**--------------------------------------------------------------------------------------------------**/	


/**-------------------------------------FIND CUSTOMER TEST CASES-------------------------------------**/	
	@SuppressWarnings("deprecation")
	@Test
	public void findCustomerById() {
		LocalDate date = LocalDate.of(2020, 02, 1);
		LocalDate date1 = LocalDate.of(2020, 02, 2);	
		Customer cust=new Customer(2L,"1234563391","Asmita Singh","Female","C03","P03","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);
		ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
				Customer.class);
		ResponseEntity<Customer> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/api/customer/C03",Customer.class);
		assertEquals(postResponse,postResponse1);
>>>>>>> branch 'master' of https://github.com/Muppallasrihari/sprint2_NutritionApp.git
	}
/*-----------------------------------------------EXCEPTION--------------------------------------------*/	

	@SuppressWarnings("deprecation")
	@Test
	public void findCustomerByIdException() throws CustomerException {
		LocalDate date = LocalDate.of(2020, 02, 1);
		LocalDate date1 = LocalDate.of(2020, 02, 2);
		Customer cust=new Customer(2L,"1234563391","Asmita Singh","Female","C03","P03","GOLD","VEG",0,dietPlan,nutritionPlan,payment,exercise,weightLog,calories,date,date1);	
		ResponseEntity<Customer> postResponse = restTemplate.getForEntity(getRootUrl() + "/api/customer/C0101",Customer.class);
		assertThat(postResponse.getStatusCode(), is(HttpStatus.BAD_REQUEST));
	}
/**--------------------------------------------------------------------------------------------------**/


/**-----------------------------------------UPDATE CUSTOMER TEST CASE--------------------------------**/	
	@Test
	public void UpdateCustomer() throws Exception {
		LocalDate date = LocalDate.of(2020, 02, 1);
		LocalDate date1 = LocalDate.of(2020, 02, 2);	
		Customer cust=new Customer(1L,"9454112394","Raghav Singh",null,null,null,null,null,0,dietPlan,nutritionPlan,payment,date,date1);
		Customer cust1=new Customer(1L,"1234567890","Raghav Singh",null,null,null,null,null,0,dietPlan,nutritionPlan,payment,date,date1);
		ResponseEntity<Customer> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust,
				Customer.class);
		ResponseEntity<Customer> postResponse1 = restTemplate.postForEntity(getRootUrl() + "/api/customer", cust1,
				Customer.class);
		assertEquals(postResponse,postResponse1);	
	}
/**--------------------------------------------------------------------------------------------------**/	



/**-----------------------------------------DELETE CUSTOMER TEST CASES------------------------------**/	
<<<<<<< HEAD
	//@SuppressWarnings("deprecation")
//	@Test
//	public void deleteCustomer() {
	//	ResponseEntity<Customer> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/api/customer/C013",Customer.class);
		//int n=postResponse1.getStatusCodeValue();
		//assertEquals(200,n);
		//restTemplate.delete(getRootUrl() + "/api/customer/C013");
	//}
/*--------------------------------------------EXCEPTION---------------------------------------------------*/
=======
>>>>>>> branch 'master' of https://github.com/Muppallasrihari/sprint2_NutritionApp.git
	@SuppressWarnings("deprecation")
	@Test
<<<<<<< HEAD
	public void DeleteCustomerByIdException() throws CustomerException {	
		ResponseEntity<Customer> postResponse = restTemplate.getForEntity(getRootUrl() + "/api/customer/C0101",Customer.class);
		int actual=postResponse.getStatusCodeValue();
		assertEquals(400,actual);
=======
	public void deleteCustomer() {
		ResponseEntity<Customer> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/api/customer/C09",Customer.class);
		int n=postResponse1.getStatusCodeValue();
		assertEquals(200,n);
		restTemplate.delete(getRootUrl() + "/api/customer/C09");
>>>>>>> branch 'master' of https://github.com/Muppallasrihari/sprint2_NutritionApp.git
	}
<<<<<<< HEAD
=======
/*--------------------------------------------EXCEPTION---------------------------------------------------*/
	@SuppressWarnings("deprecation")
	@Test
	public void DeleteCustomerByIdException() throws CustomerException {	
		ResponseEntity<Customer> postResponse = restTemplate.getForEntity(getRootUrl() + "/api/customer/C0101",Customer.class);
		int actual=postResponse.getStatusCodeValue();
		assertEquals(400,actual);
	}
>>>>>>> branch 'master' of https://github.com/Muppallasrihari/sprint2_NutritionApp.git
/**-------------------------------------------------------------------------------------------------**/	
}
