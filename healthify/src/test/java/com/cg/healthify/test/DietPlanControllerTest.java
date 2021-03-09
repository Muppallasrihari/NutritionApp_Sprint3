package com.cg.healthify.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.http.ResponseEntity;

import com.cg.healthify.beans.DietPlan;
import com.cg.healthify.exceptions.DietPlanException;
import com.cg.healthify.service.DietPlanServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DietPlanControllerTest {

	@Autowired
	private TestRestTemplate restTemplate;
	
	@MockBean
	private DietPlanServiceImpl dietPlanServiceImpl;
	
	@LocalServerPort
	private int port;
	
	private DietPlan dietPlanMock1;
	private DietPlan dietPlanMock2;
	
	@Before
	public void setUpMockData() {
		dietPlanMock1 = new DietPlan((long)11, "veg", 1.1, 1.2, 1.3);
		dietPlanMock2 = new DietPlan((long)12, "veg", 2.1, 2.2, 2.3);
	}
	
	@Test
	public void addDietPlanTest() {
		when(dietPlanServiceImpl.saveDietPlan(dietPlanMock1)).thenReturn(dietPlanMock1);
		ResponseEntity<DietPlan> responseEntity = restTemplate.postForEntity("http://localhost:"+port+"/diet",dietPlanMock1, DietPlan.class);
		assertNotNull(responseEntity);
		assertNotNull(responseEntity.getBody());
	}
	
	@Test
	public void addDietPlanTestForInvalid(){
		when(dietPlanServiceImpl.saveDietPlan(dietPlanMock2)).thenThrow(new DietPlanException("Id already exists"));
		ResponseEntity<DietPlan> responseEntity = restTemplate.postForEntity("http://localhost:"+port+"/diet",dietPlanMock1, DietPlan.class);
		assertNotNull(responseEntity);
		assertNotNull(ResponseEntity.badRequest());
	}
	 
	@Test
	public void getDietPlanByFoodTypeForTest() {

		when(dietPlanServiceImpl.getDietPlanByFoodType("veg")).thenReturn(dietPlanMock1);
		ResponseEntity<DietPlan> responseEntity=restTemplate.getForEntity("http://localhost:"+port+"/{foodType}",DietPlan.class,"veg");
		assertNotNull(responseEntity.getBody());
		assertNotEquals(dietPlanMock1,responseEntity.getBody());
		assertThat(responseEntity.getStatusCode());
	}
	
	@Test
	public void getAllProjectsForTest()
	{
		List<DietPlan> dietPlan=new ArrayList<>();
		dietPlan.add(dietPlanMock1);
		dietPlan.add(dietPlanMock2);
		when(dietPlanServiceImpl.getAllDietDetails()).thenReturn(dietPlan);
		ResponseEntity<DietPlan> responseEntity=restTemplate.postForEntity("http://localhost:"+port+"/all",dietPlanMock1,DietPlan.class);
		assertNotNull(responseEntity);
	}
}
