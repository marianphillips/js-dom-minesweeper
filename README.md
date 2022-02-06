# Minesweeper
In this exercise we're building a simplified version of the popular Minesweeper game. All user interaction should be done through the prompt, so you'll be focusing on the logic.

## Instructions
- Create a script that models a board with 10 spaces in it. You don't need to render anything to the DOM at this point, just create a way to represent a board with 10 spaces.
- Add a "mine" to one of these spaces
- Ask the user to enter an index (1-10) for the board using `prompt`
- They will keep entering indices until they either hit a mine and lose, or clear all the empty spaces and win
- When the game ends, let them know the outcome by rendering the final state of the board using the DOM object. 
 - Cleared spaces should be green, unchecked spaces grey, and spaces with a hit mine red.

## Challenge
Allow the user to pick a difficulty at the start of the game
For example, they can choose between "easy", "normal" and "hard"
Depending on the difficulty, add more or fewer mines to the board

## Tips
- Think about how can you repeatedly ask users for input until a condition is met?

## Challenge 2
If you have time, a good idea is to evaluate your options. For example, try to think about different ways you could represent a board, and explore whether they make it easier to manage it all.