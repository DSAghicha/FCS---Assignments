package com.daythree;

import java.util.*;

public class Grades {
    public static void gradeCalc(){
        Scanner scanner = new Scanner(System.in);
        float sum = 0, avg;

        int[] mark = new int[5];
        ArrayList<String> subjects = new ArrayList<>();
        subjects.add("English");
        subjects.add("Information Technology");
        subjects.add("Physics");
        subjects.add("Chemistry");
        subjects.add("Mathematics");

        for (int i = 0; i <subjects.size(); i++) {
            System.out.printf("Please enter marks for %s (out of 100): ", subjects.get(i));
            int marks = scanner.nextInt();
            if (marks > 100) {
                System.out.println("Marks out of range.");
            } else {
                mark[i] = marks;
                sum += mark[i];
            }
        }

        avg = sum / 5;

        if (avg > 90){
            System.out.printf("You secured %s%% and your grade is A", avg);
        } else if (avg > 70 && avg <= 90){
            System.out.printf("You secured %s%% and your grade is B", avg);
        }else if(avg>50 && avg<=70)
        {
            System.out.printf("You secured %s%% and your grade is C", avg);
        }
        else if (avg >35 && avg <= 50){
            System.out.printf("You secured %s%% and your grade is D", avg);
        }else  {
            System.out.printf("You secured %s%% and your grade is F", avg);
        }
}
}
