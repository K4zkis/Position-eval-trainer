//import * from 'chessboard-element';
import {Chess} from 'chess.js';

const board = document.querySelector('chess-board');
const chess = new Chess()

document.querySelector('#showPositionBtn').addEventListener('click', () => { //() => is the same as writing function 
  console.log('Current position as an Object:');
  console.log(board.position);

  console.log('Current position as a FEN string:');
  console.log(board.fen());
}); 

//here a loop starts thaat moves pieces as long as move number is not reached

let x = (chess.move('e4')); //{ color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' }       from-to
//(x.from+"-"+x.to);

document.querySelector('#moveBtn').addEventListener('click', () => {
    board.move(x.from+"-"+x.to);
});
document.querySelector('#startBtn').addEventListener('click', () => {
    board.start();
});
document.querySelector('#clearBtn').addEventListener('click', () => {
    board.clear();
});

fetch('./samplegame.json')
    .then((response) => response.json())
    .then((json) => console.log(json.Game.Notation));

 