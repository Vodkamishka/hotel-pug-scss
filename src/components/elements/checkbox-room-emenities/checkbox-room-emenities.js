class Checkbox {
  constructor(checkbox) {
    this.img = checkbox.querySelector('.checkbox-room-emenities__image');
    this.list = checkbox.querySelector('.checkbox-room-emenities__list');
    this.addClick();
  }

  addClick() {
    this.img.addEventListener('click', () => {
      this.img.classList.toggle('checkbox-room-emenities__image_expand');
      this.list.classList.toggle('checkbox-room-emenities_hide');
    });
  }
}

const checkboxEmentities = document.querySelectorAll('.checkbox-room-emenities');

checkboxEmentities.forEach((checkbox) => new Checkbox(checkbox));
