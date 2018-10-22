package com.revature.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.TrainerDaoModel;
import com.revature.pojos.Trainer;
import com.revature.servicess.model.TrainerServiceModel;

@Service
public class TrainerServiceImpl implements TrainerServiceModel {

	@Autowired
	TrainerDaoModel trainerDB;
	
	@Override
	public List<Trainer> readAll() {
		return trainerDB.readAll();
	}

	@Override
	public Trainer read(int id) {
		return trainerDB.read(id);
	}

	@Override
	public void create(Trainer trainer) {
		trainerDB.create(trainer);
	}
	
	@Override
	public void update(Trainer trainer) {
		trainerDB.update(trainer);
	}

}
