package com.cg.healthify.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
/**
 * Create custom exception for invalid id exception.
 * @author vinotraj
 *
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class WeightLogIdException extends RuntimeException{



	public WeightLogIdException()
	{
		super();
	}
	public WeightLogIdException(String msg)
	{
		super(msg);
	}
}
