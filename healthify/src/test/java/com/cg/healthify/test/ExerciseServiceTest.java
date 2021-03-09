package com.cg.healthify.test;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Collection;


import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.healthify.beans.Exercise;
import com.cg.healthify.exceptions.ExerciseIdException;
import com.cg.healthify.repository.ExerciseRepository;
import com.cg.healthify.service.ExerciseService;


@RunWith(SpringRunner.class)
@SpringBootTest
class ExerciseServiceTest {
	
	@Autowired
	ExerciseService exerciseService;
	
	@MockBean
	ExerciseRepository exerciseRepository;
	
	private Collection<String> exPlans = null;
	
	private LocalDate date;
	
	@Test
	public void addExerciseShouldSaveOrUpdateExerciseTest() {
		Exercise exercise = new Exercise(1, "CARDIO1", "Cardio", 3, 12, exPlans, date, date);
		when(exerciseRepository.save(exercise)).thenReturn(exercise);
		assertEquals(exercise,exerciseService.saveOrUpdate(exercise));
	}
	
	@Test
	public void getExerciseByExIdentifierTest() {
		BDDMockito.given(exerciseRepository.findByExIdentifier("CARDIO1")).willReturn(new Exercise(1, "CARDIO1", "Cardio", 3, 12, exPlans, date, date));
		Exercise exercise = exerciseRepository.findByExIdentifier("CARDIO1");
		assertNotNull(exercise);
		assertEquals("Cardio", exercise.getExType());
		assertEquals("CARDIO1", exercise.getExIdentifier());
	}
	
	@Test
	public void getExerciseByExIdentifierForInvalidExIdentifierThrowsExceptionTest() {
		BDDMockito.given(exerciseRepository.findByExIdentifier("CARDIO2")).willThrow(new ExerciseIdException());
		assertThrows(ExerciseIdException.class, ()->exerciseRepository.findByExIdentifier("CARDIO2"));
	}

	

}
