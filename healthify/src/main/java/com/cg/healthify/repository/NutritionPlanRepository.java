package com.cg.healthify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.NutritionPlan;

public interface NutritionPlanRepository extends JpaRepository<NutritionPlan, Integer> {

	NutritionPlan findByPlanId(String planId);

}
