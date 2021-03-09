package com.cg.healthify.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PaymentIdNotFoundException extends RuntimeException{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PaymentIdNotFoundException() {
		super();
	}
	
	public PaymentIdNotFoundException(String errMsg) {
		super(errMsg);
	}
}
