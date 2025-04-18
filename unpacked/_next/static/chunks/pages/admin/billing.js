(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3224],
  {
    67552: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return ed;
          },
          default: function () {
            return eu;
          },
        });
      var i,
        a,
        s,
        l,
        r,
        o = t(72583),
        c = t(18450),
        d = t(95407),
        u = t(53362),
        f = t(19052),
        g = t(19841),
        m = t(41409),
        p = t(70079),
        x = t(1454),
        j = t(9063),
        v = t(84692),
        h = t(68498),
        b = t(29287),
        y = t(88303),
        w = t(79864),
        Z = t(85452),
        M = t(62456),
        O = t(47712),
        P = t(94079),
        N = t(67217),
        _ = t(21643),
        B = t(10177),
        I = t(35250);
      function D(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function T(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? D(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function k(e) {
        let { isOpen: n, onClose: t } = e,
          i = (0, j.Z)(),
          { data: a, isLoading: s } = (0, B.ZP)(),
          l = (0, O.t)(),
          r = (0, B.St)(l.id),
          o = (0, f.aF)(),
          { 0: c, 1: u } = (0, p.useState)(""),
          { 0: g, 1: m } = (0, p.useState)(!1),
          x =
            (null == o ? void 0 : o.email) &&
            c.toLowerCase() == o.email.toLowerCase(),
          { 0: h, 1: b } = (0, p.useState)(a && !a.will_renew);
        if (s || !l || !a) return null;
        let y = async () => {
          m(!0);
          try {
            await r.mutateAsync(l.id), b(!0);
          } catch (e) {
            d.m.warning(i.formatMessage(E.errorCancellingSubscription), {
              hasCloseButton: !0,
            });
          } finally {
            m(!1);
          }
        };
        return (0, I.jsx)(N.Z, {
          type: "success",
          onClose: t,
          showCloseButton: !0,
          isOpen: n,
          className: "",
          title: (0, I.jsx)("span", {
            className: "text-lg",
            children: (0, I.jsx)(v.Z, T({}, E.cancelPlan)),
          }),
          children: h
            ? (0, I.jsxs)("div", {
                children: [
                  (0, I.jsx)("h3", {
                    className:
                      "mb-2 text-base font-medium text-token-text-primary",
                    children: (0, I.jsx)(v.Z, T({}, E.successfullyCanceled)),
                  }),
                  null != a.active_until &&
                    (0, I.jsx)("p", {
                      className: "text-sm text-token-text-primary",
                      children: (0, I.jsx)(
                        v.Z,
                        T(
                          T({}, E.retainUntil),
                          {},
                          { values: { expiryDate: new Date(a.active_until) } }
                        )
                      ),
                    }),
                  (0, I.jsx)("div", {
                    className: "mt-6 flex w-full flex-row justify-end",
                    children: (0, I.jsx)(M.mH, {
                      title: i.formatMessage(E.doneButton),
                      color: "primary",
                      onClick: t,
                      disabled: g,
                    }),
                  }),
                ],
              })
            : (0, I.jsxs)("div", {
                children: [
                  (0, I.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4",
                    children: [
                      (0, I.jsxs)("div", {
                        className: "flex w-full items-center gap-4",
                        children: [
                          (0, I.jsx)(P.B0, {
                            src: l.data.profilePictureUrl,
                            size: "large",
                          }),
                          (0, I.jsxs)("div", {
                            className: "flex-col",
                            children: [
                              (0, I.jsx)("p", {
                                className: "font-medium",
                                children: l.data.name,
                              }),
                              (0, I.jsx)("p", {
                                className: "text-sm text-token-text-secondary",
                                children: (0, I.jsx)(
                                  v.Z,
                                  T(
                                    T({}, E.membersCount),
                                    {},
                                    { values: { count: a.seats_entitled } }
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, I.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, I.jsx)("h3", {
                            className:
                              "mb-2 text-base font-medium text-token-text-primary",
                            children: (0, I.jsx)(v.Z, T({}, E.areYouSure)),
                          }),
                          (0, I.jsxs)("ul", {
                            className:
                              "list-disc pl-5 text-sm text-token-text-secondary",
                            children: [
                              (0, I.jsx)("li", {
                                className: "my-2",
                                children: (0, I.jsx)(
                                  v.Z,
                                  T({}, E.dataUnavailable)
                                ),
                              }),
                              null != a.active_until &&
                                (0, I.jsx)("li", {
                                  className: "my-2",
                                  children: (0, I.jsx)(
                                    v.Z,
                                    T(
                                      T({}, E.retainUntil),
                                      {},
                                      {
                                        values: {
                                          expiryDate: new Date(a.active_until),
                                        },
                                      }
                                    )
                                  ),
                                }),
                              (0, I.jsx)("li", {
                                className: "my-2",
                                children: (0, I.jsx)(
                                  v.Z,
                                  T({}, E.retainEmailAccess)
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, I.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, I.jsx)("h3", {
                            className:
                              "mb-2 text-base font-medium text-token-text-primary",
                            children: (0, I.jsx)(
                              v.Z,
                              T({}, E.enterEmailToConfirm)
                            ),
                          }),
                          (0, I.jsx)(_.Z, {
                            type: "text",
                            name: "user-email",
                            placeholder: "abcd@acme.com",
                            onChange: (e) => {
                              u(e.target.value);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, I.jsxs)("div", {
                    className: "mt-6 flex w-full flex-row justify-end",
                    children: [
                      (0, I.jsx)(M.mH, {
                        title: i.formatMessage(E.keepSubscriptionButton),
                        onClick: t,
                        disabled: g,
                      }),
                      (0, I.jsx)(M.mH, {
                        title: i.formatMessage(E.cancelSubscriptionButton),
                        onClick: y,
                        disabled: !x,
                        loading: g,
                        color: "danger",
                        className: "ml-2",
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
      let E = (0, h.vU)({
        dataUnavailable: {
          id: "cancelTeamPlanModal.dataUnavailable",
          defaultMessage:
            "All workspace data including chat history and settings will not be available.",
        },
        cancelPlan: {
          id: "cancelTeamPlanModal.cancelPlan",
          defaultMessage: "Cancel subscription",
        },
        retainUntil: {
          id: "cancelTeamPlanModal.retainUntil",
          defaultMessage:
            "You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}.",
        },
        retainEmailAccess: {
          id: "cancelTeamPlanModal.retainEmailAccess",
          defaultMessage:
            "You will still be able to use ChatGPT with the other workspaces associated with this email address.",
        },
        errorCancellingSubscription: {
          id: "cancelTeamPlanModal.errorCancellingSubscription",
          defaultMessage: "There was a problem cancelling your subscription.",
        },
        areYouSure: {
          id: "cancelTeamPlanModal.areYouSure",
          defaultMessage: "Are you sure?",
        },
        enterEmailToConfirm: {
          id: "cancelTeamPlanModal.enterEmailToConfirm",
          defaultMessage: "Enter your Email address to confirm",
        },
        emailPlaceholder: {
          id: "cancelTeamPlanModal.emailPlaceholder",
          defaultMessage: "abcd@acme.com",
        },
        doneButton: {
          id: "cancelTeamPlanModal.doneButton",
          defaultMessage: "Done",
        },
        keepSubscriptionButton: {
          id: "cancelTeamPlanModal.keepSubscriptionButton",
          defaultMessage: "Keep subscription",
        },
        cancelSubscriptionButton: {
          id: "cancelTeamPlanModal.cancelSubscriptionButton",
          defaultMessage: "Cancel subscription",
        },
        successfullyCanceled: {
          id: "cancelTeamPlanModal.successfullyCanceled",
          defaultMessage: "You have successfully canceled your subscription.",
        },
        membersCount: {
          id: "yourComponent.membersCount",
          defaultMessage: "{count, plural, one {# member} other {# members}}",
        },
      });
      var S = t(99945),
        C = t(21389),
        z = t(11335);
      function L(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function A(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? L(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function U(e) {
        let { numInUse: n, numAllocated: t } = e,
          i = Math.max(t, n);
        return (0, I.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, I.jsx)(i > 10 ? F : K, { numInUse: n, numAllocated: t }),
            (0, I.jsx)("span", {
              className: "text-sm",
              children: (0, I.jsx)(
                v.Z,
                A(
                  A({}, Q.description),
                  {},
                  { values: { num: "".concat(n, "/").concat(t) } }
                )
              ),
            }),
          ],
        });
      }
      function F(e) {
        let { numAllocated: n, numInUse: t } = e,
          i = (0, j.Z)(),
          a = t > n,
          s = a ? 100 : (t / n) * 100,
          l = a ? (n / t) * 100 : 100;
        return (0, I.jsx)("div", {
          className: (0, g.default)(
            "relative w-full rounded-full",
            a ? "bg-orange-500" : "bg-token-main-surface-primary"
          ),
          children: (0, I.jsxs)("div", {
            className: "relative h-4",
            style: { width: "".concat(l, "%") },
            children: [
              (0, I.jsx)("div", {
                className: (0, g.default)(
                  "h-4 overflow-hidden rounded-l-full bg-green-600",
                  t === n && "rounded-r-full"
                ),
                style: { width: "".concat(s, "%") },
              }),
              t !== n &&
                a &&
                (0, I.jsx)("div", {
                  className:
                    "absolute right-0 top-[-3px] bg-token-main-surface-primary",
                  children: (0, I.jsx)(z.u, {
                    label: i.formatMessage(Q.dividerTooltip, { count: n }),
                    children: (0, I.jsx)(Y, { className: "px-1 py-0.5" }),
                  }),
                }),
            ],
          }),
        });
      }
      let Y = (e) => {
          let { className: n } = e;
          return (0, I.jsxs)("div", {
            className: (0, g.default)("flex flex-col gap-0.5", n),
            children: [
              (0, I.jsx)(G, {}),
              (0, I.jsx)(G, {}),
              (0, I.jsx)(G, {}),
              (0, I.jsx)(G, {}),
            ],
          });
        },
        W = C.Z.div(i || (i = (0, S.Z)(["h-4 w-4 rounded-full"]))),
        q = (0, C.Z)(W)(a || (a = (0, S.Z)(["bg-green-600"]))),
        $ = (0, C.Z)(W)(
          s || (s = (0, S.Z)(["bg-token-main-surface-tertiary"]))
        ),
        H = (0, C.Z)(W)(l || (l = (0, S.Z)(["bg-orange-500"]))),
        G = C.Z.span(
          r ||
            (r = (0, S.Z)([
              "w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full",
            ]))
        );
      function K(e) {
        let { numAllocated: n, numInUse: t } = e,
          i = (0, j.Z)(),
          a = t > n,
          s = (0, p.useMemo)(
            () => Array.from(Array(a ? t : n).keys()),
            [a, n, t]
          );
        return (0, I.jsx)("div", {
          className: "flex items-center gap-2",
          children: s.map((e) => {
            let s = H,
              l = null;
            return (
              e < t && !a ? (s = q) : e < n && !a && (s = $),
              e === n - 1 &&
                (l = (0, I.jsx)(z.u, {
                  label: i.formatMessage(Q.dividerTooltip, { count: n }),
                  children: (0, I.jsx)(Y, {}),
                })),
              (0, I.jsxs)(I.Fragment, { children: [(0, I.jsx)(s, {}, e), l] })
            );
          }),
        });
      }
      let Q = (0, h.vU)({
        dividerTooltip: {
          defaultMessage:
            "Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",
          id: "components.business.NumSeats.dividerTooltip",
        },
        description: {
          defaultMessage: "{num} seats in use",
          id: "components.business.NumSeats.description",
        },
      });
      var R = t(97823),
        V = t(61236);
      function X(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function J(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? X(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      let ee = (0, h.vU)({
        invoicesLoadError: {
          id: "organizationBillingInfo.invoicesLoadError.0",
          defaultMessage:
            "Failed to load invoices. Contact support@openai.com if error persists.",
        },
      });
      function en(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function et(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? en(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function ei() {
        let e = (0, m.useRouter)(),
          { data: n, isLoading: t, isError: i } = (0, B.ZP)(),
          a = (0, f.ec)(f.F_.isEnterprisePlan),
          s = (0, j.Z)(),
          { 0: l, 1: r } = (0, p.useState)(!1),
          o = (0, f.ec)(f.F_.workspaceId),
          c = (0, f.ec)(f.F_.isTeamPlan),
          g = async () => {
            r(!0);
            try {
              let n = await u.Z.fetchCustomerPortalUrl(o);
              e.push(n.url);
            } catch (e) {
              d.m.warning(s.formatMessage(ec.stripeErrorWarning), {
                hasCloseButton: !0,
              });
            } finally {
              r(!1);
            }
          };
        if (t)
          return (0, I.jsx)("div", {
            className: "flex min-h-screen items-center justify-center",
            children: (0, I.jsx)(Z.Z, {}),
          });
        if (i || !n) return null;
        let x = null != n.active_until,
          h =
            (null == n ? void 0 : n.seats_in_use) >
            (null == n ? void 0 : n.seats_entitled);
        return (0, I.jsxs)(I.Fragment, {
          children: [
            (0, I.jsxs)(R.i9, {
              children: [
                (0, I.jsx)(R.A4, {
                  children: (0, I.jsx)(v.Z, et({}, ec.planTitle)),
                }),
                (0, I.jsxs)("div", {
                  children: [
                    (0, I.jsx)(R.i$, {
                      children: a
                        ? x
                          ? (0, I.jsx)(v.Z, et({}, ec.activeEnterpriseLicense))
                          : (0, I.jsx)(v.Z, et({}, ec.pendingEnterpriseLicense))
                        : x
                          ? (0, I.jsx)(v.Z, et({}, ec.activeTeamLicense))
                          : (0, I.jsx)(v.Z, et({}, ec.pendingTeamLicense)),
                    }),
                    null != n.active_until &&
                      (0, I.jsx)(R.Li, {
                        children: a
                          ? (0, I.jsx)(
                              v.Z,
                              et(
                                et({}, ec.licenseExpiry),
                                {},
                                {
                                  values: {
                                    expiryDate: new Date(n.active_until),
                                  },
                                }
                              )
                            )
                          : n.will_renew
                            ? (0, I.jsx)(
                                v.Z,
                                et(
                                  et({}, ec.renewalDate),
                                  {},
                                  {
                                    values: {
                                      expiryDate: new Date(n.active_until),
                                    },
                                  }
                                )
                              )
                            : (0, I.jsx)(
                                v.Z,
                                et(
                                  et({}, ec.deactivateDate),
                                  {},
                                  {
                                    values: {
                                      expiryDate: new Date(n.active_until),
                                    },
                                  }
                                )
                              ),
                      }),
                    c &&
                      (0, I.jsx)(b.z, {
                        color: "neutral",
                        className: "mt-4",
                        onClick: g,
                        loading: l,
                        children: (0, I.jsx)(
                          v.Z,
                          et({}, ec.managePaymentMethodBtn)
                        ),
                      }),
                  ],
                }),
              ],
            }),
            x &&
              (0, I.jsxs)(R.i9, {
                children: [
                  (0, I.jsx)(R.A4, {
                    children: (0, I.jsx)(v.Z, et({}, ec.seatsTitle)),
                  }),
                  (0, I.jsx)(er, {}),
                  c &&
                    h &&
                    (0, I.jsxs)("span", {
                      className: "text-sm text-token-text-secondary",
                      children: [
                        (0, I.jsx)(v.Z, et({}, ec.teamsAutochargeMessage)),
                        (0, I.jsx)(y.Z, {
                          className: "pl-1",
                          openNewTab: !0,
                          href: "https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",
                          children: (0, I.jsx)(
                            v.Z,
                            et({}, ec.billingLearnMore)
                          ),
                        }),
                      ],
                    }),
                ],
              }),
          ],
        });
      }
      function ea() {
        let { data: e } = (0, B.ZP)(),
          n = (0, f.ec)(f.F_.isTeamPlan),
          { 0: t, 1: i } = (0, p.useState)(!1);
        if (!n || (!(null != e && e.will_renew) && !t))
          return (0, I.jsx)(I.Fragment, {});
        let a = function () {
          i(!t);
        };
        return (0, I.jsxs)(R.i9, {
          children: [
            (0, I.jsx)(R.A4, {
              children: (0, I.jsx)(v.Z, et({}, ec.manageSubscription)),
            }),
            (0, I.jsxs)("div", {
              children: [
                (0, I.jsx)(b.z, {
                  color: "neutral",
                  className: "mt-4",
                  onClick: () => {
                    a();
                  },
                  children: (0, I.jsx)(v.Z, et({}, ec.cancelSubscriptionBtn)),
                }),
                (0, I.jsx)(k, { isOpen: t, onClose: a }),
              ],
            }),
          ],
        });
      }
      function es(e) {
        let { invoice: n } = e,
          t =
            (null == n ? void 0 : n.status_transitions.paid_at) != null &&
            new Date(1e3 * n.status_transitions.paid_at),
          i = n && new Date(1e3 * n.due_date),
          a = n && new Date(1e3 * n.created);
        return (0, I.jsxs)(R.vi, {
          className: "items-center",
          children: [
            (0, I.jsxs)("div", {
              className: "flex grow flex-col gap-1",
              children: [
                (0, I.jsx)("span", {
                  children: a
                    ? (0, I.jsx)(
                        v.Z,
                        et(
                          et({}, ec.invoiceName),
                          {},
                          { values: { createdDate: a } }
                        )
                      )
                    : (0, I.jsx)(v.Z, et({}, ec.defaultInvoiceName)),
                }),
                null != n && n.paid && null != t
                  ? (0, I.jsx)("div", {
                      className: "text-xs text-token-text-secondary",
                      children: (0, I.jsx)(
                        v.Z,
                        et(
                          et({}, ec.paidInvoice),
                          {},
                          { values: { invoiceDate: t } }
                        )
                      ),
                    })
                  : n &&
                    (0, I.jsx)("div", {
                      className: "text-xs text-green-600",
                      children: (0, I.jsx)(
                        v.Z,
                        et(
                          et({}, ec.upcomingInvoice),
                          {},
                          { values: { invoiceDate: i } }
                        )
                      ),
                    }),
              ],
            }),
            (0, I.jsx)("a", {
              href: null == n ? void 0 : n.hosted_invoice_url,
              className: (0, g.default)(
                "mx-auto",
                (null == n ? void 0 : n.hosted_invoice_url) == void 0 &&
                  "cursor-not-allowed opacity-20"
              ),
              target: "_blank",
              rel: "noreferrer",
              children: (0, I.jsx)(x.AlO, {
                className: "icon-sm text-green-600",
              }),
            }),
          ],
        });
      }
      function el() {
        let { 0: e, 1: n } = (0, p.useState)({ limit: 5 }),
          { data: t, isError: i } = (function (e) {
            var n;
            let t = (0, f.ec)((e) => e.currentWorkspace),
              i = (0, f.ec)(f.F_.isEnterprisePlan),
              a = null == t ? void 0 : t.id,
              s =
                null !== (n = null == t ? void 0 : t.organizationId) &&
                void 0 !== n
                  ? n
                  : void 0;
            return (function (e, n) {
              let t = (0, j.Z)();
              return (0, V.a)({
                queryKey: [
                  "organization-invoices",
                  J(J({}, e), {}, { options: n }),
                ],
                queryFn: async () =>
                  await u.Z.getInvoices(e, n).catch((e) => {
                    throw (
                      (d.m.danger(
                        t.formatMessage(ee.invoicesLoadError, {
                          error: e.message,
                        })
                      ),
                      e)
                    );
                  }),
                enabled: "account_id" in e || "organization_id" in e,
              });
            })(i ? { organization_id: s } : { account_id: a }, e);
          })(e),
          a =
            null != e.startingAfter ||
            (null != e.endingBefore && (null == t ? void 0 : t.has_more)),
          s =
            null != e.endingBefore ||
            ((null == t ? void 0 : t.has_more) && null == e.endingBefore);
        return i || null == t
          ? (0, I.jsxs)(R.i9, {
              children: [
                (0, I.jsx)(R.A4, {
                  children: (0, I.jsx)(v.Z, et({}, ec.invoicesTitle)),
                }),
                (0, I.jsx)(w.Z, {
                  children: (0, I.jsx)(v.Z, et({}, ec.noInvoices)),
                }),
              ],
            })
          : (0, I.jsxs)(R.i9, {
              children: [
                (0, I.jsx)(R.A4, {
                  children: (0, I.jsx)(v.Z, et({}, ec.invoicesTitle)),
                }),
                (0, I.jsx)(R.qQ, {
                  children: t.data.map((e) =>
                    (0, I.jsx)(es, { invoice: e }, e.id)
                  ),
                }),
                (0, I.jsxs)("div", {
                  className: "flex",
                  children: [
                    a &&
                      (0, I.jsx)("button", {
                        onClick: () => {
                          t &&
                            n((e) =>
                              et(
                                et({}, e),
                                {},
                                {
                                  endingBefore: t.data[0].id,
                                  startingAfter: void 0,
                                }
                              )
                            );
                        },
                        children: (0, I.jsx)(x.YFh, { className: "icon-sm" }),
                      }),
                    (0, I.jsx)("div", { className: "flex-grow" }),
                    s &&
                      (0, I.jsx)("button", {
                        onClick: () => {
                          t &&
                            n((e) =>
                              et(
                                et({}, e),
                                {},
                                {
                                  startingAfter: t.data[t.data.length - 1].id,
                                  endingBefore: void 0,
                                }
                              )
                            );
                        },
                        children: (0, I.jsx)(x.Tfp, { className: "icon-sm" }),
                      }),
                  ],
                }),
              ],
            });
      }
      function er() {
        let { data: e, isLoading: n, isError: t } = (0, B.ZP)();
        return t || !e || n
          ? null
          : (0, I.jsx)(U, {
              numInUse: e.seats_in_use,
              numAllocated: e.seats_entitled,
            });
      }
      function eo() {
        let e = (0, f.ec)((e) => e.currentWorkspace),
          n = null == e ? void 0 : e.organizationId,
          t = (0, j.Z)();
        return void 0 === n
          ? null
          : (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(o.yG, {
                  title: t.formatMessage(ec.title),
                  subtitle: t.formatMessage(ec.subtitle),
                }),
                (0, I.jsx)(o.hb, {
                  children: (0, I.jsxs)(R.$V, {
                    children: [
                      (0, I.jsx)(ei, {}),
                      (0, I.jsx)(el, {}),
                      (0, I.jsx)(ea, {}),
                    ],
                  }),
                }),
              ],
            });
      }
      let ec = (0, h.vU)({
        title: {
          id: "organizationBillingInfo.title.1",
          defaultMessage: "Billing",
        },
        subtitle: {
          id: "organizationBillingInfo.subtitle",
          defaultMessage:
            "Only workspace owners can view and change these settings",
        },
        planTitle: {
          id: "organizationBillingInfo.planTitle",
          defaultMessage: "Plan",
        },
        activeEnterpriseLicense: {
          id: "organizationBillingInfo.activeEnterpriseLicense",
          defaultMessage: "Enterprise License",
        },
        pendingEnterpriseLicense: {
          id: "organizationBillingInfo.pendingEnterpriseLicense",
          defaultMessage: "Enterprise License (pending activation)",
        },
        activeTeamLicense: {
          id: "organizationBillingInfo.activeTeamLicense",
          defaultMessage: "Team License",
        },
        pendingTeamLicense: {
          id: "organizationBillingInfo.pendingTeamLicense",
          defaultMessage: "Team License (pending activation)",
        },
        licenseExpiry: {
          id: "organizationBillingInfo.licenseExpiry",
          defaultMessage: "Active until {expiryDate, date, long}",
        },
        renewalDate: {
          id: "organizationBillingInfo.renewalDate",
          defaultMessage: "Renews on {expiryDate, date, long}",
        },
        deactivateDate: {
          id: "organizationBillingInfo.deactivateDate",
          defaultMessage: "Deactivates on {expiryDate, date, long}",
        },
        seatsTitle: {
          id: "organizationBillingInfo.seatsTitle",
          defaultMessage: "Seats",
        },
        seatsInUse: {
          id: "organizationBillingInfo.seatsInUse",
          defaultMessage: "{numSeats} in use ({numSeatsPct})",
        },
        invoicesTitle: {
          id: "organizationBillingInfo.invoicesTitle",
          defaultMessage: "Invoices",
        },
        invoiceName: {
          id: "organizationBillingInfo.invoiceName",
          defaultMessage: "Invoice: {createdDate, date, long}",
        },
        defaultInvoiceName: {
          id: "organizationBillingInfo.defaultInvoiceName",
          defaultMessage: "Invoice",
        },
        paidInvoice: {
          id: "organizationBillingInfo.paidInvoice",
          defaultMessage: "Paid: {invoiceDate, date, long}",
        },
        upcomingInvoice: {
          id: "organizationBillingInfo.upcomingInvoice",
          defaultMessage: "Due: {invoiceDate, date, long}",
        },
        noInvoices: {
          id: "organizationBillingInfo.noInvoices",
          defaultMessage: "No invoices found",
        },
        manageSubscription: {
          id: "organizationBillingInfo.manageSubscription",
          defaultMessage: "Manage subscription",
        },
        cancelSubscriptionBtn: {
          id: "organizationBillingInfo.cancelSubscriptionBtn",
          defaultMessage: "Cancel subscription",
        },
        managePaymentMethodBtn: {
          id: "organizationBillingInfo.managePaymentMethodBtn",
          defaultMessage: "Manage payment method",
        },
        stripeErrorWarning: {
          id: "organizationBillingInfo.stripeErrorWarning",
          defaultMessage: "Error loading account information",
        },
        teamsAutochargeMessage: {
          id: "organizationBillingInfo.teamsAutochargeMessage",
          defaultMessage:
            "Your additional seats will be included on your next invoice.",
        },
        billingLearnMore: {
          id: "organizationBillingInfo.billingLearnMore",
          defaultMessage: "Learn more",
        },
      });
      var ed = !0;
      function eu() {
        return (0, I.jsx)(eo, {});
      }
      eu.getLayout = function (e) {
        return (0, I.jsx)(o.ZP, {
          mobilePageTitle: "Billing",
          requireOwnerPrivileges: !0,
          children: e,
        });
      };
    },
    97823: function (e, n, t) {
      "use strict";
      t.d(n, {
        $V: function () {
          return g;
        },
        A4: function () {
          return m;
        },
        Li: function () {
          return v;
        },
        W8: function () {
          return b;
        },
        i$: function () {
          return p;
        },
        i9: function () {
          return j;
        },
        qQ: function () {
          return x;
        },
        vi: function () {
          return h;
        },
      });
      var i,
        a,
        s,
        l,
        r,
        o,
        c,
        d,
        u = t(99945),
        f = t(21389);
      let g = f.Z.div(
          i ||
            (i = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        m = f.Z.div(a || (a = (0, u.Z)(["text-xl font-medium"]))),
        p = f.Z.div(s || (s = (0, u.Z)(["text-base font-medium"]))),
        x = f.Z.div(
          l ||
            (l = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        j = f.Z.div(
          r || (r = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        v = f.Z.div(o || (o = (0, u.Z)(["text-sm"]))),
        h = f.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        b = f.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    15085: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/billing",
        function () {
          return t(67552);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2583, 4736, 2888, 9774, 179], function () {
      return e((e.s = 15085));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=billing-0969eb63d8e1af90.js.map
