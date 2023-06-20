(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [151],
  {
    11980: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/payments/business",
        function () {
          return s(29730);
        },
      ]);
    },
    29730: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return j;
          },
        });
      var n = s(35250),
        l = s(21722),
        t = s(22830),
        r = s(39889),
        i = s(70079);
      let c = i.forwardRef(function ({ title: e, titleId: a, ...s }, n) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              s
            ),
            e ? i.createElement("title", { id: a }, e) : null,
            i.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
            })
          );
        }),
        o = i.forwardRef(function ({ title: e, titleId: a, ...s }, n) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": a,
              },
              s
            ),
            e ? i.createElement("title", { id: a }, e) : null,
            i.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
            })
          );
        });
      var d = s(16578),
        x = s.n(d),
        u = s(32787),
        m = s(24274),
        h = s(66958),
        f = s(38317);
      function p() {
        var e = (0, t._)((0, i.useState)(null), 2),
          a = e[0],
          s = e[1],
          d = (0, t._)((0, i.useState)("org-123"), 2),
          p = d[0];
        d[1];
        var g = (0, u.kP)().session,
          j = (0, i.useCallback)(
            (0, l._)(function () {
              return (0, r.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!g || null == a) return [2];
                    return [
                      4,
                      m.ZP.createWorkspaceAccount({
                        name: a,
                        organizationId: p,
                        accessToken: g.accessToken,
                      }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            }),
            [g, a, p]
          );
        return (0, n.jsx)("div", {
          className: "flex h-full w-full items-center bg-gray-50 p-4",
          children: (0, n.jsxs)("div", {
            className: "mx-auto flex flex-col",
            children: [
              (0, n.jsx)("div", {
                className: "flex px-4",
                children: (0, n.jsx)("div", {
                  className: "flex",
                  children: (0, n.jsxs)(x(), {
                    href: "/",
                    className: "btn btn-neutral flex gap-2",
                    children: [
                      (0, n.jsx)(f.ZP, { icon: c, size: "small" }),
                      "Back to ChatGPT",
                    ],
                  }),
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "mx-auto flex w-full flex-col gap-16 p-4 md:flex md:max-w-5xl md:flex-row",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex-1 text-gray-600 dark:text-gray-200",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "pb-2 text-lg font-medium",
                        children: "ChatGPT for Business",
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, n.jsx)(o, { className: "mt-1 h-4" }),
                              (0, n.jsx)("p", {
                                className: "flex-1",
                                children:
                                  "The biggest and fastest models, with priority capacity and uptime. Get GPT-4, plugins, browsing, and code interpreter for your whole team.",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, n.jsx)(o, { className: "mt-1 h-4" }),
                              (0, n.jsx)("p", {
                                className: "flex-1",
                                children:
                                  "Manage invites and permissions with the new Admin panel. Control who has access to what plugins",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, n.jsx)(o, { className: "mt-1 h-4" }),
                              (0, n.jsx)("p", {
                                className: "flex-1",
                                children:
                                  "A new privacy standard: ChatGPT never trains on your teams data. Automatically delete conversations across your whole company",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex-1 rounded-lg border bg-white p-6 shadow-xl dark:bg-gray-900",
                    children: [
                      (0, n.jsx)("h2", {
                        className: "pb-2 text-lg font-medium",
                        children: "Buy ChatGPT for Business",
                      }),
                      (0, n.jsx)("p", {
                        className: "pb-4 text-gray-600 dark:text-gray-200",
                        children:
                          "Pick an organization to setup your account in.",
                      }),
                      (0, n.jsx)("div", {
                        className: "pb-4",
                        children: (0, n.jsxs)("label", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-xs uppercase text-gray-600 dark:text-gray-200",
                              children: "Organization",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "rounded bg-gray-100 p-4 text-gray-600 dark:text-gray-200",
                              children: "Organization picker will go here.",
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "pb-4",
                        children: (0, n.jsxs)("label", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "text-xs uppercase text-gray-600 dark:text-gray-200",
                              children: "Team name",
                            }),
                            (0, n.jsx)("input", {
                              className: "w-full rounded bg-gray-100 px-4 py-4",
                              placeholder: "ex: Team Name",
                              value: a || "",
                              onChange: function (e) {
                                return s(e.target.value);
                              },
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: " flex w-full justify-end gap-2",
                        children: (0, n.jsx)(h.z, {
                          className: "btn btn-primary",
                          onClick: j,
                          children: "Setup ChatGPT for Business",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var g = !0;
      function j() {
        return (0, n.jsx)(p, {});
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 11980));
    }),
      (_N_E = e.O());
  },
]);
