package com.cg.healthify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.healthify.beans.Exercise;
import com.cg.healthify.exceptions.ExerciseIdException;
import com.cg.healthify.repository.ExerciseRepository;

@Service
public class ExerciseServiceImpl implements ExerciseService {
	
	@Autowired
	private ExerciseRepository exerciseRepository ;
	
	@Override
	public Exercise saveOrUpdate(Exercise exercise) {
		try {
			exercise.setExIdentifier(exercise.getExIdentifier().toUpperCase());
			return exerciseRepository.save(exercise);
		}
		catch(Exception e) {
			throw new ExerciseIdException("Exercise Identifier "+exercise.getExIdentifier().toUpperCase()+" already exists");
		}
	}
	//Find by ID
	@Override
	public Exercise findExerciseByExIdentifier(String exIdentifier) {
		Exercise exercise = exerciseRepository.findByExIdentifier(exIdentifier.toUpperCase());
		if(exercise == null) {
			throw new ExerciseIdException("Exercise ID: "+exIdentifier.toUpperCase()+" does not exist"); 
		}
		return exercise;
	}
	
	//Find ALL
	@Override
	public Iterable<Exercise> getAllExercises(){
		return exerciseRepository.findAll();
	}
	
	//Delete by exid
	@Override
	public void deleteExerciseByExIdentifier(String exIdentifier) {
		Exercise exercise = exerciseRepository.findByExIdentifier(exIdentifier.toUpperCase());
		if (exercise == null) {
			throw new ExerciseIdException("Cannot delete "+exIdentifier.toUpperCase()+" does not exist");
		}
		exerciseRepository.delete(exercise);
	}
	

}
