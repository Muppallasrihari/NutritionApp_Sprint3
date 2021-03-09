package com.cg.healthify.exceptions;

public class PaymentIdNotFoundExceptionResponse {
	
	private String projectNotFound;

	public PaymentIdNotFoundExceptionResponse(String projectNotFound) {
		super();
		this.projectNotFound = projectNotFound;
	}

	public String getProjectNotFound() {
		return projectNotFound;
	}

	public void setProjectNotFound(String projectNotFound) {
		this.projectNotFound = projectNotFound;
	}
	
	

}
