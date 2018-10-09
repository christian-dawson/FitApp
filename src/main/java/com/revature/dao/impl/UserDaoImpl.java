package com.revature.dao.impl;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.dao.model.UserDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.User;

public class UserDaoImpl implements UserDaoModel {
	
	private Session session;

	public void create(User user) {
		session = SessionUtil.getSession();
		Transaction tran = session.beginTransaction();
		session.save(user);
		tran.commit();
		session.close();
	}

	public User read(String ID) {
		session = SessionUtil.getSession();
		User user = session.get(User.class, ID);
		session.close();
		return user;
	}

	public List<User> readAll() {
		Query query = session.createQuery("FROM USER");
		List<User> users = query.getResultList();
		session.close();
		return users;
	}

	public void update(User user) {
		session = SessionUtil.getSession();
		Transaction tran = session.beginTransaction();
		session.update(user);
		tran.commit();
		session.close();
	}
	
	public void delete(User user) {
		session = SessionUtil.getSession();
		Transaction tran = session.beginTransaction();
		session.delete(user);
		tran.commit();
		session.close();
	}
}
