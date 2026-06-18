package com.Ritika.foodiesApi.service;

import com.Ritika.foodiesApi.entity.FoodEntity;
import com.Ritika.foodiesApi.io.FoodRequest;
import com.Ritika.foodiesApi.io.FoodResponse;
import com.Ritika.foodiesApi.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service

public class FoodServiceImpl implements FoodService{
    @Autowired
    private S3Client s3Client;

    @Autowired
    private FoodRepository foodRepository;

    @Value("${aws.S3.bucketName}")
    private String bucketName;

    @Override
    public String uploadFile(MultipartFile file) {

        String fileNameExtension =file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
        String key = UUID.randomUUID().toString()+"."+fileNameExtension;

        try{
            PutObjectRequest putObjectRequest =PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .acl("public-read")
                    .contentType(file.getContentType())
                    .build();

            PutObjectResponse putObjectResponse =
                    s3Client.putObject(
                            putObjectRequest,
                            RequestBody.fromBytes(file.getBytes())
                    );
            if(putObjectResponse.sdkHttpResponse().isSuccessful()){
                return "https://"+bucketName+".s3.amazonaws.com/"+key;
            }
            else{
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"file Upload fail");

            }
        }catch (IOException ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"An error occurred while uploading the file");
        }
    }

    @Override
    public FoodResponse addFood(FoodRequest foodRequest, MultipartFile multipartFile) {
            FoodEntity newfoodEntity = convertToEntity(foodRequest);
            String imageUrl =uploadFile(multipartFile);
            newfoodEntity.setImageUrl(imageUrl);
            newfoodEntity = foodRepository.save(newfoodEntity);
        return convertToResponse(newfoodEntity);
    }

    @Override
    public List<FoodResponse> readFoods() {
        List<FoodEntity> databaseEntries =foodRepository.findAll();
        return databaseEntries.stream().map(object-> convertToResponse(object)).collect(Collectors.toList());
    }

    @Override
    public FoodResponse readFood(String id) {

       FoodEntity food = foodRepository.findById(id).orElseThrow(()-> new RuntimeException("Food Id not found"));
       return convertToResponse(food);
    }

    @Override
    public boolean deleteFile(String filename) {
        DeleteObjectRequest deleteObjectRequest =DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(filename)
                .build();
        s3Client.deleteObject(deleteObjectRequest);
        return true;
    }

    @Override
    public void deleteFood(String id) {
            FoodResponse food = readFood(id);
           String imageUrl = food.getImageUrl();
           String fileName = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
           boolean isFileDeleted = deleteFile(fileName);
           if(isFileDeleted) {
               foodRepository.deleteById(food.getId());
           }
    }

    private FoodEntity convertToEntity(FoodRequest foodRequest){
        return FoodEntity.builder()
                .name(foodRequest.getName())
                .description(foodRequest.getDescription())
                .price(foodRequest.getPrice())
                .category(foodRequest.getCategory())
                .build();
    }
    private FoodResponse convertToResponse(FoodEntity foodEntity){
        return FoodResponse.builder()
                .id(foodEntity.getId())
                .name(foodEntity.getName())
                .price(foodEntity.getPrice())
                .category(foodEntity.getCategory())
                .description(foodEntity.getDescription())
                .imageUrl(foodEntity.getImageUrl())
                .build();
    }
}
