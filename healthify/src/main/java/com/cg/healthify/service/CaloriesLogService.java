package com.cg.healthify.service;

import org.springframework.stereotype.Service;

import com.cg.healthify.beans.CaloriesLog;

@Service
public interface CaloriesLogService {
	/**
	 * Add or update the CaloriesLog
	 * @param calorieslog
	 * @return
	 */
	CaloriesLog addCaloriesLog(CaloriesLog calorieslog);

	/**
	 * Find CaloriesLog by CaloriesLog Identifier
	 * @param caloriesLogIdentifier
	 * @return
	 */
	CaloriesLog findCaloriesLogByIdentifier(String caloriesLogIdentifier);

	/**
	 * Delete CaloriesLog by CaloriesLog Identifier
	 * @param caloriesLogIdentifier
	 * @return
	 */
	CaloriesLog deleteCaloriesLogByIdentifier(String caloriesLogIdentifier);
 
	/**
	 *  Find All CaloriesLog
	 * @return
	 */
	Iterable<CaloriesLog> showAllCaloriesLog();

}
