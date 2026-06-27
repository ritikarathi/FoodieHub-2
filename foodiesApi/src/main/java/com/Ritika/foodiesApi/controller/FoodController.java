package com.Ritika.foodiesApi.controller;

import com.Ritika.foodiesApi.io.FoodRequest;
import com.Ritika.foodiesApi.io.FoodResponse;
import com.Ritika.foodiesApi.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/foods")
@CrossOrigin("*")
public class FoodController {

    private final FoodService foodService;

    @PostMapping
    public FoodResponse addFood(@RequestPart("food") String foodString, @RequestPart("file")MultipartFile file){
        ObjectMapper objectMapper =new ObjectMapper();
        FoodRequest request =null;
        request = objectMapper.readValue(foodString,FoodRequest.class);
        FoodResponse response =foodService.addFood(request,file);
        return response;
    }

    @GetMapping
    public List<FoodResponse> readFoods(){
        return foodService.readFoods();
    }

    @GetMapping("/{id}")
    public FoodResponse readFood(@PathVariable String id){
        return foodService.readFood(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFood(@PathVariable String id){
        foodService.deleteFood(id);
    }

}
