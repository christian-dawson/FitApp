package com.revature.servicess.model;

import java.util.List;

import com.revature.pojos.Trainer;

public interface TrainerServiceModel {
	public List<Trainer> readAll();
	public Trainer read(int id);
	public void create(Trainer trainer);
	public void update(Trainer trainer);
}
