package com.revature.dao;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;

import java.time.LocalDate;
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

import com.revature.dao.impl.UserDaoImpl;
import com.revature.pojos.User;

public class TestUserDao {

	private UserDaoImpl dao;
	private User testUser;
	private List<User> users;
	
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
			User toAdd = new User();
			toAdd.setId(i);
			users.add(toAdd);
		}
		testUser = new User();
	    testUser.setAddress("a;lskdfja fa sklfdja;sklfd");
	    testUser.setBirthdate(LocalDate.now());
	    testUser.setFirstName("a");
	    testUser.setLastName("laskdfj");
	    testUser.setHeight(1290);
	    testUser.setId(1923);
	    testUser.setUsername("laksfdjs");
	    testUser.setPassword("alskdjf");
	    testUser.setType("trainer");
	    testUser.setWeight(9234023);
	    dao = new UserDaoImpl();
		dao.setSession(sess);
		(Mockito.doReturn(testUser).when(sess)).get(User.class, testUser.getId());
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
		User result = dao.read(testUser.getId());
		assertEquals(testUser.getId(), result.getId());
		assertEquals(testUser.getAddress(), result.getAddress());
		assertEquals(testUser.getBirthdate(), result.getBirthdate());
		assertEquals(testUser.getUsername(), result.getUsername());
		assertEquals(testUser.getWeight(), result.getWeight(), .1);
		
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
