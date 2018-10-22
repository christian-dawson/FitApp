package com.revature.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.TraineeDaoModel;
import com.revature.pojos.Trainee;
import com.revature.servicess.model.TraineeServiceModel;

@Service
public class TraineeServiceImpl implements TraineeServiceModel {

	@Autowired
	TraineeDaoModel traineeDB;
	
	@Override
	public Trainee read(int id) {
		return traineeDB.read(id);
	}

	@Override
	public List<Trainee> readAll() {
		return traineeDB.readAll();
	}

	@Override
	public void create(Trainee trainee) {
		traineeDB.create(trainee);
	}

	@Override
	public void update(Trainee trainee) {
		traineeDB.update(trainee);
	}
}
