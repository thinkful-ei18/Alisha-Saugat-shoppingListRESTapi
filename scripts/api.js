/* global store */

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

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };

  const deleteItem = function(id, callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());