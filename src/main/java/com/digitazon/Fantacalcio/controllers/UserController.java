package com.digitazon.Fantacalcio.controllers;

import com.digitazon.Fantacalcio.entities.User;
import com.digitazon.Fantacalcio.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public User getById(@PathVariable int id) {
        return userRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public User create(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        userRepository.deleteById(id);
        return "ok";
    }

    @PutMapping("/{id}")
    public User update(@PathVariable int id, @RequestBody User updateUser) throws Exception {
        User user = userRepository.findById(id).orElseThrow();
        user.setName(updateUser.getName());
        user.setEmail(updateUser.getEmail());
        user.setPassword(updateUser.getPassword());
        return userRepository.save(user);
    }
}
