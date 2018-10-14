package com.revature.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.model.UserDaoModel;
import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Service
public class UserServiceImpl implements UserServiceModel {
	
	@Autowired
	UserDaoModel userDB;

	@Override
	public List<User> getAll() {
		return userDB.readAll();
	}

	@Override
	public User authenticate(User user) {
		List<User> users = userDB.readAll();
		for(User userInDatabase : users) {
			if(userInDatabase.getUsername().equals(user.getUsername())
					&& userInDatabase.getPassword().equals(user.getPassword())) {
				return userInDatabase;
			}
		}
		return null;
	}

	@Override
	public void add(User user) {
		userDB.create(user);
	}

	@Override
	public User get(int id) {
		return userDB.read(id);
	}

	@Override
	public void update(User user) {
		userDB.update(user);
	}
}