package com.example.demo.repository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {
}
