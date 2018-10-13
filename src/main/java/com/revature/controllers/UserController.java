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

import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Component
@Controller
public class UserController {
	@Autowired
	private UserServiceModel userServ;
	
	@RequestMapping(value="/user", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<User> doGet() {
		return userServ.getAll();
	}
	@RequestMapping(value="/user", method=RequestMethod.POST, consumes= {"application/json"})
	public @ResponseBody void doPost(@RequestBody User user) {
		System.out.println("user.post called with user: " + user);
		userServ.add(user);
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody User doGet(@PathVariable("id") String id) {
		return userServ.get(Integer.parseInt(id));
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.PUT, consumes= {"application/json"})
	public @ResponseBody void doPut(@PathVariable("id") String id, @RequestBody User user) {
		userServ.update(user);
	}
}
