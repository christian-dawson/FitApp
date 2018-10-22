package com.revature.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Service;

import com.revature.dao.model.TraineeDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.Trainee;
import com.revature.pojos.Trainer;

@Service
public class TraineeDaoImpl implements TraineeDaoModel {
	
	private Session session;
	
	public TraineeDaoImpl() {
		session = SessionUtil.getSession();
	}

	@Override
	public void create(Trainee trainee) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.save(trainee);
			tran.commit();
		}catch(IllegalStateException e) {
			tran.rollback();
		}
		closeSession();
	}

	@Override
	public Trainee read(int ID) {
		createSession();
		Trainee toReturn = session.get(Trainee.class, ID);
		closeSession();
		return toReturn;
	}

	@Override
	public List<Trainee> readAll() {
		createSession();
		Query query = session.createQuery("from Trainee");
		List<Trainee> toReturn = query.getResultList();
		closeSession();
		return toReturn;
	}

	@Override
	public void update(Trainee goal) {
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
	public void delete(Trainee trainee) {
		createSession();
		Transaction tran = session.beginTransaction();
		try {
			session.delete(trainee);
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
