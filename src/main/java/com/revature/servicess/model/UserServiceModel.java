package com.revature.servicess.model;

import java.util.List;

import com.revature.pojos.User;

public interface UserServiceModel {
	public List<User> getAll();
	public User authenticate(User user);
}
