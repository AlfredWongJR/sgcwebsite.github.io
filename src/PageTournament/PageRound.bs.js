// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Numeral from "numeral";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Tabs from "@reach/tabs";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Js_mapperRt from "bs-platform/lib/es6/js_mapperRt.js";
import * as Dialog from "@reach/dialog";
import * as Data$Coronate from "../Data.bs.js";
import * as ReactFeather from "react-feather";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";
import * as Pages$Coronate from "../Pages.bs.js";
import * as Utils$Coronate from "../Utils.bs.js";
import * as Scoring$Coronate from "../Scoring.bs.js";
import * as Converters$Coronate from "../Converters.bs.js";
import * as PairPicker$Coronate from "./PairPicker.bs.js";
import * as VisuallyHidden from "@reach/visually-hidden";

function PageRound$PlayerMatchInfo(Props) {
  var playerId = Props.playerId;
  var scoreData = Props.scoreData;
  var origRating = Props.origRating;
  var newRating = Props.newRating;
  var getPlayer = Props.getPlayer;
  var player = Curry._1(getPlayer, playerId);
  var match = Js_dict.get(scoreData, playerId);
  var match$1;
  if (match !== undefined) {
    var data = match;
    match$1 = /* tuple */[
      data[/* colorScores */0],
      data[/* opponentResults */4],
      data[/* results */6]
    ];
  } else {
    match$1 = /* tuple */[
      /* array */[],
      { },
      /* array */[]
    ];
  }
  var opponentResults = match$1[1];
  var colorBalance = Utils$Coronate.arraySumFloat(match$1[0]);
  var hasBye = Object.keys(opponentResults).includes(Data$Coronate.dummy_id);
  var oppResultsEntries = Js_dict.entries(opponentResults);
  var prettyBalance = colorBalance < 0.0 ? "White +" + Math.abs(colorBalance).toString() : (
      colorBalance > 0.0 ? "Black +" + colorBalance.toString() : "Even"
    );
  return React.createElement("dl", {
              className: "player-card"
            }, React.createElement("h3", undefined, player[/* firstName */0] + (" " + player[/* lastName */2])), React.createElement("dt", undefined, "Score"), React.createElement("dd", undefined, Utils$Coronate.arraySumFloat(match$1[2]).toString()), React.createElement("dt", undefined, "Rating"), React.createElement("dd", {
                  id: "rating-" + playerId
                }, origRating.toString(), " (", Numeral.default(newRating - origRating | 0).format("+0"), ")"), React.createElement("dt", undefined, "Color balance"), React.createElement("dd", undefined, prettyBalance), React.createElement("dt", undefined, "Has had a bye round"), React.createElement("dd", undefined, hasBye ? "Yes" : "No"), React.createElement("dt", undefined, "Opponent history"), React.createElement("dd", undefined, React.createElement("ol", undefined, oppResultsEntries.map((function (param, i) {
                            var result = param[1];
                            var opId = param[0];
                            var match = i < (oppResultsEntries.length - 1 | 0);
                            if (match) {
                              return React.createElement("li", {
                                          key: opId
                                        }, /* array */[
                                            Curry._1(getPlayer, opId)[/* firstName */0],
                                            Curry._1(getPlayer, opId)[/* lastName */2],
                                            "-",
                                            result !== 0.0 ? (
                                                result !== 0.5 && result === 1.0 ? "Won" : "Draw"
                                              ) : "Lost"
                                          ].join(" "));
                            } else {
                              return null;
                            }
                          })))));
}

var PlayerMatchInfo = /* module */[/* make */PageRound$PlayerMatchInfo];

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -937474657,
    "Black"
  ],
  /* tuple */[
    -588596599,
    "White"
  ],
  /* tuple */[
    -432235409,
    "NotSet"
  ],
  /* tuple */[
    759781412,
    "Draw"
  ]
];

function resultCodesToJs(param) {
  return Js_mapperRt.binarySearch(4, param, jsMapperConstantArray);
}

function resultCodesFromJs(param) {
  return Js_mapperRt.revSearch(4, jsMapperConstantArray, param);
}

function PageRound$MatchRow(Props) {
  var match = Props.isCompact;
  var isCompact = match !== undefined ? match : false;
  var pos = Props.pos;
  var match_ = Props.match;
  var roundId = Props.roundId;
  var selectedMatch = Props.selectedMatch;
  var setSelectedMatch = Props.setSelectedMatch;
  var scoreData = Props.scoreData;
  var tournament = Props.tournament;
  var tourney = tournament[/* tourney */7];
  var tourneyDispatch = tournament[/* tourneyDispatch */8];
  var players = tournament[/* players */4];
  var getPlayer = tournament[/* getPlayer */1];
  var playersDispatch = tournament[/* playersDispatch */5];
  var match$1 = React.useState((function () {
          return false;
        }));
  var setIsModalOpen = match$1[1];
  var resultCode = match_[/* whiteScore */7] > match_[/* blackScore */8] ? /* White */-588596599 : (
      match_[/* blackScore */8] > match_[/* whiteScore */7] ? /* Black */-937474657 : (
          match_[/* whiteScore */7] === 0.5 && match_[/* blackScore */8] === 0.5 ? /* Draw */759781412 : /* NotSet */-432235409
        )
    );
  var whitePlayer = Curry._1(getPlayer, match_[/* whiteId */1]);
  var blackPlayer = Curry._1(getPlayer, match_[/* blackId */2]);
  var isDummyRound = /* array */[
      match_[/* whiteId */1],
      match_[/* blackId */2]
    ].includes(Data$Coronate.dummy_id);
  var whiteName = /* array */[
      whitePlayer[/* firstName */0],
      whitePlayer[/* lastName */2]
    ].join(" ");
  var blackName = /* array */[
      blackPlayer[/* firstName */0],
      blackPlayer[/* lastName */2]
    ].join(" ");
  var resultDisplay = function (color) {
    if (resultCode !== -432235409) {
      if (resultCode !== 759781412) {
        var match = resultCode === color;
        if (match) {
          return React.createElement(ReactFeather.Award, { });
        } else {
          return React.createElement(VisuallyHidden.default, {
                      children: "Lost"
                    });
        }
      } else {
        return React.createElement("span", {
                    "aria-label": "Draw",
                    role: "img",
                    style: {
                      filter: "grayscale(100%)"
                    }
                  }, "🤝");
      }
    } else {
      return React.createElement(VisuallyHidden.default, {
                  children: "Not set"
                });
    }
  };
  var setMatchResult = function (jsResultCode) {
    var match = resultCodesFromJs(jsResultCode);
    var safeCode = match !== undefined ? match : /* NotSet */-432235409;
    var result = safeCode >= -432235409 ? (
        safeCode >= 759781412 ? /* tuple */[
            0.5,
            0.5
          ] : /* tuple */[
            0.0,
            0.0
          ]
      ) : (
        safeCode >= -588596599 ? /* tuple */[
            1.0,
            0.0
          ] : /* tuple */[
            0.0,
            1.0
          ]
      );
    var newBlackScore = result[1];
    var newWhiteScore = result[0];
    if (match_[/* whiteScore */7] !== newWhiteScore || match_[/* blackScore */8] !== newBlackScore) {
      var white = Belt_MapString.getExn(players, match_[/* whiteId */1]);
      var black = Belt_MapString.getExn(players, match_[/* blackId */2]);
      var match$1 = safeCode === /* NotSet */-432235409;
      var newRatings = match$1 ? /* tuple */[
          match_[/* whiteOrigRating */5],
          match_[/* blackOrigRating */6]
        ] : Scoring$Coronate.calcNewRatings(/* tuple */[
              match_[/* whiteOrigRating */5],
              match_[/* blackOrigRating */6]
            ], /* tuple */[
              white[/* matchCount */3],
              black[/* matchCount */3]
            ], /* tuple */[
              newWhiteScore,
              newBlackScore
            ]);
      Curry._1(playersDispatch, /* SetRating */Block.__(3, [
              white[/* id */1],
              newRatings[0]
            ]));
      Curry._1(playersDispatch, /* SetRating */Block.__(3, [
              black[/* id */1],
              newRatings[1]
            ]));
      if (match_[/* whiteScore */7] + match_[/* blackScore */8] === 0.0) {
        Curry._1(playersDispatch, /* SetMatchCount */Block.__(2, [
                white[/* id */1],
                white[/* matchCount */3] + 1 | 0
              ]));
        Curry._1(playersDispatch, /* SetMatchCount */Block.__(2, [
                black[/* id */1],
                black[/* matchCount */3] + 1 | 0
              ]));
      }
      return Curry._1(tourneyDispatch, /* SetMatchResult */Block.__(9, [
                    match_[/* id */0],
                    newRatings,
                    result,
                    roundId
                  ]));
    } else {
      return 0;
    }
  };
  var setMatchResultBlur = function ($$event) {
    return setMatchResult($$event.target.value);
  };
  var setMatchResultChange = function ($$event) {
    return setMatchResult($$event.target.value);
  };
  var tmp;
  if (isCompact) {
    tmp = null;
  } else {
    var tmp$1;
    if (scoreData !== undefined) {
      var scoreData$1 = Caml_option.valFromOption(scoreData);
      tmp$1 = React.createElement(Dialog.Dialog, {
            isOpen: match$1[0],
            onDismiss: (function (param) {
                return Curry._1(setIsModalOpen, (function (param) {
                              return false;
                            }));
              }),
            children: null
          }, React.createElement("button", {
                className: "button-micro button-primary",
                onClick: (function (param) {
                    return Curry._1(setIsModalOpen, (function (param) {
                                  return false;
                                }));
                  })
              }, "close"), React.createElement("p", undefined, tourney[/* name */3]), React.createElement("p", undefined, /* array */[
                  "Round ",
                  (roundId + 1 | 0).toString(),
                  " match ",
                  (pos + 1 | 0).toString()
                ].join(" ")), React.createElement(Utils$Coronate.PanelContainer[/* make */0], {
                children: null
              }, React.createElement(Utils$Coronate.Panel[/* make */0], {
                    children: React.createElement(PageRound$PlayerMatchInfo, {
                          playerId: match_[/* whiteId */1],
                          scoreData: scoreData$1,
                          origRating: match_[/* whiteOrigRating */5],
                          newRating: match_[/* whiteNewRating */3],
                          getPlayer: getPlayer
                        })
                  }), React.createElement(Utils$Coronate.Panel[/* make */0], {
                    children: React.createElement(PageRound$PlayerMatchInfo, {
                          playerId: match_[/* blackId */2],
                          scoreData: scoreData$1,
                          origRating: match_[/* blackOrigRating */6],
                          newRating: match_[/* blackNewRating */4],
                          getPlayer: getPlayer
                        })
                  })));
    } else {
      tmp$1 = null;
    }
    tmp = React.createElement("td", {
          className: "round__ controls data__input"
        }, Belt_Option.mapWithDefault(selectedMatch, null, (function (x) {
                var match = Belt_Option.mapWithDefault((x == null) ? undefined : Caml_option.some(x), true, (function (id) {
                        return id !== match_[/* id */0];
                      }));
                if (match) {
                  return React.createElement("button", {
                              className: "button-ghost",
                              title: "Edit match",
                              onClick: (function (param) {
                                  return Belt_Option.mapWithDefault(setSelectedMatch, /* () */0, (function (x) {
                                                return Curry._1(x, (function (param) {
                                                              return match_[/* id */0];
                                                            }));
                                              }));
                                })
                            }, React.createElement(ReactFeather.Circle, { }), React.createElement(VisuallyHidden.default, {
                                  children: /* array */[
                                      "Edit match for",
                                      whiteName,
                                      "versus",
                                      blackName
                                    ].join(" ")
                                }));
                } else {
                  return React.createElement("button", {
                              className: "button-ghost button-pressed",
                              title: "End editing match",
                              onClick: (function (param) {
                                  return Belt_Option.mapWithDefault(setSelectedMatch, /* () */0, (function (x) {
                                                return Curry._1(x, (function (param) {
                                                              return null;
                                                            }));
                                              }));
                                })
                            }, React.createElement(ReactFeather.CheckCircle, { }));
                }
              })), React.createElement("button", {
              className: "button-ghost",
              title: "Open match information.",
              onClick: (function (param) {
                  return Curry._1(setIsModalOpen, (function (param) {
                                return true;
                              }));
                })
            }, React.createElement(ReactFeather.Info, { }), React.createElement(VisuallyHidden.default, {
                  children: /* array */[
                      "View information for match:",
                      whiteName,
                      "versus",
                      blackName
                    ].join(" ")
                })), tmp$1);
  }
  return React.createElement("tr", {
              className: Belt_Option.mapWithDefault(selectedMatch, "", (function (x) {
                      return Belt_Option.mapWithDefault((x == null) ? undefined : Caml_option.some(x), "", (function (id) {
                                    var match = match_[/* id */0] === id;
                                    if (match) {
                                      return "selected";
                                    } else {
                                      return "buttons-on-hover";
                                    }
                                  }));
                    }))
            }, React.createElement("th", {
                  className: "table__number round__rowId",
                  scope: "row"
                }, String(pos + 1 | 0)), React.createElement("td", {
                  className: "round__playerResult"
                }, resultDisplay(/* White */-588596599)), React.createElement("td", {
                  className: "table__player row__player " + whitePlayer[/* type_ */5],
                  id: "match-" + (String(pos) + "-white")
                }, whiteName), React.createElement("td", {
                  className: "round__playerResult"
                }, resultDisplay(/* Black */-937474657)), React.createElement("td", {
                  className: "table__player row__player " + blackPlayer[/* type_ */5],
                  id: "match-" + (String(pos) + "-black")
                }, blackName), React.createElement("td", {
                  className: "round__matchResult data__input row__controls"
                }, React.createElement("select", {
                      className: "round__winnerSelect",
                      disabled: isDummyRound,
                      value: resultCodesToJs(resultCode),
                      onBlur: setMatchResultBlur,
                      onChange: setMatchResultChange
                    }, React.createElement("option", {
                          value: resultCodesToJs(/* NotSet */-432235409)
                        }, "Select winner"), React.createElement("option", {
                          value: resultCodesToJs(/* White */-588596599)
                        }, "White won"), React.createElement("option", {
                          value: resultCodesToJs(/* Black */-937474657)
                        }, "Black won"), React.createElement("option", {
                          value: resultCodesToJs(/* Draw */759781412)
                        }, "Draw"))), tmp);
}

var MatchRow = /* module */[/* make */PageRound$MatchRow];

function PageRound$RoundTable(Props) {
  var match = Props.isCompact;
  var isCompact = match !== undefined ? match : false;
  var roundId = Props.roundId;
  var selectedMatch = Props.selectedMatch;
  var setSelectedMatch = Props.setSelectedMatch;
  var tournament = Props.tournament;
  var scoreData = Props.scoreData;
  var tourney = tournament[/* tourney */7];
  var matchList = tourney[/* roundList */5][roundId];
  var match$1 = matchList.length === 0;
  return React.createElement("table", {
              className: "round__table"
            }, match$1 ? null : React.createElement(React.Fragment, undefined, React.createElement("caption", {
                        className: isCompact ? "title-30" : "title-40"
                      }, "Round ", (roundId + 1 | 0).toString(), " matches"), React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", {
                                className: "round__rowId",
                                scope: "col"
                              }, "#"), React.createElement("th", {
                                scope: "col"
                              }, React.createElement(VisuallyHidden.default, {
                                    children: "White result"
                                  })), React.createElement("th", {
                                className: "row__player",
                                scope: "col"
                              }, "White"), React.createElement("th", {
                                scope: "col"
                              }, React.createElement(VisuallyHidden.default, {
                                    children: "Black result"
                                  })), React.createElement("th", {
                                className: "row__player",
                                scope: "col"
                              }, "Black"), React.createElement("th", {
                                className: "row__result",
                                scope: "col"
                              }, "Match result"), isCompact ? null : React.createElement("th", {
                                  className: "row__controls",
                                  scope: "col"
                                }, React.createElement(VisuallyHidden.default, {
                                      children: "Controls"
                                    }))))), React.createElement("tbody", {
                  className: "round__tbody content"
                }, matchList.map((function (match_, pos) {
                        return React.createElement(PageRound$MatchRow, {
                                    isCompact: isCompact,
                                    pos: pos,
                                    match: match_,
                                    roundId: roundId,
                                    selectedMatch: selectedMatch,
                                    setSelectedMatch: setSelectedMatch,
                                    scoreData: scoreData,
                                    tournament: tournament,
                                    key: match_[/* id */0]
                                  });
                      }))));
}

var RoundTable = /* module */[/* make */PageRound$RoundTable];

function findById(id, list) {
  return list.filter((function (x) {
                  return x[/* id */0] === id;
                }))[0];
}

function PageRound$Round(Props) {
  var roundId = Props.roundId;
  var tournament = Props.tournament;
  var scoreData = Props.scoreData;
  var tourney = tournament[/* tourney */7];
  var players = tournament[/* players */4];
  var tourneyDispatch = tournament[/* tourneyDispatch */8];
  var playersDispatch = tournament[/* playersDispatch */5];
  var matchList = Belt_Array.get(tourney[/* roundList */5], roundId);
  var match = React.useState((function () {
          return null;
        }));
  var setSelectedMatch = match[1];
  var selectedMatch = match[0];
  var moveMatch = function (matchId, direction, matchList) {
    var oldIndex = matchList.indexOf(findById(matchId, matchList));
    var match = (oldIndex + direction | 0) >= 0;
    var newIndex = match ? oldIndex + direction | 0 : 0;
    return Curry._1(tourneyDispatch, /* MoveMatch */Block.__(12, [
                  oldIndex,
                  newIndex,
                  roundId
                ]));
  };
  if (matchList !== undefined) {
    var matchList$1 = matchList;
    var match$1 = matchList$1.length === 0;
    return React.createElement("div", {
                className: "content-area"
              }, React.createElement("div", {
                    className: "toolbar"
                  }, React.createElement("button", {
                        className: "button-micro",
                        disabled: selectedMatch === null,
                        onClick: (function (param) {
                            Belt_Option.map((selectedMatch == null) ? undefined : Caml_option.some(selectedMatch), (function (x) {
                                    var matchId = x;
                                    var matchList$2 = matchList$1;
                                    var match_ = findById(matchId, matchList$2);
                                    if (match_[/* whiteScore */7] + match_[/* blackScore */8] !== 0.0) {
                                      /* array */[
                                          /* tuple */[
                                            match_[/* whiteId */1],
                                            match_[/* whiteOrigRating */5]
                                          ],
                                          /* tuple */[
                                            match_[/* blackId */2],
                                            match_[/* blackOrigRating */6]
                                          ]
                                        ].forEach((function (param) {
                                              var id = param[0];
                                              var match = Belt_MapString.get(players, id);
                                              if (match !== undefined) {
                                                Curry._1(playersDispatch, /* SetMatchCount */Block.__(2, [
                                                        id,
                                                        match[/* matchCount */3] - 1 | 0
                                                      ]));
                                                return Curry._1(playersDispatch, /* SetRating */Block.__(3, [
                                                              id,
                                                              param[1]
                                                            ]));
                                              } else {
                                                return /* () */0;
                                              }
                                            }));
                                    }
                                    Curry._1(tourneyDispatch, /* DelMatch */Block.__(10, [
                                            matchId,
                                            roundId
                                          ]));
                                    return Curry._1(setSelectedMatch, (function (param) {
                                                  return null;
                                                }));
                                  }));
                            return /* () */0;
                          })
                      }, React.createElement(ReactFeather.Trash2, { }), " Unmatch"), " ", React.createElement("button", {
                        className: "button-micro",
                        disabled: selectedMatch === null,
                        onClick: (function (param) {
                            Belt_Option.map((selectedMatch == null) ? undefined : Caml_option.some(selectedMatch), (function (x) {
                                    return Curry._1(tourneyDispatch, /* SwapColors */Block.__(11, [
                                                  x,
                                                  roundId
                                                ]));
                                  }));
                            return /* () */0;
                          })
                      }, React.createElement(ReactFeather.Repeat, { }), " Swap colors"), " ", React.createElement("button", {
                        className: "button-micro",
                        disabled: selectedMatch === null,
                        onClick: (function (param) {
                            Belt_Option.map((selectedMatch == null) ? undefined : Caml_option.some(selectedMatch), (function (x) {
                                    return moveMatch(x, -1, matchList$1);
                                  }));
                            return /* () */0;
                          })
                      }, React.createElement(ReactFeather.ArrowUp, { }), " Move up"), " ", React.createElement("button", {
                        className: "button-micro",
                        disabled: selectedMatch === null,
                        onClick: (function (param) {
                            Belt_Option.map((selectedMatch == null) ? undefined : Caml_option.some(selectedMatch), (function (x) {
                                    return moveMatch(x, 1, matchList$1);
                                  }));
                            return /* () */0;
                          })
                      }, React.createElement(ReactFeather.ArrowDown, { }), " Move down")), match$1 ? React.createElement("p", undefined, "No players matched yet.") : null, React.createElement(PageRound$RoundTable, {
                    roundId: roundId,
                    selectedMatch: selectedMatch,
                    setSelectedMatch: setSelectedMatch,
                    tournament: tournament,
                    scoreData: scoreData
                  }));
  } else {
    return React.createElement(Pages$Coronate.NotFound[/* make */0], { });
  }
}

var Round = /* module */[/* make */PageRound$Round];

function genRoundData(roundId, tournament) {
  var tourney = tournament[/* tourney */7];
  var activePlayers = tournament[/* activePlayers */0];
  var getPlayer = tournament[/* getPlayer */1];
  var roundList = tourney[/* roundList */5];
  var scoreData = Converters$Coronate.matches2ScoreData(Data$Coronate.rounds2Matches(roundList, undefined, /* () */0));
  var match = roundId === (roundList.length - 1 | 0);
  var unmatched = match ? Data$Coronate.getUnmatched(roundList, activePlayers, roundId) : { };
  var unmatchedCount = Object.keys(unmatched).length;
  var unmatchedWithDummy = Js_dict.fromArray(Js_dict.entries(unmatched));
  if (unmatchedCount % 2 !== 0) {
    unmatchedWithDummy[Data$Coronate.dummy_id] = Curry._1(getPlayer, Data$Coronate.dummy_id);
  }
  var activePlayersCount = Belt_MapString.keysToArray(activePlayers).length;
  return /* tuple */[
          activePlayersCount,
          scoreData,
          unmatched,
          unmatchedCount,
          unmatchedWithDummy
        ];
}

function PageRound(Props) {
  var roundId = Props.roundId;
  var tournament = Props.tournament;
  var match = genRoundData(roundId, tournament);
  var unmatchedCount = match[3];
  var scoreData = match[1];
  var activePlayersCount = match[0];
  var match$1 = unmatchedCount === activePlayersCount;
  var initialTab = match$1 ? 1 : 0;
  var match$2 = React.useState((function () {
          return initialTab;
        }));
  var setOpenTab = match$2[1];
  React.useEffect((function (param) {
          if (unmatchedCount === activePlayersCount) {
            Curry._1(setOpenTab, (function (param) {
                    return 1;
                  }));
          }
          if (unmatchedCount === 0) {
            Curry._1(setOpenTab, (function (param) {
                    return 0;
                  }));
          }
          return undefined;
        }), /* tuple */[
        unmatchedCount,
        activePlayersCount,
        setOpenTab
      ]);
  var match$3 = unmatchedCount !== 0;
  return React.createElement(Tabs.Tabs, {
              index: match$2[0],
              onChange: (function (index) {
                  return Curry._1(setOpenTab, (function (param) {
                                return index;
                              }));
                }),
              children: null
            }, React.createElement(Tabs.TabList, {
                  children: null
                }, React.createElement(Tabs.Tab, {
                      disabled: unmatchedCount === activePlayersCount,
                      children: null
                    }, React.createElement(ReactFeather.List, { }), " Matches"), React.createElement(Tabs.Tab, {
                      disabled: unmatchedCount === 0,
                      children: null
                    }, React.createElement(ReactFeather.Users, { }), /* array */[
                        " Unmatched players (",
                        unmatchedCount.toString(),
                        ")"
                      ].join(""))), React.createElement(Tabs.TabPanels, {
                  children: null
                }, React.createElement(Tabs.TabPanel, {
                      children: React.createElement(PageRound$Round, {
                            roundId: roundId,
                            tournament: tournament,
                            scoreData: scoreData
                          })
                    }), React.createElement(Tabs.TabPanel, {
                      children: React.createElement("div", undefined, match$3 ? React.createElement(PairPicker$Coronate.make, {
                                  roundId: roundId,
                                  tournament: tournament,
                                  scoreData: scoreData,
                                  unmatched: match[2],
                                  unmatchedCount: unmatchedCount,
                                  unmatchedWithDummy: match[4]
                                }) : null)
                    })));
}

var make = PageRound;

export {
  PlayerMatchInfo ,
  resultCodesToJs ,
  resultCodesFromJs ,
  MatchRow ,
  RoundTable ,
  findById ,
  Round ,
  genRoundData ,
  make ,
  
}
/* react Not a pure module */
