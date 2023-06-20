(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    71047: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Q;
        },
      });
      var r = t(22830),
        a = t(35250),
        i = t(61888),
        o = t(70079),
        s = t(48727),
        l = t(39324),
        u = t(71209),
        c = t(3001),
        d = t(75908),
        m = t(35290),
        f = t(82841),
        h = t(36218),
        g = t(32787),
        p = t(85023),
        v = t(64135),
        x = t(88038),
        b = t(59114),
        y = (0, c.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        j = "2023-04-25",
        k = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(j);
      function w(e) {
        var n = e.onClose,
          t = (0, d.Z)(),
          r = (0, o.useCallback)(
            function () {
              p.m.setItem(k, !0), n();
            },
            [n]
          ),
          l = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            l && l(h.s6.ageConfirmationModal, { content: j });
          }, []),
          (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            title: t.formatMessage(y.welcomeBack),
            primaryButton: (0, a.jsx)(b.ZP.Button, {
              title: t.formatMessage(y.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(b.ZP.Button, {
              title: t.formatMessage(y.logoutButton),
              color: "light",
              onClick: function () {
                l(h.s6.clickLogOut, { eventSource: "mouse" }), (0, g.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(C, {}),
          })
        );
      }
      var C = function () {
          var e = (0, d.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, l._)({}, y.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, u._)((0, l._)({}, y.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        _ = t(4337),
        M = t(34303),
        T = t(5759),
        N = t(66958);
      function I() {
        var e = (0, _._)(["flex gap-4 mt-6"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function S(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(Z, {
          children: [
            n &&
              (0, a.jsx)(N.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, a.jsx)(N.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(N.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var Z = M.Z.div(I());
      function P() {
        var e = (0, _._)(["prose dark:prose-invert"]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = (0, _._)(["mb-4"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      var D = (0, c.vU)({
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        A = "oai/apps/hasSeenOnboarding",
        E = function () {
          var e = (0, o.useCallback)(function () {
              p.m.setItem(
                "".concat(A, "/chat"),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            n = (0, r._)((0, o.useState)(null), 2),
            t = n[0],
            a = n[1];
          (0, o.useEffect)(
            function () {
              var e = p.m.getItem("".concat(A, "/chat"));
              a(!!e && e);
            },
            [a]
          );
          var i = (0, o.useCallback)(
            function () {
              return t ? new Date(!0 === t ? "2022-12-14" : t) : t;
            },
            [t]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: i };
            },
            [i, e]
          );
        };
      function B(e) {
        var n = e.onClose,
          t = E().setHasSeenOnboarding,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1],
          u = (0, o.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, a.jsxs)(U, {
          children: [
            0 === s && (0, a.jsx)(F, { onChangePage: l }),
            1 === s && (0, a.jsx)(L, { onChangePage: l }),
            2 === s && (0, a.jsx)(O, { onChangePage: l, onSubmit: u }),
          ],
        });
      }
      var F = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        L = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        O = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      m.Z,
                      (0, u._)((0, l._)({}, D.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        U = M.Z.div(P()),
        q = M.Z.h4(R()),
        z = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(B, { onClose: n }),
          });
        };
      function Q(e) {
        var n,
          t,
          i,
          s = e.userCountry,
          l = (0, r._)((0, o.useState)(0), 2),
          u = l[0],
          c = l[1],
          d = E().getHasSeenOnboardingDate,
          m =
            ((t = (n = (0, v.hz)()).has(x.Vn)),
            (i = !!p.m.getItem(k)),
            0 === n.size
              ? "loading"
              : "IT" !== s || i
              ? "hide"
              : t
              ? "show"
              : "hide"),
          f = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: w,
                  getModalState: function () {
                    return m;
                  },
                },
                {
                  Modal: z,
                  getModalState: function () {
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [d, m]
          );
        (0, o.useEffect)(
          function () {
            f[u] &&
              "hide" === f[u].getModalState() &&
              c(
                f.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, f]
        );
        var h = f[u];
        if (!h) return null;
        var g = h.getModalState();
        if ("loading" === g) return null;
        "hide" === g &&
          c(function (e) {
            return e + 1;
          });
        var b = f[u].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
    },
    21172: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var r = t(22830),
        a = t(35250),
        i = t(70079),
        o = t(5914),
        s = t(97688),
        l = t(87316),
        u = t(32983),
        c = t(64135),
        d = t(75527),
        m = t(71047),
        f = t(86412);
      function h(e) {
        var n = e.urlThreadId,
          t = e.clientThreadId,
          h = e.isUserInCanPayGroup,
          g = e.serviceStatus,
          p = e.serviceAnnouncement,
          v = e.userCountry,
          x = (0, r._)(
            (0, i.useState)(function () {
              return void 0 !== n ? n : void 0 !== t ? t : (0, d.OX)();
            }),
            2
          ),
          b = x[0],
          y = x[1];
        void 0 !== n && b !== n && y(n),
          void 0 !== n || (0, d.Zz)(b) || y((0, d.OX)());
        var j = (0, c.Xj)().data,
          k = null == j ? void 0 : j.accountPlan.hasPaidSubscription,
          w = (0, l.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== h && w("isUserInCanPayGroup", h);
          },
          [w, h]
        ),
          (0, i.useEffect)(
            function () {
              (null == g ? void 0 : g.type) &&
                !1 === k &&
                s.m.warning(g.message, { hasCloseButton: !0, duration: 5 });
            },
            [k, null == g ? void 0 : g.message, null == g ? void 0 : g.type]
          );
        var C = (0, d.GR)(b),
          _ = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            function () {
              if (null != j) {
                var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !_.current
                ) {
                  _.current = !0;
                  var n = e.message,
                    t = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      s.m.danger(n, t);
                      break;
                    case "info":
                      s.m.info(n, t);
                      break;
                    case "warning":
                      s.m.warning(n, t);
                  }
                }
              }
            },
            [p, j]
          ),
          (0, a.jsxs)(u.XA.Provider, {
            value: C,
            children: [
              (0, a.jsx)(m.Z, { userCountry: v }),
              (0, a.jsx)(o.j, {}),
              (0, a.jsx)(f.Z, {
                clientThreadId: b,
                setClientThreadId: y,
                isStaticSharedThread: !1,
              }),
            ],
          })
        );
      }
    },
    86412: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return oj;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        d,
        m,
        f,
        h,
        g,
        p,
        v = t(39324),
        x = t(70216),
        b = t(22830),
        y = t(35250),
        j = t(35448),
        k = t(68555),
        w = t(70079),
        C = t(1454),
        _ = t(35290),
        M = t(3001),
        T = t(64135),
        N = t(75527),
        I = t(81292),
        S = t(58392),
        Z = (0, I.ZP)(
          (0, S.n)(function () {
            return { aborters: {} };
          })
        ),
        P = Z.setState,
        R = {
          addAborter: function (e, n) {
            P(function (t) {
              null != t.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (t.aborters[e] = n);
            });
          },
          abortAndRemoveById: function (e) {
            P(function (n) {
              var t = n.aborters[e];
              null != t && (t.abort(), delete n.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            P(function (n) {
              delete n.aborters[e];
            });
          },
          reset: function () {
            P(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            P(function (e) {
              Object.keys(e.aborters).forEach(function (n) {
                e.aborters[n].abort(), delete e.aborters[n];
              });
            });
          },
        },
        D = t(32689),
        A = t(32983),
        E = t(77442);
      function B(e, n, t) {
        var r = (0, N.XL)(e),
          a = r.title,
          i = r.titleSource,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = null != a ? a : n,
          c = (0, w.useRef)(u);
        return (
          (0, w.useEffect)(
            function () {
              return (
                t && i === N._L.Generated && u !== c.current && l(!0),
                function () {
                  c.current = u;
                }
              );
            },
            [t, u, i]
          ),
          { isTypingEffect: s, resolvedTitle: u }
        );
      }
      var F = t(51217),
        L = t(86526);
      function O(e) {
        var n = e.text,
          t = (0, L.Z)(),
          r = (0, b._)((0, w.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (0, w.useMemo)(
            function () {
              return new U().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, w.useEffect)(
            function () {
              n &&
                a &&
                (i(!0),
                u.forEach(function (e, n) {
                  setTimeout(function () {
                    t() && (l(n), n === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, t, a, n]
          ),
          (0, y.jsxs)(y.Fragment, {
            children: [n.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var U = (function () {
          function e() {
            (0, F._)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, b._)(
                  null !== (t = a[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                l = (0, b._)(
                  null !== (r = a[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - l[0]) + Math.abs(s - l[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === s
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else o = this.getRandomInt(n, t);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        q = t(4337),
        z = t(19841),
        Q = t(72201),
        H = t(26430),
        G = t(84913),
        W = t(44043),
        $ = t(82187),
        V = t(69262),
        J = t(75861),
        Y = t(70575),
        K = t(91530),
        X = t.n(K),
        ee = t(75908),
        en = t(34303),
        et = t(82841),
        er = t(36218),
        ea = t(24274),
        ei = t(88038),
        eo = t(19051),
        es = t(66958),
        el = t(38317),
        eu = t(56060),
        ec = t(85023),
        ed = t(21722),
        em = t(71209),
        ef = t(39889),
        eh = t(63020),
        eg = t(13002),
        ep = t(32787),
        ev = t(97703),
        ex = (0, w.createContext)(),
        eb = function (e) {
          return (0, I.oR)((0, w.useContext)(ex), e);
        },
        ey = t(59710),
        ej = t(24396),
        ek = w.memo(function (e) {
          var n,
            t = e.message,
            r = e.isCollapsed,
            a =
              null === (n = t.message.metadata) || void 0 === n
                ? void 0
                : n.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eM),
            o = r && i.length > 0,
            s = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(e_).length > 0;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              o &&
                (0, y.jsx)(ew, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, n) {
                    return (0,
                    y.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(n));
                  }),
                }),
              s &&
                (0, y.jsx)(ew, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, y.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, y.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, y.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, y.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(e_).map(function (e, n) {
                  var t =
                    null != e.image_payload
                      ? (0, y.jsx)("img", {
                          src: "data:image/png;base64,".concat(e.image_payload),
                        })
                      : null != e.image_url
                      ? (0, y.jsx)(eC, { downloadUrl: e.image_url })
                      : null;
                  return t ? (0, y.jsx)("div", { children: t }, n) : null;
                }),
            ],
          });
        });
      function ew(e) {
        var n = e.label,
          t = e.output;
        return (0, y.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, y.jsx)("div", { className: "mb-1 text-gray-400", children: n }),
            (0, y.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, y.jsx)("pre", {
                className: "shrink-0",
                children: t,
              }),
            }),
          ],
        });
      }
      function eC(e) {
        var n = e.downloadUrl,
          t = (0, b._)((0, w.useState)(""), 2),
          r = t[0],
          a = t[1];
        return (
          (0, ej.a)(
            ["fsDownloadUrl", n],
            (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, ea.ZP.getFileDownloadLink(n)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            }),
            {
              onSuccess: function (e) {
                "success" === e.status && a(e.download_url);
              },
            }
          ),
          (0, y.jsxs)(y.Fragment, {
            children: [" ", r && (0, y.jsx)("img", { src: r }), " "],
          })
        );
      }
      function e_(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (e.image_url + "").startsWith("file-service://"))
        );
      }
      function eM(e) {
        return "stream" === e.message_type;
      }
      function eT(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var n, t, r, a;
            return (
              (null ==
              (r =
                null === (n = e.message.metadata) || void 0 === n
                  ? void 0
                  : n.aggregate_result)
                ? void 0
                : null === (t = r.messages) || void 0 === t
                ? void 0
                : t.some(e_)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eN = t(59114),
        eI = t(48727),
        eS = t(19265),
        eZ = t(81949),
        eP = t(1215),
        eR = t(21437),
        eD = t(11626),
        eA = t(54655),
        eE = t(75955),
        eB = t(69403),
        eF = t(56244),
        eL = t(57311),
        eO = t(46110),
        eU = t(13282),
        eq = t(47635),
        ez = t(36716);
      function eQ() {
        var e = (0, q._)(["flex flex-col items-start"]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function eH() {
        var e = (0, q._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eH = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, q._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      var eW = w.memo(function (e) {
          var n = e.children,
            t = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, b._)((0, w.useState)(void 0 !== s && s), 2),
            c = u[0],
            d = u[1],
            m = (0, w.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          y.jsxs)(e$, { children: [(0, y.jsxs)(eV, { $complete: t, children: [(0, y.jsx)("div", { children: n }), !t && (0, y.jsx)(eS.Z, { className: o ? "ml-1" : "ml-12" }), o && (0, y.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [a && r && (0, y.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, y.jsx)(el.ZP, { icon: c ? C.rH8 : C.bTu })] })] }), c && o] });
        }),
        e$ = en.Z.div(eQ()),
        eV = en.Z.div(eH(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eJ = en.Z.div(eG()),
        eY = (0, M.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgress: {
            id: "browsingMessage.command.search.inProgress",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchFinished: {
            id: "browsingMessage.command.search.finished",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking on a link...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back to last page",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling down",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
        }),
        eK = w.memo(function (e) {
          var n,
            t = e.messages,
            r = e.isComplete,
            a = (0, T.hz)(),
            i = t.map(function (e) {
              return e.message;
            }),
            o = i
              .map(function (e, n) {
                if (
                  e.author.role !== eB.uU.Tool ||
                  (n > 0 && e9(e) && e9(i[n - 1]))
                )
                  return null;
                var t = e.metadata;
                if (!t) return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    status: "finished",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var r = t.command,
                  a = t.status;
                return r
                  ? {
                      type: r,
                      status: a,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            s = o.map(function (e, n) {
              return (0, y.jsx)(eX, { command: e }, n);
            });
          r
            ? (s.push((0, y.jsx)(e7, {}, "finished")),
              (n = (0, y.jsx)(e7, { compact: !0 })))
            : 0 === s.length
            ? (s.push((0, y.jsx)(e6, {}, "waiting")),
              (n = (0, y.jsx)(e6, { compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              s.push(
                (0, y.jsx)(
                  e8,
                  {
                    icon: C.Wqx,
                    children: (0, y.jsx)(_.Z, (0, v._)({}, eY.thinking)),
                  },
                  "thinking"
                )
              ),
            n ||
              (n = (0, y.jsx)(eX, { command: o[o.length - 1], compact: !0 }));
          var l =
            a.has(ei.UG) && !r
              ? (function (e) {
                  var n,
                    t = e.reverse().find(function (e) {
                      return e.author.role === eB.uU.Assistant;
                    });
                  if (!t) return null;
                  for (
                    var r = (0, eF.RR)(t), a = /^#\s*(.*)/gm, i = [];
                    null !== (n = a.exec(r));

                  )
                    i.push(n[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(i)
              : null;
          return (0,
          y.jsxs)(eW, { isComplete: r, results: (0, y.jsx)(eJ, { className: "text-xs", children: s }), children: [null != l && (0, y.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: l }), n] });
        });
      function eX(e) {
        var n = e.command,
          t = e.compact;
        if (n.didError) return (0, y.jsx)(e4, { commandType: n.type });
        switch (n.type) {
          case "search":
            var r,
              a,
              i,
              o,
              s =
                "browser_one_box" === n.message.author.name
                  ? null === (r = n.message.metadata) || void 0 === r
                    ? void 0
                    : null === (a = r._cite_metadata) || void 0 === a
                    ? void 0
                    : a.original_query
                  : null === (i = n.message.metadata) || void 0 === i
                  ? void 0
                  : null === (o = i.args) || void 0 === o
                  ? void 0
                  : o[0];
            if (!s) return null;
            return (0, y.jsx)(e0, {
              searchQuery: s,
              isComplete: "finished" === n.status,
              compact: t,
            });
          case "click":
          case "open_url":
            var l,
              u,
              c =
                null === (l = n.message.metadata) || void 0 === l
                  ? void 0
                  : null === (u = l._cite_metadata) || void 0 === u
                  ? void 0
                  : u.metadata_list[0];
            return (0, y.jsx)(e1, { pageInfo: c, compact: t });
          case "quote":
          case "quote_full":
            return (0, y.jsx)(e2, { compact: t });
          case "back":
            return (0, y.jsx)(e5, { compact: t });
          case "scroll":
            return (0, y.jsx)(e3, { compact: t });
          default:
            return null;
        }
      }
      function e0(e) {
        var n = e.searchQuery,
          t = e.isComplete,
          r = e.compact,
          a = function (e) {
            var t = "https://www.bing.com/search?q=".concat(
              encodeURIComponent(n)
            );
            return (0, y.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          };
        return (0, y.jsx)(e8, {
          icon: C.jRj,
          compact: r,
          children: t
            ? (0, y.jsx)(
                _.Z,
                (0, em._)((0, v._)({}, eY.searchFinished), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: n,
                  },
                })
              )
            : (0, y.jsx)(
                _.Z,
                (0, em._)((0, v._)({}, eY.searchInProgress), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: n,
                  },
                })
              ),
        });
      }
      function e1(e) {
        var n,
          t = e.pageInfo,
          r = e.compact;
        return (0, y.jsx)(e8, {
          icon: C.PS6,
          compact: r,
          children: t
            ? !0 === r
              ? (0, y.jsx)(_.Z, (0, v._)({}, eY.clickFinished))
              : (0, y.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, y.jsx)(_.Z, (0, v._)({}, eY.clickFinishedWithLink)),
                    (0, y.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, y.jsx)(ez.Op, {
                        pageInfo: t,
                        onClick: function () {
                          return eE.m.logEvent(
                            "chatgpt_browsing_click_link",
                            t.url,
                            {
                              domain:
                                null !==
                                  (n = eq.get(new URL(t.url).hostname)) &&
                                void 0 !== n
                                  ? n
                                  : "",
                            }
                          );
                        },
                      }),
                    }),
                  ],
                })
            : (0, y.jsx)(_.Z, (0, v._)({}, eY.clickInProgress)),
        });
      }
      function e2(e) {
        var n = e.compact;
        return (0, y.jsx)(e8, {
          icon: C.SnF,
          compact: n,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eY.quote)),
        });
      }
      function e5(e) {
        var n = e.compact;
        return (0, y.jsx)(e8, {
          icon: C.cww,
          compact: n,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eY.back)),
        });
      }
      function e3(e) {
        var n = e.compact;
        return (0, y.jsx)(e8, {
          icon: C.nlg,
          compact: n,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eY.scroll)),
        });
      }
      function e4(e) {
        var n,
          t = e.commandType,
          r = e.compact;
        switch (t) {
          case "search":
            n = eY.searchError;
            break;
          case "click":
          case "open_url":
            n = eY.clickError;
            break;
          case "quote":
          case "quote_full":
            n = eY.quoteError;
            break;
          case "back":
            n = eY.backError;
            break;
          case "scroll":
            n = eY.scrollError;
            break;
          default:
            return null;
        }
        return (0, y.jsx)(e8, {
          icon: C.bcx,
          compact: r,
          children: (0, y.jsx)(_.Z, (0, v._)({}, n)),
        });
      }
      function e6(e) {
        var n = e.compact;
        return (0, y.jsx)(e8, {
          icon: C.jRj,
          compact: n,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eY.startingBrowsing)),
        });
      }
      function e7(e) {
        var n = e.compact;
        return (0, y.jsx)(e8, {
          icon: C._rq,
          compact: n,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eY.finishedBrowsing)),
        });
      }
      function e8(e) {
        var n = e.children,
          t = e.icon,
          r = e.compact;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, y.jsx)(el.ZP, { icon: t, className: "shrink-0" }),
            (0, y.jsx)("div", { children: n }),
          ],
        });
      }
      function e9(e) {
        var n, t;
        return (
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote" ||
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote_full"
        );
      }
      var ne = t(86546),
        nn = t(87105),
        nt = {},
        nr = {};
      function na(e) {
        var n = e.message,
          t = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, ne.F)().theme,
          o = (0, et.WS)();
        (0, w.useEffect)(
          function () {
            nt[n.message.id] ||
              (o(er.s6.renderTool2Message, {
                id: n.message.id,
                finishedExecuting: a,
              }),
              (nt[n.message.id] = !0));
          },
          [o, n, a]
        );
        var s = (0, w.useCallback)(
            function () {
              nr[n.message.id] ||
                (o(er.s6.expandTool2Message, {
                  id: n.message.id,
                  finishedExecuting: a,
                }),
                (nr[n.message.id] = !0));
            },
            [o, n, a]
          ),
          l = (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, y.jsx)(nn.Z, {
                  clientThreadId: r,
                  messageId: n.message.id,
                  className: (0, z.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var n = function (e, n) {
                      return "```".concat(n, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return n(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var t = e.message.content.parts;
                      if (1 !== t.length || "string" != typeof t[0])
                        throw Error("Unexpected parts for code message");
                      return n(t[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(n),
                }),
              }),
              t &&
                (0, y.jsx)("div", {
                  className: "self-stretch",
                  children: (0, y.jsx)(ek, { message: t, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, y.jsx)(eW, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: s,
          children: a ? "Finished working" : "Working...",
        });
      }
      var ni = t(99585);
      function no(e) {
        var n = e.messages,
          t = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          o = n.reduce(function (e, n) {
            return null == n.err ? e + (0, eF.RR)(n.message) : e;
          }, "");
        return (0, y.jsx)(ni.Cf, {
          clientThreadId: t,
          text: o,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var ns = t(2368),
        nl = t(86573);
      function nu(e) {
        return (0, eF.qi)(e) && !(0, eF.oH)(e);
      }
      function nc() {
        var e = (0, q._)(["grid gap-4\n", ""]);
        return (
          (nc = function () {
            return e;
          }),
          e
        );
      }
      var nd = (0, M.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function nm(e) {
        var n,
          t,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          o = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var s = !1,
          l = c.WIDE;
        if ("text" === i.content.content_type)
          try {
            var u = (function (e) {
                var n = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(n = (a = i.next()).done);
                    n = !0
                  ) {
                    var o = a.value,
                      s = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(s + o),
                        isComplete: "" === o,
                      };
                    } catch (e) {}
                  }
                } catch (e) {
                  (t = !0), (r = e);
                } finally {
                  try {
                    n || null == i.return || i.return();
                  } finally {
                    if (t) throw r;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = u.result,
              m = u.isComplete;
            (n = d),
              (s = m),
              (null == n ? void 0 : n.image_shape) != null &&
                (l = n.image_shape);
          } catch (e) {}
        var f = !1;
        if (null != o) {
          if ("text" === o.content.content_type) {
            try {
              t = JSON.parse(o.content.parts[0]);
            } catch (e) {}
            if ((null == t ? void 0 : t.images) != null)
              return (0, y.jsx)(nh, { imageUrls: t.images, gridItemShape: l });
          }
          f = !0;
        }
        return (null == n ? void 0 : n.prompts) != null
          ? (0, y.jsx)(nf, {
              numItems:
                null !== (r = null == n ? void 0 : n.n) && void 0 !== r
                  ? r
                  : Math.max(n.prompts.length, 1),
              prompts: n.prompts,
              gridItemShape: l,
              isPromptListComplete: null != s && s,
              showErrorState: f || nu(i),
            })
          : null;
      }
      function nf(e) {
        for (
          var n = e.numItems,
            t = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            o = [],
            s = 0;
          s < n;
          s++
        ) {
          var l = t[s],
            u = s < t.length - 1 || a || i;
          o.push(
            (0, y.jsx)(
              ng,
              {
                className: (0, z.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, y.jsx)(eP.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, y.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, y.jsx)("div", {
                          className: (0, z.Z)("pt-4", !u && "result-streaming"),
                          children: (0, y.jsx)("span", { children: l }),
                        }),
                      u &&
                        !i &&
                        (0, y.jsx)(eS.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, y.jsx)(el.ZP, {
                          icon: C.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              s
            )
          );
        }
        return (0, y.jsx)(nv, { $numItems: n, children: o });
      }
      function nh(e) {
        var n = e.imageUrls,
          t = e.gridItemShape,
          r = n.map(function (e, n) {
            return (0, y.jsx)(np, { imageUrl: e, shape: t }, n);
          });
        return (0, y.jsx)(nv, { $numItems: r.length, children: r });
      }
      function ng(e) {
        var n = e.children,
          t = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "relative overflow-hidden rounded",
            r,
            t === c.WIDE && "aspect-[7/4]",
            t === c.SQUARE && "aspect-square max-w-[400px]",
            t === c.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, y.jsx)("div", {
              className: (0, z.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            n,
          ],
        });
      }
      function np(e) {
        var n = e.imageUrl,
          t = e.shape,
          r = (0, ee.Z)();
        return (0, y.jsx)(ng, {
          shape: t,
          children: (0, y.jsx)("a", {
            href: n,
            target: "_blank",
            rel: "noreferrer",
            children: (0, y.jsx)("img", {
              src: n,
              alt: r.formatMessage(nd.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var nv = en.Z.div(nc(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function nx() {
        var e = (0, q._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (nx = function () {
            return e;
          }),
          e
        );
      }
      function nb() {
        var e = (0, q._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (nb = function () {
            return e;
          }),
          e
        );
      }
      var ny = en.Z.div(nx());
      function nj() {
        return (0, y.jsx)(ny, {
          children: (0, y.jsx)(el.ZP, {
            icon: C.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function nk() {
        return (0, y.jsx)(ny, {
          children: (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
        });
      }
      var nw = en.Z.div(nb());
      function nC() {
        return (0, y.jsxs)(nw, {
          children: [
            (0, y.jsx)(el.ZP, {
              icon: C.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, y.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function n_() {
        return (0, y.jsxs)(nw, {
          children: [
            (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
            (0, y.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var nM = t(31721),
        nT = t(57924),
        nN = w.memo(function (e) {
          var n,
            t,
            r = e.messages,
            a = (0, b._)(r, 2),
            i = a[0],
            o = a[1],
            s = (0, nM.v)(),
            l =
              null === (n = i.message.recipient) || void 0 === n
                ? void 0
                : n.split(".")[0],
            u = s.find(function (e) {
              return e.namespace === l;
            }),
            c = null == u ? void 0 : u.manifest.name_for_human,
            d = nu(i.message),
            m = null != c ? (0, y.jsx)("b", { children: c }) : "unknown plugin",
            f =
              null != o
                ? (0, y.jsxs)("div", { children: ["Used ", m] })
                : d
                ? (0, y.jsxs)("div", { children: ["Tried to use ", m] })
                : (0, y.jsxs)("div", { children: ["Using ", m, "..."] });
          return (
            u &&
              ((0, nl.cf)(u)
                ? (t = (0, y.jsx)(n_, {}))
                : "approved" !== u.status && (t = (0, y.jsx)(nC, {}))),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(eW, {
                  isComplete: null != o || d,
                  results: (0, y.jsx)(nI, {
                    pluginName: null != c ? c : "unknown plugin",
                    pluginMessage: i,
                    toolMessage: o,
                  }),
                  children: (0, y.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [f, t],
                  }),
                }),
                null != u &&
                  (0, y.jsx)(nm, {
                    plugin: u,
                    pluginMessage: i.message,
                    toolMessage: null == o ? void 0 : o.message,
                  }),
              ],
            })
          );
        });
      function nI(e) {
        var n = e.pluginName,
          t = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eF.RR)(t.message),
          i = r ? (0, eF.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, y.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, y.jsx)(nS, {
              title: "Request to ".concat(n),
              infoTooltip: t.message.recipient,
              children: a,
            }),
            null != i &&
              (0, y.jsx)(nS, {
                title: o ? "Error" : "Response from ".concat(n),
                infoTooltip: t.message.recipient,
                children: (0, y.jsx)("span", {
                  className: (0, z.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function nS(e) {
        var n = e.title,
          t = e.infoTooltip,
          r = e.children;
        return (0, y.jsx)(ns.$, {
          title: (0, y.jsx)("span", { className: "uppercase", children: n }),
          headerDecoration:
            void 0 !== t
              ? (0, y.jsx)(nT.u, {
                  label: t,
                  children: (0, y.jsx)(el.ZP, {
                    icon: C.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var nZ = t(85449),
        nP = t(90076);
      function nR() {
        var e = (0, q._)([""]);
        return (
          (nR = function () {
            return e;
          }),
          e
        );
      }
      function nD() {
        var e = (0, q._)(["flex flex-grow flex-col gap-3"]);
        return (
          (nD = function () {
            return e;
          }),
          e
        );
      }
      function nA() {
        var e = (0, q._)(["flex p-4 gap-4 ", ""]);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        var e = (0, q._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nB() {
        var e = (0, q._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (nB = function () {
            return e;
          }),
          e
        );
      }
      function nF() {
        var e = (0, q._)(["p-1 ", ""]);
        return (
          (nF = function () {
            return e;
          }),
          e
        );
      }
      function nL() {
        var e = (0, q._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (nL = function () {
            return e;
          }),
          e
        );
      }
      function nO() {
        var e = (0, q._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (nO = function () {
            return e;
          }),
          e
        );
      }
      function nU() {
        var e = (0, q._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      var nq = ["#ab68ff"];
      ((a = d || (d = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin");
      var nz = "#19c37d",
        nQ = "openai",
        nH = "#1a7f64",
        nG = w.memo(function (e) {
          var n,
            t,
            r,
            a,
            i = e.turnIndex,
            o = e.conversationLeafId,
            s = e.isFinalTurn,
            l = e.clientThreadId,
            u = e.onChangeItemInView,
            c = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            g = e.onUpdateNode,
            p = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            x = e.activeRequests,
            j = e.showInlineEmbeddedDisplay,
            k = void 0 !== j && j,
            _ = e.currentModelId,
            M = e.isStaticSharedThread,
            I = void 0 !== M && M,
            S = e.initiallyHighlightedMessageId,
            Z = e.avatarColor,
            P = (0, N.GD)(l, i, o),
            R = P.role,
            B = P.messages,
            F = P.variantIds,
            L = (0, ep.kP)().session,
            O = (0, E.x_)(),
            U = (0, et.WS)(),
            q = (0, b._)((0, w.useState)(!1), 2),
            Q = q[0],
            H = q[1],
            G = (0, w.useMemo)(
              function () {
                return F.findIndex(function (e) {
                  return e === B[0].nodeId;
                });
              },
              [F, B]
            ),
            W = R !== eB.uU.User,
            $ = (0, w.useContext)(A.QL).historyDisabled,
            V = (0, T.hz)().has(ei.FZ),
            J = (0, eR.Fl)(),
            Y = J.isBrowsingAvailable,
            K = J.isPluginsAvailable,
            X = J.isCodeInterpreterAvailable,
            ee = (0, D.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            en = Y || K || X,
            ea = (0, w.useRef)(null);
          (0, w.useEffect)(
            function () {
              var e;
              null != S &&
                P.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(S) &&
                (null === (e = ea.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [S]
          );
          var eo = B[B.length - 1],
            es = (0, b._)((0, w.useState)(eo.rating), 2),
            eu = es[0],
            ec = es[1],
            ed = (0, T.hz)(),
            ef = (0, nM.v)(),
            eh = (0, w.useMemo)(
              function () {
                return (
                  (W &&
                    (null == B ? void 0 : B[0]) != null &&
                    (0, eF.Rc)(B[0].message)) ||
                  _
                );
              },
              [W, B, _]
            ),
            eg = (0, w.useCallback)(
              function () {
                1 === B.length &&
                  (U(
                    R === eB.uU.User ? er.s6.editPrompt : er.s6.editCompletion,
                    { id: B[0].message.id, threadId: N.tQ.getServerThreadId(l) }
                  ),
                  H(!0));
              },
              [B, U, R, l]
            ),
            ev = (0, w.useCallback)(function () {
              H(!1);
            }, []),
            ex = (0, w.useCallback)(
              function () {
                var e = B.reduce(function (e, n) {
                  return n.err ||
                    n.message.author.role !== eB.uU.Assistant ||
                    "all" !== n.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eF.RR)(n.message);
                }, "");
                navigator.clipboard.writeText(e),
                  U(er.s6.copyToClipboard, {
                    threadId: N.tQ.getServerThreadId(l),
                    id: B[0].message.id,
                    eventSource: "mouse",
                    model: eh,
                  }),
                  eE.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [eh, U, B, l]
            ),
            eb = (0, w.useCallback)(
              function (e) {
                c(eo.nodeId, eo.message.id, e), ec(e);
              },
              [eo, c]
            ),
            ey = (0, b._)((0, w.useState)(eo.inlineComparisonRating), 2),
            ej = ey[0],
            ew = ey[1];
          (0, w.useEffect)(
            function () {
              ec(function (e) {
                return null != e ? e : eo.rating;
              }),
                ew(function (e) {
                  return null != e ? e : eo.inlineComparisonRating;
                });
            },
            [eo]
          );
          var eC = (0, w.useMemo)(
              function () {
                return eL.Cv.getRequestIdFromConversationTurn(P);
              },
              [P]
            ),
            e_ = (0, w.useMemo)(
              function () {
                return x.has(eC);
              },
              [x, eC]
            ),
            eM = (0, w.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = B[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (n = !0), (t = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [B]
            ),
            eT = (0, w.useMemo)(
              function () {
                if (W) {
                  var e,
                    n,
                    t = N.tQ.getTree(l),
                    r =
                      null === (e = t.getParentPromptNode(B[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (n = t.getNode(r).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug);
                  if (eh && a && eh !== a)
                    return nP.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [eh, W, B, l]
            ),
            eN = (0, w.useMemo)(
              function () {
                if (!en) return { avatarIcon: nQ, avatarColor: nz };
                if (e_ && B.length > 0) {
                  var e = B[B.length - 1],
                    n = (0, eF.rH)(e.message);
                  switch (n) {
                    case eF.Cs.Text:
                      if ((0, eF.RR)(e.message).length > 0 || B.length > 1)
                        return { avatarIcon: "text", avatarColor: nH };
                      break;
                    case eF.Cs.Browsing:
                    case eF.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: nH };
                    case eF.Cs.Code:
                    case eF.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: nH };
                    case eF.Cs.Plugin:
                    case eF.Cs.PluginTool:
                      var t =
                          n === eF.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == t ? void 0 : t.split(".")[0],
                        a = ef.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: "plugin", avatarColor: nH };
                  }
                }
                return { avatarIcon: nQ, avatarColor: nz };
              },
              [en, e_, B, ef]
            ),
            eI = eN.avatarIcon,
            eS = eN.avatarColor,
            eZ = eN.avatarPlugin,
            eP = (0, w.useCallback)(
              function (e, n, t, r) {
                N.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(n, t, i, eB.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eD = (0, w.useMemo)(
              function () {
                var e = [];
                return (
                  B.forEach(function (n, t) {
                    var r = (0, eF.rH)(n.message),
                      a = null == B ? void 0 : B[t - 1],
                      i =
                        null != a &&
                        ((0, eF.lD)(a.message) || (0, eF.qs)(n.message)),
                      o = r === eF.Cs.Text && (0, eF.RR)(n.message);
                    if (r === eF.Cs.Browsing || r === eF.Cs.BrowseTool) {
                      var s = e[e.length - 1];
                      (null == s ? void 0 : s.type) === d.Browsing
                        ? s.messages.push(n)
                        : e.push({ type: d.Browsing, messages: [n] });
                    } else if (r === eF.Cs.Plugin || r === eF.Cs.PluginTool) {
                      var l = e[e.length - 1];
                      r === eF.Cs.PluginTool &&
                      (null == l ? void 0 : l.type) === d.Plugin
                        ? l.messages.push(n)
                        : e.push({ type: d.Plugin, messages: [n] });
                    } else if (r === eF.Cs.Code)
                      e.push({ type: d.Code, message: n });
                    else if (r === eF.Cs.CodeExecutionOutput)
                      e.push({ type: d.CodeExecutionOutput, message: n });
                    else if (i && null != o) {
                      var u = e.pop();
                      (null == u ? void 0 : u.type) === d.MultiText
                        ? (u.messages.push(n), e.push(u))
                        : (null == u ? void 0 : u.type) === d.Text &&
                          e.push({
                            type: d.MultiText,
                            messages: [u.message, n],
                          });
                    } else e.push({ type: d.Text, message: n });
                  }),
                  e.map(function (n, t) {
                    var r,
                      a = t === e.length - 1;
                    switch (n.type) {
                      case d.Text:
                        return (0,
                        y.jsx)(ni.ZP, { className: "min-h-[20px]", message: n.message, isEditing: Q, format: W, isCompletionInProgress: a && e_, onCreateEditNode: eP, clientThreadId: l, onUpdateNode: g, onDeleteNode: f, onChangeItemInView: u, onRequestCompletion: h, onExitEdit: ev, disabled: 0 !== x.size, isCompletion: W, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.type) === d.Plugin }, n.message.nodeId);
                      case d.MultiText:
                        return (0,
                        y.jsx)(no, { clientThreadId: l, messages: n.messages, isCompletionInProgress: a && e_, isCompletion: W, onRequestMoreCompletions: m }, t);
                      case d.Browsing:
                        var i = n.messages[n.messages.length - 1];
                        return (0,
                        y.jsx)(eK, { messages: n.messages, isComplete: !s || !a || 0 === x.size || nu(i.message) }, n.messages[0].nodeId);
                      case d.Code:
                        var o,
                          c,
                          p = e[t + 1],
                          v =
                            p && p.type === d.CodeExecutionOutput
                              ? p.message
                              : void 0;
                        return (0,
                        y.jsx)(na, { clientThreadId: l, message: n.message, outputMessage: v, isComplete: !s || !a || 0 === x.size || ((null == (c = null === (o = null == v ? void 0 : v.message.metadata) || void 0 === o ? void 0 : o.aggregate_result) ? void 0 : c.status) !== void 0 && (null == c ? void 0 : c.status) !== "running") || nu(n.message.message) }, n.message.nodeId);
                      case d.CodeExecutionOutput:
                        return (0,
                        y.jsx)(ek, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case d.Plugin:
                        return (0,
                        y.jsx)(nN, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [B, Q, W, e_, eP, l, g, f, u, h, ev, x.size, m, s]
            ),
            eq = (0, N.r7)(l),
            ez =
              !I &&
              !eq &&
              O &&
              W &&
              !k &&
              !Q &&
              1 === G &&
              s &&
              !ej &&
              !eu &&
              2 === F.length &&
              Date.now() -
                (null !== (r = eo.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5 &&
              !e_ &&
              ed.has(ei.st),
            eQ = (0, w.useRef)(Date.now()),
            eH = (0, w.useRef)(
              (null !== (a = eo.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            eG = (0, w.useRef)(Date.now());
          (0, w.useEffect)(
            function () {
              e_ || (eG.current = Date.now());
            },
            [e_]
          );
          var eW = (0, w.useCallback)(
              function (e) {
                if (ez) {
                  var n,
                    t,
                    r = N.tQ.getTree(l),
                    a = F[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    o = i[i.length - 1],
                    s = (null == o ? void 0 : o.messages) || [],
                    u = s[s.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (n = u.message) || void 0 === n
                        ? void 0
                        : n.id) || "",
                    d = F[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    f = m[m.length - 1],
                    h = (null == f ? void 0 : f.messages) || [],
                    g = h[h.length - 1];
                  p(
                    c,
                    (null == g
                      ? void 0
                      : null === (t = g.message) || void 0 === t
                      ? void 0
                      : t.id) || "",
                    e,
                    eQ.current,
                    eQ.current,
                    eH.current,
                    eG.current
                  ),
                    N.tQ.updateTree(l, function (n) {
                      n.updateNode(eo.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, v._)({}, n.getMetadata(eo.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    ew(e),
                    N.tQ.updateTree(l, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, v._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [ez, eo.nodeId, p, l, F]
            ),
            e$ = (0, w.useCallback)(
              function () {
                N.tQ.updateTree(l, function (e) {
                  e.updateNode(eo.nodeId, {
                    metadata: {
                      $set: (0, em._)((0, v._)({}, e.getMetadata(eo.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  ew("skip");
              },
              [eo.nodeId, l]
            ),
            eV = W && !k && !I && !eq,
            eJ = !I && !k && !Q,
            eY = !W && !k && !I && 1 === B.length && !Q;
          if (P.role === eB.uU.Unknown || P.role === eB.uU.System) return null;
          var eX = eY
              ? (0, y.jsx)(nK, {
                  $isMessageRedesign: V,
                  onClick: eg,
                  className: (0, z.Z)(
                    !V && O && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, y.jsx)(el.ZP, { icon: C.vPQ }),
                })
              : null,
            e0 =
              W && !k
                ? (0, y.jsx)(eU.Z, {
                    onCopy: ex,
                    className: (0, z.Z)(
                      "rounded-md p-1",
                      V
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e1 = eV
              ? (0, y.jsxs)("div", {
                  className: "flex gap-1",
                  children: [
                    "thumbsDown" !== eu &&
                      !$ &&
                      (0, y.jsx)(
                        nK,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return eb("thumbsUp");
                          },
                          disabled: "thumbsUp" === eu,
                          className: (0, z.Z)(
                            "thumbsUp" === eu &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(el.ZP, { icon: C.fmn }),
                        },
                        "thumbsUp:".concat(eo.nodeId)
                      ),
                    "thumbsUp" !== eu &&
                      !$ &&
                      (0, y.jsx)(
                        nK,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return eb("thumbsDown");
                          },
                          disabled: "thumbsDown" === eu,
                          className: (0, z.Z)(
                            "thumbsDown" === eu &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(el.ZP, { icon: C.oLd }),
                        },
                        "thumbsDown:".concat(eo.nodeId)
                      ),
                  ],
                })
              : null,
            e2 =
              ez && !$
                ? (0, y.jsxs)(n1, {
                    children: [
                      (0, y.jsx)("div", {
                        className: (0, z.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, y.jsxs)(nY, {
                        onClick: function () {
                          return eW("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.fmn,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, y.jsxs)(nY, {
                        onClick: function () {
                          return eW("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.oLd,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, y.jsxs)(nY, {
                        onClick: function () {
                          return eW("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: eA.Ny3,
                            className: (0, z.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, y.jsx)(nY, {
                        onClick: e$,
                        title: "Skip this comparison",
                        children: (0, y.jsx)(el.ZP, {
                          icon: C.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e5 = eJ && F.length > 1,
            e3 = function () {
              return (0, y.jsxs)("div", {
                className: "flex gap-1",
                children: [e1, eX, e0],
              });
            },
            e4 =
              null === (t = B[0].message.metadata) || void 0 === t
                ? void 0
                : t.shared_conversation_id,
            e6 = null != e4;
          return (0, y.jsxs)(nW, {
            className: (0, z.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              V
                ? (0, z.Z)(
                    "sm:rounded-2xl",
                    W
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, z.Z)(
                    !k && "border-b border-black/10 dark:border-gray-900/50",
                    W ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: ea,
            children: [
              eT && (0, y.jsx)(n0, { children: eT }),
              (0, y.jsxs)(nV, {
                $isDesktopNavCollapsed: ee,
                $isMessageRedesign: V,
                className: (0, z.Z)(k ? "ml-5" : "m-auto"),
                children: [
                  (0, y.jsxs)(nJ, {
                    children: [
                      (0, y.jsx)("div", {
                        className: V ? "" : "w-[30px]",
                        children: W
                          ? eZ
                            ? (0, y.jsx)(eO.Ph, {
                                plugin: eZ,
                                notice: eM || void 0,
                              })
                            : (0, y.jsx)(eO.k$, {
                                background: null != Z ? Z : eS,
                                iconName: eI,
                                notice: eM || void 0,
                              })
                          : e6 || k
                          ? (0, y.jsx)(eO.k$, {
                              background:
                                nq[
                                  (null !==
                                    (n =
                                      null == e4 ? void 0 : e4.charCodeAt(0)) &&
                                  void 0 !== n
                                    ? n
                                    : 0) % nq.length
                                ],
                              iconName: "user",
                            })
                          : (0, y.jsx)(eO.Yt, {
                              user: null == L ? void 0 : L.user,
                              notice: eM || void 0,
                              size: V ? "redesign" : "medium",
                            }),
                      }),
                      !V &&
                        eJ &&
                        O &&
                        (0, y.jsx)(nZ.Z, {
                          currentPage: G,
                          onChangeIndex: function (e) {
                            return u(F[e]);
                          },
                          length: F.length,
                          className: (0, z.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            F.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)(
                      "relative",
                      V
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      V &&
                        (0, y.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: W ? "ChatGPT" : e6 ? "User" : "You",
                        }),
                      (0, y.jsx)(n$, { children: eD }),
                      V
                        ? (!O || e5 || null != e2) &&
                          !k &&
                          (0, y.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, y.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e5 &&
                                    (0, y.jsx)(nZ.Z, {
                                      currentPage: G,
                                      onChangeIndex: function (e) {
                                        return u(F[e]);
                                      },
                                      length: F.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !O && e3(),
                                ],
                              }),
                              e2,
                            ],
                          })
                        : (0, y.jsxs)(y.Fragment, {
                            children: [
                              eY &&
                                O &&
                                (0, y.jsx)(nX, {
                                  $hidden: 0 !== x.size,
                                  children: eX,
                                }),
                              (eV || eJ) &&
                                (0, y.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !O &&
                                      eJ &&
                                      (0, y.jsx)(nZ.Z, {
                                        currentPage: G,
                                        onChangeIndex: function (e) {
                                          return u(F[e]);
                                        },
                                        length: F.length,
                                        className: (0, z.Z)(
                                          "self-center pt-2",
                                          F.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eY &&
                                      !O &&
                                      (0, y.jsx)(nX, {
                                        $hidden: e_,
                                        children: eX,
                                      }),
                                    eV &&
                                      (0, y.jsxs)(nX, {
                                        $hidden: e_,
                                        children: [e0, e1],
                                      }),
                                    ez && !$ && e2,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  V &&
                    O &&
                    !Q &&
                    !k &&
                    (!I || W) &&
                    (0, y.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e3(),
                    }),
                ],
              }),
            ],
          });
        }),
        nW = en.Z.div(nR()),
        n$ = en.Z.div(nD()),
        nV = en.Z.div(nA(), function (e) {
          return e.$isMessageRedesign
            ? "relative"
            : e.$isDesktopNavCollapsed
            ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
            : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
        }),
        nJ = en.Z.div(nE()),
        nY = en.Z.button(nB()),
        nK = en.Z.button(nF(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        nX = en.Z.div(nL(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        n0 = en.Z.div(nO()),
        n1 = en.Z.div(nU()),
        n2 = t(75318);
      function n5() {
        var e = (0, q._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (n5 = function () {
            return e;
          }),
          e
        );
      }
      function n3() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (n3 = function () {
            return e;
          }),
          e
        );
      }
      function n4() {
        var e = (0, q._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, q._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      function n7() {
        var e = (0, q._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n8() {
        var e = (0, q._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (n8 = function () {
            return e;
          }),
          e
        );
      }
      function n9() {
        var e = (0, q._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (n9 = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      var tt = en.Z.div(n5()),
        tr = en.Z.h1(n3()),
        ta = en.Z.div(n4()),
        ti = en.Z.div(n6()),
        to = en.Z.h2(n7()),
        ts = en.Z.ul(n8()),
        tl = en.Z.li(n9());
      en.Z.li(te());
      var tu = en.Z.button(tn());
      function tc(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, w.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, y.jsxs)(tu, { onClick: r, children: ['"', n, '" →'] });
      }
      function td(e) {
        var n = function (e) {
            var n;
            null == t ||
              null === (n = t.current) ||
              void 0 === n ||
              n.setInputValue(e);
          },
          t = e.promptTextareaRef;
        return (0, y.jsxs)(tt, {
          children: [
            (0, y.jsxs)(tr, { children: ["ChatGPT", (0, y.jsx)(eD.IS, {})] }),
            (0, y.jsxs)(ta, {
              children: [
                (0, y.jsxs)(ti, {
                  children: [
                    (0, y.jsxs)(to, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, y.jsxs)(ts, {
                      children: [
                        (0, y.jsx)(tc, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, y.jsx)(tc, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, y.jsx)(tc, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ti, {
                  children: [
                    (0, y.jsxs)(to, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: n2.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, y.jsxs)(ts, {
                      children: [
                        (0, y.jsx)(tl, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, y.jsx)(tl, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, y.jsx)(tl, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ti, {
                  children: [
                    (0, y.jsxs)(to, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, y.jsxs)(ts, {
                      children: [
                        (0, y.jsx)(tl, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, y.jsx)(tl, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, y.jsx)(tl, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var tm = t(75515),
        tf = t(96237),
        th = t(90209),
        tg = t(68789),
        tp = t(76483),
        tv = t(97739),
        tx = t(2827),
        tb = t(32402),
        ty = t(27009);
      function tj(e) {
        var n = e.disabled,
          t = e.getInputProps,
          r = e.onClick,
          a = (0, ee.Z)();
        return (0, y.jsxs)(nT.u, {
          label: a.formatMessage(tk.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, y.jsx)(es.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: n,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(tk.uploadFile),
              children: (0, y.jsx)(el.ZP, { icon: C.OvN, size: "small" }),
            }),
            (0, y.jsx)("input", (0, v._)({}, t({ className: "hidden" }))),
          ],
        });
      }
      var tk = (0, M.vU)({
          uploadFile: {
            id: "PromptFilePicker.uploadFile",
            defaultMessage: "Upload file",
            description: "Tooltip label for uploading a file button",
          },
          errorFileTooLarge: {
            id: "PromptFilePicker.errorFileTooLarge",
            defaultMessage: "File is too large. Maximum file size is {size}MB",
            description: "Error message when file is too large",
          },
          errorTooManyFiles: {
            id: "PromptFilePicker.errorTooManyFiles",
            defaultMessage: "Only one file upload at a time is supported",
            description: "Error message when too many files are uploaded",
          },
        }),
        tw = t(97688),
        tC = Math.floor(Math.log(1501) / Math.log(1.5)),
        t_ = { duration: 20, hasCloseButton: !0 },
        tM = t(56115),
        tT = Math.floor(Math.log(1201) / Math.log(2)),
        tN = { duration: 20, hasCloseButton: !0 },
        tI = t(30931),
        tS = t(97732);
      function tZ() {
        var e = (0, q._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (tZ = function () {
            return e;
          }),
          e
        );
      }
      function tP() {
        var e = (0, q._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (tP = function () {
            return e;
          }),
          e
        );
      }
      function tR() {
        var e = (0, q._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (tR = function () {
            return e;
          }),
          e
        );
      }
      function tD() {
        var e = (0, q._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (tD = function () {
            return e;
          }),
          e
        );
      }
      function tA() {
        var e = (0, q._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, q._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      ((i = m || (m = {}))[(i.None = 0)] = "None"),
        (i[(i.Multimodal = 1)] = "Multimodal"),
        (i[(i.Interpreter = 2)] = "Interpreter");
      var tB = (0, w.forwardRef)(function (e, n) {
        var t,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          f,
          h,
          g,
          p,
          x,
          j,
          k,
          M,
          I,
          S,
          Z,
          P,
          R,
          D,
          B,
          F,
          L,
          O,
          U,
          q,
          Q,
          H,
          G,
          W,
          $,
          V,
          J,
          Y,
          K,
          X,
          en,
          eo,
          eu,
          ec,
          eh,
          eg,
          ep,
          ev,
          ex,
          eb,
          ey,
          ek,
          ew,
          eC,
          e_,
          eM,
          eT,
          eN = e.onAbortCompletion,
          eI = e.onCreateNewCompletion,
          eS = e.onRequestMoreCompletions,
          eZ = e.onContinueGenerating,
          eP = e.currentModelId,
          eD = e.clientThreadId,
          eA = e.isCompletionInProgress,
          eF = e.className,
          eL = e.disabled,
          eO = void 0 !== eL && eL,
          eU = e.shouldRetry,
          eq = e.canPause,
          ez = void 0 !== eq && eq,
          eQ = e.canContinue,
          eH = void 0 !== eQ && eQ,
          eG = e.suggestions,
          eW = e.isInteractableSharedThread,
          e$ = (0, ee.Z)(),
          eV = (0, N.oq)(eD),
          eJ = (0, N.Hk)(eD),
          eY = (0, tS.Ri)(eP),
          eK = (0, E.w$)(),
          eX = (0, et.WS)(),
          e0 = (0, w.useContext)(A.gt).serviceStatus,
          e1 = (0, w.useContext)(A.QL).historyDisabled,
          e2 = (0, w.useRef)(null),
          e5 = (0, b._)((0, w.useState)(""), 2),
          e3 = e5[0],
          e4 = e5[1],
          e6 = (0, b._)((0, w.useState)(null), 2),
          e7 = e6[0],
          e8 = e6[1],
          e9 = (0, nP.B9)(),
          ne = null !== eP ? e9.get(eP) : void 0,
          nn =
            (0, eR.Fl)().isCodeInterpreterAvailable &&
            (null == ne
              ? void 0
              : null === (e_ = ne.enabledTools) || void 0 === e_
              ? void 0
              : e_.includes("tools2"))
              ? 2
              : (null == ne
                  ? void 0
                  : null === (eM = ne.capabilities) || void 0 === eM
                  ? void 0
                  : eM.multimodal) !== void 0
              ? 1
              : 0,
          nt = 0 !== nn,
          nr = (0, w.useCallback)(
            function (e, n) {
              null === n
                ? eX(er.s6.uploadFile, { eventSource: "mouse" })
                : eX(er.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && e8(e[0]);
            },
            [eX]
          ),
          na = (0, w.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var n = (function (e) {
                  var n = e.code,
                    t = e.message;
                  switch (n) {
                    case ty.jK.FileTooLarge:
                      return tk.errorFileTooLarge;
                    case ty.jK.TooManyFiles:
                      return tk.errorTooManyFiles;
                    default:
                      return t;
                  }
                })(e);
                "string" == typeof n
                  ? tw.m.danger(n)
                  : tw.m.danger(e$.formatMessage(n, { size: 512 }));
              });
            },
            [e$]
          ),
          ni = (0, w.useCallback)(function () {
            e8(null);
          }, []),
          no = (0, tp.uI)(
            (0, v._)(
              {
                maxFiles: 1,
                disabled: eO || !nt,
                noClick: !0,
                onDropAccepted: nr,
                onDropRejected: na,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, w.useMemo)(
                function () {
                  var e,
                    n,
                    t,
                    r =
                      null !==
                        (t =
                          null == ne
                            ? void 0
                            : null === (e = ne.capabilities) || void 0 === e
                            ? void 0
                            : null === (n = e.multimodal) || void 0 === n
                            ? void 0
                            : n.accepted_mime_types) && void 0 !== t
                        ? t
                        : [];
                  if (void 0 === r) return {};
                  var a = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                  };
                  return {
                    accept: r.reduce(function (e, n) {
                      return (
                        n in a
                          ? (e[n] = a[n])
                          : n.includes("/") &&
                            (e[n] = [".".concat(n.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [ne]
              )
            )
          ),
          ns = no.getRootProps,
          nl = no.getInputProps,
          nu = no.isDragActive,
          nc = no.open,
          nd =
            ((u = ((s = o =
              null !== (i = 2 === nn ? e7 : null)
                ? JSON.stringify({
                    file: i.name,
                    modified: i.lastModified,
                    size: i.size,
                  })
                : null),
            (l = (0, ej.a)({
              queryKey: ["interpreterUploadLink", s],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.createFile(i.name, i.size, tb.Ei.AceUpload).catch(
                          function (e) {
                            return (
                              tw.m.danger(
                                "Failed to get upload link for file ".concat(
                                  null == i ? void 0 : i.name,
                                  ". Please try again."
                                ),
                                t_
                              ),
                              e
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!i,
            }))).data),
            (c = l.isLoading),
            (d = l.isError),
            (h = ((m = null == u ? void 0 : u.upload_url),
            (f = (0, ej.a)({
              queryKey: ["startFileUpload", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.uploadFileToFileService(i, m).then(function (e) {
                          if (e.ok) return m;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(i && m),
            }))).data),
            (g = f.isLoading),
            (p = f.isError),
            (M = ((x = null == u ? void 0 : u.file_id),
            (j = N.tQ.getServerThreadId(eD)),
            (k = (0, ej.a)({
              queryKey: ["startInterpreterUpload", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.startInterpreterUpload(
                          null != j ? j : null,
                          x,
                          eP
                        ).catch(function (e) {
                          return (
                            tw.m.danger(
                              "Failed to start interpreter upload for file ".concat(
                                null == i ? void 0 : i.name
                              ),
                              t_
                            ),
                            e
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(
                null !== x &&
                null !== i &&
                void 0 !== h &&
                null !== eP
              ),
            }))).data),
            (I = k.isLoading),
            (S = k.isError),
            (R = ((Z = null == u ? void 0 : u.file_id),
            (P = (0, ej.a)({
              queryKey: ["interpreterFileStatus", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(Z).catch(function (e) {
                          return (
                            tw.m.danger(
                              "Failed to get interpreter upload status for file ".concat(
                                null == i ? void 0 : i.name
                              ),
                              t_
                            ),
                            null == ni || ni(null == i ? void 0 : i.name),
                            e
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(void 0 !== M && i && Z),
              refetchInterval: function (e, n) {
                var t = n.state.dataUpdateCount;
                return (null == e ? void 0 : e.status) === "error"
                  ? (tw.m.danger("File upload failed. Please try again", t_),
                    null == ni || ni(null == i ? void 0 : i.name),
                    !1)
                  : t > tC
                  ? (tw.m.danger("File upload timed out. Please try again", t_),
                    null == ni || ni(null == i ? void 0 : i.name),
                    !1)
                  : (null == e ? void 0 : e.status) === "retry" &&
                    100 * Math.pow(1.5, t);
              },
            }))).data),
            (D = P.isLoading),
            (B = P.isError),
            (F = (0, w.useMemo)(
              function () {
                return M ? 50 : void 0 !== h ? 30 : u ? 10 : void 0;
              },
              [h, M, u]
            )),
            (L = d || p || S || B),
            (O =
              c ||
              g ||
              I ||
              D ||
              (null == R ? void 0 : R.status) !== "success"),
            (0, w.useEffect)(
              function () {
                if (L) {
                  var e;
                  ni(
                    null !== (e = null == i ? void 0 : i.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == i ? void 0 : i.name, L, ni]
            ),
            (0, w.useMemo)(
              function () {
                var e =
                    null !== i &&
                    (null == i ? void 0 : i.name) &&
                    (null == R ? void 0 : R.status) === "success" &&
                    void 0 !== h,
                  n = e ? { name: i.name, url: h } : null;
                return {
                  isLoading: O,
                  loadingPercentage: L || e ? void 0 : F,
                  isError: L,
                  uploadedFile: n,
                };
              },
              [i, null == R ? void 0 : R.status, h, L, O, F]
            )),
          nm =
            ((U = 1 === nn ? e7 : null),
            (q = tb.Ei.Multimodal),
            (W = ((H = Q =
              null !== U
                ? JSON.stringify({
                    file: U.name,
                    modified: U.lastModified,
                    size: U.size,
                  })
                : null),
            (G = (0, ej.a)({
              queryKey: ["createFile", H],
              queryFn: (0, ed._)(function () {
                var e, n, t;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, tM.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (n = U.name.split(".").pop()),
                        (t = "chatgpt-file-".concat(e, ".").concat(n)),
                        [
                          4,
                          ea.ZP.createFile(t, U.size, q).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == U ? void 0 : U.name
                                ),
                                e.message
                              ),
                              e)
                            );
                          }),
                        ]
                      );
                    case 1:
                      return [2, r.sent()];
                  }
                });
              }),
              enabled: !!U,
            }))).data),
            ($ = G.isLoading),
            (V = G.isError),
            (J = null == W ? void 0 : W.file_id),
            (Y = null == W ? void 0 : W.upload_url),
            (X = (K = (0, ej.a)({
              queryKey: ["uploadFile", Q],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      var n;
                      return [
                        4,
                        ea.ZP.uploadFileToFileService(U, Y).then(
                          ((n = (0, ed._)(function (e) {
                            var n;
                            return (0, ef.Jh)(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  if (e.ok) return [2];
                                  (n = "Unknown error"), (t.label = 1);
                                case 1:
                                  return (
                                    t.trys.push([1, 3, , 4]), [4, e.text()]
                                  );
                                case 2:
                                  return (n = t.sent()), [3, 4];
                                case 3:
                                  return t.sent(), [3, 4];
                                case 4:
                                  throw (
                                    (console.error(
                                      "File upload failed at blobstore upload step",
                                      e.status,
                                      n
                                    ),
                                    Error("File upload failed"))
                                  );
                              }
                            });
                          })),
                          function (e) {
                            return n.apply(this, arguments);
                          })
                        ),
                      ];
                    case 1:
                      return e.sent(), [4, ea.ZP.markFileUploadComplete(J)];
                    case 2:
                      return e.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(U && J && Y),
            })).data),
            (en = K.isLoading),
            (eo = K.isError),
            (ec = (eu = (0, ej.a)({
              queryKey: ["pollForFileReady", Q],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(J).catch(function (e) {
                          throw (
                            (console.error(
                              "Filed upload failed during processing ".concat(
                                null == U ? void 0 : U.name
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(X && U && J),
              refetchInterval: function (e, n) {
                if ((null == e ? void 0 : e.status) === tb.KF.Retry) {
                  var t = n.state.dataUpdateCount;
                  return t > tT
                    ? (null == ni || ni(null == U ? void 0 : U.name), !1)
                    : 500 * Math.pow(2, t);
                }
                return !1;
              },
            })).data),
            (eh = eu.isLoading),
            (eg = eu.isError),
            (ep = null == ec ? void 0 : ec.download_url),
            (ev = null !== U && "string" == typeof ep && !!J),
            (ex = V || eo || eg),
            (eb =
              $ ||
              en ||
              eh ||
              (null == ec ? void 0 : ec.status) === tb.KF.Retry),
            (ey = (0, w.useMemo)(
              function () {
                return ev ? 100 : X ? 50 : W ? 10 : 0;
              },
              [ev, X, W]
            )),
            (0, w.useEffect)(
              function () {
                if (ex) {
                  var e;
                  tw.m.danger("File upload failed", tN),
                    ni(
                      null !== (e = null == U ? void 0 : U.name) && void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == U ? void 0 : U.name, ex, ni]
            ),
            (ew = (ek = (0, b._)(
              ((r = (t = (0, b._)((0, w.useState)([null, null]), 2))[0]),
              (a = t[1]),
              (0, w.useEffect)(
                function () {
                  if (!U) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var n = new Image();
                    (n.onload = function () {
                      a([n.width, n.height]);
                    }),
                      (n.src = e.result);
                  }),
                    e.readAsDataURL(U);
                },
                [U]
              ),
              r),
              2
            ))[0]),
            (eC = ek[1]),
            (0, w.useMemo)(
              function () {
                var e = ev
                  ? null !== ew && null !== eC
                    ? {
                        id: J,
                        name: U.name,
                        size: U.size,
                        url: ep,
                        width: ew,
                        height: eC,
                      }
                    : { id: J, name: U.name, size: U.size, url: ep }
                  : null;
                return {
                  isLoading: eb,
                  loadingPercentage: ex || ev ? void 0 : ey,
                  isError: ex,
                  uploadedFile: e,
                };
              },
              [ev, U, J, ep, ex, eb, ey, ew, eC]
            )),
          nf = (0, w.useMemo)(
            function () {
              return 2 === nn ? nd : nm;
            },
            [nn, nd, nm]
          ),
          nh = nf.isLoading,
          ng = nf.isError,
          np = nf.loadingPercentage,
          nv = nf.uploadedFile,
          nx = (0, w.useCallback)(function () {
            e4(""), e8(null), (0, tx.SI)(1, e2.current);
          }, []),
          nb = "root" !== eV && !eA && !(null == e0 ? void 0 : e0.oof),
          ny = !!(null === (eT = e2.current) || void 0 === eT
            ? void 0
            : eT.value),
          nj = null === e7 ? ny : !nh && !ng,
          nk = nj && !eO && !eA,
          nw = (0, w.useCallback)(
            function (e, n) {
              if ((null == e || e.preventDefault(), !eO)) {
                var t,
                  r,
                  a =
                    null === (t = e2.current) || void 0 === t
                      ? void 0
                      : t.value,
                  i = "".concat(
                    null === (r = e2.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (nj) {
                  var o = null != a ? a : "",
                    s = [];
                  nv &&
                    (2 === nn
                      ? s.push(nv)
                      : 1 === nn &&
                        "width" in nv &&
                        (o = {
                          content_type: eB.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: "file-service://".concat(nv.id),
                              size_bytes: nv.size,
                              width: nv.width,
                              height: nv.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    eI(
                      i,
                      { content: o, attachments: s },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: eG }
                    ),
                    nx(),
                    void 0 !== eG &&
                      (void 0 !== n
                        ? eE.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(n),
                          })
                        : eE.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [eO, nx, nj, eI, eG, nv, nn]
          ),
          nC = (0, w.useCallback)(
            function () {
              eN("", eJ), eS(eV, { eventSource: "mouse" });
            },
            [eV, eJ, eN, eS]
          ),
          n_ = (0, w.useCallback)(
            function () {
              eN("", eJ),
                eX(er.s6.pauseCompletion, {
                  threadId: N.tQ.getServerThreadId(eD),
                  eventSource: "mouse",
                });
            },
            [eJ, eD, eX, eN]
          ),
          nM = (0, w.useCallback)(
            function () {
              eZ(eV);
            },
            [eV, eZ]
          ),
          nN = (0, w.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return nk;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (eK && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), nw());
                  },
                },
                Escape: {
                  validator: function () {
                    return ez && eA;
                  },
                  handler: function () {
                    eN("", eJ),
                      eX(er.s6.pauseCompletion, {
                        threadId: N.tQ.getServerThreadId(eD),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [nk, eK, eA, nw, ez, eN, eJ, eX, eD]
          ),
          nI = (0, w.useCallback)(
            function (e) {
              var n;
              (null === (n = nN[e.key]) || void 0 === n
                ? void 0
                : n.validator(e)) && nN[e.key].handler(e);
            },
            [nN]
          ),
          nS = (0, w.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === nn) {
                var n,
                  t,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == ne
                          ? void 0
                          : null === (n = ne.capabilities) || void 0 === n
                          ? void 0
                          : null === (t = n.multimodal) || void 0 === t
                          ? void 0
                          : t.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  tw.m.danger(
                    e$.formatMessage(tW.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                e8(a);
              }
            },
            [ne, e8, nn, e$]
          );
        (0, w.useEffect)(function () {
          var e;
          null === (e = e2.current) || void 0 === e || e.focus();
        }, []),
          (0, w.useEffect)(
            function () {
              e8(null);
            },
            [eP]
          );
        var nZ = (0, T.hz)().has(ei.uj),
          nR = eU || nb || eH || ez,
          nD = eK ? "neutral" : "none",
          nA = (0, w.useMemo)(
            function () {
              return (0, y.jsxs)("div", {
                className: eU ? "w-full" : "",
                children: [
                  eU &&
                    (0, y.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, tW.errorGeneratingResponse)
                      ),
                    }),
                  (0, y.jsxs)(tG, {
                    $shouldRetry: eU,
                    children: [
                      !eU &&
                        nZ &&
                        eG &&
                        (0, y.jsx)(tL, {
                          suggestions: eG,
                          shouldRetry: eU,
                          currentInputRef: e2,
                          onSelectSuggestion: e4,
                          handleCreateNewCompletion: nw,
                        }),
                      nb &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: eU ? "primary" : nD,
                          onClick: nC,
                          className: (0, z.Z)(
                            eU ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.Qxo,
                              size: eK ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (eK || eU) &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, tW.regenerateResponse)
                              ),
                          ],
                        }),
                      eH &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: "neutral",
                          onClick: nM,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.lV_,
                              className: "-rotate-180",
                              size: eK ? "xsmall" : "small",
                            }),
                            eK &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, tW.continueGenerating)
                              ),
                          ],
                        }),
                      ez &&
                        eA &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: "neutral",
                          onClick: n_,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.jxP,
                              size: eK ? "xsmall" : "small",
                            }),
                            eK &&
                              (0, y.jsx)(_.Z, (0, v._)({}, tW.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [eU, nZ, eG, nw, nb, nD, nC, eK, eH, nM, ez, eA, n_]
          );
        (0, w.useImperativeHandle)(n, function () {
          return { setInputValue: e4 };
        });
        var nE = nk
          ? { backgroundColor: null == eY ? void 0 : eY.backgroundColor }
          : {};
        return (0, y.jsx)("form", {
          className: eF,
          onSubmit: nw,
          children: (0, y.jsxs)(
            "div",
            (0, em._)(
              (0, v._)(
                {
                  className:
                    "relative flex h-full flex-1 items-stretch md:flex-col",
                },
                ns()
              ),
              {
                children: [
                  eK && nR && nA,
                  !eU &&
                    (0, y.jsxs)(tH, {
                      $disabled: eU,
                      $historyDisabled: e1,
                      children: [
                        e7 &&
                          (0, y.jsx)(tq, {
                            children: (0, y.jsx)(tI.Z, {
                              onRemoveFileClick: function () {
                                return e8(null);
                              },
                              file: e7,
                              loadingPercentage: np,
                            }),
                          }),
                        (0, y.jsx)(tx.ZP, {
                          id: tO,
                          tabIndex: 0,
                          value: e3,
                          "data-id": eV,
                          ref: e2,
                          style: { maxHeight: "200px" },
                          rows: 1,
                          onKeyDown: nI,
                          onChange: function (e) {
                            e4(e.target.value);
                          },
                          onPaste: nS,
                          placeholder: eW
                            ? e$.formatMessage(
                                tW.continueSharedConversationPlaceholder
                              )
                            : e$.formatMessage(tW.placeholder),
                          className: (0, z.Z)(
                            "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                            !e7 && nt ? "pl-12 md:pl-[30px]" : "pl-3 md:pl-0"
                          ),
                          disabled: eU,
                        }),
                        !e7 &&
                          nt &&
                          (0, y.jsx)(tQ, {
                            children: (0, y.jsx)(tj, {
                              onClick: nc,
                              disabled: eU,
                              getInputProps: nl,
                            }),
                          }),
                        (0, y.jsx)(tz, {
                          disabled: !nk || eU,
                          style: nE,
                          className: (0, z.Z)(
                            "bottom-1.5",
                            eA
                              ? "disabled:bottom-0.5 md:disabled:bottom-0"
                              : "transition-colors disabled:opacity-40"
                          ),
                          children: eA
                            ? (0, y.jsx)("div", {
                                className: "text-2xl",
                                children: (0, y.jsx)(tF, {}),
                              })
                            : (0, y.jsx)(nT.u, {
                                label: e$.formatMessage(tW.sendMessageTooltip),
                                children: (0, y.jsx)(el.ZP, {
                                  icon: el.IX,
                                  size: "small",
                                  className: "m-1 md:m-0",
                                }),
                              }),
                        }),
                        nu &&
                          (0, y.jsxs)(tU, {
                            children: [
                              (0, y.jsx)(el.ZP, { icon: C.tHe }),
                              e$.formatMessage(tW.dragInstructions),
                            ],
                          }),
                      ],
                    }),
                  !eK && nR && nA,
                ],
              }
            )
          ),
        });
      });
      function tF() {
        var e = (0, b._)((0, w.useState)(0), 2),
          n = e[0],
          t = e[1];
        (0, w.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, y.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, y.jsx)(y.Fragment, { children: r });
      }
      function tL(e) {
        var n = e.suggestions,
          t = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          o = (0, ee.Z)(),
          s = (0, w.useCallback)(
            function (e, n) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, n));
            },
            [r, i, a]
          );
        return (
          (0, w.useEffect)(
            function () {
              void 0 !== n && eE.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [n]
          ),
          (0, y.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              t || void 0 === n
                ? null
                : n.slice(0, 2).map(function (e, n) {
                    return (0, y.jsxs)(
                      es.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return s(e, n);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, y.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, y.jsx)(nT.u, {
                              label: o.formatMessage(tW.suggestionTooltip),
                              side: "top",
                              children: (0, y.jsx)(el.ZP, {
                                icon: tv.Z,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      n
                    );
                  }),
          })
        );
      }
      var tO = "prompt-textarea",
        tU = en.Z.div(tZ()),
        tq = en.Z.div(tP()),
        tz = en.Z.button(tR()),
        tQ = en.Z.div(tD()),
        tH = en.Z.div(
          tA(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        tG = en.Z.div(tE(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        tW = (0, M.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate response",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "Continue generating",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "Stop generating",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "Send a message.",
            description: "Placeholder text for the input field",
          },
          continueSharedConversationPlaceholder: {
            id: "PromptTextarea.continueSharedConversationPlaceholder",
            defaultMessage: "Send a message to continue the conversation.",
            description:
              "Placeholder text for the input field when viewing a shared chat",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
          sendMessageTooltip: {
            id: "PromptTextarea.sendMessageTooltip",
            defaultMessage: "Send message",
            description: "Tooltip for the send message button",
          },
          pauseTooltip: {
            id: "PromptTextarea.pauseTooltip",
            defaultMessage: "Pause",
            description: "Tooltip for the pause button",
          },
          dragInstructions: {
            id: "PromptTextarea.dragInstructions",
            defaultMessage: "Upload file",
            description:
              "Instructions for dragging and dropping a file to upload",
          },
          unsupportedFileType: {
            id: "PromptTextarea.unsupportedFileType",
            defaultMessage:
              'Uploads with file type "{file_type}" are not supported, please try another file.',
            description: "Error shown when an invalid file type is uploaded",
          },
        });
      function t$() {
        var e = (0, q._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (t$ = function () {
            return e;
          }),
          e
        );
      }
      function tV() {
        var e = (0, q._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (tV = function () {
            return e;
          }),
          e
        );
      }
      function tJ() {
        var e = (0, q._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (tJ = function () {
            return e;
          }),
          e
        );
      }
      function tY() {
        var e = (0, q._)(["block dark:text-white text-gray-900"]);
        return (
          (tY = function () {
            return e;
          }),
          e
        );
      }
      function tK() {
        var e = (0, q._)(["block text-xs text-gray-500"]);
        return (
          (tK = function () {
            return e;
          }),
          e
        );
      }
      function tX(e) {
        var n = e.items,
          t = e.value,
          r = e.onChange,
          a = (0, b._)(
            (0, w.useState)(function () {
              return n.reduce(function (e, n) {
                if (n.options.length > 0) {
                  var r = n.options.find(function (e) {
                    return e.value === t;
                  });
                  if (r) return (e[n.value] = r.value), e;
                  e[n.value] = n.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, w.useCallback)(
            function (e, a) {
              var s = t;
              void 0 !== a &&
                o(function (n) {
                  return (0, em._)((0, v._)({}, n), (0, tf._)({}, e, a));
                }),
                (s =
                  void 0 !== a
                    ? a
                    : (null == i ? void 0 : i[e]) !== void 0 &&
                      n.some(function (n) {
                        return (
                          n.value === e &&
                          n.options.some(function (n) {
                            return n.value === i[e];
                          })
                        );
                      })
                    ? i[e]
                    : e) !== t && r(s);
            },
            [n, i, r, t]
          ),
          l = (0, b._)((0, w.useState)(new Set()), 2),
          u = l[0],
          c = l[1],
          d = (0, w.useCallback)(function (e, n) {
            n
              ? c(function (n) {
                  var t = new Set(n);
                  return t.add(e), t;
                })
              : c(function (n) {
                  var t = new Set(n);
                  return t.delete(e), t;
                });
          }, []);
        return (0, y.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, y.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: n.map(function (e, r) {
              var a,
                o,
                l,
                c,
                m,
                f,
                h =
                  t === e.value ||
                  e.options.some(function (e) {
                    return e.value === t;
                  }),
                g = h ? t : null == i ? void 0 : i[e.value],
                p =
                  null != g
                    ? g
                    : null === (o = e.options) || void 0 === o
                    ? void 0
                    : null === (l = o[0]) || void 0 === l
                    ? void 0
                    : l.value,
                v =
                  null !==
                    (c = e.options.find(function (e) {
                      return e.value === p;
                    })) && void 0 !== c
                    ? c
                    : e.options[0],
                x =
                  null !== (m = null == v ? void 0 : v.icon) && void 0 !== m
                    ? m
                    : null;
              return (0,
              y.jsx)(t1, { onToggleItemOpenChanged: d, item: e, isSelected: h, isOtherToggleDropdownOpen: u.size > 0 && !u.has(e.categoryId), currentValue: t, defaultOption: null == v ? void 0 : v.value, onChange: s, currentIcon: x, displayCurrentValue: h && e.showSelectedValueBelow && null !== (f = null == v ? void 0 : v.name) && void 0 !== f ? f : "", contentAlign: ((a = n.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function t0(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = void 0 !== a && a,
          o = e.onChange,
          s = e.currentIcon,
          l = e.displayCurrentValue,
          u = n.options.length > 1,
          c = null != s ? s : n.icon,
          d = !n.disabled && u;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            t
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            i && "text-gray-800 dark:text-gray-100",
            r && t && "opacity-50"
          ),
          onClick: function () {
            n.disabled || o(n.value);
          },
          children: [
            (0, y.jsxs)("span", {
              className: (0, z.Z)(
                "relative max-[370px]:hidden",
                n.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != c &&
                  (0, y.jsx)(el.ZP, {
                    icon: c,
                    className: (0, z.Z)(
                      "transition-colors",
                      t ? n.buttonActiveClass : n.buttonHoverClass
                    ),
                  }),
                n.disabled && (0, y.jsx)(t7, {}),
              ],
            }),
            (0, y.jsx)("span", {
              className: (0, z.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !d && "pr-1.5"
              ),
              children: n.name,
            }),
            d &&
              (0, y.jsx)(el.ZP, {
                icon: i ? C.rH8 : C.bTu,
                strokeWidth: 2,
                className: "md:hidden",
              }),
            null != l &&
              "" !== l &&
              (0, y.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: l,
              }),
          ],
        });
      }
      function t1(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          s = e.displayCurrentValue,
          l = e.contentAlign,
          u = e.onToggleItemOpenChanged,
          c = e.isOtherToggleDropdownOpen,
          d = (0, b._)((0, w.useState)(void 0), 2),
          m = d[0],
          f = d[1],
          h = (0, w.useRef)(null),
          g = n.options.length > 1,
          p = !(void 0 === n.description && void 0 === n.disclaimer),
          v = (0, w.useCallback)(
            function (e) {
              f(e), u(n.categoryId, !!e);
            },
            [n.categoryId, u]
          );
        return (0, y.jsx)(tg.fC, {
          open: m,
          modal: !1,
          children: (0, y.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return v(!0);
            },
            onMouseLeave: function () {
              return v(void 0);
            },
            children: [
              (0, y.jsx)(tg.xz, {
                ref: h,
                className: "w-full",
                children: (0, y.jsx)(t0, {
                  isOpen: !!m,
                  isOtherToggleDropdownOpen: c,
                  item: n,
                  isSelected: t,
                  onChange: a,
                  currentIcon: i,
                  displayCurrentValue: s,
                }),
              }),
              (0, y.jsx)(
                tg.Uv,
                {
                  children: (0, y.jsx)(tg.VY, {
                    className: (0, z.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-4 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === n.name }
                    ),
                    align: l,
                    alignOffset: -6,
                    onCloseAutoFocus: function (e) {
                      m || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var n;
                      e.preventDefault(),
                        null === (n = h.current) || void 0 === n || n.focus();
                    },
                    children: (0, y.jsxs)(t8, {
                      children: [
                        p && (0, y.jsx)(t2, { item: n }),
                        (g || !m) &&
                          (0, y.jsx)(t5, {
                            defaultOption: t ? o : r,
                            item: n,
                            currentValue: o,
                            onChange: function (e, n) {
                              var t;
                              a(e, n),
                                v(void 0),
                                null === (t = document.getElementById(tO)) ||
                                  void 0 === t ||
                                  t.focus();
                            },
                            className: (0, z.Z)(
                              "text-sm",
                              p &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                n.categoryId
              ),
            ],
          }),
        });
      }
      function t2(e) {
        var n = e.item;
        return (0, y.jsxs)(t9, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== n.description &&
              (0, y.jsx)(re, { children: n.description }),
            void 0 !== n.disclaimer &&
              (0, y.jsx)(rn, { children: n.disclaimer }),
          ],
        });
      }
      function t5(e) {
        var n = e.item,
          t = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, y.jsx)(tg.Ee, {
          defaultValue: i,
          value: a,
          className: t,
          children: n.options.map(function (e, t) {
            return (0, y.jsx)(
              t3,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: n.iconClass,
                iconActiveClass: n.buttonActiveClass,
                showBorder: t !== n.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(n.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function t3(e) {
        var n,
          t = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          o = e.iconActiveClass,
          s = e.isDisabled,
          l = e.onChange,
          u = e.showBorder,
          c = null !== (n = t.activeIcon) && void 0 !== n ? n : t.icon;
        return (0, y.jsx)(tg.Rk, {
          asChild: !0,
          value: t.value,
          onClick: l,
          className: "select-none outline-none",
          children: (0, y.jsxs)("div", {
            className: (0, z.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium text-gray-900 focus:bg-gray-50 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": u,
              }
            ),
            children: [
              null != t.icon && null != c
                ? (0, y.jsx)(el.ZP, {
                    icon: r ? t.icon : c,
                    className: (0, z.Z)(
                      "max-[370px]:hidden",
                      !s && !r && i,
                      r || a ? o : "text-gray-500"
                    ),
                  })
                : null,
              (0, y.jsx)("span", {
                title: "string" == typeof t.name && t.name ? t.name : "",
                className: (0, z.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !s,
                  "text-gray-800 dark:text-gray-100": a && !s,
                }),
                children: t.name,
              }),
              t.tags.map(function (e) {
                return t6(e);
              }),
              (0, y.jsx)("span", {
                className: (0, z.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0": !r && !s,
                  "group-hover/options:opacity-0": !r,
                  "text-red-500": s,
                }),
                children: (0, y.jsx)(el.ZP, {
                  icon: s ? th.Z : el.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var t4 = new Set(["beta", "confidential", "alpha"]),
        t6 = function (e) {
          return (
            t4.has(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-sm capitalize",
                  "beta" === e && "bg-blue-200 text-blue-500",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "confidential" === e && "bg-red-200 text-red-800"
                ),
                children: e,
              },
              e
            )
          );
        },
        t7 = en.Z.span(t$()),
        t8 = en.Z.div(tV()),
        t9 = en.Z.div(tJ()),
        re = en.Z.span(tY()),
        rn = en.Z.span(tK()),
        rt = t(5046);
      function rr(e) {
        var n = e.onModelChange,
          t = e.currentModel,
          r = (0, et.WS)(),
          a = (0, rt.BT)(),
          i = (0, tS.ZP)(),
          o = (0, w.useCallback)(
            function (e) {
              a !== e && (n(e), r(er.s6.toggleModel, { model: e }));
            },
            [a, r, n]
          );
        return (0, y.jsx)(tX, {
          value: null == t ? void 0 : t.id,
          onChange: o,
          items: i,
        });
      }
      var ra = t(20485),
        ri = t(12285),
        ro = t(40638),
        rs = t(57526),
        rl = t(99581),
        ru = t(30892),
        rc = t.n(ru),
        rd = t(7361),
        rm = t.n(rd);
      function rf(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          a = Object.values(n);
        return (0, y.jsxs)("div", {
          className: (0, z.Z)("flex w-full items-stretch gap-2", t),
          children: [
            (0, y.jsx)("div", {
              className:
                "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
              children: r.map(function (e, n) {
                return (0, y.jsx)("span", { children: rc()(e) }, n);
              }),
            }),
            (0, y.jsx)("div", {
              className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
              children: a.map(function (e, n) {
                var t = (0, b._)(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, y.jsx)(rh, { num: r, max: a }, n);
              }),
            }),
          ],
        });
      }
      function rh(e) {
        var n = e.num,
          t = e.max,
          r = (0, w.useMemo)(
            function () {
              var e = rm()(Array(t), !1);
              return rm()(e, !0, 0, n);
            },
            [t, n]
          );
        return (0, y.jsx)("div", {
          className: "flex w-full gap-1",
          children: r.map(function (e, n) {
            return (0,
            y.jsx)("div", { className: (0, z.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"), children: e }, n);
          }),
        });
      }
      function rg() {
        var e = (0, q._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (rg = function () {
            return e;
          }),
          e
        );
      }
      function rp() {
        var e = (0, q._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }
      function rv() {
        var e = (0, q._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (rv = function () {
            return e;
          }),
          e
        );
      }
      function rx() {
        var e = (0, q._)(["flex items-center gap-2 truncate"]);
        return (
          (rx = function () {
            return e;
          }),
          e
        );
      }
      function rb() {
        var e = (0, q._)(["h-6 w-6 shrink-0"]);
        return (
          (rb = function () {
            return e;
          }),
          e
        );
      }
      function ry() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rj() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      var rk = ["confidential", "alpha", "plus"];
      function rw(e) {
        var n = e.selectedOption,
          t = e.onChange,
          r = e.onAction,
          a = e.onOpen,
          i = e.onClose,
          o = e.dropdownRef,
          s = (0, x._)(e, [
            "selectedOption",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          l = (0, w.useCallback)(
            function (e) {
              "string" == typeof e ? null == r || r(e) : t(e);
            },
            [t, r]
          );
        return (0, y.jsx)(ri.R, {
          value: n.value,
          onChange: l,
          children: function (e) {
            var t = e.open;
            return (0, y.jsx)(
              r_,
              (0, v._)(
                {
                  ref: o,
                  selectedLabel: (0, y.jsxs)(y.Fragment, {
                    children: [
                      n.title,
                      n.tags.map(function (e) {
                        return rZ(e);
                      }),
                      n.customTags,
                    ],
                  }),
                  open: t,
                  onOpen: a,
                  onClose: i,
                },
                s
              )
            );
          },
        });
      }
      function rC(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, x._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, w.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(n);
              } else r(e);
            },
            [r, a]
          );
        return (0, y.jsx)(ri.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, y.jsx)(
              r_,
              (0, v._)(
                {
                  ref: s,
                  selectedLabel: t || "".concat(n.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var r_ = (0, w.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          m = e.onClose,
          f = e.theme,
          h = (0, w.useRef)(null),
          g = (0, w.useRef)(null),
          p = (0, E.oc)();
        (0, w.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var v = l
          ? u ||
            (0, y.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, y.jsx)(eS.Z, {}),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                c,
                (0, y.jsxs)(ri.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, n) {
                      return (0, y.jsx)(
                        rM,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (n) {
                            var t = n.selected,
                              r = n.active;
                            return (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsxs)(rB, {
                                  children: [
                                    e.imageUrl &&
                                      (0, y.jsx)(rF, {
                                        children: (0, y.jsx)(tm.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, y.jsxs)("span", {
                                      className: (0, z.Z)(
                                        t && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return rZ(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, y.jsx)(rN, { theme: f, selected: t })
                                  : t &&
                                    (0, y.jsx)(rT, {
                                      theme: f,
                                      icon: "mini" === f ? el.HQ : C.UgA,
                                    }),
                                e.disabled &&
                                  (0, y.jsx)(rT, {
                                    theme: f,
                                    icon: rs.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, rl.createPortal)(
                                    (0, y.jsx)(rS, {
                                      option: e,
                                      dropdownRef: g,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, n) {
                          return (0, y.jsx)(
                            rM,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, y.jsx)(rT, { theme: f, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            n
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        y.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, y.jsxs)(ri.R.Button, { ref: h, onClick: a ? m : d, className: (0, z.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === f ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== f && (0, y.jsx)(ri.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, y.jsx)("span", { className: "inline-flex w-full truncate", children: (0, y.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, y.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, y.jsx)(el.ZP, { icon: C.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, y.jsx)(ro.u, { show: a, as: w.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, y.jsx)(rR, { ref: g, children: v }) })] });
      });
      function rM(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, y.jsx)(ri.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, z.Z)(
              "mini" === a ? rA : rE,
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function rT(e) {
        var n = e.icon,
          t = e.className,
          r = e.theme;
        return (0, y.jsx)("mini" === r ? rL : rO, {
          children: (0, y.jsx)(el.ZP, {
            icon: n,
            className: (0, z.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function rN(e) {
        var n = e.selected,
          t = e.disabled;
        return "mini" === e.theme
          ? (0, y.jsxs)(rL, {
              children: [
                (0, y.jsx)(el.ZP, {
                  icon: n ? el.HQ : el.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: n ? 2.5 : 2,
                }),
                !n &&
                  (0, y.jsx)(el.ZP, {
                    icon: el.nQ,
                    className: (0, z.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !t && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, y.jsx)(rO, {
              children: (0, y.jsx)("div", {
                className: (0, z.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  n
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, y.jsx)(el.ZP, {
                  icon: C.UgA,
                  className: (0, z.Z)(
                    "h-3 w-3 transition-opacity",
                    n && "opacity-100",
                    !n && "opacity-0",
                    !n && !t && "group-hover:opacity-50"
                  ),
                  strokeWidth: n ? 2.5 : 2,
                }),
              }),
            });
      }
      function rI(e) {
        var n = e.showCheckbox,
          t = e.theme;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)("mini" === t ? rA : rE, "cursor-auto"),
          children: [
            (0, y.jsxs)(rB, {
              children: [
                (0, y.jsx)(rF, {
                  children: (0, y.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, y.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            n && (0, y.jsx)(rN, { theme: t, selected: !1, disabled: !0 }),
          ],
        });
      }
      function rS(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, b._)((0, w.useState)(), 2),
          a = r[0],
          i = r[1];
        (0, w.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e = t.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [t]
        );
        var o = n.value.properties,
          s = (0, w.useMemo)(
            function () {
              return o
                ? (0, y.jsx)(rf, { values: o, className: "mt-auto" })
                : null;
            },
            [o]
          );
        return a
          ? (0, y.jsxs)(rD, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, y.jsx)(el.ZP, {
                    icon: rs.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                n.imageUrl &&
                  (0, y.jsx)(tm.Z, {
                    url: n.imageUrl,
                    name: n.title,
                    size: 70,
                  }),
                (0, y.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return rZ(e);
                    }),
                    " ",
                    n.customTags,
                  ],
                }),
                (0, y.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
                !n.disabled && s,
              ],
            })
          : null;
      }
      var rZ = function (e) {
          return (
            rk.includes(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        rP = en.Z.div(rg()),
        rR = (0, en.Z)(rP)(rp()),
        rD = (0, en.Z)(rP)(rv()),
        rA =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        rE =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        rB = en.Z.span(rx()),
        rF = en.Z.span(rb()),
        rL = en.Z.span(ry()),
        rO = en.Z.span(rj()),
        rU = t(697),
        rq = t(10604),
        rz = t(5759),
        rQ = t(17915),
        rH = t(38631);
      function rG() {
        var e = (0, q._)(["mt-4 flex flex-col gap-4"]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      function rW() {
        var e = (0, q._)(["text-sm text-red-500"]);
        return (
          (rW = function () {
            return e;
          }),
          e
        );
      }
      var r$ = en.Z.div(rG()),
        rV = en.Z.div(rW()),
        rJ = t(49910);
      function rY(e) {
        var n = e.onClickInstall,
          t = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useCallback)(function (e) {
            o(e);
          }, []),
          h = (0, w.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(r2, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: n,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(r1, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, y.jsx)(r0, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: u,
              onReadyToInstall: h,
              onInstallLocalhost: t,
              onClose: r,
            })
          : (0, y.jsx)(rK, { onFetch: f, onClose: r });
      }
      function rK(e) {
        var n = e.onFetch,
          t = e.onClose,
          r = (0, ep.kP)().session,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)("bearer"), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, w.useRef)(null),
          g = (0, rQ.sd)(),
          p = g.fetchManifestAndSpec,
          v = g.isLoading;
        (0, w.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var x = (0, w.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          j = (0, w.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          k = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, t, r;
              return (0, ef.Jh)(this, function (a) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (t = h.current) || void 0 === t
                                ? void 0
                                : t.value) || "",
                          }
                        : void 0,
                      onSuccess: n,
                      onError: function (e) {
                        return m(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (m("Please provide a domain."), [2]);
              });
            }),
            [p, n, l, i]
          );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: k,
            loading: v,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsxs)(r$, {
            children: [
              (0, y.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, y.jsxs)(rz.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, y.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, y.jsx)(rq.Z, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: k,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, ep.yl)(r.user) &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: x,
                      children: [
                        (0, y.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, y.jsx)(el.ZP, { icon: i ? C.rH8 : C.bTu }),
                      ],
                    }),
                    i &&
                      (0, y.jsxs)(y.Fragment, {
                        children: [
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, y.jsx)(rX, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: j,
                                  }),
                                  (0, y.jsx)(rX, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: j,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", { children: "Access token" }),
                              (0, y.jsx)(rq.Z, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, y.jsx)(rV, { children: d }),
            ],
          }),
        });
      }
      function rX(e) {
        var n = e.label,
          t = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, y.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, y.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: t,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            n,
          ],
        });
      }
      function r0(e) {
        var n = e.loadManifestResult,
          t = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = n.domain,
          l = n.manifestAccessToken,
          u = n.scrapeManifestResponse,
          c = n.apiValidationInfo,
          d = u.plugin,
          m = u.manifest_validation_info,
          f = (0, b._)((0, w.useState)(), 2),
          h = f[0],
          g = f[1],
          p = (0, b._)((0, w.useState)(!1), 2),
          v = p[0],
          x = p[1],
          k = (0, w.useRef)(null),
          C = (0, w.useRef)(null),
          _ = (0, w.useRef)(null),
          M = (0, rQ.sd)(),
          T = M.fetchManifestAndSpec,
          N = M.isLoading,
          I = (0, j.NL)(),
          S = d && (0, nl.cf)(d),
          Z = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          P = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          R =
            (m.errors && m.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          D = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n, u, c, m;
              return (0, ef.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!R) return [3, 1];
                    return (
                      T({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: t,
                        onError: function (e) {
                          return g(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!S) return [3, 2];
                    return (0, rQ.GI)(d, I, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!Z) return [3, 8];
                    if (
                      !(null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        g("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      x(!0),
                      [
                        4,
                        ea.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: k.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return x(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!P) return [3, 14];
                    if (
                      ((c =
                        null === (n = C.current) || void 0 === n
                          ? void 0
                          : n.value),
                      (m =
                        null === (u = _.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !c || !m)
                    )
                      return g("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        ea.ZP.setPluginOAuthClientCredentials({
                          id: d.id,
                          clientId: C.current.value,
                          clientSecret: _.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), g("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return x(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : o(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [Z, P, d, s, l, R, S, I, T, t, r, a, i, o]
          );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: R
              ? "Refetch manifest"
              : S
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: D,
            loading: v || N,
          }),
          secondaryButton:
            (R || Z || P) &&
            (0, y.jsx)(eN.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, y.jsxs)(r$, {
            children: [
              (0, y.jsx)(rJ.rC, { manifestValidationInfo: m }),
              c && (0, y.jsx)(rJ.q6, { apiValidationInfo: c }),
              d && (0, y.jsx)(rH.Z, { plugin: d }),
              Z &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rq.Z, {
                        ref: k,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              P &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rq.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rq.Z, {
                        ref: _,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: D,
                      }),
                    }),
                  ],
                }),
              h && (0, y.jsx)(rV, { children: h }),
            ],
          }),
        });
      }
      function r1(e) {
        var n = e.plugin,
          t = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, b._)((0, w.useState)(), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, i;
              return (0, ef.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        ea.ZP.scrapePluginManifest({
                          domain: n.domain,
                          manifestAccessToken: t,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [n, t, r, a]
          );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: c,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, y.jsxs)(r$, {
            children: [
              (0, y.jsx)(rH.Z, { plugin: n }),
              (0, y.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, y.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, y.jsx)(rV, { children: s }),
            ],
          }),
        });
      }
      function r2(e) {
        var n = e.plugin,
          t = e.onClickInstall,
          r = e.onClose,
          a = (0, w.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsx)(r$, {
            children: (0, y.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "up to 15 developers",
                }),
                ". Once ",
                "you're",
                " ready to make your plugin available to everyone, you can",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "submit your plugin for review",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function r5(e) {
        var n = e.onConfirm,
          t = e.onClose;
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsx)(r$, {
            children: (0, y.jsx)(rz.I, {
              children: (0, y.jsx)(rz.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function r3(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(n), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, y.jsx)(r6, { plugin: l, onInstall: t, onClose: r })
            : (0, y.jsx)(r5, { onConfirm: c, onClose: r })
          : (0, y.jsx)(r4, { onLoad: u, onClose: r });
      }
      function r4(e) {
        var n = e.onLoad,
          t = e.onClose,
          r = (0, w.useRef)(null),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1];
        (0, w.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, w.useCallback)(
          (0, ed._)(function () {
            var e, t, a;
            return (0, ef.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(t =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if ((0, nl.NB)(t))
                    return (
                      u(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, ea.ZP.getPluginByDomain({ domain: t })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? n(a) : u("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), u("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [n, o, u]
        );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsxs)(r$, {
            children: [
              (0, y.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, y.jsx)(rq.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, y.jsx)(rV, { children: l }),
            ],
          }),
        });
      }
      function r6(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useRef)(null),
          d = (0, rQ.U$)({
            onSuccess: function (e) {
              t(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          m = n.manifest.name_for_human,
          f = "user_http" === n.manifest.auth.type,
          h = "oauth" === n.manifest.auth.type,
          g = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, t;
              return (0, ef.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!h) return [3, 1];
                    return (
                      (e = (0, rQ.nT)(n))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(m, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!f) return [3, 7];
                    if (
                      !(null === (t = c.current) || void 0 === t
                        ? void 0
                        : t.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        ea.ZP.setPluginUserHttpToken({
                          id: n.id,
                          userAccessToken: c.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(n.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(n.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [n, m, h, f, d]
          );
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: h ? "Log in with ".concat(m) : "Install plugin",
            color: "primary",
            onClick: g,
            loading: l,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsxs)(r$, {
            children: [
              (0, y.jsx)(rH.Z, { plugin: n }),
              f &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children:
                        n.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rq.Z, {
                        ref: c,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: g,
                      }),
                    }),
                  ],
                }),
              h &&
                (0, y.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, y.jsx)("span", {
                      className: "font-medium",
                      children: m,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, y.jsx)(rV, { children: i }),
            ],
          }),
        });
      }
      var r7 = t(95552),
        r8 = t.n(r7),
        r9 = t(86433),
        ae = t(76559),
        an = t(74437);
      function at(e) {
        var n = e.onClose,
          t = (0, r9.S)().setupMfa;
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsx)(r$, {
            children: (0, y.jsx)(rz.I, {
              children: (0, y.jsx)(rz.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function ar() {
        var e = (0, q._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (ar = function () {
            return e;
          }),
          e
        );
      }
      function aa() {
        var e = (0, q._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (aa = function () {
            return e;
          }),
          e
        );
      }
      var ai =
        ((f = {}),
        (0, tf._)(f, E._G.Mobile, 8),
        (0, tf._)(f, E._G.Small, 4),
        (0, tf._)(f, E._G.Medium, 4),
        (0, tf._)(f, E._G.Large, 6),
        (0, tf._)(f, E._G.XLarge, 8),
        f);
      ((o = h || (h = {}))[(o.All = 0)] = "All"),
        (o[(o.Installed = 1)] = "Installed"),
        ((s = g || (g = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var ao = (0, M.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.search_placeholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.no_search_results",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.no_search_results_hint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
        }),
        as = [
          { id: g.Popular, title: "Popular" },
          { id: g.New, title: "New" },
          { id: h.All, title: "All" },
          { id: h.Installed, title: "Installed" },
        ];
      function al(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          f,
          p,
          v,
          j,
          k,
          _,
          M,
          N,
          I,
          S,
          Z,
          P,
          R,
          D,
          A,
          B,
          F = e.onInstallWithAuthRequired,
          L = e.onClickInstallDeveloper,
          O = e.onClickDevelop,
          U = e.onClickAbout,
          q = e.onClose,
          z = (0, ee.Z)(),
          Q = (0, T.hz)(),
          H = (0, b._)((0, w.useState)(), 2),
          G = H[0],
          W = H[1],
          $ = (0, b._)((0, w.useState)(""), 2),
          V = $[0],
          J = $[1],
          Y = ai[(0, E.dQ)()],
          K =
            ((r = (n = { numItemsPerPage: Y, filter: G, query: V })
              .numItemsPerPage),
            (a = n.filter),
            (i = n.query),
            (o = (0, ep.kP)().session),
            (l = (s = (0, an.C)()).installedPlugins),
            (u = s.isLoading),
            (d = (c = (0, ae.Z)()).approvedPlugins),
            (m = c.isLoading),
            (f = c.approvedPluginsByCategory),
            (p = (0, w.useMemo)(
              function () {
                var e = [],
                  n = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = as[Symbol.iterator]();
                    !(n = (a = i.next()).done);
                    n = !0
                  ) {
                    var o,
                      s = a.value;
                    Object.values(g).includes(s.id)
                      ? (null === (o = f[s.id]) || void 0 === o
                          ? void 0
                          : o.items.length) > 0 && e.push(s)
                      : s.id === h.Installed
                      ? l.length > 0 && e.push(s)
                      : e.push(s);
                  }
                } catch (e) {
                  (t = !0), (r = e);
                } finally {
                  try {
                    n || null == i.return || i.return();
                  } finally {
                    if (t) throw r;
                  }
                }
                return e;
              },
              [l.length, f]
            )),
            (j = (function (e, n) {
              for (
                var t = (0, eZ._)(e), r = r8()(n), a = t.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  o = Math.floor(r() * (a + 1));
                (i = [t[o], t[a]]), (t[a] = i[0]), (t[o] = i[1]);
              }
              return (
                ap("retrieval.apps.openai.com", t), ap("api.openai.com", t), t
              );
            })(
              (v = au(
                (0, w.useMemo)(
                  function () {
                    if (a === h.All) return d;
                    if (a && Object.values(g).includes(a)) {
                      var e, n;
                      return null !==
                        (n =
                          null === (e = f[a]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== n
                        ? n
                        : [];
                    }
                    return [];
                  },
                  [d, a, f]
                ),
                i
              )),
              (null == o
                ? void 0
                : null === (t = o.user) || void 0 === t
                ? void 0
                : t.id) || ""
            )),
            (k = au(l, i)),
            (_ = []),
            (M = !1),
            a === h.Installed
              ? ((_ = k), (M = u))
              : i
              ? ((_ = v), (M = m))
              : ((_ = j), (M = m)),
            {
              isLoading: M,
              availableFilters: p,
              items: ((I = (N = { items: _, numItemsPerPage: r }).items),
              (S = N.numItemsPerPage),
              (P = (Z = (0, b._)((0, w.useState)(0), 2))[0]),
              (R = Z[1]),
              (D = Math.ceil(I.length / S)),
              (A = P * S),
              (B = {
                page: P,
                numPages: D,
                pageItems: I.slice(A, A + S),
                goToPage: (0, w.useCallback)(function (e) {
                  R(e);
                }, []),
              })).pageItems,
              pagination: (0, x._)(B, ["pageItems"]),
            }),
          X = K.availableFilters,
          en = K.isLoading,
          et = K.items,
          er = K.pagination,
          ea = er.page,
          ei = er.numPages,
          eo = er.goToPage,
          es = (0, an.C)().installedPlugins;
        (0, w.useEffect)(
          function () {
            G === h.Installed && 0 === es.length && (W(X[0].id), eo(0));
          },
          [G, es, eo, X]
        ),
          (0, w.useEffect)(
            function () {
              en || void 0 !== G || W(X[0].id);
            },
            [en, G]
          );
        var eu = (0, b._)((0, w.useState)(!1), 2),
          ec = eu[0],
          ed = eu[1],
          em = (0, w.useCallback)(
            function (e) {
              J(e), eo(0), W(h.All);
            },
            [eo]
          );
        return ec
          ? (0, y.jsx)(at, {
              onClose: function () {
                ed(!1);
              },
            })
          : (0, y.jsx)(eI.Z, {
              isOpen: !0,
              onClose: q,
              size: "custom",
              className:
                "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
              type: "success",
              title: "Plugin store",
              closeButton: (0, y.jsx)(eN.ZP.CloseButton, { onClose: q }),
              children: (0, y.jsxs)(r$, {
                children: [
                  !en &&
                    X.length > 1 &&
                    (0, y.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        X.map(function (e) {
                          return (0, y.jsx)(
                            ac,
                            {
                              selected: G === e.id,
                              onClick: function () {
                                W(e.id), eo(0);
                              },
                              children: e.title,
                            },
                            e.id
                          );
                        }),
                        (0, y.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, y.jsx)("div", {
                              className:
                                "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                              children: (0, y.jsx)(el.ZP, {
                                icon: C.jRj,
                                className:
                                  "h-5 w-5 text-gray-500 dark:text-gray-400",
                              }),
                            }),
                            (0, y.jsx)(rq.Z, {
                              className: "pl-10",
                              autoFocus: !0,
                              type: "search",
                              placeholder: z.formatMessage(
                                ao.searchPlaceholder
                              ),
                              value: V,
                              onChange: function (e) {
                                return em(e.target.value);
                              },
                              name: "search",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, y.jsx)(ad, {
                    plugins: et,
                    numSkeletons: Y,
                    query: V,
                    isLoading: en,
                    onInstallWithAuthRequired: F,
                    onRequestMfa: function () {
                      return ed(!0);
                    },
                  }),
                  (0, y.jsxs)("div", {
                    className:
                      "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                    children: [
                      (0, y.jsx)("div", {
                        className:
                          "flex flex-1 justify-start max-lg:justify-center",
                        children:
                          ei > 1 &&
                          (0, y.jsx)(ag, {
                            page: ea,
                            numPages: ei,
                            goToPage: eo,
                          }),
                      }),
                      (0, y.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 sm:flex-row",
                        children: [
                          Q.has("tools3_dev") &&
                            (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsx)(av, {
                                  onClick: L,
                                  children: "Install an unverified plugin",
                                }),
                                (0, y.jsx)(ax, {}),
                                (0, y.jsx)(av, {
                                  onClick: O,
                                  children: "Develop your own plugin",
                                }),
                                (0, y.jsx)(ax, {}),
                              ],
                            }),
                          (0, y.jsx)(av, {
                            onClick: U,
                            children: "About plugins",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function au(e, n) {
        return (0, w.useMemo)(
          function () {
            return "" !== n
              ? e
                  .map(function (e) {
                    return {
                      plugin: e,
                      score: (function (e, n) {
                        var t = n.toLowerCase(),
                          r = t.trim().split(/\s+/),
                          a = e.manifest.description_for_human.toLowerCase(),
                          i = e.manifest.name_for_human.toLowerCase(),
                          o = 0;
                        if (i === t || e.domain.toLowerCase() === t) return 1e3;
                        if (i.startsWith(t)) return 500;
                        if (i.includes(t)) return 100;
                        var s = !0,
                          l = !1,
                          u = void 0;
                        try {
                          for (
                            var c, d = r[Symbol.iterator]();
                            !(s = (c = d.next()).done);
                            s = !0
                          ) {
                            var m = c.value;
                            if (i.startsWith(m)) o += 50;
                            else if (i.includes(m)) o += 10;
                            else {
                              if (!a.includes(m)) return 0;
                              o += 1;
                            }
                          }
                        } catch (e) {
                          (l = !0), (u = e);
                        } finally {
                          try {
                            s || null == d.return || d.return();
                          } finally {
                            if (l) throw u;
                          }
                        }
                        return o;
                      })(e, n),
                    };
                  })
                  .filter(function (e) {
                    return e.score > 0;
                  })
                  .sort(function (e, n) {
                    return n.score - e.score;
                  })
                  .map(function (e) {
                    return e.plugin;
                  })
              : e.sort(function (e, n) {
                  return e.manifest.name_for_human.localeCompare(
                    n.manifest.name_for_human
                  );
                });
          },
          [e, n]
        );
      }
      function ac(e) {
        var n = e.selected,
          t = e.onClick,
          r = e.children;
        return (0, y.jsx)(es.z, {
          color: n ? "light" : "neutral",
          className: (0, z.Z)(
            "focus:ring-0",
            n && "hover:bg-gray-200",
            !n && "text-black/50"
          ),
          onClick: t,
          children: r,
        });
      }
      function ad(e) {
        var n = e.plugins,
          t = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = e.query;
        if (0 === n.length && !r && o)
          return (0, y.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, y.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, y.jsx)(
                  _.Z,
                  (0, em._)((0, v._)({}, ao.noSearchResultsTitle), {
                    values: { query: o },
                  })
                ),
              }),
              (0, y.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, y.jsx)(_.Z, (0, v._)({}, ao.noSearchResultsHint)),
              }),
            ],
          });
        var s = r
          ? Array(t)
              .fill(0)
              .map(function (e, n) {
                return (0, y.jsx)(af, {}, n);
              })
          : n.map(function (e) {
              return (0,
              y.jsx)(am, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, y.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: s,
        });
      }
      function am(e) {
        var n,
          t,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, rQ.U$)({
            onSuccess: function (e) {
              (0, rU.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                tw.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, rQ.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                tw.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          h = (0, ep.kP)().session,
          g = (0, T.hz)(),
          p = (0, r9.S)().isUsernamePassword,
          v = (0, w.useCallback)(
            function () {
              var e,
                n = r.manifest.auth.type;
              if (
                !("none" === n || "service_http" === n) &&
                !(null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                g.has(ei.i) &&
                p
              ) {
                i();
                return;
              }
              if ("oauth" === n) {
                var t = (0, rQ.nT)(r);
                t
                  ? (window.location.href = t)
                  : tw.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === n ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, h, g]
          ),
          x = (0, w.useCallback)(
            function () {
              d(!0), f(r.id);
            },
            [r, f]
          );
        return (
          (t =
            s || c
              ? (0, y.jsxs)(es.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    s ? "Installing" : "Uninstalling",
                    (0, y.jsx)(eS.Z, {}),
                  ],
                })
              : (
                  null === (n = r.user_settings) || void 0 === n
                    ? void 0
                    : n.is_installed
                )
              ? (0, y.jsxs)(es.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: x,
                  children: ["Uninstall", (0, y.jsx)(el.ZP, { icon: C.$Rx })],
                })
              : (0, y.jsxs)(es.z, {
                  onClick: v,
                  children: ["Install", (0, y.jsx)(el.ZP, { icon: C.wzc })],
                })),
          (0, y.jsx)(ah, {
            logo: (0, y.jsx)(tm.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, nl.cf)(r)
              ? (0, y.jsx)(nk, {})
              : "approved" !== r.status
              ? (0, y.jsx)(nj, {})
              : void 0,
            title: (0, y.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: r.manifest.name_for_human,
            }),
            button: t,
            description: r.manifest.description_for_human,
          })
        );
      }
      function af() {
        return (0, y.jsx)(ah, {
          logo: (0, y.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, y.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, y.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, y.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, y.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function ah(e) {
        var n = e.logo,
          t = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, y.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, y.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, y.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: n,
                }),
                (0, y.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    t
                      ? (0, y.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [t, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      function ag(e) {
        for (
          var n = function (e) {
              u.push(
                (0, y.jsx)(
                  av,
                  {
                    role: "button",
                    className: (0, z.Z)(
                      "flex h-5 w-5 items-center justify-center",
                      e === t &&
                        "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e
                )
              );
            },
            t = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = t > 0,
            o = t < r - 1,
            s = (0, w.useCallback)(
              function () {
                a(Math.max(t - 1, 0));
              },
              [t, a]
            ),
            l = (0, w.useCallback)(
              function () {
                a(Math.min(t + 1, r - 1));
              },
              [t, r, a]
            ),
            u = [],
            c = 0;
          c < r;
          c++
        )
          n(c);
        return (0, y.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, y.jsxs)(av, {
              role: "button",
              className: (0, z.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: [(0, y.jsx)(el.ZP, { icon: C.YFh }), "Prev"],
            }),
            u,
            (0, y.jsxs)(av, {
              role: "button",
              className: (0, z.Z)("flex items-center", !o && "opacity-50"),
              onClick: l,
              $disabled: !o,
              children: ["Next", (0, y.jsx)(el.ZP, { icon: C.Tfp })],
            }),
          ],
        });
      }
      function ap(e, n) {
        var t = n.findIndex(function (n) {
          return n.domain === e;
        });
        if (-1 !== t) {
          var r = n.splice(t, 1)[0];
          n.unshift(r);
        }
      }
      var av = en.Z.button(ar(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        ax = en.Z.div(aa());
      function ab(e) {
        var n = e.allowClose,
          t = e.onConfirm,
          r = e.onClose;
        return (0, y.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, y.jsx)(eN.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: t,
          }),
          secondaryButton:
            n &&
            (0, y.jsx)(eN.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, y.jsx)(r$, {
            children: (0, y.jsxs)(rz.I, {
              children: [
                (0, y.jsx)(rz.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, y.jsx)(rz.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.",
                }),
                (0, y.jsx)(rz.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var ay = "oai/apps/hasSeenPluginsDisclaimer";
      function aj(e) {
        var n = e.onInstall,
          t = e.onClose,
          r = (0, b._)((0, w.useState)(!!ec.m.getItem(ay)), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, b._)((0, w.useState)(), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          v = g[1],
          x = (0, w.useCallback)(function () {
            i(!0), l(!1), ec.m.setItem(ay, !0);
          }, []),
          j = (0, w.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          k = (0, w.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, w.useCallback)(function () {
            v(!0);
          }, []),
          _ = (0, w.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, w.useCallback)(
            function (e) {
              (0, rU.wu)(e.id), t(), n(e);
            },
            [n, t]
          ),
          T = (0, w.useCallback)(
            function () {
              h(void 0), d(!1), t();
            },
            [t]
          ),
          N = (0, w.useCallback)(
            function () {
              v(!1), t();
            },
            [t]
          );
        return !a || s
          ? (0, y.jsx)(ab, { allowClose: !a, onConfirm: x, onClose: t })
          : c
          ? (0, y.jsx)(r3, { plugin: f, onInstall: M, onClose: T })
          : p
          ? (0, y.jsx)(rY, {
              onClickInstall: j,
              onInstallLocalhost: M,
              onClose: N,
            })
          : (0, y.jsx)(al, {
              onInstallWithAuthRequired: j,
              onClickInstallDeveloper: k,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: t,
            });
      }
      function ak() {
        var e = (0, q._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (ak = function () {
            return e;
          }),
          e
        );
      }
      function aw(e) {
        var n,
          t = e.theme,
          r = void 0 === t ? "default" : t,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, k.useRouter)(),
          d = (0, an.C)(),
          m = d.installedPlugins,
          f = d.isLoading,
          h = (0, rU.p0)(),
          g = (0, w.useRef)(null);
        (0, w.useEffect)(
          function () {
            if (!f) {
              var e = c.query,
                n = e.loginAip,
                t = e.loginSuccess,
                r = (0, x._)(e, ["loginAip", "loginSuccess"]);
              if (n) {
                var a,
                  i = m.find(function (e) {
                    return e.id === n;
                  });
                i && "true" === t
                  ? ((0, rU.wu)(c.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : tw.m.warning(
                      "Couldn't log in with ".concat(
                        (null == i ? void 0 : i.manifest.name_for_human) ||
                          "plugin",
                        "."
                      )
                    ),
                  c.replace({ pathname: c.pathname, query: r });
              }
            }
          },
          [c, m, f]
        );
        var p = (0, w.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          v = (0, w.useCallback)(function () {
            o(!1);
          }, []),
          j = (0, b._)((0, w.useState)(h), 2),
          _ = j[0],
          M = j[1],
          T = (0, w.useCallback)(
            function (e) {
              if (e.length > rU.hZ)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var n = e.filter(function (e) {
                    return !h.find(function (n) {
                      return n.id === e.id;
                    });
                  }),
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = rU.iO[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  ) {
                    var s = (function () {
                      var e = i.value,
                        t = h.find(function (n) {
                          return e.includes(n.domain);
                        });
                      if (t) {
                        var r = e.find(function (e) {
                            return e !== t.domain;
                          }),
                          a = n.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            tw.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  t.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, ra._)(s)) return s.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, rU.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          N = (0, w.useCallback)(function (e) {
            var n;
            null === (n = g.current) || void 0 === n || n.close(),
              "store" === e && o(!0);
          }, []),
          I = (0, w.useCallback)(
            function () {
              M(h),
                eE.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          S = (0, w.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !h.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                n = h.filter(function (e) {
                  return !_.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                t = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = n[Symbol.iterator]();
                  !(t = (i = o.next()).done);
                  t = !0
                ) {
                  var s = i.value;
                  eE.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var d, m = e[Symbol.iterator]();
                  !(l = (d = m.next()).done);
                  l = !0
                ) {
                  var f = d.value;
                  eE.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: f.id,
                  });
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  l || null == m.return || m.return();
                } finally {
                  if (u) throw c;
                }
              }
            },
            [h, _]
          ),
          Z = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, nl.cf)(e)
                ? (0, y.jsx)(nk, {})
                : "approved" !== e.status
                ? (0, y.jsx)(nj, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          P = Z.filter(function (e) {
            return h.find(function (n) {
              return n.id === e.value.id;
            });
          }),
          R = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var D = h.map(function (e, n) {
            return (0,
            y.jsx)(tm.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, n);
          });
          R = (0, y.jsx)("div", { className: "flex gap-2", children: D });
        }
        var A = [{ id: "store", label: "Plugin store", icon: C.Rgz }];
        m.length > rU.hZ &&
          (n = (0, y.jsxs)(aC, {
            className: (0, z.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", rU.hZ, " Enabled"],
          }));
        var E = (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(aC, { children: "Loading..." }),
            (0, y.jsx)(rI, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rI, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rI, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rI, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rI, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(rC, {
              name: "Plugins",
              selectedOptions: P,
              selectedLabel: R,
              options: Z,
              actions: A,
              onChange: T,
              onAction: N,
              onOpen: I,
              onClose: S,
              dropdownRef: g,
              isLoading: f,
              loadingState: E,
              header: n,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, y.jsx)(aj, { onInstall: p, onClose: v }),
          ],
        });
      }
      var aC = en.Z.div(ak()),
        a_ = t(48101),
        aM = t(66523);
      function aT(e) {
        var n,
          t,
          r = e.currentModelId,
          a = (0, T.hz)(),
          i = (0, nP.fm)(),
          o = (0, nP.B9)(),
          s = void 0 !== r ? o.get(r) : void 0,
          l = (0, nP.B8)().enabledModelsById,
          u = (0, w.useMemo)(
            function () {
              return Array.from(l)
                .map(function (e) {
                  return o.get(e);
                })
                .filter(function (e) {
                  return void 0 !== e;
                });
            },
            [l, o]
          ),
          c = (0, eR.Fl)(),
          d = c.isBetaFeaturesUiEnabled,
          m = c.isPluginsAvailable,
          f = c.isBrowsingAvailable,
          h = c.isCodeInterpreterAvailable;
        return d && a.has("new_model_switcher_20230512") && (m || f || h)
          ? s
            ? (0, y.jsxs)("div", {
                className:
                  "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [
                  (0, y.jsx)(rr, { currentModel: s, onModelChange: i }),
                  m &&
                    (null == s
                      ? void 0
                      : null === (t = s.enabledTools) || void 0 === t
                      ? void 0
                      : t.includes("tools3")) &&
                    (0, y.jsx)(aw, { theme: "mini" }),
                ],
              })
            : null
          : (0, y.jsxs)("div", {
              className: "flex items-center justify-center gap-2",
              children: [
                (0, y.jsx)(aN, {
                  onChangeModelQueryParam: i,
                  availableModels: u,
                  currentModelId: r,
                }),
                m &&
                  (null == s
                    ? void 0
                    : null === (n = s.enabledTools) || void 0 === n
                    ? void 0
                    : n.includes("tools3")) &&
                  (0, y.jsx)(aw, {}),
              ],
            });
      }
      function aN(e) {
        var n = e.onChangeModelQueryParam,
          t = e.availableModels,
          r = e.currentModelId,
          a = (0, rt.BT)(),
          i = (0, et.WS)(),
          o = (0, aM.Z)(),
          s = (0, w.useCallback)(
            function (e) {
              e.id !== a && (n(e.id), i(er.s6.toggleModel, { model: e.id }));
            },
            [a, i, n]
          ),
          l = "".concat(o.modelSwitcherDisclaimer),
          u = t.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === a ? l : e.description,
              tags: e.tags,
              disabled: e.id === a,
            };
          }),
          c =
            u.find(function (e) {
              return e.value.id === r;
            }) || u[0];
        return void 0 === r
          ? null
          : (0, y.jsx)(rw, {
              name: "Model",
              selectedOption: c,
              options: u,
              onChange: s,
              theme: "default",
            });
      }
      var aI = function (e) {
        var n,
          t,
          r,
          a = e.currentModelConfig,
          i = e.clientThreadId,
          o = e.isStaticSharedThread,
          s = e.icon,
          l = (0, T.hz)().has(ei.b5),
          u = (0, N.Ro)(i);
        void 0 === u && (u = a);
        var c = u.tags
            .filter(function (e) {
              return rk.includes(e);
            })
            .map(function (e) {
              return rZ(e);
            }),
          d = (0, nM.v)();
        if (d.length > 0) {
          var m = d.map(function (e, n) {
            return (0,
            y.jsx)(tm.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
          });
          r = (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)("div", { children: "Enabled plugins:" }), m],
          });
        }
        var f = (0, k.useRouter)(),
          h =
            o &&
            (null === (n = f.query) || void 0 === n
              ? void 0
              : null === (t = n.shareParams) || void 0 === t
              ? void 0
              : t[1]) === "moderate",
          g = (0, D.tN)(function (e) {
            return e.activeModals.has(D.B.DownloadMessages);
          }),
          p = N.tQ.getThreadCurrentLeafId(i),
          v = (0, N.u9)(i, p),
          x = (0, w.useCallback)(
            function () {
              l && (0, a_.Ub)(i, v);
            },
            [i, l, v]
          );
        return (0, y.jsxs)(y.Fragment, {
          children: [
            l &&
              (0, y.jsx)(eI.Z, {
                type: "success",
                isOpen: g,
                onClose: function () {
                  D.vm.closeModal(D.B.DownloadMessages);
                },
                closeButton: (0, y.jsx)(eN.ZP.CloseButton, {
                  onClose: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                }),
                primaryButton: (0, y.jsx)(eN.ZP.Button, {
                  onClick: x,
                  children: "Download",
                }),
                title: "Download chat debug info",
                secondaryButton: (0, y.jsx)(eN.ZP.Button, {
                  onClick: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                  children: "Cancel",
                }),
              }),
            (0, y.jsxs)("div", {
              className: (0, z.Z)(
                "flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                o ? "sticky top-0 z-50" : ""
              ),
              onClick: function (e) {
                l &&
                  !o &&
                  3 === e.detail &&
                  D.vm.openModal(D.B.DownloadMessages);
              },
              children: [
                o &&
                  (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)("span", { children: "Shared Chat" }),
                      (0, y.jsx)("span", { className: "px-1", children: "•" }),
                    ],
                  }),
                !o && void 0 !== s && (0, y.jsx)(el.ZP, { icon: s }),
                "Model: ",
                a.title,
                c,
                r
                  ? (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        r,
                      ],
                    })
                  : null,
                h &&
                  (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)("span", { className: "px-1", children: "•" }),
                      (0, y.jsx)("strong", { children: "MODERATION VIEW" }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
      function aS() {
        var e = (0, q._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (aS = function () {
            return e;
          }),
          e
        );
      }
      function aZ() {
        var e = (0, q._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (aZ = function () {
            return e;
          }),
          e
        );
      }
      function aP() {
        var e = (0, q._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (aP = function () {
            return e;
          }),
          e
        );
      }
      function aR() {
        var e = (0, q._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (aR = function () {
            return e;
          }),
          e
        );
      }
      function aD() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (aD = function () {
            return e;
          }),
          e
        );
      }
      var aA = (0, M.vU)({
        codeInterpreterSupportDisclaimer: {
          id: "sharedConversation.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
      });
      function aE(e) {
        var n = e.clientThreadId,
          t = (0, N.qA)(n),
          r = (0, N.je)(n),
          a = (0, N.qN)(function (e) {
            return N.iN.getThreadCreateTime(n, e);
          }),
          i = (0, N.JI)(n),
          o = (0, w.useMemo)(
            function () {
              return eT(i);
            },
            [i]
          );
        return (0, y.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-10 sm:pt-8",
          children: [
            (0, y.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: t,
            }),
            (null != r || null != a) &&
              (0, y.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, y.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, y.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, y.jsx)(M.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, y.jsx)(y.Fragment, {
              children:
                o &&
                (0, y.jsx)("div", {
                  className: "mt-4 rounded-md bg-[#FFF3C9] p-4 text-[#756B5C]",
                  children: (0, y.jsx)(
                    _.Z,
                    (0, v._)({}, aA.codeInterpreterSupportDisclaimer)
                  ),
                }),
            }),
          ],
        });
      }
      function aB(e) {
        var n,
          t = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          o = e.onDeleteNode,
          s = e.onRequestCompletion,
          l = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          u = e.clientThreadId,
          c = e.conversationLeafId,
          d = e.isNewThread,
          m = e.activeRequests,
          f = e.currentThreadModel,
          h = e.isStaticSharedThread,
          g = e.inlineEmbeddedDisplay,
          p = e.initiallyHighlightedMessageId,
          v = e.promptTextareaRef,
          x = (0, eP.useScrollToBottom)(),
          j = (0, b._)((0, eP.useSticky)(), 1)[0],
          k = (0, T.hz)(),
          _ = (0, eR.Fl)().isBetaFeaturesUiEnabled,
          M = (0, N.Kt)(u),
          I = (0, T.Xj)().isLoading,
          S = (0, nP.iu)(),
          Z = (0, nP.ZL)(),
          P = (0, nP.Xy)(f, u),
          R = (0, D.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          A = k.has("model_switcher") && S.size > 1,
          E = d && !I && A,
          B = (0, b._)((0, w.useState)(!1), 2),
          F = B[0],
          L = B[1],
          O = (0, tS.Ri)(P.id),
          U = (0, N.U0)(u, c);
        (0, w.useEffect)(
          function () {
            if (M) {
              var e = setTimeout(function () {
                L(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            L(!1);
          },
          [M]
        );
        var q = k.has(ei.FZ),
          Q =
            !_ && P.tags.includes(nP.S.GPT_4)
              ? "black"
              : null !== (n = null == O ? void 0 : O.backgroundColor) &&
                void 0 !== n
              ? n
              : void 0,
          H = (0, eZ._)(Array(U).keys()).map(function (e) {
            return (0,
            y.jsx)(nG, { isFinalTurn: e === U - 1, turnIndex: e, clientThreadId: u, conversationLeafId: c, onChangeItemInView: t, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: o, onRequestCompletion: s, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: P.id, isStaticSharedThread: h, showInlineEmbeddedDisplay: g, initiallyHighlightedMessageId: p, avatarColor: Q }, e);
          });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            E &&
              (0, y.jsxs)(aU, {
                children: [
                  (0, y.jsx)(aT, { currentModelId: P.id }),
                  (0, y.jsxs)(aq, {
                    children: ["ChatGPT", (0, y.jsx)(eD.IS, {})],
                  }),
                ],
              }),
            (0, y.jsxs)(aF, {
              children: [
                d && !I && !Z && !A && (0, y.jsx)(td, { promptTextareaRef: v }),
                F && (0, y.jsx)(eS.Z, { className: "mt-4 self-center" }),
                !d &&
                  (h || (!I && A)) &&
                  !g &&
                  (0, y.jsx)(aI, {
                    icon: _ ? (null == O ? void 0 : O.icon) : void 0,
                    currentModelConfig: P,
                    clientThreadId: u,
                    isStaticSharedThread: h,
                  }),
                q
                  ? H.length > 0 &&
                    (0, y.jsx)("div", {
                      className: (0, z.Z)(
                        "flex flex-col items-center",
                        R ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, y.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          h && !g && (0, y.jsx)(aE, { clientThreadId: u }),
                          H,
                        ],
                      }),
                    })
                  : (0, y.jsxs)(y.Fragment, {
                      children: [
                        h &&
                          !g &&
                          (0, y.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, y.jsx)(aE, { clientThreadId: u }),
                          }),
                        H,
                      ],
                    }),
                !E && !g && (0, y.jsx)(aL, {}),
              ],
            }),
            !j &&
              !g &&
              (0, y.jsx)(aO, {
                onClick: x,
                children: (0, y.jsx)(el.ZP, { icon: C.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var aF = en.Z.div(aS()),
        aL = en.Z.div(aZ()),
        aO = en.Z.button(aP()),
        aU = en.Z.div(aR()),
        aq = en.Z.h1(aD());
      function az() {
        var e = (0, q._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (az = function () {
            return e;
          }),
          e
        );
      }
      function aQ() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (aQ = function () {
            return e;
          }),
          e
        );
      }
      function aH() {
        var e = (0, q._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (aH = function () {
            return e;
          }),
          e
        );
      }
      function aG() {
        var e = (0, q._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (aG = function () {
            return e;
          }),
          e
        );
      }
      function aW() {
        var e = (0, q._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (aW = function () {
            return e;
          }),
          e
        );
      }
      function a$() {
        var e = (0, q._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (a$ = function () {
            return e;
          }),
          e
        );
      }
      function aV() {
        var e = (0, q._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (aV = function () {
            return e;
          }),
          e
        );
      }
      var aJ = (0, M.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Chat",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        existingShareDescription: {
          id: "sharingModal.exisitingDescription",
          defaultMessage:
            "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
          description:
            "Description in sharing modal when viewing an existing link",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
        confirmDeleteLink: {
          id: "sharingModal.confirmDeleteLink",
          defaultMessage: "Are you sure you want to delete the share link?",
          description: "Confirmation message when deleting share link",
        },
        codeInterpreterSupportDisclaimer: {
          id: "sharingModal.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won't be able to view Code Interpreter images or download files.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
      });
      function aY(e) {
        var n = e.serverThreadId,
          t = e.activeRequests,
          r = (0, N.oq)(n),
          a = (0, b._)(
            (0, w.useState)(function () {
              return (0, ev.Z)(function (e, n) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          i = 0 === t.size && "root" !== r,
          o = (0, w.useRef)(!1);
        return (
          (0, w.useEffect)(
            function () {
              if (i && !o.current) {
                o.current = !0;
                var e = N.tQ.getThreadCurrentLeafId(n),
                  t = N.tQ.getTree(n).getMessageId(e);
                ea.ZP.createShareLink({
                  current_node_id: t,
                  conversation_id: n,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    a.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof ey.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (tw.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        D.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, y.jsx)(ex.Provider, {
            value: a,
            children: (0, y.jsx)(a0, (0, v._)({}, e)),
          })
        );
      }
      function aK(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var aX =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function a0(e) {
        var n,
          t,
          r,
          a,
          i,
          o = e.serverThreadId,
          s = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!V ||
              window.confirm(c.formatMessage(aJ.confirmCloseWithChanges))) &&
              D.vm.closeSharingModal();
          },
          c = (0, ee.Z)(),
          d = (0, w.useRef)(null),
          m = (0, b._)((0, w.useState)(!1), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          x = g[1],
          j = (0, b._)((0, w.useState)(!1), 2),
          k = j[0],
          T = j[1],
          I = (0, w.useContext)(ex),
          S = eb(function (e) {
            return e.title;
          }),
          Z = eb(function (e) {
            return e.shareLinkId;
          }),
          P = eb(function (e) {
            return e.shareLinkUrl;
          }),
          R = eb(function (e) {
            return e.isAnonymous;
          }),
          A = eb(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          E = eb(function (e) {
            return e.currentNodeId;
          }),
          B = eb(function (e) {
            return e.isPublic;
          }),
          F =
            eb(function (e) {
              return e.linkAlreadyExisted;
            }) && B,
          L = eb(function (e) {
            return e.linkError;
          }),
          O = eb(function (e) {
            return e.moderationState;
          }),
          U = null != O && aK(O),
          q = (0, w.useRef)(),
          Q = (0, w.useRef)();
        (0, w.useEffect)(
          function () {
            F && ((q.current = S), (Q.current = R));
          },
          [F]
        );
        var H = (0, ep.kP)().session,
          G = (0, N.JI)(o, E),
          W = (0, w.useMemo)(
            function () {
              return eT(G);
            },
            [G]
          ),
          $ =
            ((n = (0, ed._)(function (e, n) {
              var t, r, a, i, o, s, l;
              return (0, ef.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    x(!0),
                      (r = (t = I.getState()).highlightedMessageId),
                      (a = t.title),
                      (i = t.isDeleted),
                      (o = t.isAnonymous);
                    try {
                      navigator.clipboard.writeText(n);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        tw.m.warning("Failed to copy link to clipboard"),
                        x(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        ea.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 2:
                    if (aK((s = u.sent().moderation_state)))
                      return I.setState({ moderationState: s }), [2];
                    return (
                      I.setState({ isPublic: !0, moderationState: s }),
                      T(!0),
                      setTimeout(function () {
                        D.vm.closeSharingModal(),
                          tw.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ey.Q0 &&
                        "string" == typeof l.message &&
                        I.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return x(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, t) {
              return n.apply(this, arguments);
            }),
          V = F && (S !== q.current || R !== Q.current),
          J = (0, y.jsxs)(eN.ZP.Button, {
            onClick: function () {
              return $(Z, P);
            },
            color: "primary",
            disabled: p || k || null == Z || null == P || null != L || U,
            children: [
              k
                ? (0, y.jsx)(el.ZP, { icon: C.LSm })
                : p
                ? (0, y.jsx)(eS.Z, {})
                : (0, y.jsx)(el.ZP, { icon: C.XKb }),
              k
                ? "Copied!"
                : p
                ? "Copying..."
                : V
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          Y = (0, w.useCallback)(
            function (e) {
              var n;
              null == e || e.preventDefault(),
                I.setState({
                  title:
                    null === (n = d.current) || void 0 === n ? void 0 : n.value,
                }),
                h(!1);
            },
            [I]
          ),
          K = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && Y();
            },
            [Y]
          ),
          en =
            ((t = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      ea.ZP.deleteShareLink({
                        share_id: I.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          tw.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          D.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            }),
          et =
            ((r = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !0 }),
                  N.qN.setState(function (e) {
                    e.threads[o].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          er =
            ((a = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !1 }),
                  N.qN.setState(function (e) {
                    var n;
                    e.threads[o].initialThreadData.authorName =
                      null == H
                        ? void 0
                        : null === (n = H.user) || void 0 === n
                        ? void 0
                        : n.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          ei = (0, y.jsxs)(a3, {
            $active: f,
            children: [
              (0, y.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== S
                    ? f
                      ? (0, y.jsx)(a6, {
                          ref: d,
                          type: "text",
                          defaultValue: null != S ? S : "",
                          autoFocus: !0,
                          onKeyDown: K,
                          onBlur: Y,
                        })
                      : (0, y.jsxs)(a4, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            S,
                            f || null == S || F
                              ? null
                              : (0, y.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, y.jsx)(el.ZP, {
                                    icon: C.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, y.jsx)("div", { className: "h-6" }),
                  (0, y.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !R &&
                        (0, y.jsxs)("span", {
                          children: [
                            null == H
                              ? void 0
                              : null === (i = H.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, y.jsx)(M.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsx)(a7, {
                children: (0, y.jsxs)(eu.fC, {
                  children: [
                    (0, y.jsx)(eu.xz, {
                      asChild: !0,
                      children: (0, y.jsx)(es.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, y.jsx)(eg.JEI, {}),
                      }),
                    }),
                    (0, y.jsx)(eu.h_, {
                      children: (0, y.jsxs)(eu.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          R &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: er,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !R &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: et,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          F &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: en,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Delete Link",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          eo = L;
        return (
          null == eo &&
            ((null == O ? void 0 : O.has_been_auto_blocked) ||
              (null == O ? void 0 : O.has_been_auto_moderated) ||
              (null == O ? void 0 : O.has_been_blocked)) &&
            (eo = (0, y.jsx)(_.Z, (0, v._)({}, aJ.moderationBlocked))),
          (0, y.jsxs)(eI.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: c.formatMessage(aJ.sharingModalTitle),
            closeButton: (0, y.jsx)(eN.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != eo &&
                (0, y.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: eo,
                }),
              (0, y.jsx)("div", {
                className: (0, z.Z)("w-full"),
                children: (0, y.jsx)("p", {
                  className: (0, z.Z)("mb-6 text-gray-500"),
                  children: F
                    ? (0, y.jsx)(
                        _.Z,
                        (0, em._)((0, v._)({}, aJ.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: P,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      c.formatMessage(aJ.confirmDeleteLink)
                                    ) && en();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, y.jsx)(_.Z, (0, v._)({}, aJ.sharingModalDescription)),
                }),
              }),
              (0, y.jsx)(y.Fragment, {
                children:
                  W &&
                  (0, y.jsx)("div", {
                    className:
                      "mb-4 rounded-md bg-[#FFF3C9] p-4 text-[#756B5C]",
                    children: (0, y.jsx)(
                      _.Z,
                      (0, v._)({}, aJ.codeInterpreterSupportDisclaimer)
                    ),
                  }),
              }),
              (0, y.jsx)(a5, {
                children: (0, y.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, y.jsx)(a1, {
                    children: (0, y.jsxs)(a2, {
                      children: [
                        (0, y.jsx)(eh.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != E
                              ? (0, y.jsx)(aB, {
                                  onChangeItemInView: X(),
                                  onRequestMoreCompletions: X(),
                                  onUpdateNode: X(),
                                  onChangeRating: X(),
                                  onDeleteNode: X(),
                                  onRequestCompletion: X(),
                                  onHandleChangeVariantFeedbackInlineComparisonRating:
                                    X(),
                                  clientThreadId: o,
                                  conversationLeafId: E,
                                  activeRequests: s,
                                  currentThreadModel: l,
                                  inlineEmbeddedDisplay: !0,
                                  isStaticSharedThread: !0,
                                  isNewThread: !1,
                                  initiallyHighlightedMessageId: A,
                                })
                              : (0, y.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, y.jsx)(eS.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        ei,
                      ],
                    }),
                  }),
                }),
              }),
              (0, y.jsx)(eN.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: J,
                secondaryButton: (0, y.jsx)("div", {
                  children: (0, y.jsxs)("a", {
                    href: aX,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      c.formatMessage(aJ.sharingModalMoreInfo),
                      (0, y.jsx)(el.ZP, { icon: C.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var a1 = en.Z.main(az()),
        a2 = en.Z.div(aQ()),
        a5 = en.Z.div(aH()),
        a3 = en.Z.div(aG(), function (e) {
          return e.$active, "";
        }),
        a4 = en.Z.div(aW()),
        a6 = en.Z.input(a$()),
        a7 = en.Z.div(aV());
      function a8() {
        var e = (0, q._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (a8 = function () {
            return e;
          }),
          e
        );
      }
      var a9 = (0, M.vU)({
          learnMore: {
            id: "sharedConversationAnnouncement.learnMore",
            defaultMessage: "Learn more",
            description: "Link text to shared links help page",
          },
          shareConversations: {
            id: "sharedConversationAnnouncement.shareConversations",
            defaultMessage: "Share a link to this chat",
            description:
              "Text displayed in tooltip announcing shared conversations",
          },
          new: {
            id: "sharedConversationAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        ie = "oai/apps/announcement/sharedConversations";
      function it(e) {
        var n = e.children,
          t = function () {
            var e = Date.now();
            ec.m.setItem(ie, e), o(e);
          },
          r = (0, E.w$)(),
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ec.m.getItem(ie);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, w.useRef)(null),
          l = (0, ee.Z)();
        return (0, y.jsxs)(eu.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || t();
          },
          children: [
            (0, y.jsx)(eu.xz, { asChild: !0, ref: s, children: n }),
            (0, y.jsx)(eu.h_, {
              children: (0, y.jsxs)(eu.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var n;
                  e.target instanceof Element &&
                  (null === (n = s.current) || void 0 === n
                    ? void 0
                    : n.contains(e.target))
                    ? t()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, y.jsxs)("div", {
                    children: [
                      (0, y.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, y.jsx)(ir, {
                            children: (0, y.jsx)(_.Z, (0, v._)({}, a9.new)),
                          }),
                          (0, y.jsx)("div", {
                            className: "font-medium",
                            children: (0, y.jsx)(
                              _.Z,
                              (0, v._)({}, a9.shareConversations)
                            ),
                          }),
                          (0, y.jsx)(eu.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                          }),
                        ],
                      }),
                      (0, y.jsxs)("a", {
                        href: aX,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(a9.learnMore),
                          (0, y.jsx)(el.ZP, { icon: C.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsx)(eu.Eh, {
                    asChild: !0,
                    children: (0, y.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var ir = en.Z.span(a8()),
        ia = t(36112);
      function ii() {
        var e = (0, q._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (ii = function () {
            return e;
          }),
          e
        );
      }
      function io() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (io = function () {
            return e;
          }),
          e
        );
      }
      function is() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (is = function () {
            return e;
          }),
          e
        );
      }
      function il() {
        var e = (0, q._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (il = function () {
            return e;
          }),
          e
        );
      }
      function iu() {
        var e = (0, q._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (iu = function () {
            return e;
          }),
          e
        );
      }
      function ic() {
        var e = (0, q._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (ic = function () {
            return e;
          }),
          e
        );
      }
      function id() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }
      function im() {
        var e = (0, q._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      function ih() {
        var e = (0, q._)(["p-1 hover:text-white"]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      var ig = (0, M.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        ip = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function iv(e) {
        var n,
          t,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          o = (0, ee.Z)(),
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(0), 2),
          d = c[0],
          m = c[1],
          f = (0, eo.Z)(),
          h = (0, ia.MO)(),
          g = h.conversations,
          p = h.hasNextPage,
          x = h.fetchNextPage,
          j = h.isLoading,
          k = h.isFetchingNextPage,
          C = h.isError,
          M = (0, T.hz)().has(ei.DY),
          N = (0, w.useRef)(null),
          I = (0, w.useCallback)(
            function (e) {
              var n;
              M &&
                !j &&
                null != e &&
                (null === (n = N.current) || void 0 === n || n.disconnect(),
                (N.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && p && x();
                })),
                N.current.observe(e));
            },
            [M, j, p, x]
          );
        (0, w.useEffect)(function () {
          return function () {
            var e;
            null === (e = N.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var S = (0, ia.iF)();
        (0, ia.Od)();
        var Z =
          ((n = (0, w.useRef)()),
          (t = (0, w.useRef)()),
          ((0, w.useEffect)(
            function () {
              (n.current = t.current), (t.current = g);
            },
            [g]
          ),
          g === t.current)
            ? n.current
            : t.current);
        (0, w.useEffect)(
          function () {
            f(function () {
              m(d + 1);
            }, (0, H.Z)((0, G.Z)(), Date.now()) + 1e3);
          },
          [d, f]
        );
        var P = 0 === g.length,
          R = (0, w.useMemo)(
            function () {
              return g.reduce(
                function (e, n) {
                  var t,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (t = n.update_time) && void 0 !== t
                            ? t
                            : n.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, Q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(n);
                  else if (i <= 1) e.recent.yesterday.items.push(n);
                  else if (i <= 7) e.recent.lastSeven.items.push(n);
                  else if (i <= 30) e.recent.lastThirty.items.push(n);
                  else if ((0, V.Z)(a)) {
                    var s = (0, $.Z)(a),
                      l = (0, W.Z)(a),
                      u = "".concat(s, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(n)
                      : (e.dynamicMonths[u] = {
                          label: o.formatDate(a, { month: "long" }),
                          items: [n],
                        });
                  } else {
                    var c = (0, $.Z)(a),
                      d = "".concat(c, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(n)
                      : (e.dynamicYears[d] = {
                          label: o.formatDate(a, { year: "numeric" }),
                          items: [n],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ig.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ig.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ig.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ig.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [d, g]
          );
        return (0, y.jsxs)(ix, {
          $centered: j || (C && P),
          children: [
            P && j && (0, y.jsx)(eS.Z, { className: "m-auto" }),
            P &&
              C &&
              (0, y.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, y.jsx)(_.Z, (0, v._)({}, ig.unableToLoadHistory)),
                  !l &&
                    (0, y.jsx)("div", {
                      className: "mt-1",
                      children: (0, y.jsx)(es.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), S();
                        },
                        children: (0, y.jsx)(_.Z, (0, v._)({}, ig.retryButton)),
                      }),
                    }),
                ],
              }),
            !j &&
              (0, y.jsx)("div", {
                children: (0, y.jsx)(J.M, {
                  initial: !1,
                  children: [R.recent, R.dynamicMonths, R.dynamicYears].flatMap(
                    function (e, n) {
                      return (0, y.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var n = (0, b._)(e, 2),
                              t = n[0],
                              o = n[1],
                              s = o.items,
                              l = o.label;
                            if ("today" !== t && !s.length) return null;
                            var u = !!s.find(function (e) {
                              var n;
                              return (
                                g.length > 0 &&
                                e.id ===
                                  (null === (n = g[0]) || void 0 === n
                                    ? void 0
                                    : n.id)
                              );
                            });
                            return (0, y.jsxs)(
                              Y.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(t),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  s.length > 0 &&
                                    (0, y.jsx)(Y.E.div, {
                                      className: (0, z.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(t),
                                      layout: "position",
                                      children: (0, y.jsx)(iC, { children: l }),
                                    }),
                                  (0, y.jsx)("ol", {
                                    children: s.map(function (e, n) {
                                      var t = r === e.id,
                                        o =
                                          null == Z
                                            ? void 0
                                            : Z.find(function (n) {
                                                return n.id === e.id;
                                              });
                                      return (0,
                                      y.jsx)(Y.E.li, { className: (0, z.Z)("relative", u && 0 === n ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !o }, variants: ip, initial: "initial", animate: "animate", exit: "exit", children: (0, y.jsx)(ib, { id: e.id, title: e.title, active: t, onNewThread: a, setActiveRequests: i, forwardRef: p && g[g.length - 5 - 1].id === e.id ? I : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        },
                        "category-".concat(n)
                      );
                    }
                  ),
                }),
              }),
            M
              ? k &&
                (0, y.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, y.jsx)(eS.Z, {}),
                })
              : (0, y.jsx)(y.Fragment, {
                  children:
                    p &&
                    (0, y.jsx)(es.z, {
                      as: "button",
                      onClick: function () {
                        return x();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: k,
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ig.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var ix = en.Z.div(ii(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function ib(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          o = e.setActiveRequests,
          s = (0, E.w$)(),
          l = (0, et.WS)(),
          u = (0, k.useRouter)(),
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, b._)((0, w.useState)(!1), 2),
          g = h[0],
          p = h[1],
          v = (0, T.hz)().has(ei.RJ) && r,
          x = (0, ia.iF)(),
          j = (0, w.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = f.current.value;
                ea.ZP.patchConversation(n, { title: i }),
                  N.tQ.setTitle(n, i, N._L.User),
                  l(er.s6.renameThread, { threadId: n, content: i }),
                  x();
              }
            },
            [l, n, x, t]
          ),
          _ = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && j();
            },
            [j]
          ),
          M = (0, w.useCallback)(
            function () {
              ea.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                x();
              }),
                a();
            },
            [n, a, x]
          ),
          I = (0, w.useCallback)(
            function (e) {
              R.abortAllAndReset(),
                o(new Set()),
                e.preventDefault(),
                l(er.s6.loadThread, { threadId: n }),
                u.push("/c/".concat(n), void 0, { shallow: !0 });
            },
            [l, n, u, o]
          ),
          S = B(n, t, r),
          Z = S.resolvedTitle,
          P = S.isTypingEffect;
        if (d)
          return (0, y.jsxs)(ij, {
            $active: r,
            children: [
              (0, y.jsx)(el.ZP, { icon: C.IC0, className: "flex-shrink-0" }),
              (0, y.jsx)(ik, {
                ref: f,
                type: "text",
                defaultValue: null != Z ? Z : "",
                autoFocus: !0,
                onKeyDown: _,
                className: "mr-0",
                onBlur: j,
              }),
              (0, y.jsxs)(iM, {
                $active: !0,
                children: [
                  (0, y.jsx)(iT, {
                    onClick: j,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iT, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            ],
          });
        var A = P && r && s;
        return (0, y.jsxs)(iy, {
          onClick: r ? X() : I,
          $active: r,
          $sharing: v,
          className: (0, z.Z)("group", A && "animate-flash"),
          ref: i,
          children: [
            (0, y.jsx)(el.ZP, { icon: g ? C.Ybf : C.IC0 }),
            (0, y.jsxs)(iw, {
              children: [
                A
                  ? (0, y.jsx)(O, { text: null != Z ? Z : "" })
                  : g
                  ? 'Delete "'.concat(Z, '"?')
                  : Z,
                (!P || !r) && (0, y.jsx)(i_, { $active: r }),
              ],
            }),
            g &&
              (0, y.jsxs)(iM, {
                $active: !0,
                children: [
                  (0, y.jsx)(iT, {
                    onClick: M,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iT, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, y.jsxs)(iM, {
                $active: r,
                children: [
                  (0, y.jsx)(iT, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Nte }),
                  }),
                  v &&
                    (0, y.jsx)(it, {
                      children: (0, y.jsx)(iT, {
                        onClick: function (e) {
                          e.preventDefault(), D.vm.openSharingModal(n);
                        },
                        children: (0, y.jsx)(el.ZP, { icon: C.A8q }),
                      }),
                    }),
                  (0, y.jsx)(iT, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var iy = en.Z.a(
          io(),
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && !t ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        ij = en.Z.div(is(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        ik = en.Z.input(il()),
        iw = en.Z.div(iu()),
        iC = en.Z.h3(ic()),
        i_ = en.Z.div(id(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        iM = en.Z.div(im(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        iT = en.Z.button(ih()),
        iN = t(61119),
        iI = t(62059),
        iS = t(6128),
        iZ = t(5437),
        iP = t.n(iZ),
        iR = t(11253),
        iD = t.n(iR),
        iA = t(15300),
        iE = t(44675),
        iB = "https://tcr9i.chat.openai.com/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((l = p || (p = {})).Idle = "idle"),
        (l.Loading = "loading"),
        (l.ScriptLoaded = "script_loaded"),
        (l.Ready = "ready"),
        (l.Done = "done"),
        (l.Error = "error"),
        (l.Failed = "failed"),
        (l.CAPTCHA = "captcha");
      var iF = new ((function () {
          function e() {
            (0, F._)(this, e), (this.status = p.Idle);
            var n,
              t = this;
            this.getEnforcementToken =
              ((n = (0, ed._)(function (e) {
                var n;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, t._getArkosePromise()];
                    case 1:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            t.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              t.setOnError(function (i) {
                                if (e) {
                                  var o, s, l, u, c;
                                  iA.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = iE.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (u =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== u
                                        ? u
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (c =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== c
                                        ? c
                                        : "Unknown Arkose error"
                                    ),
                                    t._showUserError();
                                } else n.reset(), t.getEnforcementToken(!0).then(r, a);
                              }),
                              t.setOnFailed(function () {
                                var e;
                                iA.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = iE.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  t._showUserError();
                              }),
                              n.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              });
          }
          var n = e.prototype;
          return (
            (n._getArkosePromise = function (e) {
              var n = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (t, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      n.setStatus(p.Loading);
                    var a = document.createElement("script");
                    (a.src = iB),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", p.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        t(e),
                          n.setStatus(p.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              n.onCompleted(e);
                            },
                            onError: function (e) {
                              n.onError(e);
                            },
                            onFailed: function (e) {
                              n.onFailed(e);
                            },
                            onShown: function (e) {
                              n.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (o) {
                      if ("load" === o.type && n.status !== p.Ready)
                        n._startReadyTimeout(), n.setStatus(p.ScriptLoaded);
                      else if ("error" === o.type) {
                        if ((n.setStatus(p.Error), e)) {
                          var s;
                          iA.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (s = iE.env.APP_RELEASE) && void 0 !== s
                                ? s
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            n._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (n.arkoseInstancePromise = void 0),
                            n._getArkosePromise(!0).then(t, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (n._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === p.ScriptLoaded) {
                  var n;
                  iA.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (n = iE.env.APP_RELEASE) && void 0 !== n
                        ? n
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (n._showUserError = function () {
              tw.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (n.gatherData = function () {
              return this._getArkosePromise();
            }),
            (n.setStatus = function (e) {
              this.status = e;
            }),
            (n.onCompleted = function (e) {
              var n;
              null === (n = this._onCompleted) ||
                void 0 === n ||
                n.call(this, e);
            }),
            (n.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (n.onError = function (e) {
              var n;
              null === (n = this._onError) || void 0 === n || n.call(this, e);
            }),
            (n.setOnError = function (e) {
              this._onError = e;
            }),
            (n.onFailed = function (e) {
              var n;
              null === (n = this._onFailed) || void 0 === n || n.call(this, e);
            }),
            (n.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (n.onShown = function (e) {
              var n;
              null === (n = this._onShown) || void 0 === n || n.call(this, e);
            }),
            (n.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        iL = t(75179),
        iO = t(87316);
      function iU(e) {
        var n = e.id,
          t = e.label,
          r = e.disabled;
        return (0, y.jsxs)("div", {
          className: "form-check",
          children: [
            (0, y.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: n,
            }),
            (0, y.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      function iq() {
        var e = (0, q._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (iq = function () {
            return e;
          }),
          e
        );
      }
      function iz() {
        var e = (0, q._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (iz = function () {
            return e;
          }),
          e
        );
      }
      function iQ() {
        var e = (0, q._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (iQ = function () {
            return e;
          }),
          e
        );
      }
      function iH() {
        var e = (0, q._)([""]);
        return (
          (iH = function () {
            return e;
          }),
          e
        );
      }
      var iG = (0, M.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared chat",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function iW(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              (0, eF.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function i$(e) {
        var n,
          t,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          o = e.handleSubmitFeedback,
          s = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          c = e.activeRequests,
          d = e.currentModelId,
          m = e.onChangeItemInView,
          f = e.onRequestMoreCompletions,
          h = e.onDeleteNode,
          g = e.onRequestCompletion,
          p = e.onUpdateNode,
          x = (0, ee.Z)(),
          j = N.tQ.getTree(u),
          k = (0, N.XK)(u);
        (0, w.useEffect)(
          function () {
            "report" === a && ep.pg.forceEnableSession();
          },
          [a]
        );
        var M = (0, w.useRef)(0.5 > Math.random() ? "left" : "right"),
          I = null == j ? void 0 : j.getConversationTurns(r || "root"),
          S = I.length - 1,
          Z = I[I.length - 1],
          P = (0, T.hz)().has(ei.FZ),
          R = (0, b._)((0, w.useState)("critique"), 2),
          D = R[0],
          A = R[1],
          B = (0, E.w$)(),
          F = (0, T.hz)().has(ei.Pt) && iW(Z, !0) && B,
          L = (0, et.WS)(),
          O = (0, w.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: N.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          U =
            null == I
              ? void 0
              : I[(null == I ? void 0 : I.length) - 1].variantIds,
          q = null == U ? void 0 : U[(null == U ? void 0 : U.length) - 1],
          Q = (t = (n = null == j ? void 0 : j.getConversationTurns(q))[
            n.length - 1
          ]).messages[t.messages.length - 1].nodeId,
          H = null == j ? void 0 : j.getConversationTurns(Q),
          G = (0, w.useMemo)(
            function () {
              var e =
                null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1];
              return "thumbsDown" === a && F && iW(e) && iW(Z);
            },
            [a, F, H, Z]
          ),
          W = (0, w.useRef)(Date.now()),
          $ = (0, w.useRef)(-1),
          V = (0, w.useRef)(Date.now()),
          J = (0, w.useRef)(Date.now());
        (0, w.useEffect)(
          function () {
            "compare" === D
              ? (($.current = Date.now()), L(er.s6.displayedComparisonUIV0, O))
              : "critique" === D &&
                "thumbsDown" === a &&
                L(er.s6.displayedThumbsDownFeedbackForm, O);
          },
          [D]
        );
        var Y = I.length - 2,
          K = H.length - 1,
          en = H[H.length - 1],
          eo = (0, w.useMemo)(
            function () {
              return en && eL.Cv.getRequestIdFromConversationTurn(en);
            },
            [en]
          ),
          es = (0, w.useMemo)(
            function () {
              return c.has(eo);
            },
            [c, eo]
          );
        (0, w.useMemo)(
          function () {
            es || (J.current = Date.now());
          },
          [es]
        );
        var el = Z.messages,
          eu = el[el.length - 1],
          ec = eu.message.id,
          ed = eu.nodeId,
          ef = j.getLeafFromNode(ed),
          eh = en.messages,
          eg = eh[eh.length - 1],
          ev = eg.message.id,
          ex = eg.nodeId,
          eb = j.getLeafFromNode(ex),
          ey =
            "critique" === D
              ? "report" === a
                ? x.formatMessage(iG.provideReportModalTitle)
                : x.formatMessage(iG.provideAdditionalFeedback)
              : x.formatMessage(iG.pickBestAnswer),
          ej = (0, w.useRef)([]),
          ek = (0, w.useRef)(""),
          ew = (0, w.useCallback)(
            function () {
              var e,
                n =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eZ._)(n || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ek.current =
                  (null == n ? void 0 : n["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, w.useCallback)(
            function () {
              ew(),
                o(ek.current, ej.current),
                "thumbsDown" === a && L(er.s6.submitThumbsDownFeedbackForm, O),
                G ? A("compare") : i();
            },
            [ew, o, a, G, L, O, i]
          ),
          e_ = (0, w.useCallback)(
            function (e, n) {
              var t = N.tQ.getServerThreadId(u);
              if (null != t) {
                var r = N.tQ.getThreadCurrentLeafId(u);
                ea.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: t,
                  text: e,
                  tags: n,
                })
                  .then(function () {
                    tw.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    tw.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [u, i]
          ),
          eM = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-reject"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eT = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-accept"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eS =
            "moderate" === a
              ? (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(eN.ZP.Button, {
                      title: x.formatMessage(iG.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, y.jsx)(eN.ZP.Button, {
                      title: x.formatMessage(iG.submitAcceptModeration),
                      color: "primary",
                      onClick: eT,
                    }),
                  ],
                })
              : "critique" === D
              ? (0, y.jsx)(eN.ZP.Button, {
                  title: x.formatMessage(
                    "report" === a ? iG.submitReport : iG.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eP = "left" === M.current,
          eR = eP ? "new" : "original",
          eD = eP ? "original" : "new",
          eA = eP
            ? x.formatMessage(iG.newAnswer)
            : x.formatMessage(iG.originalAnswer),
          eE = eP
            ? x.formatMessage(iG.originalAnswer)
            : x.formatMessage(iG.newAnswer),
          eB = eP
            ? x.formatMessage(iG.newAnswerBetter)
            : x.formatMessage(iG.originalAnswerBetter),
          eF = eP
            ? x.formatMessage(iG.originalAnswerBetter)
            : x.formatMessage(iG.newAnswerBetter),
          eO = a && "report" !== a && "moderate" !== a,
          eU = (0, w.useCallback)(
            function (e) {
              var n = "left" === e ? eR : "right" === e ? eD : "same";
              if (
                (L(
                  er.s6.submittedComparisonUIV0,
                  Object.assign({}, O, { choice: n })
                ),
                eO)
              ) {
                var t = N.tQ.getTree(u),
                  r = t.getMetadata(ed);
                t.updateNode(ed, {
                  metadata: {
                    $set: (0, em._)((0, v._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var o = t.getMetadata(ex);
                t.updateNode(ex, {
                  metadata: {
                    $set: (0, em._)((0, v._)({}, o), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  s(
                    ec,
                    ev,
                    a,
                    n,
                    M.current,
                    W.current,
                    $.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              N.tQ.setThreadCurrentLeafId(u, e === M.current ? eb.id : ef.id),
                i();
            },
            [eR, eD, L, O, eO, u, eb.id, ef.id, i, ed, ex, s, ec, ev, a]
          ),
          eq = !es && null != J.current && G,
          ez = (0, w.useCallback)(
            function () {
              i(),
                "critique" === D
                  ? L(er.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O))
                  : "compare" === D &&
                    L(er.s6.skippedComparisonUIV0, Object.assign({}, O));
            },
            [i, L, O, D]
          ),
          eQ = (0, b._)((0, w.useState)([]), 2),
          eH = eQ[0],
          eG = eQ[1];
        return (
          (0, w.useEffect)(function () {
            "moderate" === a &&
              ea.ZP.fetchShareModerationCategories().then(function (e) {
                var n = e.moderation_categories;
                eG(
                  Object.keys(n).map(function (e) {
                    return [e, n[e]];
                  })
                );
              });
          }, []),
          (0, y.jsxs)(
            eI.Z,
            {
              isOpen: !0,
              onClose: ez,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === D
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === D ? ("thumbsUp" === a ? C.fmn : C.oLd) : void 0,
              title: ey,
              closeButton: (0, y.jsx)(eN.ZP.CloseButton, { onClose: ez }),
              children: [
                "critique" === D &&
                  (0, y.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, y.jsx)(tx.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? x.formatMessage(iG.thumbsUpPlaceholder)
                            : "report" === a
                            ? x.formatMessage(
                                iG.reportContentExplanationPlaceholder
                              )
                            : x.formatMessage(iG.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, y.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, y.jsx)(iU, {
                              id: "feedback-harmful",
                              label: x.formatMessage(iG.harmfulUnsafe),
                            }),
                            (0, y.jsx)(iU, {
                              id: "feedback-false",
                              label: x.formatMessage(iG.notTrue),
                            }),
                            (0, y.jsx)(iU, {
                              id: "feedback-not-helpful",
                              label: x.formatMessage(iG.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eO &&
                        (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)(iU, {
                                      id: "feedback-dont-like-this",
                                      label: x.formatMessage(iG.dontLikeThis),
                                    }),
                                    (0, y.jsx)(iU, {
                                      id: "feedback-false",
                                      label: x.formatMessage(iG.notTrue),
                                    }),
                                    (0, y.jsx)(iU, {
                                      id: "feedback-not-helpful",
                                      label: x.formatMessage(iG.notHelpful),
                                    }),
                                    (0, y.jsx)(iU, {
                                      id: "feedback-harmful-offensive",
                                      label: x.formatMessage(
                                        iG.harmfulOffensive
                                      ),
                                    }),
                                    (0, y.jsx)(iU, {
                                      id: "feedback-sexual-abuse",
                                      label: x.formatMessage(iG.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    eH.map(function (e) {
                                      var n = (0, b._)(e, 2),
                                        t = n[0],
                                        r = n[1];
                                      return (0,
                                      y.jsx)(iU, { id: "feedback-" + t, label: r }, t);
                                    }),
                                    (0, y.jsx)(iU, {
                                      id: "feedback-copyright",
                                      label: x.formatMessage(
                                        iG.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, y.jsx)(iU, {
                                id: "feedback-content-other",
                                label: x.formatMessage(iG.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === D &&
                  H &&
                  void 0 !== k &&
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)("w-full"),
                    children: [
                      (0, y.jsx)("p", {
                        className: (0, z.Z)("mb-7 mt-3"),
                        children: (0, y.jsx)(
                          _.Z,
                          (0, v._)({}, iG.continueWithChosenAnswer)
                        ),
                      }),
                      (0, y.jsx)(iY, {
                        className: P ? "rounded-2xl" : "rounded-md",
                        children: (0, y.jsx)(iK, {
                          children: (0, y.jsx)(nG, {
                            currentModelId: d,
                            turnIndex: Y,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: m,
                            onChangeRating: X(),
                            onRequestMoreCompletions: f,
                            onDeleteNode: h,
                            onRequestCompletion: g,
                            onUpdateNode: p,
                            activeRequests: c,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              X(),
                          }),
                        }),
                      }),
                      (0, y.jsxs)("div", {
                        className: (0, z.Z)(),
                        children: [
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eE,
                                }),
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsxs)(iJ, {
                                children: [
                                  (0, y.jsx)(iK, {
                                    children: (0, y.jsx)(nG, {
                                      currentModelId: d,
                                      turnIndex: eP ? K : S,
                                      conversationLeafId: eP ? ex : ed,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(iV, {
                                    children: (0, y.jsx)(eN.ZP.Button, {
                                      disabled: !eq,
                                      title: eB,
                                      onClick: function () {
                                        return eU("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(iJ, {
                                children: [
                                  (0, y.jsx)(iK, {
                                    children: (0, y.jsx)(nG, {
                                      currentModelId: d,
                                      turnIndex: eP ? S : K,
                                      conversationLeafId: eP ? ed : ex,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(iV, {
                                    children: (0, y.jsx)(eN.ZP.Button, {
                                      disabled: !eq,
                                      title: eF,
                                      onClick: function () {
                                        return eU("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsx)("div", {
                            className: (0, z.Z)("grid w-full"),
                            children: (0, y.jsxs)("div", {
                              className: (0, z.Z)("mb-2 text-right"),
                              children: [
                                (0, y.jsx)(eN.ZP.Button, {
                                  disabled: !eq,
                                  title: x.formatMessage(
                                    iG.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eU("same");
                                  },
                                  className: (0, z.Z)("mr-2"),
                                }),
                                (0, y.jsx)(eN.ZP.Button, {
                                  title: x.formatMessage(iG.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, y.jsx)(eN.ZP.Actions, { primaryButton: eS }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var iV = en.Z.div(iq()),
        iJ = en.Z.div(iz()),
        iY = en.Z.div(iQ()),
        iK = en.Z.div(iH()),
        iX = t(37541);
      function i0() {
        var e,
          n,
          t,
          r,
          a,
          i,
          o =
            ((n = (e = (0, r9.S)()).isLoggedInWithMfa),
            (t = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, rU.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (n || !t) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, rU.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          c = (0, w.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, y.jsx)(eI.Z, {
              isOpen: !0,
              onClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, y.jsx)(eN.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, y.jsx)(eN.ZP.Button, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, y.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  y.jsx)("div", { className: "w-full", children: (0, y.jsx)(rH.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var i1 = t(16578),
        i2 = t.n(i1),
        i5 = t(44925),
        i3 = t(74853),
        i4 = t(99652),
        i6 = t(1220);
      function i7(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, et.WS)(),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, k.useRouter)(),
          l = (0, w.useCallback)(
            function () {
              r(er.s6.closeAccountPaymentModal), t();
            },
            [t, r]
          ),
          u = (0, w.useCallback)(
            (0, ed._)(function () {
              var e;
              return (0, ef.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    o(!0), r(er.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, ea.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), s.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      tw.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return o(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [s, r, o]
          ),
          c = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          d = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountManageIos);
            },
            [r]
          ),
          m = (0, T.hz)(),
          f = (0, T.e2)(),
          h = (0, T.YD)();
        return (0, y.jsxs)(i3.x, {
          isOpen: n,
          onClose: t,
          children: [
            (0, y.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, y.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, y.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: l,
                  children: (0, y.jsx)(C.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: "grid",
              children: (0, y.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, y.jsx)(i4.Oi, {
                  rowElements: [
                    (0, y.jsx)(
                      i4.Cu,
                      {
                        text: i6.S.plus.name,
                        children: (0, y.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: i6.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, y.jsx)(
                      i4.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: i6.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, y.jsx)(
                      i4.G,
                      { text: i6.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, y.jsx)(
                      i4.G,
                      { text: i6.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, y.jsx)(
                      i4.G,
                      { className: "sm:pb-1", text: i6.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == f ? void 0 : f.purchase_origin_platform) ===
                      i5._4.MOBILE_IOS &&
                      (0, y.jsx)(
                        i2(),
                        {
                          href: i5.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, y.jsx)(i4.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: i6.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!f ||
                      f.purchase_origin_platform === i5._4.WEBAPP ||
                      f.purchase_origin_platform === i5._4.GRANTED) &&
                      h &&
                      (0, y.jsx)(
                        i4.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: i6.S.manageSubscriptionWeb.callToAction,
                          onClick: u,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, y.jsx)(
                      i2(),
                      {
                        href: i5.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, y.jsx)(
                          i4.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: i6.S.getHelp.callToAction,
                            onClick: c,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                    m.has("business_seats")
                      ? (0, y.jsx)(
                          i2(),
                          {
                            href: "/payments/business",
                            target: "_blank",
                            passHref: !0,
                            children: (0, y.jsx)(
                              i4.nR,
                              {
                                className: "sm:pb-1",
                                isLoading: !1,
                                text: i6.S.business.callToAction,
                                onClick: c,
                              },
                              "row-plus-plan-help"
                            ),
                          },
                          "row-plus-plan-create-business-team"
                        )
                      : null,
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var i8 = t(48432),
        i9 = t(24148);
      function oe() {
        var e = (0, q._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      var on = (0, M.vU)({
        newChat: {
          defaultMessage: "New chat",
          id: "Stage.newChat",
          description: "New chat button tooltip",
        },
        openSidebar: {
          defaultMessage: "Show sidebar",
          id: "Stage.openSidebar",
          description: "Open sidebar button tooltip",
        },
        openDebug: {
          defaultMessage: "Open debug sidebar",
          id: "Stage.openDebug",
          description: "Open debug sidebar button tooltip",
        },
      });
      function ot(e) {
        var n = e.isStaticSharedThread,
          t = (0, ee.Z)(),
          r = (0, D.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          a = r.isDesktopNavCollapsed,
          i = r.activeSidebar,
          o = (0, T.hz)(),
          s = o.has(ei.Ue),
          l = o.has("debug") && "debug" !== i;
        return n
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(J.M, {
                  initial: !1,
                  children:
                    s &&
                    a &&
                    (0, y.jsx)(Y.E.div, {
                      className:
                        "absolute left-2 top-2 z-10 hidden md:inline-block",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.165, ease: "easeIn" },
                      },
                      children: (0, y.jsx)(nT.u, {
                        side: "right",
                        label: t.formatMessage(on.openSidebar),
                        children: (0, y.jsx)(or, {
                          onClick: D.vm.toggleDesktopNavCollapsed,
                          "aria-label": t.formatMessage(on.openSidebar),
                          children: (0, y.jsx)(el.ZP, {
                            className: "text-black dark:text-white",
                            icon: C.iYc,
                          }),
                        }),
                      }),
                    }),
                }),
                (0, y.jsx)("div", {
                  className:
                    "absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex",
                  children:
                    l &&
                    (0, y.jsx)(nT.u, {
                      side: "left",
                      label: t.formatMessage(on.openDebug),
                      children: (0, y.jsx)(or, {
                        onClick: function () {
                          return D.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": t.formatMessage(on.openDebug),
                        children: (0, y.jsx)(el.ZP, {
                          className: "text-black dark:text-white",
                          icon: C.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var or = en.Z.button(oe()),
        oa = t(89678),
        oi = t.n(oa),
        oo = t(55989),
        os = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function ol(e) {
        return ou.apply(this, arguments);
      }
      function ou() {
        return (ou = (0, ed._)(function (e) {
          var n, t;
          return (0, ef.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, b._)(e.queryKey, 2))[0],
                  (t = n[1]),
                  [
                    4,
                    ea.ZP.getThreadInterpreterState(t).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          tw.m.warning(
                            "This code interpreter (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.",
                            { hasCloseButton: !0, duration: 0 }
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, r.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var oc = t(70060),
        od = t.n(oc)()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function om(e) {
        var n = e.children;
        return (0, y.jsx)(od, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      function of() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (of = function () {
            return e;
          }),
          e
        );
      }
      function oh() {
        var e = (0, q._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2",
        ]);
        return (
          (oh = function () {
            return e;
          }),
          e
        );
      }
      var og = (0, M.vU)({
        contentPolicyViolation: {
          id: "thread.modal.restrictedTerms.title",
          defaultMessage: "This prompt may violate our content policy.",
          description: "Title for the restricted terms modal",
        },
        acknowledge: {
          id: "thread.modal.common.acknowledge",
          defaultMessage: "Acknowledge",
          description: "Acknowledge button text",
        },
        doNotShareSensitive: {
          id: "thread.modal.onboarding.title",
          defaultMessage:
            "Do not share sensitive materials with this application",
          description: "Title for the onboarding warning modal",
        },
        freeResearchPreview: {
          id: "thread.chatgptFreeResearchPreview",
          defaultMessage:
            "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 24 Version</link>",
          description: "Free Research Preview disclaimer",
        },
        mayProduceInaccurateInformation: {
          id: "thread.chatgptMayProduceInaccurateInformation",
          defaultMessage:
            "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 24 Version</link>",
          description:
            "ChatGPT disclaimer for producing inaccurate information",
        },
        somethingWentWrong: {
          id: "thread.modal.unrecoverableError.title",
          defaultMessage: "Something went wrong",
          description: "Title for the UnrecoverableErrorModal",
        },
        tryAgainLater: {
          id: "thread.modal.unrecoverableError.description",
          defaultMessage:
            "We're sorry, but something went wrong. Please try again later.",
          description: "Description for the UnrecoverableErrorModal",
        },
        resetThread: {
          id: "thread.modal.unrecoverableError.resetThread",
          defaultMessage: "Reset thread",
          description: "Reset thread button text",
        },
        reportModalThankYouTitle: {
          id: "thread.modal.reportModalThankYou.title",
          defaultMessage: "Thank you for your report!",
          description: "Title for the post-report thank-you modal",
        },
        reportModalThankYouDescription: {
          id: "thread.modal.reportModalThankYou.description",
          defaultMessage: "Thank you for your report.",
          description: "Description for the post-report thank-you modal",
        },
        reportModalThankYouDismiss: {
          id: "thread.modal.reportModalThankYou.dismissButton",
          defaultMessage: "Close",
          description: "Close button for the post-report thank-you modal",
        },
        sharedConversationContinueConversation: {
          id: "thread.sharedConversation.continue",
          defaultMessage: "Continue this conversation",
          description:
            "Button for shared links to allow user to continue conversation in their own history",
        },
        sharedConversationReportConversation: {
          id: "thread.sharedConversation.report",
          defaultMessage: "Report conversation",
          description:
            "Button for shared links to report chat for legal, safety, or other reasons",
        },
        sharedConversationModerateConversation: {
          id: "thread.sharedConversation.moderate",
          defaultMessage: "Moderate conversation",
          description:
            "Button for shared links to moderate a chat for legal, safety, or other reasons",
        },
        reportSharedConversation: {
          id: "thread.reportSharedConversation",
          defaultMessage: "Report content",
          description: "Report shared chat footer link text",
        },
        termsOfUse: {
          id: "thread.termsOfUse",
          defaultMessage: "Terms of use",
          description: "Terms of use footer link text",
        },
        privacyPolicy: {
          id: "thread.privacyPolicy",
          defaultMessage: "Privacy policy",
          description: "Privacy policy footer link text",
        },
      });
      function op(e) {
        var n = e.onClickReportSharedConversation;
        return (0, y.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, y.jsx)("button", {
              onClick: function () {
                n();
              },
              children: (0, y.jsx)(
                _.Z,
                (0, v._)({}, og.reportSharedConversation)
              ),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, og.termsOfUse)),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, og.privacyPolicy)),
            }),
          ],
        });
      }
      var ov = function (e) {
          var n,
            t,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            c,
            d,
            m,
            f,
            h,
            g,
            p,
            x,
            j,
            M,
            I,
            S,
            P,
            B,
            F,
            L,
            O,
            U,
            q,
            Q,
            H,
            G,
            W,
            $,
            V,
            J,
            Y,
            K,
            en,
            eo,
            el = e.initialThreadData,
            eu = e.clientThreadId,
            eh = e.activeRequests,
            eg = e.setActiveRequests,
            ev = e.handleResetThread,
            ex = e.isStaticSharedThread,
            eb = e.initiallyHighlightedMessageId,
            ey = e.continueConversationUrl,
            ek = (0, ee.Z)(),
            ew = (0, T.hz)(),
            eC = (0, eR.Fl)().isPluginsAvailable,
            e_ = (0, E.w$)(),
            eM = (0, et.WS)(),
            eT = ew.has(ei.Pt) && e_,
            eS = (0, w.useContext)(A.QL).historyDisabled,
            eZ = (0, k.useRouter)(),
            eP =
              ex &&
              (null === (W = eZ.query) || void 0 === W
                ? void 0
                : null === ($ = W.shareParams) || void 0 === $
                ? void 0
                : $[1]) === "moderate",
            eD = (0, N.U0)(eu),
            eA = (0, N.Kt)(eu),
            eE = (0, N.oq)(eu),
            eO = (0, b._)((0, w.useState)(!1), 2),
            eU = eO[0],
            eq = eO[1],
            ez = (0, b._)((0, w.useState)(!1), 2),
            eQ = ez[0],
            eH = ez[1],
            eG = (0, b._)((0, w.useState)(), 2),
            eW = eG[0],
            e$ = eG[1],
            eV = (0, b._)((0, w.useState)(!1), 2),
            eJ = eV[0],
            eY = eV[1],
            eK = (0, b._)((0, w.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, b._)((0, w.useState)(), 2),
            e2 = e1[0],
            e5 = e1[1],
            e3 = (0, b._)((0, w.useState)(), 2),
            e4 = e3[0],
            e6 = e3[1],
            e7 = (0, w.useRef)(null),
            e8 = (0, T.nR)(),
            e9 = (0, iO.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            ne = ew.has(ei.FZ),
            nn = (0, b._)((0, w.useState)(!1), 2),
            nt = nn[0],
            nr = nn[1],
            na =
              ((i = (a = {
                exempt: !1,
                onRestrictedTermFound: (0, w.useCallback)(
                  function (e) {
                    nr(!0),
                      eM(er.s6.promptUsedRestrictedWords, {
                        threadId: N.tQ.getServerThreadId(eu),
                        content: e,
                      });
                  },
                  [eM, eu]
                ),
              }).exempt),
              (o = a.onRestrictedTermFound),
              (l = (s = (0, b._)((0, w.useState)(!1), 2))[0]),
              (u = s[1]),
              {
                hasRestrictedTerms: l,
                checkRestrictedTerms: (0, w.useCallback)(
                  function (e) {
                    var n;
                    return (os.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !i && n)
                      ? (u(!0), null == o || o(n), !0)
                      : (u(!1), !1);
                  },
                  [i, o]
                ),
              }),
            ni = na.hasRestrictedTerms,
            no = na.checkRestrictedTerms,
            ns = (0, b._)((0, w.useState)(!0), 2),
            nu = ns[0],
            nc = ns[1],
            nd = (0, b._)((0, w.useState)(!1), 2),
            nm = nd[0],
            nf = nd[1],
            nh = (0, nP.iu)(),
            ng = (0, rU.p0)(),
            np = (0, nP.Gg)(nh, !0),
            nv =
              null !== (eo = (0, nP.Bv)(el.lastModelUsed, eu)) && void 0 !== eo
                ? eo
                : np,
            nx = (0, nP.B9)(),
            nb = void 0 !== nv ? nx.get(nv) : void 0,
            ny = (0, ia.iF)(),
            nj = (0, w.useCallback)(
              function () {
                ny(), eM(er.s6.newThread);
              },
              [eM, ny]
            ),
            nk = N.tQ.getTitle(eu),
            nw = (0, b._)((0, w.useState)(), 2),
            nC = nw[0],
            n_ = nw[1],
            nM = (0, w.useCallback)(
              function (e, n) {
                var t = null != n ? n : "";
                eS ||
                  "" === t ||
                  ea.ZP.generateTitle(t, e, nv)
                    .then(function (e) {
                      var r = e.title;
                      N.tQ.setTitle(t, r, N._L.Generated),
                        ny(),
                        eM(er.s6.renameThread, {
                          threadId: n,
                          content: r,
                          model: nv,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eS, eM, nv, ny]
            ),
            nT = (0, w.useCallback)(
              function (e, n, t) {
                var r = ew.has(ei.uj);
                eS ||
                  !r ||
                  void 0 === t ||
                  (0, eF.lD)(t) ||
                  (0, eF.JD)(t) ||
                  ea.ZP.generateSuggestions(e, n, nv)
                    .then(function (e) {
                      n_({ messageId: n, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eS, nv]
            ),
            nN = (0, N.Uy)(eu),
            nI =
              ((c =
                eC &&
                (null == nb
                  ? void 0
                  : null === (V = nb.enabledTools) || void 0 === V
                  ? void 0
                  : V.includes("tools3"))
                  ? ng.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (m = (d = (0, T.hz)()).has(ei.PL)),
              (f = (0, w.useId)()),
              (h = (0, et.WS)()),
              (g = (0, rt.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (p = (0, rt.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (x = (0, w.useContext)(A.QL).historyDisabled),
              (j = (0, nP.B9)()),
              (M = (0, w.useRef)(0)),
              (I = (0, w.useRef)({})),
              (S = (0, w.useCallback)(
                function (e, n, t, r) {
                  var a,
                    i,
                    o = r.eventSource,
                    s = function () {
                      setTimeout(function () {
                        R.removeAborterById(t),
                          eg(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete I.current[t],
                          N.tQ.releaseThread(eu);
                      }, 0);
                    },
                    l = N.tQ.getTree(eu),
                    u = t,
                    c = l.getParentId(u),
                    f = n === eB.Os.Continue,
                    x = !0,
                    b = !1,
                    y = l.getMessage(u),
                    k = new Set(),
                    w = l.getIsBlockedFromNode(c),
                    C = !1,
                    _ = !1,
                    M = oi()(
                      function () {
                        w ||
                          C ||
                          N.tQ.updateTree(eu, function (e) {
                            e.updateNodeMessage(u, y);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function T() {
                    return (T = (0, ed._)(function (e, n, t) {
                      var r,
                        a,
                        i,
                        o,
                        s,
                        u = arguments;
                      return (0, ef.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, iL._I)(t, !1, e, l.getMessageId(n))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (o = a.isFlagged),
                              (i || o) && (_ = !0),
                              i
                                ? ((C = !0),
                                  r || (w = !0),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)((0, v._)({}, iL.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  h(
                                    r
                                      ? er.s6.completionBlockedByModeration
                                      : er.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : o
                                ? (N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(n, {
                                      metadata: { $set: iL.Mf },
                                    });
                                  }),
                                  h(
                                    r
                                      ? er.s6.completionFlaggedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  w &&
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(n, y);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = c.sent()),
                              (C = !0),
                              N.tQ.updateTree(eu, function (e) {
                                e.updateNode(n, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              h(er.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(s || ""),
                              }),
                              iD().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, ed._)(function (r) {
                      var a, S, Z, P, D, A, E, F, L, O, U, q, z, Q, H, G, W, $;
                      return (0, ef.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (S =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    message: { $set: y },
                                    metadata: {
                                      $set: {
                                        err: S,
                                        errType: "danger",
                                        errCode: ((0, oo.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                s(),
                                (0, oo.T)(a) &&
                                  (null == a ? void 0 : a.code) === rt.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (g(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    p();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((Z = r.isCompletion),
                                (P = r.messageId),
                                (D = r.conversationId),
                                (A = r.flagged),
                                ((E = r.blocked) || A) &&
                                  N.tQ.updateTree(eu, function (e) {
                                    var n = e.messageIdToNodeId(P);
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)(
                                          (0, v._)({}, E ? iL.sK : iL.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (A || E) &&
                                  h(
                                    Z
                                      ? E
                                        ? er.s6.completionBlockedByModeration
                                        : er.s6.completionFlaggedByModeration
                                      : E
                                      ? er.s6.promptBlockedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: D, id: P }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((F = r.message),
                                (L = r.conversationId),
                                x && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == F ? void 0 : F.author.role) ===
                                  eB.uU.System
                                )
                                  return l.appendSystemMessageToRoot(F), [2];
                                if (
                                  (null == F ? void 0 : F.author.role) ===
                                  eB.uU.User
                                )
                                  return [2];
                              }
                              x
                                ? ((U =
                                    (null ===
                                      (O = N.qN.getState().threads[eu]) ||
                                    void 0 === O
                                      ? void 0
                                      : O.continuingFromSharedConversationId) !=
                                    null),
                                  N.tQ.removeContinuingFromSharedConversationId(
                                    eu
                                  ),
                                  (x = !1),
                                  (b = l.isFirstCompletion || U),
                                  (null == F ? void 0 : F.id) && k.add(t),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, N.Zz)(eu) &&
                                      N.tQ.setServerIdForNewThread(eu, L)),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(u, F);
                                  }),
                                  b && nj(L),
                                  f ||
                                    (function (e, n, t) {
                                      T.apply(this, arguments);
                                    })(L, c, l.getTextFromLastNTurns(c, 1), !1),
                                  h(er.s6.generateCompletion, {
                                    id: t,
                                    threadId: L,
                                    completionType: n,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  R.addAborter(t, I.current[t]))
                                : f ||
                                  F.id === l.getMessageId(u) ||
                                  (k.add(F.id),
                                  M.flush(),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.addNode(F.id, F, u, eB.Jq.Completion);
                                  }),
                                  (u = F.id),
                                  N.tQ.setThreadCurrentLeafId(eu, u)),
                                (y = F);
                            }
                            if (
                              (M(),
                              "done" !== r.type ||
                                (w ||
                                  C ||
                                  (M.flush(),
                                  _ ||
                                    ((q = l.getMessageId(u)),
                                    b && nM(q, i),
                                    nT(i, q, y))),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    metadata: {
                                      $set: (0, em._)(
                                        (0, v._)({}, l.getMetadata(u)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                s(),
                                !d.has("tools3_dev")) ||
                                ((Q =
                                  null === (z = j.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(nP.S.GPT_4)),
                                m && Q && iF.gatherData(),
                                !(H = (0, nl.wR)(y))))
                            )
                              return [3, 4];
                            return [4, (0, nl.qZ)(H)];
                          case 1:
                            if (
                              ((G = V.sent()),
                              (W = u),
                              N.tQ.updateTree(eu, function (e) {
                                var n = !0,
                                  t = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = G[Symbol.iterator]();
                                    !(n = (a = i.next()).done);
                                    n = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, W, eB.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (W = o.id);
                                  }
                                } catch (e) {
                                  (t = !0), (r = e);
                                } finally {
                                  try {
                                    n || null == i.return || i.return();
                                  } finally {
                                    if (t) throw r;
                                  }
                                }
                              }),
                              N.tQ.setThreadCurrentLeafId(eu, W),
                              !(m && Q))
                            )
                              return [3, 3];
                            return [4, iF.getEnforcementToken()];
                          case 2:
                            ($ = V.sent()), (V.label = 3);
                          case 3:
                            B({
                              model: e,
                              completionType: eB.Os.Next,
                              parentNodeId: W,
                              metadata: {},
                              arkoseToken: null != $ ? $ : null,
                            }),
                              (V.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [h, nj, nM, eg, eu]
              )),
              (B = (0, w.useCallback)(
                ((P = (0, ed._)(function (e) {
                  var n, t, r, a, i, o, s, l, u, d, m, h, g, p, v, b, y;
                  return (0, ef.Jh)(this, function (j) {
                    switch (j.label) {
                      case 0:
                        return (
                          (n = e.model),
                          (t = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (o = void 0 === (i = e.focusOnNewCompletion) || i),
                          (s = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = N.tQ.getTree(eu)),
                          N.tQ.retainThread(eu),
                          (d = ""
                            .concat(eL.Vh)
                            .concat(f, "-")
                            .concat(M.current++)),
                          eg(function (e) {
                            var n = new Set(e);
                            return n.add(d), n;
                          }),
                          N.tQ.updateTree(eu, function (e) {
                            e.addNode(d, "", r, eB.Jq.Completion);
                          }),
                          o && N.tQ.setThreadCurrentLeafId(eu, d),
                          (h = []),
                          (g = u.getNode(r)),
                          t === eB.Os.Next || t === eB.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (v = u.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || v.id),
                              h.push(g.message))
                            : (m = g.message.id),
                          void 0 === (b = N.tQ.getServerThreadId(eu)) &&
                            (0, N.Zz)(eu) &&
                            N.tQ.updateInitialThreadDataForNewThread(eu, n, c),
                          [
                            4,
                            ea.ZP.publicApiCompletionStream(
                              {
                                model: n,
                                completionType: t,
                                threadId: b,
                                continueFromSharedConversationId: nN,
                                historyDisabled: x,
                                parentMessageId: m,
                                messages: h,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: c,
                                completionMetadata: s,
                              },
                              S(n, t, d, a)
                            ),
                          ]
                        );
                      case 1:
                        return (y = j.sent()), (I.current[d] = y), [2];
                    }
                  });
                })),
                function (e) {
                  return P.apply(this, arguments);
                }),
                [eu, f, eg, nN, x, c, S]
              ))),
            nS = (0, w.useCallback)(
              function () {
                if (eE) {
                  var e = N.tQ.getTree(eu).getBranchFromLeaf(eE);
                  e.forEach(function (e) {
                    R.abortAndRemoveById(e.id);
                  }),
                    eg(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [eE, eg, eu]
            ),
            nZ =
              null === (J = nx.get(nv)) || void 0 === J
                ? void 0
                : J.tags.includes(nP.S.GPT_4),
            nR = ew.has(ei.PL);
          (0, w.useEffect)(
            function () {
              nR && nZ && iF.gatherData();
            },
            [nR, nZ]
          );
          var nD = (0, w.useCallback)(
              ((F = (0, ed._)(function (e, n, t, r) {
                var a,
                  i,
                  o,
                  s,
                  l,
                  u,
                  c,
                  d,
                  m = arguments;
                return (0, ef.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (o = m.length > 6 ? m[6] : void 0),
                        r && nS(),
                        (l = N.tQ.getTree(eu)),
                        e !== eB.Os.Continue && no(l.getTextFromNode(n)))
                      )
                        return [2];
                      if (
                        ((u = i ? np : nv),
                        (c =
                          null === (s = nx.get(u)) || void 0 === s
                            ? void 0
                            : s.tags.includes(nP.S.GPT_4)),
                        !(nR && c))
                      )
                        return [3, 2];
                      return [4, iF.getEnforcementToken()];
                    case 1:
                      (d = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        nI({
                          model: u,
                          completionType: e,
                          parentNodeId: n,
                          metadata: t,
                          focusOnNewCompletion: a,
                          completionMetadata: o,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, n, t, r) {
                return F.apply(this, arguments);
              }),
              [eu, no, np, nv, nx, nR, nI, nS]
            ),
            nA = (0, w.useCallback)(
              function (e, n, t, r) {
                N.tQ.updateTree(eu, function (a) {
                  a.addNode(e, t, n, eB.Jq.Prompt, void 0, r);
                });
              },
              [eu]
            ),
            nE = (0, w.useCallback)(
              function (e, n, t) {
                var r = n.content,
                  a = n.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                nA(e, eE, r, a.length > 0 ? { attachments: a } : {}),
                  nD(eB.Os.Next, e, t, !0, void 0, void 0, i);
              },
              [eE, nA, nD]
            ),
            nB = (0, N.nh)(eu, eE),
            nF = (0, w.useMemo)(
              function () {
                var e,
                  n,
                  t = nB.type === eB.Jq.Prompt,
                  r =
                    (null === (e = nB.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = nB.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== iL.Dd;
                return !!(t || r) && 0 === eh.size;
              },
              [eh.size, nB]
            ),
            nL = (0, rt.Y8)(function (e) {
              return e.isoDate;
            }),
            nO = (0, w.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nB.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === rt.uU;
                return nF && n && null != nL && "" !== nL;
              },
              [
                null === (Y = nB.metadata) || void 0 === Y ? void 0 : Y.errCode,
                nF,
                nL,
              ]
            ),
            nU = (0, w.useCallback)(
              function (e, n) {
                var t =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = N.tQ.getTree(eu).getParentPromptNode(e).id;
                nD(eB.Os.Variant, i, n, !1, t, a, { variantPurpose: r });
              },
              [nD, eu]
            ),
            nq = (0, w.useCallback)(
              function (e) {
                eM(er.s6.continueCompletion),
                  nD(eB.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, nD]
            ),
            nz = (0, w.useCallback)(
              function (e) {
                var n = N.tQ.getTree(eu).getLeafFromNode(e);
                N.tQ.setThreadCurrentLeafId(eu, n.id), eM(er.s6.changeNode);
              },
              [eM, eu]
            ),
            nQ = (0, w.useCallback)(
              function (e, n) {
                N.tQ.updateTree(eu, function (t) {
                  t.updateNodeText(e, n);
                });
              },
              [eu]
            ),
            nH = (0, w.useCallback)(
              function (e, n, t) {
                var r = N.tQ.getServerThreadId(eu);
                if (
                  (eM(er.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: nv,
                  }),
                  void 0 !== r &&
                    ea.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: r,
                      rating: t,
                    }),
                  e5(e),
                  e6(n),
                  e0(t),
                  N.tQ.updateTree(eu, function (n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                      metadata: {
                        $set: (0, em._)((0, v._)({}, r), { rating: t }),
                      },
                    });
                  }),
                  "thumbsDown" === t && eT)
                ) {
                  var a = N.tQ.getTree(eu).getConversationTurns(e || "root");
                  iW(a[a.length - 1]) &&
                    nU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, eu, nv, eT, nU]
            ),
            nG = (0, w.useCallback)(
              function (e, n) {
                if (eX && null != e2 && "" !== e2 && (e || n.length > 0)) {
                  var t = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: t,
                    content: e,
                    model: nv,
                    rating: eX,
                    tags: n,
                  }),
                    eu &&
                      e4 &&
                      ea.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: t,
                        rating: eX,
                        text: e,
                        tags: n,
                      });
                }
              },
              [eX, e2, eu, eM, e4, nv]
            ),
            nW = (0, w.useCallback)(
              function (e, n) {
                if (eU && null != eW && "" !== eW) {
                  var t = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: t,
                    content: e,
                    model: nv,
                    rating: eX,
                    tags: n,
                  }),
                    ea.ZP.submitSharedConversationReportFeedback({
                      message_id: eW,
                      shared_conversation_id: t,
                      text: e,
                      tags: n,
                    }),
                    eH(!0);
                }
              },
              [eX, eU, eW, eu, eM, e4, nv]
            ),
            n$ = (0, w.useCallback)(
              ((L = (0, ed._)(function (e, n, t, r, a, i, o, s, l, u, c) {
                return (0, ef.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o, s, l, u, c) {
                return L.apply(this, arguments);
              }),
              [eu]
            ),
            nV = (0, w.useCallback)(
              ((O = (0, ed._)(function (e, n, t, r, a, i, o) {
                return (0, ef.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: "none",
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: "",
                          tags: [],
                          completion_comparison_rating: t,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o) {
                return O.apply(this, arguments);
              }),
              [eu]
            ),
            nJ = (0, w.useCallback)(
              function (e, n) {
                var t = N.tQ.getTree(eu).getConversationTurns(e),
                  r =
                    null == t
                      ? void 0
                      : t[(null == t ? void 0 : t.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                nU(
                  e,
                  a
                    ? (0, em._)((0, v._)({}, n), {
                        intent: "comparison_implicit",
                      })
                    : n,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [nU, eu]
            ),
            nY = (0, w.useCallback)(
              function (e) {
                N.tQ.updateTree(eu, function (n) {
                  n.deleteNode(e);
                });
              },
              [eu]
            ),
            nK = (0, w.useCallback)(function () {
              D.vm.closeModal(D.B.AccountPortal);
            }, []),
            nX = (0, i9.t)(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            n0 = nX.showAccountPaymentModal,
            n1 = nX.setShowAccountPaymentModal,
            n2 = (0, w.useCallback)(
              function () {
                n1(!1);
              },
              [n1]
            ),
            n5 = (0, w.useCallback)(
              function (e, n) {
                var t = N.tQ.getTree(eu);
                if (t.isFirstCompletion && !eS) {
                  var r,
                    a = t.getParent(n);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== iL.Dd &&
                    setTimeout(function () {
                      nM(a.message.id);
                    }, 500);
                }
                R.abortAndRemoveById(n),
                  eh.has(n) &&
                    (N.tQ.updateTree(eu, function (e) {
                      e.updateNodeMessageMetadata(n, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    eg(function (e) {
                      var t = new Set(e);
                      return t.delete(n), t;
                    }));
              },
              [nM, eS, eh, eg, eu]
            ),
            n3 = (0, w.useCallback)(function () {
              nf(!0);
            }, []);
          (0, w.useEffect)(
            function () {
              var e = iD().subscribe("AbortCompletion", n5),
                n = iD().subscribe("UnrecoverableError", n3);
              return function () {
                iD().unsubscribe(e), iD().unsubscribe(n);
              };
            },
            [n5, n3]
          );
          var n4 = (0, N.Hk)(eu),
            n6 = eD >= 2,
            n7 = (0, N.Zz)(eu) && !n6,
            n8 = (0, w.useCallback)(function () {
              nc(!0), ec.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            n9 = (0, w.useCallback)(function () {
              nr(!1);
            }, []),
            te = (0, N.lA)(eu, eE),
            tn = (0, N.dz)(eu, eE),
            tt = Z(function (e) {
              return null != e.aborters[n4];
            }),
            tr = (0, w.useRef)(null),
            ta = (0, w.useMemo)(
              function () {
                return !tt && !te && tn;
              },
              [te, tn, tt]
            ),
            ti = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.AccountPortal);
            }),
            to = (0, aM.Z)(),
            ts = (0, N.XK)(eu),
            tl = (0, D.tN)(function (e) {
              return e.sharingModalThreadId === ts;
            });
          (q = (U = {
            clientThreadId: eu,
            currentModelId: nv,
            isStaticSharedThread: ex,
          }).clientThreadId),
            (Q = U.currentModelId),
            (H = U.isStaticSharedThread),
            (n = (0, tS.i0)(Q, tS.dN.CODE_INTERPRETER)),
            (t = (0, ep.kP)().session),
            (r = N.tQ.getServerThreadId(q)),
            (0, ej.a)({
              queryKey: ["interpreterState", r],
              queryFn: ol,
              enabled: !!(n && r && !H && (null == t ? void 0 : t.accessToken)),
              cacheTime: 0,
            });
          var tu = (0, N.r7)(eu);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)(iP(), {
                children: [
                  null != nk && (0, y.jsx)("title", { children: nk }),
                  ex &&
                    (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, y.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != nk ? nk : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png",
                          },
                          "og:image"
                        ),
                      ],
                    }),
                ],
              }),
              ew.has(ei.i) ? (0, y.jsx)(i0, {}) : null,
              !nu &&
                (0, y.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: n8,
                    icon: iS.Z,
                    title: ek.formatMessage(og.doNotShareSensitive),
                    primaryButton: (0, y.jsx)(eN.ZP.Button, {
                      onClick: n8,
                      title: ek.formatMessage(og.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ni &&
                nt &&
                (0, y.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: n9,
                    icon: C.U0j,
                    title: ek.formatMessage(og.contentPolicyViolation),
                    primaryButton: (0, y.jsx)(eN.ZP.Button, {
                      onClick: n9,
                      title: ek.formatMessage(og.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              tl &&
                null != ts &&
                (0, y.jsx)(aY, {
                  serverThreadId: ts,
                  activeRequests: eh,
                  currentThreadModel: el.lastModelUsed,
                }),
              null != eX &&
                (0, y.jsx)(i$, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: nG,
                  onHandleChangeFeedbackComparisonRating: n$,
                  currentModelId: nv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nH,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              eU &&
                (0, y.jsx)(i$, {
                  ratingModalNodeId: eW,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eq(!1);
                  },
                  handleSubmitFeedback: nW,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nH,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              eQ &&
                (0, y.jsx)(eI.Z, {
                  onClose: function () {
                    return eH(!1);
                  },
                  isOpen: !0,
                  icon: iS.Z,
                  title: ek.formatMessage(og.reportModalThankYouTitle),
                  description: ek.formatMessage(
                    og.reportModalThankYouDescription
                  ),
                  primaryButton: (0, y.jsx)(eN.ZP.Button, {
                    onClick: function () {
                      return eH(!1);
                    },
                    title: ek.formatMessage(og.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, y.jsx)(i$, {
                  ratingModalNodeId: eE,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: X(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nH,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              (0, y.jsx)(ot, { isStaticSharedThread: ex }),
              (0, y.jsx)(ox, {
                children:
                  !eA &&
                  (n7 || n6) &&
                  ((G = (0, y.jsx)(
                    aB,
                    {
                      onChangeItemInView: nz,
                      onRequestMoreCompletions: nU,
                      onUpdateNode: nQ,
                      onChangeRating: nH,
                      onDeleteNode: nY,
                      onRequestCompletion: nD,
                      onHandleChangeVariantFeedbackInlineComparisonRating: nV,
                      isNewThread: n7,
                      clientThreadId: eu,
                      isStaticSharedThread: ex,
                      activeRequests: eh,
                      currentThreadModel: el.lastModelUsed,
                      initiallyHighlightedMessageId: eb,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: tr,
                    },
                    eu
                  )),
                  ex
                    ? (0, y.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: G,
                      })
                    : (0, y.jsx)(om, { children: G })),
              }),
              (0, y.jsxs)(ob, {
                children: [
                  ew.has("model_preview") &&
                    n7 &&
                    (null == nb ? void 0 : nb.tags.includes(nP.S.GPT_4)) &&
                    (0, y.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: to.textareaDisclaimer,
                    }),
                  !nO &&
                    !ex &&
                    (0, y.jsx)(iX.Z, {
                      children: (0, y.jsx)(
                        tB,
                        {
                          clientThreadId: eu,
                          onRequestMoreCompletions: nJ,
                          onCreateNewCompletion: nE,
                          onAbortCompletion: n5,
                          onContinueGenerating: nq,
                          currentModelId: nv,
                          isCompletionInProgress: eh.has(n4),
                          className: (0, z.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            ne
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: nF,
                          canContinue: ta,
                          suggestions:
                            void 0 !== nC &&
                            (null == nC ? void 0 : nC.messageId) ===
                              (null ===
                                (K = N.tQ.getTree(eu).getLastValidNode(eE)) ||
                              void 0 === K
                                ? void 0
                                : null === (en = K.message) || void 0 === en
                                ? void 0
                                : en.id)
                              ? null == nC
                                ? void 0
                                : nC.suggestions
                              : void 0,
                          disabled: !nh.size,
                          canPause: tt,
                          isInteractableSharedThread: tu,
                          ref: tr,
                        },
                        eu
                      ),
                    }),
                  ex &&
                    (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, y.jsx)(es.z, {
                            as: "link",
                            to: ey,
                            children: ek.formatMessage(
                              og.sharedConversationContinueConversation
                            ),
                          }),
                          eP &&
                            (0, y.jsx)(es.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ek.formatMessage(
                                og.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, y.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ex
                      ? (0, y.jsx)(op, {
                          onClickReportSharedConversation: function () {
                            e$(eE), eq(!0);
                          },
                        })
                      : e8
                      ? (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, em._)(
                              (0, v._)({}, og.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, y.jsx)("a", {
                                      href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: "underline",
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        })
                      : (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, em._)((0, v._)({}, og.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, y.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                  }),
                ],
              }),
              e9 && (0, y.jsx)(i8.Z, { isOpen: n0, onClose: n2 }),
              void 0 !== e8 &&
                e8 &&
                (0, y.jsx)(i7, { isOpen: ti, onClose: nK }),
              nm &&
                (0, y.jsx)(
                  eI.Z,
                  {
                    onClose: X(),
                    isOpen: !0,
                    icon: iS.Z,
                    title: ek.formatMessage(og.somethingWentWrong),
                    description: ek.formatMessage(og.tryAgainLater),
                    primaryButton: (0, y.jsx)(eN.ZP.Button, {
                      onClick: function () {
                        ev(), nf(!1);
                      },
                      title: ek.formatMessage(og.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        ox = en.Z.div(of()),
        ob = en.Z.div(oh());
      function oy(e) {
        var n,
          t = e.clientThreadId,
          r = null !== (n = N.tQ.getTitle(t)) && void 0 !== n ? n : "New chat",
          a = B(t, r, !0),
          i = a.resolvedTitle,
          o = a.isTypingEffect,
          s = (0, w.useContext)(A.QL),
          l = s.historyDisabled,
          u = s.toggleHistoryDisabled;
        return (0, y.jsx)(y.Fragment, {
          children: l
            ? (0, y.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, y.jsx)(el.ZP, { icon: C.$IY }),
                  (0, y.jsx)(_.Z, (0, v._)({}, ok.enableChatHistory)),
                ],
              })
            : o && null != i
            ? (0, y.jsx)(O, { text: i })
            : null != i
            ? i
            : (0, y.jsx)(_.Z, (0, v._)({}, ok.newChat)),
        });
      }
      var oj =
          ((u = function (e) {
            var n = e.clientThreadId,
              t = e.setClientThreadId,
              r = e.isStaticSharedThread,
              a = (0, x._)(e, [
                "clientThreadId",
                "setClientThreadId",
                "isStaticSharedThread",
              ]),
              i = (0, N.UL)(n),
              o = a.setActiveRequests,
              s = (0, N.XK)(n),
              l = (0, k.useRouter)(),
              u = (0, T.hz)(),
              c = (0, w.useContext)(A.QL).historyDisabled,
              d = (0, nP.Xy)(i.lastModelUsed, n),
              m = (0, j.NL)();
            (0, w.useEffect)(
              function () {
                return (
                  N.tQ.retainThread(n),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", n]);
                    }, 0),
                      N.tQ.releaseThread(n);
                  }
                );
              },
              [n, m]
            ),
              (0, w.useEffect)(
                function () {
                  D.vm.closeSharingModal();
                },
                [n, s]
              );
            var f = (0, w.useCallback)(
                function () {
                  t((0, N.OX)()),
                    d.tags.includes(nP.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [t, d.tags, d.id, l]
              ),
              h = (0, D.tN)(function (e) {
                return e.activeSidebar;
              }),
              g = (0, E.w$)();
            return (
              (0, w.useEffect)(
                function () {
                  return function () {
                    R.abortAllAndReset(), o(new Set());
                  };
                },
                [o, n]
              ),
              (0, y.jsxs)(iI.Z, {
                onResetThread: f,
                showNavigation: !r,
                renderTitle: (0, y.jsx)(oy, { clientThreadId: n }),
                children: [
                  (0, y.jsxs)(iI.Z.NavigationPrimaryActionDesktop, {
                    onClick: f,
                    children: [
                      (0, y.jsx)(el.ZP, { icon: c ? C.Bw1 : C.OvN }),
                      (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, c ? ok.clearChat : ok.newChat)
                      ),
                    ],
                  }),
                  (0, y.jsx)(iI.Z.NavigationPrimaryActionMobile, {
                    onClick: f,
                    children: (0, y.jsx)(el.ZP, {
                      icon: c ? C.Bw1 : C.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, y.jsx)(iI.Z.NavigationContent, {
                    children: (0, y.jsx)(iv, {
                      activeId: c ? void 0 : s,
                      onNewThread: f,
                      setActiveRequests: o,
                    }),
                  }),
                  (0, y.jsx)(
                    ov,
                    (0, v._)(
                      {
                        initialThreadData: i,
                        clientThreadId: n,
                        handleResetThread: f,
                        isStaticSharedThread: r,
                      },
                      a
                    ),
                    n
                  ),
                  (0, y.jsxs)(iI.Z.Sidebars, {
                    children: [
                      u.has("debug") &&
                        "debug" === h &&
                        (0, y.jsx)(a_.fv, {
                          clientThreadId: n,
                          slideOver: !g,
                          onClose: function () {
                            return D.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      u.has("tools3_dev") &&
                        (0, y.jsx)(iN.ZP, { slideOver: !g }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var n = e.clientThreadId,
              t = e.isStaticSharedThread;
            (0, N.ax)(n, t);
            var r = (0, N.UL)(n),
              a = (0, b._)((0, w.useState)(new Set()), 2),
              i = a[0],
              o = a[1];
            return (
              (0, w.useEffect)(
                function () {
                  D.vm.setActiveSidebar(!1), R.reset(), o(new Set());
                },
                [r.threadId]
              ),
              (0, y.jsx)(
                u,
                (0, v._)({}, e, { activeRequests: i, setActiveRequests: o })
              )
            );
          }),
        ok = (0, M.vU)({
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "New chat",
            description: "New chat button label",
          },
          clearChat: {
            id: "navigation.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
        });
    },
    5914: function (e, n, t) {
      "use strict";
      t.d(n, {
        j: function () {
          return m;
        },
      });
      var r = t(35250),
        a = t(70079),
        i = t(82841),
        o = t(36218),
        s = t(85023),
        l = t(64135),
        u = t(88038),
        c = t(97688),
        d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25"),
        m = function () {
          var e = (0, l.hz)().has(u.Id),
            n = (0, a.useRef)(!!s.m.getItem(d)),
            t = (0, i.WS)();
          return (
            (0, a.useEffect)(
              function () {
                e &&
                  !n.current &&
                  t &&
                  (t(o.s6.oneOffStatusMessageShown),
                  c.m.warning(
                    "You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.",
                    {
                      duration: 0,
                      hasCloseButton: !0,
                      onRemove: function () {
                        s.m.setItem(d, !0), (n.current = !0);
                      },
                    }
                  ));
              },
              [n, e, t]
            ),
            (0, r.jsx)("div", {})
          );
        };
    },
    5759: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return h;
        },
        Z: function () {
          return c;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var n = e.icon,
          t = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: n }),
            (0, a.jsx)(f, { children: t }),
          ],
        });
      }
      var d = i.Z.div(o()),
        m = i.Z.div(s()),
        f = i.Z.div(l()),
        h = i.Z.div(u());
    },
    48432: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return j;
        },
      });
      var r = t(21722),
        a = t(22830),
        i = t(39889),
        o = t(35250),
        s = t(16578),
        l = t.n(s),
        u = t(68555),
        c = t(70079),
        d = t(1454),
        m = t(82841),
        f = t(36218),
        h = t(24274),
        g = t(64135),
        p = t(97688),
        v = t(44925),
        x = t(74853),
        b = t(99652),
        y = t(1220);
      function j(e) {
        var n = e.isOpen,
          t = e.onClose,
          s = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, c.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, u.useRouter)(),
          M = (0, c.useCallback)(
            function () {
              j(f.s6.closeAccountPaymentModal), t();
            },
            [t, j]
          ),
          T = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountPaymentCheckout), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, h.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = n.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      p.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          N = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, h.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      p.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          I = (0, c.useCallback)(
            function () {
              j(f.s6.clickAccountPaymentGetHelp);
            },
            [j]
          ),
          S = (0, g.YD)(),
          Z = s.has("disable_upgrade_ui");
        return (0, o.jsxs)(x.x, {
          isOpen: n,
          onClose: t,
          children: [
            (0, o.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, o.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, o.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: M,
                  children: (0, o.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: y.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, o.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "primary",
                          disabledText: Z
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          onClick: T,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      S &&
                        (0, o.jsx)(
                          b.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: N,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, o.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: v.ti,
                          passHref: !0,
                          children: (0, o.jsx)(
                            b.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: I,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    74853: function (e, n, t) {
      "use strict";
      t.d(n, {
        x: function () {
          return l;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303),
        o = t(48727);
      function s() {
        var e = (0, r._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var n = e.children,
            t = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(o.Z, {
            size: "fullscreen",
            isOpen: t,
            onClose: r,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: n }),
              }),
            }),
          });
        },
        u = i.Z.div(s());
    },
    99652: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cu: function () {
          return p;
        },
        G: function () {
          return b;
        },
        Oi: function () {
          return g;
        },
        hi: function () {
          return x;
        },
        nR: function () {
          return y;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(19841),
        o = t(70079),
        s = t(1454),
        l = t(34303),
        u = t(66958),
        c = t(38317),
        d = t(57924);
      function m() {
        var e = (0, r._)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = function (e) {
          var n = e.rowElements;
          return (0, a.jsx)(j, {
            children: n.map(function (e) {
              return e;
            }),
          });
        },
        p = function (e) {
          var n = e.className,
            t = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: n,
            children: [(0, a.jsx)("span", { children: t }), r],
          });
        },
        v = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        x = (0, o.forwardRef)(function (e, n) {
          var t = e.isLoading,
            r = void 0 !== t && t,
            o = e.disabled,
            l = e.onClick,
            m = e.variant,
            f = void 0 === m ? "primary" : m,
            h = e.text,
            g = e.disabledText;
          return g
            ? (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(d.u, {
                  side: "bottom",
                  sideOffset: 20,
                  label: g,
                  usePortal: !1,
                  children: (0, a.jsxs)(u.z, {
                    ref: n,
                    as: "button",
                    color: "disabled",
                    className: (0, i.Z)("w-full", v[f]),
                    children: [
                      h,
                      r &&
                        (0, a.jsx)(c.ZP, {
                          className: "animate-spin",
                          icon: s.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(u.z, {
                disabled: void 0 !== o && o,
                onClick: l,
                ref: n,
                as: "button",
                className: (0, i.Z)(v[f]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, i.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === f,
                      "text-white": "primary" === f,
                    }),
                    children: h,
                  }),
                  r &&
                    (0, a.jsx)(c.ZP, {
                      className: "animate-spin",
                      icon: s.dAq,
                    }),
                ],
              });
        });
      x.displayName = "PricingPlanButton";
      var b = function (e) {
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            r = e.className,
            o = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: s._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == t,
                  "text-gray-400": "secondary" == t,
                }),
              }),
              (0, a.jsx)("span", { children: o }),
            ],
          });
        },
        y = function (e) {
          var n = e.className,
            t = e.text,
            r = e.isLoading,
            i = e.onClick;
          return (0, a.jsx)(k, {
            className: n,
            children: (0, a.jsxs)("button", {
              onClick: i,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: t }),
                r &&
                  (0, a.jsx)(c.ZP, { className: "animate-spin", icon: s.dAq }),
              ],
            }),
          });
        },
        j = l.Z.div(m()),
        k = l.Z.div(f()),
        w = l.Z.div(h());
    },
    1220: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return r;
        },
      });
      var r = {
        free: {
          name: "Free plan",
          callToAction: {
            active: "Your current plan",
            inactive: "Your current plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscriptionWeb: { callToAction: "Manage my subscription" },
        manageSubscriptionIos: {
          callToAction: "Manage my subscription in the ChatGPT iOS app",
        },
        getHelp: { callToAction: "I need help with a billing issue" },
        business: { callToAction: "Buy for my team" },
      };
    },
    19051: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(70079);
      function a() {
        var e = (0, r.useRef)([]),
          n = (0, r.useRef)(function (n, t) {
            var r = setTimeout(n, t);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var n = e.current;
            return function () {
              n.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          n.current
        );
      }
    },
    41402: function () {},
  },
]);
