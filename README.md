![Screenshot 2024-11-12 220158](https://github.com/user-attachments/assets/bcefd51b-0c1e-4097-8363-b25a43994ac7)

![Screenshot 2024-11-12 220315](https://github.com/user-attachments/assets/10bb8314-0df3-4da3-a180-06105d4990a9)

![Screenshot 2024-11-12 220104](https://github.com/user-attachments/assets/697c9bff-b6c0-4000-8368-65217ff7ab4a)

The `CricketScoreTracker` component is a React app designed to keep track of a cricket game’s score, wickets, and balls bowled. It also determines if India has won based on certain conditions. Here’s a breakdown of the component's functionality:

1. **State Variables**:
   - `score`: Tracks the current score, initially set to 76.
   - `wickets`: Tracks the current number of wickets, initially set to 2.
   - `balls`: Tracks the total number of balls bowled, initially set to 50.
   - `indiaWon`: Tracks if India has won the game, initially set to `false`.

2. **Game Logic**:
   - **Increase Score**: Function `increaseScore` adds a specified number of runs (1, 4, or 6) to the score. If the score exceeds 100, it sets `indiaWon` to `true`, indicating India has won.
   - **Increase Wicket**: Function `increaseWicket` adds one wicket to the count, up to a maximum of 12, provided India hasn’t already won.
   - **Increase Balls**: Function `increaseBalls` increments the number of balls. Overs are displayed in a format where 6 balls make up one over.

3. **Rendering**:
   - Displays the current `score`, `wickets`, and `overs` (calculated from `balls`).
   - Buttons to add runs (`Add 1`, `Add 4`, `Add 6`), a wicket, and a ball.
   - Displays a "India Won" message if the score crosses 100.

4. **Styling**:
   - The component assumes custom styles are added in `CricketScoreTracker.css` to style elements like `scoreCount`, `wicketCount`, `overCount`, and `status`.

This setup allows users to interact with the score tracker as if they're managing a live cricket game, making it an engaging utility for cricket enthusiasts.
