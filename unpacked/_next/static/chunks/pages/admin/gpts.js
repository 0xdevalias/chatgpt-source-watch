(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8298],
  {
    50777: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return D;
          },
          default: function () {
            return L;
          },
        });
      var i = s(39827),
        n = s(9112),
        r = s(25660),
        a = s(85641),
        l = s(68832),
        o = s(37379),
        d = s(13038),
        c = s(24668),
        u = s(82473),
        p = s(25494),
        g = s(10518),
        f = s(19841),
        O = s(80483),
        h = s.n(O),
        w = s(84692),
        b = s(9063),
        x = s(68498),
        y = s(60734),
        m = s(84981),
        T = s(65455),
        S = s(89777),
        j = s(41594),
        k = s(35250);
      function v(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, i);
        }
        return s;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(s), !0).forEach(function (t) {
                (0, i.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : v(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function Z() {
        return (0, k.jsx)(a.aU, {
          className: "icon-sm ml-1 text-token-text-tertiary",
        });
      }
      function N(e) {
        let {
          title: t,
          description: s,
          children: i,
          upsellEnterprise: n = !1,
          className: r = "",
        } = e;
        return (0, k.jsx)(l.E, {
          label: (0, k.jsx)(w.Z, P({}, E.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !n,
          className: "max-w-5xl",
          children: (0, k.jsxs)(j.i9, {
            className: (0, f.default)(
              n && "text-token-text-tertiary",
              "max-w-4xl",
              r
            ),
            children: [
              (0, k.jsxs)(j.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, k.jsx)(w.Z, P({}, t)),
                  n &&
                    (0, k.jsx)("span", {
                      className:
                        "rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, k.jsx)(w.Z, P({}, E.enterpriseUpsellPill)),
                    }),
                ],
              }),
              s &&
                (0, k.jsx)(j.Li, {
                  className: "py-2 text-token-text-secondary",
                  children: (0, k.jsx)(w.Z, P({}, s)),
                }),
              i,
            ],
          }),
        });
      }
      function M(e) {
        var t;
        let {
            workspaceId: s,
            label: i,
            setting: n,
            defaultValue: r,
            values: a,
            disabled: l = !1,
          } = e,
          o = (0, b.Z)(),
          c = (0, u.NL)(),
          { variables: g, mutate: f } = (0, p.D)({
            mutationFn: (e) => {
              let { setting: t, value: i } = e;
              return d.Z.setWorkspaceShareSetting(s, t, i);
            },
            onSettled: () => {
              c.invalidateQueries({ queryKey: ["workspace-settings"] }),
                c.invalidateQueries({ queryKey: ["workspace"] });
            },
            onError: () => {
              T.m.danger(o.formatMessage(E.featureSettingsUpdateFailed));
            },
          });
        return (0, k.jsxs)(j.vi, {
          children: [
            (0, k.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, k.jsx)(w.Z, P({}, i)),
            }),
            (0, k.jsxs)(y.Z.Root, {
              defaultValue:
                null !== (t = null == g ? void 0 : g.value) && void 0 !== t
                  ? t
                  : r,
              onValueChange: (e) => {
                f({ setting: n, value: e });
              },
              disabled: l,
              children: [
                (0, k.jsxs)(y.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, k.jsx)(y.Z.Value, {}),
                    (0, k.jsx)(y.Z.Icon, {}),
                  ],
                }),
                (0, k.jsx)(y.Z.Portal, {
                  children: (0, k.jsx)(y.Z.Content, {
                    children: a.map((e, t) =>
                      (0, k.jsx)(
                        y.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, k.jsx)(w.Z, P({}, e.display)),
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
      function _(e) {
        var t;
        let { workspaceId: s, value: i, upsellEnterprise: n = !1 } = e,
          a = (0, b.Z)(),
          l = (0, u.NL)(),
          { variables: o, mutate: c } = (0, p.D)({
            mutationFn: (e) => {
              let { value: t } = e;
              return d.Z.setWorkspaceThirdPartyGPTSetting(s, t);
            },
            onSettled: () => {
              l.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: () => {
              T.m.danger(a.formatMessage(E.featureSettingsUpdateFailed));
            },
          });
        return (0, k.jsxs)(y.Z.Root, {
          defaultValue:
            null !== (t = null == o ? void 0 : o.value) && void 0 !== t ? t : i,
          onValueChange: (e) => {
            c({ value: e });
          },
          children: [
            (0, k.jsxs)(y.Z.Trigger, {
              className:
                "border border-token-border-light text-base focus-visible:border-token-border-light",
              children: [(0, k.jsx)(y.Z.Value, {}), (0, k.jsx)(y.Z.Icon, {})],
            }),
            (0, k.jsx)(y.Z.Portal, {
              children: (0, k.jsxs)(y.Z.Content, {
                children: [
                  (0, k.jsx)(y.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_ALL,
                    children: (0, k.jsx)(w.Z, P({}, E.allowAllOption)),
                  }),
                  !n &&
                    (0, k.jsx)(y.Z.Item, {
                      className: "text-base",
                      value: r.NN.ALLOW_SPECIFIC,
                      children: (0, k.jsx)(
                        w.Z,
                        P({}, E.ownerApprovedOnlyOption)
                      ),
                    }),
                  (0, k.jsx)(y.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_NONE,
                    children: (0, k.jsx)(w.Z, P({}, E.dontAllowOption)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function A(e) {
        var t;
        let {
            workspaceId: s,
            label: i,
            feature: n,
            value: r,
            tooltip: a,
            disabled: o = !1,
          } = e,
          c = (0, b.Z)(),
          g = (0, u.NL)(),
          { variables: f, mutate: O } = (0, p.D)({
            mutationFn: (e) => {
              let { feature: t, enabled: i } = e;
              return d.Z.setWorkspaceBetaFeature(s, t, i);
            },
            onSettled: () => {
              g.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: () => {
              T.m.danger(c.formatMessage(E.featureSettingsUpdateFailed));
            },
          });
        return (0, k.jsxs)(j.vi, {
          className: "justify-start py-6",
          children: [
            (0, k.jsx)(m.wy, {
              label: "",
              disabled: o,
              enabled:
                null !== (t = null == f ? void 0 : f.enabled) && void 0 !== t
                  ? t
                  : r,
              onChange: (e) => {
                O({ feature: n, enabled: e });
              },
            }),
            (0, k.jsxs)("p", {
              className: "text-md inline-flex items-center",
              children: [
                (0, k.jsx)(w.Z, P({}, i)),
                a &&
                  (0, k.jsx)(l.u, {
                    sideOffset: 4,
                    interactive: !0,
                    delayDuration: 0,
                    label: (0, k.jsx)(w.Z, P({}, a)),
                    side: "top",
                    children: (0, k.jsx)(Z, {}),
                  }),
              ],
            }),
          ],
        });
      }
      function G(e) {
        let { workspaceId: t, data: s } = e,
          i = (0, c.t)(),
          { value: n } = (0, g.sB)(g.tz.UpdatedGizmoShare);
        if (null == i) return null;
        let a = i.isTeam(),
          l = (0, k.jsx)(N, {
            title: E.thirdPartyGPTsTitle,
            description: E.thirdPartyGPTsDescription,
            className: "border-b border-token-border-light pb-4",
            children: (0, k.jsx)("div", {
              children: (0, k.jsx)(_, {
                workspaceId: t,
                value: s.allow_third_party_gpts,
                upsellEnterprise: a,
              }),
            }),
          }),
          o = (0, k.jsx)(N, {
            title: E.sidebarTitle,
            children: (0, k.jsx)(S.Z, {
              account: i,
              showThirdParty:
                !a && s.allow_third_party_gpts == r.NN.ALLOW_SPECIFIC,
            }),
          });
        return (0, k.jsxs)(j.$V, {
          className: "max-w-5xl",
          children: [
            a && l,
            a && i.isOwnerOfAccount() && o,
            a && (0, k.jsx)(j.W8, {}),
            (0, k.jsx)(N, {
              title: E.sharingSettingsTitle,
              upsellEnterprise: a,
              children: (0, k.jsx)(j.qQ, {
                children: (0, k.jsx)(M, {
                  workspaceId: t,
                  label: E.gptSharingTitle,
                  disabled: a,
                  setting: r.bb.GPT_SHARE_SETTINGS,
                  defaultValue: s.share_settings.gpt_share_setting,
                  values: [
                    { display: E.anyOneSelect, value: r.Gz.ANYONE },
                    {
                      display: E.workspaceMembersOnlySelect,
                      value: r.Gz.WORKSPACE_ONLY,
                    },
                    {
                      display: n ? E.inviteOnlySelect : E.noOneSelect,
                      value: r.Gz.NO_ONE,
                    },
                  ],
                }),
              }),
            }),
            (0, k.jsx)(N, {
              title: E.workspaceGPTsTitle,
              description: E.workspaceGPTsDescription,
              upsellEnterprise: a,
              children: (0, k.jsxs)(j.qQ, {
                children: [
                  (0, k.jsx)(A, {
                    label: E.browseOptionTitle,
                    feature: r.Nh.BROWSING,
                    value: s.beta_settings.browsing,
                    workspaceId: t,
                    tooltip: E.browseTooltip,
                    disabled: a,
                  }),
                  (0, k.jsx)(A, {
                    label: E.customActionsOptionTitle,
                    feature: r.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,
                    value: s.beta_settings.workspace_gpt_custom_actions,
                    workspaceId: t,
                    tooltip: E.customActionsTooltip,
                    disabled: a,
                  }),
                  (0, k.jsx)(A, {
                    label: E.pluginsOptionTitle,
                    feature: r.Nh.PLUGINS,
                    value: s.beta_settings.plugins,
                    workspaceId: t,
                    tooltip: E.pluginsTooltip,
                    disabled: a,
                  }),
                ],
              }),
            }),
            !a && l,
            !a && i.isOwnerOfAccount() && o,
          ],
        });
      }
      function C(e) {
        let { currentWorkspaceId: t } = e,
          { data: s, isLoading: i } = (0, o.C)(t),
          r = (0, b.Z)();
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(h(), {
              children: (0, k.jsx)("title", {
                children: r.formatMessage(E.sidebarTitle),
              }),
            }),
            (0, k.jsx)(n.yG, { title: r.formatMessage(E.sidebarTitle) }),
            (0, k.jsx)(n.hb, {
              showSpinner: i,
              children:
                void 0 === s
                  ? null
                  : (0, k.jsx)(G, { workspaceId: t, data: s }),
            }),
          ],
        });
      }
      let E = (0, x.vU)({
        sidebarTitle: {
          id: "workspaceSettingsOld.sidebarTitle",
          defaultMessage: "GPTs",
        },
        allowAllOption: {
          id: "workspaceSettingsOld.allowAllOption",
          defaultMessage: "Allow all",
        },
        ownerApprovedOnlyOption: {
          id: "workspaceSettingsOld.ownerApprovedOnlyOption",
          defaultMessage: "Owner-approved only",
        },
        dontAllowOption: {
          id: "workspaceSettingsOld.dontAllowOption",
          defaultMessage: "Don't allow",
        },
        retentionPolicyTitle: {
          id: "workspaceSettingsOld.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        thirdPartyGPTsTitle: {
          id: "workspaceSettingsOld.thirdPartyGPTsTitle",
          defaultMessage: "Third-party",
        },
        thirdPartyGPTsDescription: {
          id: "workspaceSettingsOld.thirdPartyGPTsDescription",
          defaultMessage:
            "Manage whether members can use GPTs created outside your workspace.",
        },
        customActionsTooltip: {
          id: "workspaceSettingsOld.customActionsTooltip",
          defaultMessage:
            "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
        },
        browseTooltip: {
          id: "workspaceSettingsOld.browseTooltip",
          defaultMessage:
            "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
        },
        pluginsTooltip: {
          id: "workspaceSettingsOld.pluginsTooltip",
          defaultMessage:
            "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
        },
        pluginsOptionTitle: {
          id: "workspaceSettingsOld.pluginsOptionTitle",
          defaultMessage: "Plugins",
        },
        customActionsOptionTitle: {
          id: "workspaceSettingsOld.pluginsOptionTitle.0",
          defaultMessage: "Custom actions",
        },
        browseOptionTitle: {
          id: "workspaceSettingsOld.browseOptionTitle",
          defaultMessage: "Browsing with Bing",
        },
        workspaceGPTsTitle: {
          id: "workspaceSettingsOld.workspaceGPTsTitle",
          defaultMessage: "Workspace",
        },
        appearanceTitle: {
          id: "workspaceSettingsOld.appearanceTitle",
          defaultMessage: "Appearance",
        },
        sharingSettingsTitle: {
          id: "workspaceSettingsOld.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        gptSharingTitle: {
          id: "workspaceSettingsOld.gptSharingTitle",
          defaultMessage: "GPTs can be shared with...",
        },
        chatSharingTitle: {
          id: "workspaceSettingsOld.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceMembersOnlySelect: {
          id: "workspaceSettingsOld.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
        },
        anyOneSelect: {
          id: "workspaceSettingsOld.anyOneSelect",
          defaultMessage: "Anyone",
        },
        noOneSelect: {
          id: "workspaceSettingsOld.noOneSelect",
          defaultMessage: "No one",
        },
        inviteOnlySelect: {
          id: "workspaceSettingsOld.inviteOnlySelect",
          defaultMessage: "Invite only",
        },
        featureSettingsUpdateFailed: {
          id: "workspaceSettingsOld.featureSettingsUpdateFailed",
          defaultMessage: "Failed to update feature setting",
        },
        conversationRetention: {
          id: "workspaceSettingsOld.conversationRetention",
          defaultMessage: "Chat retention",
        },
        retentionInfinite: {
          id: "workspaceSettingsOld.retentionInfinite",
          defaultMessage: "Infinite",
        },
        retentionNinetyDays: {
          id: "workspaceSettingsOld.retentionNinetyDays",
          defaultMessage: "90 days",
        },
        retentionOneYear: {
          id: "workspaceSettingsOld.retentionOneYear",
          defaultMessage: "1 year",
        },
        retentionCustomDays: {
          id: "workspaceSettingsOld.retentionCustomDays",
          defaultMessage: "{num} days",
        },
        retentionChange: {
          id: "workspaceSettingsOld.retentionChange",
          defaultMessage:
            "Contact your account manager to change this setting.",
        },
        workspaceGPTsDescription: {
          id: "workspaceSettingsOld.workspaceGPTsDescription",
          defaultMessage:
            "Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs.",
        },
        enterpriseUpsellPill: {
          id: "workspaceSettingsOld.enterpriseUpsellPill",
          defaultMessage: "Enterprise",
        },
        retentionSettingTooltip: {
          id: "workspaceSettingsOld.retentionSettingTooltip",
          defaultMessage: "Contact your account manager to change this setting",
        },
        enterpriseRequiredMessage: {
          id: "workspaceSettingsOld.enterpriseRequiredMessage",
          defaultMessage:
            "Only workspaces with the Enterprise plan can change these settings",
        },
        shareRecipientTitlePrivate: {
          id: "workspaceSettingsOld.shareRecipientTitlePrivate",
          defaultMessage: "Private",
        },
        shareRecipientTitleLink: {
          id: "workspaceSettingsOld.shareRecipientTitleLink",
          defaultMessage: "Link",
        },
        shareRecipientTitlePublic: {
          id: "workspaceSettingsOld.shareRecipientTitlePublic",
          defaultMessage: "Public",
        },
      });
      function I(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, i);
        }
        return s;
      }
      var D = !0;
      function L(e) {
        return (0, k.jsx)(
          C,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? I(Object(s), !0).forEach(function (t) {
                    (0, i.Z)(e, t, s[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(s)
                    )
                  : I(Object(s)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(s, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      L.getLayout = function (e) {
        return (0, k.jsx)(n.ZP, {
          mobilePageTitle: "GPTs",
          requireOwnerPrivileges: !0,
          children: e,
        });
      };
    },
    41594: function (e, t, s) {
      "use strict";
      s.d(t, {
        $V: function () {
          return g;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return b;
        },
        W8: function () {
          return y;
        },
        i$: function () {
          return O;
        },
        i9: function () {
          return w;
        },
        qQ: function () {
          return h;
        },
        vi: function () {
          return x;
        },
      });
      var i,
        n,
        r,
        a,
        l,
        o,
        d,
        c,
        u = s(73017),
        p = s(21389);
      let g = p.Z.div(
          i ||
            (i = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        f = p.Z.div(n || (n = (0, u.Z)(["text-xl font-medium"]))),
        O = p.Z.div(r || (r = (0, u.Z)(["text-base font-medium"]))),
        h = p.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        w = p.Z.div(
          l || (l = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        b = p.Z.div(o || (o = (0, u.Z)(["text-sm"]))),
        x = p.Z.div(d || (d = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        y = p.Z.hr(c || (c = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    80796: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/gpts",
        function () {
          return s(50777);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9112, 4736, 2888, 9774, 179], function () {
      return e((e.s = 80796));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=gpts-e95bb3b712c34cd6.js.map
