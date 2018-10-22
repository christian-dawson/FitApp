package com.revature.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.UserAccountDaoModel;
import com.revature.pojos.UserAccount;
import com.revature.servicess.model.UserServiceModel;

@Service
public class UserServiceImpl implements UserServiceModel {
	
	@Autowired
	UserAccountDaoModel userDB;

	@Override
	public List<UserAccount> getAll() {
		return userDB.readAll();
	}

	@Override
	public UserAccount authenticate(UserAccount user) {
		List<UserAccount> users = userDB.readAll();
		for(UserAccount userInDatabase : users) {
			if(userInDatabase.getUsername().equals(user.getUsername())
					&& userInDatabase.getPassword().equals(user.getPassword())) {
				return userInDatabase;
			}
		}
		return null;
	}

	@Override
	public void add(UserAccount user) {
		userDB.create(user);
	}

	@Override
	public UserAccount get(int id) {
		return userDB.read(id);
	}

	@Override
	public void update(UserAccount user) {
		userDB.update(user);
	}
}
