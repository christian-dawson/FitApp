package com.revature.servicess.model;

import java.util.List;

import com.revature.pojos.User;

public interface UserServiceModel {
	public List<User> getAll();
	public User authenticate(User user);
	public void add(User user);
	public User get(int id);
	public void update(User user);
}
