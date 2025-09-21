import AbstractPaintBoard from './AbstractPaintBoard.js';

export default class ChromePaint extends AbstractPaintBoard {
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
