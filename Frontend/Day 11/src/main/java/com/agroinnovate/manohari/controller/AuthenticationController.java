package com.agroinnovate.manohari.controller;

import static com.agroinnovate.manohari.utils.MyConstant.AUTH;
import static com.agroinnovate.manohari.utils.MyConstant.LOGIN;
import static com.agroinnovate.manohari.utils.MyConstant.REFRESR_TOKEN;
import static com.agroinnovate.manohari.utils.MyConstant.REGISTER;
import static com.agroinnovate.manohari.utils.MyConstant.FORGOT_PASSWORD;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agroinnovate.manohari.dto.request.LoginRequest;
import com.agroinnovate.manohari.dto.request.Passwordrequest;
import com.agroinnovate.manohari.dto.request.RegisterRequest;
import com.agroinnovate.manohari.dto.response.LoginResponse;
import com.agroinnovate.manohari.dto.response.PasswordResponse;
import com.agroinnovate.manohari.dto.response.RegisterResponse;
import com.agroinnovate.manohari.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
@Tag(name="Authentication", description = "Authenticated Login, Register, forgot password")
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setAccessToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(REFRESR_TOKEN)
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response) throws IOException {
        authService.refreshToken(request, response);
    }

    @PatchMapping(FORGOT_PASSWORD)
    public ResponseEntity<?> forgotPassword(@RequestBody Passwordrequest request){
        PasswordResponse response=new PasswordResponse();
        try{
            response=authService.forgotPassword(request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
}