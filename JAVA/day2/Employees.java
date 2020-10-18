package com.daytwo;

import java.util.Scanner;

public class Employees {
    public static void userInfo(){
        Scanner scanner = new Scanner(System.in);
        String name = scanner.next();
        Integer age = scanner.nextInt();
        String city = scanner.next();
        System.out.printf("Hello, %s(%d) from %s. \n",  name, age, city);
        System.out.println("The name is " + name);
        System.out.println("The age is " + age);
        System.out.println("The city is " + city);
    }
}