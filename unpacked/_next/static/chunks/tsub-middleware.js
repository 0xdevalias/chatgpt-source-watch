(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4604],
  {
    61127: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          tsubMiddleware: function () {
            return o;
          },
        });
      var n = e(27680),
        o = function (t) {
          return function (r) {
            var e = r.payload,
              o = r.integration,
              i = r.next;
            new n.Store(t).getRulesByDestinationName(o).forEach(function (t) {
              for (
                var r = t.matchers, o = t.transformers, u = 0;
                u < r.length;
                u++
              )
                if (
                  n.matches(e.obj, r[u]) &&
                  ((e.obj = n.transform(e.obj, o[u])), null === e.obj)
                )
                  return i(null);
            }),
              i(e);
          };
        };
    },
    27680: function (t, r, e) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Store = r.matches = r.transform = void 0);
      var o = e(30148);
      Object.defineProperty(r, "transform", {
        enumerable: !0,
        get: function () {
          return n(o).default;
        },
      });
      var i = e(64990);
      Object.defineProperty(r, "matches", {
        enumerable: !0,
        get: function () {
          return n(i).default;
        },
      });
      var u = e(98983);
      Object.defineProperty(r, "Store", {
        enumerable: !0,
        get: function () {
          return n(u).default;
        },
      });
    },
    64990: function (t, r, e) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = n(e(53098));
      function i(t, r) {
        return Array.isArray(t)
          ? t
          : "object" == typeof t
            ? t.value
            : (0, o.default)(r, t);
      }
      function u(t) {
        return (
          !!Array.isArray(t) &&
          ((("lowercase" === t[0] || "length" === t[0] || "typeof" === t[0]) &&
            2 === t.length) ||
            (("contains" === t[0] || "match" === t[0]) && 3 === t.length))
        );
      }
      function s(t, r) {
        for (var e, n, o = { t: "", ok: !1, err: !1 }; t.length > 0; ) {
          if (0 === r.length) return o;
          switch (t[0]) {
            case "[":
              var i = r[0];
              r = r.slice(1);
              var u = !0;
              (t = t.slice(1)).length > 0 &&
                "^" === t[0] &&
                ((u = !1), (t = t.slice(1)));
              for (var s = !1, a = 0; ; ) {
                if (t.length > 0 && "]" === t[0] && a > 0) {
                  t = t.slice(1);
                  break;
                }
                var f = "",
                  p = "";
                if (
                  ((f = (e = c(t)).char),
                  (t = e.newChunk),
                  e.err ||
                    ((p = f),
                    "-" === t[0] &&
                      ((p = (n = c(t.slice(1))).char),
                      (t = n.newChunk),
                      n.err)))
                )
                  return o;
                f <= i && i <= p && (s = !0), a++;
              }
              if (s !== u) return o;
              break;
            case "?":
              (r = r.slice(1)), (t = t.slice(1));
              break;
            case "\\":
              if (0 === (t = t.slice(1)).length) return (o.err = !0), o;
            default:
              if (t[0] !== r[0]) return o;
              (r = r.slice(1)), (t = t.slice(1));
          }
        }
        return (o.t = r), (o.ok = !0), (o.err = !1), o;
      }
      function c(t) {
        var r = { char: "", newChunk: "", err: !1 };
        return 0 === t.length ||
          "-" === t[0] ||
          "]" === t[0] ||
          ("\\" === t[0] && 0 === (t = t.slice(1)).length)
          ? ((r.err = !0), r)
          : ((r.char = t[0]),
            (r.newChunk = t.slice(1)),
            0 === r.newChunk.length && (r.err = !0),
            r);
      }
      r.default = function (t, r) {
        if (!r) throw Error("No matcher supplied!");
        switch (r.type) {
          case "all":
            return !0;
          case "fql":
            return (function (t, r) {
              if (!t) return !1;
              try {
                t = JSON.parse(t);
              } catch (r) {
                throw Error(
                  'Failed to JSON.parse FQL intermediate representation "'
                    .concat(t, '": ')
                    .concat(r)
                );
              }
              var e = (function t(r, e) {
                if (!Array.isArray(r)) return !0 === i(r, e);
                var n,
                  o,
                  c,
                  a,
                  f,
                  p,
                  l = r[0];
                switch (l) {
                  case "!":
                    return !t(r[1], e);
                  case "or":
                    for (var v = 1; v < r.length; v++)
                      if (t(r[v], e)) return !0;
                    return !1;
                  case "and":
                    for (var v = 1; v < r.length; v++)
                      if (!t(r[v], e)) return !1;
                    return !0;
                  case "=":
                  case "!=":
                    return (function (r, e, n, o) {
                      switch (
                        (u(r) && (r = t(r, o)),
                        u(e) && (e = t(e, o)),
                        "object" == typeof r &&
                          "object" == typeof e &&
                          ((r = JSON.stringify(r)), (e = JSON.stringify(e))),
                        n)
                      ) {
                        case "=":
                          return r === e;
                        case "!=":
                          return r !== e;
                        default:
                          throw Error(
                            "Invalid operator in compareItems: ".concat(n)
                          );
                      }
                    })(i(r[1], e), i(r[2], e), l, e);
                  case "<=":
                  case "<":
                  case ">":
                  case ">=":
                    return (function (r, e, n, o) {
                      if (
                        (u(r) && (r = t(r, o)),
                        u(e) && (e = t(e, o)),
                        "number" != typeof r || "number" != typeof e)
                      )
                        return !1;
                      switch (n) {
                        case "<=":
                          return r <= e;
                        case ">=":
                          return r >= e;
                        case "<":
                          return r < e;
                        case ">":
                          return r > e;
                        default:
                          throw Error(
                            "Invalid operator in compareNumbers: ".concat(n)
                          );
                      }
                    })(i(r[1], e), i(r[2], e), l, e);
                  case "in":
                    return (
                      (n = i(r[1], e)),
                      void 0 !==
                        i(r[2], e).find(function (t) {
                          return i(t, e) === n;
                        })
                    );
                  case "contains":
                    return (
                      (o = i(r[1], e)),
                      (c = i(r[2], e)),
                      "string" == typeof o &&
                        "string" == typeof c &&
                        -1 !== o.indexOf(c)
                    );
                  case "match":
                    return (
                      (a = i(r[1], e)),
                      (f = i(r[2], e)),
                      "string" == typeof a &&
                        "string" == typeof f &&
                        (function (t, r) {
                          var e, n;
                          t: for (; t.length > 0; ) {
                            var o = void 0,
                              i = void 0;
                            if (
                              ((o = (e = (function (t) {
                                for (
                                  var r,
                                    e = { star: !1, chunk: "", pattern: "" };
                                  t.length > 0 && "*" === t[0];
                                )
                                  (t = t.slice(1)), (e.star = !0);
                                var n = !1;
                                r: for (r = 0; r < t.length; r++)
                                  switch (t[r]) {
                                    case "\\":
                                      r + 1 < t.length && r++;
                                      break;
                                    case "[":
                                      n = !0;
                                      break;
                                    case "]":
                                      n = !1;
                                      break;
                                    case "*":
                                      if (!n) break r;
                                  }
                                return (
                                  (e.chunk = t.slice(0, r)),
                                  (e.pattern = t.slice(r)),
                                  e
                                );
                              })(t)).star),
                              (i = e.chunk),
                              (t = e.pattern),
                              o && "" === i)
                            )
                              return !0;
                            var u = s(i, r),
                              c = u.t,
                              a = u.ok,
                              f = u.err;
                            if (f) return !1;
                            if (a && (0 === c.length || t.length > 0)) {
                              r = c;
                              continue;
                            }
                            if (o)
                              for (var p = 0; p < r.length; p++) {
                                if (
                                  ((c = (n = s(i, r.slice(p + 1))).t),
                                  (a = n.ok),
                                  (f = n.err),
                                  a)
                                ) {
                                  if (0 === t.length && c.length > 0) continue;
                                  r = c;
                                  continue t;
                                }
                                if (f) break;
                              }
                            return !1;
                          }
                          return 0 === r.length;
                        })(f, a)
                    );
                  case "lowercase":
                    var y = i(r[1], e);
                    if ("string" != typeof y) return null;
                    return y.toLowerCase();
                  case "typeof":
                    return typeof i(r[1], e);
                  case "length":
                    return null === (p = i(r[1], e))
                      ? 0
                      : Array.isArray(p) || "string" == typeof p
                        ? p.length
                        : NaN;
                  default:
                    throw Error(
                      "FQL IR could not evaluate for token: ".concat(l)
                    );
                }
              })(t, r);
              return "boolean" == typeof e && e;
            })(r.ir, t);
          default:
            throw Error("Matcher of type ".concat(r.type, " unsupported."));
        }
      };
    },
    98983: function (t, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var e = (function () {
        function t(t) {
          (this.rules = []), (this.rules = t || []);
        }
        return (
          (t.prototype.getRulesByDestinationName = function (t) {
            for (var r = [], e = 0, n = this.rules; e < n.length; e++) {
              var o = n[e];
              (o.destinationName === t || void 0 === o.destinationName) &&
                r.push(o);
            }
            return r;
          }),
          t
        );
      })();
      r.default = e;
    },
    30148: function (t, r, e) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = n(e(85305)),
        i = n(e(53098)),
        u = n(e(37976)),
        s = e(55388),
        c = e(9031);
      function a(t, r, e) {
        Object.entries(r).forEach(function (r) {
          var n = r[0],
            o = r[1],
            u = function (t) {
              "object" == typeof t && null !== t && e(t, o);
            },
            s = "" === n ? t : (0, i.default)(t, n);
          Array.isArray(s) ? s.forEach(u) : u(s);
        });
      }
      function f(t, r) {
        for (var e = 0; e < 8; e++)
          for (var n = t[e], o = 128; o >= 1; o /= 2)
            n - o >= 0 ? ((n -= o), r.push(1)) : r.push(0);
      }
      r.default = function (t, r) {
        for (var e = 0; e < r.length; e++) {
          var n,
            p,
            l = r[e];
          switch (l.type) {
            case "drop":
              return null;
            case "drop_properties":
              a(t, l.config.drop, function (t, r) {
                r.forEach(function (r) {
                  return delete t[r];
                });
              });
              break;
            case "allow_properties":
              a(t, l.config.allow, function (t, r) {
                Object.keys(t).forEach(function (e) {
                  r.includes(e) || delete t[e];
                });
              });
              break;
            case "sample_event":
              if (
                ((n = t),
                !((p = l.config).sample.percent <= 0) &&
                  (p.sample.percent >= 1 ||
                    (p.sample.path
                      ? (function (t, r) {
                          var e = (0, i.default)(t, r.sample.path),
                            n = (0, o.default)(JSON.stringify(e)),
                            s = -64,
                            c = [];
                          f(n.slice(0, 8), c);
                          for (var a = 0, p = 0; p < 64 && 1 !== c[p]; p++) a++;
                          if (0 !== a) {
                            var l = [];
                            f(n.slice(9, 16), l),
                              (s -= a),
                              c.splice(0, a),
                              l.splice(64 - a),
                              (c = c.concat(l));
                          }
                          return (
                            (c[63] = 0 === c[63] ? 1 : 0),
                            (0, u.default)(parseInt(c.join(""), 2), s) <
                              r.sample.percent
                          );
                        })(n, p)
                      : Math.random() <= p.sample.percent)))
              )
                break;
              return null;
            case "map_properties":
              !(function (t, r) {
                var e = JSON.parse(JSON.stringify(t));
                for (var n in r.map)
                  if (r.map.hasOwnProperty(n)) {
                    var o = r.map[n],
                      u = n.split("."),
                      a = void 0;
                    if (
                      (u.length > 1
                        ? (u.pop(), (a = (0, i.default)(e, u.join("."))))
                        : (a = t),
                      "object" == typeof a)
                    ) {
                      if (o.copy) {
                        var f = (0, i.default)(e, o.copy);
                        void 0 !== f && (0, s.dset)(t, n, f);
                      } else if (o.move) {
                        var p = (0, i.default)(e, o.move);
                        void 0 !== p && (0, s.dset)(t, n, p),
                          (0, c.unset)(t, o.move);
                      } else
                        o.hasOwnProperty("set") && (0, s.dset)(t, n, o.set);
                      if (o.to_string) {
                        var l = (0, i.default)(t, n);
                        if (
                          "string" == typeof l ||
                          ("object" == typeof l && null !== l)
                        )
                          continue;
                        void 0 !== l
                          ? (0, s.dset)(t, n, JSON.stringify(l))
                          : (0, s.dset)(t, n, "undefined");
                      }
                    }
                  }
              })(t, l.config);
              break;
            case "hash_properties":
              break;
            default:
              throw Error(
                'Transformer of type "'.concat(l.type, '" is unsupported.')
              );
          }
        }
        return t;
      };
    },
    9031: function (t, r, e) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.unset = void 0);
      var o = n(e(53098));
      r.unset = function (t, r) {
        if ((0, o.default)(t, r)) {
          for (
            var e = r.split("."), n = e.pop();
            e.length && "\\" === e[e.length - 1].slice(-1);
          )
            n = e.pop().slice(0, -1) + "." + n;
          for (; e.length; ) t = t[(r = e.shift())];
          return delete t[n];
        }
        return !0;
      };
    },
    69911: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Float64Array ? Float64Array : void 0;
      t.exports = r;
    },
    6e4: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(72635),
        i = e(69911),
        u = e(73490);
      (n = o() ? i : u), (t.exports = n);
    },
    73490: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function () {
        throw Error("not implemented");
      };
    },
    27739: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(24239),
        i = e(65702),
        u = e(10838);
      (n = o() ? i : u), (t.exports = n);
    },
    10838: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function () {
        throw Error("not implemented");
      };
    },
    65702: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint16Array ? Uint16Array : void 0;
      t.exports = r;
    },
    65122: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(50570),
        i = e(61553),
        u = e(70041);
      (n = o() ? i : u), (t.exports = n);
    },
    70041: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function () {
        throw Error("not implemented");
      };
    },
    61553: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint32Array ? Uint32Array : void 0;
      t.exports = r;
    },
    65493: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(2440),
        i = e(5682),
        u = e(20668);
      (n = o() ? i : u), (t.exports = n);
    },
    20668: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function () {
        throw Error("not implemented");
      };
    },
    5682: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint8Array ? Uint8Array : void 0;
      t.exports = r;
    },
    29115: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Float64Array ? Float64Array : null;
      t.exports = r;
    },
    72635: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(79366);
      t.exports = n;
    },
    79366: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(10775),
        o = e(29115);
      t.exports = function () {
        var t, r;
        if ("function" != typeof o) return !1;
        try {
          (r = new o([1, 3.14, -3.14, NaN])),
            (t =
              n(r) &&
              1 === r[0] &&
              3.14 === r[1] &&
              -3.14 === r[2] &&
              r[3] != r[3]);
        } catch (r) {
          t = !1;
        }
        return t;
      };
    },
    61248: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(31271);
      t.exports = n;
    },
    31271: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        return null != t && r.call(t, e);
      };
    },
    91430: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(77e3);
      t.exports = n;
    },
    77e3: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function () {
        return "function" == typeof Symbol && "symbol" == typeof Symbol("foo");
      };
    },
    97995: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(43083);
      t.exports = n;
    },
    43083: function (t, r, e) {
      "use strict";
      var n = e(91430)();
      t.exports = function () {
        return n && "symbol" == typeof Symbol.toStringTag;
      };
    },
    24239: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(22330);
      t.exports = n;
    },
    22330: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(49882),
        o = e(57848),
        i = e(26860);
      t.exports = function () {
        var t, r;
        if ("function" != typeof i) return !1;
        try {
          (r = [1, 3.14, -3.14, o + 1, o + 2]),
            (r = new i(r)),
            (t =
              n(r) &&
              1 === r[0] &&
              3 === r[1] &&
              r[2] === o - 2 &&
              0 === r[3] &&
              1 === r[4]);
        } catch (r) {
          t = !1;
        }
        return t;
      };
    },
    26860: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint16Array ? Uint16Array : null;
      t.exports = r;
    },
    50570: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(4428);
      t.exports = n;
    },
    4428: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(5616),
        o = e(76189),
        i = e(69801);
      t.exports = function () {
        var t, r;
        if ("function" != typeof i) return !1;
        try {
          (r = [1, 3.14, -3.14, o + 1, o + 2]),
            (r = new i(r)),
            (t =
              n(r) &&
              1 === r[0] &&
              3 === r[1] &&
              r[2] === o - 2 &&
              0 === r[3] &&
              1 === r[4]);
        } catch (r) {
          t = !1;
        }
        return t;
      };
    },
    69801: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint32Array ? Uint32Array : null;
      t.exports = r;
    },
    2440: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(95753);
      t.exports = n;
    },
    95753: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(53532),
        o = e(996),
        i = e(9442);
      t.exports = function () {
        var t, r;
        if ("function" != typeof i) return !1;
        try {
          (r = [1, 3.14, -3.14, o + 1, o + 2]),
            (r = new i(r)),
            (t =
              n(r) &&
              1 === r[0] &&
              3 === r[1] &&
              r[2] === o - 2 &&
              0 === r[3] &&
              1 === r[4]);
        } catch (r) {
          t = !1;
        }
        return t;
      };
    },
    9442: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Uint8Array ? Uint8Array : null;
      t.exports = r;
    },
    10775: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(78628);
      t.exports = n;
    },
    78628: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(75429),
        o = "function" == typeof Float64Array;
      t.exports = function (t) {
        return (
          (o && t instanceof Float64Array) || "[object Float64Array]" === n(t)
        );
      };
    },
    15277: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(65493),
        o = e(27739);
      t.exports = { uint16: o, uint8: n };
    },
    43949: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(525);
      t.exports = n;
    },
    525: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o,
        i = e(15277);
      ((n = new i.uint16(1))[0] = 4660),
        (o = 52 === new i.uint8(n.buffer)[0]),
        (t.exports = o);
    },
    49882: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(74941);
      t.exports = n;
    },
    74941: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(75429),
        o = "function" == typeof Uint16Array;
      t.exports = function (t) {
        return (
          (o && t instanceof Uint16Array) || "[object Uint16Array]" === n(t)
        );
      };
    },
    5616: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(24922);
      t.exports = n;
    },
    24922: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(75429),
        o = "function" == typeof Uint32Array;
      t.exports = function (t) {
        return (
          (o && t instanceof Uint32Array) || "[object Uint32Array]" === n(t)
        );
      };
    },
    53532: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(6016);
      t.exports = n;
    },
    6016: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(75429),
        o = "function" == typeof Uint8Array;
      t.exports = function (t) {
        return (o && t instanceof Uint8Array) || "[object Uint8Array]" === n(t);
      };
    },
    72514: function (t) {
      "use strict";
      t.exports = 1023;
    },
    58334: function (t) {
      "use strict";
      t.exports = 2147483647;
    },
    93432: function (t) {
      "use strict";
      t.exports = 2146435072;
    },
    86093: function (t) {
      "use strict";
      t.exports = 2147483648;
    },
    95510: function (t) {
      "use strict";
      t.exports = -1023;
    },
    88670: function (t) {
      "use strict";
      t.exports = 1023;
    },
    62127: function (t) {
      "use strict";
      t.exports = -1074;
    },
    85659: function (t, r, e) {
      "use strict";
      var n = e(87979).NEGATIVE_INFINITY;
      t.exports = n;
    },
    24447: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = Number.POSITIVE_INFINITY;
      t.exports = r;
    },
    20138: function (t) {
      "use strict";
      t.exports = 22250738585072014e-324;
    },
    57848: function (t) {
      "use strict";
      t.exports = 65535;
    },
    76189: function (t) {
      "use strict";
      t.exports = 4294967295;
    },
    996: function (t) {
      "use strict";
      t.exports = 255;
    },
    93316: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(76405);
      t.exports = n;
    },
    76405: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(24447),
        o = e(85659);
      t.exports = function (t) {
        return t === n || t === o;
      };
    },
    15361: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(4815);
      t.exports = n;
    },
    4815: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function (t) {
        return t != t;
      };
    },
    71622: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(15042);
      t.exports = n;
    },
    15042: function (t) {
      "use strict";
      t.exports = /**
       * @license Apache-2.0
       *
       * Copyright (c) 2021 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function (t) {
        return Math.abs(t);
      };
    },
    39717: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(26170);
      t.exports = n;
    },
    26170: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(86093),
        o = e(58334),
        i = e(53017),
        u = e(29174),
        s = e(74285),
        c = [0, 0];
      t.exports = function (t, r) {
        var e;
        return i.assign(t, c, 1, 0), s((c[0] & o) | (u(r) & n), c[1]);
      };
    },
    37976: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(70217);
      t.exports = n;
    },
    70217: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(24447),
        o = e(85659),
        i = e(72514),
        u = e(88670),
        s = e(95510),
        c = e(62127),
        a = e(15361),
        f = e(93316),
        p = e(39717),
        l = e(52561),
        v = e(71213),
        y = e(53017),
        h = e(74285),
        d = [0, 0],
        x = [0, 0];
      t.exports = function (t, r) {
        var e;
        return 0 === t || a(t) || f(t)
          ? t
          : (l(d, t), (t = d[0]), (r += d[1] + v(t)) < c)
            ? p(0, t)
            : r > u
              ? t < 0
                ? o
                : n
              : (r <= s ? ((r += 52), (e = 2220446049250313e-31)) : (e = 1),
                y(x, t),
                e * h((2148532223 & x[0]) | ((r + i) << 20), x[1]));
      };
    },
    87979: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(650);
      t.exports = n;
    },
    650: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      t.exports = Number;
    },
    71213: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(59471);
      t.exports = n;
    },
    59471: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(29174),
        o = e(93432),
        i = e(72514);
      t.exports = function (t) {
        var r = n(t);
        return ((r = (r & o) >>> 20) - i) | 0;
      };
    },
    74285: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(64144);
      t.exports = n;
    },
    57955: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n, o, i;
      !0 === e(43949) ? ((o = 1), (i = 0)) : ((o = 0), (i = 1)),
        (n = { HIGH: o, LOW: i }),
        (t.exports = n);
    },
    64144: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(65122),
        o = e(6e4),
        i = e(57955),
        u = new o(1),
        s = new n(u.buffer),
        c = i.HIGH,
        a = i.LOW;
      t.exports = function (t, r) {
        return (s[c] = t), (s[a] = r), u[0];
      };
    },
    40556: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n;
      (n = !0 === e(43949) ? 1 : 0), (t.exports = n);
    },
    29174: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(19915);
      t.exports = n;
    },
    19915: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(65122),
        o = e(6e4),
        i = e(40556),
        u = new o(1),
        s = new n(u.buffer);
      t.exports = function (t) {
        return (u[0] = t), s[i];
      };
    },
    95837: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(20138),
        o = e(93316),
        i = e(15361),
        u = e(71622);
      t.exports = function (t, r, e, s) {
        return i(t) || o(t)
          ? ((r[s] = t), (r[s + e] = 0), r)
          : 0 !== t && u(t) < n
            ? ((r[s] = 4503599627370496 * t), (r[s + e] = -52), r)
            : ((r[s] = t), (r[s + e] = 0), r);
      };
    },
    52561: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(51285),
        o = e(22930);
      n(o, "assign", e(95837)), (t.exports = o);
    },
    22930: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(95837);
      t.exports = function (t) {
        return n(t, [0, 0], 1, 0);
      };
    },
    31962: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(65122),
        o = e(6e4),
        i = e(55921),
        u = new o(1),
        s = new n(u.buffer),
        c = i.HIGH,
        a = i.LOW;
      t.exports = function (t, r, e, n) {
        return (u[0] = t), (r[n] = s[c]), (r[n + e] = s[a]), r;
      };
    },
    53017: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(51285),
        o = e(14682);
      n(o, "assign", e(31962)), (t.exports = o);
    },
    55921: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n, o, i;
      !0 === e(43949) ? ((o = 1), (i = 0)) : ((o = 0), (i = 1)),
        (n = { HIGH: o, LOW: i }),
        (t.exports = n);
    },
    14682: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(31962);
      t.exports = function (t) {
        return n(t, [0, 0], 1, 0);
      };
    },
    51285: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(77252);
      t.exports = n;
    },
    77252: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(81585);
      t.exports = function (t, r, e) {
        n(t, r, { configurable: !1, enumerable: !1, writable: !1, value: e });
      };
    },
    87843: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = Object.defineProperty;
      t.exports = r;
    },
    57319: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2021 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r =
        "function" == typeof Object.defineProperty
          ? Object.defineProperty
          : null;
      t.exports = r;
    },
    21562: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2021 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(57319);
      t.exports = function () {
        try {
          return n({}, "x", {}), !0;
        } catch (t) {
          return !1;
        }
      };
    },
    81585: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(21562),
        i = e(87843),
        u = e(91393);
      (n = o() ? i : u), (t.exports = n);
    },
    91393: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = Object.prototype,
        e = r.toString,
        n = r.__defineGetter__,
        o = r.__defineSetter__,
        i = r.__lookupGetter__,
        u = r.__lookupSetter__;
      t.exports = function (t, s, c) {
        var a, f, p, l;
        if (
          "object" != typeof t ||
          null === t ||
          "[object Array]" === e.call(t)
        )
          throw TypeError(
            "invalid argument. First argument must be an object. Value: `" +
              t +
              "`."
          );
        if (
          "object" != typeof c ||
          null === c ||
          "[object Array]" === e.call(c)
        )
          throw TypeError(
            "invalid argument. Property descriptor must be an object. Value: `" +
              c +
              "`."
          );
        if (
          ((f = "value" in c) &&
            (i.call(t, s) || u.call(t, s)
              ? ((a = t.__proto__),
                (t.__proto__ = r),
                delete t[s],
                (t[s] = c.value),
                (t.__proto__ = a))
              : (t[s] = c.value)),
          (p = "get" in c),
          (l = "set" in c),
          f && (p || l))
        )
          throw Error(
            "invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor."
          );
        return p && n && n.call(t, s, c.get), l && o && o.call(t, s, c.set), t;
      };
    },
    75429: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n,
        o = e(97995),
        i = e(48694),
        u = e(78091);
      (n = o() ? u : i), (t.exports = n);
    },
    48694: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(42844);
      t.exports = function (t) {
        return n.call(t);
      };
    },
    78091: function (t, r, e) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e(61248),
        o = e(25701),
        i = e(42844);
      t.exports = function (t) {
        var r, e, u;
        if (null == t) return i.call(t);
        (e = t[o]), (r = n(t, o));
        try {
          t[o] = void 0;
        } catch (r) {
          return i.call(t);
        }
        return (u = i.call(t)), r ? (t[o] = e) : delete t[o], u;
      };
    },
    42844: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = Object.prototype.toString;
      t.exports = r;
    },
    25701: function (t) {
      "use strict"; /**
       * @license Apache-2.0
       *
       * Copyright (c) 2018 The Stdlib Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var r = "function" == typeof Symbol ? Symbol.toStringTag : "";
      t.exports = r;
    },
    53098: function (t) {
      t.exports = function (t, r, e, n, o) {
        for (r = r.split ? r.split(".") : r, n = 0; n < r.length; n++)
          t = t ? t[r[n]] : o;
        return t === o ? e : t;
      };
    },
    55388: function (t, r) {
      r.dset = function (t, r, e) {
        r.split && (r = r.split("."));
        for (
          var n, o, i = 0, u = r.length, s = t;
          i < u &&
          "__proto__" !== (o = r[i++]) &&
          "constructor" !== o &&
          "prototype" !== o;
        )
          s = s[o] =
            i === u
              ? e
              : typeof (n = s[o]) == typeof r
                ? n
                : 0 * r[i] != 0 || ~("" + r[i]).indexOf(".")
                  ? {}
                  : [];
      };
    },
    85305: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          default: function () {
            return i;
          },
        });
      for (var n = [], o = 0; o < 64; )
        n[o] = 0 | (4294967296 * Math.sin(++o % Math.PI));
      function i(t) {
        var r,
          e,
          i,
          u = [(r = 1732584193), (e = 4023233417), ~r, ~e],
          s = [],
          c = unescape(encodeURI(t)) + "\x80",
          a = c.length;
        for (t = (--a / 4 + 2) | 15, s[--t] = 8 * a; ~a; )
          s[a >> 2] |= c.charCodeAt(a) << (8 * a--);
        for (o = c = 0; o < t; o += 16) {
          for (
            a = u;
            c < 64;
            a = [
              (i = a[3]),
              r +
                (((i =
                  a[0] +
                  [
                    (r & e) | (~r & i),
                    (i & r) | (~i & e),
                    r ^ e ^ i,
                    e ^ (r | ~i),
                  ][(a = c >> 4)] +
                  n[c] +
                  ~~s[o | (15 & [c, 5 * c + 1, 3 * c + 5, 7 * c][a])]) <<
                  (a = [
                    7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21,
                  ][4 * a + (c++ % 4)])) |
                  (i >>> -a)),
              r,
              e,
            ]
          )
            (r = 0 | a[1]), (e = a[2]);
          for (c = 4; c; ) u[--c] += a[c];
        }
        for (t = ""; c < 32; )
          t += ((u[c >> 3] >> (4 * (1 ^ c++))) & 15).toString(16);
        return t;
      }
    },
  },
]);
