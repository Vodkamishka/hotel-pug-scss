class Checkbox {
  constructor(el) {
    this.img = el.querySelector('.checkbox-expandable__image');
    this.list = el.querySelector('.checkbox-expandable__list');
    this.addClick();
  }

  addClick() {
    this.img.addEventListener('click', () => {
      this.img.classList.toggle('checkbox-expandable__image_expand');
      this.list.classList.toggle('checkbox-expandable_hide');
    });
  }
}

const exp = document.querySelectorAll('.checkbox-expandable');

exp.forEach((el) => new Checkbox(el));
