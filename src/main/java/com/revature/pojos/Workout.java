package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="workout")
public class Workout {
	@Column(name="workout_id")
	private Integer workoutId;
	@Column(name="exercise_id")
	private Integer exerciseId;
	public Workout() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Workout(Integer workoutId, Integer exerciseId) {
		super();
		this.workoutId = workoutId;
		this.exerciseId = exerciseId;
	}
	public Integer getWorkoutId() {
		return workoutId;
	}
	public void setWorkoutId(Integer workoutId) {
		this.workoutId = workoutId;
	}
	public Integer getExerciseId() {
		return exerciseId;
	}
	public void setExerciseId(Integer exerciseId) {
		this.exerciseId = exerciseId;
	}
	@Override
	public String toString() {
		return "Workout [workoutId=" + workoutId + ", exerciseId=" + exerciseId + "]";
	}
	
}
