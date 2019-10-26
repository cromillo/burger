var orm = require("../config/orm.js");


var burger = {

  // Select All Burgers
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Add Burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // Update burger
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};
module.exports = burger;
