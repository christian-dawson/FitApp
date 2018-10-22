package com.revature.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_account")
public class UserAccount {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
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
	@Column(name="type")
	private String type;
	
	
	public UserAccount() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserAccount(int id, String username, String password, String address, String firstName, String lastName,
			Date birthdate, String gender, String type) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.address = address;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdate = birthdate;
		this.gender = gender;
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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


	public Date getBirthdate() {
		return birthdate;
	}


	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "UserAccount [id=" + id + ", username=" + username + ", password=" + password + ", address=" + address
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", birthdate=" + birthdate + ", gender="
				+ gender + ", type=" + type + "]";
	}
	
}
