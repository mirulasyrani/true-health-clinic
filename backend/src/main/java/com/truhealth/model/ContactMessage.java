package com.truhealth.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "contact_messages")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100)
    @Column(nullable = false)
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    @Column(nullable = false)
    private String email;
    
    @NotBlank(message = "Phone is required")
    @Column(nullable = false)
    private String phone;
    
    @NotBlank(message = "Subject is required")
    @Column(nullable = false)
    private String subject;
    
    @NotBlank(message = "Message is required")
    @Size(min = 10, max = 1000)
    @Column(nullable = false, length = 1000)
    private String message;
    
    @Column(nullable = false)
    private boolean read = false;
    
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
