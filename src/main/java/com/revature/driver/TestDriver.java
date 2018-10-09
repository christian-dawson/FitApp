package com.revature.driver;

import com.revature.dao.impl.UserDaoImpl;
import com.revature.dao.model.UserDaoModel;

public class TestDriver {
	public static void main(String[] args) {
		UserDaoModel userDB = new UserDaoImpl();
	}
}
