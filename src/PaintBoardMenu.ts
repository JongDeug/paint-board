export default abstract class AbstractPaintBoardMenu {
  protected static instance: AbstractPaintBoardMenu;

  constructor(public canvas: string | null) {
    if (!canvas || typeof canvas !== 'string') {
      throw new Error('Canvas 엘리먼트를 입력하세요');
    }
  }

  abstract initialize(): void;
  abstract destroy(): void;

  static getInstance(): AbstractPaintBoardMenu {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}

export class ChromePaintMenu extends AbstractPaintBoardMenu {
  initialize(): void {
    console.log(this.canvas);
  }
  destroy(): void {}

  static override getInstance(): ChromePaintMenu {
    if (!this.instance) {
      this.instance = new ChromePaintMenu('IE');
    }
    return this.instance as ChromePaintMenu;
  }
}

export class IEPaintMenu extends AbstractPaintBoardMenu {
  initialize(): void {
    console.log(this.canvas);
  }
  destroy(): void {}

  static override getInstance(): IEPaintMenu {
    if (!this.instance) {
      this.instance = new IEPaintMenu('IE');
    }
    return this.instance as IEPaintMenu;
  }
}
