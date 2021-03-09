package com.cg.healthify.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NutritionIdException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public NutritionIdException() {
		super();
	}
	
	public NutritionIdException(String errMsg) {
		super(errMsg);
	}

}
