class RatingComponent {
  constructor() {
    this.userRating = 0;
  }

  // listen to clicks and turn selected level of stars active
  selectRating(number) {
    document.querySelectorAll('.star').forEach((star, index) => index < number ? star.classList.add('active') : star.classList.remove('active'));
  }

  // ⭐️ initialise component to be grayscale by default
  initialiseRating() {
    const storedRating = JSON.parse(localStorage.getItem('rating') || '{}');
    if (storedRating === {} || storedRating === 0) {
      localStorage.setItem('rating', JSON.stringify(this.userRating));
      return;
    } else if (typeof storedRating === 'string') {
      selectRating(parseInt(storedRating, 10));
    }
  }

  // set rating on user action
  setRating(number) {
    this.userRating = number === this.userRating ? 0 : number;
    this.selectRating(this.userRating);
    localStorage.setItem('rating', JSON.stringify(this.userRating));
  }
}

const ratingComp = new RatingComponent();
ratingComp.initialiseRating();

module.exports = RatingComponent;