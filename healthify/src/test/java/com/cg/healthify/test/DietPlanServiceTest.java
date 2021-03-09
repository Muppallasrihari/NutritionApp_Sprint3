package com.cg.healthify.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

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

import com.cg.healthify.beans.DietPlan;
import com.cg.healthify.exceptions.DietPlanException;
import com.cg.healthify.repository.DietPlanRepository;
import com.cg.healthify.service.DietPlanService;

@SpringBootTest
@RunWith(SpringRunner.class)
public class DietPlanServiceTest {

	@Autowired
	DietPlanService dietPlanService;
	
	@MockBean
	DietPlanRepository dietPlanRepository;

	@Test
	public void addDietPlanTestShouldSaveOrUpdateDietPlan() {
		
		DietPlan dietPlan = new DietPlan((long)2, "veg", 1.1, 1.2, 1.3);
		when(dietPlanRepository.save(dietPlan)).thenReturn(dietPlan);
		assertEquals(dietPlan, dietPlanService.saveDietPlan(dietPlan));
	}
	
	@Test
	public void getDietPlanTestShouldShowDietPlan() {
		when(dietPlanRepository.findAll()).thenReturn(Stream.of(new DietPlan((long)1, "veg", 1.1, 1.2, 1.3)).collect(Collectors.toList()));
		assertEquals(1,((List<DietPlan>) dietPlanService.getAllDietDetails()).size());	
	}
	
	@Test
	void testGetDietPlanByFoodType() {
		BDDMockito.given(dietPlanRepository.findByFoodType("veg")).willReturn(new DietPlan((long)5, "veg", 1.1, 1.2, 1.3));
		DietPlan dietPlan = dietPlanRepository.findByFoodType("veg");
		assertNotNull(dietPlan);
		assertEquals(1.1, dietPlan.getFatRatio());
		assertEquals("veg", dietPlan.getFoodType());
	}
	
	@Test
	public void testGetDietPlanByFoodTypeThrowsDietPlanException() {
		BDDMockito.given(dietPlanRepository.findByFoodType("veg")).willThrow(new DietPlanException());
		assertThrows(DietPlanException.class,()->dietPlanRepository.findByFoodType("veg"));
	}
	
}
