'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/saugat';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);

  };

  const createItem = function (name, callback) {
    const newItem = {
      name
    };


    const item = JSON.stringify(newItem);


    const callSettings = {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: item,
      success: callback
    };

    $.ajax(callSettings);

  };

  return {
    getItems,
    createItem
  };
}());