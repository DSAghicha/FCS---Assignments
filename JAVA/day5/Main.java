package com.dayfive;

import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(System.in);
        String uchoice;

        Game game = new Game();
        game.initGame();
        System.out.println("******************************************************************************************************************************");
        System.out.println("-------------------                                    QUIZ APP                                            -------------------");
        System.out.println("******************************************************************************************************************************");
        System.out.println("Welcome, to my Quiz Game!");
        Scores.scoreDetails();


        while (true) {
            System.out.println("1. Play the Game.\n2. My Scores.\n3. Exit");
            uchoice = scanner.nextLine();
            if (uchoice.matches("^[a-zA-Z]*$")) {
                System.out.println("I expected a number!");
            } else {
               int choice = Integer.parseInt(uchoice);
                if (choice == 1) {
                    game.gameplay();
                } else if (choice == 2) {
                    Scores.score();
                } else if (choice == 3) {
                    Scores.writeScores();
                    break;
                } else {
                    System.out.println("It seems you chose an invalid option!\nLet's Try Again");
                }
            }
        }
        System.out.println("\n\nThanks for playing!");
    }
}