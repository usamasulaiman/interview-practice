/**
 * @jest-environment jsdom
 */

 const RatingComponent = require('./rating.js');

 describe('#rating', () => {
   test('is able to set value on user action', () => {
     const rating = new RatingComponent();
     document.body.innerHTML += `
      <button onClick="ratingComp.setRating(1)" class="star">⭐️</button>
      <button onClick="ratingComp.setRating(2)" class="star">⭐️</button>
      <button onClick="ratingComp.setRating(3)" class="star">⭐️</button>
     `;
     expect(rating.userRating).toBe(0);
     document.querySelector('.star').click(2);
     expect(rating.setRating).toHaveBeenCalledTimes(1);
     expect(rating.userRating).toBe(2);
     expect(document.querySelectorAll('.star')[1].classList.value).toContain('active');
   })
 })