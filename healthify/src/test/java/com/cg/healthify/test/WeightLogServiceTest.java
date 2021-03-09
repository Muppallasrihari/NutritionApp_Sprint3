package com.cg.healthify.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.healthify.beans.WeightLog;
import com.cg.healthify.exceptions.WeightLogIdException;
import com.cg.healthify.repository.WeightLogRepository;

import com.cg.healthify.service.WeightLogServiceImpl;


@SpringBootTest
public class WeightLogServiceTest {

	@MockBean
	WeightLogRepository weightLogRepository;
	@Autowired
	WeightLogServiceImpl weightLogService;

	
	@BeforeEach
	public void setUp()
	{
		MockitoAnnotations.initMocks(this);
	}

	WeightLog weightLog,weightLogmock1,weightLogmock2;


	@Test
	public void addOrUpdateWeightLogMethod()
	{
		weightLog=new WeightLog();
		weightLog.setWeight("12");
		weightLog.setWeightId("1");
		when(weightLogRepository.save(weightLog)).thenReturn(weightLog);
		WeightLog weightLog1=weightLogService.addOrUpdateWeightLog(weightLog);
		assertEquals(weightLog.getWeight(),weightLog1.getWeight());
	}



	@Test
	public void addOrupdateWeightLogWithDuplicate()
	{

		weightLog=new WeightLog((long)3,"1","178",null,null);
		when(weightLogRepository.save(weightLog)).thenThrow(new WeightLogIdException("weightLog Id exists"));
		assertThrows(WeightLogIdException.class, ()->weightLogService.addOrUpdateWeightLog(weightLog));
	}






	@Test
	public void findAllWeigtLog()
	{
		weightLogmock1=new WeightLog((long)2,"7","1",null,null);
		weightLogmock2=new WeightLog((long)3,"78","178",null,null);
		List<WeightLog> weightLog=new ArrayList<WeightLog>();
		weightLog.add(weightLogmock1);
		weightLog.add(weightLogmock2);
		when(weightLogRepository.findAll()).thenReturn(weightLog);
		assertEquals(weightLog.size(),2);
	}



	@Test
	public void findAllWeightLogforNoSuchWeightLogException()
	{
		when(weightLogRepository.findAll()).thenThrow(new WeightLogIdException("WeightLog data is empty"));
		assertThrows(WeightLogIdException.class, ()->weightLogService.getAllWeightLog());
	}



	@Test
	public void findWeightLogById()
	{
		weightLog=new WeightLog((long)3,"78","78",null,null);
		when(weightLogRepository.findByWeightId("90")).thenThrow(new WeightLogIdException("WeightID not found"));
		assertThrows(WeightLogIdException.class,()->weightLogService.getWeightLogById("123"));
	}


	@Test
	public void deleteWeightLogByUsingId()
	{
		weightLogmock1=new WeightLog((long)2,"7","1",null,null);
		weightLogRepository.deleteById(weightLogmock1.getId());
		assertNotNull(weightLogmock1);


	}

}
