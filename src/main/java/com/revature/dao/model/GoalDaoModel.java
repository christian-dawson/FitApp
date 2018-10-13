package com.revature.dao.model;

import java.util.List;
import com.revature.pojos.Goal;

public interface GoalDaoModel {
	public void create(Goal goal);
	public Goal read(int ID);
	public List<Goal> readAll();
	public void update(Goal goal);
	public void delete(Goal goal);
}
