(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    27120: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return T;
          },
          default: function () {
            return E;
          },
        });
      var s = n(18450),
        i = n(72583),
        r = n(49305),
        a = n(11335),
        o = n(13603),
        l = n(53362),
        c = n(47712),
        d = n(19052),
        u = n(82473),
        g = n(25494),
        f = n(19841),
        p = n(47247),
        x = n.n(p),
        h = n(9063),
        j = n(84692),
        m = n(68498),
        y = n(68406),
        b = n(88342),
        w = n(95407),
        S = n(97823),
        O = n(35250);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Z(e) {
        let t,
          { conversationTTL: n } = e,
          s = (0, h.Z)();
        return (
          (t =
            null === n
              ? s.formatMessage(C.retentionInfinite)
              : 7776e3 === n
                ? s.formatMessage(C.retentionNinetyDays)
                : 31536e3 === n
                  ? s.formatMessage(C.retentionOneYear)
                  : s.formatMessage(C.retentionCustomDays, {
                      num: Math.floor(n / 86400),
                    })),
          (0, O.jsxs)(S.vi, {
            children: [
              (0, O.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, O.jsx)(j.Z, k({}, C.conversationRetention)),
              }),
              (0, O.jsx)(a.u, {
                label: s.formatMessage(C.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function M(e) {
        let {
          title: t,
          description: n,
          children: s,
          upsellEnterprise: i = !1,
        } = e;
        return (0, O.jsx)(a.E, {
          label: (0, O.jsx)(j.Z, k({}, C.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !i,
          className: "max-w-xl",
          children: (0, O.jsxs)(S.i9, {
            className: (0, f.default)(i && "text-token-text-tertiary"),
            children: [
              (0, O.jsxs)(S.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, O.jsx)(j.Z, k({}, t)),
                  i &&
                    (0, O.jsx)("span", {
                      className:
                        "rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, O.jsx)(j.Z, k({}, C.enterpriseUpsellPill)),
                    }),
                ],
              }),
              n && (0, O.jsx)(S.Li, { children: (0, O.jsx)(j.Z, k({}, n)) }),
              s,
            ],
          }),
        });
      }
      function P(e) {
        var t;
        let {
            workspaceId: n,
            label: s,
            setting: i,
            defaultValue: r,
            values: a,
            disabled: o = !1,
          } = e,
          c = (0, h.Z)(),
          d = (0, u.NL)(),
          { variables: f, mutate: p } = (0, g.D)({
            mutationFn: (e) => {
              let { setting: t, value: s } = e;
              return l.Z.setWorkspaceShareSetting(n, t, s);
            },
            onSettled: () => {
              d.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: () => {
              w.m.danger(c.formatMessage(C.featureSettingsUpdateFailed));
            },
          });
        return (0, O.jsxs)(S.vi, {
          children: [
            (0, O.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, O.jsx)(j.Z, k({}, s)),
            }),
            (0, O.jsxs)(b.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : r,
              onValueChange: (e) => {
                p({ setting: i, value: e });
              },
              disabled: o,
              children: [
                (0, O.jsxs)(b.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, O.jsx)(b.Z.Value, {}),
                    (0, O.jsx)(b.Z.Icon, {}),
                  ],
                }),
                (0, O.jsx)(b.Z.Portal, {
                  children: (0, O.jsx)(b.Z.Content, {
                    children: a.map((e, t) =>
                      (0, O.jsx)(
                        b.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, O.jsx)(j.Z, k({}, e.display)),
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        var t;
        let { workspaceId: n, data: s } = e,
          i = (0, d.ec)(d.F_.isTeamPlan),
          a = (0, c.t)(),
          o = (0, h.Z)();
        return (0, O.jsxs)(S.$V, {
          children: [
            i && (0, O.jsx)(S.W8, {}),
            (0, O.jsxs)(M, {
              title: C.workspaceDetails,
              children: [
                (0, O.jsxs)("div", {
                  className: "flex flex-row items-center justify-between",
                  children: [
                    (0, O.jsx)(j.Z, {
                      id: "SgdcRQ",
                      defaultMessage: "Organization ID",
                    }),
                    (0, O.jsx)(y.Z, {
                      value:
                        null !==
                          (t = null == a ? void 0 : a.data.organizationId) &&
                        void 0 !== t
                          ? t
                          : "",
                      onCopied: () =>
                        w.m.success(
                          o.formatMessage({
                            id: "Ctw3o0",
                            defaultMessage: "Copied organization ID",
                          })
                        ),
                    }),
                  ],
                }),
                (0, O.jsxs)("div", {
                  className: "flex flex-row items-center justify-between",
                  children: [
                    (0, O.jsx)(j.Z, {
                      id: "yFldxx",
                      defaultMessage: "Workspace ID",
                    }),
                    (0, O.jsx)(y.Z, {
                      value: n,
                      onCopied: () =>
                        w.m.success(
                          o.formatMessage({
                            id: "CqDpiM",
                            defaultMessage: "Copied workspace ID",
                          })
                        ),
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(M, {
              title: C.sharingSettingsTitle,
              upsellEnterprise: i,
              children: (0, O.jsx)(S.qQ, {
                children: (0, O.jsx)(P, {
                  workspaceId: n,
                  label: C.chatSharingTitle,
                  setting: r.bb.CHAT_SHARE_SETTINGS,
                  disabled: i,
                  defaultValue: s.share_settings.chat_share_setting,
                  values: [
                    {
                      display: C.workspaceMembersOnlySelect,
                      value: r.Gz.WORKSPACE_ONLY,
                    },
                    { display: C.noOneSelect, value: r.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, O.jsx)(M, {
              title: C.retentionPolicyTitle,
              description: C.retentionChange,
              upsellEnterprise: i,
              children: (0, O.jsx)(Z, { conversationTTL: s.conversation_ttl }),
            }),
          ],
        });
      }
      function _(e) {
        let { currentWorkspaceId: t } = e,
          { data: n, isLoading: s } = (0, o.C)(t),
          r = (0, h.Z)();
        return (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(x(), {
              children: (0, O.jsx)("title", {
                children: r.formatMessage(C.title),
              }),
            }),
            (0, O.jsx)(i.yG, { title: r.formatMessage(C.title) }),
            (0, O.jsx)(i.hb, {
              showSpinner: s,
              children:
                void 0 === n
                  ? null
                  : (0, O.jsx)(N, { workspaceId: t, data: n }),
            }),
          ],
        });
      }
      let C = (0, m.vU)({
        title: { id: "workspaceSettings.title", defaultMessage: "Settings" },
        retentionPolicyTitle: {
          id: "workspaceSettings.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        sharingSettingsTitle: {
          id: "workspaceSettings.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        chatSharingTitle: {
          id: "workspaceSettings.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceDetails: {
          id: "workspaceSettings.workspaceDetails",
          defaultMessage: "Workspace details",
        },
        workspaceMembersOnlySelect: {
          id: "workspaceSettings.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
        },
        noOneSelect: {
          id: "workspaceSettings.noOneSelect",
          defaultMessage: "No one",
        },
        featureSettingsUpdateFailed: {
          id: "workspaceSettings.featureSettingsUpdateFailed",
          defaultMessage: "Failed to update feature setting",
        },
        conversationRetention: {
          id: "workspaceSettings.conversationRetention",
          defaultMessage: "Chat retention",
        },
        retentionInfinite: {
          id: "workspaceSettings.retentionInfinite",
          defaultMessage: "Infinite",
        },
        retentionNinetyDays: {
          id: "workspaceSettings.retentionNinetyDays",
          defaultMessage: "90 days",
        },
        retentionOneYear: {
          id: "workspaceSettings.retentionOneYear",
          defaultMessage: "1 year",
        },
        retentionCustomDays: {
          id: "workspaceSettings.retentionCustomDays",
          defaultMessage: "{num} days",
        },
        retentionChange: {
          id: "workspaceSettings.retentionChange",
          defaultMessage:
            "Contact your account manager to change this setting.",
        },
        enterpriseUpsellPill: {
          id: "workspaceSettings.enterpriseUpsellPill",
          defaultMessage: "Enterprise",
        },
        retentionSettingTooltip: {
          id: "workspaceSettings.retentionSettingTooltip",
          defaultMessage: "Contact your account manager to change this setting",
        },
        enterpriseRequiredMessage: {
          id: "workspaceSettings.enterpriseRequiredMessage",
          defaultMessage:
            "Only workspaces with the Enterprise plan can change these settings",
        },
      });
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      var T = !0;
      function E(e) {
        return (0, O.jsx)(
          _,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? D(Object(n), !0).forEach(function (t) {
                    (0, s.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : D(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      E.getLayout = function (e) {
        return (0, O.jsx)(i.ZP, {
          mobilePageTitle: "Settings",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    97823: function (e, t, n) {
      "use strict";
      n.d(t, {
        $V: function () {
          return f;
        },
        A4: function () {
          return p;
        },
        Li: function () {
          return m;
        },
        W8: function () {
          return b;
        },
        i$: function () {
          return x;
        },
        i9: function () {
          return j;
        },
        qQ: function () {
          return h;
        },
        vi: function () {
          return y;
        },
      });
      var s,
        i,
        r,
        a,
        o,
        l,
        c,
        d,
        u = n(99945),
        g = n(21389);
      let f = g.Z.div(
          s ||
            (s = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        p = g.Z.div(i || (i = (0, u.Z)(["text-xl font-medium"]))),
        x = g.Z.div(r || (r = (0, u.Z)(["text-base font-medium"]))),
        h = g.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        j = g.Z.div(
          o || (o = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        m = g.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        y = g.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        b = g.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    95555: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/settings",
        function () {
          return n(27120);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2583, 4736, 2888, 9774, 179], function () {
      return e((e.s = 95555));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=settings-da7afd8c12c0f7d6.js.map
