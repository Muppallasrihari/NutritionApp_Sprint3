package com.cg.healthify.service;


import org.springframework.stereotype.Service;

import com.cg.healthify.beans.Exercise;


@Service
public interface ExerciseService {
	
	
	
	public Exercise saveOrUpdate(Exercise exercise);
		
	//Find by ID
	public Exercise findExerciseByExIdentifier(String exIdentifier) ;
		
	//Find ALL
	public Iterable<Exercise> getAllExercises();
		
	//Delete by exid
	public void deleteExerciseByExIdentifier(String exIdentifier) ;
		
	
	
}
	
	


