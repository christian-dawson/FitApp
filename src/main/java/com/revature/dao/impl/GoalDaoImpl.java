package com.revature.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Service;

import com.revature.dao.model.GoalDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.Goal;

@Service
public class GoalDaoImpl implements GoalDaoModel {
	
	Session session;
	
	public GoalDaoImpl() {
		session = SessionUtil.getSession();
	}

	@Override
	public void create(Goal goal) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.save(goal);
			tran.commit();
		}catch(IllegalStateException e) {
			tran.rollback();
		}
		closeSession();
	}

	@Override
	public Goal read(int ID) {
		createSession();
		Goal toReturn = session.get(Goal.class, ID);
		closeSession();
		return toReturn;
	}

	@Override
	public List<Goal> readAll() {
		createSession();
		Query query = session.createQuery("from Goal");
		List<Goal> toReturn = query.getResultList();
		closeSession();
		return toReturn;
	}

	@Override
	public void update(Goal goal) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.update(goal);
			tran.commit();
		}catch(IllegalStateException e) {
			tran.rollback();
		}
		closeSession();
	}

	@Override
	public void delete(Goal goal) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.delete(goal);
			tran.commit();
		}catch(IllegalStateException e) {
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
