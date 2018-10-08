package com.revature.pojos;

public class Exercise {
	
	private int id;
	
	private int reps;
	
	private int sets;
	
	private String details;
	
	private String name;

	public Exercise() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Exercise(int id, int reps, int sets, String details, String name) {
		super();
		this.id = id;
		this.reps = reps;
		this.sets = sets;
		this.details = details;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public int getSets() {
		return sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Exercise [id=" + id + ", reps=" + reps + ", sets=" + sets + ", details=" + details + ", name=" + name
				+ "]";
	}
}
