package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.pojos.Goal;
import com.revature.services.impl.GoalServiceImpl;
import com.revature.servicess.model.GoalServiceModel;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("user/{id}/goal")
public class GoalController {
	
	@Autowired
	GoalServiceModel goalServ;
	
	public GoalController() {
		goalServ = new GoalServiceImpl();
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody Goal getGoals(@PathVariable("id") int id) {
		return goalServ.getGoal(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public void setGoal(@PathVariable("id") int id, @RequestBody Goal goal) {
		goal.setUserId(id);
		goalServ.addGoal(goal);
	}
}
