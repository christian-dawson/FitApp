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

import com.revature.pojos.Trainer;
import com.revature.servicess.model.TrainerServiceModel;

@Component
@RestController
@RequestMapping("trainer")
public class TrainerController {
	@Autowired
	private TrainerServiceModel trainerServ;
	
	@GetMapping()
	public List<Trainer> getAll(){
		return trainerServ.readAll();
	}
	@GetMapping(value="{id}")
	public Trainer getTrainer(@PathVariable("id") int id) {
		return trainerServ.read(id);
	}
	@PostMapping()
	public void createUser(@RequestBody Trainer trainer) {
		trainerServ.create(trainer);
	}
	@PutMapping()
	public void updateUser(@RequestBody Trainer trainer) {
		trainerServ.update(trainer);
	}
}
