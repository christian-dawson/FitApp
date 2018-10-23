package com.revature.servicess.model;

import java.util.List;

import com.revature.pojos.Trainee;

public interface TraineeServiceModel {
	public List<Trainee> readAll();
	public Trainee read(int id);
	public void create(Trainee trainee);
	public void update(Trainee trainee);
}
