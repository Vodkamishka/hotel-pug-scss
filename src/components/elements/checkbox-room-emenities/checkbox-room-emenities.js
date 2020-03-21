class Checkbox {
  constructor(checkbox) {
    this.checkbox = checkbox;
    this.findDom();
    this.addClick();
  }

  findDom() {
    this.img = this.checkbox.querySelector('.checkbox-room-emenities__button');
    this.list = this.checkbox.querySelector('.checkbox-room-emenities__list');
  }

  classListToggle() {
    this.img.classList.toggle('checkbox-room-emenities__button_expand');
    this.list.classList.toggle('checkbox-room-emenities_hide');
  }

  addClick() {
    this.img.addEventListener('click', () => this.classListToggle());
  }
}

const checkboxEmentities = document.querySelectorAll('.checkbox-room-emenities');

checkboxEmentities.forEach((checkbox) => new Checkbox(checkbox));
