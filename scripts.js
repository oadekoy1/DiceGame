const gmeBtn = document.querySelector('#play-game')
const resetBtn = document.querySelector('#reset')
const winnerDiv = document.querySelector('#winner')

//================ Task 1 ==============================
        // Create a function (rollDice)
        function rollDice() {

            // Roll Two "dice" one for the player and one for the computer
            // Use one variables for the (player) and one for the (computer)
            // (use a random number from 1-6 to represent a dice)
            const player = Math.ceil(Math.random() * 6) 
            const computer = Math.ceil(Math.random() * 6) 
            let winner = ''
        
            // If the player's dice roll is higher than the computer dice roll,
            // console.log("PLAYER WINS")
            if(player > computer) {
                console.log(`Player rolls: ${player} vs. Computer rolls: ${computer}`);
                winner = 'PLAYER WINS!!!'

            // otherwise, log ("COMPUTER WINS")
            } else if (player < computer) {
                console.log(`Player rolls: ${player} vs. Computer rolls: ${computer}`);
                winner = 'COMPUTER WINS!!!'

            } else if (player === computer) {
                console.log(`Player rolls: ${player} vs. Computer rolls: ${computer}`);
                winner = 'Game is tied.....'
            }
            
            // Use a ternary to check for the winner
            // ----- After testing it, remove the console.log()
            // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
            // FINALLY: return all three variables using an array
            return [player, computer, winner]

        }

        const results = rollDice()
        console.log(results);
       

// ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      function displayScore(results) {

          // Create a new a div displaying:
          // Computer Score: , Player Score:  & the Winner:
          // so there is a running record of game data.
        //   const results = rollDice()
          const div = document.createElement('div')
          // div.textContent = `Computer Score: ${results[1]} , Player Score: ${results[0]}  & the Winner: ${results[2]}`
          div.innerHTML = `<p>Computer Score: ${results[1]}</p> <p>Player Score: ${results[0]}</p> <p>The Winner: ${results[2]} </p>`
          // Append the new div to the parent div on the HTML.
          winnerDiv.appendChild(div)
      }
   

      // Create a Reset Function (resetGame)
      function reset() {
          // REMOVE the div with the game score, leaving just the parent div
          // creating a clean slate for a new set of games :)
            document.querySelector('#winner').firstElementChild.remove()

      }

// ============== Final Step =====================
      // Create a new function (playGame):
      function playGame() {

      // Call the rollDice and the displayScore function inside this function
           const results = rollDice()
            displayScore(results)
      }

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button
      gmeBtn.addEventListener('click', playGame)
      resetBtn.addEventListener('click', reset)
      
      // ===== Now let's host this game in GITHUB PAGES and style it !!!