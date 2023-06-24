/* eslint-disable no-undef */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see('Belum Ada Resorant favorite, Klik Tombol Favorite Pada Resorant', '.restaurant-not__found');
});

Scenario('liking and unliking restaurant', ({ I }) => {
  I.see('Belum Ada Resorant favorite, Klik Tombol Favorite Pada Resorant', '.restaurant-not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.card');
  I.seeElement('.card a');
  I.click(locate('.card').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.wait(5);
  I.seeElement('#fav-resto');
  I.seeElement('.card a');
  I.click(locate('.card').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.wait(5);
  I.seeElement('#fav-resto');
  I.see('Belum Ada Resorant favorite, Klik Tombol Favorite Pada Resorant', '.restaurant-not__found');
});
