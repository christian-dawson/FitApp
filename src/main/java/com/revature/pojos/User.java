package com.revature.pojos;

import java.util.Date;

public class User {
	
	private int id;
	private String username, password, address, firstName, lastName, type;
	private Date birthdate;
	private double weight, height;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(int id, String username, String password, String address, String firstName, String lastName,
			String type, Date birthdate, double weight, double height) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.address = address;
		this.firstName = firstName;
		this.lastName = lastName;
		this.type = type;
		this.birthdate = birthdate;
		this.weight = weight;
		this.height = height;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
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
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", address=" + address
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", type=" + type + ", birthdate=" + birthdate + ", weight="
				+ weight + ", height=" + height + "]";
	}
}
