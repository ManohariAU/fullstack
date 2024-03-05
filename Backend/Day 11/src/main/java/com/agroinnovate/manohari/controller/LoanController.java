package com.agroinnovate.manohari.controller;

import static com.agroinnovate.manohari.utils.MyConstant.USER;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agroinnovate.manohari.dto.request.LoanRequest;
import com.agroinnovate.manohari.dto.request.UpdateLoanRequest;
import com.agroinnovate.manohari.dto.response.LoanResponse;
import com.agroinnovate.manohari.dto.response.UpdateLoanResponse;
import com.agroinnovate.manohari.model.Loan;
import com.agroinnovate.manohari.service.LoanService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

 @RequestMapping(USER)
 @RequiredArgsConstructor
 @Tag(name="Loan" ,description="Apply Loans, View Loans, Review Loans")

@RestController
public class LoanController {
    private final LoanService loanService;

    @GetMapping("/getloan")
    public List<Loan> read() {
        return loanService.readLoan();
    }

    @PostMapping("/applyLoan")
    public ResponseEntity<LoanResponse> applyLoan(@RequestBody LoanRequest request) {
        LoanResponse response = new LoanResponse();
        try {
            response = loanService.applyLoan(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    @PutMapping("/updateLoanStatus")
public ResponseEntity<UpdateLoanResponse> updateLoanStatus(@RequestBody UpdateLoanRequest request) {
    UpdateLoanResponse response = new UpdateLoanResponse();
    try {
        boolean updated = loanService.updatedLoanStatus(request.getLoanId(), request.getLoanStatus());
        if(updated) {
            response.setMessage("Success");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.setMessage("Failed to update loan status. Loan not found.");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    } catch (Exception e) {
        response.setMessage("Failed to update loan status due to an unexpected error.");
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}
