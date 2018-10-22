package com.revature.servicess.model;

import com.revature.pojos.Goal;

public interface GoalServiceModel {
	public void addGoal(Goal goal);
	public Goal getGoal(int goalId);
	public Goal getGoalFromUser(int userId);
}
