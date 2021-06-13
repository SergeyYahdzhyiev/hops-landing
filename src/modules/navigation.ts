export class Navigation {
  private menuBtn: HTMLButtonElement;
  private menu: HTMLDivElement;
  private main: HTMLElement;

  constructor() {
    this.menuBtn = document.getElementById('menu-button') as HTMLButtonElement;
    this.menu = document.querySelector('#menu') as HTMLDivElement;
    this.main = document.querySelector('main') as HTMLElement;

    this.init();
  }

  private init() {
    this.menuBtn.addEventListener('click', this.handleClick);
  }
  private handleClick = () => {
    this.menu.classList.toggle('open');
    this.main.classList.toggle('slided');
  };
}
