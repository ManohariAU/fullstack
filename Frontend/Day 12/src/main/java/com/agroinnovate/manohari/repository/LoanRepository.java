package com.agroinnovate.manohari.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.manohari.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {

}
