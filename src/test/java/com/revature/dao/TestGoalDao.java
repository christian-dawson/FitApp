package com.revature.dao;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.revature.dao.impl.FitnessPlanDaoImpl;
import com.revature.dao.impl.GoalDaoImpl;
import com.revature.pojos.FitnessPlan;
import com.revature.pojos.Goal;

public class TestGoalDao {

	private GoalDaoImpl dao;
	private Goal testGoal;
	private List<FitnessPlan> testGoals;
	
	@Mock
	private Session sess;
	@Mock
	private Query query;
	@Mock
	private Transaction tran;
	
	@Before
	public void beforeTest() {
		MockitoAnnotations.initMocks(this);
		testGoals = new ArrayList<>();
		for(int i = 0; i < 10; i++) {
			FitnessPlan toAdd = new FitnessPlan();
			toAdd.setPlanId(i);
			testGoals.add(toAdd);
		}
		int goalId = 1;
		double targetWeight = 0.5d;
		String type = "I GOTTA GET ABS";
		int userId = 69;
		testGoal = new Goal(goalId, userId, targetWeight, type);
		
	    dao = new GoalDaoImpl();
		dao.setSession(sess);
		(Mockito.doReturn(testGoal).when(sess)).get(FitnessPlan.class, testGoal.getGoalId());
		(Mockito.doReturn(query).when(sess)).createQuery("FROM Goal");
		(Mockito.doReturn(testGoals).when(query)).getResultList();
		(Mockito.doReturn(tran).when(sess)).beginTransaction();
	}

	@After
	public void afterTest() {
		testGoal = null;
		testGoals.clear();
		dao = null;
	}
	
	@Test
	public void testRead() {
		Goal result = dao.read(testGoal.getGoalId());
		assertEquals(testGoal.getGoalId(), result.getGoalId());
		assertEquals(testGoal.getTargetWeight(), result.getTargetWeight());
		assertEquals(testGoal.getType(), result.getType());
		assertEquals(testGoal.getUserId(), result.getUserId());		
	}
	
	@Test
	public void testReadAll() {
		assertEquals(testGoals, dao.readAll());	
	}
	
	@Test
	public void testUpdate() {
		dao.update(testGoal);
		verify(sess).update(testGoal);
	}
	
	@Test
	public void testDelete() {
		dao.delete(testGoal);
		verify(sess).delete(testGoal);
	}
	@Test
	public void testSave() {
		dao.create(testGoal);
		verify(sess).save(testGoal);
	}
	
}
