export default class Component {
  element: HTMLElement;
  parentElement: HTMLElement | undefined;

  constructor(
    parentElement: HTMLElement | undefined,
    tag: string,
    cssClass = ""
  ) {
    this.parentElement = parentElement;
    this.element = document.createElement(tag);
    this.element.className = cssClass;
  }

  render() {
    this.parentElement?.appendChild(this.element);
  }
}
