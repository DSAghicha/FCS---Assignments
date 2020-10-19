package com.dayfour;

import java.util.*;

public class Sum {
    public static void sum(){
        Scanner scanner = new Scanner(System.in);
        List <Integer> numbers = new ArrayList<>();
        int total = 0;

        System.out.println("Enter numbers on new lines (Enter -1 to Exit): ");

        while (true){
            int num = scanner.nextInt();
            if (num == -1){
                break;
            }else {
                numbers.add(num);
                total += num;
            }
        }
        System.out.print("Numbers you provided are:" + numbers);
        System.out.print("\nSum of all numbers entered is " + total);
    }
}
