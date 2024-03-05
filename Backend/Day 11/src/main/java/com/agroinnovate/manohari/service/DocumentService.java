package com.agroinnovate.manohari.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.agroinnovate.manohari.dto.response.UploadImageResponse;

public interface DocumentService {
     UploadImageResponse uploadImage(MultipartFile file,String email) throws IOException;
     // public byte[] downloadImage(String email);

}
