(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [709],
  {
    78251: function (e, t, n) {
      "use strict";
      var r = n(39324),
        a = n(4337),
        i = n(35250),
        s = n(35290),
        o = n(3001),
        l = n(59110),
        c = n(34303);
      function u() {
        var e = (0, a._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, a._)(["bg-blue-200 text-blue-700"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var m = c.Z.span(u()),
        f = (0, c.Z)(m)(d());
      t.ZP = function () {
        var e = (0, l.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, l.WY)();
        return (null == e ? void 0 : e.structure) === "workspace"
          ? (0, i.jsx)(f, {
              children: (0, i.jsx)(s.Z, (0, r._)({}, h.businessPlanName)),
            })
          : (null == e ? void 0 : e.structure) === "personal" && t
          ? (0, i.jsx)(m, { children: "Plus" })
          : null;
      };
      var h = (0, o.vU)({
        businessPlanName: {
          id: "badge.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
      });
    },
    80852: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ec;
          },
        });
      var r = n(22830),
        a = n(35250),
        i = n(71389),
        s = n(70079),
        o = n(97688),
        l = n(87316),
        c = n(32983),
        u = n(85023),
        d = n(75527),
        m = n(32689),
        f = n(21437),
        h = n(59110),
        g = n(61888),
        p = n(78251),
        x = n(48727),
        v = n(39324),
        b = n(71209),
        y = n(3001),
        j = n(75908),
        k = n(35290),
        w = n(82841),
        C = n(36218),
        _ = n(32787),
        M = n(59114),
        N = (0, y.vU)({
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
        P = "2023-04-25",
        T = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(P);
      function Z(e) {
        var t = e.onClose,
          n = (0, j.Z)(),
          r = (0, s.useCallback)(
            function () {
              u.m.setItem(T, !0), t();
            },
            [t]
          ),
          i = (0, w.WS)();
        return (
          (0, s.useEffect)(function () {
            i && i(C.s6.ageConfirmationModal, { content: P });
          }, []),
          (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            title: n.formatMessage(N.welcomeBack),
            primaryButton: (0, a.jsx)(M.ZP.Button, {
              title: n.formatMessage(N.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(M.ZP.Button, {
              title: n.formatMessage(N.logoutButton),
              color: "light",
              onClick: function () {
                i(C.s6.clickLogOut, { eventSource: "mouse" }), (0, _.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(S, {}),
          })
        );
      }
      var S = function () {
          var e = (0, j.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    k.Z,
                    (0, v._)({}, N.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    k.Z,
                    (0, b._)((0, v._)({}, N.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(N.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(N.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        I = n(5759),
        R = n(4337),
        D = n(34303),
        A = n(66958);
      function B() {
        var e = (0, R._)(["flex gap-4 mt-6"]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = (0, R._)(["prose dark:prose-invert"]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, R._)(["mb-4"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function L(e) {
        var t = e.pages,
          n = e.onSubmit,
          i = (0, r._)((0, s.useState)(0), 2),
          o = i[0],
          l = i[1];
        return (0, a.jsx)(q, {
          children: t.map(function (e, t) {
            return o === t
              ? (0, a.jsx)(e, { onChangePage: l, onSubmit: n })
              : null;
          }),
        });
      }
      function O(e) {
        var t = e.onBack,
          n = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(U, {
          children: [
            t &&
              (0, a.jsx)(A.z, {
                as: "button",
                color: "neutral",
                onClick: t,
                children: "Back",
              }),
            n &&
              (0, a.jsx)(A.z, {
                as: "button",
                onClick: n,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(A.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var U = D.Z.div(B()),
        q = D.Z.div(F()),
        z = D.Z.h4(E()),
        H = "oai/apps/hasSeenOnboarding",
        Q = "chat",
        W = function (e) {
          var t = (0, s.useCallback)(
              function () {
                u.m.setItem(
                  "".concat(H, "/").concat(e),
                  new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                );
              },
              [e]
            ),
            n = (0, r._)((0, s.useState)(null), 2),
            a = n[0],
            i = n[1];
          (0, s.useEffect)(
            function () {
              var t = u.m.getItem("".concat(H, "/").concat(e));
              i(!!t && t);
            },
            [e]
          );
          var o = (0, s.useCallback)(
            function () {
              return a ? new Date(!0 === a ? "2022-12-14" : a) : a;
            },
            [a]
          );
          return (0, s.useMemo)(
            function () {
              return { setHasSeenOnboarding: t, getHasSeenOnboardingDate: o };
            },
            [o, t]
          );
        };
      function $(e) {
        var t = e.onClose,
          n = W(Q).setHasSeenOnboarding,
          r = (0, s.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(L, { pages: [G, V, J], onSubmit: r });
      }
      var G = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        V = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onBack: function () {
                  return t(0);
                },
                onNext: function () {
                  return t(2);
                },
              }),
            ],
          });
        },
        J = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, s.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page2Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, b._)((0, v._)({}, Y.page2Disclaimer2), {
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
              (0, a.jsx)(O, {
                onBack: function () {
                  return t(1);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        Y = (0, y.vU)({
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
        K = n(32165),
        X = "workspace";
      function ee(e) {
        var t = e.onClose,
          n = W(X).setHasSeenOnboarding,
          r = (0, s.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(L, { pages: [et, en], onSubmit: r });
      }
      var et = function (e) {
          var t = e.onChangePage,
            n = (0, K.Ix)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(
                  k.Z,
                  (0, b._)((0, v._)({}, er.page0Subtitle), {
                    values: { workspaceName: n },
                  })
                ),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83C\uDFE2",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page0Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page0Disclaimer2)
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        en = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, s.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, er.page1Subtitle)),
              }),
              (0, a.jsxs)(I.I, {
                children: [
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDED1",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page1Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(I.Z, {
                    icon: "\uD83D\uDD12",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, b._)((0, v._)({}, er.page1Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://openai.com/policies/api-data-usage-policies",
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
              (0, a.jsx)(O, {
                onBack: function () {
                  return t(0);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        er = (0, y.vU)({
          page0Subtitle: {
            id: "WorkspaceOnboarding.page0Subtitle",
            defaultMessage: "Welcome to the {workspaceName} workspace",
            description:
              "Subtitle for the first page of the business onboarding flow",
          },
          page0Disclaimer1: {
            id: "WorkspaceOnboarding.page0Disclaimer1",
            defaultMessage:
              "This workspace is private, only select members and roles can use it.",
            description:
              "First disclaimer for the first page of the business onboarding flow",
          },
          page0Disclaimer2: {
            id: "WorkspaceOnboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description:
              "Second disclaimer for the first page of the business onboarding flow",
          },
          page1Subtitle: {
            id: "WorkspaceOnboarding.page1Subtitle",
            defaultMessage: "Data management",
            description:
              "Subtitle for the second page of the business onboarding flow",
          },
          page1Disclaimer1: {
            id: "WorkspaceOnboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations in this workspace are opted out of training and not available to other users.",
            description:
              "First disclaimer for the second page of the business onboarding flow",
          },
          page1Disclaimer2: {
            id: "WorkspaceOnboarding.page1Disclaimer2",
            defaultMessage:
              "Chats are securely stored for 30 days for <link>Trust and Safety Protocols</link>.",
            description:
              "Second disclaimer for the second page of the business onboarding flow",
          },
        }),
        ea = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)($, { onClose: t }),
          });
        },
        ei = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            primaryButton: void 0,
            title: (0, a.jsxs)("span", {
              children: ["ChatGPT ", (0, a.jsx)(p.ZP, {})],
            }),
            children: (0, a.jsx)(ee, { onClose: t }),
          });
        };
      function es(e) {
        var t,
          n,
          i = e.userCountry,
          o = (0, r._)((0, s.useState)(0), 2),
          l = o[0],
          c = o[1],
          d = W(Q).getHasSeenOnboardingDate,
          m = W(X).getHasSeenOnboardingDate,
          f = (0, h.ec)(h.F_.isBusinessWorkspace),
          g =
            ((t = (0, h.hz)()),
            (n = !!u.m.getItem(T)),
            0 === t.size ? "loading" : "IT" !== i || n ? "hide" : "show"),
          p = (0, s.useMemo)(
            function () {
              return [
                {
                  Modal: Z,
                  getModalState: function () {
                    return g;
                  },
                },
                {
                  Modal: ea,
                  getModalState: function () {
                    if (f) return "hide";
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: ei,
                  getModalState: function () {
                    if (!f) return "hide";
                    var e = m();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [d, m, f, g]
          );
        (0, s.useEffect)(
          function () {
            p[l] &&
              "hide" === p[l].getModalState() &&
              c(
                p.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [l, p]
        );
        var x = p[l];
        if (!x) return null;
        var v = x.getModalState();
        if ("loading" === v) return null;
        "hide" === v &&
          c(function (e) {
            return e + 1;
          });
        var b = p[l].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
      var eo = n(6410),
        el = n(99453);
      function ec(e) {
        var t = e.urlThreadId,
          n = e.clientThreadId,
          g = e.isUserInCanPayGroup,
          p = e.serviceStatus,
          x = e.serviceAnnouncement,
          v = e.userCountry,
          b = (0, r._)(
            (0, s.useState)(function () {
              return void 0 !== t ? t : void 0 !== n ? n : (0, d.OX)();
            }),
            2
          ),
          y = b[0],
          j = b[1];
        void 0 !== t && y !== t && j(t),
          void 0 !== t || (0, d.Zz)(y) || j((0, d.OX)());
        var k = (0, h.$T)(),
          w = (0, h.WY)(),
          C = (0, h.ec)(h.F_.workspaceId),
          _ = (0, l.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, s.useEffect)(
          function () {
            void 0 !== g && _("isUserInCanPayGroup", g);
          },
          [_, g]
        ),
          (0, s.useEffect)(
            function () {
              (null == p ? void 0 : p.type) &&
                !1 === w &&
                o.m.warning(p.message, { hasCloseButton: !0, duration: 5 });
            },
            [w, null == p ? void 0 : p.message, null == p ? void 0 : p.type]
          );
        var M = (0, d.GR)(y),
          N = (0, s.useRef)(!1);
        (0, s.useEffect)(
          function () {
            if (!k) {
              var e = w ? x.paid : x.public;
              if (
                (null == e ? void 0 : e.type) &&
                (null == e ? void 0 : e.message) &&
                !N.current
              ) {
                N.current = !0;
                var t = e.message,
                  n = { hasCloseButton: !0, duration: 15 };
                switch (e.type) {
                  case "danger":
                    o.m.danger(t, n);
                    break;
                  case "info":
                    o.m.info(t, n);
                    break;
                  case "warning":
                    o.m.warning(t, n);
                }
              }
            }
          },
          [x, k, w]
        );
        var P = (0, m.tN)(function (e) {
          return e.activeModals.has(m.B.TempBrowseToast);
        });
        return (0, a.jsx)(c.XA.Provider, {
          value: M,
          children: (0, a.jsxs)(c.gB.Provider, {
            value: !1,
            children: [
              (0, a.jsx)(es, { userCountry: v }, C),
              (0, a.jsx)(eo.Z, { clientThreadId: y, setClientThreadId: j }),
              (0, a.jsxs)(i.zt, {
                children: [
                  (0, a.jsxs)(i.fC, {
                    className:
                      "grid w-[390px] max-w-sm grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-white p-[15px] shadow-xs [grid-template-areas:_'title_action'_'description_action'] radix-state-closed:animate-hide radix-state-open:animate-slideIn dark:bg-gray-950",
                    open: P,
                    children: [
                      (0, a.jsxs)(i.Dx, {
                        className:
                          "text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]",
                        children: [
                          "We've temporarily disabled the Browse with Bing ",
                          (0, el.V)("beta"),
                          " feature",
                        ],
                      }),
                      (0, a.jsxs)(i.dk, {
                        className:
                          "text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]",
                        children: [
                          "Read the",
                          " ",
                          (0, a.jsx)("a", {
                            href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "cursor-pointer underline",
                            children: "Help Center article",
                          }),
                          ".",
                        ],
                      }),
                      (0, a.jsx)(i.aU, {
                        altText: "Dismiss notification",
                        asChild: !0,
                        children: (0, a.jsx)(A.z, {
                          color: "neutral",
                          size: "small",
                          onClick: function () {
                            m.vm.closeModal(m.B.TempBrowseToast),
                              u.m.setItem(f.DN, "true");
                          },
                          children: "Dismiss",
                        }),
                      }),
                      (0, a.jsx)(i.x8, {}),
                    ],
                  }),
                  (0, a.jsx)(i.l_, {
                    className:
                      "z-100 fixed bottom-0 right-0 m-0 flex  max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    6410: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return iz;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        c,
        u,
        d,
        m,
        f,
        h,
        g = n(39324),
        p = n(70216),
        x = n(22830),
        v = n(35250),
        b = n(35448),
        y = n(68555),
        j = n(70079),
        k = n(1454),
        w = n(35290),
        C = n(3001),
        _ = n(75527),
        M = n(81292),
        N = n(58392),
        P = (0, M.ZP)(
          (0, N.n)(function () {
            return { aborters: {} };
          })
        ),
        T = P.setState,
        Z = {
          addAborter: function (e, t) {
            T(function (n) {
              null != n.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (n.aborters[e] = t);
            });
          },
          abortAndRemoveById: function (e) {
            T(function (t) {
              var n = t.aborters[e];
              null != n && (n.abort(), delete t.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            T(function (t) {
              delete t.aborters[e];
            });
          },
          reset: function () {
            T(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            T(function (e) {
              Object.keys(e.aborters).forEach(function (t) {
                e.aborters[t].abort(), delete e.aborters[t];
              });
            });
          },
        },
        S = n(32689),
        I = n(59110),
        R = n(32983),
        D = n(77442);
      function A(e, t, n) {
        var r = (0, _.XL)(e),
          a = r.title,
          i = r.titleSource,
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          c = null != a ? a : t,
          u = (0, j.useRef)(c);
        return (
          (0, j.useEffect)(
            function () {
              return (
                n && i === _._L.Generated && c !== u.current && l(!0),
                function () {
                  u.current = c;
                }
              );
            },
            [n, c, i]
          ),
          { isTypingEffect: o, resolvedTitle: c }
        );
      }
      var B = n(51217),
        F = n(86526);
      function E(e) {
        var t = e.text,
          n = (0, F.Z)(),
          r = (0, x._)((0, j.useState)(!0), 2),
          a = r[0],
          i = r[1],
          s = (0, x._)((0, j.useState)(0), 2),
          o = s[0],
          l = s[1],
          c = (0, j.useMemo)(
            function () {
              return new L().humanTypingDelaysQuertyDistance(t);
            },
            [t]
          );
        return (
          (0, j.useEffect)(
            function () {
              t &&
                a &&
                (i(!0),
                c.forEach(function (e, t) {
                  setTimeout(function () {
                    n() && (l(t), t === c.length - 1 && i(!1));
                  }, e);
                }));
            },
            [c, n, a, t]
          ),
          (0, v.jsxs)(v.Fragment, {
            children: [t.substring(0, o + 1), a && "▋"],
          })
        );
      }
      var L = (function () {
          function e() {
            (0, B._)(this, e);
          }
          var t = e.prototype;
          return (
            (t.qwertyDistance = function (e, t) {
              var n,
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
                i = (0, x._)(
                  null !== (n = a[e.toLowerCase()]) && void 0 !== n
                    ? n
                    : [0, 0],
                  2
                ),
                s = i[0],
                o = i[1],
                l = (0, x._)(
                  null !== (r = a[t.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(s - l[0]) + Math.abs(o - l[1]);
            }),
            (t.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var s = void 0;
                if (i > 0) {
                  var o = this.qwertyDistance(e[i - 1], e[i]);
                  s =
                    0 === o
                      ? this.getRandomInt(t, Math.floor(n / 2))
                      : 1 === o
                      ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                      : this.getRandomInt(t, n);
                } else s = this.getRandomInt(t, n);
                a.push(s + r), (r += s);
              }
              return a;
            }),
            (t.getRandomInt = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            e
          );
        })(),
        O = n(4337),
        U = n(19841),
        q = n(72201),
        z = n(26430),
        H = n(84913),
        Q = n(44043),
        W = n(82187),
        $ = n(69262),
        G = n(75861),
        V = n(70575),
        J = n(91530),
        Y = n.n(J),
        K = n(75908),
        X = n(34303),
        ee = n(82841),
        et = n(36218),
        en = n(24274),
        er = n(88038),
        ea = n(19051),
        ei = n(66958),
        es = n(38317),
        eo = n(56060),
        el = n(85023),
        ec = n(21722),
        eu = n(71209),
        ed = n(39889),
        em = n(63020),
        ef = n(13002),
        eh = n(32787),
        eg = n(97703),
        ep = (0, j.createContext)(),
        ex = function (e) {
          return (0, M.oR)((0, j.useContext)(ep), e);
        },
        ev = n(59710),
        eb = n(24396),
        ey = n(25094),
        ej = j.memo(function (e) {
          var t,
            n = e.message,
            r = e.isCollapsed,
            a =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eN),
            s = r && i.length > 0,
            o = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            c = !r && a.messages.filter(e_).length > 0;
          return (0, v.jsxs)(v.Fragment, {
            children: [
              s &&
                (0, v.jsx)(ek, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, t) {
                    return (0,
                    v.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(t));
                  }),
                }),
              o &&
                (0, v.jsx)(ek, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, v.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, v.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, v.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, v.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              c &&
                a.messages.filter(e_).map(function (e, t) {
                  return (0,
                  v.jsx)("div", { className: "empty:hidden", children: (0, v.jsx)(eM, { jupyterMessage: e }) }, t);
                }),
            ],
          });
        });
      function ek(e) {
        var t = e.label,
          n = e.output;
        return (0, v.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, v.jsx)("div", { className: "mb-1 text-gray-400", children: t }),
            (0, v.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, v.jsx)("pre", {
                className: "shrink-0",
                children: n,
              }),
            }),
          ],
        });
      }
      var ew = Math.log(151) / Math.log(1.5);
      function eC(e) {
        var t = e.fileId,
          n = (0, x._)((0, j.useState)(""), 2),
          r = n[0],
          a = n[1];
        return (
          (0, eb.a)({
            queryKey: ["getFileDownloadLink", t],
            queryFn: function () {
              return en.ZP.getFileDownloadLink(t).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    a(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, t) {
              var n = t.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(n > ew) &&
                "error" !== t.state.status &&
                100 * Math.pow(1.5, n)
              );
            },
          }),
          (0, v.jsxs)(v.Fragment, {
            children: [" ", r && (0, v.jsx)("img", { src: r }), " "],
          })
        );
      }
      function e_(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, ey.$H)(e.image_url + ""))
        );
      }
      function eM(e) {
        var t = e.jupyterMessage;
        if ((0, j.useContext)(R.gB))
          return (0, v.jsxs)("div", {
            className:
              "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
            children: [
              (0, v.jsx)(es.ZP, { icon: k.LFN, size: "medium" }),
              (0, v.jsx)(w.Z, (0, g._)({}, eP.imageNotSupported)),
            ],
          });
        if (null != t.image_payload)
          return (0, v.jsx)("img", {
            src: "data:image/png;base64,".concat(t.image_payload),
          });
        if (null != t.image_url) {
          var n = (0, ey.Iy)(t.image_url);
          return (0, v.jsx)(eC, { fileId: n });
        }
        return null;
      }
      function eN(e) {
        return "stream" === e.message_type;
      }
      var eP = (0, C.vU)({
        imageNotSupported: {
          id: "CodeExecutionOutputMessage.imageNotSupported",
          defaultMessage: "Image output is not supported in a shared chat",
          description:
            "Message shown when an image is output in a shared thread",
        },
      });
      function eT(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, n, r, a;
            return (
              (null ==
              (r =
                null === (t = e.message.metadata) || void 0 === t
                  ? void 0
                  : t.aggregate_result)
                ? void 0
                : null === (n = r.messages) || void 0 === n
                ? void 0
                : n.some(e_)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eZ = function (e) {
          var t = e.children,
            n = e.icon;
          return (0, v.jsxs)("div", {
            className:
              "mb-4 flex items-start justify-start gap-2.5 rounded-md bg-yellow-300 p-4 text-[#756B5C] last:mb-0",
            children: [
              null != n &&
                (0, v.jsx)(es.ZP, {
                  icon: n,
                  size: "small",
                  className: "mt-1 flex-shrink-0",
                }),
              t,
            ],
          });
        },
        eS = n(59114),
        eI = n(48727),
        eR = n(19265),
        eD = n(81949),
        eA = n(49218),
        eB = n(21437),
        eF = n(78251),
        eE = n(54655),
        eL = n(75955),
        eO = n(69403),
        eU = n(56244),
        eq = n(57311),
        ez = n(46110),
        eH = n(13282),
        eQ = n(47635),
        eW = n(36716);
      function e$() {
        var e = (0, O._)(["flex flex-col items-start"]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, O._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eV() {
        var e = (0, O._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eV = function () {
            return e;
          }),
          e
        );
      }
      var eJ = j.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            s = e.results,
            o = e.initialExpanded,
            l = e.onExpand,
            c = (0, x._)((0, j.useState)(void 0 !== o && o), 2),
            u = c[0],
            d = c[1],
            m = (0, j.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          v.jsxs)(eY, { children: [(0, v.jsxs)(eK, { $complete: n, children: [(0, v.jsx)("div", { children: t }), !n && (0, v.jsx)(eR.Z, { className: (0, U.Z)("shrink-0", null != s ? "ml-1" : "ml-12") }), null != s && (0, v.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [null != a && null != r && (0, v.jsx)("div", { className: "text-xs text-gray-600", children: u ? a : r }), !u && i, (0, v.jsx)(es.ZP, { icon: u ? k.rH8 : k.bTu })] })] }), u && s] });
        }),
        eY = X.Z.div(e$()),
        eK = X.Z.div(eG(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eX = X.Z.div(eV()),
        e0 = (0, C.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          startingFileSearch: {
            id: "browsingMessage.startingFileSearch",
            defaultMessage: "Searching files...",
            description: "Status message when searching files is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          finishedFileSearch: {
            id: "browsingMessage.finishedFileSearch",
            defaultMessage: "Finished searching files",
            description: "Status message when searching files is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgressWeb: {
            id: "browsingMessage.command.search.inProgress.web",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchInProgressFiles: {
            id: "browsingMessage.command.search.inProgress.files",
            defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files is in progress",
          },
          searchFinishedWeb: {
            id: "browsingMessage.command.search.finished.web",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchFinishedFiles: {
            id: "browsingMessage.command.search.finished.files",
            defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files finished",
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
          openFileInProgress: {
            id: "browsingMessage.command.openFile.inProgress",
            defaultMessage: "Opening a file...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          openFileFinished: {
            id: "browsingMessage.command.openFile.finished",
            defaultMessage: "Opened a file",
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
          openFileError: {
            id: "browsingMessage.command.openFile.error",
            defaultMessage: "Opening file failed",
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
        e1 = j.memo(function (e) {
          var t,
            n = e.messages,
            r = e.isComplete,
            a = e.isRetrieval,
            i = (0, I.hz)(),
            s = n.map(function (e) {
              return e.message;
            }),
            o = s
              .map(function (e, t) {
                if (
                  e.author.role !== eO.uU.Tool ||
                  (t > 0 && tn(e) && tn(s[t - 1]))
                )
                  return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var n = e.metadata;
                if (!n) return null;
                var r = n.command,
                  a = n.status;
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
            l = o.map(function (e, t) {
              return (0, v.jsx)(e2, { command: e, isRetrieval: a }, t);
            });
          r
            ? (l.push((0, v.jsx)(te, { isRetrieval: a }, "finished")),
              (t = (0, v.jsx)(te, { isRetrieval: a, compact: !0 })))
            : 0 === l.length
            ? (l.push((0, v.jsx)(e9, { isRetrieval: a }, "waiting")),
              (t = (0, v.jsx)(e9, { isRetrieval: a, compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              l.push(
                (0, v.jsx)(
                  tt,
                  {
                    icon: k.Wqx,
                    children: (0, v.jsx)(w.Z, (0, g._)({}, e0.thinking)),
                  },
                  "thinking"
                )
              ),
            t ||
              (t = (0, v.jsx)(e2, {
                command: o[o.length - 1],
                isRetrieval: a,
                compact: !0,
              }));
          var c =
            i.has(er.UG) && !r
              ? (function (e) {
                  var t,
                    n = e.reverse().find(function (e) {
                      return e.author.role === eO.uU.Assistant;
                    });
                  if (!n) return null;
                  for (
                    var r = (0, eU.RR)(n), a = /^#\s*(.*)/gm, i = [];
                    null !== (t = a.exec(r));

                  )
                    i.push(t[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(s)
              : null;
          return (0,
          v.jsxs)(eJ, { isComplete: r, results: (0, v.jsx)(eX, { className: "text-xs", children: l }), children: [null != c && (0, v.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: c }), t] });
        });
      function e2(e) {
        var t = e.command,
          n = e.isRetrieval,
          r = e.compact;
        if (t.didError) return (0, v.jsx)(e8, { commandType: t.type });
        switch (t.type) {
          case "search":
            var a,
              i,
              s,
              o,
              l =
                "browser_one_box" === t.message.author.name
                  ? null === (a = t.message.metadata) || void 0 === a
                    ? void 0
                    : null === (i = a._cite_metadata) || void 0 === i
                    ? void 0
                    : i.original_query
                  : null === (s = t.message.metadata) || void 0 === s
                  ? void 0
                  : null === (o = s.args) || void 0 === o
                  ? void 0
                  : o[0];
            if (null == l) return null;
            return (0, v.jsx)(e3, {
              searchQuery: l,
              isComplete: "finished" === t.status,
              isRetrieval: n,
              compact: r,
            });
          case "click":
          case "open_url":
            var c,
              u,
              d =
                null === (c = t.message.metadata) || void 0 === c
                  ? void 0
                  : null === (u = c._cite_metadata) || void 0 === u
                  ? void 0
                  : u.metadata_list[0];
            return (0, v.jsx)(e5, {
              isRetrieval: n,
              citationMetadata: d,
              compact: r,
            });
          case "quote":
          case "quote_full":
            return (0, v.jsx)(e4, { compact: r });
          case "back":
            return (0, v.jsx)(e7, { compact: r });
          case "scroll":
            return (0, v.jsx)(e6, { compact: r });
          default:
            return null;
        }
      }
      function e3(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          r = e.isRetrieval,
          a = e.compact,
          i = function (e) {
            var n = en.ZP.getBingLink({ query: t });
            return (0, v.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          },
          s = r ? e0.searchInProgressFiles : e0.searchInProgressWeb,
          o = r ? e0.searchFinishedFiles : e0.searchFinishedWeb;
        return (0, v.jsx)(tt, {
          icon: k.jRj,
          compact: a,
          children: n
            ? (0, v.jsx)(
                w.Z,
                (0, eu._)((0, g._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, v.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: t,
                  },
                })
              )
            : (0, v.jsx)(
                w.Z,
                (0, eu._)((0, g._)({}, s), {
                  values: {
                    bold: function (e) {
                      return (0, v.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: t,
                  },
                })
              ),
        });
      }
      function e5(e) {
        var t,
          n = e.isRetrieval,
          r = e.citationMetadata,
          a = e.compact,
          i = n ? e0.openFileInProgress : e0.clickInProgress,
          s = n ? e0.openFileFinished : e0.clickFinished;
        return (0, v.jsx)(tt, {
          icon: n ? k.NOg : k.PS6,
          compact: a,
          children: r
            ? !0 === a || n
              ? (0, v.jsx)(w.Z, (0, g._)({}, s))
              : (0, v.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, v.jsx)(w.Z, (0, g._)({}, e0.clickFinishedWithLink)),
                    (0, v.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, v.jsx)(eW.Op, {
                        citationMetadata: r,
                        onClick: function () {
                          return eL.m.logEvent(
                            "chatgpt_browsing_click_link",
                            r.url,
                            {
                              domain:
                                null !==
                                  (t = eQ.get(new URL(r.url).hostname)) &&
                                void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        },
                      }),
                    }),
                  ],
                })
            : (0, v.jsx)(w.Z, (0, g._)({}, i)),
        });
      }
      function e4(e) {
        var t = e.compact;
        return (0, v.jsx)(tt, {
          icon: k.SnF,
          compact: t,
          children: (0, v.jsx)(w.Z, (0, g._)({}, e0.quote)),
        });
      }
      function e7(e) {
        var t = e.compact;
        return (0, v.jsx)(tt, {
          icon: k.cww,
          compact: t,
          children: (0, v.jsx)(w.Z, (0, g._)({}, e0.back)),
        });
      }
      function e6(e) {
        var t = e.compact;
        return (0, v.jsx)(tt, {
          icon: k.nlg,
          compact: t,
          children: (0, v.jsx)(w.Z, (0, g._)({}, e0.scroll)),
        });
      }
      function e8(e) {
        var t,
          n = e.commandType,
          r = e.compact;
        switch (n) {
          case "search":
            t = e0.searchError;
            break;
          case "click":
          case "open_url":
            t = e0.clickError;
            break;
          case "quote":
          case "quote_full":
            t = e0.quoteError;
            break;
          case "back":
            t = e0.backError;
            break;
          case "scroll":
            t = e0.scrollError;
            break;
          default:
            return null;
        }
        return (0, v.jsx)(tt, {
          icon: k.bcx,
          compact: r,
          children: (0, v.jsx)(w.Z, (0, g._)({}, t)),
        });
      }
      function e9(e) {
        var t = e.isRetrieval,
          n = e.compact,
          r = t ? e0.startingFileSearch : e0.startingBrowsing;
        return (0, v.jsx)(tt, {
          icon: k.jRj,
          compact: n,
          children: (0, v.jsx)(w.Z, (0, g._)({}, r)),
        });
      }
      function te(e) {
        var t = e.isRetrieval,
          n = e.compact,
          r = t ? e0.finishedFileSearch : e0.finishedBrowsing;
        return (0, v.jsx)(tt, {
          icon: k._rq,
          compact: n,
          children: (0, v.jsx)(w.Z, (0, g._)({}, r)),
        });
      }
      function tt(e) {
        var t = e.children,
          n = e.icon,
          r = e.compact;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, v.jsx)(es.ZP, { icon: n, className: "shrink-0" }),
            (0, v.jsx)("div", { children: t }),
          ],
        });
      }
      function tn(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full"
        );
      }
      var tr = n(86546),
        ta = n(87105),
        ti = {},
        ts = {};
      function to(e) {
        var t = e.message,
          n = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, tr.F)().theme,
          s = (0, ee.WS)();
        (0, j.useEffect)(
          function () {
            ti[t.message.id] ||
              (s(et.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: a,
              }),
              (ti[t.message.id] = !0));
          },
          [s, t, a]
        );
        var o = (0, j.useCallback)(
            function () {
              ts[t.message.id] ||
                (s(et.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: a,
                }),
                (ts[t.message.id] = !0));
            },
            [s, t, a]
          ),
          l = (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, v.jsx)(ta.Z, {
                  clientThreadId: r,
                  messageId: t.message.id,
                  className: (0, U.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var t = function (e, t) {
                      return "```".concat(t, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return t(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var n = e.message.content.parts;
                      if (1 !== n.length || "string" != typeof n[0])
                        throw Error("Unexpected parts for code message");
                      return t(n[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              n &&
                (0, v.jsx)("div", {
                  className: "self-stretch",
                  children: (0, v.jsx)(ej, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, v.jsx)(eJ, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: o,
          children: a ? "Finished working" : "Working...",
        });
      }
      var tl = n(63390);
      function tc(e) {
        var t = e.messages,
          n = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          s = (0, j.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, eU.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t]
          );
        return (0, v.jsx)(tl.Cf, {
          clientThreadId: n,
          parts: s,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var tu = n(2368),
        td = n(86573);
      function tm(e) {
        return (0, eU.qi)(e) && !(0, eU.oH)(e);
      }
      function tf() {
        var e = (0, O._)(["grid gap-4\n", ""]);
        return (
          (tf = function () {
            return e;
          }),
          e
        );
      }
      var th = (0, C.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function tg(e) {
        var t,
          n,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          s = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var o = !1,
          l = c.SQUARE;
        if ("text" === i.content.content_type)
          try {
            var u = (function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var s = a.value,
                      o = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(o + s),
                        isComplete: "" === s,
                      };
                    } catch (e) {}
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = u.result,
              m = u.isComplete;
            (t = d),
              (o = m),
              (null == t ? void 0 : t.image_shape) != null &&
                (l = t.image_shape);
          } catch (e) {}
        var f = !1;
        if (null != s) {
          if ("text" === s.content.content_type) {
            try {
              n = JSON.parse(s.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, v.jsx)(tx, { imageUrls: n.images, gridItemShape: l });
          }
          f = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, v.jsx)(tp, {
              numItems:
                null !== (r = null == t ? void 0 : t.n) && void 0 !== r
                  ? r
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: l,
              isPromptListComplete: null != o && o,
              showErrorState: f || tm(i),
            })
          : null;
      }
      function tp(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            s = [],
            o = 0;
          o < t;
          o++
        ) {
          var l = n[o],
            c = o < n.length - 1 || a || i;
          s.push(
            (0, v.jsx)(
              tv,
              {
                className: (0, U.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, v.jsx)(eA.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, v.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, v.jsx)("div", {
                          className: (0, U.Z)("pt-4", !c && "result-streaming"),
                          children: (0, v.jsx)("span", { children: l }),
                        }),
                      c &&
                        !i &&
                        (0, v.jsx)(eR.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, v.jsx)(es.ZP, {
                          icon: k.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              o
            )
          );
        }
        return (0, v.jsx)(ty, { $numItems: t, children: s });
      }
      function tx(e) {
        var t = e.imageUrls,
          n = e.gridItemShape,
          r = t.map(function (e, t) {
            return (0, v.jsx)(tb, { imageUrl: e, shape: n }, t);
          });
        return (0, v.jsx)(ty, { $numItems: r.length, children: r });
      }
      function tv(e) {
        var t = e.children,
          n = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)(
            "relative overflow-hidden rounded",
            r,
            n === c.WIDE && "aspect-[7/4]",
            n === c.SQUARE && "aspect-square max-w-[400px]",
            n === c.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, v.jsx)("div", {
              className: (0, U.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            t,
          ],
        });
      }
      function tb(e) {
        var t = e.imageUrl,
          n = e.shape,
          r = (0, K.Z)();
        return (0, v.jsx)(tv, {
          shape: n,
          children: (0, v.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              src: t,
              alt: r.formatMessage(th.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var ty = X.Z.div(tf(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function tj() {
        var e = (0, O._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (tj = function () {
            return e;
          }),
          e
        );
      }
      function tk() {
        var e = (0, O._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (tk = function () {
            return e;
          }),
          e
        );
      }
      var tw = X.Z.div(tj());
      function tC() {
        return (0, v.jsx)(tw, {
          children: (0, v.jsx)(es.ZP, {
            icon: k.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function t_() {
        return (0, v.jsx)(tw, {
          children: (0, v.jsx)(es.ZP, { icon: k.V7f, className: "h-3 w-3" }),
        });
      }
      var tM = X.Z.div(tk());
      function tN() {
        return (0, v.jsxs)(tM, {
          children: [
            (0, v.jsx)(es.ZP, {
              icon: k.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, v.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function tP() {
        return (0, v.jsxs)(tM, {
          children: [
            (0, v.jsx)(es.ZP, { icon: k.V7f, className: "h-3 w-3" }),
            (0, v.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var tT = n(31721),
        tZ = n(57924),
        tS = j.memo(function (e) {
          var t,
            n = e.messages,
            r = (0, x._)(n, 2),
            a = r[0],
            i = r[1],
            s = (0, tT.v)(),
            o = (0, eU.fj)(a.message.recipient),
            l = s.find(function (e) {
              return e.namespace === (null == o ? void 0 : o.pluginNamespace);
            }),
            c = null == l ? void 0 : l.manifest.name_for_human,
            u = tm(a.message),
            d = null != c ? (0, v.jsx)("b", { children: c }) : "unknown plugin",
            m =
              null != i
                ? (0, v.jsxs)("div", { children: ["Used ", d] })
                : u
                ? (0, v.jsxs)("div", { children: ["Tried to use ", d] })
                : (0, v.jsxs)("div", { children: ["Using ", d, "..."] });
          return (
            l &&
              ((0, td.cf)(l)
                ? (t = (0, v.jsx)(tP, {}))
                : "approved" !== l.status && (t = (0, v.jsx)(tN, {}))),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(eJ, {
                  isComplete: null != i || u,
                  results: (0, v.jsx)(tI, {
                    pluginName: null != c ? c : "unknown plugin",
                    pluginMessage: a,
                    toolMessage: i,
                  }),
                  children: (0, v.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [m, t],
                  }),
                }),
                null != l &&
                  (0, v.jsx)(tg, {
                    plugin: l,
                    pluginMessage: a.message,
                    toolMessage: null == i ? void 0 : i.message,
                  }),
              ],
            })
          );
        });
      function tI(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eU.RR)(n.message),
          i = r ? (0, eU.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var s =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, v.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, v.jsx)(tR, {
              title: "Request to ".concat(t),
              infoTooltip: n.message.recipient,
              children: a,
            }),
            null != i &&
              (0, v.jsx)(tR, {
                title: s ? "Error" : "Response from ".concat(t),
                infoTooltip: n.message.recipient,
                children: (0, v.jsx)("span", {
                  className: (0, U.Z)(s && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function tR(e) {
        var t = e.title,
          n = e.infoTooltip,
          r = e.children;
        return (0, v.jsx)(tu.$, {
          title: (0, v.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, v.jsx)(tZ.u, {
                  label: n,
                  children: (0, v.jsx)(es.ZP, {
                    icon: k.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var tD = n(85449),
        tA = n(90076);
      function tB() {
        var e = (0, O._)([""]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        var e = (0, O._)(["flex flex-grow flex-col gap-3"]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, O._)(["flex p-4 gap-4 ", "\n  ", ""]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tL() {
        var e = (0, O._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, O._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, O._)(["p-1 ", ""]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        var e = (0, O._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, O._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      function tH() {
        var e = (0, O._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (tH = function () {
            return e;
          }),
          e
        );
      }
      var tQ = ["#7989FF"];
      ((a = u || (u = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin"),
        (a[(a.RetrievalBrowsing = 6)] = "RetrievalBrowsing");
      var tW = "#19c37d",
        t$ = "openai",
        tG = "#1a7f64",
        tV = j.memo(function (e) {
          var t,
            n,
            r,
            a,
            i = e.turnIndex,
            s = e.conversationLeafId,
            o = e.isFinalTurn,
            l = e.clientThreadId,
            c = e.onChangeItemInView,
            d = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            p = e.onUpdateNode,
            b = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            y = e.activeRequests,
            w = e.showInlineEmbeddedDisplay,
            C = void 0 !== w && w,
            M = e.currentModelId,
            N = e.initiallyHighlightedMessageId,
            P = e.avatarColor,
            T = (0, j.useContext)(R.gB),
            Z = (0, I.ec)(I.F_.isBusinessWorkspace),
            A = (0, _.GD)(l, i, s),
            B = A.role,
            F = A.messages,
            E = A.variantIds,
            L = (0, eh.kP)().session,
            O = (0, D.x_)(),
            q = (0, ee.WS)(),
            z = (0, x._)((0, j.useState)(!1), 2),
            H = z[0],
            Q = z[1],
            W = (0, j.useMemo)(
              function () {
                return E.findIndex(function (e) {
                  return e === F[0].nodeId;
                });
              },
              [E, F]
            ),
            $ = B !== eO.uU.User,
            G = (0, j.useContext)(R.QL).historyDisabled,
            V = (0, I.hz)().has(er.FZ),
            J = (0, eB.Fl)(),
            Y = J.isBrowsingAvailable,
            K = J.isPluginsAvailable,
            X = J.isCodeInterpreterAvailable,
            en = (0, S.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            ea = F.some(function (e) {
              return e.message.content.content_type === eO.PX.MultimodalText;
            }),
            ei = Y || K || X,
            eo = (0, j.useRef)(null);
          (0, j.useEffect)(
            function () {
              var e;
              null != N &&
                A.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(N) &&
                (null === (e = eo.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [N]
          );
          var el = F[F.length - 1],
            ec = (0, x._)((0, j.useState)(el.rating), 2),
            ed = ec[0],
            em = ec[1],
            ef = (0, I.hz)(),
            eg = (0, tT.v)(),
            ep = (0, j.useMemo)(
              function () {
                return (
                  ($ &&
                    (null == F ? void 0 : F[0]) != null &&
                    (0, eU.Rc)(F[0].message)) ||
                  M
                );
              },
              [$, F, M]
            ),
            ex = (0, j.useCallback)(
              function () {
                1 === F.length &&
                  (q(
                    B === eO.uU.User ? et.s6.editPrompt : et.s6.editCompletion,
                    { id: F[0].message.id, threadId: _.tQ.getServerThreadId(l) }
                  ),
                  Q(!0));
              },
              [F, q, B, l]
            ),
            ev = (0, j.useCallback)(function () {
              Q(!1);
            }, []),
            eb = (0, j.useCallback)(
              function () {
                var e = F.reduce(function (e, t) {
                  return t.err ||
                    t.message.author.role !== eO.uU.Assistant ||
                    "all" !== t.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eU.RR)(t.message);
                }, "");
                navigator.clipboard.writeText(e),
                  q(et.s6.copyToClipboard, {
                    threadId: _.tQ.getServerThreadId(l),
                    id: F[0].message.id,
                    eventSource: "mouse",
                    model: ep,
                  }),
                  eL.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [ep, q, F, l]
            ),
            ey = (0, j.useCallback)(
              function (e) {
                d(el.nodeId, el.message.id, e), em(e);
              },
              [el, d]
            ),
            ek = (0, x._)((0, j.useState)(el.inlineComparisonRating), 2),
            ew = ek[0],
            eC = ek[1];
          (0, j.useEffect)(
            function () {
              em(function (e) {
                return null != e ? e : el.rating;
              }),
                eC(function (e) {
                  return null != e ? e : el.inlineComparisonRating;
                });
            },
            [el]
          );
          var e_ = (0, j.useMemo)(
              function () {
                return eq.Cv.getRequestIdFromConversationTurn(A);
              },
              [A]
            ),
            eM = (0, j.useMemo)(
              function () {
                return y.has(e_);
              },
              [y, e_]
            ),
            eN = (0, j.useMemo)(
              function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, a = F[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (t) throw n;
                  }
                }
                return !1;
              },
              [F]
            ),
            eP = (0, j.useMemo)(
              function () {
                if ($) {
                  var e,
                    t,
                    n = _.tQ.getTree(l),
                    r =
                      null === (e = n.getParentPromptNode(F[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (t = n.getNode(r).message.metadata) ||
                      void 0 === t
                        ? void 0
                        : t.model_slug);
                  if (ep && a && ep !== a)
                    return tA.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [ep, $, F, l]
            ),
            eT = (0, j.useMemo)(
              function () {
                if (!ei) return { avatarIcon: t$, avatarColor: tW };
                if (eM && F.length > 0) {
                  var e = F[F.length - 1],
                    t = (0, eU.rH)(e.message);
                  switch (t) {
                    case eU.Cs.Text:
                      if ((0, eU.RR)(e.message).length > 0 || F.length > 1)
                        return { avatarIcon: "text", avatarColor: tG };
                      break;
                    case eU.Cs.Browsing:
                    case eU.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: tG };
                    case eU.Cs.Code:
                    case eU.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: tG };
                    case eU.Cs.Plugin:
                    case eU.Cs.PluginTool:
                      var n = (0, eU.fj)(
                          t === eU.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name
                        ),
                        r = eg.find(function (e) {
                          return (
                            e.namespace ===
                            (null == n ? void 0 : n.pluginNamespace)
                          );
                        });
                      if (r) return { avatarPlugin: r };
                      return { avatarIcon: "plugin", avatarColor: tG };
                  }
                }
                return { avatarIcon: t$, avatarColor: tW };
              },
              [ei, eM, F, eg]
            ),
            eZ = eT.avatarIcon,
            eS = eT.avatarColor,
            eI = eT.avatarPlugin,
            eR = (0, j.useCallback)(
              function (e, t, n, r) {
                _.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(t, n, i, eO.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eD = (0, j.useMemo)(
              function () {
                var e = [];
                return (
                  F.forEach(function (t, n) {
                    var r = (0, eU.rH)(t.message),
                      a = null == F ? void 0 : F[n - 1],
                      i =
                        null != a &&
                        ((0, eU.lD)(a.message) || (0, eU.qs)(t.message)),
                      s = r === eU.Cs.Text && (0, eU.RR)(t.message);
                    if (r === eU.Cs.Browsing || r === eU.Cs.BrowseTool) {
                      var o = e[e.length - 1];
                      (null == o ? void 0 : o.type) === u.Browsing
                        ? o.messages.push(t)
                        : e.push({ type: u.Browsing, messages: [t] });
                    } else if (
                      r === eU.Cs.RetrievalBrowsing ||
                      r === eU.Cs.RetrievalBrowsingTool
                    ) {
                      var l = e[e.length - 1];
                      (null == l ? void 0 : l.type) === u.RetrievalBrowsing
                        ? l.messages.push(t)
                        : e.push({ type: u.RetrievalBrowsing, messages: [t] });
                    } else if (r === eU.Cs.Plugin || r === eU.Cs.PluginTool) {
                      var c = e[e.length - 1];
                      r === eU.Cs.PluginTool &&
                      (null == c ? void 0 : c.type) === u.Plugin
                        ? c.messages.push(t)
                        : e.push({ type: u.Plugin, messages: [t] });
                    } else if (r === eU.Cs.Code)
                      e.push({ type: u.Code, message: t });
                    else if (r === eU.Cs.CodeExecutionOutput)
                      e.push({ type: u.CodeExecutionOutput, message: t });
                    else if (i && null != s) {
                      var d = e.pop();
                      (null == d ? void 0 : d.type) === u.MultiText
                        ? (d.messages.push(t), e.push(d))
                        : (null == d ? void 0 : d.type) === u.Text &&
                          e.push({
                            type: u.MultiText,
                            messages: [d.message, t],
                          });
                    } else e.push({ type: u.Text, message: t });
                  }),
                  e.map(function (t, n) {
                    var r,
                      a = n === e.length - 1;
                    switch (t.type) {
                      case u.Text:
                        return (0,
                        v.jsx)(tl.ZP, { className: "min-h-[20px]", message: t.message, isEditing: H, format: $, isCompletionInProgress: a && eM, onCreateEditNode: eR, clientThreadId: l, onUpdateNode: p, onDeleteNode: f, onChangeItemInView: c, onRequestCompletion: h, onExitEdit: ev, disabled: 0 !== y.size, isCompletion: $, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.type) === u.Plugin }, t.message.nodeId);
                      case u.MultiText:
                        return (0,
                        v.jsx)(tc, { clientThreadId: l, messages: t.messages, isCompletionInProgress: a && eM, isCompletion: $, onRequestMoreCompletions: m }, n);
                      case u.Browsing:
                      case u.RetrievalBrowsing:
                        var i = t.messages[t.messages.length - 1];
                        return (0,
                        v.jsx)(e1, { messages: t.messages, isComplete: !o || !a || 0 === y.size || tm(i.message), isRetrieval: t.type === u.RetrievalBrowsing }, t.messages[0].nodeId);
                      case u.Code:
                        var s,
                          d,
                          g = e[n + 1],
                          x =
                            g && g.type === u.CodeExecutionOutput
                              ? g.message
                              : void 0;
                        return (0,
                        v.jsx)(to, { clientThreadId: l, message: t.message, outputMessage: x, isComplete: !o || !a || 0 === y.size || ((null == (d = null === (s = null == x ? void 0 : x.message.metadata) || void 0 === s ? void 0 : s.aggregate_result) ? void 0 : d.status) !== void 0 && (null == d ? void 0 : d.status) !== "running") || tm(t.message.message) }, t.message.nodeId);
                      case u.CodeExecutionOutput:
                        return (0,
                        v.jsx)(ej, { message: t.message, isCollapsed: !1 }, t.message.nodeId);
                      case u.Plugin:
                        return (0,
                        v.jsx)(tS, { messages: t.messages }, t.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [F, H, $, eM, eR, l, p, f, c, h, ev, y.size, m, o]
            ),
            eA = (0, _.r7)(l),
            eF =
              ef.has(er.st) &&
              !Z &&
              !T &&
              !eA &&
              O &&
              $ &&
              !eM &&
              !C &&
              !H &&
              1 === W &&
              o &&
              !ew &&
              !ed &&
              2 === E.length &&
              Date.now() -
                (null !== (r = el.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5,
            eQ = (0, j.useRef)(Date.now()),
            eW = (0, j.useRef)(
              (null !== (a = el.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            e$ = (0, j.useRef)(Date.now());
          (0, j.useEffect)(
            function () {
              eM || (e$.current = Date.now());
            },
            [eM]
          );
          var eG = (0, j.useCallback)(
              function (e) {
                if (eF) {
                  var t,
                    n,
                    r = _.tQ.getTree(l),
                    a = E[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    s = i[i.length - 1],
                    o = (null == s ? void 0 : s.messages) || [],
                    c = o[o.length - 1],
                    u =
                      (null == c
                        ? void 0
                        : null === (t = c.message) || void 0 === t
                        ? void 0
                        : t.id) || "",
                    d = E[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    f = m[m.length - 1],
                    h = (null == f ? void 0 : f.messages) || [],
                    p = h[h.length - 1];
                  b(
                    u,
                    (null == p
                      ? void 0
                      : null === (n = p.message) || void 0 === n
                      ? void 0
                      : n.id) || "",
                    e,
                    eQ.current,
                    eQ.current,
                    eW.current,
                    e$.current
                  ),
                    _.tQ.updateTree(l, function (t) {
                      t.updateNode(el.nodeId, {
                        metadata: {
                          $set: (0, eu._)(
                            (0, g._)({}, t.getMetadata(el.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    eC(e),
                    _.tQ.updateTree(l, function (e) {
                      e.updateNode(c.nodeId, {
                        metadata: {
                          $set: (0, eu._)(
                            (0, g._)({}, e.getMetadata(c.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eF, el.nodeId, b, l, E]
            ),
            eV = (0, j.useCallback)(
              function () {
                _.tQ.updateTree(l, function (e) {
                  e.updateNode(el.nodeId, {
                    metadata: {
                      $set: (0, eu._)((0, g._)({}, e.getMetadata(el.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  eC("skip");
              },
              [el.nodeId, l]
            ),
            eJ = $ && !C && !T && !eA,
            eY = !T && !C && !H,
            eK = !$ && !C && !T && !ea && 1 === F.length && !H;
          if (A.role === eO.uU.Unknown || A.role === eO.uU.System) return null;
          var eX = eK
              ? (0, v.jsx)(t1, {
                  $isMessageRedesign: V,
                  onClick: ex,
                  className: (0, U.Z)(
                    !V && O && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, v.jsx)(es.ZP, { icon: k.vPQ }),
                })
              : null,
            e0 =
              $ && !C
                ? (0, v.jsx)(eH.Z, {
                    onCopy: eb,
                    className: (0, U.Z)(
                      "rounded-md p-1",
                      V
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e2 =
              eJ && !Z
                ? (0, v.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== ed &&
                        !G &&
                        (0, v.jsx)(
                          t1,
                          {
                            $isMessageRedesign: V,
                            onClick: function () {
                              return ey("thumbsUp");
                            },
                            disabled: "thumbsUp" === ed,
                            className: (0, U.Z)(
                              "thumbsUp" === ed &&
                                (V
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, v.jsx)(es.ZP, { icon: k.fmn }),
                          },
                          "thumbsUp:".concat(el.nodeId)
                        ),
                      "thumbsUp" !== ed &&
                        !G &&
                        (0, v.jsx)(
                          t1,
                          {
                            $isMessageRedesign: V,
                            onClick: function () {
                              return ey("thumbsDown");
                            },
                            disabled: "thumbsDown" === ed,
                            className: (0, U.Z)(
                              "thumbsDown" === ed &&
                                (V
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, v.jsx)(es.ZP, { icon: k.oLd }),
                          },
                          "thumbsDown:".concat(el.nodeId)
                        ),
                    ],
                  })
                : null,
            e3 =
              eF && !G
                ? (0, v.jsxs)(t5, {
                    children: [
                      (0, v.jsx)("div", {
                        className: (0, U.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, v.jsxs)(t0, {
                        onClick: function () {
                          return eG("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: k.fmn,
                            className: (0, U.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, v.jsxs)(t0, {
                        onClick: function () {
                          return eG("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: k.oLd,
                            className: (0, U.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, v.jsxs)(t0, {
                        onClick: function () {
                          return eG("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: eE.Ny3,
                            className: (0, U.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, v.jsx)(t0, {
                        onClick: eV,
                        title: "Skip this comparison",
                        children: (0, v.jsx)(es.ZP, {
                          icon: k.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e5 = eY && E.length > 1,
            e4 = function () {
              return (0, v.jsxs)("div", {
                className: "flex gap-1",
                children: [e2, eX, e0],
              });
            },
            e7 =
              null === (n = F[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            e6 = null != e7;
          return (0, v.jsxs)(tJ, {
            className: (0, U.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              V
                ? (0, U.Z)(
                    "sm:rounded-2xl",
                    $
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, U.Z)(
                    !C && "border-b border-black/10 dark:border-gray-900/50",
                    $ ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: eo,
            children: [
              eP && (0, v.jsx)(t3, { children: eP }),
              (0, v.jsxs)(tK, {
                $isStaticSharedThread: T,
                $isDesktopNavCollapsed: en,
                $isMessageRedesign: V,
                className: (0, U.Z)(C ? "ml-5" : "m-auto"),
                children: [
                  (0, v.jsxs)(tX, {
                    children: [
                      (0, v.jsx)("div", {
                        className: V ? "" : "w-[30px]",
                        children: $
                          ? eI
                            ? (0, v.jsx)(ez.Ph, {
                                plugin: eI,
                                notice: eN || void 0,
                              })
                            : (0, v.jsx)(ez.k$, {
                                background: null != P ? P : eS,
                                iconName: eZ,
                                notice: eN || void 0,
                              })
                          : e6 || C
                          ? (0, v.jsx)(ez.k$, {
                              background:
                                tQ[
                                  (null !==
                                    (t =
                                      null == e7 ? void 0 : e7.charCodeAt(0)) &&
                                  void 0 !== t
                                    ? t
                                    : 0) % tQ.length
                                ],
                              iconName: "user",
                            })
                          : (0, v.jsx)(ez.Yt, {
                              user: null == L ? void 0 : L.user,
                              notice: eN || void 0,
                              size: V ? "redesign" : "medium",
                            }),
                      }),
                      !V &&
                        eY &&
                        O &&
                        (0, v.jsx)(tD.Z, {
                          currentPage: W,
                          onChangeIndex: function (e) {
                            return c(E[e]);
                          },
                          length: E.length,
                          className: (0, U.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            E.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, v.jsxs)("div", {
                    className: (0, U.Z)(
                      "relative",
                      V
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      V &&
                        (0, v.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: $ ? "ChatGPT" : e6 ? "User" : "You",
                        }),
                      (0, v.jsx)(tY, { children: eD }),
                      V
                        ? (!O || e5 || null != e3) &&
                          !C &&
                          (0, v.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, v.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e5 &&
                                    (0, v.jsx)(tD.Z, {
                                      currentPage: W,
                                      onChangeIndex: function (e) {
                                        return c(E[e]);
                                      },
                                      length: E.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !O && e4(),
                                ],
                              }),
                              e3,
                            ],
                          })
                        : (0, v.jsxs)(v.Fragment, {
                            children: [
                              eK &&
                                O &&
                                (0, v.jsx)(t2, {
                                  $hidden: 0 !== y.size,
                                  children: eX,
                                }),
                              (eJ || eY) &&
                                (0, v.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !O &&
                                      eY &&
                                      (0, v.jsx)(tD.Z, {
                                        currentPage: W,
                                        onChangeIndex: function (e) {
                                          return c(E[e]);
                                        },
                                        length: E.length,
                                        className: (0, U.Z)(
                                          "self-center pt-2",
                                          E.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eK &&
                                      !O &&
                                      (0, v.jsx)(t2, {
                                        $hidden: eM,
                                        children: eX,
                                      }),
                                    eJ &&
                                      (0, v.jsxs)(t2, {
                                        $hidden: eM,
                                        children: [e0, e2],
                                      }),
                                    eF && !G && e3,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  V &&
                    O &&
                    !H &&
                    !C &&
                    (!T || $) &&
                    (0, v.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e4(),
                    }),
                ],
              }),
            ],
          });
        }),
        tJ = X.Z.div(tB()),
        tY = X.Z.div(tF()),
        tK = X.Z.div(
          tE(),
          function (e) {
            return e.$isMessageRedesign
              ? "relative"
              : e.$isDesktopNavCollapsed
              ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
              : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
          },
          function (e) {
            return e.$isStaticSharedThread ? "pl-0 pr-4" : "";
          }
        ),
        tX = X.Z.div(tL()),
        t0 = X.Z.button(tO()),
        t1 = X.Z.button(tU(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        t2 = X.Z.div(tq(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        t3 = X.Z.div(tz()),
        t5 = X.Z.div(tH()),
        t4 = n(75318);
      function t7() {
        var e = (0, O._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, O._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t8() {
        var e = (0, O._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        var e = (0, O._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, O._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = (0, O._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = (0, O._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = (0, O._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      function na() {
        var e = (0, O._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (na = function () {
            return e;
          }),
          e
        );
      }
      var ni = X.Z.div(t7()),
        ns = X.Z.h1(t6()),
        no = X.Z.div(t8()),
        nl = X.Z.div(t9()),
        nc = X.Z.h2(ne()),
        nu = X.Z.ul(nt()),
        nd = X.Z.li(nn());
      X.Z.li(nr());
      var nm = X.Z.button(na());
      function nf(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          r = (0, j.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, v.jsxs)(nm, { onClick: r, children: ['"', t, '" →'] });
      }
      function nh(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef;
        return (0, v.jsxs)(ni, {
          children: [
            (0, v.jsxs)(ns, { children: ["ChatGPT", (0, v.jsx)(eF.ZP, {})] }),
            (0, v.jsxs)(no, {
              children: [
                (0, v.jsxs)(nl, {
                  children: [
                    (0, v.jsxs)(nc, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: k.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, v.jsxs)(nu, {
                      children: [
                        (0, v.jsx)(nf, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, v.jsx)(nf, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, v.jsx)(nf, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(nl, {
                  children: [
                    (0, v.jsxs)(nc, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: t4.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, v.jsxs)(nu, {
                      children: [
                        (0, v.jsx)(nd, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, v.jsx)(nd, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, v.jsx)(nd, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(nl, {
                  children: [
                    (0, v.jsxs)(nc, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: k.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, v.jsxs)(nu, {
                      children: [
                        (0, v.jsx)(nd, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, v.jsx)(nd, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, v.jsx)(nd, {
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
      var ng = n(15838),
        np = n(37812),
        nx = n(75515),
        nv = n(99453),
        nb = n(5046),
        ny = n(97732);
      function nj(e) {
        var t = e.onModelChange,
          n = e.currentModel,
          r = (0, ee.WS)(),
          a = (0, nb.BT)(),
          i = (0, ny.ZP)(),
          s = (0, j.useCallback)(
            function (e) {
              a !== e && (t(e), r(et.s6.toggleModel, { model: e }));
            },
            [a, r, t]
          );
        return (0, v.jsx)(nv.Z, {
          value: null == n ? void 0 : n.id,
          onChange: s,
          items: i,
        });
      }
      var nk = n(20485),
        nw = n(12285),
        nC = n(40638),
        n_ = n(57526),
        nM = n(99581);
      function nN() {
        var e = (0, O._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (nN = function () {
            return e;
          }),
          e
        );
      }
      function nP() {
        var e = (0, O._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (nP = function () {
            return e;
          }),
          e
        );
      }
      function nT() {
        var e = (0, O._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (nT = function () {
            return e;
          }),
          e
        );
      }
      function nZ() {
        var e = (0, O._)(["flex items-center gap-2 truncate"]);
        return (
          (nZ = function () {
            return e;
          }),
          e
        );
      }
      function nS() {
        var e = (0, O._)(["h-6 w-6 shrink-0"]);
        return (
          (nS = function () {
            return e;
          }),
          e
        );
      }
      function nI() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (nI = function () {
            return e;
          }),
          e
        );
      }
      function nR() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (nR = function () {
            return e;
          }),
          e
        );
      }
      var nD = ["confidential", "alpha", "plus"];
      function nA(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          s = e.onClose,
          o = e.dropdownRef,
          l = (0, p._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          c = (0, j.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(t);
              } else r(e);
            },
            [r, a]
          );
        return (0, v.jsx)(nw.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: c,
          children: function (e) {
            var r = e.open;
            return (0, v.jsx)(
              nB,
              (0, g._)(
                {
                  ref: o,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: s,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var nB = (0, j.forwardRef)(function (e, t) {
        var n = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          s = e.actions,
          o = e.multiple,
          l = e.isLoading,
          c = e.loadingState,
          u = e.header,
          d = e.onOpen,
          m = e.onClose,
          f = e.theme,
          h = (0, j.useRef)(null),
          g = (0, j.useRef)(null),
          p = (0, D.oc)();
        (0, j.useImperativeHandle)(
          t,
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
        var x = l
          ? c ||
            (0, v.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, v.jsx)(eR.Z, {}),
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                u,
                (0, v.jsxs)(nw.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, v.jsx)(
                        nF,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (t) {
                            var n = t.selected,
                              r = t.active;
                            return (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsxs)(nG, {
                                  children: [
                                    e.imageUrl &&
                                      (0, v.jsx)(nV, {
                                        children: (0, v.jsx)(nx.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, v.jsxs)("span", {
                                      className: (0, U.Z)(
                                        n && !o && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return nq(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                o && !e.disabled
                                  ? (0, v.jsx)(nL, { theme: f, selected: n })
                                  : n &&
                                    (0, v.jsx)(nE, {
                                      theme: f,
                                      icon: "mini" === f ? es.HQ : k.UgA,
                                    }),
                                e.disabled &&
                                  (0, v.jsx)(nE, {
                                    theme: f,
                                    icon: n_.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, nM.createPortal)(
                                    (0, v.jsx)(nU, {
                                      option: e,
                                      dropdownRef: g,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        t
                      );
                    }),
                    null == s
                      ? void 0
                      : s.map(function (e, t) {
                          return (0, v.jsx)(
                            nF,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, v.jsx)(nE, { theme: f, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        v.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, v.jsxs)(nw.R.Button, { ref: h, onClick: a ? m : d, className: (0, U.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === f ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== f && (0, v.jsx)(nw.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, v.jsx)("span", { className: "inline-flex w-full truncate", children: (0, v.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, v.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, v.jsx)(es.ZP, { icon: k.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, v.jsx)(nC.u, { show: a, as: j.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, v.jsx)(nH, { ref: g, children: x }) })] });
      });
      function nF(e) {
        var t = e.value,
          n = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, v.jsx)(nw.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, U.Z)(
              "mini" === a ? nW : n$,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: r,
        });
      }
      function nE(e) {
        var t = e.icon,
          n = e.className,
          r = e.theme;
        return (0, v.jsx)("mini" === r ? nJ : nY, {
          children: (0, v.jsx)(es.ZP, {
            icon: t,
            className: (0, U.Z)("h-5 w-5", n),
            "aria-hidden": "true",
          }),
        });
      }
      function nL(e) {
        var t = e.selected,
          n = e.disabled;
        return "mini" === e.theme
          ? (0, v.jsxs)(nJ, {
              children: [
                (0, v.jsx)(es.ZP, {
                  icon: t ? es.HQ : es.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: t ? 2.5 : 2,
                }),
                !t &&
                  (0, v.jsx)(es.ZP, {
                    icon: es.nQ,
                    className: (0, U.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !n && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, v.jsx)(nY, {
              children: (0, v.jsx)("div", {
                className: (0, U.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  t
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, v.jsx)(es.ZP, {
                  icon: k.UgA,
                  className: (0, U.Z)(
                    "h-3 w-3 transition-opacity",
                    t && "opacity-100",
                    !t && "opacity-0",
                    !t && !n && "group-hover:opacity-50"
                  ),
                  strokeWidth: t ? 2.5 : 2,
                }),
              }),
            });
      }
      function nO(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)("mini" === n ? nW : n$, "cursor-auto"),
          children: [
            (0, v.jsxs)(nG, {
              children: [
                (0, v.jsx)(nV, {
                  children: (0, v.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, v.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, v.jsx)(nL, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function nU(e) {
        var t = e.option,
          n = e.dropdownRef,
          r = (0, x._)((0, j.useState)(), 2),
          a = r[0],
          i = r[1];
        return ((0, j.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
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
          [n]
        ),
        a)
          ? (0, v.jsxs)(nQ, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, v.jsx)(es.ZP, {
                    icon: n_.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, v.jsx)(nx.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70,
                  }),
                (0, v.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return nq(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, v.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var nq = function (e) {
          return (
            nD.includes(e) &&
            (0, v.jsx)(
              "span",
              {
                className: (0, U.Z)(
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
        nz = X.Z.div(nN()),
        nH = (0, X.Z)(nz)(nP()),
        nQ = (0, X.Z)(nz)(nT()),
        nW =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        n$ =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        nG = X.Z.span(nZ()),
        nV = X.Z.span(nS()),
        nJ = X.Z.span(nI()),
        nY = X.Z.span(nR()),
        nK = n(97688),
        nX = n(697),
        n0 = n(10604),
        n1 = n(5759),
        n2 = n(17915),
        n3 = n(38631);
      function n5() {
        var e = (0, O._)(["mt-4 flex flex-col gap-4"]);
        return (
          (n5 = function () {
            return e;
          }),
          e
        );
      }
      function n4() {
        var e = (0, O._)(["text-sm text-red-500"]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      var n7 = X.Z.div(n5()),
        n6 = X.Z.div(n4()),
        n8 = n(49910);
      function n9(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(), 2),
          l = o[0],
          c = o[1],
          u = (0, x._)((0, j.useState)(!1), 2),
          d = u[0],
          m = u[1],
          f = (0, j.useCallback)(function (e) {
            s(e);
          }, []),
          h = (0, j.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, v.jsx)(ra, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, v.jsx)(rr, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, v.jsx)(rn, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: c,
              onReadyToInstall: h,
              onInstallLocalhost: n,
              onClose: r,
            })
          : (0, v.jsx)(re, { onFetch: f, onClose: r });
      }
      function re(e) {
        var t = e.onFetch,
          n = e.onClose,
          r = (0, eh.kP)().session,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)("bearer"), 2),
          l = o[0],
          c = o[1],
          u = (0, x._)((0, j.useState)(), 2),
          d = u[0],
          m = u[1],
          f = (0, j.useRef)(null),
          h = (0, j.useRef)(null),
          g = (0, n2.sd)(),
          p = g.fetchManifestAndSpec,
          b = g.isLoading;
        (0, j.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var y = (0, j.useCallback)(function () {
            s(function (e) {
              return !e;
            });
          }, []),
          w = (0, j.useCallback)(function (e) {
            c(e.target.value);
          }, []),
          C = (0, j.useCallback)(
            (0, ec._)(function () {
              var e, n, r;
              return (0, ed.Jh)(this, function (a) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (n = h.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
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
            [p, t, l, i]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: C,
            loading: b,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, v.jsxs)(n7, {
            children: [
              (0, v.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, v.jsxs)(n1.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, v.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, v.jsx)(n0.Z, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: C,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, eh.yl)(r.user) &&
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: y,
                      children: [
                        (0, v.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, v.jsx)(es.ZP, { icon: i ? k.rH8 : k.bTu }),
                      ],
                    }),
                    i &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, v.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, v.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, v.jsx)(rt, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: w,
                                  }),
                                  (0, v.jsx)(rt, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, v.jsx)("div", { children: "Access token" }),
                              (0, v.jsx)(n0.Z, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, v.jsx)(n6, { children: d }),
            ],
          }),
        });
      }
      function rt(e) {
        var t = e.label,
          n = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, v.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, v.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function rn(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          s = e.onClose,
          o = t.domain,
          l = t.manifestAccessToken,
          c = t.scrapeManifestResponse,
          u = t.apiValidationInfo,
          d = c.plugin,
          m = c.manifest_validation_info,
          f = (0, x._)((0, j.useState)(), 2),
          h = f[0],
          g = f[1],
          p = (0, x._)((0, j.useState)(!1), 2),
          y = p[0],
          k = p[1],
          w = (0, j.useRef)(null),
          C = (0, j.useRef)(null),
          _ = (0, j.useRef)(null),
          M = (0, n2.sd)(),
          N = M.fetchManifestAndSpec,
          P = M.isLoading,
          T = (0, b.NL)(),
          Z = d && (0, td.cf)(d),
          S = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          I = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          R =
            (m.errors && m.errors.length > 0) ||
            ((null == u ? void 0 : u.errors) &&
              (null == u ? void 0 : u.errors.length) > 0),
          D = (0, j.useCallback)(
            (0, ec._)(function () {
              var e, t, c, u, m;
              return (0, ed.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!R) return [3, 1];
                    return (
                      N({
                        domain: o,
                        manifestAccessToken: l,
                        onSuccess: n,
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
                    if (!Z) return [3, 2];
                    return (0, n2.GI)(d, T, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!S) return [3, 8];
                    if (
                      !(null === (e = w.current) || void 0 === e
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
                      k(!0),
                      [
                        4,
                        en.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: w.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return k(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!I) return [3, 14];
                    if (
                      ((u =
                        null === (t = C.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (m =
                        null === (c = _.current) || void 0 === c
                          ? void 0
                          : c.value),
                      !u || !m)
                    )
                      return g("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        en.ZP.setPluginOAuthClientCredentials({
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
                    return k(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : s(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [S, I, d, o, l, R, Z, T, N, n, r, a, i, s]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: R
              ? "Refetch manifest"
              : Z
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: D,
            loading: y || P,
          }),
          secondaryButton:
            (R || S || I) &&
            (0, v.jsx)(eS.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: s,
            }),
          children: (0, v.jsxs)(n7, {
            children: [
              (0, v.jsx)(n8.rC, { manifestValidationInfo: m }),
              u && (0, v.jsx)(n8.q6, { apiValidationInfo: u }),
              d && (0, v.jsx)(n3.Z, { plugin: d }),
              S &&
                !R &&
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(n0.Z, {
                        ref: w,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              I &&
                !R &&
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(n0.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(n0.Z, {
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
              h && (0, v.jsx)(n6, { children: h }),
            ],
          }),
        });
      }
      function rr(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          s = (0, x._)((0, j.useState)(), 2),
          o = s[0],
          l = s[1],
          c = (0, x._)((0, j.useState)(!1), 2),
          u = c[0],
          d = c[1],
          m = (0, j.useCallback)(
            (0, ec._)(function () {
              var e, i;
              return (0, ed.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      s.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        en.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = s.sent().plugin)) {
                      for (var o in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[o] !== i[o])
                          return (
                            l(
                              'Please add the "'.concat(
                                o,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return s.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, r, a]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: u,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, v.jsxs)(n7, {
            children: [
              (0, v.jsx)(n3.Z, { plugin: t }),
              (0, v.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, v.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              o && (0, v.jsx)(n6, { children: o }),
            ],
          }),
        });
      }
      function ra(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          r = e.onClose,
          a = (0, j.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, v.jsx)(n7, {
            children: (0, v.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, v.jsx)("a", {
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
                (0, v.jsx)("a", {
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
      function ri(e) {
        var t = e.onConfirm,
          n = e.onClose;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, v.jsx)(n7, {
            children: (0, v.jsx)(n1.I, {
              children: (0, v.jsx)(n1.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function rs(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(t), 2),
          l = o[0],
          c = o[1],
          u = (0, j.useCallback)(function () {
            s(!0);
          }, []);
        return l
          ? i
            ? (0, v.jsx)(rl, { plugin: l, onInstall: n, onClose: r })
            : (0, v.jsx)(ri, { onConfirm: u, onClose: r })
          : (0, v.jsx)(ro, { onLoad: c, onClose: r });
      }
      function ro(e) {
        var t = e.onLoad,
          n = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(), 2),
          l = o[0],
          c = o[1];
        (0, j.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var u = (0, j.useCallback)(
          (0, ec._)(function () {
            var e, n, a;
            return (0, ed.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return c("Please provide a URL."), [2];
                  if ((0, td.NB)(n))
                    return (
                      c(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    s(!0),
                    [4, en.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? t(a) : c("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), c("Couldn't find plugin."), [3, 5];
                case 4:
                  return s(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, s, c]
        );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: u,
            loading: i,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, v.jsxs)(n7, {
            children: [
              (0, v.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, v.jsx)(n0.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: u,
              }),
              l && (0, v.jsx)(n6, { children: l }),
            ],
          }),
        });
      }
      function rl(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          c = o[1],
          u = (0, j.useRef)(null),
          d = (0, n2.U$)({
            onSuccess: function (e) {
              n(e), r();
            },
            onError: function (e) {
              s("Couldn't install plugin.");
            },
          }),
          m = (0, I.hz)(),
          f = t.manifest.name_for_human,
          h = "user_http" === t.manifest.auth.type,
          g = "oauth" === t.manifest.auth.type,
          p = (0, j.useCallback)(
            (0, ec._)(function () {
              var e, n;
              return (0, ed.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!g) return [3, 1];
                    if (m.has("new_plugin_oauth_endpoint"))
                      return (0, n2.Up)(t), [2];
                    return (
                      (e = (0, n2.nT)(t))
                        ? (window.location.href = e)
                        : s("Missing plugin configuration for ".concat(f, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!h) return [3, 7];
                    if (
                      !(null === (n = u.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return s("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      c(!0),
                      [
                        4,
                        en.ZP.setPluginUserHttpToken({
                          id: t.id,
                          userAccessToken: u.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(t.id), [3, 6];
                  case 4:
                    return r.sent(), s("Couldn't install plugin."), [3, 6];
                  case 5:
                    return c(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      c(!0), d(t.id);
                    } catch (e) {
                      s("Couldn't install plugin.");
                    } finally {
                      c(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [m, t, f, g, h, d]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: g ? "Log in with ".concat(f) : "Install plugin",
            color: "primary",
            onClick: p,
            loading: l,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, v.jsxs)(n7, {
            children: [
              (0, v.jsx)(n3.Z, { plugin: t }),
              h &&
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(n0.Z, {
                        ref: u,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: p,
                      }),
                    }),
                  ],
                }),
              g &&
                (0, v.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, v.jsx)("span", {
                      className: "font-medium",
                      children: f,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, v.jsx)(n6, { children: i }),
            ],
          }),
        });
      }
      var rc = n(96237),
        ru = n(86433),
        rd = n(95552),
        rm = n.n(rd),
        rf = n(76559),
        rh = n(74437);
      ((i = d || (d = {}))[(i.All = 0)] = "All"),
        (i[(i.Installed = 1)] = "Installed"),
        ((s = m || (m = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var rg = [
        { id: m.Popular, title: "Popular" },
        { id: m.New, title: "New" },
        { id: d.All, title: "All" },
        { id: d.Installed, title: "Installed" },
      ];
      function rp(e, t) {
        var n = t.findIndex(function (t) {
          return t.domain === e;
        });
        if (-1 !== n) {
          var r = t.splice(n, 1)[0];
          t.unshift(r);
        }
      }
      function rx(e, t) {
        return (0, j.useMemo)(
          function () {
            return "" !== t
              ? e
                  .map(function (e) {
                    return {
                      plugin: e,
                      score: (function (e, t) {
                        var n = t.toLowerCase(),
                          r = n.trim().split(/\s+/),
                          a = e.manifest.description_for_human.toLowerCase(),
                          i = e.manifest.name_for_human.toLowerCase(),
                          s = 0;
                        if (i === n || e.domain.toLowerCase() === n) return 1e3;
                        if (i.startsWith(n)) return 500;
                        if (i.includes(n)) return 100;
                        var o = !0,
                          l = !1,
                          c = void 0;
                        try {
                          for (
                            var u, d = r[Symbol.iterator]();
                            !(o = (u = d.next()).done);
                            o = !0
                          ) {
                            var m = u.value;
                            if (i.startsWith(m)) s += 50;
                            else if (i.includes(m)) s += 10;
                            else {
                              if (!a.includes(m)) return 0;
                              s += 1;
                            }
                          }
                        } catch (e) {
                          (l = !0), (c = e);
                        } finally {
                          try {
                            o || null == d.return || d.return();
                          } finally {
                            if (l) throw c;
                          }
                        }
                        return s;
                      })(e, t),
                    };
                  })
                  .filter(function (e) {
                    return e.score > 0;
                  })
                  .sort(function (e, t) {
                    return t.score - e.score;
                  })
                  .map(function (e) {
                    return e.plugin;
                  })
              : e.sort(function (e, t) {
                  return e.manifest.name_for_human.localeCompare(
                    t.manifest.name_for_human
                  );
                });
          },
          [e, t]
        );
      }
      function rv(e) {
        var t = e.page,
          n = e.numPages,
          r = e.goToPage,
          a = t > 0,
          i = t < n - 1,
          s = (0, j.useCallback)(
            function () {
              r(Math.max(t - 1, 0));
            },
            [t, r]
          ),
          o = (0, j.useCallback)(
            function () {
              r(Math.min(t + 1, n - 1));
            },
            [t, n, r]
          ),
          l = [],
          c = !0,
          u = !1,
          d = void 0;
        try {
          for (
            var m,
              f = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  r = Math.max(0, t - n + 1);
                if (0 === r) return rb(0, t);
                var a = rb(0, e),
                  i = rb(e + 1, t);
                if (r < i.length - 1)
                  i.splice(Math.floor((i.length - r) / 2), r, -1);
                else if (r < a.length - 1)
                  a.splice(Math.floor((a.length - r) / 2), r, -1);
                else {
                  var s = Math.min(i.length - 3, r),
                    o = r - s + 1;
                  i.splice(Math.floor((i.length - s) / 2), s, -1),
                    a.splice(Math.floor((a.length - o) / 2), o, -2);
                }
                return (0, eD._)(a).concat([e], (0, eD._)(i));
              })(t, n)[Symbol.iterator]();
            !(c = (m = f.next()).done);
            c = !0
          )
            !(function () {
              var e = m.value;
              e < 0
                ? l.push(
                    (0, v.jsx)(
                      "div",
                      {
                        role: "button",
                        className: "flex h-5 w-5 items-center justify-center",
                        children: "…",
                      },
                      "ellipsis-".concat(e)
                    )
                  )
                : l.push(
                    (0, v.jsx)(
                      rR,
                      {
                        role: "button",
                        className: (0, U.Z)(
                          "flex h-5 w-5 items-center justify-center",
                          e === t &&
                            "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                        ),
                        onClick: function () {
                          return r(e);
                        },
                        children: e + 1,
                      },
                      e
                    )
                  );
            })();
        } catch (e) {
          (u = !0), (d = e);
        } finally {
          try {
            c || null == f.return || f.return();
          } finally {
            if (u) throw d;
          }
        }
        return (0, v.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, v.jsxs)(rR, {
              role: "button",
              className: (0, U.Z)("flex items-center", !a && "opacity-50"),
              onClick: s,
              $disabled: !a,
              children: [(0, v.jsx)(es.ZP, { icon: k.YFh }), "Prev"],
            }),
            l,
            (0, v.jsxs)(rR, {
              role: "button",
              className: (0, U.Z)("flex items-center", !i && "opacity-50"),
              onClick: o,
              $disabled: !i,
              children: ["Next", (0, v.jsx)(es.ZP, { icon: k.Tfp })],
            }),
          ],
        });
      }
      function rb(e, t) {
        return Array.from({ length: t - e }, function (t, n) {
          return n + e;
        });
      }
      function ry(e) {
        var t = e.onClose,
          n = (0, ru.S)().setupMfa;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, v.jsx)(n7, {
            children: (0, v.jsx)(n1.I, {
              children: (0, v.jsx)(n1.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function rj() {
        var e = (0, O._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      function rk() {
        var e = (0, O._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (rk = function () {
            return e;
          }),
          e
        );
      }
      var rw =
          ((f = {}),
          (0, rc._)(f, D._G.Mobile, 8),
          (0, rc._)(f, D._G.Small, 4),
          (0, rc._)(f, D._G.Medium, 4),
          (0, rc._)(f, D._G.Large, 6),
          (0, rc._)(f, D._G.XLarge, 8),
          f),
        rC = (0, C.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.searchPlaceholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.noSearchResults",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.noSearchResultsHint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
          installUnverifiedPlugin: {
            id: "PluginStoreModal.installUnverifiedPlugin",
            defaultMessage: "Install an unverified plugin",
            description: "Link to dialog to install an unverified plugin",
          },
          developPlugin: {
            id: "PluginStoreModal.developPlugin",
            defaultMessage: "Develop your own plugin",
            description: "Link to dialog to develop your own plugin",
          },
          aboutPlugins: {
            id: "PluginStoreModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Link to learn more about plugins",
          },
        }),
        r_ = m.Popular;
      function rM(e) {
        var t,
          n,
          r,
          a = e.onInstallWithAuthRequired,
          i = e.onClickInstallDeveloper,
          s = e.onClickDevelop,
          o = e.onClickAbout,
          l = e.onClose,
          c = (0, K.Z)(),
          u = (0, I.hz)(),
          m = (0, x._)((0, j.useState)(r_), 2),
          f = m[0],
          h = m[1],
          p = (0, x._)((0, j.useState)(""), 2),
          b = p[0],
          y = p[1],
          C = ((n = (t = (0, rh.C)()).isLoading),
          (r = t.installedPlugins),
          {
            availableFilters: (0, j.useMemo)(
              function () {
                return rg.filter(function (e) {
                  return e.id !== d.Installed || r.length > 0;
                });
              },
              [r]
            ),
            isLoading: n,
          }).availableFilters;
        (0, j.useEffect)(
          function () {
            C.some(function (e) {
              return e.id === f;
            }) || h(r_);
          },
          [f, C]
        );
        var _ = (0, j.useCallback)(function (e) {
          y(e), h(d.All);
        }, []);
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: l,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: "Plugin store",
          closeButton: (0, v.jsx)(eS.ZP.CloseButton, { onClose: l }),
          children: (0, v.jsxs)(n7, {
            children: [
              C.length > 1 &&
                (0, v.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    C.map(function (e) {
                      return (0, v.jsx)(
                        rP,
                        {
                          selected: f === e.id,
                          onClick: function () {
                            h(e.id);
                          },
                          children: e.title,
                        },
                        e.id
                      );
                    }),
                    (0, v.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, v.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                          children: (0, v.jsx)(es.ZP, {
                            icon: k.jRj,
                            className:
                              "h-5 w-5 text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, v.jsx)(n0.Z, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: c.formatMessage(rC.searchPlaceholder),
                          value: b,
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, v.jsx)(rN, {
                filter: f,
                query: b,
                onInstallWithAuthRequired: a,
                children: (0, v.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    u.has("tools3_dev") &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)(rR, {
                            onClick: i,
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, rC.installUnverifiedPlugin)
                            ),
                          }),
                          (0, v.jsx)(rD, {}),
                          (0, v.jsx)(rR, {
                            onClick: s,
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, rC.developPlugin)
                            ),
                          }),
                          (0, v.jsx)(rD, {}),
                        ],
                      }),
                    (0, v.jsx)(rR, {
                      onClick: o,
                      children: (0, v.jsx)(w.Z, (0, g._)({}, rC.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function rN(e) {
        var t,
          n,
          r,
          a,
          i,
          s,
          o,
          l,
          c,
          u,
          f,
          h,
          g,
          b,
          y,
          k,
          w,
          C,
          _,
          M,
          N,
          P,
          T,
          Z,
          S,
          I,
          R = e.filter,
          A = e.query,
          B = e.onInstallWithAuthRequired,
          F = e.children,
          E = rw[(0, D.dQ)()],
          L = (0, x._)((0, j.useState)(0), 2),
          O = L[0],
          U = L[1],
          q =
            ((c = (o = { pageSize: E, filter: R, query: A, page: O }).filter),
            (u = o.query),
            (f = o.page),
            (h = o.pageSize),
            (g = (0, eh.kP)().session),
            (y = (b = (0, rh.C)()).installedPlugins),
            (k = b.isLoading),
            (C = (w = (0, rf.Z)()).approvedPlugins),
            (_ = w.isLoading),
            (M = w.approvedPluginsByCategory),
            (P = (function (e, t) {
              for (
                var n = (0, eD._)(e), r = rm()(t), a = n.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  s = Math.floor(r() * (a + 1));
                (i = [n[s], n[a]]), (n[a] = i[0]), (n[s] = i[1]);
              }
              return (
                rp("retrieval.apps.openai.com", n),
                rp("retrieval-browsing.apps.openai.com", n),
                rp("api.openai.com", n),
                n
              );
            })(
              (N = rx(
                (0, j.useMemo)(
                  function () {
                    if (c === d.All) return C;
                    if (c && Object.values(m).includes(c)) {
                      var e, t;
                      return null !==
                        (t =
                          null === (e = M[c]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== t
                        ? t
                        : [];
                    }
                    return [];
                  },
                  [C, c, M]
                ),
                u
              )),
              (null == g
                ? void 0
                : null === (l = g.user) || void 0 === l
                ? void 0
                : l.id) || ""
            )),
            (T = rx(y, u)),
            (Z = []),
            (S = !1),
            c === d.Installed
              ? ((Z = T), (S = k))
              : u
              ? ((Z = N), (S = _))
              : ((Z = P), (S = _)),
            {
              isLoading: S,
              items: ((n = (t = { page: f, items: Z, pageSize: h }).page),
              (r = t.items),
              (a = t.pageSize),
              (i = Math.ceil(r.length / a)),
              (s = n * a),
              (I = { pagesTotal: i, pageItems: r.slice(s, s + a) })).pageItems,
              pagination: (0, p._)(I, ["pageItems"]),
            }),
          z = q.isLoading,
          H = q.items,
          Q = q.pagination.pagesTotal;
        (0, j.useEffect)(
          function () {
            U(0);
          },
          [R, A]
        );
        var W = (0, x._)((0, j.useState)(!1), 2),
          $ = W[0],
          G = W[1];
        return $
          ? (0, v.jsx)(ry, {
              onClose: function () {
                G(!1);
              },
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(rT, {
                  plugins: H,
                  numSkeletons: E,
                  query: A,
                  isLoading: z,
                  onInstallWithAuthRequired: B,
                  onRequestMfa: function () {
                    return G(!0);
                  },
                }),
                (0, v.jsxs)("div", {
                  className:
                    "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                  children: [
                    (0, v.jsx)("div", {
                      className:
                        "flex flex-1 justify-start max-lg:justify-center",
                      children:
                        Q > 1 &&
                        (0, v.jsx)(rv, { page: O, numPages: Q, goToPage: U }),
                    }),
                    F,
                  ],
                }),
              ],
            });
      }
      function rP(e) {
        var t = e.selected,
          n = e.onClick,
          r = e.children;
        return (0, v.jsx)(ei.z, {
          color: t ? "light" : "neutral",
          className: (0, U.Z)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50"
          ),
          onClick: n,
          children: r,
        });
      }
      function rT(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = e.query;
        if (0 === t.length && !r && s)
          return (0, v.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, v.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, v.jsx)(
                  w.Z,
                  (0, eu._)((0, g._)({}, rC.noSearchResultsTitle), {
                    values: { query: s },
                  })
                ),
              }),
              (0, v.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, v.jsx)(w.Z, (0, g._)({}, rC.noSearchResultsHint)),
              }),
            ],
          });
        var o = r
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, v.jsx)(rS, {}, t);
              })
          : t.map(function (e) {
              return (0,
              v.jsx)(rZ, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, v.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function rZ(e) {
        var t,
          n,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          c = (0, x._)((0, j.useState)(!1), 2),
          u = c[0],
          d = c[1],
          m = (0, n2.U$)({
            onSuccess: function (e) {
              (0, nX.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                nK.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, n2.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                nK.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          h = (0, eh.kP)().session,
          g = (0, I.hz)(),
          p = (0, ru.S)().isUsernamePassword,
          b = (0, j.useCallback)(
            function () {
              var e,
                t = r.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                g.has(er.i) &&
                p
              ) {
                i();
                return;
              }
              if ("oauth" === t) {
                if (g.has("new_plugin_oauth_endpoint")) {
                  (0, n2.Up)(r);
                  return;
                }
                var n = (0, n2.nT)(r);
                n
                  ? (window.location.href = n)
                  : nK.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === t ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, h, g]
          ),
          y = (0, j.useCallback)(
            function () {
              d(!0), f(r.id);
            },
            [r, f]
          );
        return (
          (n =
            o || u
              ? (0, v.jsxs)(ei.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o ? "Installing" : "Uninstalling",
                    (0, v.jsx)(eR.Z, {}),
                  ],
                })
              : (
                  null === (t = r.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, v.jsxs)(ei.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: y,
                  children: ["Uninstall", (0, v.jsx)(es.ZP, { icon: k.$Rx })],
                })
              : (0, v.jsxs)(ei.z, {
                  onClick: b,
                  children: ["Install", (0, v.jsx)(es.ZP, { icon: k.wzc })],
                })),
          (0, v.jsx)(rI, {
            logo: (0, v.jsx)(nx.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, td.cf)(r)
              ? (0, v.jsx)(t_, {})
              : "approved" !== r.status
              ? (0, v.jsx)(tC, {})
              : void 0,
            title: (0, v.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: r.manifest.name_for_human,
            }),
            button: n,
            description: r.manifest.description_for_human,
          })
        );
      }
      function rS() {
        return (0, v.jsx)(rI, {
          logo: (0, v.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, v.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, v.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, v.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, v.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, v.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, v.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function rI(e) {
        var t = e.logo,
          n = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, v.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, v.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, v.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, v.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    n
                      ? (0, v.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      var rR = X.Z.button(rj(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        rD = X.Z.div(rk());
      function rA(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          r = e.onClose;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, v.jsx)(eS.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, v.jsx)(eS.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, v.jsx)(n7, {
            children: (0, v.jsxs)(n1.I, {
              children: [
                (0, v.jsx)(n1.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, v.jsx)(n1.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.",
                }),
                (0, v.jsx)(n1.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var rB = "oai/apps/hasSeenPluginsDisclaimer";
      function rF(e) {
        var t = e.onInstall,
          n = e.onClose,
          r = (0, x._)((0, j.useState)(!!el.m.getItem(rB)), 2),
          a = r[0],
          i = r[1],
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          c = (0, x._)((0, j.useState)(!1), 2),
          u = c[0],
          d = c[1],
          m = (0, x._)((0, j.useState)(), 2),
          f = m[0],
          h = m[1],
          g = (0, x._)((0, j.useState)(!1), 2),
          p = g[0],
          b = g[1],
          y = (0, j.useCallback)(function () {
            i(!0), l(!1), el.m.setItem(rB, !0);
          }, []),
          k = (0, j.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          w = (0, j.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, j.useCallback)(function () {
            b(!0);
          }, []),
          _ = (0, j.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, j.useCallback)(
            function (e) {
              (0, nX.wu)(e.id), n(), t(e);
            },
            [t, n]
          ),
          N = (0, j.useCallback)(
            function () {
              h(void 0), d(!1), n();
            },
            [n]
          ),
          P = (0, j.useCallback)(
            function () {
              b(!1), n();
            },
            [n]
          );
        return !a || o
          ? (0, v.jsx)(rA, { allowClose: !a, onConfirm: y, onClose: n })
          : u
          ? (0, v.jsx)(rs, { plugin: f, onInstall: M, onClose: N })
          : p
          ? (0, v.jsx)(n9, {
              onClickInstall: k,
              onInstallLocalhost: M,
              onClose: P,
            })
          : (0, v.jsx)(rM, {
              onInstallWithAuthRequired: k,
              onClickInstallDeveloper: w,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: n,
            });
      }
      function rE() {
        var e = (0, O._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (rE = function () {
            return e;
          }),
          e
        );
      }
      function rL(e) {
        var t,
          n = e.theme,
          r = void 0 === n ? "default" : n,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          c = o[1],
          u = (0, y.useRouter)(),
          d = (0, rh.C)(),
          m = d.installedPlugins,
          f = d.isLoading,
          h = (0, nX.p0)(),
          g = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            if (!f) {
              var e = u.query,
                t = e.loginAip,
                n = e.loginSuccess,
                r = (0, p._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  i,
                  s = m.find(function (e) {
                    return e.id === t;
                  });
                s && "true" === n
                  ? ((0, nX.wu)(u.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : nK.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == s ? void 0 : s.manifest.name_for_human) &&
                          void 0 !== i
                          ? i
                          : "plugin",
                        "."
                      )
                    ),
                  u.replace({ pathname: u.pathname, query: r });
              }
            }
          },
          [u, m, f]
        );
        var b = (0, j.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          w = (0, j.useCallback)(function () {
            s(!1);
          }, []),
          C = (0, x._)((0, j.useState)(h), 2),
          _ = C[0],
          M = C[1],
          N = (0, j.useCallback)(
            function (e) {
              if (e.length > nX.hZ)
                c(!0),
                  setTimeout(function () {
                    c(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !h.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = nX.iO[Symbol.iterator]();
                    !(n = (i = s.next()).done);
                    n = !0
                  ) {
                    var o = (function () {
                      var e = i.value,
                        n = h.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var r = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            nK.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, nk._)(o)) return o.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, nX.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          P = (0, j.useCallback)(function (e) {
            var t;
            null === (t = g.current) || void 0 === t || t.close(),
              "store" === e && s(!0);
          }, []),
          T = (0, j.useCallback)(
            function () {
              M(h),
                eL.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          Z = (0, j.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !h.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = h.filter(function (e) {
                  return !_.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, s = t[Symbol.iterator]();
                  !(n = (i = s.next()).done);
                  n = !0
                ) {
                  var o = i.value;
                  eL.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: o.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                c = !1,
                u = void 0;
              try {
                for (
                  var d, m = e[Symbol.iterator]();
                  !(l = (d = m.next()).done);
                  l = !0
                ) {
                  var f = d.value;
                  eL.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: f.id,
                  });
                }
              } catch (e) {
                (c = !0), (u = e);
              } finally {
                try {
                  l || null == m.return || m.return();
                } finally {
                  if (c) throw u;
                }
              }
            },
            [h, _]
          ),
          S = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, td.cf)(e)
                ? (0, v.jsx)(t_, {})
                : "approved" !== e.status
                ? (0, v.jsx)(tC, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          I = S.filter(function (e) {
            return h.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          R = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var D = h.map(function (e, t) {
            return (0,
            v.jsx)(nx.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          R = (0, v.jsx)("div", { className: "flex gap-2", children: D });
        }
        var A = [{ id: "store", label: "Plugin store", icon: k.Rgz }];
        m.length > nX.hZ &&
          (t = (0, v.jsxs)(rO, {
            className: (0, U.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", nX.hZ, " Enabled"],
          }));
        var B = (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(rO, { children: "Loading..." }),
            (0, v.jsx)(nO, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(nO, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(nO, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(nO, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(nO, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(nA, {
              name: "Plugins",
              selectedOptions: I,
              selectedLabel: R,
              options: S,
              actions: A,
              onChange: N,
              onAction: P,
              onOpen: T,
              onClose: Z,
              dropdownRef: g,
              isLoading: f,
              loadingState: B,
              header: t,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, v.jsx)(rF, { onInstall: b, onClose: w }),
          ],
        });
      }
      var rO = X.Z.div(rE()),
        rU = n(48101),
        rq = n(63727);
      function rz(e) {
        var t,
          n = e.currentModelId,
          r = (0, I.hz)(),
          a = (0, tA.fm)(),
          i = (0, tA.B9)(),
          s = void 0 !== n ? i.get(n) : void 0,
          o = (0, eB.Fl)().isPluginsAvailable,
          l = (0, tA.iu)();
        return r.has("model_switcher") && l.size > 1 && s
          ? (0, v.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, v.jsx)(nj, { currentModel: s, onModelChange: a }),
                o &&
                  (null == s
                    ? void 0
                    : null === (t = s.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, v.jsx)(rL, { theme: "mini" }),
              ],
            })
          : null;
      }
      var rH = function (e) {
          var t,
            n,
            r,
            a = e.currentModelConfig,
            i = e.clientThreadId,
            s = e.icon,
            o = (0, j.useContext)(R.gB),
            l = (0, S.tN)(S.bM.isThreadHeaderVisible),
            c = (0, x._)((0, j.useState)(!1), 2),
            u = c[0],
            d = c[1],
            m = (0, j.useRef)(0),
            f = (0, j.useRef)(0),
            h = (0, x._)((0, eA.useAtTop)(), 1)[0],
            p = (0, x._)((0, eA.useAnimating)(), 1)[0],
            b = (0, j.useCallback)(function (e) {
              var t = e.scrollTop,
                n = f.current > m.current;
              (f.current = m.current), (m.current = t);
              var r = f.current > m.current;
              r && S.vm.showThreadHeader(), n !== r && d(r);
            }, []);
          (0, j.useEffect)(function () {
            S.vm.showThreadHeader();
          }, []),
            (0, eA.useObserveScrollPosition)(o ? void 0 : b);
          var k = l && (h || p || u),
            C = (0, _.Qi)(i),
            M = (0, I.hz)().has(er.b5),
            N = (0, _.Ro)(i);
          void 0 === N && (N = a);
          var P = N.tags
              .filter(function (e) {
                return nD.includes(e);
              })
              .map(function (e) {
                return nq(e);
              }),
            T = (0, tT.v)();
          if (T.length > 0) {
            var Z = T.map(function (e, t) {
              return (0,
              v.jsx)(nx.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
            });
            r = (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)("div", { children: "Enabled plugins:" }),
                Z,
              ],
            });
          }
          var D = (0, y.useRouter)(),
            A =
              o &&
              (null === (t = D.query) || void 0 === t
                ? void 0
                : null === (n = t.shareParams) || void 0 === n
                ? void 0
                : n[1]) === "moderate",
            B = (0, S.tN)(function (e) {
              return e.activeModals.has(S.B.DownloadMessages);
            }),
            F = _.tQ.getThreadCurrentLeafId(i),
            E = (0, _.u9)(i, F),
            L = (0, j.useCallback)(
              function () {
                M && (0, rU.Ub)(i, E);
              },
              [i, M, E]
            );
          return (0, v.jsxs)(v.Fragment, {
            children: [
              M &&
                (0, v.jsx)(eI.Z, {
                  type: "success",
                  isOpen: B,
                  onClose: function () {
                    S.vm.closeModal(S.B.DownloadMessages);
                  },
                  closeButton: (0, v.jsx)(eS.ZP.CloseButton, {
                    onClose: function () {
                      S.vm.closeModal(S.B.DownloadMessages);
                    },
                  }),
                  primaryButton: (0, v.jsx)(eS.ZP.Button, {
                    onClick: L,
                    children: "Download",
                  }),
                  title: "Download chat debug info",
                  secondaryButton: (0, v.jsx)(eS.ZP.Button, {
                    onClick: function () {
                      S.vm.closeModal(S.B.DownloadMessages);
                    },
                    children: "Cancel",
                  }),
                }),
              (0, v.jsx)(V.E.header, {
                animate: {
                  top: k ? 0 : "-50px",
                  transition: { duration: 0.2, ease: "easeIn" },
                },
                style: {
                  boxShadow: !h && k ? "0px 4px 24px 0px #0000000D" : void 0,
                },
                className: "sticky top-0 z-[9] w-full",
                children: (0, v.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                  onClick: function (e) {
                    M &&
                      !o &&
                      3 === e.detail &&
                      S.vm.openModal(S.B.DownloadMessages);
                  },
                  children: [
                    o &&
                      (0, v.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, v.jsx)("span", { children: "Shared Chat" }),
                          (0, v.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                        ],
                      }),
                    !o && void 0 !== s && (0, v.jsx)(es.ZP, { icon: s }),
                    "Model: ",
                    a.title,
                    P,
                    r
                      ? (0, v.jsxs)("div", {
                          className: "flex items-center justify-center gap-1",
                          children: [
                            (0, v.jsx)("span", {
                              className: "px-1",
                              children: "•",
                            }),
                            r,
                          ],
                        })
                      : null,
                    A &&
                      (0, v.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, v.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          (0, v.jsx)("strong", { children: "MODERATION VIEW" }),
                        ],
                      }),
                    !o &&
                      null != C &&
                      (0, v.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, v.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          (0, v.jsx)(w.Z, (0, g._)({}, rW.chatPreferences)),
                          (0, v.jsx)(rQ, { clientThreadId: i }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        rQ = function (e) {
          var t = e.clientThreadId,
            n = (0, _.hW)(t),
            r = (0, _.Qi)(t),
            a = (0, j.useMemo)(
              function () {
                if (null == r) return null;
                var e = r.aboutUserMessage,
                  t = r.aboutModelMessage,
                  n = r.fallback;
                return null != e && null != t
                  ? (0, v.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, v.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, v.jsx)("div", {
                              className:
                                "font-medium text-gray-600 dark:text-gray-200",
                              children: (0, v.jsx)(
                                w.Z,
                                (0, g._)({}, rq.sY.aboutYouHelpText)
                              ),
                            }),
                            (0, v.jsxs)("div", {
                              className:
                                "flex flex-row gap-1 rounded border border-gray-200 bg-gray-50 px-4 py-3 dark:bg-gray-800",
                              children: [
                                (0, v.jsx)("div", { children: e }),
                                (0, v.jsx)("div", {
                                  children: (0, v.jsx)(es.ZP, {
                                    icon: ef.Zp7,
                                    className: "text-gray-300",
                                    strokeWidth: 0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, v.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, v.jsx)("div", {
                              className:
                                "font-medium text-gray-600 dark:text-gray-200",
                              children: (0, v.jsx)(
                                w.Z,
                                (0, g._)({}, rq.sY.modelHelpText)
                              ),
                            }),
                            (0, v.jsxs)("div", {
                              className:
                                "flex flex-row gap-1 rounded border border-gray-200 bg-gray-50 px-4 py-3 dark:bg-gray-800",
                              children: [
                                (0, v.jsx)("div", { children: t }),
                                (0, v.jsx)("div", {
                                  children: (0, v.jsx)(es.ZP, {
                                    icon: ef.Zp7,
                                    className: "text-gray-300",
                                    strokeWidth: 0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null != n
                  ? n
                  : null;
              },
              [r]
            );
          return null === r
            ? null
            : (0, v.jsxs)(ng.fC, {
                delayDuration: 0,
                children: [
                  (0, v.jsx)(ng.xz, {
                    asChild: !0,
                    children: (0, v.jsxs)("div", {
                      className: "cursor-pointer pt-0.5",
                      children: [
                        n
                          ? (0, v.jsx)(es.zx, {
                              className:
                                "ml-0.5 mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 dark:text-gray-200 sm:mb-0.5 sm:mt-0 sm:h-5 sm:w-5",
                            })
                          : (0, v.jsx)(es.HV, {
                              className:
                                "ml-0.5 mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 dark:text-gray-200 sm:mb-0.5 sm:mt-0 sm:h-5 sm:w-5",
                            }),
                        (0, v.jsx)(np.T, {
                          children: (0, v.jsx)(
                            w.Z,
                            (0, g._)({}, rW.chatPreferencesInfoLabel)
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, v.jsx)(ng.h_, {
                    children: (0, v.jsxs)(ng.VY, {
                      side: "bottom",
                      sideOffset: 8,
                      collisionPadding: 16,
                      className:
                        "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                      children: [
                        n &&
                          (0, v.jsx)("div", {
                            className: "mb-5",
                            children: (0, v.jsxs)(eZ, {
                              children: [
                                (0, v.jsx)(es.zx, {
                                  className:
                                    "mt-0.5 h-4 w-4 flex-shrink-0 sm:mb-0.5 sm:mt-0 sm:h-5 sm:w-5",
                                }),
                                (0, v.jsx)(
                                  w.Z,
                                  (0, g._)(
                                    {},
                                    rW.chatPreferencesMismatchWarning
                                  )
                                ),
                              ],
                            }),
                          }),
                        a,
                      ],
                    }),
                  }),
                ],
              });
        },
        rW = (0, C.vU)({
          chatPreferences: {
            id: "ThreadSettings.chatPreferences",
            defaultMessage: "Chat preferences: On",
            description: "Label in the thread header for Chat preferences",
          },
          chatPreferencesInfoLabel: {
            id: "ThreadSettings.chatPreferencesInfoLabel",
            defaultMessage: "Chat preferences details",
            description: "Label for the Chat preferences info icon",
          },
          chatPreferencesMismatchWarning: {
            id: "ThreadSettings.chatPreferencesMismatchWarning",
            defaultMessage:
              "Note: your current chat preferences will not be reflected in this chat.",
            description:
              "Label in the popover for Chat preferences when there is a mismatch between the Chat preferences used to start the thread and the Chat preferences currently enabled",
          },
        });
      function r$() {
        var e = (0, O._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (r$ = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        var e = (0, O._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      function rV() {
        var e = (0, O._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (rV = function () {
            return e;
          }),
          e
        );
      }
      function rJ() {
        var e = (0, O._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (rJ = function () {
            return e;
          }),
          e
        );
      }
      function rY() {
        var e = (0, O._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (rY = function () {
            return e;
          }),
          e
        );
      }
      var rK = (0, C.vU)({
        codeInterpreterSupportDisclaimer: {
          id: "sharedConversation.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharedConversation.userContextCustomProfileDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds.",
          description:
            "Disclaimer about our lack of support for custom profiles with shared links",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function rX(e) {
        var t = e.clientThreadId,
          n = (0, _.qA)(t),
          r = (0, _.je)(t),
          a = (0, _.qN)(function (e) {
            return _.iN.getThreadCreateTime(t, e);
          }),
          i = (0, _.JI)(t),
          s = (0, j.useMemo)(
            function () {
              return eT(i);
            },
            [i]
          ),
          o = (0, _.aS)(t);
        return (0, v.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
          children: [
            (0, v.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: n,
            }),
            (null != r || null != a) &&
              (0, v.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, v.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, v.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, v.jsx)(C.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, v.jsx)(r0, {
              shouldShowCodeInterpreterDisclaimer: s,
              shouldShowUserContextCustomProfileDisclaimer: o,
            }),
          ],
        });
      }
      var r0 = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          n = e.shouldShowUserContextCustomProfileDisclaimer;
        return t && n
          ? (0, v.jsx)("div", {
              className: "mt-4",
              children: (0, v.jsx)(eZ, {
                icon: k.H33,
                children: (0, v.jsx)(
                  w.Z,
                  (0, g._)(
                    {},
                    rK.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              }),
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                t &&
                  (0, v.jsx)("div", {
                    className: "mt-4",
                    children: (0, v.jsx)(eZ, {
                      icon: k.H33,
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, rK.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  }),
                n &&
                  (0, v.jsx)("div", {
                    className: "mt-4",
                    children: (0, v.jsx)(eZ, {
                      icon: k.H33,
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, rK.userContextCustomProfileDisclaimer)
                      ),
                    }),
                  }),
              ],
            });
      };
      function r1(e) {
        var t,
          n = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          s = e.onDeleteNode,
          o = e.onRequestCompletion,
          l = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          c = e.clientThreadId,
          u = e.conversationLeafId,
          d = e.isNewThread,
          m = e.activeRequests,
          f = e.currentThreadModel,
          h = e.inlineEmbeddedDisplay,
          g = e.initiallyHighlightedMessageId,
          p = e.promptTextareaRef,
          b = (0, j.useContext)(R.gB),
          y = (0, eA.useScrollToBottom)(),
          w = (0, x._)((0, eA.useSticky)(), 1)[0],
          C = (0, I.hz)(),
          M = (0, eB.Fl)().isBetaFeaturesUiEnabled,
          N = (0, _.Kt)(c),
          P = (0, I.$T)(),
          T = (0, tA.iu)(),
          Z = (0, tA.ZL)(),
          D = (0, tA.Xy)(f, c),
          A = (0, S.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          B = C.has("model_switcher") && T.size > 1,
          F = d && !P && B,
          E = (0, x._)((0, j.useState)(!1), 2),
          L = E[0],
          O = E[1],
          q = (0, ny.Ri)(D.id),
          z = (0, _.U0)(c, u);
        (0, j.useEffect)(
          function () {
            if (N) {
              var e = setTimeout(function () {
                O(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            O(!1);
          },
          [N]
        );
        var H = C.has(er.FZ),
          Q =
            !M && D.tags.includes(tA.S.GPT_4)
              ? "black"
              : null !== (t = null == q ? void 0 : q.backgroundColor) &&
                void 0 !== t
              ? t
              : void 0,
          W = (0, eD._)(Array(z).keys()).map(function (e) {
            return (0,
            v.jsx)(tV, { isFinalTurn: e === z - 1, turnIndex: e, clientThreadId: c, conversationLeafId: u, onChangeItemInView: n, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: s, onRequestCompletion: o, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: D.id, showInlineEmbeddedDisplay: h, initiallyHighlightedMessageId: g, avatarColor: Q }, e);
          });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            F &&
              (0, v.jsxs)(r4, {
                children: [
                  (0, v.jsx)(rz, { currentModelId: D.id }),
                  (0, v.jsxs)(r7, {
                    children: ["ChatGPT", (0, v.jsx)(eF.ZP, {})],
                  }),
                ],
              }),
            (0, v.jsxs)(r2, {
              children: [
                d && !P && !Z && !B && (0, v.jsx)(nh, { promptTextareaRef: p }),
                L && (0, v.jsx)(eR.Z, { className: "mt-4 self-center" }),
                !d &&
                  (b || (!P && B)) &&
                  !h &&
                  (0, v.jsx)(rH, {
                    icon: M ? (null == q ? void 0 : q.icon) : void 0,
                    currentModelConfig: D,
                    clientThreadId: c,
                  }),
                H
                  ? W.length > 0 &&
                    (0, v.jsx)("div", {
                      className: (0, U.Z)(
                        "flex flex-col items-center",
                        A ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, v.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          b && !h && (0, v.jsx)(rX, { clientThreadId: c }),
                          W,
                        ],
                      }),
                    })
                  : (0, v.jsxs)(v.Fragment, {
                      children: [
                        b &&
                          !h &&
                          (0, v.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, v.jsx)(rX, { clientThreadId: c }),
                          }),
                        W,
                      ],
                    }),
                !F && !h && (0, v.jsx)(r3, {}),
              ],
            }),
            !w &&
              !h &&
              (0, v.jsx)(r5, {
                onClick: y,
                children: (0, v.jsx)(es.ZP, { icon: k.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var r2 = X.Z.div(r$()),
        r3 = X.Z.div(rG()),
        r5 = X.Z.button(rV()),
        r4 = X.Z.div(rJ()),
        r7 = X.Z.h1(rY());
      function r6() {
        var e = (0, O._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (r6 = function () {
            return e;
          }),
          e
        );
      }
      function r8() {
        var e = (0, O._)(["grow flex-1 overflow-hidden"]);
        return (
          (r8 = function () {
            return e;
          }),
          e
        );
      }
      function r9() {
        var e = (0, O._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (r9 = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = (0, O._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = (0, O._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      function an() {
        var e = (0, O._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (an = function () {
            return e;
          }),
          e
        );
      }
      function ar() {
        var e = (0, O._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (ar = function () {
            return e;
          }),
          e
        );
      }
      var aa = (0, C.vU)({
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
            "Recipients won’t be able to view Code Interpreter images or download files.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharingModal.userContextCustomProfileDisclaimer",
          defaultMessage: "Your chat preferences won’t be shared with viewers.",
          description:
            "Disclaimer about our policy to not copy over custom profile data which could have PII",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharingModal.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view images, download files, or custom profiles.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function ai(e) {
        var t = e.serverThreadId,
          n = e.activeRequests,
          r = (0, _.oq)(t),
          a = (0, x._)(
            (0, j.useState)(function () {
              return (0, eg.Z)(function (e, t) {
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
          i = 0 === n.size && "root" !== r,
          s = (0, j.useRef)(!1);
        return (
          (0, j.useEffect)(
            function () {
              if (i && !s.current) {
                s.current = !0;
                var e = _.tQ.getThreadCurrentLeafId(t),
                  n = _.tQ.getTree(t).getMessageId(e);
                en.ZP.createShareLink({
                  current_node_id: n,
                  conversation_id: t,
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
                    e instanceof ev.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (nK.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        S.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, v.jsx)(ep.Provider, {
            value: a,
            children: (0, v.jsx)(al, (0, g._)({}, e)),
          })
        );
      }
      function as(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var ao =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function al(e) {
        var t,
          n,
          r,
          a,
          i,
          s = e.serverThreadId,
          o = e.activeRequests,
          l = e.currentThreadModel,
          c = function () {
            (!X ||
              window.confirm(u.formatMessage(aa.confirmCloseWithChanges))) &&
              S.vm.closeSharingModal();
          },
          u = (0, K.Z)(),
          d = (0, j.useRef)(null),
          m = (0, x._)((0, j.useState)(!1), 2),
          f = m[0],
          h = m[1],
          p = (0, x._)((0, j.useState)(!1), 2),
          b = p[0],
          y = p[1],
          M = (0, x._)((0, j.useState)(!1), 2),
          N = M[0],
          P = M[1],
          T = (0, j.useContext)(ep),
          Z = ex(function (e) {
            return e.title;
          }),
          I = ex(function (e) {
            return e.shareLinkId;
          }),
          D = ex(function (e) {
            return e.shareLinkUrl;
          }),
          A = ex(function (e) {
            return e.isAnonymous;
          }),
          B = ex(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          F = ex(function (e) {
            return e.currentNodeId;
          }),
          E = ex(function (e) {
            return e.isPublic;
          }),
          L =
            ex(function (e) {
              return e.linkAlreadyExisted;
            }) && E,
          O = ex(function (e) {
            return e.linkError;
          }),
          q = ex(function (e) {
            return e.moderationState;
          }),
          z = null != q && as(q),
          H = (0, j.useRef)(),
          Q = (0, j.useRef)();
        (0, j.useEffect)(
          function () {
            L && ((H.current = Z), (Q.current = A));
          },
          [L]
        );
        var W = (0, eh.kP)().session,
          $ = (0, _.JI)(s, F),
          G = (0, j.useMemo)(
            function () {
              return eT($);
            },
            [$]
          ),
          V = (0, _.aS)(s),
          J =
            ((t = (0, ec._)(function (e, t) {
              var n, r, a, i, s, o, l;
              return (0, ed.Jh)(this, function (c) {
                switch (c.label) {
                  case 0:
                    y(!0),
                      (r = (n = T.getState()).highlightedMessageId),
                      (a = n.title),
                      (i = n.isDeleted),
                      (s = n.isAnonymous);
                    try {
                      navigator.clipboard.writeText(t);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        nK.m.warning("Failed to copy link to clipboard"),
                        y(!1),
                        [2]
                      );
                    }
                    c.label = 1;
                  case 1:
                    return (
                      c.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        en.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: s,
                        }),
                      ]
                    );
                  case 2:
                    if (as((o = c.sent().moderation_state)))
                      return T.setState({ moderationState: o }), [2];
                    return (
                      T.setState({ isPublic: !0, moderationState: o }),
                      P(!0),
                      setTimeout(function () {
                        S.vm.closeSharingModal(),
                          nK.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = c.sent()) instanceof ev.Q0 &&
                        "string" == typeof l.message &&
                        T.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return y(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          X = L && (Z !== H.current || A !== Q.current),
          ee = (0, v.jsxs)(eS.ZP.Button, {
            onClick: function () {
              return J(I, D);
            },
            color: "primary",
            disabled: b || N || null == I || null == D || null != O || z,
            children: [
              N
                ? (0, v.jsx)(es.ZP, { icon: k.LSm })
                : b
                ? (0, v.jsx)(eR.Z, {})
                : (0, v.jsx)(es.ZP, { icon: k.XKb }),
              N
                ? "Copied!"
                : b
                ? "Copying..."
                : X
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          et = (0, j.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                T.setState({
                  title:
                    null === (t = d.current) || void 0 === t ? void 0 : t.value,
                }),
                h(!1);
            },
            [T]
          ),
          er = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && et();
            },
            [et]
          ),
          ea =
            ((n = (0, ec._)(function () {
              return (0, ed.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      en.ZP.deleteShareLink({
                        share_id: T.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          nK.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          S.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          el =
            ((r = (0, ec._)(function () {
              return (0, ed.Jh)(this, function (e) {
                return (
                  T.setState({ isAnonymous: !0 }),
                  _.qN.setState(function (e) {
                    e.threads[s].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          eg =
            ((a = (0, ec._)(function () {
              return (0, ed.Jh)(this, function (e) {
                return (
                  T.setState({ isAnonymous: !1 }),
                  _.qN.setState(function (e) {
                    var t;
                    e.threads[s].initialThreadData.authorName =
                      null == W
                        ? void 0
                        : null === (t = W.user) || void 0 === t
                        ? void 0
                        : t.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          eb = (0, v.jsxs)(af, {
            $active: f,
            children: [
              (0, v.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== Z
                    ? f
                      ? (0, v.jsx)(ag, {
                          ref: d,
                          type: "text",
                          defaultValue: null != Z ? Z : "",
                          autoFocus: !0,
                          onKeyDown: er,
                          onBlur: et,
                        })
                      : (0, v.jsxs)(ah, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            Z,
                            f || null == Z || L
                              ? null
                              : (0, v.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, v.jsx)(es.ZP, {
                                    icon: k.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, v.jsx)("div", { className: "h-6" }),
                  (0, v.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !A &&
                        (0, v.jsxs)("span", {
                          children: [
                            null == W
                              ? void 0
                              : null === (i = W.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, v.jsx)(C.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)(ap, {
                children: (0, v.jsxs)(eo.fC, {
                  children: [
                    (0, v.jsx)(eo.xz, {
                      asChild: !0,
                      children: (0, v.jsx)(ei.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, v.jsx)(ef.JEI, {}),
                      }),
                    }),
                    (0, v.jsx)(eo.h_, {
                      children: (0, v.jsxs)(eo.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          A &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eg,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !A &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: el,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          L &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ea,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
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
          ey = O;
        return (
          null == ey &&
            ((null == q ? void 0 : q.has_been_auto_blocked) ||
              (null == q ? void 0 : q.has_been_auto_moderated) ||
              (null == q ? void 0 : q.has_been_blocked)) &&
            (ey = (0, v.jsx)(w.Z, (0, g._)({}, aa.moderationBlocked))),
          (0, v.jsxs)(eI.Z, {
            isOpen: !0,
            onClose: function () {
              c();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: u.formatMessage(aa.sharingModalTitle),
            closeButton: (0, v.jsx)(eS.ZP.CloseButton, {
              onClose: function () {
                c();
              },
            }),
            children: [
              null != ey &&
                (0, v.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: ey,
                }),
              (0, v.jsx)("div", {
                className: (0, U.Z)("w-full"),
                children: (0, v.jsx)("p", {
                  className: (0, U.Z)("mb-6 text-gray-500"),
                  children: L
                    ? (0, v.jsx)(
                        w.Z,
                        (0, eu._)((0, g._)({}, aa.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, v.jsx)("a", {
                                href: D,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, v.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      u.formatMessage(aa.confirmDeleteLink)
                                    ) && ea();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, v.jsx)(w.Z, (0, g._)({}, aa.sharingModalDescription)),
                }),
              }),
              (0, v.jsx)(ac, {
                shouldShowCodeInterpreterDisclaimer: G,
                shouldShowUserContextCustomProfileDisclaimer: V,
              }),
              (0, v.jsx)(am, {
                children: (0, v.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, v.jsx)(au, {
                    children: (0, v.jsxs)(ad, {
                      children: [
                        (0, v.jsx)(em.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != F
                              ? (0, v.jsx)(R.gB.Provider, {
                                  value: !0,
                                  children: (0, v.jsx)(r1, {
                                    onChangeItemInView: Y(),
                                    onRequestMoreCompletions: Y(),
                                    onUpdateNode: Y(),
                                    onChangeRating: Y(),
                                    onDeleteNode: Y(),
                                    onRequestCompletion: Y(),
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      Y(),
                                    clientThreadId: s,
                                    conversationLeafId: F,
                                    activeRequests: o,
                                    currentThreadModel: l,
                                    inlineEmbeddedDisplay: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: B,
                                  }),
                                })
                              : (0, v.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, v.jsx)(eR.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        eb,
                      ],
                    }),
                  }),
                }),
              }),
              (0, v.jsx)(eS.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: ee,
                secondaryButton: (0, v.jsx)("div", {
                  children: (0, v.jsxs)("a", {
                    href: ao,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      u.formatMessage(aa.sharingModalMoreInfo),
                      (0, v.jsx)(es.ZP, { icon: k.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var ac = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            n = e.shouldShowUserContextCustomProfileDisclaimer;
          return t && n
            ? (0, v.jsx)(eZ, {
                icon: k.H33,
                children: (0, v.jsx)(
                  w.Z,
                  (0, g._)(
                    {},
                    aa.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              })
            : (0, v.jsxs)(v.Fragment, {
                children: [
                  t &&
                    (0, v.jsx)(eZ, {
                      icon: k.H33,
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aa.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  n &&
                    (0, v.jsxs)("p", {
                      className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                      children: [
                        (0, v.jsx)(es.ZP, {
                          icon: k.H33,
                          size: "small",
                          className: "mt-1 flex-shrink-0",
                        }),
                        (0, v.jsx)(
                          w.Z,
                          (0, g._)({}, aa.userContextCustomProfileDisclaimer)
                        ),
                      ],
                    }),
                ],
              });
        },
        au = X.Z.main(r6()),
        ad = X.Z.div(r8()),
        am = X.Z.div(r9()),
        af = X.Z.div(ae(), function (e) {
          return e.$active, "";
        }),
        ah = X.Z.div(at()),
        ag = X.Z.input(an()),
        ap = X.Z.div(ar());
      function ax() {
        var e = (0, O._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (ax = function () {
            return e;
          }),
          e
        );
      }
      var av = (0, C.vU)({
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
        ab = "oai/apps/announcement/sharedConversations";
      function ay(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            el.m.setItem(ab, e), s(e);
          },
          r = (0, D.w$)(),
          a = (0, x._)(
            (0, j.useState)(function () {
              var e = el.m.getItem(ab);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1],
          o = (0, j.useRef)(null),
          l = (0, K.Z)();
        return (0, v.jsxs)(eo.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, v.jsx)(eo.xz, { asChild: !0, ref: o, children: t }),
            (0, v.jsx)(eo.h_, {
              children: (0, v.jsxs)(eo.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, v.jsxs)("div", {
                    children: [
                      (0, v.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, v.jsx)(aj, {
                            children: (0, v.jsx)(w.Z, (0, g._)({}, av.new)),
                          }),
                          (0, v.jsx)("div", {
                            className: "font-medium",
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, av.shareConversations)
                            ),
                          }),
                          (0, v.jsx)(eo.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                          }),
                        ],
                      }),
                      (0, v.jsxs)("a", {
                        href: ao,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(av.learnMore),
                          (0, v.jsx)(es.ZP, { icon: k.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(eo.Eh, {
                    asChild: !0,
                    children: (0, v.jsx)("div", {
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
      var aj = X.Z.span(ax()),
        ak = n(36112);
      function aw() {
        var e = (0, O._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (aw = function () {
            return e;
          }),
          e
        );
      }
      function aC() {
        var e = (0, O._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (aC = function () {
            return e;
          }),
          e
        );
      }
      function a_() {
        var e = (0, O._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (a_ = function () {
            return e;
          }),
          e
        );
      }
      function aM() {
        var e = (0, O._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (aM = function () {
            return e;
          }),
          e
        );
      }
      function aN() {
        var e = (0, O._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (aN = function () {
            return e;
          }),
          e
        );
      }
      function aP() {
        var e = (0, O._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (aP = function () {
            return e;
          }),
          e
        );
      }
      function aT() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (aT = function () {
            return e;
          }),
          e
        );
      }
      function aZ() {
        var e = (0, O._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (aZ = function () {
            return e;
          }),
          e
        );
      }
      function aS() {
        var e = (0, O._)(["p-1 hover:text-white"]);
        return (
          (aS = function () {
            return e;
          }),
          e
        );
      }
      var aI = (0, C.vU)({
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
        aR = {
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
      function aD(e) {
        var t,
          n,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          s = (0, K.Z)(),
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          c = o[1],
          u = (0, x._)((0, j.useState)(0), 2),
          d = u[0],
          m = u[1],
          f = (0, ea.Z)(),
          h = (0, ak.MO)(),
          p = h.conversations,
          b = h.hasNextPage,
          y = h.fetchNextPage,
          k = h.isLoading,
          C = h.isFetchingNextPage,
          _ = h.isError,
          M = (0, I.hz)().has(er.DY),
          N = (0, j.useRef)(null),
          P = (0, j.useCallback)(
            function (e) {
              var t;
              M &&
                !k &&
                null != e &&
                (null === (t = N.current) || void 0 === t || t.disconnect(),
                (N.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && b && y();
                })),
                N.current.observe(e));
            },
            [M, k, b, y]
          );
        (0, j.useEffect)(function () {
          return function () {
            var e;
            null === (e = N.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var T = (0, ak.iF)();
        (0, ak.Od)();
        var Z =
          ((t = (0, j.useRef)()),
          (n = (0, j.useRef)()),
          ((0, j.useEffect)(
            function () {
              (t.current = n.current), (n.current = p);
            },
            [p]
          ),
          p === n.current)
            ? t.current
            : n.current);
        (0, j.useEffect)(
          function () {
            f(function () {
              m(d + 1);
            }, (0, z.Z)((0, H.Z)(), Date.now()) + 1e3);
          },
          [d, f]
        );
        var S = 0 === p.length,
          R = (0, j.useMemo)(
            function () {
              return p.reduce(
                function (e, t) {
                  var n,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (n = t.update_time) && void 0 !== n
                            ? n
                            : t.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(t);
                  else if (i <= 1) e.recent.yesterday.items.push(t);
                  else if (i <= 7) e.recent.lastSeven.items.push(t);
                  else if (i <= 30) e.recent.lastThirty.items.push(t);
                  else if ((0, $.Z)(a)) {
                    var o = (0, W.Z)(a),
                      l = (0, Q.Z)(a),
                      c = "".concat(o, "-").concat(l);
                    e.dynamicMonths[c]
                      ? e.dynamicMonths[c].items.push(t)
                      : (e.dynamicMonths[c] = {
                          label: s.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var u = (0, W.Z)(a),
                      d = "".concat(u, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(t)
                      : (e.dynamicYears[d] = {
                          label: s.formatDate(a, { year: "numeric" }),
                          items: [t],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aI.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aI.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aI.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aI.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [d, p]
          );
        return (0, v.jsxs)(aA, {
          $centered: k || (_ && S),
          children: [
            S && k && (0, v.jsx)(eR.Z, { className: "m-auto" }),
            S &&
              _ &&
              (0, v.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, v.jsx)(w.Z, (0, g._)({}, aI.unableToLoadHistory)),
                  !l &&
                    (0, v.jsx)("div", {
                      className: "mt-1",
                      children: (0, v.jsx)(ei.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          c(!0), T();
                        },
                        children: (0, v.jsx)(w.Z, (0, g._)({}, aI.retryButton)),
                      }),
                    }),
                ],
              }),
            !k &&
              (0, v.jsx)("div", {
                children: (0, v.jsx)(G.M, {
                  initial: !1,
                  children: [R.recent, R.dynamicMonths, R.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, v.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, x._)(e, 2),
                              n = t[0],
                              s = t[1],
                              o = s.items,
                              l = s.label;
                            if ("today" !== n && !o.length) return null;
                            var c = !!o.find(function (e) {
                              var t;
                              return (
                                p.length > 0 &&
                                e.id ===
                                  (null === (t = p[0]) || void 0 === t
                                    ? void 0
                                    : t.id)
                              );
                            });
                            return (0, v.jsxs)(
                              V.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(n),
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
                                  o.length > 0 &&
                                    (0, v.jsx)(V.E.div, {
                                      className: (0, U.Z)(
                                        "sticky top-0",
                                        c ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, v.jsx)(aU, { children: l }),
                                    }),
                                  (0, v.jsx)("ol", {
                                    children: o.map(function (e, t) {
                                      var n = r === e.id,
                                        s =
                                          null == Z
                                            ? void 0
                                            : Z.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      v.jsx)(V.E.li, { className: (0, U.Z)("relative", c && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !s }, variants: aR, initial: "initial", animate: "animate", exit: "exit", children: (0, v.jsx)(aB, { id: e.id, title: e.title, active: n, onNewThread: a, setActiveRequests: i, forwardRef: b && p[p.length - 5 - 1].id === e.id ? P : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        "category-".concat(t)
                      );
                    }
                  ),
                }),
              }),
            M
              ? C &&
                (0, v.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, v.jsx)(eR.Z, {}),
                })
              : (0, v.jsx)(v.Fragment, {
                  children:
                    b &&
                    (0, v.jsx)(ei.z, {
                      as: "button",
                      onClick: function () {
                        return y();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: C,
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aI.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var aA = X.Z.div(aw(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function aB(e) {
        var t = e.id,
          n = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          s = e.setActiveRequests,
          o = (0, D.w$)(),
          l = (0, ee.WS)(),
          c = (0, y.useRouter)(),
          u = (0, x._)((0, j.useState)(!1), 2),
          d = u[0],
          m = u[1],
          f = (0, j.useRef)(null),
          h = (0, x._)((0, j.useState)(!1), 2),
          g = h[0],
          p = h[1],
          b = (0, I.hz)(),
          w = (0, I.ec)(I.F_.isBusinessWorkspace),
          C = (0, _.cj)(t),
          M = b.has(er.RJ) && r && !C && !w,
          N = (0, ak.iF)(),
          P = (0, j.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = f.current.value;
                en.ZP.patchConversation(t, { title: i }),
                  _.tQ.setTitle(t, i, _._L.User),
                  l(et.s6.renameThread, { threadId: t, content: i }),
                  N();
              }
            },
            [l, t, N, n]
          ),
          T = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && P();
            },
            [P]
          ),
          R = (0, j.useCallback)(
            function () {
              en.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                N();
              }),
                a();
            },
            [t, a, N]
          ),
          B = (0, j.useCallback)(
            function (e) {
              Z.abortAllAndReset(),
                s(new Set()),
                e.preventDefault(),
                l(et.s6.loadThread, { threadId: t }),
                c.push("/c/".concat(t), void 0, { shallow: !0 });
            },
            [l, t, c, s]
          ),
          F = A(t, n, r),
          L = F.resolvedTitle,
          O = F.isTypingEffect;
        if (d)
          return (0, v.jsxs)(aE, {
            $active: r,
            children: [
              (0, v.jsx)(es.ZP, { icon: k.IC0, className: "flex-shrink-0" }),
              (0, v.jsx)(aL, {
                ref: f,
                type: "text",
                defaultValue: null != L ? L : "",
                autoFocus: !0,
                onKeyDown: T,
                className: "mr-0",
                onBlur: P,
              }),
              (0, v.jsxs)(az, {
                $active: !0,
                children: [
                  (0, v.jsx)(aH, {
                    onClick: P,
                    children: (0, v.jsx)(es.ZP, { icon: k.UgA }),
                  }),
                  (0, v.jsx)(aH, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                  }),
                ],
              }),
            ],
          });
        var q = O && r && o;
        return (0, v.jsxs)(aF, {
          onClick: r ? Y() : B,
          $active: r,
          $sharing: M,
          className: (0, U.Z)("group", q && "animate-flash"),
          ref: i,
          children: [
            (0, v.jsx)(es.ZP, { icon: g ? k.Ybf : k.IC0 }),
            (0, v.jsxs)(aO, {
              children: [
                q
                  ? (0, v.jsx)(E, { text: null != L ? L : "" })
                  : g
                  ? 'Delete "'.concat(L, '"?')
                  : L,
                (!O || !r) && (0, v.jsx)(aq, { $active: r }),
              ],
            }),
            g &&
              (0, v.jsxs)(az, {
                $active: !0,
                children: [
                  (0, v.jsx)(aH, {
                    onClick: R,
                    children: (0, v.jsx)(es.ZP, { icon: k.UgA }),
                  }),
                  (0, v.jsx)(aH, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, v.jsxs)(az, {
                $active: r,
                children: [
                  (0, v.jsx)(aH, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.Nte }),
                  }),
                  M &&
                    (0, v.jsx)(ay, {
                      children: (0, v.jsx)(aH, {
                        onClick: function (e) {
                          e.preventDefault(), S.vm.openSharingModal(t);
                        },
                        children: (0, v.jsx)(es.ZP, { icon: k.A8q }),
                      }),
                    }),
                  (0, v.jsx)(aH, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var aF = X.Z.a(
          aC(),
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && n ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && !n ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        aE = X.Z.div(a_(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        aL = X.Z.input(aM()),
        aO = X.Z.div(aN()),
        aU = X.Z.h3(aP()),
        aq = X.Z.div(aT(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        az = X.Z.div(aZ(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        aH = X.Z.button(aS()),
        aQ = n(61119),
        aW = n(45036),
        a$ = n(6128),
        aG = n(5437),
        aV = n.n(aG),
        aJ = n(11253),
        aY = n.n(aJ),
        aK = n(15300),
        aX = n(44675),
        a0 = "https://tcr9i.chat.openai.com/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((o = h || (h = {})).Idle = "idle"),
        (o.Loading = "loading"),
        (o.ScriptLoaded = "script_loaded"),
        (o.Ready = "ready"),
        (o.Done = "done"),
        (o.Error = "error"),
        (o.Failed = "failed"),
        (o.CAPTCHA = "captcha");
      var a1 = new ((function () {
          function e() {
            (0, B._)(this, e), (this.status = h.Idle);
            var t,
              n = this;
            this.getEnforcementToken =
              ((t = (0, ec._)(function (e) {
                var t;
                return (0, ed.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, n._getArkosePromise()];
                    case 1:
                      return (
                        (t = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            n.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              n.setOnError(function (i) {
                                if (e) {
                                  var s, o, l, c, u;
                                  aK.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = aX.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (c =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== c
                                        ? c
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (u =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== u
                                        ? u
                                        : "Unknown Arkose error"
                                    ),
                                    n._showUserError();
                                } else t.reset(), n.getEnforcementToken(!0).then(r, a);
                              }),
                              n.setOnFailed(function () {
                                var e;
                                aK.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = aX.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  n._showUserError();
                              }),
                              t.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              });
          }
          var t = e.prototype;
          return (
            (t._getArkosePromise = function (e) {
              var t = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (n, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      t.setStatus(h.Loading);
                    var a = document.createElement("script");
                    (a.src = a0),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", h.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        n(e),
                          t.setStatus(h.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              t.onCompleted(e);
                            },
                            onError: function (e) {
                              t.onError(e);
                            },
                            onFailed: function (e) {
                              t.onFailed(e);
                            },
                            onShown: function (e) {
                              t.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (s) {
                      if ("load" === s.type && t.status !== h.Ready)
                        t._startReadyTimeout(), t.setStatus(h.ScriptLoaded);
                      else if ("error" === s.type) {
                        if ((t.setStatus(h.Error), e)) {
                          var o;
                          aK.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (o = aX.env.APP_RELEASE) && void 0 !== o
                                ? o
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            t._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (t.arkoseInstancePromise = void 0),
                            t._getArkosePromise(!0).then(n, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (t._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === h.ScriptLoaded) {
                  var t;
                  aK.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (t = aX.env.APP_RELEASE) && void 0 !== t
                        ? t
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (t._showUserError = function () {
              nK.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (t.gatherData = function () {
              return this._getArkosePromise();
            }),
            (t.setStatus = function (e) {
              this.status = e;
            }),
            (t.onCompleted = function (e) {
              var t;
              null === (t = this._onCompleted) ||
                void 0 === t ||
                t.call(this, e);
            }),
            (t.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (t.onError = function (e) {
              var t;
              null === (t = this._onError) || void 0 === t || t.call(this, e);
            }),
            (t.setOnError = function (e) {
              this._onError = e;
            }),
            (t.onFailed = function (e) {
              var t;
              null === (t = this._onFailed) || void 0 === t || t.call(this, e);
            }),
            (t.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (t.onShown = function (e) {
              var t;
              null === (t = this._onShown) || void 0 === t || t.call(this, e);
            }),
            (t.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        a2 = n(75179),
        a3 = n(87316),
        a5 = n(2827);
      function a4(e) {
        var t = e.id,
          n = e.label,
          r = e.disabled;
        return (0, v.jsxs)("div", {
          className: "form-check",
          children: [
            (0, v.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: t,
            }),
            (0, v.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: t,
              children: n,
            }),
          ],
        });
      }
      function a7() {
        var e = (0, O._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (a7 = function () {
            return e;
          }),
          e
        );
      }
      function a6() {
        var e = (0, O._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (a6 = function () {
            return e;
          }),
          e
        );
      }
      function a8() {
        var e = (0, O._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (a8 = function () {
            return e;
          }),
          e
        );
      }
      function a9() {
        var e = (0, O._)([""]);
        return (
          (a9 = function () {
            return e;
          }),
          e
        );
      }
      var ie = (0, C.vU)({
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
      function it(e) {
        var t,
          n,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              (0, eU.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function ir(e) {
        var t,
          n,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          s = e.handleSubmitFeedback,
          o = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          c = e.clientThreadId,
          u = e.activeRequests,
          d = e.currentModelId,
          m = e.onChangeItemInView,
          f = e.onRequestMoreCompletions,
          h = e.onDeleteNode,
          p = e.onRequestCompletion,
          b = e.onUpdateNode,
          y = (0, K.Z)(),
          C = _.tQ.getTree(c),
          M = (0, _.XK)(c);
        (0, j.useEffect)(
          function () {
            "report" === a && eh.pg.forceEnableSession();
          },
          [a]
        );
        var N = (0, j.useRef)(0.5 > Math.random() ? "left" : "right"),
          P = null == C ? void 0 : C.getConversationTurns(r || "root"),
          T = P.length - 1,
          Z = P[P.length - 1],
          S = (0, I.hz)().has(er.FZ),
          R = (0, x._)((0, j.useState)("critique"), 2),
          A = R[0],
          B = R[1],
          F = (0, D.w$)(),
          E = (0, I.hz)().has(er.Pt) && it(Z, !0) && F,
          L = (0, ee.WS)(),
          O = (0, j.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: _.tQ.getServerThreadId(c),
                rating: a,
                model: d,
              };
            },
            [r, c, a, d]
          ),
          q =
            null == P
              ? void 0
              : P[(null == P ? void 0 : P.length) - 1].variantIds,
          z = null == q ? void 0 : q[(null == q ? void 0 : q.length) - 1],
          H = (n = (t = null == C ? void 0 : C.getConversationTurns(z))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          Q = null == C ? void 0 : C.getConversationTurns(H),
          W = (0, j.useMemo)(
            function () {
              var e =
                null == Q ? void 0 : Q[(null == Q ? void 0 : Q.length) - 1];
              return "thumbsDown" === a && E && it(e) && it(Z);
            },
            [a, E, Q, Z]
          ),
          $ = (0, j.useRef)(Date.now()),
          G = (0, j.useRef)(-1),
          V = (0, j.useRef)(Date.now()),
          J = (0, j.useRef)(Date.now());
        (0, j.useEffect)(
          function () {
            "compare" === A
              ? ((G.current = Date.now()), L(et.s6.displayedComparisonUIV0, O))
              : "critique" === A &&
                "thumbsDown" === a &&
                L(et.s6.displayedThumbsDownFeedbackForm, O);
          },
          [A]
        );
        var X = P.length - 2,
          ea = Q.length - 1,
          ei = Q[Q.length - 1],
          es = (0, j.useMemo)(
            function () {
              return ei && eq.Cv.getRequestIdFromConversationTurn(ei);
            },
            [ei]
          ),
          eo = (0, j.useMemo)(
            function () {
              return u.has(es);
            },
            [u, es]
          );
        (0, j.useMemo)(
          function () {
            eo || (J.current = Date.now());
          },
          [eo]
        );
        var el = Z.messages,
          ec = el[el.length - 1],
          ed = ec.message.id,
          em = ec.nodeId,
          ef = C.getLeafFromNode(em),
          eg = ei.messages,
          ep = eg[eg.length - 1],
          ex = ep.message.id,
          ev = ep.nodeId,
          eb = C.getLeafFromNode(ev),
          ey =
            "critique" === A
              ? "report" === a
                ? y.formatMessage(ie.provideReportModalTitle)
                : y.formatMessage(ie.provideAdditionalFeedback)
              : y.formatMessage(ie.pickBestAnswer),
          ej = (0, j.useRef)([]),
          ek = (0, j.useRef)(""),
          ew = (0, j.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eD._)(t || [])
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
                  (null == t ? void 0 : t["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, j.useCallback)(
            function () {
              ew(),
                s(ek.current, ej.current),
                "thumbsDown" === a && L(et.s6.submitThumbsDownFeedbackForm, O),
                W ? B("compare") : i();
            },
            [ew, s, a, W, L, O, i]
          ),
          e_ = (0, j.useCallback)(
            function (e, t) {
              var n = _.tQ.getServerThreadId(c);
              if (null != n) {
                var r = _.tQ.getThreadCurrentLeafId(c);
                en.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    nK.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    nK.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [c, i]
          ),
          eM = (0, j.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-reject"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eN = (0, j.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-accept"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eP =
            "moderate" === a
              ? (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(eS.ZP.Button, {
                      title: y.formatMessage(ie.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, v.jsx)(eS.ZP.Button, {
                      title: y.formatMessage(ie.submitAcceptModeration),
                      color: "primary",
                      onClick: eN,
                    }),
                  ],
                })
              : "critique" === A
              ? (0, v.jsx)(eS.ZP.Button, {
                  title: y.formatMessage(
                    "report" === a ? ie.submitReport : ie.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eT = "left" === N.current,
          eZ = eT ? "new" : "original",
          eR = eT ? "original" : "new",
          eA = eT
            ? y.formatMessage(ie.newAnswer)
            : y.formatMessage(ie.originalAnswer),
          eB = eT
            ? y.formatMessage(ie.originalAnswer)
            : y.formatMessage(ie.newAnswer),
          eF = eT
            ? y.formatMessage(ie.newAnswerBetter)
            : y.formatMessage(ie.originalAnswerBetter),
          eE = eT
            ? y.formatMessage(ie.originalAnswerBetter)
            : y.formatMessage(ie.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eO = (0, j.useCallback)(
            function (e) {
              var t = "left" === e ? eZ : "right" === e ? eR : "same";
              if (
                (L(
                  et.s6.submittedComparisonUIV0,
                  Object.assign({}, O, { choice: t })
                ),
                eL)
              ) {
                var n = _.tQ.getTree(c),
                  r = n.getMetadata(em);
                n.updateNode(em, {
                  metadata: {
                    $set: (0, eu._)((0, g._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var s = n.getMetadata(ev);
                n.updateNode(ev, {
                  metadata: {
                    $set: (0, eu._)((0, g._)({}, s), {
                      inlineComparisonRating: t,
                    }),
                  },
                }),
                  o(
                    ed,
                    ex,
                    a,
                    t,
                    N.current,
                    $.current,
                    G.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              _.tQ.setThreadCurrentLeafId(c, e === N.current ? eb.id : ef.id),
                i();
            },
            [eZ, eR, L, O, eL, c, eb.id, ef.id, i, em, ev, o, ed, ex, a]
          ),
          eU = !eo && null != J.current && W,
          ez = (0, j.useCallback)(
            function () {
              i(),
                "critique" === A
                  ? L(et.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O))
                  : "compare" === A &&
                    L(et.s6.skippedComparisonUIV0, Object.assign({}, O));
            },
            [i, L, O, A]
          ),
          eH = (0, x._)((0, j.useState)([]), 2),
          eQ = eH[0],
          eW = eH[1];
        return (
          (0, j.useEffect)(function () {
            "moderate" === a &&
              en.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                eW(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, v.jsxs)(
            eI.Z,
            {
              isOpen: !0,
              onClose: ez,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === A
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === A ? ("thumbsUp" === a ? k.fmn : k.oLd) : void 0,
              title: ey,
              closeButton: (0, v.jsx)(eS.ZP.CloseButton, { onClose: ez }),
              children: [
                "critique" === A &&
                  (0, v.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, v.jsx)(a5.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? y.formatMessage(ie.thumbsUpPlaceholder)
                            : "report" === a
                            ? y.formatMessage(
                                ie.reportContentExplanationPlaceholder
                              )
                            : y.formatMessage(ie.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, v.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, v.jsx)(a4, {
                              id: "feedback-harmful",
                              label: y.formatMessage(ie.harmfulUnsafe),
                            }),
                            (0, v.jsx)(a4, {
                              id: "feedback-false",
                              label: y.formatMessage(ie.notTrue),
                            }),
                            (0, v.jsx)(a4, {
                              id: "feedback-not-helpful",
                              label: y.formatMessage(ie.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eL &&
                        (0, v.jsx)(v.Fragment, {
                          children: (0, v.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)(a4, {
                                      id: "feedback-dont-like-this",
                                      label: y.formatMessage(ie.dontLikeThis),
                                    }),
                                    (0, v.jsx)(a4, {
                                      id: "feedback-false",
                                      label: y.formatMessage(ie.notTrue),
                                    }),
                                    (0, v.jsx)(a4, {
                                      id: "feedback-not-helpful",
                                      label: y.formatMessage(ie.notHelpful),
                                    }),
                                    (0, v.jsx)(a4, {
                                      id: "feedback-harmful-offensive",
                                      label: y.formatMessage(
                                        ie.harmfulOffensive
                                      ),
                                    }),
                                    (0, v.jsx)(a4, {
                                      id: "feedback-sexual-abuse",
                                      label: y.formatMessage(ie.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    eQ.map(function (e) {
                                      var t = (0, x._)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (0,
                                      v.jsx)(a4, { id: "feedback-" + n, label: r }, n);
                                    }),
                                    (0, v.jsx)(a4, {
                                      id: "feedback-copyright",
                                      label: y.formatMessage(
                                        ie.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, v.jsx)(a4, {
                                id: "feedback-content-other",
                                label: y.formatMessage(ie.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === A &&
                  Q &&
                  void 0 !== M &&
                  (0, v.jsxs)("div", {
                    className: (0, U.Z)("w-full"),
                    children: [
                      (0, v.jsx)("p", {
                        className: (0, U.Z)("mb-7 mt-3"),
                        children: (0, v.jsx)(
                          w.Z,
                          (0, g._)({}, ie.continueWithChosenAnswer)
                        ),
                      }),
                      (0, v.jsx)(is, {
                        className: S ? "rounded-2xl" : "rounded-md",
                        children: (0, v.jsx)(io, {
                          children: (0, v.jsx)(tV, {
                            currentModelId: d,
                            turnIndex: X,
                            isFinalTurn: !1,
                            clientThreadId: c,
                            onChangeItemInView: m,
                            onChangeRating: Y(),
                            onRequestMoreCompletions: f,
                            onDeleteNode: h,
                            onRequestCompletion: p,
                            onUpdateNode: b,
                            activeRequests: u,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              Y(),
                          }),
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: (0, U.Z)(),
                        children: [
                          (0, v.jsxs)("div", {
                            className: (0, U.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, v.jsx)("div", {
                                children: (0, v.jsx)("p", {
                                  className: (0, U.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, v.jsx)("div", {
                                children: (0, v.jsx)("p", {
                                  className: (0, U.Z)("font-semibold"),
                                  children: eB,
                                }),
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: (0, U.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, v.jsxs)(ii, {
                                children: [
                                  (0, v.jsx)(io, {
                                    children: (0, v.jsx)(tV, {
                                      currentModelId: d,
                                      turnIndex: eT ? ea : T,
                                      conversationLeafId: eT ? ev : em,
                                      isFinalTurn: !0,
                                      clientThreadId: c,
                                      onChangeItemInView: m,
                                      onChangeRating: Y(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: p,
                                      onUpdateNode: b,
                                      activeRequests: u,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        Y(),
                                    }),
                                  }),
                                  (0, v.jsx)(ia, {
                                    children: (0, v.jsx)(eS.ZP.Button, {
                                      disabled: !eU,
                                      title: eF,
                                      onClick: function () {
                                        return eO("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(ii, {
                                children: [
                                  (0, v.jsx)(io, {
                                    children: (0, v.jsx)(tV, {
                                      currentModelId: d,
                                      turnIndex: eT ? T : ea,
                                      conversationLeafId: eT ? em : ev,
                                      isFinalTurn: !0,
                                      clientThreadId: c,
                                      onChangeItemInView: m,
                                      onChangeRating: Y(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: p,
                                      onUpdateNode: b,
                                      activeRequests: u,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        Y(),
                                    }),
                                  }),
                                  (0, v.jsx)(ia, {
                                    children: (0, v.jsx)(eS.ZP.Button, {
                                      disabled: !eU,
                                      title: eE,
                                      onClick: function () {
                                        return eO("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsx)("div", {
                            className: (0, U.Z)("grid w-full"),
                            children: (0, v.jsxs)("div", {
                              className: (0, U.Z)("mb-2 text-right"),
                              children: [
                                (0, v.jsx)(eS.ZP.Button, {
                                  disabled: !eU,
                                  title: y.formatMessage(
                                    ie.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eO("same");
                                  },
                                  className: (0, U.Z)("mr-2"),
                                }),
                                (0, v.jsx)(eS.ZP.Button, {
                                  title: y.formatMessage(ie.skipStep),
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
                (0, v.jsx)(eS.ZP.Actions, { primaryButton: eP }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var ia = X.Z.div(a7()),
        ii = X.Z.div(a6()),
        is = X.Z.div(a8()),
        io = X.Z.div(a9()),
        il = n(37541);
      function ic() {
        var e,
          t,
          n,
          r,
          a,
          i,
          s =
            ((t = (e = (0, ru.S)()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, nX.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (t || !n) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, nX.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          o = s.disablePluginsThatWeCantUse,
          l = s.pluginsWeCantUse,
          c = s.setupMfa,
          u = (0, j.useCallback)(
            function () {
              o();
            },
            [o]
          );
        return 0 === l.length
          ? null
          : (0, v.jsx)(eI.Z, {
              isOpen: !0,
              onClose: u,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, v.jsx)(eS.ZP.Button, {
                onClick: c,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, v.jsx)(eS.ZP.Button, {
                onClick: o,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, v.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  v.jsx)("div", { className: "w-full", children: (0, v.jsx)(n3.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var iu = n(16578),
        id = n.n(iu),
        im = n(44925),
        ih = n(74853),
        ig = n(99652),
        ip = n(1220);
      function ix(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = (0, ee.WS)(),
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, y.useRouter)(),
          l = (0, j.useCallback)(
            function () {
              r(et.s6.closeAccountPaymentModal), n();
            },
            [n, r]
          ),
          c = (0, j.useCallback)(
            (0, ec._)(function () {
              var e;
              return (0, ed.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    s(!0), r(et.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, en.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), o.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      nK.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return s(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [o, r, s]
          ),
          u = (0, j.useCallback)(
            function () {
              r(et.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          d = (0, j.useCallback)(
            function () {
              r(et.s6.clickAccountManageIos);
            },
            [r]
          ),
          m = (0, I.e2)(),
          f = (0, I.YD)();
        return (0, v.jsxs)(ih.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, v.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, v.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, v.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: l,
                  children: (0, v.jsx)(k.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className: "grid",
              children: (0, v.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, v.jsx)(ig.Oi, {
                  rowElements: [
                    (0, v.jsx)(
                      ig.Cu,
                      {
                        text: ip.S.plus.name,
                        children: (0, v.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: ip.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, v.jsx)(
                      ig.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: ip.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, v.jsx)(
                      ig.G,
                      { text: ip.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, v.jsx)(
                      ig.G,
                      { text: ip.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, v.jsx)(
                      ig.G,
                      { className: "sm:pb-1", text: ip.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == m ? void 0 : m.purchase_origin_platform) ===
                      im._4.MOBILE_IOS &&
                      (0, v.jsx)(
                        id(),
                        {
                          href: im.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, v.jsx)(ig.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ip.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!m ||
                      m.purchase_origin_platform === im._4.WEBAPP ||
                      m.purchase_origin_platform === im._4.GRANTED) &&
                      f &&
                      (0, v.jsx)(
                        ig.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: ip.S.manageSubscriptionWeb.callToAction,
                          onClick: c,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, v.jsx)(
                      id(),
                      {
                        href: im.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, v.jsx)(
                          ig.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ip.S.getHelp.callToAction,
                            onClick: u,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var iv = n(48432),
        ib = n(24148),
        iy = n(81372);
      function ij() {
        var e = (0, O._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (ij = function () {
            return e;
          }),
          e
        );
      }
      var ik = (0, C.vU)({
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
      function iw() {
        var e = (0, j.useContext)(R.gB),
          t = (0, K.Z)(),
          n = (0, S.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          r = n.isDesktopNavCollapsed,
          a = n.activeSidebar,
          i = (0, I.hz)(),
          s = i.has(er.Ue),
          o = i.has("debug") && "debug" !== a;
        return e
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(G.M, {
                  initial: !1,
                  children:
                    s &&
                    r &&
                    (0, v.jsx)(V.E.div, {
                      className:
                        "absolute left-2 top-2 z-10 hidden md:inline-block",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.165, ease: "easeIn" },
                      },
                      children: (0, v.jsx)(tZ.u, {
                        side: "right",
                        label: t.formatMessage(ik.openSidebar),
                        children: (0, v.jsx)(iC, {
                          onClick: S.vm.toggleDesktopNavCollapsed,
                          "aria-label": t.formatMessage(ik.openSidebar),
                          children: (0, v.jsx)(es.ZP, {
                            className: "text-black dark:text-white",
                            icon: k.iYc,
                          }),
                        }),
                      }),
                    }),
                }),
                (0, v.jsx)("div", {
                  className:
                    "absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex",
                  children:
                    o &&
                    (0, v.jsx)(tZ.u, {
                      side: "left",
                      label: t.formatMessage(ik.openDebug),
                      children: (0, v.jsx)(iC, {
                        onClick: function () {
                          return S.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": t.formatMessage(ik.openDebug),
                        children: (0, v.jsx)(es.ZP, {
                          className: "text-black dark:text-white",
                          icon: k.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var iC = X.Z.button(ij()),
        i_ = n(89678),
        iM = n.n(i_),
        iN = n(55989),
        iP = n(66523),
        iT = [
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
      function iZ(e) {
        return iS.apply(this, arguments);
      }
      function iS() {
        return (iS = (0, ec._)(function (e) {
          var t, n;
          return (0, ed.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = (0, x._)(e.queryKey, 2))[0],
                  (n = t[1]),
                  [
                    4,
                    en.ZP.getThreadInterpreterState(n).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          nK.m.warning(
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
      var iI = n(70060),
        iR = n.n(iI)()(
          function () {
            return Promise.resolve().then(n.bind(n, 49218));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [49218];
              },
            },
            ssr: !1,
          }
        );
      function iD(e) {
        var t = e.children;
        return (0, v.jsx)(iR, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function iA() {
        var e = (0, O._)(["grow flex-1 overflow-hidden"]);
        return (
          (iA = function () {
            return e;
          }),
          e
        );
      }
      function iB() {
        var e = (0, O._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (iB = function () {
            return e;
          }),
          e
        );
      }
      var iF = (0, C.vU)({
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
      function iE(e) {
        var t = e.onClickReportSharedConversation;
        return (0, v.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, v.jsx)("button", {
              onClick: function () {
                t();
              },
              children: (0, v.jsx)(
                w.Z,
                (0, g._)({}, iF.reportSharedConversation)
              ),
            }),
            (0, v.jsx)("span", { children: "|" }),
            (0, v.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, v.jsx)(w.Z, (0, g._)({}, iF.termsOfUse)),
            }),
            (0, v.jsx)("span", { children: "|" }),
            (0, v.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, v.jsx)(w.Z, (0, g._)({}, iF.privacyPolicy)),
            }),
          ],
        });
      }
      var iL = function (e) {
          var t,
            n,
            r,
            a,
            i,
            s,
            o,
            l,
            c,
            u,
            d,
            m,
            f,
            h,
            p,
            b,
            C,
            M,
            N,
            T,
            A,
            B,
            F,
            E,
            L,
            O,
            q,
            z,
            H,
            Q,
            W,
            $,
            G,
            V,
            J,
            X,
            ea,
            es,
            eo,
            em = e.initialThreadData,
            ef = e.clientThreadId,
            eg = e.activeRequests,
            ep = e.setActiveRequests,
            ex = e.handleResetThread,
            ev = e.initiallyHighlightedMessageId,
            ey = e.continueConversationUrl,
            ej = (0, j.useContext)(R.gB),
            ek = (0, K.Z)(),
            ew = (0, I.hz)(),
            eC = (0, eB.Fl)().isPluginsAvailable,
            e_ = (0, D.w$)(),
            eM = (0, ee.WS)(),
            eN = ew.has(er.Pt) && e_,
            eP = (0, j.useContext)(R.QL).historyDisabled,
            eT = (0, y.useRouter)(),
            eZ =
              ej &&
              (null === ($ = eT.query) || void 0 === $
                ? void 0
                : null === (G = $.shareParams) || void 0 === G
                ? void 0
                : G[1]) === "moderate",
            eR = (0, _.U0)(ef),
            eD = (0, _.Kt)(ef),
            eA = (0, _.oq)(ef),
            eF = (0, x._)((0, j.useState)(!1), 2),
            eE = eF[0],
            eL = eF[1],
            ez = (0, x._)((0, j.useState)(!1), 2),
            eH = ez[0],
            eQ = ez[1],
            eW = (0, x._)((0, j.useState)(), 2),
            e$ = eW[0],
            eG = eW[1],
            eV = (0, x._)((0, j.useState)(!1), 2),
            eJ = eV[0],
            eY = eV[1],
            eK = (0, x._)((0, j.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, x._)((0, j.useState)(), 2),
            e2 = e1[0],
            e3 = e1[1],
            e5 = (0, x._)((0, j.useState)(), 2),
            e4 = e5[0],
            e7 = e5[1],
            e6 = (0, j.useRef)(null),
            e8 = (0, I.WY)(),
            e9 = (0, a3.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            te = ew.has(er.FZ),
            tt = (0, x._)((0, j.useState)(!1), 2),
            tn = tt[0],
            tr = tt[1],
            ta =
              ((s = (i = {
                exempt: !1,
                onRestrictedTermFound: (0, j.useCallback)(
                  function (e) {
                    tr(!0),
                      eM(et.s6.promptUsedRestrictedWords, {
                        threadId: _.tQ.getServerThreadId(ef),
                        content: e,
                      });
                  },
                  [eM, ef]
                ),
              }).exempt),
              (o = i.onRestrictedTermFound),
              (c = (l = (0, x._)((0, j.useState)(!1), 2))[0]),
              (u = l[1]),
              {
                hasRestrictedTerms: c,
                checkRestrictedTerms: (0, j.useCallback)(
                  function (e) {
                    var t;
                    return (iT.some(function (n) {
                      var r = n.exec(e);
                      return r && (t = r[0]), r;
                    }),
                    !s && t)
                      ? (u(!0), null == o || o(t), !0)
                      : (u(!1), !1);
                  },
                  [s, o]
                ),
              }),
            ti = ta.hasRestrictedTerms,
            ts = ta.checkRestrictedTerms,
            to = (0, x._)((0, j.useState)(!0), 2),
            tl = to[0],
            tc = to[1],
            tu = (0, x._)((0, j.useState)(!1), 2),
            tm = tu[0],
            tf = tu[1],
            th = (0, tA.iu)(),
            tg = (0, nX.p0)(),
            tp = (0, tA.Gg)(th, !0),
            tx =
              null !== (eo = (0, tA.Bv)(em.lastModelUsed, ef)) && void 0 !== eo
                ? eo
                : tp,
            tv = (0, tA.B9)(),
            tb = void 0 !== tx ? tv.get(tx) : void 0,
            ty = (0, ak.iF)(),
            tj = (0, j.useCallback)(
              function () {
                ty(), eM(et.s6.newThread);
              },
              [eM, ty]
            ),
            tk = _.tQ.getTitle(ef),
            tw = (0, x._)((0, j.useState)(), 2),
            tC = tw[0],
            t_ = tw[1],
            tM = (0, j.useCallback)(
              function (e, t) {
                var n = null != t ? t : "";
                eP ||
                  "" === n ||
                  en.ZP.generateTitle(n, e, tx)
                    .then(function (e) {
                      var r = e.title;
                      _.tQ.setTitle(n, r, _._L.Generated),
                        ty(),
                        eM(et.s6.renameThread, {
                          threadId: t,
                          content: r,
                          model: tx,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eP, eM, tx, ty]
            ),
            tN = (0, j.useCallback)(
              function (e, t, n) {
                var r = ew.has(er.uj);
                eP ||
                  !r ||
                  void 0 === n ||
                  (0, eU.lD)(n) ||
                  (0, eU.JD)(n) ||
                  en.ZP.generateSuggestions(e, t, tx)
                    .then(function (e) {
                      t_({ messageId: t, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eP, tx]
            ),
            tP = (0, _.Uy)(ef),
            tT =
              ((d =
                eC &&
                (null == tb
                  ? void 0
                  : null === (V = tb.enabledTools) || void 0 === V
                  ? void 0
                  : V.includes("tools3"))
                  ? tg.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (f = (m = (0, I.hz)()).has(er.PL)),
              (h = (0, j.useId)()),
              (p = (0, ee.WS)()),
              (b = (0, nb.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (C = (0, nb.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (M = (0, j.useContext)(R.QL).historyDisabled),
              (N = (0, tA.B9)()),
              (T = (0, j.useRef)(0)),
              (A = (0, j.useRef)({})),
              (B = (0, j.useCallback)(
                function (e, t, n, r) {
                  var a,
                    i,
                    s = r.eventSource,
                    o = function () {
                      setTimeout(function () {
                        Z.removeAborterById(n),
                          ep(function (e) {
                            var t = new Set(e);
                            return t.delete(n), t;
                          }),
                          delete A.current[n],
                          _.tQ.releaseThread(ef);
                      }, 0);
                    },
                    l = _.tQ.getTree(ef),
                    c = n,
                    u = l.getParentId(c),
                    d = t === eO.Os.Continue,
                    h = !0,
                    x = !1,
                    v = l.getMessage(c),
                    y = new Set(),
                    j = l.getIsBlockedFromNode(u),
                    k = !1,
                    w = !1,
                    M = iM()(
                      function () {
                        j ||
                          k ||
                          _.tQ.updateTree(ef, function (e) {
                            e.updateNodeMessage(c, v);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function P() {
                    return (P = (0, ec._)(function (e, t, n) {
                      var r,
                        a,
                        i,
                        s,
                        o,
                        c = arguments;
                      return (0, ed.Jh)(this, function (u) {
                        switch (u.label) {
                          case 0:
                            (r = c.length > 3 && void 0 !== c[3] && c[3]),
                              (u.label = 1);
                          case 1:
                            return (
                              u.trys.push([1, 3, , 4]),
                              [4, (0, a2._I)(n, !1, e, l.getMessageId(t))]
                            );
                          case 2:
                            return (
                              (i = (a = u.sent()).isBlocked),
                              (s = a.isFlagged),
                              (i || s) && (w = !0),
                              i
                                ? ((k = !0),
                                  r || (j = !0),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eu._)((0, g._)({}, a2.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  p(
                                    r
                                      ? et.s6.completionBlockedByModeration
                                      : et.s6.promptBlockedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : s
                                ? (_.tQ.updateTree(ef, function (e) {
                                    e.updateNode(t, {
                                      metadata: { $set: a2.Mf },
                                    });
                                  }),
                                  p(
                                    r
                                      ? et.s6.completionFlaggedByModeration
                                      : et.s6.promptFlaggedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : r &&
                                  j &&
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNodeMessage(t, v);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (o = u.sent()),
                              (k = !0),
                              _.tQ.updateTree(ef, function (e) {
                                e.updateNode(t, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              p(et.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(o || ""),
                              }),
                              aY().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, ec._)(function (r) {
                      var a, T, S, I, R, D, B, F, L, O, U, q, z, H, Q, W, $, G;
                      return (0, ed.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (T =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                _.tQ.updateTree(ef, function (e) {
                                  e.updateNode(c, {
                                    message: { $set: v },
                                    metadata: {
                                      $set: {
                                        err: T,
                                        errType: "danger",
                                        errCode: ((0, iN.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                o(),
                                (0, iN.T)(a) &&
                                  (null == a ? void 0 : a.code) === nb.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (b(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    C();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((S = r.isCompletion),
                                (I = r.messageId),
                                (R = r.conversationId),
                                (D = r.flagged),
                                ((B = r.blocked) || D) &&
                                  _.tQ.updateTree(ef, function (e) {
                                    var t = e.messageIdToNodeId(I);
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eu._)(
                                          (0, g._)({}, B ? a2.sK : a2.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (D || B) &&
                                  p(
                                    S
                                      ? B
                                        ? et.s6.completionBlockedByModeration
                                        : et.s6.completionFlaggedByModeration
                                      : B
                                      ? et.s6.promptBlockedByModeration
                                      : et.s6.promptFlaggedByModeration,
                                    { threadId: R, id: I }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((F = r.message),
                                (L = r.conversationId),
                                h && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == F ? void 0 : F.author.role) ===
                                  eO.uU.System
                                )
                                  return l.appendSystemMessageToRoot(F), [2];
                                if (
                                  (null == F ? void 0 : F.author.role) ===
                                  eO.uU.User
                                )
                                  return [2];
                              }
                              h
                                ? ((U =
                                    (null ===
                                      (O = _.qN.getState().threads[ef]) ||
                                    void 0 === O
                                      ? void 0
                                      : O.continuingFromSharedConversationId) !=
                                    null),
                                  _.tQ.removeContinuingFromSharedConversationId(
                                    ef
                                  ),
                                  (h = !1),
                                  (x = l.isFirstCompletion || U),
                                  (null == F ? void 0 : F.id) && y.add(n),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, _.Zz)(ef) &&
                                      _.tQ.setServerIdForNewThread(ef, L)),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNodeMessage(c, F);
                                  }),
                                  x && tj(L),
                                  d ||
                                    (function (e, t, n) {
                                      P.apply(this, arguments);
                                    })(L, u, l.getTextFromLastNTurns(u, 1), !1),
                                  p(et.s6.generateCompletion, {
                                    id: n,
                                    threadId: L,
                                    completionType: t,
                                    eventSource: s,
                                    model: e,
                                  }),
                                  Z.addAborter(n, A.current[n]))
                                : d ||
                                  F.id === l.getMessageId(c) ||
                                  (y.add(F.id),
                                  M.flush(),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.addNode(F.id, F, c, eO.Jq.Completion);
                                  }),
                                  (c = F.id),
                                  _.tQ.setThreadCurrentLeafId(ef, c)),
                                (v = F);
                            }
                            if (
                              (M(),
                              "done" !== r.type ||
                                (j ||
                                  k ||
                                  (M.flush(),
                                  w ||
                                    ((q = l.getMessageId(c)),
                                    x && tM(q, i),
                                    tN(i, q, v))),
                                _.tQ.updateTree(ef, function (e) {
                                  e.updateNode(c, {
                                    metadata: {
                                      $set: (0, eu._)(
                                        (0, g._)({}, l.getMetadata(c)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                o(),
                                !m.has("tools3_dev")) ||
                                ((H =
                                  null === (z = N.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(tA.S.GPT_4)),
                                f && H && a1.gatherData(),
                                !(Q = (0, td.wR)(v))))
                            )
                              return [3, 4];
                            return [4, (0, td.qZ)(Q)];
                          case 1:
                            if (
                              ((W = V.sent()),
                              ($ = c),
                              _.tQ.updateTree(ef, function (e) {
                                var t = !0,
                                  n = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = W[Symbol.iterator]();
                                    !(t = (a = i.next()).done);
                                    t = !0
                                  ) {
                                    var s = a.value;
                                    e.addNode(s.id, s, $, eO.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      ($ = s.id);
                                  }
                                } catch (e) {
                                  (n = !0), (r = e);
                                } finally {
                                  try {
                                    t || null == i.return || i.return();
                                  } finally {
                                    if (n) throw r;
                                  }
                                }
                              }),
                              _.tQ.setThreadCurrentLeafId(ef, $),
                              !(f && H))
                            )
                              return [3, 3];
                            return [4, a1.getEnforcementToken()];
                          case 2:
                            (G = V.sent()), (V.label = 3);
                          case 3:
                            E({
                              model: e,
                              completionType: eO.Os.Next,
                              parentNodeId: $,
                              metadata: {},
                              arkoseToken: null != G ? G : null,
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
                [p, tj, tM, ep, ef]
              )),
              (E = (0, j.useCallback)(
                ((F = (0, ec._)(function (e) {
                  var t, n, r, a, i, s, o, l, c, u, m, f, g, p, x, v, b;
                  return (0, ed.Jh)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return (
                          (t = e.model),
                          (n = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (s = void 0 === (i = e.focusOnNewCompletion) || i),
                          (o = e.completionMetadata),
                          (l = e.arkoseToken),
                          (c = _.tQ.getTree(ef)),
                          _.tQ.retainThread(ef),
                          (u = ""
                            .concat(eq.Vh)
                            .concat(h, "-")
                            .concat(T.current++)),
                          ep(function (e) {
                            var t = new Set(e);
                            return t.add(u), t;
                          }),
                          _.tQ.updateTree(ef, function (e) {
                            e.addNode(u, "", r, eO.Jq.Completion);
                          }),
                          s && _.tQ.setThreadCurrentLeafId(ef, u),
                          (f = []),
                          (g = c.getNode(r)),
                          n === eO.Os.Next || n === eO.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (x = c.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || x.id),
                              f.push(g.message))
                            : (m = g.message.id),
                          void 0 === (v = _.tQ.getServerThreadId(ef)) &&
                            (0, _.Zz)(ef) &&
                            _.tQ.updateInitialThreadDataForNewThread(ef, t, d),
                          [
                            4,
                            en.ZP.publicApiCompletionStream(
                              {
                                model: t,
                                completionType: n,
                                threadId: v,
                                continueFromSharedConversationId: tP,
                                historyDisabled: M,
                                parentMessageId: m,
                                messages: f,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: d,
                                completionMetadata: o,
                              },
                              B(t, n, u, a)
                            ),
                          ]
                        );
                      case 1:
                        return (b = y.sent()), (A.current[u] = b), [2];
                    }
                  });
                })),
                function (e) {
                  return F.apply(this, arguments);
                }),
                [ef, h, ep, tP, M, d, B]
              ))),
            tZ = (0, j.useCallback)(
              function () {
                if (eA) {
                  var e = _.tQ.getTree(ef).getBranchFromLeaf(eA);
                  e.forEach(function (e) {
                    Z.abortAndRemoveById(e.id);
                  }),
                    ep(function (t) {
                      var n = new Set(t);
                      return (
                        e.forEach(function (e) {
                          n.delete(e.id);
                        }),
                        n
                      );
                    });
                }
              },
              [eA, ep, ef]
            ),
            tS =
              null === (J = tv.get(tx)) || void 0 === J
                ? void 0
                : J.tags.includes(tA.S.GPT_4),
            tI = ew.has(er.PL);
          (0, j.useEffect)(
            function () {
              tI && tS && a1.gatherData();
            },
            [tI, tS]
          );
          var tR = (0, j.useCallback)(
              ((L = (0, ec._)(function (e, t, n, r) {
                var a,
                  i,
                  s,
                  o,
                  l,
                  c,
                  u,
                  d,
                  m = arguments;
                return (0, ed.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (s = m.length > 6 ? m[6] : void 0),
                        r && tZ(),
                        (l = _.tQ.getTree(ef)),
                        e !== eO.Os.Continue && ts(l.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((c = i ? tp : tx),
                        (u =
                          null === (o = tv.get(c)) || void 0 === o
                            ? void 0
                            : o.tags.includes(tA.S.GPT_4)),
                        !(tI && u))
                      )
                        return [3, 2];
                      return [4, a1.getEnforcementToken()];
                    case 1:
                      (d = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        tT({
                          model: c,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: a,
                          completionMetadata: s,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, r) {
                return L.apply(this, arguments);
              }),
              [ef, ts, tp, tx, tv, tI, tT, tZ]
            ),
            tD = (0, j.useCallback)(
              function (e, t, n, r) {
                _.tQ.updateTree(ef, function (a) {
                  a.addNode(e, n, t, eO.Jq.Prompt, void 0, r);
                });
              },
              [ef]
            ),
            tB = (0, j.useCallback)(
              function (e, t, n) {
                var r = t.content,
                  a = t.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                tD(e, eA, r, a.length > 0 ? { attachments: a } : {}),
                  tR(eO.Os.Next, e, n, !0, void 0, void 0, i);
              },
              [eA, tD, tR]
            ),
            tF = (0, _.nh)(ef, eA),
            tE = (0, j.useMemo)(
              function () {
                var e,
                  t,
                  n = tF.type === eO.Jq.Prompt,
                  r =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (t = tF.metadata) || void 0 === t
                      ? void 0
                      : t.errCode) !== a2.Dd;
                return !!(n || r) && 0 === eg.size;
              },
              [eg.size, tF]
            ),
            tL = (0, nb.Y8)(function (e) {
              return e.isoDate;
            }),
            tO = (0, j.useMemo)(
              function () {
                var e,
                  t =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === nb.uU;
                return tE && t && null != tL && "" !== tL;
              },
              [
                null === (X = tF.metadata) || void 0 === X ? void 0 : X.errCode,
                tE,
                tL,
              ]
            ),
            tU = (0, j.useCallback)(
              function (e, t) {
                var n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = _.tQ.getTree(ef).getParentPromptNode(e).id;
                tR(eO.Os.Variant, i, t, !1, n, a, { variantPurpose: r });
              },
              [tR, ef]
            ),
            tq = (0, j.useCallback)(
              function (e) {
                eM(et.s6.continueCompletion),
                  tR(eO.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, tR]
            ),
            tz = (0, j.useCallback)(
              function (e) {
                var t = _.tQ.getTree(ef).getLeafFromNode(e);
                _.tQ.setThreadCurrentLeafId(ef, t.id), eM(et.s6.changeNode);
              },
              [eM, ef]
            ),
            tH = (0, j.useCallback)(
              function (e, t) {
                _.tQ.updateTree(ef, function (n) {
                  n.updateNodeText(e, t);
                });
              },
              [ef]
            ),
            tQ = (0, j.useCallback)(
              function (e, t, n) {
                var r = _.tQ.getServerThreadId(ef);
                if (
                  (eM(et.s6.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: tx,
                  }),
                  void 0 !== r &&
                    en.ZP.submitMessageFeedback({
                      message_id: t,
                      conversation_id: r,
                      rating: n,
                    }),
                  e3(e),
                  e7(t),
                  e0(n),
                  _.tQ.updateTree(ef, function (t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                      metadata: {
                        $set: (0, eu._)((0, g._)({}, r), { rating: n }),
                      },
                    });
                  }),
                  "thumbsDown" === n && eN)
                ) {
                  var a = _.tQ.getTree(ef).getConversationTurns(e || "root");
                  it(a[a.length - 1]) &&
                    tU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, ef, tx, eN, tU]
            ),
            tW = (0, j.useCallback)(
              function (e, t) {
                if (eX && null != e2 && "" !== e2 && (e || t.length > 0)) {
                  var n = _.tQ.getServerThreadId(ef);
                  eM(et.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tx,
                    rating: eX,
                    tags: t,
                  }),
                    ef &&
                      e4 &&
                      en.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: n,
                        rating: eX,
                        text: e,
                        tags: t,
                      });
                }
              },
              [eX, e2, ef, eM, e4, tx]
            ),
            t$ = (0, j.useCallback)(
              function (e, t) {
                if (eE && null != e$ && "" !== e$) {
                  var n = _.tQ.getServerThreadId(ef);
                  eM(et.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tx,
                    rating: eX,
                    tags: t,
                  }),
                    en.ZP.submitSharedConversationReportFeedback({
                      message_id: e$,
                      shared_conversation_id: n,
                      text: e,
                      tags: t,
                    }),
                    eQ(!0);
                }
              },
              [eX, eE, e$, ef, eM, e4, tx]
            ),
            tG = (0, j.useCallback)(
              ((O = (0, ec._)(function (e, t, n, r, a, i, s, o, l, c, u) {
                return (0, ed.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        en.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: n,
                          conversation_id: _.tQ.getServerThreadId(ef),
                          text: c,
                          tags: u.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: s,
                          new_completion_load_start_time: o,
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
              function (e, t, n, r, a, i, s, o, l, c, u) {
                return O.apply(this, arguments);
              }),
              [ef]
            ),
            tV = (0, j.useCallback)(
              ((q = (0, ec._)(function (e, t, n, r, a, i, s) {
                return (0, ed.Jh)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        en.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: "none",
                          conversation_id: _.tQ.getServerThreadId(ef),
                          text: "",
                          tags: [],
                          completion_comparison_rating: n,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: s,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return o.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, s) {
                return q.apply(this, arguments);
              }),
              [ef]
            ),
            tJ = (0, j.useCallback)(
              function (e, t) {
                var n = _.tQ.getTree(ef).getConversationTurns(e),
                  r =
                    null == n
                      ? void 0
                      : n[(null == n ? void 0 : n.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                tU(
                  e,
                  a
                    ? (0, eu._)((0, g._)({}, t), {
                        intent: "comparison_implicit",
                      })
                    : t,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [tU, ef]
            ),
            tY = (0, j.useCallback)(
              function (e) {
                _.tQ.updateTree(ef, function (t) {
                  t.deleteNode(e);
                });
              },
              [ef]
            ),
            tK = (0, j.useCallback)(function () {
              S.vm.closeModal(S.B.AccountPortal);
            }, []),
            tX = (0, ib.t)(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            t0 = tX.showAccountPaymentModal,
            t1 = tX.setShowAccountPaymentModal,
            t2 = (0, j.useCallback)(
              function () {
                t1(!1);
              },
              [t1]
            ),
            t3 = (0, j.useCallback)(
              function (e, t) {
                var n = _.tQ.getTree(ef);
                if (n.isFirstCompletion && !eP) {
                  var r,
                    a = n.getParent(t);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== a2.Dd &&
                    setTimeout(function () {
                      tM(a.message.id);
                    }, 500);
                }
                Z.abortAndRemoveById(t),
                  eg.has(t) &&
                    (_.tQ.updateTree(ef, function (e) {
                      e.updateNodeMessageMetadata(t, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    ep(function (e) {
                      var n = new Set(e);
                      return n.delete(t), n;
                    }));
              },
              [tM, eP, eg, ep, ef]
            ),
            t5 = (0, j.useCallback)(function () {
              tf(!0);
            }, []);
          (0, j.useEffect)(
            function () {
              var e = aY().subscribe("AbortCompletion", t3),
                t = aY().subscribe("UnrecoverableError", t5);
              return function () {
                aY().unsubscribe(e), aY().unsubscribe(t);
              };
            },
            [t3, t5]
          );
          var t4 = (0, _.Hk)(ef),
            t7 = eR >= 2,
            t6 = (0, _.Zz)(ef) && !t7,
            t8 = (0, j.useCallback)(function () {
              tc(!0), el.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t9 = (0, j.useCallback)(function () {
              tr(!1);
            }, []),
            ne = (0, _.lA)(ef, eA),
            nt = (0, _.dz)(ef, eA),
            nn = P(function (e) {
              return null != e.aborters[t4];
            }),
            nr = (0, j.useRef)(null),
            na = (0, j.useMemo)(
              function () {
                return !nn && !ne && nt;
              },
              [ne, nt, nn]
            ),
            ni = (0, S.tN)(function (e) {
              return e.activeModals.has(S.B.AccountPortal);
            }),
            ns = (0, iP.Z)(),
            no = (0, _.XK)(ef),
            nl = (0, S.tN)(function (e) {
              return e.sharingModalThreadId === no;
            });
          (H = (z = { clientThreadId: ef, currentModelId: tx }).clientThreadId),
            (Q = z.currentModelId),
            (t = (0, ny.i0)(Q, ny.dN.CODE_INTERPRETER)),
            (n = (0, j.useContext)(R.gB)),
            (r = (0, eh.kP)().session),
            (a = _.tQ.getServerThreadId(H)),
            (0, eb.a)({
              queryKey: ["interpreterState", a],
              queryFn: iZ,
              enabled: !!(t && a && !n && (null == r ? void 0 : r.accessToken)),
              cacheTime: 0,
            });
          var nc = (0, _.r7)(ef);
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(aV(), {
                children: [
                  null != tk && (0, v.jsx)("title", { children: tk }),
                  ej &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, v.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, v.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != tk ? tk : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, v.jsx)(
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
              ew.has(er.i) ? (0, v.jsx)(ic, {}) : null,
              !tl &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: t8,
                    icon: a$.Z,
                    title: ek.formatMessage(iF.doNotShareSensitive),
                    primaryButton: (0, v.jsx)(eS.ZP.Button, {
                      onClick: t8,
                      title: ek.formatMessage(iF.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ti &&
                tn &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: t9,
                    icon: k.U0j,
                    title: ek.formatMessage(iF.contentPolicyViolation),
                    primaryButton: (0, v.jsx)(eS.ZP.Button, {
                      onClick: t9,
                      title: ek.formatMessage(iF.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              nl &&
                null != no &&
                (0, v.jsx)(ai, {
                  serverThreadId: no,
                  activeRequests: eg,
                  currentThreadModel: em.lastModelUsed,
                }),
              null != eX &&
                (0, v.jsx)(ir, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: tW,
                  onHandleChangeFeedbackComparisonRating: tG,
                  currentModelId: tx,
                  feedbackTextareaRef: e6,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tH,
                  onChangeRating: tQ,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eE &&
                (0, v.jsx)(ir, {
                  ratingModalNodeId: e$,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eL(!1);
                  },
                  handleSubmitFeedback: t$,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tx,
                  feedbackTextareaRef: e6,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tH,
                  onChangeRating: tQ,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eH &&
                (0, v.jsx)(eI.Z, {
                  onClose: function () {
                    return eQ(!1);
                  },
                  isOpen: !0,
                  icon: a$.Z,
                  title: ek.formatMessage(iF.reportModalThankYouTitle),
                  description: ek.formatMessage(
                    iF.reportModalThankYouDescription
                  ),
                  primaryButton: (0, v.jsx)(eS.ZP.Button, {
                    onClick: function () {
                      return eQ(!1);
                    },
                    title: ek.formatMessage(iF.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, v.jsx)(ir, {
                  ratingModalNodeId: eA,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: Y(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tx,
                  feedbackTextareaRef: e6,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tH,
                  onChangeRating: tQ,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              (0, v.jsx)(iw, {}),
              (0, v.jsx)(iO, {
                children:
                  !eD &&
                  (t6 || t7) &&
                  ((W = (0, v.jsx)(
                    r1,
                    {
                      onChangeItemInView: tz,
                      onRequestMoreCompletions: tU,
                      onUpdateNode: tH,
                      onChangeRating: tQ,
                      onDeleteNode: tY,
                      onRequestCompletion: tR,
                      onHandleChangeVariantFeedbackInlineComparisonRating: tV,
                      isNewThread: t6,
                      clientThreadId: ef,
                      activeRequests: eg,
                      currentThreadModel: em.lastModelUsed,
                      initiallyHighlightedMessageId: ev,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: nr,
                    },
                    ef
                  )),
                  ej
                    ? (0, v.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: W,
                      })
                    : (0, v.jsx)(iD, { children: W })),
              }),
              (0, v.jsxs)(iU, {
                children: [
                  e8 &&
                    t6 &&
                    (null == tb ? void 0 : tb.tags.includes(tA.S.GPT_4)) &&
                    (0, v.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: ns.textareaDisclaimer,
                    }),
                  !tO &&
                    !ej &&
                    (0, v.jsx)(il.Z, {
                      children: (0, v.jsx)(
                        iy.ZP,
                        {
                          clientThreadId: ef,
                          onRequestMoreCompletions: tJ,
                          onCreateNewCompletion: tB,
                          onAbortCompletion: t3,
                          onContinueGenerating: tq,
                          currentModelId: tx,
                          isCompletionInProgress: eg.has(t4),
                          className: (0, U.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            te
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: tE,
                          canContinue: na,
                          suggestions:
                            void 0 !== tC &&
                            (null == tC ? void 0 : tC.messageId) ===
                              (null ===
                                (ea = _.tQ.getTree(ef).getLastValidNode(eA)) ||
                              void 0 === ea
                                ? void 0
                                : null === (es = ea.message) || void 0 === es
                                ? void 0
                                : es.id)
                              ? null == tC
                                ? void 0
                                : tC.suggestions
                              : void 0,
                          disabled: !th.size,
                          canPause: nn,
                          isInteractableSharedThread: nc,
                          ref: nr,
                        },
                        ef
                      ),
                    }),
                  ej &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, v.jsx)(ei.z, {
                            as: "link",
                            to: ey,
                            children: ek.formatMessage(
                              iF.sharedConversationContinueConversation
                            ),
                          }),
                          eZ &&
                            (0, v.jsx)(ei.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ek.formatMessage(
                                iF.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, v.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ej
                      ? (0, v.jsx)(iE, {
                          onClickReportSharedConversation: function () {
                            eG(eA), eL(!0);
                          },
                        })
                      : e8
                      ? (0, v.jsx)("span", {
                          children: (0, v.jsx)(
                            w.Z,
                            (0, eu._)(
                              (0, g._)({}, iF.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, v.jsx)("a", {
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
                      : (0, v.jsx)("span", {
                          children: (0, v.jsx)(
                            w.Z,
                            (0, eu._)((0, g._)({}, iF.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, v.jsx)("a", {
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
              e9 && (0, v.jsx)(iv.Z, { isOpen: t0, onClose: t2 }),
              void 0 !== e8 &&
                e8 &&
                (0, v.jsx)(ix, { isOpen: ni, onClose: tK }),
              tm &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    onClose: Y(),
                    isOpen: !0,
                    icon: a$.Z,
                    title: ek.formatMessage(iF.somethingWentWrong),
                    description: ek.formatMessage(iF.tryAgainLater),
                    primaryButton: (0, v.jsx)(eS.ZP.Button, {
                      onClick: function () {
                        ex(), tf(!1);
                      },
                      title: ek.formatMessage(iF.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        iO = X.Z.div(iA()),
        iU = X.Z.div(iB());
      function iq(e) {
        var t,
          n = e.clientThreadId,
          r = null !== (t = _.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
          a = A(n, r, !0),
          i = a.resolvedTitle,
          s = a.isTypingEffect,
          o = (0, j.useContext)(R.QL),
          l = o.historyDisabled,
          c = o.toggleHistoryDisabled;
        return (0, v.jsx)(v.Fragment, {
          children: l
            ? (0, v.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return c();
                },
                children: [
                  (0, v.jsx)(es.ZP, { icon: k.$IY }),
                  (0, v.jsx)(w.Z, (0, g._)({}, iH.enableChatHistory)),
                ],
              })
            : s && null != i
            ? (0, v.jsx)(E, { text: i })
            : null != i
            ? i
            : (0, v.jsx)(w.Z, (0, g._)({}, iH.newChat)),
        });
      }
      var iz =
          ((l = function (e) {
            var t = e.clientThreadId,
              n = e.setClientThreadId,
              r = (0, p._)(e, ["clientThreadId", "setClientThreadId"]),
              a = (0, j.useContext)(R.gB),
              i = (0, _.UL)(t),
              s = r.setActiveRequests,
              o = (0, _.XK)(t),
              l = (0, y.useRouter)(),
              c = (0, I.hz)(),
              u = (0, j.useContext)(R.QL).historyDisabled,
              d = (0, tA.Xy)(i.lastModelUsed, t),
              m = (0, b.NL)();
            (0, j.useEffect)(
              function () {
                return (
                  _.tQ.retainThread(t),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", t]);
                    }, 0),
                      _.tQ.releaseThread(t);
                  }
                );
              },
              [t, m]
            ),
              (0, j.useEffect)(
                function () {
                  S.vm.closeSharingModal();
                },
                [t, o]
              );
            var f = (0, j.useCallback)(
                function () {
                  n((0, _.OX)()),
                    d.tags.includes(tA.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [n, d.tags, d.id, l]
              ),
              h = (0, S.tN)(function (e) {
                return e.activeSidebar;
              }),
              x = (0, D.w$)();
            return (
              (0, j.useEffect)(
                function () {
                  return function () {
                    Z.abortAllAndReset(), s(new Set());
                  };
                },
                [s, t]
              ),
              (0, v.jsxs)(aW.Z, {
                onResetThread: f,
                showNavigation: !a,
                renderTitle: (0, v.jsx)(iq, { clientThreadId: t }),
                children: [
                  (0, v.jsxs)(aW.Z.NavigationPrimaryActionDesktop, {
                    onClick: f,
                    children: [
                      (0, v.jsx)(es.ZP, { icon: u ? k.Bw1 : k.OvN }),
                      (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, u ? iH.clearChat : iH.newChat)
                      ),
                    ],
                  }),
                  (0, v.jsx)(aW.Z.NavigationPrimaryActionMobile, {
                    onClick: f,
                    children: (0, v.jsx)(es.ZP, {
                      icon: u ? k.Bw1 : k.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, v.jsx)(aW.Z.NavigationContent, {
                    children: (0, v.jsx)(aD, {
                      activeId: u ? void 0 : o,
                      onNewThread: f,
                      setActiveRequests: s,
                    }),
                  }),
                  (0, v.jsx)(
                    iL,
                    (0, g._)(
                      {
                        initialThreadData: i,
                        clientThreadId: t,
                        handleResetThread: f,
                      },
                      r
                    ),
                    t
                  ),
                  (0, v.jsxs)(aW.Z.Sidebars, {
                    children: [
                      c.has("debug") &&
                        "debug" === h &&
                        (0, v.jsx)(rU.fv, {
                          clientThreadId: t,
                          slideOver: !x,
                          onClose: function () {
                            return S.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      c.has("tools3_dev") &&
                        (0, v.jsx)(aQ.ZP, { slideOver: !x }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var t = e.clientThreadId;
            (0, _.ax)(t);
            var n = (0, _.UL)(t),
              r = (0, x._)((0, j.useState)(new Set()), 2),
              a = r[0],
              i = r[1];
            return (
              (0, j.useEffect)(
                function () {
                  S.vm.setActiveSidebar(!1), Z.reset(), i(new Set());
                },
                [n.threadId]
              ),
              (0, v.jsx)(
                l,
                (0, g._)({}, e, { activeRequests: a, setActiveRequests: i })
              )
            );
          }),
        iH = (0, C.vU)({
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
    81372: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return ej;
        },
        go: function () {
          return e_;
        },
      });
      var r,
        a,
        i = n(39324),
        s = n(71209),
        o = n(22830),
        l = n(4337),
        c = n(35250),
        u = n(19841),
        d = n(70079),
        m = n(76483),
        f = n(97739),
        h = n(2827),
        g = n(1454),
        p = n(75908),
        x = n(35290),
        v = n(3001),
        b = n(34303),
        y = n(82841),
        j = n(36218),
        k = n(75955),
        w = n(32402),
        C = n(69403),
        _ = n(88038),
        M = n(75527),
        N = n(32689),
        P = n(21437),
        T = n(59110),
        Z = n(32983),
        S = n(77442),
        I = n(66958),
        R = n(27009),
        D = n(38317),
        A = n(57924);
      function B(e) {
        var t = e.disabled,
          n = e.getInputProps,
          r = e.onClick,
          a = (0, p.Z)();
        return (0, c.jsxs)(A.u, {
          label: a.formatMessage(F.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, c.jsx)(I.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: t,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(F.uploadFile),
              children: (0, c.jsx)(D.ZP, { icon: g.OvN, size: "small" }),
            }),
            (0, c.jsx)("input", (0, i._)({}, n({ className: "hidden" }))),
          ],
        });
      }
      var F = (0, v.vU)({
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
        E = n(21722),
        L = n(39889),
        O = n(24396),
        U = n(24274),
        q = n(59710),
        z = n(97688),
        H = n(25094),
        Q = { duration: 20, hasCloseButton: !0 },
        W = n(56115),
        $ = Math.floor(Math.log(1201) / Math.log(2)),
        G = { duration: 20, hasCloseButton: !0 },
        V = n(30931),
        J = n(90076),
        Y = n(97732),
        K = n(56060),
        X = n(37812),
        ee = n(54655);
      function et() {
        return (0, O.a)(
          ["visionContent"],
          (0, E._)(function () {
            return (0, L.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    U.ZP.getContent("vision").catch(function () {
                      return (
                        z.m.danger("Failed to load content"),
                        { onboarding: { title: "", content: [] } }
                      );
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          })
        );
      }
      function en(e) {
        var t = e.onPick,
          n = (0, o._)((0, d.useState)(!1), 2),
          r = n[0],
          a = n[1],
          s = (0, d.useCallback)(
            function (e, n) {
              a(!1), t(e, n);
            },
            [t]
          ),
          l = (0, p.Z)(),
          u = et().data,
          m = (null == u ? void 0 : u.examples) || [];
        return 0 === m.length
          ? null
          : (0, c.jsxs)(K.fC, {
              onOpenChange: a,
              open: r,
              children: [
                (0, c.jsx)(K.xz, {
                  asChild: !0,
                  children: (0, c.jsx)("div", {
                    className: "cursor-pointer",
                    children: (0, c.jsx)(A.u, {
                      label: l.formatMessage(ea.tryAnExample),
                      side: "top",
                      sideOffset: 4,
                      open: !0 !== r && void 0,
                      children: (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)(D.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: ee.DcN,
                          }),
                          (0, c.jsx)(X.T, {
                            children: l.formatMessage(ea.tryAnExample),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, c.jsx)(K.h_, {
                  children: (0, c.jsxs)(K.VY, {
                    side: "top",
                    sideOffset: 8,
                    className:
                      "relative max-w-md animate-slideUpAndFade select-none rounded-xl border-gray-100 bg-white p-3 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "mb-3 flex items-center justify-center gap-2 text-center text-sm font-medium",
                        children: [
                          (0, c.jsx)(D.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: ee.DcN,
                          }),
                          (0, c.jsx)(x.Z, (0, i._)({}, ea.tryAnExample)),
                        ],
                      }),
                      (0, c.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: m.map(function (e) {
                          return (0,
                          c.jsx)(er, { imageUrl: e.imageUrl, thumbnailUrl: e.thumbnailUrl, label: e.label, prompt: e.prompt, onPick: s }, e.imageUrl);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function er(e) {
        var t = e.imageUrl,
          n = e.thumbnailUrl,
          r = e.label,
          a = e.prompt,
          i = e.onPick,
          s = (0, d.useCallback)(
            (0, E._)(function () {
              var e, n, r, s, o;
              return (0, L.Jh)(this, function (l) {
                switch (l.label) {
                  case 0:
                    return l.trys.push([0, 3, , 4]), [4, fetch(t)];
                  case 1:
                    if (!(e = l.sent()).ok)
                      throw Error("Failed to load example image");
                    return [4, e.blob()];
                  case 2:
                    return (
                      (n = l.sent()),
                      (s = (r = t.split("/"))[r.length - 1]),
                      i(
                        new File([n], s, {
                          type:
                            null !== (o = e.headers.get("Content-Type")) &&
                            void 0 !== o
                              ? o
                              : void 0,
                        }),
                        a
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      l.sent(),
                      z.m.danger("Failed to load example image"),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [t, i, a]
          );
        return (0, c.jsxs)("button", {
          className:
            "group flex h-14 w-64 flex-row items-stretch overflow-hidden rounded text-left",
          onClick: s,
          children: [
            (0, c.jsx)("div", {
              className: "w-14 flex-none bg-cover bg-center",
              style: { backgroundImage: "url(".concat(n, ")") },
            }),
            (0, c.jsxs)("div", {
              className:
                "items-left flex min-w-0 flex-auto flex-col justify-center bg-gray-50 px-3 transition group-hover:bg-gray-100 dark:bg-gray-800 dark:group-hover:bg-gray-700",
              children: [
                (0, c.jsx)("div", {
                  className: "font-medium leading-none",
                  children: r,
                }),
                (0, c.jsx)("div", {
                  className:
                    "mt-2 truncate text-xs leading-none text-gray-600 dark:text-gray-300",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      var ea = (0, v.vU)({
          tryAnExample: {
            id: "VisionExamplePicker.tryAnExample",
            defaultMessage: "Try an example",
            description: "Label for examples popover",
          },
        }),
        ei = n(13002),
        es = n(85023),
        eo = n(59114),
        el = n(48727),
        ec = "oai/apps/hasSeenVisionOnboarding";
      function eu(e) {
        var t,
          n = e.currentModelConfig,
          r = e.disabled,
          a = (0, o._)(
            (0, d.useState)(function () {
              var e = es.m.getItem(ec);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1];
        return (null == n
          ? void 0
          : null === (t = n.capabilities) || void 0 === t
          ? void 0
          : t.multimodal) === void 0 ||
          r ||
          !1 !== i
          ? null
          : (0, c.jsx)(em, {
              onDismiss: function () {
                var e = Date.now();
                es.m.setItem(ec, e), s(e);
              },
            });
      }
      var ed = { lock: ei.Zp7, use_cases: ei.dvR };
      function em(e) {
        var t = e.onDismiss,
          n = et().data,
          r = null == n ? void 0 : n.onboarding;
        return r
          ? (0, c.jsx)(el.Z, {
              isOpen: !0,
              onClose: t,
              type: "success",
              primaryButton: (0, c.jsx)(eo.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: t,
              }),
              title: r.title,
              size: "custom",
              className:
                "max-w-[510px] text-gray-800 outline-none dark:text-gray-300",
              children: r.content.map(function (e, t) {
                if ("paragraph" === e.type)
                  return (0, c.jsx)("p", { children: e.text }, t);
                if ("callout" === e.type) {
                  var n;
                  return (0, c.jsx)(
                    ef,
                    {
                      icon:
                        null !== (n = ed[e.icon]) && void 0 !== n
                          ? n
                          : ed.beaker,
                      title: e.title,
                      text: e.text,
                      color: e.color || 0,
                    },
                    t
                  );
                }
                return null;
              }),
            })
          : null;
      }
      function ef(e) {
        var t = e.icon,
          n = e.title,
          r = e.text,
          a = e.color;
        return (0, c.jsxs)("div", {
          className: "my-4 flex flex-row",
          children: [
            (0, c.jsx)("div", {
              className: (0, u.Z)(
                "w-14 flex-none pl-2 pt-2",
                0 === a ? "text-brand-green" : "text-brand-purple"
              ),
              children: (0, c.jsx)(t, { size: 32 }),
            }),
            (0, c.jsxs)("div", {
              className: "max-w-60 flex-auto",
              children: [
                (0, c.jsx)("div", {
                  className: "font-bold text-black dark:text-white",
                  children: n,
                }),
                (0, c.jsx)("div", { children: r }),
              ],
            }),
          ],
        });
      }
      function eh() {
        var e = (0, l._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        var e = (0, l._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        var e = (0, l._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        var e = (0, l._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        var e = (0, l._)([
          "absolute p-1 bottom-[10px] md:bottom-3 md:p-2 right-12 transition-opacity ",
          "",
        ]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        var e = (0, l._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey() {
        var e = (0, l._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      ((r = a || (a = {}))[(r.None = 0)] = "None"),
        (r[(r.Multimodal = 1)] = "Multimodal"),
        (r[(r.Interpreter = 2)] = "Interpreter");
      var ej = (0, d.forwardRef)(function (e, t) {
        var n,
          r,
          a,
          l,
          f,
          v,
          b,
          K,
          X,
          ee,
          et,
          er,
          ea,
          ei,
          es,
          eo,
          el,
          ec,
          ed,
          em,
          ef,
          eh,
          eg,
          ep,
          ex,
          ev,
          eb,
          ey,
          ej,
          e_,
          eD,
          eA,
          eB,
          eF,
          eE,
          eL,
          eO,
          eU,
          eq,
          ez,
          eH,
          eQ,
          eW,
          e$,
          eG,
          eV,
          eJ,
          eY,
          eK,
          eX,
          e0,
          e1,
          e2,
          e3,
          e5,
          e4,
          e7,
          e6,
          e8 = e.onAbortCompletion,
          e9 = e.onCreateNewCompletion,
          te = e.onRequestMoreCompletions,
          tt = e.onContinueGenerating,
          tn = e.currentModelId,
          tr = e.clientThreadId,
          ta = e.isCompletionInProgress,
          ti = e.className,
          ts = e.disabled,
          to = void 0 !== ts && ts,
          tl = e.shouldRetry,
          tc = e.canPause,
          tu = void 0 !== tc && tc,
          td = e.canContinue,
          tm = void 0 !== td && td,
          tf = e.suggestions,
          th = e.isInteractableSharedThread,
          tg = (0, p.Z)(),
          tp = (0, M.oq)(tr),
          tx = (0, M.Hk)(tr),
          tv = (0, Y.Ri)(tn),
          tb = (0, S.w$)(),
          ty = (0, y.WS)(),
          tj = (0, d.useContext)(Z.gt).serviceStatus,
          tk = (0, d.useContext)(Z.QL).historyDisabled,
          tw = (0, d.useRef)(null),
          tC = (0, o._)((0, d.useState)(""), 2),
          t_ = tC[0],
          tM = tC[1],
          tN = (0, o._)((0, d.useState)(null), 2),
          tP = tN[0],
          tT = tN[1],
          tZ = (0, J.B9)(),
          tS = null !== tn ? tZ.get(tn) : void 0,
          tI =
            (0, P.Fl)().isCodeInterpreterAvailable &&
            (null == tS
              ? void 0
              : null === (e5 = tS.enabledTools) || void 0 === e5
              ? void 0
              : e5.includes("tools2"))
              ? 2
              : (null == tS
                  ? void 0
                  : null === (e4 = tS.capabilities) || void 0 === e4
                  ? void 0
                  : e4.multimodal) !== void 0 ||
                (null == tS
                  ? void 0
                  : null === (e7 = tS.enabledTools) || void 0 === e7
                  ? void 0
                  : e7.includes(
                      "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                    ))
              ? 1
              : 0,
          tR = 0 !== tI,
          tD = (0, d.useCallback)(
            function (e, t) {
              null === t
                ? ty(j.s6.uploadFile, { eventSource: "mouse" })
                : ty(j.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && tT(e[0]);
            },
            [ty]
          ),
          tA = (0, d.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var t = (function (e) {
                  var t = e.code,
                    n = e.message;
                  switch (t) {
                    case R.jK.FileTooLarge:
                      return F.errorFileTooLarge;
                    case R.jK.TooManyFiles:
                      return F.errorTooManyFiles;
                    default:
                      return n;
                  }
                })(e);
                "string" == typeof t
                  ? z.m.danger(t)
                  : z.m.danger(tg.formatMessage(t, { size: 512 }));
              });
            },
            [tg]
          ),
          tB = (0, d.useCallback)(function () {
            tT(null), tH(new Date().toString());
          }, []),
          tF = (0, m.uI)(
            (0, i._)(
              {
                maxFiles: 1,
                disabled: to || !tR,
                noClick: !0,
                onDropAccepted: tD,
                onDropRejected: tA,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, d.useMemo)(
                function () {
                  var e,
                    t,
                    n,
                    r =
                      null !==
                        (n =
                          null == tS
                            ? void 0
                            : null === (e = tS.capabilities) || void 0 === e
                            ? void 0
                            : null === (t = e.multimodal) || void 0 === t
                            ? void 0
                            : t.accepted_mime_types) && void 0 !== n
                        ? n
                        : [];
                  if (void 0 === r) return {};
                  var a = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                  };
                  return {
                    accept: r.reduce(function (e, t) {
                      return (
                        t in a
                          ? (e[t] = a[t])
                          : t.includes("/") &&
                            (e[t] = [".".concat(t.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [tS]
              )
            )
          ),
          tE = tF.getRootProps,
          tL = tF.getInputProps,
          tO = tF.isDragActive,
          tU = tF.open,
          tq = (0, o._)((0, d.useState)(new Date().toString()), 2),
          tz = tq[0],
          tH = tq[1],
          tQ =
            null !== tP
              ? JSON.stringify({
                  file: tP.name,
                  modified: tP.lastModified,
                  size: tP.size,
                  queryHash: tz,
                })
              : null,
          tW =
            ((l = 2 === tI ? tP : null),
            (b = ((f = (0, H.VF)()),
            (v = (0, O.a)({
              queryKey: ["interpreterUploadLink", tQ],
              queryFn: (0, E._)(function () {
                return (0, L.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        U.ZP.createFile(l.name, l.size, w.Ei.AceUpload).catch(
                          function (e) {
                            var t = f("default_create_entry_error", {
                              fileName: null == l ? void 0 : l.name,
                            });
                            throw (
                              (void 0 !== e.code && (t = f(e.code)),
                              z.m.danger(t, Q),
                              e)
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!l,
            }))).data),
            (K = v.isLoading),
            (X = v.isError),
            (ee =
              (null == b ? void 0 : b.status) === "success"
                ? b.upload_url
                : void 0),
            (eo = ((er = (et = (0, o._)((0, d.useState)(0), 2))[0]),
            (ea = et[1]),
            (0, d.useEffect)(
              function () {
                ea(0);
              },
              [tQ]
            ),
            (ei = (0, O.a)({
              queryKey: ["startFileUpload", tQ],
              queryFn: (0, E._)(function () {
                return (0, L.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        U.ZP.uploadFileToAzureStorage(l, ee, ea).then(function (
                          e
                        ) {
                          if (201 === e.status) return ee;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(l && ee),
            })),
            (es = (0, d.useMemo)(
              function () {
                return (0, s._)((0, i._)({}, ei), { progress: er });
              },
              [ei, er]
            ))).data),
            (el = es.isLoading),
            (ec = es.isError),
            (ed = es.progress),
            (em =
              (null == b ? void 0 : b.status) === "success" ? b.file_id : null),
            (ep = ((ef = M.tQ.getServerThreadId(tr)),
            (eh = (0, H.VF)()),
            (eg = (0, O.a)({
              queryKey: ["processCodeInterpeterUpload", tQ],
              queryFn: (0, E._)(function () {
                return (0, L.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        U.ZP.processCodeInterpeterUpload(
                          null != ef ? ef : null,
                          em,
                          l.name
                        ).catch(function (e) {
                          var t = eh("default_download_link_error", {
                            fileName: null == l ? void 0 : l.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = eh(e.code)),
                            z.m.danger(t, Q),
                            null == tB || tB(null == l ? void 0 : l.name),
                            new q.gK(t, void 0, e.code))
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(null !== em && null !== l && void 0 !== eo),
            }))).data),
            (ex = eg.isLoading),
            (ev = eg.isError),
            (eb = (0, d.useMemo)(
              function () {
                return b ? 10 + 80 * ed : 10;
              },
              [b, ed]
            )),
            (ey = X || ec || ev),
            (ej =
              K || el || ex || (null == ep ? void 0 : ep.status) !== "success"),
            (0, d.useEffect)(
              function () {
                if (ey) {
                  var e;
                  tB(
                    null !== (e = null == l ? void 0 : l.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == l ? void 0 : l.name, ey, tB]
            ),
            (0, d.useMemo)(
              function () {
                var e =
                    null !== l &&
                    !!(null == l ? void 0 : l.name) &&
                    (null == ep ? void 0 : ep.status) === "success" &&
                    void 0 !== eo,
                  t = e ? { name: l.name, url: eo } : null;
                return {
                  isLoading: ej,
                  loadingPercentage: ey || e ? void 0 : eb,
                  isError: ey,
                  uploadedFile: t,
                };
              },
              [l, null == ep ? void 0 : ep.status, eo, ey, ej, eb]
            )),
          t$ =
            ((e_ = 1 === tI ? tP : null),
            (eD = w.Ei.Multimodal),
            (eB = (eA = (0, O.a)({
              queryKey: ["createFile", tQ],
              queryFn: (0, E._)(function () {
                var e, t, n;
                return (0, L.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, W.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (t = e_.name.split(".").pop()),
                        (n = "chatgpt-file-".concat(e, ".").concat(t)),
                        [
                          4,
                          U.ZP.createFile(n, e_.size, eD).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == e_ ? void 0 : e_.name
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
              enabled: !!e_,
            })).data),
            (eF = eA.isLoading),
            (eE = eA.isError),
            (eL = null == eB ? void 0 : eB.file_id),
            (eO = null == eB ? void 0 : eB.upload_url),
            (eq = (eU = (0, O.a)({
              queryKey: ["uploadFile", tQ],
              queryFn: (0, E._)(function () {
                var e, t, n, r;
                return (0, L.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 7, , 8]),
                        [4, U.ZP.uploadFileToAzureStorage(e_, eO)]
                      );
                    case 1:
                      if (!(201 !== (e = a.sent()).status)) return [3, 6];
                      (t = "Unknown error"), (a.label = 2);
                    case 2:
                      return a.trys.push([2, 4, , 5]), [4, e.data];
                    case 3:
                      return (t = a.sent()), [3, 5];
                    case 4:
                      return a.sent(), [3, 5];
                    case 5:
                      return (
                        console.error(
                          "File upload failed at blobstore upload step",
                          e.status,
                          t
                        ),
                        U.ZP.markFileUploadFailed(eL, t),
                        [2, { success: !1 }]
                      );
                    case 6:
                      return [3, 8];
                    case 7:
                      throw (
                        (console.error(
                          "File upload failed due to a network error",
                          (n = a.sent())
                        ),
                        (r = "Unknown error"),
                        n instanceof Error && (r = n.message),
                        U.ZP.markFileUploadFailed(eL, r),
                        n)
                      );
                    case 8:
                      return [4, U.ZP.markFileUploadComplete(eL)];
                    case 9:
                      return a.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(e_ && eL && eO),
            })).data),
            (ez = eU.isLoading),
            (eH = eU.isError),
            (e$ = ((eQ = (0, H.VF)()),
            (eW = (0, O.a)({
              queryKey: ["pollForFileReady", tQ],
              queryFn: (0, E._)(function () {
                return (0, L.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        U.ZP.getFileDownloadLink(eL).catch(function (e) {
                          var t = eQ("default_download_link_error", {
                            fileName: null == e_ ? void 0 : e_.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = eQ(e.code)),
                            z.m.danger(t, G),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(eq && e_ && eL),
              refetchInterval: function (e, t) {
                if ((null == e ? void 0 : e.status) === w.KF.Retry) {
                  var n = t.state.dataUpdateCount;
                  return n > $
                    ? (null == tB || tB(null == e_ ? void 0 : e_.name), !1)
                    : 500 * Math.pow(2, n);
                }
                return !1;
              },
            }))).data),
            (eG = eW.isLoading),
            (eV = eW.isError),
            (eJ = null == e$ ? void 0 : e$.download_url),
            (eY = null !== e_ && "string" == typeof eJ && !!eL),
            (eK = eE || eH || eV),
            (eX =
              eF ||
              ez ||
              eG ||
              (null == e$ ? void 0 : e$.status) === w.KF.Retry),
            (e0 = (0, d.useMemo)(
              function () {
                return eY ? 100 : eq ? 50 : eB ? 10 : 0;
              },
              [eY, eq, eB]
            )),
            (0, d.useEffect)(
              function () {
                if (eK) {
                  var e;
                  z.m.danger("File upload failed", G),
                    tB(
                      null !== (e = null == e_ ? void 0 : e_.name) &&
                        void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == e_ ? void 0 : e_.name, eK, tB]
            ),
            (e2 = (e1 = (0, o._)(
              ((r = (n = (0, o._)((0, d.useState)([null, null]), 2))[0]),
              (a = n[1]),
              (0, d.useEffect)(
                function () {
                  if (!e_) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var t = new Image();
                    (t.onload = function () {
                      a([t.width, t.height]);
                    }),
                      (t.src = e.result);
                  }),
                    e.readAsDataURL(e_);
                },
                [e_]
              ),
              r),
              2
            ))[0]),
            (e3 = e1[1]),
            (0, d.useMemo)(
              function () {
                var e = eY
                  ? null !== e2 && null !== e3
                    ? {
                        id: eL,
                        name: e_.name,
                        size: e_.size,
                        url: eJ,
                        width: e2,
                        height: e3,
                      }
                    : { id: eL, name: e_.name, size: e_.size, url: eJ }
                  : null;
                return {
                  isLoading: eX,
                  loadingPercentage: eK || eY ? void 0 : e0,
                  isError: eK,
                  uploadedFile: e,
                };
              },
              [eY, e_, eL, eJ, eK, eX, e0, e2, e3]
            )),
          tG = (0, d.useMemo)(
            function () {
              return 2 === tI ? tW : t$;
            },
            [tI, tW, t$]
          ),
          tV = tG.isLoading,
          tJ = tG.isError,
          tY = tG.loadingPercentage,
          tK = tG.uploadedFile,
          tX = (0, d.useCallback)(function () {
            tM(""), tT(null), (0, h.SI)(1, tw.current);
          }, []),
          t0 = "root" !== tp && !ta && !(null == tj ? void 0 : tj.oof),
          t1 = !!(null === (e6 = tw.current) || void 0 === e6
            ? void 0
            : e6.value),
          t2 = null === tP ? t1 : !tV && !tJ,
          t3 = t2 && !to && !ta,
          t5 = (0, d.useCallback)(
            function (e, t) {
              if ((null == e || e.preventDefault(), !to)) {
                var n,
                  r,
                  a =
                    null === (n = tw.current) || void 0 === n
                      ? void 0
                      : n.value,
                  i = "".concat(
                    null === (r = tw.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (t2) {
                  var s = null != a ? a : "",
                    o = [];
                  tK &&
                    (2 === tI
                      ? o.push(tK)
                      : 1 === tI &&
                        "width" in tK &&
                        (s = {
                          content_type: C.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, H.L8)(tK.id),
                              size_bytes: tK.size,
                              width: tK.width,
                              height: tK.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    N.vm.hideThreadHeader(),
                    e9(
                      i,
                      { content: s, attachments: o },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: tf }
                    ),
                    tX(),
                    void 0 !== tf &&
                      (void 0 !== t
                        ? k.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(t),
                          })
                        : k.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [to, tX, t2, e9, tf, tK, tI]
          ),
          t4 = (0, d.useCallback)(
            function () {
              e8("", tx), te(tp, { eventSource: "mouse" });
            },
            [tp, tx, e8, te]
          ),
          t7 = (0, d.useCallback)(
            function () {
              e8("", tx),
                ty(j.s6.pauseCompletion, {
                  threadId: M.tQ.getServerThreadId(tr),
                  eventSource: "mouse",
                });
            },
            [tx, tr, ty, e8]
          ),
          t6 = (0, d.useCallback)(
            function () {
              tt(tp);
            },
            [tp, tt]
          ),
          t8 = (0, d.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return t3;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (tb && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), t5());
                  },
                },
                Escape: {
                  validator: function () {
                    return tu && ta;
                  },
                  handler: function () {
                    e8("", tx),
                      ty(j.s6.pauseCompletion, {
                        threadId: M.tQ.getServerThreadId(tr),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [t3, tb, ta, t5, tu, e8, tx, ty, tr]
          ),
          t9 = (0, d.useCallback)(
            function (e) {
              var t;
              (null === (t = t8[e.key]) || void 0 === t
                ? void 0
                : t.validator(e)) && t8[e.key].handler(e);
            },
            [t8]
          ),
          ne = (0, d.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === tI) {
                var t,
                  n,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == tS
                          ? void 0
                          : null === (t = tS.capabilities) || void 0 === t
                          ? void 0
                          : null === (n = t.multimodal) || void 0 === n
                          ? void 0
                          : n.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  z.m.danger(
                    tg.formatMessage(eR.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                N.vm.hideThreadHeader(), tT(a);
              }
            },
            [tS, tT, tI, tg]
          ),
          nt = (0, d.useCallback)(function (e, t) {
            tT(e), tM(t);
          }, []);
        (0, d.useEffect)(function () {
          var e;
          null === (e = tw.current) || void 0 === e || e.focus();
        }, []),
          (0, d.useEffect)(
            function () {
              tT(null);
            },
            [tn]
          );
        var nn = (0, T.hz)().has(_.uj),
          nr = tl || t0 || tm || tu,
          na = tb ? "neutral" : "none",
          ni = (0, d.useMemo)(
            function () {
              return (0, c.jsxs)("div", {
                className: tl ? "w-full" : "",
                children: [
                  tl &&
                    (0, c.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, c.jsx)(
                        x.Z,
                        (0, i._)({}, eR.errorGeneratingResponse)
                      ),
                    }),
                  (0, c.jsxs)(eI, {
                    $shouldRetry: tl,
                    children: [
                      !tl &&
                        nn &&
                        tf &&
                        (0, c.jsx)(ew, {
                          suggestions: tf,
                          shouldRetry: tl,
                          currentInputRef: tw,
                          onSelectSuggestion: tM,
                          handleCreateNewCompletion: t5,
                        }),
                      t0 &&
                        (0, c.jsxs)(I.z, {
                          as: "button",
                          color: tl ? "primary" : na,
                          onClick: t4,
                          className: (0, u.Z)(
                            tl ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, c.jsx)(D.ZP, {
                              icon: g.Qxo,
                              size: tb ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (tb || tl) &&
                              (0, c.jsx)(
                                x.Z,
                                (0, i._)({}, eR.regenerateResponse)
                              ),
                          ],
                        }),
                      tm &&
                        (0, c.jsxs)(I.z, {
                          as: "button",
                          color: "neutral",
                          onClick: t6,
                          className: "border-0 md:border",
                          children: [
                            (0, c.jsx)(D.ZP, {
                              icon: g.lV_,
                              className: "-rotate-180",
                              size: tb ? "xsmall" : "small",
                            }),
                            tb &&
                              (0, c.jsx)(
                                x.Z,
                                (0, i._)({}, eR.continueGenerating)
                              ),
                          ],
                        }),
                      tu &&
                        ta &&
                        (0, c.jsxs)(I.z, {
                          as: "button",
                          color: "neutral",
                          onClick: t7,
                          className: "border-0 md:border",
                          children: [
                            (0, c.jsx)(D.ZP, {
                              icon: g.jxP,
                              size: tb ? "xsmall" : "small",
                            }),
                            tb &&
                              (0, c.jsx)(x.Z, (0, i._)({}, eR.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [tl, nn, tf, t5, t0, na, t4, tb, tm, t6, tu, ta, t7]
          );
        (0, d.useImperativeHandle)(t, function () {
          return { setInputValue: tM };
        });
        var ns = t3
          ? { backgroundColor: null == tv ? void 0 : tv.backgroundColor }
          : {};
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)("form", {
              className: ti,
              onSubmit: t5,
              children: (0, c.jsxs)(
                "div",
                (0, s._)(
                  (0, i._)(
                    {
                      className:
                        "relative flex h-full flex-1 items-stretch md:flex-col",
                    },
                    tE()
                  ),
                  {
                    children: [
                      tb && nr && ni,
                      !tl &&
                        (0, c.jsxs)(eS, {
                          $disabled: tl,
                          $historyDisabled: tk,
                          children: [
                            tP &&
                              (0, c.jsx)(eN, {
                                children: (0, c.jsx)(V.Z, {
                                  onRemoveFileClick: function () {
                                    return tT(null);
                                  },
                                  file: tP,
                                  loadingPercentage: tY,
                                }),
                              }),
                            (0, c.jsx)(h.ZP, {
                              id: eC,
                              tabIndex: 0,
                              value: t_,
                              "data-id": tp,
                              ref: tw,
                              style: { maxHeight: "200px" },
                              rows: 1,
                              onKeyDown: t9,
                              onChange: function (e) {
                                N.vm.hideThreadHeader(), tM(e.target.value);
                              },
                              onPaste: ne,
                              placeholder: th
                                ? tg.formatMessage(
                                    eR.continueSharedConversationPlaceholder
                                  )
                                : tg.formatMessage(eR.placeholder),
                              className: (0, u.Z)(
                                "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                                !tP && tR
                                  ? "pl-12 md:pl-[30px]"
                                  : "pl-3 md:pl-0"
                              ),
                              disabled: tl,
                            }),
                            !tP &&
                              tR &&
                              (0, c.jsx)(eT, {
                                children: (0, c.jsx)(B, {
                                  onClick: tU,
                                  disabled: tl,
                                  getInputProps: tL,
                                }),
                              }),
                            1 === tI &&
                              (0, c.jsx)(eZ, {
                                $visible: !t2 && !tP && !ta,
                                children: (0, c.jsx)(en, { onPick: nt }),
                              }),
                            (0, c.jsx)(eP, {
                              disabled: !t3 || tl,
                              style: ns,
                              className: (0, u.Z)(
                                "bottom-1.5",
                                ta
                                  ? "disabled:bottom-0.5 md:disabled:bottom-0"
                                  : "transition-colors disabled:opacity-40"
                              ),
                              children: ta
                                ? (0, c.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, c.jsx)(ek, {}),
                                  })
                                : (0, c.jsx)(A.u, {
                                    label: tg.formatMessage(
                                      eR.sendMessageTooltip
                                    ),
                                    children: (0, c.jsx)(D.ZP, {
                                      icon: D.IX,
                                      size: "small",
                                      className: "m-1 md:m-0",
                                    }),
                                  }),
                            }),
                            tO &&
                              (0, c.jsxs)(eM, {
                                children: [
                                  (0, c.jsx)(D.ZP, { icon: g.tHe }),
                                  tg.formatMessage(eR.dragInstructions),
                                ],
                              }),
                          ],
                        }),
                      !tb && nr && ni,
                    ],
                  }
                )
              ),
            }),
            (0, c.jsx)(eu, { currentModelConfig: tS, disabled: th }),
          ],
        });
      });
      function ek() {
        var e = (0, o._)((0, d.useState)(0), 2),
          t = e[0],
          n = e[1];
        (0, d.useEffect)(function () {
          var e = setInterval(function () {
            n(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, c.jsx)(
              "span",
              { className: a <= t ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, c.jsx)(c.Fragment, { children: r });
      }
      function ew(e) {
        var t = e.suggestions,
          n = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          s = (0, p.Z)(),
          o = (0, d.useCallback)(
            function (e, t) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, t));
            },
            [r, i, a]
          );
        return (
          (0, d.useEffect)(
            function () {
              void 0 !== t && k.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [t]
          ),
          (0, c.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              n || void 0 === t
                ? null
                : t.slice(0, 2).map(function (e, t) {
                    return (0, c.jsxs)(
                      I.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return o(e, t);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, c.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, c.jsx)(A.u, {
                              label: s.formatMessage(eR.suggestionTooltip),
                              side: "top",
                              children: (0, c.jsx)(D.ZP, {
                                icon: f.Z,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
          })
        );
      }
      var eC = "prompt-textarea";
      function e_() {
        var e;
        null === (e = document.getElementById(eC)) || void 0 === e || e.focus();
      }
      var eM = b.Z.div(eh()),
        eN = b.Z.div(eg()),
        eP = b.Z.button(ep()),
        eT = b.Z.div(ex()),
        eZ = b.Z.div(ev(), function (e) {
          return e.$visible ? "opacity-100" : "opacity-0 pointer-events-none";
        }),
        eS = b.Z.div(
          eb(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        eI = b.Z.div(ey(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        eR = (0, v.vU)({
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
            defaultMessage: "Send a message",
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
    },
    99453: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return I;
        },
        Z: function () {
          return C;
        },
      });
      var r = n(96237),
        a = n(39324),
        i = n(71209),
        s = n(22830),
        o = n(4337),
        l = n(35250),
        c = n(90209),
        u = n(68789),
        d = n(19841),
        m = n(70079),
        f = n(7137),
        h = n(1454),
        g = n(34303),
        p = n(77442),
        x = n(38317),
        v = n(81372);
      function b() {
        var e = (0, o._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (0, o._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, o._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = (0, o._)(["block dark:text-white text-gray-900"]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, o._)(["block text-xs text-gray-500"]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function C(e) {
        var t = e.items,
          n = e.value,
          o = e.onChange,
          c = Z(),
          u = (0, s._)(
            (0, m.useState)(function () {
              return t.reduce(function (e, t) {
                if (t.options.length > 0) {
                  var r = t.options.find(function (e) {
                    return e.value === n;
                  });
                  if (r) return (e[t.value] = r.value), e;
                  e[t.value] = t.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          d = u[0],
          f = u[1],
          h = (0, m.useCallback)(
            function (e, s) {
              var l,
                u = n,
                m = t.find(function (t) {
                  return t.value === e;
                }),
                h = (null == d ? void 0 : d[e]) !== void 0,
                g =
                  h &&
                  t.some(function (t) {
                    return (
                      t.value === e &&
                      t.options.some(function (t) {
                        return t.value === d[e];
                      })
                    );
                  }),
                p = s;
              c &&
                void 0 === s &&
                (p = h
                  ? d[e]
                  : null !== (l = null == m ? void 0 : m.options[0].value) &&
                    void 0 !== l
                  ? l
                  : void 0),
                (u = void 0 !== p ? p : g ? d[e] : e) !== n &&
                  (o(u),
                  f(function (t) {
                    return (0, i._)((0, a._)({}, t), (0, r._)({}, e, u));
                  }));
            },
            [c, t, d, o, n]
          ),
          g = (0, s._)((0, m.useState)(new Set()), 2),
          p = g[0],
          x = g[1],
          v = (0, m.useCallback)(function (e, t) {
            t
              ? x(function (t) {
                  var n = new Set(t);
                  return n.add(e), n;
                })
              : x(function (t) {
                  var n = new Set(t);
                  return n.delete(e), n;
                });
          }, []);
        return (0, l.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, l.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: t.map(function (e, r) {
              var a,
                i,
                s,
                o,
                c,
                u,
                m =
                  n === e.value ||
                  e.options.some(function (e) {
                    return e.value === n;
                  }),
                f = m ? n : null == d ? void 0 : d[e.value],
                g =
                  null != f
                    ? f
                    : null === (i = e.options) || void 0 === i
                    ? void 0
                    : null === (s = i[0]) || void 0 === s
                    ? void 0
                    : s.value,
                x =
                  null !==
                    (o = e.options.find(function (e) {
                      return e.value === g;
                    })) && void 0 !== o
                    ? o
                    : e.options[0],
                b =
                  null !== (c = null == x ? void 0 : x.icon) && void 0 !== c
                    ? c
                    : null;
              return (0,
              l.jsx)(M, { onToggleItemOpenChanged: v, item: e, isSelected: m, isOtherToggleDropdownOpen: p.size > 0 && !p.has(e.categoryId), currentValue: n, defaultOption: null == x ? void 0 : x.value, onChange: h, currentIcon: b, displayCurrentValue: m && e.showSelectedValueBelow && null !== (u = null == x ? void 0 : x.name) && void 0 !== u ? u : "", contentAlign: ((a = t.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function _(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = e.currentIcon,
          s = e.displayCurrentValue,
          o = null != i ? i : t.icon,
          c = t.options.length > 1 || t.alwaysShowOptions,
          u = Z();
        return (0, l.jsxs)("div", {
          className: (0, d.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            n
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            void 0 !== a && a && "text-gray-800 dark:text-gray-100",
            r && n && "opacity-50"
          ),
          children: [
            (0, l.jsxs)("span", {
              className: (0, d.Z)(
                "relative max-[370px]:hidden",
                t.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != o &&
                  (0, l.jsx)(x.ZP, {
                    icon: o,
                    className: (0, d.Z)(
                      "transition-colors",
                      n ? t.buttonActiveClass : t.buttonHoverClass
                    ),
                  }),
                t.disabled && (0, l.jsx)(R, {}),
              ],
            }),
            (0, l.jsx)("span", {
              className: (0, d.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !u && "pr-1.5"
              ),
              children: t.name,
            }),
            u &&
              (n || c) &&
              (0, l.jsx)(x.ZP, {
                icon: c ? h.bTu : f.DAO,
                className: "toggle-item-button-open ml-0.5 text-gray-500",
              }),
            u &&
              (0, l.jsx)(x.ZP, {
                icon: h.rH8,
                className: "toggle-item-button-closed ml-0.5 text-gray-500",
              }),
            null != s &&
              "" !== s &&
              (0, l.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: s,
              }),
          ],
        });
      }
      function M(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          c = e.displayCurrentValue,
          f = e.contentAlign,
          h = e.onToggleItemOpenChanged,
          g = e.isOtherToggleDropdownOpen,
          p = (0, s._)((0, m.useState)(void 0), 2),
          x = p[0],
          b = p[1],
          y = (0, m.useRef)(null),
          j = t.options.length > 1 || t.alwaysShowOptions,
          k = !(void 0 === t.description && void 0 === t.disclaimer),
          w = Z(),
          C = (0, m.useCallback)(
            function (e) {
              b(e), h(t.categoryId, !!e);
            },
            [t.categoryId, h]
          );
        return (0, l.jsx)(u.fC, {
          open: x,
          modal: !1,
          onOpenChange: function (e) {
            w && e && !n && j && a(t.value);
          },
          children: (0, l.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return !w && C(!0);
            },
            onMouseLeave: function () {
              return !w && C(void 0);
            },
            children: [
              (0, l.jsx)(u.xz, {
                ref: y,
                className: "w-full cursor-pointer",
                onClick: function () {
                  t.disabled || a(t.value);
                },
                children: (0, l.jsx)(_, {
                  isOpen: !!x,
                  isOtherToggleDropdownOpen: g,
                  item: t,
                  isSelected: n,
                  currentIcon: i,
                  displayCurrentValue: c,
                }),
              }),
              (0, l.jsx)(
                u.Uv,
                {
                  children: (0, l.jsx)(u.VY, {
                    className: (0, d.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-3 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === t.name }
                    ),
                    align: f,
                    onCloseAutoFocus: function (e) {
                      x || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var t;
                      e.preventDefault(),
                        null === (t = y.current) || void 0 === t || t.focus();
                    },
                    children: (0, l.jsxs)(D, {
                      children: [
                        k && (0, l.jsx)(N, { item: t }),
                        (j || (!x && !w)) &&
                          (0, l.jsx)(P, {
                            defaultOption: n ? o : r,
                            item: t,
                            currentValue: o,
                            onChange: function (e, t) {
                              a(e, t), C(void 0), (0, v.go)();
                            },
                            className: (0, d.Z)(
                              "text-sm",
                              k &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                t.categoryId
              ),
            ],
          }),
        });
      }
      function N(e) {
        var t = e.item;
        return (0, l.jsxs)(A, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== t.description &&
              (0, l.jsx)(B, { children: t.description }),
            void 0 !== t.disclaimer &&
              (0, l.jsx)(F, { children: t.disclaimer }),
          ],
        });
      }
      function P(e) {
        var t = e.item,
          n = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, l.jsx)(u.Ee, {
          defaultValue: i,
          value: a,
          className: n,
          children: t.options.map(function (e, n) {
            return (0, l.jsx)(
              T,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: t.iconClass,
                iconActiveClass: t.buttonActiveClass,
                showBorder: n !== t.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(t.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function T(e) {
        var t,
          n = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          s = e.iconActiveClass,
          o = e.isDisabled,
          m = e.onChange,
          f = e.showBorder,
          h = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
        return (0, l.jsx)(u.Rk, {
          disabled: o,
          asChild: !0,
          value: n.value,
          onClick: m,
          className: "select-none outline-none",
          children: (0, l.jsxs)("div", {
            className: (0, d.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium focus:bg-gray-50 focus:dark:bg-gray-700",
              o ? "text-gray-500" : "text-gray-900 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !o,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": f,
              }
            ),
            children: [
              null != n.icon && null != h
                ? (0, l.jsx)(x.ZP, {
                    icon: r ? n.icon : h,
                    className: (0, d.Z)(
                      "max-[370px]:hidden",
                      !o && !r && i,
                      r || a ? s : "text-gray-500"
                    ),
                  })
                : null,
              (0, l.jsx)("span", {
                title: "string" == typeof n.name && n.name ? n.name : "",
                className: (0, d.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !o,
                  "text-gray-800 dark:text-gray-100": a && !o,
                }),
                children: n.name,
              }),
              n.tags.map(function (e) {
                return I(e);
              }),
              (0, l.jsx)("span", {
                className: (0, d.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0 group-hover/options:opacity-0": !r && !o,
                  "text-red-500": o,
                }),
                children: (0, l.jsx)(x.ZP, {
                  icon: o ? c.Z : x.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var Z = function () {
          return !(0, p.w$)();
        },
        S = new Set(["beta", "confidential", "alpha"]),
        I = function (e) {
          return (
            S.has(e) &&
            (0, l.jsx)(
              "span",
              {
                className: (0, d.Z)(
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
        R = g.Z.span(b()),
        D = g.Z.div(y()),
        A = g.Z.div(j()),
        B = g.Z.span(k()),
        F = g.Z.span(w());
    },
    5759: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return h;
        },
        Z: function () {
          return u;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303);
      function s() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (o = function () {
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
      function c() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        var t = e.icon,
          n = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: t }),
            (0, a.jsx)(f, { children: n }),
          ],
        });
      }
      var d = i.Z.div(s()),
        m = i.Z.div(o()),
        f = i.Z.div(l()),
        h = i.Z.div(c());
    },
    48432: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        s = n(35250),
        o = n(16578),
        l = n.n(o),
        c = n(68555),
        u = n(70079),
        d = n(1454),
        m = n(82841),
        f = n(36218),
        h = n(24274),
        g = n(59110),
        p = n(97688),
        x = n(44925),
        v = n(74853),
        b = n(99652),
        y = n(1220);
      function j(e) {
        var t = e.isOpen,
          n = e.onClose,
          o = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, u.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, c.useRouter)(),
          M = (0, u.useCallback)(
            function () {
              j(f.s6.closeAccountPaymentModal), n();
            },
            [n, j]
          ),
          N = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountPaymentCheckout), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]), [4, h.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
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
          P = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, h.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
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
          T = (0, u.useCallback)(
            function () {
              j(f.s6.clickAccountPaymentGetHelp);
            },
            [j]
          ),
          Z = (0, g.YD)(),
          S = o.has("disable_upgrade_ui");
        return (0, s.jsxs)(v.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, s.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, s.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: M,
                  children: (0, s.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, s.jsx)(b.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        b.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, s.jsx)(
                        b.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, s.jsx)(
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
                (0, s.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, s.jsx)(b.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        b.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, s.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, s.jsx)(
                        b.hi,
                        {
                          variant: "primary",
                          disabledText: S
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          onClick: N,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, s.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      Z &&
                        (0, s.jsx)(
                          b.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: P,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, s.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: x.ti,
                          passHref: !0,
                          children: (0, s.jsx)(
                            b.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: T,
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
    74853: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303),
        s = n(48727);
      function o() {
        var e = (0, r._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var t = e.children,
            n = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(s.Z, {
            size: "fullscreen",
            isOpen: n,
            onClose: r,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(c, { children: t }),
              }),
            }),
          });
        },
        c = i.Z.div(o());
    },
    99652: function (e, t, n) {
      "use strict";
      n.d(t, {
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
          return v;
        },
        nR: function () {
          return y;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        s = n(70079),
        o = n(1454),
        l = n(34303),
        c = n(66958),
        u = n(38317),
        d = n(57924);
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
          var t = e.rowElements;
          return (0, a.jsx)(j, {
            children: t.map(function (e) {
              return e;
            }),
          });
        },
        p = function (e) {
          var t = e.className,
            n = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: t,
            children: [(0, a.jsx)("span", { children: n }), r],
          });
        },
        x = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        v = (0, s.forwardRef)(function (e, t) {
          var n = e.isLoading,
            r = void 0 !== n && n,
            s = e.disabled,
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
                  children: (0, a.jsxs)(c.z, {
                    ref: t,
                    as: "button",
                    color: "disabled",
                    className: (0, i.Z)("w-full", x[f]),
                    children: [
                      h,
                      r &&
                        (0, a.jsx)(u.ZP, {
                          className: "animate-spin",
                          icon: o.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(c.z, {
                disabled: void 0 !== s && s,
                onClick: l,
                ref: t,
                as: "button",
                className: (0, i.Z)(x[f]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, i.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === f,
                      "text-white": "primary" === f,
                    }),
                    children: h,
                  }),
                  r &&
                    (0, a.jsx)(u.ZP, {
                      className: "animate-spin",
                      icon: o.dAq,
                    }),
                ],
              });
        });
      v.displayName = "PricingPlanButton";
      var b = function (e) {
          var t = e.variant,
            n = void 0 === t ? "primary" : t,
            r = e.className,
            s = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(u.ZP, {
                icon: o._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == n,
                  "text-gray-400": "secondary" == n,
                }),
              }),
              (0, a.jsx)("span", { children: s }),
            ],
          });
        },
        y = function (e) {
          var t = e.className,
            n = e.text,
            r = e.isLoading,
            i = e.onClick;
          return (0, a.jsx)(k, {
            className: t,
            children: (0, a.jsxs)("button", {
              onClick: i,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: n }),
                r &&
                  (0, a.jsx)(u.ZP, { className: "animate-spin", icon: o.dAq }),
              ],
            }),
          });
        },
        j = l.Z.div(m()),
        k = l.Z.div(f()),
        w = l.Z.div(h());
    },
    1220: function (e, t, n) {
      "use strict";
      n.d(t, {
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
    41402: function () {},
  },
]);
