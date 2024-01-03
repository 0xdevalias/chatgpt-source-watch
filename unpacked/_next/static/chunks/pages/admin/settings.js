(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    47455: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return I;
          },
          default: function () {
            return D;
          },
        });
      var n = s(36112),
        i = s(35017),
        r = s(82256),
        a = s(90166),
        o = s(67558),
        l = s(66027),
        c = s(73582),
        d = s(82473),
        u = s(25494),
        p = s(19841),
        g = s(29124),
        f = s.n(g),
        h = s(70671),
        b = s(32004),
        w = s(94968),
        x = s(33562),
        m = s(14972),
        j = s(46001),
        v = s(4748),
        y = s(81942),
        T = s(35250);
      function S(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(s), !0).forEach(function (t) {
                (0, n.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : S(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function k() {
        return (0, T.jsx)(m.aU, {
          className: "icon-sm ml-1 text-token-text-tertiary",
        });
      }
      function P(e) {
        var t,
          s = e.conversationTTL,
          n = (0, h.Z)();
        return (
          (t =
            null === s
              ? n.formatMessage(E.retentionInfinite)
              : 7776e3 === s
                ? n.formatMessage(E.retentionNinetyDays)
                : 31536e3 === s
                  ? n.formatMessage(E.retentionOneYear)
                  : n.formatMessage(E.retentionCustomDays, {
                      num: Math.floor(s / 86400),
                    })),
          (0, T.jsxs)(y.vi, {
            children: [
              (0, T.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, T.jsx)(b.Z, O({}, E.conversationRetention)),
              }),
              (0, T.jsx)(a.u, {
                label: n.formatMessage(E.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function Z(e) {
        var t = e.title,
          s = e.description,
          n = e.children,
          i = e.upsellEnterprise,
          r = void 0 !== i && i;
        return (0, T.jsx)(a.E, {
          label: (0, T.jsx)(b.Z, O({}, E.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !r,
          className: "max-w-xl",
          children: (0, T.jsxs)(y.i9, {
            className: (0, p.default)(r && "text-token-text-tertiary"),
            children: [
              (0, T.jsxs)(y.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, T.jsx)(b.Z, O({}, t)),
                  r &&
                    (0, T.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, T.jsx)(b.Z, O({}, E.enterpriseUpsellPill)),
                    }),
                ],
              }),
              s && (0, T.jsx)(y.Li, { children: (0, T.jsx)(b.Z, O({}, s)) }),
              n,
            ],
          }),
        });
      }
      function M(e) {
        var t,
          s = e.workspaceId,
          n = e.label,
          i = e.setting,
          r = e.defaultValue,
          a = e.values,
          o = e.disabled,
          c = (0, h.Z)(),
          p = (0, d.NL)(),
          g = (0, u.D)({
            mutationFn: function (e) {
              var t = e.setting,
                n = e.value;
              return l.ZP.setWorkspaceShareSetting(s, t, n);
            },
            onSettled: function () {
              p.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(c.formatMessage(E.featureSettingsUpdateFailed));
            },
          }),
          f = g.variables,
          w = g.mutate;
        return (0, T.jsxs)(y.vi, {
          children: [
            (0, T.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, T.jsx)(b.Z, O({}, n)),
            }),
            (0, T.jsxs)(x.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : r,
              onValueChange: function (e) {
                w({ setting: i, value: e });
              },
              disabled: void 0 !== o && o,
              children: [
                (0, T.jsxs)(x.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, T.jsx)(x.Z.Value, {}),
                    (0, T.jsx)(x.Z.Icon, {}),
                  ],
                }),
                (0, T.jsx)(x.Z.Portal, {
                  children: (0, T.jsx)(x.Z.Content, {
                    children: a.map(function (e, t) {
                      return (0, T.jsx)(
                        x.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, T.jsx)(b.Z, O({}, e.display)),
                        },
                        t
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        var t,
          s = e.workspaceId,
          n = e.value,
          i = (0, h.Z)(),
          a = (0, d.NL)(),
          o = (0, u.D)({
            mutationFn: function (e) {
              var t = e.value;
              return l.ZP.setWorkspaceThirdPartyGPTSetting(s, t);
            },
            onSettled: function () {
              a.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(i.formatMessage(E.featureSettingsUpdateFailed));
            },
          }),
          c = o.variables,
          p = o.mutate;
        return (0, T.jsxs)(x.Z.Root, {
          defaultValue:
            null !== (t = null == c ? void 0 : c.value) && void 0 !== t ? t : n,
          onValueChange: function (e) {
            p({ value: e });
          },
          children: [
            (0, T.jsxs)(x.Z.Trigger, {
              className:
                "border border-token-border-light text-base focus-visible:border-token-border-light",
              children: [(0, T.jsx)(x.Z.Value, {}), (0, T.jsx)(x.Z.Icon, {})],
            }),
            (0, T.jsx)(x.Z.Portal, {
              children: (0, T.jsxs)(x.Z.Content, {
                children: [
                  (0, T.jsx)(x.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_ALL,
                    children: (0, T.jsx)(b.Z, O({}, E.allowAllOption)),
                  }),
                  (0, T.jsx)(x.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_NONE,
                    children: (0, T.jsx)(b.Z, O({}, E.dontAllowOption)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function _(e) {
        var t,
          s = e.workspaceId,
          n = e.label,
          i = e.feature,
          r = e.value,
          o = e.tooltip,
          c = e.disabled,
          p = (0, h.Z)(),
          g = (0, d.NL)(),
          f = (0, u.D)({
            mutationFn: function (e) {
              var t = e.feature,
                n = e.enabled;
              return l.ZP.setWorkspaceBetaFeature(s, t, n);
            },
            onSettled: function () {
              g.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(p.formatMessage(E.featureSettingsUpdateFailed));
            },
          }),
          w = f.variables,
          x = f.mutate;
        return (0, T.jsxs)(y.vi, {
          children: [
            (0, T.jsxs)("p", {
              className: "text-md inline-flex items-center",
              children: [
                (0, T.jsx)(b.Z, O({}, n)),
                o &&
                  (0, T.jsx)(a.u, {
                    sideOffset: 4,
                    interactive: !0,
                    delayDuration: 0,
                    label: (0, T.jsx)(b.Z, O({}, o)),
                    side: "top",
                    children: (0, T.jsx)(k, {}),
                  }),
              ],
            }),
            (0, T.jsx)(j.oC, {
              label: "",
              disabled: void 0 !== c && c,
              enabled:
                null !== (t = null == w ? void 0 : w.enabled) && void 0 !== t
                  ? t
                  : r,
              onChange: function (e) {
                x({ feature: i, enabled: e });
              },
            }),
          ],
        });
      }
      function G(e) {
        var t = e.workspaceId,
          s = e.data,
          n = (0, c.ec)(c.F_.isTeamPlan),
          i = (0, T.jsxs)(Z, {
            title: E.thirdPartyGPTsTitle,
            children: [
              (0, T.jsx)("p", {
                className: "text-md flex grow items-center",
                children: (0, T.jsx)(b.Z, O({}, E.thirdPartyGPTsDescription)),
              }),
              (0, T.jsx)("div", {
                children: (0, T.jsx)(N, {
                  workspaceId: t,
                  value: s.allow_third_party_gpts,
                }),
              }),
            ],
          });
        return (0, T.jsxs)(y.$V, {
          children: [
            n && i,
            n && (0, T.jsx)(y.W8, {}),
            (0, T.jsx)(Z, {
              title: E.sharingSettingsTitle,
              upsellEnterprise: n,
              children: (0, T.jsxs)(y.qQ, {
                children: [
                  (0, T.jsx)(M, {
                    workspaceId: t,
                    label: E.chatSharingTitle,
                    setting: r.bb.CHAT_SHARE_SETTINGS,
                    disabled: n,
                    defaultValue: s.share_settings.chat_share_setting,
                    values: [
                      {
                        display: E.workspaceMembersOnlySelect,
                        value: r.Gz.WORKSPACE_ONLY,
                      },
                      { display: E.noOneSelect, value: r.Gz.NO_ONE },
                    ],
                  }),
                  (0, T.jsx)(M, {
                    workspaceId: t,
                    label: E.gptSharingTitle,
                    disabled: n,
                    setting: r.bb.GPT_SHARE_SETTINGS,
                    defaultValue: s.share_settings.gpt_share_setting,
                    values: [
                      { display: E.anyOneSelect, value: r.Gz.ANYONE },
                      {
                        display: E.workspaceMembersOnlySelect,
                        value: r.Gz.WORKSPACE_ONLY,
                      },
                      { display: E.noOneSelect, value: r.Gz.NO_ONE },
                    ],
                  }),
                ],
              }),
            }),
            (0, T.jsx)(Z, {
              title: E.workspaceGPTsTitle,
              description: E.workspaceGPTsDescription,
              upsellEnterprise: n,
              children: (0, T.jsxs)(y.qQ, {
                children: [
                  (0, T.jsx)(_, {
                    label: E.browseOptionTitle,
                    feature: r.Nh.BROWSING,
                    value: s.beta_settings.browsing,
                    workspaceId: t,
                    tooltip: E.browseTooltip,
                    disabled: n,
                  }),
                  (0, T.jsx)(_, {
                    label: E.customActionsOptionTitle,
                    feature: r.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,
                    value: s.beta_settings.workspace_gpt_custom_actions,
                    workspaceId: t,
                    tooltip: E.customActionsTooltip,
                    disabled: n,
                  }),
                  (0, T.jsx)(_, {
                    label: E.pluginsOptionTitle,
                    feature: r.Nh.PLUGINS,
                    value: s.beta_settings.plugins,
                    workspaceId: t,
                    tooltip: E.pluginsTooltip,
                    disabled: n,
                  }),
                ],
              }),
            }),
            !n && i,
            (0, T.jsx)(Z, {
              title: E.retentionPolicyTitle,
              description: E.retentionChange,
              upsellEnterprise: n,
              children: (0, T.jsx)(P, { conversationTTL: s.conversation_ttl }),
            }),
          ],
        });
      }
      function A(e) {
        var t = e.currentWorkspaceId,
          s = (0, o.C)(t),
          n = s.data,
          r = s.isLoading,
          a = (0, h.Z)();
        return (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(f(), {
              children: (0, T.jsx)("title", {
                children: a.formatMessage(E.title),
              }),
            }),
            (0, T.jsx)(i.yG, { title: a.formatMessage(E.title) }),
            (0, T.jsx)(i.hb, {
              showSpinner: r,
              children:
                void 0 === n
                  ? null
                  : (0, T.jsx)(G, { workspaceId: t, data: n }),
            }),
          ],
        });
      }
      var E = (0, w.vU)({
        title: { id: "workspaceSettings.title", defaultMessage: "Settings" },
        allowAllOption: {
          id: "workspaceSettings.allowAllOption",
          defaultMessage: "Allow all",
        },
        dontAllowOption: {
          id: "workspaceSettings.dontAllowOption",
          defaultMessage: "Don't allow",
        },
        retentionPolicyTitle: {
          id: "workspaceSettings.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        thirdPartyGPTsTitle: {
          id: "workspaceSettings.thirdPartyGPTsTitle",
          defaultMessage: "Third-party GPTs",
        },
        thirdPartyGPTsDescription: {
          id: "workspaceSettings.thirdPartyGPTsDescription",
          defaultMessage:
            "Manage whether members can use GPTs created outside your workspace. These GPTs may be able to browse the internet or take custom actions.",
        },
        customActionsTooltip: {
          id: "workspaceSettings.customActionsTooltip",
          defaultMessage:
            "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
        },
        browseTooltip: {
          id: "workspaceSettings.browseTooltip",
          defaultMessage:
            "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
        },
        pluginsTooltip: {
          id: "workspaceSettings.pluginsTooltip",
          defaultMessage:
            "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
        },
        pluginsOptionTitle: {
          id: "workspaceSettings.pluginsOptionTitle",
          defaultMessage: "Plugins",
        },
        customActionsOptionTitle: {
          id: "workspaceSettings.pluginsOptionTitle.0",
          defaultMessage: "Custom actions",
        },
        browseOptionTitle: {
          id: "workspaceSettings.browseOptionTitle",
          defaultMessage: "Browsing with Bing",
        },
        workspaceGPTsTitle: {
          id: "workspaceSettings.workspaceGPTsTitle",
          defaultMessage: "Workspace GPTs",
        },
        appearanceTitle: {
          id: "workspaceSettings.appearanceTitle",
          defaultMessage: "Appearance",
        },
        sharingSettingsTitle: {
          id: "workspaceSettings.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        gptSharingTitle: {
          id: "workspaceSettings.gptSharingTitle",
          defaultMessage: "GPTs can be shared with...",
        },
        chatSharingTitle: {
          id: "workspaceSettings.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceMembersOnlySelect: {
          id: "workspaceSettings.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
        },
        anyOneSelect: {
          id: "workspaceSettings.anyOneSelect",
          defaultMessage: "Anyone",
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
        workspaceGPTsDescription: {
          id: "workspaceSettings.workspaceGPTsDescription",
          defaultMessage:
            "Manage which capabilities are available for standard ChatGPT and custom GPTs created in your workspace. These settings do not apply to third-party GPTs.",
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
      function C(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      var I = !0;
      function D(e) {
        return (0, T.jsx)(
          A,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? C(Object(s), !0).forEach(function (t) {
                    (0, n.Z)(e, t, s[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(s)
                    )
                  : C(Object(s)).forEach(function (t) {
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
      D.getLayout = function (e) {
        return (0, T.jsx)(i.ZP, {
          mobilePageTitle: "Settings",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    81942: function (e, t, s) {
      "use strict";
      s.d(t, {
        $V: function () {
          return g;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return x;
        },
        W8: function () {
          return j;
        },
        i$: function () {
          return h;
        },
        i9: function () {
          return w;
        },
        qQ: function () {
          return b;
        },
        vi: function () {
          return m;
        },
      });
      var n,
        i,
        r,
        a,
        o,
        l,
        c,
        d,
        u = s(90038),
        p = s(21389),
        g = p.Z.div(
          n ||
            (n = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        f = p.Z.div(i || (i = (0, u.Z)(["text-xl font-medium"]))),
        h = p.Z.div(r || (r = (0, u.Z)(["text-base font-medium"]))),
        b = p.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        w = p.Z.div(
          o ||
            (o = (0, u.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        x = p.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        m = p.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        j = p.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    16118: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/settings",
        function () {
          return s(47455);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 16118));
    }),
      (_N_E = e.O());
  },
]);
