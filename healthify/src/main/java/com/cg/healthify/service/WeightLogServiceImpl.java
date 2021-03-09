package com.cg.healthify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.WeightLog;
import com.cg.healthify.exceptions.WeightLogIdException;
import com.cg.healthify.repository.WeightLogRepository;

/**
 * @author VINOTH
 *
 */
@Service
public class WeightLogServiceImpl implements WeightLogService{

	@Autowired
	private WeightLogRepository weightLogRepository;


	/**
	 * Add all weightLog details
	 * @param weightLog
	 * @return
	 * 
	 */
	public WeightLog addOrUpdateWeightLog(WeightLog weightLog)
	{
		try
		{
			weightLog.setWeightId(weightLog.getWeightId().toUpperCase());
			
			return weightLogRepository.save(weightLog);
		}
		catch(Exception e)
		{
			throw new WeightLogIdException("WeightLog Id : "+weightLog.getWeightId().toUpperCase()+" is already exists");
		}


	}

	/**
	 * findAll method
	 * Get all weightLog
	 * @return
	 */
	public Iterable<WeightLog> getAllWeightLog() {

		return weightLogRepository.findAll();


	}

	/**
	 * Delete by weightID
	 * @param weightId
	 */
	public  WeightLog deleteWeightLogById(String weightId) {

		WeightLog weightLog=weightLogRepository.findByWeightId(weightId.toUpperCase());
		if(weightLog==null)
		{
			throw new WeightLogIdException(weightId+" is not valid id. Please give correct Id.");
		}
		weightLogRepository.delete(weightLog);
		return weightLog;

	}

	/**
	 * @param weightId
	 * get weightLog details by using weightId
	 * @return
	 */
	public WeightLog getWeightLogById(String weightId) {

		WeightLog weightLog= weightLogRepository.findByWeightId(weightId.toUpperCase());
		if(weightLog==null)
		{
			throw new WeightLogIdException(weightId+" is not a valid id.Please give correct Id.");
		}
		return weightLog;
	}

	/**
	 * 
	 * @param weightId
	 * @param weightLog
	 * update weigthLog details by using weightLog id.
	 * @return
	 */
	public WeightLog updateWeightLog(String weightId, WeightLog weightLog) {
		WeightLog weightLog1=weightLogRepository.findByWeightId(weightId.toUpperCase());
		if(weightLog1==null)
		{
			throw new WeightLogIdException(weightId+" is not valid id. Please give correct Id.");
		}
		return weightLogRepository.save(weightLog);
	}



}
