package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.pojos.Trainee;
import com.revature.servicess.model.GoalServiceModel;
import com.revature.servicess.model.TraineeServiceModel;

@Component
@RestController
@RequestMapping("trainee")
public class TraineeController {
	@Autowired
	private TraineeServiceModel traineeServ;
	
	@Autowired
	private GoalServiceModel goalServ;
	
	@GetMapping()
	public List<Trainee> getAll(){
		return traineeServ.readAll();
	}
	@GetMapping("{id}")
	public Trainee getTrainee(@PathVariable("id") int id) {
		return traineeServ.read(id);
	}
	@PostMapping()
	public void createUser(@RequestBody Trainee trainee) {
		goalServ.addGoal(trainee.getGoal());
		traineeServ.create(trainee);
	}
	@PutMapping
	public void updateUser(@RequestBody Trainee trainee) {
		goalServ.updateGoal(trainee.getGoal());
		traineeServ.update(trainee);
	}
}
