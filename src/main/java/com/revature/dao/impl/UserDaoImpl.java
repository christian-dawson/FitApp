package com.revature.dao.impl;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Service;

import com.revature.dao.model.UserDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.User;

@Service
public class UserDaoImpl implements UserDaoModel {
	
	private Session session;

	public void create(User user) {
		createSession();
		Transaction tran = session.beginTransaction();
		session.save(user);
		tran.commit();
		closeSession();
	}

	public User read(String ID) {
		createSession();
		User user = session.get(User.class, ID);
		closeSession();
		return user;
	}

	public List<User> readAll() {
		createSession();
		Query query = session.createQuery("FROM USER");
		List<User> users = query.getResultList();
		session.close();
		closeSession();
		return users;
	}

	public void update(User user) {
		createSession();
		Transaction tran = session.beginTransaction();
		session.update(user);
		tran.commit();
		closeSession();
	}
	
	public void delete(User user) {
		createSession();
		Transaction tran = session.beginTransaction();
		session.delete(user);
		tran.commit();
		closeSession();
	}
	
	//Test purposes only
	public void setSession(Session session) {
		this.session = session;
	}
	
	
	//managing session from within the dao
	private void createSession() {
		if(session == null) {
			session = SessionUtil.getSession();
		}
	}
	private void closeSession() {
		session.close();
		session = null;
	}
}
