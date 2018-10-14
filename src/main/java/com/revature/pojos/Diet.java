package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="diet")
public class Diet {
	@Id
	@Column(name="diet_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer dietId;
	@Column(name="calories")
	private Integer calories;
	@Column(name="protein")
	private Integer protein;
	@Column(name="fat")
	private Integer fat;
	@Column(name="carbohydrates")
	private Integer carbohydrates;
	@Column(name="sugar")
	private Integer sugar;
	@Column(name="fiber")
	private Integer fiber;
	@Column(name="details")
	private String details;
	public Diet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Diet(Integer dietId, Integer calories, Integer protein, Integer fat, Integer carbohydrates, Integer sugar,
			Integer fiber, String details) {
		super();
		this.dietId = dietId;
		this.calories = calories;
		this.protein = protein;
		this.fat = fat;
		this.carbohydrates = carbohydrates;
		this.sugar = sugar;
		this.fiber = fiber;
		this.details = details;
	}
	public Integer getDietId() {
		return dietId;
	}
	public void setDietId(Integer dietId) {
		this.dietId = dietId;
	}
	public Integer getCalories() {
		return calories;
	}
	public void setCalories(Integer calories) {
		this.calories = calories;
	}
	public Integer getProtein() {
		return protein;
	}
	public void setProtein(Integer protein) {
		this.protein = protein;
	}
	public Integer getFat() {
		return fat;
	}
	public void setFat(Integer fat) {
		this.fat = fat;
	}
	public Integer getCarbohydrates() {
		return carbohydrates;
	}
	public void setCarbohydrates(Integer carbohydrates) {
		this.carbohydrates = carbohydrates;
	}
	public Integer getSugar() {
		return sugar;
	}
	public void setSugar(Integer sugar) {
		this.sugar = sugar;
	}
	public Integer getFiber() {
		return fiber;
	}
	public void setFiber(Integer fiber) {
		this.fiber = fiber;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	@Override
	public String toString() {
		return "Diet [dietId=" + dietId + ", calories=" + calories + ", protein=" + protein + ", fat=" + fat
				+ ", carbohydrates=" + carbohydrates + ", sugar=" + sugar + ", fiber=" + fiber + ", details=" + details
				+ "]";
	}
	
}
