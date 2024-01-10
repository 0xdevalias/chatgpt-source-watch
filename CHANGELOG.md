# Changelog - 2024

Note that the contents within this CHANGELOG will be kept up to date with the latest changes and insights for 2024. See the other CHANGELOG files for other time periods:

- [`CHANGELOG-2023.md`](./CHANGELOG-2023.md)

You may also like some of the historical insights captured at the following gist:

- [Reverse engineering ChatGPT's frontend web app + deep dive explorations of the code (0xdevalias gist)](https://gist.github.com/0xdevalias/4ac297ee3f794c17d0997b4673a2f160#reverse-engineering-chatgpts-frontend-web-app--deep-dive-explorations-of-the-code)

## 2024-01-10Z (`Qy6WgQbBtdAKO56kyE3EZ`)

### Notes

- App release version (Git SHA?): `697a63176099499713d7d4fc6bc85c66b9c27172`
  - Extracted with `grep -C 3 'service: chatgpt-web,' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/6276.js`
  - ```js
    discoveryError: {
      id: "gizmo.discovery.error",
      defaultMessage: "Error loading GPTs",
    },
    // ..snip..
    discoveryLoadMoreError: {
      id: "gizmo.discovery.loadMoreError",
      defaultMessage: "Error loading more",
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d32439ca4506ae5c.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9e2a46098c9085f2.js
https://cdn.oaistatic.com/_next/static/Qy6WgQbBtdAKO56kyE3EZ/_buildManifest.js
https://cdn.oaistatic.com/_next/static/Qy6WgQbBtdAKO56kyE3EZ/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-fa322493cf9d5d19.js
```

### From `orig/_next/static/chunks/webpack-9e2a46098c9085f2.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/e91aae5513934b0f.css
```

## 2024-01-10Z (`SEKhaE-wBycAz8cr914YK`)

### Notes

- App release version (Git SHA?): `1ace54ad692c50bc656723d7a559381f5d0bbb03`
  - Extracted with `grep -C 3 'service: chatgpt-web,' unpacked/_next/static/chunks/pages/_app.js`
- New route `/gpts` added (`static/chunks/pages/gpts-feac991ac32a51df.js`)
  - `/gpts/discovery` seems to redirect there now, so might just be a new URL for that content
  - https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg
  - ```js
    var A = "Explore GPTs",
        e = "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
    ```
- The following help URL was added: https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-8b7a896ce0d26c7a.js
https://cdn.oaistatic.com/_next/static/SEKhaE-wBycAz8cr914YK/_buildManifest.js
https://cdn.oaistatic.com/_next/static/SEKhaE-wBycAz8cr914YK/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-dd64351362096e8e.js
https://cdn.oaistatic.com/_next/static/chunks/6276-971c7cf6048c8ae0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-feac991ac32a51df.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-28475bf486cb7133.js
https://cdn.oaistatic.com/_next/static/chunks/192-67ddbbb4f94fb7c7.js
```

## 2024-01-10Z (`DYD4ptbg3xgXFPHVvylfS`)

### Notes

- App release version (Git SHA?): `f50c3f4315463c2f9cf7f20f2c44d3c37c36a312`
  - Extracted with `grep -C 3 'service: chatgpt-web,' unpacked/_next/static/chunks/pages/_app.js`
- New route `/search` added (`static/chunks/pages/search-5506c0ce03a4d9c6.js`)

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-256f6a789863880e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-12836b0c1baa69d7.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-54fa77ab5c301e44.js
https://cdn.oaistatic.com/_next/static/DYD4ptbg3xgXFPHVvylfS/_buildManifest.js
https://cdn.oaistatic.com/_next/static/DYD4ptbg3xgXFPHVvylfS/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-2069eae287a82616.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-58d3c2567a3a90e4.js
https://cdn.oaistatic.com/_next/static/chunks/6276-2338ce0de8ee0b5d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-78503cb778e29802.js
https://cdn.oaistatic.com/_next/static/chunks/192-d2b71a1ca30205f8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-5506c0ce03a4d9c6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-0a1a61c30a1aacae.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-01e317c4d9bcac5c.js
```

### From `orig/_next/static/chunks/webpack-54fa77ab5c301e44.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/8ec7380cc25a2f80.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.088eb06a39bef157.js
```

## 2024-01-08Z (`VLfcxq6hGipJvVKn1m8UF`)

### Notes

- App release version (Git SHA?): `e8371b5cad4c6a2f48b0e915c0a7c3fbe578b811`
  - Extracted with `grep -C 3 'service: chatgpt-web,' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Annual ChatGPT Plus subscriptions might be coming soon:
    - ```js
       Y.features.includes("yearly_plus_subscriptions_enabled");
      ```
    - ```js
      plusYearlyCost: {
        id: "pricingPlanConstants.plusYearly.costInDollars",
        defaultMessage: "USD $16.66/month*",
      },
      // ..snip..
      plusPricingYearlyDisclaimer: {
        id: "pricingPlanConstants.plus.plusPricingYearlyDisclaimer",
        defaultMessage: "* Price billed annually",
      },
      ```
    - ```js
      plusYearly: ea(
        ea({}, ec),
        {},
        {
          costInDollars: eu.plusYearlyCost,
          disclaimer: eu.plusPricingYearlyDisclaimer,
        }
      ),
      ```
- There are no doubt other changes that I haven't called out in these notes as well.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-f51d0fc71fba6239.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-fe2ae757f8ba03d3.js
https://cdn.oaistatic.com/_next/static/VLfcxq6hGipJvVKn1m8UF/_buildManifest.js
https://cdn.oaistatic.com/_next/static/VLfcxq6hGipJvVKn1m8UF/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-a201bc43ff5fa726.js
```

### From `orig/_next/static/chunks/webpack-fe2ae757f8ba03d3.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/b32d9252cd929c53.css
```

## 2024-01-08Z (`mXIu6W6cm_lCUo268p1XR`)

### Notes

- App release version (Git SHA?): `b1693f73932bf26b80b9c407a589f7fa84db519d`
  - Extracted with `grep -C 3 'service: chatgpt-web,' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6db42c206e458693.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-e863b3dfca2be08d.js
https://cdn.oaistatic.com/_next/static/mXIu6W6cm_lCUo268p1XR/_buildManifest.js
https://cdn.oaistatic.com/_next/static/mXIu6W6cm_lCUo268p1XR/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-7521971ea5bc4b96.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-e39da93007126323.js
```

### From `orig/_next/static/chunks/webpack-e863b3dfca2be08d.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/1033ddd3b7950a2f.css
```

## 2024-01-06Z (`RCBswHp2o_8O-rQH0558u`)

### Notes

- App release version (Git SHA?): `0e8527842a288bf87ce5b440aaeff19707d5dfed`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6026406c87964130.js
https://cdn.oaistatic.com/_next/static/RCBswHp2o_8O-rQH0558u/_buildManifest.js
https://cdn.oaistatic.com/_next/static/RCBswHp2o_8O-rQH0558u/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-4bdf539a55cd7638.js
```

## 2024-01-05Z (`ohf0xpZm-mdSSsiYSf4si`)

### Notes

- App release version (Git SHA?): `1fc802fbf723c3e947e7fa5f1b5635f86b20b856`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6ad3b7c5bcb7b4f7.js
https://cdn.oaistatic.com/_next/static/ohf0xpZm-mdSSsiYSf4si/_buildManifest.js
https://cdn.oaistatic.com/_next/static/ohf0xpZm-mdSSsiYSf4si/_ssgManifest.js
```

## 2024-01-05Z (`-ush58uailrg9NaSp6Olq`)

### Notes

- A lot of the files changed in this version only had a `sourceMappingURL` appended to them, but the sourcemap file it points to wasn't able to be downloaded. I suspect this was unintentional:
  - eg. `//# sourceMappingURL=main-abb0536823058f9d.js.map`
- App release version (Git SHA?): `852018811988005c25380d3d1b8647b695d5f0f9`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/framework-31ffa51d236da229.js
https://cdn.oaistatic.com/_next/static/chunks/main-abb0536823058f9d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-cc9d416427190a04.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-d3a435e20d062ea2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-c82c25c608202a42.js
https://cdn.oaistatic.com/_next/static/-ush58uailrg9NaSp6Olq/_buildManifest.js
https://cdn.oaistatic.com/_next/static/-ush58uailrg9NaSp6Olq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-dfd7db9208d5bc06.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-92d8ce0316071915.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-d6c22d23218f3753.js
https://cdn.oaistatic.com/_next/static/chunks/5017-0a08fd85cfa9ab00.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-39c2ae0afab0be67.js
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-e83cff9ee2ba2afc.js
https://cdn.oaistatic.com/_next/static/chunks/7549-122f729dc49e6850.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-d2b18f0d4a4ace1d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-3460394477b79220.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-218afc4729fd8fe7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-6f7bbe791acce9c8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-c02c08f2e2c17ef9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-8b94460bec0887ad.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-a9f157429575d195.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-c7e9292cfb6c0c0b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-6c967c6bb3c60b1d.js
https://cdn.oaistatic.com/_next/static/chunks/3975-41d682cd3b400211.js
https://cdn.oaistatic.com/_next/static/chunks/3754-2a73b1394b439d25.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-001159e4899e6e7a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-83b0ce66a0f7311e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-93f5191aa551662a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-4782eea63108c9bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-5a880474edd89882.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-871a5686c4458639.js
https://cdn.oaistatic.com/_next/static/chunks/6276-3569bf96f185cf3c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-1adcbd1503d5106b.js
https://cdn.oaistatic.com/_next/static/chunks/192-af400bcd8b47f7a3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-072951efa1e8a25c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-f65318b3e7e56625.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-0b23c86464417b3f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-e76cf8d6bd8ad095.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-30b96390f59bab0a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-eaec433589ea05de.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-d006f4e1e72ce6c0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-d13a6df60456b624.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-ef6fcdc77eae779e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-d2c277e4dbba655d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-155fd86ce86ecc55.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-8521e44b668891fc.js
```

### From `_next/static/chunks/webpack-c82c25c608202a42.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/queryString.df174924c6968fe4.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.50753041151f9c21.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.d4730e5f8b65e198.js
https://cdn.oaistatic.com/_next/static/chunks/schemaFilter.3a60974229840ffd.js
https://cdn.oaistatic.com/_next/static/chunks/auto-track.fa6fc1112abad268.js
https://cdn.oaistatic.com/_next/static/chunks/legacyVideos.87e726622393959c.js
https://cdn.oaistatic.com/_next/static/chunks/remoteMiddleware.32ab39c72c4d4509.js
https://cdn.oaistatic.com/_next/static/chunks/ajs-destination.d9cd2d046a23b656.js
https://cdn.oaistatic.com/_next/static/chunks/119.0844e4df93c5188c.js
https://cdn.oaistatic.com/_next/static/chunks/1802.c8bf7a6f2417514c.js
https://cdn.oaistatic.com/_next/static/chunks/1966.63f2f6562c459b3e.js
https://cdn.oaistatic.com/_next/static/chunks/1994.9ac177279866526d.js
https://cdn.oaistatic.com/_next/static/chunks/2186.34fe7ff92a4f6a1f.js
https://cdn.oaistatic.com/_next/static/chunks/4113.0c0ee75dab4b3a1d.js
https://cdn.oaistatic.com/_next/static/chunks/4114.a1302f6d61ae32c1.js
https://cdn.oaistatic.com/_next/static/chunks/8009.c6c0f36a9a82d8dd.js
https://cdn.oaistatic.com/_next/static/chunks/9387.218c2da8808ec9c3.js
https://cdn.oaistatic.com/_next/static/css/8f2a2da44b8da8d5.css
```

## 2024-01-05Z (`PEO14vuOqqjOQtCs82SgS`)

### Notes

- App release version (Git SHA?): `ee459c90fe0bd8be3146d1b05cac633ab3c5a86b`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6f5714b74826d9f8.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-5646d29a9fe81c6b.js
https://cdn.oaistatic.com/_next/static/PEO14vuOqqjOQtCs82SgS/_buildManifest.js
https://cdn.oaistatic.com/_next/static/PEO14vuOqqjOQtCs82SgS/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-c5413facf22f70cb.js
https://cdn.oaistatic.com/_next/static/chunks/6276-32619f7589d1c892.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-51c1fb442a5d6a51.js
https://cdn.oaistatic.com/_next/static/chunks/192-b633a5ea9fc82ab3.js
```

### From `_next/static/chunks/webpack-5646d29a9fe81c6b.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/851ebaec58abad64.css
```

## 2024-01-04Z (`wvxlBkHE5usnj-32Td8Nr`)

### Notes

- App release version (Git SHA?): `4172b73bd5822a266abda2f7afb829f413761521`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c65a674674e57418.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-e3ee114076ef4ad4.js
https://cdn.oaistatic.com/_next/static/wvxlBkHE5usnj-32Td8Nr/_buildManifest.js
https://cdn.oaistatic.com/_next/static/wvxlBkHE5usnj-32Td8Nr/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3754-a18653d9d4bfd554.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-d11db11603a1a477.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-b5a277fa600c8450.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-8c7558ce5704445d.js
https://cdn.oaistatic.com/_next/static/chunks/6276-29906ee73c008f82.js
https://cdn.oaistatic.com/_next/static/chunks/192-865b00edd7c32b95.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-8ad7cd389335ca03.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-63420656fb636203.js
```

## 2024-01-02Z (`aNEO7zh0z5I01hzE5e-99`) `[as well as earlier missing changes]`

### Notes

- This is the first full build that has been archived in a long time. As such, a lot of the changes attributed to this build may have occurred in older builds.
- App release version (Git SHA?): `cbdf570d5262e3f08d96b4dacb59e25f7f1a849c`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/main-5b2c736082034b80.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c7bb6e9c1471fff7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-f655a2695b0d28dd.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-e9f77ccad7f872cc.js
https://cdn.oaistatic.com/_next/static/aNEO7zh0z5I01hzE5e-99/_buildManifest.js
https://cdn.oaistatic.com/_next/static/aNEO7zh0z5I01hzE5e-99/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-b43f54d044ec2f25.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-f8e8da26c181d170.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-396e4df2072cd915.js
https://cdn.oaistatic.com/_next/static/chunks/5017-dc62820c5a35986c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-8f957bad7cabc93f.js
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-fd0458d5c342aa61.js
https://cdn.oaistatic.com/_next/static/chunks/7549-d2a333e769651485.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-cbc0f5c446bb2eb7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-2095e104a2691e45.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-2aea3c696b2df83d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-eb692e8b61f01e98.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-65793e0a08d56e1d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-d991ddf2a6aaad1e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-25b89c24abe59fd8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-5eabd2305c18a61d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-565d8770e52c929a.js
https://cdn.oaistatic.com/_next/static/chunks/3975-78ada888750e0be2.js
https://cdn.oaistatic.com/_next/static/chunks/3754-d4bbe2fcb49f7ccf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-deef6484f170bae2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-6543c375b9d668bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-1cbeed1e3f3eedd3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-71f135c5de432308.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-c865238c12b838da.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-43c9a845011460dc.js
https://cdn.oaistatic.com/_next/static/chunks/6276-daa78bdf869b1a13.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-04d6cb68d3f1d0f9.js
https://cdn.oaistatic.com/_next/static/chunks/192-ad27ef03b2f15a6c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-066904f093c6dd65.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-145af87f7e35328a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-7e5560272a89fb83.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-c068cb61b8b506e3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-52636a17fdba5069.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-e1c52df5035926ea.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-3e97e6d92488eac1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-6f90b93d2f1db032.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-1bc2122f50a59fe6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-85712fe02fb7f60a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-7535f2156b7bed72.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-5693ccd6d077ee1d.js
```

### From `_next/static/chunks/webpack-e9f77ccad7f872cc.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/queryString.8adb6b5c02556ce6.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.3374035675f076dc.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.a60fa59b43352d38.js
https://cdn.oaistatic.com/_next/static/chunks/ajs-destination.e1aa47a6763cf015.js
https://cdn.oaistatic.com/_next/static/chunks/schemaFilter.73b39b05e6227404.js
https://cdn.oaistatic.com/_next/static/chunks/auto-track.0fcd3f76ff2101a2.js
https://cdn.oaistatic.com/_next/static/chunks/legacyVideos.2d1b98130afed9f4.js
https://cdn.oaistatic.com/_next/static/chunks/remoteMiddleware.f7cb01c1ad1c1b5c.js
https://cdn.oaistatic.com/_next/static/chunks/119.9715f7a5d74c5dc4.js
https://cdn.oaistatic.com/_next/static/chunks/132.83d7e17c16fd8132.js
https://cdn.oaistatic.com/_next/static/chunks/660.77cef428334b8c7c.js
https://cdn.oaistatic.com/_next/static/chunks/676.1bfe8472c17a4431.js
https://cdn.oaistatic.com/_next/static/chunks/718.bfad06553a93eea2.js
https://cdn.oaistatic.com/_next/static/chunks/1141.332708630b4a231f.js
https://cdn.oaistatic.com/_next/static/chunks/1597.d4eb43476c9e150e.js
https://cdn.oaistatic.com/_next/static/chunks/1776.0eac1b1350870c2b.js
https://cdn.oaistatic.com/_next/static/chunks/1777.6b3c6b7d50f77208.js
https://cdn.oaistatic.com/_next/static/chunks/1802.ad82d470c791d926.js
https://cdn.oaistatic.com/_next/static/chunks/1948.3d58d4c87f52e48b.js
https://cdn.oaistatic.com/_next/static/chunks/1966.293545626fb83130.js
https://cdn.oaistatic.com/_next/static/chunks/1994.e65be55a70db455e.js
https://cdn.oaistatic.com/_next/static/chunks/2143.ea9e823f2bd77aef.js
https://cdn.oaistatic.com/_next/static/chunks/2161.f1027e185705266a.js
https://cdn.oaistatic.com/_next/static/chunks/2178.aaed520ab4cc644a.js
https://cdn.oaistatic.com/_next/static/chunks/2186.470cc82a65d54ead.js
https://cdn.oaistatic.com/_next/static/chunks/2212.bcacf06d94483a62.js
https://cdn.oaistatic.com/_next/static/chunks/2292.dcd90c22db8910bb.js
https://cdn.oaistatic.com/_next/static/chunks/3060.1b59381201c72ba3.js
https://cdn.oaistatic.com/_next/static/chunks/3332.6c3e47346a9886cd.js
https://cdn.oaistatic.com/_next/static/chunks/3432.5c05268a818165ff.js
https://cdn.oaistatic.com/_next/static/chunks/3466.717ff042c32afd18.js
https://cdn.oaistatic.com/_next/static/chunks/3705.358ec276a187d609.js
https://cdn.oaistatic.com/_next/static/chunks/4042.51fb1fb3fefd1323.js
https://cdn.oaistatic.com/_next/static/chunks/4113.2090375c63035897.js
https://cdn.oaistatic.com/_next/static/chunks/4114.d5b644d4ccc9b88c.js
https://cdn.oaistatic.com/_next/static/chunks/4347.aac4cf6518253b89.js
https://cdn.oaistatic.com/_next/static/chunks/4505.9b3d666e914eedaf.js
https://cdn.oaistatic.com/_next/static/chunks/4615.4da2f6655936890d.js
https://cdn.oaistatic.com/_next/static/chunks/4616.afcdcfb6100e51d2.js
https://cdn.oaistatic.com/_next/static/chunks/4685.eac6837428e47dc3.js
https://cdn.oaistatic.com/_next/static/chunks/4700.df19e8bf8e233dd5.js
https://cdn.oaistatic.com/_next/static/chunks/4806.229ecbf1fb5b1d69.js
https://cdn.oaistatic.com/_next/static/chunks/5187.e5b8658848daef14.js
https://cdn.oaistatic.com/_next/static/chunks/5288.936760e0c8693849.js
https://cdn.oaistatic.com/_next/static/chunks/5632.959c8dbfb88ae5e3.js
https://cdn.oaistatic.com/_next/static/chunks/5883.ce85f9333c551899.js
https://cdn.oaistatic.com/_next/static/chunks/5952.0d37592c4e442cd9.js
https://cdn.oaistatic.com/_next/static/chunks/6291.41f8e3c0a04b1f70.js
https://cdn.oaistatic.com/_next/static/chunks/6522.0ca47c83d87afc29.js
https://cdn.oaistatic.com/_next/static/chunks/6550.e5aff145ab8e2ca6.js
https://cdn.oaistatic.com/_next/static/chunks/6867.9a3913aafa7e7579.js
https://cdn.oaistatic.com/_next/static/chunks/6875.b12af4fa56bdc138.js
https://cdn.oaistatic.com/_next/static/chunks/6951.4dd986a792a5b15f.js
https://cdn.oaistatic.com/_next/static/chunks/6952.0c7b4a22ec3e5712.js
https://cdn.oaistatic.com/_next/static/chunks/7198.5fe99b2882f3639c.js
https://cdn.oaistatic.com/_next/static/chunks/7659.7e6c7d5c88327d54.js
https://cdn.oaistatic.com/_next/static/chunks/7745.83bc9cd090326372.js
https://cdn.oaistatic.com/_next/static/chunks/7791.4e576c83af1f1aad.js
https://cdn.oaistatic.com/_next/static/chunks/7795.c96ebb6b5ff4f335.js
https://cdn.oaistatic.com/_next/static/chunks/7947.84f4094fc3c966fd.js
https://cdn.oaistatic.com/_next/static/chunks/7994.268cec8d0c757708.js
https://cdn.oaistatic.com/_next/static/chunks/8009.948e0c30bf7906c0.js
https://cdn.oaistatic.com/_next/static/chunks/8226.6c6263b923c0c229.js
https://cdn.oaistatic.com/_next/static/chunks/8400.550d17b88dff12e2.js
https://cdn.oaistatic.com/_next/static/chunks/9087.0320e1c69857fe0f.js
https://cdn.oaistatic.com/_next/static/chunks/9120.88b2bf04dae9eeac.js
https://cdn.oaistatic.com/_next/static/chunks/9271.2f2dbd62073e36a8.js
https://cdn.oaistatic.com/_next/static/chunks/9387.d4ce6cde30024b90.js
https://cdn.oaistatic.com/_next/static/chunks/9826.d9d67e7d2c47379d.js
https://cdn.oaistatic.com/_next/static/css/73fc0a5f171c2f83.css
```
