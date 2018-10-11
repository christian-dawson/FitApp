package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Component
public class RegisterController {
	@Autowired
	private UserServiceModel userServ;
	
	@RequestMapping(value="/register", method=RequestMethod.GET)
	public String doGet(HttpSession session) {
		if(session.getAttribute("user") != null) return "home";
		return "register";
	}
}
