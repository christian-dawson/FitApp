package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Controller
public class LoginController {
	
	@Autowired
	private UserServiceModel userServ;
	
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String doGet(HttpSession session) {
		if(session.getAttribute("user") != null) return "home";
		return "login";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public void login(@RequestBody User user) {
		userServ.authenticate(user);
		if(user != null) System.out.println("Login success!");
	}
}
