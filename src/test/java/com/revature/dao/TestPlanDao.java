package com.revature.dao;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;

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
import com.revature.dao.impl.UserDaoImpl;
import com.revature.pojos.FitnessPlan;
import com.revature.pojos.User;

public class TestPlanDao {

	private FitnessPlanDaoImpl dao;
	private FitnessPlan testPlan;
	private List<FitnessPlan> testPlans;
	
	@Mock
	private Session sess;
	@Mock
	private Query query;
	@Mock
	private Transaction tran;
	
	@Before
	public void beforeTest() {
		MockitoAnnotations.initMocks(this);
		testPlans = new ArrayList<>();
		for(int i = 0; i < 10; i++) {
			FitnessPlan toAdd = new FitnessPlan();
			toAdd.setPlanId(i);
			testPlans.add(toAdd);
		}	    
		Integer planId = 14;
		Integer traineeId = 11;
		Integer trainerId = 12;
		Integer dietId = 13;
		Integer mWorkout = 12;
		Integer tuWorkout = 74;
		Integer wWorkout = 34;
		Integer thWorkout = 43;
		Integer fWorkout = 2;
		Integer saWorkout = 12;
		Integer suWorkout =23;
		testPlan = new FitnessPlan(planId, traineeId, trainerId, dietId, mWorkout, tuWorkout, wWorkout,
				thWorkout, fWorkout, saWorkout, suWorkout);
		
	    dao = new FitnessPlanDaoImpl();
		dao.setSession(sess);
		(Mockito.doReturn(testPlan).when(sess)).get(FitnessPlan.class, testPlan.getPlanId());
		(Mockito.doReturn(query).when(sess)).createQuery("FROM FitnessPlan");
		(Mockito.doReturn(testPlans).when(query)).getResultList();
		(Mockito.doReturn(tran).when(sess)).beginTransaction();
	}

	@After
	public void afterTest() {
		testPlan = null;
		testPlans.clear();
		dao = null;
	}
	
	@Test
	public void testRead() {
		FitnessPlan result = dao.read(testPlan.getPlanId());
		assertEquals(testPlan.getPlanId(), result.getPlanId());
		assertEquals(testPlan.getDietId(), result.getDietId());
		assertEquals(testPlan.getTraineeId(), result.getTraineeId());
		assertEquals(testPlan.getTrainerId(), result.getTrainerId());
		assertEquals(testPlan.getThWorkout(), result.getThWorkout());
		
	}
	
	@Test
	public void testReadAll() {
		assertEquals(testPlans, dao.readAll());	
	}
	
	@Test
	public void testUpdate() {
		dao.update(testPlan);
		verify(sess).update(testPlan);
	}
	
	@Test
	public void testDelete() {
		dao.delete(testPlan);
		verify(sess).delete(testPlan);
	}
	@Test
	public void testSave() {
		dao.create(testPlan);
		verify(sess).save(testPlan);
	}
	
}
