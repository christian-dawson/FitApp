package com.revature.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="fitness_plan")
public class FitnessPlan {
	@Id
	@Column(name="plan_id")
	private Integer planId;
	@Column(name="trainee_id")
	private Integer traineeId;
	@Column(name="trainer_id")
	private Integer trainerId;
	@Column(name="diet_id")
	private Integer dietId;
	@Column(name="m_workout")
	private Integer mWorkout;
	@Column(name="tu_workout")
	private Integer tuWorkout;
	@Column(name="w_workout")
	private Integer wWorkout;
	@Column(name="th_workout")
	private Integer thWorkout;
	@Column(name="f_workout")
	private Integer fWorkout;
	@Column(name="sa_workout")
	private Integer saWorkout;
	@Column(name="su_workout")
	private Integer suWorkout;
	public FitnessPlan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FitnessPlan(Integer planId, Integer traineeId, Integer trainerId, Integer dietId, Integer mWorkout,
			Integer tuWorkout, Integer wWorkout, Integer thWorkout, Integer fWorkout, Integer saWorkout,
			Integer suWorkout) {
		super();
		this.planId = planId;
		this.traineeId = traineeId;
		this.trainerId = trainerId;
		this.dietId = dietId;
		this.mWorkout = mWorkout;
		this.tuWorkout = tuWorkout;
		this.wWorkout = wWorkout;
		this.thWorkout = thWorkout;
		this.fWorkout = fWorkout;
		this.saWorkout = saWorkout;
		this.suWorkout = suWorkout;
	}
	public Integer getPlanId() {
		return planId;
	}
	public void setPlanId(Integer planId) {
		this.planId = planId;
	}
	public Integer getTraineeId() {
		return traineeId;
	}
	public void setTraineeId(Integer traineeId) {
		this.traineeId = traineeId;
	}
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
	public Integer getDietId() {
		return dietId;
	}
	public void setDietId(Integer dietId) {
		this.dietId = dietId;
	}
	public Integer getmWorkout() {
		return mWorkout;
	}
	public void setmWorkout(Integer mWorkout) {
		this.mWorkout = mWorkout;
	}
	public Integer getTuWorkout() {
		return tuWorkout;
	}
	public void setTuWorkout(Integer tuWorkout) {
		this.tuWorkout = tuWorkout;
	}
	public Integer getwWorkout() {
		return wWorkout;
	}
	public void setwWorkout(Integer wWorkout) {
		this.wWorkout = wWorkout;
	}
	public Integer getThWorkout() {
		return thWorkout;
	}
	public void setThWorkout(Integer thWorkout) {
		this.thWorkout = thWorkout;
	}
	public Integer getfWorkout() {
		return fWorkout;
	}
	public void setfWorkout(Integer fWorkout) {
		this.fWorkout = fWorkout;
	}
	public Integer getSaWorkout() {
		return saWorkout;
	}
	public void setSaWorkout(Integer saWorkout) {
		this.saWorkout = saWorkout;
	}
	public Integer getSuWorkout() {
		return suWorkout;
	}
	public void setSuWorkout(Integer suWorkout) {
		this.suWorkout = suWorkout;
	}
	@Override
	public String toString() {
		return "FitnessPlan [planId=" + planId + ", traineeId=" + traineeId + ", trainerId=" + trainerId + ", dietId="
				+ dietId + ", mWorkout=" + mWorkout + ", tuWorkout=" + tuWorkout + ", wWorkout=" + wWorkout
				+ ", thWorkout=" + thWorkout + ", fWorkout=" + fWorkout + ", saWorkout=" + saWorkout + ", suWorkout="
				+ suWorkout + "]";
	}
	
}
