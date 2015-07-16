// sqlite3.js - SQLite database module.
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC
var sqlite3 = require('sqlite3');

module.exports.on_init = function (popebot) {
  popebot.sqlite3 = new sqlite3.Database(popebot.config.sqlite3.dbfile);
};
