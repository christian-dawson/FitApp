package com.revature.dao.impl;

import java.util.List;

import org.hibernate.Session;

import com.revature.dao.model.GoalDaoModel;
import com.revature.pojos.Goal;

public class GoalDaoImpl implements GoalDaoModel {

	@Override
	public void create(Goal goal) {
		// TODO Auto-generated method stub

	}

	@Override
	public Goal read(int ID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Goal> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Goal goal) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(Goal goal) {
		// TODO Auto-generated method stub
	}

	public void setSession(Session sess) {
		// TODO Auto-generated method stub
		
	}

}
