package com.cg.healthify.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DietPlanException extends RuntimeException{

public DietPlanException() {
	super();
}
public DietPlanException(String errMsg) {
	super(errMsg);
}
}
