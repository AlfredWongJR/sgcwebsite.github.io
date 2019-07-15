// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Cn from "re-classnames/src/Cn.bs.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Dialog from "@reach/dialog";
import * as ReactFeather from "react-feather";
import * as Icons$Coronate from "./Icons.bs.js";
import * as Utils$Coronate from "./Utils.bs.js";
import * as Electron$Coronate from "./Electron.bs.js";
import * as Webapi__Dom__Document from "bs-webapi/src/Webapi/Webapi__Dom/Webapi__Dom__Document.js";
import * as VisuallyHidden from "@reach/visually-hidden";

var global_title = "Coronate";

function formatTitle(title) {
  var match = title.length === 0;
  if (match) {
    return global_title;
  } else {
    return title + " - Coronate";
  }
}

function windowstateToJs(param) {
  return {
          isBlur: param[/* isBlur */0],
          isDialogOpen: param[/* isDialogOpen */1],
          isFullScreen: param[/* isFullScreen */2],
          isMaximized: param[/* isMaximized */3],
          isSidebarOpen: param[/* isSidebarOpen */4],
          title: param[/* title */5]
        };
}

function windowstateFromJs(param) {
  return /* record */[
          /* isBlur */param.isBlur,
          /* isDialogOpen */param.isDialogOpen,
          /* isFullScreen */param.isFullScreen,
          /* isMaximized */param.isMaximized,
          /* isSidebarOpen */param.isSidebarOpen,
          /* title */param.title
        ];
}

var initialWinState = /* record */[
  /* isBlur */false,
  /* isDialogOpen */false,
  /* isFullScreen */false,
  /* isMaximized */false,
  /* isSidebarOpen */true,
  /* title */""
];

function initialState_001(param) {
  return /* () */0;
}

var initialState = /* tuple */[
  initialWinState,
  initialState_001
];

var windowContext = React.createContext(initialState);

function makeProps(value, children, param) {
  return {
          value: value,
          children: children
        };
}

var make = windowContext.Provider;

var Provider = /* module */[
  /* makeProps */makeProps,
  /* make */make
];

var Context = /* module */[
  /* initialState */initialState,
  /* windowContext */windowContext,
  /* Provider */Provider
];

function useWindowContext(param) {
  return React.useContext(windowContext);
}

function Window$About(Props) {
  return React.createElement("article", {
              style: {
                display: "flex",
                width: "100%",
                justifyContent: "space-between"
              }
            }, React.createElement("div", {
                  style: {
                    textAlign: "center",
                    flex: "0 0 48%"
                  }
                }, React.createElement("img", {
                      alt: "",
                      height: "196",
                      src: Utils$Coronate.WebpackAssets[/* logo */0],
                      width: "196"
                    })), React.createElement("div", {
                  style: {
                    flex: "0 0 48%"
                  }
                }, React.createElement("h1", {
                      className: "title",
                      style: {
                        textAlign: "left"
                      }
                    }, "Coronate"), React.createElement("p", undefined, /* array */[
                        "Copyright ",
                        Utils$Coronate.Entities[/* copy */1],
                        " 2019 John",
                        Utils$Coronate.Entities[/* nbsp */0],
                        "Jackson"
                      ].join("")), React.createElement("p", undefined, "Coronate is free software."), React.createElement("p", undefined, React.createElement("a", {
                          href: Utils$Coronate.github_url,
                          onClick: Electron$Coronate.openInBrowser
                        }, "Source code is available"), React.createElement("br", undefined), " under the ", React.createElement("a", {
                          href: Utils$Coronate.license_url,
                          onClick: Electron$Coronate.openInBrowser
                        }, "AGPL v3.0 license"), ".")));
}

var About = /* module */[/* make */Window$About];

function windowReducer(state, action) {
  switch (action.tag | 0) {
    case 0 : 
        return /* record */[
                /* isBlur */action[0],
                /* isDialogOpen */state[/* isDialogOpen */1],
                /* isFullScreen */state[/* isFullScreen */2],
                /* isMaximized */state[/* isMaximized */3],
                /* isSidebarOpen */state[/* isSidebarOpen */4],
                /* title */state[/* title */5]
              ];
    case 1 : 
        return /* record */[
                /* isBlur */state[/* isBlur */0],
                /* isDialogOpen */action[0],
                /* isFullScreen */state[/* isFullScreen */2],
                /* isMaximized */state[/* isMaximized */3],
                /* isSidebarOpen */state[/* isSidebarOpen */4],
                /* title */state[/* title */5]
              ];
    case 2 : 
        return /* record */[
                /* isBlur */state[/* isBlur */0],
                /* isDialogOpen */state[/* isDialogOpen */1],
                /* isFullScreen */action[0],
                /* isMaximized */state[/* isMaximized */3],
                /* isSidebarOpen */state[/* isSidebarOpen */4],
                /* title */state[/* title */5]
              ];
    case 3 : 
        return /* record */[
                /* isBlur */state[/* isBlur */0],
                /* isDialogOpen */state[/* isDialogOpen */1],
                /* isFullScreen */state[/* isFullScreen */2],
                /* isMaximized */action[0],
                /* isSidebarOpen */state[/* isSidebarOpen */4],
                /* title */state[/* title */5]
              ];
    case 4 : 
        return /* record */[
                /* isBlur */state[/* isBlur */0],
                /* isDialogOpen */state[/* isDialogOpen */1],
                /* isFullScreen */state[/* isFullScreen */2],
                /* isMaximized */state[/* isMaximized */3],
                /* isSidebarOpen */action[0],
                /* title */state[/* title */5]
              ];
    case 5 : 
        return /* record */[
                /* isBlur */state[/* isBlur */0],
                /* isDialogOpen */state[/* isDialogOpen */1],
                /* isFullScreen */state[/* isFullScreen */2],
                /* isMaximized */state[/* isMaximized */3],
                /* isSidebarOpen */state[/* isSidebarOpen */4],
                /* title */action[0]
              ];
    
  }
}

var isElectronMac = Electron$Coronate.isMac && Electron$Coronate.isElectron;

var toolbarClasses = Cn.make(/* :: */[
      Cn.ifTrue("macos-button-toolbar", isElectronMac),
      /* :: */[
        Cn.ifTrue("button-ghost", !isElectronMac),
        /* [] */0
      ]
    ]);

function Window$MSWindowsControls(Props) {
  var state = Props.state;
  var electron = Props.electron;
  var $$window = electron.remote.getCurrentWindow();
  var middleButton = state[/* isFullScreen */2] ? React.createElement("button", {
          className: "windosControls__winButton button-ghost",
          onClick: (function (param) {
              $$window.setFullScreen(false);
              return /* () */0;
            })
        }, React.createElement(ReactFeather.Minimize2, { })) : (
      state[/* isMaximized */3] ? React.createElement("button", {
              className: "windosControls__winButton button-ghost",
              onClick: (function (param) {
                  $$window.unmaximize();
                  return /* () */0;
                })
            }, React.createElement(Icons$Coronate.Restore[/* make */0], { })) : React.createElement("button", {
              className: "windosControls__winButton button-ghost",
              onClick: (function (param) {
                  $$window.maximize();
                  return /* () */0;
                })
            }, React.createElement(Icons$Coronate.Maximize[/* make */0], { }))
    );
  return React.createElement("div", {
              className: "windowsControls__container"
            }, React.createElement("button", {
                  className: "windowsControls__winButton button-ghost",
                  onClick: (function (param) {
                      $$window.minimize();
                      return /* () */0;
                    })
                }, React.createElement(Icons$Coronate.Minimize[/* make */0], { })), middleButton, React.createElement("button", {
                  className: Cn.make(/* :: */[
                        "windowsControls__winButton",
                        /* :: */[
                          "windowsControls__close",
                          /* :: */[
                            "button-ghost",
                            /* [] */0
                          ]
                        ]
                      ]),
                  onClick: (function (param) {
                      $$window.close();
                      return /* () */0;
                    })
                }, React.createElement(Icons$Coronate.Close[/* make */0], { })));
}

var MSWindowsControls = /* module */[/* make */Window$MSWindowsControls];

function Window$TitleBar(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  return React.createElement("header", {
              className: Cn.make(/* :: */[
                    "app__header",
                    /* :: */[
                      "double-click-control",
                      /* :: */[
                        Cn.ifTrue("traffic-light-padding", isElectronMac && !state[/* isFullScreen */2]),
                        /* [] */0
                      ]
                    ]
                  ]),
              onDoubleClick: Electron$Coronate.macOSDoubleClick
            }, React.createElement("div", undefined, React.createElement(Electron$Coronate.IfElectron[/* make */0], {
                      children: (function (param) {
                          return React.createElement("span", {
                                      style: {
                                        display: "inline-flex",
                                        marginRight: "8px",
                                        marginLeft: "4px",
                                        alignItems: "center"
                                      }
                                    }, React.createElement("img", {
                                          alt: "",
                                          height: "16",
                                          src: Utils$Coronate.WebpackAssets[/* logo */0],
                                          width: "16"
                                        }));
                        }),
                      os: /* Windows */0
                    }), React.createElement("button", {
                      className: toolbarClasses,
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* SetSidebar */Block.__(4, [!state[/* isSidebarOpen */4]]));
                        })
                    }, React.createElement(ReactFeather.Sidebar, { }), React.createElement(VisuallyHidden.default, {
                          children: "Toggle sidebar"
                        })), React.createElement("button", {
                      className: toolbarClasses,
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* SetDialog */Block.__(1, [true]));
                        })
                    }, React.createElement(ReactFeather.HelpCircle, { }), React.createElement(VisuallyHidden.default, {
                          children: "About Coronate"
                        }))), React.createElement("div", {
                  className: Cn.make(/* :: */[
                        "body-20",
                        /* :: */[
                          "double-click-control",
                          /* :: */[
                            Cn.ifTrue("disabled", state[/* isBlur */0]),
                            /* [] */0
                          ]
                        ]
                      ]),
                  style: {
                    left: "0",
                    marginRight: "auto",
                    marginLeft: "auto",
                    position: "absolute",
                    right: "0",
                    textAlign: "center",
                    width: "50%"
                  }
                }, formatTitle(state[/* title */5])), React.createElement(Electron$Coronate.IfElectron[/* make */0], {
                  children: (function (electron) {
                      return React.createElement(Window$MSWindowsControls, {
                                  state: state,
                                  electron: electron
                                });
                    }),
                  os: /* Windows */0
                }));
}

var TitleBar = /* module */[/* make */Window$TitleBar];

function $$Window(Props) {
  var children = Props.children;
  var className = Props.className;
  var match = React.useReducer(windowReducer, initialWinState);
  var dispatch = match[1];
  var state = match[0];
  var title = state[/* title */5];
  React.useEffect((function () {
          Belt_Option.map(Webapi__Dom__Document.asHtmlDocument(document), (function (x) {
                  x.title = formatTitle(title);
                  return /* () */0;
                }));
          return undefined;
        }), /* array */[title]);
  React.useEffect((function () {
          var func = Electron$Coronate.ifElectron((function (electron) {
                  var win = electron.remote.getCurrentWindow();
                  var unregisterListeners = function (param) {
                    win.removeAllListeners("enter-full-screen");
                    win.removeAllListeners("leave-full-screen");
                    win.removeAllListeners("blur");
                    win.removeAllListeners("focus");
                    win.removeAllListeners("maximize");
                    win.removeAllListeners("unmaximize");
                    return /* () */0;
                  };
                  unregisterListeners(/* () */0);
                  win.on("enter-full-screen", (function (param) {
                          return Curry._1(dispatch, /* SetFullScreen */Block.__(2, [true]));
                        }));
                  win.on("leave-full-screen", (function (param) {
                          return Curry._1(dispatch, /* SetFullScreen */Block.__(2, [false]));
                        }));
                  win.on("maximize", (function (param) {
                          return Curry._1(dispatch, /* SetMaximized */Block.__(3, [true]));
                        }));
                  win.on("unmaximize", (function (param) {
                          return Curry._1(dispatch, /* SetMaximized */Block.__(3, [false]));
                        }));
                  win.on("blur", (function (param) {
                          return Curry._1(dispatch, /* SetBlur */Block.__(0, [true]));
                        }));
                  win.on("focus", (function (param) {
                          return Curry._1(dispatch, /* SetBlur */Block.__(0, [false]));
                        }));
                  Curry._1(dispatch, /* SetBlur */Block.__(0, [!win.isFocused()]));
                  Curry._1(dispatch, /* SetFullScreen */Block.__(2, [win.isFullScreen()]));
                  Curry._1(dispatch, /* SetMaximized */Block.__(3, [win.isMaximized()]));
                  return unregisterListeners;
                }));
          if (func !== undefined) {
            return func;
          }
          
        }), /* array */[dispatch]);
  return React.createElement("div", {
              className: Cn.make(/* :: */[
                    className,
                    /* :: */[
                      Cn.ifTrue("open-sidebar", state[/* isSidebarOpen */4]),
                      /* :: */[
                        Cn.ifTrue("closed-sidebar", !state[/* isSidebarOpen */4]),
                        /* :: */[
                          Cn.ifTrue("window-blur", state[/* isBlur */0]),
                          /* :: */[
                            Cn.ifTrue("isWindows", Electron$Coronate.isWin),
                            /* :: */[
                              Cn.ifTrue("isMacOS", Electron$Coronate.isMac),
                              /* :: */[
                                Cn.ifTrue("isElectron", Electron$Coronate.isElectron),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ])
            }, React.createElement(Window$TitleBar, {
                  state: state,
                  dispatch: dispatch
                }), React.createElement(make, makeProps(/* tuple */[
                      state,
                      dispatch
                    ], children, /* () */0)), React.createElement(Dialog.Dialog, {
                  isOpen: state[/* isDialogOpen */1],
                  onDismiss: (function (param) {
                      return Curry._1(dispatch, /* SetDialog */Block.__(1, [false]));
                    }),
                  children: null,
                  style: {
                    backgroundColor: "var(--grey-20)"
                  }
                }, React.createElement("button", {
                      className: "button-micro",
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* SetDialog */Block.__(1, [false]));
                        })
                    }, "Close"), React.createElement(Window$About, { })));
}

function noDraggy(e) {
  e.preventDefault();
  return /* () */0;
}

function Window$DefaultSidebar(Props) {
  return React.createElement("nav", undefined, React.createElement("ul", {
                  style: {
                    margin: "0"
                  }
                }, React.createElement("li", undefined, React.createElement("a", {
                          href: "#/tourneys",
                          onDragStart: noDraggy
                        }, React.createElement(ReactFeather.Award, { }), React.createElement("span", {
                              className: "sidebar__hide-on-close"
                            }, Utils$Coronate.Entities[/* nbsp */0] + "Tournaments"))), React.createElement("li", undefined, React.createElement("a", {
                          href: "#/players",
                          onDragStart: noDraggy
                        }, React.createElement(ReactFeather.Users, { }), React.createElement("span", {
                              className: "sidebar__hide-on-close"
                            }, Utils$Coronate.Entities[/* nbsp */0] + "Players"))), React.createElement("li", undefined, React.createElement("a", {
                          href: "#/options",
                          onDragStart: noDraggy
                        }, React.createElement(ReactFeather.Settings, { }), React.createElement("span", {
                              className: "sidebar__hide-on-close"
                            }, Utils$Coronate.Entities[/* nbsp */0] + "Options"))), React.createElement("li", undefined, React.createElement("a", {
                          href: "#/",
                          onDragStart: noDraggy
                        }, React.createElement(ReactFeather.HelpCircle, { }), React.createElement("span", {
                              className: "sidebar__hide-on-close"
                            }, Utils$Coronate.Entities[/* nbsp */0] + "Info")))));
}

var DefaultSidebar = /* module */[/* make */Window$DefaultSidebar];

function sidebarCallback(param) {
  return React.createElement(Window$DefaultSidebar, { });
}

function Window$Body(Props) {
  var children = Props.children;
  var footerFunc = Props.footerFunc;
  var match = Props.sidebarFunc;
  var sidebarFunc = match !== undefined ? match : sidebarCallback;
  return React.createElement("div", {
              className: Cn.make(/* :: */[
                    "winBody",
                    /* :: */[
                      Cn.ifSome("winBody-hasFooter", footerFunc),
                      /* [] */0
                    ]
                  ])
            }, React.createElement("div", {
                  className: "win__sidebar"
                }, Curry._1(sidebarFunc, /* () */0)), React.createElement("div", {
                  className: "win__content"
                }, children), footerFunc !== undefined ? React.createElement("footer", {
                    className: Cn.make(/* :: */[
                          "win__footer",
                          /* [] */0
                        ])
                  }, Curry._1(footerFunc, /* () */0)) : null);
}

var Body = /* module */[/* make */Window$Body];

var make$1 = $$Window;

export {
  global_title ,
  formatTitle ,
  windowstateToJs ,
  windowstateFromJs ,
  initialWinState ,
  Context ,
  useWindowContext ,
  About ,
  windowReducer ,
  isElectronMac ,
  toolbarClasses ,
  MSWindowsControls ,
  TitleBar ,
  make$1 as make,
  noDraggy ,
  DefaultSidebar ,
  sidebarCallback ,
  Body ,
  
}
/* windowContext Not a pure module */
