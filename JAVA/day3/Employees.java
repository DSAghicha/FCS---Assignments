package com.daythree;

import java.util.*;

public class Employees {
    public static void taxInfo(){
        Scanner scanner = new Scanner(System.in);
        double tax = 0;

        System.out.print("Please enter your first name: ");
        String name = scanner.next();
        System.out.print("Please enter your date of birth (YYYY-MM-DD): ");
        String[] parts = scanner.next().split("-");
        System.out.print("Please enter your monthly salary: ₹");
        int sal = scanner.nextInt() * 12;

        int currYear = Calendar.getInstance().get(Calendar.YEAR);
        if (Integer.parseInt(parts[1]) > (Calendar.getInstance().get(Calendar.MONTH) + 1)){
           currYear -= 1;
       }
       int age = currYear - Integer.parseInt(parts[0]);

        if (sal >= 500000){
             tax = 0.2 * sal;
        }else if (sal >= 400000){
            tax = 0.15 * sal;
        }else if (sal >= 300000){
            tax = 0.1 * sal;
        }else if (sal >= 200000){
            tax = 0.05 * sal;
        }

        System.out.printf("\nHello, %s aged %d, your annual salary is ₹%d and you are supposed to pay ₹%s towards tax.\n Thank You.", name, age, sal, tax);
    }
}
