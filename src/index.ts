import { ChromePaintFactory } from './PaintBoardFactory.js';

function main() {
  const factory = ChromePaintFactory;
  const paintBoard = factory.createPaintBoard();
  const paintBoardMenu = factory.createPaintBoardMenu(
    paintBoard,
    document.querySelector('#menu')!
  );
  paintBoard.initialize();
  paintBoardMenu.initialize([
    'back',
    'forward',
    'color',
    'pipette',
    'pen',
    'circle',
    'rectangle',
    'eraser',
    'save',
  ]);
}

main();
