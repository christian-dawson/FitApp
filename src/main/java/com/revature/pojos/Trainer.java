package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trainer")
public class Trainer {
	@Id
	@Column(name="trainer_id")
	private Integer id;
	
	@Column(name="rating")
	private float rating;
	
	@Column(name="experience")
	private String experience;
	
//	@OneToOne
//	@JoinColumn(name="trainer_id")
//	UserAccount account;
//	
	public Trainer(Integer id, float rating, String experience) {
		super();
		this.id = id;
		this.rating = rating;
		this.experience = experience;
	}

	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	@Override
	public String toString() {
		return "Trainer [id=" + id + ", rating=" + rating + ", experience=" + experience + ", account=" + "]";
	}
	
}
