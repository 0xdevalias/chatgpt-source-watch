# Changelog

Note that while the contents within this CHANGELOG will be kept up to date with the latest changes and insights, you may also like some of the historical insights captured at the following gist:

- [Reverse engineering ChatGPT's frontend web app + deep dive explorations of the code (0xdevalias gist)](https://gist.github.com/0xdevalias/4ac297ee3f794c17d0997b4673a2f160#reverse-engineering-chatgpts-frontend-web-app--deep-dive-explorations-of-the-code)

## 2023-06-29Z (`IMPCGbhyMemq6LQoEyhI5`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Very little of importance seems to have changed in this build, with the most notable thing seeming to be maybe just rendering a section differently when `aboutModelMessage` / `aboutUserMessage` are blank
- `unpacked/_next/static/chunks/496.js`
  - ```js
    !(t && "" === n.aboutModelMessage && "" === n.aboutUserMessage) &&
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/709.js`
  - `unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-77b4c7f233263bfd.js
https://chat.openai.com/_next/static/chunks/709-4cdd51bedb744a2e.js
https://chat.openai.com/_next/static/chunks/pages/_app-5c1f9bf4f972992a.js
https://chat.openai.com/_next/static/chunks/webpack-05077d02aace6912.js
https://chat.openai.com/_next/static/IMPCGbhyMemq6LQoEyhI5/_buildManifest.js
https://chat.openai.com/_next/static/IMPCGbhyMemq6LQoEyhI5/_ssgManifest.js
```

### From `_next/static/chunks/webpack-05077d02aace6912.js`

#### Archived

```
https://chat.openai.com/_next/static/css/dd7418835a1febfc.css
```

## 2023-06-29Z (`wzq04J4IxM11RTl64R6wV`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - It looks like workspaces will be coming for both personal and business accounts
  - A number of features/routes/chunks related to business accounts (eg. `/payments/business`) seem to have been removed from this build (including some things behind the `business_seats` flag)
  - Some old `tools2` feature flag references to 'Code Interpreter' have been changed to `isCodeInterpreterAvailable`, which may imply that the feature will be released more widely at some (soon?) point in the future
  - `isBrowsingAvailable` (`browsing_available` / `tools`) / `isCodeInterpreterAvailable` (`code_interpreter_available` / `tools2`) / `isPluginsAvailable` (`plugins_available` / `tools3`) have all been changed so that they aren't available when `isBusinessWorkspace`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - the `/payments/business` route/chunk was removed (`static/chunks/pages/payments/business-ef9abcf545cb03c1.js`)
  - chunk `167` renamed to `496`
- `unpacked/_next/static/chunks/webpack.js`
  - chunk `167` renamed to `496`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Removed `64135: function (U, B, G)`
  - Added `59110: function (U, B, G) {`
    - ```js
      tr = (0, Q.ZP)(function () {
        return {
          currentWorkspace: null,
          subscriptionStatus: null,
          features: new Set(),
          workspaces: [],
        };
      }),
      ti = {
        setCurrentWorkspace: function (U) {
          tr.setState({ currentWorkspace: U });
        },
      },
      ta = {
        hasMultipleWorkspaces: function (U) {
          return U.workspaces.length > 1;
        },
        isPersonalWorkspace: function (U) {
          var B = U.currentWorkspace;
          return null != B && "personal" === B.structure;
        },
        isBusinessWorkspace: function (U) {
          var B = U.currentWorkspace;
          return null != B && "workspace" === B.structure;
        },
        isAdmin: function (U) {
          var B = U.currentWorkspace;
          return null != B && B.role === te.r3.ADMIN;
        },
        workspaceId: function (U) {
          var B = U.currentWorkspace;
          return null != B ? B.id : null;
        },
        hasPaidSubscription: function (U) {
          var B = U.subscriptionStatus;
          return null != B && B.hasPaidSubscription;
        },
        wasPaidCustomer: function (U) {
          var B = U.subscriptionStatus;
          return null != B && B.wasPaidCustomer;
        },
        hasCustomerObject: function (U) {
          var B = U.subscriptionStatus;
          return null != B && B.hasCustomerObject;
        },
        lastActiveSubscription: function (U) {
          var B = U.subscriptionStatus;
          return null != B ? B.lastActiveSubscription : null;
        },
        features: function (U) {
          return U.features;
        },
        workspaces: function (U) {
          return U.workspaces;
        },
      },
      ts = "_account",
      tu = "chatgptfreeplan",
      tc = te.r3.ADMIN,
      td = "default";
      ```
    - ```js
      null !== G
        ? (ti.setCurrentWorkspace(G),
          (0, X.setCookie)(
            ts,
            "personal" === G.structure ? "" : G.id
          ))
        : (0, X.setCookie)(ts, "");
      ```
- `unpacked/_next/static/chunks/496.js`
  - Removed
    - `i.has("business_seats") && (0, l.jsx)(er, { onResetThread: n }),`
  - Changed
    - From `x = (0, f.hz)().has("tools2"),`
    - To `x = (0, f.Fl)().isCodeInterpreterAvailable,`
  - ```js
    initialConversationTurns: null,
    ```
  - ```js
    r = (0, p.ec)(p.F_.isBusinessWorkspace);
    ```
  - Changed `isBrowsingAvailable`
    - From: `t.has("browsing_available") || t.has("tools"),`
    - To: `!r && (t.has("browsing_available") || t.has("tools")),`
  - Changed `isCodeInterpreterAvailable:`
    - From: `t.has("code_interpreter_available") || t.has("tools2"),`
    - To: `!r && (t.has("code_interpreter_available") || t.has("tools2")),`
  - Changed `isPluginsAvailable`:
    - From: `t.has("plugins_available") || t.has("tools3"),`
    - To: `!r && (t.has("plugins_available") || t.has("tools3")),`
- `unpacked/_next/static/chunks/709.js`
  - Added `78251: function (e, t, n)`
    - ```js
      t.ZP = function () {
        var e = (0, l.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, l.WY)();
        return (null == e ? void 0 : e.structure) === "workspace"
          ? (0, i.jsx)(f, {
              children: (0, i.jsx)(o.Z, (0, r._)({}, h.businessPlanName)),
            })
          : (null == e ? void 0 : e.structure) === "personal" && t
          ? (0, i.jsx)(m, { children: "Plus" })
          : null;
      };
      var h = (0, s.vU)({
        businessPlanName: {
          id: "badge.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
      });
      ```
  - ```js
    Z = e.includeChatPreferencesMismatchDisclaimer,
    ```
  - ```js
    I = (0, R.ec)(R.F_.isBusinessWorkspace),
    ```
  - ```js
    tY = function (e) {
      var t = e.isPostMessage;
      return (0, y.jsx)(t4, {
        $isPostMessage: t,
        children:
          "Your info has changed since the start of this chat. Please start a new chat to see changes reflected",
      });
    },
    ```
  - ```js
    Q = (0, N.UL)(u).initialConversationTurns,
    ```
  - Removed
    - ```js
      m.has("business_seats")
        ? (0, y.jsx)(
            ol(),
            {
              href: "/payments/business",
              target: "_blank",
              passHref: !0,
              children: (0, y.jsx)(
                od.nR,
                {
                  className: "sm:pb-1",
                  isLoading: !1,
                  text: om.S.business.callToAction,
                  onClick: c,
                },
                "row-plus-plan-help"
              ),
            },
            "row-plus-plan-create-business-team"
          )
        : null,
      ```
- The following files had nothing much of note:
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/admin.js`
  - `unpacked/_next/static/chunks/pages/account/upgrade.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-23d12839c0a43dc3.js
https://chat.openai.com/_next/static/chunks/709-9dd3e92dd8327ba4.js
https://chat.openai.com/_next/static/chunks/pages/_app-a9d5984f60aac0bd.js
https://chat.openai.com/_next/static/chunks/pages/index-ba8edbd15bfbb3a1.js
https://chat.openai.com/_next/static/chunks/webpack-030e472186109ba3.js
https://chat.openai.com/_next/static/wzq04J4IxM11RTl64R6wV/_buildManifest.js
https://chat.openai.com/_next/static/wzq04J4IxM11RTl64R6wV/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-01689ac51125da14.js
https://chat.openai.com/_next/static/chunks/pages/admin-96ad1db7a0d41241.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-92e3c83878b7fde1.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-f2c05a366478888e.js
```

### From `_next/static/chunks/webpack-030e472186109ba3.js`

#### Archived

```
https://chat.openai.com/_next/static/css/4c11e279de7cf83b.css
```

## 2023-06-28Z (`QvBTYln7NSxjxlNyZ4qN0`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - `BROWSING`, `CODE_INTERPRETER` and `PLUGINS` were updated to support showing icons for both `gpt_3.5` and `gpt_4` models (potentially implies that at some stage `gpt_3.5` is going to gain access to these features maybe..?)
  - Some more minor tweaks related to 'user context'
  - Some changes to strings related to `PluginStoreModal`
  - 3 new svg images with 2 colour variations each (presumably corresponding with the `BROWSING`, `CODE_INTERPRETER` and `PLUGINS` features for `gpt_3.5` and `gpt_4` models)
    - Images
      - world with a lightning bolt in the top right corner
      - rounded square emoji face (`>_<`) with a lightning bolt in the top right corner
      - puzzle piece with a lightning bolt in the top right corner
    - Colours
      - black base image, black lightning bolt
      - grey (`#86909D`) base image, black lightning bolt
  - **Twitter thread:** https://twitter.com/_devalias/status/1674241584723021824
  - **Reddit post:** https://www.reddit.com/r/ChatGPT/comments/14lsduz/upcoming_chatgpt_features_gpt35_getting_access_to/
- `unpacked/_next/static/chunks/167.js`
  - Removed
    - ```js
      metadata: {
        parent_message_id: e.parent_message_id,
        is_complete: !0,
      },
      ```
  - ```js
    (0, h._)(f, a.BROWSING, {
      iconByCategory:
        ((s = {}),
        (0, h._)(s, "gpt_3.5", j.O1),
        (0, h._)(s, "gpt_4", j.Fz),
        s),
      activeIconByCategory:
        ((o = {}),
        (0, h._)(o, "gpt_3.5", j.X7),
        (0, h._)(o, "gpt_4", j.Ae),
        o),
    ```
  - ```js
    (0, h._)(f, a.CODE_INTERPRETER, {
      iconByCategory:
        ((l = {}),
        (0, h._)(l, "gpt_3.5", j.lv),
        (0, h._)(l, "gpt_4", j.Q$),
        l),
      activeIconByCategory:
        ((u = {}),
        (0, h._)(u, "gpt_3.5", j.vy),
        (0, h._)(u, "gpt_4", j.$V),
        u),
    ```
  - ```js
    (0, h._)(f, a.PLUGINS, {
      iconByCategory:
        ((d = {}),
        (0, h._)(d, "gpt_3.5", j.AQ),
        (0, h._)(d, "gpt_4", j.IT),
        d),
      activeIconByCategory:
        ((c = {}),
        (0, h._)(c, "gpt_3.5", j.Np),
        (0, h._)(c, "gpt_4", j.j3),
        c),
    ```
  - ```js
    Z(i.get(n[a.BROWSING]), {
      icon: d.iconByCategory[n.category],
      name: d.name,
      activeIcon: d.activeIconByCategory[n.category],
    ```
  - ```js
    Z(i.get(n[a.CODE_INTERPRETER]), {
      icon: c.iconByCategory[n.category],
      name: c.name,
      activeIcon: c.activeIconByCategory[n.category],
    ```
  - ```js
    Z(i.get(n[a.PLUGINS]), {
      icon: f.iconByCategory[n.category],
      name: f.name,
      activeIcon: f.activeIconByCategory[n.category],
    ```
  - ```js
    var t,
        n = I.getTree(e).getUserContext();
      if (null == n) return null;
      var r = n.message;
      return (null === (t = r.metadata) || void 0 === t
        ? void 0
        : t.user_context_message_parts) &&
        r.metadata.user_context_message_parts.length > 0
        ? r.metadata.user_context_message_parts.join("\n")
        : (0, w.RR)(r);
    ```
- `unpacked/_next/static/chunks/709.js`
  - Big section of diff churn that started with this content, but it may have just been moved around, isn't necessarily all new
    - ```js
       ((o = f || (f = {}))[(o.All = 0)] = "All"),
        (o[(o.Installed = 1)] = "Installed"),
        ((s = h || (h = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var af = [
        { id: h.Popular, title: "Popular" },
        { id: h.New, title: "New" },
        { id: f.All, title: "All" },
        { id: f.Installed, title: "Installed" },
      ];
      ```
  - `searchPlaceholder` `id` changed
    - From: `PluginStoreModal.search_placeholder`
    - To: `PluginStoreModal.searchPlaceholder`
  - `noSearchResultsTitle` `id` changed
    - From: `PluginStoreModal.no_search_results`
    - To: `PluginStoreModal.noSearchResults`
  - `noSearchResultsHint` `id` changed
    - From: `PluginStoreModal.no_search_results_hint`
    - To: `PluginStoreModal.noSearchResultsHint`
  - ```js
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
    ```
  - ```js
    children: [
      c.has("tools3_dev") &&
        (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(aZ, {
              onClick: i,
              children: (0, y.jsx)(
                _.Z,
                (0, x._)({}, ak.installUnverifiedPlugin)
              ),
            }),
            (0, y.jsx)(aS, {}),
            (0, y.jsx)(aZ, {
              onClick: o,
              children: (0, y.jsx)(
                _.Z,
                (0, x._)({}, ak.developPlugin)
              ),
            }),
            (0, y.jsx)(aS, {}),
          ],
        }),
    ```
    - Here we can see that the `tools3_dev` flag is what controls whether you get access to the frontend `installUnverifiedPlugin` / `developPlugin` features
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added an svg of a world with a lightning bolt in the top right corner (black world, black lightning bolt)
  - Added an svg of a world with a lightning bolt in the top right corner (grey (`#86909D`) world, black lightning bolt)
  - Added an svg of a rounded square emoji face (`>_<`) with a lightning bolt in the top right corner (black face, black lightning bolt)
  - Added an svg of a rounded square emoji face (`>_<`) with a lightning bolt in the top right corner (grey (`#86909D`) face, black lightning bolt)
  - Added an svg of a puzzle piece with a lightning bolt in the top right corner (black puzzle piece, black lightning bolt)
  - Added an svg of a puzzle piece with a lightning bolt in the top right corner (grey (`#86909D`) puzzle piece, black lightning bolt)
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/167-8734b7c69f1e2cd4.js
https://chat.openai.com/_next/static/chunks/709-99fc8e8475cb41ba.js
https://chat.openai.com/_next/static/chunks/pages/_app-fe112e1742f5076a.js
https://chat.openai.com/_next/static/chunks/webpack-8cb4a50c226ebf0d.js
https://chat.openai.com/_next/static/QvBTYln7NSxjxlNyZ4qN0/_buildManifest.js
https://chat.openai.com/_next/static/QvBTYln7NSxjxlNyZ4qN0/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-f5c4af167faf011e.js
```

### From `_next/static/chunks/webpack-8cb4a50c226ebf0d.js`

#### Archived

```
https://chat.openai.com/_next/static/css/2703ac51e681baff.css
```

## 2023-06-27Z (`xNQaMU5Ofw4qA7ejTH2hq`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Chunks renamed (`706->386`, `724->293`)
  - New strings added for `userContextModal` related to 'tips'
  - Strings changed for `userContextModal` / related to rename it from 'user context modal' to 'chat preferences modal', and to rename 'system instructions' to 'chat preferences'
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - Chunk `706` renamed to `386`
  - Chunk `724` renamed to `293`
- `unpacked/_next/static/chunks/167.js`
  - ```js
    tipsHeader: {
      id: "userContextModal.tipsHeader",
      defaultMessage: "Thought starters",
      description: "header for chat preferences tips",
    },
    aboutUserTip1: {
      id: "userContextModal.aboutUserTip1",
      defaultMessage: "Where are you based?",
      description: "tips for chat preferences about you",
    },
    aboutUserTip2: {
      id: "userContextModal.aboutUserTip2",
      defaultMessage: "What do you do for work?",
      description: "tips for chat preferences about you",
    },
    aboutUserTip3: {
      id: "userContextModal.aboutUserTip3",
      defaultMessage: "What are your hobbies and interests?",
      description: "tips for chat preferences about you",
    },
    aboutUserTip4: {
      id: "userContextModal.aboutUserTip4",
      defaultMessage: "What subjects can you talk about for hours?",
      description: "tips for chat preferences about you",
    },
    aboutUserTip5: {
      id: "userContextModal.aboutUserTip5",
      defaultMessage: "What are some goals you have?",
      description: "tips for chat preferences about you",
    },
    modelTip1: {
      id: "userContextModal.modelTip1",
      defaultMessage: "How formal or casual should ChatGPT be?",
      description: "tips for chat preferences about model",
    },
    modelTip2: {
      id: "userContextModal.modelTip2",
      defaultMessage: "How long or short should responses generally be?",
      description: "tips for chat preferences about model",
    },
    modelTip3: {
      id: "userContextModal.modelTip3",
      defaultMessage: "How do you want to be addressed?",
      description: "tips for chat preferences about model",
    },
    modelTip4: {
      id: "userContextModal.modelTip4",
      defaultMessage:
        "Should ChatGPT have opinions on topics or remain neutral?",
      description: "tips for chat preferences about model",
    },
    ```
  - Changed text for `userContextModal.cancel`
    - From: `"Cancel button for user context modal"`
    - To: ` "Cancel button for chat preferences modal"`
  - Changed text for `userContextModal.ok`
    - From: `"OK button for user context modal"`
    - To: `"OK button for chat preferences modal"`
  - Changed text for `userContextModal.aboutYouHelpText`
    - From: `"help text for about you section of user context"`
    - To: `"help text for about you section of chat preferences"`
  - Changed text for `userContextModal.title`
    - From: `defaultMessage: "Help ChatGPT provide better responses", description: "title for user context modal"`
    - To: `defaultMessage: "Chat preferences", description: "title for chat preferences modal",`
  - Changed text for `userContextModal.messageLimitError`
    - From: `"error message for user context modal"`
    - To: `"error message for chat preferences modal"`
  - Changed text for `userContextModal.showTips`
    - From: `"show tips button for user context modal"`
    - To: `"show tips button for chat preferences modal"`
  - Changed text for `userContextModal.hideTips`
    - From: `"hide tips button for user context modal"`
    - To: `"hide tips button for chat preferences modal"`
  - Changed text
    - From: `em.m.danger("Failed to get your system instructions");`
    - To: `em.m.danger("Failed to get your chat preferences");`
  - Changed text
    - From: `"Failed to update user context."`
    - To: `"Failed to update chat preferences."`
  - ```js
    tip: (0, l.jsx)(tn, {
      children: (0, l.jsxs)("ul", {
        className: "list-disc pl-5",
        children: [
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.aboutUserTip1)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.aboutUserTip2)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.aboutUserTip3)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.aboutUserTip4)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.aboutUserTip5)
            ),
          }),
        ],
      }),
    }),
    ```
  - ```js
    tip: (0, l.jsx)(tn, {
      children: (0, l.jsxs)("ul", {
        className: "list-disc pl-5",
        children: [
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.modelTip1)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.modelTip2)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.modelTip3)
            ),
          }),
          (0, l.jsx)("li", {
            children: (0, l.jsx)(
              b.Z,
              (0, h._)({}, e9.modelTip4)
            ),
          }),
        ],
      }),
    }),
    ```
  - ```js
    (0, l.jsx)(w.ZP, { icon: x.yK7 }),
    (0, l.jsx)(b.Z, (0, h._)({}, th.chatPreferences)),
    ```
    - Changed from `th.myProfile`
  - ```js
    chatPreferences: {
      id: "popoverNavigation.chatPreferences",
      defaultMessage: "Chat Preferences",
      description: "Chat preferences menu item",
    },
    ```
    - Change from `myProfile`
- `unpacked/_next/static/chunks/293.js`
  - Chunk renamed from `724` -> `293`
  - Removed function `75861: function (t, e, n) {`
    - This seems to have been moved into chunk `386` (see below)
- `unpacked/_next/static/chunks/386.js`
  - Chunk renamed from `706` -> `386`
  - Added new function `75861: function (e, t, n) {`
    - This seems to have been moved here from chunk `293` (see above)
    - Looks like it might be a React component or similar, with a number of features related to stylesheets and maybe some animations to do with popping or similar
- The following files had nothing much of note:
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/admin.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`
  - `unpacked/_next/static/chunks/709.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/167-d8b2347ea95bd65f.js
https://chat.openai.com/_next/static/chunks/293-defd068c38bd0c8d.js
https://chat.openai.com/_next/static/chunks/386-0a1e4f86c7a1f79c.js
https://chat.openai.com/_next/static/chunks/709-9a5517af45603d46.js
https://chat.openai.com/_next/static/chunks/pages/_app-6cb0d68c102a249a.js
https://chat.openai.com/_next/static/chunks/pages/index-363d92a6ae5fd204.js
https://chat.openai.com/_next/static/chunks/webpack-10026ec020bb0a9d.js
https://chat.openai.com/_next/static/xNQaMU5Ofw4qA7ejTH2hq/_buildManifest.js
https://chat.openai.com/_next/static/xNQaMU5Ofw4qA7ejTH2hq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/admin-77d4b3189e3e5aed.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-dabd66874a5b08d4.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-4357f9e8b141887a.js
```

### From `_next/static/chunks/webpack-10026ec020bb0a9d.js`

#### Archived

```
https://chat.openai.com/_next/static/css/d5831e1d899bc371.css
```

## 2023-06-27Z (`gO1nFWbowxDf-s-g3QRWc`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A number of minor changes to features around code interpreter, file upload/downloads, etc; including renaming some functions, and changing some backend API endpoint paths.
- `unpacked/_next/static/chunks/pages/_app.js`
  - Changed:
    - From: `(U.startInterpreterUpload = function (U, B, G) {`
    - To: `(U.processCodeInterpeterUpload = function (U, B, G) {`
  - ```js
    return (0, Q.Jh)(this, function (Y) {
      return [
        2,
        V.fetch(
          "".concat(tb, "/conversation/interpreter/process_upload"),
          {
            method: "POST",
            headers: (0, Z._)(
              { "Content-Type": "application/json" },
              V.getAuthHeader()
            ),
            body: JSON.stringify({
              conversation_id: U,
              file_id: B,
              file_name: G,
            }),
          }
        ).then(function (U) {
          if (U.status === t_.KF.Success) return U;
          throw new tv.gK(
            "Could not process code interpreter upload",
            void 0,
            "error_code" in U ? U.error_code : "unknown_error"
          );
        }),
      ];
    ```
    - Path in `.fetch` used to be `"".concat(tb, "/conversation/handle_upload_event")`
  - Changed:
    - From: `(U.downloadFromSandbox = function (U, B, G) {`
    - To: `(U.downloadFromInterpreter = function (U, B, G) {`
  - Changed:
    - From: `.concat(B, "/download_from_sandbox/v2?")`
    - To: `.concat(B, "/interpreter/download?")`
  - ```js
    ).then(function (U) {
      if (U.status === t_.KF.Success) return U;
      throw new tv.gK(
        "Could not download file from code interpreter",
        void 0,
        "error_code" in U ? U.error_code : "unknown_error"
      );
    }),
    ```
- `unpacked/_next/static/chunks/167.js`
  - Changed:
    - From: `return J.ZP.downloadFromSandbox(o, b, x)`
    - To: `return J.ZP.downloadFromInterpreter(l, y, b)`
  - ```js
    var r = n("default_download_link_error", { fileName: b });
    throw (
      (void 0 !== e.code && (r = n(e.code)), null == t || t(r), e)
    );
    ```
- `unpacked/_next/static/chunks/709.js`
  - Removed: `isStaticSharedThread: ev,`
    - And numerous other references to `isStaticSharedThread` across the code
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/167-121de668c4456907.js
https://chat.openai.com/_next/static/chunks/709-4ebfa2df2ea4eb5f.js
https://chat.openai.com/_next/static/chunks/pages/_app-da0c75d1d952dc0a.js
https://chat.openai.com/_next/static/chunks/webpack-4ad844c7c7c34654.js
https://chat.openai.com/_next/static/gO1nFWbowxDf-s-g3QRWc/_buildManifest.js
https://chat.openai.com/_next/static/gO1nFWbowxDf-s-g3QRWc/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-cdb49e3d53fb940a.js
```

## 2023-06-26Z (`F2_bAYHO9NlBwvfiLPAW3`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some of the diff was complicated as it seems some sections got moved around when the chunks were renamed (`97->167`, `734->709`), so not everything mentioned below may be strictly new.
  - New strings/descriptions for `WorkspaceOnboarding`
  - A bunch of new message types that seem like they're probably related to Browsing =
    - `"search"`, `"click"`, `"open_url"`, `"quote"`, `"quote_full"`, `"back"`, `"scroll"`, `"running"`, `"finished"`
  - Some changes to content under the 3 upcoming / unreleased feature flags
    - `business_seats`: 'Business' mode / Workspaces
    - `system_message2`: User Profile / Context
    - `files_list_ui`: File Upload / Embedding
  - Navigation labels prefix has been changed from `navigation` to `popoverNavigation` and `workspacePopoverNavigation`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - Chunk `97` renamed to `167`
  - Chunk `734` renamed to `709`
- `unpacked/_next/static/chunks/webpack.js`
  - Chunk `97` renamed to `167`
  - Chunk `734` renamed to `709`
- `unpacked/_next/static/chunks/709.js`
  - ```js
    ee = (0, p.vU)({
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
    ```
- `unpacked/_next/static/chunks/167.js`
  - ```js
    ((m = l || (l = {})).Search = "search"),
    (m.Click = "click"),
    (m.OpenUrl = "open_url"),
    (m.Quote = "quote"),
    (m.QuoteFull = "quote_full"),
    (m.Back = "back"),
    (m.Scroll = "scroll"),
    ((p = u || (u = {})).Running = "running"),
    (p.Finished = "finished"),
    ```
  - ```js
    function tc(e) {
      var t = e.onDeleteHistory,
        n = e.isConfirmingDeleteHistory,
        r = (0, Z.WS)(),
        a = (0, I.nR)(),
        i = (0, I.hz)(),
        s = (0, Y._O)().data,
        o = i.has("business_seats") && s.length > 1,
        d = (0, u.useCallback)(
          function () {
            r(S.s6.clickSidebarAccountPortalMenuItem),
              c.vm.openModal(c.B.AccountPortal);
          },
          [r]
        ),
        f = (0, eZ.Fl)().isPluginsAvailable;
      return (0, l.jsxs)(l.Fragment, {
        children: [
          o && (0, l.jsx)(ts.R, {}),
          (0, l.jsx)(ts.DM, {
            onDeleteHistory: t,
            isConfirmingDeleteHistory: n,
          }),
          !0 === a &&
            (0, l.jsxs)(ts.ZP, {
              onClick: d,
              children: [
                (0, l.jsx)(j.ZP, { icon: x.fzv }),
                (0, l.jsx)(b.Z, (0, h._)({}, tf.myPlan)),
              ],
            }),
          i.has("system_message2") &&
            (0, l.jsxs)(ts.ZP, {
              onClick: function () {
                return c.vm.openModal(c.B.UserContext);
              },
              children: [
                (0, l.jsx)(j.ZP, { icon: x.yK7 }),
                (0, l.jsx)(b.Z, (0, h._)({}, tf.myProfile)),
              ],
            }),
          i.has("files_list_ui") &&
            f &&
            (0, l.jsxs)(ts.ZP, {
              onClick: function () {
                return c.vm.openFilesModal();
              },
              children: [
                (0, l.jsx)(j.ZP, { icon: x.NOg }),
                (0, l.jsx)(b.Z, (0, h._)({}, tf.myFiles)),
              ],
            }),
        ],
      });
    ```
    - We can see 3 upcoming / unreleased feature flags here:
      - `business_seats`: 'Business' mode / Workspaces
      - `system_message2`: User Profile / Context
      - `files_list_ui`: File Upload / Embedding
  - ```js
    var tf = (0, y.vU)({
      myPlan: {
        id: "popoverNavigation.myPlan",
        defaultMessage: "My plan",
        description: "My plan menu item",
      },
      myProfile: {
        id: "popoverNavigation.myProfile",
        defaultMessage: "My profile",
        description: "Profile menu item",
      },
      myFiles: {
        id: "popoverNavigation.myFiles",
        defaultMessage: "My files",
        description: "Files menu item",
      },
    }),
    ```
  - ```js
    function tp(e) {
      var t = e.onDeleteHistory,
        n = e.isConfirmingDeleteHistory,
        r = (0, I.hz)(),
        a = (0, Y._O)().data,
        i = (0, Y.sN)(Y.F_.workspaceId),
        s = r.has("business_seats") && a.length > 1;
      return (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsxs)(tv, {
            href: "/admin?workspaceId=".concat(i),
            children: [
              (0, l.jsx)(j.ZP, { icon: th.Z }),
              (0, l.jsx)(b.Z, (0, h._)({}, tx.myWorkspaceSettings)),
            ],
          }),
          s && (0, l.jsx)(ts.R, {}),
          (0, l.jsx)(ts.DM, {
            onDeleteHistory: t,
            isConfirmingDeleteHistory: n,
          }),
        ],
      });
    }
    ```
  - ```js
    var tx = (0, y.vU)({
      myWorkspaceSettings: {
        id: "workspacePopoverNavigation.myWorkspaceSettings",
        defaultMessage: "Workspace settings",
        description: "Workspace settings menu item",
      },
    });
    ```
  - ```js
    m = c.has("business_seats") && g.length > 1;
    ```
  - Seemingly removed a bunch of labels, but I think this might be because the prefix changed from `navigation` to `popoverNavigation` (see above) / `workspacePopoverNavigation` (see below)
    - `navigation.confirmClearConversations`
    - `navigation.clearConversations`
    - `navigation.myWorkspaceSettings`
    - `navigation.myPlan`
    - `navigation.myProfile`
    - `navigation.myFiles`
  - ```js
    i.has("files_list_ui") && en && (0, l.jsx)(ek, {}),
    i.has("system_message2") && (0, l.jsx)(te, {}),
    i.has("business_seats") && (0, l.jsx)(er, { onResetThread: n }),
    ```
  - ```js
    M = (0, d.vU)({
      confirmClearConversations: {
        id: "workspacePopoverNavigation.confirmClearConversations",
        defaultMessage: "Confirm clear conversations",
        description: "Confirmation text for clearing conversations",
      },
      clearConversations: {
        id: "workspacePopoverNavigation.clearConversations",
        defaultMessage: "Clear conversations",
        description: "Clear conversations menu item",
      },
    });
    ```
  - ```js
    hasUserEditableContextFlag:
      null !== (v = t.has_user_editable_context) &&
      void 0 !== v &&
      v,
    ```
  - ```js
    var t = T(function (t) {
      var n,
        r,
        a = S.resolveThreadId(e);
      return null === (n = t.threads[a]) || void 0 === n
        ? void 0
        : null === (r = n.initialThreadData) || void 0 === r
        ? void 0
        : r.hasUserEditableContextFlag;
    });
    return null != Y(e) || !!t;
    ```
  - ```js
    getUserSettingsFromFeatures: function (e, t) {
      return Object.entries(e).reduce(function (e, n) {
        var r = (0, u._)(n, 2),
          a = r[0],
          i = r[1],
          d = x[a],
          c = !1;
        return ((("isBrowsingEnabled" === d && t.isBrowsingAvailable) ||
          ("isCodeInterpreterEnabled" === d &&
            t.isCodeInterpreterAvailable) ||
          ("isPluginsEnabled" === d && t.isPluginsAvailable)) &&
          (c = i),
        d)
          ? (0, l._)((0, o._)({}, e), (0, s._)({}, d, c))
          : e;
    ```
  - ```js
    ((r = a || (a = {}))[(r.Text = 0)] = "Text"),
      (r[(r.Browsing = 1)] = "Browsing"),
      (r[(r.BrowseTool = 2)] = "BrowseTool"),
      (r[(r.Code = 3)] = "Code"),
      (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
      (r[(r.MultimodalText = 5)] = "MultimodalText"),
      (r[(r.Plugin = 6)] = "Plugin"),
      (r[(r.PluginTool = 7)] = "PluginTool"),
      (r[(r.Unknown = 8)] = "Unknown");
    ```
  - ```js
    if (e.author.role === s.uU.Assistant) {
      var t = v(e.recipient);
      if (
        "browser" === e.recipient ||
        "browser_one_box" === e.recipient ||
        (null != t && o.includes(t.pluginNamespace))
      )
        return a.Browsing;
      if ("python" === e.recipient) return a.Code;
      if (null != t) return a.Plugin;
      if ("browsing_team" === e.recipient) return a.Text;
    } else if (e.author.role === s.uU.Tool) {
      var n = v(e.author.name);
      if (
        "browser" === e.author.name ||
        "browser_one_box" === e.author.name ||
        "browsing_team" === e.author.name ||
        (null != n && o.includes(n.pluginNamespace))
      )
        return a.BrowseTool;
      if (e.content.content_type === s.PX.ExecutionOutput)
        return a.CodeExecutionOutput;
      if (null != n || "plugin_service" === e.author.name)
        return a.PluginTool;
    }
    return e.content.content_type === s.PX.Text ||
      e.content.content_type === s.PX.MultimodalText
      ? a.Text
      : a.Unknown;
    ```
  - ```js
    function v(e) {
      if (null == e || !e.includes(".")) return null;
      var t = (0, i._)(e.split("."), 2);
      return { pluginNamespace: t[0], pluginFunctionName: t[1] };
    }
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/chunks/pages/admin.js`
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/167-f9af0280d3150ee2.js
https://chat.openai.com/_next/static/chunks/709-2d4517948ff4a094.js
https://chat.openai.com/_next/static/chunks/pages/_app-79ed905692efddfc.js
https://chat.openai.com/_next/static/chunks/pages/index-cd815c007b0cc93d.js
https://chat.openai.com/_next/static/chunks/webpack-3b8f9d7d8285e5db.js
https://chat.openai.com/_next/static/F2_bAYHO9NlBwvfiLPAW3/_buildManifest.js
https://chat.openai.com/_next/static/F2_bAYHO9NlBwvfiLPAW3/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/admin-36c3d4673e7f8c0a.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-1ec82c90f4f41cbf.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-49400585bd1b7bdf.js
```

### From `_next/static/chunks/webpack-3b8f9d7d8285e5db.js`

#### Archived

```
https://chat.openai.com/_next/static/css/867145de23deaf27.css
```

## 2023-06-25Z (`5oNaFu0A1xunXHmq5l70K`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A whole bunch of changes related to 'user context' (`userContextModal`) and 'embedding files' (`filesModal`)
  - **Twitter thread:** TODO
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    new tv.Q0(tt, "fetch_error_5XX", null != te ? te : {}))
    ```
  - ```js
    new tv.Q0(t_, "fetch_error_4XX", null != ts ? ts : {}))
    ```
  - ```js
    case 5:
      if ((tn = Q.sent()).status === t_.KF.Success)
        return [
          2,
          {
            file_id: Z,
            upload_url: tn.download_url,
            status: t_.KF.Success,
          },
        ];
    ```
  - ```js
    (U.getFileInfo = function (U, B) {
      var G = this;
      return (0, Y._)(function () {
        return (0, Q.Jh)(this, function (Y) {
          return [
            2,
            G.fetch("".concat(tb, "/files/").concat(U), {
              method: "GET",
              headers: (0, Z._)({}, G.getAuthHeader(B)),
            }),
          ];
        });
      })();
    }),
    ```
- `unpacked/_next/static/chunks/97.js`
  - ```js
    successfullyEmbeddedFileTooltip: {
      id: "filesModal.successfullyEmbeddedFileTooltip",
      defaultMessage: "Successfully processed file for searching",
      description: "Tooltip for the successfully embedded file icon",
    },
    failedToEmbedFileTooltip: {
      id: "filesModal.failedToEmbedFileTooltip",
      defaultMessage:
        "Failed to process file for searching,\nplease try deleting and re-uploading",
      description: "Tooltip for the failed to embed file icon",
    },
    embeddingFileTooltip: {
      id: "filesModal.embeddingFileTooltip",
      defaultMessage: "Processing file for searching...",
      description: "Tooltip for the embedding file icon",
    },
    ```
  - ```js
    s = e.downloadedFiles,
    d = e.setDownloadedFiles,
    ```
  - ```js
    switch (e.label) {
      case 0:
        if (!o) return [2];
        return [4, ej(o.accessToken, t, h)];
      case 1:
        return e.sent(), d((0, es._)(s).concat([t.id])), [2];
    }
    ```
  - A chunk of code that renders the above 'embedded file' messages
    - ```js
      // ..snip..
      t.retrieval_index_status === ed.Xf.Success
        ? (0, l.jsx)(eM, {
            label: h.formatMessage(
              ew.successfullyEmbeddedFileTooltip
            ),
            children: (0, l.jsx)(k.ZP, {
              icon: x._rq,
              size: "xsmall",
              className: "text-green-600",
            }),
          })
        : t.retrieval_index_status === ed.Xf.Failed
        ? (0, l.jsx)(eM, {
            label: h.formatMessage(ew.failedToEmbedFileTooltip),
            children: (0, l.jsx)(k.ZP, {
              icon: x.$Rx,
              size: "xsmall",
              className: "text-red-500",
            }),
          })
        : (0, l.jsx)(eM, {
            label: h.formatMessage(ew.embeddingFileTooltip),
            children: (0, l.jsx)(eg.Z, {
              className: "text-gray-500",
            }),
          }),
      // ..snip..
      ```
  - A chunk of code that `switch`es on `n.label` and does various things seemingly related to files
    - ```js
      switch (n.label) {
        // ..snip..
        case 1:
          return (
            n.trys.push([1, 6, , 7]),
            [4, C.ZP.getFileInfo(e, Z.accessToken)]
          );
        // ..snip..
      }
      // ..snip..
      ```
  - ```js
    (e = I.filter(function (e) {
      return e.use_case === ed.Ei.MyFiles;
    })),
    ```
  - `userContextModal.aboutYouHelpText` changed
    - From: `"What should ChatGPT know about you to provide better responses?"`
    - To: `"What would you like ChatGPT to know about you to provide better responses?"`
  - `userContextModal.title` changed
    - From: `"Help ChatGPT get to know you better"`
    - To: `"Help ChatGPT provide better responses"`
  - ```js
    confirmCloseTitle: {
      id: "userContextModal.confirmCloseTitle",
      defaultMessage: "You have unsaved changes.",
      description: "title for confirm close modal",
    },
    ```
  - ```js
    confirmCloseBody: {
      id: "userContextModal.confirmCloseBody",
      defaultMessage:
        "Are you sure you want to exit? Any changes you made will be permanently lost.",
      description: "confirm close modal",
    },
    ```
  - ```js
    confirmCloseCancel: {
      id: "userContextModal.confirmCloseCancel",
      defaultMessage: "Back",
      description: "cancel button for confirm close modal",
    },
    ```
  - ```js
    confirmCloseOk: {
      id: "userContextModal.confirmCloseOk",
      defaultMessage: "Exit",
      description: "ok button for confirm close modal",
    },
    ```
  - ```js
    e9 = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return ["userContext", e];
    },
    e6 = { aboutUserMessage: void 0, aboutModelMessage: void 0 };
    ```
  - ```js
    x = (0, c.tN)(function (e) {
      return e.activeModals.has(c.B.UserContext);
    }),
    ```
  - ```js
    y =
      ((e = (0, _.hz)()),
      (t = (0, J.kP)().session),
      (0, ex.a)(
        e9(null == t ? void 0 : t.accessToken),
        function () {
          return C.ZP.getUserSystemMessage(
            (null == t ? void 0 : t.accessToken) || ""
          ).catch(function () {
            ep.m.danger("Failed to get your system instructions");
          });
        },
        {
          enabled: !!(
            x &&
            !v &&
            (null == t ? void 0 : t.accessToken) &&
            e.has("system_message2")
          ),
          select: function (e) {
            var t, n;
            return {
              aboutUserMessage:
                null !==
                  (t = null == e ? void 0 : e.about_user_message) &&
                void 0 !== t
                  ? t
                  : "",
              aboutModelMessage:
                null !==
                  (n = null == e ? void 0 : e.about_model_message) &&
                void 0 !== n
                  ? n
                  : "",
            };
          },
    ```
  - ```js
    (0, el.D)({
      mutationFn: function (e) {
        var t = e.userContext;
        return C.ZP.createOrUpdateUserSystemMessage(
          (null == i ? void 0 : i.accessToken) || "",
          t
        );
      },
      onSettled: function () {
        s.invalidateQueries({
          queryKey: e9(null == o ? void 0 : o.accessToken),
        });
      },
      onSuccess: r,
      onError: a,
    })),
    ```
  - ```js
    z({
      userContext: {
        aboutUserMessage:
          null !== (e = I.aboutUserMessage) && void 0 !== e
            ? e
            : "",
        aboutModelMessage:
          null !== (t = I.aboutModelMessage) && void 0 !== t
            ? t
            : "",
      },
    }),
    ```
  - A whole lot of code related to `"user-context"`
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/pages/account/upgrade.js`
  - `unpacked/_next/static/chunks/734.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-624ee145d8611d2b.js
https://chat.openai.com/_next/static/chunks/97-dc9dfe30bc664184.js
https://chat.openai.com/_next/static/chunks/pages/_app-de11afa369c8a1b8.js
https://chat.openai.com/_next/static/chunks/webpack-30b12cca34e8b5ae.js
https://chat.openai.com/_next/static/5oNaFu0A1xunXHmq5l70K/_buildManifest.js
https://chat.openai.com/_next/static/5oNaFu0A1xunXHmq5l70K/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-52d8c653cac049bd.js
```

## 2023-06-24Z (`49Xsx1Peja-HtEBNEMSwO`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some changes around `jupyterMessage` (`CodeExecutionOutputMessage`) and `vision` (`VisionExamplePicker`), etc; changes to flags that sound like code interpreter might be getting ready for a wider release at some point; a few new svg's (mountain with sun, wand with sparkles)
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added an svg of a ?mountain with a sun?
- `unpacked/_next/static/chunks/bd26816a.js`
  - Added an svg of a magic wand with some sparkles
- `unpacked/_next/static/css/miniCssF.css`
  - Some changes relating to markdown list formatting and a `slideUpAndFade` animation, plus a few other small things
- `unpacked/_next/static/chunks/734.js`
  - ```js
    return (0, y.jsx)("div", { className: "empty:hidden", children: (0, y.jsx)(eI, { jupyterMessage: e }) }, t);
    ```
  - ```js
    function eI(e) {
      var t = e.jupyterMessage;
      if ((0, w.useContext)(A.gB))
        return (0, y.jsxs)("div", {
          className:
            "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
          children: [
            (0, y.jsx)(eu.ZP, { icon: C.LFN, size: "medium" }),
            (0, y.jsx)(_.Z, (0, x._)({}, eS.imageNotSupported)),
          ],
        });
      if (null != t.image_payload)
        return (0, y.jsx)("img", {
          src: "data:image/png;base64,".concat(t.image_payload),
        });
      if (null != t.image_url) {
        var n = (0, ew.Iy)(t.image_url);
        return (0, y.jsx)(eN, { fileId: n });
      }
      return null;
    }
    ```
  - ```js
    imageNotSupported: {
      id: "CodeExecutionOutputMessage.imageNotSupported",
      defaultMessage: "Image output is not supported in a shared chat",
      description:
        "Message shown when an image is output in a shared thread",
    },
    ```
  - Lots of other code changes related to 'vision' in a similar section of this file..
    - ```js
      function nF() {
        return (0, ek.a)(
          ["visionContent"],
          (0, em._)(function () {
            return (0, ef.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    ea.ZP.getContent("vision").catch(function () {
                      return (
                        nI.m.danger("Failed to load content"),
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
      ```
    - ```js
      var nU = (0, M.vU)({
        tryAnExample: {
          id: "VisionExamplePicker.tryAnExample",
          defaultMessage: "Try an example",
          description: "Label for examples popover",
        },
      }),
      nO = n(12063),
      nq = "oai/apps/hasSeenVisionOnboarding";
      ```
    - etc
- `unpacked/_next/static/chunks/97.js`
  - ```js
    M = "_account",
    ```
  - ```js
    (N.setCurrentWorkspace(t),
        (0, u.setCookie)(M, "personal" === t.structure ? "" : t.id))
      : (0, u.setCookie)(M, "");
    ```
  - ```js
    downloadUnavailable: {
      id: "SandboxDownload.downloadUnavailable",
      defaultMessage: "File download not supported in a shared chat",
      description:
        "Tooltip label indicating file is unavailable to download for shared conversations",
    },
    ```
  - ```js
    disabled: t.has("code_interpreter_disabled"),
    ```
  - ```js
    isCodeInterpreterAvailable:
      t.has("code_interpreter_available") || t.has("tools2"),
    ```
  - Removed
    - ```js
      isLegacyToolsUser:
        (t.has("tools") && t.has("browsing_available")) ||
        (t.has("tools3") && t.has("plugins_available")),
      isNewToolsUser:
        (t.has("browsing_available") && !t.has("tools")) ||
        (t.has("plugins_available") && !t.has("tools3")),
      ```
- The following files had nothing much of note:
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/pages/account/upgrade.js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-8e0c25058c95ce44.js
https://chat.openai.com/_next/static/chunks/97-3d9fd5bcf0fd6a21.js
https://chat.openai.com/_next/static/chunks/bd26816a-7ae54dd3357d90b4.js
https://chat.openai.com/_next/static/chunks/pages/_app-59d846923f87d462.js
https://chat.openai.com/_next/static/chunks/webpack-4010643a9c03835f.js
https://chat.openai.com/_next/static/49Xsx1Peja-HtEBNEMSwO/_buildManifest.js
https://chat.openai.com/_next/static/49Xsx1Peja-HtEBNEMSwO/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-63dd9b63394db521.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-f603afd8962d8951.js
```

### From `_next/static/chunks/webpack-4010643a9c03835f.js`

#### Archived

```
https://chat.openai.com/_next/static/css/1a5339f5692fe49a.css
```

## 2023-06-23Z (`6tvBacVQggsxEa50Su7EW`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - There seems to be a new `GET /api/content/*` endpoint
    - There is at least 1 known usage of this currently: `GET /api/content/vision`
  - References to a seemingly new feature: `visionContent`, that uses a lab beaker and crossed out face svg's (upcoming/unreleased feature?)
  - Refinement of error messages relating to `fileUpload` (another upcoming/unreleased feature?)
  - **Twitter thread:** https://twitter.com/_devalias/status/1672097784336617477
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New chunk `882` added: `static/chunks/97c719b8-881a2d42a6930388.js`
- `unpacked/_next/static/chunks/webpack.js`
  - Despite the large amount of diff churn here, the main changes seem to be:
    - Chunk `97` hash changed to `3a8e822067f27ef6`
    - Chunk `734` hash changed to `5b153bb5492b0994`
    - Chunk `798` with name prefix `68a27ff6` hash changed to `c22fcee210a6c939`
    - New chunk added `882` with name prefix `97c719b8` hash `881a2d42a6930388`
    - CSS hash changed to `de85cdd511acf762`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added `U.getContent` function:
    - ```js
      B.fetch("/api/content/".concat(U), {
        method: "GET",
        headers: (0, Z._)({}, B.getAuthHeader()),
      }),
      ```
- `unpacked/_next/static/chunks/68a27ff6.js`
  - Added an svg of a lab beaker containing some liquid
- `unpacked/_next/static/chunks/97c719b8.js`
  - Added an svg of a face with a line crossed through it
- `unpacked/_next/static/chunks/734.js`
  - `nE = "oai/apps/hasSeenVisionOnboarding";`
    - Lots of content around this section of the diff relating to `visionContent`..
    - `var nB = { beaker: ep.uv5, face: nA.vm9 };`
      - There's the usage of the beaker (`68a27ff6.js`) and face (`97c719b8.js`) svg's included in some of the other changed chunks
    - `ea.ZP.getContent("vision").catch(function () {`
      - Looking at the definition of `getContent` above, we can see that this will access an endpoint of `GET /api/content/vision`
    - Some refinement/cleanup of error messages around file upload/download/etc to follow their standard patterns
      - ```js
        var t = o("default_create_entry_error", {
          fileName: null == i ? void 0 : i.name,
        });
        ```
      - ```js
        void 0 !== e.code && (t = o(e.code)),
          nN.m.danger(t, nI),
        ```
      - ```js
        ea.ZP.getFileDownloadLink(p).catch(function (e) {
          var t = S("default_download_link_error", {
            fileName: null == i ? void 0 : i.name,
          });
          throw (
            (void 0 !== e.code && (t = S(e.code)),
            nN.m.danger(t, nI),
            null == to || to(null == i ? void 0 : i.name),
            new ej.gK(t, void 0, e.code))
          );
        }),
        ```
      - ```js
        ea.ZP.getFileDownloadLink(G).catch(function (e) {
          var t = X("default_download_link_error", {
            fileName: null == O ? void 0 : O.name,
          });
        ```
      - etc
- `unpacked/_next/static/chunks/97.js`
  - Changes within `25094: function (e, t, n) {`
    - Added a number of error messages related to handling of `file-service://`
      - ```js
        var u = (0, n(3001).vU)({
          defaultCreateEntryError: {
            id: "fileUpload.defaultCreateEntryError",
            defaultMessage: "Unable to upload file",
            description: "Error message when file upload fails",
          },
          defaultDownloadLinkError: {
            id: "fileUpload.defaultDownloadLinkError",
            defaultMessage: "Failed to get upload status for {fileName}",
            description: "Error message when file download link fails",
          },
          unknownError: {
            id: "fileUpload.unknownError",
            defaultMessage: "Unknown error occurred",
            description: "Error message when file upload fails",
          },
          fileTooLarge: {
            id: "fileUpload.fileTooLarge",
            defaultMessage: "File is too large",
            description: "Error message when file is too large to upload",
          },
          overUserQuota: {
            id: "fileUpload.overUserQuota",
            defaultMessage: "User quota exceeded",
            description:
              "Error message when user storage space (quote) has been exceeded",
          },
          fileNotFound: {
            id: "fileUpload.fileNotFound",
            defaultMessage: "File not found",
            description: "Error message when file was not found",
          },
          fileTimedOut: {
            id: "fileUpload.fileTimedOut",
            defaultMessage: "File upload timed out. Please try again.",
            description: "Error message when file upload timed out",
          },
          codeInterpreterSessionTimeout: {
            id: "fileUpload.codeInterpreterSessionTimeout",
            defaultMessage: "Code interpreter session expired",
            description: "Error message when code interpreter session expired",
          },
        });
        ```
- The following files had nothing much of note:
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`
  - `unpacked/_next/static/css/miniCssF.css`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/68a27ff6-c22fcee210a6c939.js
https://chat.openai.com/_next/static/chunks/734-5b153bb5492b0994.js
https://chat.openai.com/_next/static/chunks/97-3a8e822067f27ef6.js
https://chat.openai.com/_next/static/chunks/97c719b8-881a2d42a6930388.js
https://chat.openai.com/_next/static/chunks/pages/_app-165e157a34a00cb3.js
https://chat.openai.com/_next/static/chunks/pages/index-8859e7d8d8d02e0a.js
https://chat.openai.com/_next/static/chunks/webpack-efad5f8368f3cf1b.js
https://chat.openai.com/_next/static/6tvBacVQggsxEa50Su7EW/_buildManifest.js
https://chat.openai.com/_next/static/6tvBacVQggsxEa50Su7EW/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-f8e28b466b1a7b05.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-18ed836654c46a16.js
```

### From `_next/static/chunks/webpack-efad5f8368f3cf1b.js`

#### Archived

```
https://chat.openai.com/_next/static/css/de85cdd511acf762.css
```

## 2023-06-22Z (`4OtK2GZhlDGpQWluC3GLQ`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - There seem to be updates related to custom user contexts, some disclaimers around shared links, and a new oauth redirect endpoint/flow for plugin auth
  - **Twitter thread:** https://twitter.com/_devalias/status/1672097784336617477
- `unpacked/_next/static/chunks/734.js`
  - `if (m.has("new_plugin_oauth_endpoint"))`
  - `if (g.has("new_plugin_oauth_endpoint"))`
  - ```js
    userContextCustomProfileDisclaimer: {
      id: "sharedConversation.userContextCustomProfileDisclaimer",
      defaultMessage:
        "The creator of this chat is using a custom profile, which can meaningfully change how the model responds.",
      description:
        "Disclaimer about our lack of support for custom profiles with shared links",
    },
    userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
      id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
      defaultMessage:
        "The creator of this chat is using a custom profile, which can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
      description:
        "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
    },
    ```
  - ```js
    shouldShowCodeInterpreterDisclaimer: o,
    shouldShowUserContextCustomProfileDisclaimer: s,
    ```
  - ```js
    var t = e.shouldShowCodeInterpreterDisclaimer,
    n = e.shouldShowUserContextCustomProfileDisclaimer;
    ```
  - ```js
    userContextCustomProfileDisclaimer: {
      id: "sharingModal.userContextCustomProfileDisclaimer",
      defaultMessage:
        "Your custom profile data won’t be shared with recipients.",
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
    ```
  - ```js
    shouldShowCodeInterpreterDisclaimer: G,
    shouldShowUserContextCustomProfileDisclaimer: W,
    ```
  - ```js
    var t = e.shouldShowCodeInterpreterDisclaimer,
    n = e.shouldShowUserContextCustomProfileDisclaimer;
    ```
- `unpacked/_next/static/chunks/97.js`
  - ```js
    function v() {
      return (v = (0, r._)(function (e, t) {
        var n, r;
        return (0, o.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              return (
                (n = ""
                  .concat(window.location.origin, "/aip/")
                  .concat(e.id, "/oauth/callback")),
                [4, c.ZP.pluginOauthRedirect(e.id, n, t)]
              );
            case 1:
              return (
                (r = a.sent()), (window.location.href = r.redirect_uri), [2]
              );
          }
        });
      })).apply(this, arguments);
    }
    ```
  - ```js
    (null === (e = n.message.metadata) || void 0 === e
      ? void 0
      : e.is_user_system_message)
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (U.pluginOauthRedirect = function (U, B, G) {
      var Y = new URLSearchParams({ redirect_uri: B });
      return this.fetch(
        ""
          .concat(tE, "/aip/p/")
          .concat(U, "/user-settings/oauth/redirect?")
    ```
    - Changed from `/user-settings/oauth/callback?` to `/user-settings/oauth/redirect?` and added `redirect_uri` to the URL params
  - ```js
    (U.pluginOauthCallback = function (U, B, G, Y, V) {
      var J = new URLSearchParams({ code: B, redirect_uri: G });
      return (
        null != Y && J.append("state", Y),
        this.fetch(
          ""
            .concat(tE, "/aip/p/")
            .concat(U, "/user-settings/oauth/callback?")
            .concat(J),
          {
            method: "GET",
            headers: (0, Z._)(
              { "Content-Type": "application/json" },
              this.getAuthHeader(V)
            ),
          }
        )
      );
    }),
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/aip/[pluginId]/oauth/callback.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-83a5aa60b258146b.js
https://chat.openai.com/_next/static/chunks/97-f3a02ec205a1c717.js
https://chat.openai.com/_next/static/chunks/pages/_app-c44676992fc5202a.js
https://chat.openai.com/_next/static/chunks/webpack-b5b8e60204a3dd72.js
https://chat.openai.com/_next/static/4OtK2GZhlDGpQWluC3GLQ/_buildManifest.js
https://chat.openai.com/_next/static/4OtK2GZhlDGpQWluC3GLQ/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-46435bdb0df161ef.js
```

### From `_next/static/chunks/webpack-b5b8e60204a3dd72.js`

#### Archived

```
https://chat.openai.com/_next/static/css/f7d82a9bec741d6c.css
```

## 2023-06-22Z (`CTxpiEb45oE7hUCOWm4Jq`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- `unpacked/_next/static/chunks/97.js`
  - `W = (0, K.sN)(K.F_.isBusinessWorkspace),`
  - `k = v.has("business_seats") && C.length > 1,`
  - ```js
    (0, l.jsxs)(tp, {
      href: "/admin?workspaceId=".concat(p),
      children: [
        (0, l.jsx)(M.ZP, { icon: to.Z }),
        (0, l.jsx)(b.Z, (0, h._)({}, tC.myWorkspaceSettings)),
      ],
    }),
    ```
  - ```js
    g.has("files_list_ui") && K && (0, l.jsx)(e_, {}),
    g.has("system_message2") && (0, l.jsx)(e9, {}),
    ```
    - These weren't newly added in this release, but I hadn't called them out before
  - Added function: `870: function (e, t, n) {`
    - Not sure what this is doing, but it has keys in it like `Root`, `Trigger`, `Portal`, `Content`, `Item`, etc
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/734.js`
  - `unpacked/_next/static/chunks/pages/account/upgrade.js`
  - `unpacked/_next/static/chunks/pages/admin.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/_app-a444a84230b84b44.js
https://chat.openai.com/_next/static/chunks/webpack-56ce76d9c59bf528.js
https://chat.openai.com/_next/static/CTxpiEb45oE7hUCOWm4Jq/_buildManifest.js
https://chat.openai.com/_next/static/CTxpiEb45oE7hUCOWm4Jq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-c9a43325ee64d37c.js
https://chat.openai.com/_next/static/chunks/97-46cf8196eb1aa6a0.js
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-820ccb7a4eab8bde.js
https://chat.openai.com/_next/static/chunks/pages/admin-04e18953a86ba790.js
```

### From `_next/static/chunks/webpack-56ce76d9c59bf528.js`

#### Archived

```
https://chat.openai.com/_next/static/css/86fd2ba616a5af70.css
```

## 2023-06-22Z (`kwYJPc99Lx-XLUrLes-Se`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- `unpacked/_next/static/chunks/68a27ff6.js`
  - An 'info icon' svg was added
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added a `markFileUploadFailed` function
    - ```js
      G.fetch(
        "".concat(tE, "/files/").concat(U, "/upload-failed"),
        {
          method: "POST",
          headers: (0, Z._)({}, G.getAuthHeader()),
          body: JSON.stringify({ error: B }),
        }
      )
      ```
- `unpacked/_next/static/chunks/734.js`
  - Text changed:
    - From: `Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.`
    - To: `Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.`
- `unpacked/_next/static/chunks/97.js`
  - Added:
    - ```js
      (f.TetherBrowsingDisplay = "tether_browsing_display"),
      (f.TetherQuote = "tether_quote"),
      ```
  - Added strings for:
    - `userContextModal.ok`: `"OK"`
    - `userContextModal.messageLimitError`: `"Please limit your responses to {limit} characters or less."`
    - `userContextModal.showTips`: `"Show tips"`
    - `userContextModal.hideTips`: `"Hide tips"`
  - `Z.getTree(e).getUserContext()` / `t.getUserContext = function ()`
  - ```js
    "tether_browsing_display" === n ||
    "tether_quote" === n
    ```

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/68a27ff6-276464568c486afd.js
https://chat.openai.com/_next/static/chunks/734-906e48db04732907.js
https://chat.openai.com/_next/static/chunks/97-3e768f0e33305034.js
https://chat.openai.com/_next/static/chunks/pages/_app-408f9162aa0da5db.js
https://chat.openai.com/_next/static/chunks/webpack-e726f3523118b318.js
https://chat.openai.com/_next/static/kwYJPc99Lx-XLUrLes-Se/_buildManifest.js
https://chat.openai.com/_next/static/kwYJPc99Lx-XLUrLes-Se/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-e726f3523118b318.js`

#### Archived

```
https://chat.openai.com/_next/static/css/badc091b46b76790.css
```

## 2023-06-21Z (`9rHv4XACEoIItIhKMAq4_`)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/2802bd5f-15923fb46be55b45.js
https://chat.openai.com/_next/static/chunks/webpack-4ea24703f0cd02d1.js
https://chat.openai.com/_next/static/9rHv4XACEoIItIhKMAq4_/_buildManifest.js
https://chat.openai.com/_next/static/9rHv4XACEoIItIhKMAq4_/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/734-e4b26f97df757a42.js
https://chat.openai.com/_next/static/chunks/pages/_app-e4816c996c959118.js
```

### From Build Manifest

N/A

## 2023-06-18Z (`2zx-gqs4DHnXCij8pMcM3`)

### Notes

- Chunks added:
  - `_next/static/chunks/2802bd5f-c955b1c4ddd1fafa.js` (aka: `741`)
- Chunks renamed:
  - `_next/static/chunks/692-a1e5a91f2cd1f1d0.js` -> `_next/static/chunks/706-e33bcf27ab9ae69b.js`
  - `_next/static/chunks/434-6f11f27f549beeab.js` -> `_next/static/chunks/724-7e5ae5baa21b3987.js`
  - `_next/static/chunks/361-60e0aba55566c224.js` -> `_next/static/chunks/778-70237646364794cd.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/webpack-903914f4d31f626d.js
https://chat.openai.com/_next/static/chunks/pages/_app-8a1a6cb86aab622f.js
https://chat.openai.com/_next/static/chunks/2802bd5f-c955b1c4ddd1fafa.js
https://chat.openai.com/_next/static/chunks/706-e33bcf27ab9ae69b.js
https://chat.openai.com/_next/static/chunks/724-7e5ae5baa21b3987.js
https://chat.openai.com/_next/static/chunks/97-f77b35921b7168e1.js
https://chat.openai.com/_next/static/chunks/734-33a2d229b27343b9.js
https://chat.openai.com/_next/static/chunks/pages/index-6081460d01aa4d00.js
https://chat.openai.com/_next/static/2zx-gqs4DHnXCij8pMcM3/_buildManifest.js
https://chat.openai.com/_next/static/2zx-gqs4DHnXCij8pMcM3/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/778-70237646364794cd.js
https://chat.openai.com/_next/static/chunks/pages/admin-85c2b8121aef57bc.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-9622de1930d02aae.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-b2e331698a452053.js
```

### From `_next/static/chunks/webpack-903914f4d31f626d.js`

#### Archived

```
https://chat.openai.com/_next/static/css/dc06f43874f6f09a.css
```

## 2023-06-16Z (`Wnd5NrsJwJ8L-68NTfmnl`)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/Wnd5NrsJwJ8L-68NTfmnl/_buildManifest.js
https://chat.openai.com/_next/static/Wnd5NrsJwJ8L-68NTfmnl/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/webpack-9a9034f5af46d16b.js
https://chat.openai.com/_next/static/chunks/pages/_app-81622e641d018d56.js
https://chat.openai.com/_next/static/chunks/97-f1d855e2440b1441.js
https://chat.openai.com/_next/static/chunks/734-242266db87afdbaa.js
```

### From Build Manifest

#### Missing

```
https://chat.openai.com/_next/static/chunks/734-242266db87afdbaa.js
https://chat.openai.com/_next/static/chunks/97-f1d855e2440b1441.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-f0ed420c4581aac4.js
```

## 2023-06-15Z (`OYOAZ1aqhcJ0ghEfSRnPf`)

### Not From Build Manifest

#### Missing

```
https://chat.openai.com/_next/static/chunks/webpack-811addf93867c009.js
https://chat.openai.com/_next/static/chunks/pages/_app-b505480c5fdf1ff2.js
https://chat.openai.com/_next/static/chunks/97-864d9cafbfb4c1dc.js
https://chat.openai.com/_next/static/chunks/734-03d9df820e6eda51.js
https://chat.openai.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_buildManifest.js
https://chat.openai.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_ssgManifest.js
```

## 2023-06-15 (`Sz5I5M8XqNP7c6HNKaN0U`) (or thereabouts..)

### Not From Build Manifest

```
https://chat.openai.com/_next/static/chunks/webpack-38f4f99a26e93577.js
https://chat.openai.com/_next/static/chunks/pages/_app-af7a10d1c668b26a.js
https://chat.openai.com/_next/static/Sz5I5M8XqNP7c6HNKaN0U/_buildManifest.js
https://chat.openai.com/_next/static/Sz5I5M8XqNP7c6HNKaN0U/_ssgManifest.js
```

### From Build Manifest

```
https://chat.openai.com/_next/static/chunks/734-2c7c6bff3bb729e8.js
https://chat.openai.com/_next/static/chunks/97-a81c56d0288837cb.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-669339ba2153c0d5.js
```

### From `_next/static/chunks/webpack-38f4f99a26e93577.js`

#### Missing

```
https://chat.openai.com/_next/static/css/45bab00d63da782d.css
```

## 2023-06-14 (`a3Jc7aP-UMfeR9s4-iLvW`) (or thereabouts.. might include stuff from earlier too)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
https://chat.openai.com/_next/static/chunks/webpack-1eeae5c7aedde088.js
https://chat.openai.com/_next/static/chunks/framework-e23f030857e925d4.js
https://chat.openai.com/_next/static/chunks/main-35ce5aa6f4f7a906.js
https://chat.openai.com/_next/static/a3Jc7aP-UMfeR9s4-iLvW/_buildManifest.js
https://chat.openai.com/_next/static/a3Jc7aP-UMfeR9s4-iLvW/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/pages/_app-0df67bf7d9e6e732.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/012ff928-bcfa62e3ac82441c.js
https://chat.openai.com/_next/static/chunks/1f110208-cda4026aba1898fb.js
https://chat.openai.com/_next/static/chunks/259-c6320349d8f3ff4a.js
https://chat.openai.com/_next/static/chunks/361-60e0aba55566c224.js
https://chat.openai.com/_next/static/chunks/434-6f11f27f549beeab.js
https://chat.openai.com/_next/static/chunks/68a27ff6-a453fd719d5bf767.js
https://chat.openai.com/_next/static/chunks/692-a1e5a91f2cd1f1d0.js
https://chat.openai.com/_next/static/chunks/734-30d5c00c7bdf11c1.js
https://chat.openai.com/_next/static/chunks/bd26816a-981e1ddc27b37cc6.js
https://chat.openai.com/_next/static/chunks/pages/_error-433a1bbdb23dd341.js
https://chat.openai.com/_next/static/chunks/pages/account/cancel-63cd9f049103272b.js
https://chat.openai.com/_next/static/chunks/pages/account/manage-6ac6d4f0510ced68.js
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-f8e411774c23059a.js
https://chat.openai.com/_next/static/chunks/pages/admin-5f0f6fb64c99e55b.js
https://chat.openai.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-389963a554a230d2.js
https://chat.openai.com/_next/static/chunks/pages/auth/error-c7951a77c5f4547f.js
https://chat.openai.com/_next/static/chunks/pages/auth/ext_callback-927659025ea31258.js
https://chat.openai.com/_next/static/chunks/pages/auth/ext_callback_refresh-478ebccc4055d75b.js
https://chat.openai.com/_next/static/chunks/pages/auth/login-84359b8c2a70b29c.js
https://chat.openai.com/_next/static/chunks/pages/auth/logout-47cc26eb7b585e67.js
https://chat.openai.com/_next/static/chunks/pages/auth/mocked_login-d5fbb97bc5d39e59.js
https://chat.openai.com/_next/static/chunks/pages/bypass-338530f42d5b2105.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-30b3d2c0863bd449.js
https://chat.openai.com/_next/static/chunks/pages/index-b4d7c4fc4ceeb809.js
https://chat.openai.com/_next/static/chunks/pages/payments/business-ef9abcf545cb03c1.js
https://chat.openai.com/_next/static/chunks/pages/payments/success-4e552661b6a1b2bc.js
https://chat.openai.com/_next/static/chunks/pages/status-6557d60655b68492.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/97-536ee884c863676e.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-44619ef92ec8f3b5.js
```

### From `_next/static/chunks/webpack-1eeae5c7aedde088.js`

#### Archived

```
https://chat.openai.com/_next/static/chunks/178.222b639d19105c6f.js
https://chat.openai.com/_next/static/chunks/187.eac7a415abe0f702.js
https://chat.openai.com/_next/static/chunks/198.cac4414a183eae93.js
https://chat.openai.com/_next/static/chunks/381.dcde9edb10ac0e56.js
https://chat.openai.com/_next/static/chunks/400.ccdbd9c0e044d3a8.js
https://chat.openai.com/_next/static/chunks/746.8d5b3a415019d67f.js
https://chat.openai.com/_next/static/chunks/826.c915ad5cbd3a254b.js
https://chat.openai.com/_next/static/chunks/875.baf2f7fc433709e3.js
https://chat.openai.com/_next/static/chunks/952.da89f65bb2251a73.js
https://chat.openai.com/_next/static/css/dad3a532a4da363e.css
```
