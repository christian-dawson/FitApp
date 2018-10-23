package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.pojos.Goal;
import com.revature.pojos.UserAccount;
import com.revature.services.impl.GoalServiceImpl;
import com.revature.servicess.model.GoalServiceModel;
import com.revature.servicess.model.TraineeServiceModel;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("trainee/{id}/goal")
public class GoalController {
	
	@Autowired
	GoalServiceModel goalServ;
	
	@Autowired
	TraineeServiceModel traineeServ;
	
	public GoalController() {
		goalServ = new GoalServiceImpl();
	}
	
	/*@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody Goal getGoals(@PathVariable("id") int id) {
		return goalServ.getGoalFromUser(id);
	}*/
	
	@RequestMapping(method=RequestMethod.POST)
	public void setGoal(@PathVariable("id") int id, @RequestBody Goal goal) {
		goalServ.addGoal(goal);
	}
}
