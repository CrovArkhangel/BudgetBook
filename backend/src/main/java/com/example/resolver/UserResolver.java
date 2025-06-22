package com.example.resolver;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Component;

import com.example.domain.User;
import com.example.service.UserService;
import org.springframework.stereotype.Controller;

@Controller
public class UserResolver {
    @Autowired
    private UserService userService;

    @QueryMapping
    public List<User> users() {
        return userService.getAllUsers();
    }
}
