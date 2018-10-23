package com.revature.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
	
	@Column(name="trainer_id")
	private Integer trainerId;
	
	@Column(name="requested_id")
	private Integer requestedId;
	
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
	@OneToOne
	@JoinColumn(name="goal_id")
	private Goal goal;
	
	public Trainee(Integer id, double weight, double height, Integer trainerId, Integer requestedId, String address,
			String firstName, String lastName, Date birthdate, String gender, Goal goal) {
		super();
		this.id = id;
		this.weight = weight;
		this.height = height;
		this.trainerId = trainerId;
		this.requestedId = requestedId;
		this.address = address;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdate = birthdate;
		this.gender = gender;
		this.goal = goal;
	}

	public Goal getGoal() {
		return goal;
	}

	public void setGoal(Goal goal) {
		this.goal = goal;
	}

	public Trainee() {
		super();
		// TODO Auto-generated constructor stub
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

	public Integer getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}

	public Integer getRequestedId() {
		return requestedId;
	}

	public void setRequestedId(Integer requestedId) {
		this.requestedId = requestedId;
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
		return "Trainee [id=" + id + ", weight=" + weight + ", height=" + height + ", trainerId=" + trainerId
				+ ", requestedId=" + requestedId + ", address=" + address + ", firstName=" + firstName + ", lastName="
				+ lastName + ", birthdate=" + birthdate + ", gender=" + gender + ", goal=" + goal + "]";
	}
}
