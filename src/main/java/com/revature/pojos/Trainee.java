package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trainee")
public class Trainee {
	@Id
	@Column(name="trainee_id")
	private Integer id;
	
	@Column(name="weight")
	private double weight;
	
	@Column(name="height")
	private double height;
	
	public Trainee(Integer id, double weight, double height, Goal goal) {
		super();
		this.id = id;
		this.weight = weight;
		this.height = height;
	}

	public Trainee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	@Override
	public String toString() {
		return "Trainee [id=" + id + ", weight=" + weight + ", height=" + height + "]";
	}
}
