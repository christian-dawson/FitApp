package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="goal")
public class Goal {
	@Id
	@Column(name="goal_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="target_weight")
	private Double targetWeight;
	@Column(name="type")
	private String type;
	public Goal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Goal(Integer goalId, Double targetWeight, String type) {
		super();
		this.id = goalId;
		this.targetWeight = targetWeight;
		this.type = type;
	}
	public Integer getGoalId() {
		return id;
	}
	public void setGoalId(Integer goalId) {
		this.id = goalId;
	}
	public Double getTargetWeight() {
		return targetWeight;
	}
	public void setTargetWeight(Double targetWeight) {
		this.targetWeight = targetWeight;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Goal [goalId=" + id + ", targetWeight=" + targetWeight + ", type=" + type
				+ "]";
	}
}
