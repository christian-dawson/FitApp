package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.User;
import com.revature.pojos.Workout;

public interface WorkoutDaoModel {
	public void create(Workout workout);
	public Workout read(int ID);
	public List<Workout> readAll();
	public void update(Workout workout);
	public void delete(Workout workout);
}
