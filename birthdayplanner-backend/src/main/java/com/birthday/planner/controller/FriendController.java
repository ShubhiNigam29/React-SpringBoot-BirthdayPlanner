package com.birthday.planner.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.planner.exception.ResourceNotFoundException;
import com.birthday.planner.model.Friends;
import com.birthday.planner.repository.FriendRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FriendController {
	
	@Autowired
	private FriendRepository friendRepository;
	
	// Get all friends
	@GetMapping("/friends")
	public List<Friends> getAllFriends() {
		return friendRepository.findAll();
	}
	
	// Create friend REST API
	@PostMapping("/friends")
	public Friends createFriend(@RequestBody Friends friend) {
		return friendRepository.save(friend);
	}
	
	// Get Friend by Id REST API
	@GetMapping("/friends/{id}")
	public ResponseEntity<Friends> getFriendById(@PathVariable Long id) {
		Friends friend = friendRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Friend doesn't exist with id: "+id));
		return ResponseEntity.ok(friend);
	}
}
