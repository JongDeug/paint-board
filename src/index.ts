import AbstractPaintBoardFactory from './PaintBoardFactory.js';
import { ChromePaintFactory, IEPaintFactory } from './PaintBoardFactory.js';

function main(board: typeof AbstractPaintBoardFactory) {
  const paintBoard = board.createPaintBoard();
  paintBoard.initialize();
  paintBoard.destroy();

  const paintBoardMenu = board.createPaintBoardMenu();
  paintBoardMenu.initialize();
  paintBoardMenu.destroy();
}

main(ChromePaintFactory);
main(IEPaintFactory);
