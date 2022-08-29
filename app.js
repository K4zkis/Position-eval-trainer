//import * from 'chessboard-element';
import { Chess } from 'chess.js'

const board = document.querySelector('chess-board');

document.querySelector('#showPositionBtn').addEventListener('click', () => { //() => is the same as writing function 
  console.log('Current position as an Object:');
  console.log(board.position);

  console.log('Current position as a FEN string:');
  console.log(board.fen());
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