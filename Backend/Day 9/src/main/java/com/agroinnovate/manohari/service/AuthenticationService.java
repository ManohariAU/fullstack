package com.agroinnovate.manohari.service;

import java.io.IOException;

import com.agroinnovate.manohari.dto.request.LoginRequest;
import com.agroinnovate.manohari.dto.request.Passwordrequest;
import com.agroinnovate.manohari.dto.request.RegisterRequest;
import com.agroinnovate.manohari.dto.response.LoginResponse;
import com.agroinnovate.manohari.dto.response.PasswordResponse;
import com.agroinnovate.manohari.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    PasswordResponse forgotPassword(Passwordrequest request);

}
