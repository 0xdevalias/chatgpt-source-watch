(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8431],
  {
    89311: function (e, t, r) {
      var n, o;
      void 0 !==
        (o =
          "function" ==
          typeof (n = function () {
            "use strict";
            var e = function () {},
              t = "undefined",
              r =
                typeof window !== t &&
                typeof window.navigator !== t &&
                /Trident\/|MSIE /.test(window.navigator.userAgent),
              n = ["trace", "debug", "info", "warn", "error"],
              o = {},
              i = null;
            function c(e, t) {
              var r = e[t];
              if ("function" == typeof r.bind) return r.bind(e);
              try {
                return Function.prototype.bind.call(r, e);
              } catch (t) {
                return function () {
                  return Function.prototype.apply.apply(r, [e, arguments]);
                };
              }
            }
            function u() {
              console.log &&
                (console.log.apply
                  ? console.log.apply(console, arguments)
                  : Function.prototype.apply.apply(console.log, [
                      console,
                      arguments,
                    ])),
                console.trace && console.trace();
            }
            function a() {
              for (var r = this.getLevel(), o = 0; o < n.length; o++) {
                var i = n[o];
                this[i] = o < r ? e : this.methodFactory(i, r, this.name);
              }
              if (
                ((this.log = this.debug),
                typeof console === t && r < this.levels.SILENT)
              )
                return "No console available for logging";
            }
            function l(e) {
              return function () {
                typeof console !== t &&
                  (a.call(this), this[e].apply(this, arguments));
              };
            }
            function s(n, o, i) {
              var a;
              return (
                "debug" === (a = n) && (a = "log"),
                (typeof console !== t &&
                  ("trace" === a && r
                    ? u
                    : void 0 !== console[a]
                      ? c(console, a)
                      : void 0 !== console.log
                        ? c(console, "log")
                        : e)) ||
                  l.apply(this, arguments)
              );
            }
            function f(e, r) {
              var c,
                u,
                l,
                f = this,
                d = "loglevel";
              function p() {
                var e;
                if (typeof window !== t && d) {
                  try {
                    e = window.localStorage[d];
                  } catch (e) {}
                  if (typeof e === t)
                    try {
                      var r = window.document.cookie,
                        n = encodeURIComponent(d),
                        o = r.indexOf(n + "=");
                      -1 !== o &&
                        (e = /^([^;]+)/.exec(r.slice(o + n.length + 1))[1]);
                    } catch (e) {}
                  return void 0 === f.levels[e] && (e = void 0), e;
                }
              }
              function h(e) {
                var t = e;
                if (
                  ("string" == typeof t &&
                    void 0 !== f.levels[t.toUpperCase()] &&
                    (t = f.levels[t.toUpperCase()]),
                  "number" == typeof t && t >= 0 && t <= f.levels.SILENT)
                )
                  return t;
                throw TypeError(
                  "log.setLevel() called with invalid level: " + e
                );
              }
              "string" == typeof e
                ? (d += ":" + e)
                : "symbol" == typeof e && (d = void 0),
                (f.name = e),
                (f.levels = {
                  TRACE: 0,
                  DEBUG: 1,
                  INFO: 2,
                  WARN: 3,
                  ERROR: 4,
                  SILENT: 5,
                }),
                (f.methodFactory = r || s),
                (f.getLevel = function () {
                  return null != l ? l : null != u ? u : c;
                }),
                (f.setLevel = function (e, r) {
                  return (
                    (l = h(e)),
                    !1 !== r &&
                      (function (e) {
                        var r = (n[e] || "silent").toUpperCase();
                        if (typeof window !== t && d) {
                          try {
                            window.localStorage[d] = r;
                            return;
                          } catch (e) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(d) + "=" + r + ";";
                          } catch (e) {}
                        }
                      })(l),
                    a.call(f)
                  );
                }),
                (f.setDefaultLevel = function (e) {
                  (u = h(e)), p() || f.setLevel(e, !1);
                }),
                (f.resetLevel = function () {
                  (l = null),
                    (function () {
                      if (typeof window !== t && d) {
                        try {
                          window.localStorage.removeItem(d);
                        } catch (e) {}
                        try {
                          window.document.cookie =
                            encodeURIComponent(d) +
                            "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                        } catch (e) {}
                      }
                    })(),
                    a.call(f);
                }),
                (f.enableAll = function (e) {
                  f.setLevel(f.levels.TRACE, e);
                }),
                (f.disableAll = function (e) {
                  f.setLevel(f.levels.SILENT, e);
                }),
                (f.rebuild = function () {
                  if ((i !== f && (c = h(i.getLevel())), a.call(f), i === f))
                    for (var e in o) o[e].rebuild();
                }),
                (c = h(i ? i.getLevel() : "WARN"));
              var v = p();
              null != v && (l = h(v)), a.call(f);
            }
            (i = new f()).getLogger = function (e) {
              if (("symbol" != typeof e && "string" != typeof e) || "" === e)
                throw TypeError(
                  "You must supply a name when creating a logger."
                );
              var t = o[e];
              return t || (t = o[e] = new f(e, i.methodFactory)), t;
            };
            var d = typeof window !== t ? window.log : void 0;
            return (
              (i.noConflict = function () {
                return (
                  typeof window !== t && window.log === i && (window.log = d), i
                );
              }),
              (i.getLoggers = function () {
                return o;
              }),
              (i.default = i),
              i
            );
          })
            ? n.call(t, r, t, e)
            : n) && (e.exports = o);
    },
    98431: function (e, t, r) {
      "use strict";
      r.d(t, {
        IC: function () {
          return eO;
        },
        Z5: function () {
          return eA;
        },
        z1: function () {
          return ex;
        },
        fZ: function () {
          return eS;
        },
      });
      var n,
        o,
        i,
        c = r(70079),
        u = function () {
          for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
            (e = arguments[r]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var i = t.length;
                    for (r = 0; r < i; r++)
                      t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                  } else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        a = r(67431),
        l = r(89311),
        s = r(38104);
      function f(e) {
        return "function" == typeof e;
      }
      var d =
        ((((n = function (e) {
          Error.call(e), (e.stack = Error().stack);
        }),
        (o = function (e) {
          n(this),
            (this.message = e
              ? e.length +
                " errors occurred during unsubscription:\n" +
                e
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e);
        })).prototype = Object.create(Error.prototype)),
        (o.prototype.constructor = o),
        o);
      function p(e, t) {
        if (e) {
          var r = e.indexOf(t);
          0 <= r && e.splice(r, 1);
        }
      }
      var h = (function () {
        var e;
        function t(e) {
          (this.initialTeardown = e),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        return (
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e,
                t,
                r,
                n,
                o,
                i = this._parentage;
              if (i) {
                if (((this._parentage = null), Array.isArray(i)))
                  try {
                    for (
                      var c = (0, s.XA)(i), u = c.next();
                      !u.done;
                      u = c.next()
                    )
                      u.value.remove(this);
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      u && !u.done && (t = c.return) && t.call(c);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                else i.remove(this);
              }
              var a = this.initialTeardown;
              if (f(a))
                try {
                  a();
                } catch (e) {
                  o = e instanceof d ? e.errors : [e];
                }
              var l = this._finalizers;
              if (l) {
                this._finalizers = null;
                try {
                  for (
                    var p = (0, s.XA)(l), h = p.next();
                    !h.done;
                    h = p.next()
                  ) {
                    var v = h.value;
                    try {
                      b(v);
                    } catch (e) {
                      (o = null != o ? o : []),
                        e instanceof d
                          ? (o = (0, s.ev)(
                              (0, s.ev)([], (0, s.CR)(o)),
                              (0, s.CR)(e.errors)
                            ))
                          : o.push(e);
                    }
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    h && !h.done && (n = p.return) && n.call(p);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }
              if (o) throw new d(o);
            }
          }),
          (t.prototype.add = function (e) {
            var r;
            if (e && e !== this) {
              if (this.closed) b(e);
              else {
                if (e instanceof t) {
                  if (e.closed || e._hasParent(this)) return;
                  e._addParent(this);
                }
                (this._finalizers =
                  null !== (r = this._finalizers) && void 0 !== r
                    ? r
                    : []).push(e);
              }
            }
          }),
          (t.prototype._hasParent = function (e) {
            var t = this._parentage;
            return t === e || (Array.isArray(t) && t.includes(e));
          }),
          (t.prototype._addParent = function (e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t)
              ? (t.push(e), t)
              : t
                ? [t, e]
                : e;
          }),
          (t.prototype._removeParent = function (e) {
            var t = this._parentage;
            t === e ? (this._parentage = null) : Array.isArray(t) && p(t, e);
          }),
          (t.prototype.remove = function (e) {
            var r = this._finalizers;
            r && p(r, e), e instanceof t && e._removeParent(this);
          }),
          (t.EMPTY = (((e = new t()).closed = !0), e)),
          t
        );
      })();
      function v(e) {
        return (
          e instanceof h ||
          (e && "closed" in e && f(e.remove) && f(e.add) && f(e.unsubscribe))
        );
      }
      function b(e) {
        f(e) ? e() : e.unsubscribe();
      }
      h.EMPTY;
      var y = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        m = {
          setTimeout: function (e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var o = m.delegate;
            return (null == o ? void 0 : o.setTimeout)
              ? o.setTimeout.apply(o, (0, s.ev)([e, t], (0, s.CR)(r)))
              : setTimeout.apply(void 0, (0, s.ev)([e, t], (0, s.CR)(r)));
          },
          clearTimeout: function (e) {
            var t = m.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function g(e) {
        m.setTimeout(function () {
          var t = y.onUnhandledError;
          if (t) t(e);
          else throw e;
        });
      }
      function w() {}
      var T = S("C", void 0, void 0);
      function S(e, t, r) {
        return { kind: e, value: t, error: r };
      }
      var k = null,
        E = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (
              (r.isStopped = !1),
              t ? ((r.destination = t), v(t) && t.add(r)) : (r.destination = A),
              r
            );
          }
          return (
            (0, s.ZT)(t, e),
            (t.create = function (e, t, r) {
              return new Q(e, t, r);
            }),
            (t.prototype.next = function (e) {
              this.isStopped ? O(S("N", e, void 0), this) : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? O(S("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? O(T, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(h),
        C = Function.prototype.bind;
      function x(e, t) {
        return C.call(e, t);
      }
      var P = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  _(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  _(e);
                }
              else _(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  _(e);
                }
            }),
            e
          );
        })(),
        Q = (function (e) {
          function t(t, r, n) {
            var o,
              i,
              c = e.call(this) || this;
            return (
              f(t) || !t
                ? (o = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0,
                  })
                : c && y.useDeprecatedNextContext
                  ? (((i = Object.create(t)).unsubscribe = function () {
                      return c.unsubscribe();
                    }),
                    (o = {
                      next: t.next && x(t.next, i),
                      error: t.error && x(t.error, i),
                      complete: t.complete && x(t.complete, i),
                    }))
                  : (o = t),
              (c.destination = new P(o)),
              c
            );
          }
          return (0, s.ZT)(t, e), t;
        })(E);
      function _(e) {
        y.useDeprecatedSynchronousErrorHandling
          ? y.useDeprecatedSynchronousErrorHandling &&
            k &&
            ((k.errorThrown = !0), (k.error = e))
          : g(e);
      }
      function O(e, t) {
        var r = y.onStoppedNotification;
        r &&
          m.setTimeout(function () {
            return r(e, t);
          });
      }
      var A = {
          closed: !0,
          next: w,
          error: function (e) {
            throw e;
          },
          complete: w,
        },
        L =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function U(e) {
        return e;
      }
      var R = (function () {
        function e(e) {
          e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (t) {
            var r = new e();
            return (r.source = this), (r.operator = t), r;
          }),
          (e.prototype.subscribe = function (e, t, r) {
            var n,
              o = this,
              i =
                ((n = e) && n instanceof E) ||
                (n && f(n.next) && f(n.error) && f(n.complete) && v(n))
                  ? e
                  : new Q(e, t, r);
            return (
              (function (e) {
                if (y.useDeprecatedSynchronousErrorHandling) {
                  var t = !k;
                  if ((t && (k = { errorThrown: !1, error: null }), e(), t)) {
                    var r = k,
                      n = r.errorThrown,
                      o = r.error;
                    if (((k = null), n)) throw o;
                  }
                } else e();
              })(function () {
                var e = o.operator,
                  t = o.source;
                i.add(
                  e ? e.call(i, t) : t ? o._subscribe(i) : o._trySubscribe(i)
                );
              }),
              i
            );
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              e.error(t);
            }
          }),
          (e.prototype.forEach = function (e, t) {
            var r = this;
            return new (t = N(t))(function (t, n) {
              var o = new Q({
                next: function (t) {
                  try {
                    e(t);
                  } catch (e) {
                    n(e), o.unsubscribe();
                  }
                },
                error: n,
                complete: t,
              });
              r.subscribe(o);
            });
          }),
          (e.prototype._subscribe = function (e) {
            var t;
            return null === (t = this.source) || void 0 === t
              ? void 0
              : t.subscribe(e);
          }),
          (e.prototype[L] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return (
              0 === e.length
                ? U
                : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce(function (e, t) {
                        return t(e);
                      }, t);
                    }
            )(this);
          }),
          (e.prototype.toPromise = function (e) {
            var t = this;
            return new (e = N(e))(function (e, r) {
              var n;
              t.subscribe(
                function (e) {
                  return (n = e);
                },
                function (e) {
                  return r(e);
                },
                function () {
                  return e(n);
                }
              );
            });
          }),
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function N(e) {
        var t;
        return null !== (t = null != e ? e : y.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      function M(e) {
        return function (t) {
          if (f(null == t ? void 0 : t.lift))
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw TypeError("Unable to lift unknown Observable type");
        };
      }
      function I(e, t, r, n, o) {
        return new D(e, t, r, n, o);
      }
      var D = (function (e) {
        function t(t, r, n, o, i, c) {
          var u = e.call(this, t) || this;
          return (
            (u.onFinalize = i),
            (u.shouldUnsubscribe = c),
            (u._next = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (u._error = o
              ? function (e) {
                  try {
                    o(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (u._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            u
          );
        }
        return (
          (0, s.ZT)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var r = this.closed;
              e.prototype.unsubscribe.call(this),
                r ||
                  null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this);
            }
          }),
          t
        );
      })(E);
      function F(e, t) {
        return M(function (r, n) {
          var o = 0;
          r.subscribe(
            I(n, function (r) {
              n.next(e.call(t, r, o++));
            })
          );
        });
      }
      var j = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
      function $(e) {
        return f(null == e ? void 0 : e.then);
      }
      function z(e) {
        return (
          Symbol.asyncIterator &&
          f(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
      function J(e) {
        return TypeError(
          "You provided " +
            (null !== e && "object" == typeof e
              ? "an invalid object"
              : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
        );
      }
      var q =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      function Y(e) {
        return f(null == e ? void 0 : e[q]);
      }
      function Z(e) {
        return (0, s.FC)(this, arguments, function () {
          var t, r, n;
          return (0, s.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                (t = e.getReader()), (o.label = 1);
              case 1:
                o.trys.push([1, , 9, 10]), (o.label = 2);
              case 2:
                return [4, (0, s.qq)(t.read())];
              case 3:
                if (((n = (r = o.sent()).value), !r.done)) return [3, 5];
                return [4, (0, s.qq)(void 0)];
              case 4:
                return [2, o.sent()];
              case 5:
                return [4, (0, s.qq)(n)];
              case 6:
                return [4, o.sent()];
              case 7:
                return o.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function H(e) {
        return f(null == e ? void 0 : e.getReader);
      }
      function B(e) {
        if (e instanceof R) return e;
        if (null != e) {
          if (f(e[L]))
            return new R(function (t) {
              var r = e[L]();
              if (f(r.subscribe)) return r.subscribe(t);
              throw TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            });
          if (j(e))
            return new R(function (t) {
              for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
              t.complete();
            });
          if ($(e))
            return new R(function (t) {
              e.then(
                function (e) {
                  t.closed || (t.next(e), t.complete());
                },
                function (e) {
                  return t.error(e);
                }
              ).then(null, g);
            });
          if (z(e)) return W(e);
          if (Y(e))
            return new R(function (t) {
              var r, n;
              try {
                for (
                  var o = (0, s.XA)(e), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var c = i.value;
                  if ((t.next(c), t.closed)) return;
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              t.complete();
            });
          if (H(e)) return W(Z(e));
        }
        throw J(e);
      }
      function W(e) {
        return new R(function (t) {
          (function (e, t) {
            var r, n, o, i;
            return (0, s.mG)(this, void 0, void 0, function () {
              var c;
              return (0, s.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    u.trys.push([0, 5, 6, 11]),
                      (r = (0, s.KL)(e)),
                      (u.label = 1);
                  case 1:
                    return [4, r.next()];
                  case 2:
                    if ((n = u.sent()).done) return [3, 4];
                    if (((c = n.value), t.next(c), t.closed)) return [2];
                    u.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (o = { error: u.sent() }), [3, 11];
                  case 6:
                    if (
                      (u.trys.push([6, , 9, 10]),
                      !(n && !n.done && (i = r.return)))
                    )
                      return [3, 8];
                    return [4, i.call(r)];
                  case 7:
                    u.sent(), (u.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (o) throw o.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
      function X(e, t, r, n, o) {
        void 0 === n && (n = 0), void 0 === o && (o = !1);
        var i = t.schedule(function () {
          r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if ((e.add(i), !o)) return i;
      }
      function G(e) {
        var t;
        return (t = e[e.length - 1]) && f(t.schedule) ? e.pop() : void 0;
      }
      function K(e, t) {
        return (
          void 0 === t && (t = 0),
          M(function (r, n) {
            r.subscribe(
              I(
                n,
                function (r) {
                  return X(
                    n,
                    e,
                    function () {
                      return n.next(r);
                    },
                    t
                  );
                },
                function () {
                  return X(
                    n,
                    e,
                    function () {
                      return n.complete();
                    },
                    t
                  );
                },
                function (r) {
                  return X(
                    n,
                    e,
                    function () {
                      return n.error(r);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
      function V(e, t) {
        return (
          void 0 === t && (t = 0),
          M(function (r, n) {
            n.add(
              e.schedule(function () {
                return r.subscribe(n);
              }, t)
            );
          })
        );
      }
      function ee(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new R(function (r) {
          X(r, t, function () {
            var n = e[Symbol.asyncIterator]();
            X(
              r,
              t,
              function () {
                n.next().then(function (e) {
                  e.done ? r.complete() : r.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function et() {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        return (void 0 === (e = 1) && (e = 1 / 0),
        (function e(t, r, n) {
          return (void 0 === n && (n = 1 / 0), f(r))
            ? e(function (e, n) {
                return F(function (t, o) {
                  return r(e, t, n, o);
                })(B(t(e, n)));
              }, n)
            : ("number" == typeof r && (n = r),
              M(function (e, r) {
                var o, i, c, u, a, l, s, f, d, p, h, v;
                return (
                  (o = n),
                  (l = []),
                  (s = 0),
                  (f = 0),
                  (d = !1),
                  (p = function () {
                    !d || l.length || s || r.complete();
                  }),
                  (h = function (e) {
                    return s < o ? v(e) : l.push(e);
                  }),
                  (v = function (e) {
                    c && r.next(e), s++;
                    var n = !1;
                    B(t(e, f++)).subscribe(
                      I(
                        r,
                        function (e) {
                          null == i || i(e), c ? h(e) : r.next(e);
                        },
                        function () {
                          n = !0;
                        },
                        void 0,
                        function () {
                          if (n)
                            try {
                              for (s--; l.length && s < o; )
                                !(function () {
                                  var e = l.shift();
                                  u
                                    ? X(r, u, function () {
                                        return v(e);
                                      })
                                    : v(e);
                                })();
                              p();
                            } catch (e) {
                              r.error(e);
                            }
                        }
                      )
                    );
                  }),
                  e.subscribe(
                    I(r, h, function () {
                      (d = !0), p();
                    })
                  ),
                  function () {
                    null == a || a();
                  }
                );
              }));
        })(U, e))(
          (t = G(r))
            ? (function (e, t) {
                if (null != e) {
                  if (f(e[L])) return B(e).pipe(V(t), K(t));
                  if (j(e))
                    return new R(function (r) {
                      var n = 0;
                      return t.schedule(function () {
                        n === e.length
                          ? r.complete()
                          : (r.next(e[n++]), r.closed || this.schedule());
                      });
                    });
                  if ($(e)) return B(e).pipe(V(t), K(t));
                  if (z(e)) return ee(e, t);
                  if (Y(e))
                    return new R(function (r) {
                      var n;
                      return (
                        X(r, t, function () {
                          (n = e[q]()),
                            X(
                              r,
                              t,
                              function () {
                                var e, t, o;
                                try {
                                  (t = (e = n.next()).value), (o = e.done);
                                } catch (e) {
                                  r.error(e);
                                  return;
                                }
                                o ? r.complete() : r.next(t);
                              },
                              0,
                              !0
                            );
                        }),
                        function () {
                          return f(null == n ? void 0 : n.return) && n.return();
                        }
                      );
                    });
                  if (H(e)) return ee(Z(e), t);
                }
                throw J(e);
              })(r, t)
            : B(r)
        );
      }
      function er() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = G(e);
        return M(function (t, n) {
          (r ? et(e, t, r) : et(e, t)).subscribe(n);
        });
      }
      function en(e) {
        var t;
        return (
          void 0 !== e &&
          ((!!e &&
            e.hasOwnProperty("participant") &&
            e.hasOwnProperty("source") &&
            e.hasOwnProperty("track") &&
            void 0 !== (null == (t = e.publication) ? void 0 : t.track)) ||
            (!!e &&
              e.hasOwnProperty("participant") &&
              e.hasOwnProperty("source") &&
              e.hasOwnProperty("publication") &&
              void 0 !== e.publication))
        );
      }
      function eo(e) {
        return e instanceof a.Ix;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var ei = [
        a.TQ.ConnectionStateChanged,
        a.TQ.RoomMetadataChanged,
        a.TQ.ActiveSpeakersChanged,
        a.TQ.ConnectionQualityChanged,
        a.TQ.ParticipantConnected,
        a.TQ.ParticipantDisconnected,
        a.TQ.ParticipantPermissionsChanged,
        a.TQ.ParticipantMetadataChanged,
        a.TQ.TrackMuted,
        a.TQ.TrackUnmuted,
        a.TQ.TrackPublished,
        a.TQ.TrackUnpublished,
        a.TQ.TrackStreamStateChanged,
        a.TQ.TrackSubscriptionFailed,
        a.TQ.TrackSubscriptionPermissionChanged,
        a.TQ.TrackSubscriptionStatusChanged,
        a.TQ.LocalTrackPublished,
        a.TQ.LocalTrackUnpublished,
      ];
      a.dd.TrackPublished,
        a.dd.TrackUnpublished,
        a.dd.TrackMuted,
        a.dd.TrackUnmuted,
        a.dd.TrackStreamStateChanged,
        a.dd.TrackSubscribed,
        a.dd.TrackUnsubscribed,
        a.dd.TrackSubscriptionPermissionChanged,
        a.dd.TrackSubscriptionFailed,
        a.dd.LocalTrackPublished,
        a.dd.LocalTrackUnpublished,
        a.dd.ConnectionQualityChanged,
        a.dd.IsSpeakingChanged,
        a.dd.ParticipantMetadataChanged,
        a.dd.ParticipantPermissionsChanged,
        a.dd.TrackMuted,
        a.dd.TrackUnmuted,
        a.dd.TrackPublished,
        a.dd.TrackUnpublished,
        a.dd.TrackStreamStateChanged,
        a.dd.TrackSubscriptionFailed,
        a.dd.TrackSubscriptionPermissionChanged,
        a.dd.TrackSubscriptionStatusChanged,
        a.dd.LocalTrackPublished,
        a.dd.LocalTrackUnpublished;
      var ec = l.getLogger("lk-components-js");
      function eu(e) {
        return "object" == typeof e;
      }
      function ea(e) {
        return Array.isArray(e) && e.filter(eu).length > 0;
      }
      function el(e) {
        if (en(e)) return e.publication;
        {
          let { source: t, name: r, participant: n } = e;
          if (t && r)
            return n
              .getTrackPublications()
              .find((e) => e.source === t && e.trackName === r);
          if (r) return n.getTrackPublicationByName(r);
          if (t) return n.getTrackPublication(t);
          throw Error("At least one of source and name needs to be defined");
        }
      }
      function es(e, t, r = !0) {
        let n = [
            e.localParticipant,
            ...Array.from(e.remoteParticipants.values()),
          ],
          o = [];
        return (
          n.forEach((e) => {
            t.forEach((t) => {
              let n = Array.from(e.trackPublications.values())
                .filter((e) => e.source === t && (!r || e.track))
                .map((t) => ({
                  participant: e,
                  publication: t,
                  source: t.source,
                }));
              o.push(...n);
            });
          }),
          { trackReferences: o, participants: n }
        );
      }
      ec.setDefaultLevel("WARN"), new TextEncoder(), new TextDecoder();
      var { load: ef, save: ed } =
        ((i = "lk-user-choices"),
        {
          load: () =>
            (function (e) {
              if ("undefined" == typeof localStorage) {
                ec.error("Local storage is not available.");
                return;
              }
              try {
                let t = localStorage.getItem(e);
                if (!t) {
                  ec.warn(
                    `Item with key ${e} does not exist in local storage.`
                  );
                  return;
                }
                return JSON.parse(t);
              } catch (e) {
                ec.error(`Error getting item from local storage: ${e}`);
                return;
              }
            })(i),
          save: (e) =>
            (function (e, t) {
              if ("undefined" == typeof localStorage) {
                ec.error("Local storage is not available.");
                return;
              }
              try {
                localStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                ec.error(`Error setting item to local storage: ${e}`);
              }
            })(i, e),
        });
      r(44675);
      var ep = Object.defineProperty,
        eh = Object.getOwnPropertySymbols,
        ev = Object.prototype.hasOwnProperty,
        eb = Object.prototype.propertyIsEnumerable,
        ey = (e, t, r) =>
          t in e
            ? ep(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        em = (e, t) => {
          for (var r in t || (t = {})) ev.call(t, r) && ey(e, r, t[r]);
          if (eh) for (var r of eh(t)) eb.call(t, r) && ey(e, r, t[r]);
          return e;
        },
        eg = (e, t) => {
          var r = {};
          for (var n in e) ev.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && eh)
            for (var n of eh(e))
              0 > t.indexOf(n) && eb.call(e, n) && (r[n] = e[n]);
          return r;
        };
      c.createContext(void 0);
      var ew = c.createContext(void 0);
      c.createContext(void 0);
      var eT = c.createContext(void 0);
      function eS() {
        let e = c.useContext(eT);
        if (!e)
          throw Error(
            "tried to access room context outside of livekit room component"
          );
        return e;
      }
      function ek(e) {
        let t = c.useContext(eT),
          r = null != e ? e : t;
        if (!r)
          throw Error(
            "No room provided, make sure you are inside a Room context or pass the room explicitly"
          );
        return r;
      }
      var eE = c.createContext(void 0);
      function eC(...e) {
        let t = em({}, e[0]);
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let r of e)
                      if ("function" == typeof r)
                        try {
                          r(...t);
                        } catch (e) {
                          console.error(e);
                        }
                  };
                })(r, o))
              : ("className" === e || "UNSAFE_className" === e) &&
                  "string" == typeof r &&
                  "string" == typeof o
                ? (t[e] = u(r, o))
                : (t[e] = void 0 !== o ? o : r);
          }
        }
        return t;
      }
      function ex(e) {
        let t = ek(e);
        return (function (e, t) {
          let [r, n] = c.useState(t);
          return (
            c.useEffect(() => {
              if ("undefined" == typeof window || !e) return;
              let t = e.subscribe(n);
              return () => t.unsubscribe();
            }, [e]),
            r
          );
        })(
          c.useMemo(() => {
            var e;
            return ((e = a.TQ.ConnectionStateChanged),
            new R((r) => {
              let n = (...e) => {
                r.next(e);
              };
              return (
                t.on(e, n),
                () => {
                  t.off(e, n);
                }
              );
            })).pipe(
              F(([e]) => e),
              er(t.state)
            );
          }, [t]),
          t.state
        );
      }
      var eP = { connect: !0, audio: !1, video: !1 };
      function eQ(e) {
        return void 0 !== e;
      }
      function e_(e) {
        var { trackRef: t, onSubscriptionStatusChanged: r, volume: n } = e,
          o = eg(e, ["trackRef", "onSubscriptionStatusChanged", "volume"]);
        let i = (function (e) {
            let t = c.useContext(ew),
              r = null != e ? e : t;
            if (!r)
              throw Error(
                "No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly"
              );
            return r;
          })(t),
          u = c.useRef(null),
          {
            elementProps: l,
            isSubscribed: s,
            track: f,
            publication: d,
          } = (function (e, t = {}) {
            var r;
            let [n, o] = c.useState(el(e)),
              [i, u] = c.useState(null == n ? void 0 : n.isMuted),
              [l, s] = c.useState(null == n ? void 0 : n.isSubscribed),
              [f, d] = c.useState(null == n ? void 0 : n.track),
              [p, h] = c.useState("landscape"),
              v = c.useRef(),
              { className: b, trackObserver: y } = c.useMemo(
                () =>
                  (function (e) {
                    var t;
                    let r = el(e),
                      n = (function (e, ...t) {
                        return new R((r) => {
                          let n = () => {
                            r.next(e);
                          };
                          return (
                            t.forEach((t) => {
                              e.on(t, n);
                            }),
                            () => {
                              t.forEach((t) => {
                                e.off(t, n);
                              });
                            }
                          );
                        }).pipe(er(e));
                      })(
                        e.participant,
                        a.dd.TrackMuted,
                        a.dd.TrackUnmuted,
                        a.dd.ParticipantPermissionsChanged,
                        a.dd.TrackPublished,
                        a.dd.TrackUnpublished,
                        a.dd.LocalTrackPublished,
                        a.dd.LocalTrackUnpublished,
                        a.dd.MediaDevicesError,
                        a.dd.TrackSubscriptionStatusChanged
                      )
                        .pipe(
                          F((e) => {
                            let {
                                isMicrophoneEnabled: t,
                                isCameraEnabled: r,
                                isScreenShareEnabled: n,
                              } = e,
                              o = e.getTrackPublication(a.fQ.Source.Microphone);
                            return {
                              isCameraEnabled: r,
                              isMicrophoneEnabled: t,
                              isScreenShareEnabled: n,
                              cameraTrack: e.getTrackPublication(
                                a.fQ.Source.Camera
                              ),
                              microphoneTrack: o,
                              participant: e,
                            };
                          })
                        )
                        .pipe(
                          F(() => el(e)),
                          er(r)
                        );
                    return {
                      className:
                        ((t =
                          e.source === a.fQ.Source.Camera ||
                          e.source === a.fQ.Source.ScreenShare
                            ? "participant-media-video"
                            : "participant-media-audio"),
                        `lk-${t}`),
                      trackObserver: n,
                    };
                  })(e),
                [
                  null != (r = e.participant.sid) ? r : e.participant.identity,
                  e.source,
                  en(e) && e.publication.trackSid,
                ]
              );
            return (
              c.useEffect(() => {
                let e = y.subscribe((e) => {
                  ec.debug("update track", e),
                    o(e),
                    u(null == e ? void 0 : e.isMuted),
                    s(null == e ? void 0 : e.isSubscribed),
                    d(null == e ? void 0 : e.track);
                });
                return () => (null == e ? void 0 : e.unsubscribe());
              }, [y]),
              c.useEffect(() => {
                var r, n;
                return (
                  f &&
                    (v.current && f.detach(v.current),
                    (null == (r = t.element) ? void 0 : r.current) &&
                      !(
                        eo(e.participant) &&
                        (null == f ? void 0 : f.kind) === "audio"
                      ) &&
                      f.attach(t.element.current)),
                  (v.current = null == (n = t.element) ? void 0 : n.current),
                  () => {
                    v.current && (null == f || f.detach(v.current));
                  }
                );
              }, [f, t.element]),
              c.useEffect(() => {
                var e, t;
                "number" ==
                  typeof (null == (e = null == n ? void 0 : n.dimensions)
                    ? void 0
                    : e.width) &&
                  "number" ==
                    typeof (null == (t = null == n ? void 0 : n.dimensions)
                      ? void 0
                      : t.height) &&
                  h(
                    n.dimensions.width > n.dimensions.height
                      ? "landscape"
                      : "portrait"
                  );
              }, [n]),
              {
                publication: n,
                isMuted: i,
                isSubscribed: l,
                track: f,
                elementProps: (function (...e) {
                  return eC(...e.filter(eQ));
                })(
                  t.props,
                  em(
                    {
                      className: b,
                      "data-lk-local-participant": e.participant.isLocal,
                      "data-lk-source": null == n ? void 0 : n.source,
                    },
                    (null == n ? void 0 : n.kind) === "video" && {
                      "data-lk-orientation": p,
                    }
                  )
                ),
              }
            );
          })(i, { element: u, props: o });
        return (
          c.useEffect(() => {
            null == r || r(!!s);
          }, [s, r]),
          c.useEffect(() => {
            void 0 !== f &&
              void 0 !== n &&
              (f instanceof a.rl
                ? f.setVolume(n)
                : ec.warn("Volume can only be set on remote audio tracks."));
          }, [n, f]),
          c.useEffect(() => {
            void 0 !== d &&
              void 0 !== o.muted &&
              (d instanceof a.E8
                ? d.setEnabled(!o.muted)
                : ec.warn(
                    "Can only call setEnabled on remote track publications."
                  ));
          }, [o.muted, d, f]),
          c.createElement("audio", em({ ref: u }, l))
        );
      }
      function eO(e) {
        let { room: t, htmlProps: r } = (function (e) {
          let t = em(em({}, eP), e),
            {
              token: r,
              serverUrl: n,
              options: o,
              room: i,
              connectOptions: u,
              connect: l,
              audio: s,
              video: f,
              screen: d,
              onConnected: p,
              onDisconnected: h,
              onError: v,
              onMediaDeviceFailure: b,
              onEncryptionError: y,
              simulateParticipants: m,
            } = t,
            g = eg(t, [
              "token",
              "serverUrl",
              "options",
              "room",
              "connectOptions",
              "connect",
              "audio",
              "video",
              "screen",
              "onConnected",
              "onDisconnected",
              "onError",
              "onMediaDeviceFailure",
              "onEncryptionError",
              "simulateParticipants",
            ]);
          o &&
            i &&
            ec.warn(
              "when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead."
            );
          let [w, T] = c.useState();
          c.useEffect(() => {
            T(null != i ? i : new a.du(o));
          }, [i]);
          let S = c.useMemo(() => {
            let { className: e } = { className: "lk-room-container" };
            return eC(g, { className: e });
          }, [g]);
          return (
            c.useEffect(() => {
              if (!w) return;
              let e = () => {
                  let e = w.localParticipant;
                  ec.debug("trying to publish local tracks"),
                    Promise.all([
                      e.setMicrophoneEnabled(
                        !!s,
                        "boolean" != typeof s ? s : void 0
                      ),
                      e.setCameraEnabled(
                        !!f,
                        "boolean" != typeof f ? f : void 0
                      ),
                      e.setScreenShareEnabled(
                        !!d,
                        "boolean" != typeof d ? d : void 0
                      ),
                    ]).catch((e) => {
                      ec.warn(e), null == v || v(e);
                    });
                },
                t = (e) => {
                  let t = a.CB.getFailure(e);
                  null == b || b(t);
                },
                r = (e) => {
                  null == y || y(e);
                };
              return (
                w
                  .on(a.TQ.SignalConnected, e)
                  .on(a.TQ.MediaDevicesError, t)
                  .on(a.TQ.EncryptionError, r),
                () => {
                  w.off(a.TQ.SignalConnected, e)
                    .off(a.TQ.MediaDevicesError, t)
                    .off(a.TQ.EncryptionError, r);
                }
              );
            }, [w, s, f, d, v, y, b]),
            c.useEffect(() => {
              if (w) {
                if (m) {
                  w.simulateParticipants({
                    participants: { count: m },
                    publish: { audio: !0, useRealTracks: !0 },
                  });
                  return;
                }
                if (!r) {
                  ec.debug("no token yet");
                  return;
                }
                if (!n) {
                  ec.warn("no livekit url provided"),
                    null == v || v(Error("no livekit url provided"));
                  return;
                }
                l
                  ? (ec.debug("connecting"),
                    w.connect(n, r, u).catch((e) => {
                      ec.warn(e), null == v || v(e);
                    }))
                  : (ec.debug("disconnecting because connect is false"),
                    w.disconnect());
              }
            }, [l, r, JSON.stringify(u), w, v, n, m]),
            c.useEffect(() => {
              if (!w) return;
              let e = (e) => {
                switch (e) {
                  case a.em.Disconnected:
                    h && h();
                    break;
                  case a.em.Connected:
                    p && p();
                }
              };
              return (
                w.on(a.TQ.ConnectionStateChanged, e),
                () => {
                  w.off(a.TQ.ConnectionStateChanged, e);
                }
              );
            }, [r, p, h, w]),
            c.useEffect(() => {
              if (w)
                return () => {
                  ec.info("disconnecting on onmount"), w.disconnect();
                };
            }, [w]),
            { room: w, htmlProps: S }
          );
        })(e);
        return c.createElement(
          "div",
          em({}, r),
          t &&
            c.createElement(
              eT.Provider,
              { value: t },
              c.createElement(
                eE.Provider,
                { value: e.featureFlags },
                e.children
              )
            )
        );
      }
      function eA({ volume: e, muted: t }) {
        let r = (function (
          e = [
            a.fQ.Source.Camera,
            a.fQ.Source.Microphone,
            a.fQ.Source.ScreenShare,
            a.fQ.Source.ScreenShareAudio,
            a.fQ.Source.Unknown,
          ],
          t = {}
        ) {
          let r = ek(t.room),
            [n, o] = c.useState([]),
            [i, u] = c.useState([]),
            l = c.useMemo(
              () => e.map((e) => (eu(e) ? e.source : e)),
              [JSON.stringify(e)]
            );
          return (
            c.useEffect(() => {
              let e = (function (e, t, r) {
                var n, o;
                let i = null != (n = r.additionalRoomEvents) ? n : ei,
                  c = null == (o = r.onlySubscribed) || o;
                return (function (e, ...t) {
                  return new R((r) => {
                    let n = () => {
                      r.next(e);
                    };
                    return (
                      t.forEach((t) => {
                        e.on(t, n);
                      }),
                      () => {
                        t.forEach((t) => {
                          e.off(t, n);
                        });
                      }
                    );
                  }).pipe(er(e));
                })(
                  e,
                  ...Array.from(
                    new Set([
                      a.TQ.ParticipantConnected,
                      a.TQ.ParticipantDisconnected,
                      a.TQ.ConnectionStateChanged,
                      a.TQ.LocalTrackPublished,
                      a.TQ.LocalTrackUnpublished,
                      a.TQ.TrackPublished,
                      a.TQ.TrackUnpublished,
                      a.TQ.TrackSubscriptionStatusChanged,
                      ...i,
                    ]).values()
                  )
                ).pipe(
                  F((e) => {
                    let r = es(e, t, c);
                    return (
                      ec.debug(
                        `TrackReference[] was updated. (length ${r.trackReferences.length})`,
                        r
                      ),
                      r
                    );
                  }),
                  er(es(e, t, c))
                );
              })(r, l, {
                additionalRoomEvents: t.updateOnlyOn,
                onlySubscribed: t.onlySubscribed,
              }).subscribe(({ trackReferences: e, participants: t }) => {
                ec.debug("setting track bundles", e, t), o(e), u(t);
              });
              return () => e.unsubscribe();
            }, [r, JSON.stringify(t.updateOnlyOn), JSON.stringify(e)]),
            c.useMemo(() => {
              if (!ea(e)) return n;
              {
                let t = (function (e, t) {
                    let r = new Map();
                    if (ea(e)) {
                      let n = e
                        .filter((e) => e.withPlaceholder)
                        .map((e) => e.source);
                      t.forEach((e) => {
                        let t = e
                            .getTrackPublications()
                            .map((e) => {
                              var t;
                              return null == (t = e.track) ? void 0 : t.source;
                            })
                            .filter((e) => void 0 !== e),
                          o = Array.from(
                            (function (e, t) {
                              let r = new Set(e);
                              for (let e of t) r.delete(e);
                              return r;
                            })(new Set(n), new Set(t))
                          );
                        o.length > 0 && r.set(e.identity, o);
                      });
                    }
                    return r;
                  })(e, i),
                  r = Array.from(n);
                return (
                  i.forEach((e) => {
                    var o;
                    t.has(e.identity) &&
                      (null != (o = t.get(e.identity)) ? o : []).forEach(
                        (t) => {
                          n.find(
                            ({ participant: r, publication: n }) =>
                              e.identity === r.identity && n.source === t
                          ) ||
                            (ec.debug(
                              `Add ${t} placeholder for participant ${e.identity}.`
                            ),
                            r.push({ participant: e, source: t }));
                        }
                      );
                  }),
                  r
                );
              }
            }, [n, i, e])
          );
        })(
          [
            a.fQ.Source.Microphone,
            a.fQ.Source.ScreenShareAudio,
            a.fQ.Source.Unknown,
          ],
          { updateOnlyOn: [], onlySubscribed: !1 }
        ).filter(
          (e) => !eo(e.participant) && e.publication.kind === a.fQ.Kind.Audio
        );
        return (
          c.useEffect(() => {
            for (let e of r) e.publication.setSubscribed(!0);
          }, [r]),
          c.createElement(
            "div",
            { style: { display: "none" } },
            r.map((r) =>
              c.createElement(e_, {
                key: (function (e) {
                  if ("string" == typeof e || "number" == typeof e)
                    return `${e}`;
                  if (
                    e &&
                    e.hasOwnProperty("participant") &&
                    e.hasOwnProperty("source") &&
                    void 0 === e.publication
                  )
                    return `${e.participant.identity}_${e.source}_placeholder`;
                  if (en(e))
                    return `${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;
                  throw Error(
                    `Can't generate a id for the given track reference: ${e}`
                  );
                })(r),
                trackRef: r,
                volume: e,
                muted: t,
              })
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=8431.b2de864202687584.js.map