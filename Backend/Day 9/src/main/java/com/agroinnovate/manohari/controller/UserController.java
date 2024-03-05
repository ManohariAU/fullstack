package com.agroinnovate.manohari.controller;
import static com.agroinnovate.manohari.utils.MyConstant.AUTH;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agroinnovate.manohari.dto.request.ProfileEditRequest;
import com.agroinnovate.manohari.dto.response.DeleteResponse;
import com.agroinnovate.manohari.dto.response.ProfileEditResponse;
import com.agroinnovate.manohari.model.User;
import com.agroinnovate.manohari.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
@Tag(name="User", description = "Get user, Profile edit")
public class UserController {

    private final UserService userService;

    // @GetMapping
    // @PreAuthorize("hasAnyAuthority('user:read', 'admin:read')")
    // public String get() {
    //     return "GET:: user controller";
    // }

    @GetMapping("/get")
    public List<User> getUser() {
        return userService.getUser();
    }

    @GetMapping("/get/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    // @PreAuthorize("hasAnyAuthority('admin:delete')")
    
    // // public boolean deleteUserByEmail(@PathVariable String email) {
    // //     return userService.deleteUserByEmail(email);
    // // }

        @PutMapping("/editProfile/{email}")
    public ResponseEntity<ProfileEditResponse> updateProfile(@RequestBody ProfileEditRequest request, @PathVariable String email) {
        ProfileEditResponse response = new ProfileEditResponse();
        try {
            boolean updated = userService.updateProfile(request.getName(), request.getPhone(),email);
            if(updated) {
                response.setMessage("Profile Updated Successfully!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.setMessage("Failed to update");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            } catch (Exception e) {
                response.setMessage("Failed to update due to an unexpected error.");
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteProfile(@PathVariable String email) {
        DeleteResponse response = new DeleteResponse();
        try {
            boolean deleted = userService.deleteProfile(email);
            if(deleted) {
                response.setMessage("Profile deleted Successfully!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.setMessage("Failed to delete");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            } catch (Exception e) {
                response.setMessage("Failed to delete due to an unexpected error.");
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }
}