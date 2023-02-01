type buttons = "submit" | "clear" | "button" | "reset";

export default class Button {
  recivedText: string;
  typeButton: buttons;
  parentElement: HTMLElement;
  element: HTMLElement;
  cssClass = "";

  constructor(
    recivedText: string,
    typeButton: buttons,
    parentElement: HTMLElement,
    cssClass = ""
  ) {
    this.recivedText = recivedText;
    this.typeButton = typeButton;
    this.element = document.createElement("button");
    this.parentElement = parentElement;
    this.element.className = cssClass;
  }

  render() {
    this.parentElement?.appendChild(this.element);
  }
}
