package com.agroinnovate.manohari.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.agroinnovate.manohari.dto.request.LoanRequest;
import com.agroinnovate.manohari.dto.response.LoanResponse;
import com.agroinnovate.manohari.model.Loan;
import com.agroinnovate.manohari.repository.LoanRepository;
import com.agroinnovate.manohari.service.LoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl implements LoanService {
    
    private final LoanRepository loanRepository;

    @Override
    public List<Loan> readLoan() {
        return loanRepository.findAll();
    }
    @Override
    public LoanResponse applyLoan(LoanRequest request) {
        var loan = Loan.builder()
                                .loanType(request.getLoanType())
                                .userAadharNumber(request.getUserAadharNumber())
                                .userPanNumber(request.getUserPanNumber())
                                .salary(request.getSalary())
                                .loanAmount(request.getLoanAmount())
                                .loanRepaymentMonth(request.getLoanRepaymentMonth())
                                .loanStatus(request.getLoanStatus())
                                .build();
                loanRepository.save(loan);
                return LoanResponse.builder()
                                .message("Loan Applied Successfully!")
                                .build();
    }
    @Override
    public boolean updatedLoanStatus(String loanId, String loanStatus) {
        Optional<Loan> optionalLoan = loanRepository.findById(loanId);
        if (optionalLoan.isPresent()) {
            Loan loan = optionalLoan.get();
            loan.setLoanStatus(loanStatus);
            loanRepository.save(loan);
            return true;
        } 
        else {
            return false;
        }
}

}