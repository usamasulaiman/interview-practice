/**
 * @jest-environment jsdom
 */

const ImageCarousel = require('./imageCarousel');

describe('#initialisation', ()=> {
  beforeEach(() => {
    document.body.innerHTML += `
      <div class="outerContainer">
        <ul class="imagesWrapper">
          <li class="image">
            <img src="https://cds.cern.ch/record/2668752/files/DSCN6095.png" alt="image 1">
          </li>
          <li class="image">
            <img src="https://d12swbtw719y4s.cloudfront.net/images/Cpp9o87U/q67mVeiot64p3FjilItg/Hello_Song_thumb_sellfy.jpeg?w=1200" alt="image 2">
          </li>
        </ul>
      </div>
    `;
  })
  test('it should set the width of client on initialisation', () => {
    const carousel = new ImageCarousel();
    const containerWidth = 800;
    const totalNodes = 3;
    expect(carousel.currentNode).toBe(0);
    expect(carousel.parent).not.toBe(null);
    carousel.initialise();
    expect(carousel.parent.style.width).toBe(`${containerWidth* totalNodes}px`)
  });
})