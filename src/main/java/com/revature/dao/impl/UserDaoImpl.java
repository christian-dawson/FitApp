package com.revature.dao.impl;

import java.sql.SQLException;
import java.util.List;


import javax.persistence.Query;
import javax.persistence.RollbackException;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.postgresql.util.PSQLException;
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
		try {
			session.save(user);
			tran.commit();
			closeSession();
		}
		catch(RollbackException e) {
			tran.rollback();
		}
	}

	public User read(int ID) {
		createSession();
		User user = session.get(User.class, ID);
		closeSession();
		return user;
	}

	public List<User> readAll() {
		createSession();
		Query query = session.createQuery("FROM User");
		List<User> users = query.getResultList();
		session.close();
		closeSession();
		return users;
	}

	public void update(User user) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.update(user);
			tran.commit();
		}
		catch(RollbackException e) {
			tran.rollback();
		}
		closeSession();
	}
	
	public void delete(User user) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.delete(user);
			tran.commit();
		}catch(RollbackException e) {
			tran.rollback();
		}
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
