package com.revature.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.dao.impl.UserDaoImpl;
import com.revature.dao.model.UserDaoModel;
import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Service
public class UserServiceImpl implements UserServiceModel {
	
	UserDaoModel userDB;
	
	public UserServiceImpl() {
		userDB = new UserDaoImpl();
	}

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

}
