// channelspy.js - spy on a channel by copying all messages to another channel
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC

module.exports.on_init = function (popebot) {
  if (typeof popebot.config.channelspy === "undefined") {
    console.error("ERROR: Missing configuration for the gignore module.");
    return false;
  }
};

module.exports.on_message = function (popebot, from, to, text, message) {
  if (popebot.config.channelspy.from.indexOf(to) > -1) {
    popebot.client.say(popebot.config.channelspy.to, to + ": <" + from + "> " + text);
  }
  return false;
};
