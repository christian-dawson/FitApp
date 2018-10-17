package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.pojos.User;
import com.revature.servicess.model.UserServiceModel;

@Controller
public class LoginController {

	@Autowired
	private UserServiceModel userServ;

	@RequestMapping(value="/login", method=RequestMethod.POST, consumes={"application/json"})
	public @ResponseBody User login(@RequestBody User user, HttpSession session) {
		user = userServ.authenticate(user);
		if(user != null) session.setAttribute("user", user);
		return user;
	}
}
