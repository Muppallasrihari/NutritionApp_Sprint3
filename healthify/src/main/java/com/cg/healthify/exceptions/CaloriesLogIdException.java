package com.cg.healthify.exceptions;

public class CaloriesLogIdException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CaloriesLogIdException() {
		super();
	}
	
	public CaloriesLogIdException(String errMsg) {
		super(errMsg);
	}
}