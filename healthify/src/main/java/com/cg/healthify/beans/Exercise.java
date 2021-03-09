package com.cg.healthify.beans;

import java.time.LocalDate;
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
public class Exercise {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotBlank(message = "Exercise Identifier should not be blank")
	@Size(min = 3, max = 10, message = "Please use 3 to 10 charecters")
	@Column(updatable = false, unique = true)
	private String exIdentifier;

	@NotBlank(message = "Exercise Type should not be blank")
	private String exType;

	@NotNull
	@Range(min = 1, max = 10, message = "set range should be within 1 to 10 ")
	private int exSets;

	@NotNull
	@Range(min = 1, max = 40, message = "rep range should be within 1 to 40 ")
	private int exReps;
	
	/*------------------------------------Ex Plans--------------------------------------*/

	@NotBlank(message = "Exercise Plan should not be blank")
	private String exPlan1;
	
	@NotBlank(message = "Exercise Plan should not be blank")
	private String exPlan2;
	
	@NotBlank(message = "Exercise Plan should not be blank")
	private String exPlan3;
	
	@NotBlank(message = "Exercise Plan should not be blank")
	private String exPlan4;
	
	@NotBlank(message = "Exercise Plan should not be blank")
	private String exPlan5;
	
	/*------------------------------------Dates--------------------------------------*/
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate createdAt;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate updatedAt;

	@PrePersist
	public void onCreate() {
		this.createdAt = LocalDate.now();
	}

	@PreUpdate
	public void onUpdate() {
		this.updatedAt = LocalDate.now();
	}
	
	/*------------------------------------Getter/Setter--------------------------------------*/

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getExIdentifier() {
		return exIdentifier;
	}

	public void setExIdentifier(String exIdentifier) {
		this.exIdentifier = exIdentifier;
	}

	public String getExType() {
		return exType;
	}

	public void setExType(String exType) {
		this.exType = exType;
	}

	public int getExSets() {
		return exSets;
	}

	public void setExSets(int exSets) {
		this.exSets = exSets;
	}

	public int getExReps() {
		return exReps;
	}

	public void setExReps(int exReps) {
		this.exReps = exReps;
	}

	public String getExPlan1() {
		return exPlan1;
	}

	public void setExPlan1(String exPlan1) {
		this.exPlan1 = exPlan1;
	}

	public String getExPlan2() {
		return exPlan2;
	}

	public void setExPlan2(String exPlan2) {
		this.exPlan2 = exPlan2;
	}

	public String getExPlan3() {
		return exPlan3;
	}

	public void setExPlan3(String exPlan3) {
		this.exPlan3 = exPlan3;
	}

	public String getExPlan4() {
		return exPlan4;
	}

	public void setExPlan4(String exPlan4) {
		this.exPlan4 = exPlan4;
	}

	public String getExPlan5() {
		return exPlan5;
	}

	public void setExPlan5(String exPlan5) {
		this.exPlan5 = exPlan5;
	}

	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDate getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	/*------------------------------------Param Constructor--------------------------------------*/
	

	public Exercise(int id,
			@NotBlank(message = "Exercise Identifier should not be blank") @Size(min = 3, max = 10, message = "Please use 3 to 10 charecters") String exIdentifier,
			@NotBlank(message = "Exercise Type should not be blank") String exType,
			@NotNull @Range(min = 1, max = 10, message = "set range should be within 1 to 10 ") int exSets,
			@NotNull @Range(min = 1, max = 40, message = "rep range should be within 1 to 40 ") int exReps,
			@NotBlank(message = "Exercise Plan should not be blank") String exPlan1,
			@NotBlank(message = "Exercise Plan should not be blank") String exPlan2,
			@NotBlank(message = "Exercise Plan should not be blank") String exPlan3,
			@NotBlank(message = "Exercise Plan should not be blank") String exPlan4,
			@NotBlank(message = "Exercise Plan should not be blank") String exPlan5, LocalDate createdAt,
			LocalDate updatedAt) {
		super();
		this.id = id;
		this.exIdentifier = exIdentifier;
		this.exType = exType;
		this.exSets = exSets;
		this.exReps = exReps;
		this.exPlan1 = exPlan1;
		this.exPlan2 = exPlan2;
		this.exPlan3 = exPlan3;
		this.exPlan4 = exPlan4;
		this.exPlan5 = exPlan5;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Exercise() {
		super();
	}

	@Override
	public String toString() {
		return "Exercise [id=" + id + ", exIdentifier=" + exIdentifier + ", exType=" + exType + ", exSets=" + exSets
				+ ", exReps=" + exReps + ", exPlan1=" + exPlan1 + ", exPlan2=" + exPlan2 + ", exPlan3=" + exPlan3
				+ ", exPlan4=" + exPlan4 + ", exPlan5=" + exPlan5 + ", createdAt=" + createdAt + ", updatedAt="
				+ updatedAt + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
		result = prime * result + ((exIdentifier == null) ? 0 : exIdentifier.hashCode());
		result = prime * result + ((exPlan1 == null) ? 0 : exPlan1.hashCode());
		result = prime * result + ((exPlan2 == null) ? 0 : exPlan2.hashCode());
		result = prime * result + ((exPlan3 == null) ? 0 : exPlan3.hashCode());
		result = prime * result + ((exPlan4 == null) ? 0 : exPlan4.hashCode());
		result = prime * result + ((exPlan5 == null) ? 0 : exPlan5.hashCode());
		result = prime * result + exReps;
		result = prime * result + exSets;
		result = prime * result + ((exType == null) ? 0 : exType.hashCode());
		result = prime * result + id;
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
		Exercise other = (Exercise) obj;
		if (createdAt == null) {
			if (other.createdAt != null)
				return false;
		} else if (!createdAt.equals(other.createdAt))
			return false;
		if (exIdentifier == null) {
			if (other.exIdentifier != null)
				return false;
		} else if (!exIdentifier.equals(other.exIdentifier))
			return false;
		if (exPlan1 == null) {
			if (other.exPlan1 != null)
				return false;
		} else if (!exPlan1.equals(other.exPlan1))
			return false;
		if (exPlan2 == null) {
			if (other.exPlan2 != null)
				return false;
		} else if (!exPlan2.equals(other.exPlan2))
			return false;
		if (exPlan3 == null) {
			if (other.exPlan3 != null)
				return false;
		} else if (!exPlan3.equals(other.exPlan3))
			return false;
		if (exPlan4 == null) {
			if (other.exPlan4 != null)
				return false;
		} else if (!exPlan4.equals(other.exPlan4))
			return false;
		if (exPlan5 == null) {
			if (other.exPlan5 != null)
				return false;
		} else if (!exPlan5.equals(other.exPlan5))
			return false;
		if (exReps != other.exReps)
			return false;
		if (exSets != other.exSets)
			return false;
		if (exType == null) {
			if (other.exType != null)
				return false;
		} else if (!exType.equals(other.exType))
			return false;
		if (id != other.id)
			return false;
		if (updatedAt == null) {
			if (other.updatedAt != null)
				return false;
		} else if (!updatedAt.equals(other.updatedAt))
			return false;
		return true;
	}
	
	
}
	
