package com.revature.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.GoalDaoModel;
import com.revature.dao.model.UserDaoModel;
import com.revature.pojos.Goal;
import com.revature.servicess.model.GoalServiceModel;

@Service
public class GoalServiceImpl implements GoalServiceModel {
	
	@Autowired
	GoalDaoModel goalDB;
	
	@Autowired
	UserDaoModel userDB;

	
	@Override
	public void addGoal(Goal goal) {
		goalDB.create(goal);
	}

	@Override
	public Goal getGoal(int userId) {
		return goalDB.read(userDB.read(userId).getGoal().getGoalId());
	}

}
