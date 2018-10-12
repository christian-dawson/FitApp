package com.revature.dao;

import static org.junit.Assert.*;

import java.time.LocalDate;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.revature.dao.impl.UserDaoImpl;
import com.revature.pojos.User;

public class TestUserDao {

	private UserDaoImpl dao;
	private User testUser;
	
	@Mock
	private Session sess;
	
	@Before
	public void initMocks() {
	    MockitoAnnotations.initMocks(this);
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
	}
	
	@Test
	public void testRead() {
		dao = new UserDaoImpl();
		dao.setSession(sess);
		(Mockito.doReturn(testUser).when(sess)).get(User.class, testUser.getId());
		User result = dao.read(testUser.getId());
		assertEquals(testUser.getId(), result.getId());
		assertEquals(testUser.getAddress(), result.getAddress());
		assertEquals(testUser.getBirthdate(), result.getBirthdate());
		assertEquals(testUser.getUsername(), result.getUsername());
		assertEquals(testUser.getWeight(), result.getWeight(), .1);
		
	}
	
//	@Test
//	public void test() {
//		(Mockito.doReturn(testUser).when(sess)).get(User.class, testUser.getId());
//		User result = dao.read(testUser.getId());
//			
//	}
	
}
