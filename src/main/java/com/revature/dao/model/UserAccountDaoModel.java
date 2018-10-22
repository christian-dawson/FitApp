package com.revature.dao.model;

import java.util.List;

import com.revature.pojos.UserAccount;

public interface UserAccountDaoModel {
	public void create(UserAccount user);
	public UserAccount read(int ID);
	public List<UserAccount> readAll();
	public void update(UserAccount user);
	public void delete(UserAccount user);
}
