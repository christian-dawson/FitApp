package com.revature.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Service;

import com.revature.dao.model.TrainerDaoModel;
import com.revature.database.SessionUtil;
import com.revature.pojos.Trainer;

@Service
public class TrainerDaoImpl implements TrainerDaoModel {

	private Session session;
	
	public TrainerDaoImpl() {
		session = SessionUtil.getSession();
	}

	@Override
	public void create(Trainer goal) {
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
	public Trainer read(int ID) {
		createSession();
		Trainer toReturn = session.get(Trainer.class, ID);
		closeSession();
		return toReturn;
	}

	@Override
	public List<Trainer> readAll() {
		createSession();
		Query query = session.createQuery("from Trainer");
		List<Trainer> toReturn = query.getResultList();
		closeSession();
		return toReturn;
	}

	@Override
	public void update(Trainer goal) {
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
	public void delete(Trainer goal) {
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
