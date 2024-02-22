(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6161],
  {
    30069: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return D;
          },
        });
      var s = t(50134),
        c = t(36112),
        r = t(4399),
        l = t.n(r),
        o = t(43753),
        i = t(3554),
        n = t(73700),
        d = t(95412),
        u = t(7144),
        p = t(73582),
        f = t(40318),
        v = t(61888),
        h = t(21988),
        k = t.n(h),
        x = t(70079),
        j = t(70671),
        m = t(32004),
        b = t(94968),
        w = t(90387),
        g = t(21120),
        W = t(59963),
        N = t(35250);
      function y(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function P(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? y(Object(t), !0).forEach(function (a) {
                (0, c.Z)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : y(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
        }
        return e;
      }
      function M() {
        var e = (0, p.aF)(),
          a = (0, u.t)(),
          t = (0, u.rk)().data,
          c = (0, x.useState)(!1),
          r = c[0],
          h = c[1],
          b = null == t ? void 0 : t.accountItems,
          y = null == a ? void 0 : a.id,
          M =
            null == b
              ? void 0
              : b.find(function (e) {
                  return e.id === y;
                }),
          _ =
            null == b
              ? void 0
              : b.filter(function (e) {
                  return !e.isDeactivated();
                }),
          D = (0, j.Z)();
        return null != a && M && _
          ? (0, N.jsx)(g.Z, {
              type: "success",
              onClose: v.noop,
              isOpen: null != a || null != t,
              className: "",
              title: (0, N.jsx)("span", {
                className: "text-lg",
                children: (0, N.jsx)(m.Z, P({}, O.workspaceDeactivated)),
              }),
              children: (0, N.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-4",
                children: [
                  (0, N.jsxs)("div", {
                    className: "flex w-full items-center gap-4",
                    children: [
                      (0, N.jsx)(w.B0, {
                        src: M.data.profilePictureUrl,
                        size: "large",
                      }),
                      (0, N.jsx)("div", {
                        className: "font-medium",
                        children: M.data.name,
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    children: [
                      (0, N.jsx)("h3", {
                        className: "mb-2 text-base font-bold",
                        children: (0, N.jsx)(
                          m.Z,
                          P({}, O.workspaceDeactivated)
                        ),
                      }),
                      (0, N.jsxs)("ul", {
                        className: "list-disc pl-5",
                        children: [
                          (0, N.jsx)("li", {
                            className: "mb-1",
                            children: (0, N.jsx)(
                              m.Z,
                              P({}, O.chatHistoryUnavailable)
                            ),
                          }),
                          (0, N.jsx)("li", {
                            children: (0, N.jsx)(
                              m.Z,
                              P({}, O.otherWorkspacesAvailable)
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(W.b, {}),
                  (0, N.jsx)("div", {
                    className: "w-full justify-center",
                    children:
                      _.length > 0
                        ? (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)("h3", {
                                className: "mb-2 text-base font-bold",
                                children: (0, N.jsx)(
                                  m.Z,
                                  P({}, O.selectWorkspace)
                                ),
                              }),
                              (0, N.jsx)(o.b, { data: _ }),
                            ],
                          })
                        : (0, N.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, N.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, N.jsx)("h3", {
                                    className: "text-base font-bold",
                                    children: (0, N.jsx)(
                                      m.Z,
                                      P({}, O.createPersonalWorkspace)
                                    ),
                                  }),
                                  (0, N.jsx)(
                                    m.Z,
                                    P({}, O.deactivatedWorkspaceReason)
                                  ),
                                ],
                              }),
                              (0, N.jsxs)("div", {
                                className: "flex w-full items-center gap-4",
                                children: [
                                  e &&
                                    e.picture &&
                                    (0, N.jsx)(k(), {
                                      alt: "Profile",
                                      src: e.picture,
                                      width: w.EF.medium,
                                      height: w.EF.medium,
                                      className:
                                        "flex items-center justify-center rounded-sm",
                                    }),
                                  (0, N.jsx)("span", {
                                    className: "font-medium",
                                    children:
                                      e &&
                                      (0, N.jsx)("span", { children: e.name }),
                                  }),
                                ],
                              }),
                              (0, N.jsx)("div", {
                                className: "ml-auto",
                                children: (0, N.jsx)(i.mH, {
                                  title: D.formatMessage(
                                    O.createPersonalWorkspaceButton
                                  ),
                                  loading: r,
                                  onClick: (0, s.Z)(
                                    l().mark(function e() {
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                h(!0),
                                                (e.next = 3),
                                                d.Z.upsertPersonalWorkspace()
                                              );
                                            case 3:
                                              (0, u.eV)(n.b), (0, f.M)();
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  ),
                                  color: "primary",
                                  className: "ml-4",
                                }),
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            })
          : (0, N.jsx)(N.Fragment, {});
      }
      var O = (0, b.vU)({
          workspaceDeactivated: {
            id: "deactivatedWorkspaceModal.workspaceDeactivated",
            defaultMessage: "Your workspace has been deactivated",
          },
          workspaceDeactivatedDesc: {
            id: "deactivatedWorkspaceModal.workspaceDeactivatedDesc",
            defaultMessage: "Your workspace has been deactivated.",
          },
          chatHistoryUnavailable: {
            id: "deactivatedWorkspaceModal.chatHistoryUnavailable",
            defaultMessage:
              "Your chat history and settings will not be available.",
          },
          otherWorkspacesAvailable: {
            id: "deactivatedWorkspaceModal.otherWorkspacesAvailable",
            defaultMessage:
              "You will still be able to use ChatGPT with the other workspaces associated with this email address.",
          },
          selectWorkspace: {
            id: "deactivatedWorkspaceModal.selectWorkspace",
            defaultMessage: "Select a workspace to continue",
          },
          createPersonalWorkspace: {
            id: "deactivatedWorkspaceModal.createPersonalWorkspace",
            defaultMessage: "Create a personal workspace to continue",
          },
          deactivatedWorkspaceReason: {
            id: "deactivatedWorkspaceModal.deactivatedWorkspaceReason",
            defaultMessage:
              "Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT.",
          },
          profileAlt: {
            id: "deactivatedWorkspaceModal.profileAlt",
            defaultMessage: "Profile",
          },
          createPersonalWorkspaceButton: {
            id: "deactivatedWorkspaceModal.createPersonalWorkspaceButton",
            defaultMessage: "Create a personal workspace",
          },
        }),
        _ = t(10721);
      function D() {
        var e = (0, p.ec)(p.F_.workspaces),
          a = (0, u.t)(),
          t = (0, p.ec)(p.F_.workspaceId),
          s = e.find(function (e) {
            return e.id === t;
          }),
          c = (0, _.useRouter)();
        return ((0, x.useEffect)(
          function () {
            null == a || !a.data || (s && s.deactivated) || c.push("/");
          },
          [a, s, c]
        ),
        null == a || !a.data || (s && s.deactivated))
          ? (0, N.jsx)(M, {})
          : (0, N.jsx)("div", {});
      }
    },
    57263: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/workspace/deactivated",
        function () {
          return t(30069);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 57263));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=deactivated-3ff3b16d85c87728.js.map
