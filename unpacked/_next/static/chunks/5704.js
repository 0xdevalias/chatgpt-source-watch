"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5704],
  {
    85704: function (e, t, n) {
      t.kQ = t.ZP = void 0;
      var r = n(78947);
      Object.defineProperty(t, "ZP", {
        enumerable: !0,
        get: function () {
          return r.useWebSocket;
        },
      }),
        n(3275);
      var o = n(45824);
      Object.defineProperty(t, "kQ", {
        enumerable: !0,
        get: function () {
          return o.ReadyState;
        },
      }),
        n(44139),
        n(62826);
    },
    24395: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.attachListeners = void 0);
      var o = n(29451),
        c = n(90693),
        u = n(45824),
        a = n(62826),
        s = function (e, t, n) {
          var r;
          if (t.current.heartbeat && e instanceof WebSocket) {
            var o =
              "boolean" == typeof t.current.heartbeat
                ? void 0
                : t.current.heartbeat;
            r = (0, c.heartbeat)(e, o);
          }
          e.onmessage = function (e) {
            var o;
            null == r || r(),
              t.current.onMessage && t.current.onMessage(e),
              ("function" != typeof t.current.filter ||
                !0 === t.current.filter(e)) &&
                ((t.current.heartbeat &&
                  "boolean" != typeof t.current.heartbeat &&
                  (null === (o = t.current.heartbeat) || void 0 === o
                    ? void 0
                    : o.returnMessage) === e.data) ||
                  n(e));
          };
        },
        i = function (e, t, n, r) {
          e.onopen = function (e) {
            t.current.onOpen && t.current.onOpen(e),
              (r.current = 0),
              n(u.ReadyState.OPEN);
          };
        },
        l = function (e, t, n, r, o) {
          var c;
          return u.isEventSourceSupported && e instanceof EventSource
            ? function () {}
            : ((0, a.assertIsWebSocket)(e, t.current.skipAssert),
              (e.onclose = function (e) {
                var a;
                if (
                  (t.current.onClose && t.current.onClose(e),
                  n(u.ReadyState.CLOSED),
                  t.current.shouldReconnect && t.current.shouldReconnect(e))
                ) {
                  var s =
                    null !== (a = t.current.reconnectAttempts) && void 0 !== a
                      ? a
                      : u.DEFAULT_RECONNECT_LIMIT;
                  if (o.current < s) {
                    var i =
                      "function" == typeof t.current.reconnectInterval
                        ? t.current.reconnectInterval(o.current)
                        : t.current.reconnectInterval;
                    c = window.setTimeout(
                      function () {
                        o.current++, r();
                      },
                      null != i ? i : u.DEFAULT_RECONNECT_INTERVAL_MS
                    );
                  } else
                    t.current.onReconnectStop && t.current.onReconnectStop(s),
                      console.warn(
                        "Max reconnect attempts of ".concat(s, " exceeded")
                      );
                }
              }),
              function () {
                return c && window.clearTimeout(c);
              });
        },
        f = function (e, t, n, o, c) {
          var a;
          return (
            (e.onerror = function (s) {
              var i;
              if (
                (t.current.onError && t.current.onError(s),
                u.isEventSourceSupported &&
                  e instanceof EventSource &&
                  (t.current.onClose &&
                    t.current.onClose(
                      r(r({}, s), {
                        code: 1006,
                        reason:
                          "An error occurred with the EventSource: ".concat(s),
                        wasClean: !1,
                      })
                    ),
                  n(u.ReadyState.CLOSED),
                  e.close()),
                t.current.retryOnError)
              ) {
                if (
                  c.current <
                  (null !== (i = t.current.reconnectAttempts) && void 0 !== i
                    ? i
                    : u.DEFAULT_RECONNECT_LIMIT)
                ) {
                  var l =
                    "function" == typeof t.current.reconnectInterval
                      ? t.current.reconnectInterval(c.current)
                      : t.current.reconnectInterval;
                  a = window.setTimeout(
                    function () {
                      c.current++, o();
                    },
                    null != l ? l : u.DEFAULT_RECONNECT_INTERVAL_MS
                  );
                } else
                  t.current.onReconnectStop &&
                    t.current.onReconnectStop(t.current.reconnectAttempts),
                    console.warn(
                      "Max reconnect attempts of ".concat(
                        t.current.reconnectAttempts,
                        " exceeded"
                      )
                    );
              }
            }),
            function () {
              return a && window.clearTimeout(a);
            }
          );
        };
      t.attachListeners = function (e, t, n, r, c, a) {
        var d,
          S,
          p,
          v = t.setLastMessage,
          b = t.setReadyState;
        return (
          n.current.fromSocketIO && (d = (0, o.setUpSocketIOPing)(a)),
          s(e, n, v),
          i(e, n, b, c),
          (S = l(e, n, b, r, c)),
          (p = f(e, n, b, r, c)),
          function () {
            b(u.ReadyState.CLOSING), S(), p(), e.close(), d && clearInterval(d);
          }
        );
      };
    },
    12021: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.attachSharedListeners = void 0);
      var o = n(57056),
        c = n(45824),
        u = n(86370),
        a = n(29451),
        s = n(90693),
        i = function (e, t, n) {
          var r;
          n &&
            e instanceof WebSocket &&
            (r = (0, s.heartbeat)(e, "boolean" == typeof n ? void 0 : n)),
            (e.onmessage = function (e) {
              null == r || r(),
                (0, u.getSubscribers)(t).forEach(function (t) {
                  t.optionsRef.current.onMessage &&
                    t.optionsRef.current.onMessage(e),
                    ("function" != typeof t.optionsRef.current.filter ||
                      !0 === t.optionsRef.current.filter(e)) &&
                      ((n &&
                        "boolean" != typeof n &&
                        (null == n ? void 0 : n.returnMessage) === e.data) ||
                        t.setLastMessage(e));
                });
            });
        },
        l = function (e, t) {
          e.onopen = function (e) {
            (0, u.getSubscribers)(t).forEach(function (t) {
              (t.reconnectCount.current = 0),
                t.optionsRef.current.onOpen && t.optionsRef.current.onOpen(e),
                t.setReadyState(c.ReadyState.OPEN);
            });
          };
        },
        f = function (e, t) {
          e instanceof WebSocket &&
            (e.onclose = function (e) {
              (0, u.getSubscribers)(t).forEach(function (t) {
                t.optionsRef.current.onClose && t.optionsRef.current.onClose(e),
                  t.setReadyState(c.ReadyState.CLOSED);
              }),
                delete o.sharedWebSockets[t],
                (0, u.getSubscribers)(t).forEach(function (t) {
                  var n;
                  if (
                    t.optionsRef.current.shouldReconnect &&
                    t.optionsRef.current.shouldReconnect(e)
                  ) {
                    var r =
                      null !== (n = t.optionsRef.current.reconnectAttempts) &&
                      void 0 !== n
                        ? n
                        : c.DEFAULT_RECONNECT_LIMIT;
                    if (t.reconnectCount.current < r) {
                      var o =
                        "function" ==
                        typeof t.optionsRef.current.reconnectInterval
                          ? t.optionsRef.current.reconnectInterval(
                              t.reconnectCount.current
                            )
                          : t.optionsRef.current.reconnectInterval;
                      setTimeout(
                        function () {
                          t.reconnectCount.current++, t.reconnect.current();
                        },
                        null != o ? o : c.DEFAULT_RECONNECT_INTERVAL_MS
                      );
                    } else
                      t.optionsRef.current.onReconnectStop &&
                        t.optionsRef.current.onReconnectStop(
                          t.optionsRef.current.reconnectAttempts
                        ),
                        console.warn(
                          "Max reconnect attempts of ".concat(r, " exceeded")
                        );
                  }
                });
            });
        },
        d = function (e, t) {
          e.onerror = function (n) {
            (0, u.getSubscribers)(t).forEach(function (t) {
              t.optionsRef.current.onError && t.optionsRef.current.onError(n),
                c.isEventSourceSupported &&
                  e instanceof EventSource &&
                  (t.optionsRef.current.onClose &&
                    t.optionsRef.current.onClose(
                      r(r({}, n), {
                        code: 1006,
                        reason:
                          "An error occurred with the EventSource: ".concat(n),
                        wasClean: !1,
                      })
                    ),
                  t.setReadyState(c.ReadyState.CLOSED));
            }),
              c.isEventSourceSupported && e instanceof EventSource && e.close();
          };
        };
      t.attachSharedListeners = function (e, t, n, r) {
        var o;
        return (
          n.current.fromSocketIO && (o = (0, a.setUpSocketIOPing)(r)),
          i(e, t, n.current.heartbeat),
          f(e, t),
          l(e, t),
          d(e, t),
          function () {
            o && clearInterval(o);
          }
        );
      };
    },
    45824: function (e, t) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isEventSourceSupported =
          t.isReactNative =
          t.ReadyState =
          t.DEFAULT_HEARTBEAT =
          t.UNPARSABLE_JSON_OBJECT =
          t.DEFAULT_RECONNECT_INTERVAL_MS =
          t.DEFAULT_RECONNECT_LIMIT =
          t.SOCKET_IO_PING_CODE =
          t.SOCKET_IO_PATH =
          t.SOCKET_IO_PING_INTERVAL =
          t.DEFAULT_EVENT_SOURCE_OPTIONS =
          t.EMPTY_EVENT_HANDLERS =
          t.DEFAULT_OPTIONS =
            void 0),
        (t.DEFAULT_OPTIONS = {}),
        (t.EMPTY_EVENT_HANDLERS = {}),
        (t.DEFAULT_EVENT_SOURCE_OPTIONS = {
          withCredentials: !1,
          events: t.EMPTY_EVENT_HANDLERS,
        }),
        (t.SOCKET_IO_PING_INTERVAL = 25e3),
        (t.SOCKET_IO_PATH = "/socket.io/?EIO=3&transport=websocket"),
        (t.SOCKET_IO_PING_CODE = "2"),
        (t.DEFAULT_RECONNECT_LIMIT = 20),
        (t.DEFAULT_RECONNECT_INTERVAL_MS = 5e3),
        (t.UNPARSABLE_JSON_OBJECT = {}),
        (t.DEFAULT_HEARTBEAT = {
          message: "ping",
          timeout: 6e4,
          interval: 25e3,
        }),
        ((n = t.ReadyState || (t.ReadyState = {}))[(n.UNINSTANTIATED = -1)] =
          "UNINSTANTIATED"),
        (n[(n.CONNECTING = 0)] = "CONNECTING"),
        (n[(n.OPEN = 1)] = "OPEN"),
        (n[(n.CLOSING = 2)] = "CLOSING"),
        (n[(n.CLOSED = 3)] = "CLOSED"),
        (t.isReactNative =
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product),
        (t.isEventSourceSupported =
          !t.isReactNative &&
          (function () {
            try {
              return "EventSource" in globalThis;
            } catch (e) {
              return !1;
            }
          })());
    },
    45324: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createOrJoinSocket = void 0);
      var r = n(57056),
        o = n(45824),
        c = n(24395),
        u = n(12021),
        a = n(86370);
      t.createOrJoinSocket = function (e, t, n, s, i, l, f, d) {
        if (!o.isEventSourceSupported && s.current.eventSourceOptions) {
          if (o.isReactNative)
            throw Error("EventSource is not supported in ReactNative");
          throw Error("EventSource is not supported");
        }
        if (s.current.share) {
          var S,
            p = null;
          void 0 === r.sharedWebSockets[t]
            ? ((r.sharedWebSockets[t] = s.current.eventSourceOptions
                ? new EventSource(t, s.current.eventSourceOptions)
                : new WebSocket(t, s.current.protocols)),
              (e.current = r.sharedWebSockets[t]),
              n(o.ReadyState.CONNECTING),
              (p = (0, u.attachSharedListeners)(
                r.sharedWebSockets[t],
                t,
                s,
                d
              )))
            : ((e.current = r.sharedWebSockets[t]),
              n(r.sharedWebSockets[t].readyState));
          var v = {
            setLastMessage: i,
            setReadyState: n,
            optionsRef: s,
            reconnectCount: f,
            reconnect: l,
          };
          return (
            (0, a.addSubscriber)(t, v),
            (S = p),
            function () {
              if (((0, a.removeSubscriber)(t, v), !(0, a.hasSubscribers)(t))) {
                try {
                  var e = r.sharedWebSockets[t];
                  e instanceof WebSocket &&
                    (e.onclose = function (e) {
                      s.current.onClose && s.current.onClose(e),
                        n(o.ReadyState.CLOSED);
                    }),
                    e.close();
                } catch (e) {}
                S && S(), delete r.sharedWebSockets[t];
              }
            }
          );
        }
        if (
          ((e.current = s.current.eventSourceOptions
            ? new EventSource(t, s.current.eventSourceOptions)
            : new WebSocket(t, s.current.protocols)),
          n(o.ReadyState.CONNECTING),
          !e.current)
        )
          throw Error("WebSocket failed to be created");
        return (0, c.attachListeners)(
          e.current,
          { setLastMessage: i, setReadyState: n },
          s,
          l.current,
          f,
          d
        );
      };
    },
    86180: function (e, t, n) {
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, c) {
              function u(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  c(e);
                }
              }
              function a(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  c(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(u, a);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              c,
              u = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (c = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (c[Symbol.iterator] = function () {
                  return this;
                }),
              c
            );
            function a(c) {
              return function (a) {
                return (function (c) {
                  if (n) throw TypeError("Generator is already executing.");
                  for (; u; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & c[0]
                              ? r.return
                              : c[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, c[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                        case 0:
                        case 1:
                          o = c;
                          break;
                        case 4:
                          return u.label++, { value: c[1], done: !1 };
                        case 5:
                          u.label++, (r = c[1]), (c = [0]);
                          continue;
                        case 7:
                          (c = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            u = 0;
                            continue;
                          }
                          if (
                            3 === c[0] &&
                            (!o || (c[1] > o[0] && c[1] < o[3]))
                          ) {
                            u.label = c[1];
                            break;
                          }
                          if (6 === c[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = c);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(c);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      c = t.call(e, u);
                    } catch (e) {
                      (c = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & c[0]) throw c[1];
                  return { value: c[0] ? c[1] : void 0, done: !0 };
                })([c, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUrl = void 0);
      var c = n(29451);
      t.getUrl = function (e, t) {
        return r(void 0, void 0, void 0, function () {
          var n, r;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                if ("function" != typeof e) return [3, 2];
                return [4, e()];
              case 1:
                return (n = o.sent()), [3, 3];
              case 2:
                (n = e), (o.label = 3);
              case 3:
                return (
                  (r = t.current.fromSocketIO ? (0, c.parseSocketIOUrl)(n) : n),
                  [
                    2,
                    t.current.queryParams
                      ? (0, c.appendQueryParams)(r, t.current.queryParams)
                      : r,
                  ]
                );
            }
          });
        });
      };
    },
    57056: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetWebSockets = t.sharedWebSockets = void 0),
        (t.sharedWebSockets = {}),
        (t.resetWebSockets = function (e) {
          if (e && t.sharedWebSockets.hasOwnProperty(e))
            delete t.sharedWebSockets[e];
          else
            for (var n in t.sharedWebSockets)
              t.sharedWebSockets.hasOwnProperty(n) &&
                delete t.sharedWebSockets[n];
        });
    },
    90693: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.heartbeat = void 0);
      var r = n(45824);
      t.heartbeat = function (e, t) {
        var n = t || {},
          o = n.interval,
          c = void 0 === o ? r.DEFAULT_HEARTBEAT.interval : o,
          u = n.timeout,
          a = void 0 === u ? r.DEFAULT_HEARTBEAT.timeout : u,
          s = n.message,
          i = void 0 === s ? r.DEFAULT_HEARTBEAT.message : s,
          l = !1,
          f = setInterval(function () {
            try {
              e.send(i);
            } catch (e) {}
          }, c),
          d = setInterval(function () {
            l ? (l = !1) : e.close();
          }, a);
        return (
          e.addEventListener("close", function () {
            clearInterval(f), clearInterval(d);
          }),
          function () {
            l = !0;
          }
        );
      };
    },
    86370: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetSubscribers =
          t.removeSubscriber =
          t.addSubscriber =
          t.hasSubscribers =
          t.getSubscribers =
            void 0);
      var n = {},
        r = [];
      (t.getSubscribers = function (e) {
        return (0, t.hasSubscribers)(e) ? Array.from(n[e]) : r;
      }),
        (t.hasSubscribers = function (e) {
          var t;
          return (null === (t = n[e]) || void 0 === t ? void 0 : t.size) > 0;
        }),
        (t.addSubscriber = function (e, t) {
          (n[e] = n[e] || new Set()), n[e].add(t);
        }),
        (t.removeSubscriber = function (e, t) {
          n[e].delete(t);
        }),
        (t.resetSubscribers = function (e) {
          if (e && n.hasOwnProperty(e)) delete n[e];
          else for (var t in n) n.hasOwnProperty(t) && delete n[t];
        });
    },
    84354: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.websocketWrapper = void 0),
        (t.websocketWrapper = function (e, t) {
          return new Proxy(e, {
            get: function (e, n) {
              var r = e[n];
              return "reconnect" === n
                ? t
                : "function" == typeof r
                  ? (console.error(
                      "Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."
                    ),
                    function () {})
                  : r;
            },
            set: function (e, t, n) {
              return /^on/.test(t)
                ? (console.warn(
                    "The websocket's event handlers should be defined through the options object passed into useWebSocket."
                  ),
                  !1)
                : ((e[t] = n), !0);
            },
          });
        }),
        (t.default = t.websocketWrapper);
    },
    29451: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setUpSocketIOPing =
          t.appendQueryParams =
          t.parseSocketIOUrl =
            void 0);
      var r = n(45824);
      (t.parseSocketIOUrl = function (e) {
        if (e) {
          var t = /^https|wss/.test(e),
            n = e.replace(/^(https?|wss?)(:\/\/)?/, "").replace(/\/$/, ""),
            o = t ? "wss" : "ws";
          return "".concat(o, "://").concat(n).concat(r.SOCKET_IO_PATH);
        }
        if ("" === e) {
          var t = /^https/.test(window.location.protocol),
            o = t ? "wss" : "ws",
            c = window.location.port ? ":".concat(window.location.port) : "";
          return ""
            .concat(o, "://")
            .concat(window.location.hostname)
            .concat(c)
            .concat(r.SOCKET_IO_PATH);
        }
        return e;
      }),
        (t.appendQueryParams = function (e, t) {
          void 0 === t && (t = {});
          var n = /\?([\w]+=[\w]+)/.test(e),
            r = "".concat(
              Object.entries(t)
                .reduce(function (e, t) {
                  var n = t[0],
                    r = t[1];
                  return e + "".concat(n, "=").concat(r, "&");
                }, "")
                .slice(0, -1)
            );
          return ""
            .concat(e)
            .concat(n ? "&" : "?")
            .concat(r);
        }),
        (t.setUpSocketIOPing = function (e, t) {
          return (
            void 0 === t && (t = r.SOCKET_IO_PING_INTERVAL),
            window.setInterval(function () {
              return e(r.SOCKET_IO_PING_CODE);
            }, t)
          );
        });
    },
    44139: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useEventSource = void 0);
      var c = n(70079),
        u = n(78947),
        a = n(45824);
      t.useEventSource = function (e, t, n) {
        void 0 === t && (t = a.DEFAULT_EVENT_SOURCE_OPTIONS);
        var s = t.withCredentials,
          i = t.events,
          l = o(t, ["withCredentials", "events"]);
        void 0 === n && (n = !0);
        var f = r(r({}, l), { eventSourceOptions: { withCredentials: s } }),
          d = (0, c.useRef)(a.EMPTY_EVENT_HANDLERS);
        i && (d.current = i);
        var S = (0, u.useWebSocket)(e, f, n),
          p = S.lastMessage,
          v = S.readyState,
          b = S.getWebSocket;
        return (
          (0, c.useEffect)(
            function () {
              (null == p ? void 0 : p.type) &&
                Object.entries(d.current).forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  t === p.type && n(p);
                });
            },
            [p]
          ),
          { lastEvent: p, readyState: v, getEventSource: b }
        );
      };
    },
    3275: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useSocketIO = void 0);
      var o = n(70079),
        c = n(78947),
        u = n(45824),
        a = { type: "empty", payload: null },
        s = function (e) {
          if (!e || !e.data) return a;
          var t = e.data.match(/\[.*]/);
          if (!t) return a;
          var n = JSON.parse(t);
          return Array.isArray(n) && n[1] ? { type: n[0], payload: n[1] } : a;
        };
      t.useSocketIO = function (e, t, n) {
        void 0 === t && (t = u.DEFAULT_OPTIONS), void 0 === n && (n = !0);
        var a = (0, o.useMemo)(function () {
            return r(r({}, t), { fromSocketIO: !0 });
          }, []),
          i = (0, c.useWebSocket)(e, a, n),
          l = i.sendMessage,
          f = i.sendJsonMessage,
          d = i.lastMessage,
          S = i.readyState,
          p = i.getWebSocket,
          v = (0, o.useMemo)(
            function () {
              return s(d);
            },
            [d]
          );
        return {
          sendMessage: l,
          sendJsonMessage: f,
          lastMessage: v,
          lastJsonMessage: v,
          readyState: S,
          getWebSocket: p,
        };
      };
    },
    78947: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, c) {
              function u(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  c(e);
                }
              }
              function a(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  c(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(u, a);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        c =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              c,
              u = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (c = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (c[Symbol.iterator] = function () {
                  return this;
                }),
              c
            );
            function a(c) {
              return function (a) {
                return (function (c) {
                  if (n) throw TypeError("Generator is already executing.");
                  for (; u; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & c[0]
                              ? r.return
                              : c[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, c[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                        case 0:
                        case 1:
                          o = c;
                          break;
                        case 4:
                          return u.label++, { value: c[1], done: !1 };
                        case 5:
                          u.label++, (r = c[1]), (c = [0]);
                          continue;
                        case 7:
                          (c = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            u = 0;
                            continue;
                          }
                          if (
                            3 === c[0] &&
                            (!o || (c[1] > o[0] && c[1] < o[3]))
                          ) {
                            u.label = c[1];
                            break;
                          }
                          if (6 === c[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = c);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(c);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      c = t.call(e, u);
                    } catch (e) {
                      (c = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & c[0]) throw c[1];
                  return { value: c[0] ? c[1] : void 0, done: !0 };
                })([c, a]);
              };
            }
          },
        u =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useWebSocket = void 0);
      var a = n(70079),
        s = n(99581),
        i = n(45824),
        l = n(45324),
        f = n(86180),
        d = u(n(84354)),
        S = n(62826);
      t.useWebSocket = function (e, t, n) {
        void 0 === t && (t = i.DEFAULT_OPTIONS), void 0 === n && (n = !0);
        var u = (0, a.useState)(null),
          p = u[0],
          v = u[1],
          b = (0, a.useState)({}),
          E = b[0],
          h = b[1],
          O = (0, a.useMemo)(
            function () {
              if (p)
                try {
                  return JSON.parse(p.data);
                } catch (e) {
                  return i.UNPARSABLE_JSON_OBJECT;
                }
              return null;
            },
            [p]
          ),
          y = (0, a.useRef)(null),
          _ = (0, a.useRef)(null),
          T = (0, a.useRef)(function () {}),
          R = (0, a.useRef)(0),
          N = (0, a.useRef)([]),
          w = (0, a.useRef)(null),
          I = (0, a.useRef)(t);
        I.current = t;
        var C =
            y.current && void 0 !== E[y.current]
              ? E[y.current]
              : null !== e && !0 === n
                ? i.ReadyState.CONNECTING
                : i.ReadyState.UNINSTANTIATED,
          k = t.queryParams ? JSON.stringify(t.queryParams) : null,
          g = (0, a.useCallback)(function (e, t) {
            var n;
            if (
              (void 0 === t && (t = !0),
              i.isEventSourceSupported && _.current instanceof EventSource)
            ) {
              console.warn("Unable to send a message from an eventSource");
              return;
            }
            (null === (n = _.current) || void 0 === n
              ? void 0
              : n.readyState) === i.ReadyState.OPEN
              ? ((0, S.assertIsWebSocket)(_.current, I.current.skipAssert),
                _.current.send(e))
              : t && N.current.push(e);
          }, []),
          A = (0, a.useCallback)(
            function (e, t) {
              void 0 === t && (t = !0), g(JSON.stringify(e), t);
            },
            [g]
          ),
          P = (0, a.useCallback)(function () {
            return !0 !== I.current.share ||
              (i.isEventSourceSupported && _.current instanceof EventSource)
              ? _.current
              : (null === w.current &&
                  _.current &&
                  ((0, S.assertIsWebSocket)(_.current, I.current.skipAssert),
                  (w.current = (0, d.default)(_.current, T))),
                w.current);
          }, []);
        return (
          (0, a.useEffect)(
            function () {
              if (null !== e && !0 === n) {
                var t,
                  u = !1,
                  a = !0,
                  d = function () {
                    return o(void 0, void 0, void 0, function () {
                      var n, o, i;
                      return c(this, function (c) {
                        switch (c.label) {
                          case 0:
                            return (n = y), [4, (0, f.getUrl)(e, I)];
                          case 1:
                            return (
                              (n.current = c.sent()),
                              (o = function (e) {
                                u ||
                                  (0, s.flushSync)(function () {
                                    return v(e);
                                  });
                              }),
                              (i = function (e) {
                                u ||
                                  (0, s.flushSync)(function () {
                                    return h(function (t) {
                                      var n;
                                      return r(
                                        r({}, t),
                                        y.current &&
                                          (((n = {})[y.current] = e), n)
                                      );
                                    });
                                  });
                              }),
                              a &&
                                (t = (0, l.createOrJoinSocket)(
                                  _,
                                  y.current,
                                  i,
                                  I,
                                  o,
                                  T,
                                  R,
                                  g
                                )),
                              [2]
                            );
                        }
                      });
                    });
                  };
                return (
                  (T.current = function () {
                    u ||
                      (w.current && (w.current = null), null == t || t(), d());
                  }),
                  d(),
                  function () {
                    (u = !0),
                      (a = !1),
                      w.current && (w.current = null),
                      null == t || t(),
                      v(null);
                  }
                );
              }
              (null === e || !1 === n) &&
                ((R.current = 0),
                h(function (e) {
                  var t;
                  return r(
                    r({}, e),
                    y.current &&
                      (((t = {})[y.current] = i.ReadyState.CLOSED), t)
                  );
                }));
            },
            [e, n, k, g]
          ),
          (0, a.useEffect)(
            function () {
              C === i.ReadyState.OPEN &&
                N.current.splice(0).forEach(function (e) {
                  g(e);
                });
            },
            [C]
          ),
          {
            sendMessage: g,
            sendJsonMessage: A,
            lastMessage: p,
            lastJsonMessage: O,
            readyState: C,
            getWebSocket: P,
          }
        );
      };
    },
    62826: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetGlobalState = t.assertIsWebSocket = void 0);
      var r = n(57056),
        o = n(86370);
      (t.assertIsWebSocket = function (e, t) {
        if (!t && e instanceof WebSocket == !1) throw Error("");
      }),
        (t.resetGlobalState = function (e) {
          (0, o.resetSubscribers)(e), (0, r.resetWebSockets)(e);
        });
    },
  },
]);
//# sourceMappingURL=5704.efed3cec4e299c77.js.map
