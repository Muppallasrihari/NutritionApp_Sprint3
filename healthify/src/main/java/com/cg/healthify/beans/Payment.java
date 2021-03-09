package com.cg.healthify.beans;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String transactionId;
	private Double currentAmount;
	public Double getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(Double currentAmount) {
		this.currentAmount = currentAmount;
	}

	private Double actualAmount;
	@NotBlank(message = "Payment Identifier required")
	private String paymentIdentifier;
	@NotBlank(message = "Payment Gateway Reqiured")
	private String paymentGateway;
	private String paytmNumber;
	private Double discount;


	/**
	 * ---------------------------ManytoOne Mapping with
	 * customer--------------------------------
	 **/
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "customer_id", updatable = false, nullable = false)
	@JsonIgnore
	private Customer customer;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate createdAt;

	

	@PrePersist
	public void onCreate() {
		this.createdAt = LocalDate.now();
	}

	
	

	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}

	public String getPaytmNumber() {
		return paytmNumber;
	}

	public void setPaytmNumber(String paytmNumber) {
		this.paytmNumber = paytmNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	public Double getActualAmount() {
		return actualAmount;
	}

	public void setActualAmount(Double actualAmount) {
		this.actualAmount = actualAmount;
	}

	public String getPaymentIdentifier() {
		return paymentIdentifier;
	}

	public void setPaymentIdentifier(String paymentIdentifier) {
		this.paymentIdentifier = paymentIdentifier;
	}

	public String getPaymentGateway() {
		return paymentGateway;
	}

	public void setPaymentGateway(String paymentGateway) {
		this.paymentGateway = paymentGateway;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	
	public Payment(Long id, String transactionId, Double currentAmount, Double actualAmount,
			@NotBlank(message = "Payment Identifier required") String paymentIdentifier,
			@NotBlank(message = "Payment Gateway Reqiured") String paymentGateway, String paytmNumber, Double discount,
			Customer customer) {
		super();
		this.id = id;
		this.transactionId = transactionId;
		this.currentAmount = currentAmount;
		this.actualAmount = actualAmount;
		this.paymentIdentifier = paymentIdentifier;
		this.paymentGateway = paymentGateway;
		this.paytmNumber = paytmNumber;
		this.discount = discount;
		this.customer = customer;
	}

	public Payment() {
		super();
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", transactionId=" + transactionId + ", actualAmount=" + actualAmount
				+ ", paymentIdentifier=" + paymentIdentifier + ", paymentGateway=" + paymentGateway + ", discount="
				+ discount + ", customer=" + customer + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((actualAmount == null) ? 0 : actualAmount.hashCode());
		result = prime * result + ((currentAmount == null) ? 0 : currentAmount.hashCode());
		result = prime * result + ((discount == null) ? 0 : discount.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((paymentGateway == null) ? 0 : paymentGateway.hashCode());
		result = prime * result + ((paymentIdentifier == null) ? 0 : paymentIdentifier.hashCode());
		result = prime * result + ((transactionId == null) ? 0 : transactionId.hashCode());
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
		Payment other = (Payment) obj;
		if (actualAmount == null) {
			if (other.actualAmount != null)
				return false;
		} else if (!actualAmount.equals(other.actualAmount))
			return false;
		if (currentAmount == null) {
			if (other.currentAmount != null)
				return false;
		} else if (!currentAmount.equals(other.currentAmount))
			return false;
		if (discount == null) {
			if (other.discount != null)
				return false;
		} else if (!discount.equals(other.discount))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (paymentGateway == null) {
			if (other.paymentGateway != null)
				return false;
		} else if (!paymentGateway.equals(other.paymentGateway))
			return false;
		if (paymentIdentifier == null) {
			if (other.paymentIdentifier != null)
				return false;
		} else if (!paymentIdentifier.equals(other.paymentIdentifier))
			return false;
		if (transactionId == null) {
			if (other.transactionId != null)
				return false;
		} else if (!transactionId.equals(other.transactionId))
			return false;
		return true;
	}

	
}
