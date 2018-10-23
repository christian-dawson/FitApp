package com.revature.controllers;

import java.util.List;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.pojos.UserAccount;
import com.revature.servicess.model.UserServiceModel;

@Component
@Controller
public class UserController {
	@Autowired
	private UserServiceModel userServ;
	
	@RequestMapping(value="/user", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<UserAccount> doGet() {
		return userServ.getAll();
	}
	@RequestMapping(value="/user", method=RequestMethod.POST, consumes= {"application/json"})
	public @ResponseBody void doPost(@RequestBody UserAccount user, HttpSession sess) {
		System.out.println("user.post called with user: " + user);
		userServ.add(user);
		sess.setAttribute("user", user);
		
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UserAccount doGet(@PathVariable("id") String id) {
		return userServ.get(Integer.parseInt(id));
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.PUT, consumes= {"application/json"})
	public @ResponseBody void doPut(@PathVariable("id") Integer id, @RequestBody UserAccount user) {
		System.out.println("user.put called with user: " + user);
		user.setId(id);
		userServ.update(user);
	}
	@RequestMapping(value="/session", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UserAccount getSessionUser(HttpSession session) {
		UserAccount user = (UserAccount)session.getAttribute("user");
		return user;
	}
}
