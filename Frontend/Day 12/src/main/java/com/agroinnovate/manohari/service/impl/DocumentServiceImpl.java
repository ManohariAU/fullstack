package com.agroinnovate.manohari.service.impl;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.agroinnovate.manohari.dto.response.UploadImageResponse;
import com.agroinnovate.manohari.model.Document;
import com.agroinnovate.manohari.repository.DocumentRepository;
import com.agroinnovate.manohari.service.DocumentService;
import com.agroinnovate.manohari.utils.DocumentUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class DocumentServiceImpl implements DocumentService {
    
    private final DocumentRepository documentRepository;

    @Override
    public UploadImageResponse uploadImage(MultipartFile file,String email) throws IOException {
    Document document = documentRepository.save(Document.builder()
            .name(file.getOriginalFilename())
            .email(email)
            .docType(file.getContentType())
            .imageData(DocumentUtils.compressImage(file.getBytes()))
            .build());
        documentRepository.save(document);
         return UploadImageResponse.builder()
                                .message("Uploaded Successfully!")
                                .build();
}

    // @Override
    // public byte[] downloadImage(String email) {
    //     Optional<Document> dbImageData = documentRepository.findByEmail(email);
    //     byte[] images = DocumentUtils.decompressImage(dbImageData.get().getImageData());
    //     return images;
    // }
}