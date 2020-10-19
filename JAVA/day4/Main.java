package com.dayfour;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
    	//-------------------QUESTION I--------------
		System.out.println("Question I\n");
		System.out.print("How many Avenger's details you want to log? >");
		int tally = scanner.nextInt();
		for (int i = 1; i <= tally; i++){
			Avengers ai = new Avengers();
			ai.getDetails();
			ai.displayDetails();
		}
    	/*Avengers a1 = new Avengers();
		a1.getDetails();
		a1.displayDetails();
		Avengers a2 = new Avengers();
		a2.getDetails();
		a2.displayDetails();
		Avengers a3 = new Avengers();
		a3.getDetails();
		a3.displayDetails();
		Avengers a4 = new Avengers();
		a4.getDetails();
		a4.displayDetails();
		Avengers a5 = new Avengers();
		a5.getDetails();
		a5.displayDetails();*/

		//-------------------QUESTION II--------------
		System.out.println("\nQuestion II\n");
		Q2.oddNo();

		//-------------------QUESTION III--------------
		System.out.println("\nQuestion III\n");
		Sum.sum();
	}
}
