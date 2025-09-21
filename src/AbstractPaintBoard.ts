export default abstract class AbstractPaintBoard {
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
