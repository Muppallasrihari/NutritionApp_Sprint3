package com.cg.healthify.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

 import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.healthify.beans.Payment;

import org.springframework.boot.test.web.client.TestRestTemplate;


import com.cg.healthify.exceptions.PaymentIdNotFoundException;
import com.cg.healthify.service.PaymentServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PaymentTestController {

	@Autowired
	private TestRestTemplate restTemplate;

	@MockBean
	private PaymentServiceImpl service;

	@LocalServerPort
	private int port;

	@Test
	public void testForAddingPayment() throws Exception {
		Payment payment11 = new Payment(18L, "9-PAY", 25000.0, 23000.0, "P09", "PAYTM", 8.0);

		// when(service.addPayment(null,payment1)).thenReturn(payment1);
		ResponseEntity<Payment> postResponse = restTemplate.postForEntity("http://localhost:" + port + "/payment/P09",
				payment11, Payment.class);
		// assertNotNull(postResponse);
		// assertEquals(postResponse,postResponse1);
		// assertNotNull(postResponse.getBody());
		assertThat(postResponse.getStatusCode(), is(HttpStatus.OK));
	}

	@Test
	public void findPaymentById() {

		Payment payment2 = new Payment(1L, "9-PAY", 25000.0, 23000.0, "P09", "PAYTM", 8.0);
		ResponseEntity<Payment> postResponse = restTemplate.postForEntity("http://localhost:" + port + "/payment",
				payment2, Payment.class);
		ResponseEntity<Payment> postResponse1 = restTemplate.getForEntity("http://localhost:" + port + "/payment/9-PAY",
				Payment.class);
		// assertEquals(postResponse,postResponse1);
		assertThat(postResponse1.getStatusCode(), is(HttpStatus.OK));

	}
	
	@Test
	public void testfindAllPayments() {
		Payment payment3 = new Payment(2L, "2-PAY", 25000.0, 23000.0, "P02", "PAYTM", 8.0);
		Payment payment4 = new Payment(3L, "3-PAY", 25000.0, 23000.0, "P03", "PAYTM", 8.0);

		List<Payment> pay = new ArrayList<>();
		pay.add(payment3);
		pay.add(payment4);
		when(service.getAllPayments()).thenReturn(pay);
		ResponseEntity<Payment> getResponse = restTemplate.postForEntity("http://localhost:" + port + "/payment/allpayments",
				pay, Payment.class);
		assertNotNull(getResponse);
		//assertThat(getResponse.getStatusCode(), is(HttpStatus.OK));


	}
	
	@Test
	public void deletePayment() {
		   ResponseEntity<Payment> postResponse1 = restTemplate.getForEntity("http://localhost:"+port + "/payment/1-PAY",Payment.class);
	       int n=postResponse1.getStatusCodeValue();
	     assertEquals(200,n);
	     restTemplate.delete("http://localhost:"+port + "/payment/1-PAY");
	}
	
	
	@Test
	public void DeletePaymentByIdException() throws PaymentIdNotFoundException {	
		ResponseEntity<Payment> postResponse = restTemplate.getForEntity("http://localhost:"+port  + "/payment/100-PAY",Payment.class);
		int actual=postResponse.getStatusCodeValue();
		assertEquals(400,actual);
	}

}
