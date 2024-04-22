(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8682],
  {
    1588: function (e, t, r) {
      "use strict";
      var n,
        s = r(70079);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = (e) =>
        s.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 22,
              height: 22,
              fill: "none",
              viewBox: "0 0 22 22",
            },
            e
          ),
          n ||
            (n = s.createElement(
              "g",
              { id: "arrow-send" },
              s.createElement("path", {
                id: "vector",
                fill: "currentcolor",
                fillRule: "evenodd",
                d: "M16.813 10.387a.867.867 0 0 1 0 1.226l-4.333 4.333a.867.867 0 0 1-1.226-1.226l2.854-2.853H5.8a.867.867 0 1 1 0-1.734h8.308L11.254 7.28a.867.867 0 0 1 1.226-1.226z",
                clipRule: "evenodd",
              })
            ))
        );
    },
    88894: function (e, t, r) {
      "use strict";
      var n,
        s = r(70079);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = (e) =>
        s.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          n ||
            (n = s.createElement(
              "g",
              { id: "arrow-send" },
              s.createElement("path", {
                id: "vector",
                fill: "currentcolor",
                fillRule: "evenodd",
                d: "M11.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 8.414V18a1 1 0 1 1-2 0V8.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z",
                clipRule: "evenodd",
              })
            ))
        );
    },
    40035: function (e, t, r) {
      "use strict";
      var n,
        s = r(70079);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = (e) =>
        s.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          n ||
            (n = s.createElement(
              "g",
              { id: "icon / tuning" },
              s.createElement("path", {
                id: "vector",
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M14.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3.874 1a4.002 4.002 0 0 1 7.748 0H20a1 1 0 1 1 0 2h-1.626a4.002 4.002 0 0 1-7.748 0H4a1 1 0 0 1 0-2zM9.5 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3.874 1a4.002 4.002 0 0 1 7.748 0H20a1 1 0 1 1 0 2h-6.626a4.002 4.002 0 0 1-7.748 0H4a1 1 0 1 1 0-2z",
                clipRule: "evenodd",
              })
            ))
        );
    },
    98834: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoContactsEditor: function () {
            return b;
          },
        });
      var n = r(18450),
        s = r(49305),
        a = r(5427),
        l = r(9182),
        i = r(41251),
        o = r(70187),
        c = r(89899),
        u = r(32870),
        d = r(67680),
        m = r(19841),
        p = r(70079),
        h = r(9063),
        f = r(35250);
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function b(e) {
        var t, r, n;
        let { gizmoEditorData: a, updateGizmo: l } = e,
          o =
            null == a || null === (t = a.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === s.qK.CONTACTS),
          { 0: u, 1: m } = (0, p.useState)(
            null !==
              (r =
                null == o || null === (n = o.settings) || void 0 === n
                  ? void 0
                  : n.contacts) && void 0 !== r
              ? r
              : []
          ),
          { 0: g, 1: b } = (0, p.useState)(!1),
          y = (0, h.Z)(),
          j = (e) => {
            l((t) =>
              x(
                x({}, t),
                {},
                {
                  tools: o
                    ? t.tools.map((t) =>
                        t.type === s.qK.CONTACTS
                          ? x(
                              x({}, t),
                              {},
                              {
                                settings: x(
                                  x({}, t.settings),
                                  {},
                                  { contacts: e }
                                ),
                              }
                            )
                          : t
                      )
                    : [
                        ...t.tools,
                        { type: s.qK.CONTACTS, settings: { contacts: e } },
                      ],
                }
              )
            );
          };
        return (0, f.jsxs)(i.hj, {
          children: [
            g &&
              (0, f.jsx)(d.ZP, {
                onClick: (e) => {
                  null != e &&
                    e.gizmo.id &&
                    (u.includes(e.gizmo.id)
                      ? m(u.filter((t) => t !== e.gizmo.id))
                      : m([...u, e.gizmo.id]));
                },
                onClose: () => {
                  b(!1), j(u);
                },
              }),
            (0, f.jsx)(i.lX, {
              label: "Contacts",
              description: y.formatMessage({
                id: "gizmo.contactsExplanation",
                defaultMessage: "Other GPTs that this GPT can talk to.",
              }),
            }),
            (0, f.jsx)("div", {
              className: "mb-2 space-y-1",
              children: u.map((e, t) =>
                (0, f.jsx)(
                  v,
                  {
                    gizmoId: e,
                    onRemove: () => {
                      let t = u.filter((t) => t !== e);
                      m(t), j(t);
                    },
                  },
                  t
                )
              ),
            }),
            (0, f.jsx)(c.cY, { onClick: () => b(!0), children: "Add Contact" }),
          ],
        });
      }
      function v(e) {
        var t;
        let { gizmoId: r, onRemove: n } = e,
          { data: s } = (0, l.b9)(r),
          i = !!(null == s || null === (t = s.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(u.U9.FirstParty));
        return s
          ? (0, f.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between rounded-lg bg-token-main-surface-secondary px-2",
              children: [
                (0, f.jsxs)("div", {
                  className: (0, m.default)(
                    "group flex h-10 items-center gap-2 rounded-lg px-2 font-medium"
                  ),
                  children: [
                    (0, f.jsx)(a.Z, {
                      isFirstParty: i,
                      src: s.gizmo.display.profile_picture_url,
                      className: "h-6 w-6 flex-shrink-0",
                    }),
                    (0, f.jsxs)("div", {
                      className:
                        "space-x-2 overflow-hidden text-ellipsis text-sm font-light text-token-text-secondary",
                      children: [
                        (0, f.jsx)("span", {
                          className: "font-medium text-token-text-primary",
                          children: s.gizmo.display.name,
                        }),
                        (0, f.jsx)("span", {
                          className:
                            "flex-grow truncate text-sm font-light text-token-text-secondary sm:max-w-xs lg:max-w-md",
                          children: s.gizmo.display.description,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsx)("button", {
                  className: "text-sm font-bold",
                  onClick: n,
                  children: (0, f.jsx)(o.v7, {
                    className:
                      "icon-md text-token-text-secondary hover:text-token-text-primary",
                  }),
                }),
              ],
            })
          : null;
      }
    },
    63577: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoRolodex: function () {
            return x;
          },
        });
      var n = r(18450),
        s = r(5427),
        a = r(94063),
        l = r(67680),
        i = r(11655),
        o = r(61236),
        c = r(19841),
        u = r(70079),
        d = r(1454),
        m = r(84692),
        p = r(35250);
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let g = () =>
        (0, o.a)({
          queryKey: ["gizmoRolodex"],
          queryFn: async () => a.U.getRolodex(),
        });
      function x() {
        let { 0: e, 1: t } = (0, u.useState)(!1),
          { 0: r, 1: n } = (0, u.useState)(null),
          { data: s } = g();
        return (0, p.jsxs)(i.ZR, {
          children: [
            (0, p.jsx)("div", {
              className: "mb-2",
              children: (0, p.jsx)(m.Z, {
                id: "personalizationSettings.rolodexLabel",
                defaultMessage: "Rolodex",
              }),
            }),
            r
              ? (0, p.jsx)("div", {
                  className: "animate-slideDownAndFadeLong",
                  children: (0, p.jsx)(
                    v,
                    f(
                      f({}, r),
                      {},
                      {
                        onBack: () => {
                          n(null);
                        },
                      }
                    )
                  ),
                })
              : e
                ? (0, p.jsx)("div", {
                    className: "animate-slideDownAndFadeLong",
                    children: (0, p.jsx)(l.ZP, {
                      onClick: async (e) => {
                        null != e &&
                          e.gizmo.id &&
                          (await a.U.upsertToRolodex({ gizmoId: e.gizmo.id }),
                          t(!1));
                      },
                      onClose: () => {
                        t(!1);
                      },
                    }),
                  })
                : (0, p.jsxs)("div", {
                    role: "button",
                    className: "grid grid-cols-3 items-center gap-1",
                    children: [
                      (null != s ? s : []).map((e, t) =>
                        (0, p.jsx)(
                          b,
                          {
                            gizmo: e.gizmo,
                            rolodex: e.rolodex,
                            onClick: async () => {
                              n(e);
                            },
                          },
                          t
                        )
                      ),
                      (null != s ? s : []).length < 3 &&
                        (0, p.jsx)(b, {
                          onClick: () => {
                            t(!0);
                          },
                        }),
                    ],
                  }),
          ],
        });
      }
      function b(e) {
        let { gizmo: t, rolodex: r, onClick: n } = e,
          { 0: l, 1: i } = (0, u.useState)(!1),
          o = null == r ? void 0 : r.is_rolodex;
        return (0, p.jsx)("div", {
          className: (0, c.default)(
            "relative flex max-w-32 flex-col items-center space-y-1 rounded-xl font-medium",
            o ? "border border-brand-green-800" : "",
            l ? "border border-token-border-heavy" : ""
          ),
          onMouseOverCapture: () => {
            i(!0);
          },
          onMouseOutCapture: () => {
            i(!1);
          },
          children:
            l && t
              ? (0, p.jsxs)("div", {
                  className: "flex items-center space-x-6 p-7",
                  children: [
                    o &&
                      (0, p.jsx)(d.vPQ, {
                        onClick: n,
                        className: "icon-xl opacity-50 hover:opacity-100",
                      }),
                    o
                      ? (0, p.jsx)(d.faY, {
                          onClick: async () => {
                            await a.U.upsertToRolodex({
                              gizmoId: t.id,
                              remove: !0,
                            });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        })
                      : (0, p.jsx)(d.tUt, {
                          onClick: async () => {
                            await a.U.upsertToRolodex({ gizmoId: t.id });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        }),
                  ],
                })
              : t
                ? (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className:
                        "flex flex-col items-center p-3 hover:opacity-50",
                      children: [
                        (0, p.jsx)(s.Z, {
                          className: "mb-2 h-10 w-10",
                          isFirstParty: !1,
                          src: t.display.profile_picture_url,
                        }),
                        (0, p.jsx)("div", {
                          className: "truncate font-medium",
                          children: t.display.name,
                        }),
                      ],
                    }),
                  })
                : (0, p.jsxs)("div", {
                    className: "flex flex-col items-center p-5",
                    children: [
                      (0, p.jsx)(d.O9D, { className: "icon-lg mb-2" }),
                      (0, p.jsx)("span", {
                        children: (0, p.jsx)(m.Z, {
                          id: "gizmoRolodex.emptyLabel",
                          defaultMessage: "GPT",
                        }),
                      }),
                    ],
                  }),
        });
      }
      function v(e) {
        var t;
        let { gizmo: r, rolodex: n, onBack: l } = e,
          { 0: i, 1: o } = (0, u.useState)(
            null !== (t = null == n ? void 0 : n.usage_description) &&
            void 0 !== t
              ? t
              : ""
          );
        return (0, p.jsxs)("div", {
          className: "flex flex-col items-center p-3",
          children: [
            (0, p.jsx)(s.Z, {
              className: "mb-2 h-10 w-10",
              isFirstParty: !1,
              src: r.display.profile_picture_url,
            }),
            (0, p.jsx)("div", {
              className: "truncate font-medium",
              children: r.display.name,
            }),
            (0, p.jsx)("div", {
              className: "w-full",
              children: (0, p.jsx)("textarea", {
                rows: 5,
                value: i,
                onChange: (e) => o(e.target.value),
                placeholder: "When should your assistant talk to this GPT?",
                className:
                  "m-2 w-full resize-none rounded bg-token-main-surface-secondary text-xs text-token-text-primary",
              }),
            }),
            (0, p.jsxs)("div", {
              className: "mt-2 flex space-x-32",
              children: [
                (0, p.jsx)("div", {
                  onClick: l,
                  role: "button",
                  children: (0, p.jsx)(d.YFh, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: () => {
                    a.U.upsertToRolodex({ gizmoId: r.id, usageDescription: i }),
                      l();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.mW3, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: async () => {
                    await a.U.upsertToRolodex({ gizmoId: r.id, remove: !0 }),
                      l();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.Ybf, { className: "icon-md" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    68696: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          EditorEntryButton: function () {
            return ew;
          },
          EditorModal: function () {
            return eO;
          },
          EditorPageBody: function () {
            return ek;
          },
        });
      var n,
        s = r(18450),
        a = r(99945),
        l = r(29287),
        i = r(11335),
        o = r(67217),
        c = r(70187),
        u = r(21643),
        d = r(30269),
        m = r(78103),
        p = r(51362);
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let f = {
          systemPrompt: "You are a helpful assistant.",
          userPrompt: "Make it better.",
        },
        g = (0, m.ZP)(
          (0, p.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(r), !0).forEach(function (t) {
                      (0, s.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : h(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
              }
              return e;
            })({}, f)
          )
        );
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let b = { lastRequest: {}, lastResponse: "" },
        v = (0, m.ZP)(
          (0, p.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? x(Object(r), !0).forEach(function (t) {
                      (0, s.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : x(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
              }
              return e;
            })({}, b)
          )
        );
      var y = r(4466),
        j = r(48879);
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let w = "https://jidori.apps.openai.com";
      class O {
        static healthcheck() {
          return y.c.get("".concat(w, "/api/completion"));
        }
        static async streamCompletion(e) {
          let { completionRequest: t, onMessage: r } = e;
          v.setState((e) => {
            e.lastRequest = t;
          }),
            v.setState((e) => {
              e.lastResponse = "";
            }),
            await (0, j.L)("".concat(w, "/api/completion"), {
              method: "POST",
              headers: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? A(Object(r), !0).forEach(function (t) {
                        (0, s.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : A(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                }
                return e;
              })(
                {
                  "Content-Type": "application/json",
                  Accept: "text/event-stream",
                  Connection: "keep-alive",
                },
                await y.c.getAuthedHeaders()
              ),
              body: JSON.stringify({
                system_prompt: t.systemPrompt,
                user_prompt: t.userPrompt,
                model: t.model,
              }),
              credentials: "include",
              onmessage(e) {
                var t;
                (t = e.data),
                  v.setState((e) => {
                    e.lastResponse += t;
                  }),
                  r(e.data);
              },
              onclose() {
                console.log("Connection closed by the server");
              },
              onerror(e) {
                throw (console.log("There was an error from server", e), e);
              },
            });
        }
      }
      var k = r(99715),
        _ = r(61888),
        N = r(70079),
        S = r(1454),
        P = r(35250);
      function E() {
        var e;
        let { 0: t, 1: r } = (0, N.useState)(!1),
          n = g(),
          s = v(),
          a = async () => {
            r(!0),
              await O.streamCompletion({
                completionRequest: n,
                onMessage: _.noop,
              }),
              r(!1);
          };
        return (0, P.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, P.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, P.jsx)("span", { children: "User Prompt" }),
                (0, P.jsx)(u.Z, {
                  name: "userPrompt",
                  placeholder: "Your prompt...",
                  onChange: (e) => {
                    var t;
                    (t = e.target.value),
                      g.setState((e) => {
                        e.userPrompt = t;
                      });
                  },
                  value: n.userPrompt,
                }),
              ],
            }),
            (0, P.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, P.jsx)("span", { children: "System Prompt" }),
                (0, P.jsx)(d.Z, {
                  placeholder: "You are a helpful assistant",
                  rows: 8,
                  onChange: (e) => {
                    var t;
                    (t = e.target.value),
                      g.setState((e) => {
                        e.systemPrompt = t;
                      });
                  },
                  value: n.systemPrompt,
                }),
              ],
            }),
            (0, P.jsx)("div", {
              className: "self-start",
              children: (0, P.jsx)(C, {
                model:
                  null !== (e = n.model) && void 0 !== e ? e : "gpt-3.5-turbo",
                onChange: (e) => {
                  g.setState((t) => {
                    t.model = e;
                  });
                },
              }),
            }),
            (0, P.jsx)(l.z, {
              loading: t,
              color: "primary",
              onClick: a,
              className: "max-w-xs grow-0",
              children: (0, P.jsx)(S.LbG, { className: "icon-sm" }),
            }),
            (0, P.jsxs)("div", {
              className: "my-2 space-y-2 overflow-x-auto",
              children: [
                (0, P.jsx)("div", { children: "Last Request" }),
                (0, P.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: JSON.stringify(s.lastRequest, null, 2),
                }),
                (0, P.jsx)("div", { children: "Last Response" }),
                (0, P.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: s.lastResponse
                    .split("<br/>")
                    .map((e) =>
                      (0, P.jsxs)(P.Fragment, {
                        children: [e, (0, P.jsx)("br", {})],
                      })
                    ),
                }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        let { model: t, onChange: r } = e;
        return (0, P.jsxs)(k.fC, {
          children: [
            (0, P.jsx)(k.xz, {
              children: (0, P.jsx)("div", {
                role: "button",
                className:
                  "rounded border-4 border-token-border-light px-4 py-2",
                children: t,
              }),
            }),
            (0, P.jsx)(k.Uv, {
              children: (0, P.jsxs)(k.VY, {
                sideOffset: 7,
                children: [
                  (0, P.jsx)(k.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => r("gpt-3.5-turbo"),
                    children: "3.5T",
                  }),
                  (0, P.jsx)(k.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => r("gpt-4-turbo-preview"),
                    children: "4T",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : R(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let I = { comments: [] },
        M = (0, m.ZP)((0, p.n)(() => D({}, I))),
        U = {
          upsertComment: (e) => {
            M.setState((t) => {
              let r = t.comments.findIndex((t) => t.id === e.id);
              -1 === r
                ? t.comments.push(e)
                : (t.comments[r] = D(D({}, t.comments[r]), e));
            });
          },
          deleteComment: (e) => {
            M.setState((t) => {
              t.comments = t.comments.filter((t) => t.id !== e);
            });
          },
        };
      function Z(e) {
        let { comment: t, onAccept: r, onReject: n } = e;
        return (0, P.jsxs)(
          "div",
          {
            className:
              "relative flex max-w-sm flex-col space-y-2 rounded-lg border border-token-border-heavy bg-token-sidebar-surface-tertiary p-4 drop-shadow-lg",
            children: [
              (0, P.jsxs)("div", {
                className:
                  "line-clamp-2 overflow-ellipsis break-all text-sm italic hover:line-clamp-none hover:overflow-visible",
                children: [
                  (0, P.jsx)("span", {
                    className: "font-medium",
                    children: t.author,
                  }),
                  "\xa0",
                  'replaced "'.concat(t.original, '"'),
                ],
              }),
              (0, P.jsx)("p", { className: "text-sm", children: t.completion }),
              (0, P.jsxs)("div", {
                className: "flex space-x-2",
                children: [
                  (0, P.jsx)("div", {
                    role: "button",
                    className:
                      "text-xs text-token-text-secondary hover:underline",
                    onClick: n,
                    children: (0, P.jsx)(S.q5L, { className: "icon-sm" }),
                  }),
                  (0, P.jsx)("div", {
                    role: "button",
                    className: "text-xs text-brand-green hover:underline",
                    onClick: r,
                    children: (0, P.jsx)(S.UgA, { className: "icon-sm" }),
                  }),
                ],
              }),
            ],
          },
          t.id
        );
      }
      function L() {
        let e = M();
        return (0, P.jsx)("div", {
          className: "flex flex-col gap-2",
          children: e.comments.map((e) =>
            (0, P.jsx)(
              Z,
              { comment: e, onAccept: _.noop, onReject: _.noop },
              e.id
            )
          ),
        });
      }
      var F = r(85452),
        z = r(95407),
        T = r(55681),
        q = r(79134),
        Q = r(3107),
        B = r.n(Q);
      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : V(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let H = new q.V_({
        nodes: G(
          G({}, T.fK.spec.nodes.toObject()),
          {},
          {
            generatedText: {
              inline: !0,
              group: "inline",
              content: "text*",
              attrs: { class: { default: "generated-text" } },
              parseDOM: [{ tag: "span.generated-text" }],
              toDOM: () => ["span", { class: B()["generated-text"] }, 0],
            },
          }
        ),
        marks: G({}, T.fK.spec.marks.toObject()),
      });
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : K(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let W = async (e, t, r, n) => {
        let s,
          a = "",
          { from: l } = e.state.selection,
          i = e.state.selection.content(),
          o = i.content.textBetween(0, i.content.size);
        try {
          await O.streamCompletion({
            completionRequest: X(
              X(
                {},
                (function (e) {
                  let { existingContent: t, completion: r } = e;
                  return {
                    systemPrompt: r.systemPrompt,
                    userPrompt: 'This is the text that is currently selected: "'
                      .concat(
                        t,
                        '"\nI want to rewrite this text with this guidance: '
                      )
                      .concat(
                        r.userPrompt,
                        "\nGive me the plain rewritten text without quotes, nothing else."
                      ),
                  };
                })({ existingContent: o, completion: t })
              ),
              {},
              { model: t.model }
            ),
            onMessage: (t) => {
              var r, n;
              let i = e.state.tr;
              0 === a.length && i.deleteSelection(), (a += t);
              let o =
                l +
                (null !==
                  (r =
                    null === (n = s) || void 0 === n ? void 0 : n.nodeSize) &&
                void 0 !== r
                  ? r
                  : 0);
              (s = H.nodes.generatedText.create({}, H.text(a))),
                i.replaceRangeWith(l, o, s),
                e.dispatch(i);
            },
          }),
            r(o, a);
        } catch (e) {
          n(e);
        }
      };
      var Y = r(8844);
      function J(e) {
        let {
            visible: t,
            style: r,
            toggleBold: n,
            toggleItalic: s,
            view: a,
            onHide: l,
          } = e,
          { 0: i, 1: o } = (0, N.useState)(!1),
          c = g();
        if (!t) return null;
        let u = (e, t) => {
          o(!1),
            l(),
            U.upsertComment({
              id: (0, Y.Z)(),
              completion: t,
              original: e,
              author: "Jidori",
            });
        };
        return (0, P.jsxs)("div", {
          style: r,
          className:
            "absolute flex items-center rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary text-sm font-medium text-token-text-primary drop-shadow-md",
          children: [
            (0, P.jsx)("div", {
              role: "button",
              onClick: n,
              className: "border-r border-token-border-light p-2",
              children: "Bold",
            }),
            (0, P.jsx)("div", {
              role: "button",
              onClick: s,
              className: "border-l border-token-border-light p-2",
              children: "Italic",
            }),
            (0, P.jsx)("div", {
              role: "button",
              onClick: () => {
                o(!0),
                  W(a, c, u, (e) => {
                    z.m.danger("Error replacing selection", e), o(!1);
                  });
              },
              className: "border-l border-token-border-light p-2",
              children: i ? (0, P.jsx)(F.Z, {}) : "Replace",
            }),
          ],
        });
      }
      var $ = r(71307),
        ee = r(60314);
      let et = (0, $.S0)(/^\s*([-+*])\s$/, H.nodes.bullet_list),
        er = (0, $.S0)(/^\s*>\s$/, H.nodes.blockquote),
        en = (0, $.zK)(/^```$/, H.nodes.code_block),
        es = (0, $.zK)(/^#\s$/, H.nodes.heading, () => ({ level: 1 })),
        ea = (0, $.zK)(/^##\s$/, H.nodes.heading, () => ({ level: 2 })),
        el = (0, $.zK)(/^###\s$/, H.nodes.heading, () => ({ level: 3 })),
        ei = new $.VK(/^---$/, (e, t, r, n) => {
          let { tr: s } = e;
          if (t) {
            let e = H.nodes.paragraph.create(),
              t = H.nodes.horizontal_rule.create();
            s.replaceWith(r - 1, n, q.HY.from([t, e]));
            let a = s.mapping.map(n + 1);
            s.setSelection(ee.Bs.near(s.doc.resolve(a)));
          }
          return s;
        }),
        eo = (0, $.Hw)({ rules: [et, er, en, es, ea, el, ei] });
      var ec = r(12498),
        eu = r(81093);
      let ed = {
        "Mod-z": eu.Yw,
        "Mod-y": eu.KX,
        "Mod-b": (0, ec.w9)(H.marks.strong),
        "Mod-i": (0, ec.w9)(H.marks.em),
      };
      function em(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ep(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? em(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : em(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let eh = new T.xj(H, T.EU.tokenizer, ep({}, T.EU.tokens));
      new T.nZ(ep({}, T.Dm.nodes), ep({}, T.Dm.marks));
      var ef = r(19841),
        eg = r(18004),
        ex = r(88488),
        eb = r(56637),
        ev = r(84692);
      function ey(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ej(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ey(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ey(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let eA = r(21389).Z.button(
        n ||
          (n = (0, a.Z)([
            "p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible",
          ]))
      );
      function ew(e) {
        let { onClick: t } = e;
        return (0, P.jsx)(i.u, {
          label: (0, P.jsx)(ev.Z, {
            id: "ConversationTurn.openEditorTooltip",
            defaultMessage: "Open in Editor",
          }),
          sideOffset: 0,
          children: (0, P.jsx)(eA, {
            onClick: t,
            children: (0, P.jsx)(c.eu, { className: "icon-md" }),
          }),
        });
      }
      function eO(e) {
        let { message: t, onClose: r } = e;
        if (
          !t ||
          "text" !== t.content.content_type ||
          0 === t.content.parts.length
        )
          return null;
        let n = t.content.parts.join("");
        return (0, P.jsxs)(o.Z, {
          type: "success",
          size: "custom",
          className: "h-full max-w-full",
          isOpen: !0,
          onClose: r,
          children: [
            (0, P.jsx)(ek, { initialContent: n }),
            (0, P.jsxs)("div", {
              className: "absolute bottom-0 right-0 m-4 flex h-[4vh] space-x-2",
              children: [
                (0, P.jsx)(l.z, {
                  color: "neutral",
                  onClick: r,
                  children: "Cancel",
                }),
                (0, P.jsx)(l.z, {
                  color: "primary",
                  onClick: _.noop,
                  children: "Save",
                }),
              ],
            }),
          ],
        });
      }
      function ek(e) {
        let { initialContent: t } = e,
          { 0: r, 1: n } = (0, N.useState)(!1);
        return (
          (0, N.useEffect)(() => {
            let e = (e) => {
              "9" === e.key &&
                (e.metaKey || e.ctrlKey) &&
                (e.preventDefault(), n((e) => !e));
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, P.jsxs)("div", {
            className: "relative grid h-full grid-flow-row grid-cols-8",
            children: [
              (0, P.jsx)("div", {
                className: "no-scrollbar col-span-6 mx-16 my-8 overflow-y-auto",
                children: (0, P.jsx)(e_, { init: t }),
              }),
              (0, P.jsx)("div", {
                className:
                  "col-span-2 flex h-full flex-col overflow-y-auto border-l border-token-border-heavy p-8",
                children: r ? (0, P.jsx)(E, {}) : (0, P.jsx)(L, {}),
              }),
            ],
          })
        );
      }
      function e_(e) {
        let { init: t } = e,
          r = (0, N.useRef)(null),
          { 0: n, 1: s } = (0, N.useState)(null),
          { 0: a, 1: l } = (0, N.useState)(!1),
          { 0: i, 1: o } = (0, N.useState)({}),
          c = (0, N.useCallback)(() => {
            if (!n) return;
            let { anchor: e, head: t } = n.state.selection,
              s = r.current.getBoundingClientRect();
            if (e !== t) {
              let e = n.coordsAtPos(t),
                r = Math.max(0, e.top - s.top - 10),
                a = e.left - s.left;
              o({ top: "".concat(r, "px"), left: "".concat(a, "px") }), l(!0);
            } else l(!1);
          }, [n]);
        return (
          (0, N.useEffect)(() => {
            if (n)
              return (
                n.dom.addEventListener("mouseup", c),
                n.dom.addEventListener("keyup", c),
                () => {
                  n.dom.removeEventListener("mouseup", c),
                    n.dom.removeEventListener("keyup", c);
                }
              );
          }, [n, c]),
          (0, N.useEffect)(() => {
            if (!r.current) return;
            let e = ee.yy.create({
                schema: H,
                doc: ((e) => {
                  if (e && 0 !== e.length) return eh.parse(e);
                })(t),
                plugins: [(0, eu.m8)(), eo, (0, ex.h)(ej(ej({}, ec.YR), ed))],
              }),
              n = new eb.tk(r.current, {
                state: e,
                attributes: { class: B()["jidori-editor"] },
              });
            return (
              (0, eg.Z)(n),
              n.focus(),
              s(n),
              () => {
                n.destroy();
              }
            );
          }, [t]),
          (window.editor = n),
          (0, P.jsxs)("div", {
            className: "w-full",
            children: [
              (0, P.jsx)(J, {
                visible: a,
                style: i,
                toggleBold: () => {
                  n &&
                    ((0, ec.w9)(H.marks.strong)(n.state, n.dispatch),
                    n.focus());
                },
                toggleItalic: () => {
                  n && ((0, ec.w9)(H.marks.em)(n.state, n.dispatch), n.focus());
                },
                onHide: () => l(!1),
                view: n,
              }),
              (0, P.jsx)("div", {
                className: (0, ef.default)(
                  "w-full cursor-text overflow-y-auto text-token-text-primary caret-token-text-primary"
                ),
                ref: r,
              }),
            ],
          })
        );
      }
    },
    30995: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return tO;
        },
      });
      var n,
        s,
        a,
        l,
        i,
        o,
        c,
        u,
        d,
        m = r(73606),
        p = r(19841),
        h = r(77799),
        f = r(83737),
        g = r(70079),
        x = r(1454),
        b = r(1588),
        v = r(35250);
      function y(e) {
        let { currentQuery: t, onUpdateCurrentQuery: r, onSubmit: n } = e,
          s = (0, g.useRef)(null),
          a = (0, g.useRef)(null),
          { 0: l, 1: i } = (0, g.useState)("60%");
        (0, g.useEffect)(() => {
          let e = s.current,
            t = a.current;
          if (!e || !t) return;
          let r = t.style.width,
            n = e.style.width;
          (t.style.width = "60%"),
            (e.style.width = "100%"),
            i(e.scrollWidth > e.clientWidth ? "100%" : "60%"),
            (t.style.width = r),
            (e.style.width = n);
        }, [t]);
        let o = (0, g.useCallback)(
          (e) => {
            "Enter" === e.key && n && (e.preventDefault(), n(t));
          },
          [n, t]
        );
        return (
          (0, g.useEffect)(
            () =>
              (0, h.eR)(document, {
                keydown: (e) => {
                  e.metaKey &&
                    "k" === e.key &&
                    s.current &&
                    (e.preventDefault(), s.current.focus());
                },
              }),
            [s]
          ),
          (0, v.jsxs)(f.E.div, {
            className: "peer relative",
            initial: { width: "60%" },
            animate: { width: l },
            transition: { duration: 0.1 },
            ref: a,
            children: [
              (0, v.jsx)("input", {
                type: "text",
                name: "query",
                id: "query",
                className:
                  "peer w-full text-ellipsis rounded-full border border-token-border-medium bg-token-main-surface-primary py-3 pl-12 pr-14 placeholder-gray-500 outline-none focus:border-token-border-medium focus:ring-0",
                value: t,
                autoComplete: "off",
                spellCheck: !1,
                onKeyDown: o,
                ref: s,
                onChange: (e) => r(e.target.value),
              }),
              n &&
                (0, v.jsx)("button", {
                  onClick: () => (null == n ? void 0 : n(t)),
                  className: (0, p.default)(
                    "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-token-main-surface-tertiary text-token-text-tertiary hover:bg-token-border-light hover:text-token-text-secondary peer-focus:bg-token-text-primary peer-focus:text-token-main-surface-primary peer-focus:hover:opacity-80"
                  ),
                  children: (0, v.jsx)(b.Z, { className: "icon-lg-heavy" }),
                }),
              (0, v.jsx)("div", {
                className: "absolute left-5 top-1/2 -translate-y-1/2",
                children: (0, v.jsx)(x.jRj, {}),
              }),
            ],
          })
        );
      }
      var j = r(75388),
        A = r(15118),
        w = r(55593),
        O = r(71107);
      let k = (0, g.forwardRef)(function (e, t) {
        let {
            readyState: r,
            hasSubmittedInitialQuery: n,
            currentQuery: s,
            onUpdateCurrentQuery: a,
            onSubmit: l,
            className: i,
          } = e,
          o = (0, O.z8)(O.QP.firstAssistantMessage),
          c = o && "error" === o.status,
          u = r !== A.kQ.OPEN || !s || c;
        return (0, v.jsx)("div", {
          className: i,
          children: (0, v.jsx)(w.X, {
            disabled: c,
            autoFocus: !n,
            value: s,
            onChange: (e) => {
              a(e.target.value);
            },
            onSubmit: () => !u && l(s),
            ref: t,
            keyEventFilter: (e) => "u" === e.key && e.metaKey,
            hint: "⌘U",
            placeholder: "Ask a follow-up...",
            inputDecorationType: "avatar",
            overflowDirection: "up",
          }),
        });
      });
      var _ = r(18450),
        N = r(99945),
        S = r(92226),
        P = r(94079),
        E = r(79864),
        C = r(82547),
        R = r(35936),
        D = r(86685),
        I = r(5099),
        M = r(90572),
        U = r(61888),
        Z = r(85252),
        L = r(47567),
        F = r(21389),
        z = r(75138),
        T = r(19323),
        q = r.n(T),
        Q = r(49593),
        B = r(11335),
        V = r(81479),
        G = r(70187),
        H = r(69920),
        K = r(35601),
        X = r(83216);
      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : W(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let J = {
        message: {
          thumbsDown: [
            { label: "Inaccurate", value: "Inaccurate" },
            { label: "Out-of-date", value: "Out-of-date" },
            { label: "Too slow", value: "Too slow" },
            {
              label: "Don't like the sources cited",
              value: "Don't like the sources cited",
            },
            { label: "Too long", value: "Too long" },
            { label: "Too short", value: "Too short" },
            {
              label: "Don't like the style or format",
              value: "Don't like the style or format",
            },
            {
              label: "Issue with the widget",
              value: "Issue with the widget",
              match: (e) => !!e.widget,
            },
          ],
          thumbsUp: [
            { label: "Accurate", value: "Accurate" },
            { label: "Up-to-date", value: "Up-to-date" },
            {
              label: "Like the sources cited",
              value: "Like the sources cited",
            },
            {
              label: "Like the style or format",
              value: "Like the style or format",
            },
            {
              label: "Like the widget",
              value: "Like the widget",
              match: (e) => !!e.widget,
            },
          ],
        },
        link: {
          thumbsDown: [
            { label: "Not relevant", value: "Not relevant" },
            { label: "Out-of-date", value: "Out-of-date" },
            { label: "Ranked too high", value: "Ranked too high" },
            { label: "Ranked too low", value: "Ranked too low" },
            { label: "Bad source", value: "Bad source" },
          ],
          thumbsUp: [
            { label: "Relevant", value: "Relevant" },
            { label: "Up-to-date", value: "Up-to-date" },
            { label: "Ranked appropriately", value: "Ranked appropriately" },
            { label: "Good source", value: "Good source" },
          ],
        },
      };
      async function $(e) {
        var t;
        let r =
            null !== (t = e.element) && void 0 !== t
              ? t
              : document.getElementById("__next"),
          n = await q()(r, {
            backgroundColor: e.isDarkMode ? null : "#ffffff",
          }),
          s = document.createElement("canvas"),
          a = s.getContext("2d"),
          l = (n.height / n.width) * 1440;
        return (
          (s.width = 1440),
          (s.height = l),
          null == a || a.drawImage(n, 0, 0, 1440, l),
          new Promise((e) => {
            s.toBlob(
              (t) => {
                e(t);
              },
              "image/jpeg",
              0.8
            );
          })
        );
      }
      function ee(e) {
        let {
            onSubmit: t,
            message: r,
            thumbsUpTooltip: n,
            thumbsDownTooltip: s,
            screenshotElement: a,
            type: l,
          } = e,
          { 0: i, 1: o } = (0, g.useState)(null),
          { 0: c, 1: u } = (0, g.useState)(null),
          d = (0, H.Gv)();
        return (0, v.jsxs)("div", {
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          children: [
            (0, v.jsx)("div", {
              className: "flex items-center gap-2",
              children: [
                {
                  tooltip: null != n ? n : "Good",
                  rating: "thumbsUp",
                  Icon: G.ib,
                  FilledIcon: G.go,
                },
                {
                  tooltip: null != s ? s : "Bad",
                  rating: "thumbsDown",
                  Icon: G.Q7,
                  FilledIcon: G.W2,
                },
              ].map((e) => {
                let { tooltip: t, rating: r, Icon: n, FilledIcon: s } = e;
                return (0, v.jsx)(
                  B.u,
                  {
                    label: t,
                    sideOffset: 0,
                    className: "flex",
                    children: (0, v.jsx)("button", {
                      className:
                        "block text-token-text-secondary hover:text-token-text-primary",
                      onClick: async () => {
                        o(await $({ element: a, isDarkMode: d })), u(r);
                      },
                      disabled: c === r,
                      children:
                        c === r
                          ? (0, v.jsx)(s, { className: "h-4 w-4" })
                          : (0, v.jsx)(n, { className: "h-4 w-4" }),
                    }),
                  },
                  r
                );
              }),
            }),
            c &&
              (0, v.jsx)(
                V.Z,
                {
                  multiple: !0,
                  onSubmit: (e) =>
                    t(Y(Y({}, e), {}, { screenshot: i, currentRating: c })),
                  onCancel: () => {
                    o(null), u(null);
                  },
                  tagOptions: (function (e) {
                    let { type: t, message: r, rating: n } = e;
                    return J[t][n].filter((e) => !e.match || !r || e.match(r));
                  })({ type: l, rating: c, message: r }),
                  modalOnly: !0,
                  modalTitle: (0, v.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "thumbsUp" === c
                        ? (0, v.jsx)(G.go, { className: "mt-[-2px]" })
                        : (0, v.jsx)(G.W2, { className: "mb-[-2px]" }),
                      " ",
                      "Provide feedback",
                    ],
                  }),
                },
                c
              ),
          ],
        });
      }
      function et(e) {
        let { message: t } = e,
          r = (0, O.z8)(O.QP.conversationId),
          { user: n } = (0, K.A)();
        (0, g.useEffect)(() => {
          r &&
            X.Y.logEvent(X.M.searchTurnFeedbackButtonShown, {
              turn_index: t.turnIndex,
              thread_id: r,
            });
        }, []);
        let s = async (e) => {
          r &&
            e.currentRating &&
            (X.Y.logEvent(X.M.searchTurnFeedbackSubmitted, {
              turn_index: t.turnIndex,
              thread_id: r,
              rating: e.currentRating,
              tags: e.tags,
              text: e.textFeedback,
            }),
            await (0, Q.k4)({
              turnIndex: t.turnIndex,
              threadId: r,
              rating: e.currentRating,
              searchQuery: t.userQuery,
              tags: e.tags,
              text: e.textFeedback,
              screenshot: e.screenshot,
              userEmail: null == n ? void 0 : n.email,
            }));
        };
        return (0, v.jsx)(ee, {
          onSubmit: s,
          type: "message",
          message: t,
          thumbsUpTooltip: "Good response",
          thumbsDownTooltip: "Bad response",
        });
      }
      function er(e) {
        let { url: t, title: r, snippet: n, turnIndex: s } = e,
          a = (0, O.z8)(O.QP.conversationId),
          { user: l, searchQuery: i } = (0, K.A)(),
          o = async (e) => {
            a &&
              e.currentRating &&
              l &&
              (X.Y.logEvent(X.M.searchLinkFeedbackSubmitted, {
                thread_id: a,
                rating: e.currentRating,
                url: t,
                tags: e.tags,
                text: e.textFeedback,
                turn_index: s,
              }),
              await (0, Q.NK)({
                url: t,
                title: r,
                snippet: n,
                threadId: a,
                rating: e.currentRating,
                searchQuery: i,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == l ? void 0 : l.email,
              }));
          };
        return (0, v.jsx)(ee, {
          onSubmit: o,
          type: "link",
          thumbsUpTooltip: "Good link",
          thumbsDownTooltip: "Bad link",
        });
      }
      function en(e) {
        let { data: t } = e;
        return t.expression && void 0 !== t.result
          ? (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("div", {
                  className: "tracking-wide text-token-text-tertiary",
                  children: "".concat(t.expression, "="),
                }),
                (0, v.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.result,
                }),
              ],
            })
          : null;
      }
      function es(e) {
        let { data: t } = e;
        if (!t.price || !t.asset) return null;
        let r = 100 * t.price.changePercent,
          n = r >= 0;
        return (0, v.jsxs)("div", {
          className: "flex justify-between",
          children: [
            (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.asset.ticker,
                }),
                (0, v.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: t.asset.name,
                }),
              ],
            }),
            (0, v.jsxs)("div", {
              children: [
                (0, v.jsxs)("div", {
                  className: "text-3xl font-medium",
                  children: ["$", t.price.price.toFixed(2)],
                }),
                (0, v.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, v.jsxs)("span", {
                      className: (0, p.default)(
                        "flex items-center gap-1",
                        n ? "text-green-400" : "text-red-500"
                      ),
                      children: [
                        n ? (0, v.jsx)(x.iRh, {}) : (0, v.jsx)(x.tv1, {}),
                        Math.abs(r).toFixed(2),
                        "%",
                      ],
                    }),
                    " ",
                    "today",
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ea = r(11265);
      function el(e) {
        let { data: t } = e,
          { 0: r, 1: n } = (0, g.useState)(0),
          s = t.conferences.map((e, t) =>
            (0, v.jsx)(
              "button",
              {
                className: (0, p.default)(
                  r === t
                    ? "bg-token-main-surface-secondary text-token-text-primary"
                    : "bg-transparent text-token-text-tertiary",
                  "rounded-lg px-3 py-1 text-sm font-medium"
                ),
                onClick: () => n(t),
                children: e.name,
              },
              e.name
            )
          );
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsxs)("h2", {
              className: "text-lg font-medium",
              children: [t.league.toUpperCase(), " Standings"],
            }),
            (0, v.jsx)("div", { className: "mt-5 flex gap-1", children: s }),
            t.conferences[r].divisions.map((e) =>
              (0, v.jsxs)(
                "div",
                {
                  className: "mt-5",
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-md font-medium",
                      children: e.name,
                    }),
                    (0, v.jsx)(eu, { league: t.league, teams: e.teams }),
                  ],
                },
                e.name
              )
            ),
          ],
        });
      }
      let ei = (0, F.Z)(ea.Z.HeaderCell)(
          n || (n = (0, N.Z)(["text-token-text-secondary text-xs"]))
        ),
        eo = {
          wins: { column: "W", label: "Wins", format: (e) => e.wins },
          losses: { column: "L", label: "Losses", format: (e) => e.losses },
          ties: { column: "T", label: "Ties", format: (e) => e.ties },
          win_percentage: {
            column: "PCT",
            label: "Win %",
            format: (e) => e.win_percentage,
          },
          games_behind: {
            column: "GB",
            label: "Games Behind",
            format: (e) =>
              e.games_behind
                ? 0 === e.games_behind.conference
                  ? "—"
                  : Math.round(100 * e.games_behind.conference) / 100
                : "",
          },
          conference_record: {
            column: "Conf",
            label: "Conference Record",
            format: (e) => {
              let t = e.records.find((e) => "conference" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          home_record: {
            column: "Home",
            label: "Home Record",
            format: (e) => {
              let t = e.records.find((e) => "home" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          away_record: {
            column: "Away",
            label: "Away Record",
            format: (e) => {
              let t = e.records.find((e) => "away" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          l10_record: {
            column: "L10",
            label: "Last 10 Record",
            format: (e) => {
              let t = e.records.find((e) => "last_10" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          streak: {
            column: "Strk",
            label: "Streak",
            format: (e) =>
              ""
                .concat("win" === e.streak.kind ? "W" : "L")
                .concat(e.streak.length),
          },
          ot_losses: {
            column: "OTL",
            label: "Overtime Losses",
            format: (e) => e.overtime_losses,
          },
          points: { column: "PTS", label: "Points", format: (e) => e.points },
        },
        ec = {
          nba: [
            "wins",
            "losses",
            "win_percentage",
            "games_behind",
            "conference_record",
            "home_record",
            "l10_record",
            "streak",
          ],
          nhl: [
            "wins",
            "losses",
            "ot_losses",
            "win_percentage",
            "points",
            "conference_record",
            "home_record",
            "l10_record",
            "streak",
          ],
          mlb: [
            "wins",
            "losses",
            "win_percentage",
            "home_record",
            "away_record",
            "streak",
            "l10_record",
          ],
        };
      function eu(e) {
        let { league: t, teams: r } = e,
          n = ec[t];
        return (0, v.jsxs)(ea.Z.Root, {
          size: "compact",
          children: [
            (0, v.jsxs)(ea.Z.Header, {
              children: [
                (0, v.jsx)(ei, { children: "Team" }),
                n.map((e) =>
                  (0, v.jsx)(
                    ei,
                    {
                      textAlign: "center",
                      children: (0, v.jsx)("span", {
                        title: eo[e].label,
                        children: eo[e].column,
                      }),
                    },
                    e
                  )
                ),
              ],
            }),
            (0, v.jsx)(ea.Z.Body, {
              children: r.map((e, t) =>
                (0, v.jsxs)(
                  ea.Z.Row,
                  {
                    children: [
                      (0, v.jsxs)(ea.Z.Cell, {
                        children: [
                          (0, v.jsx)("span", {
                            className: "mr-2 text-token-text-secondary",
                            children: t + 1,
                          }),
                          e.name,
                        ],
                      }),
                      n.map((t) =>
                        (0, v.jsx)(
                          ea.Z.Cell,
                          { textAlign: "center", children: eo[t].format(e) },
                          t
                        )
                      ),
                    ],
                  },
                  e.name
                )
              ),
            }),
          ],
        });
      }
      var ed = r(56115),
        em = r(35805),
        ep = r.n(em),
        eh = {
          src: "https://cdn.oaistatic.com/_next/static/media/cloudy.00382cff.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXHY2NjQ0NDLy8vb29v5+fnr6+vl5eXa2trg4ODm5ubu7u7m5ub29vbwicHnAAAADHRSTlMA/fx6XA5ptkLTH2+edEDrAAAACXBIWXMAACxLAAAsSwGlPZapAAAANklEQVR4nEXLMRLAIAzEQN3ZGJKY/383MzSo2UpwG1XjOPeewPu01AVf21Yny7KkhBURkXf+AR8vANHyV63lAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        ef = {
          src: "https://cdn.oaistatic.com/_next/static/media/haze.7bf0628a.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHYupiUoKn/liCfwd3/nAr3vGmOnamyub6otb++vr3/kgamsLj+nxLvgxeVoaycoaKYpbCkkYb9mAz8kQ6zrafrrG+Gl6P/pwLEw727ppHkxaP8kw6coqVwxU3kAAAAGHRSTlMA+5InEsH5piuwqlLAoyF++dGY9vz+wP1uL8iLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nGNgQALcrLzMDAwcnFxsEhKsIIYkm4iMMB8Dj6AAI6O0GAMDC7+4rKiUEAsDAxM7CHDA9QIARrICEXlIYf4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eg = {
          src: "https://cdn.oaistatic.com/_next/static/media/mist.cef57380.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHJycmqs7y8vLu9wsSstLmqs7rN2c2QnaeJmaWotLu1vMC9w8iqtb21vsWUoKmbprCMnKeToayRn6iUoqy6wsXEyc2UiX3wAAAAFnRSTlMAPypdMbv8BKj9FP1ro8yS0tt+4mmkuOtixgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD5JREFUeJwdi0kOwCAMxAZIMgTSffn/U6vUB0s+GEhIgCgqGbKsbysBVLUImwLd/bL5EON09+Me4NaT+t+pDzZgAaO6S7N2AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        ex = {
          src: "https://cdn.oaistatic.com/_next/static/media/partly-cloudy.4f9dbdaf.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHKxcH4hR7/hx7jVQDT1NX/37nHycrOzMzd39/+lwnT09PWzcn/kwDyzqvg3uD5sWrd3d380ZfX19Pr28z/phj/wm6rhz7sAAAAFHRSTlMA7yoiDez+e/4dozWw+vit3TzOTdRPN9MAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA6SURBVHicY2BABizMYEqQX0iUi4GBQZhVhE2Ml4mBk5WDkY9NgIWBk5GDg0OEh4GBgZudnZ2dE6EVAC8cAWG5t2y3AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eb = {
          src: "https://cdn.oaistatic.com/_next/static/media/partly-sunny.0ee3693e.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXkyV/7jwvsjBz2li/voz7z3cXfu4PdrV5MaXHsqTbX0cvj07bm2cj6tVLmxJX/sFX/xmjmzqj/mALj2c11XzOkAAAAEnRSTlMBrVa2NPpeBwAto7fEsGj6/krbj3AZAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nCXLSRLAIAwDQQE2lsgK/P+vqcBpLtMgGEEQoMz0t59XyiJ4+zuKBUJpPH4QVC4+255rXW7zD0GCAdKVkO21AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        ev = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-drizzle.dd0eb5ff.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVMaXHk5OTr6+vq6urR0M80t/rg3dvf398rg87Gysvf39/U1tbu7u7p6emqydfg4ODe3t7x8fHV1NT7VM1KAAAAEXRSTlMAFy6w+0tD/Qqp5GUewcrpraZWRYMAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA6SURBVHicRYvJDcAgDMAMBJJwFvYftkKqVH/8seEnphSvS917AGGpiD4Q6pGj2qH4dG83spy/zQx4AScQASnZdgAuAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        ey = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-showers.0c759a1b.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXHUyb//mQnSzMzU1Nbk4OA0uPwrg87DyMvKyMfgZgD/jVXg0sn/mQ/4iSfm5ub7p0320Kz8y4yszdr/6sLg4ubT1NfPz8/w2MTLzc//wF3w5dj/166cGUAIAAAAGHRSTlMA+u9QNiFLCqb7GQm5gCcV5fmsyPyF0+PKCVdvAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPklEQVR4nB2LxxHAIAzABAFsp5He958zB3roJUGhq4774gcgHO/2+JF83m7+ppZoZu7qgUZX1VBiSalOIAL8SiYB2VyRuGAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ej = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.9801386b.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHc29v19fXmuoXj4+Pb29vGxcXMzMvFt9NvgJ/4cwDG0OTagycssfDJycnX19cAxP+zzd3Ozs7X19e+yszX19jX0MaT0GpmAAAAFXRSTlMAzAzRGz78+wQLUk2GRehTQZ/E56UGd/X5AAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nB3Lxw3AQAwEsdElrZyT3H+pBsw/QUgAopt1BPudaQWa+xh5Fdrmw19v0J+z1hmI9Vimv0WExAc50AG8kA54XAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eA = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain.1537f78c.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXZ4uzg3t7p6ekptPbn5+fj4+Pi4uKIqci/zdHS0dEmtfsitvvq6uokuPvU1NTc3Nzc3Nzs7OzPAM+yAAAAEHRSTlMBTsgfGTvuCqD8UEPLRebB+sYJzgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADhJREFUeJxFizkSwCAMxATYXpMT/v/ZDDRRIzWCH6/Vl0vMeQksRu/jFfasCAPPzCyAzvto+5IEfCu9AVLnfqqIAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        ew = {
          src: "https://cdn.oaistatic.com/_next/static/media/snow-3.42dc282c.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHX19qprq7T09Lp5uLGx8inra/P2eOoqKLJycnT09R7qeGLr+XU191flu+2v8eQte2Iqtdgm/e/ytja2djJysra2dZ6ZAhlAAAAFXRSTlMAPThUG/ItAwqg7SL+xKH5dulF/s1gNdKhAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPklEQVR4nB3LWxaAIAhAwauigNo72v9SO/U/A4oqgJLuZT8VSn+uuQ6kR93mMZAaEVEFkrt7+XTLuf3NzAxeSrAB7pNQq0AAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eO = {
          src: "https://cdn.oaistatic.com/_next/static/media/snow.27e603c5.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEWKvv91qe52rfR0qfZ8tPRyp/ZuoPGLvPV3rvp/yP6exva+OpWMAAAAC3RSTlMBgUmRW2/IHIIcEb3m440AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAqSURBVHicY2BAAHZGRnYQzcTMysrMxMDAwMLBxsbIgsyASzFwckAUQwEAEyUAjOcS3MEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ek = {
          src: "https://cdn.oaistatic.com/_next/static/media/sunny.54f7a772.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXHnoTvomSTwqz7tlCr1egj7jQr8nBH/pAH/jwA71PguAAAACHRSTlMAMwYsV7Surx5kgr8AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAzSURBVHicJYtBDgAgCMO6AaL//7ARe1mTpQA2Q0gxm90ZYK29l4xV5zwhsupdIEk/m/wCFKYAjqDpHCYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        e_ = {
          src: "https://cdn.oaistatic.com/_next/static/media/thunder.8e30f80f.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHkpF3h4+X7kg7Y1dPo5+fm5OLi1M/r6ujHyMrR0tPs7Oy/Tw/e///Yup/tfynq8fraybPS19zm7PPq6uvv8PHoyKHu3c4+VufYAAAAFXRSTlMA/P79MLRCFjn0/m0QH9Oeb/z85dwRAbFkAAAACXBIWXMAACxLAAAsSwGlPZapAAAAP0lEQVR4nEWLMRaAIAzFPtDSFlFArd7/pj5cyJIlARbKrNP5cr8FyPEZZ2RBf1MoxTfsRwpmpoA0IpJZ13/+ADkMAZ7eCPGLAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eN = {
          src: "https://cdn.oaistatic.com/_next/static/media/tornado.bfd2622d.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXG2trK5ubm5urq0tbW7vL22ubm5ubm6u721traoqaqwsrJhMbhvAAAADHRSTlMAEF5+hj0eS3GSpi/6XL38AAAACXBIWXMAACxLAAAsSwGlPZapAAAAMklEQVR4nCWMQRIAIAiEWFez+v+Dm0YucAIQQ7i7F+jGDl9BHecJQGXnD6jMNbHH6A8eGNkAoYRlWWwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eS = {
          src: "https://cdn.oaistatic.com/_next/static/media/windy.5508d183.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXHs6OXS1NT/9t7b3d52rOHe3Nnz8Oupxt/5//nH1urG1ObDyctyqd5qpt7K0tnf1Mnn4NiUuNyKsuJ3sem51/aLvPD9+fbt6OOlzPcR3mK9AAAAFXRSTlMAtFsfXfr+a/0Ot9N3j6VEeEL9+/7IYc79AAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nGNgQABOdnZOMM0lKs7IwMDAzC0mzCHKzsDALskqxMohwcIgyCEmwsHGxsLAwM/DxyvAhNAMADqyAb96EAOJAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      function eP(e) {
        let { weatherResults: t } = e,
          r = t.daily.slice(1),
          n = t.current.timestamp + t.location.timezone,
          s = (0, ed.Z)(new Date(1e3 * n), "EEEE MMM d, yyyy");
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsxs)("div", {
              className:
                "mb-[--snc-1] flex items-center gap-4 border-b border-token-border-medium pb-[--snc-2]",
              children: [
                (0, v.jsxs)("div", {
                  className: "flex-grow",
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-xl font-medium",
                      children: t.location.name,
                    }),
                    (0, v.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children: s,
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsxs)("div", {
                      className: "text-right text-xl font-medium",
                      children: [
                        Math.round(
                          (9 * t.current.temperature.current) / 5 + 32
                        ),
                        "\xb0 F",
                      ],
                    }),
                    (0, v.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children:
                        t.current.description.description
                          .charAt(0)
                          .toUpperCase() +
                        t.current.description.description.slice(1),
                    }),
                  ],
                }),
                (0, v.jsx)("div", {
                  children: (0, v.jsx)(ep(), {
                    alt: t.current.description.description,
                    src: eE(t.current.description.id).src,
                    width: 58,
                    height: 58,
                  }),
                }),
              ],
            }),
            (0, v.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, v.jsx)("div", {
                  className: "font-medium",
                  children: "This week",
                }),
                r.map((e) => {
                  let r = e.description,
                    n = e.timestamp + t.location.timezone,
                    s = (0, ed.Z)(new Date(1e3 * n), "EEEE (M/dd)");
                  return (0, v.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-4",
                      children: [
                        (0, v.jsx)(ep(), {
                          alt: r.description,
                          src: eE(r.id).src,
                          width: 58,
                          height: 58,
                        }),
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)("div", {
                              className: "font-medium",
                              children: s,
                            }),
                            (0, v.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: ""
                                .concat(
                                  Math.round((9 * e.temperature.max) / 5 + 32),
                                  "\xb0F and "
                                )
                                .concat(e.description.description),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.timestamp
                  );
                }),
              ],
            }),
          ],
        });
      }
      function eE(e) {
        if (e >= 200 && e < 300)
          return 211 === e || 212 === e || 221 === e ? e_ : ej;
        if (e >= 300 && e < 500) return e >= 300 && e <= 311 ? ev : eA;
        if (e >= 500 && e < 600)
          return e >= 500 && e <= 504 ? ev : 511 === e ? ew : ey;
        if (e >= 600 && e < 700) return 612 === e || 613 === e ? ew : eO;
        if (e >= 700 && e < 800)
          return 701 === e || 741 === e
            ? eg
            : 771 === e
              ? eS
              : 781 === e
                ? eN
                : ef;
        if (e >= 800 && e < 900) {
          if (800 === e) return ek;
          if (801 === e) return eb;
          if (802 === e) return ex;
        }
        return eh;
      }
      function eC(e) {
        let { widget: t } = e;
        switch (null == t ? void 0 : t.type) {
          case "weather":
            return (0, v.jsx)(eP, { weatherResults: t.data });
          case "finance":
            return (0, v.jsx)(es, { data: t.data });
          case "sports-standings":
            return (0, v.jsx)(el, { data: t.data });
          case "calculator":
            return (0, v.jsx)(en, { data: t.data });
          default:
            return null;
        }
      }
      function eR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eR(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eR(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      F.Z.div(
        s ||
          (s = (0, N.Z)(["grid grid-cols-[min-content_1fr] gap-x-6 gap-y-2"]))
      );
      let eI = F.Z.div(a || (a = (0, N.Z)([""]))),
        eM = (e) => {
          let { children: t, className: r } = e;
          return (0, v.jsx)("div", {
            className: (0, p.default)(
              "gizmo-shadow-stroke flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full",
              r
            ),
            children: t,
          });
        };
      function eU(e) {
        let {
            className: t,
            onRetryQuery: r,
            highlightMessageId: n,
            highlightTurnIndex: s,
          } = e,
          a = (0, O.z8)(O.QP.displayedMessages),
          l = (0, O.z8)(O.QP.hasInitialAssistantResponse),
          i = (0, O.z8)(O.QP.firstFollowupResponseId),
          o = (0, O.z8)(O.QP.firstAssistantMessage);
        return o && "error" === o.status
          ? (0, v.jsx)(eQ, { onRetryClick: r })
          : (0, v.jsx)("div", {
              className: (0, p.default)(
                "flex w-full flex-col gap-[--snc-1] p-[--snc-2]",
                t
              ),
              children: l
                ? a.map((e, t) => {
                    if ("user" === e.role) {
                      let r = (0, U.isArray)(e.text)
                        ? e.text.join("\n")
                        : e.text;
                      return (0, v.jsx)(
                        eZ,
                        { text: r, isFirstFollowup: 1 === t },
                        t
                      );
                    }
                    return "assistant" === e.role
                      ? "error" === e.status
                        ? (0, v.jsx)(
                            eF,
                            {
                              text: "Something went wrong. Please try again.",
                              canRetry: !0,
                              onRetry: () => r(e.userQuery),
                            },
                            t
                          )
                        : (0, v.jsx)(
                            ez,
                            {
                              isFollowup: t > 0,
                              message: e,
                              isHighlighted: e.id === n || e.turnIndex === s,
                              showFollowupNotice: e.id === i,
                            },
                            t
                          )
                      : null;
                  })
                : (0, v.jsx)(eL, {}),
            });
      }
      function eZ(e) {
        let { text: t, isFirstFollowup: r } = e;
        return (0, v.jsxs)("div", {
          className: (0, p.default)(
            "text-bubble flex-end inline-flex items-end justify-end gap-4",
            r && "border-t border-token-border-medium pt-[--snc-2]"
          ),
          children: [
            (0, v.jsx)("div", {
              className:
                "rounded-3xl bg-token-main-surface-tertiary px-5 py-2.5",
              children: (0, v.jsx)(eT, { text: t }),
            }),
            (0, v.jsx)(eM, {
              children: (0, v.jsx)(P.zf, { iconSize: "gizmoConversation" }),
            }),
          ],
        });
      }
      function eL() {
        return (0, v.jsx)(eI, {
          children: (0, v.jsx)(z.H, { lines: 6, variance: 3 }),
        });
      }
      function eF(e) {
        let { text: t, onRetry: r, canRetry: n } = e;
        return (0, v.jsx)(eI, {
          children: (0, v.jsx)(E.Z, {
            type: "danger",
            className:
              "my-0 border border-token-border-light bg-transparent text-token-text-secondary",
            iconClassName: "text-red-500",
            children: (0, v.jsxs)("div", {
              className:
                "flex w-full items-center justify-between text-red-500",
              children: [
                t,
                n &&
                  (0, v.jsx)("button", {
                    onClick: () => r(),
                    className: "red-500 font-medium text-token-text-primary",
                    children: "Retry",
                  }),
              ],
            }),
          }),
        });
      }
      function ez(e) {
        let {
            message: t,
            isHighlighted: r,
            showFollowupNotice: n,
            isFollowup: s,
          } = e,
          a = (0, g.useRef)(null),
          l = (0, O.z8)(O.QP.conversationId),
          {
            id: i,
            turnIndex: o,
            text: c,
            citations: u,
            status: d,
            widget: h,
          } = t,
          f = Array.isArray(c) ? c.join("\n") : c,
          { text: x, displayedCitations: b } = (0, D.vC)(f, null != u ? u : []),
          y = (0, I.u)(
            b.reduce((e, t) => {
              var r, n;
              return t.type === D.Zn.Standard &&
                (null === (r = t.metadata) || void 0 === r
                  ? void 0
                  : r.type) !== "file" &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.url) !=
                  null
                ? [...e, t.metadata.url]
                : e;
            }, [])
          );
        (0, g.useEffect)(() => {
          r &&
            a.current &&
            a.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, [r]);
        let j = "in_progress" === d;
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsxs)(eI, {
              ref: a,
              className: (0, p.default)({
                "-mx-2 rounded-md bg-yellow-100 px-2 py-4 dark:bg-yellow-900":
                  r,
              }),
              children: [
                null != h &&
                  (0, v.jsx)("div", {
                    className:
                      "mb-[--snc-2] border-b border-token-border-medium pb-[--snc-1]",
                    children: (0, v.jsx)(eC, { widget: h }),
                  }),
                (0, v.jsxs)("div", {
                  className: "inline-flex gap-4",
                  children: [
                    s &&
                      (0, v.jsx)(eM, {
                        className: "bg-[#000eff] text-white",
                        children: (0, v.jsx)(m.nI, {
                          className: "h-[14px] w-[14px]",
                        }),
                      }),
                    (0, v.jsxs)("div", {
                      children: [
                        (0, v.jsx)(D.h7.Provider, {
                          value: {
                            clientThreadId: S.Zq,
                            displayType: D.QU.expandAll,
                            displayedCitations: b,
                            isActivelyStreaming: j,
                            message: {
                              id: i,
                              author: { role: S.uU.Assistant, name: "Search" },
                              content: { content_type: S.PX.Text, parts: [f] },
                            },
                            attributions: y,
                            onCitationClicked: (e) => {
                              l &&
                                "webpage" === e.type &&
                                X.Y.logEvent(X.M.searchCitationClicked, {
                                  thread_id: l,
                                  url: e.url,
                                  title: e.title,
                                  pub_date: e.pub_date,
                                  turn_index: o,
                                });
                            },
                            onCitationHovered: (e) => {
                              l &&
                                "webpage" === e.type &&
                                X.Y.logEvent(X.M.searchCitationHovered, {
                                  thread_id: l,
                                  url: e.url,
                                  title: e.title,
                                  pub_date: e.pub_date,
                                  turn_index: o,
                                });
                            },
                          },
                          children: (0, v.jsx)(eT, {
                            text: x,
                            isActivelyStreaming: j,
                          }),
                        }),
                        !j &&
                          (0, v.jsx)("div", {
                            className: "py-4",
                            children: (0, v.jsx)(et, { message: t }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            n &&
              (0, v.jsx)(E.Z, {
                type: "info",
                dismissible: !0,
                className: "border border-token-border-light",
                children:
                  "Follow ups aren't great yet. Please rate poor responses.",
              }),
          ],
        });
      }
      function eT(e) {
        let { text: t, isActivelyStreaming: r = !1 } = e;
        return (0, v.jsx)(eq, {
          className: (0, p.default)(
            "relative text-token-text-primary",
            "" === t && r && "result-thinking",
            r && "result-streaming"
          ),
          children: t,
        });
      }
      function eq(e) {
        let { size: t = "medium", children: r, className: n } = e,
          { resolvedTheme: s } = (0, Z.F)(),
          a = (0, g.useMemo)(
            () =>
              eD(
                eD({}, R.ff),
                {},
                {
                  ol: (e) => {
                    let { start: t = 1, children: r } = e;
                    return (0, v.jsx)("ol", {
                      children: g.Children.map(r, (e, r) => {
                        if ((0, g.isValidElement)(e)) {
                          let n = e.props.children;
                          return (0, v.jsxs)(
                            "li",
                            {
                              children: [
                                (0, v.jsxs)("span", {
                                  className: "mr-2 text-token-text-secondary",
                                  children: [t + r, "."],
                                }),
                                n,
                              ],
                            },
                            r
                          );
                        }
                        return e;
                      }),
                    });
                  },
                }
              ),
            []
          );
        return (0, v.jsx)(M.S, {
          name: "formatted_text_error",
          fallback: () => (0, v.jsx)(v.Fragment, { children: r }),
          children: (0, v.jsx)(L.D, {
            rehypePlugins: R.Yu,
            remarkPlugins: R.Hf,
            linkTarget: "_new",
            className: (0, p.default)(
              n,
              "prose w-full break-words dark:prose-invert",
              "dark" === s ? "dark" : "light",
              "small" === t && "prose-xs"
            ),
            transformLinkUri: R.H,
            components: a,
            children: r,
          }),
        });
      }
      function eQ(e) {
        let { onRetryClick: t } = e;
        return (0, v.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center gap-2",
          children: [
            (0, v.jsx)("button", {
              onClick: () => t(),
              children: (0, v.jsx)(C.muB, {}),
            }),
            "Retry",
          ],
        });
      }
      var eB = r(25617),
        eV = r(67739),
        eG = r(29287),
        eH = r(67217),
        eK = {
          src: "https://cdn.oaistatic.com/_next/static/media/popup-blocked.a4e77057.png",
          height: 40,
          width: 118,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEXx8/nq7PL8/P+7vsS+wcfe4enV2OEVeXw2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGQAQSYGZmZWFgZmNiYGRkYGBpAIAAIUACasMdr/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        };
      let eX = ["query", "label", "labelSide", "className"];
      function eW(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eY(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eW(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eW(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eJ(e) {
        let { query: t, label: r, labelSide: n = "right", className: s } = e,
          a = (0, eV.Z)(e, eX),
          l = (0, g.useRef)({}),
          { 0: i, 1: o } = (0, g.useState)(!1);
        function c(e, t) {
          let r = "compare_".concat(e),
            n = l.current[r];
          n && (n.close(), delete l.current[r]);
          let s = Math.max(window.outerWidth / 2, 500),
            a = Math.max(window.outerHeight - 300, 500),
            i = window.screenY + 300,
            c = window.screenX + e * s;
          (n = l.current[r] =
            window.open(
              t,
              r,
              "width="
                .concat(s, ",height=")
                .concat(a, ",top=")
                .concat(i, ",left=")
                .concat(c)
            )) || o(!0);
        }
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(B.E, {
              label: r,
              sideOffset: 0,
              side: n,
              disabled: !r,
              children: (0, v.jsx)(
                eG.z,
                eY(
                  eY({}, a),
                  {},
                  {
                    onClick: (e) => {
                      var r;
                      c(0, "https://google.com/search?q=".concat(t)),
                        c(1, "https://perplexity.ai/search?q=".concat(t)),
                        null == a ||
                          null === (r = a.onClick) ||
                          void 0 === r ||
                          r.call(a, e);
                    },
                    className: (0, p.default)(
                      "snc-accent-border h-10 w-10 rounded-full bg-transparent p-1 hover:bg-token-main-surface-primary",
                      s
                    ),
                  }
                )
              ),
            }),
            i &&
              (0, v.jsx)(eH.Z, {
                isOpen: !0,
                type: "danger",
                onClose: () => o(!1),
                title: "Popup Blocked",
                description: (0, v.jsxs)("div", {
                  children: [
                    "Your browser is blocking popups. Please allow popups for this site and try again.",
                    (0, v.jsxs)("div", {
                      className: "mt-3 text-xs",
                      children: [
                        (0, v.jsx)(ep(), {
                          className: "mx-auto",
                          src: eK,
                          alt: "Popup blocked screenshot",
                        }),
                        "In Chrome, this setting can be accessed by clicking on the button in the locations bar (the left-most button in the image above).",
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var e$ = r(20735);
      let e0 = ["label", "labelSide", "className"];
      function e1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function e2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e1(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e1(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function e5(e) {
        let { label: t, labelSide: r = "right", className: n } = e,
          s = (0, eV.Z)(e, e0);
        return (0, v.jsx)(B.E, {
          label: t,
          sideOffset: 0,
          side: r,
          disabled: !t,
          children: (0, v.jsx)(
            eG.z,
            e2(
              e2({}, s),
              {},
              {
                className: (0, p.default)(
                  "snc-accent-border h-10 w-10 rounded-full bg-transparent p-1 hover:bg-token-main-surface-primary",
                  n
                ),
              }
            )
          ),
        });
      }
      function e4() {
        return (e4 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e8 = (e) =>
        g.createElement(
          "svg",
          e4(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          l ||
            (l = g.createElement(
              "g",
              { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
              g.createElement("path", {
                id: "Ellipse 32766",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
              }),
              g.createElement("circle", {
                id: "Ellipse 32767",
                cx: 12,
                cy: 11,
                r: 3,
              }),
              g.createElement("path", {
                id: "Vector 2883",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 2 21 6.5M21 2l-4.5 4.5",
              })
            ))
        );
      function e3() {
        return (e3 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e7 = (e) =>
        g.createElement(
          "svg",
          e3(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          i ||
            (i = g.createElement(
              "g",
              { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
              g.createElement("path", {
                id: "Ellipse 32766",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
              }),
              g.createElement("circle", {
                id: "Ellipse 32767",
                cx: 12,
                cy: 11,
                r: 3,
              }),
              g.createElement("path", {
                id: "Vector 2884",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16 5.095 17.667 7 21 2",
              })
            ))
        );
      function e6() {
        return (e6 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e9 = (e) =>
          g.createElement(
            "svg",
            e6(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            o ||
              (o = g.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19.5 8V5.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H9",
              })),
            c ||
              (c = g.createElement("circle", {
                cx: 16,
                cy: 16,
                r: 4,
                stroke: "currentColor",
                strokeWidth: 2,
              })),
            u ||
              (u = g.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: 2,
                d: "m19 19 2 2",
              }))
          ),
        te = r(40035),
        tt = r(90240);
      function tr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tr(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ts(e) {
        let { searchQuery: t, settings: r, onUpdateSettings: n } = e,
          { 0: s, 1: a } = (0, g.useState)(!1),
          { 0: l, 1: i } = (0, g.useState)(!1);
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(eJ, {
              label: "Compare Results (Internal)",
              color: "neutral",
              query: t,
              children: (0, v.jsx)(e9, { className: "icon-md-heavy" }),
            }),
            (0, v.jsx)(e5, {
              label: "Debug Modal (Internal)",
              color: "neutral",
              onClick: () => i(!0),
              children: (0, v.jsx)(G.WP, { className: "icon-md-heavy" }),
            }),
            (0, v.jsx)(e5, {
              label: "Search Settings",
              color: "neutral",
              onClick: () => a(!0),
              children: (0, v.jsx)(te.Z, { className: "icon-md-heavy" }),
            }),
            (0, v.jsx)(e5, {
              label: r.useLocation
                ? "Disable location services"
                : "Enable location services",
              color: "neutral",
              onClick: () => {
                n(tn(tn({}, r), {}, { useLocation: !r.useLocation })),
                  r.useLocation || (0, tt.XB)(!0);
              },
              children: r.useLocation
                ? (0, v.jsx)(e7, { className: "icon-md-heavy" })
                : (0, v.jsx)(e8, { className: "icon-md-heavy" }),
            }),
            l && (0, v.jsx)(eB.q, { isOpen: !0, onDebugClose: () => i(!1) }),
            s &&
              (0, v.jsx)(e$.Zr, {
                onClose: () => a(!1),
                settings: r,
                onUpdateSetting: n,
              }),
          ],
        });
      }
      var ta = r(61082),
        tl = r(58734),
        ti = r(78253);
      function to() {
        return (to = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tc = (e) =>
          g.createElement(
            "svg",
            to(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            d ||
              (d = g.createElement("path", {
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeWidth: 2,
                d: "M20 9v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 4 16.88 4 15.2 4H11c-3.5 0-7 3.5-7 7v4.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20H9m1.5-15-.558 2.512c-.16.72-.24 1.08-.422 1.372a2 2 0 0 1-.636.636c-.291.182-.651.262-1.372.422L5 10.5M17.76 20.355a2.202 2.202 0 0 1-3.115-3.114m5.71.518a2.202 2.202 0 0 0-3.114-3.114",
              }))
          ),
        tu = r(78103);
      function td(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let tm = {
          isSearchResultsSidebarOpen: !0,
          isSearchResultsMobileSidebarOpen: !1,
        },
        tp = (0, tu.ZP)()(() =>
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? td(Object(r), !0).forEach(function (t) {
                    (0, _.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : td(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({}, tm)
        ),
        th = {
          toggleSearchResultsSidebar() {
            tp.setState((e) => ({
              isSearchResultsSidebarOpen: !e.isSearchResultsSidebarOpen,
            }));
          },
          toggleSearchResultsMobileSidebar() {
            tp.setState((e) => ({
              isSearchResultsMobileSidebarOpen:
                !e.isSearchResultsMobileSidebarOpen,
            }));
          },
        },
        tf = ["turnIndex", "groupPosition", "rawPosition"];
      function tg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tg(Object(r), !0).forEach(function (t) {
                (0, _.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tg(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function tb(e) {
        let {
            attribution: t,
            favicon: r,
            url: n,
            turnIndex: s,
            isHighlighted: a,
            title: l,
            snippet: i,
            feedbackButtons: o,
            additionalResults: c,
            groupPosition: u,
            rawPosition: d,
          } = e,
          m = (0, g.useRef)(null);
        return (
          (0, g.useEffect)(() => {
            a &&
              m.current &&
              m.current.scrollIntoView({ behavior: "smooth", block: "center" });
          }, [a]),
          (0, v.jsxs)("div", {
            ref: m,
            className: "link-result",
            children: [
              r,
              (0, v.jsxs)("div", {
                className:
                  "link-text flex w-full min-w-0 flex-col overflow-y-auto",
                children: [
                  (0, v.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, v.jsx)("div", {
                        className: "line-clamp-1 pr-[--snc-2] text-sm",
                        children: t,
                      }),
                      (0, v.jsxs)(tA, {
                        turnIndex: s,
                        href: n,
                        groupPosition: u,
                        rawPosition: d,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group",
                        children: [
                          (0, v.jsxs)("div", {
                            className: (0, p.default)(
                              "relative line-clamp-1 pr-7 text-sm font-medium group-hover:text-token-link",
                              { "bg-yellow-100 dark:bg-yellow-900": a }
                            ),
                            children: [l, o],
                          }),
                          (0, v.jsx)("div", {
                            className:
                              "line-clamp-2 text-sm text-token-text-secondary",
                            children: i,
                          }),
                        ],
                      }),
                    ],
                  }),
                  c,
                ],
              }),
            ],
          })
        );
      }
      function tv(e) {
        return { ease: "easeOut", duration: 0.15, delay: (e + 1) * 0.09 };
      }
      function ty(e) {
        var t;
        let {
            secondaryResults: r,
            rawPosition: n,
            groupPosition: s,
            turnIndex: a,
            showFeedbackButtons: l,
            highlightUrl: i,
          } = e,
          { 0: o, 1: c } = (0, g.useState)(!1),
          u = o ? r : r.slice(0, 1),
          d = (0, I.d)(r[0].url).data,
          m = r[0];
        return (0, v.jsxs)("div", {
          className: "mt-5 flex flex-col gap-5",
          children: [
            u.map((e, t) =>
              (0, v.jsx)(
                f.E.div,
                {
                  className: "group relative",
                  initial: { opacity: 0, translateY: 4 },
                  animate: { opacity: 1, translateY: 0 },
                  transition: tv(t),
                  children: (0, v.jsxs)(
                    tA,
                    {
                      href: e.url,
                      turnIndex: a,
                      groupPosition: [s[0], t],
                      rawPosition: n + t,
                      target: "_blank",
                      rel: "noreferrer",
                      className: (0, p.default)(
                        "block group-hover:text-token-link",
                        { "bg-yellow-100 dark:bg-yellow-900": i === e.url }
                      ),
                      children: [
                        (0, v.jsxs)("div", {
                          className:
                            "relative line-clamp-1 pr-[70px] text-sm font-medium group-hover:text-token-link",
                          children: [
                            e.title,
                            l &&
                              (0, v.jsx)("div", {
                                className:
                                  "invisible absolute right-0 top-0 py-1 group-hover:visible",
                                children: (0, v.jsx)(er, {
                                  url: e.url,
                                  title: e.title,
                                  snippet: e.snippet,
                                  turnIndex: a,
                                }),
                              }),
                          ],
                        }),
                        (0, v.jsx)("div", {
                          className:
                            "line-clamp-1 text-sm font-normal text-token-text-secondary",
                          children: e.snippet,
                        }),
                      ],
                    },
                    t
                  ),
                },
                t
              )
            ),
            !o &&
              r.length > 1 &&
              (0, v.jsxs)("button", {
                className: "flex text-sm font-medium hover:text-token-link",
                onClick: () => c(!0),
                children: [
                  "More ",
                  null != d ? d : (0, tl.p)(m.url, "short"),
                  " (",
                  null !== (t = null == u ? void 0 : u.length) && void 0 !== t
                    ? t
                    : -3,
                  ")",
                ],
              }),
          ],
        });
      }
      function tj(e) {
        let {
            results: t,
            groupPosition: r,
            rawPosition: n,
            showFeedbackButtons: s,
            showUserHash: a,
            highlightUrl: l,
            turnIndex: i,
          } = e,
          o = t[0],
          c = (0, I.d)(o.url).data,
          u = t.slice(1),
          { userHash: d } = (0, K.A)(),
          m = a
            ? (0, v.jsx)("div", {
                className:
                  "h-[24px] w-[24px] flex-shrink-0 rounded-full border border-token-border-medium",
                style: { backgroundColor: "#" + d },
              })
            : (0, v.jsx)(ta.Z, {
                url: o.url,
                className:
                  "icon-lg rounded-full border border-token-border-medium object-cover",
                size: 32,
              }),
          p =
            s &&
            (0, v.jsx)("div", {
              className:
                "invisible absolute right-0 top-0 py-1 group-hover:visible",
              children: (0, v.jsx)(er, {
                url: o.url,
                title: o.title,
                snippet: o.snippet,
                turnIndex: i,
              }),
            }),
          h =
            u &&
            u.length > 0 &&
            (0, v.jsx)(ty, {
              secondaryResults: u,
              rawPosition: n,
              groupPosition: r,
              turnIndex: i,
              showFeedbackButtons: s,
              highlightUrl: l,
            });
        return (0, v.jsx)(tb, {
          url: o.url,
          title: o.title,
          snippet: o.snippet,
          groupPosition: [r[0], r[1] + 1],
          rawPosition: n + 1,
          turnIndex: i,
          isHighlighted: l === o.url,
          attribution: null != c ? c : (0, tl.p)(o.url, "short"),
          favicon: m,
          feedbackButtons: p,
          additionalResults: h,
        });
      }
      let tA = (0, g.forwardRef)(function (e, t) {
        let r = (0, O.z8)(O.QP.conversationId),
          { turnIndex: n, groupPosition: s, rawPosition: a } = e,
          l = (0, eV.Z)(e, tf);
        function i(t) {
          e.href &&
            r &&
            X.Y.logEvent(t, {
              url: e.href,
              thread_id: r,
              turn_index: n,
              group_position: s,
              raw_position: a,
            });
        }
        return (
          (0, g.useEffect)(() => {
            i(X.M.searchLinkShown);
          }, []),
          (0, v.jsx)(
            "a",
            tx(
              tx({ ref: t }, l),
              {},
              {
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    t.stopPropagation(),
                    i(X.M.searchLinkClicked);
                },
              }
            )
          )
        );
      });
      function tw(e) {
        var t, r;
        let {
          searchResults: n,
          turnIndex: s,
          className: a,
          highlightUrl: l,
          showFeedbackButtons: i = !0,
        } = e;
        (0, g.useEffect)(
          () =>
            (0, h.eR)(document, {
              keydown: (e) => {
                (("g" === e.key && e.metaKey && e.altKey) ||
                  "\xa9" === e.key) &&
                  th.toggleSearchResultsSidebar();
              },
            }),
          []
        );
        let { 0: o, 1: c } = (0, g.useState)(!1);
        (0, g.useEffect)(() => {
          c(!1);
        }, [s]);
        let u = (0, g.useRef)((0, U.random)(0, 2)),
          d = null != n,
          m = [];
        if (d) {
          let e = new Map();
          null == n ||
            n.forEach((t) => {
              if (t.ignore_grouping) {
                m.push([t]);
                return;
              }
              let r = (0, ti.FH)(t.url),
                n = e.get(r);
              void 0 === n ? (e.set(r, m.length), m.push([t])) : m[n].push(t);
            });
        }
        let x = o ? m : m.slice(0, 3);
        return (0, v.jsxs)("div", {
          className: (0, p.default)(a, "flex flex-col"),
          children: [
            (0, v.jsx)(f.E.div, {
              className: "flex",
              animate: d
                ? { opacity: 1, translateY: 0 }
                : { opacity: 0, translateY: 20 },
              transition: { duration: 0.15 },
              children:
                d &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsxs)("div", {
                    className: "source-title text-sm font-medium",
                    children: [
                      (0, v.jsx)(tc, { className: "icon-lg" }),
                      "Source Links",
                    ],
                  }),
                }),
            }),
            (0, v.jsxs)("div", {
              className: "flex w-full flex-col gap-[--snc-1]",
              children: [
                d &&
                  x.map((e, t) =>
                    (0, v.jsx)(
                      f.E.div,
                      {
                        initial: { opacity: 0, translateY: 4 },
                        animate: { opacity: 1, translateY: 0 },
                        transition: tv(t),
                        children: (0, v.jsx)(
                          tj,
                          {
                            groupPosition: [t, 0],
                            rawPosition:
                              0 === t
                                ? 0
                                : m
                                    .slice(0, t)
                                    .reduce((e, t) => e + t.length, 0),
                            results: e,
                            showUserHash: u.current === t,
                            showFeedbackButtons: i,
                            highlightUrl: l,
                            turnIndex: s,
                          },
                          t
                        ),
                      },
                      t
                    )
                  ),
                !o &&
                  (null !== (t = null == m ? void 0 : m.length) && void 0 !== t
                    ? t
                    : 0) > 3 &&
                  (0, v.jsx)(f.E.div, {
                    initial: { opacity: 0, translateY: 4 },
                    animate: { opacity: 1, translateY: 0 },
                    transition: tv(m.length),
                    children: (0, v.jsxs)("button", {
                      className:
                        "more-btn mt-[calc(-1*var(--snc-1))] text-sm font-medium",
                      onClick: () => c(!0),
                      children: [
                        (0, v.jsx)(tc, { className: "icon-lg opacity-0 " }),
                        "Show all web results (",
                        null !== (r = null == m ? void 0 : m.length) &&
                        void 0 !== r
                          ? r
                          : -3,
                        ")",
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function tO(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: r,
            searchQuery: n,
            followupQuery: s,
            onUpdateSearchQuery: a,
            onUpdateFollowupQuery: l,
            onSubmitSearch: i,
            onSubmitFollowup: o,
            followupInputRef: c,
            settings: u,
            onReset: d,
            onUpdateSetting: h,
            onRetryQuery: f,
            highlightUrl: g,
            highlightMessageId: x,
            highlightTurnIndex: b,
          } = e,
          A = (0, O.z8)(O.QP.firstAssistantMessage),
          w = A && "error" === A.status;
        return (0, v.jsxs)("div", {
          className: "layout-wrapper",
          children: [
            (0, v.jsxs)("div", {
              className: "message-col",
              children: [
                (0, v.jsxs)("div", {
                  className: "messages-header",
                  children: [
                    (0, v.jsx)("div", {
                      className: "back-button",
                      children: (0, v.jsx)("button", {
                        onClick: () => d(),
                        className: "hover:text-token-text-secondary",
                        children: (0, v.jsx)(m.nI, { className: "icon-2xl" }),
                      }),
                    }),
                    (0, v.jsxs)("div", {
                      className: "top-search",
                      children: [
                        (0, v.jsx)(y, {
                          currentQuery: n,
                          onUpdateCurrentQuery: a,
                          onSubmit: i,
                        }),
                        (0, v.jsx)(j._, { readyState: t }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "content-wrapper",
                  children: [
                    (0, v.jsx)("div", {
                      className: "platform-nav",
                      children: (0, v.jsx)(ts, {
                        searchQuery: n,
                        settings: u,
                        onUpdateSettings: h,
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: (0, p.default)(
                        "messages-body hide-scrollbar border border-token-border-medium",
                        !w && "pb-[150px]"
                      ),
                      children: (0, v.jsx)(eU, {
                        onRetryQuery: f,
                        highlightMessageId: x,
                        highlightTurnIndex: b,
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "followup-composer",
                      children: (0, v.jsx)("div", {
                        className: "followup-input",
                        children: (0, v.jsx)(k, {
                          readyState: t,
                          hasSubmittedInitialQuery: r,
                          currentQuery: s,
                          onUpdateCurrentQuery: l,
                          onSubmit: o,
                          ref: c,
                          className: "pointer-events-auto",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className: "links-col",
              children: (0, v.jsx)("div", {
                className: "links-body hide-scrollbar",
                children: (0, v.jsx)(tw, {
                  searchResults: null == A ? void 0 : A.searchResults,
                  highlightUrl: g,
                  turnIndex: null == A ? void 0 : A.turnIndex,
                }),
              }),
            }),
          ],
        });
      }
    },
    75388: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return c;
        },
      });
      var n = r(11335),
        s = r(19841),
        a = r(70079),
        l = r(15118),
        i = r(35250);
      let o = {
        [l.kQ.CONNECTING]: "Connecting",
        [l.kQ.OPEN]: "Open",
        [l.kQ.CLOSING]: "Closing",
        [l.kQ.CLOSED]: "Closed",
        [l.kQ.UNINSTANTIATED]: "Uninstantiated",
      };
      function c(e) {
        let { readyState: t, className: r } = e,
          { 0: c, 1: u } = (0, a.useState)(!0);
        return ((0, a.useEffect)(() => {
          setTimeout(() => {
            u(!0);
          }, 1e3);
        }, []),
        t !== l.kQ.OPEN && c)
          ? (0, i.jsx)("div", {
              className: (0, s.default)(
                "flex items-center gap-2 px-3 text-sm",
                r
              ),
              children: (0, i.jsx)(n.u, {
                label: o[t],
                sideOffset: 0,
                side: "right",
                children: (0, i.jsx)("div", {
                  className: (0, s.default)(
                    "h-2 w-2 rounded-full",
                    (t === l.kQ.CLOSING || t === l.kQ.CONNECTING) &&
                      "bg-yellow-500",
                    (t === l.kQ.CLOSED || t === l.kQ.UNINSTANTIATED) &&
                      "bg-red-500",
                    c ? "block" : "hidden"
                  ),
                }),
              }),
            })
          : null;
      }
    },
    25617: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return j;
        },
        q: function () {
          return A;
        },
      });
      var n = r(92226),
        s = r(29287),
        a = r(8700),
        l = r(67217),
        i = r(81643),
        o = r(13847),
        c = r(19841),
        u = r(51018),
        d = r.n(u),
        m = r(70079),
        p = r(1454),
        h = r(78343),
        f = r(78103),
        g = r(35601),
        x = r(71107),
        b = r(20963),
        v = r(35250);
      let y = d()(
          () =>
            Promise.all([r.e(1170), r.e(7178)])
              .then(r.bind(r, 17178))
              .then((e) => e.default),
          { ssr: !1, loadableGenerated: { webpack: () => [17178] } }
        ),
        j = (0, f.ZP)((e) => ({
          threadUserId: void 0,
          setThreadUserId: (t) => e({ threadUserId: t }),
        }));
      function A(e) {
        let { isOpen: t, onDebugClose: r } = e;
        return (0, v.jsx)(l.Z, {
          isOpen: t,
          onClose: r,
          type: "success",
          size: "fullscreen",
          className: "min-h-[50vh] max-w-[96vw]",
          rootClassName: "z-50",
          children: (0, v.jsxs)(i.fC, {
            defaultValue: "thread",
            children: [
              (0, v.jsxs)(i.aV, {
                className: "flex items-center justify-center p-3",
                children: [
                  (0, v.jsx)(i.xz, {
                    className:
                      "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:font-semibold radix-state-active:text-token-text-primary",
                    value: "thread",
                    children: "Thread",
                  }),
                  (0, v.jsx)(i.xz, {
                    className:
                      "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:font-semibold radix-state-active:text-token-text-primary",
                    value: "conversation",
                    children: "Conversation",
                  }),
                ],
              }),
              (0, v.jsx)(i.VY, {
                value: "thread",
                children: (0, v.jsx)(_, {}),
              }),
              (0, v.jsx)(i.VY, {
                value: "conversation",
                children: (0, v.jsx)(k, {}),
              }),
            ],
          }),
        });
      }
      let w = (e, t) => {
        let r = JSON.stringify(t, null, 2),
          n = new Blob([r], { type: "application/json" }),
          s = window.URL.createObjectURL(n),
          a = document.createElement("a");
        (a.href = s),
          (a.download = e),
          a.click(),
          window.URL.revokeObjectURL(s);
      };
      function O(e) {
        let { downloadFilename: t, downloadData: r } = e,
          { user: n } = (0, g.A)();
        return (0, v.jsxs)("div", {
          className: "flex justify-center gap-2",
          children: [
            n && (0, v.jsx)(S, { id: n.id }),
            (0, v.jsxs)(s.z, {
              color: "neutral",
              onClick: () => w(t, r),
              children: [
                (0, v.jsx)(p._hL, { className: "icon-sm" }),
                " Download ",
                t,
              ],
            }),
            (0, v.jsxs)(s.z, {
              color: "neutral",
              as: "link",
              to: "https://openai.enterprise.slack.com/archives/C06D0FATXSQ",
              openNewTab: !0,
              children: [
                (0, v.jsx)(p.nY6, { className: "icon-sm" }),
                " Give feedback",
              ],
            }),
          ],
        });
      }
      function k() {
        let e = (0, x.z8)(x.QP.messages);
        return (0, v.jsxs)("div", {
          className: "flex flex-col gap-2 break-words font-mono text-xs",
          children: [
            (0, v.jsx)(O, {
              downloadFilename: "conversation.json",
              downloadData: e,
            }),
            e.map((e, t) =>
              (0, v.jsxs)(
                "div",
                {
                  className: (0, c.default)(
                    "flex flex-col gap-1 px-6 pb-6",
                    "user" === e.role && "bg-token-main-surface-tertiary"
                  ),
                  children: [
                    (0, v.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, v.jsxs)("span", {
                          className: "font-semibold",
                          children: ["[", e.role, "]"],
                        }),
                        e.role === n.uU.Assistant &&
                          (0, v.jsxs)("span", {
                            children: [
                              (0, v.jsx)("b", {
                                children: "message turn index",
                              }),
                              ": ",
                              e.turnIndex,
                            ],
                          }),
                      ],
                    }),
                    e.role === n.uU.User
                      ? (0, v.jsx)(v.Fragment, { children: e.text })
                      : (0, v.jsx)(v.Fragment, { children: e.userQuery }),
                    e.role === n.uU.Assistant &&
                      (0, v.jsx)("div", {
                        className: "mt-2",
                        children: (0, v.jsx)(N, { data: e }),
                      }),
                  ],
                },
                t
              )
            ),
          ],
        });
      }
      function _() {
        let e = (0, x.z8)(x.QP.conversationId),
          { threadUserId: t } = j(),
          { data: r, isLoading: n } = (0, b.Y)({
            threadId: e,
            threadUserId: t,
            refetchOnMount: "always",
          });
        if (!r || n) return (0, v.jsx)("div", { children: "Loading..." });
        let { thread: s } = r;
        return (0, v.jsxs)("div", {
          className: "flex flex-col gap-2 break-words font-mono text-xs",
          children: [
            (0, v.jsx)(O, { downloadFilename: "thread.json", downloadData: s }),
            (0, v.jsx)("div", {
              className: "flex flex-col gap-1 px-6 pb-6",
              children: (0, v.jsx)(N, { data: s, collapsed: 3 }),
            }),
          ],
        });
      }
      function N(e) {
        let { data: t, collapsed: r } = e,
          { 0: n, 1: s } = (0, m.useState)(null == r || r);
        return (0, v.jsxs)("div", {
          className: "flex flex-col items-start gap-1",
          children: [
            (0, v.jsx)("button", {
              onClick: () => s(!n),
              className: "flex items-center gap-1",
              children: n
                ? (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(h.rIY, { size: 14 }), " Expand all"],
                  })
                : (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(h.NsE, { size: 14 }),
                      " Collapse all",
                    ],
                  }),
            }),
            (0, v.jsx)(
              y,
              {
                json: t,
                jsonViewProps: { collapsed: n, shortenTextAfterLength: 0 },
              },
              String(n)
            ),
          ],
        });
      }
      function S(e) {
        let { id: t } = e,
          r = (0, m.useCallback)(() => {
            (0, o.v)(t);
          }, [t]);
        return (0, v.jsxs)("p", {
          className: "flex items-center gap-2",
          children: [
            (0, v.jsx)("span", {
              className: "font-semibold",
              children: "User ID:",
            }),
            (0, v.jsx)("span", {
              className: "text-gray-500 dark:text-white",
              children: t,
            }),
            (0, v.jsx)(a.Z, { onCopy: r }),
          ],
        });
      }
    },
    55593: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return N;
        },
      });
      var n,
        s = r(18450),
        a = r(67739),
        l = r(77799),
        i = r(8143),
        o = r(19841),
        c = r(70079),
        u = r(99945),
        d = r(94079),
        m = r(58819),
        p = r(70187),
        h = r(85252),
        f = r(41409),
        g = r(1454),
        x = r(21389),
        b = r(35250);
      let v = (0, x.Z)(m.Z.Item)(
        n || (n = (0, u.Z)(["flex items-center gap-2"]))
      );
      function y() {
        let { theme: e, setTheme: t } = (0, h.F)();
        switch (e) {
          case "system":
            return (0, b.jsxs)(v, {
              onClick: (e) => {
                e.preventDefault(), t("dark");
              },
              children: [
                (0, b.jsx)(g.Y1U, { className: "stroke-[3]" }),
                "System Theme",
              ],
            });
          case "dark":
            return (0, b.jsxs)(v, {
              onClick: (e) => {
                e.preventDefault(), t("light");
              },
              children: [
                (0, b.jsx)(g.wOW, { className: "stroke-[3]" }),
                "Dark Mode",
              ],
            });
          default:
            return (0, b.jsxs)(v, {
              onClick: (e) => {
                e.preventDefault(), t("system");
              },
              children: [
                (0, b.jsx)(g.kXG, { className: "stroke-[3]" }),
                "Light",
              ],
            });
        }
      }
      function j(e) {
        let { className: t, iconSize: r } = e,
          n = (0, f.useRouter)();
        return (0, b.jsxs)(m.Z.Root, {
          children: [
            (0, b.jsx)(m.Z.Trigger, {
              className: "border-0 bg-transparent p-0",
              children: (0, b.jsx)(d.zf, { iconSize: r, className: t }),
            }),
            (0, b.jsx)(m.Z.Portal, {
              children: (0, b.jsxs)(m.Z.Content, {
                children: [
                  (0, b.jsx)(y, {}),
                  (0, b.jsx)(m.Z.Separator, {}),
                  (0, b.jsxs)(v, {
                    onClick: () =>
                      n.push("/auth/logout", void 0, { shallow: !0 }),
                    children: [
                      (0, b.jsx)(p.N_, { className: "icon-sm" }),
                      "Log out",
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var A = r(1588),
        w = r(88894);
      let O = [
        "value",
        "onSubmit",
        "keyEventFilter",
        "className",
        "inputDecorationType",
        "buttonIcon",
        "onFocus",
        "onBlur",
        "onKeyDown",
        "overflowDirection",
        "overflowFloat",
        "disabled",
      ];
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : k(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let N = (0, c.forwardRef)(function (e, t) {
        let {
            value: r,
            onSubmit: n,
            keyEventFilter: s,
            className: u,
            inputDecorationType: d,
            buttonIcon: m,
            onFocus: p,
            onBlur: h,
            onKeyDown: f,
            overflowDirection: g,
            overflowFloat: x,
            disabled: v,
          } = e,
          y = (0, a.Z)(e, O),
          k = (0, c.useRef)(null),
          N = null != t ? t : k,
          [S] = (0, i.f)(null != t ? t : k),
          P = (0, c.useCallback)(
            (e) => {
              null == f || f(e),
                "Enter" === e.key && n && (e.preventDefault(), n(r));
            },
            [f, n, r]
          );
        (0, c.useEffect)(() => {
          if (null != s)
            return (0, l.eR)(document, {
              keydown: (e) => {
                null != s &&
                  s(e) &&
                  (e.preventDefault(),
                  null == S || S.focus(),
                  null == S || S.select());
              },
            });
        }, [s, S]);
        let { 0: E, 1: C } = (0, c.useState)(!1),
          { 0: R, 1: D } = (0, c.useState)(0),
          { 0: I, 1: M } = (0, c.useState)(0);
        return (
          (0, c.useEffect)(() => {
            if (!S) return;
            let e = S.style.height,
              t = S.value;
            (S.style.height = "0px"),
              (S.value = ""),
              M(S.scrollHeight),
              (S.value = t),
              D(S.scrollHeight),
              (S.style.height = e);
          }, [S, r]),
          (0, b.jsx)("div", {
            className: (0, o.default)("relative", x && "h-12"),
            children: (0, b.jsxs)("div", {
              className: (0, o.default)(
                "left-0 right-0 z-20 flex h-fit min-h-[3rem] w-full gap-3 overflow-hidden rounded-[1.5rem] border border-token-border-medium bg-token-main-surface-primary px-3",
                x ? "absolute" : "inherit",
                "up" === g
                  ? "bottom-0 items-end"
                  : g
                    ? "top-0 items-start"
                    : "bottom-0 top-0 items-center",
                u
              ),
              onClick: () => {
                null == S || S.select(),
                  null == S || S.focus(),
                  C(!0),
                  null == p || p();
              },
              children: [
                (0, b.jsx)("div", {
                  className: "flex h-12 items-center",
                  children:
                    "avatar" === d &&
                    (0, b.jsx)(j, { iconSize: "gizmo", className: "h-7 w-7" }),
                }),
                (0, b.jsx)("div", {
                  className: (0, o.default)(
                    "flex-grow overflow-x-hidden",
                    "py-[0.695rem]"
                  ),
                  children: (0, b.jsx)(
                    "textarea",
                    _(
                      _({ type: "text", name: "query", id: "query" }, y),
                      {},
                      {
                        className: (0, o.default)(
                          "transition-height ellipsis m-0 -mb-1 w-full flex-grow resize-none overflow-hidden overflow-y-auto border-0 bg-token-main-surface-primary p-0 placeholder-gray-500 outline-none focus:ring-0",
                          (!E || R < 480) && "hide-scrollbar"
                        ),
                        onKeyDown: P,
                        value: r,
                        autoComplete: "off",
                        onFocus: () => {
                          C(!0), null == p || p();
                        },
                        onBlur: () => {
                          S && (S.scrollTop = 0), C(!1), null == h || h();
                        },
                        ref: N,
                        disabled: v,
                        style: {
                          height:
                            E && null != g
                              ? "clamp("
                                  .concat(I, "px, ")
                                  .concat(R, "px, ")
                                  .concat(480, "px)")
                              : "".concat(I, "px"),
                        },
                      }
                    )
                  ),
                }),
                (0, b.jsx)("div", {
                  className: "flex h-12 flex-shrink-0 items-center",
                  children:
                    E || null != n
                      ? (0, b.jsx)("div", {
                          className: "flex items-center",
                          children: (0, b.jsx)("button", {
                            disabled: v,
                            onClick: () => (null == n ? void 0 : n(r)),
                            className: (0, o.default)(
                              "flex h-7 w-7 items-center justify-center rounded-full",
                              E && !v
                                ? "bg-token-text-primary text-token-main-surface-primary hover:opacity-80"
                                : "bg-token-main-surface-tertiary text-token-text-tertiary hover:bg-token-border-light hover:text-token-text-secondary disabled:hover:bg-token-main-surface-tertiary disabled:hover:text-token-text-tertiary"
                            ),
                            children:
                              null != m
                                ? m
                                : "avatar" === d
                                  ? (0, b.jsx)(w.Z, {
                                      className: "icon-lg-heavy",
                                    })
                                  : (0, b.jsx)(A.Z, {
                                      className: "icon-lg-heavy",
                                    }),
                          }),
                        })
                      : null,
                }),
              ],
            }),
          })
        );
      });
    },
    75138: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return c;
        },
        l: function () {
          return o;
        },
      });
      var n = r(42607),
        s = r(19841),
        a = r(83737),
        l = r(70079),
        i = r(35250);
      function o(e) {
        let {
            lines: t = 1,
            variance: r = 0,
            size: o = "base",
            width: c = 50,
            widthVariance: u = 50,
            className: d,
          } = e,
          { 0: m } = (0, l.useState)(
            Array.from(
              { length: t + Math.random() * (null != r ? r : 0) },
              () => c + Math.random() * u
            )
          ),
          p = "";
        switch (o) {
          case "sm":
            p = "h-3 mb-2 mt-0.5";
            break;
          case "base":
            p = "h-[18px] my-2";
            break;
          case "lg":
            p = "h-5 my-2";
            break;
          default:
            (0, n.Z)(o);
        }
        return (0, i.jsx)(i.Fragment, {
          children: m.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: (0, s.default)(
                  "relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",
                  p,
                  d
                ),
                style: { width: "".concat(e, "%") },
                children: (0, i.jsx)(a.E.div, {
                  className:
                    "absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",
                  animate: {
                    x: ["-100%", "100%"],
                    opacity: [1, 0, 1],
                    transition: {
                      repeat: 1 / 0,
                      repeatType: "loop",
                      duration: 1.5 + t,
                    },
                  },
                }),
              },
              t
            )
          ),
        });
      }
      function c(e) {
        let {
            lines: t = 1,
            variance: r = 0,
            width: n = 50,
            widthVariance: s = 50,
            className: o,
          } = e,
          c = l.useMemo(
            () =>
              Array.from(
                { length: t + Math.random() * (null != r ? r : 0) },
                () => n + Math.random() * s
              ),
            [t, r, n, s]
          );
        return (0, i.jsx)("div", {
          className: "mt-2 flex flex-col items-start gap-2 ".concat(o),
          children: c.map((e, t) =>
            (0, i.jsx)(
              a.E.div,
              {
                className: "h-[18px] rounded-md bg-token-border-light",
                style: { width: "".concat(e, "%") },
                initial: { opacity: 1 },
                animate: { opacity: [1, 0.4] },
                transition: {
                  repeat: 1 / 0,
                  repeatType: "reverse",
                  duration: 0.85,
                  ease: "easeInOut",
                  delay: 0.07 * t,
                },
              },
              t
            )
          ),
        });
      }
    },
    35601: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return l;
        },
        c: function () {
          return a;
        },
      });
      var n = r(70079),
        s = r(20735);
      let a = (0, n.createContext)({
          searchQuery: "",
          user: null,
          userHash: null,
          settings: s.Z,
        }),
        l = () => (0, n.useContext)(a);
    },
    20735: function (e, t, r) {
      "use strict";
      r.d(t, {
        Wt: function () {
          return w;
        },
        Z: function () {
          return A;
        },
        Zr: function () {
          return _;
        },
      });
      var n,
        s = r(99945),
        a = r(18450),
        l = r(67739),
        i = r(29287),
        o = r(21643),
        c = r(282),
        u = r(88342),
        d = r(67217),
        m = r(64276),
        p = r(19841),
        h = r(85252),
        f = r(21389),
        g = r(20724),
        x = r(90240),
        b = r(35250);
      let v = ["children"];
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let A = {
        useLocation: !1,
        suggestions: !0,
        agentSettingsOverrides: {
          model_family: g.tQ.GPT_3_5,
          rerank_labrador: "none",
          rerank_bing_boost: 0,
          rerank_quality_threshold: 4.5,
          search_engine: g.lv.Bing,
          robots_mode: g.K1.Aggressive,
          show_image_to_model: !1,
        },
      };
      function w(e) {
        return !!(
          "object" == typeof e &&
          "boolean" == typeof e.suggestions &&
          (0, g.mX)(e.agentSettingsOverrides)
        );
      }
      function O(e) {
        if ("" !== e) return parseFloat(e);
      }
      function k(e) {
        let { children: t } = e,
          r = (0, l.Z)(e, v);
        return (0, b.jsx)(
          u.Z.Content,
          j(
            j({}, r),
            {},
            { className: (0, p.default)("z-50", r.className), children: t }
          )
        );
      }
      function _(e) {
        var t, r, n, s, a, l, p, f, v, y, w, _, S, P;
        let { onClose: E, settings: C, onUpdateSetting: R } = e,
          { theme: D, setTheme: I } = (0, h.F)();
        return (0, b.jsx)(d.Z, {
          isOpen: !0,
          onClose: E,
          type: "success",
          rootClassName: "z-40",
          children: (0, b.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "theme",
                    className: "text-sm",
                    children: "Theme",
                  }),
                  (0, b.jsxs)(u.Z.Root, {
                    value: D,
                    onValueChange: (e) => {
                      I(e);
                    },
                    children: [
                      (0, b.jsxs)(u.Z.Trigger, {
                        id: "theme",
                        children: [
                          (0, b.jsx)(u.Z.Value, {}),
                          (0, b.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, b.jsx)(u.Z.Portal, {
                        children: (0, b.jsxs)(k, {
                          children: [
                            (0, b.jsx)(u.Z.Item, {
                              value: "light",
                              children: "Light",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: "dark",
                              children: "Dark",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: "system",
                              children: "System",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "location",
                    className: "text-sm",
                    children: "Use location from browser",
                  }),
                  (0, b.jsx)(c.Z, {
                    onChange: (e) => {
                      (0, x.XB)(e), R(j(j({}, C), {}, { useLocation: e }));
                    },
                    enabled: C.useLocation,
                    label: "Use location from browser",
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "suggestions",
                    className: "text-sm",
                    children: "Enable suggestions",
                  }),
                  (0, b.jsx)(c.Z, {
                    onChange: (e) => R(j(j({}, C), {}, { suggestions: e })),
                    enabled: C.suggestions,
                    label: "Enable suggestions",
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Model family",
                  }),
                  (0, b.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (t =
                          null === (r = C.agentSettingsOverrides) ||
                          void 0 === r
                            ? void 0
                            : r.model_family) && void 0 !== t
                        ? t
                        : A.agentSettingsOverrides.model_family,
                    onValueChange: (e) => {
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { model_family: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, b.jsxs)(u.Z.Trigger, {
                        id: "model_family",
                        children: [
                          (0, b.jsx)(u.Z.Value, {}),
                          (0, b.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, b.jsx)(u.Z.Portal, {
                        children: (0, b.jsxs)(k, {
                          children: [
                            (0, b.jsx)(u.Z.Item, {
                              value: g.tQ.GPT_3_5,
                              children: "GPT3.5 (Sahara; POR)",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: g.tQ.GPT_4,
                              children: "GPT4",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "search_engine",
                    className: "text-sm",
                    children: "Search engine",
                  }),
                  (0, b.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (n =
                          null === (s = C.agentSettingsOverrides) ||
                          void 0 === s
                            ? void 0
                            : s.search_engine) && void 0 !== n
                        ? n
                        : A.agentSettingsOverrides.search_engine,
                    onValueChange: (e) => {
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { search_engine: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, b.jsxs)(u.Z.Trigger, {
                        id: "search_engine",
                        children: [
                          (0, b.jsx)(u.Z.Value, {}),
                          (0, b.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, b.jsx)(u.Z.Portal, {
                        children: (0, b.jsxs)(k, {
                          children: [
                            (0, b.jsx)(u.Z.Item, {
                              value: g.lv.Bing,
                              children: "Bing (POR)",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: g.lv.Sydney,
                              children: "Sydney",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: g.lv.Fortis,
                              children: "Fortis",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "robots_mode",
                    className: "text-sm",
                    children: "Robots mode",
                  }),
                  (0, b.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (a =
                          null === (l = C.agentSettingsOverrides) ||
                          void 0 === l
                            ? void 0
                            : l.robots_mode) && void 0 !== a
                        ? a
                        : A.agentSettingsOverrides.robots_mode,
                    onValueChange: (e) => {
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { robots_mode: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, b.jsxs)(u.Z.Trigger, {
                        id: "robots_mode",
                        children: [
                          (0, b.jsx)(u.Z.Value, {}),
                          (0, b.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, b.jsx)(u.Z.Portal, {
                        children: (0, b.jsxs)(k, {
                          children: [
                            (0, b.jsx)(u.Z.Item, {
                              value: g.K1.Conservative,
                              children: "Conservative",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: g.K1.Aggressive,
                              children: "Aggressive (POR)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Ranker model",
                  }),
                  (0, b.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (p =
                          null === (f = C.agentSettingsOverrides) ||
                          void 0 === f
                            ? void 0
                            : f.rerank_labrador) && void 0 !== p
                        ? p
                        : "none",
                    onValueChange: (e) => {
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_labrador: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, b.jsxs)(u.Z.Trigger, {
                        id: "ranker_model",
                        children: [
                          (0, b.jsx)(u.Z.Value, {}),
                          (0, b.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, b.jsx)(u.Z.Portal, {
                        children: (0, b.jsxs)(k, {
                          children: [
                            (0, b.jsx)(u.Z.Item, {
                              value: "none",
                              children: "Disabled (POR)",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: "maraschino-rr-d32-latest",
                              children: "d32ult (latest)",
                            }),
                            (0, b.jsx)(u.Z.Item, {
                              value: "maraschino-rr-d32-rc",
                              children: "d32ult (release candidate)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                className: "".concat(
                  "none" === C.agentSettingsOverrides.rerank_labrador
                    ? "text-gray-400"
                    : ""
                ),
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "rerank_bing_boost",
                    className: "text-sm",
                    children: "Ranker Bing boost",
                  }),
                  (0, b.jsx)(o.Z, {
                    name: "rerank_bing_boost",
                    className: "w-16",
                    disabled:
                      "none" === C.agentSettingsOverrides.rerank_labrador,
                    value:
                      null !==
                        (v =
                          null ===
                            (y = C.agentSettingsOverrides.rerank_bing_boost) ||
                          void 0 === y
                            ? void 0
                            : y.toString()) && void 0 !== v
                        ? v
                        : "",
                    onChange: (e) =>
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_bing_boost: O(e.target.value) }
                            ),
                          }
                        )
                      ),
                    placeholder: "0.0",
                    type: "number",
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                className: "".concat(
                  "none" === C.agentSettingsOverrides.rerank_labrador
                    ? "text-gray-400"
                    : ""
                ),
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "rerank_quality_threshold",
                    className: "text-sm",
                    children: "Minimum ranker model score",
                  }),
                  (0, b.jsx)(o.Z, {
                    name: "rerank_quality_threshold",
                    className: "w-16",
                    disabled:
                      "none" === C.agentSettingsOverrides.rerank_labrador,
                    value:
                      null !==
                        (w =
                          null ===
                            (_ =
                              C.agentSettingsOverrides
                                .rerank_quality_threshold) || void 0 === _
                            ? void 0
                            : _.toString()) && void 0 !== w
                        ? w
                        : "",
                    onChange: (e) =>
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_quality_threshold: O(e.target.value) }
                            ),
                          }
                        )
                      ),
                    placeholder: "0.0",
                    type: "number",
                  }),
                ],
              }),
              (0, b.jsxs)(N, {
                children: [
                  (0, b.jsx)(m._, {
                    htmlFor: "show_image_to_model",
                    className: "text-sm",
                    children: "Show image to model",
                  }),
                  (0, b.jsx)(c.Z, {
                    onChange: (e) =>
                      R(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { show_image_to_model: e }
                            ),
                          }
                        )
                      ),
                    enabled:
                      null !==
                        (S =
                          null === (P = C.agentSettingsOverrides) ||
                          void 0 === P
                            ? void 0
                            : P.show_image_to_model) && void 0 !== S
                        ? S
                        : A.agentSettingsOverrides.show_image_to_model,
                    label: "Show image to model",
                  }),
                ],
              }),
              (0, b.jsx)(i.z, {
                onClick: () => R(A),
                type: "reset",
                color: "neutral",
                children: "Reset",
              }),
            ],
          }),
        });
      }
      let N = f.Z.div(
        n ||
          (n = (0, s.Z)([
            "flex justify-between items-center gap-2 min-h-[36px]",
          ]))
      );
    },
    86441: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Q;
          },
        });
      var n = r(18450),
        s = r(95407),
        a = r(43041),
        l = r(66315),
        i = r(83537),
        o = r(60309),
        c = r(68039),
        u = r.n(c),
        d = r(47247),
        m = r.n(d),
        p = r(41409),
        h = r(76580),
        f = r(70079),
        g = r(15118),
        x = r(77799),
        b = r(30995),
        v = r(35601),
        y = r(73606),
        j = r(19841),
        A = r(83737),
        w = r(75388),
        O = r(1454),
        k = r(55593),
        _ = r(88894),
        N = r(61236),
        S = r(49593),
        P = r(35250);
      function E(e) {
        let {
            currentQuery: t,
            onUpdateCurrentQuery: r,
            onTypeaheadOpenChange: n,
            onSubmit: s,
          } = e,
          a = (0, f.useRef)(null),
          i = (0, f.useRef)(""),
          { 0: o, 1: c } = (0, f.useState)(!1);
        (0, f.useEffect)(() => {
          l.U.addTiming("sonic.web.home.consolePrimarySearchInput.mounted");
        }, []);
        let { 0: u, 1: d } = (0, f.useState)(null),
          m = (function (e) {
            let { query: t, enabled: r = !0 } = e,
              n = (0, f.useRef)([]),
              { settings: s } = (0, v.A)(),
              { data: a = [] } = (0, N.a)({
                queryKey: ["typeahead", t],
                queryFn: S.mO,
                enabled: !!t && s.suggestions && r,
                networkMode: "offlineFirst",
              });
            return r && (n.current = a), n.current;
          })({ query: i.current }),
          p = (0, f.useMemo)(() => m.slice().reverse(), [m]);
        (0, f.useEffect)(() => {
          0 === p.length && d(null), c(p.length > 0);
        }, [p]),
          (0, f.useEffect)(() => {
            null == n || n(o);
          }, [o, n]);
        let h = (e) => {
            r(e), s(e);
          },
          g = (e) => {
            let { value: t, delta: n, shouldUpdateQuery: s = !0 } = e;
            if (void 0 === t && void 0 === n)
              throw Error("changeSelectedIndex requires either value or delta");
            let a = null;
            void 0 !== n
              ? null === u
                ? (a = -1 === n ? p.length - 1 : 0)
                : ((a = u + n) < 0 || a >= p.length) && (a = null)
              : void 0 !== t && (a = t),
              d(a),
              s && (null === a ? r(i.current) : r(p[a]));
          };
        return (0, P.jsxs)("div", {
          className: "relative",
          children: [
            o &&
              (0, P.jsx)("div", {
                className: "absolute bottom-full left-0 right-0 mb-2",
                onMouseLeave: () => g({ value: null, shouldUpdateQuery: !1 }),
                children: p.map((e, t) =>
                  (0, P.jsx)(
                    C,
                    {
                      typeahead: e,
                      typedQuery: i.current,
                      onHover: () => g({ value: t, shouldUpdateQuery: !1 }),
                      onSubmit: h,
                      isSelected: t === u,
                    },
                    t
                  )
                ),
              }),
            (0, P.jsx)(k.X, {
              value: t,
              onChange: (e) => {
                r(e.target.value), (i.current = e.target.value);
              },
              onSubmit: s,
              placeholder: "Search...",
              inputDecorationType: "avatar",
              buttonIcon: (0, P.jsx)(_.Z, {}),
              ref: a,
              overflowDirection: "up",
              onKeyDown: (e) => {
                "ArrowUp" === e.key
                  ? (e.preventDefault(), g({ delta: -1 }))
                  : "ArrowDown" === e.key
                    ? (e.preventDefault(), g({ delta: 1 }))
                    : "Escape" === e.key && c(!1);
              },
              autoFocus: !0,
              spellCheck: !1,
            }),
          ],
        });
      }
      function C(e) {
        let {
            typeahead: t,
            typedQuery: r,
            onHover: n,
            onSubmit: s,
            isSelected: a,
          } = e,
          l = t.startsWith(r),
          i = l ? r : t,
          o = l ? t.slice(r.length) : "";
        return (0, P.jsx)(A.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "w-full",
          children: (0, P.jsxs)(
            "button",
            {
              className: (0, j.default)(
                "flex w-full items-center gap-4 rounded-lg py-2 pl-1 pr-4 transition-colors",
                { "bg-token-main-surface-tertiary": a }
              ),
              onClick: (e) => {
                e.stopPropagation(), s(t);
              },
              onMouseEnter: () => n(t),
              children: [
                (0, P.jsx)("div", {
                  className: "flex h-8 w-8 items-center justify-center",
                  children: (0, P.jsx)(O.jRj, { className: "icon-md-heavy" }),
                }),
                (0, P.jsxs)("div", {
                  className: "flex-grow text-left",
                  children: [
                    (0, P.jsx)("span", { children: i }),
                    (0, P.jsx)("span", {
                      className: "font-semibold",
                      children: o,
                    }),
                  ],
                }),
              ],
            },
            t
          ),
        });
      }
      var R = r(5224);
      function D(e) {
        let {
            readyState: t,
            currentQuery: r,
            onSubmit: n,
            onUpdateCurrentQuery: s,
          } = e,
          { 0: a, 1: l } = (0, f.useState)(!1),
          { 0: i, 1: o } = (0, f.useState)(!1);
        return (0, P.jsxs)("div", {
          className:
            "relative flex h-full w-full flex-col justify-between overflow-hidden bg-token-main-surface-secondary p-[--snc-3]",
          children: [
            (0, P.jsxs)(A.E.div, {
              className: (0, j.default)(
                "pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-6 text-2xl font-medium transition-colors duration-500",
                a
                  ? "text-token-main-surface-tertiary"
                  : "text-token-text-primary"
              ),
              animate: { opacity: i ? 0 : 1 },
              transition: { duration: R.Lc },
              children: [
                (0, P.jsx)(y.nI, { className: "h-16 w-16" }),
                "ChatGPT Search",
              ],
            }),
            (0, P.jsx)("div", {
              className:
                "m-auto flex w-full max-w-2xl flex-grow flex-col items-start justify-end gap-1 p-2",
            }),
            (0, P.jsxs)(A.E.div, {
              animate: { y: i ? "200%" : 0 },
              transition: {
                duration: R.Lc,
                type: "spring",
                stiffness: 500,
                damping: 20,
              },
              className: "relative m-auto w-full max-w-2xl flex-shrink-0",
              children: [
                (0, P.jsx)(E, {
                  currentQuery: r,
                  onUpdateCurrentQuery: s,
                  onTypeaheadOpenChange: (e) => l(e),
                  onSubmit: (e) => {
                    n(e), o(!0);
                  },
                }),
                (0, P.jsx)(w._, {
                  className: "absolute -right-8 top-[50%] -translate-y-1/2",
                  readyState: t,
                }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let {
            readyState: t,
            initialQuery: r,
            hasSubmittedInitialQuery: n,
            onSubmitSearch: s,
            onSubmitFollowup: a,
            onRetryQuery: l,
            onReset: i,
            onUpdateSetting: o,
          } = e,
          { settings: c } = (0, v.A)(),
          { 0: u, 1: d } = (0, f.useState)(null != r ? r : ""),
          { 0: m, 1: p } = (0, f.useState)(""),
          h = (0, f.useRef)(null),
          g = (0, f.useRef)(null != r ? r : "");
        (0, f.useEffect)(() => {
          r !== g.current && ((g.current = r), d(null != r ? r : ""), p(""));
        }, [r]);
        let y = (e) => {
            d(e);
          },
          j = () => {
            s(u), p("");
          },
          { 0: A, 1: w } = (0, f.useState)(!n);
        return (
          (0, f.useEffect)(() => {
            A && n
              ? setTimeout(() => {
                  w(!1);
                }, 1e3 * R.Lc)
              : n || w(!0);
          }, [n, r, A]),
          (0, f.useEffect)(
            () =>
              (0, x.eR)(document, {
                keydown: (e) => {
                  "k" === e.key &&
                    e.metaKey &&
                    e.shiftKey &&
                    (e.preventDefault(), d(""), p(""), i());
                },
              }),
            [i]
          ),
          A
            ? (0, P.jsx)(D, {
                readyState: t,
                currentQuery: u,
                onSubmit: j,
                onUpdateCurrentQuery: y,
              })
            : (0, P.jsx)(b.e, {
                readyState: t,
                hasSubmittedInitialQuery: n,
                searchQuery: u,
                followupQuery: m,
                onUpdateSearchQuery: y,
                onUpdateFollowupQuery: (e) => {
                  p(e);
                },
                onRetryQuery: l,
                onSubmitSearch: j,
                onSubmitFollowup: (e) => {
                  a(null != e ? e : m), p("");
                },
                followupInputRef: h,
                settings: c,
                onUpdateSetting: o,
                onReset: (e) => {
                  d(null != e ? e : ""), p(""), i(e);
                },
              })
        );
      }
      var M = r(83216),
        U = r(71107),
        Z = r(10224),
        L = r(84342),
        F = r(45456),
        z = r(90240);
      function T(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : T(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function Q(e) {
        let { user: t, initialQuery: r, socketUrl: n, userMetadata: c } = e,
          d = (0, f.useRef)(r ? { query: r } : null),
          x = (0, f.useRef)(r ? "url_query" : "search_input"),
          [b, y] = (0, L.r)(),
          { 0: j, 1: A } = (0, f.useState)(null),
          { 0: w, 1: O } = (0, f.useState)(),
          { 0: k, 1: _ } = (0, f.useState)(null != r),
          N = (0, U.z8)(U.QP.conversationId),
          S = (0, U.z8)(U.QP.lastMessage),
          E = (0, p.useRouter)(),
          { 0: C, 1: R } = (0, f.useState)(null),
          D = (0, i.gb)({ namespace: i.dG.SonicHome, opts: { debug: !0 } });
        (0, f.useEffect)(() => {
          l.U.addTiming("sonic.web.home.mounted");
        }, []),
          (0, F.e)(),
          (0, f.useEffect)(() => {
            (async function () {
              t && R((await (0, o.FB)(t.id)).slice(0, 6));
            })();
          }, [t]);
        let T = (0, f.useCallback)(
            (e) => {
              let { isFollowup: t } = e;
              t ||
                D.logTiming("search_query_submitted", {
                  context: { source: K() },
                });
            },
            [D]
          ),
          { readyState: Q, postQuery: V } = (0, Z.Rx)({
            socketUrl: n,
            conversationId: N,
            onTurnSubmitted: T,
          }),
          { newQueryStarted: G } = (function (e) {
            let { profiler: t, querySource: r } = e,
              n = (0, f.useRef)(q({}, B)),
              s = (0, U.z8)(U.QP.firstAssistantMessage);
            return (
              (0, f.useEffect)(() => {
                s &&
                  (n.current.message ||
                    ((n.current.message = !0),
                    t.logTiming("ttf_message", { context: { source: r } })),
                  n.current.modelResponse ||
                    u()(s.text) ||
                    ((n.current.modelResponse = !0),
                    t.logTiming("ttf_model_response", {
                      context: { source: r },
                    })),
                  n.current.searchResults ||
                    u()(s.searchResults) ||
                    ((n.current.searchResults = !0),
                    t.logTiming("ttf_search_results", {
                      context: { source: r },
                    })));
              }, [s, t, r]),
              {
                newQueryStarted: (0, f.useCallback)(() => {
                  n.current = q({}, B);
                }, []),
              }
            );
          })({ profiler: D, querySource: K() }),
          H = (0, f.useCallback)(
            async (e, t) => {
              try {
                let r = null === t ? "query" : "followup",
                  n = K();
                "query" === r && (D.reset(), G(), A(e), O(e));
                let s = (function (e) {
                    let t = a.bX.getCookie(a.cn.LastLocation);
                    if (((0, z.XB)(e), t && e))
                      try {
                        return JSON.parse(t);
                      } catch {}
                    return z.PX;
                  })(b.useLocation),
                  l = await V({
                    conversationId: t,
                    query: e,
                    agentSettingsOverrides: b.agentSettingsOverrides,
                    metadata: q(q({}, c), s),
                  });
                if ("query" === r) {
                  let t = l.conversationId;
                  U.z8.setState((e) => {
                    e.conversationId = t;
                  }),
                    M.Y.logEvent(M.M.searchQuerySubmitted, {
                      thread_id: t,
                      source: n,
                      user_hash: C,
                      query: e,
                    });
                } else
                  "followup" === r &&
                    M.Y.logEvent(M.M.searchFollowupSubmitted, {
                      thread_id: t,
                      turn_index: S.turnIndex,
                    });
              } catch (e) {
                l.U.addError(Error("Error posting user action", { cause: e })),
                  s.m.danger("Failed to submit");
              }
            },
            [S, V, D, b.agentSettingsOverrides, b.useLocation, G, C, c]
          );
        function K() {
          return x.current;
        }
        let X = (e, t) => {
            let { isFollowup: r = !1 } = t;
            if (Q !== g.kQ.OPEN) {
              s.m.danger("Websocket connection is not open");
              return;
            }
            H(null != e ? e : "", r ? N : null), _(!0);
          },
          W = (e) => {
            U.fM.resetConversation(), (x.current = "search_input");
            let t = h.Z.parse(window.location.search);
            delete t.q;
            let r = "/search";
            Object.keys(t).length > 0 && (r += "?".concat(h.Z.stringify(t))),
              E.replace(r, void 0, { shallow: !0 }),
              e ? (H(e, null), _(!0)) : _(!1);
          };
        return (
          (0, f.useEffect)(() => {
            var e;
            Q === g.kQ.OPEN &&
              (null != r &&
                (null === (e = d.current) || void 0 === e
                  ? void 0
                  : e.query) !== r &&
                (U.fM.resetConversation(), (d.current = { query: r })),
              null == d.current ||
                d.current.submitted ||
                ((async function () {
                  null == d.current ||
                    d.current.submitted ||
                    ((d.current.submitted = !0),
                    await H(d.current.query, null));
                })(),
                _(!0)));
          }, [Q, t.id, r, H, k]),
          (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(m(), {
                children: (0, P.jsx)("title", {
                  children: w
                    ? "".concat(w, " - ChatGPT Search")
                    : "ChatGPT Search",
                }),
              }),
              (0, P.jsx)(v.c.Provider, {
                value: {
                  searchQuery: null != j ? j : "",
                  user: t,
                  userHash: C,
                  settings: b,
                },
                children: (0, P.jsx)(I, {
                  initialQuery: r,
                  readyState: Q,
                  hasSubmittedInitialQuery: k,
                  onSubmitFollowup: (e) => X(e, { isFollowup: !0 }),
                  onReset: W,
                  onSubmitSearch: (e) => {
                    W(e);
                  },
                  onRetryQuery: (e) => {
                    if (null == w) {
                      s.m.danger("No previous query to retry");
                      return;
                    }
                    e ? X(e, { isFollowup: !0 }) : W(w);
                  },
                  onUpdateSetting: y,
                }),
              }),
            ],
          })
        );
      }
      let B = { message: !1, searchResults: !1, modelResponse: !1 };
    },
    33887: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return eM;
          },
        });
      var n = r(42607),
        s = r(51533),
        a = r(19841),
        l = r(91530),
        i = r.n(l),
        o = r(70079),
        c = r(30995),
        u = r(84342),
        d = r(45456),
        m = r(29287),
        p = r(17178),
        h = r(1454),
        f = r(85452),
        g = r(35250);
      function x(e) {
        let { result: t, className: r } = e;
        switch (t) {
          case "waiting":
            return (0, g.jsx)(h.Q8x, {
              className: (0, a.default)(
                "stroke-[4] text-token-text-quaternary opacity-50",
                r
              ),
            });
          case "pending":
            return (0, g.jsx)(f.Z, { className: r });
          case "passed":
            return (0, g.jsx)(h.UgA, {
              className: (0, a.default)("stroke-[4] text-green-500", r),
            });
          case "failed":
            return (0, g.jsx)(h.q5L, {
              className: (0, a.default)("stroke-[4] text-red-500", r),
            });
        }
      }
      var b = r(18450),
        v = r(95407),
        y = r(4466),
        j = r(82473),
        A = r(61236),
        w = r(25494),
        O = r(66315),
        k = r(79208),
        _ = r(61888),
        N = r(8844),
        S = r(5224),
        P = r(49593);
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let R = (e) => {
          let t = (0, j.NL)(),
            r = null == e ? void 0 : e.sort();
          return (0, A.a)({
            queryKey: ["evals", { tags: r }],
            queryFn: async () => {
              let e = new URLSearchParams();
              if (r) for (let t of r) e.append("tags", t);
              return y.c
                .get("".concat(S.rq, "/evals/evals?").concat(e.toString()))
                .then((e) => {
                  for (let r of e) t.setQueryData(["eval", r.id], r);
                  return e;
                });
            },
          });
        },
        D = (e) =>
          (0, A.a)({
            queryKey: ["eval", e],
            queryFn: async () =>
              y.c.get("".concat(S.rq, "/evals/evals/").concat(e)),
          }),
        I = new Map(),
        M = (e, t) => {
          var r;
          let n = I.get(e);
          return (
            null == n &&
              ((n = (0, _.debounce)(
                (t) =>
                  y.c.post(
                    "".concat(S.rq, "/evals/evals"),
                    C(C({}, t), {}, { id: e })
                  ),
                500,
                { trailing: !0 }
              )),
              I.set(e, n)),
            null === (r = n) || void 0 === r ? void 0 : r(t)
          );
        },
        U = (e) => {
          let t = (0, j.NL)();
          return (0, w.D)({
            mutationKey: ["eval", e],
            mutationFn: async (r) => {
              let n = C(C({}, r), {}, { id: e });
              t.setQueryData(["evals"], (t) =>
                t ? t.map((t) => (t.id === e ? n : t)) : t
              ),
                t.setQueryData(["eval", e], n),
                await M(e, r);
            },
          });
        },
        Z = () => {
          let e = (0, j.NL)();
          return (0, w.D)({
            mutationFn: async (e) => {},
            onSettled: (t, r, n) => {
              let s = "sonic_eval_".concat((0, N.Z)()),
                a = C(C({}, n), {}, { id: s });
              e.setQueryData(["evals"], (e) => (e ? [a, ...e] : e)),
                e.setQueryData(["eval", s], a);
            },
          });
        },
        L = (e) => {
          let t = (0, j.NL)();
          return (0, w.D)({
            mutationKey: ["eval", e],
            mutationFn: async () =>
              y.c.delete("".concat(S.rq, "/evals/evals/").concat(e)),
            onSettled: () => {
              t.setQueryData(["evals"], (t) =>
                t ? t.filter((t) => t.id !== e) : t
              ),
                t.setQueryData(["eval", e], void 0);
            },
          });
        },
        F = (0, _.memoize)((e) => {
          let { queryClient: t, settings: r } = e;
          return k.Ue({
            fetcher: async (e) => {
              let n = (0, _.compact)(
                  await Promise.all(e.map((e) => t.getQueryData(["eval", e])))
                ),
                s = Date.now(),
                a = r && (0, P.lw)(r.agentSettingsOverrides),
                l = await y.c
                  .post(
                    "".concat(S.rq, "/evals/batched_runs"),
                    {
                      eval_ids: n.map((e) => e.id),
                      turn_template: null == a ? void 0 : a.turn,
                      base_config: null == a ? void 0 : a.base_config,
                    },
                    { skipJsonTransform: !0 }
                  )
                  .catch(
                    (e) => (
                      O.U.addError(
                        Error("Failed to start eval run", { cause: e })
                      ),
                      []
                    )
                  );
              if (!(null != l && l.body)) return [];
              let i = l.body.getReader(),
                o = new TextDecoder(),
                c = !1,
                u = [],
                d = "";
              try {
                for (; !c; ) {
                  let e = await i.read();
                  if ((c = e.done)) break;
                  let r = d + o.decode(e.value, { stream: !0 });
                  d = "";
                  let n = r.split("\n").filter((e) => !!e.trim()),
                    a = [];
                  for (let e = 0; e < n.length; e++)
                    try {
                      a.push(JSON.parse(n[e].trim()));
                    } catch (t) {
                      d = n.splice(e, 1).join("\n");
                      break;
                    }
                  for (let e of a) {
                    let r = t.getQueryData(["eval_run", e.eval_id]);
                    (r && r.batchId !== e.batch_id && r.timeStarted > s) ||
                      t.setQueryData(["eval_run", e.eval_id], {
                        evalId: e.eval_id,
                        evalRunId: e.id,
                        batchId: e.batch_id,
                        run: e,
                        timeStarted: s,
                      });
                  }
                  u.push(...a);
                }
                "" !== d &&
                  (v.m.danger("Failed to parse JSON from eval run stream"),
                  O.U.addError("Failed to parse JSON from eval run stream", {
                    data: d,
                  }));
              } catch (e) {
                v.m.danger("Failed to read eval run stream"),
                  O.U.addError("Failed to read eval run stream", { cause: e });
              }
              return u.map((e) => ({
                evalId: e.eval_id,
                evalRunId: e.id,
                run: e,
                timeStarted: s,
                batchId: e.batch_id,
              }));
            },
            resolver: k.rp("evalId"),
            scheduler: k.ck(500),
          });
        }),
        z = (e, t) => {
          let r = (0, j.NL)(),
            n = F(
              (0, o.useMemo)(() => ({ queryClient: r, settings: t }), [r, t])
            );
          return () => (
            e.forEach((e) => {
              r.setQueryData(["eval_run", e], {
                evalId: e,
                evalRunId: "",
                batchId: "",
                run: {
                  id: "",
                  status: "in_progress",
                  steps: [],
                  eval_id: "",
                  batch_id: "",
                  conversation_id: "",
                },
                timeStarted: 0,
              });
            }),
            Promise.all(e.map((e) => n.fetch(e)))
          );
        },
        T = (e, t) => {
          let r = z(e ? [e] : [], t);
          return (0, A.a)({
            queryKey: ["eval_run", e],
            queryFn: async () => (await r())[0],
            enabled: !!e,
            initialData: null,
          });
        };
      function q() {
        return (0, A.a)({
          queryKey: ["tags"],
          queryFn: async () =>
            (0, _.sortBy)(await y.c.get("".concat(S.rq, "/evals/tags"))),
        });
      }
      async function Q(e) {
        try {
          let t = await y.c.get(
              "".concat(S.rq, "/evals/batched_runs/").concat(e, "/csv"),
              { skipJsonTransform: !0 }
            ),
            r = await t.blob(),
            n = window.URL.createObjectURL(r),
            s = document.createElement("a");
          (s.href = n),
            (s.download = "eval_batch_".concat(e, ".csv")),
            s.click(),
            window.URL.revokeObjectURL(n);
        } catch (e) {
          v.m.danger("Failed to download CSV: ".concat(e));
        }
      }
      function B(e) {
        let { evalRun: t } = e,
          r = D(t.eval_id).data;
        return (0, g.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            null == r
              ? void 0
              : r.steps.map((e, r) => {
                  let n = t.steps[r];
                  return (0, g.jsxs)(
                    "div",
                    {
                      children: [
                        (0, g.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-lg font-medium",
                          children: [
                            (0, g.jsx)(x, {
                              result: n.grading_results.every((e) => e.passed)
                                ? "passed"
                                : "failed",
                            }),
                            e.user_action.query_fragment,
                          ],
                        }),
                        n.grading_results.map((e, t) =>
                          (0, g.jsx)(V, { result: e }, t)
                        ),
                      ],
                    },
                    r
                  );
                }),
            t.turn_template &&
              (0, g.jsxs)("div", {
                className: "flex flex-grow flex-col",
                children: [
                  (0, g.jsx)("div", {
                    className: "flex items-center gap-1 font-medium",
                    children: "Turn Settings",
                  }),
                  (0, g.jsx)(p.default, { json: t.turn_template }),
                ],
              }),
            null != t.batch_id &&
              (0, g.jsxs)(m.z, {
                onClick: () => Q(t.batch_id),
                children: [(0, g.jsx)(h._hL, {}), "Download Batched Run CSV"],
              }),
          ],
        });
      }
      function V(e) {
        let { result: t } = e,
          { 0: r, 1: n } = (0, o.useState)(!1);
        return (0, g.jsxs)("div", {
          className: "ml-8",
          children: [
            (0, g.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                (0, g.jsx)(x, { result: t.passed ? "passed" : "failed" }),
                t.criterion.prompt,
                (0, g.jsx)("button", {
                  onClick: () => n((e) => !e),
                  children: r ? (0, g.jsx)(h.Tfp, {}) : (0, g.jsx)(h.bTu, {}),
                }),
              ],
            }),
            !r &&
              (0, g.jsxs)("div", {
                className: "ml-8 flex flex-col gap-2",
                children: [
                  (0, g.jsx)("div", {
                    children: (0, g.jsx)("p", {
                      className: "whitespace-pre-wrap text-sm",
                      children: t.thoughts,
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    children: [
                      (0, g.jsx)("div", {
                        className: "font-medium",
                        children: "Grader Details",
                      }),
                      (0, g.jsx)("p", {
                        className: "whitespace-pre-wrap text-sm",
                        children: t.prompt,
                      }),
                      (0, g.jsx)(p.default, { json: t.grading_object }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var G = r(11335);
      function H(e) {
        let { run: t, settings: r } = e,
          n = (0, _.isEqual)(
            (0, P.lw)(r.agentSettingsOverrides).turn,
            t.turn_template
          );
        return (0, g.jsxs)("div", {
          className: "flex gap-4 border-t p-[--snc-1]",
          children: [
            (0, g.jsx)("div", {
              className: "flex flex-col",
              children: (0, g.jsxs)("div", {
                className: "grid grid-cols-[auto,auto] gap-1",
                children: [
                  (0, g.jsx)("div", {
                    className: "font-medium",
                    children: "Status",
                  }),
                  (0, g.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.status,
                  }),
                  (0, g.jsx)("div", {
                    className: "font-medium",
                    children: "Eval ID",
                  }),
                  (0, g.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.eval_id,
                  }),
                  (0, g.jsx)("div", {
                    className: "font-medium",
                    children: "Run ID",
                  }),
                  (0, g.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.id,
                  }),
                  (0, g.jsx)("div", {
                    className: "font-medium",
                    children: "Run Batch ID",
                  }),
                  (0, g.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.batch_id,
                  }),
                  null != t.batch_id &&
                    (0, g.jsxs)(m.z, {
                      onClick: () => Q(t.batch_id),
                      children: [
                        (0, g.jsx)(h._hL, {}),
                        "Download Batched Run CSV",
                      ],
                    }),
                ],
              }),
            }),
            !n &&
              (0, g.jsx)(G.u, {
                label: "Run settings differ from your current settings",
                children: (0, g.jsx)("span", {
                  className: "text-red-500",
                  children: (0, g.jsx)(h.bcx, {}),
                }),
              }),
          ],
        });
      }
      var K = r(16131),
        X = r(75138),
        W = r(20735),
        Y = r(40035),
        J = r(20724),
        $ = r(77799),
        ee = r(82547),
        et = r(22189),
        er = r(67739),
        en = r(8143);
      let es = ["minHeight", "maxHeight", "className"];
      function ea(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ea(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ea(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let ei = (0, o.forwardRef)(function (e, t) {
        let { minHeight: r = 24, maxHeight: n, className: s } = e,
          l = (0, er.Z)(e, es),
          i = (0, o.useRef)(null),
          c = null != t ? t : i,
          [u] = (0, en.f)(c);
        return (
          (0, o.useEffect)(() => {
            let e =
              null != u
                ? u
                : "function" != typeof c && (null == c ? void 0 : c.current);
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              null != r && t < r ? (t = r) : null != n && t > n && (t = n),
                (e.style.height = "".concat(t, "px"));
            }
          }, [u, c, l.value, r, n]),
          (0, g.jsx)(
            "textarea",
            el(
              el({}, l),
              {},
              {
                className: (0, a.default)("hide-scrollbar resize-none", s),
                ref: c,
              }
            )
          )
        );
      });
      function eo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let eu = ["model_response"];
      function ed(e) {
        var t, r;
        let {
            criterion: n,
            gradingResult: s,
            isEditing: l,
            onSetIsEditing: i,
            onUpdateCriterion: c,
            autoFocus: u,
            onBlur: d,
          } = e,
          { 0: m, 1: p } = (0, o.useState)(n);
        (0, o.useEffect)(() => {
          p(n);
        }, [n]);
        let f = (e, t) => {
            p(e), null == c || c(e, t);
          },
          b = "pending" !== s && void 0 !== s ? s.thoughts : void 0,
          { 0: v, 1: y } = (0, o.useState)(!1),
          j = (0, o.useRef)(null);
        return (0, g.jsx)(G.E, {
          label: b,
          disabled: !b || l,
          wide: !0,
          side: "right",
          sideOffset: 20,
          align: "start",
          className: "w-full",
          children: (0, g.jsx)("div", {
            className: (0, a.default)("flex w-full gap-2", l && "pl-4"),
            children: l
              ? (0, g.jsxs)(g.Fragment, {
                  children: [
                    null != m
                      ? (0, g.jsx)(G.u, {
                          label: "Remove criterion",
                          side: "top",
                          sideOffset: 4,
                          children: (0, g.jsx)("button", {
                            className:
                              "mt-2 text-token-text-tertiary hover:text-red-500",
                            onClick: (e) => {
                              e.stopPropagation(),
                                p({ prompt: "" }),
                                null == c || c(null);
                            },
                            children: (0, g.jsx)(h.Ybf, {}),
                          }),
                        })
                      : (0, g.jsx)("div", { className: "h-4 w-4" }),
                    (0, g.jsx)(ei, {
                      value:
                        null !== (t = null == m ? void 0 : m.prompt) &&
                        void 0 !== t
                          ? t
                          : "",
                      onChange: (e) =>
                        f(ec(ec({}, m), {}, { prompt: e.target.value })),
                      className:
                        "peer w-full rounded-xl bg-token-main-surface-primary text-sm",
                      placeholder: "Evaluation criterion...",
                      onFocus: () => y(!0),
                      onBlur: () => {
                        y(!1), null == d || d(m);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key &&
                          (e.preventDefault(), e.currentTarget.blur());
                      },
                      onClick: (e) => e.stopPropagation(),
                      onPaste: (e) => {
                        e.preventDefault();
                        let [t, ...r] = e.clipboardData
                            .getData("text")
                            .split("\n"),
                          n = e.target,
                          s =
                            n.value.slice(0, n.selectionStart) +
                            t +
                            n.value.slice(n.selectionEnd);
                        f(
                          ec(ec({}, m), {}, { prompt: s }),
                          (0, _.compact)(
                            r.map((e) => ({
                              prompt: e,
                              visible_assistant_message_fields: eu,
                            }))
                          )
                        );
                        let a = n.selectionStart + t.length;
                        requestAnimationFrame(() => {
                          n.setSelectionRange(a, a);
                        });
                      },
                      autoFocus: u,
                      ref: j,
                    }),
                    (0, g.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => {
                        var e;
                        return null === (e = j.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      children: (0, g.jsx)(ee.nWS, {}),
                    }),
                    (0, g.jsx)(em, {
                      open: v,
                      criterion: null != m ? m : { prompt: "" },
                      onUpdateCriterion: (e) => {
                        f(e);
                      },
                    }),
                  ],
                })
              : (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsx)("div", {
                      className: "flex-grow",
                      children: null == m ? void 0 : m.prompt,
                    }),
                    (0, g.jsx)(x, {
                      className: "mt-1 shrink-0",
                      result: s
                        ? "pending" === s
                          ? "pending"
                          : s.passed
                            ? "passed"
                            : "failed"
                        : "waiting",
                    }),
                    (0, g.jsx)(G.u, {
                      label:
                        null != m && m.visible_assistant_message_fields
                          ? "Visible fields: ".concat(
                              null == m ||
                              null ===
                                (r = m.visible_assistant_message_fields) ||
                              void 0 === r
                                ? void 0
                                : r.join(", ")
                            )
                          : "All fields visible",
                      align: "end",
                      children: (0, g.jsx)("button", {
                        className:
                          "text-token-text-tertiary hover:text-token-text-primary",
                        onClick: () => {
                          i(!0),
                            requestAnimationFrame(() => {
                              var e;
                              null === (e = j.current) ||
                                void 0 === e ||
                                e.focus();
                            });
                        },
                        children: (0, g.jsx)(ee.nWS, {}),
                      }),
                    }),
                  ],
                }),
          }),
        });
      }
      function em(e) {
        var t;
        let { open: r, criterion: n, onUpdateCriterion: s } = e,
          a = (0, A.a)({
            queryKey: ["grader_response_fields"],
            queryFn: async () =>
              await y.c.get("".concat(S.rq, "/evals/grader_response_fields")),
          });
        return (0, g.jsxs)(et.fC, {
          open: r,
          children: [
            (0, g.jsx)(et.ee, { className: "min-h-full" }),
            (0, g.jsx)(et.h_, {
              children: (0, g.jsxs)(et.VY, {
                side: "right",
                sideOffset: 30,
                onOpenAutoFocus: (e) => e.preventDefault(),
                className:
                  "z-10 rounded-lg bg-token-main-surface-primary p-4 text-token-text-primary shadow-md",
                onMouseDown: (e) => e.preventDefault(),
                children: [
                  (0, g.jsx)(et.Eh, {
                    className: " h-4 w-10 fill-token-main-surface-primary",
                    style: {
                      filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))",
                    },
                  }),
                  (0, g.jsx)("div", {
                    className: "mb-4 text-sm text-token-text-secondary",
                    children:
                      "(If none are checked, all fields are visible to grader)",
                  }),
                  (0, g.jsxs)("div", {
                    className:
                      "mb-4 grid w-fit grid-cols-[auto,auto] items-center gap-x-4 gap-y-1",
                    children: [
                      a.isLoading && (0, g.jsx)(f.Z, {}),
                      null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.map((e) => {
                            var t, r;
                            return (0, g.jsxs)(g.Fragment, {
                              children: [
                                (0, g.jsx)("div", {
                                  className: "text-sm font-medium",
                                  children: e,
                                }),
                                (0, g.jsx)("input", {
                                  type: "checkbox",
                                  checked:
                                    null !==
                                      (t =
                                        null ===
                                          (r =
                                            n.visible_assistant_message_fields) ||
                                        void 0 === r
                                          ? void 0
                                          : r.includes(e)) && void 0 !== t
                                      ? t
                                      : eu.includes(e),
                                  onChange: (t) => {
                                    var r, a;
                                    if (t.target.checked)
                                      s(
                                        ec(
                                          ec({}, n),
                                          {},
                                          {
                                            visible_assistant_message_fields: [
                                              ...(null !==
                                                (r =
                                                  n.visible_assistant_message_fields) &&
                                              void 0 !== r
                                                ? r
                                                : eu),
                                              e,
                                            ],
                                          }
                                        )
                                      );
                                    else {
                                      let t = (
                                        null !==
                                          (a =
                                            n.visible_assistant_message_fields) &&
                                        void 0 !== a
                                          ? a
                                          : eu
                                      ).filter((t) => t !== e);
                                      s(
                                        ec(
                                          ec({}, n),
                                          {},
                                          {
                                            visible_assistant_message_fields: t,
                                          }
                                        )
                                      );
                                    }
                                  },
                                }),
                              ],
                            });
                          }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function ep(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ep(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ep(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ef(e) {
        let {
            step: t,
            stepResult: r,
            isEditing: n,
            onSetIsEditing: s,
            onUpdateStep: a,
            showCriterion: l = !0,
            autoFocus: i,
          } = e,
          c = (e) =>
            "pending" === r
              ? "pending"
              : null == r
                ? void 0
                : r.grading_results.find(
                    (t) => t.criterion.prompt === e.prompt
                  ),
          { 0: u, 1: d } = (0, o.useState)(t.user_action.query_fragment),
          m = (e) => {
            d(e),
              a(
                eh(
                  eh({}, t),
                  {},
                  {
                    user_action: eh(
                      eh({}, t.user_action),
                      {},
                      { query_fragment: e }
                    ),
                  }
                )
              );
          },
          p = n ? [...t.criteria, null] : t.criteria,
          f = "submit" === t.user_action.type && "" === u && i,
          x = !f && i;
        return (0, g.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, g.jsx)("div", {
              className: "flex font-medium",
              children: n
                ? (0, g.jsxs)("div", {
                    className: "flex w-full gap-2",
                    children: [
                      (0, g.jsx)(G.u, {
                        label: "Remove step",
                        side: "top",
                        sideOffset: 4,
                        children: (0, g.jsx)("button", {
                          className: "mt-3 text-red-500 hover:text-red-700",
                          onClick: () => {
                            a(null);
                          },
                          children: (0, g.jsx)(h.Ybf, {}),
                        }),
                      }),
                      (0, g.jsx)(ei, {
                        value: u,
                        onChange: (e) => m(e.target.value),
                        className:
                          "mb-2 w-full rounded-lg bg-token-main-surface-primary text-base",
                        placeholder:
                          "submit" === t.user_action.type
                            ? "Search prompt..."
                            : "Followup prompt...",
                        onClick: (e) => e.stopPropagation(),
                        autoFocus: f,
                      }),
                    ],
                  })
                : t.user_action.query_fragment,
            }),
            l &&
              (0, g.jsx)("div", {
                className: "flex flex-col gap-1",
                children:
                  null == p
                    ? void 0
                    : p.map((e, r) =>
                        (0, g.jsx)(
                          ed,
                          {
                            criterion: e,
                            gradingResult: null != e ? c(e) : void 0,
                            isEditing: n,
                            onSetIsEditing: s,
                            onUpdateCriterion: (n, s) => {
                              let l = t.criteria;
                              (l =
                                null == e && null != n
                                  ? t.criteria.concat(n)
                                  : t.criteria
                                      .map((e, t) => (t === r ? n : e))
                                      .filter((e) => null != e)),
                                s && (l = l.concat(s)),
                                a(eh(eh({}, t), {}, { criteria: l }));
                            },
                            autoFocus: x && 0 === r,
                            onBlur: (e) => {
                              (null == e || "" === e.prompt) &&
                                a(
                                  eh(
                                    eh({}, t),
                                    {},
                                    {
                                      criteria: (0, _.compact)(
                                        t.criteria.map((e, t) =>
                                          t === r ? null : e
                                        )
                                      ),
                                    }
                                  )
                                );
                            },
                          },
                          "step-".concat(r)
                        )
                      ),
              }),
          ],
        });
      }
      var eg = r(18460),
        ex = r(98825),
        eb = r(82133);
      function ev(e) {
        return "hsl(".concat(
          (function (e) {
            let t = 0;
            for (let r = 0; r < e.length; r++)
              t = (t << 5) - t + e.charCodeAt(r);
            return ((t % 360) + 360) % 360;
          })(e),
          ", 50%, 90%)"
        );
      }
      let ey = ["tag"];
      function ej(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ej(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let ew = (e) =>
        (0, g.jsx)(
          eg.c.Input,
          eA(
            eA({}, e),
            {},
            { inputClassName: "focus:ring-0 !text-token-text-primary" }
          )
        );
      function eO(e) {
        let {
            tags: t,
            onTagsChange: r,
            placeholder: n,
            isEditable: s,
            classNames: l,
          } = e,
          { data: i, isLoading: o } = q(),
          c = s ? eb.Z : ex.ZP,
          u = (function () {
            let e = (0, j.NL)();
            return (0, w.D)({
              mutationKey: ["tags"],
              mutationFn: async (t) => {
                e.setQueryData(["tags"], (e) => (e ? [...e, t] : e));
              },
            });
          })();
        return (0, g.jsx)(c, {
          classNames: eA(
            eA({}, l),
            {},
            {
              input: (e) => {
                var t;
                return (0, a.default)(
                  "text-sm",
                  null == l || null === (t = l.input) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              multiValue: (e) => {
                var t;
                return (0, a.default)(
                  "!rounded-lg",
                  null == l || null === (t = l.multiValue) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              menu: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary snc-accent-border",
                  null == l || null === (t = l.menu) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              control: (e) => {
                var t;
                return (0, a.default)(
                  "snc-accent-border",
                  null == l || null === (t = l.control) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              menuList: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary",
                  null == l || null === (t = l.menuList) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              multiValueRemove: (e) => {
                var t;
                return (0, a.default)(
                  "text-gray-600",
                  null == l || null === (t = l.multiValueRemove) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
            }
          ),
          styles: {
            control: (e) =>
              eA(
                eA({}, e),
                {},
                { backgroundColor: "var(--token-main-surface-primary)" }
              ),
            option: (e, t) =>
              eA(
                eA({}, e),
                {},
                {
                  backgroundColor: t.isFocused
                    ? "var(--snc-hover)"
                    : "transparent",
                }
              ),
            multiValue: (e, t) =>
              eA(eA({}, e), {}, { backgroundColor: ev(t.data.value) }),
          },
          components: { Input: ew },
          isClearable: !1,
          placeholder: null != n ? n : "Select tags",
          className: "select-none",
          value: t.map((e) => ({ label: e, value: e })),
          isMulti: !0,
          isLoading: o,
          allowCreateWhileLoading: !1,
          options: null == i ? void 0 : i.map((e) => ({ label: e, value: e })),
          onCreateOption: (e) => {
            let n = (0, _.snakeCase)(e).toLowerCase();
            r((0, _.sortBy)([...t, n])), u.mutate(e);
          },
          onChange: (e) => {
            r((0, _.sortBy)(e.map((e) => e.value)));
          },
        });
      }
      function ek(e) {
        let { tag: t } = e,
          r = (0, er.Z)(e, ey);
        return (0, o.createElement)(
          "div",
          eA(
            eA({}, r),
            {},
            {
              key: t,
              className: (0, a.default)(
                "select-none rounded-lg bg-token-main-surface-tertiary px-2 py-1 text-xs font-medium !leading-none text-gray-700",
                r.className
              ),
              style: eA({ backgroundColor: ev(t) }, r.style),
            }
          ),
          t
        );
      }
      var e_ = r(10224);
      function eN(e) {
        let { threadId: t, threadUserId: r, refetchOnMount: n } = e;
        return (0, A.a)({
          queryKey: ["thread", t, r],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, P.Nv)({
                threadId: t,
                threadUserId: r,
                isEval: !0,
              }),
              n = e.turns;
            return { thread: e, turns: n };
          },
          enabled: !!t,
          refetchOnMount: n,
        });
      }
      function eS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eS(Object(r), !0).forEach(function (t) {
                (0, b.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eS(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eE(e) {
        var t, r, n, s, l, i;
        let {
            evalId: c,
            settings: u,
            setSelected: d,
            isSelected: p,
            initialEditState: f,
          } = e,
          b = T(c, u),
          { 0: y, 1: j } = (0, o.useState)(null != f && f),
          A = null === (t = D(c)) || void 0 === t ? void 0 : t.data,
          w = (e) => {
            if (b.data) return b.data.run.steps[e] || "pending";
          },
          O = U(c),
          k = L(c),
          { 0: N, 1: S } = (0, o.useState)(null);
        (0, o.useEffect)(() => {
          S(null != A ? A : null);
        }, [A]);
        let { 0: P, 1: E } = (0, o.useState)(!1),
          C = (e) => {
            S(e), E(!0);
          },
          R = (0, o.useCallback)(() => {
            P &&
              (null == N
                ? (k.mutate(), v.m.info("Test case deleted"))
                : (O.mutate(N), v.m.info("Test case updated")),
              E(!1));
          }, [N, O, P, k]),
          I = (0, o.useCallback)(
            (e) => {
              e != y && (R(), j(e));
            },
            [y, R]
          );
        (0, o.useEffect)(() => {
          p || I(!1);
        }, [p, I]),
          (0, o.useEffect)(() => {
            if (p)
              return (0, $.eR)(document, {
                keydown: (e) => {
                  "Enter" !== e.key || e.shiftKey || I(!y);
                },
              });
          }, [p, y, c, I]);
        let M =
            !p && N && N.steps.length > 0
              ? [N.steps[0]]
              : null == N
                ? void 0
                : N.steps,
          Z =
            (null === (r = b.data) || void 0 === r ? void 0 : r.run.status) ===
            "done"
              ? b.data.run.steps.every((e) =>
                  null == e ? void 0 : e.grading_results.every((e) => e.passed)
                )
                ? "passed"
                : "failed"
              : (null === (n = b.data) || void 0 === n
                    ? void 0
                    : n.run.status) === "in_progress"
                ? "pending"
                : "waiting",
          F =
            (null === (s = b.data) ||
            void 0 === s ||
            null === (s = s.run) ||
            void 0 === s ||
            null === (s = s.steps[0]) ||
            void 0 === s
              ? void 0
              : s.conversation.id) != null,
          { refetch: z } = eN({
            threadId:
              null === (l = b.data) ||
              void 0 === l ||
              null === (l = l.run) ||
              void 0 === l ||
              null === (l = l.steps[0]) ||
              void 0 === l
                ? void 0
                : l.conversation.id,
          });
        return (0, g.jsxs)("div", {
          className: (0, a.default)(
            "relative flex w-full cursor-pointer items-start gap-[--snc-1] px-[--snc-1] text-left transition-colors hover:border-token-border-heavy hover:bg-[var(--snc-hover)]",
            p ? "border-y bg-token-main-surface-secondary py-[--snc-1]" : "py-2"
          ),
          onClick: () => d(!0),
          onDoubleClick: () => I(!0),
          children: [
            (0, g.jsx)("div", {
              className: "flex flex-col gap-2 leading-none",
              children: (0, g.jsx)("button", {
                className: "text-token-text-tertiary",
                onClick: (e) => {
                  e.stopPropagation(), I(!1);
                },
                children: p
                  ? (0, g.jsx)(h.bTu, { className: "icon-lg" })
                  : (0, g.jsx)(x, { result: Z, className: "icon-lg" }),
              }),
            }),
            (0, g.jsxs)("div", {
              className: "flex flex-grow flex-col gap-2",
              children: [
                null == M
                  ? void 0
                  : M.map((e, t) =>
                      (0, g.jsx)(
                        ef,
                        {
                          step: e,
                          stepResult: w(t),
                          isEditing: y,
                          onSetIsEditing: I,
                          onUpdateStep: (e) => {
                            C((r) => {
                              var n;
                              let s = (0, _.compact)(
                                (null !== (n = null == r ? void 0 : r.steps) &&
                                void 0 !== n
                                  ? n
                                  : []
                                ).map((r, n) => (n === t ? e : r))
                              );
                              return null == r || 0 === s.length
                                ? null
                                : eP(eP({}, r), {}, { steps: s });
                            });
                          },
                          showCriterion: p,
                          autoFocus: 0 === t,
                        },
                        t
                      )
                    ),
                y
                  ? (0, g.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, g.jsx)(G.u, {
                          label: "Add new step",
                          side: "right",
                          sideOffset: 4,
                          children: (0, g.jsx)(m.z, {
                            color: "neutral",
                            onClick: (e) => {
                              e.stopPropagation(),
                                C((e) => {
                                  var t;
                                  return null == e
                                    ? e
                                    : eP(
                                        eP({}, e),
                                        {},
                                        {
                                          steps: (null !==
                                            (t =
                                              null == e ? void 0 : e.steps) &&
                                          void 0 !== t
                                            ? t
                                            : []
                                          ).concat({
                                            user_action: {
                                              query_fragment: "",
                                              type: "text",
                                              conversation_id: null,
                                              metadata: {},
                                              agent_settings_overrides: {
                                                model_family: J.tQ.GPT_3_5,
                                                search_engine: J.lv.Bing,
                                                robots_mode: J.K1.Conservative,
                                                show_image_to_model: !1,
                                                rerank_labrador:
                                                  "maraschino-rr-d32-latest",
                                              },
                                            },
                                            criteria: [],
                                          }),
                                        }
                                      );
                                });
                            },
                            children: (0, g.jsx)(h.OvN, {}),
                          }),
                        }),
                        (0, g.jsx)("div", {
                          className:
                            "absolute bottom-[--snc-1] right-[--snc-1]",
                          children: (0, g.jsx)(G.u, {
                            label: "Delete test case",
                            side: "right",
                            children: (0, g.jsx)("button", {
                              className: "text-red-500",
                              onClick: (e) => {
                                e.stopPropagation(), k.mutate();
                              },
                              children: (0, g.jsx)(h.Ybf, {}),
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
                y
                  ? (0, g.jsx)(G.u, {
                      label: "Eval Notes",
                      side: "right",
                      sideOffset: 4,
                      children: (0, g.jsx)(ei, {
                        value: null == N ? void 0 : N.notes,
                        onChange: (e) => {
                          C((t) =>
                            null == t
                              ? t
                              : eP(eP({}, t), {}, { notes: e.target.value })
                          );
                        },
                        placeholder: "Eval Notes...",
                        className:
                          "w-full rounded-lg bg-token-main-surface-primary text-sm",
                      }),
                    })
                  : (null == N ? void 0 : N.notes) &&
                    p &&
                    (0, g.jsxs)("div", {
                      className: "text-sm italic",
                      children: ["Notes: ", null == N ? void 0 : N.notes],
                    }),
                (0, g.jsx)(eC, {
                  tags:
                    null !== (i = null == N ? void 0 : N.tags) && void 0 !== i
                      ? i
                      : [],
                  onUpdateTags: (e) => {
                    C((t) => (null == t ? t : eP(eP({}, t), {}, { tags: e })));
                  },
                  isEditing: y,
                }),
              ],
            }),
            (0, g.jsxs)("div", {
              className: "flex flex-col gap-2 pt-1 leading-none",
              children: [
                (0, g.jsx)(G.u, {
                  label: "Run single test case",
                  side: "right",
                  sideOffset: 4,
                  children: (0, g.jsx)("button", {
                    className: "text-green-500 hover:text-token-text-primary",
                    onClick: (e) => {
                      R(), e.stopPropagation(), d(!0), b.refetch();
                    },
                    children: (0, g.jsx)(h.KCr, { className: "stroke-[2]" }),
                  }),
                }),
                p &&
                  (0, g.jsx)(G.u, {
                    label: y
                      ? "Save test case (Enter)"
                      : "Edit test case (Enter)",
                    side: "right",
                    sideOffset: 4,
                    children: (0, g.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: (e) => {
                        e.stopPropagation(), I(!y);
                      },
                      children: y
                        ? (0, g.jsx)(h.mW3, {})
                        : (0, g.jsx)(h.vPQ, {}),
                    }),
                  }),
                p &&
                  F &&
                  (0, g.jsx)(G.u, {
                    label: "Re-fetch test run",
                    side: "right",
                    sideOffset: 4,
                    children: (0, g.jsx)("div", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => z(),
                      children: (0, g.jsx)(h.Bw1, {}),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function eC(e) {
        let { tags: t, onUpdateTags: r, isEditing: n } = e;
        return n
          ? (0, g.jsx)("div", {
              children: (0, g.jsx)(eO, {
                isEditable: !0,
                tags: t,
                onTagsChange: (e) => r(e),
                placeholder: "Add tags...",
              }),
            })
          : (0, g.jsx)("div", {
              className: "flex flex-wrap items-center gap-1",
              children: t.map((e) => (0, g.jsx)(ek, { tag: e }, e)),
            });
      }
      let eR = "c_0320";
      function eD() {
        return (0, g.jsx)("div", { children: (0, g.jsx)(X.l, { lines: 3 }) });
      }
      function eI(e) {
        var t, r, n, s;
        let {
            settings: l,
            onUpdateSettings: i,
            selectedEvalId: c,
            setSelectedEvalId: u,
          } = e,
          { data: d, isLoading: p } = q(),
          f = Z(),
          { 0: x, 1: b } = (0, o.useState)(""),
          { 0: v, 1: y } = (0, o.useState)([eR]);
        (0, o.useEffect)(() => {
          !p &&
            d &&
            d.length &&
            1 === v.length &&
            v[0] === eR &&
            (d.includes(eR) ? y([eR]) : y([d[0]]));
        }, [p]);
        let j = R(v),
          A =
            null == j || null === (t = j.data) || void 0 === t
              ? void 0
              : t.filter((e) =>
                  e.steps.some(
                    (e) =>
                      !x ||
                      e.user_action.query_fragment.toLowerCase().includes(x)
                  )
                ),
          { 0: w, 1: O } = (0, o.useState)(!1),
          k = z(
            (null != A ? A : []).map((e) => e.id),
            l
          );
        function _(e) {
          return (
            1 === e.steps.length && "" === e.steps[0].user_action.query_fragment
          );
        }
        return (
          (0, o.useEffect)(() => {
            if (j.data && !c && j.data.length > 0 && _(j.data[0])) {
              var e;
              u(null === (e = j.data[0]) || void 0 === e ? void 0 : e.id);
            }
          }, [j.data, c, u]),
          (0, g.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, g.jsxs)("div", {
                className:
                  "pb-[calc(var(--snc-1)/2] flex h-[76px] items-center p-[--snc-1] font-medium",
                children: [
                  "Evals",
                  (null == j ? void 0 : j.data) != null
                    ? " (".concat(j.data.length, ")")
                    : "",
                ],
              }),
              (0, g.jsxs)("div", {
                className: "flex flex-col gap-2 p-[--snc-1]",
                children: [
                  (0, g.jsx)(eO, {
                    classNames: { control: () => "!rounded-full pl-4 pr-1" },
                    tags: v,
                    onTagsChange: y,
                    placeholder: "Find tags...",
                  }),
                  (0, g.jsx)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children:
                      null == d
                        ? void 0
                        : d.map((e) =>
                            (0, g.jsx)(
                              ek,
                              {
                                tag: e,
                                className: (0, a.default)(
                                  "cursor-pointer px-2.5 py-1.5 text-sm",
                                  !v.includes(e) && "opacity-60"
                                ),
                                onClick: (t) => {
                                  if (t.shiftKey) {
                                    y((t) =>
                                      t.includes(e)
                                        ? t.filter((t) => t !== e)
                                        : [...t, e]
                                    );
                                    return;
                                  }
                                  1 === v.length && v.includes(e)
                                    ? y([])
                                    : y([e]);
                                },
                              },
                              e
                            )
                          ),
                  }),
                ],
              }),
              (0, g.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-2 p-[--snc-1] pt-0",
                children: [
                  (0, g.jsx)("div", {
                    className: "flex",
                    children: (0, g.jsx)(G.u, {
                      label: "Add new test case",
                      side: "top",
                      sideOffset: 4,
                      children: (0, g.jsx)(m.z, {
                        color: "neutral",
                        onClick: (e) => {
                          e.stopPropagation(),
                            f.mutate({
                              steps: [
                                {
                                  user_action: {
                                    query_fragment: "",
                                    type: "submit",
                                    conversation_id: null,
                                    metadata: {},
                                    agent_settings_overrides: {
                                      model_family: J.tQ.GPT_3_5,
                                      search_engine: J.lv.Bing,
                                      robots_mode: J.K1.Conservative,
                                      show_image_to_model: !1,
                                      rerank_labrador:
                                        "maraschino-rr-d32-latest",
                                    },
                                  },
                                  criteria: [],
                                },
                              ],
                              tags: [],
                            }),
                            u(void 0);
                        },
                        disabled:
                          (null === (r = j.data) || void 0 === r
                            ? void 0
                            : r[0]) && _(j.data[0]),
                        children: (0, g.jsx)(h.OvN, {}),
                      }),
                    }),
                  }),
                  (0, g.jsx)("input", {
                    type: "text",
                    value: x,
                    className:
                      "snc-accent-border flex-grow rounded-lg bg-token-main-surface-primary py-1 pl-4 pr-1 focus:outline-0 focus:ring-0",
                    onChange: (e) => b(e.target.value),
                    placeholder: "Filter...",
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, g.jsx)(G.u, {
                        label: "Edit settings",
                        side: "top",
                        sideOffset: 4,
                        children: (0, g.jsx)(m.z, {
                          onClick: () => O(!0),
                          color: "neutral",
                          children: (0, g.jsx)(Y.Z, { className: "icon-sm" }),
                        }),
                      }),
                      (0, g.jsx)(G.u, {
                        label: "Run all test cases",
                        side: "top",
                        sideOffset: 4,
                        children: (0, g.jsx)(m.z, {
                          disabled: !(null != A && A.length),
                          onClick: () => {
                            if (!A) return;
                            let e = A.length;
                            (!(e > 50) ||
                              window.confirm(
                                "Are you sure you want to run ".concat(
                                  e,
                                  " evals?"
                                )
                              )) &&
                              k();
                          },
                          className:
                            "flex items-center justify-self-end py-1.5",
                          children: (0, g.jsx)(K.Z, {
                            value:
                              null !== (n = null == A ? void 0 : A.length) &&
                              void 0 !== n
                                ? n
                                : 0,
                            one: "Run 1 eval",
                            other: "Run ".concat(
                              null !== (s = null == A ? void 0 : A.length) &&
                              void 0 !== s
                                ? s
                                : 0,
                              " evals"
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              j.isLoading
                ? (0, g.jsx)("div", {
                    className: "flex flex-col gap-[--snc-1] px-[--snc-2]",
                    children: Array.from({ length: 5 }).map((e, t) =>
                      (0, g.jsx)(eD, {}, t)
                    ),
                  })
                : null == A
                  ? void 0
                  : A.map((e) =>
                      (0, g.jsx)(
                        eE,
                        {
                          settings: l,
                          evalId: e.id,
                          setSelected: (t) => {
                            u((r) => (t ? e.id : r !== e.id ? r : void 0));
                          },
                          isSelected: e.id === c || _(e),
                          initialEditState: _(e),
                        },
                        e.id
                      )
                    ),
              w &&
                (0, g.jsx)(W.Zr, {
                  onClose: () => O(!1),
                  settings: l,
                  onUpdateSetting: i,
                }),
            ],
          })
        );
      }
      function eM() {
        var e, t;
        (0, d.e)();
        let { 0: r, 1: n } = (0, o.useState)(void 0),
          [s, a] = (0, u.r)(),
          l =
            null === (e = T(r)) ||
            void 0 === e ||
            null === (e = e.data) ||
            void 0 === e
              ? void 0
              : e.run,
          i =
            null == l || null === (t = l.steps[0]) || void 0 === t
              ? void 0
              : t.conversation.id;
        return (0, g.jsxs)("div", {
          className: "flex h-screen w-screen",
          children: [
            (0, g.jsx)("div", {
              className:
                "snc-accent-border flex w-1/3 min-w-[400px] flex-shrink-0 flex-col gap-2 overflow-y-auto border-r xl:w-[500px]",
              children: (0, g.jsx)(eI, {
                settings: s,
                onUpdateSettings: a,
                selectedEvalId: r,
                setSelectedEvalId: n,
              }),
            }),
            (0, g.jsxs)("div", {
              className: "flex flex-grow flex-col overflow-hidden",
              children: [
                (null == l ? void 0 : l.exception) &&
                  (0, g.jsxs)("div", {
                    className: "h-ful w-full flex-grow overflow-auto",
                    children: [
                      (0, g.jsx)("h2", { children: "Error in backend" }),
                      (0, g.jsx)("pre", {
                        children: l.exception.traceback.join(""),
                      }),
                    ],
                  }),
                l &&
                  i &&
                  (0, g.jsxs)(g.Fragment, {
                    children: [
                      (0, g.jsx)("div", {
                        className: "h-full w-full flex-grow overflow-auto",
                        children: (0, g.jsx)(eZ, {
                          settings: s,
                          onUpdateSettings: a,
                          evalRun: l,
                          threadId: i,
                        }),
                      }),
                      (0, g.jsx)(H, { run: l, settings: s }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function eU(e) {
        let { value: t, children: r } = e;
        return (0, g.jsx)(s.ck, {
          value: t,
          className: (0, a.default)(
            "flex shrink-0 cursor-pointer items-center justify-center rounded-full border px-2 py-0.5",
            "border-token-border-secondary bg-token-main-surface-primary text-token-text-secondary",
            "radix-state-checked:border-token-text-tertiary radix-state-checked:bg-token-text-primary radix-state-checked:font-medium radix-state-checked:text-token-main-surface-primary"
          ),
          children: r,
        });
      }
      function eZ(e) {
        let { threadId: t, evalRun: r, settings: a, onUpdateSettings: l } = e,
          { 0: u, 1: d } = (0, o.useState)("chat"),
          { refetch: m } = (function (e) {
            let { threadId: t, threadUserId: r } = e,
              n = eN({ threadId: t, threadUserId: r }),
              s = n.data;
            return (
              (0, o.useEffect)(() => {
                if (t) {
                  var e;
                  (0, e_.XR)(
                    t,
                    null !== (e = null == s ? void 0 : s.turns) && void 0 !== e
                      ? e
                      : []
                  );
                }
              }, [t, s]),
              { refetch: n.refetch, isLoading: n.isLoading, isError: n.isError }
            );
          })({ threadId: t, threadUserId: void 0 });
        (0, o.useEffect)(() => {
          m();
        }, [m, r.status]);
        let p = (0, g.jsx)(g.Fragment, {});
        switch (u) {
          case "chat":
            p = (0, g.jsx)(c.e, {
              readyState: 1,
              hasSubmittedInitialQuery: !0,
              searchQuery: "",
              followupQuery: "",
              onUpdateSearchQuery: i(),
              onUpdateFollowupQuery: i(),
              onSubmitFollowup: i(),
              onSubmitSearch: i(),
              settings: a,
              onUpdateSetting: l,
              onReset: i(),
              onRetryQuery: i(),
            });
            break;
          case "details":
            p = (0, g.jsx)(B, { evalRun: r });
            break;
          default:
            (0, n.Z)(u);
        }
        return (0, g.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, g.jsx)("div", {
              className: "border-b p-2",
              children: (0, g.jsxs)(s.fC, {
                value: u,
                onValueChange: (e) => d(e),
                className: "flex gap-1",
                children: [
                  (0, g.jsx)(eU, { value: "chat", children: "Chat" }),
                  (0, g.jsx)(eU, { value: "details", children: "Details" }),
                ],
              }),
            }),
            p,
          ],
        });
      }
    },
    31863: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          FeedbackPage: function () {
            return N;
          },
        });
      var n,
        s,
        a = r(99945),
        l = r(85452),
        i = r(70187),
        o = r(61236),
        c = r(2428),
        u = r.n(c),
        d = r(26169),
        m = r.n(d),
        p = r(91530),
        h = r.n(p),
        f = r(41409),
        g = r(70079),
        x = r(21389),
        b = r(30995),
        v = r(25617),
        y = r(20735),
        j = r(49593),
        A = r(71107),
        w = r(20963),
        O = r(45456),
        k = r(35250);
      function _(e) {
        return m()(e) && ["link", "message", "turn"].includes(e)
          ? e
          : "message";
      }
      function N() {
        (0, O.e)();
        let e = _((0, f.useRouter)().query.type);
        return "turn" === e
          ? (0, k.jsx)(P, {})
          : "link" === e
            ? (0, k.jsx)(S, {})
            : (0, k.jsx)(D, {});
      }
      function S() {
        var e, t;
        let r = (0, A.z8)(A.QP.firstAssistantMessage),
          n = (0, f.useRouter)(),
          [s, a] = u()(n.query.ids) ? n.query.ids : [],
          l = _(n.query.type),
          { data: i, isLoading: c } = (0, o.a)({
            queryKey: ["searchLinkFeedback", s, a],
            queryFn: () => (0, j.zq)(s, a),
            enabled: !!s && !!a,
          });
        return c || !i
          ? (0, k.jsx)(R, {})
          : (0, k.jsx)(E, {
              type: l,
              threadId: i.search_link.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == r ? void 0 : r.userQuery) && void 0 !== e
                  ? e
                  : "",
              rating: i.search_link_to_user.rating,
              tags:
                null !== (t = i.search_link_to_user.tags) && void 0 !== t
                  ? t
                  : [],
              feedbackText: i.search_link_to_user.text,
              highlightUrl: i.search_link.url,
            });
      }
      function P() {
        var e, t;
        let r = (0, A.z8)(A.QP.firstAssistantMessage),
          n = (0, f.useRouter)(),
          [s, a] = u()(n.query.ids) ? n.query.ids : [],
          l = _(n.query.type),
          { data: i, isLoading: c } = (0, o.a)({
            queryKey: ["searchTurnFeedback", s, a],
            queryFn: () => (0, j.a2)(s, a),
            enabled: !!s && !!a,
          });
        return c || !i
          ? (0, k.jsx)(R, {})
          : (0, k.jsx)(E, {
              type: l,
              threadId: i.search_turn.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == r ? void 0 : r.userQuery) && void 0 !== e
                  ? e
                  : "",
              highlightTurnIndex: i.search_turn.turn_index,
              rating: null == i ? void 0 : i.search_turn_to_user.rating,
              tags:
                null !==
                  (t = null == i ? void 0 : i.search_turn_to_user.tags) &&
                void 0 !== t
                  ? t
                  : [],
              feedbackText: null == i ? void 0 : i.search_turn_to_user.text,
            });
      }
      function E(e) {
        let {
            type: t,
            threadId: r,
            threadUserId: n,
            searchQuery: s,
            highlightTurnIndex: a,
            highlightUrl: l,
            rating: o,
            tags: c,
            feedbackText: u,
          } = e,
          { setThreadUserId: d } = (0, v.R)();
        (0, g.useEffect)(() => {
          d(n);
        }, [d, n]);
        let { refetch: m, isLoading: p } = (0, w.v)({
          threadId: r,
          threadUserId: n,
        });
        (0, g.useEffect)(() => {
          m();
        }, [m, r, n]);
        let f = "thumbsUp" === o ? i.go : i.W2;
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-screen flex-col p-5",
          children: [
            p && (0, k.jsx)(R, {}),
            (0, k.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, k.jsx)(C, {
                  className: "flex flex-col gap-2",
                  children: (0, k.jsxs)("div", {
                    className: "flex items-center gap-2 font-medium",
                    children: [
                      "link" === t
                        ? "\uD83D\uDD17 Link Feedback"
                        : "\uD83D\uDD0D Message Feedback",
                      ":",
                      (0, k.jsx)(f, { className: "h-5 w-5" }),
                    ],
                  }),
                }),
                (0, k.jsxs)(C, {
                  children: [
                    (0, k.jsx)("span", {
                      className: "font-medium",
                      children: "Query:",
                    }),
                    " ",
                    s,
                  ],
                }),
                (0, k.jsxs)(C, {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, k.jsxs)("div", {
                      children: [
                        (0, k.jsx)("span", {
                          className: "font-medium",
                          children: "Feedback:",
                        }),
                        " ",
                        u,
                      ],
                    }),
                    (0, k.jsx)("div", {
                      className: "flex gap-1",
                      children: c.map((e) => (0, k.jsx)(I, { children: e }, e)),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)("div", {
              className: "mt-4 h-full w-full flex-grow overflow-auto",
              children: (0, k.jsx)(b.e, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: s,
                followupQuery: "",
                onUpdateSearchQuery: h(),
                onUpdateFollowupQuery: h(),
                onSubmitFollowup: h(),
                onSubmitSearch: h(),
                settings: y.Z,
                onUpdateSetting: h(),
                onReset: h(),
                onRetryQuery: h(),
                highlightTurnIndex: a,
                highlightUrl: l,
              }),
            }),
          ],
        });
      }
      let C = x.Z.div(
        n ||
          (n = (0, a.Z)([
            "rounded-md border border-token-border-medium p-3 flex-1",
          ]))
      );
      function R() {
        return (0, k.jsx)("div", {
          className: "mt-3 flex justify-center",
          children: (0, k.jsx)(l.Z, {}),
        });
      }
      function D() {
        let e, t, r;
        let n = (0, f.useRouter)(),
          s = _(n.query.type),
          [a, i] = u()(n.query.ids) ? n.query.ids : [],
          { data: c, isLoading: d } = (0, o.a)({
            queryKey: ["searchFeedback", a, i],
            queryFn: () =>
              "link" === s
                ? (0, j.zq)(a, i).then(
                    (e) => (
                      A.z8.setState((t) => {
                        (t.conversationId = e.search_link.conversation_id),
                          (t.messages = e.search_link.search_thread_messages);
                      }),
                      e
                    )
                  )
                : (0, j.Im)(a, i).then(
                    (e) => (
                      A.z8.setState((t) => {
                        (t.conversationId = e.search_message.conversation_id),
                          (t.messages =
                            e.search_message.search_thread_messages);
                      }),
                      e
                    )
                  ),
            enabled: !!a && !!i,
          }),
          m = "",
          p = "",
          g = [];
        return (
          c &&
            !d &&
            ("link" === s
              ? ((m = c.search_link.search_query),
                (p = c.search_link_to_user.text),
                (g = c.search_link_to_user.tags),
                (t = c.search_link.url),
                (r = c.search_link_to_user.rating))
              : ((m = c.search_message_to_user.search_query),
                (p = c.search_message_to_user.text),
                (g = c.search_message_to_user.tags),
                (e = c.search_message.id),
                (r = c.search_message_to_user.rating))),
          (0, k.jsxs)("div", {
            className: "flex h-screen w-screen flex-col p-5",
            children: [
              d &&
                (0, k.jsx)("div", {
                  className: "mt-3 flex justify-center",
                  children: (0, k.jsx)(l.Z, {}),
                }),
              c
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)("div", {
                        className:
                          "flex justify-between rounded-md border border-token-border-medium p-3",
                        children: (0, k.jsxs)("div", {
                          className: "flex flex-col gap-1 ",
                          children: [
                            (0, k.jsx)("div", {
                              children: (0, k.jsxs)("span", {
                                className: "font-medium",
                                children: [
                                  "thumbsUp" === r
                                    ? "\uD83D\uDC4D"
                                    : "\uD83D\uDC4E",
                                  " ",
                                  "link" === s
                                    ? "\uD83D\uDD17 Link Feedback"
                                    : "\uD83D\uDD0D Message Feedback",
                                ],
                              }),
                            }),
                            (0, k.jsxs)("div", {
                              children: [
                                (0, k.jsx)("span", {
                                  className: "font-medium",
                                  children: "Query:",
                                }),
                                " ",
                                m,
                              ],
                            }),
                            p &&
                              (0, k.jsxs)("div", {
                                children: [
                                  (0, k.jsx)("span", {
                                    className: "font-medium",
                                    children: "Feedback:",
                                  }),
                                  " ",
                                  p,
                                ],
                              }),
                            (0, k.jsx)("div", {
                              className: "flex",
                              children: g.map((e) =>
                                (0, k.jsx)(I, { children: e }, e)
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, k.jsx)("div", {
                        className: "mt-4 h-full w-full flex-grow overflow-auto",
                        children: (0, k.jsx)(b.e, {
                          readyState: 1,
                          hasSubmittedInitialQuery: !0,
                          searchQuery: m,
                          followupQuery: "",
                          onUpdateSearchQuery: h(),
                          onUpdateFollowupQuery: h(),
                          onSubmitFollowup: h(),
                          onSubmitSearch: h(),
                          settings: y.Z,
                          onUpdateSetting: h(),
                          onReset: h(),
                          onRetryQuery: h(),
                          highlightUrl: t,
                          highlightMessageId: e,
                        }),
                      }),
                    ],
                  })
                : (0, k.jsx)("div", {
                    className: "flex-1 p-3",
                    children: "Feedback Viewer",
                  }),
            ],
          })
        );
      }
      let I = x.Z.div(
        s ||
          (s = (0, a.Z)([
            "rounded-md border bg-token-main-surface-tertiary px-1 text-xs text-token-text-primary",
          ]))
      );
    },
    83216: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return a;
        },
        Y: function () {
          return l;
        },
      });
      var n,
        s = r(38801);
      let a =
          (((n = {}).searchTurnFeedbackButtonShown =
            "Search Turn Feedback Button Shown"),
          (n.searchTurnFeedbackSubmitted = "Search Turn Feedback Submitted"),
          (n.searchLinkFeedbackSubmitted = "Search Link Feedback Submitted"),
          (n.searchLinkShown = "Search Link Shown"),
          (n.searchLinkClicked = "Search Link Clicked"),
          (n.searchQuerySubmitted = "Search Query Submitted"),
          (n.searchFollowupSubmitted = "Search Followup Submitted"),
          (n.searchCitationHovered = "Search Citation Hovered"),
          (n.searchCitationClicked = "Search Citation Clicked"),
          n),
        l = {
          logEvent(e, t) {
            s.A.logEvent(e, t);
          },
        };
    },
    49593: function (e, t, r) {
      "use strict";
      r.d(t, {
        Im: function () {
          return f;
        },
        NK: function () {
          return b;
        },
        Nv: function () {
          return p;
        },
        a2: function () {
          return g;
        },
        dN: function () {
          return d;
        },
        gK: function () {
          return u;
        },
        k4: function () {
          return h;
        },
        lw: function () {
          return m;
        },
        mO: function () {
          return c;
        },
        zq: function () {
          return x;
        },
      });
      var n = r(18450),
        s = r(4466),
        a = r(5224),
        l = r(20724);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let c = async (e) => {
        let { queryKey: t } = e,
          [r, n] = t;
        if (n.length < 2) return [];
        let l = new URLSearchParams({ query_fragment: n });
        return s.c
          .get("".concat(a.rq, "/suggestions?").concat(l.toString()))
          .then((e) => e.suggestions)
          .catch(() => []);
      };
      async function u() {
        return (await s.c.post("".concat(a.rq, "/threads"), {})).thread.id;
      }
      async function d(e) {
        let {
            threadId: t,
            query: r,
            agentSettingsOverrides: n,
            metadata: l,
          } = e,
          i = m(n);
        return s.c.post(
          "".concat(a.rq, "/threads/").concat(t, "/turns?blocking=false"),
          o(
            o({}, i),
            {},
            { turn: o(o({}, i.turn), {}, { user_query: r }), user_metadata: l }
          )
        );
      }
      function m(e) {
        let t = {};
        return (
          e.rerank_labrador &&
            ("none" === e.rerank_labrador
              ? (t.rerank_labrador = null)
              : (t.rerank_labrador = e.rerank_labrador)),
          e.rerank_bing_boost && (t.rerank_bing_boost = e.rerank_bing_boost),
          e.rerank_quality_threshold &&
            (t.rerank_quality_threshold = e.rerank_quality_threshold),
          {
            turn: {
              search_results: {
                settings__: {
                  labrador_rerank_settings: t,
                  external_search_engine: e.search_engine,
                  robots_mode: e.robots_mode,
                },
              },
              image_search_results: {
                settings__: { robots_mode: e.robots_mode },
              },
              model_response: {
                settings__: { enable_multimodal: e.show_image_to_model },
              },
            },
            base_config: (function (e) {
              switch (e) {
                case "gpt-3.5":
                  return "sahara";
                case "gpt-4":
                  return "gpt4";
              }
              throw Error("Unknown model family: ".concat(e));
            })(e.model_family || l.tQ.GPT_3_5),
          }
        );
      }
      async function p(e) {
        let { threadId: t, threadUserId: r, isEval: n = !1 } = e,
          l = new URL(
            "".concat(a.rq, "/admin/threads/").concat(t, "/with_turns")
          );
        return (
          r && l.searchParams.append("thread_user_id", r),
          !0 === n && l.searchParams.append("is_eval", "true"),
          await s.c.get(l.toString())
        );
      }
      async function h(e) {
        let t = new FormData();
        return (
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              turn_index: e.turnIndex,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          s.c.post("".concat(a.rq, "/feedback/turns"), t)
        );
      }
      async function f(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/messages/").concat(e, "/").concat(t)
        );
      }
      async function g(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/turns/").concat(e, "/").concat(t)
        );
      }
      async function x(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/links/").concat(e, "/").concat(t)
        );
      }
      async function b(e) {
        let t = new FormData();
        return (
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              url: e.url,
              title: e.title,
              snippet: e.snippet,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          s.c.post("".concat(a.rq, "/feedback/links"), t)
        );
      }
    },
    71107: function (e, t, r) {
      "use strict";
      r.d(t, {
        fM: function () {
          return p;
        },
        QP: function () {
          return m;
        },
        z8: function () {
          return u;
        },
      });
      var n = r(18450),
        s = r(51362);
      function a(e) {
        return "assistant" === e.role;
      }
      var l = r(92226),
        i = r(78103);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let c = { messages: [], conversationId: null },
        u = (0, i.ZP)(
          (0, s.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? o(Object(r), !0).forEach(function (t) {
                      (0, n.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : o(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
              }
              return e;
            })({}, c)
          )
        ),
        d = u.setState,
        m = {
          messages: (e) => e.messages,
          conversationId: (e) => e.conversationId,
          lastMessage: (e) => e.messages[e.messages.length - 1],
          firstAssistantMessage: (e) => e.messages.find(a),
          displayedMessages: (e) => {
            var t;
            return (null === (t = e.messages[0]) || void 0 === t
              ? void 0
              : t.role) === l.uU.User
              ? e.messages.slice(1)
              : e.messages;
          },
          hasInitialAssistantResponse: (e) =>
            e.messages.some(
              (e) => e.role === l.uU.Assistant && e.text.length > 0
            ),
          firstFollowupResponseId: (e) => {
            let t;
            let r = 0;
            for (let n of e.messages)
              if ("assistant" === n.role && 2 == ++r) {
                t = n.id;
                break;
              }
            return t;
          },
        },
        p = {
          resetConversation() {
            d(() => c);
          },
        };
    },
    20724: function (e, t, r) {
      "use strict";
      var n, s, a;
      r.d(t, {
        K1: function () {
          return o;
        },
        lv: function () {
          return i;
        },
        mX: function () {
          return c;
        },
        tQ: function () {
          return l;
        },
      });
      let l = (((n = {}).GPT_3_5 = "gpt-3.5"), (n.GPT_4 = "gpt-4"), n),
        i =
          (((s = {}).Bing = "bing"),
          (s.Sydney = "sydney"),
          (s.Fortis = "fortis"),
          s),
        o =
          (((a = {}).Conservative = "conservative"),
          (a.Aggressive = "aggressive"),
          a);
      function c(e) {
        return (
          "object" == typeof e &&
          (!e.rerank_labrador || "string" == typeof e.rerank_labrador)
        );
      }
    },
    10224: function (e, t, r) {
      "use strict";
      r.d(t, {
        Rx: function () {
          return b;
        },
        XR: function () {
          return O;
        },
      });
      var n = r(18450),
        s = r(92226),
        a = r(95407),
        l = r(68952),
        i = r(4466),
        o = r(66315),
        c = r(70079),
        u = r(15118),
        d = r(78103),
        m = r(51362),
        p = r(5224),
        h = r(49593),
        f = r(71107);
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function b(e) {
        let { conversationId: t, socketUrl: r, onTurnSubmitted: n } = e,
          { 0: s, 1: d } = (0, c.useState)(!1),
          { 0: m, 1: f } = (0, c.useState)(!0),
          { 0: g, 1: b } = (0, c.useState)(!0),
          y = (0, c.useRef)(0),
          A = (0, c.useRef)(!1);
        (0, c.useEffect)(
          () => (
            (A.current = !0),
            () => {
              A.current = !1;
            }
          ),
          []
        ),
          (0, c.useEffect)(
            () =>
              (0, l.R)({
                onHidden: () => {
                  console.debug("[ws] onHidden"), b(!1);
                },
                onVisible: () => {
                  console.debug("[ws] onVisible, set reconnect to true"),
                    f(!0),
                    b(!0);
                },
              }),
            []
          ),
          (0, c.useEffect)(() => {
            let e = w.subscribe((e) => {
              v(t, e.turns);
            });
            return () => {
              e();
            };
          }, [t]);
        let O = (0, c.useCallback)(async () => {
            if (y.current > 50)
              return (
                a.m.danger("Failed to fetch websocket url", {
                  hasCloseButton: !0,
                }),
                ""
              );
            try {
              let e = await i.c.get("".concat(p.rq, "/register-websocket"));
              return (y.current = 0), e.wss_url;
            } catch (e) {
              throw (o.U.addError(e), (y.current += 1), e);
            }
          }, []),
          { readyState: k } = (0, u.ZP)(
            !s && r ? r : O,
            {
              retryOnError: !0,
              shouldReconnect: () => !0 === A.current && g,
              reconnectAttempts: 50,
              reconnectInterval: (e) => Math.min(1e3 * Math.pow(1.3, e), 5e3),
              onMessage: (e) => {
                !(function (e, t) {
                  if (e.thread_id !== t) return;
                  let r =
                    "append_turn" === e.delta.type
                      ? e.delta.turn.index
                      : e.delta.turn_index;
                  switch (e.delta.type) {
                    case "append_turn":
                      var n;
                      (n = e.delta.turn),
                        w.setState((e) => {
                          e.threadId !== t &&
                            ((e.turns = []), (e.threadId = t)),
                            e.turns.push(n);
                        });
                      break;
                    case "set_search_results": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.search_results = t.search_results;
                      });
                      break;
                    }
                    case "set_model_response": {
                      let t = e.delta;
                      j(r, (e) => (e.model_response = t.model_response));
                      break;
                    }
                    case "append_model_response_text": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.model_response ||
                          (e.model_response = { text: "", citations: [] }),
                          (e.model_response.text += t.text),
                          (e.model_response.citations = t.citations);
                      });
                      break;
                    }
                    case "set_weather_widget": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.weather_widget = t.weather_widget;
                      });
                      break;
                    }
                    case "set_calculator_widget": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.calculator_widget = t.calculator_widget;
                      });
                      break;
                    }
                    case "set_sports_widget": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.sports_widget = t.sports_widget;
                      });
                      break;
                    }
                    case "set_finance_widget": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.finance_widget = t.finance_widget;
                      });
                      break;
                    }
                    case "set_finance_widget_histories": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.finance_widget = x(
                          x({}, e.finance_widget),
                          {},
                          { histories: t.histories }
                        );
                      });
                      break;
                    }
                    case "set_turn_execution_status": {
                      let t = e.delta;
                      j(r, (e) => {
                        (e.execution_status = t.execution_status),
                          (e.error = t.error);
                      });
                      break;
                    }
                    case "set_suggested_replies": {
                      let t = e.delta;
                      j(r, (e) => {
                        e.suggested_replies = t.suggested_replies;
                      });
                      break;
                    }
                    default:
                      o.U.addError("Unsupported delta type", {
                        delta: e.delta,
                      });
                  }
                })(JSON.parse(e.data), t);
              },
              onClose: () => {
                console.debug("[ws] Connection closed"), d(!0);
              },
              onReconnectStop: () => {
                console.debug("[ws] Reconnect stopped"),
                  f(!1),
                  a.m.danger(
                    "Websocket connection attempts failed, pausing reconnects",
                    { hasCloseButton: !0 }
                  );
              },
            },
            m
          );
        return {
          readyState: k,
          postQuery: (0, c.useCallback)(
            async (e) => {
              let { conversationId: t } = e,
                r = !!t;
              return (
                t || (t = await (0, h.gK)()),
                (0, h.dN)({
                  threadId: t,
                  query: e.query,
                  agentSettingsOverrides: e.agentSettingsOverrides,
                  metadata: e.metadata,
                }).then(() => (null == n ? void 0 : n({ isFollowup: r }))),
                { conversationId: t }
              );
            },
            [n]
          ),
        };
      }
      function v(e, t) {
        f.z8.setState((r) => {
          if (e) {
            if (0 === t.length) {
              r.messages = [];
              return;
            }
            if (r.messages.length % 2 != 0) {
              o.U.addError(
                "Conversation messages should always be even (occur in user-assistant pairs)",
                { messages: r.messages }
              );
              return;
            }
            if (((r.conversationId = e), r.messages.length < 2 * t.length))
              for (let n of t.slice(r.messages.length / 2))
                r.messages.push({
                  role: s.uU.User,
                  text: n.user_query,
                  id: "user-".concat(n.index),
                  turnIndex: n.index,
                }),
                  r.messages.push(y(e, n));
            else {
              let n = t[t.length - 1];
              r.messages[r.messages.length - 1] = y(e, n);
            }
          }
        });
      }
      function y(e, t) {
        var r, n, a, l, i, o, c, u, d, m, p, h;
        return {
          id: "assistant-".concat(e, "-").concat(t.index),
          turnIndex: t.index,
          role: s.uU.Assistant,
          text:
            null !==
              (r =
                null === (n = t.model_response) || void 0 === n
                  ? void 0
                  : n.text) && void 0 !== r
              ? r
              : "",
          status:
            "fatal_system_error" === t.execution_status
              ? "error"
              : t.execution_status,
          error: t.error,
          citations: (null !==
            (a =
              null === (l = t.model_response) || void 0 === l
                ? void 0
                : l.citations) && void 0 !== a
            ? a
            : []
          )
            .filter((e) => e.title && e.url)
            .map((e) => ({
              start_ix: e.start_idx,
              end_ix: e.end_idx,
              citation_format_type: "tether_og",
              metadata: { title: e.title, url: e.url, type: "webpage" },
            })),
          searchResults:
            null !==
              (i =
                null === (o = t.search_results) || void 0 === o
                  ? void 0
                  : o.entries) && void 0 !== i
              ? i
              : [],
          suggestedReplies:
            null !==
              (c =
                null === (u = t.suggested_replies) || void 0 === u
                  ? void 0
                  : u.values) && void 0 !== c
              ? c
              : [],
          userQuery: t.user_query,
          widget:
            null !== (d = t.finance_widget) && void 0 !== d && d.price
              ? { type: "finance", status: "done", data: t.finance_widget }
              : null !== (m = t.weather_widget) &&
                  void 0 !== m &&
                  m.forecast_response
                ? {
                    type: "weather",
                    status: "done",
                    data: t.weather_widget.forecast_response,
                  }
                : null !== (p = t.sports_widget) && void 0 !== p && p.standings
                  ? {
                      type: "sports-standings",
                      status: "done",
                      data: t.sports_widget.standings,
                    }
                  : null !== (h = t.calculator_widget) &&
                      void 0 !== h &&
                      h.expression &&
                      t.calculator_widget.result
                    ? {
                        type: "calculator",
                        status: "done",
                        data: {
                          expression: t.calculator_widget.expression,
                          result: t.calculator_widget.result,
                        },
                      }
                    : null,
        };
      }
      function j(e, t) {
        w.setState((r) => {
          let n = r.turns[e];
          if (!n) {
            o.U.addError("turn not found", { turnIndex: e, turns: r.turns });
            return;
          }
          t(n);
        });
      }
      let A = { turns: [], threadId: null },
        w = (0, d.ZP)((0, m.n)(() => x({}, A)));
      function O(e, t) {
        w.setState((r) => {
          (r.threadId = e), (r.turns = t);
        }),
          v(e, t);
      }
    },
    20963: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var n = r(61236),
        s = r(70079),
        a = r(49593),
        l = r(10224);
      function i(e) {
        let { threadId: t, threadUserId: r, refetchOnMount: s } = e;
        return (0, n.a)({
          queryKey: ["thread", t, r],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, a.Nv)({ threadId: t, threadUserId: r }),
              n = e.turns;
            return { thread: e, turns: n };
          },
          enabled: !!t,
          refetchOnMount: s,
        });
      }
      function o(e) {
        let { threadId: t, threadUserId: r } = e,
          n = i({ threadId: t, threadUserId: r }),
          a = n.data;
        return (
          (0, s.useEffect)(() => {
            if (t) {
              var e;
              (0, l.XR)(
                t,
                null !== (e = null == a ? void 0 : a.turns) && void 0 !== e
                  ? e
                  : []
              );
            }
          }, [t, a]),
          { refetch: n.refetch, isLoading: n.isLoading, isError: n.isError }
        );
      }
    },
    84342: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return a;
        },
      });
      var n = r(20735),
        s = r(70079);
      function a() {
        return (function (e, t, r) {
          let { 0: n, 1: a } = (0, s.useState)(() => {
            try {
              let t = JSON.parse(window.localStorage.getItem(e) || "");
              if (!r(t)) throw Error("Invalid data");
              return t;
            } catch (e) {
              return t;
            }
          });
          return (
            (0, s.useEffect)(() => {
              window.localStorage.setItem(e, JSON.stringify(n));
            }, [e, n]),
            [n, a]
          );
        })("SONIC_SETTINGS_1710786435", n.Z, n.Wt);
      }
    },
    45456: function (e, t, r) {
      "use strict";
      function n() {
        var e;
        null === (e = document.querySelector("html")) ||
          void 0 === e ||
          e.classList.add("snc");
      }
      r.d(t, {
        e: function () {
          return n;
        },
      });
    },
    90240: function (e, t, r) {
      "use strict";
      r.d(t, {
        PX: function () {
          return s;
        },
        XB: function () {
          return a;
        },
      });
      var n = r(43041);
      let s = { latitude: null, longitude: null, locationAccuracy: null };
      function a(e) {
        if (!e) {
          l();
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (e) => {
            n.bX.setCookie(
              n.cn.LastLocation,
              JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                locationAccuracy: e.coords.accuracy,
              }),
              { maxAge: 2592e3 }
            );
          },
          () => {
            l();
          }
        );
      }
      function l() {
        n.bX.setCookie(n.cn.LastLocation, JSON.stringify(s), {
          maxAge: 2592e3,
        });
      }
    },
    3107: function (e) {
      e.exports = {
        "jidori-editor": "ProseMirror_jidori-editor__qe4qb",
        "generated-text": "ProseMirror_generated-text___vj5n",
      };
    },
  },
]);
//# sourceMappingURL=sso.b864a4dadd8473bc.js.map
