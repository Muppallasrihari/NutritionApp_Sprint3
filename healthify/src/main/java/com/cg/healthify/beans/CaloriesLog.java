package com.cg.healthify.beans;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class CaloriesLog {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message="Calories required" )
	@Range(min=1,max=20000,message="Calories value cannot be negative")
	private int calories;
	
	@NotBlank(message="CaloriesLog Identifier is Required")
	@Size(min=3,max=4,message="Size must be 3 to 4 charecters")
	@Column(unique=true,updatable=false)
	private String caloriesLogIdentifier;
	
	//@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDateTime createdAt;
	
	//@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDateTime updatedAt;
	
	
	
	public CaloriesLog() {
		super();
		
	}

	public CaloriesLog(Long id, int calories, String caloriesLogIdentifier,LocalDateTime createdAt, LocalDateTime updatedAt) {
		super();
		this.id = id;
		this.calories = calories;
		this.caloriesLogIdentifier = caloriesLogIdentifier;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getCalories() {
		return calories;
	}
	public void setCalories(int calories) {
		this.calories = calories;
	}
	public String getCaloriesLogIdentifier() {
		return caloriesLogIdentifier;
	}
	public void setCaloriesLogIdentifier(String caloriesLogIdentifier) {
		this.caloriesLogIdentifier = caloriesLogIdentifier;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	//@PrePersist
	public void onCreate() {
  	this.createdAt=LocalDateTime.now();
    }
	
    //@PreUpdate
    public void onUpdate() {
    this.updatedAt=LocalDateTime.now();
    }
    @Override
	public String toString() {
		return "CaloriesLog [id=" + id + ", calories=" + calories + ", caloriesLogIdentifier=" + caloriesLogIdentifier
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + calories;
		result = prime * result + ((caloriesLogIdentifier == null) ? 0 : caloriesLogIdentifier.hashCode());
		result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((updatedAt == null) ? 0 : updatedAt.hashCode());
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
		CaloriesLog other = (CaloriesLog) obj;
		if (calories != other.calories)
			return false;
		if (caloriesLogIdentifier == null) {
			if (other.caloriesLogIdentifier != null)
				return false;
		} else if (!caloriesLogIdentifier.equals(other.caloriesLogIdentifier))
			return false;
		if (createdAt == null) {
			if (other.createdAt != null)
				return false;
		} else if (!createdAt.equals(other.createdAt))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (updatedAt == null) {
			if (other.updatedAt != null)
				return false;
		} else if (!updatedAt.equals(other.updatedAt))
			return false;
		return true;
	}
    
}
