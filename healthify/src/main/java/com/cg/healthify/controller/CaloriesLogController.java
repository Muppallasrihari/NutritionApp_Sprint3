package com.cg.healthify.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.healthify.beans.CaloriesLog;
import com.cg.healthify.service.CaloriesLogService;
import com.cg.healthify.service.MapValidationErrorService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/caloriesLog")
@CrossOrigin
public class CaloriesLogController {

	@Autowired
	CaloriesLogService caloriesLogService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
	@ApiOperation(value = "Add CaloriesLog ")
	@PostMapping("")
	public ResponseEntity<?> createNewCaloriesLog(@Valid @RequestBody CaloriesLog calorieslog,BindingResult result) {
		ResponseEntity<?>errorMap=mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null)
			return errorMap;
		CaloriesLog cal = caloriesLogService.addCaloriesLog(calorieslog);
		return new ResponseEntity<CaloriesLog>(cal, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Get CaloriesLog by Id")
	@GetMapping("/{caloriesLogIdentifier}")
	public ResponseEntity<?> getCaloriesLogById(@PathVariable String caloriesLogIdentifier){
		CaloriesLog calorieslog =caloriesLogService.findCaloriesLogByIdentifier(caloriesLogIdentifier);
		return new ResponseEntity<CaloriesLog>(calorieslog, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Show all CaloriesLog")
	@GetMapping("/all")
	public Iterable<CaloriesLog> getAllCaloriesLog(){
		return caloriesLogService.showAllCaloriesLog();
	}
	
	@ApiOperation(value = "Delete CaloriesLog by Id")
	@DeleteMapping("/{caloriesLogIdentifier}")
	public ResponseEntity<?> deleteCaloriesLog(@PathVariable String caloriesLogIdentifier){
		caloriesLogService.deleteCaloriesLogByIdentifier(caloriesLogIdentifier);
		return new ResponseEntity<String>("Calories Log  with Id:"+caloriesLogIdentifier.toUpperCase()+ " deleted successfully",HttpStatus.OK);
	}
}

