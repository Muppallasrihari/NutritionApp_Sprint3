package com.cg.healthify.test;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
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

import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.healthify.beans.CaloriesLog;
import com.cg.healthify.exceptions.CaloriesLogIdException;
import com.cg.healthify.service.CaloriesLogServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CaloriesLogControllerTest {
	
	@Autowired
	private TestRestTemplate restTemplate;

	@MockBean
	private CaloriesLogServiceImpl caloriesLogServiceImpl;

	@LocalServerPort
	private int port;

	private LocalDateTime date;
	private CaloriesLog caloriesLogmock1;
	private CaloriesLog caloriesLogmock2;
	

	@Before
	public void setUpMockData()
	{
		caloriesLogmock1=new CaloriesLog((long)11,481,"cl67",date,date);
		caloriesLogmock2=new CaloriesLog((long)23,290,"cl78",date,date);
	}

	@Test
	public void addCaloriesLogTest()
	{
		when(caloriesLogServiceImpl.addCaloriesLog(caloriesLogmock1)).thenReturn(caloriesLogmock1);
		ResponseEntity<CaloriesLog> responseEntity =restTemplate.postForEntity("http://localhost:"+port+"/CaloriesLog",caloriesLogmock1,CaloriesLog.class);
		assertNotNull(responseEntity);
		assertNotNull(responseEntity.getBody());
	}
	
	@Test
	public void findCaloriesLogByIdentifierForTest() {

		when(caloriesLogServiceImpl.findCaloriesLogByIdentifier("cl94")).thenReturn(caloriesLogmock1);
		ResponseEntity<CaloriesLog> responseEntity=restTemplate.getForEntity("http://localhost:"+port+"/{caloriesLogIdentifier}",CaloriesLog.class,"cl94");
		assertNotNull(responseEntity.getBody());
		assertNotEquals(caloriesLogmock1,responseEntity.getBody());
		assertThat(responseEntity.getStatusCode());

	}
	
	@Test
	public void addCaloriesLogTestForInvalid()
	{

		when(caloriesLogServiceImpl.addCaloriesLog(caloriesLogmock2)).thenThrow(new CaloriesLogIdException("Id already exists"));
		ResponseEntity<CaloriesLog> responseEntity=restTemplate.postForEntity("http://localhost:"+port+"/caloriesLog",caloriesLogmock1,CaloriesLog.class);
		assertNotNull(responseEntity);
		assertNotNull(ResponseEntity.badRequest());
	}
	
	@Test
	public void findAllCaloriesLogTest()
	{
		List<CaloriesLog> caloriesLog=new ArrayList<>();
		caloriesLog.add(caloriesLogmock1);
		caloriesLog.add(caloriesLogmock2);
		when(caloriesLogServiceImpl.showAllCaloriesLog()).thenReturn(caloriesLog);
		ResponseEntity<CaloriesLog> responseEntity=restTemplate.postForEntity("http://localhost:"+port+"/all",caloriesLogmock1,CaloriesLog.class);
		assertNotNull(responseEntity);

	}

	
}
