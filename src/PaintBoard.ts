export abstract class AbstractPaintBoard {
  protected static instance: AbstractPaintBoard;

  constructor(public canvas: string | null) {
    if (!canvas || typeof canvas !== 'string') {
      throw new Error('Canvas 엘리먼트를 입력하세요');
    }
  }

  abstract initialize(): void;
  abstract destroy(): void;

  static getInstance(): AbstractPaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}

export class ChromePaint extends AbstractPaintBoard {
  initialize(): void {
    console.log(this.canvas);
  }
  destroy(): void {}

  static override getInstance(): ChromePaint {
    if (!this.instance) {
      this.instance = new ChromePaint('Chrome');
    }
    return this.instance as ChromePaint;
  }
}

export class IEPaint extends AbstractPaintBoard {
  initialize(): void {
    console.log(this.canvas);
  }
  destroy(): void {}

  static override getInstance(): IEPaint {
    if (!this.instance) {
      this.instance = new IEPaint('IE');
    }
    return this.instance as IEPaint;
  }
}
