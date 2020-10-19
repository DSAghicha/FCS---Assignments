package com.dayfour;

import java.util.Scanner;

public class Q2 {
    public static void oddNo(){
        Scanner scanner = new Scanner(System.in);
        int[] no = new int[5];
       for(int i = 0; i < 5; i++){
           System.out.print("Enter a number: ");
           int num = scanner.nextInt();
           no[i] = num;
       }
        for (int i : no) {
            if (i % 2 != 0) {
                System.out.printf("%d is an odd number.\n", i);
            }
        }
    }
}
