package com.cg.healthify.exceptions;

public class WeightLogIdExceptionResponse {
	private String weightId;
	public WeightLogIdExceptionResponse(String weightId)
	{
		super();
		this.weightId = weightId;
	}
	public String getWeightId() {
		return weightId;
	}
	public void setWeightId(String weightId) {
		this.weightId = weightId;
	}
}
