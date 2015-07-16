/*jshint loopfunc: true */
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC
var irc = require('irc');
var fs = require('fs');

// Shared object between modules.
var popebot = {};

// Parse commandline arguments.
var argv = require('yargs')
  .usage('Usage: $0 <config.json> [options]')
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .argv;

// Load configuration file.
popebot.config = JSON.parse(fs.readFileSync(argv._[0], "utf8"));

// Load modules.
popebot.modules = [];
for (var m in popebot.config.modules) {
  var mod = require('./modules/' + popebot.config.modules[m] + '.js');

  // Initialize module.
  if (mod.hasOwnProperty("on_init")) {
    if (mod.on_init(popebot) === false) {
      continue;
    }
  }

  popebot.modules.push(mod);
}

// Set up server connection.
popebot.client = new irc.Client(popebot.config.server.hostname, popebot.config.server.nick, popebot.config.server);

// Hook events to modules.
function hookFunction(event) {
  popebot.client.addListener(event, function () {
    var args = Array.prototype.slice.call(arguments);
    var methodName;

    // Prepend popebot to arguments.
    args.unshift(popebot);

    // Handle events with special characters in them.
    if (event === '+mode') {
      methodName = 'on_mode';
    } else if (event === '-mode') {
      methodName = 'on_unmode';
    } else {
      methodName = 'on_' + event;
    }

    // Call method in each module corresponding to the event.
    for (var j in popebot.modules) {
      if (popebot.modules[j].hasOwnProperty(methodName)) {
        var done = popebot.modules[j][methodName].apply(this, args);
        // If the current module has handled the event, break from the loop.
        if (done === true) {
          break;
        }
      }
    }
  });
}

var events = ['registered', 'ping', 'pong', 'notice', '+mode', '-mode', 'nick', 'motd', 'names', 'whois', 'channellist_start', 'channellist_item', 'channellist', 'topic', 'join', 'part', 'kick', 'kill', 'message', 'pm', 'invite', 'quit', 'error', 'selfMessage'];
for (var i in events) {
  hookFunction(events[i]);
}

