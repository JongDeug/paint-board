import AbstractPaintBoard from './AbstractPaintBoard.js';

export default class IEPaint extends AbstractPaintBoard {
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
