(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2493],
  {
    85243: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          __N_SSP: function () {
            return ee;
          },
          default: function () {
            return er;
          },
        });
      var t,
        l = a(90038),
        n = a(50134),
        i = a(36112),
        s = a(4399),
        o = a.n(s),
        d = a(95412),
        c = a(7144),
        u = a(73582),
        f = a(61236),
        x = a(25494),
        m = a(1755),
        h = a(99893),
        p = a(26822),
        g = a(13521),
        v = a(14765),
        j = a(19841),
        y = a(83737),
        _ = a(26565),
        b = a(77997),
        w = a(73040),
        I = a.n(w),
        N = a(10721),
        k = a(70079),
        C = a(1454),
        M = a(70671),
        P = a(32004),
        O = a(94968),
        R = a(21389),
        D = a(63754),
        E = a(12457),
        S = a(91559),
        U = a(14972),
        T = a(62906),
        Z = a(92804),
        L = a(90955),
        F = a(63866),
        A = a(4748),
        H = a(35250);
      function V(e, r) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function B(e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? V(Object(a), !0).forEach(function (r) {
                (0, i.Z)(e, r, a[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : V(Object(a)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(a, r)
                  );
                });
        }
        return e;
      }
      function G() {
        return (0, H.jsx)("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: (0, H.jsx)(F.Z, {}),
        });
      }
      var W = function (e) {
          var r = e.examples,
            a = e.referralCodeId,
            t = e.user,
            l = e.auth0Provider,
            n = e.redirectUrl,
            i = (0, M.Z)(),
            s = "dark" === (0, b.F)().resolvedTheme,
            o = (0, k.useRef)(null);
          return (
            (0, k.useEffect)(
              function () {
                v.m9.logEvent(
                  "chatgpt_referral_invite_loaded",
                  null != t && t.id ? "has_user" : "user_logged_out",
                  {
                    user_id: null != t && t.id ? t.id : "_no_user",
                    referral_code_id: a,
                  }
                );
              },
              [a, null == t ? void 0 : t.id]
            ),
            (0, k.useEffect)(
              function () {
                return (
                  null === o.current &&
                    (o.current = document.body.style.backgroundColor),
                  (document.body.style.backgroundColor = s
                    ? "#00002E"
                    : "#FFFFDB"),
                  function () {
                    null !== o.current &&
                      (document.body.style.backgroundColor = o.current);
                  }
                );
              },
              [s]
            ),
            (0, H.jsxs)("div", {
              className:
                "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] ",
              children: [
                (0, H.jsx)(Z.O, { examples: void 0 === r ? [] : r }),
                (0, H.jsxs)("div", {
                  className:
                    "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
                  children: [
                    (0, H.jsx)("nav", {
                      className:
                        "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                      children: (0, H.jsx)("h1", {
                        "aria-label": i.formatMessage(Q.ariaLabel),
                        children: (0, H.jsx)("div", {
                          className:
                            "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                          children: (0, H.jsx)("div", { children: T.L }),
                        }),
                      }),
                    }),
                    (0, H.jsx)(q, {
                      user: t,
                      auth0Provider: l,
                      redirectUrl: n,
                      referralCodeId: a,
                    }),
                    (0, H.jsxs)("div", {
                      className: "flex flex-col items-center justify-end",
                      children: [
                        (0, H.jsx)("div", {
                          className: "flex text-gray-300",
                          children: (0, H.jsx)(U.nV, {
                            className: "h-[22px] w-auto",
                          }),
                        }),
                        (0, H.jsx)("div", {
                          className: " opacity-50",
                          children: (0, H.jsx)(E.VL, {
                            isStorageComplianceEnabled: !1,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        z = function (e) {
          var r = e.offerDollarValue,
            a = e.user,
            t = e.isLoading,
            l = e.isLoadingLogin,
            n = e.handleClaimInvite,
            i = e.handleSignupWarning,
            s = e.handleLogin,
            o = (0, u.ec)(u.F_.hasPaidSubscription);
          return null != a && a.id
            ? (0, H.jsx)(S.z, {
                as: "button",
                disabled: t || o,
                loading: t,
                color: o ? "disabled" : "primary",
                size: "large",
                onClick: n,
                className: (0, j.default)(
                  "whitespace-nowrap text-base font-bold ",
                  { "bg-[#4046EC] hover:bg-[#6E73FC]": !o }
                ),
                children: o
                  ? (0, H.jsx)(P.Z, B({}, Q.alreadyPaidUserCta))
                  : (0, H.jsx)(
                      P.Z,
                      B(
                        B({}, Q.acceptInviteCtaLoggedIn),
                        {},
                        { values: { dollarValue: r } }
                      )
                    ),
              })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)("div", {
                    className:
                      "pb-5 text-center text-sm text-token-text-tertiary",
                    children: (0, H.jsx)(
                      P.Z,
                      B({}, Q.claimInviteLoginOrSignUp)
                    ),
                  }),
                  (0, H.jsx)("div", {
                    className: "flex flex-col space-y-4 px-3",
                    children: (0, H.jsxs)("div", {
                      className: "flex flex-col gap-3 sm:flex-row",
                      children: [
                        (0, H.jsx)(S.z, {
                          disabled: t,
                          loading: l,
                          className: "w-full",
                          onClick: s,
                          children: (0, H.jsx)(P.Z, B({}, D.messages.logIn)),
                        }),
                        (0, H.jsx)(S.z, {
                          onClick: i,
                          disabled: t,
                          className: "w-full",
                          children: (0, H.jsx)(P.Z, B({}, D.messages.signUp)),
                        }),
                      ],
                    }),
                  }),
                ],
              });
        };
      function q(e) {
        var r,
          a,
          t,
          l,
          i = e.user,
          s = e.referralCodeId,
          j = e.redirectUrl,
          b = e.auth0Provider,
          w = (0, k.useState)(!1),
          O = w[0],
          R = w[1],
          D = (0, k.useState)(!1),
          E = D[0],
          S = D[1],
          U = (0, k.useState)(!1),
          T = U[0],
          Z = U[1],
          F = (0, k.useState)(!1),
          V = F[0],
          G = F[1],
          W =
            null !== (t = null == i ? void 0 : i.id) && void 0 !== t
              ? t
              : "_no_user",
          q = (0, f.a)({
            queryKey: ["referral-invite", s],
            queryFn: function () {
              return d.Z.getPublicReferralInvite(s);
            },
          }),
          ee = q.data,
          er = q.isLoading,
          ea = q.isError,
          et = (0, M.Z)(),
          el =
            null == ee
              ? void 0
              : null === (l = ee.result.invite_metadata) || void 0 === l
                ? void 0
                : l.invite_data,
          en = "$".concat(null == el ? void 0 : el.referral_trial_dollar_value),
          ei = null == el ? void 0 : el.referrer_public_avatar_url,
          es =
            null != el && el.referral_trial_duration_months
              ? (null == el ? void 0 : el.referral_trial_duration_months) >= 1
                ? et.formatMessage(Q.monthsOfService, {
                    referralTrialDurationMonths:
                      null == el ? void 0 : el.referral_trial_duration_months,
                  })
                : et.formatMessage(Q.daysOfService, {
                    referralTrialDurationDays:
                      null == el ? void 0 : el.referral_trial_duration_days,
                  })
              : null,
          eo = null == el ? void 0 : el.referrer_user_name,
          ed =
            null != el && el.referral_trial_duration_months
              ? (null == el ? void 0 : el.referral_trial_duration_months) > 1
                ? et.formatMessage(Q.monthsOfBenefit, {
                    referralTrialDurationMonths:
                      null == el ? void 0 : el.referral_trial_duration_months,
                  })
                : et.formatMessage(Q.daysOfBenefit, {
                    referralTrialDurationDays:
                      null == el ? void 0 : el.referral_trial_duration_days,
                  })
              : null,
          ec =
            null != el && el.referral_trial_duration_months
              ? (null == el ? void 0 : el.referral_trial_duration_months) >= 1
                ? et.formatMessage(Q.ctaHeaderMonths, {
                    referralTrialDurationMonths:
                      null == el ? void 0 : el.referral_trial_duration_months,
                  })
                : et.formatMessage(Q.ctaHeaderDays, {
                    referralTrialDurationDays:
                      null == el ? void 0 : el.referral_trial_duration_days,
                  })
              : null,
          eu = et.formatMessage(Q.dollarValue, { offerDollarValue: en }),
          ef = (0, c.t)(),
          ex = (0, u.ec)(u.F_.workspaceId),
          em = (0, N.useRouter)(),
          eh = (0, x.D)({
            mutationFn: function () {
              return d.Z.postClaimReferralInvite(s, ex || "");
            },
            onSettled: function () {
              Z(!1);
            },
            onError:
              ((r = (0, n.Z)(
                o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          A.m.danger(et.formatMessage(Q.claimReferralError));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
            onSuccess: function () {
              R(!0), em.push("/invite/accepted?referralCodeId=".concat(s));
            },
          }).mutateAsync,
          ep =
            ((a = (0, n.Z)(
              o().mark(function e() {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Z(!0),
                          v.m9.logEvent("chatgpt_referral_invite_claim", s, {
                            referralCodeId: s,
                            userId: W,
                          }),
                          m.A.logEvent(h.M.chatgptReferralInviteClaim, {
                            content: W,
                          }),
                          (e.next = 5),
                          eh()
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return a.apply(this, arguments);
            });
        return ((0, k.useEffect)(
          function () {
            ea &&
              (em.push("/?e=oldi"),
              g.U.addAction("fetch_error_404", {
                url: location.href,
                errorMessage: "Referral code not found",
              }));
          },
          [ea, em]
        ),
        ea)
          ? (0, H.jsx)(Y, {})
          : er || (null == ef && null != i && i.id) || O
            ? (0, H.jsx)($, {})
            : (0, H.jsx)(H.Fragment, {
                children: (0, H.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col items-center justify-center",
                  children: [
                    E &&
                      (0, H.jsx)(y.E.div, {
                        initial: { opacity: 0, x: 10 },
                        transition: { delay: 1, duration: 0.1 },
                        animate: {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        children: (0, H.jsx)(X, {
                          handleSignup: function () {
                            Z(!0),
                              G(!0),
                              v.m9.logEvent(
                                "chatgpt_referral_invite_signup",
                                s,
                                { referralCodeId: s }
                              ),
                              m.A.logEvent(h.M.chatgptReferralInviteSignup, {
                                content: s,
                              }),
                              (0, _.signIn)(
                                b,
                                { callbackUrl: j },
                                { prompt: "login", screen_hint: "signup" }
                              );
                          },
                          setHasRequestedSignup: S,
                        }),
                      }),
                    !E &&
                      (0, H.jsx)(y.E.div, {
                        initial: { opacity: 0 },
                        transition: { delay: 1, duration: 0.2 },
                        animate: {
                          opacity: 1,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        children: (0, H.jsx)("div", {
                          className:
                            "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
                          children: (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsx)("h2", {
                                className:
                                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                                children: ec,
                              }),
                              (0, H.jsx)(J, {
                                referrerPublicAvatarUrl: ei,
                                referrerName: eo,
                                benefitWithTime: ed,
                                receivedPlan: "ChatGPT Plus",
                                dollarValue: eu,
                              }),
                              (0, H.jsx)("div", {
                                children: (0, H.jsx)("p", {
                                  className: "text-sm",
                                  children: (0, H.jsx)(
                                    P.Z,
                                    B({}, Q.benefitPointsHeader)
                                  ),
                                }),
                              }),
                              (0, H.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, H.jsxs)(K, {
                                    children: [
                                      (0, H.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, H.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, H.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, H.jsx)(
                                          P.Z,
                                          B({}, L.S.plus.demandAccess)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, H.jsxs)(K, {
                                    children: [
                                      (0, H.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, H.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, H.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, H.jsx)(
                                          P.Z,
                                          B({}, L.S.plus.responseSpeed)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, H.jsxs)(K, {
                                    className: "pb-2",
                                    children: [
                                      (0, H.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, H.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, H.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, H.jsx)(
                                          P.Z,
                                          B({}, L.S.plus.modelFeatures)
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, H.jsx)("div", {
                                className: "w-full",
                                children: (0, H.jsx)(z, {
                                  handleClaimInvite: ep,
                                  handleSignupWarning: function () {
                                    Z(!0),
                                      S(!0),
                                      v.m9.logEvent(
                                        "chatgpt_referral_invite_explain_signup",
                                        s,
                                        { referralCodeId: s }
                                      ),
                                      m.A.logEvent(
                                        h.M.chatgptReferralInviteExplainSignup,
                                        { content: s }
                                      ),
                                      Z(!1);
                                  },
                                  handleLogin: function () {
                                    Z(!0),
                                      G(!0),
                                      v.m9.logEvent(
                                        "chatgpt_referral_invite_login",
                                        s,
                                        { referralCodeId: s }
                                      ),
                                      m.A.logEvent(
                                        h.M.chatgptReferralInviteLogin,
                                        { content: s }
                                      );
                                    var e,
                                      r =
                                        null ===
                                          (e = p.bX.getCookie(p.cn.DeviceId)) ||
                                        void 0 === e
                                          ? void 0
                                          : e.toString();
                                    (0, _.signIn)(
                                      b,
                                      B(
                                        { callbackUrl: j },
                                        r ? { device_id: r } : {}
                                      ),
                                      { prompt: "login" }
                                    );
                                  },
                                  user: i,
                                  offerDollarValue: en,
                                  isLoading: T,
                                  isLoadingLogin: V,
                                }),
                              }),
                              (0, H.jsxs)("div", {
                                className: "space-y-1.5 py-1 text-center",
                                children: [
                                  (0, H.jsx)("p", {
                                    className:
                                      "text-xs text-token-text-tertiary",
                                    children: (0, H.jsx)(
                                      P.Z,
                                      B(
                                        B({}, Q.ctaFollowUpSummary),
                                        {},
                                        {
                                          values: {
                                            monthlyCost: "$20",
                                            monthsOfService: es,
                                          },
                                        }
                                      )
                                    ),
                                  }),
                                  (null == i ? void 0 : i.id) &&
                                    (0, H.jsx)("p", {
                                      className:
                                        "text-xs text-token-text-tertiary",
                                      children: (0, H.jsx)(
                                        P.Z,
                                        B(
                                          B({}, Q.ctaNotice),
                                          {},
                                          {
                                            values: {
                                              userEmail:
                                                null == i ? void 0 : i.email,
                                              avatar: function () {
                                                var e;
                                                return (0, H.jsx)("img", {
                                                  className:
                                                    "inline-block h-4 w-4 rounded-full",
                                                  src:
                                                    null !==
                                                      (e =
                                                        null == i
                                                          ? void 0
                                                          : i.picture) &&
                                                    void 0 !== e
                                                      ? e
                                                      : void 0,
                                                  alt:
                                                    null == i ? void 0 : i.name,
                                                });
                                              },
                                              email: function (e) {
                                                return (0, H.jsx)("span", {
                                                  className: "font-medium",
                                                  children: e,
                                                });
                                              },
                                              link: function (e) {
                                                return (0, H.jsx)(I(), {
                                                  className: "underline",
                                                  href: "/auth/logout",
                                                  children: e,
                                                });
                                              },
                                            },
                                          }
                                        )
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                  ],
                }),
              });
      }
      var X = function (e) {
          var r = e.setHasRequestedSignup,
            a = e.handleSignup;
          return (0, H.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, H.jsx)("h2", {
                className:
                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                children: (0, H.jsx)(P.Z, B({}, Q.signUpExplainTitle)),
              }),
              (0, H.jsx)("div", {
                children: (0, H.jsx)("p", {
                  className: "text-sm",
                  children: (0, H.jsx)(P.Z, B({}, Q.signUpExplainDescription)),
                }),
              }),
              (0, H.jsxs)("div", {
                className: "flex flex-col gap-4 md:flex-row",
                children: [
                  (0, H.jsx)(S.z, {
                    className: "w-full",
                    onClick: function () {
                      r(!1);
                    },
                    color: "neutral",
                    children: (0, H.jsx)(P.Z, B({}, Q.signUpCtaBack)),
                  }),
                  (0, H.jsx)(S.z, {
                    onClick: a,
                    className: "w-full",
                    color: "primary",
                    children: (0, H.jsx)(P.Z, B({}, Q.signUpCtaProceed)),
                  }),
                ],
              }),
            ],
          });
        },
        Y = function () {
          return (0, H.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, H.jsx)("div", {
                className:
                  "relative flex h-8 w-8 items-center justify-center opacity-70",
                children: (0, H.jsx)(G, {}),
              }),
              (0, H.jsx)(y.E.div, {
                initial: { opacity: 0 },
                transition: { delay: 1, duration: 0.2 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.2, ease: "easeIn" },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.2, ease: "easeIn" },
                },
                children: (0, H.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, H.jsx)("h2", {
                      className: "text-sm font-semibold",
                      children: (0, H.jsx)(P.Z, B({}, Q.errorHeader)),
                    }),
                    (0, H.jsx)("p", {
                      className: "text-xs font-normal",
                      children: (0, H.jsx)(
                        P.Z,
                        B(
                          B({}, Q.errorDescription),
                          {},
                          {
                            values: {
                              link: function (e) {
                                return (0, H.jsx)("a", {
                                  href: "/",
                                  className: "underline",
                                  children: e,
                                });
                              },
                            },
                          }
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        $ = function () {
          return (0, H.jsx)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: (0, H.jsx)("div", {
              className:
                "relative flex h-8 w-8 items-center justify-center opacity-70",
              children: (0, H.jsx)(G, {}),
            }),
          });
        },
        K = R.Z.div(
          t ||
            (t = (0, l.Z)([
              "gap-2 flex flex-row justify-start text-sm items-start",
            ]))
        ),
        J = function (e) {
          var r = e.referrerPublicAvatarUrl,
            a = e.referrerName,
            t = e.benefitWithTime,
            l = e.receivedPlan,
            n = e.dollarValue;
          return (0, H.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
              (0, H.jsx)("div", {
                className: "flex-shrink-0 pt-0.5",
                children: (0, H.jsx)("img", {
                  className: "h-12 w-12 rounded-full bg-yellow-400",
                  src: r,
                  alt: a,
                }),
              }),
              (0, H.jsx)("div", {
                className: "ml-3 w-0 flex-1",
                children: (0, H.jsx)("p", {
                  className: "text-sm text-token-text-primary",
                  children: (0, H.jsx)(
                    P.Z,
                    B(
                      B({}, Q.socialProofText),
                      {},
                      {
                        values: {
                          referrerName: a,
                          benefitWithTime: t,
                          receivedPlan: l,
                          dollarValue: n,
                          highlight: function (e) {
                            return (0, H.jsx)("span", {
                              className:
                                "rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",
                              children: e,
                            });
                          },
                        },
                      }
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Q = (0, O.vU)({
          claimReferralError: {
            id: "ReferralInvite.claimReferralError",
            defaultMessage: "There was an issue.",
          },
          claimInviteLoginOrSignUp: {
            id: "ReferralInvite.claimInviteLoginOrSignUp",
            defaultMessage:
              "You can claim this invite after you log in or sign up.",
          },
          ctaNotice: {
            id: "ReferralInvite.ctaNotice",
            defaultMessage:
              "Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>",
          },
          ctaHeaderMonths: {
            id: "ReferralInvite.ctaHeaderMonths",
            defaultMessage:
              "Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus",
          },
          ctaHeaderDays: {
            id: "ReferralInvite.ctaHeaderDays",
            defaultMessage:
              "Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus",
          },
          dollarValue: {
            id: "ReferralInvite.dollarValue",
            defaultMessage: "(a {offerDollarValue} value)",
          },
          monthsOfService: {
            id: "ReferralInvite.monthsOfService",
            defaultMessage:
              "{referralTrialDurationMonths, plural, one {# month} other {# months}}",
          },
          daysOfService: {
            id: "ReferralInvite.daysOfService",
            defaultMessage:
              "{referralTrialDurationDays, plural, one {# day} other {# days}}",
          },
          monthsOfBenefit: {
            id: "ReferralInvite.monthsOfBenefit",
            defaultMessage:
              "{referralTrialDurationMonths, plural, one {free month} other {# free months}}",
          },
          daysOfBenefit: {
            id: "ReferralInvite.daysOfBenefit",
            defaultMessage:
              "{referralTrialDurationDays, plural, one {# free day} other {# free days}}",
          },
          ariaLabel: {
            id: "ReferralInvite.ariaLabel",
            defaultMessage: "ChatGPT by OpenAI",
          },
          socialProofText: {
            id: "ReferralInvite.socialProofText",
            defaultMessage:
              "{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}",
          },
          welcome: {
            id: "ReferralInvite.welcome",
            defaultMessage: "Welcome to ChatGPT",
          },
          benefitPointsHeader: {
            id: "ReferralInvite.benefitPointsHeader",
            defaultMessage:
              "ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:",
          },
          acceptInviteCtaLoggedOut: {
            id: "ReferralInvite.acceptInviteCtaLoggedOut",
            defaultMessage: "Get started",
          },
          acceptInviteCtaLoggedIn: {
            id: "ReferralInvite.acceptInviteCtaLoggedIn",
            defaultMessage: "Claim invite",
          },
          alreadyPaidUserCta: {
            id: "ReferralInvite.alreadyPaidUserCta",
            defaultMessage: "ChatGPT Plus subscription found",
          },
          ctaFollowUpSummary: {
            id: "ReferralInvite.ctaFollowUpSummary",
            defaultMessage: "{monthsOfService} free, then {monthlyCost}/month",
          },
          referralCodeContent: {
            id: "ReferralInvite.referralCodeContent",
            defaultMessage: "Referral code: {codeToken}",
          },
          errorHeader: {
            id: "ReferralInvite.errorHeader",
            defaultMessage: "Invite error",
          },
          errorDescription: {
            id: "ReferralInvite.errorDescription",
            defaultMessage:
              "You will be redirected, or <link>click here.</link>",
          },
          loadingHeader: {
            id: "ReferralInvite.loadingHeader",
            defaultMessage: "Invite loading",
          },
          loadingDescription: {
            id: "ReferralInvite.loadingDescription",
            defaultMessage:
              "Your page will be loaded, or <link>go home by clicking here.</link>",
          },
          signUpExplainTitle: {
            id: "ReferralInvite.signUpExplainTitle",
            defaultMessage: "Almost done!",
          },
          signUpExplainDescription: {
            id: "ReferralInvite.signUpExplainDescription",
            defaultMessage:
              "Once you’ve finished signing up, return to this page to claim your invite.",
          },
          signUpCtaProceed: {
            id: "ReferralInvite.signUpCtaProceed",
            defaultMessage: "Proceed",
          },
          signUpCtaBack: {
            id: "ReferralInvite.signUpCtaBack",
            defaultMessage: "Go back",
          },
        }),
        ee = !0;
      function er(e) {
        var r = e.examples,
          a = e.redirectUrl,
          t = e.user,
          l = e.auth0Provider,
          n = e.referralCodeId;
        return (0, H.jsx)(W, {
          user: t,
          redirectUrl: a,
          referralCodeId: n,
          auth0Provider: l,
          examples: void 0 === r ? [] : r,
        });
      }
    },
    94244: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/[[...referralCodeParam]]",
        function () {
          return a(85243);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [3975, 3754, 9774, 2888, 179], function () {
      return e((e.s = 94244));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...referralCodeParam]]-d288b497b9ca19cb.js.map
