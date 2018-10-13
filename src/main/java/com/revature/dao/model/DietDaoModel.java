package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.Diet;
import com.revature.pojos.User;

public interface DietDaoModel {
	public void create(Diet diet);
	public Diet read(int ID);
	public List<Diet> readAll();
	public void update(Diet diet);
	public void delete(Diet diet);
}
