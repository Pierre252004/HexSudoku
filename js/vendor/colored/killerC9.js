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
let lifes = 6;
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
      pickedValue = value;
    }
    if(perfect>26){
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
    cell.classList.remove('red', 'green','blue','cyon','pink','yellow','light_gray','dark_gray','black');

    // HEX color check and page background change
    if (/^#([0-9A-F]{3}){1,2}$/i.test(pickedValue)) {
      if(pickedValue === "#FF0000"){
        cell.classList.add('red');
      }
      if(pickedValue === "#00FF00"){
        cell.classList.add('green');
      }
      if(pickedValue === "#0000FF"){
        cell.classList.add('blue');
      }
      if(pickedValue === "#FF00FF"){
        cell.classList.add('pink');
      }
      if(pickedValue === "#FFFF00"){
        cell.classList.add('yellow');
      }
      if(pickedValue === "#00FFFF"){
        cell.classList.add('cyon');
      }
      if(pickedValue === "#BBBBBB"){
        cell.classList.add('light_gray');
      }
      if(pickedValue === "#444444"){
        cell.classList.add('dark_gray');
      }
      if(pickedValue === "#000000"){
        cell.classList.add('black');
      }
    }
    pickedValue = value;
  });
});
const board = [];
const boardBorder = [];
const boardSums = [];
function choseSet(num) {
  if (num === 1) {
    return [
      ['#000000', '#BBBBBB', '#444444', '#FF0000', '#0000FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF00FF'],
      ['#00FFFF', '#FFFF00', '#FF00FF', '#000000', '#BBBBBB', '#444444', '#FF0000', '#0000FF', '#00FF00'],
      ['#FF0000', '#0000FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF00FF', '#000000', '#BBBBBB', '#444444'],
      ['#BBBBBB', '#444444', '#000000', '#0000FF', '#00FF00', '#FF0000', '#FFFF00', '#FF00FF', '#00FFFF'],
      ['#FFFF00', '#FF00FF', '#00FFFF', '#BBBBBB', '#444444', '#000000', '#0000FF', '#00FF00', '#FF0000'],
      ['#0000FF', '#00FF00', '#FF0000', '#FFFF00', '#FF00FF', '#00FFFF', '#BBBBBB', '#444444', '#000000'],
      ['#444444', '#000000', '#BBBBBB', '#00FF00', '#FF0000', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00'],
      ['#FF00FF', '#00FFFF', '#FFFF00', '#444444', '#000000', '#BBBBBB', '#00FF00', '#FF0000', '#0000FF'],
      ['#00FF00', '#FF0000', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00', '#444444', '#000000', '#BBBBBB']
    ];
  } else {
    return [
      ['#000000', '#444444', '#BBBBBB', '#0000FF', '#FF0000', '#00FF00', '#FF00FF', '#00FFFF', '#FFFF00'],
      ['#FF00FF', '#00FFFF', '#FFFF00', '#000000', '#444444', '#BBBBBB', '#0000FF', '#FF0000', '#00FF00'],
      ['#0000FF', '#FF0000', '#00FF00', '#FF00FF', '#00FFFF', '#FFFF00', '#000000', '#444444', '#BBBBBB'],
      ['#444444', '#BBBBBB', '#000000', '#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FFFF00', '#FF00FF'],
      ['#00FFFF', '#FFFF00', '#FF00FF', '#444444', '#BBBBBB', '#000000', '#FF0000', '#00FF00', '#0000FF'],
      ['#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FFFF00', '#FF00FF', '#444444', '#BBBBBB', '#000000'],
      ['#BBBBBB', '#000000', '#444444', '#00FF00', '#0000FF', '#FF0000', '#FFFF00', '#FF00FF', '#00FFFF'],
      ['#FFFF00', '#FF00FF', '#00FFFF', '#BBBBBB', '#000000', '#444444', '#00FF00', '#0000FF', '#FF0000'],
      ['#00FF00', '#0000FF', '#FF0000', '#FFFF00', '#FF00FF', '#00FFFF', '#BBBBBB', '#000000', '#444444']
    ];
  }
}
function choseSet1(num) {
  let mux;
  switch (num) {
    case 1:
      mux = [
        ['lU', 'bT', 'rU', 'tU', 'tU', 'tU', 'bU', 'bU', 'bU'],
        ['aA', 'aA', 'aA', 'lU', 'bT', 'rU', 'lU', 'bT', 'rU'],
        ['tU', 'tU', 'tU', 'bU', 'bU', 'bU', 'lU', 'bT', 'rU'],
        ['lU', 'bT', 'rU', 'tU', 'tU', 'tU', 'bU', 'bU', 'bU'],
        ['aA', 'aA', 'aA', 'lU', 'bT', 'rU', 'lU', 'bT', 'rU'],
        ['tU', 'tU', 'tU', 'bU', 'bU', 'bU', 'lU', 'bT', 'rU'],
        ['lU', 'bT', 'rU', 'tU', 'tU', 'tU', 'bU', 'bU', 'bU'],
        ['aA', 'aA', 'aA', 'lU', 'bT', 'rU', 'lU', 'bT', 'rU'],
        ['tU', 'tU', 'tU', 'bU', 'bU', 'bU', 'lU', 'bT', 'rU']
      ];
      break;
    case 2:
      mux = [
        ['lU', 'bT', 'rU', 'lU', 'bT', 'rU', 'aA', 'aA', 'aA'],
        ['aA', 'aA', 'aA', 'lU', 'bT', 'rU', 'tU', 'tU', 'tU'],
        ['lU', 'bT', 'rU', 'aA', 'aA', 'aA', 'lU', 'bT', 'rU'],
        ['lU', 'bT', 'rU', 'lU', 'bT', 'rU', 'aA', 'aA', 'aA'],
        ['bU', 'bU', 'bU', 'lU', 'bT', 'rU', 'tU', 'tU', 'tU'],
        ['lU', 'bT', 'rU', 'aA', 'aA', 'aA', 'lU', 'bT', 'rU'],
        ['lU', 'bT', 'rU', 'lU', 'bT', 'rU', 'aA', 'aA', 'aA'],
        ['bU', 'bU', 'bU', 'lU', 'bT', 'rU', 'lU', 'bT', 'rU'],
        ['lU', 'bT', 'rU', 'aA', 'aA', 'aA', 'lU', 'bT', 'rU']
      ];
      break;
  }
  return mux;
}
function choseSet2(num){
  let mux;
  switch (num){
    case 1:
      mux = [
        ['','t:#FFFFFF','','','','','l:#FFFFFF','b:#FFFFFF','r:#FFFFFF'],
        ['l:#00FFFF','t:#FFFF00','r:#FF00FF','l:#FFFFFF','','','','b:#FFFFFF',''],
        ['l:#FFFFFF','t:#FFFFFF','r:#FFFFFF','','','','','b:#FFFFFF',''],
        ['','t:#FFFFFF','','','','','l:#FFFFFF','b:#FFFFFF','r:#FFFFFF'],
        ['l:#FFFF00','t:#FF00FF','r:#00FFFF','l:#FFFFFF','','','','b:#FFFFFF',''],
        ['l:#FFFFFF','t:#FFFFFF','r:#FFFFFF','','','','','b:#FFFFFF',''],
        ['','t:#FFFFFF','','','','','l:#FFFFFF','b:#FFFFFF','r:#FFFFFF'],
        ['l:#FF00FF','t:#00FFFF','r:#FFFF00','l:#FFFFFF','','','','b:#FFFFFF',''],
        ['l:#FFFFFF','t:#FFFFFF','r:#FFFFFF','','','','','b:#FFFFFF','']
      ];
      break;
    case 2:
      mux = [
        ['','t:#FFFFFF','','l:#FFFFFF','','','l:#FF00FF','b:#00FFFF','r:#FFFF00'],
        ['l:#FF00FF','t:#00FFFF','r:#FFFF00','l:#FFFFFF','','','l:#FFFFFF','t:#FFFFFF','r:#FFFFFF'],
        ['','t:#FFFFFF','','r:#FF00FF','b:#00FFFF','l:#FFFF00','','b:#FFFFFF',''],
        ['','t:#FFFFFF','r:#FFFFFF','','','','l:#00FFFF','b:#FFFF00','r:#FF00FF'],
        ['','b:#FFFFFF','','l:#FFFFFF','','','','t:#FFFFFF',''],
        ['','t:#FFFFFF','','r:#00FFFF','b:#FFFF00','l:#FF00FF','','b:#FFFFFF',''],
        ['','t:#FFFFFF','','r:#FFFFFF','','','l:#FFFF00','b:#FF00FF','r:#00FFFF'],
        ['l:#FFFFFF','','r:#FFFFFF','l:#FFFFFF','','','','b:#FFFFFF',''],
        ['','t:#FFFFFF','','r:#FFFF00','b:#FF00FF','l:#00FFFF','','b:#FFFFFF','']
      ];
      break;
  }
  return mux;
}
function game9x9(board,boardBorder,boardSums){
  let num = Math.ceil(Math.random() * (2));
  const mux = choseSet(num);
  const mux1 = choseSet1(num);
  const mux2 = choseSet2(num);
  const total = mux.length;
  for(let i=0;i<total;i++){
    board.push(mux.shift());
    boardBorder.push(mux1.shift());
    boardSums.push(mux2.shift());
  }
}
let timem,times;
function startTimerFromPrompt() {
  let time = prompt("⏱ Enter the timer duration in 'mm:ss' format:", "00:00");
  let seconds=time.split(":");
  let timeSpan = parseInt(seconds[0])*60+parseInt(seconds[1]);
  if (isNaN(timeSpan) || timeSpan <= 0||lifes === 12) {
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
    if (lifes === 12) {
      clearInterval(interval);
    }

  }, 1000);
}
function setBoard(matrix, matrix1, matrix2) {
  const cells = document.querySelectorAll('.sudoku-cell');
  const cells1 = document.querySelectorAll('.surounding');
  const cells2 = document.querySelectorAll('.hex-value');
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
      cell.classList.remove(
        'red', 'green', 'blue', 'cyon', 'pink',
        'yellow', 'light_gray', 'dark_gray', 'black'
      );

      if(test){
        // Add background if value is a known HEX color
        switch (value.toUpperCase()) {
          case '#FF0000':
            cell.classList.add('red');
            break;
          case '#00FF00':
            cell.classList.add('green');
            break;
          case '#0000FF':
            cell.classList.add('blue');
            break;
          case '#FF00FF':
            cell.classList.add('pink');
            break;
          case '#FFFF00':
            cell.classList.add('yellow');
            break;
          case '#00FFFF':
            cell.classList.add('cyon');
            break;
          case '#BBBBBB':
            cell.classList.add('light_gray');
            break;
          case '#444444':
            cell.classList.add('dark_gray');
            break;
          case '#000000':
            cell.classList.add('black');
            break;
        }
      }
      index++;
    });
  });
  index = 0;
  matrix1.forEach(row => {
    row.forEach(value => {
      const cell1 = cells1[index];
      // Clear previous color classes
      cell1.classList.remove(
        'left-round', 'top-round', 'bottom-round', 'right-round', 'right-axis', 'right-top', 'left-top',
        'left-axis-back', 'right-axis-back', 'left-axis', 'bottom-top', 'right-left', 'bottom-left',
        'line-left', 'line-right', 'line-top', 'line-bottom', 'all-arround', 'bottom-right'
      );

      switch (value) {
        case 'lU':
          cell1.classList.add('left-round');
          break;
        case 'tU':
          cell1.classList.add('top-round');
          break;
        case 'bU':
          cell1.classList.add('bottom-round');
          break;
        case 'rU':
          cell1.classList.add('right-round');
          break;
        case 'rA':
          cell1.classList.add('right-axis');
          break;
        case 'lAB':
          cell1.classList.add('left-axis-back');
          break;
        case 'rAB':
          cell1.classList.add('right-axis-back');
          break;
        case 'lA':
          cell1.classList.add('left-axis');
          break;
        case 'bR':
          cell1.classList.add('bottom-right');
          break;
        case 'bL':
          cell1.classList.add('bottom-left');
          break;
        case 'rT':
          cell1.classList.add('right-top');
          break;
        case 'tL':
          cell1.classList.add('left-top');
          break;
        case 'bT':
          cell1.classList.add('bottom-top');
          break;
        case 'rL':
          cell1.classList.add('right-left');
          break;
        case 'lL':
          cell1.classList.add('line-left');
          break;
        case 'lR':
          cell1.classList.add('line-right');
          break;
        case 'lT':
          cell1.classList.add('line-top');
          break;
        case 'lB':
          cell1.classList.add('line-bottom');
          break;
        case 'aA':
          cell1.classList.add('all-arround');
          break;
      }
      index++;
    });
  });
  index = 0;
  matrix2.forEach(row => {
    row.forEach(value => {
      const cell2 = cells2[index];
      // Clear previous color classes
      cell2.classList.remove(
        'hex-left9','hex-right9','hex-top9','hex-bottom9','hex-null'
      );
      let values;
      if( value === ''){
        values = [['#'],['#']];
      }
      else{
        values = value.split(':');
      }
      switch (values[0]) {
        case 'l':
          cell2.textContent = values[1];
          cell2.classList.add('hex-left9');
          break;
        case 'r':
          cell2.textContent = values[1];
          cell2.classList.add('hex-right9');
          break;
        case 't':
          cell2.textContent = values[1];
          cell2.classList.add('hex-top9');
          break;
        case 'b':
          cell2.textContent = values[1];
          cell2.classList.add('hex-bottom9');
          break;
        default:
          cell2.textContent = '';
          cell2.classList.add('hex-null');
      }

      index++;
    });
  });
}
window.addEventListener('DOMContentLoaded', () => {
  game9x9(board,boardBorder,boardSums);
  setBoard(board,boardBorder,boardSums);
  alert('You have 4 lives. If the timer stops or you no longer have any lives. You will lose the game.\nYou could only enter variables by clicking on you choice for input and click on where you want to place it.\nFor killer Sudoku, the sum is displayed and the amount of element is found in the dasked boarded.\nPlease know that once you enter the game you no longer have an grayscale options');
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
