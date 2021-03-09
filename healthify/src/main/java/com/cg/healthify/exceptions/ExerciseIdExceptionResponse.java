package com.cg.healthify.exceptions;

public class ExerciseIdExceptionResponse {
	
	private String exIdentifier;

	public ExerciseIdExceptionResponse(String exIdentifier) {
		super();
		this.exIdentifier = exIdentifier;
	}

	public String getExIdentifier() {
		return exIdentifier;
	}

	public void setExIdentifier(String exIdentifier) {
		this.exIdentifier = exIdentifier;
	}
	
	

}
