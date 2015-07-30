// gignore.js - makes the bot ignore certain users
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC

// TODO: Hook more events than just messages.
// TODO: Store ignores in sqlite.
module.exports.on_init = function (popebot) {
  if (typeof popebot.config.gignore === "undefined" || !Array.isArray(popebot.config.gignore)) {
    console.error("ERROR: Missing configuration for the gignore module.");
    return false;
  }
};

module.exports.on_message = function (popebot, from, to, text, message) {
  if (popebot.config.gignore.indexOf(from) > -1) {
    return true;
  }
  return false;
};
