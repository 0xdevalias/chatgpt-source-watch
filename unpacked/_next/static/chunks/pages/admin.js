(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6964],
  {
    96788: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return ec;
          },
          default: function () {
            return eo;
          },
        });
      var s,
        n,
        a = r(18450),
        i = r(72583),
        l = r(99945),
        c = r(58819),
        o = r(47712),
        d = r(13106),
        u = r(99715),
        m = r(72179),
        g = r(19841),
        p = r(61888),
        f = r(47247),
        j = r.n(f),
        v = r(41409),
        b = r(70079),
        x = r(1454),
        h = r(84692),
        y = r(9063),
        k = r(68498),
        O = r(21389),
        w = r(29287),
        M = r(56244),
        P = r(11265),
        Z = r(79701),
        I = r(53362),
        R = r(61236),
        q = r(82473),
        N = r(25494),
        C = r(95407);
      function E(e) {
        let t = (0, y.Z)(),
          r = (0, q.NL)();
        return (0, N.D)({
          mutationFn: (r) => {
            let { inviteId: s, role: n, acceptRequest: a } = r;
            return I.Z.patchWorkspaceInvite(e, s, {
              role: n,
              acceptRequest: a,
            }).catch((e) => {
              C.m.danger(
                t.formatMessage(D.updateInviteError, { error: e.message })
              );
            });
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: ["workspace", e, "invites"] }),
              r.invalidateQueries({
                queryKey: ["workspace", e, "invites", "requests"],
              }),
              r.invalidateQueries({ queryKey: ["workspace", e] });
          },
        });
      }
      function S(e) {
        let t = (0, y.Z)(),
          r = (0, q.NL)();
        return (0, N.D)({
          mutationFn: (r) => {
            let { email: s } = r;
            return I.Z.deleteWorkspaceInvite(e, s).catch((e) => {
              C.m.danger(
                t.formatMessage(D.deleteInviteError, {
                  email: s,
                  error: e.message,
                })
              );
            });
          },
          onSuccess: () => {
            r.invalidateQueries({ queryKey: ["workspace", e, "invites"] }),
              r.invalidateQueries({
                queryKey: ["workspace", e, "invites", "requests"],
              });
          },
        });
      }
      let D = (0, k.vU)({
        updateInviteError: {
          id: "WorkspaceInvites.updateInviteError",
          defaultMessage: "Unable to update invite from workspace: {error}",
        },
        deleteInviteError: {
          id: "WorkspaceInvites.deleteInviteError",
          defaultMessage:
            "Unable to remove user ({email}) from workspace: {error}",
        },
        resendInviteSuccess: {
          id: "WorkspaceInvites.resendInviteSuccess",
          defaultMessage: "Sent a new invite to {email}",
        },
        resendInviteError: {
          id: "WorkspaceInvites.resendInviteError",
          defaultMessage:
            "Unable to resend invite to ({email}) from workspace: {error}",
        },
      });
      var _ = r(6002),
        U = r(19155),
        W = r(35250);
      function T(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : T(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function H(e) {
        var t;
        let { workspaceId: r, filterInputValue: s } = e,
          { 0: n, 1: a } = (0, b.useState)(0),
          i = (0, U.Gk)(r),
          l = (0, U.bE)(r),
          c = i || l,
          { data: o } =
            ((t = 25 * n),
            (0, R.a)({
              queryKey: ["workspace", r, "invites", t, s],
              queryFn: async () => await I.Z.getWorkspaceInvites(r, t, 25, s),
            }));
        if (void 0 === o) return (0, W.jsx)(_.bq, {});
        let d = o.items,
          u = Math.ceil(o.total / 25);
        return (
          n >= u && 0 !== u && a(Math.max(u - 1, 0)),
          (0, W.jsxs)("div", {
            children: [
              (0, W.jsxs)(P.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, W.jsxs)(P.Z.Header, {
                    children: [
                      (0, W.jsx)(P.Z.HeaderCell, {
                        className: "bg-token-main-surface-primary",
                        children: (0, W.jsx)(h.Z, A({}, F.email)),
                      }),
                      (0, W.jsx)(P.Z.HeaderCell, {
                        className: "w-28 bg-token-main-surface-primary",
                        children: (0, W.jsx)("span", {
                          className: c ? "pl-3" : "",
                          children: (0, W.jsx)(h.Z, A({}, F.role)),
                        }),
                      }),
                      c &&
                        (0, W.jsx)(P.Z.HeaderCell, {
                          className: "w-16 bg-token-main-surface-primary",
                        }),
                    ],
                  }),
                  (0, W.jsxs)(P.Z.Body, {
                    children: [
                      d.map((e) =>
                        (0, W.jsx)(
                          K,
                          {
                            workspaceId: r,
                            invite: e,
                            isCurrentUserOwner: i,
                            currentUserHasAdminRights: c,
                          },
                          e.id
                        )
                      ),
                      0 === d.length &&
                        (0, W.jsx)(P.Z.Row, {
                          children: (0, W.jsx)(P.Z.Cell, {
                            children: (0, W.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, W.jsx)(h.Z, A({}, F.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              u > 1 &&
                (0, W.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, W.jsx)(Z.t, {
                    currentPage: n,
                    onChangeIndex: a,
                    length: u,
                  }),
                }),
            ],
          })
        );
      }
      function K(e) {
        let {
            workspaceId: t,
            invite: r,
            isCurrentUserOwner: s,
            currentUserHasAdminRights: n,
          } = e,
          a = (0, U.Ap)(),
          i = E(t),
          l = S(t),
          c = (function (e) {
            let t = (0, y.Z)(),
              r = (0, q.NL)();
            return (0, N.D)({
              mutationFn: (r) => {
                let { role: s, email: n } = r;
                return I.Z.addWorkspaceUsers(e, [n], s, !0)
                  .then((e) => {
                    let { account_invites: r, errored_emails: s } = e;
                    if (s.length > 0) throw Error(s[0].error);
                    r.length > 0 &&
                      C.m.success(
                        t.formatMessage(D.resendInviteSuccess, { email: n })
                      );
                  })
                  .catch((e) => {
                    C.m.danger(
                      t.formatMessage(D.resendInviteError, {
                        email: n,
                        error: e.message,
                      })
                    );
                  });
              },
              onSuccess: () => {
                r.invalidateQueries({ queryKey: ["workspace", e, "invites"] }),
                  r.invalidateQueries({
                    queryKey: ["workspace", e, "invites", "requests"],
                  });
              },
            });
          })(t);
        return (0, W.jsxs)(P.Z.Row, {
          disabled: i.isPending || l.isPending || l.isSuccess || c.isPending,
          children: [
            (0, W.jsx)(P.Z.Cell, { children: r.email_address }),
            (0, W.jsx)(P.Z.Cell, {
              children: s
                ? (0, W.jsx)(_.mJ, {
                    currentRole: r.role,
                    onUpdateUserRole: (e) => {
                      i.mutate({ inviteId: r.id, role: e });
                    },
                  })
                : a[r.role],
            }),
            n &&
              (0, W.jsx)(W.Fragment, {
                children: (0, W.jsx)(P.Z.Cell, {
                  children: (0, W.jsx)(B, {
                    onDeleteUser: () => {
                      l.mutate({ email: r.email_address });
                    },
                    onResendInvite: () => {
                      c.mutate({ email: r.email_address, role: r.role });
                    },
                  }),
                }),
              }),
          ],
        });
      }
      function B(e) {
        let { onDeleteUser: t, onResendInvite: r } = e;
        return (0, W.jsxs)(c.Z.Root, {
          children: [
            (0, W.jsx)(c.Z.Trigger, {
              children: (0, W.jsx)(x.K9M, { className: "icon-sm" }),
            }),
            (0, W.jsx)(c.Z.Portal, {
              children: (0, W.jsxs)(c.Z.Content, {
                children: [
                  (0, W.jsx)(c.Z.Item, {
                    onClick: r,
                    children: (0, W.jsx)(h.Z, A({}, F.resendInvite)),
                  }),
                  (0, W.jsx)(c.Z.Item, {
                    onClick: t,
                    children: (0, W.jsx)(h.Z, A({}, F.revokeInvite)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let F = (0, k.vU)({
        email: { id: "InviteManager.email", defaultMessage: "Email" },
        role: { id: "InviteManager.role", defaultMessage: "Role" },
        resendInvite: {
          id: "InviteManager.resendInvite",
          defaultMessage: "Resend invite",
        },
        revokeInvite: {
          id: "InviteManager.revokeInvite",
          defaultMessage: "Revoke invite",
        },
        noResults: {
          id: "InviteManager.noResults",
          defaultMessage: "No results",
        },
      });
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function L(e) {
        var t;
        let { workspaceId: r, filterInputValue: s } = e,
          { 0: n, 1: a } = (0, b.useState)(0),
          { data: i } =
            ((t = 25 * n),
            (0, R.a)({
              queryKey: ["workspace", r, "invites", "requests", t, s],
              queryFn: async () =>
                await I.Z.getWorkspaceInviteRequests(r, t, 25, s),
            })),
          l = (0, U.Gk)(r),
          c = (0, U.bE)(r),
          o = (0, y.Z)(),
          d = l || c;
        if (void 0 === i) return (0, W.jsx)(_.bq, {});
        let u = i.items,
          m = Math.ceil(i.total / 25);
        return (
          n >= m && 0 !== m && a(Math.max(m - 1, 0)),
          (0, W.jsxs)("div", {
            children: [
              (0, W.jsxs)(P.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, W.jsxs)(P.Z.Header, {
                    children: [
                      (0, W.jsx)(P.Z.HeaderCell, {
                        className: "bg-token-main-surface-primary",
                        children: (0, W.jsx)(h.Z, Q({}, V.email)),
                      }),
                      (0, W.jsx)(P.Z.HeaderCell, {
                        className: "w-28 bg-token-main-surface-primary",
                        children: (0, W.jsx)("span", {
                          className: d ? "pl-3" : "",
                          children: (0, W.jsx)(h.Z, Q({}, V.role)),
                        }),
                      }),
                      d &&
                        (0, W.jsx)(P.Z.HeaderCell, {
                          className: "w-40 bg-token-main-surface-primary",
                          children: o.formatMessage(V.actions),
                        }),
                    ],
                  }),
                  (0, W.jsxs)(P.Z.Body, {
                    children: [
                      u.map((e) =>
                        (0, W.jsx)(
                          G,
                          {
                            workspaceId: r,
                            invite: e,
                            isCurrentUserOwner: l,
                            currentUserHasAdminRights: d,
                          },
                          e.id
                        )
                      ),
                      0 === u.length &&
                        (0, W.jsx)(P.Z.Row, {
                          children: (0, W.jsx)(P.Z.Cell, {
                            children: (0, W.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, W.jsx)(h.Z, Q({}, V.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              m > 1 &&
                (0, W.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, W.jsx)(Z.t, {
                    currentPage: n,
                    onChangeIndex: a,
                    length: m,
                  }),
                }),
            ],
          })
        );
      }
      function G(e) {
        let {
            workspaceId: t,
            invite: r,
            isCurrentUserOwner: s,
            currentUserHasAdminRights: n,
          } = e,
          a = (0, U.Ap)(),
          i = E(t),
          l = S(t),
          c = (0, y.Z)();
        return (0, W.jsxs)(P.Z.Row, {
          disabled: i.isPending || l.isPending || l.isPending,
          children: [
            (0, W.jsx)(P.Z.Cell, { children: r.email_address }),
            (0, W.jsx)(P.Z.Cell, {
              children: s
                ? (0, W.jsx)(_.mJ, {
                    currentRole: r.role,
                    onUpdateUserRole: (e) => {
                      i.mutate({ inviteId: r.id, role: e });
                    },
                  })
                : a[r.role],
            }),
            n &&
              (0, W.jsx)(W.Fragment, {
                children: (0, W.jsx)(P.Z.Cell, {
                  children: (0, W.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, W.jsx)(w.z, {
                        onClick: () =>
                          i.mutate({ inviteId: r.id, acceptRequest: !0 }),
                        children: c.formatMessage(V.accept),
                      }),
                      (0, W.jsx)(w.z, {
                        color: "neutral",
                        onClick: () => l.mutate({ email: r.email_address }),
                        children: c.formatMessage(V.reject),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      let V = (0, k.vU)({
        email: { id: "RequestInviteManager.email", defaultMessage: "Email" },
        role: { id: "RequestInviteManager.role", defaultMessage: "Role" },
        actions: {
          id: "RequestInviteManager.actions",
          defaultMessage: "Actions",
        },
        accept: { id: "RequestInviteManager.accept", defaultMessage: "Accept" },
        reject: { id: "RequestInviteManager.reject", defaultMessage: "Reject" },
        noResults: {
          id: "RequestInviteManager.noResults",
          defaultMessage: "No results",
        },
      });
      var J = r(37259);
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : X(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var $ =
        (((s = $ || {}).Members = "members"),
        (s.Invites = "invites"),
        (s.Requests = "requests"),
        s);
      function ee(e) {
        let { tab: t } = e;
        switch (t) {
          case $.Members:
            return (0, W.jsx)(h.Z, Y({}, ei.allMembers));
          case $.Invites:
            return (0, W.jsx)(h.Z, Y({}, ei.pendingInvites));
          case $.Requests:
            return (0, W.jsx)(h.Z, Y({}, ei.pendingRequests));
        }
      }
      function et(e) {
        let { tab: t, filterInputValue: r, workspaceId: s } = e;
        switch (t) {
          case $.Members:
            return (0, W.jsx)(_.ZP, { workspaceId: s, filterInputValue: r });
          case $.Invites:
            return (0, W.jsx)(H, { workspaceId: s, filterInputValue: r });
          case $.Requests:
            return (0, W.jsx)(L, { workspaceId: s, filterInputValue: r });
        }
      }
      let er = (0, m.b)($);
      function es(e) {
        var t;
        let { currentWorkspaceId: r } = e,
          s = (0, y.Z)(),
          n = (0, o.t)(),
          a = null !== (t = (0, _.p5)(r)) && void 0 !== t ? t : "?",
          l = (0, U.qH)(n),
          m = null == n ? void 0 : n.isTeam(),
          g = (0, v.useRouter)(),
          f =
            "string" == typeof g.query.tab && er(g.query.tab)
              ? g.query.tab
              : $.Members,
          { 0: k, 1: O } = (0, b.useState)(""),
          { 0: P, 1: Z } = (0, b.useState)("");
        (0, b.useEffect)(() => {
          Z("");
        }, [f]);
        let I = (0, b.useCallback)(
            (0, p.debounce)((e) => {
              Z(e);
            }, 250),
            []
          ),
          R = (0, J.Wv)();
        if (!n) return null;
        let q = n.isAdminOfAccount(),
          N = n.isOwnerOfAccount(),
          C =
            m || !R
              ? [$.Members, $.Invites]
              : [$.Members, $.Invites, $.Requests];
        return (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(j(), {
              children: (0, W.jsx)("title", {
                children: s.formatMessage(ei.adminBrowserPageTitle),
              }),
            }),
            (0, W.jsx)(i.yG, {
              title: s.formatMessage(ei.adminPageTitle),
              subtitle: (0, W.jsx)(
                h.Z,
                Y({ values: { totalMembers: a, planName: l } }, ei.totalMembers)
              ),
            }),
            (0, W.jsxs)(i.hb, {
              children: [
                (0, W.jsxs)(ea, {
                  children: [
                    (0, W.jsx)("div", {
                      className: "mb-6 flex gap-2",
                      children: C.map((e) =>
                        (0, W.jsx)(
                          en,
                          {
                            onClick: () => {
                              g.push(
                                null != e ? "/admin?tab=".concat(e) : "/admin"
                              );
                            },
                            isSelected: f === e,
                            children: (0, W.jsx)(ee, { tab: e }),
                          },
                          e
                        )
                      ),
                    }),
                    (0, W.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, W.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, W.jsx)(x.jRj, {
                              className:
                                "icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary",
                            }),
                            (0, W.jsx)("input", {
                              type: "text",
                              value: k,
                              onChange: (e) => {
                                O(e.target.value), I(e.target.value);
                              },
                              placeholder: s.formatMessage(ei.search),
                              className:
                                "w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary",
                            }),
                          ],
                        }),
                        (q || N || m) &&
                          (0, W.jsxs)(w.z, {
                            onClick: () => {
                              d.vm.openModal(d.B.InviteUsersToWorkspace);
                            },
                            children: [
                              (0, W.jsx)(x.OvN, { className: "icon-sm" }),
                              (0, W.jsx)(h.Z, Y({}, ei.inviteMemberButton)),
                            ],
                          }),
                        m
                          ? (0, W.jsxs)(c.Z.Root, {
                              children: [
                                (0, W.jsx)(u.xz, {
                                  asChild: !0,
                                  children: (0, W.jsx)(w.z, {
                                    color: "neutral",
                                    children: (0, W.jsx)(x.K9M, {
                                      className: "icon-sm",
                                    }),
                                  }),
                                }),
                                (0, W.jsx)(c.Z.Portal, {
                                  children: (0, W.jsx)(c.Z.Content, {
                                    children: (0, W.jsx)(c.Z.Item, {
                                      onClick: () => {
                                        n && d.vm.setLeaveWorkspaceData(n);
                                      },
                                      children: (0, W.jsx)(
                                        h.Z,
                                        Y({}, ei.leaveWorkspace)
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, W.jsx)(et, { workspaceId: r, tab: f, filterInputValue: P }),
              ],
            }),
            null != n ? (0, W.jsx)(M.Z, { workspace: n }) : null,
          ],
        });
      }
      function en(e) {
        let { children: t, isSelected: r, onClick: s } = e;
        return (0, W.jsx)(w.z, {
          color: "none",
          className: (0, g.default)(
            r
              ? "bg-token-main-surface-tertiary"
              : "hover:bg-token-main-surface-tertiary"
          ),
          onClick: s,
          children: t,
        });
      }
      let ea = O.Z.div(
          n ||
            (n = (0, l.Z)([
              "mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between",
            ]))
        ),
        ei = (0, k.vU)({
          adminBrowserPageTitle: {
            id: "adminPage.adminBrowserPageTitle",
            defaultMessage: "ChatGPT - Member admin",
          },
          adminPageTitle: {
            id: "adminPage.adminPageTitle.0",
            defaultMessage: "Members",
          },
          workspaceNotFound: {
            id: "adminPage.workspaceNotFound",
            defaultMessage: "Workspace not found",
          },
          totalMembers: {
            id: "adminPage.totalMembers",
            defaultMessage:
              "{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}",
          },
          backToChat: {
            id: "adminPage.backToChat",
            defaultMessage: "Back to chat",
          },
          allMembers: {
            id: "adminPage.allMembers",
            defaultMessage: "All members",
          },
          pendingInvites: {
            id: "adminPage.pendingInvites",
            defaultMessage: "Pending invites",
          },
          pendingRequests: {
            id: "adminPage.pendingRequests",
            defaultMessage: "Pending requests",
          },
          analytics: { id: "adminPage.analytics", defaultMessage: "Analytics" },
          inviteMemberButton: {
            id: "adminPage.inviteMemberButton",
            defaultMessage: "Invite member",
          },
          leaveWorkspace: {
            id: "adminPage.leaveWorkspace",
            defaultMessage: "Leave workspace",
          },
          search: { id: "adminPage.search", defaultMessage: "Search" },
        });
      function el(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      var ec = !0;
      function eo(e) {
        return (0, W.jsx)(
          es,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? el(Object(r), !0).forEach(function (t) {
                    (0, a.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : el(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      eo.getLayout = function (e) {
        return (0, W.jsx)(i.ZP, { mobilePageTitle: "Members", children: e });
      };
    },
    92053: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return r(96788);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2583, 4736, 2888, 9774, 179], function () {
      return e((e.s = 92053));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=admin-abf8e5b6b77a9f99.js.map
