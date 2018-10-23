package com.revature.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.GoalDaoModel;
import com.revature.dao.model.TraineeDaoModel;
import com.revature.dao.model.UserAccountDaoModel;
import com.revature.pojos.Goal;
import com.revature.servicess.model.GoalServiceModel;

@Service
public class GoalServiceImpl implements GoalServiceModel {
	
	@Autowired
	GoalDaoModel goalDB;
	
	@Autowired
	UserAccountDaoModel userDB;
	
	@Autowired
	TraineeDaoModel traineeDB;

	
	@Override
	public void addGoal(Goal goal) {
		goalDB.create(goal);
	}

	@Override
	public Goal getGoal(int goalId) {
		return goalDB.read (goalId);
	}

	@Override
	public void updateGoal(Goal goal) {
		goalDB.update(goal);		
	}

}
