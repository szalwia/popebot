// selflog.js - log own messages to stdout
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC
var log = require('util').log;

module.exports.on_selfMessage = function (popebot, target, toSend) {
  log(target + ': ' + toSend);
};
