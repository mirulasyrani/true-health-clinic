package com.truhealth.service;

import com.truhealth.model.ContactMessage;
import com.truhealth.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactMessageService {
    
    private final ContactMessageRepository contactMessageRepository;
    
    @Transactional
    public ContactMessage createContactMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }
    
    public ContactMessage getMessageById(Long id) {
        return contactMessageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Message not found with id: " + id));
    }
    
    public List<ContactMessage> getUnreadMessages() {
        return contactMessageRepository.findByReadFalse();
    }
    
    @Transactional
    public ContactMessage markAsRead(Long id) {
        ContactMessage message = getMessageById(id);
        message.setRead(true);
        return contactMessageRepository.save(message);
    }
    
    @Transactional
    public void deleteMessage(Long id) {
        contactMessageRepository.deleteById(id);
    }
}
