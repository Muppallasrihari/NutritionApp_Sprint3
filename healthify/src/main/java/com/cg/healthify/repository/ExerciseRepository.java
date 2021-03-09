package com.cg.healthify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.healthify.beans.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {

	Exercise findByExIdentifier(String exIdentifier);

}
