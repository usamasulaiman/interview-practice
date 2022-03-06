/**
 * @jest-environment jsdom
 */

const ImageCarousel = require('./imageCarousel');

describe('#initialisation', ()=> {
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