package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="goal")
public class Goal {
	@Column(name="goal_id")
	private Integer goalId;
	@Column(name="user_id")
	private Integer userId;
	@Column(name="target_weight")
	private Double targetWeight;
	@Column(name="type")
	private String type;
	public Goal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Goal(Integer goalId, Integer userId, Double targetWeight, String type) {
		super();
		this.goalId = goalId;
		this.userId = userId;
		this.targetWeight = targetWeight;
		this.type = type;
	}
	public Integer getGoalId() {
		return goalId;
	}
	public void setGoalId(Integer goalId) {
		this.goalId = goalId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
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
		return "Goal [goalId=" + goalId + ", userId=" + userId + ", targetWeight=" + targetWeight + ", type=" + type
				+ "]";
	}
}
