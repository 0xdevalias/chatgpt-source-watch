(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6964],
  {
    994: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return eo;
          },
          default: function () {
            return ed;
          },
        });
      var s,
        n,
        a = r(39827),
        i = r(9112),
        l = r(73017),
        c = r(70917),
        o = r(24668),
        d = r(18405),
        u = r(99715),
        m = r(19816),
        g = r(82920),
        p = r(19841),
        f = r(61888),
        j = r(80483),
        v = r.n(j),
        b = r(12366),
        x = r(70079),
        h = r(1454),
        y = r(32004),
        k = r(70671),
        O = r(94968),
        w = r(21389),
        M = r(7557),
        P = r(10060),
        Z = r(41068),
        I = r(95250),
        R = r(52299),
        q = r(13038),
        N = r(61236),
        C = r(82473),
        E = r(25494),
        S = r(65455);
      function D(e) {
        let t = (0, k.Z)(),
          r = (0, C.NL)();
        return (0, E.D)({
          mutationFn: (r) => {
            let { inviteId: s, role: n, acceptRequest: a } = r;
            return q.Z.patchWorkspaceInvite(e, s, {
              role: n,
              acceptRequest: a,
            }).catch((e) => {
              S.m.danger(
                t.formatMessage(U.updateInviteError, { error: e.message })
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
      function _(e) {
        let t = (0, k.Z)(),
          r = (0, C.NL)();
        return (0, E.D)({
          mutationFn: (r) => {
            let { email: s } = r;
            return q.Z.deleteWorkspaceInvite(e, s).catch((e) => {
              S.m.danger(
                t.formatMessage(U.deleteInviteError, {
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
      let U = (0, O.vU)({
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
      var W = r(84395),
        T = r(32163),
        A = r(35250);
      function H(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function B(e) {
        var t;
        let { workspaceId: r, filterInputValue: s } = e,
          { 0: n, 1: a } = (0, x.useState)(0),
          i = (0, T.Gk)(r),
          l = (0, T.bE)(r),
          c = i || l,
          { data: o } =
            ((t = 25 * n),
            (0, N.a)({
              queryKey: ["workspace", r, "invites", t, s],
              queryFn: async () => await q.Z.getWorkspaceInvites(r, t, 25, s),
            }));
        if (void 0 === o) return (0, A.jsx)(W.bq, {});
        let d = o.items,
          u = Math.ceil(o.total / 25);
        return (
          n >= u && 0 !== u && a(Math.max(u - 1, 0)),
          (0, A.jsxs)("div", {
            children: [
              (0, A.jsxs)(I.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, A.jsxs)(I.Z.Header, {
                    children: [
                      (0, A.jsx)(I.Z.HeaderCell, {
                        className: "bg-token-main-surface-primary",
                        children: (0, A.jsx)(y.Z, K({}, Q.email)),
                      }),
                      (0, A.jsx)(I.Z.HeaderCell, {
                        className: "w-28 bg-token-main-surface-primary",
                        children: (0, A.jsx)("span", {
                          className: c ? "pl-3" : "",
                          children: (0, A.jsx)(y.Z, K({}, Q.role)),
                        }),
                      }),
                      c &&
                        (0, A.jsx)(I.Z.HeaderCell, {
                          className: "w-16 bg-token-main-surface-primary",
                        }),
                    ],
                  }),
                  (0, A.jsxs)(I.Z.Body, {
                    children: [
                      d.map((e) =>
                        (0, A.jsx)(
                          F,
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
                        (0, A.jsx)(I.Z.Row, {
                          children: (0, A.jsx)(I.Z.Cell, {
                            children: (0, A.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, A.jsx)(y.Z, K({}, Q.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              u > 1 &&
                (0, A.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, A.jsx)(R.t, {
                    currentPage: n,
                    onChangeIndex: a,
                    length: u,
                  }),
                }),
            ],
          })
        );
      }
      function F(e) {
        let {
            workspaceId: t,
            invite: r,
            isCurrentUserOwner: s,
            currentUserHasAdminRights: n,
          } = e,
          a = (0, T.Ap)(),
          i = D(t),
          l = _(t),
          c = (function (e) {
            let t = (0, k.Z)(),
              r = (0, C.NL)();
            return (0, E.D)({
              mutationFn: (r) => {
                let { role: s, email: n } = r;
                return q.Z.addWorkspaceUsers(e, [n], s, !0)
                  .then((e) => {
                    let { account_invites: r, errored_emails: s } = e;
                    if (s.length > 0) throw Error(s[0].error);
                    r.length > 0 &&
                      S.m.success(
                        t.formatMessage(U.resendInviteSuccess, { email: n })
                      );
                  })
                  .catch((e) => {
                    S.m.danger(
                      t.formatMessage(U.resendInviteError, {
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
        return (0, A.jsxs)(I.Z.Row, {
          disabled: i.isPending || l.isPending || l.isSuccess || c.isPending,
          children: [
            (0, A.jsx)(I.Z.Cell, { children: r.email_address }),
            (0, A.jsx)(I.Z.Cell, {
              children: s
                ? (0, A.jsx)(W.mJ, {
                    currentRole: r.role,
                    onUpdateUserRole: (e) => {
                      i.mutate({ inviteId: r.id, role: e });
                    },
                  })
                : a[r.role],
            }),
            n &&
              (0, A.jsx)(A.Fragment, {
                children: (0, A.jsx)(I.Z.Cell, {
                  children: (0, A.jsx)(z, {
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
      function z(e) {
        let { onDeleteUser: t, onResendInvite: r } = e;
        return (0, A.jsxs)(c.Z.Root, {
          children: [
            (0, A.jsx)(c.Z.Trigger, {
              children: (0, A.jsx)(h.K9M, { className: "icon-sm" }),
            }),
            (0, A.jsx)(c.Z.Portal, {
              children: (0, A.jsxs)(c.Z.Content, {
                children: [
                  (0, A.jsx)(c.Z.Item, {
                    onClick: r,
                    children: (0, A.jsx)(y.Z, K({}, Q.resendInvite)),
                  }),
                  (0, A.jsx)(c.Z.Item, {
                    onClick: t,
                    children: (0, A.jsx)(y.Z, K({}, Q.revokeInvite)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let Q = (0, O.vU)({
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
      function L(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : L(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function V(e) {
        var t;
        let { workspaceId: r, filterInputValue: s } = e,
          { 0: n, 1: a } = (0, x.useState)(0),
          { data: i } =
            ((t = 25 * n),
            (0, N.a)({
              queryKey: ["workspace", r, "invites", "requests", t, s],
              queryFn: async () =>
                await q.Z.getWorkspaceInviteRequests(r, t, 25, s),
            })),
          l = (0, T.Gk)(r),
          c = (0, T.bE)(r),
          o = (0, k.Z)(),
          d = l || c;
        if (void 0 === i) return (0, A.jsx)(W.bq, {});
        let u = i.items,
          m = Math.ceil(i.total / 25);
        return (
          n >= m && 0 !== m && a(Math.max(m - 1, 0)),
          (0, A.jsxs)("div", {
            children: [
              (0, A.jsxs)(I.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, A.jsxs)(I.Z.Header, {
                    children: [
                      (0, A.jsx)(I.Z.HeaderCell, {
                        className: "bg-token-main-surface-primary",
                        children: (0, A.jsx)(y.Z, G({}, X.email)),
                      }),
                      (0, A.jsx)(I.Z.HeaderCell, {
                        className: "w-28 bg-token-main-surface-primary",
                        children: (0, A.jsx)("span", {
                          className: d ? "pl-3" : "",
                          children: (0, A.jsx)(y.Z, G({}, X.role)),
                        }),
                      }),
                      d &&
                        (0, A.jsx)(I.Z.HeaderCell, {
                          className: "w-40 bg-token-main-surface-primary",
                          children: o.formatMessage(X.actions),
                        }),
                    ],
                  }),
                  (0, A.jsxs)(I.Z.Body, {
                    children: [
                      u.map((e) =>
                        (0, A.jsx)(
                          J,
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
                        (0, A.jsx)(I.Z.Row, {
                          children: (0, A.jsx)(I.Z.Cell, {
                            children: (0, A.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, A.jsx)(y.Z, G({}, X.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              m > 1 &&
                (0, A.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, A.jsx)(R.t, {
                    currentPage: n,
                    onChangeIndex: a,
                    length: m,
                  }),
                }),
            ],
          })
        );
      }
      function J(e) {
        let {
            workspaceId: t,
            invite: r,
            isCurrentUserOwner: s,
            currentUserHasAdminRights: n,
          } = e,
          a = (0, T.Ap)(),
          i = D(t),
          l = _(t),
          c = (0, k.Z)();
        return (0, A.jsxs)(I.Z.Row, {
          disabled: i.isPending || l.isPending || l.isPending,
          children: [
            (0, A.jsx)(I.Z.Cell, { children: r.email_address }),
            (0, A.jsx)(I.Z.Cell, {
              children: s
                ? (0, A.jsx)(W.mJ, {
                    currentRole: r.role,
                    onUpdateUserRole: (e) => {
                      i.mutate({ inviteId: r.id, role: e });
                    },
                  })
                : a[r.role],
            }),
            n &&
              (0, A.jsx)(A.Fragment, {
                children: (0, A.jsx)(I.Z.Cell, {
                  children: (0, A.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, A.jsx)(M.z, {
                        onClick: () =>
                          i.mutate({ inviteId: r.id, acceptRequest: !0 }),
                        children: c.formatMessage(X.accept),
                      }),
                      (0, A.jsx)(M.z, {
                        color: "neutral",
                        onClick: () => l.mutate({ email: r.email_address }),
                        children: c.formatMessage(X.reject),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      let X = (0, O.vU)({
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
      function Y(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Y(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var ee =
        (((s = ee || {}).Members = "members"),
        (s.Invites = "invites"),
        (s.Requests = "requests"),
        s);
      function et(e) {
        let { tab: t } = e;
        switch (t) {
          case ee.Members:
            return (0, A.jsx)(y.Z, $({}, el.allMembers));
          case ee.Invites:
            return (0, A.jsx)(y.Z, $({}, el.pendingInvites));
          case ee.Requests:
            return (0, A.jsx)(y.Z, $({}, el.pendingRequests));
          default:
            (0, g.vE)(t);
        }
      }
      function er(e) {
        let { tab: t, filterInputValue: r, workspaceId: s } = e;
        switch (t) {
          case ee.Members:
            return (0, A.jsx)(W.ZP, { workspaceId: s, filterInputValue: r });
          case ee.Invites:
            return (0, A.jsx)(B, { workspaceId: s, filterInputValue: r });
          case ee.Requests:
            return (0, A.jsx)(V, { workspaceId: s, filterInputValue: r });
          default:
            (0, g.vE)(t);
        }
      }
      let es = (0, m.b)(ee);
      function en(e) {
        var t;
        let { currentWorkspaceId: r } = e,
          s = (0, k.Z)(),
          n = (0, o.t)(),
          a = null !== (t = (0, W.p5)(r)) && void 0 !== t ? t : "?",
          l = (0, T.qH)(n),
          m = null == n ? void 0 : n.isTeam(),
          g = (0, b.useRouter)(),
          p =
            "string" == typeof g.query.tab && es(g.query.tab)
              ? g.query.tab
              : ee.Members,
          { 0: j, 1: O } = (0, x.useState)(""),
          { 0: w, 1: I } = (0, x.useState)("");
        (0, x.useEffect)(() => {
          I("");
        }, [p]);
        let R = (0, x.useCallback)(
            (0, f.debounce)((e) => {
              I(e);
            }, 250),
            []
          ),
          q = (0, Z.Wv)();
        if (!n) return null;
        let N = n.isAdminOfAccount(),
          C = n.isOwnerOfAccount(),
          E =
            m || !q
              ? [ee.Members, ee.Invites]
              : [ee.Members, ee.Invites, ee.Requests];
        return (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(v(), {
              children: (0, A.jsx)("title", {
                children: s.formatMessage(el.adminBrowserPageTitle),
              }),
            }),
            (0, A.jsx)(i.yG, {
              title: s.formatMessage(el.adminPageTitle),
              subtitle: (0, A.jsx)(
                y.Z,
                $({ values: { totalMembers: a, planName: l } }, el.totalMembers)
              ),
            }),
            (0, A.jsxs)(i.hb, {
              children: [
                (0, A.jsxs)(ei, {
                  children: [
                    (0, A.jsx)("div", {
                      className: "mb-6 flex gap-2",
                      children: E.map((e) =>
                        (0, A.jsx)(
                          ea,
                          {
                            onClick: () => {
                              g.push(
                                null != e ? "/admin?tab=".concat(e) : "/admin"
                              );
                            },
                            isSelected: p === e,
                            children: (0, A.jsx)(et, { tab: e }),
                          },
                          e
                        )
                      ),
                    }),
                    (0, A.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, A.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, A.jsx)(h.jRj, {
                              className:
                                "icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary",
                            }),
                            (0, A.jsx)("input", {
                              type: "text",
                              value: j,
                              onChange: (e) => {
                                O(e.target.value), R(e.target.value);
                              },
                              placeholder: s.formatMessage(el.search),
                              className:
                                "w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary",
                            }),
                          ],
                        }),
                        (N || C || m) &&
                          (0, A.jsxs)(M.z, {
                            onClick: () => {
                              d.vm.openModal(d.B.InviteUsersToWorkspace);
                            },
                            children: [
                              (0, A.jsx)(h.OvN, { className: "icon-sm" }),
                              (0, A.jsx)(y.Z, $({}, el.inviteMemberButton)),
                            ],
                          }),
                        m
                          ? (0, A.jsxs)(c.Z.Root, {
                              children: [
                                (0, A.jsx)(u.xz, {
                                  asChild: !0,
                                  children: (0, A.jsx)(M.z, {
                                    color: "neutral",
                                    children: (0, A.jsx)(h.K9M, {
                                      className: "icon-sm",
                                    }),
                                  }),
                                }),
                                (0, A.jsx)(c.Z.Portal, {
                                  children: (0, A.jsx)(c.Z.Content, {
                                    children: (0, A.jsx)(c.Z.Item, {
                                      onClick: () => {
                                        n && d.vm.setLeaveWorkspaceData(n);
                                      },
                                      children: (0, A.jsx)(
                                        y.Z,
                                        $({}, el.leaveWorkspace)
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
                (0, A.jsx)(er, { workspaceId: r, tab: p, filterInputValue: w }),
              ],
            }),
            null != n ? (0, A.jsx)(P.Z, { workspace: n }) : null,
          ],
        });
      }
      function ea(e) {
        let { children: t, isSelected: r, onClick: s } = e;
        return (0, A.jsx)(M.z, {
          color: "none",
          className: (0, p.default)(
            r
              ? "bg-token-main-surface-tertiary"
              : "hover:bg-token-main-surface-tertiary"
          ),
          onClick: s,
          children: t,
        });
      }
      let ei = w.Z.div(
          n ||
            (n = (0, l.Z)([
              "mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between",
            ]))
        ),
        el = (0, O.vU)({
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
      function ec(e, t) {
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
      var eo = !0;
      function ed(e) {
        return (0, A.jsx)(
          en,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ec(Object(r), !0).forEach(function (t) {
                    (0, a.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : ec(Object(r)).forEach(function (t) {
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
      ed.getLayout = function (e) {
        return (0, A.jsx)(i.ZP, { mobilePageTitle: "Members", children: e });
      };
    },
    53835: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return r(994);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9112, 2888, 9774, 179], function () {
      return e((e.s = 53835));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=admin-03148c6243f033d6.js.map
