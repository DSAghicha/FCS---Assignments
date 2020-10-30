package com.dayfive;


import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Scores {
    // Creating Lists
    static ArrayList<String> playerName = new ArrayList<>();
    static ArrayList<Integer> points = new ArrayList<>();
    static String player_name;


    public static void scoreDetails() {
        Scanner scanner = new Scanner(System.in);

        // Adding player names and their scores to the list from scores.txt
        try {
            File file = new File("src/com/dayfive/scores.txt");
            Scanner scan = new Scanner(file);
            while (scan.hasNextLine()) {
                playerName.add(scan.nextLine());
                points.add(Integer.parseInt(scan.nextLine()));
            }
        } catch (FileNotFoundException fileNotFoundException) {
            System.out.println("It seems that Scores file is missing!\nContact the Admin for further assistance.");
        }

        // READING user's name and finding his scores
        while (true) {
            System.out.print("Enter your name: ");
            player_name = scanner.next();
            if (player_name.equals("ADMIN") || player_name.equals("Admin") || player_name.equals("admin")) {
                Game game = new Game();
                game.editGameplay();
                System.exit(0);
                break;
            } else {
                if (player_name.matches("^[a-zA-Z]*$")) {               //Checking for a valid name!
                    System.out.printf("Hello, %s. ", player_name);
                    if (playerName.contains(player_name)) {             // Checking for an existing player!
                        while (true) {              //Checking if player wants to overwrite his earlier scores or not
                            System.out.printf("Your last score is %d.\nWould you like to continue with the last score? (Yes / No)   >", (points.get(playerName.indexOf(player_name))));
                            String decision = scanner.next();
                            if (decision.equals("Yes") || decision.equals("YES") || decision.equals("yes")) {
                                System.out.printf("Your score is %d.\n", (points.get(playerName.indexOf(player_name))));
                                break;
                            } else if (decision.equals("No") || decision.equals("NO") || decision.equals("no")) {
                                points.set(playerName.indexOf(player_name), 0);
                                System.out.printf("Your score is %d.\n", (points.get(playerName.indexOf(player_name))));
                                break;
                            } else System.out.println("Invalid Input");
                        }
                    } else {
                        System.out.println("It seems you are a new player!");
                        playerName.add(player_name);
                        points.add(0);
                        System.out.printf("Your score is %d.\n", (points.get(playerName.indexOf(player_name))));
                    }
                    break;
                } else {
                    System.out.println("It is an invalid name!");
                }
            }
            Game.scores = points.get(playerName.indexOf(player_name));
        }
    }

    public static void score() {
        System.out.printf( "Your score is %d.\n", points.get(playerName.indexOf(player_name)));
    }

    public static void writeScores() {
        System.out.printf( "Your final score is %d.", points.get(playerName.indexOf(player_name)));
        try {
            FileWriter fileWriter = new FileWriter("src/com/dayfive/scores.txt");
            for (int i =0; i < playerName.size();i++) {
                fileWriter.append(playerName.get(i)).append("\n");
                fileWriter.append(String.valueOf(points.get(i))).append("\n");
            }
            fileWriter.close();
        }catch (IOException e) {
            System.out.println("It seems that Scores file is missing!\nContact the Admin for further assistance.");
        }
    }
}
