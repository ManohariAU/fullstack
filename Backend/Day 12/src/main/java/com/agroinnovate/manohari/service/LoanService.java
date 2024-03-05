package com.agroinnovate.manohari.service;

import java.util.List;

import com.agroinnovate.manohari.dto.request.LoanRequest;
import com.agroinnovate.manohari.dto.response.LoanResponse;
import com.agroinnovate.manohari.model.Loan;

public interface LoanService {
    LoanResponse applyLoan(LoanRequest request);


    List<Loan> readLoan();

    boolean updatedLoanStatus(String loanId, String loanStatus);

}
