// 8ball.js - ask the bot a question
// This file is part of popebot.
// Copyright (c) 2015 szalwia <szalwiaxd@gmail.com>
// License: ISC

// Message regexp.
var regexp = /^\.(ask|8ball|askthepope)\b/i;

var responses = [
  {
    "pl": "Co?",
    "en": "What?"
  },
  {
    "pl": "Nie.",
    "en": "No."
  },
  {
    "pl": "Dość!",
    "en": "Enough!"
  },
  {
    "pl": "Można! Jak najbardziej! Jeszcze jak!",
    "en": "You can! Of course! By all means!"
  },
  {
    "pl": "Tak!",
    "en": "Yes!"
  },
  {
    "pl": "Hyhyhy...",
    "en": "Hehehe..."
  },
  {
    "pl": "No! Tak jest.",
    "en": "Yes! That's how it is."
  },
  {
    "pl": "Tak sobie.",
    "en": "So-so."
  },
  {
    "pl": "Z warkoczykami albo bez warkoczyków. Też ujdą.",
    "en": "With or without pigtails. Both are fine."
  },
  {
    "pl": "Może nawet z dziewczynkami też.",
    "en": "Perhaps with the girls too."
  },
  {
    "pl": "Takiego prawdziwego to nie.",
    "en": "Not a real one, no."
  },
  {
    "pl": "Co mam robić?",
    "en": "What should I do?"
  },
  {
    "pl": "Bardzo.",
    "en": "Very much."
  },
  {
    "pl": "A co mam zmieniać?",
    "en": "What should I change?"
  },
  {
    "pl": "A jak wtedy wszyscy chłopcy. Ja już nie pamiętam tak dokładnie.",
    "en": "Same as all the other boys. I can't remember exactly."
  },
  {
    "pl": "Musimy to w biblii sprawdzić.",
    "en": "We'll have to check it in the Bible."
  },
  {
    "pl": "Noooo, tak jak pan jezus powiedział.",
    "en": "As Jesus said."
  },
  {
    "pl": "Nie dali mi nigdy.",
    "en": "They never gave it to me."
  },
  {
    "pl": "Nie, nie wiem.",
    "en": "No, I do not know."
  },
  {
    "pl": "No.",
    "en": "Yep."
  },
  {
    "pl": "Można powiedzieć, że to jest, że to jest, jakby to powiedzieć...",
    "en": "You can say it's, it's, how would you say it..."
  },
  {
    "pl": "Fajnie jest.",
    "en": "It's cool."
  },
  {
    "pl": "Bądźmy łagodni.",
    "en": "Let's be gentle."
  }
];

module.exports.on_message = function (popebot, from, to, text, message) {
  if (regexp.test(text)) {
    // TODO: Add language support.
    var response = responses[Math.floor(Math.random()*responses.length)].pl;
    popebot.client.say(to, from + ": " + response);

    return true;
  }
  return false;
};
