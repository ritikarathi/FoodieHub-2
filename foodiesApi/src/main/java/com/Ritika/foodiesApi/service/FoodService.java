package com.Ritika.foodiesApi.service;

import com.Ritika.foodiesApi.io.FoodRequest;
import com.Ritika.foodiesApi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest foodRequest,MultipartFile multipartFile);

    List<FoodResponse> readFoods();

    FoodResponse readFood(String id);

    boolean deleteFile(String filename);

    void deleteFood(String id);


}
