package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.FitnessPlan;
import com.revature.pojos.User;

public interface FitnessPlanDaoModel {
	public void create(FitnessPlan fp);
	public FitnessPlan read(int ID);
	public List<FitnessPlan> readAll();
	public void update(FitnessPlan fp);
	public void delete(FitnessPlan fp);
}
