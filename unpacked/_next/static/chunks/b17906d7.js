(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    68003: function (t, e, n) {
      var i, r, s;
      (function (a, o) {
        var h = (a = a || n(79465)).window,
          u = a.document,
          l = new (function () {
            var t = /^(statics|enumerable|beans|preserve)$/,
              e = [],
              n = e.slice,
              i = Object.create,
              r = Object.getOwnPropertyDescriptor,
              s = Object.defineProperty,
              a =
                e.forEach ||
                function (t, e) {
                  for (var n = 0, i = this.length; n < i; n++)
                    t.call(e, this[n], n, this);
                },
              h = function (t, e) {
                for (var n in this)
                  this.hasOwnProperty(n) && t.call(e, this[n], n, this);
              },
              u =
                Object.assign ||
                function (t) {
                  for (var e = 1, n = arguments.length; e < n; e++) {
                    var i = arguments[e];
                    for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
                  }
                  return t;
                },
              l = function (t, e, n) {
                if (t) {
                  var i = r(t, "length");
                  (i && "number" == typeof i.value ? a : h).call(
                    t,
                    e,
                    (n = n || t)
                  );
                }
                return n;
              };
            function c(e, n, i, a, o) {
              var h = {};
              function u(t, u) {
                "string" ==
                  typeof (u = u || ((u = r(n, t)) && (u.get ? u : u.value))) &&
                  "#" === u[0] &&
                  (u = e[u.substring(1)] || u);
                var l,
                  c = "function" == typeof u,
                  d = u,
                  _ = o || (c && !u.base) ? (u && u.get ? t in e : e[t]) : null;
                (o && _) ||
                  (c && _ && (u.base = _),
                  c &&
                    !1 !== a &&
                    (l = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) &&
                    (h[l[3].toLowerCase() + l[4]] = l[2]),
                  (d &&
                    !c &&
                    d.get &&
                    "function" == typeof d.get &&
                    f.isPlainObject(d)) ||
                    (d = { value: d, writable: !0 }),
                  (r(e, t) || { configurable: !0 }).configurable &&
                    ((d.configurable = !0),
                    (d.enumerable = null != i ? i : !l)),
                  s(e, t, d));
              }
              if (n) {
                for (var l in n) n.hasOwnProperty(l) && !t.test(l) && u(l);
                for (var l in h) {
                  var c = h[l],
                    d = e["set" + c],
                    _ = e["get" + c] || (d && e["is" + c]);
                  _ && (!0 === a || 0 === _.length) && u(l, { get: _, set: d });
                }
              }
              return e;
            }
            function f() {
              for (var t = 0, e = arguments.length; t < e; t++) {
                var n = arguments[t];
                n && u(this, n);
              }
              return this;
            }
            return c(f, {
              inject: function (t) {
                if (t) {
                  var e = !0 === t.statics ? t : t.statics,
                    n = t.beans,
                    i = t.preserve;
                  e !== t && c(this.prototype, t, t.enumerable, n, i),
                    c(this, e, null, n, i);
                }
                for (var r = 1, s = arguments.length; r < s; r++)
                  this.inject(arguments[r]);
                return this;
              },
              extend: function () {
                for (
                  var t, e, n, r = this, a = 0, o = arguments.length;
                  a < o && !(t && e);
                  a++
                )
                  (n = arguments[a]),
                    (t = t || n.initialize),
                    (e = e || n.prototype);
                return (
                  s(
                    (e = (t =
                      t ||
                      function () {
                        r.apply(this, arguments);
                      }).prototype =
                      e || i(this.prototype)),
                    "constructor",
                    { value: t, writable: !0, configurable: !0 }
                  ),
                  c(t, this),
                  arguments.length && this.inject.apply(t, arguments),
                  (t.base = r),
                  t
                );
              },
            }).inject({
              enumerable: !1,
              initialize: f,
              set: f,
              inject: function () {
                for (var t = 0, e = arguments.length; t < e; t++) {
                  var n = arguments[t];
                  n && c(this, n, n.enumerable, n.beans, n.preserve);
                }
                return this;
              },
              extend: function () {
                var t = i(this);
                return t.inject.apply(t, arguments);
              },
              each: function (t, e) {
                return l(this, t, e);
              },
              clone: function () {
                return new this.constructor(this);
              },
              statics: {
                set: u,
                each: l,
                create: i,
                define: s,
                describe: r,
                clone: function (t) {
                  return u(new t.constructor(), t);
                },
                isPlainObject: function (t) {
                  var e = null != t && t.constructor;
                  return e && (e === Object || e === f || "Object" === e.name);
                },
                pick: function (t, e) {
                  return o !== t ? t : e;
                },
                slice: function (t, e, i) {
                  return n.call(t, e, i);
                },
              },
            });
          })();
        (t.exports = l),
          l.inject(
            {
              enumerable: !1,
              toString: function () {
                return null != this._id
                  ? (this._class || "Object") +
                      (this._name ? " '" + this._name + "'" : " @" + this._id)
                  : "{ " +
                      l
                        .each(
                          this,
                          function (t, e) {
                            if (!/^_/.test(e)) {
                              var n = typeof t;
                              this.push(
                                e +
                                  ": " +
                                  ("number" === n
                                    ? g.instance.number(t)
                                    : "string" === n
                                      ? "'" + t + "'"
                                      : t)
                              );
                            }
                          },
                          []
                        )
                        .join(", ") +
                      " }";
              },
              getClassName: function () {
                return this._class || "";
              },
              importJSON: function (t) {
                return l.importJSON(t, this);
              },
              exportJSON: function (t) {
                return l.exportJSON(this, t);
              },
              toJSON: function () {
                return l.serialize(this);
              },
              set: function (t, e) {
                return t && l.filter(this, t, e, this._prioritize), this;
              },
            },
            {
              beans: !1,
              statics: {
                exports: {},
                extend: function t() {
                  var e = t.base.apply(this, arguments),
                    n = e.prototype._class;
                  return n && !l.exports[n] && (l.exports[n] = e), e;
                },
                equals: function (t, e) {
                  if (t === e) return !0;
                  if (t && t.equals) return t.equals(e);
                  if (e && e.equals) return e.equals(t);
                  if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                      var n = t.length;
                      if (n !== e.length) return !1;
                      for (; n--; ) if (!l.equals(t[n], e[n])) return !1;
                    } else {
                      var i = Object.keys(t),
                        n = i.length;
                      if (n !== Object.keys(e).length) return !1;
                      for (; n--; ) {
                        var r = i[n];
                        if (!(e.hasOwnProperty(r) && l.equals(t[r], e[r])))
                          return !1;
                      }
                    }
                    return !0;
                  }
                  return !1;
                },
                read: function (t, e, n, i) {
                  if (this === l) {
                    var r = this.peek(t, e);
                    return t.__index++, r;
                  }
                  var s = this.prototype,
                    a = s._readIndex,
                    h = e || (a && t.__index) || 0,
                    u = t.length,
                    c = t[h];
                  if (
                    ((i = i || u - h),
                    c instanceof this ||
                      (n && n.readNull && null == c && i <= 1))
                  )
                    return (
                      a && (t.__index = h + 1),
                      c && n && n.clone ? c.clone() : c
                    );
                  if (
                    ((c = l.create(s)),
                    a && (c.__read = !0),
                    (c =
                      c.initialize.apply(
                        c,
                        h > 0 || h + i < u ? l.slice(t, h, h + i) : t
                      ) || c),
                    a)
                  ) {
                    t.__index = h + c.__read;
                    var f = c.__filtered;
                    f && ((t.__filtered = f), (c.__filtered = o)),
                      (c.__read = o);
                  }
                  return c;
                },
                peek: function (t, e) {
                  return t[(t.__index = e || t.__index || 0)];
                },
                remain: function (t) {
                  return t.length - (t.__index || 0);
                },
                readList: function (t, e, n, i) {
                  for (
                    var r, s = [], a = e || 0, o = i ? a + i : t.length, h = a;
                    h < o;
                    h++
                  )
                    s.push(
                      Array.isArray((r = t[h]))
                        ? this.read(r, 0, n)
                        : this.read(t, h, n, 1)
                    );
                  return s;
                },
                readNamed: function (t, e, n, i, r) {
                  var s = this.getNamed(t, e),
                    a = o !== s;
                  if (a) {
                    var h = t.__filtered;
                    if (!h) {
                      var u = this.getSource(t);
                      (h = t.__filtered = l.create(u)).__unfiltered = u;
                    }
                    h[e] = o;
                  }
                  return this.read(a ? [s] : t, n, i, r);
                },
                readSupported: function (t, e) {
                  var n = this.getSource(t),
                    i = this,
                    r = !1;
                  return (
                    n &&
                      Object.keys(n).forEach(function (n) {
                        if (n in e) {
                          var s = i.readNamed(t, n);
                          o !== s && (e[n] = s), (r = !0);
                        }
                      }),
                    r
                  );
                },
                getSource: function (t) {
                  var e = t.__source;
                  if (o === e) {
                    var n = 1 === t.length && t[0];
                    e = t.__source = n && l.isPlainObject(n) ? n : null;
                  }
                  return e;
                },
                getNamed: function (t, e) {
                  var n = this.getSource(t);
                  if (n) return e ? n[e] : t.__filtered || n;
                },
                hasNamed: function (t, e) {
                  return !!this.getNamed(t, e);
                },
                filter: function (t, e, n, i) {
                  function r(i) {
                    if (!(n && i in n) && !(s && i in s)) {
                      var r = e[i];
                      o !== r && (t[i] = r);
                    }
                  }
                  if (i) {
                    for (var s, a, h = {}, u = 0, l = i.length; u < l; u++)
                      (a = i[u]) in e && (r(a), (h[a] = !0));
                    s = h;
                  }
                  return Object.keys(e.__unfiltered || e).forEach(r), t;
                },
                isPlainValue: function (t, e) {
                  return (
                    l.isPlainObject(t) ||
                    Array.isArray(t) ||
                    (e && "string" == typeof t)
                  );
                },
                serialize: function (t, e, n, i) {
                  e = e || {};
                  var r,
                    s = !i;
                  if (
                    (s &&
                      ((e.formatter = new g(e.precision)),
                      (i = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function (t, e) {
                          var n = "#" + t._id,
                            i = this.references[n];
                          if (!i) {
                            this.length++;
                            var r = e.call(t),
                              s = t._class;
                            s && r[0] !== s && r.unshift(s),
                              (this.definitions[n] = r),
                              (i = this.references[n] = [n]);
                          }
                          return i;
                        },
                      })),
                    t && t._serialize)
                  ) {
                    r = t._serialize(e, i);
                    var a = t._class;
                    a &&
                      !t._compactSerialize &&
                      (s || !n) &&
                      r[0] !== a &&
                      r.unshift(a);
                  } else if (Array.isArray(t)) {
                    r = [];
                    for (var o = 0, h = t.length; o < h; o++)
                      r[o] = l.serialize(t[o], e, n, i);
                  } else if (l.isPlainObject(t)) {
                    r = {};
                    for (
                      var u = Object.keys(t), o = 0, h = u.length;
                      o < h;
                      o++
                    ) {
                      var c = u[o];
                      r[c] = l.serialize(t[c], e, n, i);
                    }
                  } else
                    r =
                      "number" == typeof t
                        ? e.formatter.number(t, e.precision)
                        : t;
                  return s && i.length > 0
                    ? [["dictionary", i.definitions], r]
                    : r;
                },
                deserialize: function (t, e, n, i, r) {
                  var s = t,
                    a = !n,
                    o = a && t && t.length && "dictionary" === t[0][0];
                  if (((n = n || {}), Array.isArray(t))) {
                    var h = t[0],
                      u = "dictionary" === h;
                    if (1 == t.length && /^#/.test(h)) return n.dictionary[h];
                    (h = l.exports[h]), (s = []);
                    for (var c = h ? 1 : 0, f = t.length; c < f; c++)
                      s.push(l.deserialize(t[c], e, n, u, o));
                    if (h) {
                      var d = s;
                      s = e ? e(h, d, a || r) : new h(d);
                    }
                  } else if (l.isPlainObject(t))
                    for (var _ in ((s = {}), i && (n.dictionary = s), t))
                      s[_] = l.deserialize(t[_], e, n);
                  return o ? s[1] : s;
                },
                exportJSON: function (t, e) {
                  var n = l.serialize(t, e);
                  return e && !1 == e.asString ? n : JSON.stringify(n);
                },
                importJSON: function (t, e) {
                  return l.deserialize(
                    "string" == typeof t ? JSON.parse(t) : t,
                    function (t, n, i) {
                      var r = i && e && e.constructor === t,
                        s = r ? e : l.create(t.prototype);
                      if (
                        1 === n.length &&
                        s instanceof P &&
                        (r || !(s instanceof M))
                      ) {
                        var a = n[0];
                        l.isPlainObject(a) &&
                          ((a.insert = !1), r && (n = n.concat([P.INSERT])));
                      }
                      return (r ? s.set : t).apply(s, n), r && (e = null), s;
                    }
                  );
                },
                push: function (t, e) {
                  var n = e.length;
                  if (n < 4096) t.push.apply(t, e);
                  else {
                    var i = t.length;
                    t.length += n;
                    for (var r = 0; r < n; r++) t[i + r] = e[r];
                  }
                  return t;
                },
                splice: function (t, e, n, i) {
                  var r = e && e.length,
                    s = o === n;
                  (n = s ? t.length : n) > t.length && (n = t.length);
                  for (var a = 0; a < r; a++) e[a]._index = n + a;
                  if (s) return l.push(t, e), [];
                  var h = [n, i];
                  e && l.push(h, e);
                  for (
                    var u = t.splice.apply(t, h), a = 0, c = u.length;
                    a < c;
                    a++
                  )
                    u[a]._index = o;
                  for (var a = n + r, c = t.length; a < c; a++) t[a]._index = a;
                  return u;
                },
                capitalize: function (t) {
                  return t.replace(/\b[a-z]/g, function (t) {
                    return t.toUpperCase();
                  });
                },
                camelize: function (t) {
                  return t.replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase();
                  });
                },
                hyphenate: function (t) {
                  return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                },
              },
            }
          );
        var c = {
            on: function (t, e) {
              if ("string" != typeof t)
                l.each(
                  t,
                  function (t, e) {
                    this.on(e, t);
                  },
                  this
                );
              else {
                var n = this._eventTypes,
                  i = n && n[t],
                  r = (this._callbacks = this._callbacks || {});
                -1 === (r = r[t] = r[t] || []).indexOf(e) &&
                  (r.push(e),
                  i && i.install && 1 === r.length && i.install.call(this, t));
              }
              return this;
            },
            off: function (t, e) {
              if ("string" != typeof t) {
                l.each(
                  t,
                  function (t, e) {
                    this.off(e, t);
                  },
                  this
                );
                return;
              }
              var n,
                i = this._eventTypes,
                r = i && i[t],
                s = this._callbacks && this._callbacks[t];
              return (
                s &&
                  (e && (-1 === (n = s.indexOf(e)) || 1 !== s.length)
                    ? -1 !== n && s.splice(n, 1)
                    : (r && r.uninstall && r.uninstall.call(this, t),
                      delete this._callbacks[t])),
                this
              );
            },
            once: function (t, e) {
              return this.on(t, function n() {
                e.apply(this, arguments), this.off(t, n);
              });
            },
            emit: function (t, e) {
              var n = this._callbacks && this._callbacks[t];
              if (!n) return !1;
              var i = l.slice(arguments, 1),
                r = e && e.target && !e.currentTarget;
              (n = n.slice()), r && (e.currentTarget = this);
              for (var s = 0, a = n.length; s < a; s++)
                if (!1 == n[s].apply(this, i)) {
                  e && e.stop && e.stop();
                  break;
                }
              return r && delete e.currentTarget, !0;
            },
            responds: function (t) {
              return !!(this._callbacks && this._callbacks[t]);
            },
            attach: "#on",
            detach: "#off",
            fire: "#emit",
            _installEvents: function (t) {
              var e = this._eventTypes,
                n = this._callbacks,
                i = t ? "install" : "uninstall";
              if (e) {
                for (var r in n)
                  if (n[r].length > 0) {
                    var s = e[r],
                      a = s && s[i];
                    a && a.call(this, r);
                  }
              }
            },
            statics: {
              inject: function t(e) {
                var n = e._events;
                if (n) {
                  var i = {};
                  l.each(n, function (t, n) {
                    var r = "string" == typeof t,
                      s = r ? t : n,
                      a = l.capitalize(s),
                      o = s.substring(2).toLowerCase();
                    (i[o] = r ? {} : t),
                      (s = "_" + s),
                      (e["get" + a] = function () {
                        return this[s];
                      }),
                      (e["set" + a] = function (t) {
                        var e = this[s];
                        e && this.off(o, e), t && this.on(o, t), (this[s] = t);
                      });
                  }),
                    (e._eventTypes = i);
                }
                return t.base.apply(this, arguments);
              },
            },
          },
          f = l.extend({
            _class: "PaperScope",
            initialize: function t() {
              (tf = this),
                (this.settings = new l({
                  applyMatrix: !0,
                  insertItems: !0,
                  handleSize: 4,
                  hitTolerance: 0,
                })),
                (this.project = null),
                (this.projects = []),
                (this.tools = []),
                (this._id = t._id++),
                (t._scopes[this._id] = this);
              var e = t.prototype;
              if (!this.support) {
                var n = th.getContext(1, 1) || {};
                (e.support = {
                  nativeDash: "setLineDash" in n || "mozDash" in n,
                  nativeBlendModes: tu.nativeModes,
                }),
                  th.release(n);
              }
              if (!this.agent) {
                var i = a.navigator.userAgent.toLowerCase(),
                  r = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(i) || [])[0],
                  s = "darwin" === r ? "mac" : r,
                  o = (e.agent = e.browser = { platform: s });
                s && (o[s] = !0),
                  i.replace(
                    /(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
                    function (t, e, n, i, r) {
                      if (!o.chrome) {
                        var s =
                          "opera" === e
                            ? i
                            : /^(node|trident)$/.test(e)
                              ? r
                              : n;
                        (o.version = s),
                          (o.versionNumber = parseFloat(s)),
                          (e = { trident: "msie", jsdom: "node" }[e] || e),
                          (o.name = e),
                          (o[e] = !0);
                      }
                    }
                  ),
                  o.chrome && delete o.webkit,
                  o.atom && delete o.chrome;
              }
            },
            version: "0.12.17",
            getView: function () {
              var t = this.project;
              return t && t._view;
            },
            getPaper: function () {
              return this;
            },
            execute: function (t, e) {
              var n = tf.PaperScript.execute(t, this, e);
              return Q.updateFocus(), n;
            },
            install: function (t) {
              var e = this;
              for (var n in (l.each(["project", "view", "tool"], function (n) {
                l.define(t, n, {
                  configurable: !0,
                  get: function () {
                    return e[n];
                  },
                });
              }),
              this))
                !/^_/.test(n) && this[n] && (t[n] = this[n]);
            },
            setup: function (t) {
              return (tf = this), (this.project = new I(t)), this;
            },
            createCanvas: function (t, e) {
              return th.getCanvas(t, e);
            },
            activate: function () {
              tf = this;
            },
            clear: function () {
              for (
                var t = this.projects, e = this.tools, n = t.length - 1;
                n >= 0;
                n--
              )
                t[n].remove();
              for (var n = e.length - 1; n >= 0; n--) e[n].remove();
            },
            remove: function () {
              this.clear(), delete f._scopes[this._id];
            },
            statics: new (function () {
              function t(t) {
                return (
                  (t += "Attribute"),
                  function (e, n) {
                    return e[t](n) || e[t]("data-paper-" + n);
                  }
                );
              }
              return {
                _scopes: {},
                _id: 0,
                get: function (t) {
                  return this._scopes[t] || null;
                },
                getAttribute: t("get"),
                hasAttribute: t("has"),
              };
            })(),
          }),
          d = l.extend(c, {
            initialize: function (t) {
              (this._scope = tf),
                (this._index = this._scope[this._list].push(this) - 1),
                (t || !this._scope[this._reference]) && this.activate();
            },
            activate: function () {
              if (!this._scope) return !1;
              var t = this._scope[this._reference];
              return (
                t && t !== this && t.emit("deactivate"),
                (this._scope[this._reference] = this),
                this.emit("activate", t),
                !0
              );
            },
            isActive: function () {
              return this._scope[this._reference] === this;
            },
            remove: function () {
              return (
                null != this._index &&
                (l.splice(this._scope[this._list], null, this._index, 1),
                this._scope[this._reference] == this &&
                  (this._scope[this._reference] = null),
                (this._scope = null),
                !0)
              );
            },
            getView: function () {
              return this._scope.getView();
            },
          }),
          _ = {
            findItemBoundsCollisions: function (t, e, n) {
              function i(t) {
                for (var e = Array(t.length), n = 0; n < t.length; n++) {
                  var i = t[n].getBounds();
                  e[n] = [i.left, i.top, i.right, i.bottom];
                }
                return e;
              }
              var r = i(t),
                s = e && e !== t ? i(e) : r;
              return this.findBoundsCollisions(r, s, n || 0);
            },
            findCurveBoundsCollisions: function (t, e, n, i) {
              function r(t) {
                for (
                  var e = Math.min, n = Math.max, i = Array(t.length), r = 0;
                  r < t.length;
                  r++
                ) {
                  var s = t[r];
                  i[r] = [
                    e(s[0], s[2], s[4], s[6]),
                    e(s[1], s[3], s[5], s[7]),
                    n(s[0], s[2], s[4], s[6]),
                    n(s[1], s[3], s[5], s[7]),
                  ];
                }
                return i;
              }
              var s = r(t),
                a = e && e !== t ? r(e) : s;
              if (i) {
                for (
                  var o = this.findBoundsCollisions(s, a, n || 0, !1, !0),
                    h = this.findBoundsCollisions(s, a, n || 0, !0, !0),
                    u = [],
                    l = 0,
                    c = o.length;
                  l < c;
                  l++
                )
                  u[l] = { hor: o[l], ver: h[l] };
                return u;
              }
              return this.findBoundsCollisions(s, a, n || 0);
            },
            findBoundsCollisions: function (t, e, n, i, r) {
              var s = !e || t === e,
                a = s ? t : t.concat(e),
                o = t.length,
                h = a.length;
              function u(t, e, n) {
                for (var i = 0, r = t.length; i < r; ) {
                  var s = (r + i) >>> 1;
                  a[t[s]][e] < n ? (i = s + 1) : (r = s);
                }
                return i - 1;
              }
              for (
                var l = i ? 1 : 0,
                  c = l + 2,
                  f = i ? 0 : 1,
                  d = f + 2,
                  _ = Array(h),
                  g = 0;
                g < h;
                g++
              )
                _[g] = g;
              _.sort(function (t, e) {
                return a[t][l] - a[e][l];
              });
              for (var v = [], p = Array(o), g = 0; g < h; g++) {
                var m = _[g],
                  y = a[m],
                  w = s ? m : m - o,
                  x = m < o,
                  b = s || !x,
                  C = x ? [] : null;
                if (v.length) {
                  var S = u(v, c, y[l] - n) + 1;
                  if ((v.splice(0, S), s && r)) {
                    C = C.concat(v);
                    for (var k = 0; k < v.length; k++) {
                      var I = v[k];
                      p[I].push(w);
                    }
                  } else
                    for (var P = y[d], T = y[f], k = 0; k < v.length; k++) {
                      var I = v[k],
                        M = a[I],
                        A = I < o,
                        O = s || I >= o;
                      (r ||
                        (((x && O) || (b && A)) &&
                          P >= M[f] - n &&
                          T <= M[d] + n)) &&
                        (x && O && C.push(s ? I : I - o),
                        b && A && p[I].push(w));
                    }
                }
                if ((x && (t === e && C.push(m), (p[m] = C)), v.length)) {
                  var z = y[c],
                    E = u(v, c, z);
                  v.splice(E + 1, 0, m);
                } else v.push(m);
              }
              for (var g = 0; g < p.length; g++) {
                var L = p[g];
                L &&
                  L.sort(function (t, e) {
                    return t - e;
                  });
              }
              return p;
            },
          },
          g = l.extend({
            initialize: function (t) {
              (this.precision = l.pick(t, 5)),
                (this.multiplier = Math.pow(10, this.precision));
            },
            number: function (t) {
              return this.precision < 16
                ? Math.round(t * this.multiplier) / this.multiplier
                : t;
            },
            pair: function (t, e, n) {
              return this.number(t) + (n || ",") + this.number(e);
            },
            point: function (t, e) {
              return this.number(t.x) + (e || ",") + this.number(t.y);
            },
            size: function (t, e) {
              return this.number(t.width) + (e || ",") + this.number(t.height);
            },
            rectangle: function (t, e) {
              return this.point(t, e) + (e || ",") + this.size(t, e);
            },
          });
        g.instance = new g();
        var v = new (function () {
            var t = [
                [0.5773502691896257],
                [0, 0.7745966692414834],
                [0.33998104358485626, 0.8611363115940526],
                [0, 0.5384693101056831, 0.906179845938664],
                [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
                [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
                [
                  0.1834346424956498, 0.525532409916329, 0.7966664774136267,
                  0.9602898564975363,
                ],
                [
                  0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358,
                  0.9681602395076261,
                ],
                [
                  0.14887433898163122, 0.4333953941292472, 0.6794095682990244,
                  0.8650633666889845, 0.9739065285171717,
                ],
                [
                  0, 0.26954315595234496, 0.5190961292068118,
                  0.7301520055740494, 0.8870625997680953, 0.978228658146057,
                ],
                [
                  0.1252334085114689, 0.3678314989981802, 0.5873179542866175,
                  0.7699026741943047, 0.9041172563704749, 0.9815606342467192,
                ],
                [
                  0, 0.2304583159551348, 0.44849275103644687,
                  0.6423493394403402, 0.8015780907333099, 0.9175983992229779,
                  0.9841830547185881,
                ],
                [
                  0.10805494870734367, 0.31911236892788974, 0.5152486363581541,
                  0.6872929048116855, 0.827201315069765, 0.9284348836635735,
                  0.9862838086968123,
                ],
                [
                  0, 0.20119409399743451, 0.3941513470775634,
                  0.5709721726085388, 0.7244177313601701, 0.8482065834104272,
                  0.937273392400706, 0.9879925180204854,
                ],
                [
                  0.09501250983763744, 0.2816035507792589, 0.45801677765722737,
                  0.6178762444026438, 0.755404408355003, 0.8656312023878318,
                  0.9445750230732326, 0.9894009349916499,
                ],
              ],
              e = [
                [1],
                [0.8888888888888888, 0.5555555555555556],
                [0.6521451548625461, 0.34785484513745385],
                [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
                [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
                [
                  0.4179591836734694, 0.3818300505051189, 0.27970539148927664,
                  0.1294849661688697,
                ],
                [
                  0.362683783378362, 0.31370664587788727, 0.22238103445337448,
                  0.10122853629037626,
                ],
                [
                  0.3302393550012598, 0.31234707704000286, 0.26061069640293544,
                  0.1806481606948574, 0.08127438836157441,
                ],
                [
                  0.29552422471475287, 0.26926671930999635, 0.21908636251598204,
                  0.1494513491505806, 0.06667134430868814,
                ],
                [
                  0.2729250867779006, 0.26280454451024665, 0.23319376459199048,
                  0.18629021092773426, 0.1255803694649046, 0.05566856711617366,
                ],
                [
                  0.24914704581340277, 0.2334925365383548, 0.20316742672306592,
                  0.16007832854334622, 0.10693932599531843, 0.04717533638651183,
                ],
                [
                  0.2325515532308739, 0.22628318026289723, 0.2078160475368885,
                  0.17814598076194574, 0.13887351021978725, 0.09212149983772845,
                  0.04048400476531588,
                ],
                [
                  0.2152638534631578, 0.2051984637212956, 0.18553839747793782,
                  0.15720316715819355, 0.12151857068790319, 0.08015808715976021,
                  0.03511946033175186,
                ],
                [
                  0.2025782419255613, 0.19843148532711158, 0.1861610000155622,
                  0.16626920581699392, 0.13957067792615432, 0.10715922046717194,
                  0.07036604748810812, 0.03075324199611727,
                ],
                [
                  0.1894506104550685, 0.18260341504492358, 0.16915651939500254,
                  0.14959598881657674, 0.12462897125553388, 0.09515851168249279,
                  0.062253523938647894, 0.027152459411754096,
                ],
              ],
              n = Math.abs,
              i = Math.sqrt,
              r = Math.pow,
              s =
                Math.log2 ||
                function (t) {
                  return Math.log(t) * Math.LOG2E;
                };
            function a(t, e, n) {
              return t < e ? e : t > n ? n : t;
            }
            function o(t, e, i) {
              function r(t) {
                var e = 134217729 * t,
                  n = t - e + e;
                return [n, t - n];
              }
              var s = e * e - t * i,
                a = e * e + t * i;
              if (3 * n(s) < a) {
                var o = r(t),
                  h = r(e),
                  u = r(i),
                  l = e * e,
                  c = h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1],
                  f = t * i,
                  d = o[0] * u[0] - f + o[0] * u[1] + o[1] * u[0] + o[1] * u[1];
                s = l - f + (c - d);
              }
              return s;
            }
            function h() {
              var t = Math.max.apply(Math, arguments);
              return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0;
            }
            return {
              EPSILON: 1e-12,
              MACHINE_EPSILON: 112e-18,
              CURVETIME_EPSILON: 1e-8,
              GEOMETRIC_EPSILON: 1e-7,
              TRIGONOMETRIC_EPSILON: 1e-8,
              ANGULAR_EPSILON: 1e-5,
              KAPPA: (4 * (i(2) - 1)) / 3,
              isZero: function (t) {
                return t >= -0.000000000001 && t <= 1e-12;
              },
              isMachineZero: function (t) {
                return t >= -0.000000000000000112 && t <= 112e-18;
              },
              clamp: a,
              integrate: function (n, i, r, s) {
                for (
                  var a = t[s - 2],
                    o = e[s - 2],
                    h = (r - i) * 0.5,
                    u = h + i,
                    l = 0,
                    c = (s + 1) >> 1,
                    f = 1 & s ? o[l++] * n(u) : 0;
                  l < c;
                ) {
                  var d = h * a[l];
                  f += o[l++] * (n(u + d) + n(u - d));
                }
                return h * f;
              },
              findRoot: function (t, e, i, r, s, o, h) {
                for (var u = 0; u < o; u++) {
                  var l = t(i),
                    c = l / e(i),
                    f = i - c;
                  if (n(c) < h) {
                    i = f;
                    break;
                  }
                  l > 0
                    ? ((s = i), (i = f <= r ? (r + s) * 0.5 : f))
                    : ((r = i), (i = f >= s ? (r + s) * 0.5 : f));
                }
                return a(i, r, s);
              },
              solveQuadratic: function (t, e, r, s, u, l) {
                var c,
                  f = 1 / 0;
                if (1e-12 > n(t)) {
                  if (1e-12 > n(e)) return 1e-12 > n(r) ? -1 : 0;
                  c = -r / e;
                } else {
                  var d = o(t, (e *= -0.5), r);
                  if (d && 112e-18 > n(d)) {
                    var _ = h(n(t), n(e), n(r));
                    _ && ((t *= _), (e *= _), (r *= _), (d = o(t, e, r)));
                  }
                  if (d >= -0.000000000000000112) {
                    var g = d < 0 ? 0 : i(d),
                      v = e + (e < 0 ? -g : g);
                    0 === v ? (f = -(c = r / t)) : ((c = v / t), (f = r / v));
                  }
                }
                var p = 0,
                  m = null == u,
                  y = u - 1e-12,
                  w = l + 1e-12;
                return (
                  isFinite(c) &&
                    (m || (c > y && c < w)) &&
                    (s[p++] = m ? c : a(c, u, l)),
                  f !== c &&
                    isFinite(f) &&
                    (m || (f > y && f < w)) &&
                    (s[p++] = m ? f : a(f, u, l)),
                  p
                );
              },
              solveCubic: function (t, e, s, o, u, l, c) {
                var f,
                  d,
                  _,
                  g,
                  p,
                  m = h(n(t), n(e), n(s), n(o));
                function y(n) {
                  var i = t * (f = n);
                  (_ = (d = i + e) * f + s),
                    (g = (i + d) * f + _),
                    (p = _ * f + o);
                }
                if (
                  (m && ((t *= m), (e *= m), (s *= m), (o *= m)), 1e-12 > n(t))
                )
                  (t = e), (d = s), (_ = o), (f = 1 / 0);
                else if (1e-12 > n(o)) (d = e), (_ = s), (f = 0);
                else {
                  y(-(e / t) / 3);
                  var w = p / t,
                    x = r(n(w), 1 / 3),
                    b = w < 0 ? -1 : 1,
                    C = -g / t,
                    S = C > 0 ? 1.324717957244746 * Math.max(x, i(C)) : x,
                    k = f - b * S;
                  if (k !== f) {
                    do y(k), (k = 0 === g ? f : f - p / g / 1.0000000000000002);
                    while (b * k > b * f);
                    n(t) * f * f > n(o / f) && (d = ((_ = -o / f) - s) / f);
                  }
                }
                var I = v.solveQuadratic(t, d, _, u, l, c),
                  P = null == l;
                return (
                  isFinite(f) &&
                    (0 === I || (I > 0 && f !== u[0] && f !== u[1])) &&
                    (P || (f > l - 1e-12 && f < c + 1e-12)) &&
                    (u[I++] = P ? f : a(f, l, c)),
                  I
                );
              },
            };
          })(),
          p = {
            _id: 1,
            _pools: {},
            get: function (t) {
              if (!t) return this._id++;
              var e = this._pools[t];
              return e || (e = this._pools[t] = { _id: 1 }), e._id++;
            },
          },
          m = l.extend(
            {
              _class: "Point",
              _readIndex: !0,
              initialize: function (t, e) {
                var n = typeof t,
                  i = this.__read,
                  r = 0;
                if ("number" === n) {
                  var s = "number" == typeof e;
                  this._set(t, s ? e : t), i && (r = s ? 2 : 1);
                } else if ("undefined" === n || null === t)
                  this._set(0, 0), i && (r = null === t ? 1 : 0);
                else {
                  var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                  (r = 1),
                    Array.isArray(a)
                      ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0]))
                      : "x" in a
                        ? this._set(a.x || 0, a.y || 0)
                        : "width" in a
                          ? this._set(a.width || 0, a.height || 0)
                          : "angle" in a
                            ? (this._set(a.length || 0, 0),
                              this.setAngle(a.angle || 0))
                            : (this._set(0, 0), (r = 0));
                }
                return i && (this.__read = r), this;
              },
              set: "#initialize",
              _set: function (t, e) {
                return (this.x = t), (this.y = e), this;
              },
              equals: function (t) {
                return (
                  this === t ||
                  (t &&
                    ((this.x === t.x && this.y === t.y) ||
                      (Array.isArray(t) &&
                        this.x === t[0] &&
                        this.y === t[1]))) ||
                  !1
                );
              },
              clone: function () {
                return new m(this.x, this.y);
              },
              toString: function () {
                var t = g.instance;
                return (
                  "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
                );
              },
              _serialize: function (t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y)];
              },
              getLength: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              },
              setLength: function (t) {
                if (this.isZero()) {
                  var e = this._angle || 0;
                  this._set(Math.cos(e) * t, Math.sin(e) * t);
                } else {
                  var n = t / this.getLength();
                  v.isZero(n) && this.getAngle(),
                    this._set(this.x * n, this.y * n);
                }
              },
              getAngle: function () {
                return (
                  (180 * this.getAngleInRadians.apply(this, arguments)) /
                  Math.PI
                );
              },
              setAngle: function (t) {
                this.setAngleInRadians.call(this, (t * Math.PI) / 180);
              },
              getAngleInDegrees: "#getAngle",
              setAngleInDegrees: "#setAngle",
              getAngleInRadians: function () {
                if (!arguments.length)
                  return this.isZero()
                    ? this._angle || 0
                    : (this._angle = Math.atan2(this.y, this.x));
                var t = m.read(arguments),
                  e = this.getLength() * t.getLength();
                if (v.isZero(e)) return NaN;
                var n = this.dot(t) / e;
                return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n);
              },
              setAngleInRadians: function (t) {
                if (((this._angle = t), !this.isZero())) {
                  var e = this.getLength();
                  this._set(Math.cos(t) * e, Math.sin(t) * e);
                }
              },
              getQuadrant: function () {
                return this.x >= 0
                  ? this.y >= 0
                    ? 1
                    : 4
                  : this.y >= 0
                    ? 2
                    : 3;
              },
            },
            {
              beans: !1,
              getDirectedAngle: function () {
                var t = m.read(arguments);
                return (180 * Math.atan2(this.cross(t), this.dot(t))) / Math.PI;
              },
              getDistance: function () {
                var t = arguments,
                  e = m.read(t),
                  n = e.x - this.x,
                  i = e.y - this.y,
                  r = n * n + i * i;
                return l.read(t) ? r : Math.sqrt(r);
              },
              normalize: function (t) {
                o === t && (t = 1);
                var e = this.getLength(),
                  n = 0 !== e ? t / e : 0,
                  i = new m(this.x * n, this.y * n);
                return n >= 0 && (i._angle = this._angle), i;
              },
              rotate: function (t, e) {
                if (0 === t) return this.clone();
                t = (t * Math.PI) / 180;
                var n = e ? this.subtract(e) : this,
                  i = Math.sin(t),
                  r = Math.cos(t);
                return (
                  (n = new m(n.x * r - n.y * i, n.x * i + n.y * r)),
                  e ? n.add(e) : n
                );
              },
              transform: function (t) {
                return t ? t._transformPoint(this) : this;
              },
              add: function () {
                var t = m.read(arguments);
                return new m(this.x + t.x, this.y + t.y);
              },
              subtract: function () {
                var t = m.read(arguments);
                return new m(this.x - t.x, this.y - t.y);
              },
              multiply: function () {
                var t = m.read(arguments);
                return new m(this.x * t.x, this.y * t.y);
              },
              divide: function () {
                var t = m.read(arguments);
                return new m(this.x / t.x, this.y / t.y);
              },
              modulo: function () {
                var t = m.read(arguments);
                return new m(this.x % t.x, this.y % t.y);
              },
              negate: function () {
                return new m(-this.x, -this.y);
              },
              isInside: function () {
                return b.read(arguments).contains(this);
              },
              isClose: function () {
                var t = arguments,
                  e = m.read(t),
                  n = l.read(t);
                return this.getDistance(e) <= n;
              },
              isCollinear: function () {
                var t = m.read(arguments);
                return m.isCollinear(this.x, this.y, t.x, t.y);
              },
              isColinear: "#isCollinear",
              isOrthogonal: function () {
                var t = m.read(arguments);
                return m.isOrthogonal(this.x, this.y, t.x, t.y);
              },
              isZero: function () {
                var t = v.isZero;
                return t(this.x) && t(this.y);
              },
              isNaN: function () {
                return isNaN(this.x) || isNaN(this.y);
              },
              isInQuadrant: function (t) {
                return (
                  this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 &&
                  this.y * (t > 2 ? -1 : 1) >= 0
                );
              },
              dot: function () {
                var t = m.read(arguments);
                return this.x * t.x + this.y * t.y;
              },
              cross: function () {
                var t = m.read(arguments);
                return this.x * t.y - this.y * t.x;
              },
              project: function () {
                var t = m.read(arguments),
                  e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                return new m(t.x * e, t.y * e);
              },
              statics: {
                min: function () {
                  var t = arguments,
                    e = m.read(t),
                    n = m.read(t);
                  return new m(Math.min(e.x, n.x), Math.min(e.y, n.y));
                },
                max: function () {
                  var t = arguments,
                    e = m.read(t),
                    n = m.read(t);
                  return new m(Math.max(e.x, n.x), Math.max(e.y, n.y));
                },
                random: function () {
                  return new m(Math.random(), Math.random());
                },
                isCollinear: function (t, e, n, i) {
                  return (
                    Math.abs(t * i - e * n) <=
                    1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                  );
                },
                isOrthogonal: function (t, e, n, i) {
                  return (
                    Math.abs(t * n + e * i) <=
                    1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                  );
                },
              },
            },
            l.each(
              ["round", "ceil", "floor", "abs"],
              function (t) {
                var e = Math[t];
                this[t] = function () {
                  return new m(e(this.x), e(this.y));
                };
              },
              {}
            )
          ),
          y = m.extend({
            initialize: function (t, e, n, i) {
              (this._x = t),
                (this._y = e),
                (this._owner = n),
                (this._setter = i);
            },
            _set: function (t, e, n) {
              return (
                (this._x = t),
                (this._y = e),
                n || this._owner[this._setter](this),
                this
              );
            },
            getX: function () {
              return this._x;
            },
            setX: function (t) {
              (this._x = t), this._owner[this._setter](this);
            },
            getY: function () {
              return this._y;
            },
            setY: function (t) {
              (this._y = t), this._owner[this._setter](this);
            },
            isSelected: function () {
              return !!(this._owner._selection & this._getSelection());
            },
            setSelected: function (t) {
              this._owner._changeSelection(this._getSelection(), t);
            },
            _getSelection: function () {
              return "setPosition" === this._setter ? 4 : 0;
            },
          }),
          w = l.extend(
            {
              _class: "Size",
              _readIndex: !0,
              initialize: function (t, e) {
                var n = typeof t,
                  i = this.__read,
                  r = 0;
                if ("number" === n) {
                  var s = "number" == typeof e;
                  this._set(t, s ? e : t), i && (r = s ? 2 : 1);
                } else if ("undefined" === n || null === t)
                  this._set(0, 0), i && (r = null === t ? 1 : 0);
                else {
                  var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                  (r = 1),
                    Array.isArray(a)
                      ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0]))
                      : "width" in a
                        ? this._set(a.width || 0, a.height || 0)
                        : "x" in a
                          ? this._set(a.x || 0, a.y || 0)
                          : (this._set(0, 0), (r = 0));
                }
                return i && (this.__read = r), this;
              },
              set: "#initialize",
              _set: function (t, e) {
                return (this.width = t), (this.height = e), this;
              },
              equals: function (t) {
                return (
                  t === this ||
                  (t &&
                    ((this.width === t.width && this.height === t.height) ||
                      (Array.isArray(t) &&
                        this.width === t[0] &&
                        this.height === t[1]))) ||
                  !1
                );
              },
              clone: function () {
                return new w(this.width, this.height);
              },
              toString: function () {
                var t = g.instance;
                return (
                  "{ width: " +
                  t.number(this.width) +
                  ", height: " +
                  t.number(this.height) +
                  " }"
                );
              },
              _serialize: function (t) {
                var e = t.formatter;
                return [e.number(this.width), e.number(this.height)];
              },
              add: function () {
                var t = w.read(arguments);
                return new w(this.width + t.width, this.height + t.height);
              },
              subtract: function () {
                var t = w.read(arguments);
                return new w(this.width - t.width, this.height - t.height);
              },
              multiply: function () {
                var t = w.read(arguments);
                return new w(this.width * t.width, this.height * t.height);
              },
              divide: function () {
                var t = w.read(arguments);
                return new w(this.width / t.width, this.height / t.height);
              },
              modulo: function () {
                var t = w.read(arguments);
                return new w(this.width % t.width, this.height % t.height);
              },
              negate: function () {
                return new w(-this.width, -this.height);
              },
              isZero: function () {
                var t = v.isZero;
                return t(this.width) && t(this.height);
              },
              isNaN: function () {
                return isNaN(this.width) || isNaN(this.height);
              },
              statics: {
                min: function (t, e) {
                  return new w(
                    Math.min(t.width, e.width),
                    Math.min(t.height, e.height)
                  );
                },
                max: function (t, e) {
                  return new w(
                    Math.max(t.width, e.width),
                    Math.max(t.height, e.height)
                  );
                },
                random: function () {
                  return new w(Math.random(), Math.random());
                },
              },
            },
            l.each(
              ["round", "ceil", "floor", "abs"],
              function (t) {
                var e = Math[t];
                this[t] = function () {
                  return new w(e(this.width), e(this.height));
                };
              },
              {}
            )
          ),
          x = w.extend({
            initialize: function (t, e, n, i) {
              (this._width = t),
                (this._height = e),
                (this._owner = n),
                (this._setter = i);
            },
            _set: function (t, e, n) {
              return (
                (this._width = t),
                (this._height = e),
                n || this._owner[this._setter](this),
                this
              );
            },
            getWidth: function () {
              return this._width;
            },
            setWidth: function (t) {
              (this._width = t), this._owner[this._setter](this);
            },
            getHeight: function () {
              return this._height;
            },
            setHeight: function (t) {
              (this._height = t), this._owner[this._setter](this);
            },
          }),
          b = l.extend(
            {
              _class: "Rectangle",
              _readIndex: !0,
              beans: !0,
              initialize: function (t, e, n, i) {
                var r,
                  s = arguments,
                  a = typeof t;
                if (
                  ("number" === a
                    ? (this._set(t, e, n, i), (r = 4))
                    : "undefined" === a || null === t
                      ? (this._set(0, 0, 0, 0), (r = null === t ? 1 : 0))
                      : 1 === s.length &&
                        (Array.isArray(t)
                          ? (this._set.apply(this, t), (r = 1))
                          : o !== t.x || o !== t.width
                            ? (this._set(
                                t.x || 0,
                                t.y || 0,
                                t.width || 0,
                                t.height || 0
                              ),
                              (r = 1))
                            : o === t.from &&
                              o === t.to &&
                              (this._set(0, 0, 0, 0),
                              l.readSupported(s, this) && (r = 1))),
                  o === r)
                ) {
                  var h,
                    u,
                    c = m.readNamed(s, "from"),
                    f = l.peek(s),
                    d = c.x,
                    _ = c.y;
                  if ((f && o !== f.x) || l.hasNamed(s, "to")) {
                    var g = m.readNamed(s, "to");
                    (h = g.x - d),
                      (u = g.y - _),
                      h < 0 && ((d = g.x), (h = -h)),
                      u < 0 && ((_ = g.y), (u = -u));
                  } else {
                    var v = w.read(s);
                    (h = v.width), (u = v.height);
                  }
                  this._set(d, _, h, u), (r = s.__index);
                }
                var p = s.__filtered;
                return (
                  p && (this.__filtered = p),
                  this.__read && (this.__read = r),
                  this
                );
              },
              set: "#initialize",
              _set: function (t, e, n, i) {
                return (
                  (this.x = t),
                  (this.y = e),
                  (this.width = n),
                  (this.height = i),
                  this
                );
              },
              clone: function () {
                return new b(this.x, this.y, this.width, this.height);
              },
              equals: function (t) {
                var e = l.isPlainValue(t) ? b.read(arguments) : t;
                return (
                  e === this ||
                  (e &&
                    this.x === e.x &&
                    this.y === e.y &&
                    this.width === e.width &&
                    this.height === e.height) ||
                  !1
                );
              },
              toString: function () {
                var t = g.instance;
                return (
                  "{ x: " +
                  t.number(this.x) +
                  ", y: " +
                  t.number(this.y) +
                  ", width: " +
                  t.number(this.width) +
                  ", height: " +
                  t.number(this.height) +
                  " }"
                );
              },
              _serialize: function (t) {
                var e = t.formatter;
                return [
                  e.number(this.x),
                  e.number(this.y),
                  e.number(this.width),
                  e.number(this.height),
                ];
              },
              getPoint: function (t) {
                return new (t ? m : y)(this.x, this.y, this, "setPoint");
              },
              setPoint: function () {
                var t = m.read(arguments);
                (this.x = t.x), (this.y = t.y);
              },
              getSize: function (t) {
                return new (t ? w : x)(
                  this.width,
                  this.height,
                  this,
                  "setSize"
                );
              },
              _fw: 1,
              _fh: 1,
              setSize: function () {
                var t = w.read(arguments),
                  e = this._sx,
                  n = this._sy,
                  i = t.width,
                  r = t.height;
                e && (this.x += (this.width - i) * e),
                  n && (this.y += (this.height - r) * n),
                  (this.width = i),
                  (this.height = r),
                  (this._fw = this._fh = 1);
              },
              getLeft: function () {
                return this.x;
              },
              setLeft: function (t) {
                if (!this._fw) {
                  var e = t - this.x;
                  this.width -= 0.5 === this._sx ? 2 * e : e;
                }
                (this.x = t), (this._sx = this._fw = 0);
              },
              getTop: function () {
                return this.y;
              },
              setTop: function (t) {
                if (!this._fh) {
                  var e = t - this.y;
                  this.height -= 0.5 === this._sy ? 2 * e : e;
                }
                (this.y = t), (this._sy = this._fh = 0);
              },
              getRight: function () {
                return this.x + this.width;
              },
              setRight: function (t) {
                if (!this._fw) {
                  var e = t - this.x;
                  this.width = 0.5 === this._sx ? 2 * e : e;
                }
                (this.x = t - this.width), (this._sx = 1), (this._fw = 0);
              },
              getBottom: function () {
                return this.y + this.height;
              },
              setBottom: function (t) {
                if (!this._fh) {
                  var e = t - this.y;
                  this.height = 0.5 === this._sy ? 2 * e : e;
                }
                (this.y = t - this.height), (this._sy = 1), (this._fh = 0);
              },
              getCenterX: function () {
                return this.x + this.width / 2;
              },
              setCenterX: function (t) {
                this._fw || 0.5 === this._sx
                  ? (this.x = t - this.width / 2)
                  : (this._sx && (this.x += (t - this.x) * 2 * this._sx),
                    (this.width = (t - this.x) * 2)),
                  (this._sx = 0.5),
                  (this._fw = 0);
              },
              getCenterY: function () {
                return this.y + this.height / 2;
              },
              setCenterY: function (t) {
                this._fh || 0.5 === this._sy
                  ? (this.y = t - this.height / 2)
                  : (this._sy && (this.y += (t - this.y) * 2 * this._sy),
                    (this.height = (t - this.y) * 2)),
                  (this._sy = 0.5),
                  (this._fh = 0);
              },
              getCenter: function (t) {
                return new (t ? m : y)(
                  this.getCenterX(),
                  this.getCenterY(),
                  this,
                  "setCenter"
                );
              },
              setCenter: function () {
                var t = m.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this;
              },
              getArea: function () {
                return this.width * this.height;
              },
              isEmpty: function () {
                return 0 === this.width || 0 === this.height;
              },
              contains: function (t) {
                return (t && o !== t.width) ||
                  4 === (Array.isArray(t) ? t : arguments).length
                  ? this._containsRectangle(b.read(arguments))
                  : this._containsPoint(m.read(arguments));
              },
              _containsPoint: function (t) {
                var e = t.x,
                  n = t.y;
                return (
                  e >= this.x &&
                  n >= this.y &&
                  e <= this.x + this.width &&
                  n <= this.y + this.height
                );
              },
              _containsRectangle: function (t) {
                var e = t.x,
                  n = t.y;
                return (
                  e >= this.x &&
                  n >= this.y &&
                  e + t.width <= this.x + this.width &&
                  n + t.height <= this.y + this.height
                );
              },
              intersects: function () {
                var t = b.read(arguments),
                  e = l.read(arguments) || 0;
                return (
                  t.x + t.width > this.x - e &&
                  t.y + t.height > this.y - e &&
                  t.x < this.x + this.width + e &&
                  t.y < this.y + this.height + e
                );
              },
              intersect: function () {
                var t = b.read(arguments),
                  e = Math.max(this.x, t.x),
                  n = Math.max(this.y, t.y);
                return new b(
                  e,
                  n,
                  Math.min(this.x + this.width, t.x + t.width) - e,
                  Math.min(this.y + this.height, t.y + t.height) - n
                );
              },
              unite: function () {
                var t = b.read(arguments),
                  e = Math.min(this.x, t.x),
                  n = Math.min(this.y, t.y);
                return new b(
                  e,
                  n,
                  Math.max(this.x + this.width, t.x + t.width) - e,
                  Math.max(this.y + this.height, t.y + t.height) - n
                );
              },
              include: function () {
                var t = m.read(arguments),
                  e = Math.min(this.x, t.x),
                  n = Math.min(this.y, t.y);
                return new b(
                  e,
                  n,
                  Math.max(this.x + this.width, t.x) - e,
                  Math.max(this.y + this.height, t.y) - n
                );
              },
              expand: function () {
                var t = w.read(arguments),
                  e = t.width,
                  n = t.height;
                return new b(
                  this.x - e / 2,
                  this.y - n / 2,
                  this.width + e,
                  this.height + n
                );
              },
              scale: function (t, e) {
                return this.expand(
                  this.width * t - this.width,
                  this.height * (o === e ? t : e) - this.height
                );
              },
            },
            l.each(
              [
                ["Top", "Left"],
                ["Top", "Right"],
                ["Bottom", "Left"],
                ["Bottom", "Right"],
                ["Left", "Center"],
                ["Top", "Center"],
                ["Right", "Center"],
                ["Bottom", "Center"],
              ],
              function (t, e) {
                var n = t.join(""),
                  i = /^[RL]/.test(n);
                e >= 4 && (t[1] += i ? "Y" : "X");
                var r = t[i ? 0 : 1],
                  s = t[i ? 1 : 0],
                  a = "get" + r,
                  o = "get" + s,
                  h = "set" + r,
                  u = "set" + s,
                  l = "get" + n,
                  c = "set" + n;
                (this[l] = function (t) {
                  return new (t ? m : y)(this[a](), this[o](), this, c);
                }),
                  (this[c] = function () {
                    var t = m.read(arguments);
                    this[h](t.x), this[u](t.y);
                  });
              },
              { beans: !0 }
            )
          ),
          C = b.extend(
            {
              initialize: function (t, e, n, i, r, s) {
                this._set(t, e, n, i, !0),
                  (this._owner = r),
                  (this._setter = s);
              },
              _set: function (t, e, n, i, r) {
                return (
                  (this._x = t),
                  (this._y = e),
                  (this._width = n),
                  (this._height = i),
                  r || this._owner[this._setter](this),
                  this
                );
              },
            },
            new (function () {
              var t = b.prototype;
              return l.each(
                ["x", "y", "width", "height"],
                function (t) {
                  var e = l.capitalize(t),
                    n = "_" + t;
                  (this["get" + e] = function () {
                    return this[n];
                  }),
                    (this["set" + e] = function (t) {
                      (this[n] = t),
                        this._dontNotify || this._owner[this._setter](this);
                    });
                },
                l.each(
                  [
                    "Point",
                    "Size",
                    "Center",
                    "Left",
                    "Top",
                    "Right",
                    "Bottom",
                    "CenterX",
                    "CenterY",
                    "TopLeft",
                    "TopRight",
                    "BottomLeft",
                    "BottomRight",
                    "LeftCenter",
                    "TopCenter",
                    "RightCenter",
                    "BottomCenter",
                  ],
                  function (e) {
                    var n = "set" + e;
                    this[n] = function () {
                      (this._dontNotify = !0),
                        t[n].apply(this, arguments),
                        (this._dontNotify = !1),
                        this._owner[this._setter](this);
                    };
                  },
                  {
                    isSelected: function () {
                      return !!(2 & this._owner._selection);
                    },
                    setSelected: function (t) {
                      var e = this._owner;
                      e._changeSelection && e._changeSelection(2, t);
                    },
                  }
                )
              );
            })()
          ),
          S = l.extend(
            {
              _class: "Matrix",
              initialize: function t(e, n) {
                var i = arguments,
                  r = i.length,
                  s = !0;
                if (
                  (r >= 6
                    ? this._set.apply(this, i)
                    : 1 === r || 2 === r
                      ? e instanceof t
                        ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n)
                        : Array.isArray(e)
                          ? this._set.apply(this, n ? e.concat([n]) : e)
                          : (s = !1)
                      : r
                        ? (s = !1)
                        : this.reset(),
                  !s)
                )
                  throw Error("Unsupported matrix parameters");
                return this;
              },
              set: "#initialize",
              _set: function (t, e, n, i, r, s, a) {
                return (
                  (this._a = t),
                  (this._b = e),
                  (this._c = n),
                  (this._d = i),
                  (this._tx = r),
                  (this._ty = s),
                  a || this._changed(),
                  this
                );
              },
              _serialize: function (t, e) {
                return l.serialize(this.getValues(), t, !0, e);
              },
              _changed: function () {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25));
              },
              clone: function () {
                return new S(
                  this._a,
                  this._b,
                  this._c,
                  this._d,
                  this._tx,
                  this._ty
                );
              },
              equals: function (t) {
                return (
                  t === this ||
                  (t &&
                    this._a === t._a &&
                    this._b === t._b &&
                    this._c === t._c &&
                    this._d === t._d &&
                    this._tx === t._tx &&
                    this._ty === t._ty)
                );
              },
              toString: function () {
                var t = g.instance;
                return (
                  "[[" +
                  [
                    t.number(this._a),
                    t.number(this._c),
                    t.number(this._tx),
                  ].join(", ") +
                  "], [" +
                  [
                    t.number(this._b),
                    t.number(this._d),
                    t.number(this._ty),
                  ].join(", ") +
                  "]]"
                );
              },
              reset: function (t) {
                return (
                  (this._a = this._d = 1),
                  (this._b = this._c = this._tx = this._ty = 0),
                  t || this._changed(),
                  this
                );
              },
              apply: function (t, e) {
                var n = this._owner;
                return (
                  !!n &&
                  (n.transform(null, l.pick(t, !0), e), this.isIdentity())
                );
              },
              translate: function () {
                var t = m.read(arguments),
                  e = t.x,
                  n = t.y;
                return (
                  (this._tx += e * this._a + n * this._c),
                  (this._ty += e * this._b + n * this._d),
                  this._changed(),
                  this
                );
              },
              scale: function () {
                var t = arguments,
                  e = m.read(t),
                  n = m.read(t, 0, { readNull: !0 });
                return (
                  n && this.translate(n),
                  (this._a *= e.x),
                  (this._b *= e.x),
                  (this._c *= e.y),
                  (this._d *= e.y),
                  n && this.translate(n.negate()),
                  this._changed(),
                  this
                );
              },
              rotate: function (t) {
                t *= Math.PI / 180;
                var e = m.read(arguments, 1),
                  n = e.x,
                  i = e.y,
                  r = Math.cos(t),
                  s = Math.sin(t),
                  a = n - n * r + i * s,
                  o = i - n * s - i * r,
                  h = this._a,
                  u = this._b,
                  l = this._c,
                  c = this._d;
                return (
                  (this._a = r * h + s * l),
                  (this._b = r * u + s * c),
                  (this._c = -s * h + r * l),
                  (this._d = -s * u + r * c),
                  (this._tx += a * h + o * l),
                  (this._ty += a * u + o * c),
                  this._changed(),
                  this
                );
              },
              shear: function () {
                var t = arguments,
                  e = m.read(t),
                  n = m.read(t, 0, { readNull: !0 });
                n && this.translate(n);
                var i = this._a,
                  r = this._b;
                return (
                  (this._a += e.y * this._c),
                  (this._b += e.y * this._d),
                  (this._c += e.x * i),
                  (this._d += e.x * r),
                  n && this.translate(n.negate()),
                  this._changed(),
                  this
                );
              },
              skew: function () {
                var t = arguments,
                  e = m.read(t),
                  n = m.read(t, 0, { readNull: !0 }),
                  i = Math.PI / 180,
                  r = new m(Math.tan(e.x * i), Math.tan(e.y * i));
                return this.shear(r, n);
              },
              append: function (t, e) {
                if (t) {
                  var n = this._a,
                    i = this._b,
                    r = this._c,
                    s = this._d,
                    a = t._a,
                    o = t._c,
                    h = t._b,
                    u = t._d,
                    l = t._tx,
                    c = t._ty;
                  (this._a = a * n + h * r),
                    (this._c = o * n + u * r),
                    (this._b = a * i + h * s),
                    (this._d = o * i + u * s),
                    (this._tx += l * n + c * r),
                    (this._ty += l * i + c * s),
                    e || this._changed();
                }
                return this;
              },
              prepend: function (t, e) {
                if (t) {
                  var n = this._a,
                    i = this._b,
                    r = this._c,
                    s = this._d,
                    a = this._tx,
                    o = this._ty,
                    h = t._a,
                    u = t._c,
                    l = t._b,
                    c = t._d,
                    f = t._tx,
                    d = t._ty;
                  (this._a = h * n + u * i),
                    (this._c = h * r + u * s),
                    (this._b = l * n + c * i),
                    (this._d = l * r + c * s),
                    (this._tx = h * a + u * o + f),
                    (this._ty = l * a + c * o + d),
                    e || this._changed();
                }
                return this;
              },
              appended: function (t) {
                return this.clone().append(t);
              },
              prepended: function (t) {
                return this.clone().prepend(t);
              },
              invert: function () {
                var t = this._a,
                  e = this._b,
                  n = this._c,
                  i = this._d,
                  r = this._tx,
                  s = this._ty,
                  a = t * i - e * n,
                  o = null;
                return (
                  a &&
                    !isNaN(a) &&
                    isFinite(r) &&
                    isFinite(s) &&
                    ((this._a = i / a),
                    (this._b = -e / a),
                    (this._c = -n / a),
                    (this._d = t / a),
                    (this._tx = (n * s - i * r) / a),
                    (this._ty = (e * r - t * s) / a),
                    (o = this)),
                  o
                );
              },
              inverted: function () {
                return this.clone().invert();
              },
              concatenate: "#append",
              preConcatenate: "#prepend",
              chain: "#appended",
              _shiftless: function () {
                return new S(this._a, this._b, this._c, this._d, 0, 0);
              },
              _orNullIfIdentity: function () {
                return this.isIdentity() ? null : this;
              },
              isIdentity: function () {
                return (
                  1 === this._a &&
                  0 === this._b &&
                  0 === this._c &&
                  1 === this._d &&
                  0 === this._tx &&
                  0 === this._ty
                );
              },
              isInvertible: function () {
                var t = this._a * this._d - this._c * this._b;
                return (
                  t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
                );
              },
              isSingular: function () {
                return !this.isInvertible();
              },
              transform: function (t, e, n) {
                return arguments.length < 3
                  ? this._transformPoint(m.read(arguments))
                  : this._transformCoordinates(t, e, n);
              },
              _transformPoint: function (t, e, n) {
                var i = t.x,
                  r = t.y;
                return (
                  e || (e = new m()),
                  e._set(
                    i * this._a + r * this._c + this._tx,
                    i * this._b + r * this._d + this._ty,
                    n
                  )
                );
              },
              _transformCoordinates: function (t, e, n) {
                for (var i = 0, r = 2 * n; i < r; i += 2) {
                  var s = t[i],
                    a = t[i + 1];
                  (e[i] = s * this._a + a * this._c + this._tx),
                    (e[i + 1] = s * this._b + a * this._d + this._ty);
                }
                return e;
              },
              _transformCorners: function (t) {
                var e = t.x,
                  n = t.y,
                  i = e + t.width,
                  r = n + t.height,
                  s = [e, n, i, n, i, r, e, r];
                return this._transformCoordinates(s, s, 4);
              },
              _transformBounds: function (t, e, n) {
                for (
                  var i = this._transformCorners(t),
                    r = i.slice(0, 2),
                    s = r.slice(),
                    a = 2;
                  a < 8;
                  a++
                ) {
                  var o = i[a],
                    h = 1 & a;
                  o < r[h] ? (r[h] = o) : o > s[h] && (s[h] = o);
                }
                return (
                  e || (e = new b()),
                  e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
                );
              },
              inverseTransform: function () {
                return this._inverseTransform(m.read(arguments));
              },
              _inverseTransform: function (t, e, n) {
                var i = this._a,
                  r = this._b,
                  s = this._c,
                  a = this._d,
                  o = this._tx,
                  h = this._ty,
                  u = i * a - r * s,
                  l = null;
                if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                  var c = t.x - this._tx,
                    f = t.y - this._ty;
                  e || (e = new m()),
                    (l = e._set((c * a - f * s) / u, (f * i - c * r) / u, n));
                }
                return l;
              },
              decompose: function () {
                var t,
                  e,
                  n,
                  i = this._a,
                  r = this._b,
                  s = this._c,
                  a = this._d,
                  o = i * a - r * s,
                  h = Math.sqrt,
                  u = Math.atan2,
                  l = 180 / Math.PI;
                if (0 !== i || 0 !== r) {
                  var c = h(i * i + r * r);
                  (t = Math.acos(i / c) * (r > 0 ? 1 : -1)),
                    (e = [c, o / c]),
                    (n = [u(i * s + r * a, c * c), 0]);
                } else if (0 !== s || 0 !== a) {
                  var f = h(s * s + a * a);
                  (t = Math.asin(s / f) * (a > 0 ? 1 : -1)),
                    (e = [o / f, f]),
                    (n = [0, u(i * s + r * a, f * f)]);
                } else (t = 0), (n = e = [0, 0]);
                return {
                  translation: this.getTranslation(),
                  rotation: t * l,
                  scaling: new m(e),
                  skewing: new m(n[0] * l, n[1] * l),
                };
              },
              getValues: function () {
                return [this._a, this._b, this._c, this._d, this._tx, this._ty];
              },
              getTranslation: function () {
                return new m(this._tx, this._ty);
              },
              getScaling: function () {
                return this.decompose().scaling;
              },
              getRotation: function () {
                return this.decompose().rotation;
              },
              applyToContext: function (t) {
                this.isIdentity() ||
                  t.transform(
                    this._a,
                    this._b,
                    this._c,
                    this._d,
                    this._tx,
                    this._ty
                  );
              },
            },
            l.each(
              ["a", "b", "c", "d", "tx", "ty"],
              function (t) {
                var e = l.capitalize(t),
                  n = "_" + t;
                (this["get" + e] = function () {
                  return this[n];
                }),
                  (this["set" + e] = function (t) {
                    (this[n] = t), this._changed();
                  });
              },
              {}
            )
          ),
          k = l.extend({
            _class: "Line",
            initialize: function (t, e, n, i, r) {
              var s = !1;
              arguments.length >= 4
                ? ((this._px = t),
                  (this._py = e),
                  (this._vx = n),
                  (this._vy = i),
                  (s = r))
                : ((this._px = t.x),
                  (this._py = t.y),
                  (this._vx = e.x),
                  (this._vy = e.y),
                  (s = n)),
                s || ((this._vx -= this._px), (this._vy -= this._py));
            },
            getPoint: function () {
              return new m(this._px, this._py);
            },
            getVector: function () {
              return new m(this._vx, this._vy);
            },
            getLength: function () {
              return this.getVector().getLength();
            },
            intersect: function (t, e) {
              return k.intersect(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t._px,
                t._py,
                t._vx,
                t._vy,
                !0,
                e
              );
            },
            getSide: function (t, e) {
              return k.getSide(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t.x,
                t.y,
                !0,
                e
              );
            },
            getDistance: function (t) {
              return Math.abs(this.getSignedDistance(t));
            },
            getSignedDistance: function (t) {
              return k.getSignedDistance(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t.x,
                t.y,
                !0
              );
            },
            isCollinear: function (t) {
              return m.isCollinear(this._vx, this._vy, t._vx, t._vy);
            },
            isOrthogonal: function (t) {
              return m.isOrthogonal(this._vx, this._vy, t._vx, t._vy);
            },
            statics: {
              intersect: function (t, e, n, i, r, s, a, o, h, u) {
                h || ((n -= t), (i -= e), (a -= r), (o -= s));
                var l = n * o - i * a;
                if (!v.isMachineZero(l)) {
                  var c = t - r,
                    f = e - s,
                    d = (a * f - o * c) / l,
                    _ = (n * f - i * c) / l;
                  if (
                    u ||
                    (-0.000000000001 < d &&
                      d < 1.000000000001 &&
                      -0.000000000001 < _ &&
                      _ < 1.000000000001)
                  )
                    return (
                      u || (d = d <= 0 ? 0 : d >= 1 ? 1 : d),
                      new m(t + d * n, e + d * i)
                    );
                }
              },
              getSide: function (t, e, n, i, r, s, a, o) {
                a || ((n -= t), (i -= e));
                var h = r - t,
                  u = h * i - (s - e) * n;
                return (
                  !o &&
                    v.isMachineZero(u) &&
                    (u = (h * n + h * n) / (n * n + i * i)) >= 0 &&
                    u <= 1 &&
                    (u = 0),
                  u < 0 ? -1 : u > 0 ? 1 : 0
                );
              },
              getSignedDistance: function (t, e, n, i, r, s, a) {
                return (
                  a || ((n -= t), (i -= e)),
                  0 === n
                    ? i > 0
                      ? r - t
                      : t - r
                    : 0 === i
                      ? n < 0
                        ? s - e
                        : e - s
                      : ((r - t) * i - (s - e) * n) /
                        (i > n
                          ? i * Math.sqrt(1 + (n * n) / (i * i))
                          : n * Math.sqrt(1 + (i * i) / (n * n)))
                );
              },
              getDistance: function (t, e, n, i, r, s, a) {
                return Math.abs(k.getSignedDistance(t, e, n, i, r, s, a));
              },
            },
          }),
          I = d.extend({
            _class: "Project",
            _list: "projects",
            _reference: "project",
            _compactSerialize: !0,
            initialize: function (t) {
              d.call(this, !0),
                (this._children = []),
                (this._namedChildren = {}),
                (this._activeLayer = null),
                (this._currentStyle = new J(null, null, this)),
                (this._view = Q.create(this, t || th.getCanvas(1, 1))),
                (this._selectionItems = {}),
                (this._selectionCount = 0),
                (this._updateVersion = 0);
            },
            _serialize: function (t, e) {
              return l.serialize(this._children, t, !0, e);
            },
            _changed: function (t, e) {
              if (1 & t) {
                var n = this._view;
                n &&
                  ((n._needsUpdate = !0),
                  !n._requested && n._autoUpdate && n.requestUpdate());
              }
              var i = this._changes;
              if (i && e) {
                var r = this._changesById,
                  s = e._id,
                  a = r[s];
                a ? (a.flags |= t) : i.push((r[s] = { item: e, flags: t }));
              }
            },
            clear: function () {
              for (var t = this._children, e = t.length - 1; e >= 0; e--)
                t[e].remove();
            },
            isEmpty: function () {
              return !this._children.length;
            },
            remove: function t() {
              return (
                !!t.base.call(this) && (this._view && this._view.remove(), !0)
              );
            },
            getView: function () {
              return this._view;
            },
            getCurrentStyle: function () {
              return this._currentStyle;
            },
            setCurrentStyle: function (t) {
              this._currentStyle.set(t);
            },
            getIndex: function () {
              return this._index;
            },
            getOptions: function () {
              return this._scope.settings;
            },
            getLayers: function () {
              return this._children;
            },
            getActiveLayer: function () {
              return this._activeLayer || new M({ project: this, insert: !0 });
            },
            getSymbolDefinitions: function () {
              var t = [],
                e = {};
              return (
                this.getItems({
                  class: z,
                  match: function (n) {
                    var i = n._definition,
                      r = i._id;
                    return e[r] || ((e[r] = !0), t.push(i)), !1;
                  },
                }),
                t
              );
            },
            getSymbols: "getSymbolDefinitions",
            getSelectedItems: function () {
              var t = this._selectionItems,
                e = [];
              for (var n in t) {
                var i = t[n],
                  r = i._selection;
                1 & r && i.isInserted()
                  ? e.push(i)
                  : r || this._updateSelection(i);
              }
              return e;
            },
            _updateSelection: function (t) {
              var e = t._id,
                n = this._selectionItems;
              t._selection
                ? n[e] !== t && (this._selectionCount++, (n[e] = t))
                : n[e] === t && (this._selectionCount--, delete n[e]);
            },
            selectAll: function () {
              for (var t = this._children, e = 0, n = t.length; e < n; e++)
                t[e].setFullySelected(!0);
            },
            deselectAll: function () {
              var t = this._selectionItems;
              for (var e in t) t[e].setFullySelected(!1);
            },
            addLayer: function (t) {
              return this.insertLayer(o, t);
            },
            insertLayer: function (t, e) {
              if (e instanceof M) {
                e._remove(!1, !0),
                  l.splice(this._children, [e], t, 0),
                  e._setProject(this, !0);
                var n = e._name;
                n && e.setName(n),
                  this._changes && e._changed(5),
                  this._activeLayer || (this._activeLayer = e);
              } else e = null;
              return e;
            },
            _insertItem: function (t, e, n) {
              return (
                (e =
                  this.insertLayer(t, e) ||
                  (
                    this._activeLayer ||
                    this._insertItem(o, new M(P.NO_INSERT), !0)
                  ).insertChild(t, e)),
                n && e.activate && e.activate(),
                e
              );
            },
            getItems: function (t) {
              return P._getItems(this, t);
            },
            getItem: function (t) {
              return P._getItems(this, t, null, null, !0)[0] || null;
            },
            importJSON: function (t) {
              this.activate();
              var e = this._activeLayer;
              return l.importJSON(t, e && e.isEmpty() && e);
            },
            removeOn: function (t) {
              var e = this._removeSets;
              if (e) {
                "mouseup" === t && (e.mousedrag = null);
                var n = e[t];
                if (n) {
                  for (var i in n) {
                    var r = n[i];
                    for (var s in e) {
                      var a = e[s];
                      a && a != n && delete a[r._id];
                    }
                    r.remove();
                  }
                  e[t] = null;
                }
              }
            },
            draw: function (t, e, n) {
              this._updateVersion++, t.save(), e.applyToContext(t);
              for (
                var i = this._children,
                  r = new l({
                    offset: new m(0, 0),
                    pixelRatio: n,
                    viewMatrix: e.isIdentity() ? null : e,
                    matrices: [new S()],
                    updateMatrix: !0,
                  }),
                  s = 0,
                  a = i.length;
                s < a;
                s++
              )
                i[s].draw(t, r);
              if ((t.restore(), this._selectionCount > 0)) {
                t.save(), (t.strokeWidth = 1);
                var o = this._selectionItems,
                  h = this._scope.settings.handleSize,
                  u = this._updateVersion;
                for (var c in o) o[c]._drawSelection(t, e, h, o, u);
                t.restore();
              }
            },
          }),
          P = l.extend(
            c,
            {
              statics: {
                extend: function t(e) {
                  return (
                    e._serializeFields &&
                      (e._serializeFields = l.set(
                        {},
                        this.prototype._serializeFields,
                        e._serializeFields
                      )),
                    t.base.apply(this, arguments)
                  );
                },
                INSERT: { insert: !0 },
                NO_INSERT: { insert: !1 },
              },
              _class: "Item",
              _name: null,
              _applyMatrix: !0,
              _canApplyMatrix: !0,
              _canScaleStroke: !1,
              _pivot: null,
              _visible: !0,
              _blendMode: "normal",
              _opacity: 1,
              _locked: !1,
              _guide: !1,
              _clipMask: !1,
              _selection: 0,
              _selectBounds: !0,
              _selectChildren: !1,
              _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new S(),
                pivot: null,
                visible: !0,
                blendMode: "normal",
                opacity: 1,
                locked: !1,
                guide: !1,
                clipMask: !1,
                selected: !1,
                data: {},
              },
              _prioritize: ["applyMatrix"],
            },
            new (function () {
              var t = [
                "onMouseDown",
                "onMouseUp",
                "onMouseDrag",
                "onClick",
                "onDoubleClick",
                "onMouseMove",
                "onMouseEnter",
                "onMouseLeave",
              ];
              return l.each(
                t,
                function (t) {
                  this._events[t] = {
                    install: function (t) {
                      this.getView()._countItemEvent(t, 1);
                    },
                    uninstall: function (t) {
                      this.getView()._countItemEvent(t, -1);
                    },
                  };
                },
                {
                  _events: {
                    onFrame: {
                      install: function () {
                        this.getView()._animateItem(this, !0);
                      },
                      uninstall: function () {
                        this.getView()._animateItem(this, !1);
                      },
                    },
                    onLoad: {},
                    onError: {},
                  },
                  statics: { _itemHandlers: t },
                }
              );
            })(),
            {
              initialize: function () {},
              _initialize: function (t, e) {
                var n = t && l.isPlainObject(t),
                  i = n && !0 === t.internal,
                  r = (this._matrix = new S()),
                  s = (n && t.project) || tf.project,
                  a = tf.settings;
                return (
                  (this._id = i ? null : p.get()),
                  (this._parent = this._index = null),
                  (this._applyMatrix = this._canApplyMatrix && a.applyMatrix),
                  e && r.translate(e),
                  (r._owner = this),
                  (this._style = new J(s._currentStyle, this, s)),
                  i ||
                  (n && !1 == t.insert) ||
                  (!a.insertItems && !(n && !0 == t.insert))
                    ? this._setProject(s)
                    : ((n && t.parent) || s)._insertItem(o, this, !0),
                  n &&
                    t !== P.NO_INSERT &&
                    t !== P.INSERT &&
                    this.set(t, {
                      internal: !0,
                      insert: !0,
                      project: !0,
                      parent: !0,
                    }),
                  n
                );
              },
              _serialize: function (t, e) {
                var n = {},
                  i = this;
                function r(r) {
                  for (var s in r) {
                    var a = i[s];
                    l.equals(a, "leading" === s ? 1.2 * r.fontSize : r[s]) ||
                      (n[s] = l.serialize(a, t, "data" !== s, e));
                  }
                }
                return (
                  r(this._serializeFields),
                  this instanceof T || r(this._style._defaults),
                  [this._class, n]
                );
              },
              _changed: function (t) {
                var e = this._symbol,
                  n = this._parent || e,
                  i = this._project;
                8 & t && (this._bounds = this._position = this._decomposed = o),
                  16 & t && (this._globalMatrix = o),
                  n && 72 & t && P._clearBoundsCache(n),
                  2 & t && P._clearBoundsCache(this),
                  i && i._changed(t, this),
                  e && e._changed(t);
              },
              getId: function () {
                return this._id;
              },
              getName: function () {
                return this._name;
              },
              setName: function (t) {
                if ((this._name && this._removeNamed(), t === +t + ""))
                  throw Error(
                    "Names consisting only of numbers are not supported."
                  );
                var e = this._getOwner();
                if (t && e) {
                  var n = e._children,
                    i = e._namedChildren;
                  (i[t] = i[t] || []).push(this), t in n || (n[t] = this);
                }
                (this._name = t || o), this._changed(256);
              },
              getStyle: function () {
                return this._style;
              },
              setStyle: function (t) {
                this.getStyle().set(t);
              },
            },
            l.each(
              ["locked", "visible", "blendMode", "opacity", "guide"],
              function (t) {
                var e = l.capitalize(t),
                  n = "_" + t,
                  i = { locked: 256, visible: 265 };
                (this["get" + e] = function () {
                  return this[n];
                }),
                  (this["set" + e] = function (e) {
                    e != this[n] && ((this[n] = e), this._changed(i[t] || 257));
                  });
              },
              {}
            ),
            {
              beans: !0,
              getSelection: function () {
                return this._selection;
              },
              setSelection: function (t) {
                if (t !== this._selection) {
                  this._selection = t;
                  var e = this._project;
                  e && (e._updateSelection(this), this._changed(257));
                }
              },
              _changeSelection: function (t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t);
              },
              isSelected: function () {
                if (this._selectChildren) {
                  for (var t = this._children, e = 0, n = t.length; e < n; e++)
                    if (t[e].isSelected()) return !0;
                }
                return !!(1 & this._selection);
              },
              setSelected: function (t) {
                if (this._selectChildren)
                  for (var e = this._children, n = 0, i = e.length; n < i; n++)
                    e[n].setSelected(t);
                this._changeSelection(1, t);
              },
              isFullySelected: function () {
                var t = this._children,
                  e = !!(1 & this._selection);
                if (t && e) {
                  for (var n = 0, i = t.length; n < i; n++)
                    if (!t[n].isFullySelected()) return !1;
                  return !0;
                }
                return e;
              },
              setFullySelected: function (t) {
                var e = this._children;
                if (e)
                  for (var n = 0, i = e.length; n < i; n++)
                    e[n].setFullySelected(t);
                this._changeSelection(1, t);
              },
              isClipMask: function () {
                return this._clipMask;
              },
              setClipMask: function (t) {
                this._clipMask != (t = !!t) &&
                  ((this._clipMask = t),
                  t && (this.setFillColor(null), this.setStrokeColor(null)),
                  this._changed(257),
                  this._parent && this._parent._changed(2048));
              },
              getData: function () {
                return this._data || (this._data = {}), this._data;
              },
              setData: function (t) {
                this._data = t;
              },
              getPosition: function (t) {
                var e = t ? m : y,
                  n =
                    this._position ||
                    (this._position = this._getPositionFromBounds());
                return new e(n.x, n.y, this, "setPosition");
              },
              setPosition: function () {
                this.translate(
                  m.read(arguments).subtract(this.getPosition(!0))
                );
              },
              _getPositionFromBounds: function (t) {
                return this._pivot
                  ? this._matrix._transformPoint(this._pivot)
                  : (t || this.getBounds()).getCenter(!0);
              },
              getPivot: function () {
                var t = this._pivot;
                return t ? new y(t.x, t.y, this, "setPivot") : null;
              },
              setPivot: function () {
                (this._pivot = m.read(arguments, 0, {
                  clone: !0,
                  readNull: !0,
                })),
                  (this._position = o);
              },
            },
            l.each(
              {
                getStrokeBounds: { stroke: !0 },
                getHandleBounds: { handle: !0 },
                getInternalBounds: { internal: !0 },
              },
              function (t, e) {
                this[e] = function (e) {
                  return this.getBounds(e, t);
                };
              },
              {
                beans: !0,
                getBounds: function (t, e) {
                  var n = e || t instanceof S,
                    i = l.set({}, n ? e : t, this._boundsOptions);
                  (!i.stroke || this.getStrokeScaling()) &&
                    (i.cacheItem = this);
                  var r = this._getCachedBounds(n && t, i).rect;
                  return arguments.length
                    ? r
                    : new C(r.x, r.y, r.width, r.height, this, "setBounds");
                },
                setBounds: function () {
                  var t = b.read(arguments),
                    e = this.getBounds(),
                    n = this._matrix,
                    i = new S(),
                    r = t.getCenter();
                  i.translate(r),
                    (t.width != e.width || t.height != e.height) &&
                      (n.isInvertible() ||
                        (n.set(
                          n._backup || new S().translate(n.getTranslation())
                        ),
                        (e = this.getBounds())),
                      i.scale(
                        0 !== e.width ? t.width / e.width : 0,
                        0 !== e.height ? t.height / e.height : 0
                      )),
                    (r = e.getCenter()),
                    i.translate(-r.x, -r.y),
                    this.transform(i);
                },
                _getBounds: function (t, e) {
                  var n = this._children;
                  return n && n.length
                    ? (P._updateBoundsCache(this, e.cacheItem),
                      P._getBounds(n, t, e))
                    : new b();
                },
                _getBoundsCacheKey: function (t, e) {
                  return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join(
                    ""
                  );
                },
                _getCachedBounds: function (t, e, n) {
                  t = t && t._orNullIfIdentity();
                  var i = e.internal && !n,
                    r = e.cacheItem,
                    s = i ? null : this._matrix._orNullIfIdentity(),
                    a =
                      r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i),
                    o = this._bounds;
                  if (
                    (P._updateBoundsCache(this._parent || this._symbol, r),
                    a && o && a in o)
                  ) {
                    var h = o[a];
                    return { rect: h.rect.clone(), nonscaling: h.nonscaling };
                  }
                  var u = this._getBounds(t || s, e),
                    l = u.rect || u,
                    c = this._style,
                    f =
                      u.nonscaling || (c.hasStroke() && !c.getStrokeScaling());
                  if (a) {
                    o || (this._bounds = o = {});
                    var h = (o[a] = {
                      rect: l.clone(),
                      nonscaling: f,
                      internal: i,
                    });
                  }
                  return { rect: l, nonscaling: f };
                },
                _getStrokeMatrix: function (t, e) {
                  var n = this.getStrokeScaling()
                      ? null
                      : e && e.internal
                        ? this
                        : this._parent || (this._symbol && this._symbol._item),
                    i = n ? n.getViewMatrix().invert() : t;
                  return i && i._shiftless();
                },
                statics: {
                  _updateBoundsCache: function (t, e) {
                    if (t && e) {
                      var n = e._id,
                        i = (t._boundsCache = t._boundsCache || {
                          ids: {},
                          list: [],
                        });
                      i.ids[n] || (i.list.push(e), (i.ids[n] = e));
                    }
                  },
                  _clearBoundsCache: function (t) {
                    var e = t._boundsCache;
                    if (e) {
                      t._bounds = t._position = t._boundsCache = o;
                      for (var n = 0, i = e.list, r = i.length; n < r; n++) {
                        var s = i[n];
                        s !== t &&
                          ((s._bounds = s._position = o),
                          s._boundsCache && P._clearBoundsCache(s));
                      }
                    }
                  },
                  _getBounds: function (t, e, n) {
                    var i = 1 / 0,
                      r = -1 / 0,
                      s = 1 / 0,
                      a = r,
                      o = !1;
                    n = n || {};
                    for (var h = 0, u = t.length; h < u; h++) {
                      var l = t[h];
                      if (l._visible && !l.isEmpty(!0)) {
                        var c = l._getCachedBounds(
                            e && e.appended(l._matrix),
                            n,
                            !0
                          ),
                          f = c.rect;
                        (i = Math.min(f.x, i)),
                          (s = Math.min(f.y, s)),
                          (r = Math.max(f.x + f.width, r)),
                          (a = Math.max(f.y + f.height, a)),
                          c.nonscaling && (o = !0);
                      }
                    }
                    return {
                      rect: isFinite(i) ? new b(i, s, r - i, a - s) : new b(),
                      nonscaling: o,
                    };
                  },
                },
              }
            ),
            {
              beans: !0,
              _decompose: function () {
                return this._applyMatrix
                  ? null
                  : this._decomposed ||
                      (this._decomposed = this._matrix.decompose());
              },
              getRotation: function () {
                var t = this._decompose();
                return t ? t.rotation : 0;
              },
              setRotation: function (t) {
                var e = this.getRotation();
                if (null != e && null != t) {
                  var n = this._decomposed;
                  this.rotate(t - e),
                    n && ((n.rotation = t), (this._decomposed = n));
                }
              },
              getScaling: function () {
                var t = this._decompose(),
                  e = t && t.scaling;
                return new y(e ? e.x : 1, e ? e.y : 1, this, "setScaling");
              },
              setScaling: function () {
                var t = this.getScaling(),
                  e = m.read(arguments, 0, { clone: !0, readNull: !0 });
                if (t && e && !t.equals(e)) {
                  var n = this.getRotation(),
                    i = this._decomposed,
                    r = new S(),
                    s = v.isZero;
                  if (s(t.x) || s(t.y))
                    r.translate(i.translation),
                      n && r.rotate(n),
                      r.scale(e.x, e.y),
                      this._matrix.set(r);
                  else {
                    var a = this.getPosition(!0);
                    r.translate(a),
                      n && r.rotate(n),
                      r.scale(e.x / t.x, e.y / t.y),
                      n && r.rotate(-n),
                      r.translate(a.negate()),
                      this.transform(r);
                  }
                  i && ((i.scaling = e), (this._decomposed = i));
                }
              },
              getMatrix: function () {
                return this._matrix;
              },
              setMatrix: function () {
                var t = this._matrix;
                t.set.apply(t, arguments);
              },
              getGlobalMatrix: function (t) {
                var e = this._globalMatrix;
                if (e)
                  for (var n = this._parent, i = []; n; ) {
                    if (!n._globalMatrix) {
                      e = null;
                      for (var r = 0, s = i.length; r < s; r++)
                        i[r]._globalMatrix = null;
                      break;
                    }
                    i.push(n), (n = n._parent);
                  }
                if (!e) {
                  e = this._globalMatrix = this._matrix.clone();
                  var n = this._parent;
                  n && e.prepend(n.getGlobalMatrix(!0));
                }
                return t ? e : e.clone();
              },
              getViewMatrix: function () {
                return this.getGlobalMatrix().prepend(this.getView()._matrix);
              },
              getApplyMatrix: function () {
                return this._applyMatrix;
              },
              setApplyMatrix: function (t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) &&
                  this.transform(null, !0);
              },
              getTransformContent: "#getApplyMatrix",
              setTransformContent: "#setApplyMatrix",
            },
            {
              getProject: function () {
                return this._project;
              },
              _setProject: function (t, e) {
                if (this._project !== t) {
                  this._project && this._installEvents(!1), (this._project = t);
                  for (
                    var n = this._children, i = 0, r = n && n.length;
                    i < r;
                    i++
                  )
                    n[i]._setProject(t);
                  e = !0;
                }
                e && this._installEvents(!0);
              },
              getView: function () {
                return this._project._view;
              },
              _installEvents: function t(e) {
                t.base.call(this, e);
                for (
                  var n = this._children, i = 0, r = n && n.length;
                  i < r;
                  i++
                )
                  n[i]._installEvents(e);
              },
              getLayer: function () {
                for (var t = this; (t = t._parent); )
                  if (t instanceof M) return t;
                return null;
              },
              getParent: function () {
                return this._parent;
              },
              setParent: function (t) {
                return t.addChild(this);
              },
              _getOwner: "#getParent",
              getChildren: function () {
                return this._children;
              },
              setChildren: function (t) {
                this.removeChildren(), this.addChildren(t);
              },
              getFirstChild: function () {
                return (this._children && this._children[0]) || null;
              },
              getLastChild: function () {
                return (
                  (this._children &&
                    this._children[this._children.length - 1]) ||
                  null
                );
              },
              getNextSibling: function () {
                var t = this._getOwner();
                return (t && t._children[this._index + 1]) || null;
              },
              getPreviousSibling: function () {
                var t = this._getOwner();
                return (t && t._children[this._index - 1]) || null;
              },
              getIndex: function () {
                return this._index;
              },
              equals: function (t) {
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    this._style.equals(t._style) &&
                    this._matrix.equals(t._matrix) &&
                    this._locked === t._locked &&
                    this._visible === t._visible &&
                    this._blendMode === t._blendMode &&
                    this._opacity === t._opacity &&
                    this._clipMask === t._clipMask &&
                    this._guide === t._guide &&
                    this._equals(t)) ||
                  !1
                );
              },
              _equals: function (t) {
                return l.equals(this._children, t._children);
              },
              clone: function (t) {
                var e = new this.constructor(P.NO_INSERT),
                  n = this._children,
                  i = l.pick(t ? t.insert : o, o === t || !0 === t),
                  r = l.pick(t ? t.deep : o, !0);
                n && e.copyAttributes(this),
                  (!n || r) && e.copyContent(this),
                  n || e.copyAttributes(this),
                  i && e.insertAbove(this);
                var s = this._name,
                  a = this._parent;
                if (s && a) {
                  for (var n = a._children, h = s, u = 1; n[s]; )
                    s = h + " " + u++;
                  s !== h && e.setName(s);
                }
                return e;
              },
              copyContent: function (t) {
                for (var e = t._children, n = 0, i = e && e.length; n < i; n++)
                  this.addChild(e[n].clone(!1), !0);
              },
              copyAttributes: function (t, e) {
                this.setStyle(t._style);
                for (
                  var n = [
                      "_locked",
                      "_visible",
                      "_blendMode",
                      "_opacity",
                      "_clipMask",
                      "_guide",
                    ],
                    i = 0,
                    r = n.length;
                  i < r;
                  i++
                ) {
                  var s = n[i];
                  t.hasOwnProperty(s) && (this[s] = t[s]);
                }
                e || this._matrix.set(t._matrix, !0),
                  this.setApplyMatrix(t._applyMatrix),
                  this.setPivot(t._pivot),
                  this.setSelection(t._selection);
                var a = t._data,
                  o = t._name;
                (this._data = a ? l.clone(a) : null), o && this.setName(o);
              },
              rasterize: function (t, e) {
                l.isPlainObject(t)
                  ? ((n = t.resolution), (i = t.insert), (r = t.raster))
                  : ((n = t), (i = e)),
                  r || (r = new O(P.NO_INSERT));
                var n,
                  i,
                  r,
                  s = this.getStrokeBounds(),
                  a = (n || this.getView().getResolution()) / 72,
                  h = s.getTopLeft().floor(),
                  u = new w(s.getBottomRight().ceil().subtract(h)),
                  c = u.multiply(a);
                if ((r.setSize(c, !0), !c.isZero())) {
                  var f = r.getContext(!0),
                    d = new S().scale(a).translate(h.negate());
                  f.save(),
                    d.applyToContext(f),
                    this.draw(f, new l({ matrices: [d] })),
                    f.restore();
                }
                return (
                  r._matrix.set(
                    new S().translate(h.add(u.divide(2))).scale(1 / a)
                  ),
                  (o === i || i) && r.insertAbove(this),
                  r
                );
              },
              contains: function () {
                var t = this._matrix;
                return (
                  t.isInvertible() &&
                  !!this._contains(t._inverseTransform(m.read(arguments)))
                );
              },
              _contains: function (t) {
                var e = this._children;
                if (e) {
                  for (var n = e.length - 1; n >= 0; n--)
                    if (e[n].contains(t)) return !0;
                  return !1;
                }
                return t.isInside(this.getInternalBounds());
              },
              isInside: function () {
                return b.read(arguments).contains(this.getBounds());
              },
              _asPathItem: function () {
                return new D.Rectangle({
                  rectangle: this.getInternalBounds(),
                  matrix: this._matrix,
                  insert: !1,
                });
              },
              intersects: function (t, e) {
                return (
                  t instanceof P &&
                  this._asPathItem().getIntersections(
                    t._asPathItem(),
                    null,
                    e,
                    !0
                  ).length > 0
                );
              },
            },
            new (function () {
              function t() {
                var t = arguments;
                return this._hitTest(m.read(t), L.getOptions(t));
              }
              function e() {
                var t = arguments,
                  e = m.read(t),
                  n = L.getOptions(t),
                  i = [];
                return this._hitTest(e, new l({ all: i }, n)), i;
              }
              function n(t, e, n, i) {
                var r = this._children;
                if (r)
                  for (var s = r.length - 1; s >= 0; s--) {
                    var a = r[s],
                      o = a !== i && a._hitTest(t, e, n);
                    if (o && !e.all) return o;
                  }
                return null;
              }
              return (
                I.inject({ hitTest: t, hitTestAll: e, _hitTest: n }),
                { hitTest: t, hitTestAll: e, _hitTestChildren: n }
              );
            })(),
            {
              _hitTest: function (t, e, n) {
                if (
                  this._locked ||
                  !this._visible ||
                  (this._guide && !e.guides) ||
                  this.isEmpty()
                )
                  return null;
                var i = this._matrix,
                  r = n
                    ? n.appended(i)
                    : this.getGlobalMatrix().prepend(this.getView()._matrix),
                  s = Math.max(e.tolerance, 1e-12),
                  a = (e._tolerancePadding = new w(
                    D._getStrokePadding(s, i._shiftless().invert())
                  ));
                if (
                  !(t = i._inverseTransform(t)) ||
                  (!this._children &&
                    !this.getBounds({ internal: !0, stroke: !0, handle: !0 })
                      .expand(a.multiply(2))
                      ._containsPoint(t))
                )
                  return null;
                var o,
                  h,
                  u = !(
                    (e.guides && !this._guide) ||
                    (e.selected && !this.isSelected()) ||
                    (e.type && e.type !== l.hyphenate(this._class)) ||
                    (e.class && !(this instanceof e.class))
                  ),
                  c = e.match,
                  f = this;
                function d(t) {
                  return (
                    t && c && !c(t) && (t = null),
                    t && e.all && e.all.push(t),
                    t
                  );
                }
                function _(e, n) {
                  var i = n ? o["get" + n]() : f.getPosition();
                  if (t.subtract(i).divide(a).length <= 1)
                    return new L(e, f, {
                      name: n ? l.hyphenate(n) : e,
                      point: i,
                    });
                }
                var g = e.position,
                  v = e.center,
                  p = e.bounds;
                if (u && this._parent && (g || v || p)) {
                  if (
                    ((v || p) && (o = this.getInternalBounds()),
                    !(h =
                      (g && _("position")) || (v && _("center", "Center"))) &&
                      p)
                  )
                    for (
                      var m = [
                          "TopLeft",
                          "TopRight",
                          "BottomLeft",
                          "BottomRight",
                          "LeftCenter",
                          "TopCenter",
                          "RightCenter",
                          "BottomCenter",
                        ],
                        y = 0;
                      y < 8 && !h;
                      y++
                    )
                      h = _("bounds", m[y]);
                  h = d(h);
                }
                return (
                  h ||
                    (h =
                      this._hitTestChildren(t, e, r) ||
                      (u &&
                        d(
                          this._hitTestSelf(
                            t,
                            e,
                            r,
                            this.getStrokeScaling()
                              ? null
                              : r._shiftless().invert()
                          )
                        )) ||
                      null),
                  h && h.point && (h.point = i.transform(h.point)),
                  h
                );
              },
              _hitTestSelf: function (t, e) {
                if (e.fill && this.hasFill() && this._contains(t))
                  return new L("fill", this);
              },
              matches: function (t, e) {
                var n = typeof t;
                if ("object" === n) {
                  for (var i in t)
                    if (t.hasOwnProperty(i) && !this.matches(i, t[i]))
                      return !1;
                  return !0;
                }
                if ("function" === n) return t(this);
                if ("match" === t) return e(this);
                var r = /^(empty|editable)$/.test(t)
                  ? this["is" + l.capitalize(t)]()
                  : "type" === t
                    ? l.hyphenate(this._class)
                    : this[t];
                if ("class" === t) {
                  if ("function" == typeof e) return this instanceof e;
                  r = this._class;
                }
                if ("function" == typeof e) return !!e(r);
                if (e) {
                  if (e.test) return e.test(r);
                  if (l.isPlainObject(e))
                    return (function t(e, n) {
                      for (var i in e)
                        if (e.hasOwnProperty(i)) {
                          var r = e[i],
                            s = n[i];
                          if (l.isPlainObject(r) && l.isPlainObject(s)) {
                            if (!t(r, s)) return !1;
                          } else if (!l.equals(r, s)) return !1;
                        }
                      return !0;
                    })(e, r);
                }
                return l.equals(r, e);
              },
              getItems: function (t) {
                return P._getItems(this, t, this._matrix);
              },
              getItem: function (t) {
                return P._getItems(this, t, this._matrix, null, !0)[0] || null;
              },
              statics: {
                _getItems: function t(e, n, i, r, s) {
                  if (!r) {
                    var a = "object" == typeof n && n,
                      o = a && a.overlapping,
                      h = a && a.inside,
                      u = o || h,
                      c = u && b.read([u]);
                    (r = {
                      items: [],
                      recursive: a && !1 !== a.recursive,
                      inside: !!h,
                      overlapping: !!o,
                      rect: c,
                      path: o && new D.Rectangle({ rectangle: c, insert: !1 }),
                    }),
                      a &&
                        (n = l.filter({}, n, {
                          recursive: !0,
                          inside: !0,
                          overlapping: !0,
                        }));
                  }
                  var f = e._children,
                    d = r.items,
                    c = r.rect;
                  i = c && (i || new S());
                  for (var _ = 0, g = f && f.length; _ < g; _++) {
                    var v = f[_],
                      p = i && i.appended(v._matrix),
                      m = !0;
                    if (c) {
                      var u = v.getBounds(p);
                      if (!c.intersects(u)) continue;
                      c.contains(u) ||
                        (r.overlapping &&
                          (u.contains(c) || r.path.intersects(v, p))) ||
                        (m = !1);
                    }
                    if (
                      (m && v.matches(n) && (d.push(v), s)) ||
                      (!1 !== r.recursive && t(v, n, p, r, s),
                      s && d.length > 0)
                    )
                      break;
                  }
                  return d;
                },
              },
            },
            {
              importJSON: function (t) {
                var e = l.importJSON(t, this);
                return e !== this ? this.addChild(e) : e;
              },
              addChild: function (t) {
                return this.insertChild(o, t);
              },
              insertChild: function (t, e) {
                var n = e ? this.insertChildren(t, [e]) : null;
                return n && n[0];
              },
              addChildren: function (t) {
                return this.insertChildren(this._children.length, t);
              },
              insertChildren: function (t, e) {
                var n = this._children;
                if (n && e && e.length > 0) {
                  e = l.slice(e);
                  for (var i = {}, r = e.length - 1; r >= 0; r--) {
                    var s = e[r],
                      a = s && s._id;
                    !s || i[a]
                      ? e.splice(r, 1)
                      : (s._remove(!1, !0), (i[a] = !0));
                  }
                  l.splice(n, e, t, 0);
                  for (
                    var o = this._project, h = o._changes, r = 0, u = e.length;
                    r < u;
                    r++
                  ) {
                    var s = e[r],
                      c = s._name;
                    (s._parent = this),
                      s._setProject(o, !0),
                      c && s.setName(c),
                      h && s._changed(5);
                  }
                  this._changed(11);
                } else e = null;
                return e;
              },
              _insertItem: "#insertChild",
              _insertAt: function (t, e) {
                var n = t && t._getOwner(),
                  i = t !== this && n ? this : null;
                return (
                  i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
                );
              },
              insertAbove: function (t) {
                return this._insertAt(t, 1);
              },
              insertBelow: function (t) {
                return this._insertAt(t, 0);
              },
              sendToBack: function () {
                var t = this._getOwner();
                return t ? t._insertItem(0, this) : null;
              },
              bringToFront: function () {
                var t = this._getOwner();
                return t ? t._insertItem(o, this) : null;
              },
              appendTop: "#addChild",
              appendBottom: function (t) {
                return this.insertChild(0, t);
              },
              moveAbove: "#insertAbove",
              moveBelow: "#insertBelow",
              addTo: function (t) {
                return t._insertItem(o, this);
              },
              copyTo: function (t) {
                return this.clone(!1).addTo(t);
              },
              reduce: function (t) {
                var e = this._children;
                if (e && 1 === e.length) {
                  var n = e[0].reduce(t);
                  return (
                    this._parent
                      ? (n.insertAbove(this), this.remove())
                      : n.remove(),
                    n
                  );
                }
                return this;
              },
              _removeNamed: function () {
                var t = this._getOwner();
                if (t) {
                  var e = t._children,
                    n = t._namedChildren,
                    i = this._name,
                    r = n[i],
                    s = r ? r.indexOf(this) : -1;
                  -1 !== s &&
                    (e[i] == this && delete e[i],
                    r.splice(s, 1),
                    r.length ? (e[i] = r[0]) : delete n[i]);
                }
              },
              _remove: function (t, e) {
                var n = this._getOwner(),
                  i = this._project,
                  r = this._index;
                return (
                  this._style && this._style._dispose(),
                  !!n &&
                    (this._name && this._removeNamed(),
                    null != r &&
                      (i._activeLayer === this &&
                        (i._activeLayer =
                          this.getNextSibling() || this.getPreviousSibling()),
                      l.splice(n._children, null, r, 1)),
                    this._installEvents(!1),
                    t && i._changes && this._changed(5),
                    e && n._changed(11, this),
                    (this._parent = null),
                    !0)
                );
              },
              remove: function () {
                return this._remove(!0, !0);
              },
              replaceWith: function (t) {
                var e = t && t.insertBelow(this);
                return e && this.remove(), e;
              },
              removeChildren: function (t, e) {
                if (!this._children) return null;
                (t = t || 0), (e = l.pick(e, this._children.length));
                for (
                  var n = l.splice(this._children, null, t, e - t),
                    i = n.length - 1;
                  i >= 0;
                  i--
                )
                  n[i]._remove(!0, !1);
                return n.length > 0 && this._changed(11), n;
              },
              clear: "#removeChildren",
              reverseChildren: function () {
                if (this._children) {
                  this._children.reverse();
                  for (var t = 0, e = this._children.length; t < e; t++)
                    this._children[t]._index = t;
                  this._changed(11);
                }
              },
              isEmpty: function (t) {
                var e = this._children,
                  n = e ? e.length : 0;
                if (t) {
                  for (var i = 0; i < n; i++) if (!e[i].isEmpty(t)) return !1;
                  return !0;
                }
                return !n;
              },
              isEditable: function () {
                for (var t = this; t; ) {
                  if (!t._visible || t._locked) return !1;
                  t = t._parent;
                }
                return !0;
              },
              hasFill: function () {
                return this.getStyle().hasFill();
              },
              hasStroke: function () {
                return this.getStyle().hasStroke();
              },
              hasShadow: function () {
                return this.getStyle().hasShadow();
              },
              _getOrder: function (t) {
                function e(t) {
                  var e = [];
                  do e.unshift(t);
                  while ((t = t._parent));
                  return e;
                }
                for (
                  var n = e(this),
                    i = e(t),
                    r = 0,
                    s = Math.min(n.length, i.length);
                  r < s;
                  r++
                )
                  if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                return 0;
              },
              hasChildren: function () {
                return this._children && this._children.length > 0;
              },
              isInserted: function () {
                return !!this._parent && this._parent.isInserted();
              },
              isAbove: function (t) {
                return -1 === this._getOrder(t);
              },
              isBelow: function (t) {
                return 1 === this._getOrder(t);
              },
              isParent: function (t) {
                return this._parent === t;
              },
              isChild: function (t) {
                return t && t._parent === this;
              },
              isDescendant: function (t) {
                for (var e = this; (e = e._parent); ) if (e === t) return !0;
                return !1;
              },
              isAncestor: function (t) {
                return !!t && t.isDescendant(this);
              },
              isSibling: function (t) {
                return this._parent === t._parent;
              },
              isGroupedWith: function (t) {
                for (var e = this._parent; e; ) {
                  if (
                    e._parent &&
                    /^(Group|Layer|CompoundPath)$/.test(e._class) &&
                    t.isDescendant(e)
                  )
                    return !0;
                  e = e._parent;
                }
                return !1;
              },
            },
            l.each(
              ["rotate", "scale", "shear", "skew"],
              function (t) {
                var e = "rotate" === t;
                this[t] = function () {
                  var n = arguments,
                    i = (e ? l : m).read(n),
                    r = m.read(n, 0, { readNull: !0 });
                  return this.transform(
                    new S()[t](i, r || this.getPosition(!0))
                  );
                };
              },
              {
                translate: function () {
                  var t = new S();
                  return this.transform(t.translate.apply(t, arguments));
                },
                transform: function (t, e, n) {
                  var i = this._matrix,
                    r = t && !t.isIdentity(),
                    s =
                      (n && this._canApplyMatrix) ||
                      (this._applyMatrix &&
                        (r || !i.isIdentity() || (e && this._children)));
                  if (!r && !s) return this;
                  if (r) {
                    !t.isInvertible() &&
                      i.isInvertible() &&
                      (i._backup = i.getValues()),
                      i.prepend(t, !0);
                    var a = this._style,
                      o = a.getFillColor(!0),
                      h = a.getStrokeColor(!0);
                    o && o.transform(t), h && h.transform(t);
                  }
                  if (s && (s = this._transformContent(i, e, n))) {
                    var u = this._pivot;
                    u && i._transformPoint(u, u, !0),
                      i.reset(!0),
                      n && this._canApplyMatrix && (this._applyMatrix = !0);
                  }
                  var l = this._bounds,
                    c = this._position;
                  (r || s) && this._changed(25);
                  var f = r && l && t.decompose();
                  if (f && f.skewing.isZero() && f.rotation % 90 == 0) {
                    for (var d in l) {
                      var _ = l[d];
                      if (_.nonscaling) delete l[d];
                      else if (s || !_.internal) {
                        var g = _.rect;
                        t._transformBounds(g, g);
                      }
                    }
                    this._bounds = l;
                    var v =
                      l[this._getBoundsCacheKey(this._boundsOptions || {})];
                    v && (this._position = this._getPositionFromBounds(v.rect));
                  } else
                    r &&
                      c &&
                      this._pivot &&
                      (this._position = t._transformPoint(c, c));
                  return this;
                },
                _transformContent: function (t, e, n) {
                  var i = this._children;
                  if (i) {
                    for (var r = 0, s = i.length; r < s; r++)
                      i[r].transform(t, e, n);
                    return !0;
                  }
                },
                globalToLocal: function () {
                  return this.getGlobalMatrix(!0)._inverseTransform(
                    m.read(arguments)
                  );
                },
                localToGlobal: function () {
                  return this.getGlobalMatrix(!0)._transformPoint(
                    m.read(arguments)
                  );
                },
                parentToLocal: function () {
                  return this._matrix._inverseTransform(m.read(arguments));
                },
                localToParent: function () {
                  return this._matrix._transformPoint(m.read(arguments));
                },
                fitBounds: function (t, e) {
                  t = b.read(arguments);
                  var n = this.getBounds(),
                    i = n.height / n.width,
                    r = t.height / t.width,
                    s = (e ? i > r : i < r)
                      ? t.width / n.width
                      : t.height / n.height,
                    a = new b(new m(), new w(n.width * s, n.height * s));
                  a.setCenter(t.getCenter()), this.setBounds(a);
                },
              }
            ),
            {
              _setStyles: function (t, e, n) {
                var i = this._style,
                  r = this._matrix;
                if (
                  (i.hasFill() &&
                    (t.fillStyle = i.getFillColor().toCanvasStyle(t, r)),
                  i.hasStroke())
                ) {
                  (t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, r)),
                    (t.lineWidth = i.getStrokeWidth());
                  var s = i.getStrokeJoin(),
                    a = i.getStrokeCap(),
                    o = i.getMiterLimit();
                  if (
                    (s && (t.lineJoin = s),
                    a && (t.lineCap = a),
                    o && (t.miterLimit = o),
                    tf.support.nativeDash)
                  ) {
                    var h = i.getDashArray(),
                      u = i.getDashOffset();
                    h &&
                      h.length &&
                      ("setLineDash" in t
                        ? (t.setLineDash(h), (t.lineDashOffset = u))
                        : ((t.mozDash = h), (t.mozDashOffset = u)));
                  }
                }
                if (i.hasShadow()) {
                  var l = e.pixelRatio || 1,
                    c = n._shiftless().prepend(new S().scale(l, l)),
                    f = c.transform(new m(i.getShadowBlur(), 0)),
                    d = c.transform(this.getShadowOffset());
                  (t.shadowColor = i.getShadowColor().toCanvasStyle(t)),
                    (t.shadowBlur = f.getLength()),
                    (t.shadowOffsetX = d.x),
                    (t.shadowOffsetY = d.y);
                }
              },
              draw: function (t, e, n) {
                if (
                  ((this._updateVersion = this._project._updateVersion),
                  this._visible && 0 !== this._opacity)
                ) {
                  var i = e.matrices,
                    r = e.viewMatrix,
                    s = this._matrix,
                    a = i[i.length - 1].appended(s);
                  if (a.isInvertible()) {
                    (r = r ? r.appended(a) : a),
                      i.push(a),
                      e.updateMatrix && (this._globalMatrix = a);
                    var o,
                      h,
                      u,
                      l = this._blendMode,
                      c = v.clamp(this._opacity, 0, 1),
                      f = "normal" === l,
                      d = tu.nativeModes[l],
                      _ =
                        (f && 1 === c) ||
                        e.dontStart ||
                        e.clip ||
                        ((d || (f && c < 1)) && this._canComposite()),
                      g = e.pixelRatio || 1;
                    if (!_) {
                      var p = this.getStrokeBounds(r);
                      if (!p.width || !p.height) {
                        i.pop();
                        return;
                      }
                      (u = e.offset),
                        (h = e.offset = p.getTopLeft().floor()),
                        (o = t),
                        (t = th.getContext(
                          p.getSize().ceil().add(1).multiply(g)
                        )),
                        1 !== g && t.scale(g, g);
                    }
                    t.save();
                    var m = n
                        ? n.appended(s)
                        : this._canScaleStroke &&
                          !this.getStrokeScaling(!0) &&
                          r,
                      y = !_ && e.clipItem,
                      w = !m || y;
                    if (
                      (_
                        ? ((t.globalAlpha = c),
                          d && (t.globalCompositeOperation = l))
                        : w && t.translate(-h.x, -h.y),
                      w && (_ ? s : r).applyToContext(t),
                      y && e.clipItem.draw(t, e.extend({ clip: !0 })),
                      m)
                    ) {
                      t.setTransform(g, 0, 0, g, 0, 0);
                      var x = e.offset;
                      x && t.translate(-x.x, -x.y);
                    }
                    this._draw(t, e, r, m),
                      t.restore(),
                      i.pop(),
                      e.clip && !e.dontFinish && t.clip(this.getFillRule()),
                      _ ||
                        (tu.process(l, t, o, c, h.subtract(u).multiply(g)),
                        th.release(t),
                        (e.offset = u));
                  }
                }
              },
              _isUpdated: function (t) {
                var e = this._parent;
                if (e instanceof q) return e._isUpdated(t);
                var n = this._updateVersion === t;
                return (
                  !n &&
                    e &&
                    e._visible &&
                    e._isUpdated(t) &&
                    ((this._updateVersion = t), (n = !0)),
                  n
                );
              },
              _drawSelection: function (t, e, n, i, r) {
                var s = this._selection,
                  a = 1 & s,
                  o = 2 & s || (a && this._selectBounds),
                  h = 4 & s;
                if (
                  (this._drawSelected || (a = !1),
                  (a || o || h) && this._isUpdated(r))
                ) {
                  var u,
                    l =
                      this.getSelectedColor(!0) ||
                      ((u = this.getLayer()) && u.getSelectedColor(!0)),
                    c = e.appended(this.getGlobalMatrix(!0)),
                    f = n / 2;
                  if (
                    ((t.strokeStyle = t.fillStyle =
                      l ? l.toCanvasStyle(t) : "#009dec"),
                    a && this._drawSelected(t, c, i),
                    h)
                  ) {
                    var d = this.getPosition(!0),
                      _ = this._parent,
                      g = _ ? _.localToGlobal(d) : d,
                      v = g.x,
                      p = g.y;
                    t.beginPath(),
                      t.arc(v, p, f, 0, 2 * Math.PI, !0),
                      t.stroke();
                    for (
                      var m = [
                          [0, -1],
                          [1, 0],
                          [0, 1],
                          [-1, 0],
                        ],
                        y = n + 1,
                        w = 0;
                      w < 4;
                      w++
                    ) {
                      var x = m[w],
                        b = x[0],
                        C = x[1];
                      t.moveTo(v + b * f, p + C * f),
                        t.lineTo(v + b * y, p + C * y),
                        t.stroke();
                    }
                  }
                  if (o) {
                    var S = c._transformCorners(this.getInternalBounds());
                    t.beginPath();
                    for (var w = 0; w < 8; w++)
                      t[w ? "lineTo" : "moveTo"](S[w], S[++w]);
                    t.closePath(), t.stroke();
                    for (var w = 0; w < 8; w++)
                      t.fillRect(S[w] - f, S[++w] - f, n, n);
                  }
                }
              },
              _canComposite: function () {
                return !1;
              },
            },
            l.each(
              ["down", "drag", "up", "move"],
              function (t) {
                this["removeOn" + l.capitalize(t)] = function () {
                  var e = {};
                  return (e[t] = !0), this.removeOn(e);
                };
              },
              {
                removeOn: function (t) {
                  for (var e in t)
                    if (t[e]) {
                      var n = "mouse" + e,
                        i = this._project,
                        r = (i._removeSets = i._removeSets || {});
                      (r[n] = r[n] || {}), (r[n][this._id] = this);
                    }
                  return this;
                },
              }
            ),
            {
              tween: function (t, e, n) {
                n || ((n = e), (e = t), (t = null), n || ((n = e), (e = null)));
                var i = n && n.easing,
                  r = n && n.start,
                  s = null != n && ("number" == typeof n ? n : n.duration),
                  a = new ta(this, t, e, s, i, r);
                return (
                  s &&
                    this.on("frame", function t(e) {
                      a._handleFrame(1e3 * e.time),
                        a.running || this.off("frame", t);
                    }),
                  a
                );
              },
              tweenTo: function (t, e) {
                return this.tween(null, t, e);
              },
              tweenFrom: function (t, e) {
                return this.tween(t, null, e);
              },
            }
          ),
          T = P.extend({
            _class: "Group",
            _selectBounds: !1,
            _selectChildren: !0,
            _serializeFields: { children: [] },
            initialize: function (t) {
              (this._children = []),
                (this._namedChildren = {}),
                this._initialize(t) ||
                  this.addChildren(Array.isArray(t) ? t : arguments);
            },
            _changed: function t(e) {
              t.base.call(this, e), 2050 & e && (this._clipItem = o);
            },
            _getClipItem: function () {
              var t = this._clipItem;
              if (o === t) {
                t = null;
                for (var e = this._children, n = 0, i = e.length; n < i; n++)
                  if (e[n]._clipMask) {
                    t = e[n];
                    break;
                  }
                this._clipItem = t;
              }
              return t;
            },
            isClipped: function () {
              return !!this._getClipItem();
            },
            setClipped: function (t) {
              var e = this.getFirstChild();
              e && e.setClipMask(t);
            },
            _getBounds: function t(e, n) {
              var i = this._getClipItem();
              return i
                ? i._getCachedBounds(
                    i._matrix.prepended(e),
                    l.set({}, n, { stroke: !1 })
                  )
                : t.base.call(this, e, n);
            },
            _hitTestChildren: function t(e, n, i) {
              var r = this._getClipItem();
              return (!r || r.contains(e)) && t.base.call(this, e, n, i, r);
            },
            _draw: function (t, e) {
              var n = e.clip,
                i = !n && this._getClipItem();
              (e = e.extend({ clipItem: i, clip: !1 })),
                n
                  ? (t.beginPath(), (e.dontStart = e.dontFinish = !0))
                  : i && i.draw(t, e.extend({ clip: !0 }));
              for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                var o = r[s];
                o !== i && o.draw(t, e);
              }
            },
          }),
          M = T.extend({
            _class: "Layer",
            initialize: function () {
              T.apply(this, arguments);
            },
            _getOwner: function () {
              return this._parent || (null != this._index && this._project);
            },
            isInserted: function t() {
              return this._parent ? t.base.call(this) : null != this._index;
            },
            activate: function () {
              this._project._activeLayer = this;
            },
            _hitTestSelf: function () {},
          }),
          A = P.extend(
            {
              _class: "Shape",
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _canScaleStroke: !0,
              _serializeFields: { type: null, size: null, radius: null },
              initialize: function (t, e) {
                this._initialize(t, e);
              },
              _equals: function (t) {
                return (
                  this._type === t._type &&
                  this._size.equals(t._size) &&
                  l.equals(this._radius, t._radius)
                );
              },
              copyContent: function (t) {
                this.setType(t._type),
                  this.setSize(t._size),
                  this.setRadius(t._radius);
              },
              getType: function () {
                return this._type;
              },
              setType: function (t) {
                this._type = t;
              },
              getShape: "#getType",
              setShape: "#setType",
              getSize: function () {
                var t = this._size;
                return new x(t.width, t.height, this, "setSize");
              },
              setSize: function () {
                var t = w.read(arguments);
                if (this._size) {
                  if (!this._size.equals(t)) {
                    var e = this._type,
                      n = t.width,
                      i = t.height;
                    "rectangle" === e
                      ? this._radius.set(w.min(this._radius, t.divide(2).abs()))
                      : "circle" === e
                        ? ((n = i = (n + i) / 2), (this._radius = n / 2))
                        : "ellipse" === e && this._radius._set(n / 2, i / 2),
                      this._size._set(n, i),
                      this._changed(9);
                  }
                } else this._size = t.clone();
              },
              getRadius: function () {
                var t = this._radius;
                return "circle" === this._type
                  ? t
                  : new x(t.width, t.height, this, "setRadius");
              },
              setRadius: function (t) {
                var e = this._type;
                if ("circle" === e) {
                  if (t === this._radius) return;
                  var n = 2 * t;
                  (this._radius = t), this._size._set(n, n);
                } else if (((t = w.read(arguments)), this._radius)) {
                  if (this._radius.equals(t)) return;
                  if ((this._radius.set(t), "rectangle" === e)) {
                    var n = w.max(this._size, t.multiply(2));
                    this._size.set(n);
                  } else
                    "ellipse" === e &&
                      this._size._set(2 * t.width, 2 * t.height);
                } else this._radius = t.clone();
                this._changed(9);
              },
              isEmpty: function () {
                return !1;
              },
              toPath: function (t) {
                var e = new D[l.capitalize(this._type)]({
                  center: new m(),
                  size: this._size,
                  radius: this._radius,
                  insert: !1,
                });
                return (
                  e.copyAttributes(this),
                  tf.settings.applyMatrix && e.setApplyMatrix(!0),
                  (o === t || t) && e.insertAbove(this),
                  e
                );
              },
              toShape: "#clone",
              _asPathItem: function () {
                return this.toPath(!1);
              },
              _draw: function (t, e, n, i) {
                var r = this._style,
                  s = r.hasFill(),
                  a = r.hasStroke(),
                  o = e.dontFinish || e.clip,
                  h = !i;
                if (s || a || o) {
                  var u = this._type,
                    l = this._radius,
                    c = "circle" === u;
                  if ((e.dontStart || t.beginPath(), h && c))
                    t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                  else {
                    var f = c ? l : l.width,
                      d = c ? l : l.height,
                      _ = this._size,
                      g = _.width,
                      v = _.height;
                    if (h && "rectangle" === u && 0 === f && 0 === d)
                      t.rect(-g / 2, -v / 2, g, v);
                    else {
                      var p = g / 2,
                        m = v / 2,
                        y = 0.44771525016920644 * f,
                        w = 0.44771525016920644 * d,
                        x = [
                          -p,
                          -m + d,
                          -p,
                          -m + w,
                          -p + y,
                          -m,
                          -p + f,
                          -m,
                          p - f,
                          -m,
                          p - y,
                          -m,
                          p,
                          -m + w,
                          p,
                          -m + d,
                          p,
                          m - d,
                          p,
                          m - w,
                          p - y,
                          m,
                          p - f,
                          m,
                          -p + f,
                          m,
                          -p + y,
                          m,
                          -p,
                          m - w,
                          -p,
                          m - d,
                        ];
                      i && i.transform(x, x, 32),
                        t.moveTo(x[0], x[1]),
                        t.bezierCurveTo(x[2], x[3], x[4], x[5], x[6], x[7]),
                        p !== f && t.lineTo(x[8], x[9]),
                        t.bezierCurveTo(
                          x[10],
                          x[11],
                          x[12],
                          x[13],
                          x[14],
                          x[15]
                        ),
                        m !== d && t.lineTo(x[16], x[17]),
                        t.bezierCurveTo(
                          x[18],
                          x[19],
                          x[20],
                          x[21],
                          x[22],
                          x[23]
                        ),
                        p !== f && t.lineTo(x[24], x[25]),
                        t.bezierCurveTo(
                          x[26],
                          x[27],
                          x[28],
                          x[29],
                          x[30],
                          x[31]
                        );
                    }
                  }
                  t.closePath();
                }
                !o &&
                  (s || a) &&
                  (this._setStyles(t, e, n),
                  s &&
                    (t.fill(r.getFillRule()),
                    (t.shadowColor = "rgba(0,0,0,0)")),
                  a && t.stroke());
              },
              _canComposite: function () {
                return !(this.hasFill() && this.hasStroke());
              },
              _getBounds: function (t, e) {
                var n = new b(this._size).setCenter(0, 0),
                  i = this._style,
                  r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                return (
                  t && (n = t._transformBounds(n)),
                  r
                    ? n.expand(
                        D._getStrokePadding(r, this._getStrokeMatrix(t, e))
                      )
                    : n
                );
              },
            },
            new (function () {
              function t(t, e, n) {
                var i = t._radius;
                if (!i.isZero())
                  for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                    var a = new m(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                      o = a.multiply(r),
                      h = o.subtract(a.multiply(i));
                    if (new b(n ? o.add(a.multiply(n)) : o, h).contains(e))
                      return { point: h, quadrant: s };
                  }
              }
              function e(t, e, n, i) {
                var r = t.divide(e);
                return (
                  (!i || r.isInQuadrant(i)) &&
                  r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
                );
              }
              return {
                _contains: function e(n) {
                  if ("rectangle" !== this._type)
                    return 0.5 >= n.divide(this.size).getLength();
                  var i = t(this, n);
                  return i
                    ? 1 >= n.subtract(i.point).divide(this._radius).getLength()
                    : e.base.call(this, n);
                },
                _hitTestSelf: function n(i, r, s, a) {
                  var o = !1,
                    h = this._style,
                    u = r.stroke && h.hasStroke(),
                    l = r.fill && h.hasFill();
                  if (u || l) {
                    var c = this._type,
                      f = this._radius,
                      d = u ? h.getStrokeWidth() / 2 : 0,
                      _ = r._tolerancePadding.add(
                        D._getStrokePadding(d, !h.getStrokeScaling() && a)
                      );
                    if ("rectangle" === c) {
                      var g = _.multiply(2),
                        v = t(this, i, g);
                      if (v) o = e(i.subtract(v.point), f, _, v.quadrant);
                      else {
                        var p = new b(this._size).setCenter(0, 0),
                          m = p.expand(g),
                          y = p.expand(g.negate());
                        o = m._containsPoint(i) && !y._containsPoint(i);
                      }
                    } else o = e(i, f, _);
                  }
                  return o
                    ? new L(u ? "stroke" : "fill", this)
                    : n.base.apply(this, arguments);
                },
              };
            })(),
            {
              statics: new (function () {
                function t(t, e, n, i, r) {
                  var s = l.create(A.prototype);
                  return (
                    (s._type = t),
                    (s._size = n),
                    (s._radius = i),
                    s._initialize(l.getNamed(r), e),
                    s
                  );
                }
                return {
                  Circle: function () {
                    var e = arguments,
                      n = m.readNamed(e, "center"),
                      i = l.readNamed(e, "radius");
                    return t("circle", n, new w(2 * i), i, e);
                  },
                  Rectangle: function () {
                    var e = arguments,
                      n = b.readNamed(e, "rectangle"),
                      i = w.min(
                        w.readNamed(e, "radius"),
                        n.getSize(!0).divide(2)
                      );
                    return t("rectangle", n.getCenter(!0), n.getSize(!0), i, e);
                  },
                  Ellipse: function () {
                    var e = arguments,
                      n = A._readEllipse(e),
                      i = n.radius;
                    return t("ellipse", n.center, i.multiply(2), i, e);
                  },
                  _readEllipse: function (t) {
                    var e, n;
                    if (l.hasNamed(t, "radius"))
                      (e = m.readNamed(t, "center")),
                        (n = w.readNamed(t, "radius"));
                    else {
                      var i = b.readNamed(t, "rectangle");
                      (e = i.getCenter(!0)), (n = i.getSize(!0).divide(2));
                    }
                    return { center: e, radius: n };
                  },
                };
              })(),
            }
          ),
          O = P.extend(
            {
              _class: "Raster",
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _boundsOptions: { stroke: !1, handle: !1 },
              _serializeFields: { crossOrigin: null, source: null },
              _prioritize: ["crossOrigin"],
              _smoothing: "low",
              beans: !0,
              initialize: function (t, e) {
                if (!this._initialize(t, o !== e && m.read(arguments))) {
                  var n,
                    i = typeof t,
                    r =
                      "string" === i
                        ? u.getElementById(t)
                        : "object" === i
                          ? t
                          : null;
                  if (r && r !== P.NO_INSERT) {
                    if (r.getContext || null != r.naturalHeight) n = r;
                    else if (r) {
                      var s = w.read(arguments);
                      s.isZero() || (n = th.getCanvas(s));
                    }
                  }
                  n ? this.setImage(n) : this.setSource(t);
                }
                this._size || ((this._size = new w()), (this._loaded = !1));
              },
              _equals: function (t) {
                return this.getSource() === t.getSource();
              },
              copyContent: function (t) {
                var e = t._image,
                  n = t._canvas;
                if (e) this._setImage(e);
                else if (n) {
                  var i = th.getCanvas(t._size);
                  i.getContext("2d").drawImage(n, 0, 0), this._setImage(i);
                }
                this._crossOrigin = t._crossOrigin;
              },
              getSize: function () {
                var t = this._size;
                return new x(
                  t ? t.width : 0,
                  t ? t.height : 0,
                  this,
                  "setSize"
                );
              },
              setSize: function (t, e) {
                var n = w.read(arguments);
                if (n.equals(this._size)) e && this.clear();
                else if (n.width > 0 && n.height > 0) {
                  var i = !e && this.getElement();
                  this._setImage(th.getCanvas(n)),
                    i &&
                      this.getContext(!0).drawImage(i, 0, 0, n.width, n.height);
                } else
                  this._canvas && th.release(this._canvas),
                    (this._size = n.clone());
              },
              getWidth: function () {
                return this._size ? this._size.width : 0;
              },
              setWidth: function (t) {
                this.setSize(t, this.getHeight());
              },
              getHeight: function () {
                return this._size ? this._size.height : 0;
              },
              setHeight: function (t) {
                this.setSize(this.getWidth(), t);
              },
              getLoaded: function () {
                return this._loaded;
              },
              isEmpty: function () {
                var t = this._size;
                return !t || (0 === t.width && 0 === t.height);
              },
              getResolution: function () {
                var t = this._matrix,
                  e = new m(0, 0).transform(t),
                  n = new m(1, 0).transform(t).subtract(e),
                  i = new m(0, 1).transform(t).subtract(e);
                return new w(72 / n.getLength(), 72 / i.getLength());
              },
              getPpi: "#getResolution",
              getImage: function () {
                return this._image;
              },
              setImage: function (t) {
                var e = this;
                function n(t) {
                  var n = e.getView(),
                    i = (t && t.type) || "load";
                  n && e.responds(i) && ((tf = n._scope), e.emit(i, new tt(t)));
                }
                this._setImage(t),
                  this._loaded
                    ? setTimeout(n, 0)
                    : t &&
                      K.add(t, {
                        load: function (i) {
                          e._setImage(t), n(i);
                        },
                        error: n,
                      });
              },
              _setImage: function (t) {
                this._canvas && th.release(this._canvas),
                  t && t.getContext
                    ? ((this._image = null),
                      (this._canvas = t),
                      (this._loaded = !0))
                    : ((this._image = t),
                      (this._canvas = null),
                      (this._loaded = !!(t && t.src && t.complete))),
                  (this._size = new w(
                    t ? t.naturalWidth || t.width : 0,
                    t ? t.naturalHeight || t.height : 0
                  )),
                  (this._context = null),
                  this._changed(1033);
              },
              getCanvas: function () {
                if (!this._canvas) {
                  var t = th.getContext(this._size);
                  try {
                    this._image && t.drawImage(this._image, 0, 0),
                      (this._canvas = t.canvas);
                  } catch (e) {
                    th.release(t);
                  }
                }
                return this._canvas;
              },
              setCanvas: "#setImage",
              getContext: function (t) {
                return (
                  this._context ||
                    (this._context = this.getCanvas().getContext("2d")),
                  t && ((this._image = null), this._changed(1025)),
                  this._context
                );
              },
              setContext: function (t) {
                this._context = t;
              },
              getSource: function () {
                var t = this._image;
                return (t && t.src) || this.toDataURL();
              },
              setSource: function (t) {
                var e = new a.Image(),
                  n = this._crossOrigin;
                n && (e.crossOrigin = n), t && (e.src = t), this.setImage(e);
              },
              getCrossOrigin: function () {
                var t = this._image;
                return (t && t.crossOrigin) || this._crossOrigin || "";
              },
              setCrossOrigin: function (t) {
                this._crossOrigin = t;
                var e = this._image;
                e && (e.crossOrigin = t);
              },
              getSmoothing: function () {
                return this._smoothing;
              },
              setSmoothing: function (t) {
                (this._smoothing =
                  "string" == typeof t ? t : t ? "low" : "off"),
                  this._changed(257);
              },
              getElement: function () {
                return this._canvas || (this._loaded && this._image);
              },
            },
            {
              beans: !1,
              getSubCanvas: function () {
                var t = b.read(arguments),
                  e = th.getContext(t.getSize());
                return (
                  e.drawImage(
                    this.getCanvas(),
                    t.x,
                    t.y,
                    t.width,
                    t.height,
                    0,
                    0,
                    t.width,
                    t.height
                  ),
                  e.canvas
                );
              },
              getSubRaster: function () {
                var t = b.read(arguments),
                  e = new O(P.NO_INSERT);
                return (
                  e._setImage(this.getSubCanvas(t)),
                  e.translate(t.getCenter().subtract(this.getSize().divide(2))),
                  e._matrix.prepend(this._matrix),
                  e.insertAbove(this),
                  e
                );
              },
              toDataURL: function () {
                var t = this._image,
                  e = t && t.src;
                if (/^data:/.test(e)) return e;
                var n = this.getCanvas();
                return n ? n.toDataURL.apply(n, arguments) : null;
              },
              drawImage: function (t) {
                var e = m.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y);
              },
              getAverageColor: function (t) {
                if (
                  (t
                    ? t instanceof j
                      ? ((n = t), (e = t.getBounds()))
                      : "object" == typeof t &&
                        ("width" in t
                          ? (e = new b(t))
                          : "x" in t && (e = new b(t.x - 0.5, t.y - 0.5, 1, 1)))
                    : (e = this.getBounds()),
                  !e)
                )
                  return null;
                var e,
                  n,
                  i = Math.min(e.width, 32),
                  r = Math.min(e.height, 32),
                  s = O._sampleContext;
                s
                  ? s.clearRect(0, 0, 33, 33)
                  : (s = O._sampleContext = th.getContext(new w(32))),
                  s.save();
                var a = new S()
                  .scale(i / e.width, r / e.height)
                  .translate(-e.x, -e.y);
                a.applyToContext(s),
                  n && n.draw(s, new l({ clip: !0, matrices: [a] })),
                  this._matrix.applyToContext(s);
                var o = this.getElement(),
                  h = this._size;
                o && s.drawImage(o, -h.width / 2, -h.height / 2), s.restore();
                for (
                  var u = s.getImageData(
                      0.5,
                      0.5,
                      Math.ceil(i),
                      Math.ceil(r)
                    ).data,
                    c = [0, 0, 0],
                    f = 0,
                    d = 0,
                    _ = u.length;
                  d < _;
                  d += 4
                ) {
                  var g = u[d + 3];
                  (f += g),
                    (g /= 255),
                    (c[0] += u[d] * g),
                    (c[1] += u[d + 1] * g),
                    (c[2] += u[d + 2] * g);
                }
                for (var d = 0; d < 3; d++) c[d] /= f;
                return f ? W.read(c) : null;
              },
              getPixel: function () {
                var t = m.read(arguments),
                  e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new W(
                  "rgb",
                  [e[0] / 255, e[1] / 255, e[2] / 255],
                  e[3] / 255
                );
              },
              setPixel: function () {
                var t = arguments,
                  e = m.read(t),
                  n = W.read(t),
                  i = n._convert("rgb"),
                  r = n._alpha,
                  s = this.getContext(!0),
                  a = s.createImageData(1, 1),
                  o = a.data;
                (o[0] = 255 * i[0]),
                  (o[1] = 255 * i[1]),
                  (o[2] = 255 * i[2]),
                  (o[3] = null != r ? 255 * r : 255),
                  s.putImageData(a, e.x, e.y);
              },
              clear: function () {
                var t = this._size;
                this.getContext(!0).clearRect(0, 0, t.width + 1, t.height + 1);
              },
              createImageData: function () {
                var t = w.read(arguments);
                return this.getContext().createImageData(t.width, t.height);
              },
              getImageData: function () {
                var t = b.read(arguments);
                return (
                  t.isEmpty() && (t = new b(this._size)),
                  this.getContext().getImageData(t.x, t.y, t.width, t.height)
                );
              },
              putImageData: function (t) {
                var e = m.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y);
              },
              setImageData: function (t) {
                this.setSize(t), this.getContext(!0).putImageData(t, 0, 0);
              },
              _getBounds: function (t, e) {
                var n = new b(this._size).setCenter(0, 0);
                return t ? t._transformBounds(n) : n;
              },
              _hitTestSelf: function (t) {
                if (this._contains(t)) {
                  var e = this;
                  return new L("pixel", e, {
                    offset: t.add(e._size.divide(2)).round(),
                    color: {
                      get: function () {
                        return e.getPixel(this.offset);
                      },
                    },
                  });
                }
              },
              _draw: function (t, e, n) {
                var i = this.getElement();
                if (i && i.width > 0 && i.height > 0) {
                  (t.globalAlpha = v.clamp(this._opacity, 0, 1)),
                    this._setStyles(t, e, n);
                  var r = this._smoothing,
                    s = "off" === r;
                  X.setPrefixed(
                    t,
                    s ? "imageSmoothingEnabled" : "imageSmoothingQuality",
                    !s && r
                  ),
                    t.drawImage(
                      i,
                      -this._size.width / 2,
                      -this._size.height / 2
                    );
                }
              },
              _canComposite: function () {
                return !0;
              },
            }
          ),
          z = P.extend({
            _class: "SymbolItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: { stroke: !0 },
            _serializeFields: { symbol: null },
            initialize: function (t, e) {
              this._initialize(t, o !== e && m.read(arguments, 1)) ||
                this.setDefinition(t instanceof E ? t : new E(t));
            },
            _equals: function (t) {
              return this._definition === t._definition;
            },
            copyContent: function (t) {
              this.setDefinition(t._definition);
            },
            getDefinition: function () {
              return this._definition;
            },
            setDefinition: function (t) {
              (this._definition = t), this._changed(9);
            },
            getSymbol: "#getDefinition",
            setSymbol: "#setDefinition",
            isEmpty: function () {
              return this._definition._item.isEmpty();
            },
            _getBounds: function (t, e) {
              var n = this._definition._item;
              return n._getCachedBounds(n._matrix.prepended(t), e);
            },
            _hitTestSelf: function (t, e, n) {
              var i = e.extend({ all: !1 }),
                r = this._definition._item._hitTest(t, i, n);
              return r && (r.item = this), r;
            },
            _draw: function (t, e) {
              this._definition._item.draw(t, e);
            },
          }),
          E = l.extend({
            _class: "SymbolDefinition",
            initialize: function (t, e) {
              (this._id = p.get()),
                (this.project = tf.project),
                t && this.setItem(t, e);
            },
            _serialize: function (t, e) {
              return e.add(this, function () {
                return l.serialize([this._class, this._item], t, !1, e);
              });
            },
            _changed: function (t) {
              8 & t && P._clearBoundsCache(this),
                1 & t && this.project._changed(t);
            },
            getItem: function () {
              return this._item;
            },
            setItem: function (t, e) {
              t._symbol && (t = t.clone()),
                this._item && (this._item._symbol = null),
                (this._item = t),
                t.remove(),
                t.setSelected(!1),
                e || t.setPosition(new m()),
                (t._symbol = this),
                this._changed(9);
            },
            getDefinition: "#getItem",
            setDefinition: "#setItem",
            place: function (t) {
              return new z(this, t);
            },
            clone: function () {
              return new E(this._item.clone(!1));
            },
            equals: function (t) {
              return t === this || (t && this._item.equals(t._item)) || !1;
            },
          }),
          L = l.extend({
            _class: "HitResult",
            initialize: function (t, e, n) {
              (this.type = t), (this.item = e), n && this.inject(n);
            },
            statics: {
              getOptions: function (t) {
                var e = t && l.read(t);
                return new l(
                  {
                    type: null,
                    tolerance: tf.settings.hitTolerance,
                    fill: !e,
                    stroke: !e,
                    segments: !e,
                    handles: !1,
                    ends: !1,
                    position: !1,
                    center: !1,
                    bounds: !1,
                    guides: !1,
                    selected: !1,
                  },
                  e
                );
              },
            },
          }),
          N = l.extend({
            _class: "Segment",
            beans: !0,
            _selection: 0,
            initialize: function (t, e, n, i, r, s) {
              var a,
                h,
                u,
                l,
                c = arguments.length;
              c > 0 &&
                (null == t || "object" == typeof t
                  ? 1 === c && t && "point" in t
                    ? ((a = t.point),
                      (h = t.handleIn),
                      (u = t.handleOut),
                      (l = t.selection))
                    : ((a = t), (h = e), (u = n), (l = i))
                  : ((a = [t, e]),
                    (h = o !== n ? [n, i] : null),
                    (u = o !== r ? [r, s] : null))),
                new B(a, this, "_point"),
                new B(h, this, "_handleIn"),
                new B(u, this, "_handleOut"),
                l && this.setSelection(l);
            },
            _serialize: function (t, e) {
              var n = this._point,
                i = this._selection,
                r =
                  i || this.hasHandles()
                    ? [n, this._handleIn, this._handleOut]
                    : n;
              return i && r.push(i), l.serialize(r, t, !0, e);
            },
            _changed: function (t) {
              var e = this._path;
              if (e) {
                var n,
                  i = e._curves,
                  r = this._index;
                i &&
                  ((!t || t === this._point || t === this._handleIn) &&
                    (n =
                      r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) &&
                    n._changed(),
                  (!t || t === this._point || t === this._handleOut) &&
                    (n = i[r]) &&
                    n._changed()),
                  e._changed(41);
              }
            },
            getPoint: function () {
              return this._point;
            },
            setPoint: function () {
              this._point.set(m.read(arguments));
            },
            getHandleIn: function () {
              return this._handleIn;
            },
            setHandleIn: function () {
              this._handleIn.set(m.read(arguments));
            },
            getHandleOut: function () {
              return this._handleOut;
            },
            setHandleOut: function () {
              this._handleOut.set(m.read(arguments));
            },
            hasHandles: function () {
              return !this._handleIn.isZero() || !this._handleOut.isZero();
            },
            isSmooth: function () {
              var t = this._handleIn,
                e = this._handleOut;
              return !t.isZero() && !e.isZero() && t.isCollinear(e);
            },
            clearHandles: function () {
              this._handleIn._set(0, 0), this._handleOut._set(0, 0);
            },
            getSelection: function () {
              return this._selection;
            },
            setSelection: function (t) {
              var e = this._selection,
                n = this._path;
              (this._selection = t = t || 0),
                n &&
                  t !== e &&
                  (n._updateSelection(this, e, t), n._changed(257));
            },
            _changeSelection: function (t, e) {
              var n = this._selection;
              this.setSelection(e ? n | t : n & ~t);
            },
            isSelected: function () {
              return !!(7 & this._selection);
            },
            setSelected: function (t) {
              this._changeSelection(7, t);
            },
            getIndex: function () {
              return o !== this._index ? this._index : null;
            },
            getPath: function () {
              return this._path || null;
            },
            getCurve: function () {
              var t = this._path,
                e = this._index;
              return t
                ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--,
                  t.getCurves()[e] || null)
                : null;
            },
            getLocation: function () {
              var t = this.getCurve();
              return t ? new R(t, this === t._segment1 ? 0 : 1) : null;
            },
            getNext: function () {
              var t = this._path && this._path._segments;
              return (
                (t && (t[this._index + 1] || (this._path._closed && t[0]))) ||
                null
              );
            },
            smooth: function (t, e, n) {
              var i = t || {},
                r = i.type,
                s = i.factor,
                a = this.getPrevious(),
                h = this.getNext(),
                u = (a || this)._point,
                l = this._point,
                c = (h || this)._point,
                f = u.getDistance(l),
                d = l.getDistance(c);
              if (r && "catmull-rom" !== r) {
                if ("geometric" === r) {
                  if (a && h) {
                    var _ = u.subtract(c),
                      g = o === s ? 0.4 : s,
                      v = (g * f) / (f + d);
                    e || this.setHandleIn(_.multiply(v)),
                      n || this.setHandleOut(_.multiply(v - g));
                  }
                } else
                  throw Error("Smoothing method '" + r + "' not supported.");
              } else {
                var p = o === s ? 0.5 : s,
                  y = Math.pow(f, p),
                  w = y * y,
                  x = Math.pow(d, p),
                  b = x * x;
                if (!e && a) {
                  var C = 2 * b + 3 * x * y + w,
                    S = 3 * x * (x + y);
                  this.setHandleIn(
                    0 !== S
                      ? new m(
                          (b * u._x + C * l._x - w * c._x) / S - l._x,
                          (b * u._y + C * l._y - w * c._y) / S - l._y
                        )
                      : new m()
                  );
                }
                if (!n && h) {
                  var C = 2 * w + 3 * y * x + b,
                    S = 3 * y * (y + x);
                  this.setHandleOut(
                    0 !== S
                      ? new m(
                          (w * c._x + C * l._x - b * u._x) / S - l._x,
                          (w * c._y + C * l._y - b * u._y) / S - l._y
                        )
                      : new m()
                  );
                }
              }
            },
            getPrevious: function () {
              var t = this._path && this._path._segments;
              return (
                (t &&
                  (t[this._index - 1] ||
                    (this._path._closed && t[t.length - 1]))) ||
                null
              );
            },
            isFirst: function () {
              return !this._index;
            },
            isLast: function () {
              var t = this._path;
              return (t && this._index === t._segments.length - 1) || !1;
            },
            reverse: function () {
              var t = this._handleIn,
                e = this._handleOut,
                n = t.clone();
              t.set(e), e.set(n);
            },
            reversed: function () {
              return new N(this._point, this._handleOut, this._handleIn);
            },
            remove: function () {
              return !!this._path && !!this._path.removeSegment(this._index);
            },
            clone: function () {
              return new N(this._point, this._handleIn, this._handleOut);
            },
            equals: function (t) {
              return (
                t === this ||
                (t &&
                  this._class === t._class &&
                  this._point.equals(t._point) &&
                  this._handleIn.equals(t._handleIn) &&
                  this._handleOut.equals(t._handleOut)) ||
                !1
              );
            },
            toString: function () {
              var t = ["point: " + this._point];
              return (
                this._handleIn.isZero() ||
                  t.push("handleIn: " + this._handleIn),
                this._handleOut.isZero() ||
                  t.push("handleOut: " + this._handleOut),
                "{ " + t.join(", ") + " }"
              );
            },
            transform: function (t) {
              this._transformCoordinates(t, Array(6), !0), this._changed();
            },
            interpolate: function (t, e, n) {
              var i = 1 - n,
                r = t._point,
                s = e._point,
                a = t._handleIn,
                o = e._handleIn,
                h = e._handleOut,
                u = t._handleOut;
              this._point._set(i * r._x + n * s._x, i * r._y + n * s._y, !0),
                this._handleIn._set(
                  i * a._x + n * o._x,
                  i * a._y + n * o._y,
                  !0
                ),
                this._handleOut._set(
                  i * u._x + n * h._x,
                  i * u._y + n * h._y,
                  !0
                ),
                this._changed();
            },
            _transformCoordinates: function (t, e, n) {
              var i = this._point,
                r = n && this._handleIn.isZero() ? null : this._handleIn,
                s = n && this._handleOut.isZero() ? null : this._handleOut,
                a = i._x,
                o = i._y,
                h = 2;
              return (
                (e[0] = a),
                (e[1] = o),
                r && ((e[h++] = r._x + a), (e[h++] = r._y + o)),
                s && ((e[h++] = s._x + a), (e[h++] = s._y + o)),
                t &&
                  (t._transformCoordinates(e, e, h / 2),
                  (a = e[0]),
                  (o = e[1]),
                  n
                    ? ((i._x = a),
                      (i._y = o),
                      (h = 2),
                      r && ((r._x = e[h++] - a), (r._y = e[h++] - o)),
                      s && ((s._x = e[h++] - a), (s._y = e[h++] - o)))
                    : (r || ((e[h++] = a), (e[h++] = o)),
                      s || ((e[h++] = a), (e[h++] = o)))),
                e
              );
            },
          }),
          B = m.extend({
            initialize: function (t, e, n) {
              var i, r, s;
              if (t) {
                if (o !== (i = t[0])) r = t[1];
                else {
                  var a = t;
                  o === (i = a.x) && ((a = m.read(arguments)), (i = a.x)),
                    (r = a.y),
                    (s = a.selected);
                }
              } else i = r = 0;
              (this._x = i),
                (this._y = r),
                (this._owner = e),
                (e[n] = this),
                s && this.setSelected(!0);
            },
            _set: function (t, e) {
              return (
                (this._x = t), (this._y = e), this._owner._changed(this), this
              );
            },
            getX: function () {
              return this._x;
            },
            setX: function (t) {
              (this._x = t), this._owner._changed(this);
            },
            getY: function () {
              return this._y;
            },
            setY: function (t) {
              (this._y = t), this._owner._changed(this);
            },
            isZero: function () {
              var t = v.isZero;
              return t(this._x) && t(this._y);
            },
            isSelected: function () {
              return !!(this._owner._selection & this._getSelection());
            },
            setSelected: function (t) {
              this._owner._changeSelection(this._getSelection(), t);
            },
            _getSelection: function () {
              var t = this._owner;
              return this === t._point
                ? 1
                : this === t._handleIn
                  ? 2
                  : this === t._handleOut
                    ? 4
                    : 0;
            },
          }),
          F = l.extend(
            {
              _class: "Curve",
              beans: !0,
              initialize: function (t, e, n, i, r, s, a, o) {
                var h,
                  u,
                  l,
                  c,
                  f,
                  d,
                  _ = arguments.length;
                3 === _
                  ? ((this._path = t), (h = e), (u = n))
                  : _
                    ? 1 === _
                      ? "segment1" in t
                        ? ((h = new N(t.segment1)), (u = new N(t.segment2)))
                        : "point1" in t
                          ? ((l = t.point1),
                            (f = t.handle1),
                            (d = t.handle2),
                            (c = t.point2))
                          : Array.isArray(t) &&
                            ((l = [t[0], t[1]]),
                            (c = [t[6], t[7]]),
                            (f = [t[2] - t[0], t[3] - t[1]]),
                            (d = [t[4] - t[6], t[5] - t[7]]))
                      : 2 === _
                        ? ((h = new N(t)), (u = new N(e)))
                        : 4 === _
                          ? ((l = t), (f = e), (d = n), (c = i))
                          : 8 === _ &&
                            ((l = [t, e]),
                            (c = [a, o]),
                            (f = [n - t, i - e]),
                            (d = [r - a, s - o]))
                    : ((h = new N()), (u = new N())),
                  (this._segment1 = h || new N(l, null, f)),
                  (this._segment2 = u || new N(c, d, null));
              },
              _serialize: function (t, e) {
                return l.serialize(
                  this.hasHandles()
                    ? [
                        this.getPoint1(),
                        this.getHandle1(),
                        this.getHandle2(),
                        this.getPoint2(),
                      ]
                    : [this.getPoint1(), this.getPoint2()],
                  t,
                  !0,
                  e
                );
              },
              _changed: function () {
                this._length = this._bounds = o;
              },
              clone: function () {
                return new F(this._segment1, this._segment2);
              },
              toString: function () {
                var t = ["point1: " + this._segment1._point];
                return (
                  this._segment1._handleOut.isZero() ||
                    t.push("handle1: " + this._segment1._handleOut),
                  this._segment2._handleIn.isZero() ||
                    t.push("handle2: " + this._segment2._handleIn),
                  t.push("point2: " + this._segment2._point),
                  "{ " + t.join(", ") + " }"
                );
              },
              classify: function () {
                return F.classify(this.getValues());
              },
              remove: function () {
                var t = !1;
                if (this._path) {
                  var e = this._segment2,
                    n = e._handleOut;
                  (t = e.remove()) && this._segment1._handleOut.set(n);
                }
                return t;
              },
              getPoint1: function () {
                return this._segment1._point;
              },
              setPoint1: function () {
                this._segment1._point.set(m.read(arguments));
              },
              getPoint2: function () {
                return this._segment2._point;
              },
              setPoint2: function () {
                this._segment2._point.set(m.read(arguments));
              },
              getHandle1: function () {
                return this._segment1._handleOut;
              },
              setHandle1: function () {
                this._segment1._handleOut.set(m.read(arguments));
              },
              getHandle2: function () {
                return this._segment2._handleIn;
              },
              setHandle2: function () {
                this._segment2._handleIn.set(m.read(arguments));
              },
              getSegment1: function () {
                return this._segment1;
              },
              getSegment2: function () {
                return this._segment2;
              },
              getPath: function () {
                return this._path;
              },
              getIndex: function () {
                return this._segment1._index;
              },
              getNext: function () {
                var t = this._path && this._path._curves;
                return (
                  (t &&
                    (t[this._segment1._index + 1] ||
                      (this._path._closed && t[0]))) ||
                  null
                );
              },
              getPrevious: function () {
                var t = this._path && this._path._curves;
                return (
                  (t &&
                    (t[this._segment1._index - 1] ||
                      (this._path._closed && t[t.length - 1]))) ||
                  null
                );
              },
              isFirst: function () {
                return !this._segment1._index;
              },
              isLast: function () {
                var t = this._path;
                return (
                  (t && this._segment1._index === t._curves.length - 1) || !1
                );
              },
              isSelected: function () {
                return (
                  this.getPoint1().isSelected() &&
                  this.getHandle1().isSelected() &&
                  this.getHandle2().isSelected() &&
                  this.getPoint2().isSelected()
                );
              },
              setSelected: function (t) {
                this.getPoint1().setSelected(t),
                  this.getHandle1().setSelected(t),
                  this.getHandle2().setSelected(t),
                  this.getPoint2().setSelected(t);
              },
              getValues: function (t) {
                return F.getValues(this._segment1, this._segment2, t);
              },
              getPoints: function () {
                for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2)
                  e.push(new m(t[n], t[n + 1]));
                return e;
              },
            },
            {
              getLength: function () {
                return (
                  null == this._length &&
                    (this._length = F.getLength(this.getValues(), 0, 1)),
                  this._length
                );
              },
              getArea: function () {
                return F.getArea(this.getValues());
              },
              getLine: function () {
                return new k(this._segment1._point, this._segment2._point);
              },
              getPart: function (t, e) {
                return new F(F.getPart(this.getValues(), t, e));
              },
              getPartLength: function (t, e) {
                return F.getLength(this.getValues(), t, e);
              },
              divideAt: function (t) {
                return this.divideAtTime(
                  t && t.curve === this ? t.time : this.getTimeAt(t)
                );
              },
              divideAtTime: function (t, e) {
                var n = null;
                if (t >= 1e-8 && t <= 0.99999999) {
                  var i = F.subdivide(this.getValues(), t),
                    r = i[0],
                    s = i[1],
                    a = e || this.hasHandles(),
                    o = this._segment1,
                    h = this._segment2,
                    u = this._path;
                  a &&
                    (o._handleOut._set(r[2] - r[0], r[3] - r[1]),
                    h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                  var l = r[6],
                    c = r[7],
                    f = new N(
                      new m(l, c),
                      a && new m(r[4] - l, r[5] - c),
                      a && new m(s[2] - l, s[3] - c)
                    );
                  u
                    ? (u.insert(o._index + 1, f), (n = this.getNext()))
                    : ((this._segment2 = f),
                      this._changed(),
                      (n = new F(f, h)));
                }
                return n;
              },
              splitAt: function (t) {
                var e = this._path;
                return e ? e.splitAt(t) : null;
              },
              splitAtTime: function (t) {
                return this.splitAt(this.getLocationAtTime(t));
              },
              divide: function (t, e) {
                return this.divideAtTime(
                  o === t ? 0.5 : e ? t : this.getTimeAt(t)
                );
              },
              split: function (t, e) {
                return this.splitAtTime(
                  o === t ? 0.5 : e ? t : this.getTimeAt(t)
                );
              },
              reversed: function () {
                return new F(
                  this._segment2.reversed(),
                  this._segment1.reversed()
                );
              },
              clearHandles: function () {
                this._segment1._handleOut._set(0, 0),
                  this._segment2._handleIn._set(0, 0);
              },
              statics: {
                getValues: function (t, e, n, i) {
                  var r = t._point,
                    s = t._handleOut,
                    a = e._handleIn,
                    o = e._point,
                    h = r.x,
                    u = r.y,
                    l = o.x,
                    c = o.y,
                    f = i
                      ? [h, u, h, u, l, c, l, c]
                      : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                  return n && n._transformCoordinates(f, f, 4), f;
                },
                subdivide: function (t, e) {
                  var n = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3],
                    a = t[4],
                    h = t[5],
                    u = t[6],
                    l = t[7];
                  o === e && (e = 0.5);
                  var c = 1 - e,
                    f = c * n + e * r,
                    d = c * i + e * s,
                    _ = c * r + e * a,
                    g = c * s + e * h,
                    v = c * a + e * u,
                    p = c * h + e * l,
                    m = c * f + e * _,
                    y = c * d + e * g,
                    w = c * _ + e * v,
                    x = c * g + e * p,
                    b = c * m + e * w,
                    C = c * y + e * x;
                  return [
                    [n, i, f, d, m, y, b, C],
                    [b, C, w, x, v, p, u, l],
                  ];
                },
                getMonoCurves: function (t, e) {
                  var n = [],
                    i = e ? 0 : 1,
                    r = t[i + 0],
                    s = t[i + 2],
                    a = t[i + 4],
                    o = t[i + 6];
                  if ((r >= s == s >= a && s >= a == a >= o) || F.isStraight(t))
                    n.push(t);
                  else {
                    var h = [],
                      u = v.solveQuadratic(
                        3 * (s - a) - r + o,
                        2 * (r + a) - 4 * s,
                        s - r,
                        h,
                        1e-8,
                        0.99999999
                      );
                    if (u) {
                      h.sort();
                      var l = h[0],
                        c = F.subdivide(t, l);
                      n.push(c[0]),
                        u > 1 &&
                          ((l = (h[1] - l) / (1 - l)),
                          (c = F.subdivide(c[1], l)),
                          n.push(c[0])),
                        n.push(c[1]);
                    } else n.push(t);
                  }
                  return n;
                },
                solveCubic: function (t, e, n, i, r, s) {
                  var a = t[e],
                    o = t[e + 2],
                    h = t[e + 4],
                    u = t[e + 6],
                    l = 0;
                  if (
                    !(
                      (a < n && u < n && o < n && h < n) ||
                      (a > n && u > n && o > n && h > n)
                    )
                  ) {
                    var c = 3 * (o - a),
                      f = 3 * (h - o) - c;
                    l = v.solveCubic(u - a - c - f, f, c, a - n, i, r, s);
                  }
                  return l;
                },
                getTimeOf: function (t, e) {
                  var n = new m(t[0], t[1]),
                    i = new m(t[6], t[7]);
                  if (
                    null ===
                    (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null)
                  )
                    for (var r = [e.x, e.y], s = [], a = 0; a < 2; a++)
                      for (
                        var o = F.solveCubic(t, a, r[a], s, 0, 1), h = 0;
                        h < o;
                        h++
                      ) {
                        var u = s[h];
                        if (e.isClose(F.getPoint(t, u), 1e-7)) return u;
                      }
                  return e.isClose(n, 1e-7) ? 0 : e.isClose(i, 1e-7) ? 1 : null;
                },
                getNearestTime: function (t, e) {
                  if (F.isStraight(t)) {
                    var n = t[0],
                      i = t[1],
                      r = t[6],
                      s = t[7],
                      a = r - n,
                      o = s - i,
                      h = a * a + o * o;
                    if (0 === h) return 0;
                    var u = ((e.x - n) * a + (e.y - i) * o) / h;
                    return u < 1e-12
                      ? 0
                      : u > 0.999999999999
                        ? 1
                        : F.getTimeOf(t, new m(n + u * a, i + u * o));
                  }
                  var l = 1 / 0,
                    c = 0;
                  function f(n) {
                    if (n >= 0 && n <= 1) {
                      var i = e.getDistance(F.getPoint(t, n), !0);
                      if (i < l) return (l = i), (c = n), !0;
                    }
                  }
                  for (var d = 0; d <= 100; d++) f(d / 100);
                  for (var _ = 0.005; _ > 1e-8; )
                    f(c - _) || f(c + _) || (_ /= 2);
                  return c;
                },
                getPart: function (t, e, n) {
                  var i = e > n;
                  if (i) {
                    var r = e;
                    (e = n), (n = r);
                  }
                  return (
                    e > 0 && (t = F.subdivide(t, e)[1]),
                    n < 1 && (t = F.subdivide(t, (n - e) / (1 - e))[0]),
                    i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                  );
                },
                isFlatEnough: function (t, e) {
                  var n = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3],
                    a = t[4],
                    o = t[5],
                    h = t[6],
                    u = t[7],
                    l = 3 * r - 2 * n - h,
                    c = 3 * s - 2 * i - u,
                    f = 3 * a - 2 * h - n,
                    d = 3 * o - 2 * u - i;
                  return (
                    Math.max(l * l, f * f) + Math.max(c * c, d * d) <=
                    16 * e * e
                  );
                },
                getArea: function (t) {
                  var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    h = t[7];
                  return (
                    (3 *
                      ((h - n) * (i + s) -
                        (o - e) * (r + a) +
                        r * (e - s) -
                        i * (n - a) +
                        h * (s + e / 3) -
                        o * (a + n / 3))) /
                    20
                  );
                },
                getBounds: function (t) {
                  for (
                    var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0;
                    r < 2;
                    r++
                  )
                    F._addBounds(
                      t[r],
                      t[r + 2],
                      t[r + 4],
                      t[r + 6],
                      r,
                      0,
                      e,
                      n,
                      i
                    );
                  return new b(e[0], e[1], n[0] - e[0], n[1] - e[1]);
                },
                _addBounds: function (t, e, n, i, r, s, a, o, h) {
                  function u(t, e) {
                    var n = t - e,
                      i = t + e;
                    n < a[r] && (a[r] = n), i > o[r] && (o[r] = i);
                  }
                  s /= 2;
                  var l = a[r] + s,
                    c = o[r] - s;
                  if (
                    t < l ||
                    e < l ||
                    n < l ||
                    i < l ||
                    t > c ||
                    e > c ||
                    n > c ||
                    i > c
                  ) {
                    if (e < t != e < i && n < t != n < i) u(t, 0), u(i, 0);
                    else {
                      var f = v.solveQuadratic(
                        3 * (e - n) - t + i,
                        2 * (t + n) - 4 * e,
                        e - t,
                        h
                      );
                      u(i, 0);
                      for (var d = 0; d < f; d++) {
                        var _ = h[d],
                          g = 1 - _;
                        1e-8 <= _ &&
                          _ <= 0.99999999 &&
                          u(
                            g * g * g * t +
                              3 * g * g * _ * e +
                              3 * g * _ * _ * n +
                              _ * _ * _ * i,
                            s
                          );
                      }
                    }
                  }
                },
              },
            },
            l.each(
              ["getBounds", "getStrokeBounds", "getHandleBounds"],
              function (t) {
                this[t] = function () {
                  this._bounds || (this._bounds = {});
                  var e = this._bounds[t];
                  return (
                    e ||
                      (e = this._bounds[t] =
                        D[t]([this._segment1, this._segment2], !1, this._path)),
                    e.clone()
                  );
                };
              },
              {}
            ),
            l.each(
              {
                isStraight: function (t, e, n, i) {
                  if (e.isZero() && n.isZero()) return !0;
                  var r = i.subtract(t);
                  if (r.isZero());
                  else if (r.isCollinear(e) && r.isCollinear(n)) {
                    var s = new k(t, i);
                    if (
                      1e-7 > s.getDistance(t.add(e)) &&
                      1e-7 > s.getDistance(i.add(n))
                    ) {
                      var a = r.dot(r),
                        o = r.dot(e) / a,
                        h = r.dot(n) / a;
                      return o >= 0 && o <= 1 && h <= 0 && h >= -1;
                    }
                  }
                  return !1;
                },
                isLinear: function (t, e, n, i) {
                  var r = i.subtract(t).divide(3);
                  return e.equals(r) && n.negate().equals(r);
                },
              },
              function (t, e) {
                (this[e] = function (e) {
                  var n = this._segment1,
                    i = this._segment2;
                  return t(n._point, n._handleOut, i._handleIn, i._point, e);
                }),
                  (this.statics[e] = function (e, n) {
                    var i = e[0],
                      r = e[1],
                      s = e[6],
                      a = e[7];
                    return t(
                      new m(i, r),
                      new m(e[2] - i, e[3] - r),
                      new m(e[4] - s, e[5] - a),
                      new m(s, a),
                      n
                    );
                  });
              },
              {
                statics: {},
                hasHandles: function () {
                  return (
                    !this._segment1._handleOut.isZero() ||
                    !this._segment2._handleIn.isZero()
                  );
                },
                hasLength: function (t) {
                  return (
                    (!this.getPoint1().equals(this.getPoint2()) ||
                      this.hasHandles()) &&
                    this.getLength() > (t || 0)
                  );
                },
                isCollinear: function (t) {
                  return (
                    t &&
                    this.isStraight() &&
                    t.isStraight() &&
                    this.getLine().isCollinear(t.getLine())
                  );
                },
                isHorizontal: function () {
                  return (
                    this.isStraight() &&
                    1e-8 > Math.abs(this.getTangentAtTime(0.5).y)
                  );
                },
                isVertical: function () {
                  return (
                    this.isStraight() &&
                    1e-8 > Math.abs(this.getTangentAtTime(0.5).x)
                  );
                },
              }
            ),
            {
              beans: !1,
              getLocationAt: function (t, e) {
                return this.getLocationAtTime(e ? t : this.getTimeAt(t));
              },
              getLocationAtTime: function (t) {
                return null != t && t >= 0 && t <= 1 ? new R(this, t) : null;
              },
              getTimeAt: function (t, e) {
                return F.getTimeAt(this.getValues(), t, e);
              },
              getParameterAt: "#getTimeAt",
              getTimesWithTangent: function () {
                var t = m.read(arguments);
                return t.isZero()
                  ? []
                  : F.getTimesWithTangent(this.getValues(), t);
              },
              getOffsetAtTime: function (t) {
                return this.getPartLength(0, t);
              },
              getLocationOf: function () {
                return this.getLocationAtTime(
                  this.getTimeOf(m.read(arguments))
                );
              },
              getOffsetOf: function () {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null;
              },
              getTimeOf: function () {
                return F.getTimeOf(this.getValues(), m.read(arguments));
              },
              getParameterOf: "#getTimeOf",
              getNearestLocation: function () {
                var t = m.read(arguments),
                  e = this.getValues(),
                  n = F.getNearestTime(e, t),
                  i = F.getPoint(e, n);
                return new R(this, n, i, null, t.getDistance(i));
              },
              getNearestPoint: function () {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t;
              },
            },
            new (function () {
              var t = [
                "getPoint",
                "getTangent",
                "getNormal",
                "getWeightedTangent",
                "getWeightedNormal",
                "getCurvature",
              ];
              return l.each(
                t,
                function (t) {
                  (this[t + "At"] = function (e, n) {
                    var i = this.getValues();
                    return F[t](i, n ? e : F.getTimeAt(i, e));
                  }),
                    (this[t + "AtTime"] = function (e) {
                      return F[t](this.getValues(), e);
                    });
                },
                { statics: { _evaluateMethods: t } }
              );
            })(),
            new (function () {
              function t(t) {
                var e = t[0],
                  n = t[1],
                  i = t[2],
                  r = t[3],
                  s = t[4],
                  a = t[5],
                  o = t[6],
                  h = t[7],
                  u = 9 * (i - s) + 3 * (o - e),
                  l = 6 * (e + s) - 12 * i,
                  c = 3 * (i - e),
                  f = 9 * (r - a) + 3 * (h - n),
                  d = 6 * (n + a) - 12 * r,
                  _ = 3 * (r - n);
                return function (t) {
                  var e = (u * t + l) * t + c,
                    n = (f * t + d) * t + _;
                  return Math.sqrt(e * e + n * n);
                };
              }
              function e(t, e) {
                return Math.max(
                  2,
                  Math.min(16, Math.ceil(32 * Math.abs(e - t)))
                );
              }
              function n(t, e, n, i) {
                if (null == e || e < 0 || e > 1) return null;
                var r = t[0],
                  s = t[1],
                  a = t[2],
                  o = t[3],
                  h = t[4],
                  u = t[5],
                  l = t[6],
                  c = t[7],
                  f = v.isZero;
                f(a - r) && f(o - s) && ((a = r), (o = s)),
                  f(h - l) && f(u - c) && ((h = l), (u = c));
                var d,
                  _,
                  g = 3 * (a - r),
                  p = 3 * (h - a) - g,
                  y = l - r - g - p,
                  w = 3 * (o - s),
                  x = 3 * (u - o) - w,
                  b = c - s - w - x;
                if (0 === n)
                  (d =
                    0 === e ? r : 1 === e ? l : ((y * e + p) * e + g) * e + r),
                    (_ =
                      0 === e
                        ? s
                        : 1 === e
                          ? c
                          : ((b * e + x) * e + w) * e + s);
                else {
                  if (
                    (e < 1e-8
                      ? ((d = g), (_ = w))
                      : e > 0.99999999
                        ? ((d = 3 * (l - h)), (_ = 3 * (c - u)))
                        : ((d = (3 * y * e + 2 * p) * e + g),
                          (_ = (3 * b * e + 2 * x) * e + w)),
                    i)
                  ) {
                    0 === d &&
                      0 === _ &&
                      (e < 1e-8 || e > 0.99999999) &&
                      ((d = h - a), (_ = u - o));
                    var C = Math.sqrt(d * d + _ * _);
                    C && ((d /= C), (_ /= C));
                  }
                  if (3 === n) {
                    var h = 6 * y * e + 2 * p,
                      u = 6 * b * e + 2 * x,
                      S = Math.pow(d * d + _ * _, 1.5);
                    (d = 0 !== S ? (d * u - _ * h) / S : 0), (_ = 0);
                  }
                }
                return 2 === n ? new m(_, -d) : new m(d, _);
              }
              return {
                statics: {
                  classify: function (t) {
                    var e = t[0],
                      n = t[1],
                      i = t[2],
                      r = t[3],
                      s = t[4],
                      a = t[5],
                      h = t[6],
                      u = t[7],
                      l = i * (n - u) + r * (h - e) + e * u - n * h,
                      c = 3 * (s * (r - n) + a * (e - i) + i * n - r * e),
                      f = c - l,
                      d = f - l + (e * (u - a) + n * (s - h) + h * a - u * s),
                      _ = Math.sqrt(d * d + f * f + c * c),
                      g = 0 !== _ ? 1 / _ : 0,
                      p = v.isZero,
                      m = "serpentine";
                    function y(t, e, n) {
                      var i = o !== e,
                        r = i && e > 0 && e < 1,
                        s = i && n > 0 && n < 1;
                      return (
                        !i ||
                          ((r || s) && ("loop" !== t || (r && s))) ||
                          ((t = "arch"), (r = s = !1)),
                        {
                          type: t,
                          roots:
                            r || s
                              ? r && s
                                ? e < n
                                  ? [e, n]
                                  : [n, e]
                                : [r ? e : n]
                              : null,
                        }
                      );
                    }
                    if (((d *= g), (f *= g), (c *= g), p(d)))
                      return p(f)
                        ? y(p(c) ? "line" : "quadratic")
                        : y(m, c / (3 * f));
                    var w = 3 * f * f - 4 * d * c;
                    if (p(w)) return y("cusp", f / (2 * d));
                    var x = w > 0 ? Math.sqrt(w / 3) : Math.sqrt(-w),
                      b = 2 * d;
                    return y(w > 0 ? m : "loop", (f + x) / b, (f - x) / b);
                  },
                  getLength: function (n, i, r, s) {
                    if (
                      (o === i && (i = 0), o === r && (r = 1), F.isStraight(n))
                    ) {
                      var a = n;
                      r < 1 && ((a = F.subdivide(a, r)[0]), (i /= r)),
                        i > 0 && (a = F.subdivide(a, i)[1]);
                      var h = a[6] - a[0],
                        u = a[7] - a[1];
                      return Math.sqrt(h * h + u * u);
                    }
                    return v.integrate(s || t(n), i, r, e(i, r));
                  },
                  getTimeAt: function (n, i, r) {
                    if ((o === r && (r = i < 0 ? 1 : 0), 0 === i)) return r;
                    var s = Math.abs,
                      a = i > 0,
                      h = a ? r : 0,
                      u = a ? 1 : r,
                      l = t(n),
                      c = F.getLength(n, h, u, l),
                      f = s(i) - c;
                    if (1e-12 > s(f)) return a ? u : h;
                    if (f > 1e-12) return null;
                    var d = i / c,
                      _ = 0;
                    return v.findRoot(
                      function (t) {
                        return (
                          (_ += v.integrate(l, r, t, e(r, t))), (r = t), _ - i
                        );
                      },
                      l,
                      r + d,
                      h,
                      u,
                      32,
                      1e-12
                    );
                  },
                  getPoint: function (t, e) {
                    return n(t, e, 0, !1);
                  },
                  getTangent: function (t, e) {
                    return n(t, e, 1, !0);
                  },
                  getWeightedTangent: function (t, e) {
                    return n(t, e, 1, !1);
                  },
                  getNormal: function (t, e) {
                    return n(t, e, 2, !0);
                  },
                  getWeightedNormal: function (t, e) {
                    return n(t, e, 2, !1);
                  },
                  getCurvature: function (t, e) {
                    return n(t, e, 3, !1).x;
                  },
                  getPeaks: function (t) {
                    var e = t[0],
                      n = t[1],
                      i = t[2],
                      r = t[3],
                      s = t[4],
                      a = t[5],
                      o = t[6],
                      h = t[7],
                      u = -e + 3 * i - 3 * s + o,
                      l = 3 * e - 6 * i + 3 * s,
                      c = -3 * e + 3 * i,
                      f = -n + 3 * r - 3 * a + h,
                      d = 3 * n - 6 * r + 3 * a,
                      _ = -3 * n + 3 * r,
                      g = [];
                    return (
                      v.solveCubic(
                        9 * (u * u + f * f),
                        9 * (u * l + d * f),
                        2 * (l * l + d * d) + 3 * (c * u + _ * f),
                        c * l + d * _,
                        g,
                        1e-8,
                        0.99999999
                      ),
                      g.sort()
                    );
                  },
                },
              };
            })(),
            new (function () {
              function t(t, e, n, i, r, s, a) {
                var o = !a && n.getPrevious() === r,
                  h = !a && n !== r && n.getNext() === r;
                if (
                  null !== i &&
                  i >= (o ? 1e-8 : 0) &&
                  i <= (h ? 0.99999999 : 1) &&
                  null !== s &&
                  s >= (h ? 1e-8 : 0) &&
                  s <= (o ? 0.99999999 : 1)
                ) {
                  var u = new R(n, i, null, a),
                    l = new R(r, s, null, a);
                  (u._intersection = l),
                    (l._intersection = u),
                    (!e || e(u)) && R.insert(t, u, !0);
                }
              }
              function e(t, e, i, r) {
                return t[0][1] < i
                  ? n(t, !0, i)
                  : e[0][1] > r
                    ? n(e, !1, r)
                    : t[0][0];
              }
              function n(t, e, n) {
                for (
                  var i = t[0][0], r = t[0][1], s = 1, a = t.length;
                  s < a;
                  s++
                ) {
                  var o = t[s][0],
                    h = t[s][1];
                  if (e ? h >= n : h <= n)
                    return h === n ? o : i + ((n - r) * (o - i)) / (h - r);
                  (i = o), (r = h);
                }
                return null;
              }
              function i(t, e, n, i, r) {
                var s = v.isZero;
                if (s(i) && s(r)) {
                  var a = F.getTimeOf(t, new m(e, n));
                  return null === a ? [] : [a];
                }
                for (
                  var o = Math.atan2(-r, i),
                    h = Math.sin(o),
                    u = Math.cos(o),
                    l = [],
                    c = [],
                    f = 0;
                  f < 8;
                  f += 2
                ) {
                  var d = t[f] - e,
                    _ = t[f + 1] - n;
                  l.push(d * u - _ * h, d * h + _ * u);
                }
                return F.solveCubic(l, 1, 0, c, 0, 1), c;
              }
              function r(n, r, s, o, h, u) {
                var l = Math.min,
                  c = Math.max;
                if (
                  c(n[0], n[2], n[4], n[6]) + 1e-12 >
                    l(r[0], r[2], r[4], r[6]) &&
                  l(n[0], n[2], n[4], n[6]) - 1e-12 <
                    c(r[0], r[2], r[4], r[6]) &&
                  c(n[1], n[3], n[5], n[7]) + 1e-12 >
                    l(r[1], r[3], r[5], r[7]) &&
                  l(n[1], n[3], n[5], n[7]) - 1e-12 < c(r[1], r[3], r[5], r[7])
                ) {
                  var f = a(n, r);
                  if (f)
                    for (var d = 0; d < 2; d++) {
                      var _ = f[d];
                      t(h, u, s, _[0], o, _[1], !0);
                    }
                  else {
                    var g = F.isStraight(n),
                      v = F.isStraight(r),
                      p = g && v,
                      y = g && !v,
                      w = h.length;
                    if (
                      ((p
                        ? function (e, n, i, r, s, a) {
                            var o = k.intersect(
                              e[0],
                              e[1],
                              e[6],
                              e[7],
                              n[0],
                              n[1],
                              n[6],
                              n[7]
                            );
                            o &&
                              t(
                                s,
                                a,
                                i,
                                F.getTimeOf(e, o),
                                r,
                                F.getTimeOf(n, o)
                              );
                          }
                        : g || v
                          ? function (e, n, r, s, a, o, h) {
                              for (
                                var u = n[0],
                                  l = n[1],
                                  c = i(e, u, l, n[6] - u, n[7] - l),
                                  f = 0,
                                  d = c.length;
                                f < d;
                                f++
                              ) {
                                var _ = c[f],
                                  g = F.getPoint(e, _),
                                  v = F.getTimeOf(n, g);
                                null !== v &&
                                  t(
                                    a,
                                    o,
                                    h ? s : r,
                                    h ? v : _,
                                    h ? r : s,
                                    h ? _ : v
                                  );
                              }
                            }
                          : function n(i, r, s, a, o, h, u, l, c, f, d, _, g) {
                              if (++c >= 4096 || ++l >= 40) return c;
                              var v,
                                p,
                                m = r[0],
                                y = r[1],
                                w = r[6],
                                x = r[7],
                                b = k.getSignedDistance,
                                C = b(m, y, w, x, r[2], r[3]),
                                S = b(m, y, w, x, r[4], r[5]),
                                I = C * S > 0 ? 3 / 4 : 4 / 9,
                                P = I * Math.min(0, C, S),
                                T = I * Math.max(0, C, S),
                                M = b(m, y, w, x, i[0], i[1]),
                                A = b(m, y, w, x, i[2], i[3]),
                                O = b(m, y, w, x, i[4], i[5]),
                                z = b(m, y, w, x, i[6], i[7]),
                                E = (function (t, e, n, i) {
                                  var r,
                                    s = [0, t],
                                    a = [1 / 3, e],
                                    o = [2 / 3, n],
                                    h = [1, i],
                                    u = e - (2 * t + i) / 3,
                                    l = n - (t + 2 * i) / 3;
                                  if (u * l < 0)
                                    r = [
                                      [s, a, h],
                                      [s, o, h],
                                    ];
                                  else {
                                    var c = u / l;
                                    r = [
                                      c >= 2
                                        ? [s, a, h]
                                        : c <= 0.5
                                          ? [s, o, h]
                                          : [s, a, o, h],
                                      [s, h],
                                    ];
                                  }
                                  return 0 > (u || l) ? r.reverse() : r;
                                })(M, A, O, z),
                                L = E[0],
                                N = E[1];
                              if (
                                (0 === C &&
                                  0 === S &&
                                  0 === M &&
                                  0 === A &&
                                  0 === O &&
                                  0 === z) ||
                                null == (v = e(L, N, P, T)) ||
                                null == (p = e(L.reverse(), N.reverse(), P, T))
                              )
                                return c;
                              var B = f + (d - f) * v,
                                R = f + (d - f) * p;
                              if (1e-9 > Math.max(g - _, R - B)) {
                                var j = (B + R) / 2,
                                  D = (_ + g) / 2;
                                t(
                                  o,
                                  h,
                                  u ? a : s,
                                  u ? D : j,
                                  u ? s : a,
                                  u ? j : D
                                );
                              } else {
                                i = F.getPart(i, v, p);
                                var q = g - _;
                                if (p - v > 0.8) {
                                  if (R - B > q) {
                                    var V = F.subdivide(i, 0.5),
                                      j = (B + R) / 2;
                                    (c = n(
                                      r,
                                      V[0],
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      l,
                                      c,
                                      _,
                                      g,
                                      B,
                                      j
                                    )),
                                      (c = n(
                                        r,
                                        V[1],
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        _,
                                        g,
                                        j,
                                        R
                                      ));
                                  } else {
                                    var V = F.subdivide(r, 0.5),
                                      D = (_ + g) / 2;
                                    (c = n(
                                      V[0],
                                      i,
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      l,
                                      c,
                                      _,
                                      D,
                                      B,
                                      R
                                    )),
                                      (c = n(
                                        V[1],
                                        i,
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        D,
                                        g,
                                        B,
                                        R
                                      ));
                                  }
                                } else
                                  c =
                                    0 === q || q >= 1e-9
                                      ? n(
                                          r,
                                          i,
                                          a,
                                          s,
                                          o,
                                          h,
                                          !u,
                                          l,
                                          c,
                                          _,
                                          g,
                                          B,
                                          R
                                        )
                                      : n(
                                          i,
                                          r,
                                          s,
                                          a,
                                          o,
                                          h,
                                          u,
                                          l,
                                          c,
                                          B,
                                          R,
                                          _,
                                          g
                                        );
                              }
                              return c;
                            })(
                        y ? r : n,
                        y ? n : r,
                        y ? o : s,
                        y ? s : o,
                        h,
                        u,
                        y,
                        0,
                        0,
                        0,
                        1,
                        0,
                        1
                      ),
                      !p || h.length === w)
                    )
                      for (var d = 0; d < 4; d++) {
                        var x = d >> 1,
                          b = 1 & d,
                          C = 6 * x,
                          S = 6 * b,
                          I = new m(n[C], n[C + 1]),
                          P = new m(r[S], r[S + 1]);
                        I.isClose(P, 1e-12) && t(h, u, s, x, o, b);
                      }
                  }
                }
                return h;
              }
              function s(e, n, i, r) {
                var s = F.classify(e);
                if ("loop" === s.type) {
                  var a = s.roots;
                  t(i, r, n, a[0], n, a[1]);
                }
                return i;
              }
              function a(t, e) {
                function n(t) {
                  var e = t[6] - t[0],
                    n = t[7] - t[1];
                  return e * e + n * n;
                }
                var i = Math.abs,
                  r = k.getDistance,
                  s = F.isStraight(t),
                  a = F.isStraight(e),
                  o = s && a,
                  h = n(t) < n(e),
                  u = h ? e : t,
                  l = h ? t : e,
                  c = u[0],
                  f = u[1],
                  d = u[6] - c,
                  _ = u[7] - f;
                if (
                  1e-7 > r(c, f, d, _, l[0], l[1], !0) &&
                  1e-7 > r(c, f, d, _, l[6], l[7], !0)
                )
                  !o &&
                    1e-7 > r(c, f, d, _, u[2], u[3], !0) &&
                    1e-7 > r(c, f, d, _, u[4], u[5], !0) &&
                    1e-7 > r(c, f, d, _, l[2], l[3], !0) &&
                    1e-7 > r(c, f, d, _, l[4], l[5], !0) &&
                    (s = a = o = !0);
                else if (o) return null;
                if (s ^ a) return null;
                for (
                  var g = [t, e], v = [], p = 0;
                  p < 4 && v.length < 2;
                  p++
                ) {
                  var y = 1 & p,
                    w = 1 ^ y,
                    x = p >> 1,
                    b = F.getTimeOf(
                      g[y],
                      new m(g[w][x ? 6 : 0], g[w][x ? 7 : 1])
                    );
                  if (null != b) {
                    var C = y ? [x, b] : [b, x];
                    (!v.length ||
                      (i(C[0] - v[0][0]) > 1e-8 && i(C[1] - v[0][1]) > 1e-8)) &&
                      v.push(C);
                  }
                  if (p > 2 && !v.length) break;
                }
                if (2 !== v.length) v = null;
                else if (!o) {
                  var S = F.getPart(t, v[0][0], v[1][0]),
                    I = F.getPart(e, v[0][1], v[1][1]);
                  (i(I[2] - S[2]) > 1e-7 ||
                    i(I[3] - S[3]) > 1e-7 ||
                    i(I[4] - S[4]) > 1e-7 ||
                    i(I[5] - S[5]) > 1e-7) &&
                    (v = null);
                }
                return v;
              }
              return {
                getIntersections: function (t) {
                  var e = this.getValues(),
                    n = t && t !== this && t.getValues();
                  return n ? r(e, n, this, t, []) : s(e, this, []);
                },
                statics: {
                  getOverlaps: a,
                  getIntersections: function (t, e, n, i, a, o) {
                    var h = !e;
                    h && (e = t);
                    for (
                      var u = t.length,
                        l = e.length,
                        c = Array(u),
                        f = h ? c : Array(l),
                        d = [],
                        g = 0;
                      g < u;
                      g++
                    )
                      c[g] = t[g].getValues(i);
                    if (!h)
                      for (var g = 0; g < l; g++) f[g] = e[g].getValues(a);
                    for (
                      var v = _.findCurveBoundsCollisions(c, f, 1e-7), p = 0;
                      p < u;
                      p++
                    ) {
                      var m = t[p],
                        y = c[p];
                      h && s(y, m, d, n);
                      var w = v[p];
                      if (w)
                        for (var x = 0; x < w.length; x++) {
                          if (o && d.length) return d;
                          var b = w[x];
                          if (!h || b > p) {
                            var C = e[b];
                            r(y, f[b], m, C, d, n);
                          }
                        }
                    }
                    return d;
                  },
                  getCurveLineIntersections: i,
                  getTimesWithTangent: function (t, e) {
                    var n = t[0],
                      i = t[1],
                      r = t[2],
                      s = t[3],
                      a = t[4],
                      o = t[5],
                      h = t[6],
                      u = t[7],
                      l = e.normalize(),
                      c = l.x,
                      f = l.y,
                      d = 3 * h - 9 * a + 9 * r - 3 * n,
                      _ = 3 * u - 9 * o + 9 * s - 3 * i,
                      g = 6 * a - 12 * r + 6 * n,
                      p = 6 * o - 12 * s + 6 * i,
                      m = 3 * r - 3 * n,
                      y = 3 * s - 3 * i,
                      w = 2 * d * f - 2 * _ * c,
                      x = [];
                    if (Math.abs(w) < v.CURVETIME_EPSILON) {
                      var w = d * p - _ * g;
                      if (0 != w) {
                        var b = -(d * y - _ * m) / w;
                        b >= 0 && b <= 1 && x.push(b);
                      }
                    } else {
                      var C =
                          (g * g - 4 * d * m) * f * f +
                          (-2 * g * p + 4 * _ * m + 4 * d * y) * c * f +
                          (p * p - 4 * _ * y) * c * c,
                        S = g * f - p * c;
                      if (C >= 0 && 0 != w) {
                        var k = Math.sqrt(C),
                          I = -(S + k) / w,
                          P = (-S + k) / w;
                        I >= 0 && I <= 1 && x.push(I),
                          P >= 0 && P <= 1 && x.push(P);
                      }
                    }
                    return x;
                  },
                },
              };
            })()
          ),
          R = l.extend(
            {
              _class: "CurveLocation",
              initialize: function (t, e, n, i, r) {
                if (e >= 0.99999999) {
                  var s = t.getNext();
                  s && ((e = 0), (t = s));
                }
                this._setCurve(t),
                  (this._time = e),
                  (this._point = n || t.getPointAtTime(e)),
                  (this._overlap = i),
                  (this._distance = r),
                  (this._intersection = this._next = this._previous = null);
              },
              _setPath: function (t) {
                (this._path = t), (this._version = t ? t._version : 0);
              },
              _setCurve: function (t) {
                this._setPath(t._path),
                  (this._curve = t),
                  (this._segment = null),
                  (this._segment1 = t._segment1),
                  (this._segment2 = t._segment2);
              },
              _setSegment: function (t) {
                var e = t.getCurve();
                e
                  ? this._setCurve(e)
                  : (this._setPath(t._path),
                    (this._segment1 = t),
                    (this._segment2 = null)),
                  (this._segment = t),
                  (this._time = t === this._segment1 ? 0 : 1),
                  (this._point = t._point.clone());
              },
              getSegment: function () {
                var t = this._segment;
                if (!t) {
                  var e = this.getCurve(),
                    n = this.getTime();
                  0 === n
                    ? (t = e._segment1)
                    : 1 === n
                      ? (t = e._segment2)
                      : null != n &&
                        (t =
                          e.getPartLength(0, n) < e.getPartLength(n, 1)
                            ? e._segment1
                            : e._segment2),
                    (this._segment = t);
                }
                return t;
              },
              getCurve: function () {
                var t = this._path,
                  e = this;
                function n(t) {
                  var n = t && t.getCurve();
                  if (n && null != (e._time = n.getTimeOf(e._point)))
                    return e._setCurve(n), n;
                }
                return (
                  t &&
                    t._version !== this._version &&
                    (this._time =
                      this._offset =
                      this._curveOffset =
                      this._curve =
                        null),
                  this._curve ||
                    n(this._segment) ||
                    n(this._segment1) ||
                    n(this._segment2.getPrevious())
                );
              },
              getPath: function () {
                var t = this.getCurve();
                return t && t._path;
              },
              getIndex: function () {
                var t = this.getCurve();
                return t && t.getIndex();
              },
              getTime: function () {
                var t = this.getCurve(),
                  e = this._time;
                return t && null == e
                  ? (this._time = t.getTimeOf(this._point))
                  : e;
              },
              getParameter: "#getTime",
              getPoint: function () {
                return this._point;
              },
              getOffset: function () {
                var t = this._offset;
                if (null == t) {
                  t = 0;
                  var e = this.getPath(),
                    n = this.getIndex();
                  if (e && null != n)
                    for (var i = e.getCurves(), r = 0; r < n; r++)
                      t += i[r].getLength();
                  this._offset = t += this.getCurveOffset();
                }
                return t;
              },
              getCurveOffset: function () {
                var t = this._curveOffset;
                if (null == t) {
                  var e = this.getCurve(),
                    n = this.getTime();
                  this._curveOffset = t =
                    null != n && e && e.getPartLength(0, n);
                }
                return t;
              },
              getIntersection: function () {
                return this._intersection;
              },
              getDistance: function () {
                return this._distance;
              },
              divide: function () {
                var t = this.getCurve(),
                  e = t && t.divideAtTime(this.getTime());
                return e && this._setSegment(e._segment1), e;
              },
              split: function () {
                var t = this.getCurve(),
                  e = t._path,
                  n = t && t.splitAtTime(this.getTime());
                return n && this._setSegment(e.getLastSegment()), n;
              },
              equals: function (t, e) {
                var n = this === t;
                if (!n && t instanceof R) {
                  var i = this.getCurve(),
                    r = t.getCurve(),
                    s = i._path;
                  if (s === r._path) {
                    var a = Math.abs,
                      o = a(this.getOffset() - t.getOffset()),
                      h = !e && this._intersection,
                      u = !e && t._intersection;
                    n =
                      (o < 1e-7 || (s && 1e-7 > a(s.getLength() - o))) &&
                      ((!h && !u) || (h && u && h.equals(u, !0)));
                  }
                }
                return n;
              },
              toString: function () {
                var t = [],
                  e = this.getPoint(),
                  n = g.instance;
                e && t.push("point: " + e);
                var i = this.getIndex();
                null != i && t.push("index: " + i);
                var r = this.getTime();
                return (
                  null != r && t.push("time: " + n.number(r)),
                  null != this._distance &&
                    t.push("distance: " + n.number(this._distance)),
                  "{ " + t.join(", ") + " }"
                );
              },
              isTouching: function () {
                var t = this._intersection;
                if (t && this.getTangent().isCollinear(t.getTangent())) {
                  var e = this.getCurve(),
                    n = t.getCurve();
                  return !(
                    e.isStraight() &&
                    n.isStraight() &&
                    e.getLine().intersect(n.getLine())
                  );
                }
                return !1;
              },
              isCrossing: function () {
                var t = this._intersection;
                if (!t) return !1;
                var e = this.getTime(),
                  n = t.getTime(),
                  i = e >= 1e-8 && e <= 0.99999999,
                  r = n >= 1e-8 && n <= 0.99999999;
                if (i && r) return !this.isTouching();
                var s = this.getCurve(),
                  a = s && e < 1e-8 ? s.getPrevious() : s,
                  o = t.getCurve(),
                  h = o && n < 1e-8 ? o.getPrevious() : o;
                if (
                  (e > 0.99999999 && (s = s.getNext()),
                  n > 0.99999999 && (o = o.getNext()),
                  !a || !s || !h || !o)
                )
                  return !1;
                var u = [];
                function l(t, e) {
                  var n = t.getValues(),
                    i = F.classify(n).roots || F.getPeaks(n),
                    r = i.length,
                    s = F.getLength(
                      n,
                      e && r ? i[r - 1] : 0,
                      !e && r ? i[0] : 1
                    );
                  u.push(r ? s : s / 32);
                }
                function c(t, e, n) {
                  return e < n ? t > e && t < n : t > e || t < n;
                }
                i || (l(a, !0), l(s, !1)), r || (l(h, !0), l(o, !1));
                var f = this.getPoint(),
                  d = Math.min.apply(Math, u),
                  _ = i ? s.getTangentAtTime(e) : s.getPointAt(d).subtract(f),
                  g = i ? _.negate() : a.getPointAt(-d).subtract(f),
                  v = r ? o.getTangentAtTime(n) : o.getPointAt(d).subtract(f),
                  p = r ? v.negate() : h.getPointAt(-d).subtract(f),
                  m = g.getAngle(),
                  y = _.getAngle(),
                  w = p.getAngle(),
                  x = v.getAngle();
                return !!(i
                  ? c(m, w, x) ^ c(y, w, x) && c(m, x, w) ^ c(y, x, w)
                  : c(w, m, y) ^ c(x, m, y) && c(w, y, m) ^ c(x, y, m));
              },
              hasOverlap: function () {
                return !!this._overlap;
              },
            },
            l.each(
              F._evaluateMethods,
              function (t) {
                var e = t + "At";
                this[t] = function () {
                  var t = this.getCurve(),
                    n = this.getTime();
                  return null != n && t && t[e](n, !0);
                };
              },
              { preserve: !0 }
            ),
            new (function () {
              function t(t, e, n) {
                var i = t.length,
                  r = 0,
                  s = i - 1;
                function a(n, r) {
                  for (var s = n + r; s >= -1 && s <= i; s += r) {
                    var a = t[((s % i) + i) % i];
                    if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                    if (e.equals(a)) return a;
                  }
                  return null;
                }
                for (; r <= s; ) {
                  var o,
                    h = (r + s) >>> 1,
                    u = t[h];
                  if (n && (o = e.equals(u) ? u : a(h, -1) || a(h, 1)))
                    return (
                      e._overlap &&
                        (o._overlap = o._intersection._overlap = !0),
                      o
                    );
                  var l = e.getPath(),
                    c = u.getPath();
                  (l !== c
                    ? l._id - c._id
                    : e.getIndex() +
                      e.getTime() -
                      (u.getIndex() + u.getTime())) < 0
                    ? (s = h - 1)
                    : (r = h + 1);
                }
                return t.splice(r, 0, e), e;
              }
              return {
                statics: {
                  insert: t,
                  expand: function (e) {
                    for (var n = e.slice(), i = e.length - 1; i >= 0; i--)
                      t(n, e[i]._intersection, !1);
                    return n;
                  },
                },
              };
            })()
          ),
          j = P.extend({
            _class: "PathItem",
            _selectBounds: !1,
            _canScaleStroke: !0,
            beans: !0,
            initialize: function () {},
            statics: {
              create: function (t) {
                if (
                  (l.isPlainObject(t)
                    ? ((n = t.segments), (e = t.pathData))
                    : Array.isArray(t)
                      ? (n = t)
                      : "string" == typeof t && (e = t),
                  n)
                ) {
                  var e,
                    n,
                    i,
                    r = n[0];
                  i = r && Array.isArray(r[0]);
                } else
                  e &&
                    (i =
                      (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                return new (i ? q : D)(t);
              },
            },
            _asPathItem: function () {
              return this;
            },
            isClockwise: function () {
              return this.getArea() >= 0;
            },
            setClockwise: function (t) {
              this.isClockwise() != (t = !!t) && this.reverse();
            },
            setPathData: function (t) {
              var e,
                n,
                i,
                r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                s = !1,
                a = new m(),
                o = new m();
              function h(t, n) {
                var i = +e[t];
                return s && (i += a[n]), i;
              }
              function u(t) {
                return new m(h(t, "x"), h(t + 1, "y"));
              }
              this.clear();
              for (var l = 0, c = r && r.length; l < c; l++) {
                var f = r[l],
                  d = f[0],
                  _ = d.toLowerCase(),
                  g =
                    (e = f.match(
                      /[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g
                    )) && e.length;
                switch (
                  ((s = d === _),
                  "z" !== n || /[mz]/.test(_) || this.moveTo(a),
                  _)
                ) {
                  case "m":
                  case "l":
                    for (var v = "m" === _, p = 0; p < g; p += 2)
                      this[v ? "moveTo" : "lineTo"]((a = u(p))),
                        v && ((o = a), (v = !1));
                    i = a;
                    break;
                  case "h":
                  case "v":
                    var y = "h" === _ ? "x" : "y";
                    a = a.clone();
                    for (var p = 0; p < g; p++)
                      (a[y] = h(p, y)), this.lineTo(a);
                    i = a;
                    break;
                  case "c":
                    for (var p = 0; p < g; p += 6)
                      this.cubicCurveTo(u(p), (i = u(p + 2)), (a = u(p + 4)));
                    break;
                  case "s":
                    for (var p = 0; p < g; p += 4)
                      this.cubicCurveTo(
                        /[cs]/.test(n) ? a.multiply(2).subtract(i) : a,
                        (i = u(p)),
                        (a = u(p + 2))
                      ),
                        (n = _);
                    break;
                  case "q":
                    for (var p = 0; p < g; p += 4)
                      this.quadraticCurveTo((i = u(p)), (a = u(p + 2)));
                    break;
                  case "t":
                    for (var p = 0; p < g; p += 2)
                      this.quadraticCurveTo(
                        (i = /[qt]/.test(n) ? a.multiply(2).subtract(i) : a),
                        (a = u(p))
                      ),
                        (n = _);
                    break;
                  case "a":
                    for (var p = 0; p < g; p += 7)
                      this.arcTo(
                        (a = u(p + 5)),
                        new w(+e[p], +e[p + 1]),
                        +e[p + 2],
                        +e[p + 4],
                        +e[p + 3]
                      );
                    break;
                  case "z":
                    this.closePath(1e-12), (a = o);
                }
                n = _;
              }
            },
            _canComposite: function () {
              return !(this.hasFill() && this.hasStroke());
            },
            _contains: function (t) {
              var e = t.isInside(this.getBounds({ internal: !0, handle: !0 }))
                ? this._getWinding(t)
                : {};
              return (
                e.onPath ||
                !!("evenodd" === this.getFillRule()
                  ? 1 & e.windingL || 1 & e.windingR
                  : e.winding)
              );
            },
            getIntersections: function (t, e, n, i) {
              var r = this === t || !t,
                s = this._matrix._orNullIfIdentity(),
                a = r ? s : (n || t._matrix)._orNullIfIdentity();
              return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12)
                ? F.getIntersections(
                    this.getCurves(),
                    !r && t.getCurves(),
                    e,
                    s,
                    a,
                    i
                  )
                : [];
            },
            getCrossings: function (t) {
              return this.getIntersections(t, function (t) {
                return t.isCrossing();
              });
            },
            getNearestLocation: function () {
              for (
                var t = m.read(arguments),
                  e = this.getCurves(),
                  n = 1 / 0,
                  i = null,
                  r = 0,
                  s = e.length;
                r < s;
                r++
              ) {
                var a = e[r].getNearestLocation(t);
                a._distance < n && ((n = a._distance), (i = a));
              }
              return i;
            },
            getNearestPoint: function () {
              var t = this.getNearestLocation.apply(this, arguments);
              return t ? t.getPoint() : t;
            },
            interpolate: function (t, e, n) {
              var i = !this._children,
                r = i ? "_segments" : "_children",
                s = t[r],
                a = e[r],
                o = this[r];
              if (!s || !a || s.length !== a.length)
                throw Error(
                  "Invalid operands in interpolate() call: " + t + ", " + e
                );
              var h = o.length,
                u = a.length;
              if (h < u)
                for (var l = i ? N : D, c = h; c < u; c++) this.add(new l());
              else h > u && this[i ? "removeSegments" : "removeChildren"](u, h);
              for (var c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
              i && (this.setClosed(t._closed), this._changed(9));
            },
            compare: function (t) {
              var e = !1;
              if (t) {
                var n = this._children || [this],
                  i = t._children ? t._children.slice() : [t],
                  r = n.length,
                  s = i.length,
                  a = [],
                  o = 0;
                e = !0;
                for (
                  var h = _.findItemBoundsCollisions(n, i, v.GEOMETRIC_EPSILON),
                    u = r - 1;
                  u >= 0 && e;
                  u--
                ) {
                  var l = n[u];
                  e = !1;
                  var c = h[u];
                  if (c)
                    for (var f = c.length - 1; f >= 0 && !e; f--)
                      l.compare(i[c[f]]) &&
                        (!a[c[f]] && ((a[c[f]] = !0), o++), (e = !0));
                }
                e = e && o === s;
              }
              return e;
            },
          }),
          D = j.extend(
            {
              _class: "Path",
              _serializeFields: { segments: [], closed: !1 },
              initialize: function (t) {
                (this._closed = !1), (this._segments = []), (this._version = 0);
                var e = arguments,
                  n = Array.isArray(t)
                    ? "object" == typeof t[0]
                      ? t
                      : e
                    : t && o === t.size && (o !== t.x || o !== t.point)
                      ? e
                      : null;
                n && n.length > 0
                  ? this.setSegments(n)
                  : ((this._curves = o),
                    (this._segmentSelection = 0),
                    n ||
                      "string" != typeof t ||
                      (this.setPathData(t), (t = null))),
                  this._initialize(!n && t);
              },
              _equals: function (t) {
                return (
                  this._closed === t._closed &&
                  l.equals(this._segments, t._segments)
                );
              },
              copyContent: function (t) {
                this.setSegments(t._segments), (this._closed = t._closed);
              },
              _changed: function t(e) {
                if ((t.base.call(this, e), 8 & e)) {
                  if (((this._length = this._area = o), 32 & e))
                    this._version++;
                  else if (this._curves)
                    for (var n = 0, i = this._curves.length; n < i; n++)
                      this._curves[n]._changed();
                } else 64 & e && (this._bounds = o);
              },
              getStyle: function () {
                var t = this._parent;
                return (t instanceof q ? t : this)._style;
              },
              getSegments: function () {
                return this._segments;
              },
              setSegments: function (t) {
                var e = this.isFullySelected(),
                  n = t && t.length;
                if (
                  ((this._segments.length = 0),
                  (this._segmentSelection = 0),
                  (this._curves = o),
                  n)
                ) {
                  var i = t[n - 1];
                  "boolean" == typeof i && (this.setClosed(i), n--),
                    this._add(N.readList(t, 0, {}, n));
                }
                e && this.setFullySelected(!0);
              },
              getFirstSegment: function () {
                return this._segments[0];
              },
              getLastSegment: function () {
                return this._segments[this._segments.length - 1];
              },
              getCurves: function () {
                var t = this._curves,
                  e = this._segments;
                if (!t) {
                  var n = this._countCurves();
                  t = this._curves = Array(n);
                  for (var i = 0; i < n; i++)
                    t[i] = new F(this, e[i], e[i + 1] || e[0]);
                }
                return t;
              },
              getFirstCurve: function () {
                return this.getCurves()[0];
              },
              getLastCurve: function () {
                var t = this.getCurves();
                return t[t.length - 1];
              },
              isClosed: function () {
                return this._closed;
              },
              setClosed: function (t) {
                if (this._closed != (t = !!t)) {
                  if (((this._closed = t), this._curves)) {
                    var e = (this._curves.length = this._countCurves());
                    t &&
                      (this._curves[e - 1] = new F(
                        this,
                        this._segments[e - 1],
                        this._segments[0]
                      ));
                  }
                  this._changed(41);
                }
              },
            },
            {
              beans: !0,
              getPathData: function (t, e) {
                var n,
                  i,
                  r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  l = this._segments,
                  c = l.length,
                  f = new g(e),
                  d = Array(6),
                  _ = !0,
                  v = [];
                function p(e, l) {
                  if (
                    (e._transformCoordinates(t, d), (n = d[0]), (i = d[1]), _)
                  )
                    v.push("M" + f.pair(n, i)), (_ = !1);
                  else if (
                    ((a = d[2]),
                    (o = d[3]),
                    a === n && o === i && h === r && u === s)
                  ) {
                    if (!l) {
                      var c = n - r,
                        g = i - s;
                      v.push(
                        0 === c
                          ? "v" + f.number(g)
                          : 0 === g
                            ? "h" + f.number(c)
                            : "l" + f.pair(c, g)
                      );
                    }
                  } else
                    v.push(
                      "c" +
                        f.pair(h - r, u - s) +
                        " " +
                        f.pair(a - r, o - s) +
                        " " +
                        f.pair(n - r, i - s)
                    );
                  (r = n), (s = i), (h = d[4]), (u = d[5]);
                }
                if (!c) return "";
                for (var m = 0; m < c; m++) p(l[m]);
                return (
                  this._closed && c > 0 && (p(l[0], !0), v.push("z")),
                  v.join("")
                );
              },
              isEmpty: function () {
                return !this._segments.length;
              },
              _transformContent: function (t) {
                for (
                  var e = this._segments, n = Array(6), i = 0, r = e.length;
                  i < r;
                  i++
                )
                  e[i]._transformCoordinates(t, n, !0);
                return !0;
              },
              _add: function (t, e) {
                for (
                  var n = this._segments,
                    i = this._curves,
                    r = t.length,
                    s = null == e,
                    e = s ? n.length : e,
                    a = 0;
                  a < r;
                  a++
                ) {
                  var o = t[a];
                  o._path && (o = t[a] = o.clone()),
                    (o._path = this),
                    (o._index = e + a),
                    o._selection && this._updateSelection(o, 0, o._selection);
                }
                if (s) l.push(n, t);
                else {
                  n.splice.apply(n, [e, 0].concat(t));
                  for (var a = e + r, h = n.length; a < h; a++) n[a]._index = a;
                }
                if (i) {
                  var u = this._countCurves(),
                    c = e > 0 && e + r - 1 === u ? e - 1 : e,
                    f = c,
                    d = Math.min(c + r, u);
                  t._curves &&
                    (i.splice.apply(i, [c, 0].concat(t._curves)),
                    (f += t._curves.length));
                  for (var a = f; a < d; a++)
                    i.splice(a, 0, new F(this, null, null));
                  this._adjustCurves(c, d);
                }
                return this._changed(41), t;
              },
              _adjustCurves: function (t, e) {
                for (
                  var n, i = this._segments, r = this._curves, s = t;
                  s < e;
                  s++
                )
                  ((n = r[s])._path = this),
                    (n._segment1 = i[s]),
                    (n._segment2 = i[s + 1] || i[0]),
                    n._changed();
                (n = r[this._closed && !t ? i.length - 1 : t - 1]) &&
                  ((n._segment2 = i[t] || i[0]), n._changed()),
                  (n = r[e]) && ((n._segment1 = i[e]), n._changed());
              },
              _countCurves: function () {
                var t = this._segments.length;
                return !this._closed && t > 0 ? t - 1 : t;
              },
              add: function (t) {
                var e = arguments;
                return e.length > 1 && "number" != typeof t
                  ? this._add(N.readList(e))
                  : this._add([N.read(e)])[0];
              },
              insert: function (t, e) {
                var n = arguments;
                return n.length > 2 && "number" != typeof e
                  ? this._add(N.readList(n, 1), t)
                  : this._add([N.read(n, 1)], t)[0];
              },
              addSegment: function () {
                return this._add([N.read(arguments)])[0];
              },
              insertSegment: function (t) {
                return this._add([N.read(arguments, 1)], t)[0];
              },
              addSegments: function (t) {
                return this._add(N.readList(t));
              },
              insertSegments: function (t, e) {
                return this._add(N.readList(e), t);
              },
              removeSegment: function (t) {
                return this.removeSegments(t, t + 1)[0] || null;
              },
              removeSegments: function (t, e, n) {
                (t = t || 0), (e = l.pick(e, this._segments.length));
                var i = this._segments,
                  r = this._curves,
                  s = i.length,
                  a = i.splice(t, e - t),
                  o = a.length;
                if (!o) return a;
                for (var h = 0; h < o; h++) {
                  var u = a[h];
                  u._selection && this._updateSelection(u, u._selection, 0),
                    (u._index = u._path = null);
                }
                for (var h = t, c = i.length; h < c; h++) i[h]._index = h;
                if (r) {
                  for (
                    var f =
                        t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t,
                      r = r.splice(f, o),
                      h = r.length - 1;
                    h >= 0;
                    h--
                  )
                    r[h]._path = null;
                  n && (a._curves = r.slice(1)), this._adjustCurves(f, f);
                }
                return this._changed(41), a;
              },
              clear: "#removeSegments",
              hasHandles: function () {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                  if (t[e].hasHandles()) return !0;
                return !1;
              },
              clearHandles: function () {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                  t[e].clearHandles();
              },
              getLength: function () {
                if (null == this._length) {
                  for (
                    var t = this.getCurves(), e = 0, n = 0, i = t.length;
                    n < i;
                    n++
                  )
                    e += t[n].getLength();
                  this._length = e;
                }
                return this._length;
              },
              getArea: function () {
                var t = this._area;
                if (null == t) {
                  var e = this._segments,
                    n = this._closed;
                  t = 0;
                  for (var i = 0, r = e.length; i < r; i++) {
                    var s = i + 1 === r;
                    t += F.getArea(
                      F.getValues(e[i], e[s ? 0 : i + 1], null, s && !n)
                    );
                  }
                  this._area = t;
                }
                return t;
              },
              isFullySelected: function () {
                var t = this._segments.length;
                return (
                  this.isSelected() && t > 0 && this._segmentSelection === 7 * t
                );
              },
              setFullySelected: function (t) {
                t && this._selectSegments(!0), this.setSelected(t);
              },
              setSelection: function t(e) {
                1 & e || this._selectSegments(!1), t.base.call(this, e);
              },
              _selectSegments: function (t) {
                var e = this._segments,
                  n = e.length,
                  i = t ? 7 : 0;
                this._segmentSelection = i * n;
                for (var r = 0; r < n; r++) e[r]._selection = i;
              },
              _updateSelection: function (t, e, n) {
                (t._selection = n),
                  (this._segmentSelection += n - e) > 0 && this.setSelected(!0);
              },
              divideAt: function (t) {
                var e,
                  n = this.getLocationAt(t);
                return n && (e = n.getCurve().divideAt(n.getCurveOffset()))
                  ? e._segment1
                  : null;
              },
              splitAt: function (t) {
                var e = this.getLocationAt(t),
                  n = e && e.index,
                  i = e && e.time;
                i > 0.99999999 && (n++, (i = 0));
                var r = this.getCurves();
                if (n >= 0 && n < r.length) {
                  i >= 1e-8 && r[n++].divideAtTime(i);
                  var s,
                    a = this.removeSegments(n, this._segments.length, !0);
                  return (
                    this._closed
                      ? (this.setClosed(!1), (s = this))
                      : ((s = new D(P.NO_INSERT)).insertAbove(this),
                        s.copyAttributes(this)),
                    s._add(a, 0),
                    this.addSegment(a[0]),
                    s
                  );
                }
                return null;
              },
              split: function (t, e) {
                var n,
                  i =
                    o === e
                      ? t
                      : (n = this.getCurves()[t]) && n.getLocationAtTime(e);
                return null != i ? this.splitAt(i) : null;
              },
              join: function (t, e) {
                var n = e || 0;
                if (t && t !== this) {
                  var i = t._segments,
                    r = this.getLastSegment(),
                    s = t.getLastSegment();
                  if (!s) return this;
                  r && r._point.isClose(s._point, n) && t.reverse();
                  var a = t.getFirstSegment();
                  if (r && r._point.isClose(a._point, n))
                    r.setHandleOut(a._handleOut), this._add(i.slice(1));
                  else {
                    var o = this.getFirstSegment();
                    o && o._point.isClose(a._point, n) && t.reverse(),
                      (s = t.getLastSegment()),
                      o && o._point.isClose(s._point, n)
                        ? (o.setHandleIn(s._handleIn),
                          this._add(i.slice(0, i.length - 1), 0))
                        : this._add(i.slice());
                  }
                  t._closed && this._add([i[0]]), t.remove();
                }
                var h = this.getFirstSegment(),
                  u = this.getLastSegment();
                return (
                  h !== u &&
                    h._point.isClose(u._point, n) &&
                    (h.setHandleIn(u._handleIn),
                    u.remove(),
                    this.setClosed(!0)),
                  this
                );
              },
              reduce: function (t) {
                for (
                  var e = this.getCurves(),
                    n = t && t.simplify,
                    i = n ? 1e-7 : 0,
                    r = e.length - 1;
                  r >= 0;
                  r--
                ) {
                  var s = e[r];
                  !s.hasHandles() &&
                    (!s.hasLength(i) || (n && s.isCollinear(s.getNext()))) &&
                    s.remove();
                }
                return this;
              },
              reverse: function () {
                this._segments.reverse();
                for (var t = 0, e = this._segments.length; t < e; t++) {
                  var n = this._segments[t],
                    i = n._handleIn;
                  (n._handleIn = n._handleOut),
                    (n._handleOut = i),
                    (n._index = t);
                }
                (this._curves = null), this._changed(9);
              },
              flatten: function (t) {
                for (
                  var e = new V(this, t || 0.25, 256, !0).parts,
                    n = e.length,
                    i = [],
                    r = 0;
                  r < n;
                  r++
                )
                  i.push(new N(e[r].curve.slice(0, 2)));
                !this._closed &&
                  n > 0 &&
                  i.push(new N(e[n - 1].curve.slice(6))),
                  this.setSegments(i);
              },
              simplify: function (t) {
                var e = new U(this).fit(t || 2.5);
                return e && this.setSegments(e), !!e;
              },
              smooth: function (t) {
                var e = this,
                  n = t || {},
                  i = n.type || "asymmetric",
                  r = this._segments,
                  s = r.length,
                  a = this._closed;
                function h(t, n) {
                  var i = t && t.index;
                  if (null != i) {
                    var r = t.path;
                    if (r && r !== e)
                      throw Error(
                        t._class + " " + i + " of " + r + " is not part of " + e
                      );
                    n && t instanceof F && i++;
                  } else i = "number" == typeof t ? t : n;
                  return Math.min(
                    i < 0 && a ? i % s : i < 0 ? i + s : i,
                    s - 1
                  );
                }
                var u = a && o === n.from && o === n.to,
                  l = h(n.from, 0),
                  c = h(n.to, s - 1);
                if (l > c) {
                  if (a) l -= s;
                  else {
                    var f = l;
                    (l = c), (c = f);
                  }
                }
                if (/^(?:asymmetric|continuous)$/.test(i)) {
                  var d = "asymmetric" === i,
                    _ = Math.min,
                    g = c - l + 1,
                    v = g - 1,
                    p = u ? _(g, 4) : 1,
                    m = p,
                    y = p,
                    w = [];
                  if (
                    (a || ((m = _(1, l)), (y = _(1, s - c - 1))),
                    (v += m + y) <= 1)
                  )
                    return;
                  for (var x = 0, b = l - m; x <= v; x++, b++)
                    w[x] = r[(b < 0 ? b + s : b) % s]._point;
                  for (
                    var C = w[0]._x + 2 * w[1]._x,
                      S = w[0]._y + 2 * w[1]._y,
                      k = 2,
                      I = v - 1,
                      P = [C],
                      T = [S],
                      M = [2],
                      A = [],
                      O = [],
                      x = 1;
                    x < v;
                    x++
                  ) {
                    var z = x < I,
                      E = z ? 1 : d ? 1 : 2,
                      L = z ? 4 : d ? 2 : 7,
                      N = z ? 4 : d ? 3 : 8,
                      B = z ? 2 : d ? 0 : 1,
                      R = E / k;
                    (k = M[x] = L - R),
                      (C = P[x] = N * w[x]._x + B * w[x + 1]._x - R * C),
                      (S = T[x] = N * w[x]._y + B * w[x + 1]._y - R * S);
                  }
                  (A[I] = P[I] / M[I]), (O[I] = T[I] / M[I]);
                  for (var x = v - 2; x >= 0; x--)
                    (A[x] = (P[x] - A[x + 1]) / M[x]),
                      (O[x] = (T[x] - O[x + 1]) / M[x]);
                  (A[v] = (3 * w[v]._x - A[I]) / 2),
                    (O[v] = (3 * w[v]._y - O[I]) / 2);
                  for (var x = m, j = v - y, b = l; x <= j; x++, b++) {
                    var D = r[b < 0 ? b + s : b],
                      q = D._point,
                      V = A[x] - q._x,
                      U = O[x] - q._y;
                    (u || x < j) && D.setHandleOut(V, U),
                      (u || x > m) && D.setHandleIn(-V, -U);
                  }
                } else
                  for (var x = l; x <= c; x++)
                    r[x < 0 ? x + s : x].smooth(
                      n,
                      !u && x === l,
                      !u && x === c
                    );
              },
              toShape: function (t) {
                if (!this._closed) return null;
                var e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  h,
                  u = this._segments;
                function l(t, e) {
                  var n = u[t],
                    i = n.getNext(),
                    r = u[e],
                    s = r.getNext();
                  return (
                    n._handleOut.isZero() &&
                    i._handleIn.isZero() &&
                    r._handleOut.isZero() &&
                    s._handleIn.isZero() &&
                    i._point
                      .subtract(n._point)
                      .isCollinear(s._point.subtract(r._point))
                  );
                }
                function c(t) {
                  var e = u[t],
                    n = e.getNext(),
                    i = e._handleOut,
                    r = n._handleIn;
                  if (i.isOrthogonal(r)) {
                    var s = e._point,
                      a = n._point,
                      o = new k(s, i, !0).intersect(new k(a, r, !0), !0);
                    return (
                      o &&
                      v.isZero(
                        i.getLength() / o.subtract(s).getLength() -
                          0.5522847498307936
                      ) &&
                      v.isZero(
                        r.getLength() / o.subtract(a).getLength() -
                          0.5522847498307936
                      )
                    );
                  }
                  return !1;
                }
                function f(t, e) {
                  return u[t]._point.getDistance(u[e]._point);
                }
                if (
                  (!this.hasHandles() &&
                  4 === u.length &&
                  l(0, 2) &&
                  l(1, 3) &&
                  ((n = (e = u[1]).getPrevious()),
                  (i = e.getNext()),
                  n._handleOut.isZero() &&
                    e._handleIn.isZero() &&
                    e._handleOut.isZero() &&
                    i._handleIn.isZero() &&
                    e._point
                      .subtract(n._point)
                      .isOrthogonal(i._point.subtract(e._point)))
                    ? ((r = A.Rectangle),
                      (s = new w(f(0, 3), f(0, 1))),
                      (h = u[1]._point.add(u[2]._point).divide(2)))
                    : 8 === u.length &&
                        c(0) &&
                        c(2) &&
                        c(4) &&
                        c(6) &&
                        l(1, 5) &&
                        l(3, 7)
                      ? ((r = A.Rectangle),
                        (a = (s = new w(f(1, 6), f(0, 3)))
                          .subtract(new w(f(0, 7), f(1, 2)))
                          .divide(2)),
                        (h = u[3]._point.add(u[4]._point).divide(2)))
                      : 4 === u.length &&
                        c(0) &&
                        c(1) &&
                        c(2) &&
                        c(3) &&
                        (v.isZero(f(0, 2) - f(1, 3))
                          ? ((r = A.Circle), (a = f(0, 2) / 2))
                          : ((r = A.Ellipse),
                            (a = new w(f(2, 0) / 2, f(3, 1) / 2))),
                        (h = u[1]._point)),
                  r)
                ) {
                  var d = this.getPosition(!0),
                    _ = new r({ center: d, size: s, radius: a, insert: !1 });
                  return (
                    _.copyAttributes(this, !0),
                    _._matrix.prepend(this._matrix),
                    _.rotate(h.subtract(d).getAngle() + 90),
                    (o === t || t) && _.insertAbove(this),
                    _
                  );
                }
                return null;
              },
              toPath: "#clone",
              compare: function t(e) {
                if (!e || e instanceof q) return t.base.call(this, e);
                var n = this.getCurves(),
                  i = e.getCurves(),
                  r = n.length,
                  s = i.length;
                if (!r || !s) return r == s;
                for (
                  var a, o, h = n[0].getValues(), u = [], l = 0, c = 0, f = 0;
                  f < s;
                  f++
                ) {
                  var d = i[f].getValues();
                  u.push(d);
                  var _ = F.getOverlaps(h, d);
                  if (_) {
                    (a = !f && _[0][0] > 0 ? s - 1 : f), (o = _[0][1]);
                    break;
                  }
                }
                for (var g, v = Math.abs, d = u[a]; h && d; ) {
                  var _ = F.getOverlaps(h, d);
                  if (_ && 1e-8 > v(_[0][0] - c)) {
                    1 === (c = _[1][0]) &&
                      ((h = ++l < r ? n[l].getValues() : null), (c = 0));
                    var p = _[0][1];
                    if (1e-8 > v(p - o)) {
                      if (
                        (g || (g = [a, p]),
                        1 === (o = _[1][1]) &&
                          (++a >= s && (a = 0),
                          (d = u[a] || i[a].getValues()),
                          (o = 0)),
                        !h)
                      )
                        return g[0] === a && g[1] === o;
                      continue;
                    }
                  }
                  break;
                }
                return !1;
              },
              _hitTestSelf: function (t, e, n, i) {
                var r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  l = this,
                  c = this.getStyle(),
                  f = this._segments,
                  d = f.length,
                  _ = this._closed,
                  g = e._tolerancePadding,
                  v = g,
                  p = e.stroke && c.hasStroke(),
                  m = e.fill && c.hasFill(),
                  y = e.curves,
                  w = p
                    ? c.getStrokeWidth() / 2
                    : (m && e.tolerance > 0) || y
                      ? 0
                      : null;
                function x(e, n) {
                  return t.subtract(e).divide(n).length <= 1;
                }
                function b(t, n, i) {
                  if (!e.selected || n.isSelected()) {
                    var r = t._point;
                    if ((n !== r && (n = n.add(r)), x(n, v)))
                      return new L(i, l, { segment: t, point: n });
                  }
                }
                function C(t, n) {
                  return (
                    ((n || e.segments) && b(t, t._point, "segment")) ||
                    (!n &&
                      e.handles &&
                      (b(t, t._handleIn, "handle-in") ||
                        b(t, t._handleOut, "handle-out")))
                  );
                }
                function S(t) {
                  o.add(t);
                }
                function k(e) {
                  var n,
                    h = _ || (e._index > 0 && e._index < d - 1);
                  return (h ? r : s) === "round"
                    ? x(e._point, v)
                    : ((o = new D({ internal: !0, closed: !0 })),
                        h
                          ? e.isSmooth() ||
                            D._addBevelJoin(e, r, w, a, null, i, S, !0)
                          : "square" === s &&
                            D._addSquareCap(e, s, w, null, i, S, !0),
                        o.isEmpty())
                      ? void 0
                      : o.contains(t) ||
                        ((n = o.getNearestLocation(t)) && x(n.getPoint(), g));
                }
                if (
                  (null !== w &&
                    (w > 0
                      ? ((r = c.getStrokeJoin()),
                        (s = c.getStrokeCap()),
                        (a = c.getMiterLimit()),
                        (v = v.add(D._getStrokePadding(w, i))))
                      : (r = s = "round")),
                  !e.ends || e.segments || _)
                ) {
                  if (e.segments || e.handles) {
                    for (var I = 0; I < d; I++) if ((u = C(f[I]))) return u;
                  }
                } else if ((u = C(f[0], !0) || C(f[d - 1], !0))) return u;
                if (null !== w) {
                  if ((h = this.getNearestLocation(t))) {
                    var P = h.getTime();
                    0 === P || (1 === P && d > 1)
                      ? k(h.getSegment()) || (h = null)
                      : x(h.getPoint(), v) || (h = null);
                  }
                  if (!h && "miter" === r && d > 1)
                    for (var I = 0; I < d; I++) {
                      var T = f[I];
                      if (t.getDistance(T._point) <= a * w && k(T)) {
                        h = T.getLocation();
                        break;
                      }
                    }
                }
                return (!h && m && this._contains(t)) || (h && !p && !y)
                  ? new L("fill", this)
                  : h
                    ? new L(p ? "stroke" : "curve", this, {
                        location: h,
                        point: h.getPoint(),
                      })
                    : null;
              },
            },
            l.each(
              F._evaluateMethods,
              function (t) {
                this[t + "At"] = function (e) {
                  var n = this.getLocationAt(e);
                  return n && n[t]();
                };
              },
              {
                beans: !1,
                getLocationOf: function () {
                  for (
                    var t = m.read(arguments),
                      e = this.getCurves(),
                      n = 0,
                      i = e.length;
                    n < i;
                    n++
                  ) {
                    var r = e[n].getLocationOf(t);
                    if (r) return r;
                  }
                  return null;
                },
                getOffsetOf: function () {
                  var t = this.getLocationOf.apply(this, arguments);
                  return t ? t.getOffset() : null;
                },
                getLocationAt: function (t) {
                  if ("number" == typeof t) {
                    for (
                      var e = this.getCurves(), n = 0, i = 0, r = e.length;
                      i < r;
                      i++
                    ) {
                      var s = n,
                        a = e[i];
                      if ((n += a.getLength()) > t)
                        return a.getLocationAt(t - s);
                    }
                    if (e.length > 0 && t <= this.getLength())
                      return new R(e[e.length - 1], 1);
                  } else if (t && t.getPath && t.getPath() === this) return t;
                  return null;
                },
                getOffsetsWithTangent: function () {
                  var t = m.read(arguments);
                  if (t.isZero()) return [];
                  for (
                    var e = [],
                      n = 0,
                      i = this.getCurves(),
                      r = 0,
                      s = i.length;
                    r < s;
                    r++
                  ) {
                    for (
                      var a = i[r],
                        o = a.getTimesWithTangent(t),
                        h = 0,
                        u = o.length;
                      h < u;
                      h++
                    ) {
                      var l = n + a.getOffsetAtTime(o[h]);
                      0 > e.indexOf(l) && e.push(l);
                    }
                    n += a.length;
                  }
                  return e;
                },
              }
            ),
            new (function () {
              function t(t, e, n) {
                var i,
                  r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  l,
                  c = e._segments,
                  f = c.length,
                  d = Array(6),
                  _ = !0;
                function g(e) {
                  if (n) e._transformCoordinates(n, d), (i = d[0]), (r = d[1]);
                  else {
                    var c = e._point;
                    (i = c._x), (r = c._y);
                  }
                  if (_) t.moveTo(i, r), (_ = !1);
                  else {
                    if (n) (o = d[2]), (h = d[3]);
                    else {
                      var f = e._handleIn;
                      (o = i + f._x), (h = r + f._y);
                    }
                    o === i && h === r && u === s && l === a
                      ? t.lineTo(i, r)
                      : t.bezierCurveTo(u, l, o, h, i, r);
                  }
                  if (((s = i), (a = r), n)) (u = d[4]), (l = d[5]);
                  else {
                    var f = e._handleOut;
                    (u = s + f._x), (l = a + f._y);
                  }
                }
                for (var v = 0; v < f; v++) g(c[v]);
                e._closed && f > 0 && g(c[0]);
              }
              return {
                _draw: function (e, n, i, r) {
                  var s = n.dontStart,
                    a = n.dontFinish || n.clip,
                    o = this.getStyle(),
                    h = o.hasFill(),
                    u = o.hasStroke(),
                    l = o.getDashArray(),
                    c = !tf.support.nativeDash && u && l && l.length;
                  function f(t) {
                    return l[((t % c) + c) % c];
                  }
                  if (
                    (s || e.beginPath(),
                    (h || (u && !c) || a) &&
                      (t(e, this, r), this._closed && e.closePath()),
                    !a &&
                      (h || u) &&
                      (this._setStyles(e, n, i),
                      h &&
                        (e.fill(o.getFillRule()),
                        (e.shadowColor = "rgba(0,0,0,0)")),
                      u))
                  ) {
                    if (c) {
                      s || e.beginPath();
                      for (
                        var d,
                          _ = new V(this, 0.25, 32, !1, r),
                          g = _.length,
                          v = -o.getDashOffset(),
                          p = 0;
                        v > 0;
                      )
                        v -= f(p--) + f(p--);
                      for (; v < g; )
                        (d = v + f(p++)),
                          (v > 0 || d > 0) &&
                            _.drawPart(e, Math.max(v, 0), Math.max(d, 0)),
                          (v = d + f(p++));
                    }
                    e.stroke();
                  }
                },
                _drawSelected: function (e, n) {
                  e.beginPath(),
                    t(e, this, n),
                    e.stroke(),
                    (function (t, e, n, i) {
                      if (!(i <= 0))
                        for (
                          var r,
                            s,
                            a = i / 2,
                            o = i - 2,
                            h = a - 1,
                            u = Array(6),
                            l = 0,
                            c = e.length;
                          l < c;
                          l++
                        ) {
                          var f = e[l],
                            d = f._selection;
                          if (
                            (f._transformCoordinates(n, u),
                            (r = u[0]),
                            (s = u[1]),
                            2 & d && g(2),
                            4 & d && g(4),
                            t.fillRect(r - a, s - a, i, i),
                            o > 0 && !(1 & d))
                          ) {
                            var _ = t.fillStyle;
                            (t.fillStyle = "#ffffff"),
                              t.fillRect(r - h, s - h, o, o),
                              (t.fillStyle = _);
                          }
                        }
                      function g(e) {
                        var n = u[e],
                          i = u[e + 1];
                        (r != n || s != i) &&
                          (t.beginPath(),
                          t.moveTo(r, s),
                          t.lineTo(n, i),
                          t.stroke(),
                          t.beginPath(),
                          t.arc(n, i, a, 0, 2 * Math.PI, !0),
                          t.fill());
                      }
                    })(e, this._segments, n, tf.settings.handleSize);
                },
              };
            })(),
            new (function () {
              function t(t) {
                var e = t._segments;
                if (!e.length) throw Error("Use a moveTo() command first");
                return e[e.length - 1];
              }
              return {
                moveTo: function () {
                  var t = this._segments;
                  1 === t.length && this.removeSegment(0),
                    t.length || this._add([new N(m.read(arguments))]);
                },
                moveBy: function () {
                  throw Error("moveBy() is unsupported on Path items.");
                },
                lineTo: function () {
                  this._add([new N(m.read(arguments))]);
                },
                cubicCurveTo: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = m.read(e),
                    s = t(this);
                  s.setHandleOut(n.subtract(s._point)),
                    this._add([new N(r, i.subtract(r))]);
                },
                quadraticCurveTo: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = t(this)._point;
                  this.cubicCurveTo(
                    n.add(r.subtract(n).multiply(1 / 3)),
                    n.add(i.subtract(n).multiply(1 / 3)),
                    i
                  );
                },
                curveTo: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = l.pick(l.read(e), 0.5),
                    s = 1 - r,
                    a = t(this)._point,
                    o = n
                      .subtract(a.multiply(s * s))
                      .subtract(i.multiply(r * r))
                      .divide(2 * r * s);
                  if (o.isNaN())
                    throw Error(
                      "Cannot put a curve through points with parameter = " + r
                    );
                  this.quadraticCurveTo(o, i);
                },
                arcTo: function () {
                  var e,
                    n,
                    i,
                    r,
                    s,
                    a = arguments,
                    o = Math.abs,
                    h = Math.sqrt,
                    u = t(this),
                    c = u._point,
                    f = m.read(a),
                    d = l.peek(a),
                    _ = l.pick(d, !0);
                  if ("boolean" == typeof _)
                    var g = c.add(f).divide(2),
                      e = g.add(g.subtract(c).rotate(_ ? -90 : 90));
                  else if (2 >= l.remain(a)) (e = f), (f = m.read(a));
                  else if (!c.equals(f)) {
                    var p = w.read(a),
                      y = v.isZero;
                    if (y(p.width) || y(p.height)) return this.lineTo(f);
                    var x = l.read(a),
                      _ = !!l.read(a),
                      b = !!l.read(a),
                      g = c.add(f).divide(2),
                      C = c.subtract(g).rotate(-x),
                      I = C.x,
                      P = C.y,
                      T = o(p.width),
                      M = o(p.height),
                      A = T * T,
                      O = M * M,
                      z = I * I,
                      E = P * P,
                      L = h(z / A + E / O);
                    if (
                      (L > 1 && ((T *= L), (M *= L), (A = T * T), (O = M * M)),
                      1e-12 >
                        o((L = (A * O - A * E - O * z) / (A * E + O * z))) &&
                        (L = 0),
                      L < 0)
                    )
                      throw Error(
                        "Cannot create an arc with the given arguments"
                      );
                    (n = new m((T * P) / M, (-M * I) / T)
                      .multiply((b === _ ? -1 : 1) * h(L))
                      .rotate(x)
                      .add(g)),
                      (i = (r = (s = new S()
                        .translate(n)
                        .rotate(x)
                        .scale(T, M))._inverseTransform(c)).getDirectedAngle(
                        s._inverseTransform(f)
                      )),
                      !_ && i > 0 ? (i -= 360) : _ && i < 0 && (i += 360);
                  }
                  if (e) {
                    var B = new k(
                        c.add(e).divide(2),
                        e.subtract(c).rotate(90),
                        !0
                      ),
                      F = new k(
                        e.add(f).divide(2),
                        f.subtract(e).rotate(90),
                        !0
                      ),
                      R = new k(c, f),
                      j = R.getSide(e);
                    if (!(n = B.intersect(F, !0))) {
                      if (!j) return this.lineTo(f);
                      throw Error(
                        "Cannot create an arc with the given arguments"
                      );
                    }
                    i = (r = c.subtract(n)).getDirectedAngle(f.subtract(n));
                    var D = R.getSide(n, !0);
                    0 === D
                      ? (i = j * o(i))
                      : j === D && (i += i < 0 ? 360 : -360);
                  }
                  if (i) {
                    for (
                      var q = o(i),
                        V = q >= 360 ? 4 : Math.ceil((q - 1e-5) / 90),
                        U = i / V,
                        H = (U * Math.PI) / 360,
                        Z = ((4 / 3) * Math.sin(H)) / (1 + Math.cos(H)),
                        W = [],
                        $ = 0;
                      $ <= V;
                      $++
                    ) {
                      var C = f,
                        G = null;
                      if (
                        ($ < V &&
                          ((G = r.rotate(90).multiply(Z)),
                          s
                            ? ((C = s._transformPoint(r)),
                              (G = s._transformPoint(r.add(G)).subtract(C)))
                            : (C = n.add(r))),
                        $)
                      ) {
                        var J = r.rotate(-90).multiply(Z);
                        s && (J = s._transformPoint(r.add(J)).subtract(C)),
                          W.push(new N(C, J, G));
                      } else u.setHandleOut(G);
                      r = r.rotate(U);
                    }
                    this._add(W);
                  }
                },
                lineBy: function () {
                  var e = m.read(arguments),
                    n = t(this)._point;
                  this.lineTo(n.add(e));
                },
                curveBy: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = l.read(e),
                    s = t(this)._point;
                  this.curveTo(s.add(n), s.add(i), r);
                },
                cubicCurveBy: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = m.read(e),
                    s = t(this)._point;
                  this.cubicCurveTo(s.add(n), s.add(i), s.add(r));
                },
                quadraticCurveBy: function () {
                  var e = arguments,
                    n = m.read(e),
                    i = m.read(e),
                    r = t(this)._point;
                  this.quadraticCurveTo(r.add(n), r.add(i));
                },
                arcBy: function () {
                  var e = arguments,
                    n = t(this)._point,
                    i = n.add(m.read(e)),
                    r = l.pick(l.peek(e), !0);
                  "boolean" == typeof r
                    ? this.arcTo(i, r)
                    : this.arcTo(i, n.add(m.read(e)));
                },
                closePath: function (t) {
                  this.setClosed(!0), this.join(this, t);
                },
              };
            })(),
            {
              _getBounds: function (t, e) {
                return D[
                  e.handle
                    ? "getHandleBounds"
                    : e.stroke
                      ? "getStrokeBounds"
                      : "getBounds"
                ](this._segments, this._closed, this, t, e);
              },
              statics: {
                getBounds: function (t, e, n, i, r, s) {
                  var a = t[0];
                  if (!a) return new b();
                  var o = Array(6),
                    h = a._transformCoordinates(i, Array(6)),
                    u = h.slice(0, 2),
                    l = u.slice(),
                    c = [, ,];
                  function f(t) {
                    t._transformCoordinates(i, o);
                    for (var e = 0; e < 2; e++)
                      F._addBounds(
                        h[e],
                        h[e + 4],
                        o[e + 2],
                        o[e],
                        e,
                        s ? s[e] : 0,
                        u,
                        l,
                        c
                      );
                    var n = h;
                    (h = o), (o = n);
                  }
                  for (var d = 1, _ = t.length; d < _; d++) f(t[d]);
                  return e && f(a), new b(u[0], u[1], l[0] - u[0], l[1] - u[1]);
                },
                getStrokeBounds: function (t, e, n, i, r) {
                  var s = n.getStyle(),
                    a = s.hasStroke(),
                    o = s.getStrokeWidth(),
                    h = a && n._getStrokeMatrix(i, r),
                    u = a && D._getStrokePadding(o, h),
                    l = D.getBounds(t, e, n, i, r, u);
                  if (!a) return l;
                  var c = o / 2,
                    f = s.getStrokeJoin(),
                    d = s.getStrokeCap(),
                    _ = s.getMiterLimit(),
                    g = new b(new w(u));
                  function v(t) {
                    l = l.include(t);
                  }
                  function p(t) {
                    l = l.unite(g.setCenter(t._point.transform(i)));
                  }
                  function m(t, e) {
                    "round" === e || t.isSmooth()
                      ? p(t)
                      : D._addBevelJoin(t, e, c, _, i, h, v);
                  }
                  function y(t, e) {
                    "round" === e ? p(t) : D._addSquareCap(t, e, c, i, h, v);
                  }
                  var x = t.length - (e ? 0 : 1);
                  if (x > 0) {
                    for (var C = 1; C < x; C++) m(t[C], f);
                    e ? m(t[0], f) : (y(t[0], d), y(t[t.length - 1], d));
                  }
                  return l;
                },
                _getStrokePadding: function (t, e) {
                  if (!e) return [t, t];
                  var n = new m(t, 0).transform(e),
                    i = new m(0, t).transform(e),
                    r = n.getAngleInRadians(),
                    s = n.getLength(),
                    a = i.getLength(),
                    o = Math.sin(r),
                    h = Math.cos(r),
                    u = Math.tan(r),
                    l = Math.atan2(a * u, s),
                    c = Math.atan2(a, u * s);
                  return [
                    Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o),
                    Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o),
                  ];
                },
                _addBevelJoin: function (t, e, n, i, r, s, a, o) {
                  var h = t.getCurve(),
                    u = h.getPrevious(),
                    l = h.getPoint1().transform(r),
                    c = u.getNormalAtTime(1).multiply(n).transform(s),
                    f = h.getNormalAtTime(0).multiply(n).transform(s),
                    d = c.getDirectedAngle(f);
                  if (
                    ((d < 0 || d >= 180) &&
                      ((c = c.negate()), (f = f.negate())),
                    o && a(l),
                    a(l.add(c)),
                    "miter" === e)
                  ) {
                    var _ = new k(l.add(c), new m(-c.y, c.x), !0).intersect(
                      new k(l.add(f), new m(-f.y, f.x), !0),
                      !0
                    );
                    _ && l.getDistance(_) <= i * n && a(_);
                  }
                  a(l.add(f));
                },
                _addSquareCap: function (t, e, n, i, r, s, a) {
                  var o = t._point.transform(i),
                    h = t.getLocation(),
                    u = h
                      .getNormal()
                      .multiply(0 === h.getTime() ? n : -n)
                      .transform(r);
                  "square" === e &&
                    (a && (s(o.subtract(u)), s(o.add(u))),
                    (o = o.add(u.rotate(-90)))),
                    s(o.add(u)),
                    s(o.subtract(u));
                },
                getHandleBounds: function (t, e, n, i, r) {
                  var s,
                    a,
                    o = n.getStyle();
                  if (r.stroke && o.hasStroke()) {
                    var h = n._getStrokeMatrix(i, r),
                      u = o.getStrokeWidth() / 2,
                      l = u;
                    "miter" === o.getStrokeJoin() &&
                      (l = u * o.getMiterLimit()),
                      "square" === o.getStrokeCap() &&
                        (l = Math.max(l, u * Math.SQRT2)),
                      (s = D._getStrokePadding(u, h)),
                      (a = D._getStrokePadding(l, h));
                  }
                  for (
                    var c = Array(6),
                      f = 1 / 0,
                      d = -1 / 0,
                      _ = 1 / 0,
                      g = d,
                      v = 0,
                      p = t.length;
                    v < p;
                    v++
                  ) {
                    t[v]._transformCoordinates(i, c);
                    for (var m = 0; m < 6; m += 2) {
                      var y = m ? s : a,
                        w = y ? y[0] : 0,
                        x = y ? y[1] : 0,
                        C = c[m],
                        S = c[m + 1],
                        k = C - w,
                        I = C + w,
                        P = S - x,
                        T = S + x;
                      k < f && (f = k),
                        I > d && (d = I),
                        P < _ && (_ = P),
                        T > g && (g = T);
                    }
                  }
                  return new b(f, _, d - f, g - _);
                },
              },
            }
          );
        D.inject({
          statics: new (function () {
            var t = [
              new N([-1, 0], [0, 0.5522847498307936], [0, -0.5522847498307936]),
              new N([0, -1], [-0.5522847498307936, 0], [0.5522847498307936, 0]),
              new N([1, 0], [0, -0.5522847498307936], [0, 0.5522847498307936]),
              new N([0, 1], [0.5522847498307936, 0], [-0.5522847498307936, 0]),
            ];
            function e(t, e, n) {
              var i = l.getNamed(n),
                r = new D(
                  i &&
                    (!0 == i.insert
                      ? P.INSERT
                      : !1 == i.insert
                        ? P.NO_INSERT
                        : null)
                );
              return r._add(t), (r._closed = e), r.set(i, P.INSERT);
            }
            function n(n, i, r) {
              for (var s = [, , , ,], a = 0; a < 4; a++) {
                var o = t[a];
                s[a] = new N(
                  o._point.multiply(i).add(n),
                  o._handleIn.multiply(i),
                  o._handleOut.multiply(i)
                );
              }
              return e(s, !0, r);
            }
            return {
              Line: function () {
                var t = arguments;
                return e(
                  [new N(m.readNamed(t, "from")), new N(m.readNamed(t, "to"))],
                  !1,
                  t
                );
              },
              Circle: function () {
                var t = arguments;
                return n(
                  m.readNamed(t, "center"),
                  new w(l.readNamed(t, "radius")),
                  t
                );
              },
              Rectangle: function () {
                var t,
                  n = arguments,
                  i = b.readNamed(n, "rectangle"),
                  r = w.readNamed(n, "radius", 0, { readNull: !0 }),
                  s = i.getBottomLeft(!0),
                  a = i.getTopLeft(!0),
                  o = i.getTopRight(!0),
                  h = i.getBottomRight(!0);
                if (!r || r.isZero())
                  t = [new N(s), new N(a), new N(o), new N(h)];
                else {
                  var u = (r = w.min(r, i.getSize(!0).divide(2))).width,
                    l = r.height,
                    c = 0.5522847498307936 * u,
                    f = 0.5522847498307936 * l;
                  t = [
                    new N(s.add(u, 0), null, [-c, 0]),
                    new N(s.subtract(0, l), [0, f]),
                    new N(a.add(0, l), null, [0, -f]),
                    new N(a.add(u, 0), [-c, 0], null),
                    new N(o.subtract(u, 0), null, [c, 0]),
                    new N(o.add(0, l), [0, -f], null),
                    new N(h.subtract(0, l), null, [0, f]),
                    new N(h.subtract(u, 0), [c, 0]),
                  ];
                }
                return e(t, !0, n);
              },
              RoundRectangle: "#Rectangle",
              Ellipse: function () {
                var t = arguments,
                  e = A._readEllipse(t);
                return n(e.center, e.radius, t);
              },
              Oval: "#Ellipse",
              Arc: function () {
                var t = arguments,
                  e = m.readNamed(t, "from"),
                  n = m.readNamed(t, "through"),
                  i = m.readNamed(t, "to"),
                  r = l.getNamed(t),
                  s = new D(r && !1 == r.insert && P.NO_INSERT);
                return s.moveTo(e), s.arcTo(n, i), s.set(r);
              },
              RegularPolygon: function () {
                for (
                  var t = arguments,
                    n = m.readNamed(t, "center"),
                    i = l.readNamed(t, "sides"),
                    r = l.readNamed(t, "radius"),
                    s = 360 / i,
                    a = i % 3 == 0,
                    o = new m(0, a ? -r : r),
                    h = a ? -1 : 0.5,
                    u = Array(i),
                    c = 0;
                  c < i;
                  c++
                )
                  u[c] = new N(n.add(o.rotate((c + h) * s)));
                return e(u, !0, t);
              },
              Star: function () {
                for (
                  var t = arguments,
                    n = m.readNamed(t, "center"),
                    i = 2 * l.readNamed(t, "points"),
                    r = l.readNamed(t, "radius1"),
                    s = l.readNamed(t, "radius2"),
                    a = 360 / i,
                    o = new m(0, -1),
                    h = Array(i),
                    u = 0;
                  u < i;
                  u++
                )
                  h[u] = new N(n.add(o.rotate(a * u).multiply(u % 2 ? s : r)));
                return e(h, !0, t);
              },
            };
          })(),
        });
        var q = j.extend(
          {
            _class: "CompoundPath",
            _serializeFields: { children: [] },
            beans: !0,
            initialize: function (t) {
              (this._children = []),
                (this._namedChildren = {}),
                this._initialize(t) ||
                  ("string" == typeof t
                    ? this.setPathData(t)
                    : this.addChildren(Array.isArray(t) ? t : arguments));
            },
            insertChildren: function t(e, n) {
              var i = n,
                r = i[0];
              r && "number" == typeof r[0] && (i = [i]);
              for (var s = n.length - 1; s >= 0; s--) {
                var a = i[s];
                i !== n || a instanceof D || (i = l.slice(i)),
                  Array.isArray(a)
                    ? (i[s] = new D({ segments: a, insert: !1 }))
                    : a instanceof q &&
                      (i.splice.apply(i, [s, 1].concat(a.removeChildren())),
                      a.remove());
              }
              return t.base.call(this, e, i);
            },
            reduce: function t(e) {
              for (var n = this._children, i = n.length - 1; i >= 0; i--) {
                var r = n[i].reduce(e);
                r.isEmpty() && r.remove();
              }
              if (!n.length) {
                var r = new D(P.NO_INSERT);
                return (
                  r.copyAttributes(this), r.insertAbove(this), this.remove(), r
                );
              }
              return t.base.call(this);
            },
            isClosed: function () {
              for (var t = this._children, e = 0, n = t.length; e < n; e++)
                if (!t[e]._closed) return !1;
              return !0;
            },
            setClosed: function (t) {
              for (var e = this._children, n = 0, i = e.length; n < i; n++)
                e[n].setClosed(t);
            },
            getFirstSegment: function () {
              var t = this.getFirstChild();
              return t && t.getFirstSegment();
            },
            getLastSegment: function () {
              var t = this.getLastChild();
              return t && t.getLastSegment();
            },
            getCurves: function () {
              for (
                var t = this._children, e = [], n = 0, i = t.length;
                n < i;
                n++
              )
                l.push(e, t[n].getCurves());
              return e;
            },
            getFirstCurve: function () {
              var t = this.getFirstChild();
              return t && t.getFirstCurve();
            },
            getLastCurve: function () {
              var t = this.getLastChild();
              return t && t.getLastCurve();
            },
            getArea: function () {
              for (
                var t = this._children, e = 0, n = 0, i = t.length;
                n < i;
                n++
              )
                e += t[n].getArea();
              return e;
            },
            getLength: function () {
              for (
                var t = this._children, e = 0, n = 0, i = t.length;
                n < i;
                n++
              )
                e += t[n].getLength();
              return e;
            },
            getPathData: function (t, e) {
              for (
                var n = this._children, i = [], r = 0, s = n.length;
                r < s;
                r++
              ) {
                var a = n[r],
                  o = a._matrix;
                i.push(
                  a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e)
                );
              }
              return i.join("");
            },
            _hitTestChildren: function t(e, n, i) {
              return t.base.call(
                this,
                e,
                n.class === D || "path" === n.type
                  ? n
                  : l.set({}, n, { fill: !1 }),
                i
              );
            },
            _draw: function (t, e, n, i) {
              var r = this._children;
              if (r.length) {
                (e = e.extend({ dontStart: !0, dontFinish: !0 })),
                  t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                if (!e.clip) {
                  this._setStyles(t, e, n);
                  var o = this._style;
                  o.hasFill() &&
                    (t.fill(o.getFillRule()),
                    (t.shadowColor = "rgba(0,0,0,0)")),
                    o.hasStroke() && t.stroke();
                }
              }
            },
            _drawSelected: function (t, e, n) {
              for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                var a = i[r],
                  o = a._matrix;
                n[a._id] ||
                  a._drawSelected(t, o.isIdentity() ? e : e.appended(o));
              }
            },
          },
          new (function () {
            function t(t, e) {
              var n = t._children;
              if (e && !n.length) throw Error("Use a moveTo() command first");
              return n[n.length - 1];
            }
            return l.each(
              [
                "lineTo",
                "cubicCurveTo",
                "quadraticCurveTo",
                "curveTo",
                "arcTo",
                "lineBy",
                "cubicCurveBy",
                "quadraticCurveBy",
                "curveBy",
                "arcBy",
              ],
              function (e) {
                this[e] = function () {
                  var n = t(this, !0);
                  n[e].apply(n, arguments);
                };
              },
              {
                moveTo: function () {
                  var e = t(this),
                    n = e && e.isEmpty() ? e : new D(P.NO_INSERT);
                  n !== e && this.addChild(n), n.moveTo.apply(n, arguments);
                },
                moveBy: function () {
                  var e = t(this, !0),
                    n = e && e.getLastSegment(),
                    i = m.read(arguments);
                  this.moveTo(n ? i.add(n._point) : i);
                },
                closePath: function (e) {
                  t(this, !0).closePath(e);
                },
              }
            );
          })(),
          l.each(
            ["reverse", "flatten", "simplify", "smooth"],
            function (t) {
              this[t] = function (e) {
                for (var n, i = this._children, r = 0, s = i.length; r < s; r++)
                  n = i[r][t](e) || n;
                return n;
              };
            },
            {}
          )
        );
        j.inject(
          new (function () {
            var t = Math.min,
              e = Math.max,
              n = Math.abs,
              i = {
                unite: { 1: !0, 2: !0 },
                intersect: { 2: !0 },
                subtract: { 1: !0 },
                exclude: { 1: !0, "-1": !0 },
              };
            function r(t) {
              return t._children || [t];
            }
            function s(t, e) {
              var n = t
                .clone(!1)
                .reduce({ simplify: !0 })
                .transform(null, !0, !0);
              if (e) {
                for (var i = r(n), s = 0, a = i.length; s < a; s++) {
                  var t = i[s];
                  t._closed ||
                    t.isEmpty() ||
                    (t.closePath(1e-12),
                    t.getFirstSegment().setHandleIn(0, 0),
                    t.getLastSegment().setHandleOut(0, 0));
                }
                n = n
                  .resolveCrossings()
                  .reorient("nonzero" === n.getFillRule(), !0);
              }
              return n;
            }
            function a(t, e, n, i, r) {
              var s = new q(P.NO_INSERT);
              return (
                s.addChildren(t, !0),
                (s = s.reduce({ simplify: e })),
                (r && !1 == r.insert) ||
                  s.insertAbove(
                    i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n
                  ),
                s.copyAttributes(n, !0),
                s
              );
            }
            function h(t) {
              return t.hasOverlap() || t.isCrossing();
            }
            function u(t, e, n, o) {
              if (
                o &&
                (!1 == o.trace || o.stroke) &&
                /^(subtract|intersect)$/.test(n)
              )
                return c(t, e, n);
              var u = s(t, !0),
                f = e && t !== e && s(e, !0),
                d = i[n];
              (d[n] = !0),
                f &&
                  (d.subtract || d.exclude) ^
                    (f.isClockwise() ^ u.isClockwise()) &&
                  f.reverse();
              var v,
                m = p(R.expand(u.getIntersections(f, h))),
                x = r(u),
                b = f && r(f),
                C = [],
                S = [];
              function k(t) {
                for (var e = 0, n = t.length; e < n; e++) {
                  var i = t[e];
                  l.push(C, i._segments),
                    l.push(S, i.getCurves()),
                    (i._overlapsOnly = !0);
                }
              }
              function I(t) {
                for (var e = [], n = 0, i = t && t.length; n < i; n++)
                  e.push(S[t[n]]);
                return e;
              }
              if (m.length) {
                k(x), b && k(b);
                for (var P = Array(S.length), T = 0, M = S.length; T < M; T++)
                  P[T] = S[T].getValues();
                for (
                  var A = _.findCurveBoundsCollisions(P, P, 0, !0),
                    O = {},
                    T = 0;
                  T < S.length;
                  T++
                ) {
                  var z = S[T],
                    E = z._path._id;
                  (O[E] = O[E] || {})[z.getIndex()] = {
                    hor: I(A[T].hor),
                    ver: I(A[T].ver),
                  };
                }
                for (var T = 0, M = m.length; T < M; T++)
                  y(m[T]._segment, u, f, O, d);
                for (var T = 0, M = C.length; T < M; T++) {
                  var L = C[T],
                    N = L._intersection;
                  L._winding || y(L, u, f, O, d),
                    (N && N._overlap) || (L._path._overlapsOnly = !1);
                }
                v = w(C, d);
              } else
                v = g(b ? x.concat(b) : x.slice(), function (t) {
                  return !!d[t];
                });
              return a(v, !0, t, e, o);
            }
            function c(t, e, n) {
              var i = s(t),
                r = s(e),
                o = i.getIntersections(r, h),
                u = "subtract" === n,
                l = "divide" === n,
                c = {},
                f = [];
              function d(t) {
                if (
                  !c[t._id] &&
                  (l || r.contains(t.getPointAt(t.getLength() / 2)) ^ u)
                )
                  return f.unshift(t), (c[t._id] = !0);
              }
              for (var _ = o.length - 1; _ >= 0; _--) {
                var g = o[_].split();
                g &&
                  (d(g) && g.getFirstSegment().setHandleIn(0, 0),
                  i.getLastSegment().setHandleOut(0, 0));
              }
              return d(i), a(f, !1, t, e);
            }
            function f(t, e) {
              for (var n = t; n; ) {
                if (n === e) return;
                n = n._previous;
              }
              for (; t._next && t._next !== e; ) t = t._next;
              if (!t._next) {
                for (; e._previous; ) e = e._previous;
                (t._next = e), (e._previous = t);
              }
            }
            function d(t) {
              for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles();
            }
            function g(t, e, i) {
              var r = t && t.length;
              if (r) {
                var s = l.each(
                    t,
                    function (t, e) {
                      this[t._id] = {
                        container: null,
                        winding: t.isClockwise() ? 1 : -1,
                        index: e,
                      };
                    },
                    {}
                  ),
                  a = t.slice().sort(function (t, e) {
                    return n(e.getArea()) - n(t.getArea());
                  }),
                  o = a[0],
                  h = _.findItemBoundsCollisions(a, null, v.GEOMETRIC_EPSILON);
                null == i && (i = o.isClockwise());
                for (var u = 0; u < r; u++) {
                  var c = a[u],
                    f = s[c._id],
                    d = 0,
                    g = h[u];
                  if (g) {
                    for (var p = null, m = g.length - 1; m >= 0; m--)
                      if (g[m] < u) {
                        p = p || c.getInteriorPoint();
                        var y = a[g[m]];
                        if (y.contains(p)) {
                          var w = s[y._id];
                          (d = w.winding),
                            (f.winding += d),
                            (f.container = w.exclude ? w.container : y);
                          break;
                        }
                      }
                  }
                  if (e(f.winding) === e(d))
                    (f.exclude = !0), (t[f.index] = null);
                  else {
                    var x = f.container;
                    c.setClockwise(x ? !x.isClockwise() : i);
                  }
                }
              }
              return t;
            }
            function p(t, e, n) {
              var i,
                r,
                s,
                a = e && [],
                o = !1,
                h = n || [],
                u = n && {};
              function l(t) {
                return t._path._id + "." + t._segment1._index;
              }
              for (var c = (n && n.length) - 1; c >= 0; c--) {
                var _ = n[c];
                _._path && (u[l(_)] = !0);
              }
              for (var c = t.length - 1; c >= 0; c--) {
                var g,
                  v = t[c],
                  p = v._time,
                  m = p,
                  y = e && !e(v),
                  _ = v._curve;
                if (
                  (_ &&
                    (_ !== r
                      ? ((o = !_.hasHandles() || (u && u[l(_)])),
                        (i = []),
                        (s = null),
                        (r = _))
                      : s >= 1e-8 && (p /= s)),
                  y)
                ) {
                  i && i.push(v);
                  continue;
                }
                if ((e && a.unshift(v), (s = m), p < 1e-8)) g = _._segment1;
                else if (p > 0.99999999) g = _._segment2;
                else {
                  var w = _.divideAtTime(p, !0);
                  o && h.push(_, w), (g = w._segment1);
                  for (var x = i.length - 1; x >= 0; x--) {
                    var b = i[x];
                    b._time = (b._time - p) / (1 - p);
                  }
                }
                v._setSegment(g);
                var C = g._intersection,
                  S = v._intersection;
                if (C) {
                  f(C, S);
                  for (var k = C; k; ) f(k._intersection, C), (k = k._next);
                } else g._intersection = S;
              }
              return n || d(h), a || t;
            }
            function m(i, r, s, a, o) {
              var h,
                u,
                l = Array.isArray(r) ? r : r[s ? "hor" : "ver"],
                c = s ? 1 : 0,
                f = 1 ^ c,
                d = [i.x, i.y],
                _ = d[c],
                g = d[f],
                v = _ - 1e-9,
                p = _ + 1e-9,
                y = 0,
                w = 0,
                x = 0,
                b = 0,
                C = !1,
                S = !1,
                k = 1,
                I = [];
              function P(n) {
                var u = n[f + 0],
                  l = n[f + 2],
                  d = n[f + 4],
                  y = n[f + 6];
                if (g <= e(u, l, d, y) && g >= t(u, l, d, y)) {
                  for (
                    var w,
                      S = n[c + 0],
                      P = n[c + 2],
                      T = n[c + 4],
                      M = n[c + 6],
                      A =
                        v > e(S, P, T, M) || p < t(S, P, T, M)
                          ? [n]
                          : F.getMonoCurves(n, s),
                      O = 0,
                      z = A.length;
                    O < z;
                    O++
                  )
                    if (
                      (w = (function (n) {
                        var u = n[f + 0],
                          l = n[f + 6];
                        if (!(g < t(u, l) || g > e(u, l))) {
                          var d = n[c + 0],
                            y = n[c + 2],
                            w = n[c + 4],
                            S = n[c + 6];
                          if (u === l) {
                            ((d < p && S > v) || (S < p && d > v)) && (C = !0);
                            return;
                          }
                          var P =
                              g === u
                                ? 0
                                : g === l
                                  ? 1
                                  : v > e(d, y, w, S) || p < t(d, y, w, S)
                                    ? 1
                                    : F.solveCubic(n, f, g, I, 0, 1) > 0
                                      ? I[0]
                                      : 1,
                            T =
                              0 === P
                                ? d
                                : 1 === P
                                  ? S
                                  : F.getPoint(n, P)[s ? "y" : "x"],
                            M = u > l ? 1 : -1,
                            A = h[f] > h[f + 6] ? 1 : -1,
                            O = h[c + 6];
                          return (
                            g !== u
                              ? (T < v ? (x += M) : T > p ? (b += M) : (C = !0),
                                T > _ - 1e-6 && T < _ + 1e-6 && (k /= 2))
                              : (M !== A
                                  ? d < v
                                    ? (x += M)
                                    : d > p && (b += M)
                                  : d != O &&
                                    (O < p && T > p
                                      ? ((b += M), (C = !0))
                                      : O > v && T < v && ((x += M), (C = !0))),
                                (k /= 4)),
                            (h = n),
                            !o &&
                              T > v &&
                              T < p &&
                              0 === F.getTangent(n, P)[s ? "x" : "y"] &&
                              m(i, r, !s, a, !0)
                          );
                        }
                      })(A[O]))
                    )
                      return w;
                }
              }
              for (var T = 0, M = l.length; T < M; T++) {
                var A,
                  O = l[T],
                  z = O._path,
                  E = O.getValues();
                if (
                  (!T || l[T - 1]._path !== z) &&
                  ((h = null),
                  z._closed ||
                    (u = F.getValues(
                      z.getLastCurve().getSegment2(),
                      O.getSegment1(),
                      null,
                      !a
                    ))[f] === u[f + 6] ||
                    (h = u),
                  !h)
                ) {
                  h = E;
                  for (var L = z.getLastCurve(); L && L !== O; ) {
                    var N = L.getValues();
                    if (N[f] !== N[f + 6]) {
                      h = N;
                      break;
                    }
                    L = L.getPrevious();
                  }
                }
                if ((A = P(E))) return A;
                if (T + 1 === M || l[T + 1]._path !== z) {
                  if (u && (A = P(u))) return A;
                  !C || x || b || (x = b = z.isClockwise(a) ^ s ? 1 : -1),
                    (y += x),
                    (w += b),
                    (x = b = 0),
                    C && ((S = !0), (C = !1)),
                    (u = null);
                }
              }
              return {
                winding: e((y = n(y)), (w = n(w))),
                windingL: y,
                windingR: w,
                quality: k,
                onPath: S,
              };
            }
            function y(t, e, i, r, s) {
              var a,
                o = [],
                h = t,
                u = 0;
              do {
                var l = t.getCurve();
                if (l) {
                  var c = l.getLength();
                  o.push({ segment: t, curve: l, length: c }), (u += c);
                }
                t = t.getNext();
              } while (t && !t._intersection && t !== h);
              for (
                var f = [0.5, 0.25, 0.75],
                  a = { winding: 0, quality: -1 },
                  d = 0;
                d < f.length && a.quality < 0.5;
                d++
              )
                for (var c = u * f[d], _ = 0, g = o.length; _ < g; _++) {
                  var p = o[_],
                    y = p.length;
                  if (c <= y) {
                    var l = p.curve,
                      w = l._path,
                      x = w._parent,
                      b = x instanceof q ? x : w,
                      C = v.clamp(l.getTimeAt(c), 0.001, 0.999),
                      S = l.getPointAtTime(C),
                      k = n(l.getTangentAtTime(C).y) < Math.SQRT1_2,
                      I = null;
                    if (s.subtract && i) {
                      var P = (b === e ? i : e)._getWinding(S, k, !0);
                      if ((b === e && P.winding) || (b === i && !P.winding)) {
                        if (P.quality < 1) continue;
                        I = { winding: 0, quality: 1 };
                      }
                    }
                    (I = I || m(S, r[w._id][l.getIndex()], k, !0)).quality >
                      a.quality && (a = I);
                    break;
                  }
                  c -= y;
                }
              for (var _ = o.length - 1; _ >= 0; _--) o[_].segment._winding = a;
            }
            function w(t, e) {
              var n,
                i = [];
              function r(t) {
                var n;
                return !!(
                  t &&
                  !t._visited &&
                  (!e ||
                    (e[(n = t._winding || {}).winding] &&
                      !(
                        e.unite &&
                        2 === n.winding &&
                        n.windingL &&
                        n.windingR
                      )))
                );
              }
              function s(t) {
                if (t) {
                  for (var e = 0, i = n.length; e < i; e++)
                    if (t === n[e]) return !0;
                }
                return !1;
              }
              function a(t) {
                for (var e = t._segments, n = 0, i = e.length; n < i; n++)
                  e[n]._visited = !0;
              }
              t.sort(function (t, e) {
                var n = t._intersection,
                  i = e._intersection,
                  r = !!(n && n._overlap),
                  s = !!(i && i._overlap),
                  a = t._path,
                  o = e._path;
                return r ^ s
                  ? r
                    ? 1
                    : -1
                  : !n ^ !i
                    ? n
                      ? 1
                      : -1
                    : a !== o
                      ? a._id - o._id
                      : t._index - e._index;
              });
              for (var o = 0, h = t.length; o < h; o++) {
                var u,
                  l,
                  c,
                  f = t[o],
                  d = r(f),
                  _ = null,
                  g = !1,
                  v = !0,
                  p = [];
                if (d && f._path._overlapsOnly) {
                  var m = f._path,
                    y = f._intersection._segment._path;
                  m.compare(y) &&
                    (m.getArea() && i.push(m.clone(!1)), a(m), a(y), (d = !1));
                }
                for (; d; ) {
                  var w = !_,
                    x = (function (t, e) {
                      var i = t._intersection,
                        a = i,
                        o = [];
                      function h(i, a) {
                        for (; i && i !== a; ) {
                          var h = i._segment,
                            u = h && h._path;
                          if (u) {
                            var l = h.getNext() || u.getFirstSegment(),
                              c = l._intersection;
                            h !== t &&
                              (s(h) ||
                                s(l) ||
                                (l &&
                                  r(h) &&
                                  (r(l) || (c && r(c._segment))))) &&
                              o.push(h),
                              e && n.push(h);
                          }
                          i = i._next;
                        }
                      }
                      if ((e && (n = [t]), i)) {
                        for (h(i); i && i._previous; ) i = i._previous;
                        h(i, a);
                      }
                      return o;
                    })(f, w),
                    b = x.shift(),
                    g = !w && (s(f) || s(b)),
                    C = !g && b;
                  if ((w && ((_ = new D(P.NO_INSERT)), (u = null)), g)) {
                    (f.isFirst() || f.isLast()) && (v = f._path._closed),
                      (f._visited = !0);
                    break;
                  }
                  if (
                    (C && u && (p.push(u), (u = null)),
                    u ||
                      (C && x.push(f),
                      (u = {
                        start: _._segments.length,
                        crossings: x,
                        visited: (l = []),
                        handleIn: c,
                      })),
                    C && (f = b),
                    !r(f))
                  ) {
                    _.removeSegments(u.start);
                    for (var S = 0, k = l.length; S < k; S++)
                      l[S]._visited = !1;
                    l.length = 0;
                    do
                      ((f = u && u.crossings.shift()) && f._path) ||
                        ((f = null),
                        (u = p.pop()) && ((l = u.visited), (c = u.handleIn)));
                    while (u && !r(f));
                    if (!f) break;
                  }
                  var I = f.getNext();
                  _.add(new N(f._point, c, I && f._handleOut)),
                    (f._visited = !0),
                    l.push(f),
                    (f = I || f._path.getFirstSegment()),
                    (c = I && I._handleIn);
                }
                g &&
                  (v && (_.getFirstSegment().setHandleIn(c), _.setClosed(v)),
                  0 !== _.getArea() && i.push(_));
              }
              return i;
            }
            return {
              _getWinding: function (t, e, n) {
                return m(t, this.getCurves(), e, n);
              },
              unite: function (t, e) {
                return u(this, t, "unite", e);
              },
              intersect: function (t, e) {
                return u(this, t, "intersect", e);
              },
              subtract: function (t, e) {
                return u(this, t, "subtract", e);
              },
              exclude: function (t, e) {
                return u(this, t, "exclude", e);
              },
              divide: function (t, e) {
                return e && (!1 == e.trace || e.stroke)
                  ? c(this, t, "divide")
                  : a(
                      [this.subtract(t, e), this.intersect(t, e)],
                      !0,
                      this,
                      t,
                      e
                    );
              },
              resolveCrossings: function () {
                var t = this._children,
                  e = t || [this];
                function n(t, e) {
                  var n = t && t._intersection;
                  return n && n._overlap && n._path === e;
                }
                var i = !1,
                  r = !1,
                  s = this.getIntersections(null, function (t) {
                    return (
                      (t.hasOverlap() && (i = !0)) ||
                      (t.isCrossing() && (r = !0))
                    );
                  }),
                  a = i && r && [];
                if (((s = R.expand(s)), i))
                  for (
                    var o = p(
                        s,
                        function (t) {
                          return t.hasOverlap();
                        },
                        a
                      ),
                      h = o.length - 1;
                    h >= 0;
                    h--
                  ) {
                    var u = o[h],
                      c = u._path,
                      f = u._segment,
                      _ = f.getPrevious(),
                      g = f.getNext();
                    n(_, c) &&
                      n(g, c) &&
                      (f.remove(),
                      _._handleOut._set(0, 0),
                      g._handleIn._set(0, 0),
                      _ === f ||
                        _.getCurve().hasLength() ||
                        (g._handleIn.set(_._handleIn), _.remove()));
                  }
                r &&
                  (p(
                    s,
                    i &&
                      function (t) {
                        var e = t.getCurve(),
                          n = t.getSegment(),
                          i = t._intersection,
                          r = i._curve,
                          s = i._segment;
                        if (e && r && e._path && r._path) return !0;
                        n && (n._intersection = null),
                          s && (s._intersection = null);
                      },
                    a
                  ),
                  a && d(a),
                  (e = w(
                    l.each(
                      e,
                      function (t) {
                        l.push(this, t._segments);
                      },
                      []
                    )
                  )));
                var v,
                  m = e.length;
                return (
                  m > 1 && t
                    ? (e !== t && this.setChildren(e), (v = this))
                    : 1 !== m ||
                      t ||
                      (e[0] !== this && this.setSegments(e[0].removeSegments()),
                      (v = this)),
                  v ||
                    ((v = new q(P.NO_INSERT)).addChildren(e),
                    (v = v.reduce()).copyAttributes(this),
                    this.replaceWith(v)),
                  v
                );
              },
              reorient: function (t, e) {
                var n = this._children;
                return (
                  n && n.length
                    ? this.setChildren(
                        g(
                          this.removeChildren(),
                          function (e) {
                            return !!(t ? e : 1 & e);
                          },
                          e
                        )
                      )
                    : o !== e && this.setClockwise(e),
                  this
                );
              },
              getInteriorPoint: function () {
                var n = this.getBounds().getCenter(!0);
                if (!this.contains(n)) {
                  for (
                    var i = this.getCurves(),
                      r = n.y,
                      s = [],
                      a = [],
                      o = 0,
                      h = i.length;
                    o < h;
                    o++
                  ) {
                    var u = i[o].getValues(),
                      l = u[1],
                      c = u[3],
                      f = u[5],
                      d = u[7];
                    if (r >= t(l, c, f, d) && r <= e(l, c, f, d))
                      for (
                        var _ = F.getMonoCurves(u), g = 0, v = _.length;
                        g < v;
                        g++
                      ) {
                        var p = _[g],
                          m = p[1],
                          y = p[7];
                        if (
                          m !== y &&
                          ((r >= m && r <= y) || (r >= y && r <= m))
                        ) {
                          var w =
                            r === m
                              ? p[0]
                              : r === y
                                ? p[6]
                                : 1 === F.solveCubic(p, 1, r, a, 0, 1)
                                  ? F.getPoint(p, a[0]).x
                                  : (p[0] + p[6]) / 2;
                          s.push(w);
                        }
                      }
                  }
                  s.length > 1 &&
                    (s.sort(function (t, e) {
                      return t - e;
                    }),
                    (n.x = (s[0] + s[1]) / 2));
                }
                return n;
              },
            };
          })()
        );
        var V = l.extend(
            {
              _class: "PathFlattener",
              initialize: function (t, e, n, i, r) {
                var s,
                  a = [],
                  o = [],
                  h = 0,
                  u = 1 / (n || 32),
                  l = t._segments,
                  c = l[0];
                function f(t, n) {
                  var s = F.getValues(t, n, r);
                  a.push(s),
                    (function t(n, r, s, a) {
                      if (
                        !(a - s > u) ||
                        (i && F.isStraight(n)) ||
                        F.isFlatEnough(n, e || 0.25)
                      ) {
                        var l = n[6] - n[0],
                          c = n[7] - n[1],
                          f = Math.sqrt(l * l + c * c);
                        f > 0 &&
                          ((h += f),
                          o.push({ offset: h, curve: n, index: r, time: a }));
                      } else {
                        var d = F.subdivide(n, 0.5),
                          _ = (s + a) / 2;
                        t(d[0], r, s, _), t(d[1], r, _, a);
                      }
                    })(s, t._index, 0, 1);
                }
                for (var d = 1, _ = l.length; d < _; d++)
                  f(c, (s = l[d])), (c = s);
                t._closed && f(s || c, l[0]),
                  (this.curves = a),
                  (this.parts = o),
                  (this.length = h),
                  (this.index = 0);
              },
              _get: function (t) {
                for (
                  var e, n = this.parts, i = n.length, r = this.index;
                  (e = r), r && !(n[--r].offset < t);
                );
                for (; e < i; e++) {
                  var s = n[e];
                  if (s.offset >= t) {
                    this.index = e;
                    var a = n[e - 1],
                      o = a && a.index === s.index ? a.time : 0,
                      h = a ? a.offset : 0;
                    return {
                      index: s.index,
                      time: o + ((s.time - o) * (t - h)) / (s.offset - h),
                    };
                  }
                }
                return { index: n[i - 1].index, time: 1 };
              },
              drawPart: function (t, e, n) {
                for (
                  var i = this._get(e),
                    r = this._get(n),
                    s = i.index,
                    a = r.index;
                  s <= a;
                  s++
                ) {
                  var o = F.getPart(
                    this.curves[s],
                    s === i.index ? i.time : 0,
                    s === r.index ? r.time : 1
                  );
                  s === i.index && t.moveTo(o[0], o[1]),
                    t.bezierCurveTo.apply(t, o.slice(2));
                }
              },
            },
            l.each(
              F._evaluateMethods,
              function (t) {
                this[t + "At"] = function (e) {
                  var n = this._get(e);
                  return F[t](this.curves[n.index], n.time);
                };
              },
              {}
            )
          ),
          U = l.extend({
            initialize: function (t) {
              for (
                var e,
                  n = (this.points = []),
                  i = t._segments,
                  r = t._closed,
                  s = 0,
                  a = i.length;
                s < a;
                s++
              ) {
                var o = i[s].point;
                (e && e.equals(o)) || n.push((e = o.clone()));
              }
              r && (n.unshift(n[n.length - 1]), n.push(n[1])),
                (this.closed = r);
            },
            fit: function (t) {
              var e = this.points,
                n = e.length,
                i = null;
              return (
                n > 0 &&
                  ((i = [new N(e[0])]),
                  n > 1 &&
                    (this.fitCubic(
                      i,
                      t,
                      0,
                      n - 1,
                      e[1].subtract(e[0]),
                      e[n - 2].subtract(e[n - 1])
                    ),
                    this.closed && (i.shift(), i.pop()))),
                i
              );
            },
            fitCubic: function (t, e, n, i, r, s) {
              var a = this.points;
              if (i - n == 1) {
                var o = a[n],
                  h = a[i],
                  u = o.getDistance(h) / 3;
                this.addCurve(t, [
                  o,
                  o.add(r.normalize(u)),
                  h.add(s.normalize(u)),
                  h,
                ]);
                return;
              }
              for (
                var l,
                  c = this.chordLengthParameterize(n, i),
                  f = Math.max(e, e * e),
                  d = !0,
                  _ = 0;
                _ <= 4;
                _++
              ) {
                var g = this.generateBezier(n, i, c, r, s),
                  v = this.findMaxError(n, i, g, c);
                if (v.error < e && d) {
                  this.addCurve(t, g);
                  return;
                }
                if (((l = v.index), v.error >= f)) break;
                (d = this.reparameterize(n, i, c, g)), (f = v.error);
              }
              var p = a[l - 1].subtract(a[l + 1]);
              this.fitCubic(t, e, n, l, r, p),
                this.fitCubic(t, e, l, i, p.negate(), s);
            },
            addCurve: function (t, e) {
              t[t.length - 1].setHandleOut(e[1].subtract(e[0])),
                t.push(new N(e[3], e[2].subtract(e[3])));
            },
            generateBezier: function (t, e, n, i, r) {
              for (
                var s = Math.abs,
                  a = this.points,
                  o = a[t],
                  h = a[e],
                  u = [
                    [0, 0],
                    [0, 0],
                  ],
                  l = [0, 0],
                  c = 0,
                  f = e - t + 1;
                c < f;
                c++
              ) {
                var d = n[c],
                  _ = 1 - d,
                  g = 3 * d * _,
                  v = _ * _ * _,
                  p = g * _,
                  m = g * d,
                  y = d * d * d,
                  w = i.normalize(p),
                  x = r.normalize(m),
                  b = a[t + c]
                    .subtract(o.multiply(v + p))
                    .subtract(h.multiply(m + y));
                (u[0][0] += w.dot(w)),
                  (u[0][1] += w.dot(x)),
                  (u[1][0] = u[0][1]),
                  (u[1][1] += x.dot(x)),
                  (l[0] += w.dot(b)),
                  (l[1] += x.dot(b));
              }
              var C,
                S,
                k = u[0][0] * u[1][1] - u[1][0] * u[0][1];
              if (s(k) > 1e-12) {
                var I = u[0][0] * l[1] - u[1][0] * l[0];
                (C = (l[0] * u[1][1] - l[1] * u[0][1]) / k), (S = I / k);
              } else {
                var P = u[0][0] + u[0][1],
                  T = u[1][0] + u[1][1];
                C = S = s(P) > 1e-12 ? l[0] / P : s(T) > 1e-12 ? l[1] / T : 0;
              }
              var M,
                A,
                O = h.getDistance(o),
                z = 1e-12 * O;
              if (C < z || S < z) C = S = O / 3;
              else {
                var E = h.subtract(o);
                (M = i.normalize(C)),
                  (A = r.normalize(S)),
                  M.dot(E) - A.dot(E) > O * O &&
                    ((C = S = O / 3), (M = A = null));
              }
              return [
                o,
                o.add(M || i.normalize(C)),
                h.add(A || r.normalize(S)),
                h,
              ];
            },
            reparameterize: function (t, e, n, i) {
              for (var r = t; r <= e; r++)
                n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
              for (var r = 1, s = n.length; r < s; r++)
                if (n[r] <= n[r - 1]) return !1;
              return !0;
            },
            findRoot: function (t, e, n) {
              for (var i = [], r = [], s = 0; s <= 2; s++)
                i[s] = t[s + 1].subtract(t[s]).multiply(3);
              for (var s = 0; s <= 1; s++)
                r[s] = i[s + 1].subtract(i[s]).multiply(2);
              var a = this.evaluate(3, t, n),
                o = this.evaluate(2, i, n),
                h = this.evaluate(1, r, n),
                u = a.subtract(e),
                l = o.dot(o) + u.dot(h);
              return v.isMachineZero(l) ? n : n - u.dot(o) / l;
            },
            evaluate: function (t, e, n) {
              for (var i = e.slice(), r = 1; r <= t; r++)
                for (var s = 0; s <= t - r; s++)
                  i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
              return i[0];
            },
            chordLengthParameterize: function (t, e) {
              for (var n = [0], i = t + 1; i <= e; i++)
                n[i - t] =
                  n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
              for (var i = 1, r = e - t; i <= r; i++) n[i] /= n[r];
              return n;
            },
            findMaxError: function (t, e, n, i) {
              for (
                var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1;
                a < e;
                a++
              ) {
                var o = this.evaluate(3, n, i[a - t]).subtract(this.points[a]),
                  h = o.x * o.x + o.y * o.y;
                h >= s && ((s = h), (r = a));
              }
              return { error: s, index: r };
            },
          }),
          H = P.extend({
            _class: "TextItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: { content: null },
            _boundsOptions: { stroke: !1, handle: !1 },
            initialize: function (t) {
              (this._content = ""), (this._lines = []);
              var e = t && l.isPlainObject(t) && o === t.x && o === t.y;
              this._initialize(e && t, !e && m.read(arguments));
            },
            _equals: function (t) {
              return this._content === t._content;
            },
            copyContent: function (t) {
              this.setContent(t._content);
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (t) {
              (this._content = "" + t),
                (this._lines = this._content.split(/\r\n|\n|\r/gm)),
                this._changed(521);
            },
            isEmpty: function () {
              return !this._content;
            },
            getCharacterStyle: "#getStyle",
            setCharacterStyle: "#setStyle",
            getParagraphStyle: "#getStyle",
            setParagraphStyle: "#setStyle",
          }),
          Z = H.extend({
            _class: "PointText",
            initialize: function () {
              H.apply(this, arguments);
            },
            getPoint: function () {
              var t = this._matrix.getTranslation();
              return new y(t.x, t.y, this, "setPoint");
            },
            setPoint: function () {
              var t = m.read(arguments);
              this.translate(t.subtract(this._matrix.getTranslation()));
            },
            _draw: function (t, e, n) {
              if (this._content) {
                this._setStyles(t, e, n);
                var i = this._lines,
                  r = this._style,
                  s = r.hasFill(),
                  a = r.hasStroke(),
                  o = r.getLeading(),
                  h = t.shadowColor;
                (t.font = r.getFontStyle()),
                  (t.textAlign = r.getJustification());
                for (var u = 0, l = i.length; u < l; u++) {
                  t.shadowColor = h;
                  var c = i[u];
                  s && (t.fillText(c, 0, 0), (t.shadowColor = "rgba(0,0,0,0)")),
                    a && t.strokeText(c, 0, 0),
                    t.translate(0, o);
                }
              }
            },
            _getBounds: function (t, e) {
              var n = this._style,
                i = this._lines,
                r = i.length,
                s = n.getJustification(),
                a = n.getLeading(),
                o = this.getView().getTextWidth(n.getFontStyle(), i),
                h = 0;
              "left" !== s && (h -= o / ("center" === s ? 2 : 1));
              var u = new b(h, r ? -0.75 * a : 0, o, r * a);
              return t ? t._transformBounds(u, u) : u;
            },
          }),
          W = l.extend(
            new (function () {
              var t,
                e = {
                  gray: ["gray"],
                  rgb: ["red", "green", "blue"],
                  hsb: ["hue", "saturation", "brightness"],
                  hsl: ["hue", "saturation", "lightness"],
                  gradient: ["gradient", "origin", "destination", "highlight"],
                },
                n = {},
                i = { transparent: [0, 0, 0, 0] },
                r = [
                  [0, 3, 1],
                  [2, 0, 1],
                  [1, 0, 3],
                  [1, 2, 0],
                  [3, 1, 0],
                  [0, 1, 2],
                ],
                s = {
                  "rgb-hsb": function (t, e, n) {
                    var i = Math.max(t, e, n),
                      r = i - Math.min(t, e, n);
                    return [
                      0 === r
                        ? 0
                        : (i == t
                            ? (e - n) / r + (e < n ? 6 : 0)
                            : i == e
                              ? (n - t) / r + 2
                              : (t - e) / r + 4) * 60,
                      0 === i ? 0 : r / i,
                      i,
                    ];
                  },
                  "hsb-rgb": function (t, e, n) {
                    var i = Math.floor((t = (((t / 60) % 6) + 6) % 6)),
                      s = t - i,
                      i = r[i],
                      a = [
                        n,
                        n * (1 - e),
                        n * (1 - e * s),
                        n * (1 - e * (1 - s)),
                      ];
                    return [a[i[0]], a[i[1]], a[i[2]]];
                  },
                  "rgb-hsl": function (t, e, n) {
                    var i = Math.max(t, e, n),
                      r = Math.min(t, e, n),
                      s = i - r,
                      a = 0 === s,
                      o = (i + r) / 2;
                    return [
                      a
                        ? 0
                        : (i == t
                            ? (e - n) / s + (e < n ? 6 : 0)
                            : i == e
                              ? (n - t) / s + 2
                              : (t - e) / s + 4) * 60,
                      a ? 0 : o < 0.5 ? s / (i + r) : s / (2 - i - r),
                      o,
                    ];
                  },
                  "hsl-rgb": function (t, e, n) {
                    if (((t = (((t / 360) % 1) + 1) % 1), 0 === e))
                      return [n, n, n];
                    for (
                      var i = [t + 1 / 3, t, t - 1 / 3],
                        r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                        s = 2 * n - r,
                        a = [],
                        o = 0;
                      o < 3;
                      o++
                    ) {
                      var h = i[o];
                      h < 0 && (h += 1),
                        h > 1 && (h -= 1),
                        (a[o] =
                          6 * h < 1
                            ? s + (r - s) * 6 * h
                            : 2 * h < 1
                              ? r
                              : 3 * h < 2
                                ? s + (r - s) * (2 / 3 - h) * 6
                                : s);
                    }
                    return a;
                  },
                  "rgb-gray": function (t, e, n) {
                    return [0.2989 * t + 0.587 * e + 0.114 * n];
                  },
                  "gray-rgb": function (t) {
                    return [t, t, t];
                  },
                  "gray-hsb": function (t) {
                    return [0, 0, t];
                  },
                  "gray-hsl": function (t) {
                    return [0, 0, t];
                  },
                  "gradient-rgb": function () {
                    return [];
                  },
                  "rgb-gradient": function () {
                    return [];
                  },
                };
              return l.each(
                e,
                function (t, i) {
                  (n[i] = []),
                    l.each(
                      t,
                      function (t, r) {
                        var s = l.capitalize(t),
                          a = /^(hue|saturation)$/.test(t),
                          o = (n[i][r] =
                            "gradient" === i
                              ? "gradient" === t
                                ? function (t) {
                                    var e = this._components[0];
                                    return (
                                      (t = $.read(
                                        Array.isArray(t) ? t : arguments,
                                        0,
                                        { readNull: !0 }
                                      )),
                                      e !== t &&
                                        (e && e._removeOwner(this),
                                        t && t._addOwner(this)),
                                      t
                                    );
                                  }
                                : function () {
                                    return m.read(arguments, 0, {
                                      readNull: "highlight" === t,
                                      clone: !0,
                                    });
                                  }
                              : function (t) {
                                  return null == t || isNaN(t) ? 0 : +t;
                                });
                        (this["get" + s] = function () {
                          return this._type === i ||
                            (a && /^hs[bl]$/.test(this._type))
                            ? this._components[r]
                            : this._convert(i)[r];
                        }),
                          (this["set" + s] = function (t) {
                            this._type === i ||
                              (a && /^hs[bl]$/.test(this._type)) ||
                              ((this._components = this._convert(i)),
                              (this._properties = e[i]),
                              (this._type = i)),
                              (this._components[r] = o.call(this, t)),
                              this._changed();
                          });
                      },
                      this
                    );
                },
                {
                  _class: "Color",
                  _readIndex: !0,
                  initialize: function r(s) {
                    var a,
                      o,
                      u,
                      c,
                      f = arguments,
                      d = this.__read,
                      _ = 0;
                    Array.isArray(s) && (s = (f = s)[0]);
                    var g = null != s && typeof s;
                    if (
                      ("string" === g &&
                        s in e &&
                        ((a = s),
                        Array.isArray((s = f[1]))
                          ? ((o = s), (u = f[2]))
                          : (d && (_ = 1),
                            (f = l.slice(f, 1)),
                            (g = typeof s))),
                      !o)
                    ) {
                      if (
                        (c =
                          "number" === g
                            ? f
                            : "object" === g && null != s.length
                              ? s
                              : null)
                      ) {
                        a || (a = c.length >= 3 ? "rgb" : "gray");
                        var v = e[a].length;
                        (u = c[v]),
                          d &&
                            (_ +=
                              c === arguments ? v + (null != u ? 1 : 0) : 1),
                          c.length > v && (c = l.slice(c, 0, v));
                      } else if ("string" === g) {
                        var p = (function (e) {
                          var n,
                            r =
                              e.match(
                                /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i
                              ) ||
                              e.match(
                                /^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i
                              ),
                            s = "rgb";
                          if (r) {
                            var a = r[4] ? 4 : 3;
                            n = Array(a);
                            for (var o = 0; o < a; o++) {
                              var u = r[o + 1];
                              n[o] =
                                parseInt(1 == u.length ? u + u : u, 16) / 255;
                            }
                          } else if ((r = e.match(/^(rgb|hsl)a?\((.*)\)$/))) {
                            (s = r[1]), (n = r[2].trim().split(/[,\s]+/g));
                            for (
                              var l = "hsl" === s,
                                o = 0,
                                c = Math.min(n.length, 4);
                              o < c;
                              o++
                            ) {
                              var f = n[o],
                                u = parseFloat(f);
                              l
                                ? 0 === o
                                  ? (u *=
                                      {
                                        turn: 360,
                                        rad: 180 / Math.PI,
                                        grad: 0.9,
                                      }[f.match(/([a-z]*)$/)[1]] || 1)
                                  : o < 3 && (u /= 100)
                                : o < 3 && (u /= /%$/.test(f) ? 100 : 255),
                                (n[o] = u);
                            }
                          } else {
                            var d = i[e];
                            if (!d) {
                              if (h) {
                                t ||
                                  ((t = th.getContext(1, 1, {
                                    willReadFrequently: !0,
                                  })).globalCompositeOperation = "copy"),
                                  (t.fillStyle = "rgba(0,0,0,0)"),
                                  (t.fillStyle = e),
                                  t.fillRect(0, 0, 1, 1);
                                var _ = t.getImageData(0, 0, 1, 1).data;
                                d = i[e] = [_[0] / 255, _[1] / 255, _[2] / 255];
                              } else d = [0, 0, 0];
                            }
                            n = d.slice();
                          }
                          return [s, n];
                        })(s);
                        (a = p[0]),
                          4 === (o = p[1]).length && ((u = o[3]), o.length--);
                      } else if ("object" === g) {
                        if (s.constructor === r) {
                          if (
                            ((a = s._type),
                            (o = s._components.slice()),
                            (u = s._alpha),
                            "gradient" === a)
                          )
                            for (var m = 1, y = o.length; m < y; m++) {
                              var w = o[m];
                              w && (o[m] = w.clone());
                            }
                        } else if (s.constructor === $)
                          (a = "gradient"), (c = f);
                        else {
                          var x =
                              e[
                                (a =
                                  "hue" in s
                                    ? "lightness" in s
                                      ? "hsl"
                                      : "hsb"
                                    : "gradient" in s ||
                                        "stops" in s ||
                                        "radial" in s
                                      ? "gradient"
                                      : "gray" in s
                                        ? "gray"
                                        : "rgb")
                              ],
                            b = n[a];
                          this._components = o = [];
                          for (var m = 0, y = x.length; m < y; m++) {
                            var C = s[x[m]];
                            null == C &&
                              !m &&
                              "gradient" === a &&
                              "stops" in s &&
                              (C = { stops: s.stops, radial: s.radial }),
                              null != (C = b[m].call(this, C)) && (o[m] = C);
                          }
                          u = s.alpha;
                        }
                      }
                      d && a && (_ = 1);
                    }
                    if (((this._type = a || "rgb"), !o)) {
                      this._components = o = [];
                      for (
                        var b = n[this._type], m = 0, y = b.length;
                        m < y;
                        m++
                      ) {
                        var C = b[m].call(this, c && c[m]);
                        null != C && (o[m] = C);
                      }
                    }
                    return (
                      (this._components = o),
                      (this._properties = e[this._type]),
                      (this._alpha = u),
                      d && (this.__read = _),
                      this
                    );
                  },
                  set: "#initialize",
                  _serialize: function (t, e) {
                    var n = this.getComponents();
                    return l.serialize(
                      /^(gray|rgb)$/.test(this._type)
                        ? n
                        : [this._type].concat(n),
                      t,
                      !0,
                      e
                    );
                  },
                  _changed: function () {
                    (this._canvasStyle = null),
                      this._owner &&
                        (this._setter
                          ? this._owner[this._setter](this)
                          : this._owner._changed(129));
                  },
                  _convert: function (t) {
                    var e;
                    return this._type === t
                      ? this._components.slice()
                      : (e = s[this._type + "-" + t])
                        ? e.apply(this, this._components)
                        : s["rgb-" + t].apply(
                            this,
                            s[this._type + "-rgb"].apply(this, this._components)
                          );
                  },
                  convert: function (t) {
                    return new W(t, this._convert(t), this._alpha);
                  },
                  getType: function () {
                    return this._type;
                  },
                  setType: function (t) {
                    (this._components = this._convert(t)),
                      (this._properties = e[t]),
                      (this._type = t);
                  },
                  getComponents: function () {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t;
                  },
                  getAlpha: function () {
                    return null != this._alpha ? this._alpha : 1;
                  },
                  setAlpha: function (t) {
                    (this._alpha =
                      null == t ? null : Math.min(Math.max(t, 0), 1)),
                      this._changed();
                  },
                  hasAlpha: function () {
                    return null != this._alpha;
                  },
                  equals: function (t) {
                    var e = l.isPlainValue(t, !0) ? W.read(arguments) : t;
                    return (
                      e === this ||
                      (e &&
                        this._class === e._class &&
                        this._type === e._type &&
                        this.getAlpha() === e.getAlpha() &&
                        l.equals(this._components, e._components)) ||
                      !1
                    );
                  },
                  toString: function () {
                    for (
                      var t = this._properties,
                        e = [],
                        n = "gradient" === this._type,
                        i = g.instance,
                        r = 0,
                        s = t.length;
                      r < s;
                      r++
                    ) {
                      var a = this._components[r];
                      null != a && e.push(t[r] + ": " + (n ? a : i.number(a)));
                    }
                    return (
                      null != this._alpha &&
                        e.push("alpha: " + i.number(this._alpha)),
                      "{ " + e.join(", ") + " }"
                    );
                  },
                  toCSS: function (t) {
                    var e = this._convert("rgb"),
                      n = t || null == this._alpha ? 1 : this._alpha;
                    function i(t) {
                      return Math.round((t < 0 ? 0 : t > 1 ? 1 : t) * 255);
                    }
                    return (
                      (e = [i(e[0]), i(e[1]), i(e[2])]),
                      n < 1 && e.push(n < 0 ? 0 : n),
                      t
                        ? "#" +
                          (16777216 + (e[0] << 16) + (e[1] << 8) + e[2])
                            .toString(16)
                            .slice(1)
                        : (4 == e.length ? "rgba(" : "rgb(") + e.join(",") + ")"
                    );
                  },
                  toCanvasStyle: function (t, e) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ("gradient" !== this._type)
                      return (this._canvasStyle = this.toCSS());
                    var n,
                      i = this._components,
                      r = i[0],
                      s = r._stops,
                      a = i[1],
                      o = i[2],
                      h = i[3],
                      u = e && e.inverted();
                    if (
                      (u &&
                        ((a = u._transformPoint(a)),
                        (o = u._transformPoint(o)),
                        h && (h = u._transformPoint(h))),
                      r._radial)
                    ) {
                      var l = o.getDistance(a);
                      if (h) {
                        var c = h.subtract(a);
                        c.getLength() > l && (h = a.add(c.normalize(l - 0.1)));
                      }
                      var f = h || a;
                      n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l);
                    } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                    for (var d = 0, _ = s.length; d < _; d++) {
                      var g = s[d],
                        v = g._offset;
                      n.addColorStop(
                        null == v ? d / (_ - 1) : v,
                        g._color.toCanvasStyle()
                      );
                    }
                    return (this._canvasStyle = n);
                  },
                  transform: function (t) {
                    if ("gradient" === this._type) {
                      for (
                        var e = this._components, n = 1, i = e.length;
                        n < i;
                        n++
                      ) {
                        var r = e[n];
                        t._transformPoint(r, r, !0);
                      }
                      this._changed();
                    }
                  },
                  statics: {
                    _types: e,
                    random: function () {
                      var t = Math.random;
                      return new W(t(), t(), t());
                    },
                    _setOwner: function (t, e, n) {
                      return (
                        t &&
                          (t._owner && e && t._owner !== e && (t = t.clone()),
                          !t._owner ^ !e &&
                            ((t._owner = e || null), (t._setter = n || null))),
                        t
                      );
                    },
                  },
                }
              );
            })(),
            new (function () {
              return l.each(
                {
                  add: function (t, e) {
                    return t + e;
                  },
                  subtract: function (t, e) {
                    return t - e;
                  },
                  multiply: function (t, e) {
                    return t * e;
                  },
                  divide: function (t, e) {
                    return t / e;
                  },
                },
                function (t, e) {
                  this[e] = function (e) {
                    e = W.read(arguments);
                    for (
                      var n = this._type,
                        i = this._components,
                        r = e._convert(n),
                        s = 0,
                        a = i.length;
                      s < a;
                      s++
                    )
                      r[s] = t(i[s], r[s]);
                    return new W(
                      n,
                      r,
                      null != this._alpha ? t(this._alpha, e.getAlpha()) : null
                    );
                  };
                },
                {}
              );
            })()
          ),
          $ = l.extend({
            _class: "Gradient",
            initialize: function (t, e) {
              (this._id = p.get()),
                t && l.isPlainObject(t) && (this.set(t), (t = e = null)),
                null == this._stops && this.setStops(t || ["white", "black"]),
                null == this._radial &&
                  this.setRadial(
                    ("string" == typeof e && "radial" === e) || e || !1
                  );
            },
            _serialize: function (t, e) {
              return e.add(this, function () {
                return l.serialize([this._stops, this._radial], t, !0, e);
              });
            },
            _changed: function () {
              for (
                var t = 0, e = this._owners && this._owners.length;
                t < e;
                t++
              )
                this._owners[t]._changed();
            },
            _addOwner: function (t) {
              this._owners || (this._owners = []), this._owners.push(t);
            },
            _removeOwner: function (t) {
              var e = this._owners ? this._owners.indexOf(t) : -1;
              -1 == e ||
                (this._owners.splice(e, 1),
                this._owners.length || (this._owners = o));
            },
            clone: function () {
              for (var t = [], e = 0, n = this._stops.length; e < n; e++)
                t[e] = this._stops[e].clone();
              return new $(t, this._radial);
            },
            getStops: function () {
              return this._stops;
            },
            setStops: function (t) {
              if (t.length < 2)
                throw Error(
                  "Gradient stop list needs to contain at least two stops."
                );
              var e = this._stops;
              if (e) for (var n = 0, i = e.length; n < i; n++) e[n]._owner = o;
              e = this._stops = G.readList(t, 0, { clone: !0 });
              for (var n = 0, i = e.length; n < i; n++) e[n]._owner = this;
              this._changed();
            },
            getRadial: function () {
              return this._radial;
            },
            setRadial: function (t) {
              (this._radial = t), this._changed();
            },
            equals: function (t) {
              if (t === this) return !0;
              if (t && this._class === t._class) {
                var e = this._stops,
                  n = t._stops,
                  i = e.length;
                if (i === n.length) {
                  for (var r = 0; r < i; r++) if (!e[r].equals(n[r])) return !1;
                  return !0;
                }
              }
              return !1;
            },
          }),
          G = l.extend({
            _class: "GradientStop",
            initialize: function (t, e) {
              var n = t,
                i = e;
              "object" == typeof t &&
                o === e &&
                (Array.isArray(t) && "number" != typeof t[0]
                  ? ((n = t[0]), (i = t[1]))
                  : ("color" in t || "offset" in t || "rampPoint" in t) &&
                    ((n = t.color), (i = t.offset || t.rampPoint || 0))),
                this.setColor(n),
                this.setOffset(i);
            },
            clone: function () {
              return new G(this._color.clone(), this._offset);
            },
            _serialize: function (t, e) {
              var n = this._color,
                i = this._offset;
              return l.serialize(null == i ? [n] : [n, i], t, !0, e);
            },
            _changed: function () {
              this._owner && this._owner._changed(129);
            },
            getOffset: function () {
              return this._offset;
            },
            setOffset: function (t) {
              (this._offset = t), this._changed();
            },
            getRampPoint: "#getOffset",
            setRampPoint: "#setOffset",
            getColor: function () {
              return this._color;
            },
            setColor: function () {
              W._setOwner(this._color, null),
                (this._color = W._setOwner(
                  W.read(arguments, 0),
                  this,
                  "setColor"
                )),
                this._changed();
            },
            equals: function (t) {
              return (
                t === this ||
                (t &&
                  this._class === t._class &&
                  this._color.equals(t._color) &&
                  this._offset == t._offset) ||
                !1
              );
            },
          }),
          J = l.extend(
            new (function () {
              var t = {
                  fillColor: null,
                  fillRule: "nonzero",
                  strokeColor: null,
                  strokeWidth: 1,
                  strokeCap: "butt",
                  strokeJoin: "miter",
                  strokeScaling: !0,
                  miterLimit: 10,
                  dashOffset: 0,
                  dashArray: [],
                  shadowColor: null,
                  shadowBlur: 0,
                  shadowOffset: new m(),
                  selectedColor: null,
                },
                e = l.set({}, t, {
                  fontFamily: "sans-serif",
                  fontWeight: "normal",
                  fontSize: 12,
                  leading: null,
                  justification: "left",
                }),
                n = l.set({}, e, { fillColor: new W() }),
                i = {
                  strokeWidth: 193,
                  strokeCap: 193,
                  strokeJoin: 193,
                  strokeScaling: 201,
                  miterLimit: 193,
                  fontFamily: 9,
                  fontWeight: 9,
                  fontSize: 9,
                  font: 9,
                  leading: 9,
                  justification: 9,
                },
                r = { beans: !0 },
                s = {
                  _class: "Style",
                  beans: !0,
                  initialize: function (i, r, s) {
                    (this._values = {}),
                      (this._owner = r),
                      (this._project = (r && r._project) || s || tf.project),
                      (this._defaults =
                        !r || r instanceof T ? e : r instanceof H ? n : t),
                      i && this.set(i);
                  },
                };
              return (
                l.each(e, function (t, e) {
                  var n = /Color$/.test(e),
                    a = "shadowOffset" === e,
                    h = l.capitalize(e),
                    u = i[e],
                    c = "set" + h,
                    f = "get" + h;
                  (s[c] = function (t) {
                    var i = this._owner,
                      r = i && i._children,
                      s = r && r.length > 0 && !(i instanceof q);
                    if (s)
                      for (var a = 0, o = r.length; a < o; a++)
                        r[a]._style[c](t);
                    if (("selectedColor" === e || !s) && e in this._defaults) {
                      var h = this._values[e];
                      h !== t &&
                        (n &&
                          (h && (W._setOwner(h, null), (h._canvasStyle = null)),
                          t &&
                            t.constructor === W &&
                            (t = W._setOwner(t, i, s && c))),
                        (this._values[e] = t),
                        i && i._changed(u || 129));
                    }
                  }),
                    (s[f] = function (t) {
                      var i,
                        r = this._owner,
                        s = r && r._children,
                        h = s && s.length > 0 && !(r instanceof q);
                      if (h && !t)
                        for (var u = 0, d = s.length; u < d; u++) {
                          var _ = s[u]._style[f]();
                          if (u) {
                            if (!l.equals(i, _)) return;
                          } else i = _;
                        }
                      else if (e in this._defaults) {
                        var i = this._values[e];
                        if (o === i)
                          (i = this._defaults[e]) && i.clone && (i = i.clone());
                        else {
                          var g = n ? W : a ? m : null;
                          g &&
                            !(i && i.constructor === g) &&
                            (this._values[e] = i =
                              g.read([i], 0, { readNull: !0, clone: !0 }));
                        }
                      }
                      return i && n && (i = W._setOwner(i, r, h && c)), i;
                    }),
                    (r[f] = function (t) {
                      return this._style[f](t);
                    }),
                    (r[c] = function (t) {
                      this._style[c](t);
                    });
                }),
                l.each(
                  { Font: "FontFamily", WindingRule: "FillRule" },
                  function (t, e) {
                    var n = "get" + e,
                      i = "set" + e;
                    (s[n] = r[n] = "#get" + t), (s[i] = r[i] = "#set" + t);
                  }
                ),
                P.inject(r),
                s
              );
            })(),
            {
              set: function (t) {
                var e = t instanceof J,
                  n = e ? t._values : t;
                if (n) {
                  for (var i in n)
                    if (i in this._defaults) {
                      var r = n[i];
                      this[i] = r && e && r.clone ? r.clone() : r;
                    }
                }
              },
              equals: function (t) {
                function e(t, e, n) {
                  var i = t._values,
                    r = e._values,
                    s = e._defaults;
                  for (var a in i) {
                    var h = i[a],
                      u = r[a];
                    if (!(n && a in r) && !l.equals(h, o === u ? s[a] : u))
                      return !1;
                  }
                  return !0;
                }
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    e(this, t) &&
                    e(t, this, !0)) ||
                  !1
                );
              },
              _dispose: function () {
                var t;
                (t = this.getFillColor()) && (t._canvasStyle = null),
                  (t = this.getStrokeColor()) && (t._canvasStyle = null),
                  (t = this.getShadowColor()) && (t._canvasStyle = null);
              },
              hasFill: function () {
                var t = this.getFillColor();
                return !!t && t.alpha > 0;
              },
              hasStroke: function () {
                var t = this.getStrokeColor();
                return !!t && t.alpha > 0 && this.getStrokeWidth() > 0;
              },
              hasShadow: function () {
                var t = this.getShadowColor();
                return (
                  !!t &&
                  t.alpha > 0 &&
                  (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
                );
              },
              getView: function () {
                return this._project._view;
              },
              getFontStyle: function () {
                var t = this.getFontSize();
                return (
                  this.getFontWeight() +
                  " " +
                  t +
                  (/[a-z]/i.test(t + "") ? " " : "px ") +
                  this.getFontFamily()
                );
              },
              getFont: "#getFontFamily",
              setFont: "#setFontFamily",
              getLeading: function t() {
                var e = t.base.call(this),
                  n = this.getFontSize();
                return (
                  /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)),
                  null != e ? e : 1.2 * n
                );
              },
            }
          ),
          X = new (function () {
            function t(t, e, n, i) {
              for (
                var r = ["", "webkit", "moz", "Moz", "ms", "o"],
                  s = e[0].toUpperCase() + e.substring(1),
                  a = 0;
                a < 6;
                a++
              ) {
                var o = r[a],
                  h = o ? o + s : e;
                if (h in t) {
                  if (!n) return t[h];
                  t[h] = i;
                  break;
                }
              }
            }
            return {
              getStyles: function (t) {
                var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                  n = e && e.defaultView;
                return n && n.getComputedStyle(t, "");
              },
              getBounds: function (t, e) {
                var n,
                  i = t.ownerDocument,
                  r = i.body,
                  s = i.documentElement;
                try {
                  n = t.getBoundingClientRect();
                } catch (t) {
                  n = { left: 0, top: 0, width: 0, height: 0 };
                }
                var a = n.left - (s.clientLeft || r.clientLeft || 0),
                  o = n.top - (s.clientTop || r.clientTop || 0);
                if (!e) {
                  var h = i.defaultView;
                  (a += h.pageXOffset || s.scrollLeft || r.scrollLeft),
                    (o += h.pageYOffset || s.scrollTop || r.scrollTop);
                }
                return new b(a, o, n.width, n.height);
              },
              getViewportBounds: function (t) {
                var e = t.ownerDocument,
                  n = e.defaultView,
                  i = e.documentElement;
                return new b(
                  0,
                  0,
                  n.innerWidth || i.clientWidth,
                  n.innerHeight || i.clientHeight
                );
              },
              getOffset: function (t, e) {
                return X.getBounds(t, e).getPoint();
              },
              getSize: function (t) {
                return X.getBounds(t, !0).getSize();
              },
              isInvisible: function (t) {
                return X.getSize(t).equals(new w(0, 0));
              },
              isInView: function (t) {
                return (
                  !X.isInvisible(t) &&
                  X.getViewportBounds(t).intersects(X.getBounds(t, !0))
                );
              },
              isInserted: function (t) {
                return u.body.contains(t);
              },
              getPrefixed: function (e, n) {
                return e && t(e, n);
              },
              setPrefixed: function (e, n, i) {
                if ("object" == typeof n) for (var r in n) t(e, r, !0, n[r]);
                else t(e, n, !0, i);
              },
            };
          })(),
          K = {
            add: function (t, e) {
              if (t)
                for (var n in e)
                  for (
                    var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length;
                    s < a;
                    s++
                  ) {
                    var o = r[s],
                      h = t === u &&
                        ("touchstart" === o || "touchmove" === o) && {
                          passive: !1,
                        };
                    t.addEventListener(o, i, h);
                  }
            },
            remove: function (t, e) {
              if (t)
                for (var n in e)
                  for (
                    var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length;
                    s < a;
                    s++
                  )
                    t.removeEventListener(r[s], i, !1);
            },
            getPoint: function (t) {
              var e = t.targetTouches
                ? t.targetTouches.length
                  ? t.targetTouches[0]
                  : t.changedTouches[0]
                : t;
              return new m(
                e.pageX || e.clientX + u.documentElement.scrollLeft,
                e.pageY || e.clientY + u.documentElement.scrollTop
              );
            },
            getTarget: function (t) {
              return t.target || t.srcElement;
            },
            getRelatedTarget: function (t) {
              return t.relatedTarget || t.toElement;
            },
            getOffset: function (t, e) {
              return K.getPoint(t).subtract(X.getOffset(e || K.getTarget(t)));
            },
          };
        K.requestAnimationFrame = new (function () {
          var t,
            e = X.getPrefixed(h, "requestAnimationFrame"),
            n = !1,
            i = [];
          function r() {
            var t = i;
            i = [];
            for (var s = 0, a = t.length; s < a; s++) t[s]();
            (n = e && i.length) && e(r);
          }
          return function (s) {
            i.push(s),
              e ? n || (e(r), (n = !0)) : t || (t = setInterval(r, 1e3 / 60));
          };
        })();
        var Q = l.extend(
            c,
            {
              _class: "View",
              initialize: function t(e, n) {
                function i(t) {
                  return n[t] || parseInt(n.getAttribute(t), 10);
                }
                function r() {
                  var t = X.getSize(n);
                  return t.isNaN() || t.isZero()
                    ? new w(i("width"), i("height"))
                    : t;
                }
                if (h && n) {
                  (this._id = n.getAttribute("id")),
                    null == this._id &&
                      n.setAttribute(
                        "id",
                        (this._id = "paper-view-" + t._id++)
                      ),
                    K.add(n, this._viewEvents);
                  var s,
                    a = "none";
                  if (
                    (X.setPrefixed(n.style, {
                      userDrag: a,
                      userSelect: a,
                      touchCallout: a,
                      contentZooming: a,
                      tapHighlightColor: "rgba(0,0,0,0)",
                    }),
                    f.hasAttribute(n, "resize"))
                  ) {
                    var o = this;
                    K.add(
                      h,
                      (this._windowEvents = {
                        resize: function () {
                          o.setViewSize(r());
                        },
                      })
                    );
                  }
                  if (
                    ((s = r()),
                    f.hasAttribute(n, "stats") && "undefined" != typeof Stats)
                  ) {
                    this._stats = new Stats();
                    var l = this._stats.domElement,
                      c = l.style,
                      d = X.getOffset(n);
                    (c.position = "absolute"),
                      (c.left = d.x + "px"),
                      (c.top = d.y + "px"),
                      u.body.appendChild(l);
                  }
                } else (s = new w(n)), (n = null);
                (this._project = e),
                  (this._scope = e._scope),
                  (this._element = n),
                  this._pixelRatio ||
                    (this._pixelRatio = (h && h.devicePixelRatio) || 1),
                  this._setElementSize(s.width, s.height),
                  (this._viewSize = s),
                  t._views.push(this),
                  (t._viewsById[this._id] = this),
                  ((this._matrix = new S())._owner = this),
                  t._focused || (t._focused = this),
                  (this._frameItems = {}),
                  (this._frameItemCount = 0),
                  (this._itemEvents = { native: {}, virtual: {} }),
                  (this._autoUpdate = !tf.agent.node),
                  (this._needsUpdate = !1);
              },
              remove: function () {
                if (!this._project) return !1;
                Q._focused === this && (Q._focused = null),
                  Q._views.splice(Q._views.indexOf(this), 1),
                  delete Q._viewsById[this._id];
                var t = this._project;
                return (
                  t._view === this && (t._view = null),
                  K.remove(this._element, this._viewEvents),
                  K.remove(h, this._windowEvents),
                  (this._element = this._project = null),
                  this.off("frame"),
                  (this._animate = !1),
                  (this._frameItems = {}),
                  !0
                );
              },
              _events: l.each(
                P._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]),
                function (t) {
                  this[t] = {};
                },
                {
                  onFrame: {
                    install: function () {
                      this.play();
                    },
                    uninstall: function () {
                      this.pause();
                    },
                  },
                }
              ),
              _animate: !1,
              _time: 0,
              _count: 0,
              getAutoUpdate: function () {
                return this._autoUpdate;
              },
              setAutoUpdate: function (t) {
                (this._autoUpdate = t), t && this.requestUpdate();
              },
              update: function () {},
              draw: function () {
                this.update();
              },
              requestUpdate: function () {
                if (!this._requested) {
                  var t = this;
                  K.requestAnimationFrame(function () {
                    if (((t._requested = !1), t._animate)) {
                      t.requestUpdate();
                      var e = t._element;
                      (!X.getPrefixed(u, "hidden") ||
                        "true" === f.getAttribute(e, "keepalive")) &&
                        X.isInView(e) &&
                        t._handleFrame();
                    }
                    t._autoUpdate && t.update();
                  }),
                    (this._requested = !0);
                }
              },
              play: function () {
                (this._animate = !0), this.requestUpdate();
              },
              pause: function () {
                this._animate = !1;
              },
              _handleFrame: function () {
                tf = this._scope;
                var t = Date.now() / 1e3,
                  e = this._last ? t - this._last : 0;
                (this._last = t),
                  this.emit(
                    "frame",
                    new l({
                      delta: e,
                      time: (this._time += e),
                      count: this._count++,
                    })
                  ),
                  this._stats && this._stats.update();
              },
              _animateItem: function (t, e) {
                var n = this._frameItems;
                e
                  ? ((n[t._id] = { item: t, time: 0, count: 0 }),
                    1 == ++this._frameItemCount &&
                      this.on("frame", this._handleFrameItems))
                  : (delete n[t._id],
                    0 == --this._frameItemCount &&
                      this.off("frame", this._handleFrameItems));
              },
              _handleFrameItems: function (t) {
                for (var e in this._frameItems) {
                  var n = this._frameItems[e];
                  n.item.emit(
                    "frame",
                    new l(t, { time: (n.time += t.delta), count: n.count++ })
                  );
                }
              },
              _changed: function () {
                this._project._changed(4097),
                  (this._bounds = this._decomposed = o);
              },
              getElement: function () {
                return this._element;
              },
              getPixelRatio: function () {
                return this._pixelRatio;
              },
              getResolution: function () {
                return 72 * this._pixelRatio;
              },
              getViewSize: function () {
                var t = this._viewSize;
                return new x(t.width, t.height, this, "setViewSize");
              },
              setViewSize: function () {
                var t = w.read(arguments),
                  e = t.subtract(this._viewSize);
                !e.isZero() &&
                  (this._setElementSize(t.width, t.height),
                  this._viewSize.set(t),
                  this._changed(),
                  this.emit("resize", { size: t, delta: e }),
                  this._autoUpdate && this.update());
              },
              _setElementSize: function (t, e) {
                var n = this._element;
                n &&
                  (n.width !== t && (n.width = t),
                  n.height !== e && (n.height = e));
              },
              getBounds: function () {
                return (
                  this._bounds ||
                    (this._bounds = this._matrix
                      .inverted()
                      ._transformBounds(new b(new m(), this._viewSize))),
                  this._bounds
                );
              },
              getSize: function () {
                return this.getBounds().getSize();
              },
              isVisible: function () {
                return X.isInView(this._element);
              },
              isInserted: function () {
                return X.isInserted(this._element);
              },
              getPixelSize: function (t) {
                var e,
                  n = this._element;
                if (n) {
                  var i = n.parentNode,
                    r = u.createElement("div");
                  (r.style.fontSize = t),
                    i.appendChild(r),
                    (e = parseFloat(X.getStyles(r).fontSize)),
                    i.removeChild(r);
                } else e = parseFloat(e);
                return e;
              },
              getTextWidth: function (t, e) {
                return 0;
              },
            },
            l.each(
              ["rotate", "scale", "shear", "skew"],
              function (t) {
                var e = "rotate" === t;
                this[t] = function () {
                  var n = arguments,
                    i = (e ? l : m).read(n),
                    r = m.read(n, 0, { readNull: !0 });
                  return this.transform(new S()[t](i, r || this.getCenter(!0)));
                };
              },
              {
                _decompose: function () {
                  return (
                    this._decomposed ||
                    (this._decomposed = this._matrix.decompose())
                  );
                },
                translate: function () {
                  var t = new S();
                  return this.transform(t.translate.apply(t, arguments));
                },
                getCenter: function () {
                  return this.getBounds().getCenter();
                },
                setCenter: function () {
                  var t = m.read(arguments);
                  this.translate(this.getCenter().subtract(t));
                },
                getZoom: function () {
                  var t = this._decompose().scaling;
                  return (t.x + t.y) / 2;
                },
                setZoom: function (t) {
                  this.transform(
                    new S().scale(t / this.getZoom(), this.getCenter())
                  );
                },
                getRotation: function () {
                  return this._decompose().rotation;
                },
                setRotation: function (t) {
                  var e = this.getRotation();
                  null != e && null != t && this.rotate(t - e);
                },
                getScaling: function () {
                  var t = this._decompose().scaling;
                  return new y(t.x, t.y, this, "setScaling");
                },
                setScaling: function () {
                  var t = this.getScaling(),
                    e = m.read(arguments, 0, { clone: !0, readNull: !0 });
                  t && e && this.scale(e.x / t.x, e.y / t.y);
                },
                getMatrix: function () {
                  return this._matrix;
                },
                setMatrix: function () {
                  var t = this._matrix;
                  t.set.apply(t, arguments);
                },
                transform: function (t) {
                  this._matrix.append(t);
                },
                scrollBy: function () {
                  this.translate(m.read(arguments).negate());
                },
              }
            ),
            {
              projectToView: function () {
                return this._matrix._transformPoint(m.read(arguments));
              },
              viewToProject: function () {
                return this._matrix._inverseTransform(m.read(arguments));
              },
              getEventPoint: function (t) {
                return this.viewToProject(K.getOffset(t, this._element));
              },
            },
            {
              statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function (t, e) {
                  return (
                    u && "string" == typeof e && (e = u.getElementById(e)),
                    new (h ? Y : Q)(t, e)
                  );
                },
              },
            },
            new (function () {
              if (h) {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s = !1,
                  a = !1,
                  o = h.navigator;
                o.pointerEnabled || o.msPointerEnabled
                  ? ((n = "pointerdown MSPointerDown"),
                    (i = "pointermove MSPointerMove"),
                    (r = "pointerup pointercancel MSPointerUp MSPointerCancel"))
                  : ((n = "touchstart"),
                    (i = "touchmove"),
                    (r = "touchend touchcancel"),
                    ("ontouchstart" in h &&
                      o.userAgent.match(
                        /mobile|tablet|ip(ad|hone|od)|android|silk/i
                      )) ||
                      ((n += " mousedown"),
                      (i += " mousemove"),
                      (r += " mouseup")));
                var l = {},
                  c = {
                    mouseout: function (t) {
                      var e = Q._focused,
                        n = K.getRelatedTarget(t);
                      if (e && (!n || "HTML" === n.nodeName)) {
                        var i = K.getOffset(t, e._element),
                          r = i.x,
                          s = Math.abs,
                          a = s(r),
                          o = a - 33554432;
                        (i.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r),
                          P(e, t, e.viewToProject(i));
                      }
                    },
                    scroll: I,
                  };
                (l[n] = function (t) {
                  var e = (Q._focused = k(t));
                  s || ((s = !0), e._handleMouseEvent("mousedown", t));
                }),
                  (c[i] = function (n) {
                    var i = Q._focused;
                    if (!a) {
                      var r = k(n);
                      r
                        ? i !== r &&
                          (i && P(i, n), t || (t = i), (i = Q._focused = e = r))
                        : e &&
                          e === i &&
                          (t && !t.isInserted() && (t = null),
                          (i = Q._focused = t),
                          (t = null),
                          I());
                    }
                    i && P(i, n);
                  }),
                  (c[n] = function () {
                    a = !0;
                  }),
                  (c[r] = function (t) {
                    var e = Q._focused;
                    e && s && e._handleMouseEvent("mouseup", t), (a = s = !1);
                  }),
                  K.add(u, c),
                  K.add(h, { load: I });
                var f,
                  d,
                  _,
                  g,
                  v,
                  p,
                  m,
                  y,
                  w = !1,
                  x = !1,
                  b = { doubleclick: "click", mousedrag: "mousemove" },
                  C = !1,
                  S = {
                    mousedown: {
                      mousedown: 1,
                      mousedrag: 1,
                      click: 1,
                      doubleclick: 1,
                    },
                    mouseup: {
                      mouseup: 1,
                      mousedrag: 1,
                      click: 1,
                      doubleclick: 1,
                    },
                    mousemove: {
                      mousedrag: 1,
                      mousemove: 1,
                      mouseenter: 1,
                      mouseleave: 1,
                    },
                  };
                return {
                  _viewEvents: l,
                  _handleMouseEvent: function (t, e, n) {
                    var i = this._itemEvents,
                      r = i.native[t],
                      a = "mousemove" === t,
                      o = this._scope.tool,
                      h = this;
                    function u(t) {
                      return (
                        i.virtual[t] || h.responds(t) || (o && o.responds(t))
                      );
                    }
                    a && s && u("mousedrag") && (t = "mousedrag"),
                      n || (n = this.getEventPoint(e));
                    var l = this.getBounds().contains(n),
                      c =
                        r &&
                        l &&
                        h._project.hitTest(n, {
                          tolerance: 0,
                          fill: !0,
                          stroke: !0,
                        }),
                      b = (c && c.item) || null,
                      S = !1,
                      k = {};
                    if (
                      ((k[t.substr(5)] = !0),
                      r &&
                        b !== g &&
                        (g && T(g, null, "mouseleave", e, n),
                        b && T(b, null, "mouseenter", e, n),
                        (g = b)),
                      C ^ l &&
                        (T(this, null, l ? "mouseenter" : "mouseleave", e, n),
                        (S = !0)),
                      (l || k.drag) &&
                        !n.equals(d) &&
                        (M(this, b, a ? t : "mousemove", e, n, d), (S = !0)),
                      (C = l),
                      (k.down && l) || (k.up && f))
                    ) {
                      if ((M(this, b, t, e, n, f), k.down)) {
                        if (
                          ((y = b === p && Date.now() - m < 300),
                          (_ = p = b),
                          !x && b)
                        ) {
                          for (var I = b; I && !I.responds("mousedrag"); )
                            I = I._parent;
                          I && (v = b);
                        }
                        f = n;
                      } else
                        k.up &&
                          (x ||
                            b !== _ ||
                            ((m = Date.now()),
                            M(this, b, y ? "doubleclick" : "click", e, n, f),
                            (y = !1)),
                          (_ = v = null));
                      (C = !1), (S = !0);
                    }
                    (d = n),
                      S && o && (w = o._handleMouseEvent(t, e, n, k) || w),
                      !1 !== e.cancelable &&
                        ((w && !k.move) || (k.down && u("mouseup"))) &&
                        e.preventDefault();
                  },
                  _handleKeyEvent: function (t, e, n, i) {
                    var r,
                      s = this._scope,
                      a = s.tool;
                    function o(a) {
                      a.responds(t) &&
                        ((tf = s), a.emit(t, (r = r || new te(t, e, n, i))));
                    }
                    this.isVisible() && (o(this), a && a.responds(t) && o(a));
                  },
                  _countItemEvent: function (t, e) {
                    var n = this._itemEvents,
                      i = n.native,
                      r = n.virtual;
                    for (var s in S) i[s] = (i[s] || 0) + (S[s][t] || 0) * e;
                    r[t] = (r[t] || 0) + e;
                  },
                  statics: {
                    updateFocus: I,
                    _resetState: function () {
                      (s = a = w = C = !1),
                        (t = e = f = d = _ = g = v = p = m = y = null);
                    },
                  },
                };
              }
              function k(t) {
                var e = K.getTarget(t);
                return e.getAttribute && Q._viewsById[e.getAttribute("id")];
              }
              function I() {
                var t = Q._focused;
                if (!t || !t.isVisible()) {
                  for (var n = 0, i = Q._views.length; n < i; n++)
                    if ((t = Q._views[n]).isVisible()) {
                      Q._focused = e = t;
                      break;
                    }
                }
              }
              function P(t, e, n) {
                t._handleMouseEvent("mousemove", e, n);
              }
              function T(t, e, n, i, r, s, a) {
                for (
                  var o, h = !1;
                  t &&
                  t !== a &&
                  !(function t(n, a) {
                    if (n.responds(a)) {
                      if (
                        (o ||
                          (o = new ti(
                            a,
                            i,
                            r,
                            e || n,
                            s ? r.subtract(s) : null
                          )),
                        n.emit(a, o) &&
                          ((w = !0), o.prevented && (x = !0), o.stopped))
                      )
                        return (h = !0);
                    } else {
                      var u = b[a];
                      if (u) return t(n, u);
                    }
                  })(t, n);
                )
                  t = t._parent;
                return h;
              }
              function M(t, e, n, i, r, s) {
                return (
                  t._project.removeOn(n),
                  (x = w = !1),
                  (v && T(v, null, n, i, r, s)) ||
                    (e &&
                      e !== v &&
                      !e.isDescendant(v) &&
                      T(
                        e,
                        null,
                        "mousedrag" === n ? "mousemove" : n,
                        i,
                        r,
                        s,
                        v
                      )) ||
                    T(t, v || e || t, n, i, r, s)
                );
              }
            })()
          ),
          Y = Q.extend({
            _class: "CanvasView",
            initialize: function (t, e) {
              if (!(e instanceof h.HTMLCanvasElement)) {
                var n = w.read(arguments, 1);
                if (n.isZero())
                  throw Error(
                    "Cannot create CanvasView with the provided argument: " +
                      l.slice(arguments, 1)
                  );
                e = th.getCanvas(n);
              }
              var i = (this._context = e.getContext("2d"));
              if (
                (i.save(),
                (this._pixelRatio = 1),
                !/^off|false$/.test(f.getAttribute(e, "hidpi")))
              ) {
                var r = h.devicePixelRatio || 1,
                  s = X.getPrefixed(i, "backingStorePixelRatio") || 1;
                this._pixelRatio = r / s;
              }
              Q.call(this, t, e), (this._needsUpdate = !0);
            },
            remove: function t() {
              return this._context.restore(), t.base.call(this);
            },
            _setElementSize: function t(e, n) {
              var i = this._pixelRatio;
              if ((t.base.call(this, e * i, n * i), 1 !== i)) {
                var r = this._element,
                  s = this._context;
                if (!f.hasAttribute(r, "resize")) {
                  var a = r.style;
                  (a.width = e + "px"), (a.height = n + "px");
                }
                s.restore(), s.save(), s.scale(i, i);
              }
            },
            getContext: function () {
              return this._context;
            },
            getPixelSize: function t(e) {
              var n,
                i = tf.agent;
              if (i && i.firefox) n = t.base.call(this, e);
              else {
                var r = this._context,
                  s = r.font;
                (r.font = e + " serif"), (n = parseFloat(r.font)), (r.font = s);
              }
              return n;
            },
            getTextWidth: function (t, e) {
              var n = this._context,
                i = n.font,
                r = 0;
              n.font = t;
              for (var s = 0, a = e.length; s < a; s++)
                r = Math.max(r, n.measureText(e[s]).width);
              return (n.font = i), r;
            },
            update: function () {
              if (!this._needsUpdate) return !1;
              var t = this._project,
                e = this._context,
                n = this._viewSize;
              return (
                e.clearRect(0, 0, n.width + 1, n.height + 1),
                t && t.draw(e, this._matrix, this._pixelRatio),
                (this._needsUpdate = !1),
                !0
              );
            },
          }),
          tt = l.extend({
            _class: "Event",
            initialize: function (t) {
              (this.event = t), (this.type = t && t.type);
            },
            prevented: !1,
            stopped: !1,
            preventDefault: function () {
              (this.prevented = !0), this.event.preventDefault();
            },
            stopPropagation: function () {
              (this.stopped = !0), this.event.stopPropagation();
            },
            stop: function () {
              this.stopPropagation(), this.preventDefault();
            },
            getTimeStamp: function () {
              return this.event.timeStamp;
            },
            getModifiers: function () {
              return tn.modifiers;
            },
          }),
          te = tt.extend({
            _class: "KeyEvent",
            initialize: function (t, e, n, i) {
              (this.type = t),
                (this.event = e),
                (this.key = n),
                (this.character = i);
            },
            toString: function () {
              return (
                "{ type: '" +
                this.type +
                "', key: '" +
                this.key +
                "', character: '" +
                this.character +
                "', modifiers: " +
                this.getModifiers() +
                " }"
              );
            },
          }),
          tn = new (function () {
            var t,
              e,
              n = {
                "	": "tab",
                " ": "space",
                "\b": "backspace",
                "\x7f": "delete",
                Spacebar: "space",
                Del: "delete",
                Win: "meta",
                Esc: "escape",
              },
              i = { tab: "	", space: " ", enter: "\r" },
              r = {},
              s = {},
              a = new l({
                shift: !1,
                control: !1,
                alt: !1,
                meta: !1,
                capsLock: !1,
                space: !1,
              }).inject({
                option: {
                  get: function () {
                    return this.alt;
                  },
                },
                command: {
                  get: function () {
                    var t = tf && tf.agent;
                    return t && t.mac ? this.meta : this.control;
                  },
                },
              });
            function c(t) {
              var e = t.key || t.keyIdentifier;
              return (
                n[
                  (e = /^U\+/.test(e)
                    ? String.fromCharCode(parseInt(e.substr(2), 16))
                    : /^Arrow[A-Z]/.test(e)
                      ? e.substr(5)
                      : "Unidentified" === e || o === e
                        ? String.fromCharCode(t.keyCode)
                        : e)
                ] || (e.length > 1 ? l.hyphenate(e) : e.toLowerCase())
              );
            }
            function f(e, n, i, o) {
              var h,
                u = Q._focused;
              if (
                ((r[n] = e),
                e ? (s[n] = i) : delete s[n],
                n.length > 1 && (h = l.camelize(n)) in a)
              ) {
                a[h] = e;
                var c = tf && tf.agent;
                if ("meta" === h && c && c.mac) {
                  if (e) t = {};
                  else {
                    for (var d in t) d in s && f(!1, d, t[d], o);
                    t = null;
                  }
                }
              } else e && t && (t[n] = i);
              u && u._handleKeyEvent(e ? "keydown" : "keyup", o, n, i);
            }
            return (
              K.add(u, {
                keydown: function (t) {
                  var n = c(t),
                    r = tf && tf.agent;
                  n.length > 1 ||
                  (r &&
                    r.chrome &&
                    (t.altKey || (r.mac && t.metaKey) || (!r.mac && t.ctrlKey)))
                    ? f(!0, n, i[n] || (n.length > 1 ? "" : n), t)
                    : (e = n);
                },
                keypress: function (t) {
                  if (e) {
                    var n = c(t),
                      i = t.charCode,
                      r =
                        i >= 32
                          ? String.fromCharCode(i)
                          : n.length > 1
                            ? ""
                            : n;
                    n !== e && (n = r.toLowerCase()),
                      f(!0, n, r, t),
                      (e = null);
                  }
                },
                keyup: function (t) {
                  var e = c(t);
                  e in s && f(!1, e, s[e], t);
                },
              }),
              K.add(h, {
                blur: function (t) {
                  for (var e in s) f(!1, e, s[e], t);
                },
              }),
              {
                modifiers: a,
                isDown: function (t) {
                  return !!r[t];
                },
              }
            );
          })(),
          ti = tt.extend({
            _class: "MouseEvent",
            initialize: function (t, e, n, i, r) {
              (this.type = t),
                (this.event = e),
                (this.point = n),
                (this.target = i),
                (this.delta = r);
            },
            toString: function () {
              return (
                "{ type: '" +
                this.type +
                "', point: " +
                this.point +
                ", target: " +
                this.target +
                (this.delta ? ", delta: " + this.delta : "") +
                ", modifiers: " +
                this.getModifiers() +
                " }"
              );
            },
          }),
          tr = tt.extend({
            _class: "ToolEvent",
            _item: null,
            initialize: function (t, e, n) {
              (this.tool = t), (this.type = e), (this.event = n);
            },
            _choosePoint: function (t, e) {
              return t || (e ? e.clone() : null);
            },
            getPoint: function () {
              return this._choosePoint(this._point, this.tool._point);
            },
            setPoint: function (t) {
              this._point = t;
            },
            getLastPoint: function () {
              return this._choosePoint(this._lastPoint, this.tool._lastPoint);
            },
            setLastPoint: function (t) {
              this._lastPoint = t;
            },
            getDownPoint: function () {
              return this._choosePoint(this._downPoint, this.tool._downPoint);
            },
            setDownPoint: function (t) {
              this._downPoint = t;
            },
            getMiddlePoint: function () {
              return !this._middlePoint && this.tool._lastPoint
                ? this.tool._point.add(this.tool._lastPoint).divide(2)
                : this._middlePoint;
            },
            setMiddlePoint: function (t) {
              this._middlePoint = t;
            },
            getDelta: function () {
              return !this._delta && this.tool._lastPoint
                ? this.tool._point.subtract(this.tool._lastPoint)
                : this._delta;
            },
            setDelta: function (t) {
              this._delta = t;
            },
            getCount: function () {
              return this.tool[
                /^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"
              ];
            },
            setCount: function (t) {
              this.tool[
                /^mouse(down|up)$/.test(this.type) ? "downCount" : "count"
              ] = t;
            },
            getItem: function () {
              if (!this._item) {
                var t = this.tool._scope.project.hitTest(this.getPoint());
                if (t) {
                  for (
                    var e = t.item, n = e._parent;
                    /^(Group|CompoundPath)$/.test(n._class);
                  )
                    (e = n), (n = n._parent);
                  this._item = e;
                }
              }
              return this._item;
            },
            setItem: function (t) {
              this._item = t;
            },
            toString: function () {
              return (
                "{ type: " +
                this.type +
                ", point: " +
                this.getPoint() +
                ", count: " +
                this.getCount() +
                ", modifiers: " +
                this.getModifiers() +
                " }"
              );
            },
          }),
          ts = d.extend({
            _class: "Tool",
            _list: "tools",
            _reference: "tool",
            _events: [
              "onMouseDown",
              "onMouseUp",
              "onMouseDrag",
              "onMouseMove",
              "onActivate",
              "onDeactivate",
              "onEditOptions",
              "onKeyDown",
              "onKeyUp",
            ],
            initialize: function (t) {
              d.call(this),
                (this._moveCount = -1),
                (this._downCount = -1),
                this.set(t);
            },
            getMinDistance: function () {
              return this._minDistance;
            },
            setMinDistance: function (t) {
              (this._minDistance = t),
                null != t &&
                  null != this._maxDistance &&
                  t > this._maxDistance &&
                  (this._maxDistance = t);
            },
            getMaxDistance: function () {
              return this._maxDistance;
            },
            setMaxDistance: function (t) {
              (this._maxDistance = t),
                null != this._minDistance &&
                  null != t &&
                  t < this._minDistance &&
                  (this._minDistance = t);
            },
            getFixedDistance: function () {
              return this._minDistance == this._maxDistance
                ? this._minDistance
                : null;
            },
            setFixedDistance: function (t) {
              this._minDistance = this._maxDistance = t;
            },
            _handleMouseEvent: function (t, e, n, i) {
              (tf = this._scope),
                i.drag && !this.responds(t) && (t = "mousemove");
              var r = i.move || i.drag,
                s = this.responds(t),
                a = this.minDistance,
                o = this.maxDistance,
                h = !1,
                u = this;
              function l(t, e) {
                var s = n,
                  a = r ? u._point : u._downPoint || s;
                if (r) {
                  if (u._moveCount >= 0 && s.equals(a)) return !1;
                  if (a && (null != t || null != e)) {
                    var o = s.subtract(a),
                      h = o.getLength();
                    if (h < (t || 0)) return !1;
                    e && (s = a.add(o.normalize(Math.min(h, e))));
                  }
                  u._moveCount++;
                }
                return (
                  (u._point = s),
                  (u._lastPoint = a || s),
                  i.down &&
                    ((u._moveCount = -1), (u._downPoint = s), u._downCount++),
                  !0
                );
              }
              function c() {
                s && (h = u.emit(t, new tr(u, t, e)) || h);
              }
              if (i.down) l(), c();
              else if (i.up) l(null, o), c();
              else if (s) for (; l(a, o); ) c();
              return h;
            },
          }),
          ta = l.extend(c, {
            _class: "Tween",
            statics: {
              easings: new l({
                linear: function (t) {
                  return t;
                },
                easeInQuad: function (t) {
                  return t * t;
                },
                easeOutQuad: function (t) {
                  return t * (2 - t);
                },
                easeInOutQuad: function (t) {
                  return t < 0.5 ? 2 * t * t : -1 + 2 * (2 - t) * t;
                },
                easeInCubic: function (t) {
                  return t * t * t;
                },
                easeOutCubic: function (t) {
                  return --t * t * t + 1;
                },
                easeInOutCubic: function (t) {
                  return t < 0.5
                    ? 4 * t * t * t
                    : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                },
                easeInQuart: function (t) {
                  return t * t * t * t;
                },
                easeOutQuart: function (t) {
                  return 1 - --t * t * t * t;
                },
                easeInOutQuart: function (t) {
                  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
                },
                easeInQuint: function (t) {
                  return t * t * t * t * t;
                },
                easeOutQuint: function (t) {
                  return 1 + --t * t * t * t * t;
                },
                easeInOutQuint: function (t) {
                  return t < 0.5
                    ? 16 * t * t * t * t * t
                    : 1 + 16 * --t * t * t * t * t;
                },
              }),
            },
            initialize: function t(e, n, i, r, s, a) {
              this.object = e;
              var o = typeof s,
                h = "function" === o;
              (this.type = h ? o : "string" === o ? s : "linear"),
                (this.easing = h ? s : t.easings[this.type]),
                (this.duration = r),
                (this.running = !1),
                (this._then = null),
                (this._startTime = null);
              var u = n || i;
              (this._keys = u ? Object.keys(u) : []),
                (this._parsedKeys = this._parseKeys(this._keys)),
                (this._from = u && this._getState(n)),
                (this._to = u && this._getState(i)),
                !1 !== a && this.start();
            },
            then: function (t) {
              return (this._then = t), this;
            },
            start: function () {
              return (this._startTime = null), (this.running = !0), this;
            },
            stop: function () {
              return (this.running = !1), this;
            },
            update: function (t) {
              if (this.running) {
                t >= 1 && ((t = 1), (this.running = !1));
                for (
                  var e = this.easing(t),
                    n = this._keys,
                    i = function (n) {
                      return "function" == typeof n ? n(e, t) : n;
                    },
                    r = 0,
                    s = n && n.length;
                  r < s;
                  r++
                ) {
                  var a = n[r],
                    o = i(this._from[a]),
                    h = i(this._to[a]),
                    u =
                      o && h && o.__add && h.__add
                        ? h.__subtract(o).__multiply(e).__add(o)
                        : (h - o) * e + o;
                  this._setProperty(this._parsedKeys[a], u);
                }
                this.responds("update") &&
                  this.emit("update", new l({ progress: t, factor: e })),
                  !this.running && this._then && this._then(this.object);
              }
              return this;
            },
            _events: { onUpdate: {} },
            _handleFrame: function (t) {
              var e = this._startTime,
                n = e ? (t - e) / this.duration : 0;
              e || (this._startTime = t), this.update(n);
            },
            _getState: function (t) {
              for (
                var e = this._keys, n = {}, i = 0, r = e.length;
                i < r;
                i++
              ) {
                var s,
                  a = e[i],
                  o = this._parsedKeys[a],
                  h = this._getProperty(o);
                if (t) {
                  var u = this._resolveValue(h, t[a]);
                  this._setProperty(o, u),
                    (s = (s = this._getProperty(o)) && s.clone ? s.clone() : s),
                    this._setProperty(o, h);
                } else s = h && h.clone ? h.clone() : h;
                n[a] = s;
              }
              return n;
            },
            _resolveValue: function (t, e) {
              if (e) {
                if (Array.isArray(e) && 2 === e.length) {
                  var n = e[0];
                  return n && n.match && n.match(/^[+\-\*\/]=/)
                    ? this._calculate(t, n[0], e[1])
                    : e;
                }
                if ("string" == typeof e) {
                  var i = e.match(/^[+\-*/]=(.*)/);
                  if (i) {
                    var r = JSON.parse(
                      i[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ')
                    );
                    return this._calculate(t, e[0], r);
                  }
                }
              }
              return e;
            },
            _calculate: function (t, e, n) {
              return tf.PaperScript.calculateBinary(t, e, n);
            },
            _parseKeys: function (t) {
              for (var e = {}, n = 0, i = t.length; n < i; n++) {
                var r = t[n],
                  s = r
                    .replace(/\.([^.]*)/g, "/$1")
                    .replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
                e[r] = s.split("/");
              }
              return e;
            },
            _getProperty: function (t, e) {
              for (
                var n = this.object, i = 0, r = t.length - (e || 0);
                i < r && n;
                i++
              )
                n = n[t[i]];
              return n;
            },
            _setProperty: function (t, e) {
              var n = this._getProperty(t, 1);
              n && (n[t[t.length - 1]] = e);
            },
          }),
          to = {
            request: function (t) {
              var e = new a.XMLHttpRequest();
              return (
                e.open(
                  (t.method || "get").toUpperCase(),
                  t.url,
                  l.pick(t.async, !0)
                ),
                t.mimeType && e.overrideMimeType(t.mimeType),
                (e.onload = function () {
                  var n = e.status;
                  0 === n || 200 === n
                    ? t.onLoad && t.onLoad.call(e, e.responseText)
                    : e.onerror();
                }),
                (e.onerror = function () {
                  var n = e.status,
                    i = 'Could not load "' + t.url + '" (Status: ' + n + ")";
                  if (t.onError) t.onError(i, n);
                  else throw Error(i);
                }),
                e.send(null)
              );
            },
          },
          th = (l.exports.CanvasProvider = {
            canvases: [],
            getCanvas: function (t, e, n) {
              if (!h) return null;
              var i,
                r = !0;
              "object" == typeof t && ((e = t.height), (t = t.width)),
                this.canvases.length
                  ? (i = this.canvases.pop())
                  : ((i = u.createElement("canvas")), (r = !1));
              var s = i.getContext("2d", n || {});
              if (!s)
                throw Error(
                  "Canvas " + i + " is unable to provide a 2D context."
                );
              return (
                i.width === t && i.height === e
                  ? r && s.clearRect(0, 0, t + 1, e + 1)
                  : ((i.width = t), (i.height = e)),
                s.save(),
                i
              );
            },
            getContext: function (t, e, n) {
              var i = this.getCanvas(t, e, n);
              return i ? i.getContext("2d", n || {}) : null;
            },
            release: function (t) {
              var e = t && t.canvas ? t.canvas : t;
              e &&
                e.getContext &&
                (e.getContext("2d").restore(), this.canvases.push(e));
            },
          }),
          tu = new (function () {
            var t,
              e,
              n,
              i,
              r,
              s,
              a,
              o,
              h,
              u,
              c,
              f = Math.min,
              d = Math.max,
              _ = Math.abs;
            function g(t, e, n) {
              return 0.2989 * t + 0.587 * e + 0.114 * n;
            }
            function v(t, e, n, i) {
              var r = i - g(t, e, n),
                i = g((h = t + r), (u = e + r), (c = n + r)),
                s = f(h, u, c),
                a = d(h, u, c);
              if (s < 0) {
                var o = i - s;
                (h = i + ((h - i) * i) / o),
                  (u = i + ((u - i) * i) / o),
                  (c = i + ((c - i) * i) / o);
              }
              if (a > 255) {
                var l = 255 - i,
                  _ = a - i;
                (h = i + ((h - i) * l) / _),
                  (u = i + ((u - i) * l) / _),
                  (c = i + ((c - i) * l) / _);
              }
            }
            function p(t, e, n) {
              return d(t, e, n) - f(t, e, n);
            }
            function m(t, e, n, i) {
              var r,
                s = [t, e, n],
                a = d(t, e, n),
                o = f(t, e, n);
              (r =
                0 ===
                f(
                  (o = o === t ? 0 : o === e ? 1 : 2),
                  (a = a === t ? 0 : a === e ? 1 : 2)
                )
                  ? 1 === d(o, a)
                    ? 2
                    : 1
                  : 0),
                s[a] > s[o]
                  ? ((s[r] = ((s[r] - s[o]) * i) / (s[a] - s[o])), (s[a] = i))
                  : (s[r] = s[a] = 0),
                (s[o] = 0),
                (h = s[0]),
                (u = s[1]),
                (c = s[2]);
            }
            var y = {
                multiply: function () {
                  (h = (r * t) / 255), (u = (s * e) / 255), (c = (a * n) / 255);
                },
                screen: function () {
                  (h = r + t - (r * t) / 255),
                    (u = s + e - (s * e) / 255),
                    (c = a + n - (a * n) / 255);
                },
                overlay: function () {
                  (h =
                    r < 128
                      ? (2 * r * t) / 255
                      : 255 - (2 * (255 - r) * (255 - t)) / 255),
                    (u =
                      s < 128
                        ? (2 * s * e) / 255
                        : 255 - (2 * (255 - s) * (255 - e)) / 255),
                    (c =
                      a < 128
                        ? (2 * a * n) / 255
                        : 255 - (2 * (255 - a) * (255 - n)) / 255);
                },
                "soft-light": function () {
                  var i = (t * r) / 255;
                  (h =
                    i + (r * (255 - ((255 - r) * (255 - t)) / 255 - i)) / 255),
                    (u =
                      (i = (e * s) / 255) +
                      (s * (255 - ((255 - s) * (255 - e)) / 255 - i)) / 255),
                    (c =
                      (i = (n * a) / 255) +
                      (a * (255 - ((255 - a) * (255 - n)) / 255 - i)) / 255);
                },
                "hard-light": function () {
                  (h =
                    t < 128
                      ? (2 * t * r) / 255
                      : 255 - (2 * (255 - t) * (255 - r)) / 255),
                    (u =
                      e < 128
                        ? (2 * e * s) / 255
                        : 255 - (2 * (255 - e) * (255 - s)) / 255),
                    (c =
                      n < 128
                        ? (2 * n * a) / 255
                        : 255 - (2 * (255 - n) * (255 - a)) / 255);
                },
                "color-dodge": function () {
                  (h =
                    0 === r
                      ? 0
                      : 255 === t
                        ? 255
                        : f(255, (255 * r) / (255 - t))),
                    (u =
                      0 === s
                        ? 0
                        : 255 === e
                          ? 255
                          : f(255, (255 * s) / (255 - e))),
                    (c =
                      0 === a
                        ? 0
                        : 255 === n
                          ? 255
                          : f(255, (255 * a) / (255 - n)));
                },
                "color-burn": function () {
                  (h =
                    255 === r
                      ? 255
                      : 0 === t
                        ? 0
                        : d(0, 255 - ((255 - r) * 255) / t)),
                    (u =
                      255 === s
                        ? 255
                        : 0 === e
                          ? 0
                          : d(0, 255 - ((255 - s) * 255) / e)),
                    (c =
                      255 === a
                        ? 255
                        : 0 === n
                          ? 0
                          : d(0, 255 - ((255 - a) * 255) / n));
                },
                darken: function () {
                  (h = r < t ? r : t), (u = s < e ? s : e), (c = a < n ? a : n);
                },
                lighten: function () {
                  (h = r > t ? r : t), (u = s > e ? s : e), (c = a > n ? a : n);
                },
                difference: function () {
                  (h = r - t) < 0 && (h = -h),
                    (u = s - e) < 0 && (u = -u),
                    (c = a - n) < 0 && (c = -c);
                },
                exclusion: function () {
                  (h = r + (t * (255 - r - r)) / 255),
                    (u = s + (e * (255 - s - s)) / 255),
                    (c = a + (n * (255 - a - a)) / 255);
                },
                hue: function () {
                  m(t, e, n, p(r, s, a)), v(h, u, c, g(r, s, a));
                },
                saturation: function () {
                  m(r, s, a, p(t, e, n)), v(h, u, c, g(r, s, a));
                },
                luminosity: function () {
                  v(r, s, a, g(t, e, n));
                },
                color: function () {
                  v(t, e, n, g(r, s, a));
                },
                add: function () {
                  (h = f(r + t, 255)), (u = f(s + e, 255)), (c = f(a + n, 255));
                },
                subtract: function () {
                  (h = d(r - t, 0)), (u = d(s - e, 0)), (c = d(a - n, 0));
                },
                average: function () {
                  (h = (r + t) / 2), (u = (s + e) / 2), (c = (a + n) / 2);
                },
                negation: function () {
                  (h = 255 - _(255 - t - r)),
                    (u = 255 - _(255 - e - s)),
                    (c = 255 - _(255 - n - a));
                },
              },
              w = (this.nativeModes = l.each(
                [
                  "source-over",
                  "source-in",
                  "source-out",
                  "source-atop",
                  "destination-over",
                  "destination-in",
                  "destination-out",
                  "destination-atop",
                  "lighter",
                  "darker",
                  "copy",
                  "xor",
                ],
                function (t) {
                  this[t] = !0;
                },
                {}
              )),
              x = th.getContext(1, 1, { willReadFrequently: !0 });
            x &&
              (l.each(y, function (t, e) {
                var n = "darken" === e,
                  i = !1;
                x.save();
                try {
                  (x.fillStyle = n ? "#300" : "#a00"),
                    x.fillRect(0, 0, 1, 1),
                    (x.globalCompositeOperation = e),
                    x.globalCompositeOperation === e &&
                      ((x.fillStyle = n ? "#a00" : "#300"),
                      x.fillRect(0, 0, 1, 1),
                      (i =
                        x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51));
                } catch (t) {}
                x.restore(), (w[e] = i);
              }),
              th.release(x)),
              (this.process = function (l, f, d, _, g) {
                var v = f.canvas,
                  p = "normal" === l;
                if (p || w[l])
                  d.save(),
                    d.setTransform(1, 0, 0, 1, 0, 0),
                    (d.globalAlpha = _),
                    p || (d.globalCompositeOperation = l),
                    d.drawImage(v, g.x, g.y),
                    d.restore();
                else {
                  var m = y[l];
                  if (!m) return;
                  for (
                    var x = d.getImageData(g.x, g.y, v.width, v.height),
                      b = x.data,
                      C = f.getImageData(0, 0, v.width, v.height).data,
                      S = 0,
                      k = b.length;
                    S < k;
                    S += 4
                  ) {
                    (t = C[S]),
                      (r = b[S]),
                      (e = C[S + 1]),
                      (s = b[S + 1]),
                      (n = C[S + 2]),
                      (a = b[S + 2]),
                      (i = C[S + 3]),
                      (o = b[S + 3]),
                      m();
                    var I = (i * _) / 255,
                      P = 1 - I;
                    (b[S] = I * h + P * r),
                      (b[S + 1] = I * u + P * s),
                      (b[S + 2] = I * c + P * a),
                      (b[S + 3] = i * _ + P * o);
                  }
                  d.putImageData(x, g.x, g.y);
                }
              });
          })(),
          tl = new (function () {
            var t = "http://www.w3.org/2000/svg",
              e = "http://www.w3.org/2000/xmlns",
              n = "http://www.w3.org/1999/xlink",
              i = { href: n, xlink: e, xmlns: e + "/", "xmlns:xlink": e + "/" };
            function r(t, e, n) {
              for (var r in e) {
                var s = e[r],
                  a = i[r];
                "number" == typeof s && n && (s = n.number(s)),
                  a ? t.setAttributeNS(a, r, s) : t.setAttribute(r, s);
              }
              return t;
            }
            return {
              svg: t,
              xmlns: e,
              xlink: n,
              create: function (e, n, i) {
                return r(u.createElementNS(t, e), n, i);
              },
              get: function (t, e) {
                var n = i[e],
                  r = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                return "null" === r ? null : r;
              },
              set: r,
            };
          })(),
          tc = l.each(
            {
              fillColor: ["fill", "color"],
              fillRule: ["fill-rule", "string"],
              strokeColor: ["stroke", "color"],
              strokeWidth: ["stroke-width", "number"],
              strokeCap: ["stroke-linecap", "string"],
              strokeJoin: ["stroke-linejoin", "string"],
              strokeScaling: [
                "vector-effect",
                "lookup",
                { true: "none", false: "non-scaling-stroke" },
                function (t, e) {
                  return (
                    !e && (t instanceof j || t instanceof A || t instanceof H)
                  );
                },
              ],
              miterLimit: ["stroke-miterlimit", "number"],
              dashArray: ["stroke-dasharray", "array"],
              dashOffset: ["stroke-dashoffset", "number"],
              fontFamily: ["font-family", "string"],
              fontWeight: ["font-weight", "string"],
              fontSize: ["font-size", "number"],
              justification: [
                "text-anchor",
                "lookup",
                { left: "start", center: "middle", right: "end" },
              ],
              opacity: ["opacity", "number"],
              blendMode: ["mix-blend-mode", "style"],
            },
            function (t, e) {
              var n = l.capitalize(e),
                i = t[2];
              this[e] = {
                type: t[1],
                property: e,
                attribute: t[0],
                toSVG: i,
                fromSVG:
                  i &&
                  l.each(
                    i,
                    function (t, e) {
                      this[t] = e;
                    },
                    {}
                  ),
                exportFilter: t[3],
                get: "get" + n,
                set: "set" + n,
              };
            },
            {}
          );
        new (function () {
          function t(t, e, n) {
            var r,
              s = new l(),
              a = t.getTranslation();
            if (
              (e &&
                (t.isInvertible()
                  ? ((r = (t = t._shiftless())._inverseTransform(a)),
                    (a = null))
                  : (r = new m()),
                (s[n ? "cx" : "x"] = r.x),
                (s[n ? "cy" : "y"] = r.y)),
              !t.isIdentity())
            ) {
              var o = t.decompose();
              if (o) {
                var h = [],
                  u = o.rotation,
                  c = o.scaling,
                  f = o.skewing;
                a && !a.isZero() && h.push("translate(" + i.point(a) + ")"),
                  u && h.push("rotate(" + i.number(u) + ")"),
                  (v.isZero(c.x - 1) && v.isZero(c.y - 1)) ||
                    h.push("scale(" + i.point(c) + ")"),
                  f.x && h.push("skewX(" + i.number(f.x) + ")"),
                  f.y && h.push("skewY(" + i.number(f.y) + ")"),
                  (s.transform = h.join(" "));
              } else s.transform = "matrix(" + t.getValues().join(",") + ")";
            }
            return s;
          }
          function e(e, n) {
            for (
              var r = t(e._matrix),
                s = e._children,
                a = tl.create("g", r, i),
                o = 0,
                u = s.length;
              o < u;
              o++
            ) {
              var l = s[o],
                f = c(l, n);
              if (f) {
                if (l.isClipMask()) {
                  var d = tl.create("clipPath");
                  d.appendChild(f),
                    h(l, d, "clip"),
                    tl.set(a, { "clip-path": "url(#" + d.id + ")" });
                } else a.appendChild(f);
              }
            }
            return a;
          }
          function n(e) {
            var n = e._type,
              r = e._radius,
              s = t(e._matrix, !0, "rectangle" !== n);
            if ("rectangle" === n) {
              n = "rect";
              var a = e._size,
                o = a.width,
                h = a.height;
              (s.x -= o / 2),
                (s.y -= h / 2),
                (s.width = o),
                (s.height = h),
                r.isZero() && (r = null);
            }
            return (
              r &&
                ("circle" === n
                  ? (s.r = r)
                  : ((s.rx = r.width), (s.ry = r.height))),
              tl.create(n, s, i)
            );
          }
          var i,
            r,
            s = {
              Group: e,
              Layer: e,
              Raster: function (e, n) {
                var r = t(e._matrix, !0),
                  s = e.getSize(),
                  a = e.getImage();
                return (
                  (r.x -= s.width / 2),
                  (r.y -= s.height / 2),
                  (r.width = s.width),
                  (r.height = s.height),
                  (r.href =
                    (!1 == n.embedImages && a && a.src) || e.toDataURL()),
                  tl.create("image", r, i)
                );
              },
              Path: function (e, r) {
                var s = r.matchShapes;
                if (s) {
                  var a = e.toShape(!1);
                  if (a) return n(a, r);
                }
                var o,
                  h = e._segments,
                  u = h.length,
                  l = t(e._matrix);
                if (s && u >= 2 && !e.hasHandles()) {
                  if (u > 2) {
                    o = e._closed ? "polygon" : "polyline";
                    for (var c = [], f = 0; f < u; f++)
                      c.push(i.point(h[f]._point));
                    l.points = c.join(" ");
                  } else {
                    o = "line";
                    var d = h[0]._point,
                      _ = h[1]._point;
                    l.set({ x1: d.x, y1: d.y, x2: _.x, y2: _.y });
                  }
                } else (o = "path"), (l.d = e.getPathData(null, r.precision));
                return tl.create(o, l, i);
              },
              Shape: n,
              CompoundPath: function (e, n) {
                var r = t(e._matrix),
                  s = e.getPathData(null, n.precision);
                return s && (r.d = s), tl.create("path", r, i);
              },
              SymbolItem: function (e, n) {
                var r = t(e._matrix, !0),
                  s = e._definition,
                  a = o(s, "symbol"),
                  u = s._item,
                  l = u.getStrokeBounds();
                return (
                  a ||
                    ((a = tl.create("symbol", {
                      viewBox: i.rectangle(l),
                    })).appendChild(c(u, n)),
                    h(s, a, "symbol")),
                  (r.href = "#" + a.id),
                  (r.x += l.x),
                  (r.y += l.y),
                  (r.width = l.width),
                  (r.height = l.height),
                  (r.overflow = "visible"),
                  tl.create("use", r, i)
                );
              },
              PointText: function (e) {
                var n = tl.create("text", t(e._matrix, !0), i);
                return (n.textContent = e._content), n;
              },
            };
          function o(t, e) {
            return (
              r || (r = { ids: {}, svgs: {} }),
              t &&
                r.svgs[e + "-" + (t._id || t.__id || (t.__id = p.get("svg")))]
            );
          }
          function h(t, e, n) {
            r || o();
            var i = (r.ids[n] = (r.ids[n] || 0) + 1);
            (e.id = n + "-" + i), (r.svgs[n + "-" + (t._id || t.__id)] = e);
          }
          function u(t, e) {
            var n = t,
              i = null;
            if (r) {
              for (var s in ((n = "svg" === t.nodeName.toLowerCase() && t),
              r.svgs))
                i ||
                  (n || (n = tl.create("svg")).appendChild(t),
                  (i = n.insertBefore(tl.create("defs"), n.firstChild))),
                  i.appendChild(r.svgs[s]);
              r = null;
            }
            return e.asString ? new a.XMLSerializer().serializeToString(n) : n;
          }
          function c(t, e, n) {
            var r,
              a,
              u,
              c,
              f = s[t._class],
              d = f && f(t, e);
            if (d) {
              var _ = e.onExport;
              _ && (d = _(t, d, e) || d);
              var g = JSON.stringify(t._data);
              g &&
                "{}" !== g &&
                "null" !== g &&
                d.setAttribute("data-paper-data", g);
            }
            return (
              d &&
              ((r = d),
              (a = {}),
              (u = !n && t.getParent()),
              (c = []),
              null != t._name && (a.id = t._name),
              l.each(tc, function (e) {
                var n = e.get,
                  r = e.type,
                  s = t[n]();
                if (
                  e.exportFilter
                    ? e.exportFilter(t, s)
                    : !u || !l.equals(u[n](), s)
                ) {
                  if ("color" === r && null != s) {
                    var f = s.getAlpha();
                    f < 1 && (a[e.attribute + "-opacity"] = f);
                  }
                  "style" === r
                    ? c.push(e.attribute + ": " + s)
                    : (a[e.attribute] =
                        null == s
                          ? "none"
                          : "color" === r
                            ? s.gradient
                              ? (function (t) {
                                  var e = o(t, "color");
                                  if (!e) {
                                    var n,
                                      r = t.getGradient(),
                                      s = r._radial,
                                      a = t.getOrigin(),
                                      u = t.getDestination();
                                    if (s) {
                                      n = {
                                        cx: a.x,
                                        cy: a.y,
                                        r: a.getDistance(u),
                                      };
                                      var l = t.getHighlight();
                                      l && ((n.fx = l.x), (n.fy = l.y));
                                    } else
                                      n = {
                                        x1: a.x,
                                        y1: a.y,
                                        x2: u.x,
                                        y2: u.y,
                                      };
                                    (n.gradientUnits = "userSpaceOnUse"),
                                      (e = tl.create(
                                        (s ? "radial" : "linear") + "Gradient",
                                        n,
                                        i
                                      ));
                                    for (
                                      var c = r._stops, f = 0, d = c.length;
                                      f < d;
                                      f++
                                    ) {
                                      var _ = c[f],
                                        g = _._color,
                                        v = g.getAlpha(),
                                        p = _._offset;
                                      (n = {
                                        offset: null == p ? f / (d - 1) : p,
                                      }),
                                        g && (n["stop-color"] = g.toCSS(!0)),
                                        v < 1 && (n["stop-opacity"] = v),
                                        e.appendChild(tl.create("stop", n, i));
                                    }
                                    h(t, e, "color");
                                  }
                                  return "url(#" + e.id + ")";
                                })(s, t)
                              : s.toCSS(!0)
                            : "array" === r
                              ? s.join(",")
                              : "lookup" === r
                                ? e.toSVG[s]
                                : s);
                }
              }),
              c.length && (a.style = c.join(";")),
              1 === a.opacity && delete a.opacity,
              t._visible || (a.visibility = "hidden"),
              tl.set(r, a, i))
            );
          }
          function f(t) {
            return t || (t = {}), (i = new g(t.precision)), t;
          }
          P.inject({
            exportSVG: function (t) {
              return u(c(this, (t = f(t)), !0), t);
            },
          }),
            I.inject({
              exportSVG: function (e) {
                e = f(e);
                var n = this._children,
                  r = this.getView(),
                  s = l.pick(e.bounds, "view"),
                  a = e.matrix || ("view" === s && r._matrix),
                  o = a && S.read([a]),
                  h =
                    "view" === s
                      ? new b([0, 0], r.getViewSize())
                      : "content" === s
                        ? P._getBounds(n, o, { stroke: !0 }).rect
                        : b.read([s], 0, { readNull: !0 }),
                  d = {
                    version: "1.1",
                    xmlns: tl.svg,
                    "xmlns:xlink": tl.xlink,
                  };
                h &&
                  ((d.width = h.width),
                  (d.height = h.height),
                  (h.x || 0 === h.x || h.y || 0 === h.y) &&
                    (d.viewBox = i.rectangle(h)));
                var _ = tl.create("svg", d, i),
                  g = _;
                o &&
                  !o.isIdentity() &&
                  (g = _.appendChild(tl.create("g", t(o), i)));
                for (var v = 0, p = n.length; v < p; v++)
                  g.appendChild(c(n[v], e, !0));
                return u(_, e);
              },
            });
        })(),
          new (function () {
            var t,
              e = {};
            function n(e, n, i, r, s, a) {
              var o = tl.get(e, n) || a,
                h = null == o ? (r ? null : i ? "" : 0) : i ? o : parseFloat(o);
              return /%\s*$/.test(o)
                ? (h / 100) *
                    (s ? 1 : t[/x|^width/.test(n) ? "width" : "height"])
                : h;
            }
            function i(t, e, i, r, s, a, o) {
              return (
                (e = n(t, e || "x", !1, r, s, a)),
                (i = n(t, i || "y", !1, r, s, o)),
                r && (null == e || null == i) ? null : new m(e, i)
              );
            }
            function r(t, e, i, r, s) {
              return (
                (e = n(t, e || "width", !1, r, s)),
                (i = n(t, i || "height", !1, r, s)),
                r && (null == e || null == i) ? null : new w(e, i)
              );
            }
            function s(t, e, n) {
              return "none" === t
                ? null
                : "number" === e
                  ? parseFloat(t)
                  : "array" === e
                    ? t
                      ? t.split(/[\s,]+/g).map(parseFloat)
                      : []
                    : "color" === e
                      ? C(t) || t
                      : "lookup" === e
                        ? n[t]
                        : t;
            }
            function c(t, e, n, i) {
              var r = t.childNodes,
                s = "clippath" === e,
                a = "defs" === e,
                o = new T(),
                h = o._project,
                u = h._currentStyle,
                l = [];
              if (
                (s ||
                  a ||
                  ((o = x(o, t, i)), (h._currentStyle = o._style.clone())),
                i)
              )
                for (
                  var c = t.querySelectorAll("defs"), f = 0, d = c.length;
                  f < d;
                  f++
                )
                  k(c[f], n, !1);
              for (var f = 0, d = r.length; f < d; f++) {
                var _,
                  g = r[f];
                !(
                  1 === g.nodeType &&
                  !/^defs$/i.test(g.nodeName) &&
                  (_ = k(g, n, !1))
                ) ||
                  _ instanceof E ||
                  l.push(_);
              }
              return (
                o.addChildren(l),
                s && (o = x(o.reduce(), t, i)),
                (h._currentStyle = u),
                (s || a) && (o.remove(), (o = null)),
                o
              );
            }
            function f(t, e) {
              for (
                var n = t
                    .getAttribute("points")
                    .match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
                  i = [],
                  r = 0,
                  s = n.length;
                r < s;
                r += 2
              )
                i.push(new m(parseFloat(n[r]), parseFloat(n[r + 1])));
              var a = new D(i);
              return "polygon" === e && a.closePath(), a;
            }
            function d(t, r) {
              var s,
                a = (n(t, "href", !0) || "").substring(1),
                o = "radialgradient" === r;
              if (a)
                (s = e[a].getGradient())._radial ^ o &&
                  ((s = s.clone())._radial = o);
              else {
                for (
                  var h = t.childNodes, u = [], l = 0, c = h.length;
                  l < c;
                  l++
                ) {
                  var f = h[l];
                  1 === f.nodeType && u.push(x(new G(), f));
                }
                s = new $(u, o);
              }
              var d,
                _,
                g,
                v = "userSpaceOnUse" !== n(t, "gradientUnits", !0);
              return (
                o
                  ? ((_ = (d = i(t, "cx", "cy", !1, v, "50%", "50%")).add(
                      n(t, "r", !1, !1, v, "50%"),
                      0
                    )),
                    (g = i(t, "fx", "fy", !0, v)))
                  : ((d = i(t, "x1", "y1", !1, v, "0%", "0%")),
                    (_ = i(t, "x2", "y2", !1, v, "100%", "0%"))),
                (x(new W(s, d, _, g), t)._scaleToBounds = v),
                null
              );
            }
            var _ = {
              "#document": function (t, e, n, i) {
                for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                  var o = r[s];
                  if (1 === o.nodeType) return k(o, n, i);
                }
              },
              g: c,
              svg: c,
              clippath: c,
              polygon: f,
              polyline: f,
              path: function (t) {
                return j.create(t.getAttribute("d"));
              },
              lineargradient: d,
              radialgradient: d,
              image: function (t) {
                var e = new O(n(t, "href", !0));
                return (
                  e.on("load", function () {
                    var e = r(t);
                    this.setSize(e);
                    var n = i(t).add(e.divide(2));
                    this._matrix.append(new S().translate(n));
                  }),
                  e
                );
              },
              symbol: function (t, e, n, i) {
                return new E(c(t, e, n, i), !0);
              },
              defs: c,
              use: function (t) {
                var r = e[(n(t, "href", !0) || "").substring(1)],
                  s = i(t);
                return r
                  ? r instanceof E
                    ? r.place(s)
                    : r.clone().translate(s)
                  : null;
              },
              circle: function (t) {
                return new A.Circle(i(t, "cx", "cy"), n(t, "r"));
              },
              ellipse: function (t) {
                return new A.Ellipse({
                  center: i(t, "cx", "cy"),
                  radius: r(t, "rx", "ry"),
                });
              },
              rect: function (t) {
                return new A.Rectangle(new b(i(t), r(t)), r(t, "rx", "ry"));
              },
              line: function (t) {
                return new D.Line(i(t, "x1", "y1"), i(t, "x2", "y2"));
              },
              text: function (t) {
                var e = new Z(i(t).add(i(t, "dx", "dy")));
                return e.setContent(t.textContent.trim() || ""), e;
              },
              switch: c,
            };
            function g(t, e, n, i) {
              if (t.transform) {
                for (
                  var r = (i.getAttribute(n) || "").split(/\)\s*/g),
                    s = new S(),
                    a = 0,
                    o = r.length;
                  a < o;
                  a++
                ) {
                  var h = r[a];
                  if (!h) break;
                  for (
                    var u = h.split(/\(\s*/),
                      l = u[0],
                      c = u[1].split(/[\s,]+/g),
                      f = 0,
                      d = c.length;
                    f < d;
                    f++
                  )
                    c[f] = parseFloat(c[f]);
                  switch (l) {
                    case "matrix":
                      s.append(new S(c[0], c[1], c[2], c[3], c[4], c[5]));
                      break;
                    case "rotate":
                      s.rotate(c[0], c[1] || 0, c[2] || 0);
                      break;
                    case "translate":
                      s.translate(c[0], c[1] || 0);
                      break;
                    case "scale":
                      s.scale(c);
                      break;
                    case "skewX":
                      s.skew(c[0], 0);
                      break;
                    case "skewY":
                      s.skew(0, c[0]);
                  }
                }
                t.transform(s);
              }
            }
            function v(t, e, n) {
              var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor",
                r = t[i] && t[i]();
              r && r.setAlpha(parseFloat(e));
            }
            var p = l.set(
              l.each(
                tc,
                function (t) {
                  this[t.attribute] = function (e, n) {
                    if (
                      e[t.set] &&
                      (e[t.set](s(n, t.type, t.fromSVG)), "color" === t.type)
                    ) {
                      var i = e[t.get]();
                      if (i && i._scaleToBounds) {
                        var r = e.getBounds();
                        i.transform(
                          new S().translate(r.getPoint()).scale(r.getSize())
                        );
                      }
                    }
                  };
                },
                {}
              ),
              {
                id: function (t, n) {
                  (e[n] = t), t.setName && t.setName(n);
                },
                "clip-path": function (t, e) {
                  var n = C(e);
                  if (n) {
                    if (((n = n.clone()).setClipMask(!0), !(t instanceof T)))
                      return new T(n, t);
                    t.insertChild(0, n);
                  }
                },
                gradientTransform: g,
                transform: g,
                "fill-opacity": v,
                "stroke-opacity": v,
                visibility: function (t, e) {
                  t.setVisible && t.setVisible("visible" === e);
                },
                display: function (t, e) {
                  t.setVisible && t.setVisible(null !== e);
                },
                "stop-color": function (t, e) {
                  t.setColor && t.setColor(e);
                },
                "stop-opacity": function (t, e) {
                  t._color && t._color.setAlpha(parseFloat(e));
                },
                offset: function (t, e) {
                  if (t.setOffset) {
                    var n = e.match(/(.*)%$/);
                    t.setOffset(n ? n[1] / 100 : parseFloat(e));
                  }
                },
                viewBox: function (t, e, n, i, a) {
                  var o,
                    h,
                    u = new b(s(e, "array")),
                    l = r(i, null, null, !0);
                  if (t instanceof T) {
                    var c = l ? l.divide(u.getSize()) : 1,
                      h = new S().scale(c).translate(u.getPoint().negate());
                    o = t;
                  } else t instanceof E && (l && u.setSize(l), (o = t._item));
                  if (o) {
                    if ("visible" !== y(i, "overflow", a)) {
                      var f = new A.Rectangle(u);
                      f.setClipMask(!0), o.addChild(f);
                    }
                    h && o.transform(h);
                  }
                },
              }
            );
            function y(t, e, n) {
              var i = t.attributes[e],
                r = i && i.value;
              if (!r && t.style) {
                var s = l.camelize(e);
                (r = t.style[s]) ||
                  n.node[s] === n.parent[s] ||
                  (r = n.node[s]);
              }
              return r ? ("none" === r ? null : r) : o;
            }
            function x(t, e, n) {
              var i = e.parentNode,
                r = {
                  node: X.getStyles(e) || {},
                  parent:
                    (!n && !/^defs$/i.test(i.tagName) && X.getStyles(i)) || {},
                };
              return (
                l.each(p, function (n, i) {
                  var s = y(e, i, r);
                  t = (o !== s && n(t, s, i, e, r)) || t;
                }),
                t
              );
            }
            function C(t) {
              var n = t && t.match(/\((?:["'#]*)([^"')]+)/),
                i = n && n[1],
                r =
                  i &&
                  e[h ? i.replace(h.location.href.split("#")[0] + "#", "") : i];
              return (
                r && r._scaleToBounds && ((r = r.clone())._scaleToBounds = !0),
                r
              );
            }
            function k(n, i, s) {
              var a,
                o,
                h,
                c = n.nodeName.toLowerCase(),
                f = "#document" !== c,
                d = u.body;
              s &&
                f &&
                ((t = tf.getView().getSize()),
                (t = r(n, null, null, !0) || t),
                (a = tl.create("svg", {
                  style: "stroke-width: 1px; stroke-miterlimit: 10",
                })),
                (o = n.parentNode),
                (h = n.nextSibling),
                a.appendChild(n),
                d.appendChild(a));
              var g = tf.settings,
                v = g.applyMatrix,
                p = g.insertItems;
              (g.applyMatrix = !1), (g.insertItems = !1);
              var m = _[c],
                y = (m && m(n, c, i, s)) || null;
              if (((g.insertItems = p), (g.applyMatrix = v), y)) {
                !f || y instanceof T || (y = x(y, n, s));
                var w = i.onImport,
                  b = f && n.getAttribute("data-paper-data");
                w && (y = w(n, y, i) || y),
                  i.expandShapes &&
                    y instanceof A &&
                    (y.remove(), (y = y.toPath())),
                  b && (y._data = JSON.parse(b));
              }
              return (
                a &&
                  (d.removeChild(a),
                  o && (h ? o.insertBefore(n, h) : o.appendChild(n))),
                s &&
                  ((e = {}),
                  y && l.pick(i.applyMatrix, v) && y.matrix.apply(!0, !0)),
                y
              );
            }
            function M(t, e, n) {
              if (!t) return null;
              e = "function" == typeof e ? { onLoad: e } : e || {};
              var i = tf,
                r = null;
              function s(s) {
                try {
                  var u =
                    "object" == typeof s
                      ? s
                      : new a.DOMParser().parseFromString(
                          s.trim(),
                          "image/svg+xml"
                        );
                  if (!u.nodeName)
                    throw ((u = null), Error("Unsupported SVG source: " + t));
                  (tf = i),
                    (r = k(u, e, !0)),
                    (e && !1 === e.insert) || n._insertItem(o, r);
                  var l = e.onLoad;
                  l && l(r, s);
                } catch (t) {
                  h(t);
                }
              }
              function h(t, n) {
                var i = e.onError;
                if (i) i(t, n);
                else throw Error(t);
              }
              if ("string" != typeof t || /^[\s\S]*</.test(t)) {
                if ("undefined" != typeof File && t instanceof File) {
                  var l = new FileReader();
                  return (
                    (l.onload = function () {
                      s(l.result);
                    }),
                    (l.onerror = function () {
                      h(l.error);
                    }),
                    l.readAsText(t)
                  );
                }
                s(t);
              } else {
                var c = u.getElementById(t);
                c
                  ? s(c)
                  : to.request({ url: t, async: !0, onLoad: s, onError: h });
              }
              return r;
            }
            P.inject({
              importSVG: function (t, e) {
                return M(t, e, this);
              },
            }),
              I.inject({
                importSVG: function (t, e) {
                  return this.activate(), M(t, e, this);
                },
              });
          })(),
          (l.exports.PaperScript = function () {
            var t,
              e,
              c = this,
              d = c.acorn;
            if (!d)
              try {
                d = n(60189);
              } catch (t) {}
            function _(t, e) {
              return (c.acorn || d).parse(t, e);
            }
            d ||
              ((d = t = e = {}),
              (function (n, a) {
                if ("object" == typeof t && "object" == typeof e) return a(t);
                (i = [t]),
                  o !==
                    (s = "function" == typeof (r = a) ? r.apply(t, i) : r) &&
                    (e.exports = s);
              })(0, function (t) {
                "use strict";
                (t.version = "0.5.0"),
                  (t.parse = function (t, r) {
                    return (
                      (i = (n = String(t)).length),
                      C(r),
                      tW(),
                      (function (t) {
                        (g = v = s),
                          e.locations && (p = new tZ()),
                          (m = w = null),
                          (y = []),
                          tX();
                        var n = t || t8(),
                          i = !0;
                        for (t || (n.body = []); l !== O; ) {
                          var r = el();
                          n.body.push(r), i && ee(r) && t9(!0), (i = !1);
                        }
                        return et(n, "Program");
                      })(e.program)
                    );
                  });
                var e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  l,
                  c,
                  f,
                  d,
                  _,
                  g,
                  v,
                  p,
                  m,
                  y,
                  w,
                  x,
                  b = (t.defaultOptions = {
                    ecmaVersion: 5,
                    strictSemicolons: !1,
                    allowTrailingCommas: !0,
                    forbidReserved: !1,
                    allowReturnOutsideFunction: !1,
                    locations: !1,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null,
                  });
                function C(t) {
                  for (var n in ((e = t || {}), b))
                    Object.prototype.hasOwnProperty.call(e, n) || (e[n] = b[n]);
                  r = e.sourceFile || null;
                }
                var S = (t.getLineInfo = function (t, e) {
                  for (var n = 1, i = 0; ; ) {
                    tV.lastIndex = i;
                    var r = tV.exec(t);
                    if (r && r.index < e) ++n, (i = r.index + r[0].length);
                    else break;
                  }
                  return { line: n, column: e - i };
                });
                function k(t, e) {
                  var i = S(n, t),
                    r = SyntaxError(
                      (e += " (" + i.line + ":" + i.column + ")")
                    );
                  throw ((r.pos = t), (r.loc = i), (r.raisedAt = s), r);
                }
                t.tokenize = function (t, r) {
                  (i = (n = String(t)).length), C(r), tW();
                  var g = {};
                  function p(t) {
                    return (
                      (v = o),
                      tX(t),
                      (g.start = a),
                      (g.end = o),
                      (g.startLoc = h),
                      (g.endLoc = u),
                      (g.type = l),
                      (g.value = c),
                      g
                    );
                  }
                  return (
                    (p.jumpTo = function (t, i) {
                      if (((s = t), e.locations)) {
                        var r;
                        for (
                          d = 1, _ = tV.lastIndex = 0;
                          (r = tV.exec(n)) && r.index < t;
                        )
                          ++d, (_ = r.index + r[0].length);
                      }
                      (f = i), tJ();
                    }),
                    p
                  );
                };
                var I = [],
                  P = { type: "num" },
                  T = { type: "regexp" },
                  M = { type: "string" },
                  A = { type: "name" },
                  O = { type: "eof" },
                  z = { keyword: "break" },
                  E = { keyword: "case", beforeExpr: !0 },
                  L = { keyword: "catch" },
                  N = { keyword: "continue" },
                  B = { keyword: "debugger" },
                  F = { keyword: "default" },
                  R = { keyword: "do", isLoop: !0 },
                  j = { keyword: "else", beforeExpr: !0 },
                  D = { keyword: "finally" },
                  q = { keyword: "for", isLoop: !0 },
                  V = { keyword: "function" },
                  U = { keyword: "if" },
                  H = { keyword: "return", beforeExpr: !0 },
                  Z = { keyword: "switch" },
                  W = { keyword: "throw", beforeExpr: !0 },
                  $ = { keyword: "try" },
                  G = { keyword: "var" },
                  J = { keyword: "while", isLoop: !0 },
                  X = { keyword: "with" },
                  K = { keyword: "new", beforeExpr: !0 },
                  Q = { keyword: "this" },
                  Y = { keyword: "null", atomValue: null },
                  tt = { keyword: "true", atomValue: !0 },
                  te = { keyword: "false", atomValue: !1 },
                  tn = { keyword: "in", binop: 7, beforeExpr: !0 },
                  ti = {
                    break: z,
                    case: E,
                    catch: L,
                    continue: N,
                    debugger: B,
                    default: F,
                    do: R,
                    else: j,
                    finally: D,
                    for: q,
                    function: V,
                    if: U,
                    return: H,
                    switch: Z,
                    throw: W,
                    try: $,
                    var: G,
                    while: J,
                    with: X,
                    null: Y,
                    true: tt,
                    false: te,
                    new: K,
                    in: tn,
                    instanceof: {
                      keyword: "instanceof",
                      binop: 7,
                      beforeExpr: !0,
                    },
                    this: Q,
                    typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 },
                    void: { keyword: "void", prefix: !0, beforeExpr: !0 },
                    delete: { keyword: "delete", prefix: !0, beforeExpr: !0 },
                  },
                  tr = { type: "[", beforeExpr: !0 },
                  ts = { type: "]" },
                  ta = { type: "{", beforeExpr: !0 },
                  to = { type: "}" },
                  th = { type: "(", beforeExpr: !0 },
                  tu = { type: ")" },
                  tl = { type: ",", beforeExpr: !0 },
                  tc = { type: ";", beforeExpr: !0 },
                  tf = { type: ":", beforeExpr: !0 },
                  td = { type: "." },
                  t_ = { type: "?", beforeExpr: !0 },
                  tg = { binop: 10, beforeExpr: !0 },
                  tv = { isAssign: !0, beforeExpr: !0 },
                  tp = { isAssign: !0, beforeExpr: !0 },
                  tm = { postfix: !0, prefix: !0, isUpdate: !0 },
                  ty = { prefix: !0, beforeExpr: !0 },
                  tw = { binop: 1, beforeExpr: !0 },
                  tx = { binop: 2, beforeExpr: !0 },
                  tb = { binop: 3, beforeExpr: !0 },
                  tC = { binop: 4, beforeExpr: !0 },
                  tS = { binop: 5, beforeExpr: !0 },
                  tk = { binop: 6, beforeExpr: !0 },
                  tI = { binop: 7, beforeExpr: !0 },
                  tP = { binop: 8, beforeExpr: !0 },
                  tT = { binop: 9, prefix: !0, beforeExpr: !0 },
                  tM = { binop: 10, beforeExpr: !0 };
                for (var tA in ((t.tokTypes = {
                  bracketL: tr,
                  bracketR: ts,
                  braceL: ta,
                  braceR: to,
                  parenL: th,
                  parenR: tu,
                  comma: tl,
                  semi: tc,
                  colon: tf,
                  dot: td,
                  question: t_,
                  slash: tg,
                  eq: tv,
                  name: A,
                  eof: O,
                  num: P,
                  regexp: T,
                  string: M,
                }),
                ti))
                  t.tokTypes["_" + tA] = ti[tA];
                function tO(t) {
                  t = t.split(" ");
                  var e = "",
                    n = [];
                  t: for (var i = 0; i < t.length; ++i) {
                    for (var r = 0; r < n.length; ++r)
                      if (n[r][0].length == t[i].length) {
                        n[r].push(t[i]);
                        continue t;
                      }
                    n.push([t[i]]);
                  }
                  function s(t) {
                    if (1 == t.length)
                      return (e +=
                        "return str === " + JSON.stringify(t[0]) + ";");
                    e += "switch(str){";
                    for (var n = 0; n < t.length; ++n)
                      e += "case " + JSON.stringify(t[n]) + ":";
                    e += "return true}return false;";
                  }
                  if (n.length > 3) {
                    n.sort(function (t, e) {
                      return e.length - t.length;
                    }),
                      (e += "switch(str.length){");
                    for (var i = 0; i < n.length; ++i) {
                      var a = n[i];
                      (e += "case " + a[0].length + ":"), s(a);
                    }
                    e += "}";
                  } else s(t);
                  return Function("str", e);
                }
                var tz = tO(
                    "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"
                  ),
                  tE = tO("class enum extends super const export import"),
                  tL = tO(
                    "implements interface let package private protected public static yield"
                  ),
                  tN = tO("eval arguments"),
                  tB = tO(
                    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"
                  ),
                  tF = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                  tR =
                    "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                  tj = RegExp("[" + tR + "]"),
                  tD = RegExp(
                    "[" +
                      tR +
                      "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"
                  ),
                  tq = /[\n\r\u2028\u2029]/,
                  tV = /\r\n|[\n\r\u2028\u2029]/g,
                  tU = (t.isIdentifierStart = function (t) {
                    return t < 65
                      ? 36 === t
                      : t < 91 ||
                          (t < 97
                            ? 95 === t
                            : t < 123 ||
                              (t >= 170 && tj.test(String.fromCharCode(t))));
                  }),
                  tH = (t.isIdentifierChar = function (t) {
                    return t < 48
                      ? 36 === t
                      : t < 58 ||
                          (!(t < 65) &&
                            (t < 91 ||
                              (t < 97
                                ? 95 === t
                                : t < 123 ||
                                  (t >= 170 &&
                                    tD.test(String.fromCharCode(t))))));
                  });
                function tZ() {
                  (this.line = d), (this.column = s - _);
                }
                function tW() {
                  (d = 1), (s = _ = 0), (f = !0), tJ();
                }
                function t$(t, n) {
                  (o = s),
                    e.locations && (u = new tZ()),
                    (l = t),
                    tJ(),
                    (c = n),
                    (f = t.beforeExpr);
                }
                function tG() {
                  for (
                    var t = s,
                      r = e.onComment && e.locations && new tZ(),
                      a = n.charCodeAt((s += 2));
                    s < i && 10 !== a && 13 !== a && 8232 !== a && 8233 !== a;
                  )
                    ++s, (a = n.charCodeAt(s));
                  e.onComment &&
                    e.onComment(
                      !1,
                      n.slice(t + 2, s),
                      t,
                      s,
                      r,
                      e.locations && new tZ()
                    );
                }
                function tJ() {
                  for (; s < i; ) {
                    var t = n.charCodeAt(s);
                    if (32 === t) ++s;
                    else if (13 === t) {
                      ++s;
                      var r = n.charCodeAt(s);
                      10 === r && ++s, e.locations && (++d, (_ = s));
                    } else if (10 === t || 8232 === t || 8233 === t)
                      ++s, e.locations && (++d, (_ = s));
                    else if (t > 8 && t < 14) ++s;
                    else if (47 === t) {
                      var r = n.charCodeAt(s + 1);
                      if (42 === r)
                        !(function () {
                          var t,
                            i = e.onComment && e.locations && new tZ(),
                            r = s,
                            a = n.indexOf("*/", (s += 2));
                          if (
                            (-1 === a && k(s - 2, "Unterminated comment"),
                            (s = a + 2),
                            e.locations)
                          )
                            for (
                              tV.lastIndex = r;
                              (t = tV.exec(n)) && t.index < s;
                            )
                              ++d, (_ = t.index + t[0].length);
                          e.onComment &&
                            e.onComment(
                              !0,
                              n.slice(r + 2, a),
                              r,
                              s,
                              i,
                              e.locations && new tZ()
                            );
                        })();
                      else if (47 === r) tG();
                      else break;
                    } else if (160 === t) ++s;
                    else if (t >= 5760 && tF.test(String.fromCharCode(t))) ++s;
                    else break;
                  }
                }
                function tX(t) {
                  if (
                    (t ? (s = a + 1) : (a = s),
                    e.locations && (h = new tZ()),
                    t)
                  )
                    return tQ();
                  if (s >= i) return t$(O);
                  var r = n.charCodeAt(s);
                  if (tU(r) || 92 === r) return t5();
                  var o = (function (t) {
                    switch (t) {
                      case 46:
                        return (l = n.charCodeAt(s + 1)) >= 48 && l <= 57
                          ? t0(!0)
                          : (++s, t$(td));
                      case 40:
                        return ++s, t$(th);
                      case 41:
                        return ++s, t$(tu);
                      case 59:
                        return ++s, t$(tc);
                      case 44:
                        return ++s, t$(tl);
                      case 91:
                        return ++s, t$(tr);
                      case 93:
                        return ++s, t$(ts);
                      case 123:
                        return ++s, t$(ta);
                      case 125:
                        return ++s, t$(to);
                      case 58:
                        return ++s, t$(tf);
                      case 63:
                        return ++s, t$(t_);
                      case 48:
                        var r,
                          o,
                          h,
                          u,
                          l,
                          c,
                          g,
                          p = n.charCodeAt(s + 1);
                        if (120 === p || 88 === p)
                          return (
                            (s += 2),
                            null == (u = tY(16)) &&
                              k(a + 2, "Expected hexadecimal number"),
                            tU(n.charCodeAt(s)) &&
                              k(s, "Identifier directly after number"),
                            t$(P, u)
                          );
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                        return t0(!1);
                      case 34:
                      case 39:
                        return (function (t) {
                          s++;
                          for (var r = ""; ; ) {
                            s >= i && k(a, "Unterminated string constant");
                            var o = n.charCodeAt(s);
                            if (o === t) return ++s, t$(M, r);
                            if (92 === o) {
                              o = n.charCodeAt(++s);
                              var h = /^[0-7]+/.exec(n.slice(s, s + 3));
                              for (h && (h = h[0]); h && parseInt(h, 8) > 255; )
                                h = h.slice(0, -1);
                              if (("0" === h && (h = null), ++s, h))
                                w && k(s - 2, "Octal literal in strict mode"),
                                  (r += String.fromCharCode(parseInt(h, 8))),
                                  (s += h.length - 1);
                              else
                                switch (o) {
                                  case 110:
                                    r += "\n";
                                    break;
                                  case 114:
                                    r += "\r";
                                    break;
                                  case 120:
                                    r += String.fromCharCode(t1(2));
                                    break;
                                  case 117:
                                    r += String.fromCharCode(t1(4));
                                    break;
                                  case 85:
                                    r += String.fromCharCode(t1(8));
                                    break;
                                  case 116:
                                    r += "	";
                                    break;
                                  case 98:
                                    r += "\b";
                                    break;
                                  case 118:
                                    r += "\v";
                                    break;
                                  case 102:
                                    r += "\f";
                                    break;
                                  case 48:
                                    r += "\x00";
                                    break;
                                  case 13:
                                    10 === n.charCodeAt(s) && ++s;
                                  case 10:
                                    e.locations && ((_ = s), ++d);
                                    break;
                                  default:
                                    r += String.fromCharCode(o);
                                }
                            } else
                              (13 === o ||
                                10 === o ||
                                8232 === o ||
                                8233 === o) &&
                                k(a, "Unterminated string constant"),
                                (r += String.fromCharCode(o)),
                                ++s;
                          }
                        })(t);
                      case 47:
                        return (
                          (c = n.charCodeAt(s + 1)),
                          f ? (++s, tQ()) : 61 === c ? tK(tp, 2) : tK(tg, 1)
                        );
                      case 37:
                      case 42:
                        return 61 === n.charCodeAt(s + 1)
                          ? tK(tp, 2)
                          : tK(tM, 1);
                      case 124:
                      case 38:
                        return (g = n.charCodeAt(s + 1)) === t
                          ? tK(124 === t ? tw : tx, 2)
                          : 61 === g
                            ? tK(tp, 2)
                            : tK(124 === t ? tb : tS, 1);
                      case 94:
                        return 61 === n.charCodeAt(s + 1)
                          ? tK(tp, 2)
                          : tK(tC, 1);
                      case 43:
                      case 45:
                        return (r = n.charCodeAt(s + 1)) === t
                          ? 45 == r &&
                            62 == n.charCodeAt(s + 2) &&
                            tq.test(n.slice(v, s))
                            ? ((s += 3), tG(), tJ(), tX())
                            : tK(tm, 2)
                          : 61 === r
                            ? tK(tp, 2)
                            : tK(tT, 1);
                      case 60:
                      case 62:
                        return (
                          (o = n.charCodeAt(s + 1)),
                          (h = 1),
                          o === t
                            ? ((h =
                                62 === t && 62 === n.charCodeAt(s + 2) ? 3 : 2),
                              61 === n.charCodeAt(s + h))
                              ? tK(tp, h + 1)
                              : tK(tP, h)
                            : 33 == o &&
                                60 == t &&
                                45 == n.charCodeAt(s + 2) &&
                                45 == n.charCodeAt(s + 3)
                              ? ((s += 4), tG(), tJ(), tX())
                              : (61 === o &&
                                  (h = 61 === n.charCodeAt(s + 2) ? 3 : 2),
                                tK(tI, h))
                        );
                      case 61:
                      case 33:
                        return 61 === n.charCodeAt(s + 1)
                          ? tK(tk, 61 === n.charCodeAt(s + 2) ? 3 : 2)
                          : tK(61 === t ? tv : ty, 1);
                      case 126:
                        return tK(ty, 1);
                    }
                    return !1;
                  })(r);
                  if (!1 === o) {
                    var u = String.fromCharCode(r);
                    if ("\\" === u || tj.test(u)) return t5();
                    k(s, "Unexpected character '" + u + "'");
                  }
                  return o;
                }
                function tK(t, e) {
                  var i = n.slice(s, s + e);
                  (s += e), t$(t, i);
                }
                function tQ() {
                  for (var t, e, r = "", a = s; ; ) {
                    s >= i && k(a, "Unterminated regular expression");
                    var o = n.charAt(s);
                    if (
                      (tq.test(o) && k(a, "Unterminated regular expression"), t)
                    )
                      t = !1;
                    else {
                      if ("[" === o) e = !0;
                      else if ("]" === o && e) e = !1;
                      else if ("/" === o && !e) break;
                      t = "\\" === o;
                    }
                    ++s;
                  }
                  var r = n.slice(a, s);
                  ++s;
                  var h = t2();
                  h && !/^[gmsiy]*$/.test(h) && k(a, "Invalid regexp flag");
                  try {
                    var u = new RegExp(r, h);
                  } catch (t) {
                    t instanceof SyntaxError && k(a, t.message), k(t);
                  }
                  return t$(T, u);
                }
                function tY(t, e) {
                  for (
                    var i = s, r = 0, a = 0, o = null == e ? 1 / 0 : e;
                    a < o;
                    ++a
                  ) {
                    var h,
                      u = n.charCodeAt(s);
                    if (
                      (h =
                        u >= 97
                          ? u - 97 + 10
                          : u >= 65
                            ? u - 65 + 10
                            : u >= 48 && u <= 57
                              ? u - 48
                              : 1 / 0) >= t
                    )
                      break;
                    ++s, (r = r * t + h);
                  }
                  return s === i || (null != e && s - i !== e) ? null : r;
                }
                function t0(t) {
                  var e = s,
                    i = !1,
                    r = 48 === n.charCodeAt(s);
                  t || null !== tY(10) || k(e, "Invalid number"),
                    46 === n.charCodeAt(s) && (++s, tY(10), (i = !0));
                  var a = n.charCodeAt(s);
                  (69 === a || 101 === a) &&
                    ((43 === (a = n.charCodeAt(++s)) || 45 === a) && ++s,
                    null === tY(10) && k(e, "Invalid number"),
                    (i = !0)),
                    tU(n.charCodeAt(s)) &&
                      k(s, "Identifier directly after number");
                  var o,
                    h = n.slice(e, s);
                  return (
                    i
                      ? (o = parseFloat(h))
                      : r && 1 !== h.length
                        ? /[89]/.test(h) || w
                          ? k(e, "Invalid number")
                          : (o = parseInt(h, 8))
                        : (o = parseInt(h, 10)),
                    t$(P, o)
                  );
                }
                function t1(t) {
                  var e = tY(16, t);
                  return null === e && k(a, "Bad character escape sequence"), e;
                }
                function t2() {
                  x = !1;
                  for (var t, e = !0, i = s; ; ) {
                    var r = n.charCodeAt(s);
                    if (tH(r)) x && (t += n.charAt(s)), ++s;
                    else if (92 === r) {
                      x || (t = n.slice(i, s)),
                        (x = !0),
                        117 != n.charCodeAt(++s) &&
                          k(s, "Expecting Unicode escape sequence \\uXXXX"),
                        ++s;
                      var a = t1(4),
                        o = String.fromCharCode(a);
                      o || k(s - 1, "Invalid Unicode escape"),
                        (e ? tU(a) : tH(a)) ||
                          k(s - 4, "Invalid Unicode escape"),
                        (t += o);
                    } else break;
                    e = !1;
                  }
                  return x ? t : n.slice(i, s);
                }
                function t5() {
                  var t = t2(),
                    e = A;
                  return !x && tB(t) && (e = ti[t]), t$(e, t);
                }
                function t3() {
                  (g = a), (v = o), (p = u), tX();
                }
                function t9(t) {
                  if (((w = t), (s = a), e.locations))
                    for (; s < _; ) (_ = n.lastIndexOf("\n", _ - 2) + 1), --d;
                  tJ(), tX();
                }
                function t4() {
                  (this.type = null), (this.start = a), (this.end = null);
                }
                function t6() {
                  (this.start = h),
                    (this.end = null),
                    null !== r && (this.source = r);
                }
                function t8() {
                  var t = new t4();
                  return (
                    e.locations && (t.loc = new t6()),
                    e.directSourceFile && (t.sourceFile = e.directSourceFile),
                    e.ranges && (t.range = [a, 0]),
                    t
                  );
                }
                function t7(t) {
                  var n = new t4();
                  return (
                    (n.start = t.start),
                    e.locations &&
                      ((n.loc = new t6()), (n.loc.start = t.loc.start)),
                    e.ranges && (n.range = [t.range[0], 0]),
                    n
                  );
                }
                function et(t, n) {
                  return (
                    (t.type = n),
                    (t.end = v),
                    e.locations && (t.loc.end = p),
                    e.ranges && (t.range[1] = v),
                    t
                  );
                }
                function ee(t) {
                  return (
                    e.ecmaVersion >= 5 &&
                    "ExpressionStatement" === t.type &&
                    "Literal" === t.expression.type &&
                    "use strict" === t.expression.value
                  );
                }
                function en(t) {
                  if (l === t) return t3(), !0;
                }
                function ei() {
                  return (
                    !e.strictSemicolons &&
                    (l === O || l === to || tq.test(n.slice(v, a)))
                  );
                }
                function er() {
                  en(tc) || ei() || ea();
                }
                function es(t) {
                  l === t ? t3() : ea();
                }
                function ea() {
                  k(a, "Unexpected token");
                }
                function eo(t) {
                  "Identifier" !== t.type &&
                    "MemberExpression" !== t.type &&
                    k(t.start, "Assigning to rvalue"),
                    w &&
                      "Identifier" === t.type &&
                      tN(t.name) &&
                      k(t.start, "Assigning to " + t.name + " in strict mode");
                }
                var eh = { kind: "loop" },
                  eu = { kind: "switch" };
                function el() {
                  (l === tg || (l === tp && "/=" == c)) && tX(!0);
                  var t,
                    i,
                    r = l,
                    s = t8();
                  switch (r) {
                    case z:
                    case N:
                      t3();
                      var o = r === z;
                      en(tc) || ei()
                        ? (s.label = null)
                        : l !== A
                          ? ea()
                          : ((s.label = eS()), er());
                      for (var h = 0; h < y.length; ++h) {
                        var u = y[h];
                        if (
                          (null == s.label || u.name === s.label.name) &&
                          ((null != u.kind && (o || "loop" === u.kind)) ||
                            (s.label && o))
                        )
                          break;
                      }
                      return (
                        h === y.length &&
                          k(s.start, "Unsyntactic " + r.keyword),
                        et(s, o ? "BreakStatement" : "ContinueStatement")
                      );
                    case B:
                      return t3(), er(), et(s, "DebuggerStatement");
                    case R:
                      return (
                        t3(),
                        y.push(eh),
                        (s.body = el()),
                        y.pop(),
                        es(J),
                        (s.test = ec()),
                        er(),
                        et(s, "DoWhileStatement")
                      );
                    case q:
                      if ((t3(), y.push(eh), es(th), l === tc))
                        return ed(s, null);
                      if (l === G) {
                        var f = t8();
                        if (
                          (t3(),
                          eg(f, !0),
                          et(f, "VariableDeclaration"),
                          1 === f.declarations.length && en(tn))
                        )
                          return e_(s, f);
                        return ed(s, f);
                      }
                      var f = ev(!1, !0);
                      if (en(tn)) return eo(f), e_(s, f);
                      return ed(s, f);
                    case V:
                      return t3(), eb(s, !0);
                    case U:
                      return (
                        t3(),
                        (s.test = ec()),
                        (s.consequent = el()),
                        (s.alternate = en(j) ? el() : null),
                        et(s, "IfStatement")
                      );
                    case H:
                      return (
                        m ||
                          e.allowReturnOutsideFunction ||
                          k(a, "'return' outside of function"),
                        t3(),
                        en(tc) || ei()
                          ? (s.argument = null)
                          : ((s.argument = ev()), er()),
                        et(s, "ReturnStatement")
                      );
                    case Z:
                      for (
                        t3(),
                          s.discriminant = ec(),
                          s.cases = [],
                          es(ta),
                          y.push(eu);
                        l != to;
                      )
                        if (l === E || l === F) {
                          var d = l === E;
                          t && et(t, "SwitchCase"),
                            s.cases.push((t = t8())),
                            (t.consequent = []),
                            t3(),
                            d
                              ? (t.test = ev())
                              : (i && k(g, "Multiple default clauses"),
                                (i = !0),
                                (t.test = null)),
                            es(tf);
                        } else t || ea(), t.consequent.push(el());
                      return (
                        t && et(t, "SwitchCase"),
                        t3(),
                        y.pop(),
                        et(s, "SwitchStatement")
                      );
                    case W:
                      return (
                        t3(),
                        tq.test(n.slice(v, a)) &&
                          k(v, "Illegal newline after throw"),
                        (s.argument = ev()),
                        er(),
                        et(s, "ThrowStatement")
                      );
                    case $:
                      if (
                        (t3(), (s.block = ef()), (s.handler = null), l === L)
                      ) {
                        var _ = t8();
                        t3(),
                          es(th),
                          (_.param = eS()),
                          w &&
                            tN(_.param.name) &&
                            k(
                              _.param.start,
                              "Binding " + _.param.name + " in strict mode"
                            ),
                          es(tu),
                          (_.guard = null),
                          (_.body = ef()),
                          (s.handler = et(_, "CatchClause"));
                      }
                      return (
                        (s.guardedHandlers = I),
                        (s.finalizer = en(D) ? ef() : null),
                        s.handler ||
                          s.finalizer ||
                          k(s.start, "Missing catch or finally clause"),
                        et(s, "TryStatement")
                      );
                    case G:
                      return t3(), eg(s), er(), et(s, "VariableDeclaration");
                    case J:
                      return (
                        t3(),
                        (s.test = ec()),
                        y.push(eh),
                        (s.body = el()),
                        y.pop(),
                        et(s, "WhileStatement")
                      );
                    case X:
                      return (
                        w && k(a, "'with' in strict mode"),
                        t3(),
                        (s.object = ec()),
                        (s.body = el()),
                        et(s, "WithStatement")
                      );
                    case ta:
                      return ef();
                    case tc:
                      return t3(), et(s, "EmptyStatement");
                    default:
                      var p = c,
                        x = ev();
                      if (!(r === A && "Identifier" === x.type && en(tf)))
                        return (
                          (s.expression = x), er(), et(s, "ExpressionStatement")
                        );
                      for (var h = 0; h < y.length; ++h)
                        y[h].name === p &&
                          k(x.start, "Label '" + p + "' is already declared");
                      var b = l.isLoop ? "loop" : l === Z ? "switch" : null;
                      return (
                        y.push({ name: p, kind: b }),
                        (s.body = el()),
                        y.pop(),
                        (s.label = x),
                        et(s, "LabeledStatement")
                      );
                  }
                }
                function ec() {
                  es(th);
                  var t = ev();
                  return es(tu), t;
                }
                function ef(t) {
                  var e,
                    n = t8(),
                    i = !0,
                    r = !1;
                  for (n.body = [], es(ta); !en(to); ) {
                    var s = el();
                    n.body.push(s),
                      i && t && ee(s) && ((e = r), t9((r = !0))),
                      (i = !1);
                  }
                  return r && !e && t9(!1), et(n, "BlockStatement");
                }
                function ed(t, e) {
                  return (
                    (t.init = e),
                    es(tc),
                    (t.test = l === tc ? null : ev()),
                    es(tc),
                    (t.update = l === tu ? null : ev()),
                    es(tu),
                    (t.body = el()),
                    y.pop(),
                    et(t, "ForStatement")
                  );
                }
                function e_(t, e) {
                  return (
                    (t.left = e),
                    (t.right = ev()),
                    es(tu),
                    (t.body = el()),
                    y.pop(),
                    et(t, "ForInStatement")
                  );
                }
                function eg(t, e) {
                  for (t.declarations = [], t.kind = "var"; ; ) {
                    var n = t8();
                    if (
                      ((n.id = eS()),
                      w &&
                        tN(n.id.name) &&
                        k(
                          n.id.start,
                          "Binding " + n.id.name + " in strict mode"
                        ),
                      (n.init = en(tv) ? ev(!0, e) : null),
                      t.declarations.push(et(n, "VariableDeclarator")),
                      !en(tl))
                    )
                      break;
                  }
                  return t;
                }
                function ev(t, e) {
                  var n = ep(e);
                  if (!t && l === tl) {
                    var i = t7(n);
                    for (i.expressions = [n]; en(tl); )
                      i.expressions.push(ep(e));
                    return et(i, "SequenceExpression");
                  }
                  return n;
                }
                function ep(t) {
                  var e = (function (t) {
                    var e = (function t(e, n, i) {
                      var r = l.binop;
                      if (null != r && (!i || l !== tn) && r > n) {
                        var s = t7(e);
                        (s.left = e), (s.operator = c);
                        var a = l;
                        return (
                          t3(),
                          (s.right = t(em(), r, i)),
                          t(
                            et(
                              s,
                              a === tw || a === tx
                                ? "LogicalExpression"
                                : "BinaryExpression"
                            ),
                            n,
                            i
                          )
                        );
                      }
                      return e;
                    })(em(), -1, t);
                    if (en(t_)) {
                      var n = t7(e);
                      return (
                        (n.test = e),
                        (n.consequent = ev(!0)),
                        es(tf),
                        (n.alternate = ev(!0, t)),
                        et(n, "ConditionalExpression")
                      );
                    }
                    return e;
                  })(t);
                  if (l.isAssign) {
                    var n = t7(e);
                    return (
                      (n.operator = c),
                      (n.left = e),
                      t3(),
                      (n.right = ep(t)),
                      eo(e),
                      et(n, "AssignmentExpression")
                    );
                  }
                  return e;
                }
                function em() {
                  if (l.prefix) {
                    var t = t8(),
                      e = l.isUpdate;
                    return (
                      (t.operator = c),
                      (t.prefix = !0),
                      (f = !0),
                      t3(),
                      (t.argument = em()),
                      e
                        ? eo(t.argument)
                        : w &&
                          "delete" === t.operator &&
                          "Identifier" === t.argument.type &&
                          k(t.start, "Deleting local variable in strict mode"),
                      et(t, e ? "UpdateExpression" : "UnaryExpression")
                    );
                  }
                  for (var n = ey(ew()); l.postfix && !ei(); ) {
                    var t = t7(n);
                    (t.operator = c),
                      (t.prefix = !1),
                      (t.argument = n),
                      eo(n),
                      t3(),
                      (n = et(t, "UpdateExpression"));
                  }
                  return n;
                }
                function ey(t, e) {
                  if (en(td)) {
                    var n = t7(t);
                    return (
                      (n.object = t),
                      (n.property = eS(!0)),
                      (n.computed = !1),
                      ey(et(n, "MemberExpression"), e)
                    );
                  }
                  if (en(tr)) {
                    var n = t7(t);
                    return (
                      (n.object = t),
                      (n.property = ev()),
                      (n.computed = !0),
                      es(ts),
                      ey(et(n, "MemberExpression"), e)
                    );
                  }
                  if (!(!e && en(th))) return t;
                  var n = t7(t);
                  return (
                    (n.callee = t),
                    (n.arguments = eC(tu, !1)),
                    ey(et(n, "CallExpression"), e)
                  );
                }
                function ew() {
                  switch (l) {
                    case Q:
                      var t,
                        i = t8();
                      return t3(), et(i, "ThisExpression");
                    case A:
                      return eS();
                    case P:
                    case M:
                    case T:
                      var i = t8();
                      return (
                        (i.value = c),
                        (i.raw = n.slice(a, o)),
                        t3(),
                        et(i, "Literal")
                      );
                    case Y:
                    case tt:
                    case te:
                      var i = t8();
                      return (
                        (i.value = l.atomValue),
                        (i.raw = l.keyword),
                        t3(),
                        et(i, "Literal")
                      );
                    case th:
                      var r = h,
                        s = a;
                      t3();
                      var f = ev();
                      return (
                        (f.start = s),
                        (f.end = o),
                        e.locations && ((f.loc.start = r), (f.loc.end = u)),
                        e.ranges && (f.range = [s, o]),
                        es(tu),
                        f
                      );
                    case tr:
                      var i = t8();
                      return (
                        t3(),
                        (i.elements = eC(ts, !0, !0)),
                        et(i, "ArrayExpression")
                      );
                    case ta:
                      return (function () {
                        var t = t8(),
                          n = !0,
                          i = !1;
                        for (t.properties = [], t3(); !en(to); ) {
                          if (n) n = !1;
                          else if ((es(tl), e.allowTrailingCommas && en(to)))
                            break;
                          var r,
                            s = { key: ex() },
                            a = !1;
                          if (
                            (en(tf)
                              ? ((s.value = ev(!0)), (r = s.kind = "init"))
                              : e.ecmaVersion >= 5 &&
                                  "Identifier" === s.key.type &&
                                  ("get" === s.key.name || "set" === s.key.name)
                                ? ((a = i = !0),
                                  (r = s.kind = s.key.name),
                                  (s.key = ex()),
                                  l !== th && ea(),
                                  (s.value = eb(t8(), !1)))
                                : ea(),
                            "Identifier" === s.key.type && (w || i))
                          )
                            for (var o = 0; o < t.properties.length; ++o) {
                              var h = t.properties[o];
                              if (h.key.name === s.key.name) {
                                var u =
                                  r == h.kind ||
                                  (a && "init" === h.kind) ||
                                  ("init" === r &&
                                    ("get" === h.kind || "set" === h.kind));
                                u &&
                                  !w &&
                                  "init" === r &&
                                  "init" === h.kind &&
                                  (u = !1),
                                  u &&
                                    k(s.key.start, "Redefinition of property");
                              }
                            }
                          t.properties.push(s);
                        }
                        return et(t, "ObjectExpression");
                      })();
                    case V:
                      var i = t8();
                      return t3(), eb(i, !1);
                    case K:
                      return (
                        (t = t8()),
                        t3(),
                        (t.callee = ey(ew(), !0)),
                        en(th) ? (t.arguments = eC(tu, !1)) : (t.arguments = I),
                        et(t, "NewExpression")
                      );
                    default:
                      ea();
                  }
                }
                function ex() {
                  return l === P || l === M ? ew() : eS(!0);
                }
                function eb(t, e) {
                  l === A ? (t.id = eS()) : e ? ea() : (t.id = null),
                    (t.params = []);
                  var n = !0;
                  for (es(th); !en(tu); )
                    n ? (n = !1) : es(tl), t.params.push(eS());
                  var i = m,
                    r = y;
                  if (
                    ((m = !0),
                    (y = []),
                    (t.body = ef(!0)),
                    (m = i),
                    (y = r),
                    w || (t.body.body.length && ee(t.body.body[0])))
                  )
                    for (var s = t.id ? -1 : 0; s < t.params.length; ++s) {
                      var a = s < 0 ? t.id : t.params[s];
                      if (
                        ((tL(a.name) || tN(a.name)) &&
                          k(
                            a.start,
                            "Defining '" + a.name + "' in strict mode"
                          ),
                        s >= 0)
                      )
                        for (var o = 0; o < s; ++o)
                          a.name === t.params[o].name &&
                            k(a.start, "Argument name clash in strict mode");
                    }
                  return et(
                    t,
                    e ? "FunctionDeclaration" : "FunctionExpression"
                  );
                }
                function eC(t, n, i) {
                  for (var r = [], s = !0; !en(t); ) {
                    if (s) s = !1;
                    else if ((es(tl), n && e.allowTrailingCommas && en(t)))
                      break;
                    i && l === tl ? r.push(null) : r.push(ev(!0));
                  }
                  return r;
                }
                function eS(t) {
                  var i = t8();
                  return (
                    t && "everywhere" == e.forbidReserved && (t = !1),
                    l === A
                      ? (!t &&
                          ((e.forbidReserved &&
                            (3 === e.ecmaVersion ? tz : tE)(c)) ||
                            (w && tL(c))) &&
                          -1 == n.slice(a, o).indexOf("\\") &&
                          k(a, "The keyword '" + c + "' is reserved"),
                        (i.name = c))
                      : t && l.keyword
                        ? (i.name = l.keyword)
                        : ea(),
                    (f = !1),
                    t3(),
                    et(i, "Identifier")
                  );
                }
              }),
              d.version || (d = null));
            var g = {
                "+": "__add",
                "-": "__subtract",
                "*": "__multiply",
                "/": "__divide",
                "%": "__modulo",
                "==": "__equals",
                "!=": "__equals",
              },
              v = { "-": "__negate", "+": "__self" },
              p = l.each(
                [
                  "add",
                  "subtract",
                  "multiply",
                  "divide",
                  "modulo",
                  "equals",
                  "negate",
                ],
                function (t) {
                  this["__" + t] = "#" + t;
                },
                {
                  __self: function () {
                    return this;
                  },
                }
              );
            function y(t, e, n) {
              var i = g[e];
              if (t && t[i]) {
                var r = t[i](n);
                return "!=" === e ? !r : r;
              }
              switch (e) {
                case "+":
                  return t + n;
                case "-":
                  return t - n;
                case "*":
                  return t * n;
                case "/":
                  return t / n;
                case "%":
                  return t % n;
                case "==":
                  return t == n;
                case "!=":
                  return t != n;
              }
            }
            function x(t, e) {
              var n = v[t];
              if (e && e[n]) return e[n]();
              switch (t) {
                case "+":
                  return +e;
                case "-":
                  return -e;
              }
            }
            function b(t, e) {
              if (!t) return "";
              var n = [];
              function i(t) {
                for (var e = 0, i = n.length; e < i; e++) {
                  var r = n[e];
                  if (r[0] >= t) break;
                  t += r[1];
                }
                return t;
              }
              function r(e) {
                return t.substring(i(e.range[0]), i(e.range[1]));
              }
              function s(e, r) {
                for (
                  var s = i(e.range[0]),
                    a = i(e.range[1]),
                    o = 0,
                    h = n.length - 1;
                  h >= 0;
                  h--
                )
                  if (s > n[h][0]) {
                    o = h + 1;
                    break;
                  }
                n.splice(o, 0, [s, r.length - a + s]),
                  (t = t.substring(0, s) + r + t.substring(a));
              }
              var o,
                l = (e = e || {}).url || "",
                c = e.sourceMaps,
                f = e.paperFeatures || {},
                d = e.source || t,
                p = e.offset || 0,
                m = tf.agent,
                y = m.versionNumber,
                w = !1,
                x = /\r\n|\n|\r/gm;
              if (
                c &&
                ((m.chrome && y >= 30) ||
                  (m.webkit && y >= 537.76) ||
                  (m.firefox && y >= 23) ||
                  m.node)
              ) {
                if (m.node) p -= 2;
                else if (h && l && !h.location.href.indexOf(l)) {
                  var b = u.getElementsByTagName("html")[0].innerHTML;
                  p = b.substr(0, b.indexOf(t) + 1).match(x).length + 1;
                }
                var C = [
                  "AA" +
                    (function (t) {
                      var e = "";
                      for (
                        t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0);
                        t || !e;
                      ) {
                        var n = 31 & t;
                        (t >>= 5) && (n |= 32),
                          (e +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                              n
                            ]);
                      }
                      return e;
                    })(
                      (w =
                        p > 0 &&
                        !(
                          (m.chrome && y >= 36) ||
                          (m.safari && y >= 600) ||
                          (m.firefox && y >= 40) ||
                          m.node
                        ))
                        ? 0
                        : p
                    ) +
                    "A",
                ];
                (C.length = (t.match(x) || []).length + 1 + (w ? p : 0)),
                  (o = {
                    version: 3,
                    file: l,
                    names: [],
                    mappings: C.join(";AACA"),
                    sourceRoot: "",
                    sources: [l],
                    sourcesContent: [d],
                  });
              }
              return (
                (!1 !== f.operatorOverloading || !1 !== f.moduleExports) &&
                  (function e(n, a, o) {
                    if (n) {
                      for (var h in n)
                        if ("range" !== h && "loc" !== h) {
                          var u = n[h];
                          if (Array.isArray(u))
                            for (var l = 0, c = u.length; l < c; l++)
                              e(u[l], n, o);
                          else u && "object" == typeof u && e(u, n, o);
                        }
                      !1 !== o.operatorOverloading &&
                        (function (e, n) {
                          switch (e.type) {
                            case "UnaryExpression":
                              if (
                                e.operator in v &&
                                "Literal" !== e.argument.type
                              ) {
                                var a = r(e.argument);
                                s(e, '$__("' + e.operator + '", ' + a + ")");
                              }
                              break;
                            case "BinaryExpression":
                              if (
                                e.operator in g &&
                                "Literal" !== e.left.type
                              ) {
                                var o,
                                  h,
                                  u = r(e.left),
                                  l = r(e.right),
                                  c =
                                    ((o = e.left),
                                    (h = e.right),
                                    t.substring(i(o.range[1]), i(h.range[0]))),
                                  f = e.operator;
                                s(
                                  e,
                                  "__$__(" +
                                    u +
                                    "," +
                                    c.replace(RegExp("\\" + f), '"' + f + '"') +
                                    ", " +
                                    l +
                                    ")"
                                );
                              }
                              break;
                            case "UpdateExpression":
                            case "AssignmentExpression":
                              var d = n && n.type;
                              if (
                                !(
                                  "ForStatement" === d ||
                                  ("BinaryExpression" === d &&
                                    /^[=!<>]/.test(n.operator)) ||
                                  ("MemberExpression" === d && n.computed)
                                )
                              ) {
                                if ("UpdateExpression" === e.type) {
                                  var a = r(e.argument),
                                    _ =
                                      "__$__(" +
                                      a +
                                      ', "' +
                                      e.operator[0] +
                                      '", 1)',
                                    p = a + " = " + _;
                                  e.prefix
                                    ? (p = "(" + p + ")")
                                    : ("AssignmentExpression" === d ||
                                        "VariableDeclarator" === d ||
                                        "BinaryExpression" === d) &&
                                      (r(n.left || n.id) === a && (p = _),
                                      (p = a + "; " + p)),
                                    s(e, p);
                                } else if (
                                  /^.=$/.test(e.operator) &&
                                  "Literal" !== e.left.type
                                ) {
                                  var u = r(e.left),
                                    l = r(e.right),
                                    _ =
                                      u +
                                      " = __$__(" +
                                      u +
                                      ', "' +
                                      e.operator[0] +
                                      '", ' +
                                      l +
                                      ")";
                                  s(
                                    e,
                                    /^\(.*\)$/.test(r(e)) ? "(" + _ + ")" : _
                                  );
                                }
                              }
                          }
                        })(n, a),
                        !1 !== o.moduleExports &&
                          (function (t) {
                            switch (t.type) {
                              case "ExportDefaultDeclaration":
                                s(
                                  { range: [t.start, t.declaration.start] },
                                  "module.exports = "
                                );
                                break;
                              case "ExportNamedDeclaration":
                                var e = t.declaration,
                                  n = t.specifiers;
                                if (e) {
                                  var i = e.declarations;
                                  i &&
                                    (i.forEach(function (t) {
                                      s(t, "module.exports." + r(t));
                                    }),
                                    s(
                                      {
                                        range: [
                                          t.start,
                                          e.start + e.kind.length,
                                        ],
                                      },
                                      ""
                                    ));
                                } else if (n) {
                                  var a = n
                                    .map(function (t) {
                                      var e = r(t);
                                      return (
                                        "module.exports." + e + " = " + e + "; "
                                      );
                                    })
                                    .join("");
                                  a && s(t, a);
                                }
                            }
                          })(n);
                    }
                  })(
                    _(t, {
                      ranges: !0,
                      preserveParens: !0,
                      sourceType: "module",
                    }),
                    null,
                    f
                  ),
                o &&
                  (w && (t = Array(p + 1).join("\n") + t),
                  /^(inline|both)$/.test(c) &&
                    (t +=
                      "\n//# sourceMappingURL=data:application/json;base64," +
                      a.btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                  (t += "\n//# sourceURL=" + (l || "paperscript"))),
                { url: l, source: d, code: t, map: o }
              );
            }
            function C(t, e, n) {
              tf = e;
              var i,
                r = e.getView(),
                s =
                  /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(
                    t
                  ) && !/\bnew\s+Tool\b/.test(t)
                    ? new ts()
                    : null,
                a = s ? s._events : [],
                o = ["onFrame", "onResize"].concat(a),
                h = [],
                c = [];
              function f(e, n) {
                for (var i in e)
                  (n || !/^_/.test(i)) &&
                    RegExp(
                      "([\\b\\s\\W]|^)" + i.replace(/\$/g, "\\$") + "\\b"
                    ).test(t) &&
                    (h.push(i), c.push(e[i]));
              }
              (t = ("object" == typeof t ? t : b(t, n)).code),
                f({ __$__: y, $__: x, paper: e, tool: s }, !0),
                f(e),
                (t = "var module = { exports: {} }; " + t);
              var d = l
                .each(
                  o,
                  function (e) {
                    RegExp("\\s+" + e + "\\b").test(t) &&
                      (h.push(e),
                      this.push("module.exports." + e + " = " + e + ";"));
                  },
                  []
                )
                .join("\n");
              d && (t += "\n" + d), (t += "\nreturn module.exports;");
              var _ = tf.agent;
              if (u && (_.chrome || (_.firefox && _.versionNumber < 40))) {
                var g = u.createElement("script"),
                  v = u.head || u.getElementsByTagName("head")[0];
                _.firefox && (t = "\n" + t),
                  g.appendChild(
                    u.createTextNode(
                      "document.__paperscript__ = function(" +
                        h +
                        ") {" +
                        t +
                        "\n}"
                    )
                  ),
                  v.appendChild(g),
                  (i = u.__paperscript__),
                  delete u.__paperscript__,
                  v.removeChild(g);
              } else i = Function(h, t);
              var d = i && i.apply(e, c),
                p = d || {};
              return (
                l.each(a, function (t) {
                  var e = p[t];
                  e && (s[t] = e);
                }),
                r &&
                  (p.onResize && r.setOnResize(p.onResize),
                  r.emit("resize", { size: r.size, delta: new m() }),
                  p.onFrame && r.setOnFrame(p.onFrame),
                  r.requestUpdate()),
                d
              );
            }
            function S(t) {
              if (
                /^text\/(?:x-|)paperscript$/.test(t.type) &&
                "true" !== f.getAttribute(t, "ignore")
              ) {
                var e = f.getAttribute(t, "canvas"),
                  n = u.getElementById(e),
                  i = t.src || t.getAttribute("data-src"),
                  r = f.hasAttribute(t, "async"),
                  s = "data-paper-scope";
                if (!n)
                  throw Error('Unable to find canvas with id "' + e + '"');
                var a = f.get(n.getAttribute(s)) || new f().setup(n);
                return (
                  n.setAttribute(s, a._id),
                  i
                    ? to.request({
                        url: i,
                        async: r,
                        mimeType: "text/plain",
                        onLoad: function (t) {
                          C(t, a, i);
                        },
                      })
                    : C(t.innerHTML, a, t.baseURI),
                  t.setAttribute("data-paper-ignore", "true"),
                  a
                );
              }
            }
            function k() {
              l.each(u && u.getElementsByTagName("script"), S);
            }
            return (
              m.inject(p),
              w.inject(p),
              W.inject(p),
              h &&
                ("complete" === u.readyState
                  ? setTimeout(k)
                  : K.add(h, { load: k })),
              {
                compile: b,
                execute: C,
                load: function (t) {
                  return t ? S(t) : k();
                },
                parse: _,
                calculateBinary: y,
                calculateUnary: x,
              }
            );
          }.call(this));
        var tf = new (f.inject(l.exports, {
          Base: l,
          Numerical: v,
          Key: tn,
          DomEvent: K,
          DomElement: X,
          document: u,
          window: h,
          Symbol: E,
          PlacedSymbol: z,
        }))();
        return (
          tf.agent.node && n(16094)(tf),
          o !== (s = "function" == typeof (r = tf) ? r.call(e, n, e, t) : r) &&
            (t.exports = s),
          tf
        );
      }).call(this, "object" == typeof self ? self : null);
    },
  },
]);
//# sourceMappingURL=b17906d7.76bb5eb05a2d9061.js.map
