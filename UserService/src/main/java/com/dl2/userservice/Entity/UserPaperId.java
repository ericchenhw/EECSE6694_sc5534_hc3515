package com.dl2.userservice.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserPaperId implements Serializable{
    private String paperId;
    private String userId;
}
