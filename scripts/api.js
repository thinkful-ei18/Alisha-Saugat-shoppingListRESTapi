'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/saugat';

  const getItems = function (items, callback) {
    callback('api module works');
  };

  return {
    getItems
  };
}());