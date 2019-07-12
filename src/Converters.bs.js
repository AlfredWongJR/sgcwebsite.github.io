// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";
import * as Utils$Coronate from "./Utils.bs.js";
import * as Scoring$Coronate from "./Scoring.bs.js";

function colorToScore(color) {
  var match = color === 1;
  if (match) {
    return 1.0;
  } else {
    return -1.0;
  }
}

function getOppColor(color) {
  var match = color === 0;
  if (match) {
    return 1;
  } else {
    return 0;
  }
}

var dummyId = "________DUMMY________";

function isDummyId(playerId) {
  return playerId === dummyId;
}

function matches2ScoreData(matchList) {
  var scoreDict = { };
  var makeScoreData = function (playerId, origRating, newRating, result, oppId, color) {
    var match = Js_dict.get(scoreDict, playerId);
    var oldData = match !== undefined ? match : Scoring$Coronate.createBlankScoreData(playerId);
    var match$1 = oldData[/* ratings */5].length;
    var newRatings = match$1 !== 0 ? /* array */[newRating] : /* array */[
        origRating,
        newRating
      ];
    var match$2 = oppId === dummyId;
    var newResultsNoByes = match$2 ? /* array */[] : /* array */[result];
    var newOpponentResults = oldData[/* opponentResults */4];
    var match$3 = Js_dict.get(newOpponentResults, oppId);
    var oppResult = match$3 !== undefined ? match$3 + result : result;
    newOpponentResults[oppId] = oppResult;
    return /* record */[
            /* colorScores */oldData[/* colorScores */0].concat(/* array */[colorToScore(color)]),
            /* colors */oldData[/* colors */1].concat(/* array */[color]),
            /* id */playerId,
            /* isDummy */playerId === dummyId,
            /* opponentResults */newOpponentResults,
            /* ratings */oldData[/* ratings */5].concat(newRatings),
            /* results */oldData[/* results */6].concat(/* array */[result]),
            /* resultsNoByes */oldData[/* resultsNoByes */7].concat(newResultsNoByes)
          ];
  };
  matchList.forEach((function (match_) {
          var newDataWhite = makeScoreData(match_[/* whiteId */1], match_[/* whiteOrigRating */5], match_[/* whiteNewRating */3], match_[/* whiteScore */7], match_[/* blackId */2], 0);
          scoreDict[match_[/* whiteId */1]] = newDataWhite;
          var newDataBlack = makeScoreData(match_[/* blackId */2], match_[/* blackOrigRating */6], match_[/* blackNewRating */4], match_[/* blackScore */8], match_[/* whiteId */1], 1);
          scoreDict[match_[/* blackId */2]] = newDataBlack;
          return /* () */0;
        }));
  return scoreDict;
}

function avoidPairReducer(acc, pair) {
  var id2 = pair[1];
  var id1 = pair[0];
  var currentArr1 = Js_dict.get(acc, id1);
  var newArr1 = currentArr1 !== undefined ? currentArr1.concat(/* array */[id2]) : /* array */[id2];
  acc[id1] = newArr1;
  var currentArr2 = Js_dict.get(acc, id2);
  var newArr2 = currentArr2 !== undefined ? currentArr2.concat(/* array */[id1]) : /* array */[id1];
  acc[id2] = newArr2;
  return acc;
}

function createPairingData(playerData, avoidPairs, scoreDict) {
  var avoidDict = avoidPairs.reduce(avoidPairReducer, { });
  var pairData = { };
  Belt_MapString.valuesToArray(playerData).forEach((function (data) {
          var match = Js_dict.get(scoreDict, data[/* id */1]);
          var playerStats = match !== undefined ? match : Scoring$Coronate.createBlankScoreData(data[/* id */1]);
          var match$1 = Js_dict.get(avoidDict, data[/* id */1]);
          var newAvoidIds = match$1 !== undefined ? match$1 : /* array */[];
          var newData_000 = /* id */data[/* id */1];
          var newData_002 = /* colorScores */playerStats[/* colorScores */0];
          var newData_003 = /* colors */playerStats[/* colors */1];
          var newData_006 = /* opponents */Object.keys(playerStats[/* opponentResults */4]);
          var newData_007 = /* rating */data[/* rating */4];
          var newData_008 = /* score */Utils$Coronate.arraySumFloat(playerStats[/* results */6]);
          var newData = /* record */[
            newData_000,
            /* avoidIds */newAvoidIds,
            newData_002,
            newData_003,
            /* halfPos */0,
            /* isUpperHalf */false,
            newData_006,
            newData_007,
            newData_008
          ];
          pairData[data[/* id */1]] = newData;
          return /* () */0;
        }));
  return pairData;
}

var blackValue = 1.0;

var whiteValue = -1.0;

var black = 1;

var white = 0;

export {
  blackValue ,
  whiteValue ,
  black ,
  white ,
  colorToScore ,
  getOppColor ,
  dummyId ,
  isDummyId ,
  matches2ScoreData ,
  avoidPairReducer ,
  createPairingData ,
  
}
/* Utils-Coronate Not a pure module */
