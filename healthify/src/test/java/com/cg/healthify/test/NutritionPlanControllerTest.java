package com.cg.healthify.test;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import com.cg.healthify.beans.NutritionPlan;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class NutritionPlanControllerTest {

	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	private NutritionPlan nutritionPlanMock1;
	private LocalDate date = LocalDate.now();
	private LocalDate date1 = LocalDate.of(2020, 02, 1);

	@Test
	public void createNutritionPlanForValidInput() {
		nutritionPlanMock1 = new NutritionPlan(1L, "SILVER", "Silver Plan", "It is a 30 days plan", date, date1,
				10000.0);
		ResponseEntity<NutritionPlan> postResponse = restTemplate.postForEntity(getRootUrl() + "/nutritionplan",
				nutritionPlanMock1, NutritionPlan.class);
		assertNotNull(postResponse);

	}
	@Test
	public void findNutritionPlanForValidId() {
		
		nutritionPlanMock1 = new NutritionPlan(2L, "GOLD", "Gold Plan", "It is a 60 days plan", date, date1,
				20000.0);
		ResponseEntity<NutritionPlan> postResponse = restTemplate.postForEntity(getRootUrl()+"/nutritionplan",nutritionPlanMock1,
				NutritionPlan.class);
		ResponseEntity<NutritionPlan> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/nutritionplan/GOLD",
				NutritionPlan.class);
		assertEquals(postResponse,postResponse1);
	}

	@Test
	public void deleteNutritionPlanForValidId() {
		
		nutritionPlanMock1 = new NutritionPlan(1L, "SILVER", "Silver Plan", "It is a 30 days plan", date, date1,
				10000.0);
		ResponseEntity<NutritionPlan> postResponse1 = restTemplate.getForEntity(getRootUrl() + "/nutritionplan/SILVER",
				NutritionPlan.class);
		int n=postResponse1.getStatusCodeValue();
		assertEquals(200,n);
		restTemplate.delete(getRootUrl() + "/nutritionplan/SILVER");
	}
	
	

}
