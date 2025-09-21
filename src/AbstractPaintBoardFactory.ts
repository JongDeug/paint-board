import type AbstractPaintBoard from './AbstractPaintBoard.js';

export default abstract class AbstractPaintBoardFactory {
  static createPaintBoard(): AbstractPaintBoard {
    throw new Error('이 함수는 추상 클래스에서 호출될 수 없습니다.');
  }
}
