// ident.js - identify with NickServ
// This file is part of popebot
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC

module.exports.on_registered = function (popebot) {
  popebot.client.say('NickServ', 'IDENTIFY ' + popebot.config.ident.password);

  return false;
};
