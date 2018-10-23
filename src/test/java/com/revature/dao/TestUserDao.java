package com.revature.dao;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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

import com.revature.dao.impl.UserDaoImpl;
import com.revature.pojos.UserAccount;

public class TestUserDao {

	private UserDaoImpl dao;
	private UserAccount testUser;
	private List<UserAccount> users;
	
	@Mock
	private Session sess;
	@Mock
	private Query query;
	@Mock
	private Transaction tran;
	
	@Before
	public void beforeTest() {
		MockitoAnnotations.initMocks(this);
		users = new ArrayList<>();
		for(int i = 0; i < 10; i++) {
			UserAccount toAdd = new UserAccount();
			toAdd.setId(i);
			users.add(toAdd);
		}
		testUser = new UserAccount();
	    testUser.setAddress("a;lskdfja fa sklfdja;sklfd");
	    try {
			testUser.setBirthdate((new SimpleDateFormat()).parse("2018-10-15"));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    testUser.setFirstName("a");
	    testUser.setLastName("laskdfj");
	    testUser.setId(1923);
	    testUser.setUsername("laksfdjs");
	    testUser.setPassword("alskdjf");
	    dao = new UserDaoImpl();
		dao.setSession(sess);
		(Mockito.doReturn(testUser).when(sess)).get(UserAccount.class, testUser.getId());
		(Mockito.doReturn(query).when(sess)).createQuery("FROM User");
		(Mockito.doReturn(users).when(query)).getResultList();
		(Mockito.doReturn(tran).when(sess)).beginTransaction();
	}
	@After
	public void afterTest() {
		testUser = null;
		users.clear();
		dao = null;
	}
	
	@Test
	public void testRead() {
		UserAccount result = dao.read(testUser.getId());
		assertEquals(testUser.getId(), result.getId());
		assertEquals(testUser.getAddress(), result.getAddress());
		assertEquals(testUser.getBirthdate(), result.getBirthdate());
		assertEquals(testUser.getUsername(), result.getUsername());
		
	}
	
	@Test
	public void testReadAll() {
		assertEquals(users, dao.readAll());	
	}
	
	@Test
	public void testUpdate() {
		dao.update(testUser);
		verify(sess).update(testUser);
	}
	
	@Test
	public void testDelete() {
		dao.delete(testUser);
		verify(sess).delete(testUser);
	}
	@Test
	public void testSave() {
		dao.create(testUser);
		verify(sess).save(testUser);
	}
	
}
