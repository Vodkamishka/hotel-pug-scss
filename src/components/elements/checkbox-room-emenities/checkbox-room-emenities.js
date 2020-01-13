class Checkbox {
  constructor(el) {
    this.img = el.querySelector('.checkbox-room-emenities__image');
    this.list = el.querySelector('.checkbox-room-emenities__list');
    this.addClick();
  }

  addClick() {
    this.img.addEventListener('click', () => {
      this.img.classList.toggle('checkbox-room-emenities__image_expand');
      this.list.classList.toggle('checkbox-room-emenities_hide');
    });
  }
}

const exp = document.querySelectorAll('.checkbox-room-emenities');

exp.forEach((el) => new Checkbox(el));
