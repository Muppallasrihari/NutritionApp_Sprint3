package com.cg.healthify.service;

import org.springframework.stereotype.Service;

import com.cg.healthify.beans.NutritionPlan;

@Service
public interface NutritionPlanService {
	public NutritionPlan addOrUpdate(NutritionPlan nutritionPlan);

	public Iterable<NutritionPlan> getAllNutritionPlans();

	public NutritionPlan getNutritionPlanById(String planId);

	public int deleteNutritionPlanById(String planId);
}
