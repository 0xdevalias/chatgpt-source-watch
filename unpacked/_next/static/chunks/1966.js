(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1966],
  {
    48787: function (t) {
      function e(t, e, r, o) {
        var i =
            null == o || "number" == typeof o || "boolean" == typeof o
              ? o
              : r(o),
          n = e.get(i);
        return void 0 === n && ((n = t.call(this, o)), e.set(i, n)), n;
      }
      function r(t, e, r) {
        var o = Array.prototype.slice.call(arguments, 3),
          i = r(o),
          n = e.get(i);
        return void 0 === n && ((n = t.apply(this, o)), e.set(i, n)), n;
      }
      function o() {
        return JSON.stringify(arguments);
      }
      function i() {
        this.cache = Object.create(null);
      }
      (i.prototype.has = function (t) {
        return t in this.cache;
      }),
        (i.prototype.get = function (t) {
          return this.cache[t];
        }),
        (i.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var n = {
        create: function () {
          return new i();
        },
      };
      (t.exports = function (t, i) {
        var s = i && i.cache ? i.cache : n,
          a = i && i.serializer ? i.serializer : o;
        return (
          i && i.strategy
            ? i.strategy
            : function (t, o) {
                var i,
                  n,
                  s = 1 === t.length ? e : r;
                return (
                  (i = o.cache.create()),
                  (n = o.serializer),
                  s.bind(this, t, i, n)
                );
              }
        )(t, { cache: s, serializer: a });
      }),
        (t.exports.strategies = {
          variadic: function (t, e) {
            var o, i;
            return (
              (o = e.cache.create()), (i = e.serializer), r.bind(this, t, o, i)
            );
          },
          monadic: function (t, r) {
            var o, i;
            return (
              (o = r.cache.create()), (i = r.serializer), e.bind(this, t, o, i)
            );
          },
        });
    },
    9961: function (t, e, r) {
      "use strict";
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
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "DraggableCore", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        (e.default = void 0);
      var i = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== o(t) && "function" != typeof t))
            return { default: t };
          var r = g(e);
          if (r && r.has(t)) return r.get(t);
          var i = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var a = n ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, s, a)
                : (i[s] = t[s]);
            }
          return (i.default = t), r && r.set(t, i), i;
        })(r(70079)),
        n = d(r(39519)),
        s = d(r(99581)),
        a = d(r(19841)),
        l = r(83315),
        u = r(50334),
        p = r(93185),
        h = d(r(58174)),
        c = d(r(1720)),
        f = [
          "axis",
          "bounds",
          "children",
          "defaultPosition",
          "defaultClassName",
          "defaultClassNameDragging",
          "defaultClassNameDragged",
          "position",
          "positionOffset",
          "scale",
        ];
      function d(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function g(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          r = new WeakMap();
        return (g = function (t) {
          return t ? r : e;
        })(t);
      }
      function b() {
        return (b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
        }
        return t;
      }
      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = Array(e); r < e; r++) o[r] = t[r];
        return o;
      }
      function w(t, e) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function S(t, e) {
        return (S =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function x(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function z(t) {
        return (z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function D(t, e, r) {
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
      var O = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && S(t, e);
        })(d, t);
        var e,
          r,
          n,
          p =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = z(d);
              if (e) {
                var i = z(this).constructor;
                t = Reflect.construct(r, arguments, i);
              } else t = r.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === o(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return x(t);
              })(this, t);
            });
        function d(t) {
          var e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, d),
            D(x((e = p.call(this, t))), "onDragStart", function (t, r) {
              if (
                ((0, c.default)("Draggable: onDragStart: %j", r),
                !1 === e.props.onStart(t, (0, u.createDraggableData)(x(e), r)))
              )
                return !1;
              e.setState({ dragging: !0, dragged: !0 });
            }),
            D(x(e), "onDrag", function (t, r) {
              if (!e.state.dragging) return !1;
              (0, c.default)("Draggable: onDrag: %j", r);
              var o = (0, u.createDraggableData)(x(e), r),
                i = { x: o.x, y: o.y };
              if (e.props.bounds) {
                var n,
                  s = i.x,
                  a = i.y;
                (i.x += e.state.slackX), (i.y += e.state.slackY);
                var l =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((n = (0, u.getBoundPosition)(x(e), i.x, i.y))) ||
                    (function (t, e) {
                      var r,
                        o,
                        i =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                      if (null != i) {
                        var n = [],
                          s = !0,
                          a = !1;
                        try {
                          for (
                            i = i.call(t);
                            !(s = (r = i.next()).done) &&
                            (n.push(r.value), !e || n.length !== e);
                            s = !0
                          );
                        } catch (t) {
                          (a = !0), (o = t);
                        } finally {
                          try {
                            s || null == i.return || i.return();
                          } finally {
                            if (a) throw o;
                          }
                        }
                        return n;
                      }
                    })(n, 2) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return v(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === r &&
                            t.constructor &&
                            (r = t.constructor.name),
                          "Map" === r || "Set" === r)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                          return v(t, e);
                      }
                    })(n, 2) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(),
                  p = l[0],
                  h = l[1];
                (i.x = p),
                  (i.y = h),
                  (i.slackX = e.state.slackX + (s - i.x)),
                  (i.slackY = e.state.slackY + (a - i.y)),
                  (o.x = i.x),
                  (o.y = i.y),
                  (o.deltaX = i.x - e.state.x),
                  (o.deltaY = i.y - e.state.y);
              }
              if (!1 === e.props.onDrag(t, o)) return !1;
              e.setState(i);
            }),
            D(x(e), "onDragStop", function (t, r) {
              if (
                !e.state.dragging ||
                !1 === e.props.onStop(t, (0, u.createDraggableData)(x(e), r))
              )
                return !1;
              (0, c.default)("Draggable: onDragStop: %j", r);
              var o = { dragging: !1, slackX: 0, slackY: 0 };
              if (e.props.position) {
                var i = e.props.position,
                  n = i.x,
                  s = i.y;
                (o.x = n), (o.y = s);
              }
              e.setState(o);
            }),
            (e.state = {
              dragging: !1,
              dragged: !1,
              x: t.position ? t.position.x : t.defaultPosition.x,
              y: t.position ? t.position.y : t.defaultPosition.y,
              prevPropsPosition: m({}, t.position),
              slackX: 0,
              slackY: 0,
              isElementSVG: !1,
            }),
            t.position &&
              !(t.onDrag || t.onStop) &&
              console.warn(
                "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
              ),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                void 0 !== window.SVGElement &&
                  this.findDOMNode() instanceof window.SVGElement &&
                  this.setState({ isElementSVG: !0 });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.setState({ dragging: !1 });
              },
            },
            {
              key: "findDOMNode",
              value: function () {
                var t, e, r;
                return null !==
                  (t =
                    null === (e = this.props) || void 0 === e
                      ? void 0
                      : null === (r = e.nodeRef) || void 0 === r
                        ? void 0
                        : r.current) && void 0 !== t
                  ? t
                  : s.default.findDOMNode(this);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = (e.axis, e.bounds, e.children),
                  o = e.defaultPosition,
                  n = e.defaultClassName,
                  s = e.defaultClassNameDragging,
                  p = e.defaultClassNameDragged,
                  c = e.position,
                  d = e.positionOffset,
                  g =
                    (e.scale,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        o,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            o,
                            i = {},
                            n = Object.keys(t);
                          for (o = 0; o < n.length; o++)
                            (r = n[o]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        for (o = 0; o < n.length; o++)
                          (r = n[o]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (i[r] = t[r]);
                      }
                      return i;
                    })(e, f)),
                  y = {},
                  v = null,
                  w = !c || this.state.dragging,
                  S = c || o,
                  x = {
                    x: (0, u.canDragX)(this) && w ? this.state.x : S.x,
                    y: (0, u.canDragY)(this) && w ? this.state.y : S.y,
                  };
                this.state.isElementSVG
                  ? (v = (0, l.createSVGTransform)(x, d))
                  : (y = (0, l.createCSSTransform)(x, d));
                var z = (0, a.default)(
                  r.props.className || "",
                  n,
                  (D((t = {}), s, this.state.dragging),
                  D(t, p, this.state.dragged),
                  t)
                );
                return i.createElement(
                  h.default,
                  b({}, g, {
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop,
                  }),
                  i.cloneElement(i.Children.only(r), {
                    className: z,
                    style: m(m({}, r.props.style), y),
                    transform: v,
                  })
                );
              },
            },
          ]),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                var r = t.position,
                  o = e.prevPropsPosition;
                return r && (!o || r.x !== o.x || r.y !== o.y)
                  ? ((0, c.default)("Draggable: getDerivedStateFromProps %j", {
                      position: r,
                      prevPropsPosition: o,
                    }),
                    { x: r.x, y: r.y, prevPropsPosition: m({}, r) })
                  : null;
              },
            },
          ]),
          r && w(d.prototype, r),
          n && w(d, n),
          Object.defineProperty(d, "prototype", { writable: !1 }),
          d
        );
      })(i.Component);
      (e.default = O),
        D(O, "displayName", "Draggable"),
        D(
          O,
          "propTypes",
          m(
            m({}, h.default.propTypes),
            {},
            {
              axis: n.default.oneOf(["both", "x", "y", "none"]),
              bounds: n.default.oneOfType([
                n.default.shape({
                  left: n.default.number,
                  right: n.default.number,
                  top: n.default.number,
                  bottom: n.default.number,
                }),
                n.default.string,
                n.default.oneOf([!1]),
              ]),
              defaultClassName: n.default.string,
              defaultClassNameDragging: n.default.string,
              defaultClassNameDragged: n.default.string,
              defaultPosition: n.default.shape({
                x: n.default.number,
                y: n.default.number,
              }),
              positionOffset: n.default.shape({
                x: n.default.oneOfType([n.default.number, n.default.string]),
                y: n.default.oneOfType([n.default.number, n.default.string]),
              }),
              position: n.default.shape({
                x: n.default.number,
                y: n.default.number,
              }),
              className: p.dontSetMe,
              style: p.dontSetMe,
              transform: p.dontSetMe,
            }
          )
        ),
        D(
          O,
          "defaultProps",
          m(
            m({}, h.default.defaultProps),
            {},
            {
              axis: "both",
              bounds: !1,
              defaultClassName: "react-draggable",
              defaultClassNameDragging: "react-draggable-dragging",
              defaultClassNameDragged: "react-draggable-dragged",
              defaultPosition: { x: 0, y: 0 },
              scale: 1,
            }
          )
        );
    },
    58174: function (t, e, r) {
      "use strict";
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
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== o(t) && "function" != typeof t))
            return { default: t };
          var r = c(e);
          if (r && r.has(t)) return r.get(t);
          var i = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var a = n ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, s, a)
                : (i[s] = t[s]);
            }
          return (i.default = t), r && r.set(t, i), i;
        })(r(70079)),
        n = h(r(39519)),
        s = h(r(99581)),
        a = r(83315),
        l = r(50334),
        u = r(93185),
        p = h(r(1720));
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          r = new WeakMap();
        return (c = function (t) {
          return t ? r : e;
        })(t);
      }
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r,
              o,
              i =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != i) {
              var n = [],
                s = !0,
                a = !1;
              try {
                for (
                  i = i.call(t);
                  !(s = (r = i.next()).done) &&
                  (n.push(r.value), !e || n.length !== e);
                  s = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  s || null == i.return || i.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return d(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return d(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = Array(e); r < e; r++) o[r] = t[r];
        return o;
      }
      function g(t, e) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function b(t, e) {
        return (b =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function y(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function m(t) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function v(t, e, r) {
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
      var w = {
          touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
          mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
        },
        S = w.mouse,
        x = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && b(t, e);
          })(h, t);
          var e,
            r,
            n,
            u =
              ((e = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  r = m(h);
                if (e) {
                  var i = m(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return (function (t, e) {
                  if (e && ("object" === o(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return y(t);
                })(this, t);
              });
          function h() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, h);
            for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              v(y((t = u.call.apply(u, [this].concat(r)))), "state", {
                dragging: !1,
                lastX: NaN,
                lastY: NaN,
                touchIdentifier: null,
              }),
              v(y(t), "mounted", !1),
              v(y(t), "handleDragStart", function (e) {
                if (
                  (t.props.onMouseDown(e),
                  !t.props.allowAnyClick &&
                    "number" == typeof e.button &&
                    0 !== e.button)
                )
                  return !1;
                var r = t.findDOMNode();
                if (!r || !r.ownerDocument || !r.ownerDocument.body)
                  throw Error("<DraggableCore> not mounted on DragStart!");
                var o = r.ownerDocument;
                if (
                  !(
                    t.props.disabled ||
                    !(e.target instanceof o.defaultView.Node) ||
                    (t.props.handle &&
                      !(0, a.matchesSelectorAndParentsTo)(
                        e.target,
                        t.props.handle,
                        r
                      )) ||
                    (t.props.cancel &&
                      (0, a.matchesSelectorAndParentsTo)(
                        e.target,
                        t.props.cancel,
                        r
                      ))
                  )
                ) {
                  "touchstart" === e.type && e.preventDefault();
                  var i = (0, a.getTouchIdentifier)(e);
                  t.setState({ touchIdentifier: i });
                  var n = (0, l.getControlPosition)(e, i, y(t));
                  if (null != n) {
                    var s = n.x,
                      u = n.y,
                      h = (0, l.createCoreData)(y(t), s, u);
                    (0, p.default)("DraggableCore: handleDragStart: %j", h),
                      (0, p.default)("calling", t.props.onStart),
                      !1 !== t.props.onStart(e, h) &&
                        !1 !== t.mounted &&
                        (t.props.enableUserSelectHack &&
                          (0, a.addUserSelectStyles)(o),
                        t.setState({ dragging: !0, lastX: s, lastY: u }),
                        (0, a.addEvent)(o, S.move, t.handleDrag),
                        (0, a.addEvent)(o, S.stop, t.handleDragStop));
                  }
                }
              }),
              v(y(t), "handleDrag", function (e) {
                var r = (0, l.getControlPosition)(
                  e,
                  t.state.touchIdentifier,
                  y(t)
                );
                if (null != r) {
                  var o = r.x,
                    i = r.y;
                  if (Array.isArray(t.props.grid)) {
                    var n = o - t.state.lastX,
                      s = i - t.state.lastY,
                      a = f((0, l.snapToGrid)(t.props.grid, n, s), 2);
                    if (((n = a[0]), (s = a[1]), !n && !s)) return;
                    (o = t.state.lastX + n), (i = t.state.lastY + s);
                  }
                  var u = (0, l.createCoreData)(y(t), o, i);
                  if (
                    ((0, p.default)("DraggableCore: handleDrag: %j", u),
                    !1 === t.props.onDrag(e, u) || !1 === t.mounted)
                  ) {
                    try {
                      t.handleDragStop(new MouseEvent("mouseup"));
                    } catch (e) {
                      var h = document.createEvent("MouseEvents");
                      h.initMouseEvent(
                        "mouseup",
                        !0,
                        !0,
                        window,
                        0,
                        0,
                        0,
                        0,
                        0,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.handleDragStop(h);
                    }
                    return;
                  }
                  t.setState({ lastX: o, lastY: i });
                }
              }),
              v(y(t), "handleDragStop", function (e) {
                if (t.state.dragging) {
                  var r = (0, l.getControlPosition)(
                    e,
                    t.state.touchIdentifier,
                    y(t)
                  );
                  if (null != r) {
                    var o = r.x,
                      i = r.y;
                    if (Array.isArray(t.props.grid)) {
                      var n = o - t.state.lastX || 0,
                        s = i - t.state.lastY || 0,
                        u = f((0, l.snapToGrid)(t.props.grid, n, s), 2);
                      (n = u[0]),
                        (s = u[1]),
                        (o = t.state.lastX + n),
                        (i = t.state.lastY + s);
                    }
                    var h = (0, l.createCoreData)(y(t), o, i);
                    if (!1 === t.props.onStop(e, h) || !1 === t.mounted)
                      return !1;
                    var c = t.findDOMNode();
                    c &&
                      t.props.enableUserSelectHack &&
                      (0, a.removeUserSelectStyles)(c.ownerDocument),
                      (0, p.default)("DraggableCore: handleDragStop: %j", h),
                      t.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                      c &&
                        ((0, p.default)("DraggableCore: Removing handlers"),
                        (0, a.removeEvent)(
                          c.ownerDocument,
                          S.move,
                          t.handleDrag
                        ),
                        (0, a.removeEvent)(
                          c.ownerDocument,
                          S.stop,
                          t.handleDragStop
                        ));
                  }
                }
              }),
              v(y(t), "onMouseDown", function (e) {
                return (S = w.mouse), t.handleDragStart(e);
              }),
              v(y(t), "onMouseUp", function (e) {
                return (S = w.mouse), t.handleDragStop(e);
              }),
              v(y(t), "onTouchStart", function (e) {
                return (S = w.touch), t.handleDragStart(e);
              }),
              v(y(t), "onTouchEnd", function (e) {
                return (S = w.touch), t.handleDragStop(e);
              }),
              t
            );
          }
          return (
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  this.mounted = !0;
                  var t = this.findDOMNode();
                  t &&
                    (0, a.addEvent)(t, w.touch.start, this.onTouchStart, {
                      passive: !1,
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                  var t = this.findDOMNode();
                  if (t) {
                    var e = t.ownerDocument;
                    (0, a.removeEvent)(e, w.mouse.move, this.handleDrag),
                      (0, a.removeEvent)(e, w.touch.move, this.handleDrag),
                      (0, a.removeEvent)(e, w.mouse.stop, this.handleDragStop),
                      (0, a.removeEvent)(e, w.touch.stop, this.handleDragStop),
                      (0, a.removeEvent)(t, w.touch.start, this.onTouchStart, {
                        passive: !1,
                      }),
                      this.props.enableUserSelectHack &&
                        (0, a.removeUserSelectStyles)(e);
                  }
                },
              },
              {
                key: "findDOMNode",
                value: function () {
                  var t, e, r;
                  return null !== (t = this.props) && void 0 !== t && t.nodeRef
                    ? null === (e = this.props) || void 0 === e
                      ? void 0
                      : null === (r = e.nodeRef) || void 0 === r
                        ? void 0
                        : r.current
                    : s.default.findDOMNode(this);
                },
              },
              {
                key: "render",
                value: function () {
                  return i.cloneElement(i.Children.only(this.props.children), {
                    onMouseDown: this.onMouseDown,
                    onMouseUp: this.onMouseUp,
                    onTouchEnd: this.onTouchEnd,
                  });
                },
              },
            ]),
            g(h.prototype, r),
            n && g(h, n),
            Object.defineProperty(h, "prototype", { writable: !1 }),
            h
          );
        })(i.Component);
      (e.default = x),
        v(x, "displayName", "DraggableCore"),
        v(x, "propTypes", {
          allowAnyClick: n.default.bool,
          disabled: n.default.bool,
          enableUserSelectHack: n.default.bool,
          offsetParent: function (t, e) {
            if (t[e] && 1 !== t[e].nodeType)
              throw Error("Draggable's offsetParent must be a DOM Node.");
          },
          grid: n.default.arrayOf(n.default.number),
          handle: n.default.string,
          cancel: n.default.string,
          nodeRef: n.default.object,
          onStart: n.default.func,
          onDrag: n.default.func,
          onStop: n.default.func,
          onMouseDown: n.default.func,
          scale: n.default.number,
          className: u.dontSetMe,
          style: u.dontSetMe,
          transform: u.dontSetMe,
        }),
        v(x, "defaultProps", {
          allowAnyClick: !1,
          disabled: !1,
          enableUserSelectHack: !0,
          onStart: function () {},
          onDrag: function () {},
          onStop: function () {},
          onMouseDown: function () {},
          scale: 1,
        });
    },
    59349: function (t, e, r) {
      "use strict";
      var o = r(9961),
        i = o.default,
        n = o.DraggableCore;
      (t.exports = i), (t.exports.default = i), (t.exports.DraggableCore = n);
    },
    83315: function (t, e, r) {
      "use strict";
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
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addClassName = f),
        (e.addEvent = function (t, e, r, o) {
          if (t) {
            var i = l({ capture: !0 }, o);
            t.addEventListener
              ? t.addEventListener(e, r, i)
              : t.attachEvent
                ? t.attachEvent("on" + e, r)
                : (t["on" + e] = r);
          }
        }),
        (e.addUserSelectStyles = function (t) {
          if (t) {
            var e = t.getElementById("react-draggable-style-el");
            e ||
              (((e = t.createElement("style")).type = "text/css"),
              (e.id = "react-draggable-style-el"),
              (e.innerHTML =
                ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
              (e.innerHTML +=
                ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
              t.getElementsByTagName("head")[0].appendChild(e)),
              t.body && f(t.body, "react-draggable-transparent-selection");
          }
        }),
        (e.createCSSTransform = function (t, e) {
          var r = c(t, e, "px");
          return u({}, (0, n.browserPrefixToKey)("transform", n.default), r);
        }),
        (e.createSVGTransform = function (t, e) {
          return c(t, e, "");
        }),
        (e.getTouch = function (t, e) {
          return (
            (t.targetTouches &&
              (0, i.findInArray)(t.targetTouches, function (t) {
                return e === t.identifier;
              })) ||
            (t.changedTouches &&
              (0, i.findInArray)(t.changedTouches, function (t) {
                return e === t.identifier;
              }))
          );
        }),
        (e.getTouchIdentifier = function (t) {
          return t.targetTouches && t.targetTouches[0]
            ? t.targetTouches[0].identifier
            : t.changedTouches && t.changedTouches[0]
              ? t.changedTouches[0].identifier
              : void 0;
        }),
        (e.getTranslation = c),
        (e.innerHeight = function (t) {
          var e = t.clientHeight,
            r = t.ownerDocument.defaultView.getComputedStyle(t);
          return (
            (e -= (0, i.int)(r.paddingTop)), (e -= (0, i.int)(r.paddingBottom))
          );
        }),
        (e.innerWidth = function (t) {
          var e = t.clientWidth,
            r = t.ownerDocument.defaultView.getComputedStyle(t);
          return (
            (e -= (0, i.int)(r.paddingLeft)), (e -= (0, i.int)(r.paddingRight))
          );
        }),
        (e.matchesSelector = h),
        (e.matchesSelectorAndParentsTo = function (t, e, r) {
          var o = t;
          do {
            if (h(o, e)) return !0;
            if (o === r) break;
            o = o.parentNode;
          } while (o);
          return !1;
        }),
        (e.offsetXYFromParent = function (t, e, r) {
          var o =
            e === e.ownerDocument.body
              ? { left: 0, top: 0 }
              : e.getBoundingClientRect();
          return {
            x: (t.clientX + e.scrollLeft - o.left) / r,
            y: (t.clientY + e.scrollTop - o.top) / r,
          };
        }),
        (e.outerHeight = function (t) {
          var e = t.clientHeight,
            r = t.ownerDocument.defaultView.getComputedStyle(t);
          return (
            e + ((0, i.int)(r.borderTopWidth) + (0, i.int)(r.borderBottomWidth))
          );
        }),
        (e.outerWidth = function (t) {
          var e = t.clientWidth,
            r = t.ownerDocument.defaultView.getComputedStyle(t);
          return (
            e + ((0, i.int)(r.borderLeftWidth) + (0, i.int)(r.borderRightWidth))
          );
        }),
        (e.removeClassName = d),
        (e.removeEvent = function (t, e, r, o) {
          if (t) {
            var i = l({ capture: !0 }, o);
            t.removeEventListener
              ? t.removeEventListener(e, r, i)
              : t.detachEvent
                ? t.detachEvent("on" + e, r)
                : (t["on" + e] = null);
          }
        }),
        (e.removeUserSelectStyles = function (t) {
          if (t)
            try {
              if (
                (t.body && d(t.body, "react-draggable-transparent-selection"),
                t.selection)
              )
                t.selection.empty();
              else {
                var e = (t.defaultView || window).getSelection();
                e && "Caret" !== e.type && e.removeAllRanges();
              }
            } catch (t) {}
        });
      var i = r(93185),
        n = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== o(t) && "function" != typeof t))
            return { default: t };
          var r = s(e);
          if (r && r.has(t)) return r.get(t);
          var i = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var l = n ? Object.getOwnPropertyDescriptor(t, a) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(i, a, l)
                : (i[a] = t[a]);
            }
          return (i.default = t), r && r.set(t, i), i;
        })(r(93664));
      function s(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          r = new WeakMap();
        return (s = function (t) {
          return t ? r : e;
        })(t);
      }
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                u(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
        }
        return t;
      }
      function u(t, e, r) {
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
      var p = "";
      function h(t, e) {
        return (
          p ||
            (p = (0, i.findInArray)(
              [
                "matches",
                "webkitMatchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
              ],
              function (e) {
                return (0, i.isFunction)(t[e]);
              }
            )),
          !!(0, i.isFunction)(t[p]) && t[p](e)
        );
      }
      function c(t, e, r) {
        var o = t.x,
          i = t.y,
          n = "translate(".concat(o).concat(r, ",").concat(i).concat(r, ")");
        if (e) {
          var s = "".concat("string" == typeof e.x ? e.x : e.x + r),
            a = "".concat("string" == typeof e.y ? e.y : e.y + r);
          n = "translate(".concat(s, ", ").concat(a, ")") + n;
        }
        return n;
      }
      function f(t, e) {
        t.classList
          ? t.classList.add(e)
          : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) ||
            (t.className += " ".concat(e));
      }
      function d(t, e) {
        t.classList
          ? t.classList.remove(e)
          : (t.className = t.className.replace(
              RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"),
              ""
            ));
      }
    },
    93664: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.browserPrefixToKey = i),
        (e.browserPrefixToStyle = function (t, e) {
          return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
        }),
        (e.default = void 0),
        (e.getPrefix = o);
      var r = ["Moz", "Webkit", "O", "ms"];
      function o() {
        var t,
          e,
          o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "transform";
        if ("undefined" == typeof window) return "";
        var n =
          null === (t = window.document) || void 0 === t
            ? void 0
            : null === (e = t.documentElement) || void 0 === e
              ? void 0
              : e.style;
        if (!n || o in n) return "";
        for (var s = 0; s < r.length; s++) if (i(o, r[s]) in n) return r[s];
        return "";
      }
      function i(t, e) {
        return e
          ? "".concat(e).concat(
              (function (t) {
                for (var e = "", r = !0, o = 0; o < t.length; o++)
                  r
                    ? ((e += t[o].toUpperCase()), (r = !1))
                    : "-" === t[o]
                      ? (r = !0)
                      : (e += t[o]);
                return e;
              })(t)
            )
          : t;
      }
      var n = o();
      e.default = n;
    },
    1720: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function () {});
    },
    50334: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.canDragX = function (t) {
          return "both" === t.props.axis || "x" === t.props.axis;
        }),
        (e.canDragY = function (t) {
          return "both" === t.props.axis || "y" === t.props.axis;
        }),
        (e.createCoreData = function (t, e, r) {
          var i = t.state,
            s = !(0, o.isNum)(i.lastX),
            a = n(t);
          return s
            ? { node: a, deltaX: 0, deltaY: 0, lastX: e, lastY: r, x: e, y: r }
            : {
                node: a,
                deltaX: e - i.lastX,
                deltaY: r - i.lastY,
                lastX: i.lastX,
                lastY: i.lastY,
                x: e,
                y: r,
              };
        }),
        (e.createDraggableData = function (t, e) {
          var r = t.props.scale;
          return {
            node: e.node,
            x: t.state.x + e.deltaX / r,
            y: t.state.y + e.deltaY / r,
            deltaX: e.deltaX / r,
            deltaY: e.deltaY / r,
            lastX: t.state.x,
            lastY: t.state.y,
          };
        }),
        (e.getBoundPosition = function (t, e, r) {
          if (!t.props.bounds) return [e, r];
          var s = t.props.bounds;
          s =
            "string" == typeof s
              ? s
              : {
                  left: (l = s).left,
                  top: l.top,
                  right: l.right,
                  bottom: l.bottom,
                };
          var a = n(t);
          if ("string" == typeof s) {
            var l,
              u,
              p = a.ownerDocument,
              h = p.defaultView;
            if (
              !(
                (u =
                  "parent" === s ? a.parentNode : p.querySelector(s)) instanceof
                h.HTMLElement
              )
            )
              throw Error(
                'Bounds selector "' + s + '" could not find an element.'
              );
            var c = h.getComputedStyle(a),
              f = h.getComputedStyle(u);
            s = {
              left:
                -a.offsetLeft +
                (0, o.int)(f.paddingLeft) +
                (0, o.int)(c.marginLeft),
              top:
                -a.offsetTop +
                (0, o.int)(f.paddingTop) +
                (0, o.int)(c.marginTop),
              right:
                (0, i.innerWidth)(u) -
                (0, i.outerWidth)(a) -
                a.offsetLeft +
                (0, o.int)(f.paddingRight) -
                (0, o.int)(c.marginRight),
              bottom:
                (0, i.innerHeight)(u) -
                (0, i.outerHeight)(a) -
                a.offsetTop +
                (0, o.int)(f.paddingBottom) -
                (0, o.int)(c.marginBottom),
            };
          }
          return (
            (0, o.isNum)(s.right) && (e = Math.min(e, s.right)),
            (0, o.isNum)(s.bottom) && (r = Math.min(r, s.bottom)),
            (0, o.isNum)(s.left) && (e = Math.max(e, s.left)),
            (0, o.isNum)(s.top) && (r = Math.max(r, s.top)),
            [e, r]
          );
        }),
        (e.getControlPosition = function (t, e, r) {
          var o = "number" == typeof e ? (0, i.getTouch)(t, e) : null;
          if ("number" == typeof e && !o) return null;
          var s = n(r),
            a = r.props.offsetParent || s.offsetParent || s.ownerDocument.body;
          return (0, i.offsetXYFromParent)(o || t, a, r.props.scale);
        }),
        (e.snapToGrid = function (t, e, r) {
          return [Math.round(e / t[0]) * t[0], Math.round(r / t[1]) * t[1]];
        });
      var o = r(93185),
        i = r(83315);
      function n(t) {
        var e = t.findDOMNode();
        if (!e) throw Error("<DraggableCore>: Unmounted during event!");
        return e;
      }
    },
    93185: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dontSetMe = function (t, e, r) {
          if (t[e])
            return Error(
              "Invalid prop "
                .concat(e, " passed to ")
                .concat(r, " - do not set this, set it on the child.")
            );
        }),
        (e.findInArray = function (t, e) {
          for (var r = 0, o = t.length; r < o; r++)
            if (e.apply(e, [t[r], r, t])) return t[r];
        }),
        (e.int = function (t) {
          return parseInt(t, 10);
        }),
        (e.isFunction = function (t) {
          return (
            "function" == typeof t ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }),
        (e.isNum = function (t) {
          return "number" == typeof t && !isNaN(t);
        });
    },
    35236: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return W;
        },
      });
      var o,
        i,
        n = r(70079),
        s = r(59349),
        a = r.n(s),
        l =
          ((o = function (t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          }),
          function (t, e) {
            function r() {
              this.constructor = t;
            }
            o(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        u = function () {
          return (u =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        p = {
          top: {
            width: "100%",
            height: "10px",
            top: "-5px",
            left: "0px",
            cursor: "row-resize",
          },
          right: {
            width: "10px",
            height: "100%",
            top: "0px",
            right: "-5px",
            cursor: "col-resize",
          },
          bottom: {
            width: "100%",
            height: "10px",
            bottom: "-5px",
            left: "0px",
            cursor: "row-resize",
          },
          left: {
            width: "10px",
            height: "100%",
            top: "0px",
            left: "-5px",
            cursor: "col-resize",
          },
          topRight: {
            width: "20px",
            height: "20px",
            position: "absolute",
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize",
          },
          bottomRight: {
            width: "20px",
            height: "20px",
            position: "absolute",
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize",
          },
          bottomLeft: {
            width: "20px",
            height: "20px",
            position: "absolute",
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize",
          },
          topLeft: {
            width: "20px",
            height: "20px",
            position: "absolute",
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize",
          },
        },
        h = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.onMouseDown = function (t) {
                e.props.onResizeStart(t, e.props.direction);
              }),
              (e.onTouchStart = function (t) {
                e.props.onResizeStart(t, e.props.direction);
              }),
              e
            );
          }
          return (
            l(e, t),
            (e.prototype.render = function () {
              return n.createElement(
                "div",
                {
                  className: this.props.className || "",
                  style: u(
                    u(
                      { position: "absolute", userSelect: "none" },
                      p[this.props.direction]
                    ),
                    this.props.replaceStyles || {}
                  ),
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                },
                this.props.children
              );
            }),
            e
          );
        })(n.PureComponent),
        c = r(48787),
        f = r.n(c),
        d =
          ((i = function (t, e) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          }),
          function (t, e) {
            function r() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        g = function () {
          return (g =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        b = { width: "auto", height: "auto" },
        y = f()(function (t, e, r) {
          return Math.max(Math.min(t, r), e);
        }),
        m = f()(function (t, e) {
          return Math.round(t / e) * e;
        }),
        v = f()(function (t, e) {
          return RegExp(t, "i").test(e);
        }),
        w = function (t) {
          return !!(t.touches && t.touches.length);
        },
        S = f()(function (t, e, r) {
          void 0 === r && (r = 0);
          var o = e.reduce(function (r, o, i) {
              return Math.abs(o - t) < Math.abs(e[r] - t) ? i : r;
            }, 0),
            i = Math.abs(e[o] - t);
          return 0 === r || i < r ? e[o] : t;
        }),
        x = f()(function (t, e) {
          return t.substr(t.length - e.length, e.length) === e;
        }),
        z = f()(function (t) {
          return "auto" === (t = t.toString()) ||
            x(t, "px") ||
            x(t, "%") ||
            x(t, "vh") ||
            x(t, "vw") ||
            x(t, "vmax") ||
            x(t, "vmin")
            ? t
            : t + "px";
        }),
        D = function (t, e, r, o) {
          if (t && "string" == typeof t) {
            if (x(t, "px")) return Number(t.replace("px", ""));
            if (x(t, "%")) {
              var i = Number(t.replace("%", "")) / 100;
              return e * i;
            }
            if (x(t, "vw")) {
              var i = Number(t.replace("vw", "")) / 100;
              return r * i;
            }
            if (x(t, "vh")) {
              var i = Number(t.replace("vh", "")) / 100;
              return o * i;
            }
          }
          return t;
        },
        O = f()(function (t, e, r, o, i, n, s) {
          return (
            (o = D(o, t.width, e, r)),
            (i = D(i, t.height, e, r)),
            (n = D(n, t.width, e, r)),
            (s = D(s, t.height, e, r)),
            {
              maxWidth: void 0 === o ? void 0 : Number(o),
              maxHeight: void 0 === i ? void 0 : Number(i),
              minWidth: void 0 === n ? void 0 : Number(n),
              minHeight: void 0 === s ? void 0 : Number(s),
            }
          );
        }),
        P = [
          "as",
          "style",
          "className",
          "grid",
          "snap",
          "bounds",
          "boundsByDirection",
          "size",
          "defaultSize",
          "minWidth",
          "minHeight",
          "maxWidth",
          "maxHeight",
          "lockAspectRatio",
          "lockAspectRatioExtraWidth",
          "lockAspectRatioExtraHeight",
          "enable",
          "handleStyles",
          "handleClasses",
          "handleWrapperStyle",
          "handleWrapperClass",
          "children",
          "onResizeStart",
          "onResize",
          "onResizeStop",
          "handleComponent",
          "scale",
          "resizeRatio",
          "snapGap",
        ],
        R = "__resizable_base__",
        E = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.ratio = 1),
              (r.resizable = null),
              (r.parentLeft = 0),
              (r.parentTop = 0),
              (r.resizableLeft = 0),
              (r.resizableRight = 0),
              (r.resizableTop = 0),
              (r.resizableBottom = 0),
              (r.targetLeft = 0),
              (r.targetTop = 0),
              (r.appendBase = function () {
                if (!r.resizable || !r.window) return null;
                var t = r.parentNode;
                if (!t) return null;
                var e = r.window.document.createElement("div");
                return (
                  (e.style.width = "100%"),
                  (e.style.height = "100%"),
                  (e.style.position = "absolute"),
                  (e.style.transform = "scale(0, 0)"),
                  (e.style.left = "0"),
                  (e.style.flex = "0 0 100%"),
                  e.classList ? e.classList.add(R) : (e.className += R),
                  t.appendChild(e),
                  e
                );
              }),
              (r.removeBase = function (t) {
                var e = r.parentNode;
                e && e.removeChild(t);
              }),
              (r.ref = function (t) {
                t && (r.resizable = t);
              }),
              (r.state = {
                isResizing: !1,
                width:
                  void 0 === (r.propsSize && r.propsSize.width)
                    ? "auto"
                    : r.propsSize && r.propsSize.width,
                height:
                  void 0 === (r.propsSize && r.propsSize.height)
                    ? "auto"
                    : r.propsSize && r.propsSize.height,
                direction: "right",
                original: { x: 0, y: 0, width: 0, height: 0 },
                backgroundStyle: {
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0)",
                  cursor: "auto",
                  opacity: 0,
                  position: "fixed",
                  zIndex: 9999,
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                },
                flexBasis: void 0,
              }),
              (r.onResizeStart = r.onResizeStart.bind(r)),
              (r.onMouseMove = r.onMouseMove.bind(r)),
              (r.onMouseUp = r.onMouseUp.bind(r)),
              r
            );
          }
          return (
            d(e, t),
            Object.defineProperty(e.prototype, "parentNode", {
              get: function () {
                return this.resizable ? this.resizable.parentNode : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "window", {
              get: function () {
                return this.resizable && this.resizable.ownerDocument
                  ? this.resizable.ownerDocument.defaultView
                  : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "propsSize", {
              get: function () {
                return this.props.size || this.props.defaultSize || b;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                var t = 0,
                  e = 0;
                if (this.resizable && this.window) {
                  var r = this.resizable.offsetWidth,
                    o = this.resizable.offsetHeight,
                    i = this.resizable.style.position;
                  "relative" !== i &&
                    (this.resizable.style.position = "relative"),
                    (t =
                      "auto" !== this.resizable.style.width
                        ? this.resizable.offsetWidth
                        : r),
                    (e =
                      "auto" !== this.resizable.style.height
                        ? this.resizable.offsetHeight
                        : o),
                    (this.resizable.style.position = i);
                }
                return { width: t, height: e };
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "sizeStyle", {
              get: function () {
                var t = this,
                  e = this.props.size,
                  r = function (e) {
                    if (void 0 === t.state[e] || "auto" === t.state[e])
                      return "auto";
                    if (
                      t.propsSize &&
                      t.propsSize[e] &&
                      x(t.propsSize[e].toString(), "%")
                    ) {
                      if (x(t.state[e].toString(), "%"))
                        return t.state[e].toString();
                      var r = t.getParentSize();
                      return (
                        (Number(t.state[e].toString().replace("px", "")) /
                          r[e]) *
                          100 +
                        "%"
                      );
                    }
                    return z(t.state[e]);
                  };
                return {
                  width:
                    e && void 0 !== e.width && !this.state.isResizing
                      ? z(e.width)
                      : r("width"),
                  height:
                    e && void 0 !== e.height && !this.state.isResizing
                      ? z(e.height)
                      : r("height"),
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getParentSize = function () {
              if (!this.parentNode)
                return this.window
                  ? {
                      width: this.window.innerWidth,
                      height: this.window.innerHeight,
                    }
                  : { width: 0, height: 0 };
              var t = this.appendBase();
              if (!t) return { width: 0, height: 0 };
              var e = !1,
                r = this.parentNode.style.flexWrap;
              "wrap" !== r &&
                ((e = !0), (this.parentNode.style.flexWrap = "wrap")),
                (t.style.position = "relative"),
                (t.style.minWidth = "100%"),
                (t.style.minHeight = "100%");
              var o = { width: t.offsetWidth, height: t.offsetHeight };
              return (
                e && (this.parentNode.style.flexWrap = r), this.removeBase(t), o
              );
            }),
            (e.prototype.bindEvents = function () {
              this.window &&
                (this.window.addEventListener("mouseup", this.onMouseUp),
                this.window.addEventListener("mousemove", this.onMouseMove),
                this.window.addEventListener("mouseleave", this.onMouseUp),
                this.window.addEventListener("touchmove", this.onMouseMove, {
                  capture: !0,
                  passive: !1,
                }),
                this.window.addEventListener("touchend", this.onMouseUp));
            }),
            (e.prototype.unbindEvents = function () {
              this.window &&
                (this.window.removeEventListener("mouseup", this.onMouseUp),
                this.window.removeEventListener("mousemove", this.onMouseMove),
                this.window.removeEventListener("mouseleave", this.onMouseUp),
                this.window.removeEventListener(
                  "touchmove",
                  this.onMouseMove,
                  !0
                ),
                this.window.removeEventListener("touchend", this.onMouseUp));
            }),
            (e.prototype.componentDidMount = function () {
              if (this.resizable && this.window) {
                var t = this.window.getComputedStyle(this.resizable);
                this.setState({
                  width: this.state.width || this.size.width,
                  height: this.state.height || this.size.height,
                  flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0,
                });
              }
            }),
            (e.prototype.componentWillUnmount = function () {
              this.window && this.unbindEvents();
            }),
            (e.prototype.createSizeForCssProperty = function (t, e) {
              var r = this.propsSize && this.propsSize[e];
              return "auto" === this.state[e] &&
                this.state.original[e] === t &&
                (void 0 === r || "auto" === r)
                ? "auto"
                : t;
            }),
            (e.prototype.calculateNewMaxFromBoundary = function (t, e) {
              var r,
                o,
                i = this.props.boundsByDirection,
                n = this.state.direction,
                s = i && v("left", n),
                a = i && v("top", n);
              if ("parent" === this.props.bounds) {
                var l = this.parentNode;
                l &&
                  ((r = s
                    ? this.resizableRight - this.parentLeft
                    : l.offsetWidth + (this.parentLeft - this.resizableLeft)),
                  (o = a
                    ? this.resizableBottom - this.parentTop
                    : l.offsetHeight + (this.parentTop - this.resizableTop)));
              } else
                "window" === this.props.bounds
                  ? this.window &&
                    ((r = s
                      ? this.resizableRight
                      : this.window.innerWidth - this.resizableLeft),
                    (o = a
                      ? this.resizableBottom
                      : this.window.innerHeight - this.resizableTop))
                  : this.props.bounds &&
                    ((r = s
                      ? this.resizableRight - this.targetLeft
                      : this.props.bounds.offsetWidth +
                        (this.targetLeft - this.resizableLeft)),
                    (o = a
                      ? this.resizableBottom - this.targetTop
                      : this.props.bounds.offsetHeight +
                        (this.targetTop - this.resizableTop)));
              return (
                r && Number.isFinite(r) && (t = t && t < r ? t : r),
                o && Number.isFinite(o) && (e = e && e < o ? e : o),
                { maxWidth: t, maxHeight: e }
              );
            }),
            (e.prototype.calculateNewSizeFromDirection = function (t, e) {
              var r = this.props.scale || 1,
                o = this.props.resizeRatio || 1,
                i = this.state,
                n = i.direction,
                s = i.original,
                a = this.props,
                l = a.lockAspectRatio,
                u = a.lockAspectRatioExtraHeight,
                p = a.lockAspectRatioExtraWidth,
                h = s.width,
                c = s.height,
                f = u || 0,
                d = p || 0;
              return (
                v("right", n) &&
                  ((h = s.width + ((t - s.x) * o) / r),
                  l && (c = (h - d) / this.ratio + f)),
                v("left", n) &&
                  ((h = s.width - ((t - s.x) * o) / r),
                  l && (c = (h - d) / this.ratio + f)),
                v("bottom", n) &&
                  ((c = s.height + ((e - s.y) * o) / r),
                  l && (h = (c - f) * this.ratio + d)),
                v("top", n) &&
                  ((c = s.height - ((e - s.y) * o) / r),
                  l && (h = (c - f) * this.ratio + d)),
                { newWidth: h, newHeight: c }
              );
            }),
            (e.prototype.calculateNewSizeFromAspectRatio = function (
              t,
              e,
              r,
              o
            ) {
              var i = this.props,
                n = i.lockAspectRatio,
                s = i.lockAspectRatioExtraHeight,
                a = i.lockAspectRatioExtraWidth,
                l = void 0 === o.width ? 10 : o.width,
                u = void 0 === r.width || r.width < 0 ? t : r.width,
                p = void 0 === o.height ? 10 : o.height,
                h = void 0 === r.height || r.height < 0 ? e : r.height,
                c = s || 0,
                f = a || 0;
              if (n) {
                var d = (p - c) * this.ratio + f,
                  g = (h - c) * this.ratio + f,
                  b = (l - f) / this.ratio + c,
                  m = (u - f) / this.ratio + c;
                (t = y(t, Math.max(l, d), Math.min(u, g))),
                  (e = y(e, Math.max(p, b), Math.min(h, m)));
              } else (t = y(t, l, u)), (e = y(e, p, h));
              return { newWidth: t, newHeight: e };
            }),
            (e.prototype.setBoundingClientRect = function () {
              if ("parent" === this.props.bounds) {
                var t = this.parentNode;
                if (t) {
                  var e = t.getBoundingClientRect();
                  (this.parentLeft = e.left), (this.parentTop = e.top);
                }
              }
              if (this.props.bounds && "string" != typeof this.props.bounds) {
                var r = this.props.bounds.getBoundingClientRect();
                (this.targetLeft = r.left), (this.targetTop = r.top);
              }
              if (this.resizable) {
                var o = this.resizable.getBoundingClientRect(),
                  i = o.left,
                  n = o.top,
                  s = o.right,
                  a = o.bottom;
                (this.resizableLeft = i),
                  (this.resizableRight = s),
                  (this.resizableTop = n),
                  (this.resizableBottom = a);
              }
            }),
            (e.prototype.onResizeStart = function (t, e) {
              if (this.resizable && this.window) {
                var r,
                  o,
                  i = 0,
                  n = 0;
                if (
                  (t.nativeEvent &&
                  ((r = t.nativeEvent).clientX || 0 === r.clientX) &&
                  (r.clientY || 0 === r.clientY)
                    ? ((i = t.nativeEvent.clientX), (n = t.nativeEvent.clientY))
                    : t.nativeEvent &&
                      w(t.nativeEvent) &&
                      ((i = t.nativeEvent.touches[0].clientX),
                      (n = t.nativeEvent.touches[0].clientY)),
                  !this.props.onResizeStart ||
                    !this.resizable ||
                    !1 !== this.props.onResizeStart(t, e, this.resizable))
                ) {
                  this.props.size &&
                    (void 0 !== this.props.size.height &&
                      this.props.size.height !== this.state.height &&
                      this.setState({ height: this.props.size.height }),
                    void 0 !== this.props.size.width &&
                      this.props.size.width !== this.state.width &&
                      this.setState({ width: this.props.size.width })),
                    (this.ratio =
                      "number" == typeof this.props.lockAspectRatio
                        ? this.props.lockAspectRatio
                        : this.size.width / this.size.height);
                  var s = this.window.getComputedStyle(this.resizable);
                  if ("auto" !== s.flexBasis) {
                    var a = this.parentNode;
                    if (a) {
                      var l = this.window.getComputedStyle(a).flexDirection;
                      (this.flexDir = l.startsWith("row") ? "row" : "column"),
                        (o = s.flexBasis);
                    }
                  }
                  this.setBoundingClientRect(), this.bindEvents();
                  var u = {
                    original: {
                      x: i,
                      y: n,
                      width: this.size.width,
                      height: this.size.height,
                    },
                    isResizing: !0,
                    backgroundStyle: g(g({}, this.state.backgroundStyle), {
                      cursor:
                        this.window.getComputedStyle(t.target).cursor || "auto",
                    }),
                    direction: e,
                    flexBasis: o,
                  };
                  this.setState(u);
                }
              }
            }),
            (e.prototype.onMouseMove = function (t) {
              if (this.state.isResizing && this.resizable && this.window) {
                if (this.window.TouchEvent && w(t))
                  try {
                    t.preventDefault(), t.stopPropagation();
                  } catch (t) {}
                var e = this.props,
                  r = e.maxWidth,
                  o = e.maxHeight,
                  i = e.minWidth,
                  n = e.minHeight,
                  s = w(t) ? t.touches[0].clientX : t.clientX,
                  a = w(t) ? t.touches[0].clientY : t.clientY,
                  l = this.state,
                  u = l.direction,
                  p = l.original,
                  h = l.width,
                  c = l.height,
                  f = this.getParentSize(),
                  d = O(
                    f,
                    this.window.innerWidth,
                    this.window.innerHeight,
                    r,
                    o,
                    i,
                    n
                  );
                (r = d.maxWidth),
                  (o = d.maxHeight),
                  (i = d.minWidth),
                  (n = d.minHeight);
                var g = this.calculateNewSizeFromDirection(s, a),
                  b = g.newHeight,
                  y = g.newWidth,
                  v = this.calculateNewMaxFromBoundary(r, o);
                this.props.snap &&
                  this.props.snap.x &&
                  (y = S(y, this.props.snap.x, this.props.snapGap)),
                  this.props.snap &&
                    this.props.snap.y &&
                    (b = S(b, this.props.snap.y, this.props.snapGap));
                var z = this.calculateNewSizeFromAspectRatio(
                  y,
                  b,
                  { width: v.maxWidth, height: v.maxHeight },
                  { width: i, height: n }
                );
                if (((y = z.newWidth), (b = z.newHeight), this.props.grid)) {
                  var D = m(y, this.props.grid[0]),
                    P = m(b, this.props.grid[1]),
                    R = this.props.snapGap || 0;
                  (y = 0 === R || Math.abs(D - y) <= R ? D : y),
                    (b = 0 === R || Math.abs(P - b) <= R ? P : b);
                }
                var E = { width: y - p.width, height: b - p.height };
                if (h && "string" == typeof h) {
                  if (x(h, "%")) {
                    var M = (y / f.width) * 100;
                    y = M + "%";
                  } else if (x(h, "vw")) {
                    var j = (y / this.window.innerWidth) * 100;
                    y = j + "vw";
                  } else if (x(h, "vh")) {
                    var N = (y / this.window.innerHeight) * 100;
                    y = N + "vh";
                  }
                }
                if (c && "string" == typeof c) {
                  if (x(c, "%")) {
                    var M = (b / f.height) * 100;
                    b = M + "%";
                  } else if (x(c, "vw")) {
                    var j = (b / this.window.innerWidth) * 100;
                    b = j + "vw";
                  } else if (x(c, "vh")) {
                    var N = (b / this.window.innerHeight) * 100;
                    b = N + "vh";
                  }
                }
                var C = {
                  width: this.createSizeForCssProperty(y, "width"),
                  height: this.createSizeForCssProperty(b, "height"),
                };
                "row" === this.flexDir
                  ? (C.flexBasis = C.width)
                  : "column" === this.flexDir && (C.flexBasis = C.height),
                  this.setState(C),
                  this.props.onResize &&
                    this.props.onResize(t, u, this.resizable, E);
              }
            }),
            (e.prototype.onMouseUp = function (t) {
              var e = this.state,
                r = e.isResizing,
                o = e.direction,
                i = e.original;
              if (r && this.resizable) {
                var n = {
                  width: this.size.width - i.width,
                  height: this.size.height - i.height,
                };
                this.props.onResizeStop &&
                  this.props.onResizeStop(t, o, this.resizable, n),
                  this.props.size && this.setState(this.props.size),
                  this.unbindEvents(),
                  this.setState({
                    isResizing: !1,
                    backgroundStyle: g(g({}, this.state.backgroundStyle), {
                      cursor: "auto",
                    }),
                  });
              }
            }),
            (e.prototype.updateSize = function (t) {
              this.setState({ width: t.width, height: t.height });
            }),
            (e.prototype.renderResizer = function () {
              var t = this,
                e = this.props,
                r = e.enable,
                o = e.handleStyles,
                i = e.handleClasses,
                s = e.handleWrapperStyle,
                a = e.handleWrapperClass,
                l = e.handleComponent;
              if (!r) return null;
              var u = Object.keys(r).map(function (e) {
                return !1 !== r[e]
                  ? n.createElement(
                      h,
                      {
                        key: e,
                        direction: e,
                        onResizeStart: t.onResizeStart,
                        replaceStyles: o && o[e],
                        className: i && i[e],
                      },
                      l && l[e] ? l[e] : null
                    )
                  : null;
              });
              return n.createElement("div", { className: a, style: s }, u);
            }),
            (e.prototype.render = function () {
              var t = this,
                e = Object.keys(this.props).reduce(function (e, r) {
                  return -1 !== P.indexOf(r) || (e[r] = t.props[r]), e;
                }, {}),
                r = g(
                  g(
                    g(
                      {
                        position: "relative",
                        userSelect: this.state.isResizing ? "none" : "auto",
                      },
                      this.props.style
                    ),
                    this.sizeStyle
                  ),
                  {
                    maxWidth: this.props.maxWidth,
                    maxHeight: this.props.maxHeight,
                    minWidth: this.props.minWidth,
                    minHeight: this.props.minHeight,
                    boxSizing: "border-box",
                    flexShrink: 0,
                  }
                );
              this.state.flexBasis && (r.flexBasis = this.state.flexBasis);
              var o = this.props.as || "div";
              return n.createElement(
                o,
                g(
                  { ref: this.ref, style: r, className: this.props.className },
                  e
                ),
                this.state.isResizing &&
                  n.createElement("div", { style: this.state.backgroundStyle }),
                this.props.children,
                this.renderResizer()
              );
            }),
            (e.defaultProps = {
              as: "div",
              onResizeStart: function () {},
              onResize: function () {},
              onResizeStop: function () {},
              enable: {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                topRight: !0,
                bottomRight: !0,
                bottomLeft: !0,
                topLeft: !0,
              },
              style: {},
              grid: [1, 1],
              lockAspectRatio: !1,
              lockAspectRatioExtraWidth: 0,
              lockAspectRatioExtraHeight: 0,
              scale: 1,
              resizeRatio: 1,
              snapGap: 0,
            }),
            e
          );
        })(n.PureComponent),
        M = function (t, e) {
          return (M =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        j = function () {
          return (j =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        N = a(),
        C = {
          width: "auto",
          height: "auto",
          display: "inline-block",
          position: "absolute",
          top: 0,
          left: 0,
        },
        W = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.resizingPosition = { x: 0, y: 0 }),
              (r.offsetFromParent = { left: 0, top: 0 }),
              (r.resizableElement = { current: null }),
              (r.originalPosition = { x: 0, y: 0 }),
              (r.refDraggable = function (t) {
                t && (r.draggable = t);
              }),
              (r.refResizable = function (t) {
                t &&
                  ((r.resizable = t),
                  (r.resizableElement.current = t.resizable));
              }),
              (r.state = {
                resizing: !1,
                bounds: { top: 0, right: 0, bottom: 0, left: 0 },
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
              }),
              (r.onResizeStart = r.onResizeStart.bind(r)),
              (r.onResize = r.onResize.bind(r)),
              (r.onResizeStop = r.onResizeStop.bind(r)),
              (r.onDragStart = r.onDragStart.bind(r)),
              (r.onDrag = r.onDrag.bind(r)),
              (r.onDragStop = r.onDragStop.bind(r)),
              (r.getMaxSizesFromProps = r.getMaxSizesFromProps.bind(r)),
              r
            );
          }
          return (
            !(function (t, e) {
              function r() {
                this.constructor = t;
              }
              M(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype.componentDidMount = function () {
              this.updateOffsetFromParent();
              var t = this.offsetFromParent,
                e = t.left,
                r = t.top,
                o = this.getDraggablePosition(),
                i = o.x,
                n = o.y;
              this.draggable.setState({ x: i - e, y: n - r }),
                this.forceUpdate();
            }),
            (e.prototype.getDraggablePosition = function () {
              var t = this.draggable.state;
              return { x: t.x, y: t.y };
            }),
            (e.prototype.getParent = function () {
              return this.resizable && this.resizable.parentNode;
            }),
            (e.prototype.getParentSize = function () {
              return this.resizable.getParentSize();
            }),
            (e.prototype.getMaxSizesFromProps = function () {
              return {
                maxWidth:
                  void 0 === this.props.maxWidth
                    ? Number.MAX_SAFE_INTEGER
                    : this.props.maxWidth,
                maxHeight:
                  void 0 === this.props.maxHeight
                    ? Number.MAX_SAFE_INTEGER
                    : this.props.maxHeight,
              };
            }),
            (e.prototype.getSelfElement = function () {
              return this.resizable && this.resizable.resizable;
            }),
            (e.prototype.getOffsetHeight = function (t) {
              var e = this.props.scale;
              switch (this.props.bounds) {
                case "window":
                  return window.innerHeight / e;
                case "body":
                  return document.body.offsetHeight / e;
                default:
                  return t.offsetHeight;
              }
            }),
            (e.prototype.getOffsetWidth = function (t) {
              var e = this.props.scale;
              switch (this.props.bounds) {
                case "window":
                  return window.innerWidth / e;
                case "body":
                  return document.body.offsetWidth / e;
                default:
                  return t.offsetWidth;
              }
            }),
            (e.prototype.onDragStart = function (t, e) {
              this.props.onDragStart && this.props.onDragStart(t, e);
              var r,
                o = this.getDraggablePosition();
              if (((this.originalPosition = o), this.props.bounds)) {
                var i = this.getParent(),
                  n = this.props.scale;
                if ("parent" === this.props.bounds) r = i;
                else if ("body" === this.props.bounds) {
                  var s = i.getBoundingClientRect(),
                    a = s.left,
                    l = s.top,
                    u = document.body.getBoundingClientRect(),
                    p = -(a - i.offsetLeft * n - u.left) / n,
                    h = -(l - i.offsetTop * n - u.top) / n,
                    c =
                      (document.body.offsetWidth -
                        this.resizable.size.width * n) /
                        n +
                      p,
                    f =
                      (document.body.offsetHeight -
                        this.resizable.size.height * n) /
                        n +
                      h;
                  return this.setState({
                    bounds: { top: h, right: c, bottom: f, left: p },
                  });
                } else if ("window" === this.props.bounds) {
                  if (!this.resizable) return;
                  var d = i.getBoundingClientRect(),
                    g = d.left,
                    b = d.top,
                    y = -(g - i.offsetLeft * n) / n,
                    m = -(b - i.offsetTop * n) / n,
                    c =
                      (window.innerWidth - this.resizable.size.width * n) / n +
                      y,
                    f =
                      (window.innerHeight - this.resizable.size.height * n) /
                        n +
                      m;
                  return this.setState({
                    bounds: { top: m, right: c, bottom: f, left: y },
                  });
                } else
                  "string" == typeof this.props.bounds
                    ? (r = document.querySelector(this.props.bounds))
                    : this.props.bounds instanceof HTMLElement &&
                      (r = this.props.bounds);
                if (r instanceof HTMLElement && i instanceof HTMLElement) {
                  var v = r.getBoundingClientRect(),
                    w = v.left,
                    S = v.top,
                    x = i.getBoundingClientRect(),
                    z = x.left,
                    D = x.top,
                    O = (w - z) / n,
                    P = S - D;
                  if (this.resizable) {
                    this.updateOffsetFromParent();
                    var R = this.offsetFromParent;
                    this.setState({
                      bounds: {
                        top: P - R.top,
                        right:
                          O +
                          (r.offsetWidth - this.resizable.size.width) -
                          R.left / n,
                        bottom:
                          P +
                          (r.offsetHeight - this.resizable.size.height) -
                          R.top,
                        left: O - R.left / n,
                      },
                    });
                  }
                }
              }
            }),
            (e.prototype.onDrag = function (t, e) {
              if (this.props.onDrag) {
                var r = this.offsetFromParent,
                  o = r.left,
                  i = r.top;
                if (!this.props.dragAxis || "both" === this.props.dragAxis)
                  return this.props.onDrag(
                    t,
                    j(j({}, e), { x: e.x - o, y: e.y - i })
                  );
                if ("x" === this.props.dragAxis)
                  return this.props.onDrag(
                    t,
                    j(j({}, e), {
                      x: e.x + o,
                      y: this.originalPosition.y + i,
                      deltaY: 0,
                    })
                  );
                if ("y" === this.props.dragAxis)
                  return this.props.onDrag(
                    t,
                    j(j({}, e), {
                      x: this.originalPosition.x + o,
                      y: e.y + i,
                      deltaX: 0,
                    })
                  );
              }
            }),
            (e.prototype.onDragStop = function (t, e) {
              if (this.props.onDragStop) {
                var r = this.offsetFromParent,
                  o = r.left,
                  i = r.top;
                if (!this.props.dragAxis || "both" === this.props.dragAxis)
                  return this.props.onDragStop(
                    t,
                    j(j({}, e), { x: e.x + o, y: e.y + i })
                  );
                if ("x" === this.props.dragAxis)
                  return this.props.onDragStop(
                    t,
                    j(j({}, e), {
                      x: e.x + o,
                      y: this.originalPosition.y + i,
                      deltaY: 0,
                    })
                  );
                if ("y" === this.props.dragAxis)
                  return this.props.onDragStop(
                    t,
                    j(j({}, e), {
                      x: this.originalPosition.x + o,
                      y: e.y + i,
                      deltaX: 0,
                    })
                  );
              }
            }),
            (e.prototype.onResizeStart = function (t, e, r) {
              t.stopPropagation(), this.setState({ resizing: !0 });
              var o = this.props.scale,
                i = this.offsetFromParent,
                n = this.getDraggablePosition();
              if (
                ((this.resizingPosition = { x: n.x + i.left, y: n.y + i.top }),
                (this.originalPosition = n),
                this.props.bounds)
              ) {
                var s = this.getParent(),
                  a = void 0;
                "parent" === this.props.bounds
                  ? (a = s)
                  : "body" === this.props.bounds
                    ? (a = document.body)
                    : "window" === this.props.bounds
                      ? (a = window)
                      : "string" == typeof this.props.bounds
                        ? (a = document.querySelector(this.props.bounds))
                        : this.props.bounds instanceof HTMLElement &&
                          (a = this.props.bounds);
                var l = this.getSelfElement();
                if (
                  l instanceof Element &&
                  (a instanceof HTMLElement || a === window) &&
                  s instanceof HTMLElement
                ) {
                  var u = this.getMaxSizesFromProps(),
                    p = u.maxWidth,
                    h = u.maxHeight,
                    c = this.getParentSize();
                  if (p && "string" == typeof p) {
                    if (p.endsWith("%")) {
                      var f = Number(p.replace("%", "")) / 100;
                      p = c.width * f;
                    } else
                      p.endsWith("px") && (p = Number(p.replace("px", "")));
                  }
                  if (h && "string" == typeof h) {
                    if (h.endsWith("%")) {
                      var f = Number(h.replace("%", "")) / 100;
                      h = c.width * f;
                    } else
                      h.endsWith("px") && (h = Number(h.replace("px", "")));
                  }
                  var d = l.getBoundingClientRect(),
                    g = d.left,
                    b = d.top,
                    y =
                      "window" === this.props.bounds
                        ? { left: 0, top: 0 }
                        : a.getBoundingClientRect(),
                    m = y.left,
                    v = y.top,
                    w = this.getOffsetWidth(a),
                    S = this.getOffsetHeight(a),
                    x = e.toLowerCase().endsWith("left"),
                    z = e.toLowerCase().endsWith("right"),
                    D = e.startsWith("top"),
                    O = e.startsWith("bottom");
                  if ((x || D) && this.resizable) {
                    var P = (g - m) / o + this.resizable.size.width;
                    this.setState({ maxWidth: P > Number(p) ? p : P });
                  }
                  if (z || (this.props.lockAspectRatio && !x && !D)) {
                    var P = w + (m - g) / o;
                    this.setState({ maxWidth: P > Number(p) ? p : P });
                  }
                  if ((D || x) && this.resizable) {
                    var P = (b - v) / o + this.resizable.size.height;
                    this.setState({ maxHeight: P > Number(h) ? h : P });
                  }
                  if (O || (this.props.lockAspectRatio && !D && !x)) {
                    var P = S + (v - b) / o;
                    this.setState({ maxHeight: P > Number(h) ? h : P });
                  }
                }
              } else
                this.setState({
                  maxWidth: this.props.maxWidth,
                  maxHeight: this.props.maxHeight,
                });
              this.props.onResizeStart && this.props.onResizeStart(t, e, r);
            }),
            (e.prototype.onResize = function (t, e, r, o) {
              var i = {
                  x: this.originalPosition.x,
                  y: this.originalPosition.y,
                },
                n = -o.width,
                s = -o.height;
              -1 !==
                ["top", "left", "topLeft", "bottomLeft", "topRight"].indexOf(
                  e
                ) &&
                ("bottomLeft" === e
                  ? (i.x += n)
                  : ("topRight" === e || (i.x += n), (i.y += s))),
                (i.x !== this.draggable.state.x ||
                  i.y !== this.draggable.state.y) &&
                  this.draggable.setState(i),
                this.updateOffsetFromParent();
              var a = this.offsetFromParent,
                l = this.getDraggablePosition().x + a.left,
                u = this.getDraggablePosition().y + a.top;
              (this.resizingPosition = { x: l, y: u }),
                this.props.onResize &&
                  this.props.onResize(t, e, r, o, { x: l, y: u });
            }),
            (e.prototype.onResizeStop = function (t, e, r, o) {
              this.setState({ resizing: !1 });
              var i = this.getMaxSizesFromProps(),
                n = i.maxWidth,
                s = i.maxHeight;
              this.setState({ maxWidth: n, maxHeight: s }),
                this.props.onResizeStop &&
                  this.props.onResizeStop(t, e, r, o, this.resizingPosition);
            }),
            (e.prototype.updateSize = function (t) {
              this.resizable &&
                this.resizable.updateSize({ width: t.width, height: t.height });
            }),
            (e.prototype.updatePosition = function (t) {
              this.draggable.setState(t);
            }),
            (e.prototype.updateOffsetFromParent = function () {
              var t = this.props.scale,
                e = this.getParent(),
                r = this.getSelfElement();
              if (!e || null === r) return { top: 0, left: 0 };
              var o = e.getBoundingClientRect(),
                i = o.left,
                n = o.top,
                s = r.getBoundingClientRect(),
                a = this.getDraggablePosition(),
                l = e.scrollLeft,
                u = e.scrollTop;
              this.offsetFromParent = {
                left: s.left - i + l - a.x * t,
                top: s.top - n + u - a.y * t,
              };
            }),
            (e.prototype.render = function () {
              var t,
                e = this.props,
                r = e.disableDragging,
                o = e.style,
                i = e.dragHandleClassName,
                s = e.position,
                a = e.onMouseDown,
                l = e.onMouseUp,
                u = e.dragAxis,
                p = e.dragGrid,
                h = e.bounds,
                c = e.enableUserSelectHack,
                f = e.cancel,
                d = e.children,
                g =
                  (e.onResizeStart,
                  e.onResize,
                  e.onResizeStop,
                  e.onDragStart,
                  e.onDrag,
                  e.onDragStop,
                  e.resizeHandleStyles),
                b = e.resizeHandleClasses,
                y = e.resizeHandleComponent,
                m = e.enableResizing,
                v = e.resizeGrid,
                w = e.resizeHandleWrapperClass,
                S = e.resizeHandleWrapperStyle,
                x = e.scale,
                z = e.allowAnyClick,
                D = (function (t, e) {
                  var r = {};
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) &&
                      0 > e.indexOf(o) &&
                      (r[o] = t[o]);
                  if (
                    null != t &&
                    "function" == typeof Object.getOwnPropertySymbols
                  )
                    for (
                      var i = 0, o = Object.getOwnPropertySymbols(t);
                      i < o.length;
                      i++
                    )
                      0 > e.indexOf(o[i]) &&
                        Object.prototype.propertyIsEnumerable.call(t, o[i]) &&
                        (r[o[i]] = t[o[i]]);
                  return r;
                })(e, [
                  "disableDragging",
                  "style",
                  "dragHandleClassName",
                  "position",
                  "onMouseDown",
                  "onMouseUp",
                  "dragAxis",
                  "dragGrid",
                  "bounds",
                  "enableUserSelectHack",
                  "cancel",
                  "children",
                  "onResizeStart",
                  "onResize",
                  "onResizeStop",
                  "onDragStart",
                  "onDrag",
                  "onDragStop",
                  "resizeHandleStyles",
                  "resizeHandleClasses",
                  "resizeHandleComponent",
                  "enableResizing",
                  "resizeGrid",
                  "resizeHandleWrapperClass",
                  "resizeHandleWrapperStyle",
                  "scale",
                  "allowAnyClick",
                ]),
                O = this.props.default ? j({}, this.props.default) : void 0;
              delete D.default;
              var P = j(
                  j(j({}, C), r || i ? { cursor: "auto" } : { cursor: "move" }),
                  o
                ),
                R = this.offsetFromParent,
                M = R.left,
                W = R.top;
              s && (t = { x: s.x - M, y: s.y - W });
              var H = this.state.resizing ? void 0 : t,
                k = this.state.resizing ? "both" : u;
              return (0, n.createElement)(
                N,
                {
                  ref: this.refDraggable,
                  handle: i ? ".".concat(i) : void 0,
                  defaultPosition: O,
                  onMouseDown: a,
                  onMouseUp: l,
                  onStart: this.onDragStart,
                  onDrag: this.onDrag,
                  onStop: this.onDragStop,
                  axis: k,
                  disabled: r,
                  grid: p,
                  bounds: h ? this.state.bounds : void 0,
                  position: H,
                  enableUserSelectHack: c,
                  cancel: f,
                  scale: x,
                  allowAnyClick: z,
                  nodeRef: this.resizableElement,
                },
                (0, n.createElement)(
                  E,
                  j({}, D, {
                    ref: this.refResizable,
                    defaultSize: O,
                    size: this.props.size,
                    enable:
                      "boolean" == typeof m
                        ? {
                            bottom: m,
                            bottomLeft: m,
                            bottomRight: m,
                            left: m,
                            right: m,
                            top: m,
                            topLeft: m,
                            topRight: m,
                          }
                        : m,
                    onResizeStart: this.onResizeStart,
                    onResize: this.onResize,
                    onResizeStop: this.onResizeStop,
                    style: P,
                    minWidth: this.props.minWidth,
                    minHeight: this.props.minHeight,
                    maxWidth: this.state.resizing
                      ? this.state.maxWidth
                      : this.props.maxWidth,
                    maxHeight: this.state.resizing
                      ? this.state.maxHeight
                      : this.props.maxHeight,
                    grid: v,
                    handleWrapperClass: w,
                    handleWrapperStyle: S,
                    lockAspectRatio: this.props.lockAspectRatio,
                    lockAspectRatioExtraWidth:
                      this.props.lockAspectRatioExtraWidth,
                    lockAspectRatioExtraHeight:
                      this.props.lockAspectRatioExtraHeight,
                    handleStyles: g,
                    handleClasses: b,
                    handleComponent: y,
                    scale: this.props.scale,
                  }),
                  d
                )
              );
            }),
            (e.defaultProps = {
              maxWidth: Number.MAX_SAFE_INTEGER,
              maxHeight: Number.MAX_SAFE_INTEGER,
              scale: 1,
              onResizeStart: function () {},
              onResize: function () {},
              onResizeStop: function () {},
              onDragStart: function () {},
              onDrag: function () {},
              onDragStop: function () {},
            }),
            e
          );
        })(n.PureComponent);
    },
    84589: function (t, e, r) {
      var o, i, n, s, a, l, u, p, h, c;
      t.exports =
        ((o = r(70079)),
        (n = !(i = "undefined" == typeof window) && "ResizeObserver" in window),
        (s = function () {}),
        (a = n
          ? new ResizeObserver(function (t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e],
                  o = r.target,
                  i = o.getBoundingClientRect(),
                  n = o.$$useElementDimensionsSet;
                n && n(Object.assign(i, r));
              }
            })
          : { observe: s, unobserve: s }),
        (l = i ? o.useEffect : o.useLayoutEffect),
        (p = new (u = (function () {
          function t() {
            (this.bottom = 0),
              (this.height = 0),
              (this.left = 0),
              (this.right = 0),
              (this.top = 0),
              (this.width = 0),
              (this.x = 0),
              (this.y = 0);
          }
          return (
            (t.prototype.toJSON = function () {
              return JSON.stringify(this);
            }),
            t
          );
        })())()),
        (c = Object.assign(new u(), {
          contentBoxSize: (h = { inlineSize: 0, blockSize: 0 }),
          borderBoxSize: h,
          contentRect: p,
          target: null,
        })),
        function () {
          var t = o.useRef(null),
            e = o.useState(c),
            r = e[0],
            i = e[1],
            n = o.useCallback(function (e) {
              t.current && a.unobserve(t.current),
                e instanceof Element &&
                  ((e.$$useElementDimensionsSet = i), a.observe(e));
            }, []);
          return (
            l(function () {
              return function () {
                t.current && a.unobserve(t.current);
              };
            }, []),
            [r, n]
          );
        });
    },
  },
]);
//# sourceMappingURL=1966.8596a5c250b2c4f7.js.map
