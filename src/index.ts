import AbstractPaintBoardFactory from './AbstractPaintBoardFactory.js';
import ChromePaint from './ChromePaint.js';
import IEPaint from './IEPaint.js';

class ChromePaintFactory extends AbstractPaintBoardFactory {
  static override createPaintBoard() {
    return ChromePaint.getInstance();
  }
}

class IEPaintFactory extends AbstractPaintBoardFactory {
  static override createPaintBoard() {
    return IEPaint.getInstance();
  }
}

function main(board: typeof AbstractPaintBoardFactory) {
  const paintBoard = board.createPaintBoard();
  paintBoard.initialize();
  paintBoard.destroy();
}

main(ChromePaintFactory);
main(IEPaintFactory);
