package com.truhealth.repository;

import com.truhealth.model.Appointment;
import com.truhealth.model.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByStatus(AppointmentStatus status);
    List<Appointment> findByEmail(String email);
    List<Appointment> findByAppointmentDateBetween(LocalDateTime start, LocalDateTime end);
}
