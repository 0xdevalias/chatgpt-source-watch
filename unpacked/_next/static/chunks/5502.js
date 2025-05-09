(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5502],
  {
    97426: function () {},
    90171: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var r,
          n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          i = function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          },
          o = (function () {
            function t(t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function (e, r, n) {
              return r && t(e.prototype, r), n && t(e, n), e;
            };
          })(),
          a = function t(e, r, n) {
            null === e && (e = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(e, r);
            if (void 0 === i) {
              var o = Object.getPrototypeOf(e);
              if (null === o) return;
              return t(o, r, n);
            }
            if ("value" in i) return i.value;
            var a = i.get;
            if (void 0 !== a) return a.call(n);
          },
          s = function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          },
          f = function (t, e) {
            if (!t)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e && ("object" == typeof e || "function" == typeof e)
              ? e
              : t;
          },
          l = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t))
              return (function (t, e) {
                var r = [],
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = t[Symbol.iterator]();
                    !(n = (a = s.next()).done) &&
                    (r.push(a.value), !e || r.length !== e);
                    n = !0
                  );
                } catch (t) {
                  (i = !0), (o = t);
                } finally {
                  try {
                    !n && s.return && s.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return r;
              })(t, e);
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          },
          u = function (t) {
            if (!Array.isArray(t)) return Array.from(t);
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r;
          },
          h = (function () {
            function t(e) {
              i(this, t), (this.selfOptions = e || {}), (this.pipes = {});
            }
            return (
              o(t, [
                {
                  key: "options",
                  value: function (t) {
                    return t && (this.selfOptions = t), this.selfOptions;
                  },
                },
                {
                  key: "pipe",
                  value: function (t, e) {
                    var r = e;
                    if ("string" == typeof t) {
                      if (void 0 === r) return this.pipes[t];
                      this.pipes[t] = r;
                    }
                    if (t && t.name) {
                      if ((r = t).processor === this) return r;
                      this.pipes[r.name] = r;
                    }
                    return (r.processor = this), r;
                  },
                },
                {
                  key: "process",
                  value: function (t, e) {
                    var r = t;
                    r.options = this.options();
                    for (
                      var n = e || t.pipe || "default", i = void 0, o = void 0;
                      n;
                    )
                      void 0 !== r.nextAfterChildren &&
                        ((r.next = r.nextAfterChildren),
                        (r.nextAfterChildren = null)),
                        "string" == typeof n && (n = this.pipe(n)),
                        n.process(r),
                        (o = r),
                        (i = n),
                        (n = null),
                        r &&
                          r.next &&
                          ((r = r.next), (n = o.nextPipe || r.pipe || i));
                    return r.hasResult ? r.result : void 0;
                  },
                },
              ]),
              t
            );
          })(),
          c = (function () {
            function t(e) {
              i(this, t), (this.name = e), (this.filters = []);
            }
            return (
              o(t, [
                {
                  key: "process",
                  value: function (t) {
                    if (!this.processor)
                      throw Error(
                        "add this pipe to a processor before using it"
                      );
                    for (
                      var e = this.debug, r = this.filters.length, i = 0;
                      i < r;
                      i++
                    ) {
                      var o = this.filters[i];
                      if (
                        (e && this.log("filter: " + o.filterName),
                        o(t),
                        (void 0 === t ? "undefined" : n(t)) === "object" &&
                          t.exiting)
                      ) {
                        t.exiting = !1;
                        break;
                      }
                    }
                    !t.next && this.resultCheck && this.resultCheck(t);
                  },
                },
                {
                  key: "log",
                  value: function (t) {
                    console.log("[jsondiffpatch] " + this.name + " pipe, " + t);
                  },
                },
                {
                  key: "append",
                  value: function () {
                    var t;
                    return (t = this.filters).push.apply(t, arguments), this;
                  },
                },
                {
                  key: "prepend",
                  value: function () {
                    var t;
                    return (t = this.filters).unshift.apply(t, arguments), this;
                  },
                },
                {
                  key: "indexOf",
                  value: function (t) {
                    if (!t) throw Error("a filter name is required");
                    for (var e = 0; e < this.filters.length; e++)
                      if (this.filters[e].filterName === t) return e;
                    throw Error("filter not found: " + t);
                  },
                },
                {
                  key: "list",
                  value: function () {
                    return this.filters.map(function (t) {
                      return t.filterName;
                    });
                  },
                },
                {
                  key: "after",
                  value: function (t) {
                    var e = this.indexOf(t),
                      r = Array.prototype.slice.call(arguments, 1);
                    if (!r.length) throw Error("a filter is required");
                    return (
                      r.unshift(e + 1, 0),
                      Array.prototype.splice.apply(this.filters, r),
                      this
                    );
                  },
                },
                {
                  key: "before",
                  value: function (t) {
                    var e = this.indexOf(t),
                      r = Array.prototype.slice.call(arguments, 1);
                    if (!r.length) throw Error("a filter is required");
                    return (
                      r.unshift(e, 0),
                      Array.prototype.splice.apply(this.filters, r),
                      this
                    );
                  },
                },
                {
                  key: "replace",
                  value: function (t) {
                    var e = this.indexOf(t),
                      r = Array.prototype.slice.call(arguments, 1);
                    if (!r.length) throw Error("a filter is required");
                    return (
                      r.unshift(e, 1),
                      Array.prototype.splice.apply(this.filters, r),
                      this
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (t) {
                    var e = this.indexOf(t);
                    return this.filters.splice(e, 1), this;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return (this.filters.length = 0), this;
                  },
                },
                {
                  key: "shouldHaveResult",
                  value: function (t) {
                    if (!1 === t) {
                      this.resultCheck = null;
                      return;
                    }
                    if (!this.resultCheck) {
                      var e = this;
                      return (
                        (this.resultCheck = function (t) {
                          if (!t.hasResult) {
                            console.log(t);
                            var r = Error(e.name + " failed");
                            throw ((r.noResult = !0), r);
                          }
                        }),
                        this
                      );
                    }
                  },
                },
              ]),
              t
            );
          })(),
          d = (function () {
            function t() {
              i(this, t);
            }
            return (
              o(t, [
                {
                  key: "setResult",
                  value: function (t) {
                    return (this.result = t), (this.hasResult = !0), this;
                  },
                },
                {
                  key: "exit",
                  value: function () {
                    return (this.exiting = !0), this;
                  },
                },
                {
                  key: "switchTo",
                  value: function (t, e) {
                    return (
                      "string" == typeof t || t instanceof c
                        ? (this.nextPipe = t)
                        : ((this.next = t), e && (this.nextPipe = e)),
                      this
                    );
                  },
                },
                {
                  key: "push",
                  value: function (t, e) {
                    return (
                      (t.parent = this),
                      void 0 !== e && (t.childName = e),
                      (t.root = this.root || this),
                      (t.options = t.options || this.options),
                      this.children
                        ? ((this.children[this.children.length - 1].next = t),
                          this.children.push(t))
                        : ((this.children = [t]),
                          (this.nextAfterChildren = this.next || null),
                          (this.next = t)),
                      (t.next = this),
                      this
                    );
                  },
                },
              ]),
              t
            );
          })(),
          p =
            "function" == typeof Array.isArray
              ? Array.isArray
              : function (t) {
                  return t instanceof Array;
                };
        function v(t) {
          if ((void 0 === t ? "undefined" : n(t)) !== "object") return t;
          if (null === t) return null;
          if (p(t)) return t.map(v);
          if (t instanceof Date) return new Date(t.getTime());
          if (t instanceof RegExp) {
            var e;
            return new RegExp(
              (e = /^\/(.*)\/([gimyu]*)$/.exec(t.toString()))[1],
              e[2]
            );
          }
          var r = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = v(t[i]));
          return r;
        }
        var g = (function (t) {
            function e(t, r) {
              i(this, e);
              var n = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (n.left = t), (n.right = r), (n.pipe = "diff"), n;
            }
            return (
              s(e, t),
              o(e, [
                {
                  key: "setResult",
                  value: function (t) {
                    if (
                      this.options.cloneDiffValues &&
                      (void 0 === t ? "undefined" : n(t)) === "object"
                    ) {
                      var e =
                        "function" == typeof this.options.cloneDiffValues
                          ? this.options.cloneDiffValues
                          : v;
                      "object" === n(t[0]) && (t[0] = e(t[0])),
                        "object" === n(t[1]) && (t[1] = e(t[1]));
                    }
                    return d.prototype.setResult.apply(this, arguments);
                  },
                },
              ]),
              e
            );
          })(d),
          y = (function (t) {
            function e(t, r) {
              i(this, e);
              var n = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (n.left = t), (n.delta = r), (n.pipe = "patch"), n;
            }
            return s(e, t), e;
          })(d),
          m = (function (t) {
            function e(t) {
              i(this, e);
              var r = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (r.delta = t), (r.pipe = "reverse"), r;
            }
            return s(e, t), e;
          })(d),
          _ =
            "function" == typeof Array.isArray
              ? Array.isArray
              : function (t) {
                  return t instanceof Array;
                },
          b = function (t) {
            if (t.left === t.right) {
              t.setResult(void 0).exit();
              return;
            }
            if (void 0 === t.left) {
              if ("function" == typeof t.right)
                throw Error("functions are not supported");
              t.setResult([t.right]).exit();
              return;
            }
            if (void 0 === t.right) {
              t.setResult([t.left, 0, 0]).exit();
              return;
            }
            if ("function" == typeof t.left || "function" == typeof t.right)
              throw Error("functions are not supported");
            if (
              ((t.leftType = null === t.left ? "null" : n(t.left)),
              (t.rightType = null === t.right ? "null" : n(t.right)),
              t.leftType !== t.rightType ||
                "boolean" === t.leftType ||
                "number" === t.leftType ||
                ("object" === t.leftType && (t.leftIsArray = _(t.left)),
                "object" === t.rightType && (t.rightIsArray = _(t.right)),
                t.leftIsArray !== t.rightIsArray))
            ) {
              t.setResult([t.left, t.right]).exit();
              return;
            }
            t.left instanceof RegExp &&
              (t.right instanceof RegExp
                ? t.setResult([t.left.toString(), t.right.toString()]).exit()
                : t.setResult([t.left, t.right]).exit());
          };
        b.filterName = "trivial";
        var x = function (t) {
          if (void 0 === t.delta) {
            t.setResult(t.left).exit();
            return;
          }
          if (((t.nested = !_(t.delta)), !t.nested)) {
            if (1 === t.delta.length) {
              t.setResult(t.delta[0]).exit();
              return;
            }
            if (2 === t.delta.length) {
              if (t.left instanceof RegExp) {
                var e = /^\/(.*)\/([gimyu]+)$/.exec(t.delta[1]);
                if (e) {
                  t.setResult(new RegExp(e[1], e[2])).exit();
                  return;
                }
              }
              t.setResult(t.delta[1]).exit();
              return;
            }
            3 === t.delta.length &&
              0 === t.delta[2] &&
              t.setResult(void 0).exit();
          }
        };
        x.filterName = "trivial";
        var w = function (t) {
          if (void 0 === t.delta) {
            t.setResult(t.delta).exit();
            return;
          }
          if (((t.nested = !_(t.delta)), !t.nested)) {
            if (1 === t.delta.length) {
              t.setResult([t.delta[0], 0, 0]).exit();
              return;
            }
            if (2 === t.delta.length) {
              t.setResult([t.delta[1], t.delta[0]]).exit();
              return;
            }
            3 === t.delta.length &&
              0 === t.delta[2] &&
              t.setResult([t.delta[0]]).exit();
          }
        };
        function k(t) {
          if (t && t.children) {
            for (
              var e = t.children.length, r = void 0, n = t.result, i = 0;
              i < e;
              i++
            )
              void 0 !== (r = t.children[i]).result &&
                ((n = n || {})[r.childName] = r.result);
            n && t.leftIsArray && (n._t = "a"), t.setResult(n).exit();
          }
        }
        function j(t) {
          if (!t.leftIsArray && "object" === t.leftType) {
            var e = void 0,
              r = void 0,
              n = t.options.propertyFilter;
            for (e in t.left)
              Object.prototype.hasOwnProperty.call(t.left, e) &&
                (!n || n(e, t)) &&
                ((r = new g(t.left[e], t.right[e])), t.push(r, e));
            for (e in t.right)
              Object.prototype.hasOwnProperty.call(t.right, e) &&
                (!n || n(e, t)) &&
                void 0 === t.left[e] &&
                ((r = new g(void 0, t.right[e])), t.push(r, e));
            if (!t.children || 0 === t.children.length) {
              t.setResult(void 0).exit();
              return;
            }
            t.exit();
          }
        }
        (w.filterName = "trivial"),
          (k.filterName = "collectChildren"),
          (j.filterName = "objects");
        var O = function (t) {
          if (t.nested && !t.delta._t) {
            var e = void 0,
              r = void 0;
            for (e in t.delta) (r = new y(t.left[e], t.delta[e])), t.push(r, e);
            t.exit();
          }
        };
        O.filterName = "objects";
        var A = function (t) {
          if (t && t.children && !t.delta._t) {
            for (var e = t.children.length, r = void 0, n = 0; n < e; n++)
              (r = t.children[n]),
                Object.prototype.hasOwnProperty.call(t.left, r.childName) &&
                void 0 === r.result
                  ? delete t.left[r.childName]
                  : t.left[r.childName] !== r.result &&
                    (t.left[r.childName] = r.result);
            t.setResult(t.left).exit();
          }
        };
        A.filterName = "collectChildren";
        var E = function (t) {
          if (t.nested && !t.delta._t) {
            var e = void 0,
              r = void 0;
            for (e in t.delta) (r = new m(t.delta[e])), t.push(r, e);
            t.exit();
          }
        };
        function M(t) {
          if (t && t.children && !t.delta._t) {
            for (
              var e = t.children.length, r = void 0, n = {}, i = 0;
              i < e;
              i++
            )
              n[(r = t.children[i]).childName] !== r.result &&
                (n[r.childName] = r.result);
            t.setResult(n).exit();
          }
        }
        (E.filterName = "objects"), (M.filterName = "collectChildren");
        var C = function (t, e, r, n) {
            return t[r] === e[n];
          },
          P = function (t, e, r, n) {
            var i = t.length,
              o = e.length,
              a = void 0,
              s = void 0,
              f = [i + 1];
            for (a = 0; a < i + 1; a++)
              for (s = 0, f[a] = [o + 1]; s < o + 1; s++) f[a][s] = 0;
            for (a = 1, f.match = r; a < i + 1; a++)
              for (s = 1; s < o + 1; s++)
                r(t, e, a - 1, s - 1, n)
                  ? (f[a][s] = f[a - 1][s - 1] + 1)
                  : (f[a][s] = Math.max(f[a - 1][s], f[a][s - 1]));
            return f;
          },
          R = function (t, e, r, n) {
            for (
              var i = e.length,
                o = r.length,
                a = { sequence: [], indices1: [], indices2: [] };
              0 !== i && 0 !== o;
            )
              t.match(e, r, i - 1, o - 1, n)
                ? (a.sequence.unshift(e[i - 1]),
                  a.indices1.unshift(i - 1),
                  a.indices2.unshift(o - 1),
                  --i,
                  --o)
                : t[i][o - 1] > t[i - 1][o]
                  ? --o
                  : --i;
            return a;
          },
          D = {
            get: function (t, e, r, n) {
              var i = n || {},
                o = R(P(t, e, r || C, i), t, e, i);
              return (
                "string" == typeof t &&
                  "string" == typeof e &&
                  (o.sequence = o.sequence.join("")),
                o
              );
            },
          },
          T =
            "function" == typeof Array.isArray
              ? Array.isArray
              : function (t) {
                  return t instanceof Array;
                },
          N =
            "function" == typeof Array.prototype.indexOf
              ? function (t, e) {
                  return t.indexOf(e);
                }
              : function (t, e) {
                  for (var r = t.length, n = 0; n < r; n++)
                    if (t[n] === e) return n;
                  return -1;
                };
        function S(t, e, r, i, o) {
          var a = t[r],
            s = e[i];
          if (a === s) return !0;
          if (
            (void 0 === a ? "undefined" : n(a)) !== "object" ||
            (void 0 === s ? "undefined" : n(s)) !== "object"
          )
            return !1;
          var f = o.objectHash;
          if (!f) return o.matchByPosition && r === i;
          var l = void 0,
            u = void 0;
          return (
            "number" == typeof r
              ? ((o.hashCache1 = o.hashCache1 || []),
                void 0 === (l = o.hashCache1[r]) &&
                  (o.hashCache1[r] = l = f(a, r)))
              : (l = f(a)),
            void 0 !== l &&
              ("number" == typeof i
                ? ((o.hashCache2 = o.hashCache2 || []),
                  void 0 === (u = o.hashCache2[i]) &&
                    (o.hashCache2[i] = u = f(s, i)))
                : (u = f(s)),
              void 0 !== u && l === u)
          );
        }
        var L = function (t) {
          if (t.leftIsArray) {
            var e = {
                objectHash: t.options && t.options.objectHash,
                matchByPosition: t.options && t.options.matchByPosition,
              },
              r = 0,
              n = 0,
              i = void 0,
              o = void 0,
              a = void 0,
              s = t.left,
              f = t.right,
              l = s.length,
              u = f.length,
              h = void 0;
            for (
              l > 0 &&
              u > 0 &&
              !e.objectHash &&
              "boolean" != typeof e.matchByPosition &&
              (e.matchByPosition = !(function (t, e, r, n) {
                for (var i = 0; i < r; i++)
                  for (var o = t[i], a = 0; a < n; a++) {
                    var s = e[a];
                    if (i !== a && o === s) return !0;
                  }
              })(s, f, l, u));
              r < l && r < u && S(s, f, r, r, e);
            )
              (i = r), (h = new g(t.left[i], t.right[i])), t.push(h, i), r++;
            for (; n + r < l && n + r < u && S(s, f, l - 1 - n, u - 1 - n, e); )
              (o = l - 1 - n),
                (a = u - 1 - n),
                (h = new g(t.left[o], t.right[a])),
                t.push(h, a),
                n++;
            var c = void 0;
            if (r + n === l) {
              if (l === u) {
                t.setResult(void 0).exit();
                return;
              }
              for (c = c || { _t: "a" }, i = r; i < u - n; i++) c[i] = [f[i]];
              t.setResult(c).exit();
              return;
            }
            if (r + n === u) {
              for (c = c || { _t: "a" }, i = r; i < l - n; i++)
                c["_" + i] = [s[i], 0, 0];
              t.setResult(c).exit();
              return;
            }
            delete e.hashCache1, delete e.hashCache2;
            var d = s.slice(r, l - n),
              p = f.slice(r, u - n),
              v = D.get(d, p, S, e),
              y = [];
            for (c = c || { _t: "a" }, i = r; i < l - n; i++)
              0 > N(v.indices1, i - r) &&
                ((c["_" + i] = [s[i], 0, 0]), y.push(i));
            var m = !0;
            t.options &&
              t.options.arrays &&
              !1 === t.options.arrays.detectMove &&
              (m = !1);
            var _ = !1;
            t.options &&
              t.options.arrays &&
              t.options.arrays.includeValueOnMove &&
              (_ = !0);
            var b = y.length;
            for (i = r; i < u - n; i++) {
              var x = N(v.indices2, i - r);
              if (x < 0) {
                var w = !1;
                if (m && b > 0) {
                  for (var k = 0; k < b; k++)
                    if (S(d, p, (o = y[k]) - r, i - r, e)) {
                      c["_" + o].splice(1, 2, i, 3),
                        _ || (c["_" + o][0] = ""),
                        (a = i),
                        (h = new g(t.left[o], t.right[a])),
                        t.push(h, a),
                        y.splice(k, 1),
                        (w = !0);
                      break;
                    }
                }
                w || (c[i] = [f[i]]);
              } else
                (o = v.indices1[x] + r),
                  (a = v.indices2[x] + r),
                  (h = new g(t.left[o], t.right[a])),
                  t.push(h, a);
            }
            t.setResult(c).exit();
          }
        };
        L.filterName = "arrays";
        var I = {
            numerically: function (t, e) {
              return t - e;
            },
            numericallyBy: function (t) {
              return function (e, r) {
                return e[t] - r[t];
              };
            },
          },
          F = function (t) {
            if (t.nested && "a" === t.delta._t) {
              var e = void 0,
                r = void 0,
                n = t.delta,
                i = t.left,
                o = [],
                a = [],
                s = [];
              for (e in n)
                if ("_t" !== e) {
                  if ("_" === e[0]) {
                    if (0 === n[e][2] || 3 === n[e][2])
                      o.push(parseInt(e.slice(1), 10));
                    else
                      throw Error(
                        "only removal or move can be applied at original array indices, invalid diff type: " +
                          n[e][2]
                      );
                  } else
                    1 === n[e].length
                      ? a.push({ index: parseInt(e, 10), value: n[e][0] })
                      : s.push({ index: parseInt(e, 10), delta: n[e] });
                }
              for (e = (o = o.sort(I.numerically)).length - 1; e >= 0; e--) {
                var f = n["_" + (r = o[e])],
                  l = i.splice(r, 1)[0];
                3 === f[2] && a.push({ index: f[1], value: l });
              }
              var u = (a = a.sort(I.numericallyBy("index"))).length;
              for (e = 0; e < u; e++) {
                var h = a[e];
                i.splice(h.index, 0, h.value);
              }
              var c = s.length,
                d = void 0;
              if (c > 0)
                for (e = 0; e < c; e++) {
                  var p = s[e];
                  (d = new y(t.left[p.index], p.delta)), t.push(d, p.index);
                }
              if (!t.children) {
                t.setResult(t.left).exit();
                return;
              }
              t.exit();
            }
          };
        F.filterName = "arrays";
        var B = function (t) {
          if (t && t.children && "a" === t.delta._t) {
            for (var e = t.children.length, r = void 0, n = 0; n < e; n++)
              (r = t.children[n]), (t.left[r.childName] = r.result);
            t.setResult(t.left).exit();
          }
        };
        B.filterName = "arraysCollectChildren";
        var V = function (t) {
          if (!t.nested) {
            3 === t.delta[2] &&
              ((t.newName = "_" + t.delta[1]),
              t
                .setResult([t.delta[0], parseInt(t.childName.substr(1), 10), 3])
                .exit());
            return;
          }
          if ("a" === t.delta._t) {
            var e = void 0,
              r = void 0;
            for (e in t.delta)
              "_t" !== e && ((r = new m(t.delta[e])), t.push(r, e));
            t.exit();
          }
        };
        V.filterName = "arrays";
        var q = function (t, e, r) {
          if ("string" == typeof e && "_" === e[0])
            return parseInt(e.substr(1), 10);
          if (T(r) && 0 === r[2]) return "_" + e;
          var n = +e;
          for (var i in t) {
            var o = t[i];
            if (T(o)) {
              if (3 === o[2]) {
                var a = parseInt(i.substr(1), 10),
                  s = o[1];
                if (s === +e) return a;
                a <= n && s > n ? n++ : a >= n && s < n && n--;
              } else
                0 === o[2]
                  ? parseInt(i.substr(1), 10) <= n && n++
                  : 1 === o.length && i <= n && n--;
            }
          }
          return n;
        };
        function U(t) {
          if (t && t.children && "a" === t.delta._t) {
            for (
              var e = t.children.length, r = void 0, n = { _t: "a" }, i = 0;
              i < e;
              i++
            ) {
              var o = (r = t.children[i]).newName;
              void 0 === o && (o = q(t.delta, r.childName, r.result)),
                n[o] !== r.result && (n[o] = r.result);
            }
            t.setResult(n).exit();
          }
        }
        U.filterName = "arraysCollectChildren";
        var H = function (t) {
          t.left instanceof Date
            ? (t.right instanceof Date
                ? t.left.getTime() !== t.right.getTime()
                  ? t.setResult([t.left, t.right])
                  : t.setResult(void 0)
                : t.setResult([t.left, t.right]),
              t.exit())
            : t.right instanceof Date && t.setResult([t.left, t.right]).exit();
        };
        H.filterName = "dates";
        var z =
            ((function (t) {
              function e() {
                (this.Diff_Timeout = 1),
                  (this.Diff_EditCost = 4),
                  (this.Match_Threshold = 0.5),
                  (this.Match_Distance = 1e3),
                  (this.Patch_DeleteThreshold = 0.5),
                  (this.Patch_Margin = 4),
                  (this.Match_MaxBits = 32);
              }
              (e.prototype.diff_main = function (t, e, r, n) {
                void 0 === n &&
                  (n =
                    this.Diff_Timeout <= 0
                      ? Number.MAX_VALUE
                      : new Date().getTime() + 1e3 * this.Diff_Timeout);
                var i = n;
                if (null == t || null == e)
                  throw Error("Null input. (diff_main)");
                if (t == e) return t ? [[0, t]] : [];
                void 0 === r && (r = !0);
                var o = r,
                  a = this.diff_commonPrefix(t, e),
                  s = t.substring(0, a);
                (t = t.substring(a)),
                  (e = e.substring(a)),
                  (a = this.diff_commonSuffix(t, e));
                var f = t.substring(t.length - a);
                (t = t.substring(0, t.length - a)),
                  (e = e.substring(0, e.length - a));
                var l = this.diff_compute_(t, e, o, i);
                return (
                  s && l.unshift([0, s]),
                  f && l.push([0, f]),
                  this.diff_cleanupMerge(l),
                  l
                );
              }),
                (e.prototype.diff_compute_ = function (t, e, r, n) {
                  if (!t) return [[1, e]];
                  if (!e) return [[-1, t]];
                  var i,
                    o = t.length > e.length ? t : e,
                    a = t.length > e.length ? e : t,
                    s = o.indexOf(a);
                  if (-1 != s)
                    return (
                      (i = [
                        [1, o.substring(0, s)],
                        [0, a],
                        [1, o.substring(s + a.length)],
                      ]),
                      t.length > e.length && (i[0][0] = i[2][0] = -1),
                      i
                    );
                  if (1 == a.length)
                    return [
                      [-1, t],
                      [1, e],
                    ];
                  var f = this.diff_halfMatch_(t, e);
                  if (f) {
                    var l = f[0],
                      u = f[1],
                      h = f[2],
                      c = f[3],
                      d = f[4],
                      p = this.diff_main(l, h, r, n),
                      v = this.diff_main(u, c, r, n);
                    return p.concat([[0, d]], v);
                  }
                  return r && t.length > 100 && e.length > 100
                    ? this.diff_lineMode_(t, e, n)
                    : this.diff_bisect_(t, e, n);
                }),
                (e.prototype.diff_lineMode_ = function (t, e, r) {
                  var n = this.diff_linesToChars_(t, e);
                  (t = n.chars1), (e = n.chars2);
                  var i = n.lineArray,
                    o = this.diff_main(t, e, !1, r);
                  this.diff_charsToLines_(o, i),
                    this.diff_cleanupSemantic(o),
                    o.push([0, ""]);
                  for (
                    var a = 0, s = 0, f = 0, l = "", u = "";
                    a < o.length;
                  ) {
                    switch (o[a][0]) {
                      case 1:
                        f++, (u += o[a][1]);
                        break;
                      case -1:
                        s++, (l += o[a][1]);
                        break;
                      case 0:
                        if (s >= 1 && f >= 1) {
                          o.splice(a - s - f, s + f), (a = a - s - f);
                          for (
                            var n = this.diff_main(l, u, !1, r),
                              h = n.length - 1;
                            h >= 0;
                            h--
                          )
                            o.splice(a, 0, n[h]);
                          a += n.length;
                        }
                        (f = 0), (s = 0), (l = ""), (u = "");
                    }
                    a++;
                  }
                  return o.pop(), o;
                }),
                (e.prototype.diff_bisect_ = function (t, e, r) {
                  for (
                    var n = t.length,
                      i = e.length,
                      o = Math.ceil((n + i) / 2),
                      a = 2 * o,
                      s = Array(a),
                      f = Array(a),
                      l = 0;
                    l < a;
                    l++
                  )
                    (s[l] = -1), (f[l] = -1);
                  (s[o + 1] = 0), (f[o + 1] = 0);
                  for (
                    var u = n - i,
                      h = u % 2 != 0,
                      c = 0,
                      d = 0,
                      p = 0,
                      v = 0,
                      g = 0;
                    g < o && !(new Date().getTime() > r);
                    g++
                  ) {
                    for (var y = -g + c; y <= g - d; y += 2) {
                      for (
                        var m,
                          _ = o + y,
                          b =
                            (m =
                              y == -g || (y != g && s[_ - 1] < s[_ + 1])
                                ? s[_ + 1]
                                : s[_ - 1] + 1) - y;
                        m < n && b < i && t.charAt(m) == e.charAt(b);
                      )
                        m++, b++;
                      if (((s[_] = m), m > n)) d += 2;
                      else if (b > i) c += 2;
                      else if (h) {
                        var x = o + u - y;
                        if (x >= 0 && x < a && -1 != f[x]) {
                          var w = n - f[x];
                          if (m >= w)
                            return this.diff_bisectSplit_(t, e, m, b, r);
                        }
                      }
                    }
                    for (var k = -g + p; k <= g - v; k += 2) {
                      for (
                        var w,
                          x = o + k,
                          j =
                            (w =
                              k == -g || (k != g && f[x - 1] < f[x + 1])
                                ? f[x + 1]
                                : f[x - 1] + 1) - k;
                        w < n &&
                        j < i &&
                        t.charAt(n - w - 1) == e.charAt(i - j - 1);
                      )
                        w++, j++;
                      if (((f[x] = w), w > n)) v += 2;
                      else if (j > i) p += 2;
                      else if (!h) {
                        var _ = o + u - k;
                        if (_ >= 0 && _ < a && -1 != s[_]) {
                          var m = s[_],
                            b = o + m - _;
                          if (m >= (w = n - w))
                            return this.diff_bisectSplit_(t, e, m, b, r);
                        }
                      }
                    }
                  }
                  return [
                    [-1, t],
                    [1, e],
                  ];
                }),
                (e.prototype.diff_bisectSplit_ = function (t, e, r, n, i) {
                  var o = t.substring(0, r),
                    a = e.substring(0, n),
                    s = t.substring(r),
                    f = e.substring(n),
                    l = this.diff_main(o, a, !1, i),
                    u = this.diff_main(s, f, !1, i);
                  return l.concat(u);
                }),
                (e.prototype.diff_linesToChars_ = function (t, e) {
                  var r = [],
                    n = {};
                  function i(t) {
                    for (
                      var e = "", i = 0, o = -1, a = r.length;
                      o < t.length - 1;
                    ) {
                      -1 == (o = t.indexOf("\n", i)) && (o = t.length - 1);
                      var s = t.substring(i, o + 1);
                      (i = o + 1),
                        (
                          n.hasOwnProperty
                            ? n.hasOwnProperty(s)
                            : void 0 !== n[s]
                        )
                          ? (e += String.fromCharCode(n[s]))
                          : ((e += String.fromCharCode(a)),
                            (n[s] = a),
                            (r[a++] = s));
                    }
                    return e;
                  }
                  return (
                    (r[0] = ""), { chars1: i(t), chars2: i(e), lineArray: r }
                  );
                }),
                (e.prototype.diff_charsToLines_ = function (t, e) {
                  for (var r = 0; r < t.length; r++) {
                    for (var n = t[r][1], i = [], o = 0; o < n.length; o++)
                      i[o] = e[n.charCodeAt(o)];
                    t[r][1] = i.join("");
                  }
                }),
                (e.prototype.diff_commonPrefix = function (t, e) {
                  if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                  for (
                    var r = 0, n = Math.min(t.length, e.length), i = n, o = 0;
                    r < i;
                  )
                    t.substring(o, i) == e.substring(o, i)
                      ? (o = r = i)
                      : (n = i),
                      (i = Math.floor((n - r) / 2 + r));
                  return i;
                }),
                (e.prototype.diff_commonSuffix = function (t, e) {
                  if (
                    !t ||
                    !e ||
                    t.charAt(t.length - 1) != e.charAt(e.length - 1)
                  )
                    return 0;
                  for (
                    var r = 0, n = Math.min(t.length, e.length), i = n, o = 0;
                    r < i;
                  )
                    t.substring(t.length - i, t.length - o) ==
                    e.substring(e.length - i, e.length - o)
                      ? (o = r = i)
                      : (n = i),
                      (i = Math.floor((n - r) / 2 + r));
                  return i;
                }),
                (e.prototype.diff_commonOverlap_ = function (t, e) {
                  var r = t.length,
                    n = e.length;
                  if (0 == r || 0 == n) return 0;
                  r > n
                    ? (t = t.substring(r - n))
                    : r < n && (e = e.substring(0, r));
                  var i = Math.min(r, n);
                  if (t == e) return i;
                  for (var o = 0, a = 1; ; ) {
                    var s = t.substring(i - a),
                      f = e.indexOf(s);
                    if (-1 == f) return o;
                    (a += f),
                      (0 == f || t.substring(i - a) == e.substring(0, a)) &&
                        ((o = a), a++);
                  }
                }),
                (e.prototype.diff_halfMatch_ = function (t, e) {
                  if (this.Diff_Timeout <= 0) return null;
                  var r,
                    n,
                    i,
                    o,
                    a,
                    s = t.length > e.length ? t : e,
                    f = t.length > e.length ? e : t;
                  if (s.length < 4 || 2 * f.length < s.length) return null;
                  var l = this;
                  function u(t, e, r) {
                    for (
                      var n,
                        i,
                        o,
                        a,
                        s = t.substring(r, r + Math.floor(t.length / 4)),
                        f = -1,
                        u = "";
                      -1 != (f = e.indexOf(s, f + 1));
                    ) {
                      var h = l.diff_commonPrefix(
                          t.substring(r),
                          e.substring(f)
                        ),
                        c = l.diff_commonSuffix(
                          t.substring(0, r),
                          e.substring(0, f)
                        );
                      u.length < c + h &&
                        ((u = e.substring(f - c, f) + e.substring(f, f + h)),
                        (n = t.substring(0, r - c)),
                        (i = t.substring(r + h)),
                        (o = e.substring(0, f - c)),
                        (a = e.substring(f + h)));
                    }
                    return 2 * u.length >= t.length ? [n, i, o, a, u] : null;
                  }
                  var h = u(s, f, Math.ceil(s.length / 4)),
                    c = u(s, f, Math.ceil(s.length / 2));
                  return h || c
                    ? ((r = c ? (h && h[4].length > c[4].length ? h : c) : h),
                      t.length > e.length
                        ? ((n = r[0]), (i = r[1]), (o = r[2]), (a = r[3]))
                        : ((o = r[0]), (a = r[1]), (n = r[2]), (i = r[3])),
                      [n, i, o, a, r[4]])
                    : null;
                }),
                (e.prototype.diff_cleanupSemantic = function (t) {
                  for (
                    var e = !1,
                      r = [],
                      n = 0,
                      i = null,
                      o = 0,
                      a = 0,
                      s = 0,
                      f = 0,
                      l = 0;
                    o < t.length;
                  )
                    0 == t[o][0]
                      ? ((r[n++] = o),
                        (a = f),
                        (s = l),
                        (f = 0),
                        (l = 0),
                        (i = t[o][1]))
                      : (1 == t[o][0]
                          ? (f += t[o][1].length)
                          : (l += t[o][1].length),
                        i &&
                          i.length <= Math.max(a, s) &&
                          i.length <= Math.max(f, l) &&
                          (t.splice(r[n - 1], 0, [-1, i]),
                          (t[r[n - 1] + 1][0] = 1),
                          n--,
                          (o = --n > 0 ? r[n - 1] : -1),
                          (a = 0),
                          (s = 0),
                          (f = 0),
                          (l = 0),
                          (i = null),
                          (e = !0))),
                      o++;
                  for (
                    e && this.diff_cleanupMerge(t),
                      this.diff_cleanupSemanticLossless(t),
                      o = 1;
                    o < t.length;
                  ) {
                    if (-1 == t[o - 1][0] && 1 == t[o][0]) {
                      var u = t[o - 1][1],
                        h = t[o][1],
                        c = this.diff_commonOverlap_(u, h),
                        d = this.diff_commonOverlap_(h, u);
                      c >= d
                        ? (c >= u.length / 2 || c >= h.length / 2) &&
                          (t.splice(o, 0, [0, h.substring(0, c)]),
                          (t[o - 1][1] = u.substring(0, u.length - c)),
                          (t[o + 1][1] = h.substring(c)),
                          o++)
                        : (d >= u.length / 2 || d >= h.length / 2) &&
                          (t.splice(o, 0, [0, u.substring(0, d)]),
                          (t[o - 1][0] = 1),
                          (t[o - 1][1] = h.substring(0, h.length - d)),
                          (t[o + 1][0] = -1),
                          (t[o + 1][1] = u.substring(d)),
                          o++),
                        o++;
                    }
                    o++;
                  }
                }),
                (e.prototype.diff_cleanupSemanticLossless = function (t) {
                  function r(t, r) {
                    if (!t || !r) return 6;
                    var n = t.charAt(t.length - 1),
                      i = r.charAt(0),
                      o = n.match(e.nonAlphaNumericRegex_),
                      a = i.match(e.nonAlphaNumericRegex_),
                      s = o && n.match(e.whitespaceRegex_),
                      f = a && i.match(e.whitespaceRegex_),
                      l = s && n.match(e.linebreakRegex_),
                      u = f && i.match(e.linebreakRegex_),
                      h = l && t.match(e.blanklineEndRegex_),
                      c = u && r.match(e.blanklineStartRegex_);
                    return h || c
                      ? 5
                      : l || u
                        ? 4
                        : o && !s && f
                          ? 3
                          : s || f
                            ? 2
                            : o || a
                              ? 1
                              : 0;
                  }
                  for (var n = 1; n < t.length - 1; ) {
                    if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
                      var i = t[n - 1][1],
                        o = t[n][1],
                        a = t[n + 1][1],
                        s = this.diff_commonSuffix(i, o);
                      if (s) {
                        var f = o.substring(o.length - s);
                        (i = i.substring(0, i.length - s)),
                          (o = f + o.substring(0, o.length - s)),
                          (a = f + a);
                      }
                      for (
                        var l = i, u = o, h = a, c = r(i, o) + r(o, a);
                        o.charAt(0) === a.charAt(0);
                      ) {
                        (i += o.charAt(0)),
                          (o = o.substring(1) + a.charAt(0)),
                          (a = a.substring(1));
                        var d = r(i, o) + r(o, a);
                        d >= c && ((c = d), (l = i), (u = o), (h = a));
                      }
                      t[n - 1][1] != l &&
                        (l ? (t[n - 1][1] = l) : (t.splice(n - 1, 1), n--),
                        (t[n][1] = u),
                        h ? (t[n + 1][1] = h) : (t.splice(n + 1, 1), n--));
                    }
                    n++;
                  }
                }),
                (e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
                (e.whitespaceRegex_ = /\s/),
                (e.linebreakRegex_ = /[\r\n]/),
                (e.blanklineEndRegex_ = /\n\r?\n$/),
                (e.blanklineStartRegex_ = /^\r?\n\r?\n/),
                (e.prototype.diff_cleanupEfficiency = function (t) {
                  for (
                    var e = !1,
                      r = [],
                      n = 0,
                      i = null,
                      o = 0,
                      a = !1,
                      s = !1,
                      f = !1,
                      l = !1;
                    o < t.length;
                  )
                    0 == t[o][0]
                      ? (t[o][1].length < this.Diff_EditCost && (f || l)
                          ? ((r[n++] = o), (a = f), (s = l), (i = t[o][1]))
                          : ((n = 0), (i = null)),
                        (f = l = !1))
                      : (-1 == t[o][0] ? (l = !0) : (f = !0),
                        i &&
                          ((a && s && f && l) ||
                            (i.length < this.Diff_EditCost / 2 &&
                              a + s + f + l == 3)) &&
                          (t.splice(r[n - 1], 0, [-1, i]),
                          (t[r[n - 1] + 1][0] = 1),
                          n--,
                          (i = null),
                          a && s
                            ? ((f = l = !0), (n = 0))
                            : ((o = --n > 0 ? r[n - 1] : -1), (f = l = !1)),
                          (e = !0))),
                      o++;
                  e && this.diff_cleanupMerge(t);
                }),
                (e.prototype.diff_cleanupMerge = function (t) {
                  t.push([0, ""]);
                  for (
                    var e, r = 0, n = 0, i = 0, o = "", a = "";
                    r < t.length;
                  )
                    switch (t[r][0]) {
                      case 1:
                        i++, (a += t[r][1]), r++;
                        break;
                      case -1:
                        n++, (o += t[r][1]), r++;
                        break;
                      case 0:
                        n + i > 1
                          ? (0 !== n &&
                              0 !== i &&
                              (0 !== (e = this.diff_commonPrefix(a, o)) &&
                                (r - n - i > 0 && 0 == t[r - n - i - 1][0]
                                  ? (t[r - n - i - 1][1] += a.substring(0, e))
                                  : (t.splice(0, 0, [0, a.substring(0, e)]),
                                    r++),
                                (a = a.substring(e)),
                                (o = o.substring(e))),
                              0 !== (e = this.diff_commonSuffix(a, o)) &&
                                ((t[r][1] =
                                  a.substring(a.length - e) + t[r][1]),
                                (a = a.substring(0, a.length - e)),
                                (o = o.substring(0, o.length - e)))),
                            0 === n
                              ? t.splice(r - i, n + i, [1, a])
                              : 0 === i
                                ? t.splice(r - n, n + i, [-1, o])
                                : t.splice(r - n - i, n + i, [-1, o], [1, a]),
                            (r = r - n - i + (n ? 1 : 0) + (i ? 1 : 0) + 1))
                          : 0 !== r && 0 == t[r - 1][0]
                            ? ((t[r - 1][1] += t[r][1]), t.splice(r, 1))
                            : r++,
                          (i = 0),
                          (n = 0),
                          (o = ""),
                          (a = "");
                    }
                  "" === t[t.length - 1][1] && t.pop();
                  var s = !1;
                  for (r = 1; r < t.length - 1; )
                    0 == t[r - 1][0] &&
                      0 == t[r + 1][0] &&
                      (t[r][1].substring(t[r][1].length - t[r - 1][1].length) ==
                      t[r - 1][1]
                        ? ((t[r][1] =
                            t[r - 1][1] +
                            t[r][1].substring(
                              0,
                              t[r][1].length - t[r - 1][1].length
                            )),
                          (t[r + 1][1] = t[r - 1][1] + t[r + 1][1]),
                          t.splice(r - 1, 1),
                          (s = !0))
                        : t[r][1].substring(0, t[r + 1][1].length) ==
                            t[r + 1][1] &&
                          ((t[r - 1][1] += t[r + 1][1]),
                          (t[r][1] =
                            t[r][1].substring(t[r + 1][1].length) +
                            t[r + 1][1]),
                          t.splice(r + 1, 1),
                          (s = !0))),
                      r++;
                  s && this.diff_cleanupMerge(t);
                }),
                (e.prototype.diff_xIndex = function (t, e) {
                  var r,
                    n = 0,
                    i = 0,
                    o = 0,
                    a = 0;
                  for (
                    r = 0;
                    r < t.length &&
                    (1 !== t[r][0] && (n += t[r][1].length),
                    -1 !== t[r][0] && (i += t[r][1].length),
                    !(n > e));
                    r++
                  )
                    (o = n), (a = i);
                  return t.length != r && -1 === t[r][0] ? a : a + (e - o);
                }),
                (e.prototype.diff_prettyHtml = function (t) {
                  for (
                    var e = [], r = /&/g, n = /</g, i = />/g, o = /\n/g, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var s = t[a][0],
                      f = t[a][1]
                        .replace(r, "&amp;")
                        .replace(n, "&lt;")
                        .replace(i, "&gt;")
                        .replace(o, "&para;<br>");
                    switch (s) {
                      case 1:
                        e[a] =
                          '<ins style="background:#e6ffe6;">' + f + "</ins>";
                        break;
                      case -1:
                        e[a] =
                          '<del style="background:#ffe6e6;">' + f + "</del>";
                        break;
                      case 0:
                        e[a] = "<span>" + f + "</span>";
                    }
                  }
                  return e.join("");
                }),
                (e.prototype.diff_text1 = function (t) {
                  for (var e = [], r = 0; r < t.length; r++)
                    1 !== t[r][0] && (e[r] = t[r][1]);
                  return e.join("");
                }),
                (e.prototype.diff_text2 = function (t) {
                  for (var e = [], r = 0; r < t.length; r++)
                    -1 !== t[r][0] && (e[r] = t[r][1]);
                  return e.join("");
                }),
                (e.prototype.diff_levenshtein = function (t) {
                  for (var e = 0, r = 0, n = 0, i = 0; i < t.length; i++) {
                    var o = t[i][0],
                      a = t[i][1];
                    switch (o) {
                      case 1:
                        r += a.length;
                        break;
                      case -1:
                        n += a.length;
                        break;
                      case 0:
                        (e += Math.max(r, n)), (r = 0), (n = 0);
                    }
                  }
                  return e + Math.max(r, n);
                }),
                (e.prototype.diff_toDelta = function (t) {
                  for (var e = [], r = 0; r < t.length; r++)
                    switch (t[r][0]) {
                      case 1:
                        e[r] = "+" + encodeURI(t[r][1]);
                        break;
                      case -1:
                        e[r] = "-" + t[r][1].length;
                        break;
                      case 0:
                        e[r] = "=" + t[r][1].length;
                    }
                  return e.join("	").replace(/%20/g, " ");
                }),
                (e.prototype.diff_fromDelta = function (t, e) {
                  for (
                    var r = [], n = 0, i = 0, o = e.split(/\t/g), a = 0;
                    a < o.length;
                    a++
                  ) {
                    var s = o[a].substring(1);
                    switch (o[a].charAt(0)) {
                      case "+":
                        try {
                          r[n++] = [1, decodeURI(s)];
                        } catch (t) {
                          throw Error("Illegal escape in diff_fromDelta: " + s);
                        }
                        break;
                      case "-":
                      case "=":
                        var f = parseInt(s, 10);
                        if (isNaN(f) || f < 0)
                          throw Error("Invalid number in diff_fromDelta: " + s);
                        var l = t.substring(i, (i += f));
                        "=" == o[a].charAt(0)
                          ? (r[n++] = [0, l])
                          : (r[n++] = [-1, l]);
                        break;
                      default:
                        if (o[a])
                          throw Error(
                            "Invalid diff operation in diff_fromDelta: " + o[a]
                          );
                    }
                  }
                  if (i != t.length)
                    throw Error(
                      "Delta length (" +
                        i +
                        ") does not equal source text length (" +
                        t.length +
                        ")."
                    );
                  return r;
                }),
                (e.prototype.match_main = function (t, e, r) {
                  if (null == t || null == e || null == r)
                    throw Error("Null input. (match_main)");
                  return ((r = Math.max(0, Math.min(r, t.length))), t == e)
                    ? 0
                    : t.length
                      ? t.substring(r, r + e.length) == e
                        ? r
                        : this.match_bitap_(t, e, r)
                      : -1;
                }),
                (e.prototype.match_bitap_ = function (t, e, r) {
                  if (e.length > this.Match_MaxBits)
                    throw Error("Pattern too long for this browser.");
                  var n,
                    i,
                    o,
                    a = this.match_alphabet_(e),
                    s = this;
                  function f(t, n) {
                    var i = t / e.length,
                      o = Math.abs(r - n);
                    return s.Match_Distance
                      ? i + o / s.Match_Distance
                      : o
                        ? 1
                        : i;
                  }
                  var l = this.Match_Threshold,
                    u = t.indexOf(e, r);
                  -1 != u &&
                    ((l = Math.min(f(0, u), l)),
                    -1 != (u = t.lastIndexOf(e, r + e.length)) &&
                      (l = Math.min(f(0, u), l)));
                  var h = 1 << (e.length - 1);
                  u = -1;
                  for (var c = e.length + t.length, d = 0; d < e.length; d++) {
                    for (n = 0, i = c; n < i; )
                      f(d, r + i) <= l ? (n = i) : (c = i),
                        (i = Math.floor((c - n) / 2 + n));
                    c = i;
                    var p = Math.max(1, r - i + 1),
                      v = Math.min(r + i, t.length) + e.length,
                      g = Array(v + 2);
                    g[v + 1] = (1 << d) - 1;
                    for (var y = v; y >= p; y--) {
                      var m = a[t.charAt(y - 1)];
                      if (
                        (0 === d
                          ? (g[y] = ((g[y + 1] << 1) | 1) & m)
                          : (g[y] =
                              (((g[y + 1] << 1) | 1) & m) |
                              (((o[y + 1] | o[y]) << 1) | 1) |
                              o[y + 1]),
                        g[y] & h)
                      ) {
                        var _ = f(d, y - 1);
                        if (_ <= l) {
                          if (((l = _), (u = y - 1) > r))
                            p = Math.max(1, 2 * r - u);
                          else break;
                        }
                      }
                    }
                    if (f(d + 1, r) > l) break;
                    o = g;
                  }
                  return u;
                }),
                (e.prototype.match_alphabet_ = function (t) {
                  for (var e = {}, r = 0; r < t.length; r++) e[t.charAt(r)] = 0;
                  for (var r = 0; r < t.length; r++)
                    e[t.charAt(r)] |= 1 << (t.length - r - 1);
                  return e;
                }),
                (e.prototype.patch_addContext_ = function (t, e) {
                  if (0 != e.length) {
                    for (
                      var r = e.substring(t.start2, t.start2 + t.length1),
                        n = 0;
                      e.indexOf(r) != e.lastIndexOf(r) &&
                      r.length <
                        this.Match_MaxBits -
                          this.Patch_Margin -
                          this.Patch_Margin;
                    )
                      (n += this.Patch_Margin),
                        (r = e.substring(
                          t.start2 - n,
                          t.start2 + t.length1 + n
                        ));
                    n += this.Patch_Margin;
                    var i = e.substring(t.start2 - n, t.start2);
                    i && t.diffs.unshift([0, i]);
                    var o = e.substring(
                      t.start2 + t.length1,
                      t.start2 + t.length1 + n
                    );
                    o && t.diffs.push([0, o]),
                      (t.start1 -= i.length),
                      (t.start2 -= i.length),
                      (t.length1 += i.length + o.length),
                      (t.length2 += i.length + o.length);
                  }
                }),
                (e.prototype.patch_make = function (t, r, n) {
                  if (
                    "string" == typeof t &&
                    "string" == typeof r &&
                    void 0 === n
                  )
                    (i = t),
                      (o = this.diff_main(i, r, !0)).length > 2 &&
                        (this.diff_cleanupSemantic(o),
                        this.diff_cleanupEfficiency(o));
                  else if (
                    t &&
                    "object" == typeof t &&
                    void 0 === r &&
                    void 0 === n
                  )
                    (o = t), (i = this.diff_text1(o));
                  else if (
                    "string" == typeof t &&
                    r &&
                    "object" == typeof r &&
                    void 0 === n
                  )
                    (i = t), (o = r);
                  else if (
                    "string" == typeof t &&
                    "string" == typeof r &&
                    n &&
                    "object" == typeof n
                  )
                    (i = t), (o = n);
                  else throw Error("Unknown call format to patch_make.");
                  if (0 === o.length) return [];
                  for (
                    var i,
                      o,
                      a = [],
                      s = new e.patch_obj(),
                      f = 0,
                      l = 0,
                      u = 0,
                      h = i,
                      c = i,
                      d = 0;
                    d < o.length;
                    d++
                  ) {
                    var p = o[d][0],
                      v = o[d][1];
                    switch (
                      (f || 0 === p || ((s.start1 = l), (s.start2 = u)), p)
                    ) {
                      case 1:
                        (s.diffs[f++] = o[d]),
                          (s.length2 += v.length),
                          (c = c.substring(0, u) + v + c.substring(u));
                        break;
                      case -1:
                        (s.length1 += v.length),
                          (s.diffs[f++] = o[d]),
                          (c = c.substring(0, u) + c.substring(u + v.length));
                        break;
                      case 0:
                        v.length <= 2 * this.Patch_Margin &&
                        f &&
                        o.length != d + 1
                          ? ((s.diffs[f++] = o[d]),
                            (s.length1 += v.length),
                            (s.length2 += v.length))
                          : v.length >= 2 * this.Patch_Margin &&
                            f &&
                            (this.patch_addContext_(s, h),
                            a.push(s),
                            (s = new e.patch_obj()),
                            (f = 0),
                            (h = c),
                            (l = u));
                    }
                    1 !== p && (l += v.length), -1 !== p && (u += v.length);
                  }
                  return f && (this.patch_addContext_(s, h), a.push(s)), a;
                }),
                (e.prototype.patch_deepCopy = function (t) {
                  for (var r = [], n = 0; n < t.length; n++) {
                    var i = t[n],
                      o = new e.patch_obj();
                    o.diffs = [];
                    for (var a = 0; a < i.diffs.length; a++)
                      o.diffs[a] = i.diffs[a].slice();
                    (o.start1 = i.start1),
                      (o.start2 = i.start2),
                      (o.length1 = i.length1),
                      (o.length2 = i.length2),
                      (r[n] = o);
                  }
                  return r;
                }),
                (e.prototype.patch_apply = function (t, e) {
                  if (0 == t.length) return [e, []];
                  t = this.patch_deepCopy(t);
                  var r = this.patch_addPadding(t);
                  (e = r + e + r), this.patch_splitMax(t);
                  for (var n = 0, i = [], o = 0; o < t.length; o++) {
                    var a = t[o].start2 + n,
                      s = this.diff_text1(t[o].diffs),
                      f = -1;
                    if (
                      (s.length > this.Match_MaxBits
                        ? -1 !=
                            (u = this.match_main(
                              e,
                              s.substring(0, this.Match_MaxBits),
                              a
                            )) &&
                          (-1 ==
                            (f = this.match_main(
                              e,
                              s.substring(s.length - this.Match_MaxBits),
                              a + s.length - this.Match_MaxBits
                            )) ||
                            u >= f) &&
                          (u = -1)
                        : (u = this.match_main(e, s, a)),
                      -1 == u)
                    )
                      (i[o] = !1), (n -= t[o].length2 - t[o].length1);
                    else if (
                      ((i[o] = !0),
                      (n = u - a),
                      (h =
                        -1 == f
                          ? e.substring(u, u + s.length)
                          : e.substring(u, f + this.Match_MaxBits)),
                      s == h)
                    )
                      e =
                        e.substring(0, u) +
                        this.diff_text2(t[o].diffs) +
                        e.substring(u + s.length);
                    else {
                      var l = this.diff_main(s, h, !1);
                      if (
                        s.length > this.Match_MaxBits &&
                        this.diff_levenshtein(l) / s.length >
                          this.Patch_DeleteThreshold
                      )
                        i[o] = !1;
                      else {
                        this.diff_cleanupSemanticLossless(l);
                        for (
                          var u, h, c, d = 0, p = 0;
                          p < t[o].diffs.length;
                          p++
                        ) {
                          var v = t[o].diffs[p];
                          0 !== v[0] && (c = this.diff_xIndex(l, d)),
                            1 === v[0]
                              ? (e =
                                  e.substring(0, u + c) +
                                  v[1] +
                                  e.substring(u + c))
                              : -1 === v[0] &&
                                (e =
                                  e.substring(0, u + c) +
                                  e.substring(
                                    u + this.diff_xIndex(l, d + v[1].length)
                                  )),
                            -1 !== v[0] && (d += v[1].length);
                        }
                      }
                    }
                  }
                  return [(e = e.substring(r.length, e.length - r.length)), i];
                }),
                (e.prototype.patch_addPadding = function (t) {
                  for (var e = this.Patch_Margin, r = "", n = 1; n <= e; n++)
                    r += String.fromCharCode(n);
                  for (var n = 0; n < t.length; n++)
                    (t[n].start1 += e), (t[n].start2 += e);
                  var i = t[0],
                    o = i.diffs;
                  if (0 == o.length || 0 != o[0][0])
                    o.unshift([0, r]),
                      (i.start1 -= e),
                      (i.start2 -= e),
                      (i.length1 += e),
                      (i.length2 += e);
                  else if (e > o[0][1].length) {
                    var a = e - o[0][1].length;
                    (o[0][1] = r.substring(o[0][1].length) + o[0][1]),
                      (i.start1 -= a),
                      (i.start2 -= a),
                      (i.length1 += a),
                      (i.length2 += a);
                  }
                  if (
                    0 == (o = (i = t[t.length - 1]).diffs).length ||
                    0 != o[o.length - 1][0]
                  )
                    o.push([0, r]), (i.length1 += e), (i.length2 += e);
                  else if (e > o[o.length - 1][1].length) {
                    var a = e - o[o.length - 1][1].length;
                    (o[o.length - 1][1] += r.substring(0, a)),
                      (i.length1 += a),
                      (i.length2 += a);
                  }
                  return r;
                }),
                (e.prototype.patch_splitMax = function (t) {
                  for (var r = this.Match_MaxBits, n = 0; n < t.length; n++)
                    if (!(t[n].length1 <= r)) {
                      var i = t[n];
                      t.splice(n--, 1);
                      for (
                        var o = i.start1, a = i.start2, s = "";
                        0 !== i.diffs.length;
                      ) {
                        var f = new e.patch_obj(),
                          l = !0;
                        for (
                          f.start1 = o - s.length,
                            f.start2 = a - s.length,
                            "" !== s &&
                              ((f.length1 = f.length2 = s.length),
                              f.diffs.push([0, s]));
                          0 !== i.diffs.length &&
                          f.length1 < r - this.Patch_Margin;
                        ) {
                          var u = i.diffs[0][0],
                            h = i.diffs[0][1];
                          1 === u
                            ? ((f.length2 += h.length),
                              (a += h.length),
                              f.diffs.push(i.diffs.shift()),
                              (l = !1))
                            : -1 === u &&
                                1 == f.diffs.length &&
                                0 == f.diffs[0][0] &&
                                h.length > 2 * r
                              ? ((f.length1 += h.length),
                                (o += h.length),
                                (l = !1),
                                f.diffs.push([u, h]),
                                i.diffs.shift())
                              : ((h = h.substring(
                                  0,
                                  r - f.length1 - this.Patch_Margin
                                )),
                                (f.length1 += h.length),
                                (o += h.length),
                                0 === u
                                  ? ((f.length2 += h.length), (a += h.length))
                                  : (l = !1),
                                f.diffs.push([u, h]),
                                h == i.diffs[0][1]
                                  ? i.diffs.shift()
                                  : (i.diffs[0][1] = i.diffs[0][1].substring(
                                      h.length
                                    )));
                        }
                        s = (s = this.diff_text2(f.diffs)).substring(
                          s.length - this.Patch_Margin
                        );
                        var c = this.diff_text1(i.diffs).substring(
                          0,
                          this.Patch_Margin
                        );
                        "" !== c &&
                          ((f.length1 += c.length),
                          (f.length2 += c.length),
                          0 !== f.diffs.length &&
                          0 === f.diffs[f.diffs.length - 1][0]
                            ? (f.diffs[f.diffs.length - 1][1] += c)
                            : f.diffs.push([0, c])),
                          l || t.splice(++n, 0, f);
                      }
                    }
                }),
                (e.prototype.patch_toText = function (t) {
                  for (var e = [], r = 0; r < t.length; r++) e[r] = t[r];
                  return e.join("");
                }),
                (e.prototype.patch_fromText = function (t) {
                  var r = [];
                  if (!t) return r;
                  for (
                    var n = t.split("\n"),
                      i = 0,
                      o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
                    i < n.length;
                  ) {
                    var a = n[i].match(o);
                    if (!a) throw Error("Invalid patch string: " + n[i]);
                    var s = new e.patch_obj();
                    for (
                      r.push(s),
                        s.start1 = parseInt(a[1], 10),
                        "" === a[2]
                          ? (s.start1--, (s.length1 = 1))
                          : "0" == a[2]
                            ? (s.length1 = 0)
                            : (s.start1--, (s.length1 = parseInt(a[2], 10))),
                        s.start2 = parseInt(a[3], 10),
                        "" === a[4]
                          ? (s.start2--, (s.length2 = 1))
                          : "0" == a[4]
                            ? (s.length2 = 0)
                            : (s.start2--, (s.length2 = parseInt(a[4], 10))),
                        i++;
                      i < n.length;
                    ) {
                      var f = n[i].charAt(0);
                      try {
                        var l = decodeURI(n[i].substring(1));
                      } catch (t) {
                        throw Error("Illegal escape in patch_fromText: " + l);
                      }
                      if ("-" == f) s.diffs.push([-1, l]);
                      else if ("+" == f) s.diffs.push([1, l]);
                      else if (" " == f) s.diffs.push([0, l]);
                      else if ("@" == f) break;
                      else if ("" === f);
                      else
                        throw Error('Invalid patch mode "' + f + '" in: ' + l);
                      i++;
                    }
                  }
                  return r;
                }),
                (e.patch_obj = function () {
                  (this.diffs = []),
                    (this.start1 = null),
                    (this.start2 = null),
                    (this.length1 = 0),
                    (this.length2 = 0);
                }),
                (e.patch_obj.prototype.toString = function () {
                  t =
                    0 === this.length1
                      ? this.start1 + ",0"
                      : 1 == this.length1
                        ? this.start1 + 1
                        : this.start1 + 1 + "," + this.length1;
                  for (
                    var t,
                      e,
                      r = [
                        "@@ -" +
                          t +
                          " +" +
                          (0 === this.length2
                            ? this.start2 + ",0"
                            : 1 == this.length2
                              ? this.start2 + 1
                              : this.start2 + 1 + "," + this.length2) +
                          " @@\n",
                      ],
                      n = 0;
                    n < this.diffs.length;
                    n++
                  ) {
                    switch (this.diffs[n][0]) {
                      case 1:
                        e = "+";
                        break;
                      case -1:
                        e = "-";
                        break;
                      case 0:
                        e = " ";
                    }
                    r[n + 1] = e + encodeURI(this.diffs[n][1]) + "\n";
                  }
                  return r.join("").replace(/%20/g, " ");
                }),
                (t.exports = e),
                (t.exports.diff_match_patch = e),
                (t.exports.DIFF_DELETE = -1),
                (t.exports.DIFF_INSERT = 1),
                (t.exports.DIFF_EQUAL = 0);
            })((r = { exports: {} }), r.exports),
            r.exports),
          G = null,
          $ = function (t) {
            if (!G) {
              var e = void 0;
              if ("undefined" != typeof diff_match_patch)
                e =
                  "function" == typeof diff_match_patch
                    ? new diff_match_patch()
                    : new diff_match_patch.diff_match_patch();
              else if (z)
                try {
                  e = z && new z();
                } catch (t) {
                  e = null;
                }
              if (!e) {
                if (!t) return null;
                var r = Error("text diff_match_patch library not found");
                throw ((r.diff_match_patch_not_found = !0), r);
              }
              G = {
                diff: function (t, r) {
                  return e.patch_toText(e.patch_make(t, r));
                },
                patch: function (t, r) {
                  for (
                    var n = e.patch_apply(e.patch_fromText(r), t), i = 0;
                    i < n[1].length;
                    i++
                  )
                    n[1][i] ||
                      (Error("text patch failed").textPatchFailed = !0);
                  return n[0];
                },
              };
            }
            return G;
          },
          J = function (t) {
            if ("string" === t.leftType) {
              var e =
                (t.options &&
                  t.options.textDiff &&
                  t.options.textDiff.minLength) ||
                60;
              if (t.left.length < e || t.right.length < e) {
                t.setResult([t.left, t.right]).exit();
                return;
              }
              var r = $();
              if (!r) {
                t.setResult([t.left, t.right]).exit();
                return;
              }
              var n = r.diff;
              t.setResult([n(t.left, t.right), 0, 2]).exit();
            }
          };
        J.filterName = "texts";
        var Q = function (t) {
          if (!t.nested && 2 === t.delta[2]) {
            var e = $(!0).patch;
            t.setResult(e(t.left, t.delta[0])).exit();
          }
        };
        Q.filterName = "texts";
        var K = function (t) {
            var e = void 0,
              r = void 0,
              n = void 0,
              i = void 0,
              o = void 0,
              a = null,
              s = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
            for (e = 0, r = (n = t.split("\n")).length; e < r; e++) {
              var f = (i = n[e]).slice(0, 1);
              "@" === f
                ? ((a = s.exec(i)),
                  (n[e] =
                    "@@ -" +
                    a[3] +
                    "," +
                    a[4] +
                    " +" +
                    a[1] +
                    "," +
                    a[2] +
                    " @@"))
                : "+" === f
                  ? ((n[e] = "-" + n[e].slice(1)),
                    "+" === n[e - 1].slice(0, 1) &&
                      ((o = n[e]), (n[e] = n[e - 1]), (n[e - 1] = o)))
                  : "-" === f && (n[e] = "+" + n[e].slice(1));
            }
            return n.join("\n");
          },
          Y = function (t) {
            t.nested ||
              2 !== t.delta[2] ||
              t.setResult([K(t.delta[0]), 0, 2]).exit();
          };
        Y.filterName = "texts";
        var Z = (function () {
            function t(e) {
              i(this, t),
                (this.processor = new h(e)),
                this.processor.pipe(
                  new c("diff").append(k, b, H, J, j, L).shouldHaveResult()
                ),
                this.processor.pipe(
                  new c("patch").append(A, B, x, Q, O, F).shouldHaveResult()
                ),
                this.processor.pipe(
                  new c("reverse").append(M, U, w, Y, E, V).shouldHaveResult()
                );
            }
            return (
              o(t, [
                {
                  key: "options",
                  value: function () {
                    var t;
                    return (t = this.processor).options.apply(t, arguments);
                  },
                },
                {
                  key: "diff",
                  value: function (t, e) {
                    return this.processor.process(new g(t, e));
                  },
                },
                {
                  key: "patch",
                  value: function (t, e) {
                    return this.processor.process(new y(t, e));
                  },
                },
                {
                  key: "reverse",
                  value: function (t) {
                    return this.processor.process(new m(t));
                  },
                },
                {
                  key: "unpatch",
                  value: function (t, e) {
                    return this.patch(t, this.reverse(e));
                  },
                },
                {
                  key: "clone",
                  value: function (t) {
                    return v(t);
                  },
                },
              ]),
              t
            );
          })(),
          W =
            "function" == typeof Array.isArray
              ? Array.isArray
              : function (t) {
                  return t instanceof Array;
                },
          X =
            "function" == typeof Object.keys
              ? function (t) {
                  return Object.keys(t);
                }
              : function (t) {
                  var e = [];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                  return e;
                },
          tt = function (t) {
            return "_t" === t
              ? -1
              : "_" === t.substr(0, 1)
                ? parseInt(t.slice(1), 10)
                : parseInt(t, 10) + 0.1;
          },
          te = function (t, e) {
            return tt(t) - tt(e);
          },
          tr = (function () {
            function t() {
              i(this, t);
            }
            return (
              o(t, [
                {
                  key: "format",
                  value: function (t, e) {
                    var r = {};
                    return (
                      this.prepareContext(r),
                      this.recurse(r, t, e),
                      this.finalize(r)
                    );
                  },
                },
                {
                  key: "prepareContext",
                  value: function (t) {
                    (t.buffer = []),
                      (t.out = function () {
                        var t;
                        (t = this.buffer).push.apply(t, arguments);
                      });
                  },
                },
                {
                  key: "typeFormattterNotFound",
                  value: function (t, e) {
                    throw Error("cannot format delta type: " + e);
                  },
                },
                {
                  key: "typeFormattterErrorFormatter",
                  value: function (t, e) {
                    return e.toString();
                  },
                },
                {
                  key: "finalize",
                  value: function (t) {
                    var e = t.buffer;
                    if (W(e)) return e.join("");
                  },
                },
                {
                  key: "recurse",
                  value: function (t, e, r, n, i, o, a) {
                    var s = e && o ? o.value : r;
                    if (void 0 !== e || void 0 !== n) {
                      var f = this.getDeltaType(e, o),
                        l =
                          "node" === f
                            ? "a" === e._t
                              ? "array"
                              : "object"
                            : "";
                      void 0 !== n
                        ? this.nodeBegin(t, n, i, f, l, a)
                        : this.rootBegin(t, f, l);
                      try {
                        (
                          this["format_" + f] ||
                          this.typeFormattterNotFound(t, f)
                        ).call(this, t, e, s, n, i, o);
                      } catch (r) {
                        this.typeFormattterErrorFormatter(t, r, e, s, n, i, o),
                          "undefined" != typeof console &&
                            console.error &&
                            console.error(r.stack);
                      }
                      void 0 !== n
                        ? this.nodeEnd(t, n, i, f, l, a)
                        : this.rootEnd(t, f, l);
                    }
                  },
                },
                {
                  key: "formatDeltaChildren",
                  value: function (t, e, r) {
                    var n = this;
                    this.forEachDeltaKey(e, r, function (i, o, a, s) {
                      n.recurse(t, e[i], r ? r[o] : void 0, i, o, a, s);
                    });
                  },
                },
                {
                  key: "forEachDeltaKey",
                  value: function (t, e, r) {
                    var n = X(t),
                      i = "a" === t._t,
                      o = {},
                      a = void 0;
                    if (void 0 !== e)
                      for (a in e)
                        Object.prototype.hasOwnProperty.call(e, a) &&
                          void 0 === t[a] &&
                          (!i || void 0 === t["_" + a]) &&
                          n.push(a);
                    for (a in t)
                      if (Object.prototype.hasOwnProperty.call(t, a)) {
                        var s = t[a];
                        W(s) &&
                          3 === s[2] &&
                          ((o[s[1].toString()] = {
                            key: a,
                            value: e && e[parseInt(a.substr(1))],
                          }),
                          !1 !== this.includeMoveDestinations &&
                            void 0 === e &&
                            void 0 === t[s[1]] &&
                            n.push(s[1].toString()));
                      }
                    i ? n.sort(te) : n.sort();
                    for (var f = 0, l = n.length; f < l; f++) {
                      var u = n[f];
                      if (!i || "_t" !== u) {
                        var h = i
                            ? "number" == typeof u
                              ? u
                              : parseInt(
                                  "_" === u.substr(0, 1) ? u.slice(1) : u,
                                  10
                                )
                            : u,
                          c = f === l - 1;
                        r(u, h, o[h], c);
                      }
                    }
                  },
                },
                {
                  key: "getDeltaType",
                  value: function (t, e) {
                    if (void 0 === t)
                      return void 0 !== e ? "movedestination" : "unchanged";
                    if (W(t)) {
                      if (1 === t.length) return "added";
                      if (2 === t.length) return "modified";
                      if (3 === t.length && 0 === t[2]) return "deleted";
                      if (3 === t.length && 2 === t[2]) return "textdiff";
                      if (3 === t.length && 3 === t[2]) return "moved";
                    } else if ((void 0 === t ? "undefined" : n(t)) === "object")
                      return "node";
                    return "unknown";
                  },
                },
                {
                  key: "parseTextDiff",
                  value: function (t) {
                    for (
                      var e = [], r = t.split("\n@@ "), n = 0, i = r.length;
                      n < i;
                      n++
                    ) {
                      var o = r[n],
                        a = { pieces: [] },
                        s = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(o).slice(1);
                      a.location = { line: s[0], chr: s[1] };
                      for (
                        var f = o.split("\n").slice(1), l = 0, u = f.length;
                        l < u;
                        l++
                      ) {
                        var h = f[l];
                        if (h.length) {
                          var c = { type: "context" };
                          "+" === h.substr(0, 1)
                            ? (c.type = "added")
                            : "-" === h.substr(0, 1) && (c.type = "deleted"),
                            (c.text = h.slice(1)),
                            a.pieces.push(c);
                        }
                      }
                      e.push(a);
                    }
                    return e;
                  },
                },
              ]),
              t
            );
          })(),
          tn = Object.freeze({ default: tr }),
          ti = (function (t) {
            function e() {
              return (
                i(this, e),
                f(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              s(e, t),
              o(e, [
                {
                  key: "typeFormattterErrorFormatter",
                  value: function (t, e) {
                    t.out('<pre class="jsondiffpatch-error">' + e + "</pre>");
                  },
                },
                {
                  key: "formatValue",
                  value: function (t, e) {
                    t.out("<pre>" + to(JSON.stringify(e, null, 2)) + "</pre>");
                  },
                },
                {
                  key: "formatTextDiffString",
                  value: function (t, e) {
                    var r = this.parseTextDiff(e);
                    t.out('<ul class="jsondiffpatch-textdiff">');
                    for (var n = 0, i = r.length; n < i; n++) {
                      var o = r[n];
                      t.out(
                        '<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">' +
                          o.location.line +
                          '</span><span class="jsondiffpatch-textdiff-char">' +
                          o.location.chr +
                          '</span></div><div class="jsondiffpatch-textdiff-line">'
                      );
                      for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                        var l = a[s];
                        t.out(
                          '<span class="jsondiffpatch-textdiff-' +
                            l.type +
                            '">' +
                            to(decodeURI(l.text)) +
                            "</span>"
                        );
                      }
                      t.out("</div></li>");
                    }
                    t.out("</ul>");
                  },
                },
                {
                  key: "rootBegin",
                  value: function (t, e, r) {
                    t.out(
                      '<div class="jsondiffpatch-delta jsondiffpatch-' +
                        e +
                        (r ? " jsondiffpatch-child-node-type-" + r : "") +
                        '">'
                    );
                  },
                },
                {
                  key: "rootEnd",
                  value: function (t) {
                    t.out(
                      "</div>" +
                        (t.hasArrows
                          ? '<script type="text/javascript">setTimeout(' +
                            ta.toString() +
                            ",10);</script>"
                          : "")
                    );
                  },
                },
                {
                  key: "nodeBegin",
                  value: function (t, e, r, n, i) {
                    t.out(
                      '<li class="jsondiffpatch-' +
                        n +
                        (i ? " jsondiffpatch-child-node-type-" + i : "") +
                        '" data-key="' +
                        r +
                        '"><div class="jsondiffpatch-property-name">' +
                        r +
                        "</div>"
                    );
                  },
                },
                {
                  key: "nodeEnd",
                  value: function (t) {
                    t.out("</li>");
                  },
                },
                {
                  key: "format_unchanged",
                  value: function (t, e, r) {
                    void 0 !== r &&
                      (t.out('<div class="jsondiffpatch-value">'),
                      this.formatValue(t, r),
                      t.out("</div>"));
                  },
                },
                {
                  key: "format_movedestination",
                  value: function (t, e, r) {
                    void 0 !== r &&
                      (t.out('<div class="jsondiffpatch-value">'),
                      this.formatValue(t, r),
                      t.out("</div>"));
                  },
                },
                {
                  key: "format_node",
                  value: function (t, e, r) {
                    var n = "a" === e._t ? "array" : "object";
                    t.out(
                      '<ul class="jsondiffpatch-node jsondiffpatch-node-type-' +
                        n +
                        '">'
                    ),
                      this.formatDeltaChildren(t, e, r),
                      t.out("</ul>");
                  },
                },
                {
                  key: "format_added",
                  value: function (t, e) {
                    t.out('<div class="jsondiffpatch-value">'),
                      this.formatValue(t, e[0]),
                      t.out("</div>");
                  },
                },
                {
                  key: "format_modified",
                  value: function (t, e) {
                    t.out(
                      '<div class="jsondiffpatch-value jsondiffpatch-left-value">'
                    ),
                      this.formatValue(t, e[0]),
                      t.out(
                        '</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'
                      ),
                      this.formatValue(t, e[1]),
                      t.out("</div>");
                  },
                },
                {
                  key: "format_deleted",
                  value: function (t, e) {
                    t.out('<div class="jsondiffpatch-value">'),
                      this.formatValue(t, e[0]),
                      t.out("</div>");
                  },
                },
                {
                  key: "format_moved",
                  value: function (t, e) {
                    t.out('<div class="jsondiffpatch-value">'),
                      this.formatValue(t, e[0]),
                      t.out(
                        '</div><div class="jsondiffpatch-moved-destination">' +
                          e[1] +
                          "</div>"
                      ),
                      t.out(
                        '<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'
                      ),
                      (t.hasArrows = !0);
                  },
                },
                {
                  key: "format_textdiff",
                  value: function (t, e) {
                    t.out('<div class="jsondiffpatch-value">'),
                      this.formatTextDiffString(t, e[0]),
                      t.out("</div>");
                  },
                },
              ]),
              e
            );
          })(tr);
        function to(t) {
          for (
            var e = t,
              r = [
                [/&/g, "&amp;"],
                [/</g, "&lt;"],
                [/>/g, "&gt;"],
                [/'/g, "&apos;"],
                [/"/g, "&quot;"],
              ],
              n = 0;
            n < r.length;
            n++
          )
            e = e.replace(r[n][0], r[n][1]);
          return e;
        }
        var ta = function (t) {
            var e = function (t) {
                var e = t.textContent,
                  r = t.innerText;
                return e || r;
              },
              r = function (t, e) {
                for (var r = t.children, n = 0, i = r.length; n < i; n++)
                  e(r[n], n);
              };
            !(function (t, e, r) {
              for (
                var n = t.querySelectorAll(e), i = 0, o = n.length;
                i < o;
                i++
              )
                r(n[i]);
            })(t || document, ".jsondiffpatch-arrow", function (t) {
              var n = t.parentNode,
                i = t.children,
                o = t.style,
                a = i[0],
                s = a.children[1];
              a.style.display = "none";
              var f = e(n.querySelector(".jsondiffpatch-moved-destination")),
                l = n.parentNode,
                u = void 0;
              if (
                (r(l, function (t) {
                  t.getAttribute("data-key") === f && (u = t);
                }),
                u)
              )
                try {
                  var h = u.offsetTop - n.offsetTop;
                  a.setAttribute("height", Math.abs(h) + 6),
                    (o.top = -8 + (h > 0 ? 0 : h) + "px"),
                    s.setAttribute(
                      "d",
                      h > 0
                        ? "M30,0 Q-10," + Math.round(h / 2) + " 26," + (h - 4)
                        : "M30," + -h + " Q-10," + Math.round(-h / 2) + " 26,4"
                    ),
                    (a.style.display = "");
                } catch (t) {}
            });
          },
          ts = function (t, e, r) {
            var n = e || document.body,
              i = "jsondiffpatch-unchanged-",
              o = {
                showing: i + "showing",
                hiding: i + "hiding",
                visible: i + "visible",
                hidden: i + "hidden",
              },
              a = n.classList;
            if (a) {
              if (!r) {
                a.remove(o.showing),
                  a.remove(o.hiding),
                  a.remove(o.visible),
                  a.remove(o.hidden),
                  !1 === t && a.add(o.hidden);
                return;
              }
              !1 === t
                ? (a.remove(o.showing),
                  a.add(o.visible),
                  setTimeout(function () {
                    a.add(o.hiding);
                  }, 10))
                : (a.remove(o.hiding), a.add(o.showing), a.remove(o.hidden));
              var s = setInterval(function () {
                ta(n);
              }, 100);
              setTimeout(function () {
                a.remove(o.showing),
                  a.remove(o.hiding),
                  !1 === t
                    ? (a.add(o.hidden), a.remove(o.visible))
                    : (a.add(o.visible), a.remove(o.hidden)),
                  setTimeout(function () {
                    a.remove(o.visible), clearInterval(s);
                  }, r + 400);
              }, r);
            }
          },
          tf = void 0,
          tl = Object.freeze({
            showUnchanged: ts,
            hideUnchanged: function (t, e) {
              return ts(!1, t, e);
            },
            default: ti,
            format: function (t, e) {
              return tf || (tf = new ti()), tf.format(t, e);
            },
          }),
          tu = (function (t) {
            function e() {
              i(this, e);
              var t = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (t.includeMoveDestinations = !1), t;
            }
            return (
              s(e, t),
              o(e, [
                {
                  key: "prepareContext",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "prepareContext",
                      this
                    ).call(this, t),
                      (t.indent = function (t) {
                        (this.indentLevel =
                          (this.indentLevel || 0) + (void 0 === t ? 1 : t)),
                          (this.indentPad = Array(this.indentLevel + 1).join(
                            "&nbsp;&nbsp;"
                          ));
                      }),
                      (t.row = function (e, r) {
                        t.out(
                          '<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">'
                        ),
                          t.out(t.indentPad),
                          t.out('</pre><pre style="display: inline-block">'),
                          t.out(e),
                          t.out(
                            '</pre></td><td class="jsondiffpatch-delta-note"><div>'
                          ),
                          t.out(r),
                          t.out("</div></td></tr>");
                      });
                  },
                },
                {
                  key: "typeFormattterErrorFormatter",
                  value: function (t, e) {
                    t.row(
                      "",
                      '<pre class="jsondiffpatch-error">' + e + "</pre>"
                    );
                  },
                },
                {
                  key: "formatTextDiffString",
                  value: function (t, e) {
                    var r = this.parseTextDiff(e);
                    t.out('<ul class="jsondiffpatch-textdiff">');
                    for (var n = 0, i = r.length; n < i; n++) {
                      var o = r[n];
                      t.out(
                        '<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">' +
                          o.location.line +
                          '</span><span class="jsondiffpatch-textdiff-char">' +
                          o.location.chr +
                          '</span></div><div class="jsondiffpatch-textdiff-line">'
                      );
                      for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                        var l = a[s];
                        t.out(
                          '<span class="jsondiffpatch-textdiff-' +
                            l.type +
                            '">' +
                            l.text +
                            "</span>"
                        );
                      }
                      t.out("</div></li>");
                    }
                    t.out("</ul>");
                  },
                },
                {
                  key: "rootBegin",
                  value: function (t, e, r) {
                    t.out('<table class="jsondiffpatch-annotated-delta">'),
                      "node" === e && (t.row("{"), t.indent()),
                      "array" === r &&
                        t.row(
                          '"_t": "a",',
                          "Array delta (member names indicate array indices)"
                        );
                  },
                },
                {
                  key: "rootEnd",
                  value: function (t, e) {
                    "node" === e && (t.indent(-1), t.row("}")),
                      t.out("</table>");
                  },
                },
                {
                  key: "nodeBegin",
                  value: function (t, e, r, n, i) {
                    t.row("&quot;" + e + "&quot;: {"),
                      "node" === n && t.indent(),
                      "array" === i &&
                        t.row(
                          '"_t": "a",',
                          "Array delta (member names indicate array indices)"
                        );
                  },
                },
                {
                  key: "nodeEnd",
                  value: function (t, e, r, n, i, o) {
                    "node" === n && t.indent(-1), t.row("}" + (o ? "" : ","));
                  },
                },
                { key: "format_unchanged", value: function () {} },
                { key: "format_movedestination", value: function () {} },
                {
                  key: "format_node",
                  value: function (t, e, r) {
                    this.formatDeltaChildren(t, e, r);
                  },
                },
              ]),
              e
            );
          })(tr),
          th = function (t) {
            return (
              '<pre style="display:inline-block">&quot;' + t + "&quot;</pre>"
            );
          },
          tc = {
            added: function (t, e, r, n) {
              var i = " <pre>([newValue])</pre>";
              return void 0 === n
                ? "new value" + i
                : "number" == typeof n
                  ? "insert at index " + n + i
                  : "add property " + th(n) + i;
            },
            modified: function (t, e, r, n) {
              var i = " <pre>([previousValue, newValue])</pre>";
              return void 0 === n
                ? "modify value" + i
                : "number" == typeof n
                  ? "modify at index " + n + i
                  : "modify property " + th(n) + i;
            },
            deleted: function (t, e, r, n) {
              var i = " <pre>([previousValue, 0, 0])</pre>";
              return void 0 === n
                ? "delete value" + i
                : "number" == typeof n
                  ? "remove index " + n + i
                  : "delete property " + th(n) + i;
            },
            moved: function (t, e, r, n) {
              return (
                'move from <span title="(position to remove at original state)">index ' +
                n +
                '</span> to <span title="(position to insert at final state)">index ' +
                t[1] +
                "</span>"
              );
            },
            textdiff: function (t, e, r, n) {
              return (
                "text diff" +
                (void 0 === n
                  ? ""
                  : "number" == typeof n
                    ? " at index " + n
                    : " at property " + th(n)) +
                ', format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>'
              );
            },
          },
          td = function (t, e) {
            var r = this.getDeltaType(e),
              n = tc[r],
              i = n && n.apply(n, Array.prototype.slice.call(arguments, 1)),
              o = JSON.stringify(e, null, 2);
            "textdiff" === r && (o = o.split("\\n").join('\\n"+\n   "')),
              t.indent(),
              t.row(o, i),
              t.indent(-1);
          };
        (tu.prototype.format_added = td),
          (tu.prototype.format_modified = td),
          (tu.prototype.format_deleted = td),
          (tu.prototype.format_moved = td),
          (tu.prototype.format_textdiff = td);
        var tp = void 0,
          tv = Object.freeze({
            default: tu,
            format: function (t, e) {
              return tp || (tp = new tu()), tp.format(t, e);
            },
          }),
          tg = (function (t) {
            function e() {
              i(this, e);
              var t = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (t.includeMoveDestinations = !0), t;
            }
            return (
              s(e, t),
              o(e, [
                {
                  key: "prepareContext",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "prepareContext",
                      this
                    ).call(this, t),
                      (t.result = []),
                      (t.path = []),
                      (t.pushCurrentOp = function (t) {
                        var e = t.op,
                          r = t.value,
                          n = { op: e, path: this.currentPath() };
                        void 0 !== r && (n.value = r), this.result.push(n);
                      }),
                      (t.pushMoveOp = function (t) {
                        var e = this.currentPath();
                        this.result.push({
                          op: "move",
                          from: e,
                          path: this.toPath(t),
                        });
                      }),
                      (t.currentPath = function () {
                        return "/" + this.path.join("/");
                      }),
                      (t.toPath = function (t) {
                        var e = this.path.slice();
                        return (e[e.length - 1] = t), "/" + e.join("/");
                      });
                  },
                },
                {
                  key: "typeFormattterErrorFormatter",
                  value: function (t, e) {
                    t.out("[ERROR] " + e);
                  },
                },
                { key: "rootBegin", value: function () {} },
                { key: "rootEnd", value: function () {} },
                {
                  key: "nodeBegin",
                  value: function (t, e, r) {
                    t.path.push(r);
                  },
                },
                {
                  key: "nodeEnd",
                  value: function (t) {
                    t.path.pop();
                  },
                },
                { key: "format_unchanged", value: function () {} },
                { key: "format_movedestination", value: function () {} },
                {
                  key: "format_node",
                  value: function (t, e, r) {
                    this.formatDeltaChildren(t, e, r);
                  },
                },
                {
                  key: "format_added",
                  value: function (t, e) {
                    t.pushCurrentOp({ op: "add", value: e[0] });
                  },
                },
                {
                  key: "format_modified",
                  value: function (t, e) {
                    t.pushCurrentOp({ op: "replace", value: e[1] });
                  },
                },
                {
                  key: "format_deleted",
                  value: function (t) {
                    t.pushCurrentOp({ op: "remove" });
                  },
                },
                {
                  key: "format_moved",
                  value: function (t, e) {
                    var r = e[1];
                    t.pushMoveOp(r);
                  },
                },
                {
                  key: "format_textdiff",
                  value: function () {
                    throw Error("Not implemented");
                  },
                },
                {
                  key: "format",
                  value: function (t, e) {
                    var r = {};
                    return (
                      this.prepareContext(r), this.recurse(r, t, e), r.result
                    );
                  },
                },
              ]),
              e
            );
          })(tr),
          ty = function (t) {
            return t[t.length - 1];
          },
          tm = function (t, e) {
            var r = parseInt(t, 10),
              n = parseInt(e, 10);
            return isNaN(r) || isNaN(n) ? 0 : n - r;
          },
          t_ = function (t, e) {
            var r = Array(e.length + 1)
              .fill()
              .map(function () {
                return [];
              });
            return t
              .map(function (t) {
                var r = e
                  .map(function (e) {
                    return e(t);
                  })
                  .indexOf(!0);
                return r < 0 && (r = e.length), { item: t, position: r };
              })
              .reduce(function (t, e) {
                return t[e.position].push(e.item), t;
              }, r);
          },
          tb = function (t) {
            return "move" === t.op;
          },
          tx = function (t) {
            return "remove" === t.op;
          },
          tw = function (t) {
            var e,
              r = l(t_(t, [tb, tx]), 3),
              n = r[0],
              i = r[1],
              o = r[2];
            return [].concat(
              u(
                ((e = i).sort(function (t, e) {
                  var r = t.path.split("/"),
                    n = e.path.split("/");
                  return r.length !== n.length
                    ? r.length - n.length
                    : tm(ty(r), ty(n));
                }),
                e)
              ),
              u(n),
              u(o)
            );
          },
          tk = void 0,
          tj = function (t, e) {
            return tk || (tk = new tg()), tw(tk.format(t, e));
          },
          tO = Object.freeze({
            default: tg,
            partitionOps: t_,
            format: tj,
            log: function (t, e) {
              console.log(tj(t, e));
            },
          });
        function tA(t) {
          return (
            (e && e[t]) ||
            function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              return e;
            }
          );
        }
        var tE = {
            added: tA("green"),
            deleted: tA("red"),
            movedestination: tA("gray"),
            moved: tA("yellow"),
            unchanged: tA("gray"),
            error: tA("white.bgRed"),
            textDiffLine: tA("gray"),
          },
          tM = (function (t) {
            function e() {
              i(this, e);
              var t = f(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (t.includeMoveDestinations = !1), t;
            }
            return (
              s(e, t),
              o(e, [
                {
                  key: "prepareContext",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "prepareContext",
                      this
                    ).call(this, t),
                      (t.indent = function (t) {
                        (this.indentLevel =
                          (this.indentLevel || 0) + (void 0 === t ? 1 : t)),
                          (this.indentPad = Array(this.indentLevel + 1).join(
                            "  "
                          )),
                          this.outLine();
                      }),
                      (t.outLine = function () {
                        this.buffer.push("\n" + (this.indentPad || ""));
                      }),
                      (t.out = function () {
                        for (
                          var t = arguments.length, e = Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        for (var n = 0, i = e.length; n < i; n++) {
                          var o = e[n]
                            .split("\n")
                            .join("\n" + (this.indentPad || ""));
                          this.color && this.color[0] && (o = this.color[0](o)),
                            this.buffer.push(o);
                        }
                      }),
                      (t.pushColor = function (t) {
                        (this.color = this.color || []), this.color.unshift(t);
                      }),
                      (t.popColor = function () {
                        (this.color = this.color || []), this.color.shift();
                      });
                  },
                },
                {
                  key: "typeFormattterErrorFormatter",
                  value: function (t, e) {
                    t.pushColor(tE.error), t.out("[ERROR]" + e), t.popColor();
                  },
                },
                {
                  key: "formatValue",
                  value: function (t, e) {
                    t.out(JSON.stringify(e, null, 2));
                  },
                },
                {
                  key: "formatTextDiffString",
                  value: function (t, e) {
                    var r = this.parseTextDiff(e);
                    t.indent();
                    for (var n = 0, i = r.length; n < i; n++) {
                      var o = r[n];
                      t.pushColor(tE.textDiffLine),
                        t.out(o.location.line + "," + o.location.chr + " "),
                        t.popColor();
                      for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                        var l = a[s];
                        t.pushColor(tE[l.type]), t.out(l.text), t.popColor();
                      }
                      n < i - 1 && t.outLine();
                    }
                    t.indent(-1);
                  },
                },
                {
                  key: "rootBegin",
                  value: function (t, e, r) {
                    t.pushColor(tE[e]),
                      "node" === e &&
                        (t.out("array" === r ? "[" : "{"), t.indent());
                  },
                },
                {
                  key: "rootEnd",
                  value: function (t, e, r) {
                    "node" === e &&
                      (t.indent(-1), t.out("array" === r ? "]" : "}")),
                      t.popColor();
                  },
                },
                {
                  key: "nodeBegin",
                  value: function (t, e, r, n, i) {
                    t.pushColor(tE[n]),
                      t.out(r + ": "),
                      "node" === n &&
                        (t.out("array" === i ? "[" : "{"), t.indent());
                  },
                },
                {
                  key: "nodeEnd",
                  value: function (t, e, r, n, i, o) {
                    "node" === n &&
                      (t.indent(-1),
                      t.out("array" === i ? "]" : "}" + (o ? "" : ","))),
                      o || t.outLine(),
                      t.popColor();
                  },
                },
                {
                  key: "format_unchanged",
                  value: function (t, e, r) {
                    void 0 !== r && this.formatValue(t, r);
                  },
                },
                {
                  key: "format_movedestination",
                  value: function (t, e, r) {
                    void 0 !== r && this.formatValue(t, r);
                  },
                },
                {
                  key: "format_node",
                  value: function (t, e, r) {
                    this.formatDeltaChildren(t, e, r);
                  },
                },
                {
                  key: "format_added",
                  value: function (t, e) {
                    this.formatValue(t, e[0]);
                  },
                },
                {
                  key: "format_modified",
                  value: function (t, e) {
                    t.pushColor(tE.deleted),
                      this.formatValue(t, e[0]),
                      t.popColor(),
                      t.out(" => "),
                      t.pushColor(tE.added),
                      this.formatValue(t, e[1]),
                      t.popColor();
                  },
                },
                {
                  key: "format_deleted",
                  value: function (t, e) {
                    this.formatValue(t, e[0]);
                  },
                },
                {
                  key: "format_moved",
                  value: function (t, e) {
                    t.out("==> " + e[1]);
                  },
                },
                {
                  key: "format_textdiff",
                  value: function (t, e) {
                    this.formatTextDiffString(t, e[0]);
                  },
                },
              ]),
              e
            );
          })(tr),
          tC = void 0,
          tP = function (t, e) {
            return tC || (tC = new tM()), tC.format(t, e);
          },
          tR = Object.freeze({
            default: tM,
            format: tP,
            log: function (t, e) {
              console.log(tP(t, e));
            },
          }),
          tD = Object.freeze({
            base: tn,
            html: tl,
            annotated: tv,
            jsonpatch: tO,
            console: tR,
          }),
          tT = void 0;
        (t.DiffPatcher = Z),
          (t.formatters = tD),
          (t.console = tR),
          (t.create = function (t) {
            return new Z(t);
          }),
          (t.dateReviver = function (t, e) {
            var r = void 0;
            return "string" == typeof e &&
              (r =
                /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(
                  e
                ))
              ? new Date(
                  Date.UTC(
                    +r[1],
                    +r[2] - 1,
                    +r[3],
                    +r[4],
                    +r[5],
                    +r[6],
                    +(r[7] || 0)
                  )
                )
              : e;
          }),
          (t.diff = function () {
            return tT || (tT = new Z()), tT.diff.apply(tT, arguments);
          }),
          (t.patch = function () {
            return tT || (tT = new Z()), tT.patch.apply(tT, arguments);
          }),
          (t.unpatch = function () {
            return tT || (tT = new Z()), tT.unpatch.apply(tT, arguments);
          }),
          (t.reverse = function () {
            return tT || (tT = new Z()), tT.reverse.apply(tT, arguments);
          }),
          (t.clone = function () {
            return tT || (tT = new Z()), tT.clone.apply(tT, arguments);
          }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e, r(97426));
    },
    68175: function (t, e, r) {
      "use strict";
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      r.d(e, {
        $: function () {
          return i;
        },
      });
      var i = (function () {
        var t;
        function e() {
          var t, r;
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, e),
            (r = void 0),
            (t = "task") in this
              ? Object.defineProperty(this, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (this[t] = r);
        }
        return (
          n(e.prototype, [
            {
              key: "request",
              value: function () {
                this.cancel();
                var t =
                  window.requestIdleCallback || window.requestAnimationFrame;
                return new Promise(function (e) {
                  return t(e);
                });
              },
            },
            {
              key: "cancel",
              value: function () {
                var t = window.cancelIdleCallack || window.cancelAnimationFrame;
                this.task && t(this.task);
              },
            },
          ]),
          t && n(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      })();
    },
    5502: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          JsonDiffMain: function () {
            return u;
          },
        });
      var n = r(90171),
        i = r(68175);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          s = i.iterator || "@@iterator",
          f = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function h(t, e, r, i) {
          var o,
            a,
            s = Object.create(
              (e && e.prototype instanceof p ? e : p).prototype
            );
          return (
            n(s, "_invoke", {
              value:
                ((o = new O(i || [])),
                (a = "suspendedStart"),
                function (e, n) {
                  if ("executing" === a)
                    throw Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === e) throw n;
                    return E();
                  }
                  for (o.method = e, o.arg = n; ; ) {
                    var i = o.delegate;
                    if (i) {
                      var s = (function t(e, r) {
                        var n = e.iterator[r.method];
                        if (void 0 === n) {
                          if (((r.delegate = null), "throw" === r.method)) {
                            if (
                              e.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              t(e, r),
                              "throw" === r.method)
                            )
                              return d;
                            (r.method = "throw"),
                              (r.arg = TypeError(
                                "The iterator does not provide a 'throw' method"
                              ));
                          }
                          return d;
                        }
                        var i = c(n, e.iterator, r.arg);
                        if ("throw" === i.type)
                          return (
                            (r.method = "throw"),
                            (r.arg = i.arg),
                            (r.delegate = null),
                            d
                          );
                        var o = i.arg;
                        return o
                          ? o.done
                            ? ((r[e.resultName] = o.value),
                              (r.next = e.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              d)
                            : o
                          : ((r.method = "throw"),
                            (r.arg = TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            d);
                      })(i, o);
                      if (s) {
                        if (s === d) continue;
                        return s;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var f = c(t, r, o);
                    if ("normal" === f.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        f.arg === d)
                      )
                        continue;
                      return { value: f.arg, done: o.done };
                    }
                    "throw" === f.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = f.arg));
                  }
                }),
            }),
            s
          );
        }
        function c(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = h;
        var d = {};
        function p() {}
        function v() {}
        function g() {}
        var y = {};
        u(y, s, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          _ = m && m(m(A([])));
        _ && _ !== e && r.call(_, s) && (y = _);
        var b = (g.prototype = p.prototype = Object.create(y));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var i;
          n(this, "_invoke", {
            value: function (n, a) {
              function s() {
                return new e(function (i, s) {
                  !(function n(i, a, s, f) {
                    var l = c(t[i], t, a);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        h = u.value;
                      return h && "object" == o(h) && r.call(h, "__await")
                        ? e.resolve(h.__await).then(
                            function (t) {
                              n("next", t, s, f);
                            },
                            function (t) {
                              n("throw", t, s, f);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (u.value = t), s(u);
                            },
                            function (t) {
                              return n("throw", t, s, f);
                            }
                          );
                    }
                    f(l.arg);
                  })(n, a, i, s);
                });
              }
              return (i = i ? i.then(s, s) : s());
            },
          });
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function A(t) {
          if (t) {
            var e = t[s];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = g),
          n(b, "constructor", { value: g, configurable: !0 }),
          n(g, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(g, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(w.prototype),
          u(w.prototype, f, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new w(h(e, r, n, i), o);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(b),
          u(b, l, "Generator"),
          u(b, s, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = A),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    f = r.call(o, "finallyLoc");
                  if (s && f) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!f)
                      throw Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), j(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    j(r);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: A(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
      function s(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            f = s.value;
        } catch (t) {
          r(t);
          return;
        }
        s.done ? e(f) : Promise.resolve(f).then(n, i);
      }
      function f(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function l(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var u = (function () {
        var t, e, r, o;
        function u() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, u),
            l(
              this,
              "diffPatcher",
              new n.DiffPatcher({
                arrays: { detectMove: !1, includeValueOnMove: !1 },
                textDiff: { minLength: 1 },
              })
            ),
            l(this, "scheduler", new i.$());
        }
        return (
          (r = [
            {
              key: "diff",
              value:
                ((t = a().mark(function t(e) {
                  return a().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this.scheduler.request();
                          case 2:
                            return t.abrupt("return", {
                              id: e.id,
                              delta: this.diffPatcher.diff(e.a, e.b),
                            });
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })),
                (e = function () {
                  var e = this,
                    r = arguments;
                  return new Promise(function (n, i) {
                    var o = t.apply(e, r);
                    function a(t) {
                      s(o, n, i, a, f, "next", t);
                    }
                    function f(t) {
                      s(o, n, i, a, f, "throw", t);
                    }
                    a(void 0);
                  });
                }),
                function (t) {
                  return e.apply(this, arguments);
                }),
            },
          ]),
          f(u.prototype, r),
          o && f(u, o),
          Object.defineProperty(u, "prototype", { writable: !1 }),
          u
        );
      })();
    },
  },
]);
//# sourceMappingURL=5502.cfdf540aa5fc6912.js.map
