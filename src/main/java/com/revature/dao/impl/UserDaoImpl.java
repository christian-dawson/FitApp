package com.revature.dao.impl;

import java.sql.SQLException;
import java.util.List;


import javax.persistence.Query;
import javax.persistence.RollbackException;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Service;

import com.revature.dao.model.UserAccountDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.UserAccount;

@Service
public class UserDaoImpl implements UserAccountDaoModel {
	
	private Session session;

	public void create(UserAccount user) {
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

	public UserAccount read(int ID) {
		createSession();
		UserAccount user = session.get(UserAccount.class, ID);
		closeSession();
		return user;
	}

	public List<UserAccount> readAll() {
		createSession();
		Query query = session.createQuery("FROM UserAccount");
		List<UserAccount> users = query.getResultList();
		session.close();
		closeSession();
		return users;
	}

	public void update(UserAccount user) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.merge(user);
			tran.commit();
		}
		catch(RollbackException e) {
			tran.rollback();
		}
		closeSession();
	}
	
	public void delete(UserAccount user) {
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
