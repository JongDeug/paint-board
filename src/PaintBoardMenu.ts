import type { PaintBoard } from './PaintBoard.js';
import {
  PaintBoardMenuButton,
  PaintBoardMenuInput,
} from './PaintBoardMenuBtn.js';

type BtnType =
  | 'pen'
  | 'circle'
  | 'rectangle'
  | 'eraser'
  | 'back'
  | 'forward'
  | 'save'
  | 'pipette'
  | 'color';

export abstract class PaintBoardMenu {
  public paintBoard: PaintBoard;
  public dom: HTMLElement;
  protected static instance: PaintBoardMenu;

  constructor(paintBoard: PaintBoard, dom: HTMLElement) {
    this.paintBoard = paintBoard;
    this.dom = dom;
  }

  abstract initialize(types: BtnType[]): void;

  static getInstance(paintBoard: PaintBoard, dom: HTMLElement) {}
}

export class ChromePaintMenu extends PaintBoardMenu {
  initialize(types: BtnType[]): void {
    types.forEach(this.drawButtonByType.bind(this));
  }

  static override getInstance(
    paintBoard: PaintBoard,
    dom: HTMLElement
  ): ChromePaintMenu {
    if (!this.instance) {
      this.instance = new ChromePaintMenu(paintBoard, dom);
    }
    return this.instance as ChromePaintMenu;
  }

  drawButtonByType(type: BtnType) {
    switch (type) {
      case 'back': {
        const btn = new PaintBoardMenuButton.Builder(this, '뒤로').build();
        btn.draw();
        return btn;
      }
      case 'forward': {
        const btn = new PaintBoardMenuButton.Builder(this, '앞으로').build();
        btn.draw();
        return btn;
      }
      case 'color': {
        const btn = new PaintBoardMenuInput.Builder(this, '컬러').build();
        btn.draw();
        return btn;
      }
      case 'pipette': {
        const btn = new PaintBoardMenuButton.Builder(this, '스포이드').build();
        btn.draw();
        return btn;
      }
      case 'eraser': {
        const btn = new PaintBoardMenuButton.Builder(this, '지우개').build();
        btn.draw();
        return btn;
      }
      case 'pen': {
        const btn = new PaintBoardMenuButton.Builder(this, '펜').build();
        btn.draw();
        return btn;
      }
      case 'circle': {
        const btn = new PaintBoardMenuButton.Builder(this, '원').build();
        btn.draw();
        return btn;
      }
      case 'rectangle': {
        const btn = new PaintBoardMenuButton.Builder(this, '사각형').build();
        btn.draw();
        return btn;
      }
      case 'save': {
        const btn = new PaintBoardMenuButton.Builder(this, '저장').build();
        btn.draw();
        return btn;
      }
      default:
        throw new Error(`알 수 없는 타입 ${type}`);
    }
  }
}

export class IEPaintMenu extends PaintBoardMenu {
  initialize(types: BtnType[]): void {}

  static override getInstance(
    paintBoard: PaintBoard,
    dom: HTMLElement
  ): IEPaintMenu {
    if (!this.instance) {
      this.instance = new IEPaintMenu(paintBoard, dom);
    }
    return this.instance as IEPaintMenu;
  }
}
