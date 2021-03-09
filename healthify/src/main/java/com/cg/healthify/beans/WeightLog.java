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
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * Pojo class= WeightLog
 * 
 * @author vinotraj
 *
 */

@Entity
public class WeightLog {

	
	public WeightLog() {
		super();
	}

	public WeightLog(Long id,
			@NotBlank(message = "weightId Required") @Size(min = 2, max = 4, message = "Must be between the size(min=2 ,max=4)") String weightId,
			@NotBlank(message = "weight Required") String weight, LocalDateTime created_At, LocalDateTime updated_At) {
		super();
		this.id = id;
		this.weightId = weightId;
		this.weight = weight;
		this.created_At = created_At;
		this.updated_At = updated_At;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @param WeightId It must not be empty size of the string between 2 to 4
	 *                 weightId must be unique.
	 */
	@NotBlank(message = "weightId Required")
	@Size(min = 2, max = 4, message = "Must be between the size(min=2 ,max=4)")
	@Column(unique = true, updatable = false)

	private String weightId;

	/**
	 * @param weight It must not be empty
	 * 
	 */
	@NotBlank(message = "weight Required")
	private String weight;

	/**
	 * @param created_At Date must be in json format
	 */
	//@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime created_At;

	/**
	 * @param updated_At Date must be json format
	 */
	//@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime updated_At;

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getWeightId() {
		return weightId;
	}

	public void setWeightId(String weightId) {
		this.weightId = weightId;
	}

	public LocalDateTime getCreated_At() {
		return created_At;
	}

	public void setCreated_At(LocalDateTime created_At) {
		this.created_At = created_At;
	}

	public LocalDateTime getupdated_At() {
		return updated_At;
	}

	public void setupdated_At(LocalDateTime updated_At) {
		this.updated_At = updated_At;
	}

	/*@PrePersist
	public void onCreate() {
		this.created_At = LocalDateTime.now();
	}

	@PreUpdate
	public void onUpdate() {
		this.updated_At = LocalDateTime.now();
	}*/

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((updated_At == null) ? 0 : updated_At.hashCode());
		result = prime * result + ((created_At == null) ? 0 : created_At.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((weight == null) ? 0 : weight.hashCode());
		result = prime * result + ((weightId == null) ? 0 : weightId.hashCode());
		return result;
	}

	

	@Override
	public String toString() {
		return "WeightLog [id=" + id + ", weightId=" + weightId + ", weight=" + weight + ", created_At=" + created_At
				+ ", updated_At=" + updated_At + "]";
	}




	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WeightLog other = (WeightLog) obj;
		if (updated_At == null) {
			if (other.updated_At != null)
				return false;
		} else if (!updated_At.equals(other.updated_At))
			return false;
		if (created_At == null) {
			if (other.created_At != null)
				return false;
		} else if (!created_At.equals(other.created_At))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (weight == null) {
			if (other.weight != null)
				return false;
		} else if (!weight.equals(other.weight))
			return false;
		if (weightId == null) {
			if (other.weightId != null)
				return false;
		} else if (!weightId.equals(other.weightId))
			return false;
		return true;
	}
	
}
