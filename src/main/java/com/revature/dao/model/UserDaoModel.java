package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.User;

public interface UserDaoModel {
	public void create(User user);
	public User read(int ID);
	public List<User> readAll();
	public void update(User user);
	public void delete(User user);
}
