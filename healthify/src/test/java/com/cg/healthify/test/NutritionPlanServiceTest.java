package com.cg.healthify.test;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.cg.healthify.beans.NutritionPlan;
import com.cg.healthify.repository.NutritionPlanRepository;
import com.cg.healthify.service.NutritionPlanServiceImpl;

@SpringBootTest
@RunWith(SpringRunner.class)
public class NutritionPlanServiceTest {
	@Autowired
	NutritionPlanServiceImpl nutritionPlanServiceImpl;

	@MockBean
	NutritionPlanRepository nutritionPlanRepository;

	

	@Test
	public void getNutritionPlanByIdForValidPlanId() {
		NutritionPlan nutritionPlan = new NutritionPlan();
		nutritionPlan.setPlanId("SILVER");
		nutritionPlan.setDescription("It is a 30 days plan");
		nutritionPlan.setPrice(10000);
		when(nutritionPlanRepository.findByPlanId("silver".toUpperCase())).thenReturn(nutritionPlan);
		NutritionPlan plan = nutritionPlanServiceImpl.getNutritionPlanById("silver".toUpperCase());
		assertEquals( nutritionPlan,plan);

	}

	@Test
	public void getNutritionPlanByIdForInvalidPlanId(){
		NutritionPlan nutritionPlan = new NutritionPlan();
		nutritionPlan.setPlanId("SILVER");
		nutritionPlan.setDescription("It is a 30 days plan");
		nutritionPlan.setPrice(10000);

		when(nutritionPlanRepository.findByPlanId("gold")).thenReturn(nutritionPlan);
		NutritionPlan plan = nutritionPlanServiceImpl.getNutritionPlanById("gold");
		assertEquals(nutritionPlan,plan);

	}
	
	@Test
	public void createNutritionPlanForValidInput() {
		NutritionPlan nutritionPlan = new NutritionPlan();
		nutritionPlan.setPlanId("SILVER");
		nutritionPlan.setDescription("It is a 30 days plan");
		nutritionPlan.setPrice(10000);
		when(nutritionPlanRepository.save(nutritionPlan)).thenReturn(nutritionPlan);
		assertEquals( nutritionPlan,nutritionPlanServiceImpl.addOrUpdate(nutritionPlan));

	}
	

	}
