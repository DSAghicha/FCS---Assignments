package com.dayfour;

import java.util.Scanner;

public class Avengers {
    String name, planet;
    int age, power, weapon;
    public void getDetails(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Avenger's name: ");
        name = scanner.nextLine();
        System.out.print("Enter Avenger's age: ");
        age = scanner.nextInt();
        System.out.print("Enter Avenger's power: ");
        power = scanner.nextInt();
        System.out.print("Enter Avenger's weapon(s): ");
        weapon = scanner.nextInt();
        System.out.print("Enter Avengers planet: ");
        planet = scanner.next();
    }
    public void displayDetails(){
        System.out.println();
        System.out.println("1. Avenger's name: " + name);
        System.out.println("2. Avenger's age: " + age);
        System.out.println("3. Avenger's power: " + power);
        System.out.println("4. Avenger's weapon(s): " + weapon);
        System.out.println("5. Avenger's planet: " + planet);
    }
}
