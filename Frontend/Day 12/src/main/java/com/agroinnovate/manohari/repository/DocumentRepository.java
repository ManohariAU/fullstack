package com.agroinnovate.manohari.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.manohari.model.Document;

import java.util.Optional;

public interface DocumentRepository extends JpaRepository<Document, String> {
    // Optional<Document> findByName(String fileName);

    // Optional<Document> findByEmail(String email);
}