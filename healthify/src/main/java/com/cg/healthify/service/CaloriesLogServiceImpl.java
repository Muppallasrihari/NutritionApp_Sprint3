package com.cg.healthify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.CaloriesLog;
import com.cg.healthify.exceptions.CaloriesLogIdException;
import com.cg.healthify.repository.CaloriesLogRepository;


@Service
public class CaloriesLogServiceImpl implements CaloriesLogService{

	@Autowired
	private CaloriesLogRepository caloriesLogRepository;
	
	@Override
	public CaloriesLog addCaloriesLog(CaloriesLog calorieslog) {
		try {
			calorieslog.setCaloriesLogIdentifier(calorieslog.getCaloriesLogIdentifier().toUpperCase());
			return caloriesLogRepository.save(calorieslog);
			}catch(Exception e) {
				throw new CaloriesLogIdException("Id :"+calorieslog.getCaloriesLogIdentifier().toUpperCase()+" already exists");
			}
	}

	@Override
	public CaloriesLog findCaloriesLogByIdentifier(String caloriesLogIdentifier) {
		CaloriesLog calorieslog=caloriesLogRepository.findByCaloriesLogIdentifier(caloriesLogIdentifier.toUpperCase());
		if(calorieslog==null) {
			throw new CaloriesLogIdException("Id:"+caloriesLogIdentifier.toUpperCase()+" does not exist");
		}
		return calorieslog;
	}

	@Override
	public CaloriesLog deleteCaloriesLogByIdentifier(String caloriesLogIdentifier) {
		CaloriesLog calorieslog=caloriesLogRepository.findByCaloriesLogIdentifier(caloriesLogIdentifier.toUpperCase());
		if(calorieslog==null) {
			throw new CaloriesLogIdException("Cannot delete calories log with Id:"+caloriesLogIdentifier.toUpperCase()+" this log does not exist");
		}
		caloriesLogRepository.delete(calorieslog);
		 return calorieslog;
	}

	@Override
	public Iterable<CaloriesLog> showAllCaloriesLog() {
		return caloriesLogRepository.findAll();
	}

	
}
