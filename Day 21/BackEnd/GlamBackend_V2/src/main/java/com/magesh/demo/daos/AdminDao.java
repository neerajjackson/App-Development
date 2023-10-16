package com.magesh.demo.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magesh.demo.entities.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, String> {

}
