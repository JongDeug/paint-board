class PaintBoardMenuBtn {
  private name: string;
  private type: string;
  private onClick?: () => void;
  private onChange?: () => void;
  private active?: boolean;
  private value?: string | number;

  private constructor(
    name: string,
    type: string,
    onClick?: () => void,
    onChange?: () => void,
    active?: boolean,
    value?: string | number
  ) {
    this.name = name;
    this.type = type;
    this.onClick = onClick;
    this.onChange = onChange;
    this.active = active;
    this.value = value;
  }

  // 코드에서 강제로 해놓지 않으면 사람은 실수를 하는 법.
  static Builder = class PaintBoardMenuBtnBuilder {
    btn: PaintBoardMenuBtn;

    constructor(name: string, type: string) {
      this.btn = new PaintBoardMenuBtn(name, type);
    }

    setOnClick(onClick: () => void) {
      this.btn.onClick = onClick;
      return this;
    }

    setOnChange(onChange: () => void) {
      this.btn.onChange = onChange;
      return this;
    }

    setActive(active: boolean) {
      this.btn.active = active;
      return this;
    }

    setValue(value: string | number) {
      this.btn.value = value;
      return this;
    }

    build() {
      return this.btn;
    }
  };
}

// 버튼을 반환해야하므로
// 체이닝을 하려면
const backBtn = new PaintBoardMenuBtn.Builder('뒤로', 'back')
  .setOnClick(() => {})
  .setValue('value')
  .build();
