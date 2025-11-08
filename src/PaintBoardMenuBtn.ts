import { PaintBoardMenu } from './PaintBoardMenu.js';

export abstract class PaintBoardMenuElement {
  protected menu: PaintBoardMenu;
  protected name: string;

  protected constructor(menu: PaintBoardMenu, name: string) {
    this.menu = menu;
    this.name = name;
  }

  abstract draw(): void;
}

export abstract class PaintBoardMenuElementBuilder {
  btn!: PaintBoardMenuElement;

  constructor() {}

  build() {
    return this.btn;
  }
}

export class PaintBoardMenuInput extends PaintBoardMenuElement {
  private onChange?: () => void;
  private value?: string | number;

  private constructor(
    menu: PaintBoardMenu,
    name: string,
    onChange?: () => void,
    value?: string | number
  ) {
    super(menu, name);

    this.onChange = onChange;
    this.value = value;
  }

  override draw() {
    const btn = document.createElement('input');
    btn.type = 'color';
    btn.title = this.name;
    if (this.onChange) {
      btn.addEventListener('change', this.onChange.bind(this));
    }
    this.menu.dom.append(btn);
  }

  // 코드에서 강제로 해놓지 않으면 사람은 실수를 하는 법.
  static Builder = class PaintBoardMenuInputBuilder extends PaintBoardMenuElementBuilder {
    override btn: PaintBoardMenuInput;

    constructor(menu: PaintBoardMenu, name: string) {
      super();
      this.btn = new PaintBoardMenuInput(menu, name);
    }

    setOnChange(onChange: () => void) {
      this.btn.onChange = onChange;
      return this;
    }

    setValue(value: string | number) {
      this.btn.value = value;
      return this;
    }
  };
}

export class PaintBoardMenuButton extends PaintBoardMenuElement {
  private onClick?: () => void;
  private active?: boolean;

  private constructor(
    menu: PaintBoardMenu,
    name: string,
    onClick?: () => void,
    active?: boolean
  ) {
    super(menu, name);

    this.onClick = onClick;
    this.active = active;
  }

  override draw(): void {
    const btn = document.createElement('button');
    btn.textContent = this.name;
    if (this.onClick) {
      btn.addEventListener('click', this.onClick.bind(this));
    }
    this.menu.dom.append(btn);
  }

  // 코드에서 강제로 해놓지 않으면 사람은 실수를 하는 법.
  static Builder = class PaintBoardMenuBtnBuilder extends PaintBoardMenuElementBuilder {
    override btn: PaintBoardMenuButton;

    constructor(menu: PaintBoardMenu, name: string) {
      super();
      this.btn = new PaintBoardMenuButton(menu, name);
    }

    setOnClick(onClick: () => void) {
      this.btn.onClick = onClick;
      return this;
    }

    setActive(active: boolean) {
      this.btn.active = active;
      return this;
    }
  };
}
