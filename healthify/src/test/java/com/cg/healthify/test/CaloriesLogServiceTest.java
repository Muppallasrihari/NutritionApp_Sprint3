package com.cg.healthify.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.healthify.beans.CaloriesLog;
import com.cg.healthify.exceptions.CaloriesLogIdException;
import com.cg.healthify.repository.CaloriesLogRepository;
import com.cg.healthify.service.CaloriesLogService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CaloriesLogServiceTest {

	@Autowired
	CaloriesLogService caloriesLogService;
	
	@MockBean
	CaloriesLogRepository caloriesLogRepository;

	private LocalDateTime date;
	
	@Test
	public void addCaloriesTestLogShouldSaveOrUpdateCaloriesLog() {   //add caloriesLog test
		
		CaloriesLog caloriesLog = new CaloriesLog((long) 2, 11,"cl89",date,date);
		when(caloriesLogRepository.save(caloriesLog)).thenReturn(caloriesLog);
		assertEquals(caloriesLog,caloriesLogService.addCaloriesLog(caloriesLog));
	}
	
	@Test
	void testFindCaloriesLogByIdentifier() {
		BDDMockito.given(caloriesLogRepository.findByCaloriesLogIdentifier("cl65")).willReturn(new CaloriesLog((long)5,96,"cl65",date,date));
		CaloriesLog caloriesLog=caloriesLogRepository.findByCaloriesLogIdentifier("cl65");
		assertNotNull(caloriesLog);
		assertEquals(96,caloriesLog.getCalories());
		assertEquals("cl65",caloriesLog.getCaloriesLogIdentifier());
	}
	
	@Test
	public void getcaloriesLogTestShouldShowAllCaloriesLog() {
		when(caloriesLogRepository.findAll()).thenReturn(Stream.of(new CaloriesLog((long) 1, 11,"cl89",date,date)).collect(Collectors.toList()));
		assertEquals(1,((List<CaloriesLog>) caloriesLogService.showAllCaloriesLog()).size());
	}
	
	@Test
	public void testFindByCaloriesLogIdentifierThrowsCaloriesLogIdException() {
		BDDMockito.given(caloriesLogRepository.findByCaloriesLogIdentifier("cl99")).willThrow(new CaloriesLogIdException());
		assertThrows(CaloriesLogIdException.class,()->caloriesLogRepository.findByCaloriesLogIdentifier("cl99"));
	}
}
