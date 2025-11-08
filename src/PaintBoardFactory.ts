import { PaintBoard, ChromePaint, IEPaint } from './PaintBoard.js';
import {
  ChromePaintMenu,
  IEPaintMenu,
  AbstractPaintBoardMenu,
} from './PaintBoardMenu.js';

export abstract class PaintBoardFactory {
  static createPaintBoard(): PaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }

  static createPaintBoardMenu(
    paintBoard: PaintBoard,
    dom: HTMLElement
  ): AbstractPaintBoardMenu {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}

export class ChromePaintFactory extends PaintBoardFactory {
  static override createPaintBoard() {
    return ChromePaint.getInstance();
  }

  static override createPaintBoardMenu(
    paintBoard: PaintBoard,
    dom: HTMLElement
  ) {
    return ChromePaintMenu.getInstance(paintBoard, dom);
  }
}

export class IEPaintFactory extends PaintBoardFactory {
  static override createPaintBoard() {
    return IEPaint.getInstance();
  }

  static override createPaintBoardMenu(
    paintBoard: PaintBoard,
    dom: HTMLElement
  ) {
    return IEPaintMenu.getInstance(paintBoard, dom);
  }
}
