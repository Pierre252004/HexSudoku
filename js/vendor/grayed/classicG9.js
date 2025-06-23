let pickedValue = null;
document.querySelectorAll('.bank-number').forEach(num => {
  num.addEventListener('click', () => {
    document.querySelectorAll('.bank-number').forEach(n => n.classList.remove('selected'));
    num.classList.add('selected');
    pickedValue = num.textContent.trim();
  });
});
const cells = document.querySelectorAll('.sudoku-cell');

cells.forEach((cell, index) => {
  const row = Math.floor(index / 9);
  const col = index % 9;

  cell.dataset.row = row;
  cell.dataset.col = col;

  // Now each cell knows its position
});
// Handle drop into each cell
let lifes = 9;
let perfect=0;

document.querySelectorAll('.sudoku-cell').forEach(cell => {
  cell.addEventListener('click', () => {
    if (!pickedValue) return;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    let intial = cell.textContent.trim();
    let value = pickedValue;
    let check = board[row][col];
    if (value !== check) {
      if (intial === '') {
        lifes--;
        alert("Wrong move, You have " + lifes + " left."); // red highlight
        pickedValue = '';
      }
      else{
        pickedValue = check;
      }
    }
    else if (intial===''){
      perfect++;
    }
    if(perfect>60){
      let timeState;
      if(timem===undefined||times===undefined){
        timeState="\nUnlimited Time";
      }else{
        timeState="\nTime left: "+timem+":"+times;
      }
      showPopup("🎉 You Win!\nLife left: "+lifes+"."+timeState+".");
    }
    if(lifes===0){
      showPopup("💀 You Lose!\nYou have accomplished: "+perfect+".");
    }
    cell.textContent = pickedValue;
    // Remove any previous background classes
    cell.classList.remove('white', 'grayD','grayB','gray9','gray7','gray6','gray4','gray2','black');

    // HEX color check and page background change
    if (/^#([0-9A-F]{3}){1,2}$/i.test(pickedValue)) {
      if(pickedValue === "#FFFFFF"){
        cell.classList.add('white');
      }
      if(pickedValue === "#DFDFDF"){
        cell.classList.add('grayD');
      }
      if(pickedValue === "#BFBFBF"){
        cell.classList.add('grayB');
      }
      if(pickedValue === "#9F9F9F"){
        cell.classList.add('gray9');
      }
      if(pickedValue === "#7F7F7F"){
        cell.classList.add('gray7');
      }
      if(pickedValue === "#606060"){
        cell.classList.add('gray6');
      }
      if(pickedValue === "#404040"){
        cell.classList.add('gray4');
      }
      if(pickedValue === "#202020"){
        cell.classList.add('gray2');
      }
      if(pickedValue === "#000000"){
        cell.classList.add('black');
      }
    }
    pickedValue = value;
  });
});
const list =['#FFFFFF','#DFDFDF','#BFBFBF','#9F9F9F','#7F7F7F','#606060','#404040','#202020','#000000'];
const board = [];
let rightBoard=[];
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function game9x9(list,board){
  const shuffled = shuffleArray(list);
  const total = shuffled.length;
  for(let i=0;i<total;i++){
    if(((i+1)%3-1)===0){
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      let a;
      a= shuffled.shift();
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      shuffled.push(a);
      a= shuffled.shift();
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      shuffled.push(a)
      a= shuffled.shift();
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      shuffled.push(a)
    }
    else{
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
      shuffled.push(shuffled.shift());
    }
    let arr=[...shuffled];
    board.push(arr);
  }
}
let timem,times;
function startTimerFromPrompt() {
  let time = prompt("⏱ Enter the timer duration in 'mm:ss' format:", "00:00");
  let seconds=time.split(":")
  let timeSpan = parseInt(seconds[0])*60+parseInt(seconds[1]);
  if (isNaN(timeSpan) || timeSpan <= 0||lifes === 61) {
    return;
  }
  const timerDisplay = document.getElementById('timer');

  const interval = setInterval(() => {
    const minutes = String(Math.floor(timeSpan / 60)).padStart(2, '0');
    const secs = String(timeSpan % 60).padStart(2, '0');
    timerDisplay.textContent = '⏱ Time: '+minutes+':'+secs+'';

    if(timeSpan <= 0){
      clearInterval(interval);
      showPopup("💀 You Lose!\nYou have accomplished: "+perfect+".");
    }
    timeSpan--;
    timem = minutes;
    times = secs;
    if (lifes === 61) {
      clearInterval(interval);
    }

  }, 1000);
}

function setBoard(matrix) {
  const cells = document.querySelectorAll('.sudoku-cell');
  let index = 0;
  let max = cells.length;
  let choosen = [];
  while (choosen.length<Math.floor(max*0.25)){
    let rIndex = Math.floor(Math.random() * max);
    if(choosen.indexOf(rIndex)<0){
      choosen.push(rIndex);
    }
  }
  matrix.forEach(row => {
    let view =[];
    row.forEach(value => {
      const cell = cells[index];
      let test=choosen.indexOf(index)>-1;
      if(test) {
        cell.textContent = value;
        view.push(value);
      }
      else{
        cell.textContent = '';
        view.push('');
      }

      // Clear previous color classes
      cell.classList.remove('white', 'grayD','grayB','gray9','gray7','gray6','gray4','gray2','black');

      if(test){
        // Add background if value is a known HEX color
        switch (value.toUpperCase()) {
          case '#FFFFFF':
            cell.classList.add('white');
            break;
          case '#DFDFDF':
            cell.classList.add('grayD');
            break;
          case '#BFBFBF':
            cell.classList.add('grayB');
            break;
          case '#9F9F9F':
            cell.classList.add('gray9');
            break;
          case '#7F7F7F':
            cell.classList.add('gray7');
            break;
          case '#606060':
            cell.classList.add('gray6');
            break;
          case '#404040':
            cell.classList.add('gray4');
            break;
          case '#202020':
            cell.classList.add('gray2');
            break;
          case '#000000':
            cell.classList.add('black');
            break;
        }
      }

      index++;
    });
    rightBoard.push(view);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  game9x9(list,board);
  setBoard(board);
  alert('You have 9 lives. If the timer stops or you no longer have any lives. You will lose the game.\nYou could only enter variables by clicking on you choice for input and click on where you want to place it.\nPlease know that once you enter the game you no longer have an grayscale options');
  startTimerFromPrompt();
});
function showPopup(message) {
  document.getElementById('popup-message').textContent = message;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
  window.location.href ="../../game.html";
}
