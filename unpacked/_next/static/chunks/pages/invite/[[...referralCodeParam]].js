(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2493],
  {
    69356: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          __N_SSP: function () {
            return K;
          },
          default: function () {
            return J;
          },
        });
      var t,
        l = r(99945),
        i = r(18450),
        n = r(53362),
        s = r(47712),
        o = r(19052),
        d = r(61236),
        c = r(25494),
        u = r(38801),
        f = r(67852),
        x = r(43041),
        m = r(66315),
        h = r(34594),
        g = r(19841),
        p = r(83737),
        v = r(69096),
        j = r(85252),
        y = r(7610),
        _ = r.n(y),
        b = r(41409),
        w = r(70079),
        N = r(1454),
        I = r(9063),
        k = r(84692),
        C = r(68498),
        M = r(21389),
        P = r(32510),
        O = r(64833),
        R = r(29287),
        E = r(73606),
        D = r(27740),
        S = r(2932),
        U = r(63198),
        T = r(85452),
        Z = r(95407),
        L = r(35250);
      function F(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function H(e) {
        for (var a = 1; a < arguments.length; a++) {
          var r = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? F(Object(r), !0).forEach(function (a) {
                (0, i.Z)(e, a, r[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : F(Object(r)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(r, a)
                  );
                });
        }
        return e;
      }
      function A() {
        return (0, L.jsx)("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: (0, L.jsx)(T.Z, {}),
        });
      }
      let B = (e) => {
          let {
              examples: a = [],
              referralCodeId: r,
              user: t,
              auth0Provider: l,
              redirectUrl: i,
            } = e,
            n = (0, I.Z)(),
            { resolvedTheme: s } = (0, j.F)(),
            o = "dark" === s,
            d = (0, w.useRef)(null);
          return (
            (0, w.useEffect)(() => {
              h.m9.logEvent(
                "chatgpt_referral_invite_loaded",
                null != t && t.id ? "has_user" : "user_logged_out",
                {
                  user_id: null != t && t.id ? t.id : "_no_user",
                  referral_code_id: r,
                }
              );
            }, [r, null == t ? void 0 : t.id]),
            (0, w.useEffect)(() => {
              null === d.current &&
                (d.current = document.body.style.backgroundColor);
              let e = o ? "#00002E" : "#FFFFDB";
              return (
                (document.body.style.backgroundColor = e),
                () => {
                  null !== d.current &&
                    (document.body.style.backgroundColor = d.current);
                }
              );
            }, [o]),
            (0, L.jsxs)("div", {
              className:
                "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] ",
              children: [
                (0, L.jsx)(S.O, { examples: a }),
                (0, L.jsxs)("div", {
                  className:
                    "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
                  children: [
                    (0, L.jsx)("nav", {
                      className:
                        "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                      children: (0, L.jsx)("h1", {
                        "aria-label": n.formatMessage($.ariaLabel),
                        children: (0, L.jsx)("div", {
                          className:
                            "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                          children: (0, L.jsx)("div", { children: D.L }),
                        }),
                      }),
                    }),
                    (0, L.jsx)(G, {
                      user: t,
                      auth0Provider: l,
                      redirectUrl: i,
                      referralCodeId: r,
                    }),
                    (0, L.jsxs)("div", {
                      className: "flex flex-col items-center justify-end",
                      children: [
                        (0, L.jsx)("div", {
                          className: "flex text-gray-300",
                          children: (0, L.jsx)(E.nV, {
                            className: "h-[22px] w-auto",
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className: " opacity-50",
                          children: (0, L.jsx)(O.VL, {
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
        V = (e) => {
          let {
              offerDollarValue: a,
              user: r,
              isLoading: t,
              isLoadingLogin: l,
              handleClaimInvite: i,
              handleSignupWarning: n,
              handleLogin: s,
            } = e,
            d = (0, o.ec)(o.F_.hasPaidSubscription);
          return null != r && r.id
            ? (0, L.jsx)(R.z, {
                as: "button",
                disabled: t || d,
                loading: t,
                color: d ? "disabled" : "primary",
                size: "large",
                onClick: i,
                className: (0, g.default)(
                  "whitespace-nowrap text-base font-bold ",
                  { "bg-[#4046EC] hover:bg-[#6E73FC]": !d }
                ),
                children: d
                  ? (0, L.jsx)(k.Z, H({}, $.alreadyPaidUserCta))
                  : (0, L.jsx)(
                      k.Z,
                      H(
                        H({}, $.acceptInviteCtaLoggedIn),
                        {},
                        { values: { dollarValue: a } }
                      )
                    ),
              })
            : (0, L.jsxs)(L.Fragment, {
                children: [
                  (0, L.jsx)("div", {
                    className:
                      "pb-5 text-center text-sm text-token-text-tertiary",
                    children: (0, L.jsx)(
                      k.Z,
                      H({}, $.claimInviteLoginOrSignUp)
                    ),
                  }),
                  (0, L.jsx)("div", {
                    className: "flex flex-col space-y-4 px-3",
                    children: (0, L.jsxs)("div", {
                      className: "flex flex-col gap-3 sm:flex-row",
                      children: [
                        (0, L.jsx)(R.z, {
                          disabled: t,
                          loading: l,
                          className: "w-full",
                          onClick: s,
                          children: (0, L.jsx)(k.Z, H({}, P.messages.logIn)),
                        }),
                        (0, L.jsx)(R.z, {
                          onClick: n,
                          disabled: t,
                          className: "w-full",
                          children: (0, L.jsx)(k.Z, H({}, P.messages.signUp)),
                        }),
                      ],
                    }),
                  }),
                ],
              });
        };
      function G(e) {
        var a, r;
        let {
            user: t,
            referralCodeId: l,
            redirectUrl: i,
            auth0Provider: g,
          } = e,
          { 0: j, 1: y } = (0, w.useState)(!1),
          { 0: C, 1: M } = (0, w.useState)(!1),
          { 0: P, 1: O } = (0, w.useState)(!1),
          { 0: R, 1: E } = (0, w.useState)(!1),
          D =
            null !== (a = null == t ? void 0 : t.id) && void 0 !== a
              ? a
              : "_no_user",
          {
            data: S,
            isLoading: T,
            isError: F,
          } = (0, d.a)({
            queryKey: ["referral-invite", l],
            queryFn: () => n.Z.getPublicReferralInvite(l),
          }),
          A = (0, I.Z)(),
          B =
            null == S || null === (r = S.result.invite_metadata) || void 0 === r
              ? void 0
              : r.invite_data,
          G = "$".concat(null == B ? void 0 : B.referral_trial_dollar_value),
          K = null == B ? void 0 : B.referrer_public_avatar_url,
          J =
            null != B && B.referral_trial_duration_months
              ? (null == B ? void 0 : B.referral_trial_duration_months) >= 1
                ? A.formatMessage($.monthsOfService, {
                    referralTrialDurationMonths:
                      null == B ? void 0 : B.referral_trial_duration_months,
                  })
                : A.formatMessage($.daysOfService, {
                    referralTrialDurationDays:
                      null == B ? void 0 : B.referral_trial_duration_days,
                  })
              : null,
          Q = null == B ? void 0 : B.referrer_user_name,
          ee =
            null != B && B.referral_trial_duration_months
              ? (null == B ? void 0 : B.referral_trial_duration_months) > 1
                ? A.formatMessage($.monthsOfBenefit, {
                    referralTrialDurationMonths:
                      null == B ? void 0 : B.referral_trial_duration_months,
                  })
                : A.formatMessage($.daysOfBenefit, {
                    referralTrialDurationDays:
                      null == B ? void 0 : B.referral_trial_duration_days,
                  })
              : null,
          ea =
            null != B && B.referral_trial_duration_months
              ? (null == B ? void 0 : B.referral_trial_duration_months) >= 1
                ? A.formatMessage($.ctaHeaderMonths, {
                    referralTrialDurationMonths:
                      null == B ? void 0 : B.referral_trial_duration_months,
                  })
                : A.formatMessage($.ctaHeaderDays, {
                    referralTrialDurationDays:
                      null == B ? void 0 : B.referral_trial_duration_days,
                  })
              : null,
          er = A.formatMessage($.dollarValue, { offerDollarValue: G }),
          et = (0, s.t)(),
          el = (0, o.ec)(o.F_.workspaceId),
          ei = (0, b.useRouter)(),
          { mutateAsync: en } = (0, c.D)({
            mutationFn: () => n.Z.postClaimReferralInvite(l, el || ""),
            onSettled: () => {
              O(!1);
            },
            onError: async () => {
              Z.m.danger(A.formatMessage($.claimReferralError));
            },
            onSuccess: () => {
              y(!0), ei.push("/invite/accepted?referralCodeId=".concat(l));
            },
          }),
          es = async () => {
            O(!0),
              h.m9.logEvent("chatgpt_referral_invite_claim", l, {
                referralCodeId: l,
                userId: D,
              }),
              u.A.logEvent(f.M.chatgptReferralInviteClaim, { content: D }),
              await en();
          };
        return ((0, w.useEffect)(() => {
          F &&
            (ei.push("/?e=oldi"),
            m.U.addAction("fetch_error_404", {
              url: location.href,
              errorMessage: "Referral code not found",
            }));
        }, [F, ei]),
        F)
          ? (0, L.jsx)(W, {})
          : T || (null == et && null != t && t.id) || j
            ? (0, L.jsx)(q, {})
            : (0, L.jsx)(L.Fragment, {
                children: (0, L.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col items-center justify-center",
                  children: [
                    C &&
                      (0, L.jsx)(p.E.div, {
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
                        children: (0, L.jsx)(z, {
                          handleSignup: () => {
                            O(!0),
                              E(!0),
                              h.m9.logEvent(
                                "chatgpt_referral_invite_signup",
                                l,
                                { referralCodeId: l }
                              ),
                              u.A.logEvent(f.M.chatgptReferralInviteSignup, {
                                content: l,
                              }),
                              (0, v.signIn)(
                                g,
                                { callbackUrl: i },
                                { prompt: "login", screen_hint: "signup" }
                              );
                          },
                          setHasRequestedSignup: M,
                        }),
                      }),
                    !C &&
                      (0, L.jsx)(p.E.div, {
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
                        children: (0, L.jsx)("div", {
                          className:
                            "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
                          children: (0, L.jsxs)(L.Fragment, {
                            children: [
                              (0, L.jsx)("h2", {
                                className:
                                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                                children: ea,
                              }),
                              (0, L.jsx)(Y, {
                                referrerPublicAvatarUrl: K,
                                referrerName: Q,
                                benefitWithTime: ee,
                                receivedPlan: "ChatGPT Plus",
                                dollarValue: er,
                              }),
                              (0, L.jsx)("div", {
                                children: (0, L.jsx)("p", {
                                  className: "text-sm",
                                  children: (0, L.jsx)(
                                    k.Z,
                                    H({}, $.benefitPointsHeader)
                                  ),
                                }),
                              }),
                              (0, L.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, L.jsxs)(X, {
                                    children: [
                                      (0, L.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, L.jsx)(N.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, L.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, L.jsx)(
                                          k.Z,
                                          H({}, U.S.plus.demandAccess)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, L.jsxs)(X, {
                                    children: [
                                      (0, L.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, L.jsx)(N.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, L.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, L.jsx)(
                                          k.Z,
                                          H({}, U.S.plus.responseSpeed)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, L.jsxs)(X, {
                                    className: "pb-2",
                                    children: [
                                      (0, L.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, L.jsx)(N.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, L.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, L.jsx)(
                                          k.Z,
                                          H({}, U.S.plus.modelFeatures)
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                className: "w-full",
                                children: (0, L.jsx)(V, {
                                  handleClaimInvite: es,
                                  handleSignupWarning: () => {
                                    O(!0),
                                      M(!0),
                                      h.m9.logEvent(
                                        "chatgpt_referral_invite_explain_signup",
                                        l,
                                        { referralCodeId: l }
                                      ),
                                      u.A.logEvent(
                                        f.M.chatgptReferralInviteExplainSignup,
                                        { content: l }
                                      ),
                                      O(!1);
                                  },
                                  handleLogin: () => {
                                    var e;
                                    O(!0),
                                      E(!0),
                                      h.m9.logEvent(
                                        "chatgpt_referral_invite_login",
                                        l,
                                        { referralCodeId: l }
                                      ),
                                      u.A.logEvent(
                                        f.M.chatgptReferralInviteLogin,
                                        { content: l }
                                      );
                                    let a =
                                      null ===
                                        (e = x.bX.getCookie(x.cn.DeviceId)) ||
                                      void 0 === e
                                        ? void 0
                                        : e.toString();
                                    (0, v.signIn)(
                                      g,
                                      H(
                                        { callbackUrl: i },
                                        a ? { device_id: a } : {}
                                      ),
                                      { prompt: "login" }
                                    );
                                  },
                                  user: t,
                                  offerDollarValue: G,
                                  isLoading: P,
                                  isLoadingLogin: R,
                                }),
                              }),
                              (0, L.jsxs)("div", {
                                className: "space-y-1.5 py-1 text-center",
                                children: [
                                  (0, L.jsx)("p", {
                                    className:
                                      "text-xs text-token-text-tertiary",
                                    children: (0, L.jsx)(
                                      k.Z,
                                      H(
                                        H({}, $.ctaFollowUpSummary),
                                        {},
                                        {
                                          values: {
                                            monthlyCost: "$20",
                                            monthsOfService: J,
                                          },
                                        }
                                      )
                                    ),
                                  }),
                                  (null == t ? void 0 : t.id) &&
                                    (0, L.jsx)("p", {
                                      className:
                                        "text-xs text-token-text-tertiary",
                                      children: (0, L.jsx)(
                                        k.Z,
                                        H(
                                          H({}, $.ctaNotice),
                                          {},
                                          {
                                            values: {
                                              userEmail:
                                                null == t ? void 0 : t.email,
                                              avatar: () => {
                                                var e;
                                                return (0, L.jsx)("img", {
                                                  className:
                                                    "inline-block h-4 w-4 rounded-full",
                                                  src:
                                                    null !==
                                                      (e =
                                                        null == t
                                                          ? void 0
                                                          : t.picture) &&
                                                    void 0 !== e
                                                      ? e
                                                      : void 0,
                                                  alt:
                                                    null == t ? void 0 : t.name,
                                                });
                                              },
                                              email: (e) =>
                                                (0, L.jsx)("span", {
                                                  className: "font-medium",
                                                  children: e,
                                                }),
                                              link: (e) =>
                                                (0, L.jsx)(_(), {
                                                  className: "underline",
                                                  href: "/auth/logout",
                                                  children: e,
                                                }),
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
      let z = (e) => {
          let { setHasRequestedSignup: a, handleSignup: r } = e;
          return (0, L.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, L.jsx)("h2", {
                className:
                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                children: (0, L.jsx)(k.Z, H({}, $.signUpExplainTitle)),
              }),
              (0, L.jsx)("div", {
                children: (0, L.jsx)("p", {
                  className: "text-sm",
                  children: (0, L.jsx)(k.Z, H({}, $.signUpExplainDescription)),
                }),
              }),
              (0, L.jsxs)("div", {
                className: "flex flex-col gap-4 md:flex-row",
                children: [
                  (0, L.jsx)(R.z, {
                    className: "w-full",
                    onClick: () => {
                      a(!1);
                    },
                    color: "neutral",
                    children: (0, L.jsx)(k.Z, H({}, $.signUpCtaBack)),
                  }),
                  (0, L.jsx)(R.z, {
                    onClick: r,
                    className: "w-full",
                    color: "primary",
                    children: (0, L.jsx)(k.Z, H({}, $.signUpCtaProceed)),
                  }),
                ],
              }),
            ],
          });
        },
        W = () =>
          (0, L.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, L.jsx)("div", {
                className:
                  "relative flex h-8 w-8 items-center justify-center opacity-70",
                children: (0, L.jsx)(A, {}),
              }),
              (0, L.jsx)(p.E.div, {
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
                children: (0, L.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, L.jsx)("h2", {
                      className: "text-sm font-semibold",
                      children: (0, L.jsx)(k.Z, H({}, $.errorHeader)),
                    }),
                    (0, L.jsx)("p", {
                      className: "text-xs font-normal",
                      children: (0, L.jsx)(
                        k.Z,
                        H(
                          H({}, $.errorDescription),
                          {},
                          {
                            values: {
                              link: (e) =>
                                (0, L.jsx)("a", {
                                  href: "/",
                                  className: "underline",
                                  children: e,
                                }),
                            },
                          }
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        q = () =>
          (0, L.jsx)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: (0, L.jsx)("div", {
              className:
                "relative flex h-8 w-8 items-center justify-center opacity-70",
              children: (0, L.jsx)(A, {}),
            }),
          }),
        X = M.Z.div(
          t ||
            (t = (0, l.Z)([
              "gap-2 flex flex-row justify-start text-sm items-start",
            ]))
        ),
        Y = (e) => {
          let {
            referrerPublicAvatarUrl: a,
            referrerName: r,
            benefitWithTime: t,
            receivedPlan: l,
            dollarValue: i,
          } = e;
          return (0, L.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
              (0, L.jsx)("div", {
                className: "flex-shrink-0 pt-0.5",
                children: (0, L.jsx)("img", {
                  className: "h-12 w-12 rounded-full bg-yellow-400",
                  src: a,
                  alt: r,
                }),
              }),
              (0, L.jsx)("div", {
                className: "ml-3 w-0 flex-1",
                children: (0, L.jsx)("p", {
                  className: "text-sm text-token-text-primary",
                  children: (0, L.jsx)(
                    k.Z,
                    H(
                      H({}, $.socialProofText),
                      {},
                      {
                        values: {
                          referrerName: r,
                          benefitWithTime: t,
                          receivedPlan: l,
                          dollarValue: i,
                          highlight: (e) =>
                            (0, L.jsx)("span", {
                              className:
                                "rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",
                              children: e,
                            }),
                        },
                      }
                    )
                  ),
                }),
              }),
            ],
          });
        },
        $ = (0, C.vU)({
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
        });
      var K = !0;
      function J(e) {
        let {
          examples: a = [],
          redirectUrl: r,
          user: t,
          auth0Provider: l,
          referralCodeId: i,
        } = e;
        return (0, L.jsx)(B, {
          user: t,
          redirectUrl: r,
          referralCodeId: i,
          auth0Provider: l,
          examples: a,
        });
      }
    },
    77593: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/[[...referralCodeParam]]",
        function () {
          return r(69356);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2802, 2510, 4736, 2888, 9774, 179], function () {
      return e((e.s = 77593));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...referralCodeParam]]-c50b377eceb008dc.js.map
