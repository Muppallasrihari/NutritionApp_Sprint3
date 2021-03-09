package com.cg.healthify.exceptions;

public class DietPlanExceptionResponse {

private String dietPlan;

public String getDietPlan() {
	return dietPlan;
}

public DietPlanExceptionResponse(String dietPlan) {
	super();
	this.dietPlan = dietPlan;
}

public void setDietPlan(String dietPlan) {
	this.dietPlan = dietPlan;
}	
}
