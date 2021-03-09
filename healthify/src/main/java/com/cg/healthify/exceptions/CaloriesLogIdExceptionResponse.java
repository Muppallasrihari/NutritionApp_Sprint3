package com.cg.healthify.exceptions;

public class CaloriesLogIdExceptionResponse {
	
private String caloriesLogIdentifier;
	
	public CaloriesLogIdExceptionResponse(String caloriesLogIdentifier) {
		super();
		this.caloriesLogIdentifier=caloriesLogIdentifier;
	}
	
	public String getCaloriesLogIdentifier() {
		return caloriesLogIdentifier;
	}

	public void setCaloriesLogIdentifier(String caloriesLogIdentifier) {
		this.caloriesLogIdentifier = caloriesLogIdentifier;
	}
}
