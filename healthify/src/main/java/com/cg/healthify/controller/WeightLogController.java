package com.cg.healthify.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.healthify.beans.WeightLog;
import com.cg.healthify.service.MapValidationErrorService;
import com.cg.healthify.service.WeightLogService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/weightLog")
@CrossOrigin
public class WeightLogController {

    @Autowired
	private WeightLogService weightLogService;
	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	/**
	 * By adding details in weightLog table
	 * @param weightLog
	 * @param result
	 * @return
	 */
	@ApiOperation(value="Add WeightLog details")
	@PostMapping("")
	public ResponseEntity<?> addOrUpdateWeightLog(@Valid @RequestBody WeightLog weightLog,BindingResult result)
	{
		ResponseEntity<?> errorMap= mapValidationErrorService.mapValidationError(result);
		if(errorMap!=null)
		{
			return errorMap;
		}
		weightLog=weightLogService.addOrUpdateWeightLog(weightLog);

		return new ResponseEntity<WeightLog>(weightLog, HttpStatus.OK);

	}

	/**
	 * Getting all details from weightLog table
	 * @return
	 */
	@ApiOperation(value="Getting All WeightLog Details")
	@GetMapping("/all")
	public Iterable<WeightLog> getAllWeightLogDetails()
	{
		return weightLogService.getAllWeightLog();
	}


	/**
	 * Delete weightLog details by using weightLog id.
	 * @param weightId
	 * @return
	 */
	@ApiOperation(value="Delete WeightLog Details by using WeightId")
	@DeleteMapping("/{weightId}")
	public ResponseEntity<?> deleteWeightLogById(@PathVariable String weightId)
	{
		weightLogService.deleteWeightLogById(weightId);
		return new ResponseEntity<String>("weightLog with id : "+weightId.toUpperCase()+" deleted successfully.",HttpStatus.OK);
	}

	/**
	 * Getting weightLog details by using weightLog id.
	 * @param weightId
	 * @return
	 */
	@ApiOperation(value="Getting WeightLog Details by using WeightId")
	@GetMapping("/{weightId}")
	public ResponseEntity<?> getWeightLogById(@PathVariable String weightId)
	{
		return new ResponseEntity<>(weightLogService.getWeightLogById(weightId.toUpperCase()), HttpStatus.OK);
	}


	/**
	 * update weightLog details in weightLog table by using weightLog id.
	 * @param weightLog
	 * @param weightId
	 * @return
	 */
	@ApiOperation(value="Update WeightLog Details by using weightId")
	@PutMapping("/{weightId}")
	public WeightLog updateWeightLog(@RequestBody WeightLog weightLog,@PathVariable String weightId)
	{
		return weightLogService.updateWeightLog(weightId.toUpperCase(), weightLog);
	}
}
