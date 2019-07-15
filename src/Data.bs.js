// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";

var dummy_id = "________DUMMY________";

function tToJs(param) {
  return {
          firstName: param[/* firstName */0],
          id: param[/* id */1],
          lastName: param[/* lastName */2],
          matchCount: param[/* matchCount */3],
          rating: param[/* rating */4],
          type_: param[/* type_ */5]
        };
}

function tFromJs(param) {
  return /* record */[
          /* firstName */param.firstName,
          /* id */param.id,
          /* lastName */param.lastName,
          /* matchCount */param.matchCount,
          /* rating */param.rating,
          /* type_ */param.type_
        ];
}

function isDummyId(playerId) {
  return playerId === dummy_id;
}

var dummyPlayer = /* record */[
  /* firstName */"Bye",
  /* id */dummy_id,
  /* lastName */"Player",
  /* matchCount */0,
  /* rating */0,
  /* type_ */"dummy"
];

function makeMissingPlayer(id) {
  return /* record */[
          /* firstName */"Anonymous",
          /* id */id,
          /* lastName */"Player",
          /* matchCount */0,
          /* rating */0,
          /* type_ */"missing"
        ];
}

function getPlayerMaybe(playerDict, id) {
  var match = id === dummy_id;
  if (match) {
    return dummyPlayer;
  } else {
    var match$1 = Js_dict.get(playerDict, id);
    if (match$1 !== undefined) {
      return match$1;
    } else {
      return makeMissingPlayer(id);
    }
  }
}

function getPlayerMaybeMap(playerMap, id) {
  var match = id === dummy_id;
  if (match) {
    return dummyPlayer;
  } else {
    return Belt_MapString.getWithDefault(playerMap, id, makeMissingPlayer(id));
  }
}

var Player = /* module */[
  /* tToJs */tToJs,
  /* tFromJs */tFromJs,
  /* isDummyId */isDummyId,
  /* dummyPlayer */dummyPlayer,
  /* makeMissingPlayer */makeMissingPlayer,
  /* getPlayerMaybe */getPlayerMaybe,
  /* getPlayerMaybeMap */getPlayerMaybeMap
];

function tToJs$1(param) {
  return {
          id: param[/* id */0],
          whiteId: param[/* whiteId */1],
          blackId: param[/* blackId */2],
          whiteNewRating: param[/* whiteNewRating */3],
          blackNewRating: param[/* blackNewRating */4],
          whiteOrigRating: param[/* whiteOrigRating */5],
          blackOrigRating: param[/* blackOrigRating */6],
          whiteScore: param[/* whiteScore */7],
          blackScore: param[/* blackScore */8]
        };
}

function tFromJs$1(param) {
  return /* record */[
          /* id */param.id,
          /* whiteId */param.whiteId,
          /* blackId */param.blackId,
          /* whiteNewRating */param.whiteNewRating,
          /* blackNewRating */param.blackNewRating,
          /* whiteOrigRating */param.whiteOrigRating,
          /* blackOrigRating */param.blackOrigRating,
          /* whiteScore */param.whiteScore,
          /* blackScore */param.blackScore
        ];
}

var Match = /* module */[
  /* tToJs */tToJs$1,
  /* tFromJs */tFromJs$1
];

function tToJs$2(param) {
  return {
          byeQueue: param[/* byeQueue */0],
          date: param[/* date */1],
          id: param[/* id */2],
          name: param[/* name */3],
          playerIds: param[/* playerIds */4],
          roundList: param[/* roundList */5],
          tieBreaks: param[/* tieBreaks */6]
        };
}

function tFromJs$2(param) {
  return /* record */[
          /* byeQueue */param.byeQueue,
          /* date */param.date,
          /* id */param.id,
          /* name */param.name,
          /* playerIds */param.playerIds,
          /* roundList */param.roundList,
          /* tieBreaks */param.tieBreaks
        ];
}

function tToJsDeep(tourney) {
  return {
          byeQueue: tourney[/* byeQueue */0],
          date: tourney[/* date */1],
          id: tourney[/* id */2],
          name: tourney[/* name */3],
          playerIds: tourney[/* playerIds */4],
          roundList: tourney[/* roundList */5].map((function (round) {
                  return round.map(tToJs$1);
                })),
          tieBreaks: tourney[/* tieBreaks */6]
        };
}

function tFromJsDeep(tourney) {
  return /* record */[
          /* byeQueue */tourney.byeQueue,
          /* date */tourney.date,
          /* id */tourney.id,
          /* name */tourney.name,
          /* playerIds */tourney.playerIds,
          /* roundList */tourney.roundList.map((function (round) {
                  return round.map(tFromJs$1);
                })),
          /* tieBreaks */tourney.tieBreaks
        ];
}

function tFromJsonDeep(tourney) {
  return /* record */[
          /* byeQueue */tourney.byeQueue,
          /* date */new Date(tourney.date),
          /* id */tourney.id,
          /* name */tourney.name,
          /* playerIds */tourney.playerIds,
          /* roundList */tourney.roundList.map((function (round) {
                  return round.map(tFromJs$1);
                })),
          /* tieBreaks */tourney.tieBreaks
        ];
}

var Tournament = /* module */[
  /* tToJs */tToJs$2,
  /* tFromJs */tFromJs$2,
  /* tToJsDeep */tToJsDeep,
  /* tFromJsDeep */tFromJsDeep,
  /* tFromJsonDeep */tFromJsonDeep
];

function tToJs$3(param) {
  return {
          avoidPairs: param[/* avoidPairs */0],
          byeValue: param[/* byeValue */1],
          lastBackup: param[/* lastBackup */2]
        };
}

function tFromJs$3(param) {
  return /* record */[
          /* avoidPairs */param.avoidPairs,
          /* byeValue */param.byeValue,
          /* lastBackup */param.lastBackup
        ];
}

var defaults_000 = /* avoidPairs : array */[];

var defaults_002 = /* lastBackup */new Date(0.0);

var defaults = /* record */[
  defaults_000,
  /* byeValue */1.0,
  defaults_002
];

var Config = /* module */[
  /* tToJs */tToJs$3,
  /* tFromJs */tFromJs$3,
  /* defaults */defaults
];

function rounds2Matches(roundList, lastRound, param) {
  var rounds = lastRound !== undefined ? (function (param) {
            return (function (param$1) {
                return roundList.slice(param, param$1);
              });
          })(0)(lastRound + 1 | 0) : roundList;
  return rounds.reduce((function (acc, round) {
                return acc.concat(round);
              }), /* array */[]);
}

function getUnmatched(roundList, players, roundId) {
  var match = Belt_Array.get(roundList, roundId);
  var matchList = match !== undefined ? match : /* array */[];
  var matchedIds = matchList.reduce((function (acc, match_) {
          return acc.concat(/* array */[
                      match_[/* whiteId */1],
                      match_[/* blackId */2]
                    ]);
        }), /* array */[]);
  return Belt_MapString.valuesToArray(players).reduce((function (acc, player) {
                if (matchedIds.includes(player[/* id */1])) {
                  return acc;
                } else {
                  return Belt_MapString.set(acc, player[/* id */1], player);
                }
              }), Belt_MapString.empty);
}

function isRoundComplete(roundList, players, roundId) {
  var match = roundId < (roundList.length - 1 | 0);
  if (match) {
    return true;
  } else {
    var unmatched = getUnmatched(roundList, players, roundId);
    var results = Belt_Array.getExn(roundList, roundId).map((function (match_) {
            return match_[/* whiteScore */7] + match_[/* blackScore */8];
          }));
    if (Belt_MapString.keysToArray(unmatched).length === 0) {
      return !results.includes(0.0);
    } else {
      return false;
    }
  }
}

var win = 1.0;

var loss = 0.0;

var draw = 0.5;

export {
  win ,
  loss ,
  draw ,
  dummy_id ,
  Player ,
  Match ,
  Tournament ,
  Config ,
  rounds2Matches ,
  getUnmatched ,
  isRoundComplete ,
  
}
/* defaults Not a pure module */
