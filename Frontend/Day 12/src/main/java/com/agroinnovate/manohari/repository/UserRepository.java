package com.agroinnovate.manohari.repository;

import java.util.Optional;

import com.agroinnovate.manohari.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);

}
