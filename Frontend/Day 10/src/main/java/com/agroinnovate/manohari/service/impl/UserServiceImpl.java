package com.agroinnovate.manohari.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


import com.agroinnovate.manohari.model.User;
import com.agroinnovate.manohari.repository.UserRepository;
import com.agroinnovate.manohari.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }
    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }

    @Override
    public boolean updateProfile(String name,String phone,String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(name);
            user.setPhone(phone);
            userRepository.save(user);
            return true;
        } 
        else {
            return false;
        }
    }

    @Override
    public boolean deleteProfile(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            userRepository.delete(user);
            return true;
        }
        return false;
    }
}