// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Pages$Coronate from "./Pages.bs.js";
import * as Utils$Coronate from "./Utils.bs.js";
import * as Window$Coronate from "./Window.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as PageOptions$Coronate from "./PageOptions.bs.js";
import * as PagePlayers$Coronate from "./PagePlayers.bs.js";
import * as PageTourney$Coronate from "./PageTournament/PageTourney.bs.js";
import * as PageTournamentList$Coronate from "./PageTournamentList.bs.js";

((require("./side-effects")));

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = Utils$Coronate.hashPath(url[/* hash */1]);
  var tmp;
  var exit = 0;
  if (match && match[0] === "") {
    var match$1 = match[1];
    if (match$1) {
      switch (match$1[0]) {
        case "" : 
            if (match$1[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(Pages$Coronate.Splash[/* make */0], { });
            }
            break;
        case "options" : 
            if (match$1[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(PageOptions$Coronate.make, { });
            }
            break;
        case "players" : 
            var id = match$1[1];
            tmp = id ? React.createElement(PagePlayers$Coronate.make, {
                    id: id
                  }) : React.createElement(PagePlayers$Coronate.make, { });
            break;
        case "tourneys" : 
            var match$2 = match$1[1];
            if (match$2) {
              var hashPath = match$2[1];
              var tourneyId = match$2[0];
              tmp = hashPath ? React.createElement(PageTourney$Coronate.make, {
                      tourneyId: tourneyId,
                      hashPath: hashPath
                    }) : React.createElement(PageTourney$Coronate.make, {
                      tourneyId: tourneyId,
                      hashPath: /* :: */[
                        "",
                        /* [] */0
                      ]
                    });
            } else {
              tmp = React.createElement(PageTournamentList$Coronate.make, { });
            }
            break;
        default:
          exit = 1;
      }
    } else {
      tmp = React.createElement(Pages$Coronate.Splash[/* make */0], { });
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement(Window$Coronate.WindowBody[/* make */0], {
          children: React.createElement(Pages$Coronate.NotFound[/* make */0], { })
        });
  }
  return React.createElement(Window$Coronate.$$Window[/* make */0], {
              children: React.createElement("main", {
                    className: "app__main"
                  }, tmp),
              className: "app"
            });
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
