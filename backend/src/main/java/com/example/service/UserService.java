package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.domain.User;

@Service
public class UserService {

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        User user1 = new User();
        user1.setId(1);
        user1.setName("黒田");
        users.add(user1);
        User user2 = new User();
        user2.setId(2);
        user2.setName("クロさん");
        users.add(user2);
        return users;
    }
}
