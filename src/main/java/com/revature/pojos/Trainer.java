package com.revature.pojos;

import java.util.Date;

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
	@Column(name="address")
	private String address;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="birthdate")
	private Date birthdate;
	@Column(name="gender")
	private String gender;
	
//	@OneToOne
//	@JoinColumn(name="trainer_id")
//	UserAccount account;
//	

	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Trainer(Integer id, float rating, String experience, String address, String firstName, String lastName,
		Date birthdate, String gender) {
	super();
	this.id = id;
	this.rating = rating;
	this.experience = experience;
	this.address = address;
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthdate = birthdate;
	this.gender = gender;
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
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Trainer [id=" + id + ", rating=" + rating + ", experience=" + experience + ", address=" + address
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", birthdate=" + birthdate + ", gender="
				+ gender + "]";
	}
	
}
