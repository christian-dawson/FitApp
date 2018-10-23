package com.revature.servicess.model;

import java.util.List;

import com.revature.pojos.UserAccount;

public interface UserServiceModel {
	public List<UserAccount> getAll();
	public UserAccount authenticate(UserAccount user);
	public void add(UserAccount user);
	public UserAccount get(int id);
	public void update(UserAccount user);
}
