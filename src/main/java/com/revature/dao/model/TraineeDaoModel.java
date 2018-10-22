package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.Trainee;

public interface TraineeDaoModel {
	public void create(Trainee trainee);
	public Trainee read(int ID);
	public List<Trainee> readAll();
	public void update(Trainee trainee);
	public void delete(Trainee trainee);
}
