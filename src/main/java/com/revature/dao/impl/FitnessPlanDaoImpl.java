package com.revature.dao.impl;

import java.util.List;

import org.hibernate.Session;

import com.revature.dao.model.FitnessPlanDaoModel;
import com.revature.pojos.FitnessPlan;

public class FitnessPlanDaoImpl implements FitnessPlanDaoModel {

	@Override
	public void create(FitnessPlan fp) {
		// TODO Auto-generated method stub
	}

	@Override
	public FitnessPlan read(int ID) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<FitnessPlan> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(FitnessPlan fp) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(FitnessPlan fp) {
		// TODO Auto-generated method stub

	}

	public void setSession(Session sess) {
		
	}

}
