'use strict';
/* global shoppingList, store, api, Item */

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// api.getItems(function (data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);

api.createItem('testItem', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});