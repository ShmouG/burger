const orm = require('../config/orm.js');

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    insertOne: (vals, cb) => {
        orm.insertOne("burgers", 'burger_name', vals, (res) => {
          cb(res);
        });
      },
      updateOne: (colVal, conditionVal, cb) => {
        orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, (res) => {
          cb(res);
        });
      }
    };



module.exports = burger;