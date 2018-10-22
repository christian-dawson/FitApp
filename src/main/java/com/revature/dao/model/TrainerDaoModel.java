package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.Trainer;

public interface TrainerDaoModel {
	public void create(Trainer user);
	public Trainer read(int ID);
	public List<Trainer> readAll();
	public void update(Trainer user);
	public void delete(Trainer user);
}
