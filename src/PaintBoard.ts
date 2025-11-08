export abstract class PaintBoard {
  protected static instance: PaintBoard;

  constructor(public canvas: HTMLCanvasElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas 엘리먼트를 입력하세요');
    }
  }

  abstract initialize(): void;

  static getInstance(): PaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}

export class ChromePaint extends PaintBoard {
  initialize(): void {
    console.log(this.canvas);
  }

  static override getInstance(): ChromePaint {
    if (!this.instance) {
      this.instance = new ChromePaint(document.querySelector('canvas'));
    }
    return this.instance as ChromePaint;
  }
}

export class IEPaint extends PaintBoard {
  initialize(): void {
    console.log(this.canvas);
  }

  static override getInstance(): IEPaint {
    if (!this.instance) {
      this.instance = new IEPaint(document.querySelector('canvas'));
    }
    return this.instance as IEPaint;
  }
}
