import { AbstractPaintBoard, ChromePaint, IEPaint } from './PaintBoard';
import { ChromePaintMenu } from './PaintBoardMenu';

export default abstract class AbstractPaintBoardFactory {
  static createPaintBoard(): AbstractPaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }

  static createPaintBoardMenu(): AbstractPaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}

export class ChromePaintFactory extends AbstractPaintBoardFactory {
  static override createPaintBoard() {
    return ChromePaint.getInstance();
  }

  static override createPaintBoardMenu(): AbstractPaintBoard {
    return ChromePaintMenu.getInstance();
  }
}

export class IEPaintFactory extends AbstractPaintBoardFactory {
  static override createPaintBoard() {
    return IEPaint.getInstance();
  }

  static override createPaintBoardMenu(): AbstractPaintBoard {
    return IEPaint.getInstance();
  }
}
