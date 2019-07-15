// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as EloRank from "elo-rank";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";
import * as Belt_SortArray from "bs-platform/lib/es6/belt_SortArray.js";
import * as Utils$Coronate from "./Utils.bs.js";

function isNotDummy(scoreDict, oppId) {
  var match = Belt_MapString.get(scoreDict, oppId);
  if (match !== undefined) {
    return !match[/* isDummy */3];
  } else {
    return true;
  }
}

function getPlayerScore(scoreDict, id) {
  var match = Belt_MapString.get(scoreDict, id);
  if (match !== undefined) {
    return Utils$Coronate.arraySumFloat(match[/* results */6]);
  } else {
    return 0.0;
  }
}

function getOpponentScores(scoreDict, id) {
  var match = Belt_MapString.get(scoreDict, id);
  if (match !== undefined) {
    return Belt_MapString.keysToArray(match[/* opponentResults */4]).filter((function (param) {
                    return isNotDummy(scoreDict, param);
                  })).map((function (param) {
                  return getPlayerScore(scoreDict, param);
                }));
  } else {
    return /* array */[];
  }
}

function getMedianScore(scoreDict, id) {
  return Utils$Coronate.arraySumFloat(Belt_SortArray.stableSortBy(getOpponentScores(scoreDict, id), (function (param, param$1) {
                      return Utils$Coronate.ascend((function (x) {
                                    return x;
                                  }), param, param$1);
                    })).slice(1, -1));
}

function getSolkoffScore(scoreDict, id) {
  return Utils$Coronate.arraySumFloat(getOpponentScores(scoreDict, id));
}

function runningReducer(acc, score) {
  return acc.concat(/* array */[Utils$Coronate.last(acc) + score]);
}

function getCumulativeScore(scoreDict, id) {
  var match = Belt_MapString.get(scoreDict, id);
  if (match !== undefined) {
    return Utils$Coronate.arraySumFloat(match[/* resultsNoByes */7].reduce(runningReducer, /* array */[0.0]));
  } else {
    return 0.0;
  }
}

function getCumulativeOfOpponentScore(scoreDict, id) {
  var match = Belt_MapString.get(scoreDict, id);
  if (match !== undefined) {
    return Utils$Coronate.arraySumFloat(Belt_MapString.keysToArray(match[/* opponentResults */4]).filter((function (param) {
                        return isNotDummy(scoreDict, param);
                      })).map((function (param) {
                      return getCumulativeScore(scoreDict, param);
                    })));
  } else {
    return 0.0;
  }
}

function getColorBalanceScore(scoreDict, id) {
  var match = Belt_MapString.get(scoreDict, id);
  if (match !== undefined) {
    return Utils$Coronate.arraySumFloat(match[/* colorScores */0]);
  } else {
    return 0.0;
  }
}

var tieBreakMethods = /* array */[
  /* record */[
    /* func */getMedianScore,
    /* id */0,
    /* name */"Median"
  ],
  /* record */[
    /* func */getSolkoffScore,
    /* id */1,
    /* name */"Solkoff"
  ],
  /* record */[
    /* func */getCumulativeScore,
    /* id */2,
    /* name */"Cumulative score"
  ],
  /* record */[
    /* func */getCumulativeOfOpponentScore,
    /* id */3,
    /* name */"Cumulative of opposition"
  ],
  /* record */[
    /* func */getColorBalanceScore,
    /* id */4,
    /* name */"Most black"
  ]
];

function getNamefromIndex(index) {
  return Belt_Array.getExn(tieBreakMethods, index)[/* name */2];
}

function getTieBreakNames(idList) {
  return idList.map(getNamefromIndex);
}

function createBlankScoreData(id) {
  return /* record */[
          /* colorScores : array */[],
          /* colors : array */[],
          /* id */id,
          /* isDummy */false,
          /* opponentResults */Belt_MapString.empty,
          /* ratings : array */[],
          /* results : array */[],
          /* resultsNoByes : array */[]
        ];
}

function createStandingList(methods, scoreData) {
  var selectedTieBreakFuncs = methods.map((function (i) {
          return Belt_Array.getExn(tieBreakMethods, i)[/* func */0];
        }));
  var standings = Belt_MapString.keysToArray(scoreData).map((function (id) {
          return /* record */[
                  /* id */id,
                  /* score */getPlayerScore(scoreData, id),
                  /* tieBreaks */selectedTieBreakFuncs.map((function (func) {
                          return Curry._2(func, scoreData, id);
                        }))
                ];
        }));
  var sortTieBreakFuncList = selectedTieBreakFuncs.map((function (param, index) {
          return (function (param, param$1) {
              return Utils$Coronate.descend((function (x) {
                            return Belt_Array.get(x[/* tieBreaks */2], index);
                          }), param, param$1);
            });
        }));
  var sortFuncList = /* array */[(function (param, param$1) {
          return Utils$Coronate.descend((function (x) {
                        return x[/* score */1];
                      }), param, param$1);
        })].concat(sortTieBreakFuncList);
  return Utils$Coronate.sortWith(sortFuncList, standings);
}

function areScoresEqual(standing1, standing2) {
  var equalScores = standing1[/* score */1] !== standing2[/* score */1];
  if (equalScores) {
    return false;
  } else {
    return !standing1[/* tieBreaks */2].reduce((function (acc, value, i) {
                    return /* array */[value !== Belt_Array.getExn(standing2[/* tieBreaks */2], i)].concat(acc);
                  }), /* array */[]).includes(true);
  }
}

function createStandingTree(standingList) {
  return standingList.reduce((function (acc, standing, i) {
                var match = i === 0;
                var isNewRank = match ? true : !areScoresEqual(standing, Belt_Array.getExn(standingList, i - 1 | 0));
                if (isNewRank) {
                  return acc.concat(/* array */[/* array */[standing]]);
                } else {
                  var lastIndex = acc.length - 1 | 0;
                  Belt_Array.set(acc, lastIndex, Belt_Array.getExn(acc, lastIndex).concat(/* array */[standing]));
                  return acc;
                }
              }), /* array */[]);
}

function getKFactor(matchCount) {
  var match = matchCount > 0;
  var ne = match ? matchCount : 1;
  return Caml_int32.div(800, ne);
}

function keepAboveFloor(rating) {
  var match = rating > 100;
  if (match) {
    return rating;
  } else {
    return 100;
  }
}

function calcNewRatings(param, param$1, param$2) {
  var blackRating = param[1];
  var whiteRating = param[0];
  var whiteElo = new EloRank(getKFactor(param$1[0]));
  var blackElo = new EloRank(getKFactor(param$1[1]));
  var whiteScoreExpected = whiteElo.getExpected(whiteRating, blackRating);
  var blackScoreExpected = blackElo.getExpected(blackRating, whiteRating);
  return /* tuple */[
          keepAboveFloor(whiteElo.updateRating(whiteScoreExpected, param$2[0], whiteRating)),
          keepAboveFloor(blackElo.updateRating(blackScoreExpected, param$2[1], blackRating))
        ];
}

var Ratings = /* module */[
  /* getKFactor */getKFactor,
  /* floor */100,
  /* keepAboveFloor */keepAboveFloor,
  /* EloRank */0,
  /* calcNewRatings */calcNewRatings
];

export {
  isNotDummy ,
  getPlayerScore ,
  getOpponentScores ,
  getMedianScore ,
  getSolkoffScore ,
  runningReducer ,
  getCumulativeScore ,
  getCumulativeOfOpponentScore ,
  getColorBalanceScore ,
  tieBreakMethods ,
  getNamefromIndex ,
  getTieBreakNames ,
  createBlankScoreData ,
  createStandingList ,
  areScoresEqual ,
  createStandingTree ,
  Ratings ,
  
}
/* elo-rank Not a pure module */
