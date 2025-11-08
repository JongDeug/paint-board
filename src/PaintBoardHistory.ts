import { PaintBoard } from './PaintBoard.js';
import { IEPaint, ChromePaint } from './PaintBoard.js';

export abstract class PaintBoardHistory {
  paintBoard: PaintBoard;

  protected constructor(paintBoard: PaintBoard) {
    this.paintBoard = paintBoard;
  }

  abstract initialize(): void;

  static getInstance(paintBoard: PaintBoard) {}
}

export class IEPaintBoardHistory extends PaintBoardHistory {
  private static instance: IEPaintBoardHistory;

  override initialize(): void {}

  static override getInstance(paintBoard: IEPaint): IEPaintBoardHistory {
    if (!this.instance) {
      this.instance = new IEPaintBoardHistory(paintBoard);
    }
    return this.instance;
  }
}

export class ChromePaintBoardHistory extends PaintBoardHistory {
  private static instance: ChromePaintBoardHistory;

  override initialize(): void {}

  static override getInstance(
    paintBoard: ChromePaint
  ): ChromePaintBoardHistory {
    if (!this.instance) {
      this.instance = new ChromePaintBoardHistory(paintBoard);
    }
    return this.instance;
  }
}
