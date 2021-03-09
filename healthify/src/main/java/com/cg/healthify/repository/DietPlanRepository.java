package com.cg.healthify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.DietPlan;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {

	DietPlan findByFoodType(String foodType);
}
