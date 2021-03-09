package com.cg.healthify.beans;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message = "Contact Required")
@Size(max=10,min=10,message="Phone number must be 10 digits")
@Column(unique=true)
	private String contact;
	@NotBlank(message = "Name Required")
	private String name;
	@NotBlank(message = "Gender Required")
	private String gender;
	private String customerIdentifier;
	private String paymentIdentifier;
	@NotBlank(message = "Plan Id is Required")
	private String planId;
	@NotBlank(message = "Food Type Required")
	private String foodType;
	private String exIdentifier;
	private String password;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}
	private Integer PTSequence = 0;

	/**
	 * ----------------------------------OneToOne mapping with
	 * DietPlan-------------------------
	 **/
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH, targetEntity =DietPlan.class)
	private DietPlan dietPlan;
	
	/**
	 * ----------------------------------OneToOne mapping with
	 * NutritionPLan-------------------------
	 **/
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH, targetEntity = NutritionPlan.class)
	private NutritionPlan nutritionPlan;

	/**
	 * ----------------------------------OneToMany mapping with
	 * Payment-----------------------
	 **/
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "customer")
	private List<Payment> payment = new ArrayList<>();
	
	/**
	 *  ----------------------------------OneTOne mapping with Exercise
	 *-----------------------
	 **/
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.DETACH,targetEntity = Exercise.class)
	private Exercise exercise;

/**
 * ---------------------------OneToMany mapping with WeightLog
 * ----------------
 */
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL,targetEntity=WeightLog.class)
     private List<WeightLog> weightLog=new ArrayList<>();
	
	
	public List<WeightLog> getWeightLog() {
	return weightLog;
}
	/**
	 *  ----------------------------------OneTOne mapping with CaloriesLog
	 *-----------------------
	 **/
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL,targetEntity = CaloriesLog.class)
	private CaloriesLog calorieslog;


public void setWeightLog(List<WeightLog> weightLog) {
	this.weightLog = weightLog;
}

	@Column(updatable = false)
	private LocalDate createdDate;
	private LocalDate updatedDate;

	@PrePersist
	public void onCreate() {
		this.createdDate = LocalDate.now();
	}

	@PreUpdate
	public void onUpdate() {
		this.updatedDate = LocalDate.now();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCustomerIdentifier() {
		return customerIdentifier;
	}

	public void setCustomerIdentifier(String customerIdentifier) {
		this.customerIdentifier = customerIdentifier;
	}

	public String getPaymentIdentifier() {
		return paymentIdentifier;
	}

	public void setPaymentIdentifier(String paymentIdentifier) {
		this.paymentIdentifier = paymentIdentifier;
	}

	public String getPlanId() {
		return planId;
	}

	public void setPlanId(String planId) {
		this.planId = planId;
	}

	public Integer getPTSequence() {
		return PTSequence;
	}

	public void setPTSequence(Integer pTSequence) {
		PTSequence = pTSequence;
	}

	public DietPlan getDietPlan() {
		return dietPlan;
	}

	public void setDietPlan(DietPlan dietPlan) {
		this.dietPlan = dietPlan;
	}

	public NutritionPlan getNutritionPlan() {
		return nutritionPlan;
	}

	public void setNutritionPlan(NutritionPlan nutritionPlan) {
		this.nutritionPlan = nutritionPlan;
	}

	public List<Payment> getPayment() {
		return payment;
	}

	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDate getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(LocalDate updatedDate) {
		this.updatedDate = updatedDate;
	}
	
	public Exercise getExercise() {
		return exercise;
	}

	public void setExercise(Exercise exercise) {
		this.exercise = exercise;
	}
	
	public CaloriesLog getCalorieslog() {
		return calorieslog;
	}

	public void setCalorieslog(CaloriesLog calorieslog) {
		this.calorieslog = calorieslog;
	}

	
	public String getExIdentifier() {
		return exIdentifier;
	}

	public void setExIdentifier(String exIdentifier) {
		this.exIdentifier = exIdentifier;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((PTSequence == null) ? 0 : PTSequence.hashCode());
		result = prime * result + ((calorieslog == null) ? 0 : calorieslog.hashCode());
		result = prime * result + ((contact == null) ? 0 : contact.hashCode());
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + ((customerIdentifier == null) ? 0 : customerIdentifier.hashCode());
		result = prime * result + ((dietPlan == null) ? 0 : dietPlan.hashCode());
		result = prime * result + ((exIdentifier == null) ? 0 : exIdentifier.hashCode());
		result = prime * result + ((exercise == null) ? 0 : exercise.hashCode());
		result = prime * result + ((foodType == null) ? 0 : foodType.hashCode());
		result = prime * result + ((gender == null) ? 0 : gender.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((nutritionPlan == null) ? 0 : nutritionPlan.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((payment == null) ? 0 : payment.hashCode());
		result = prime * result + ((paymentIdentifier == null) ? 0 : paymentIdentifier.hashCode());
		result = prime * result + ((planId == null) ? 0 : planId.hashCode());
		result = prime * result + ((updatedDate == null) ? 0 : updatedDate.hashCode());
		result = prime * result + ((weightLog == null) ? 0 : weightLog.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Customer other = (Customer) obj;
		if (PTSequence == null) {
			if (other.PTSequence != null)
				return false;
		} else if (!PTSequence.equals(other.PTSequence))
			return false;
		if (calorieslog == null) {
			if (other.calorieslog != null)
				return false;
		} else if (!calorieslog.equals(other.calorieslog))
			return false;
		if (contact == null) {
			if (other.contact != null)
				return false;
		} else if (!contact.equals(other.contact))
			return false;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (customerIdentifier == null) {
			if (other.customerIdentifier != null)
				return false;
		} else if (!customerIdentifier.equals(other.customerIdentifier))
			return false;
		if (dietPlan == null) {
			if (other.dietPlan != null)
				return false;
		} else if (!dietPlan.equals(other.dietPlan))
			return false;
		if (exIdentifier == null) {
			if (other.exIdentifier != null)
				return false;
		} else if (!exIdentifier.equals(other.exIdentifier))
			return false;
		if (exercise == null) {
			if (other.exercise != null)
				return false;
		} else if (!exercise.equals(other.exercise))
			return false;
		if (foodType == null) {
			if (other.foodType != null)
				return false;
		} else if (!foodType.equals(other.foodType))
			return false;
		if (gender == null) {
			if (other.gender != null)
				return false;
		} else if (!gender.equals(other.gender))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (nutritionPlan == null) {
			if (other.nutritionPlan != null)
				return false;
		} else if (!nutritionPlan.equals(other.nutritionPlan))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (payment == null) {
			if (other.payment != null)
				return false;
		} else if (!payment.equals(other.payment))
			return false;
		if (paymentIdentifier == null) {
			if (other.paymentIdentifier != null)
				return false;
		} else if (!paymentIdentifier.equals(other.paymentIdentifier))
			return false;
		if (planId == null) {
			if (other.planId != null)
				return false;
		} else if (!planId.equals(other.planId))
			return false;
		if (updatedDate == null) {
			if (other.updatedDate != null)
				return false;
		} else if (!updatedDate.equals(other.updatedDate))
			return false;
		if (weightLog == null) {
			if (other.weightLog != null)
				return false;
		} else if (!weightLog.equals(other.weightLog))
			return false;
		return true;
	}

	public Customer(Long id,
			@NotBlank(message = "Contact Required") @Size(max = 10, min = 10, message = "Phone number must be 10 digits") String contact,
			@NotBlank(message = "Name Required") String name, @NotBlank(message = "Gender Required") String gender,
		      String customerIdentifier,
			 String paymentIdentifier,
			@NotBlank(message = "Plan Id is Required") String planId,
			@NotBlank(message = "Food Type Required") String foodType,
		    String exIdentifier, String password,
			Integer pTSequence, DietPlan dietPlan, NutritionPlan nutritionPlan, List<Payment> payment,
			Exercise exercise, List<WeightLog> weightLog, CaloriesLog calorieslog, LocalDate createdDate,
			LocalDate updatedDate) {
		super();
		this.id = id;
		this.contact = contact;
		this.name = name;
		this.gender = gender;
		this.customerIdentifier = customerIdentifier;
		this.paymentIdentifier = paymentIdentifier;
		this.planId = planId;
		this.foodType = foodType;
		this.exIdentifier = exIdentifier;
		this.password = password;
		PTSequence = pTSequence;
		this.dietPlan = dietPlan;
		this.nutritionPlan = nutritionPlan;
		this.payment = payment;
		this.exercise = exercise;
		this.weightLog = weightLog;
		this.calorieslog = calorieslog;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}