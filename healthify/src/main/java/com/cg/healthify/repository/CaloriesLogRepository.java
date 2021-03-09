package com.cg.healthify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.CaloriesLog;


public interface CaloriesLogRepository extends JpaRepository<CaloriesLog,Long> {

	/**
	 * To find CaloriesLog by CaloriesLog Identifier
	 * @param caloriesLogIdentifier
	 * @return
	 */
	CaloriesLog findByCaloriesLogIdentifier(String caloriesLogIdentifier);
}
