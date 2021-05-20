let piece = 'rook';

pieceLowCase = piece.toLowerCase();

switch (pieceLowCase){
  case 'king':
    console.log(piece + ' One space in any direction.');
    break;
  case 'queen':
    console.log(piece + ' All empty spaces in any direction.');
    break;
  case 'bishop':
    console.log(piece + ' All empty spaces in four diagonals.');
    break;
  case 'knight':
    console.log(piece + ' Leap two spaces obliquely (in an L-shaped path).');
    break;
  case 'rook':
    console.log(piece + ' All empty space in four straight lines.');
    break;
  case 'pawn':
    console.log(piece + ' Move: One space forward only. Capture: one space diagonally forward.');
    break;
  default:
    console.log(piece + '  Não é uma peça válida.');
}