package com.revature.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.pojos.User;

@org.springframework.web.bind.annotation.RestController
public class RestController {

	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<User> getUsers(){
		return null;
	}
}
