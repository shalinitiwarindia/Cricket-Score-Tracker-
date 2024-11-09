![Screenshot (9)](https://github.com/user-attachments/assets/273d1dfb-c57d-4e82-978c-32c3dbca349f)
![Screenshot (8)](https://github.com/user-attachments/assets/d7c3bfc2-d3b7-40f3-9d9e-553b56ec0e1e)
![Screenshot (7)](https://github.com/user-attachments/assets/57881e31-4241-43e9-b844-90af7c1a183c)
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
