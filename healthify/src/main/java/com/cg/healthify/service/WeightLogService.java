package com.cg.healthify.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.WeightLog;

@Service
public interface WeightLogService {

	public WeightLog addOrUpdateWeightLog(WeightLog weightLog);
	public Iterable<WeightLog> getAllWeightLog();
	public  WeightLog deleteWeightLogById(String weightId);
	public WeightLog getWeightLogById(String weightId);
	public WeightLog updateWeightLog(String weightId, WeightLog weightLog);
}
