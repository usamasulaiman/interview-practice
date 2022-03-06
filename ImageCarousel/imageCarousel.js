class ImageCarousel {
  constructor() {
    this.currentNode = 0;
    this.parent = document.querySelector('.imagesWrapper');
    this.totalNodes = this.parent.children.length;
    this.containerWidth = document.querySelector('.outerContainer').clientWidth;
  }
  initialise() {
    if (!this.totalNodes) return;
    this.parent.style.width = `${this.containerWidth * this.totalNodes}px`;

    const images = document.querySelectorAll('.image');
    images.forEach(image => image.style.width = `${this.containerWidth}px`);
    document.querySelector('.prev').style.visibility = 'hidden';
  }

  takeAction(action) { 
    if (!this.totalNodes) return;
    if (action === 'next') {
      this.currentNode++;
    } else {
      this.currentNode--;
    }
    
    if (this.currentNode === this.totalNodes - 1) {
      document.querySelector('.next').style.visibility = 'hidden';
    } else if (this.currentNode === 0) {
      document.querySelector('.prev').style.visibility = 'hidden';
    } else {
      document.querySelector('.prev').style.visibility = 'visible';
      document.querySelector('.next').style.visibility = 'visible';
    }

    this.parent.style.transform = `translateX(-${this.containerWidth*this.currentNode}px)`
  }
}

const carousel = new ImageCarousel();
carousel.initialise();

module.exports = ImageCarousel;

