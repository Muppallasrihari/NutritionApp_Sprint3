package com.cg.healthify.test;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import org.springframework.http.ResponseEntity;
import com.cg.healthify.beans.WeightLog;
import com.cg.healthify.exceptions.WeightLogIdException;
import com.cg.healthify.service.WeightLogServiceImpl;




@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WeightLogControllerTest {
	@Autowired
	private TestRestTemplate restTemplate;

	@MockBean
	private WeightLogServiceImpl weightLogServiceImpl;

	@LocalServerPort
	private int port;

	private WeightLog weightLogmock1;
	private WeightLog weightLogmock2;
	private LocalDateTime date;

	@BeforeEach
	public void setUpMockData()
	{
		weightLogmock1=new WeightLog((long)1,"1","67",date,date);
		weightLogmock2=new WeightLog((long)3,"2","78",date,date);
	}

	@Test
	public void createWeightLogTestForValidCreate()
	{
		when(weightLogServiceImpl.addOrUpdateWeightLog(weightLogmock1)).thenReturn(weightLogmock1);
		ResponseEntity<WeightLog> postResponse=restTemplate.postForEntity("http://localhost:"+port+"//addOrUpdateWeightLog",weightLogmock1,WeightLog.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void createWeightLogTestForInvalid()
	{

		when(weightLogServiceImpl.addOrUpdateWeightLog(weightLogmock2)).thenThrow(new WeightLogIdException("Id already exists"));
		ResponseEntity<WeightLog> postResponse=restTemplate.postForEntity("http://localhost:"+port+"//addOrUpdateWeightLog",weightLogmock1,WeightLog.class);
		assertNotNull(postResponse);
		assertNotNull(ResponseEntity.badRequest());
	}
	
	@Test
	public void testfindAllWeightLog()
	{
		List<WeightLog> weightLog=new ArrayList<>();
		weightLog.add(weightLogmock1);
		weightLog.add(weightLogmock2);
		when(weightLogServiceImpl.getAllWeightLog()).thenReturn(weightLog);
		ResponseEntity<WeightLog> getResponse=restTemplate.postForEntity("http://localhost:"+port+"/all",weightLogmock1,WeightLog.class);
		assertNotNull(getResponse);

	}

	@Test
	public void testFindWeightLogByWeightLogIdForValidWeightLog() {

		when(weightLogServiceImpl.getWeightLogById("67")).thenReturn(weightLogmock1);
		ResponseEntity<WeightLog> getResponse=restTemplate.getForEntity("http://localhost:"+port+"/{weightId}",WeightLog.class,"68");
		assertNotNull(getResponse.getBody());
		assertNotEquals(weightLogmock1,getResponse.getBody());
		assertThat(getResponse.getStatusCode());

	}
}
