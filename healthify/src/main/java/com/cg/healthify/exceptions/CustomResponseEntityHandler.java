package com.cg.healthify.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class CustomResponseEntityHandler extends ResponseEntityExceptionHandler {


	/***
	 * -----------------------------------Customer-Exception-Part---------------------------
	 */
	@ExceptionHandler
	public ResponseEntity<Object> handleCustomerNameException(CustomerException ex, WebRequest request) {
		CustomerExceptionResponse customerExceptionResponse = new CustomerExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(customerExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * ---------------------------------Nutrition-Exception-Part------------------------------
	 **/
	@ExceptionHandler
	public ResponseEntity<Object> handleNutritionIdException(NutritionIdException ex, WebRequest request) {
		NutritionIdExceptionResponse nutritionIdExceptionResponse = new NutritionIdExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(nutritionIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * -----------------------------------------DietPlan-Exception-Part----------------------------------------
	 **/
	@ExceptionHandler
	public ResponseEntity<Object> handleDietPlanException(DietPlanException ex, WebRequest request) {
		DietPlanExceptionResponse dietPlanIdExceptionResponse = new DietPlanExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(dietPlanIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * ------------------------------Payment-Exception-Part------------------------------------
	 **/

	@ExceptionHandler
	public ResponseEntity<Object> handlePaymentIdNotFoundException(PaymentIdNotFoundException ex, WebRequest request) {
		PaymentIdNotFoundExceptionResponse paymentIdNotFoundExceptionResponse = new PaymentIdNotFoundExceptionResponse(
				ex.getMessage());
		return new ResponseEntity<Object>(paymentIdNotFoundExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * --------------------------------CaloriesLog-Exception-Part----------------------------------
	 **/

	@ExceptionHandler
	public ResponseEntity<Object> handleCaloriesLogIdException(CaloriesLogIdException ex, WebRequest request) {
		CaloriesLogIdExceptionResponse caloriesLogIdExceptionResponse = new CaloriesLogIdExceptionResponse(
				ex.getMessage());
		return new ResponseEntity<Object>(caloriesLogIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * --------------------------------WeightLog-Exception-Part----------------------------------
	 **/

	@ExceptionHandler
	public ResponseEntity<Object> handleWeightLogIdException(WeightLogIdException ex, WebRequest request) {
		WeightLogIdExceptionResponse weightLogIdExceptionResponse = new WeightLogIdExceptionResponse(ex.getMessage());
		return new ResponseEntity<Object>(weightLogIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}

	/**
	 * --------------------------------Exercise-Exception-Part----------------------------------
	 **/
	@ExceptionHandler
	public ResponseEntity<Object> handleExerciseIdException(ExerciseIdException exIdException, WebRequest request) {
		ExerciseIdExceptionResponse exerciseIdExceptionResponse = new ExerciseIdExceptionResponse(
				exIdException.getMessage());
		return new ResponseEntity<Object>(exerciseIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}

}
