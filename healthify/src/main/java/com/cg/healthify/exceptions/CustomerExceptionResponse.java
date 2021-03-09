package com.cg.healthify.exceptions;

public class CustomerExceptionResponse {

private String customerName;

public CustomerExceptionResponse(String customerName) {
	super();
	this.customerName=customerName;
}
public String getCustomerName() {
	return customerName;
}
public void setCustomerName(String customerName) {
	this.customerName=customerName;
}
}
