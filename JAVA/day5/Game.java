package com.dayfive;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Game {
    static ArrayList<String> questions = new ArrayList<>();
    static ArrayList<String> option1 = new ArrayList<>();
    static ArrayList<String> option2 = new ArrayList<>();
    static ArrayList<Integer> answers = new ArrayList<>();
    static  int scores = 0;
    Scanner scanner = new Scanner(System.in);

    public void initGame() throws FileNotFoundException {
        File file = new File("src/com/dayfive/questions.txt");  //TODO
        Scanner scan = new Scanner(file);
        while (scan.hasNextLine()) {
            questions.add(scan.nextLine());
            option1.add(scan.nextLine());
            option2.add(scan.nextLine());
            answers.add(Integer.parseInt(scan.nextLine()));
        }
    }

    public void gameplay() {
        for (int i = 0; i < questions.size(); i++) {
            System.out.printf("Q%d.%s", i + 1, questions.get(i));
            System.out.printf("\n1.%s", option1.get(i));
            System.out.printf("\n2.%s\n", option2.get(i));
            int choice = scanner.nextInt();
            if (choice == answers.get(i)) {
                System.out.println("That's correct.");
                scores += 100;
            } else {
                System.out.println("Oh! That's wrong.");
                scores -= 50;
            }
            System.out.println("You are current score is:" + scores);
            Scores.points.set(Scores.playerName.indexOf(Scores.player_name), scores);
        }
        System.out.println("Thanks for playing. Your final score is:" + scores);
        while (true) {
            System.out.println("What do you want to do now:\n1. Replay\n2.Go back to main menu");
            int decision = scanner.nextInt();
            if (decision == 1) {
                gameplay();
            } else if (decision == 2) {
                break;
            } else {
                System.out.println("Invalid choice");
            }
        }
    }

    public void editGameplay() {
        int count = 3;
        do {
            System.out.println("Enter password to continue:");
            String pass = scanner.nextLine();
            if (pass.equals("lemme")) {
                addQuestion();
                count = 0;
            } else {
                System.out.println("That's an incorrect password.\nLet's try again");
                count--;
            }
        } while (count != 0);
    }

    public void addQuestion() {
        System.out.println("Enter your question:    (-1 to EXIT)");
        String question = scanner.nextLine();
        if (question.equals("-1")){
            System.exit(0);
        }else {
            questions.add(question);
        }
        System.out.println("Enter option 1:");
        option1.add(scanner.nextLine());
        System.out.println("Enter option 2:");
        option2.add(scanner.nextLine());
        System.out.println("Which is the correct option?");
        answers.add(scanner.nextInt());
        try {
            FileWriter my_file = new FileWriter("src/com/dayfive/questions.txt"); //TODO
            for (int i =0; i < questions.size();i++) {
                my_file.append(questions.get(i)).append("\n");
                my_file.append(option1.get(i)).append("\n");
                my_file.append(option2.get(i)).append("\n");
                my_file.append(String.valueOf(answers.get(i))).append("\n");

            } my_file.close();
        } catch (IOException e) {
            System.out.println("Error!");
        }
    }
}
