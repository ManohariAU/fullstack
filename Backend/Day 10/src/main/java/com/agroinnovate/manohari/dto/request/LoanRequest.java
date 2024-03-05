package com.agroinnovate.manohari.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanRequest {
    
    
    @NonNull
    private  String loanType;

    @NonNull
    private String userAadharNumber;

    @NonNull
    private String userPanNumber;

    @NonNull
    private int salary;

    @NonNull
    private int loanAmount;

    @NonNull
    private int loanRepaymentMonth;

    @NonNull
    private String loanStatus;


}
