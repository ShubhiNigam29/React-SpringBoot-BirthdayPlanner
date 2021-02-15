package com.birthday.planner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.birthday.planner.model.Friends;

@Repository
public interface FriendRepository extends JpaRepository <Friends, Long>{

}
