package com.birthday.planner.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	// Update Friend REST API
	@PutMapping("/friends/{id}")
	public ResponseEntity<Friends> updateFriend(@PathVariable Long id, @RequestBody Friends friendDetails) {
		Friends friend = friendRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Friend doesn't exist with id: "+id));
		friend.setFirstName(friendDetails.getFirstName());
		friend.setLastName(friendDetails.getLastName());
		friend.setBirthDate(friendDetails.getBirthDate());
		Friends updatedFriend = friendRepository.save(friend);
		return ResponseEntity.ok(updatedFriend);
	}
	
	// Delete Friend REST API
	@DeleteMapping("/friends/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFriend(@PathVariable Long id) {
		Friends friend = friendRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Friend doesn't exist with id: "+id));
		friendRepository.delete(friend);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
