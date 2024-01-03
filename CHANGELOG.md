# Changelog

Note that while the contents within this CHANGELOG will be kept up to date with the latest changes and insights, you may also like some of the historical insights captured at the following gist:

- [Reverse engineering ChatGPT's frontend web app + deep dive explorations of the code (0xdevalias gist)](https://gist.github.com/0xdevalias/4ac297ee3f794c17d0997b4673a2f160#reverse-engineering-chatgpts-frontend-web-app--deep-dive-explorations-of-the-code)

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

## 2023-09-15Z (`0S-3OY79q4frbRmxZL8PL`) `[partial archive]`

### Notes

The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/2708-51da80fcf952c7ca.js
https://cdn.oaistatic.com/_next/static/chunks/6798-fb7add4f91897cbc.js
https://cdn.oaistatic.com/_next/static/chunks/7055-e736c35f3165d313.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-6c46b15bbe34738e.js
https://cdn.oaistatic.com/_next/static/chunks/4094-224d7291e5cdd211.js
https://cdn.oaistatic.com/_next/static/chunks/4327-be3025f5505bae8b.js
https://cdn.oaistatic.com/_next/static/chunks/832-669def60da7846dd.js
https://cdn.oaistatic.com/_next/static/chunks/8937-bb0605337563686e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a983738fb313621d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-fd77349f901956a7.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d31727f1b2982e86.js
https://cdn.oaistatic.com/_next/static/0S-3OY79q4frbRmxZL8PL/_buildManifest.js
https://cdn.oaistatic.com/_next/static/0S-3OY79q4frbRmxZL8PL/_ssgManifest.js
```

## 2023-09-13Z (`HCDcqbITOjtWoyhF0h1lh`) `[partial archive]`

### Notes

The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/9551-abb4a6c80c643953.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1139-54f0f9dcacba6781.js
https://cdn.oaistatic.com/_next/static/chunks/1230-2a0225e917b547d0.js
https://cdn.oaistatic.com/_next/static/chunks/1714-e962b98073829659.js
https://cdn.oaistatic.com/_next/static/chunks/2024-10c9addaa97b9168.js
https://cdn.oaistatic.com/_next/static/chunks/3221-1f36fbaeb8b17240.js
https://cdn.oaistatic.com/_next/static/chunks/4078-0bc0291f9b7e9577.js
https://cdn.oaistatic.com/_next/static/chunks/4094-9421c96366ef7623.js
https://cdn.oaistatic.com/_next/static/chunks/4327-11302ad9aa0b88cf.js
https://cdn.oaistatic.com/_next/static/chunks/8937-bb9f0f72a63bd002.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-b292bd2a90caa0e2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-db12fa397b7dc458.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-f8d3f2a169575d32.js
https://cdn.oaistatic.com/_next/static/HCDcqbITOjtWoyhF0h1lh/_buildManifest.js
https://cdn.oaistatic.com/_next/static/HCDcqbITOjtWoyhF0h1lh/_ssgManifest.js
```

## 2023-09-10Z (`CP830TYXTYOV5LdZUII2f`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/4395-0bd4a6bc9a0f5951.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-1d442615d3f1fb92.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-766872cd2b31603c.js
https://cdn.oaistatic.com/_next/static/CP830TYXTYOV5LdZUII2f/_buildManifest.js
https://cdn.oaistatic.com/_next/static/CP830TYXTYOV5LdZUII2f/_ssgManifest.js
```

## 2023-09-09Z (`BA4vBP2tQHV0HpeG1-9lL`) `[partial archive]`

### Notes

The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/4603-4c7b1e976779b30e.js
https://cdn.oaistatic.com/_next/static/chunks/1494-26f6e518591f1f03.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-e6472e5568fbcf60.js
https://cdn.oaistatic.com/_next/static/chunks/4094-ae702ff085421dfe.js
https://cdn.oaistatic.com/_next/static/chunks/4145-3cca3ac9ffa6bcee.js
https://cdn.oaistatic.com/_next/static/chunks/4395-97e819a67bae8b17.js
https://cdn.oaistatic.com/_next/static/chunks/4398-25241c9a31825e62.js
https://cdn.oaistatic.com/_next/static/chunks/4484-c141a70ea5e43ce5.js
https://cdn.oaistatic.com/_next/static/chunks/7428-eaf29331a21f37f9.js
https://cdn.oaistatic.com/_next/static/chunks/7594-55753ab593868ce5.js
https://cdn.oaistatic.com/_next/static/chunks/8146-7f13ed40eef1ff93.js
https://cdn.oaistatic.com/_next/static/chunks/8977-8a8ee9f1a4c4484f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-45fa26a1c30ae34e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-52b1a3c50e81b620.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d9737a8d2b66b443.js
https://cdn.oaistatic.com/_next/static/BA4vBP2tQHV0HpeG1-9lL/_buildManifest.js
https://cdn.oaistatic.com/_next/static/BA4vBP2tQHV0HpeG1-9lL/_ssgManifest.js
```

## 2023-09-06Z (`HbvObI9-beBZWMNcbKblk`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1139-84ba204a037b8626.js
https://cdn.oaistatic.com/_next/static/chunks/1230-f9369c9e9f308ae2.js
https://cdn.oaistatic.com/_next/static/chunks/2536-e062008d5f70c441.js
https://cdn.oaistatic.com/_next/static/chunks/2802bd5f-7a16e4a96d790774.js
https://cdn.oaistatic.com/_next/static/chunks/3392-ef510942534eb9af.js
https://cdn.oaistatic.com/_next/static/chunks/4094-35f7eb42db55d8c9.js
https://cdn.oaistatic.com/_next/static/chunks/4212-a72eb27aa077a503.js
https://cdn.oaistatic.com/_next/static/chunks/4484-dd952ac85e06b3ce.js
https://cdn.oaistatic.com/_next/static/chunks/4662-1c96e2e8aaa33187.js
https://cdn.oaistatic.com/_next/static/chunks/5274-e3f93d2068bc940a.js
https://cdn.oaistatic.com/_next/static/chunks/5849-9d1d1fb665033d45.js
https://cdn.oaistatic.com/_next/static/chunks/6739-e9d8c90a499bfb18.js
https://cdn.oaistatic.com/_next/static/chunks/7594-47ff20acfe359841.js
https://cdn.oaistatic.com/_next/static/chunks/8152-3a3d4677fa83a664.js
https://cdn.oaistatic.com/_next/static/chunks/8937-d3d5d4cedbf2f3b9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a76c492388302155.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-59e995f0713e9331.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-917fdeded1d1cf08.js
https://cdn.oaistatic.com/_next/static/HbvObI9-beBZWMNcbKblk/_buildManifest.js
https://cdn.oaistatic.com/_next/static/HbvObI9-beBZWMNcbKblk/_ssgManifest.js
```

## 2023-08-23Z (`L-nRdgPrZn7iyMiVgf6ia`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-9240bd1caaa4afb0.js
https://cdn.oaistatic.com/_next/static/chunks/1623-1ad956d6b024a396.js
https://cdn.oaistatic.com/_next/static/chunks/2899-b4864da475b3bc8a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-be839b2d321d8eea.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-ed922a1258c68849.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-76bf935941a16fe5.js
https://cdn.oaistatic.com/_next/static/L-nRdgPrZn7iyMiVgf6ia/_buildManifest.js
https://cdn.oaistatic.com/_next/static/L-nRdgPrZn7iyMiVgf6ia/_ssgManifest.js
```

## 2023-08-22Z (`dMj6dM6S2JaZGfKbBIHcv`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-afe2f01ae33719f1.js
https://cdn.oaistatic.com/_next/static/chunks/2899-2d342a2bf61b4899.js
https://cdn.oaistatic.com/_next/static/chunks/6167-4df2dedd1260823c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-af2e4b19b359eeca.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-977b42dd25e39ac9.js
https://cdn.oaistatic.com/_next/static/dMj6dM6S2JaZGfKbBIHcv/_buildManifest.js
https://cdn.oaistatic.com/_next/static/dMj6dM6S2JaZGfKbBIHcv/_ssgManifest.js
```

## 2023-08-19Z (`8TLwvKhD9FbTeb5-ighui`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-0b0efb593cda3baa.js
https://cdn.oaistatic.com/_next/static/chunks/1968-f7703e5e5f1e008f.js
https://cdn.oaistatic.com/_next/static/chunks/2899-eabe82393a5bbbb2.js
https://cdn.oaistatic.com/_next/static/chunks/6493-4e3aa59a7d7c8a97.js
https://cdn.oaistatic.com/_next/static/chunks/7428-d647f99518d60cbc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-7cf66414c7613b2f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-7b21e6d2eebc96ef.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-c831cfe61914eae3.js
https://cdn.oaistatic.com/_next/static/8TLwvKhD9FbTeb5-ighui/_buildManifest.js
https://cdn.oaistatic.com/_next/static/8TLwvKhD9FbTeb5-ighui/_ssgManifest.js
```

## 2023-08-18Z (`MEKNx-othMT86EBOtLOZS`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-1da3652bf5bd307d.js
https://cdn.oaistatic.com/_next/static/chunks/2031-06f11192f7d91f35.js
https://cdn.oaistatic.com/_next/static/chunks/24-e946e3e9648f07cc.js
https://cdn.oaistatic.com/_next/static/chunks/2899-fe1756f25a308d7f.js
https://cdn.oaistatic.com/_next/static/chunks/6167-2603309e5d49b4d6.js
https://cdn.oaistatic.com/_next/static/chunks/7428-b4929153596db9f2.js
https://cdn.oaistatic.com/_next/static/chunks/8977-dfb07b23ec4b24dc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-76a9a969b0d7ed49.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-00c84b6436ccbf8f.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-c98213118ba0f534.js
https://cdn.oaistatic.com/_next/static/MEKNx-othMT86EBOtLOZS/_buildManifest.js
https://cdn.oaistatic.com/_next/static/MEKNx-othMT86EBOtLOZS/_ssgManifest.js
```

## 2023-08-17Z (`dh8PtrG40HTj_qqNLbeVa`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-49a18466c3783ffe.js
https://cdn.oaistatic.com/_next/static/chunks/1471-0eeefcb50877af96.js
https://cdn.oaistatic.com/_next/static/chunks/24-fc67950d2d3e2e6d.js
https://cdn.oaistatic.com/_next/static/chunks/2899-30845cdc8fd6eb90.js
https://cdn.oaistatic.com/_next/static/chunks/3683-b99e8793d1e07f2e.js
https://cdn.oaistatic.com/_next/static/chunks/3726-38463235eb53640f.js
https://cdn.oaistatic.com/_next/static/chunks/4212-e736ace29b4b3e6f.js
https://cdn.oaistatic.com/_next/static/chunks/6493-223157bef59d0d15.js
https://cdn.oaistatic.com/_next/static/chunks/7428-f9b01bd7b0988dbd.js
https://cdn.oaistatic.com/_next/static/chunks/7441-27272a5b16ecfb8c.js
https://cdn.oaistatic.com/_next/static/chunks/8349-659c84eed1eaf703.js
https://cdn.oaistatic.com/_next/static/chunks/9033-2aa39521d6fcb369.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-91314eab5877f318.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-76225e2a44b0fd99.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-5ddc2b840786caa9.js
https://cdn.oaistatic.com/_next/static/dh8PtrG40HTj_qqNLbeVa/_buildManifest.js
https://cdn.oaistatic.com/_next/static/dh8PtrG40HTj_qqNLbeVa/_ssgManifest.js
```

## 2023-08-16Z (`ri6x4gnuLRb_3_4UhvWjG`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-1afe642fd57845ff.js
https://cdn.oaistatic.com/_next/static/chunks/6493-c3d442407a8f0e6b.js
https://cdn.oaistatic.com/_next/static/chunks/7352-deaa5564d540722b.js
https://cdn.oaistatic.com/_next/static/chunks/7851-665d7075f70ceda9.js
https://cdn.oaistatic.com/_next/static/chunks/7985-df9ab5a2cdeceaff.js
https://cdn.oaistatic.com/_next/static/chunks/8937-6a34edf35d82ec9f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-32e5b31fa194ccc9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-c09d605bbd041bc2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-495f51f61f793180.js
https://cdn.oaistatic.com/_next/static/ri6x4gnuLRb_3_4UhvWjG/_buildManifest.js
https://cdn.oaistatic.com/_next/static/ri6x4gnuLRb_3_4UhvWjG/_ssgManifest.js
```

## 2023-08-15Z (`jTyapgYmx_AoRWnrWJUNJ`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-3ab5d34eea2c1afd.js
https://cdn.oaistatic.com/_next/static/chunks/6493-82920228b6f3aca3.js
https://cdn.oaistatic.com/_next/static/chunks/7851-61a314e87a202ef6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-711e14f45c771528.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-8e5e295e413f2bcc.js
https://cdn.oaistatic.com/_next/static/jTyapgYmx_AoRWnrWJUNJ/_buildManifest.js
https://cdn.oaistatic.com/_next/static/jTyapgYmx_AoRWnrWJUNJ/_ssgManifest.js
```

## 2023-08-14Z (`oDTsXIohP85MnLZj7TlaB`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1230-8f311937066d317d.js
https://cdn.oaistatic.com/_next/static/chunks/4521-b0cabf35ae0d8690.js
https://cdn.oaistatic.com/_next/static/chunks/6493-f95fb76654babf4a.js
https://cdn.oaistatic.com/_next/static/chunks/7483-2c0a5d1877c6da1d.js
https://cdn.oaistatic.com/_next/static/chunks/7851-f028dc8368e400ff.js
https://cdn.oaistatic.com/_next/static/chunks/8937-e8acc7b8fc475182.js
https://cdn.oaistatic.com/_next/static/chunks/8948-6595c46a7bd0d3d3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d78f57764d11b9a7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-79b3a53618f07b71.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9e1ebc95eb273260.js
https://cdn.oaistatic.com/_next/static/oDTsXIohP85MnLZj7TlaB/_buildManifest.js
https://cdn.oaistatic.com/_next/static/oDTsXIohP85MnLZj7TlaB/_ssgManifest.js
```

## 2023-08-04Z (`37G8pTNKx251duVfzpNCz`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/webpack-9a9140e9b6741713.js
https://cdn.oaistatic.com/_next/static/chunks/1230-04040ad560463a89.js
https://cdn.oaistatic.com/_next/static/chunks/2231-5270b0cf7f1f48cb.js
https://cdn.oaistatic.com/_next/static/chunks/3494-21197371881a8adf.js
https://cdn.oaistatic.com/_next/static/chunks/3504-a12ba7bcff4f7847.js
https://cdn.oaistatic.com/_next/static/chunks/3551-b3787b4957be36b0.js
https://cdn.oaistatic.com/_next/static/chunks/7851-acd5f0d7727988d3.js
https://cdn.oaistatic.com/_next/static/chunks/8937-79338342125ac632.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-695c0ff86878a9c6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-9a069bf3e61a2166.js
https://cdn.oaistatic.com/_next/static/37G8pTNKx251duVfzpNCz/_buildManifest.js
https://cdn.oaistatic.com/_next/static/37G8pTNKx251duVfzpNCz/_ssgManifest.js
```

## 2023-08-03Z (`PurMkNIQjqUSFMyVMhlHV`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/7851-3fa0af3a93c7a199.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-e5de5bf6676f1024.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-7ddc1f961872ca09.js
https://cdn.oaistatic.com/_next/static/PurMkNIQjqUSFMyVMhlHV/_buildManifest.js
https://cdn.oaistatic.com/_next/static/PurMkNIQjqUSFMyVMhlHV/_ssgManifest.js
```

## 2023-08-03Z (`QrTcOt7XatF0UtTGkJiqj`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1836-f36c6a4e1cb31680.js
https://cdn.oaistatic.com/_next/static/chunks/7851-1ada54827998db22.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-8669c392cbfb2100.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-4ea15b8d8b9a53b3.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-3b6f179cb52163b3.js
https://cdn.oaistatic.com/_next/static/QrTcOt7XatF0UtTGkJiqj/_buildManifest.js
https://cdn.oaistatic.com/_next/static/QrTcOt7XatF0UtTGkJiqj/_ssgManifest.js
```

## 2023-08-02Z (`9Y1CKRR2ktnFqbtMySwcl`) `[partial archive]`

### Notes

The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/1f110208-24bf6c2e080e0308.js
https://cdn.oaistatic.com/_next/static/chunks/bd26816a-796eab5008811694.js
https://cdn.oaistatic.com/_next/static/chunks/framework-10a404587b40544b.js
https://cdn.oaistatic.com/_next/static/chunks/main-664b20fa39df3103.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/012ff928-385705181ba431e9.js
https://cdn.oaistatic.com/_next/static/chunks/2378-46cd95ca8d559832.js
https://cdn.oaistatic.com/_next/static/chunks/2802bd5f-2db666e4606fc7ff.js
https://cdn.oaistatic.com/_next/static/chunks/4984-2164c4b7cb3aea91.js
https://cdn.oaistatic.com/_next/static/chunks/5924-2e4a249c9d20d18a.js
https://cdn.oaistatic.com/_next/static/chunks/6493-694ff37420ef30dc.js
https://cdn.oaistatic.com/_next/static/chunks/68a27ff6-f9f204be935e10d1.js
https://cdn.oaistatic.com/_next/static/chunks/7851-25cb2569cc5b0e4c.js
https://cdn.oaistatic.com/_next/static/chunks/8937-3ea143c3835bb425.js
https://cdn.oaistatic.com/_next/static/chunks/8983-7972313cb81a7751.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a36323cf5dad9506.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-d3b3031e7ceeab3b.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9e9ecf18b064e989.js
https://cdn.oaistatic.com/_next/static/9Y1CKRR2ktnFqbtMySwcl/_buildManifest.js
https://cdn.oaistatic.com/_next/static/9Y1CKRR2ktnFqbtMySwcl/_ssgManifest.js
```

## 2023-08-01Z (`VArZIFjnQVe75R3PSp8rf`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/851-732833502e1d9798.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-4a3c4ab9e44e831e.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-a1c9a96a7a552a16.js
https://cdn.oaistatic.com/_next/static/VArZIFjnQVe75R3PSp8rf/_buildManifest.js
https://cdn.oaistatic.com/_next/static/VArZIFjnQVe75R3PSp8rf/_ssgManifest.js
```

## 2023-07-31Z (`TYZUn2IfQoOqt8XVyk3dh`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/378-731db04620474ed9.js
https://cdn.oaistatic.com/_next/static/chunks/851-2191b1912e6ee401.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-7379e102d8b16bda.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-fc0fb0463e126857.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-da4039234027f6dd.js
https://cdn.oaistatic.com/_next/static/TYZUn2IfQoOqt8XVyk3dh/_buildManifest.js
https://cdn.oaistatic.com/_next/static/TYZUn2IfQoOqt8XVyk3dh/_ssgManifest.js
```

## 2023-07-31Z (`TDIJoIMU8uvvuYQbhyAxd`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/108-802ce3037f92d8c4.js
https://cdn.oaistatic.com/_next/static/chunks/493-d7689066182cf238.js
https://cdn.oaistatic.com/_next/static/chunks/851-f5936c81005e64d8.js
https://cdn.oaistatic.com/_next/static/chunks/924-d1b63621e1cb69c3.js
https://cdn.oaistatic.com/_next/static/chunks/983-33d35c39a73606c3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-7725a5487164e99b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-cdf94a9e9b4c79dc.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-7de0ae06d66f40f2.js
https://cdn.oaistatic.com/_next/static/TDIJoIMU8uvvuYQbhyAxd/_buildManifest.js
https://cdn.oaistatic.com/_next/static/TDIJoIMU8uvvuYQbhyAxd/_ssgManifest.js
```

## 2023-07-26Z (`XweCcE0e9326Bys4ORyMC`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-5817b04f45f270e2.js
https://cdn.oaistatic.com/_next/static/chunks/190-3e2e37f1985402c7.js
https://cdn.oaistatic.com/_next/static/chunks/505-80f37ca70aae73e2.js
https://cdn.oaistatic.com/_next/static/chunks/851-8f3850a27f183186.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c53d1ddb71d8115a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-93ca87781041745d.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d540e67050bf31e4.js
https://cdn.oaistatic.com/_next/static/XweCcE0e9326Bys4ORyMC/_buildManifest.js
https://cdn.oaistatic.com/_next/static/XweCcE0e9326Bys4ORyMC/_ssgManifest.js
```

## 2023-07-24Z (`IDWU9BsUPJOCH6wUfUu5n`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/190-96274edf63fbfa45.js
https://cdn.oaistatic.com/_next/static/chunks/412-900be3dfb2466166.js
https://cdn.oaistatic.com/_next/static/chunks/801-b9a0a2b7a2313bf5.js
https://cdn.oaistatic.com/_next/static/chunks/937-edd834a8db5cd2db.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-69f215b015206739.js
https://cdn.oaistatic.com/_next/static/chunks/190-2c025af86a40245e.js
https://cdn.oaistatic.com/_next/static/chunks/412-3930b40d47a35725.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-5c9a66b278158896.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-8db0521e90ce1057.js
https://cdn.oaistatic.com/_next/static/IDWU9BsUPJOCH6wUfUu5n/_buildManifest.js
https://cdn.oaistatic.com/_next/static/IDWU9BsUPJOCH6wUfUu5n/_ssgManifest.js
```

## 2023-07-22Z (`XmKrBoPpskgF_4RiIX1jm`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-fb73efe874815e2e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/c/[chatId]-9f93c8708cf2909d.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-2ae31f567e59fedc.js
https://cdn.oaistatic.com/_next/static/XmKrBoPpskgF_4RiIX1jm/_buildManifest.js
https://cdn.oaistatic.com/_next/static/XmKrBoPpskgF_4RiIX1jm/_ssgManifest.js
```

## 2023-07-20Z (`8TObkIccovI1-nluVgBpN`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/190-d7cd0733e02de5ff.js
https://cdn.oaistatic.com/_next/static/chunks/401-422aac07f756c1be.js
https://cdn.oaistatic.com/_next/static/chunks/412-d7b7161e288bfc24.js
https://cdn.oaistatic.com/_next/static/chunks/753-dd39befb4785e26d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-1fb29c81a8f25dfc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-a129dd98622ef01d.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-ebbb6fe12690a0cf.js
https://cdn.oaistatic.com/_next/static/8TObkIccovI1-nluVgBpN/_buildManifest.js
https://cdn.oaistatic.com/_next/static/8TObkIccovI1-nluVgBpN/_ssgManifest.js
```

## 2023-07-20Z (`m__df_2bcLUqGXlko-rBN`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/412-c00b85b4ef66af2f.js
https://cdn.oaistatic.com/_next/static/chunks/435-2b015d294e66ccbc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-573ad0910def0e5d.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-305aad91bdd6a592.js
https://cdn.oaistatic.com/_next/static/m__df_2bcLUqGXlko-rBN/_buildManifest.js
https://cdn.oaistatic.com/_next/static/m__df_2bcLUqGXlko-rBN/_ssgManifest.js
```

## 2023-07-19Z (`qwkFw7JXBrWquFuGrYJM4`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/297-e180277ece10e844.js
https://cdn.oaistatic.com/_next/static/chunks/412-88fa48398e5b71fc.js
https://cdn.oaistatic.com/_next/static/chunks/800-a82eb647282afb06.js
https://cdn.oaistatic.com/_next/static/chunks/937-36e251f389e9e752.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-8d61f4e873facd95.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-b00721778b6b9fff.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-8fd6eb158497b6f9.js
https://cdn.oaistatic.com/_next/static/qwkFw7JXBrWquFuGrYJM4/_buildManifest.js
https://cdn.oaistatic.com/_next/static/qwkFw7JXBrWquFuGrYJM4/_ssgManifest.js
```

## 2023-07-18Z (`CIOQyz3i61JmlV427-WV2`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/297-c8dcf63d9241b2bb.js
https://cdn.oaistatic.com/_next/static/chunks/435-a9eb835d01784e6b.js
https://cdn.oaistatic.com/_next/static/chunks/694-e08b5432db8f1aae.js
https://cdn.oaistatic.com/_next/static/chunks/911-d77139d6623ff794.js
https://cdn.oaistatic.com/_next/static/chunks/937-3084f74c792bbe14.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-5b34794815ee3133.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-6406d5ed611f99e5.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-1ec6196bf15a7702.js
https://cdn.oaistatic.com/_next/static/CIOQyz3i61JmlV427-WV2/_buildManifest.js
https://cdn.oaistatic.com/_next/static/CIOQyz3i61JmlV427-WV2/_ssgManifest.js
```

## 2023-07-17Z (`g50f5u-HEuvS0R11uCbQH`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/114-19daa2f2fc80e438.js
https://cdn.oaistatic.com/_next/static/chunks/911-f848ef383213d3b9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-dc4d57a4c61003da.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-4cdc0bc0b85030c6.js
https://cdn.oaistatic.com/_next/static/g50f5u-HEuvS0R11uCbQH/_buildManifest.js
https://cdn.oaistatic.com/_next/static/g50f5u-HEuvS0R11uCbQH/_ssgManifest.js
```

## 2023-07-16Z (`bOqDpPkLAc6P5_jQQ0pOe`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/114-cec595dba97fa4e9.js
https://cdn.oaistatic.com/_next/static/chunks/911-72850a45563f2921.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-eb091e659abf81c2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-5eb4f3f86a69043b.js
https://cdn.oaistatic.com/_next/static/bOqDpPkLAc6P5_jQQ0pOe/_buildManifest.js
https://cdn.oaistatic.com/_next/static/bOqDpPkLAc6P5_jQQ0pOe/_ssgManifest.js
```

## 2023-07-13Z (`V8eMtbBOHSVKP1zFk9nxF`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/114-3f7b7596dd323d8b.js
https://cdn.oaistatic.com/_next/static/chunks/171-7ae5fcdc243f5b87.js
https://cdn.oaistatic.com/_next/static/chunks/254-2d42144a9120e19f.js
https://cdn.oaistatic.com/_next/static/chunks/911-d5e69add3e22feb4.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c21e6269359721f3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-958c49a0dee35e7d.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-06319d852f1a2d57.js
https://cdn.oaistatic.com/_next/static/V8eMtbBOHSVKP1zFk9nxF/_buildManifest.js
https://cdn.oaistatic.com/_next/static/V8eMtbBOHSVKP1zFk9nxF/_ssgManifest.js
```

## 2023-07-12Z (`F80gy2EVE9-zP56kZ04j9`) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/734-242266db87afdbaa.js
https://cdn.oaistatic.com/_next/static/chunks/97-f1d855e2440b1441.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-81622e641d018d56.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9a9034f5af46d16b.js
https://cdn.oaistatic.com/_next/static/chunks/734-e4b26f97df757a42.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-e4816c996c959118.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-30b12cca34e8b5ae.js
https://cdn.oaistatic.com/_next/static/chunks/171-d06b34495a954825.js
https://cdn.oaistatic.com/_next/static/chunks/184-7f58c7ecb247a7af.js
https://cdn.oaistatic.com/_next/static/chunks/843-93d250b9ce4e8809.js
https://cdn.oaistatic.com/_next/static/chunks/911-7e06b65ff86ba053.js
https://cdn.oaistatic.com/_next/static/chunks/main-0438431c68fbeb27.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-2b32a651da364e2a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/index-cd310f9697a02369.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-21a2eb8dd3dd1a42.js
https://cdn.oaistatic.com/_next/static/F80gy2EVE9-zP56kZ04j9/_buildManifest.js
https://cdn.oaistatic.com/_next/static/F80gy2EVE9-zP56kZ04j9/_ssgManifest.js
```

## 2023-07-07Z (`CGRk_Om_aEGLXXSCuMmxw`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Removed some things related to `initialConversationTurns` / `conversationTurns` / `isPostMessage` / `includeChatPreferencesMismatchDisclaimer` / etc
  - Added `isDesktopNavCollapsed` + `isThreadHeaderVisible` / `hideThreadHeader` / `showThreadHeader`
- `unpacked/_next/static/chunks/496.js`
  - It looks like conversation threads might be getting collapsible headers?
  - ```diff
    - initialConversationTurns: null,
    ```
  - ```diff
    - (e.threads[r].conversationTurns = a),
    -   null ==
    -     e.threads[r].initialThreadData.initialConversationTurns &&
    -     a.length > 1 &&
    -     (e.threads[r].initialThreadData.initialConversationTurns =
    -       a);
    + e.threads[r].conversationTurns = a;
    ```
  - ```js
    isThreadHeaderVisible: !0,
    ```
  - ```js
    isDesktopNavCollapsed: function (e) {
      return e.isDesktopNavCollapsed;
    },
    isThreadHeaderVisible: function (e) {
      return e.isThreadHeaderVisible;
    },
    ```
  - ```js
    hideThreadHeader: function () {
      c.setState({ isThreadHeaderVisible: !1 });
    },
    showThreadHeader: function () {
      c.setState({ isThreadHeaderVisible: !0 });
    },
    ```
- `unpacked/_next/static/chunks/709.js`
  - ```diff
    - l = c.WIDE;
    + l = c.SQUARE;
    ```
  - ```diff
    - if (B.role === eO.uU.Unknown || B.role === eO.uU.System)
    -    return Z ? (0, v.jsx)(tY, { isPostMessage: !1 }) : null;
    + if (A.role === eO.uU.Unknown || A.role === eO.uU.System) return null;
    ```
  - ```diff
    - Z && (0, v.jsx)(tY, { isPostMessage: !0 }),
    ```
  - ```diff
    - tY = function (e) {
    -   var t = e.isPostMessage;
    -   return (0, v.jsx)(t5, {
    -     $isPostMessage: t,
    -     children:
    -       "Your info has changed since the start of this chat. Please start a new chat to see changes reflected",
    -   });
    - },
    ```
  - ```diff
    - t5 = X.Z.div(tz(), function (e) {
    -   return e.$isPostMessage ? "border-t" : "border-b";
    - }),
    ```
  - ```js
      l = (0, S.tN)(S.bM.isThreadHeaderVisible),
      c = (0, x._)((0, j.useState)(!1), 2),
      u = c[0],
      d = c[1],
      m = (0, j.useRef)(0),
      f = (0, j.useRef)(0),
      h = (0, x._)((0, eA.useAtTop)(), 1)[0],
      p = (0, x._)((0, eA.useAnimating)(), 1)[0],
      b = (0, j.useCallback)(function (e) {
        var t = e.scrollTop,
          n = f.current > m.current;
        (f.current = m.current), (m.current = t);
        var r = f.current > m.current;
        r && S.vm.showThreadHeader(), n !== r && d(r);
      }, []);
    (0, j.useEffect)(function () {
      S.vm.showThreadHeader();
    }, []),
      (0, eA.useObserveScrollPosition)(o ? void 0 : b);
    ```
  - ```js
    (0, v.jsx)(V.E.header, {
      animate: {
        top: k ? 0 : "-50px",
        transition: { duration: 0.2, ease: "easeIn" },
      },
      style: {
        boxShadow: !h && k ? "0px 4px 24px 0px #0000000D" : void 0,
      },
      className: "sticky top-0 z-[9] w-full",
      children: (0, v.jsxs)("div", {
        className:
    ```
  - ```diff
    - disableHoverableContent: !0,
    ```
  - ```diff
    - Q = (0, _.UL)(c).initialConversationTurns,
    ```
  - ```diff
    - includeChatPreferencesMismatchDisclaimer: null != Q && H && e === Q.length - 1 },
    ```
  - ```js
    N.vm.hideThreadHeader(), tT(a);
    ```
  - ```diff
    onChange: function (e) {
    -  t_(e.target.value);
    +  N.vm.hideThreadHeader(), tM(e.target.value);
    },
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-cb3e2b679437e27d.js
https://chat.openai.com/_next/static/chunks/709-33cf407bcca55d8c.js
https://chat.openai.com/_next/static/chunks/pages/_app-b2ac725b208f2161.js
https://chat.openai.com/_next/static/chunks/webpack-fa117e61bb9c0646.js
https://chat.openai.com/_next/static/CGRk_Om_aEGLXXSCuMmxw/_buildManifest.js
https://chat.openai.com/_next/static/CGRk_Om_aEGLXXSCuMmxw/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-fa117e61bb9c0646.js`

#### Archived

```
https://chat.openai.com/_next/static/css/29b1eb48bbd0fef8.css
```

## 2023-07-07Z (`DWP_u3zVBg1e7X-f6lt0k`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Strings for `navigation` had their prefix changed to `NavigationContent`
- `unpacked/_next/static/chunks/496.js`
  - ```diff
      upgradeToPlus: {
    -   id: "navigation.upgradeToPlus",
    +   id: "NavigationContent.upgradeToPlus",
    ```
  - ```diff
      renewPlus: {
    -   id: "navigation.renewPlus",
    +   id: "NavigationContent.renewPlus",
    ```
  - ```diff
      closeSidebar: {
    -   id: "navigation.closeSidebar",
    +   id: "NavigationContent.closeSidebar",
    ```
  - ```diff
      chatHistoryLabel: {
    -   id: "navigation.chatHistoryLabel",
    +   id: "NavigationContent.chatHistoryLabel",
    ```
  - ```diff
      chatHistoryOff: {
    -   id: "navigation.chatHistoryOff",
    +   id: "NavigationContent.chatHistoryOff",
    ```
  - ```diff
      chatHistoryOffDescription: {
    -   id: "navigation.chatHistoryOffDescription",
    +   id: "NavigationContent.chatHistoryOffDescription",
    ```
  - ```diff
      learnMore: {
    -   id: "navigation.learnMore",
    +   id: "NavigationContent.learnMore",
    ```
  - ```diff
      enableChatHistory: {
    -   id: "navigation.enableChatHistory",
    +   id: "NavigationContent.enableChatHistory",
    ```
  - ```diff
      newLabel: {
    -   id: "navigation.newLabel",
    +   id: "NavigationContent.newLabel",
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-e25244fd42246575.js
https://chat.openai.com/_next/static/chunks/pages/_app-d3c65a981101e89b.js
https://chat.openai.com/_next/static/chunks/webpack-6ff8840c63652a00.js
https://chat.openai.com/_next/static/DWP_u3zVBg1e7X-f6lt0k/_buildManifest.js
https://chat.openai.com/_next/static/DWP_u3zVBg1e7X-f6lt0k/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-6ff8840c63652a00.js`

N/A

## 2023-07-07Z

- ChatGPT Code Interpreter being generally released to all ChatGPT Plus users over the next week: https://twitter.com/OpenAI/status/1677015057316872192
- GPT 4 API general availability: https://openai.com/blog/gpt-4-api-general-availability

## 2023-07-07Z (`vCNVkHIoC4nD6VRPE34vP`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Removed `model_preview` feature flag
- `unpacked/_next/static/chunks/496.js`
  - ```diff
    - if (I.has("model_preview"))
    ```
  - ```diff
    - {
    -   enabled:
    -     (null == e ? void 0 : e.accessToken) != null &&
    -     t.has("model_preview"),
    - }
    + { enabled: (null == e ? void 0 : e.accessToken) != null && t }
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/chunks/709.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-7e3343e030973b2c.js
https://chat.openai.com/_next/static/chunks/709-689ee6f83ac15203.js
https://chat.openai.com/_next/static/chunks/pages/_app-01eb398e74f33071.js
https://chat.openai.com/_next/static/chunks/webpack-c176c4f4c76960d2.js
https://chat.openai.com/_next/static/vCNVkHIoC4nD6VRPE34vP/_buildManifest.js
https://chat.openai.com/_next/static/vCNVkHIoC4nD6VRPE34vP/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-c176c4f4c76960d2.js`

N/A

## 2023-07-07Z (`WZIQpxJRN2JuwynD95fGL`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Changes to SVG's
    - Added 'information I in circle' (dark 'i' on black unfilled circle)
    - Added 'information I in circlular arrow looping backwards' (dark 'i' on black unfilled circular arrow)
    - Removed 'information I in circle' (light 'i' on black filled circle)
  - A number of changes to strings related to upcoming/unreleased 'User Context' / 'Chat Preferences' feature
    - Including a help article about it: https://help.openai.com/en/articles/8096356-chat-preference-for-chatgpt
  - Some tweaks to `filesModal` related to upcoming/unreleased 'file downloads' feature
  - **Reddit thread:** https://www.reddit.com/r/ChatGPT/comments/14srmnf/help_article_for_upcomingunreleased_chatgpt/
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added an SVG of an 'information I in circle' (dark 'i' on black unfilled circle)
  - Added an SVG of an 'information I in circlular arrow looping backwards' (dark 'i' on black unfilled circular arrow)
- `unpacked/_next/static/chunks/68a27ff6.js`
  - Removed an SVG of an 'information I in circle' (light 'i' on black filled circle)
- `unpacked/_next/static/chunks/496.js`
  - ```js
    chatHistoryOffWithChatPrefsDescription: {
      id: "navigation.chatHistoryOffWithChatPrefsDescription",
      defaultMessage:
        "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. Your chat preferences will also be disabled. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
      description: "Description for chat history being off",
    },
    ```
  - ```diff
      title: {
        id: "UserContextFirstTimeModal.title",
    -   defaultMessage: "Tell ChatGPT how to improve its responses for you",
    +   defaultMessage: "Introducing Chat preferences",
        description: "Title of the UserContextFirstTimeModal",
      },
      body1: {
        id: "UserContextFirstTimeModal.body1",
       defaultMessage:
    -     "Share anything you’d like for ChatGPT to consider in forming its responses.",
    +     "Chat preferences let you share anything you'd like ChatGPT to consider in its response.",
        description:
          "Body of the first paragraph UserContextFirstTimeModal",
      },
      body2: {
        id: "UserContextFirstTimeModal.body2",
        defaultMessage:
    -     "Your instructions will be added to the conversations you start going forward, and you can edit or delete it at any time.",
    +     "Your instructions will be added to new conversations going forward, and you can edit or delete them at any time.",
        description:
          "Body of the second paragraph UserContextFirstTimeModal",
      },
      legal1: {
        id: "UserContextFirstTimeModal.legal1",
       defaultMessage:
    -    "<strong>Important:</strong> This information will also be used to improve model performance – like teaching the model how to adapt its responses to your instructions without overdoing it.",
    +     "<strong>Important:</strong> This information will also be used to improve model performance and shared with plugin developers – visit our <article>Help Center</article> to learn more.",
        description:
          "Legal text of the first paragraph UserContextFirstTimeModal",
      },
    - legal2: {
    -   id: "UserContextFirstTimeModal.legal2",
    -   defaultMessage:
    -     "<article>Learn more</article> about how we use your data and how you can opt out.",
    -   description:
    -     "Legal text of the second paragraph UserContextFirstTimeModal",
    - },
    ```
  - ```diff
    - B = "https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",
    + R = "https://help.openai.com/en/articles/8096356-chat-preference-for-chatgpt",
    ```
    - https://help.openai.com/en/articles/8096356-chat-preference-for-chatgpt
  - ```js
    fileDownloadFailed: {
      id: "filesModal.fileDownloadFailed",
      defaultMessage: "File download failed. Please try again.",
      description: "Error message when file download fails",
    },
    ```
  - ```js
    var r,
        a,
        i,
        o = n.metadata.user_context_message_data,
        s = o.about_user_message,
        l = o.about_model_message;
      return {
        aboutUserMessage:
          null !== (a = null == s ? void 0 : s.trim()) && void 0 !== a
            ? a
            : "",
        aboutModelMessage:
          null !== (i = null == l ? void 0 : l.trim()) && void 0 !== i
            ? i
            : "",
        fallback: null,
      };
    }
    return {
      aboutUserMessage: null,
      aboutModelMessage: null,
      fallback: (0, _.RR)(n),
    };
    ```
  - ```diff
      label: (0, r.jsx)(g, {
    -   pageInfo: n.metadata,
    +   citationMetadata: i.metadata,
        invalidReason: i.invalid_reason,
    ```
- `unpacked/_next/static/chunks/709.js`
  - ```diff
      return (0, v.jsx)(e5, {
        isRetrieval: n,
    -   pageInfo: d,
    +   citationMetadata: d,
        compact: r,
      });
    ```
  - Added (or moved?) a relatively large chunk of code related to user/model messages; the below are some snippets from it
    - ```js
      var e = r.aboutUserMessage,
          t = r.aboutModelMessage,
          n = r.fallback;
      ```
    - ```js
      (0, g._)({}, rz.sY.aboutYouHelpText)
      ```
    - ```js
      (0, g._)({}, rz.sY.modelHelpText)
      ```
  - ```diff
    - children: "Custom user info details",
    + children: (0, v.jsx)(
    +   w.Z,
    +   (0, g._)({}, r$.chatPreferencesInfoLabel)
    + ),
    ```
  - ```js
     (0, g._)(
        {},
        r$.chatPreferencesMismatchWarning
      )
    ```
  - ```js
    r$ = (0, C.vU)({
      chatPreferences: {
        id: "ThreadSettings.chatPreferences",
        defaultMessage: "Chat preferences: On",
        description: "Label in the thread header for Chat preferences",
      },
      chatPreferencesInfoLabel: {
        id: "ThreadSettings.chatPreferencesInfoLabel",
        defaultMessage: "Chat preferences details",
        description: "Label for the Chat preferences info icon",
      },
      chatPreferencesMismatchWarning: {
        id: "ThreadSettings.chatPreferencesMismatchWarning",
        defaultMessage:
          "Note: your current chat preferences will not be reflected in this chat.",
        description:
          "Label in the popover for Chat preferences when there is a mismatch between the Chat preferences used to start the thread and the Chat preferences currently enabled",
      },
    });
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-0655c71d4780e053.js
https://chat.openai.com/_next/static/chunks/68a27ff6-b1db347c50639918.js
https://chat.openai.com/_next/static/chunks/709-21d2cd9ca7ec8f17.js
https://chat.openai.com/_next/static/chunks/pages/_app-0bef444fae784f5a.js
https://chat.openai.com/_next/static/chunks/webpack-4fb6c7d10053f3c0.js
https://chat.openai.com/_next/static/WZIQpxJRN2JuwynD95fGL/_buildManifest.js
https://chat.openai.com/_next/static/WZIQpxJRN2JuwynD95fGL/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-14f558285dd72252.js
```

### From `_next/static/chunks/webpack-4fb6c7d10053f3c0.js`

#### Archived

```
https://chat.openai.com/_next/static/css/430c31dd7d59f6e0.css
```

## 2023-07-05Z (`R7pUM1N0nPGQARjIff8eg`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - TODO
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - Added new chunk `984`
- `unpacked/_next/static/chunks/webpack.js`
  - Added new chunks `271` / `984`
- `unpacked/_next/static/chunks/271.js`
  - TODO: New chunk, maybe with code moved from elsewhere?
    - `19271: function (e, t, r) {`
- `unpacked/_next/static/chunks/496.js`
  - TODO: from a quick skim, nothing overly major seems like it changed, except one block of code that seems to have just been moved around
- `unpacked/_next/static/chunks/653.js`
  - TODO: a big chunk of code seems to have been removed from here.. was that moved into chunk `271` / `984`?
    - `32093: function (e, t) {` was also removed from here
- `unpacked/_next/static/chunks/709.js`
  - TODO: masssive chunk to look through the changes for
    - Seem to be at least some useful changes like `BrowsingPlugin` being renamed `RetrievalBrowsing`, etc
- `unpacked/_next/static/chunks/984.js`
  - TODO: Newly added chunk, maybe with code moved from other areas
    - `50683: function (t, e) {`
    - `14984: function (t, e, r) {`
    - `32093: function (t, e) {`
- The following files had nothing much of note:
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/chunks/pages/admin.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-8171a3e74326d4cd.js
https://chat.openai.com/_next/static/chunks/653-4cb05ee80f77e17d.js
https://chat.openai.com/_next/static/chunks/709-e920cff84918c112.js
https://chat.openai.com/_next/static/chunks/984-1278472924e49180.js
https://chat.openai.com/_next/static/chunks/pages/_app-0731dc326f248181.js
https://chat.openai.com/_next/static/chunks/pages/index-5b58f27ddbccf6fb.js
https://chat.openai.com/_next/static/chunks/webpack-2e7df2ef946b2629.js
https://chat.openai.com/_next/static/R7pUM1N0nPGQARjIff8eg/_buildManifest.js
https://chat.openai.com/_next/static/R7pUM1N0nPGQARjIff8eg/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/admin-c735765aaacbd59c.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-f5225e7483c086c9.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-4b5c3fb3ff117c21.js
```

### From `_next/static/chunks/webpack-2e7df2ef946b2629.js`

#### Archived

```
https://chat.openai.com/_next/static/chunks/271.f8fe486a0f5b221c.js
```

## 2023-07-05Z (`jNdBFo8LxuQBj6E3aaAOe`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - There didn't seem to be much changed in this build that I noticed.
- `unpacked/_next/static/chunks/pages/_app.js`
  - Removed
    - ```js
      tt = "show_existing_user_age_confirmation_modal",
      ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/709.js`


### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/_app-92de2a78110bfef9.js
https://chat.openai.com/_next/static/chunks/webpack-42949d6eec31655f.js
https://chat.openai.com/_next/static/jNdBFo8LxuQBj6E3aaAOe/_buildManifest.js
https://chat.openai.com/_next/static/jNdBFo8LxuQBj6E3aaAOe/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/709-6c1ff4a80576f13c.js
```

### From `_next/static/chunks/webpack-42949d6eec31655f.js`

N/A

## 2023-07-04Z (`f9C5QIWDB4PeBMNfQPho6`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A few chunks were renamed (`293` -> `597`, `386` -> `653`)
  - Chunk `882` (aka `97c719b8`) was removed (which only contained an SVG image of 'a face with a line slashed through it')
  - A few other SVG images changed/were added
    - SVG image of a 'lab beaker with liquid in it' changed to a 'black padlock'
    - SVG image of 'two pluse signs on the left + large star on the right (magic sparkles?)' added
  - A few changes related to 'browsing mode disabled'
  - A LOT of diff churn, so there may have been other changes missed among it all
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - Chunk renamed from `293` -> `597`
  - Chunk renamed from `386` -> `653`
  - Chunk `882` (aka `97c719b8`) removed
- `unpacked/_next/static/chunks/webpack.js`
  - Chunk renamed from `293` -> `597`
  - Chunk renamed from `386` -> `653`
  - Chunk `882` (aka `97c719b8`) removed
- `unpacked/_next/static/chunks/97c719b8.js`
  - Chunk 882 (aka `97c719b8`) removed
  - This used to contain an SVG image of 'a face with a line slashed through it'
- `unpacked/_next/static/chunks/68a27ff6.js`
  - SVG image of a 'lab beaker with liquid in it' changed to a 'black padlock'
  - SVG image of 'two pluse signs on the left + large star on the right (magic sparkles?)' added
- `unpacked/_next/static/chunks/496.js`
  - ```js
    (r.TempBrowseToast = "temp-browse-toast");
    ```
  - ```js
    var M = "oai/apps/hasSeenBrowsingDisabledJuly2023";
    ```
  - ```js
    var t = !!m.m.getItem(M);
    return (
      e.browsing && !t && v.vm.openModal(v.B.TempBrowseToast), e
    );
    ```
  - ```diff
      w.updateUserSettings({
        isBetaFeaturesUiEnabled: n,
    -   isBrowsingAvailable:
    -     !r && (t.has("browsing_available") || t.has("tools")),
    +   isBrowsingAvailable: !r && !1,
    ```
    - This disables browsing via the frontend.. but I wonder if it's still accessible via the backend if we modify this frontend state?
- `unpacked/_next/static/chunks/597.js`
  - Chunk renamed from `293` -> `597`
  - Added new function `71389: function (t, e, n) {`
    - Has a bunch of code related to mount/unmount animations
    - Has a bunch of code related to `Toast` / `ToastProvider`
    - This seems to all be related to adding the toast notification used for `hasSeenBrowsingDisabledJuly2023` (see above)
- `unpacked/_next/static/chunks/653.js`
  - Chunk renamed from `386` -> `653`
  - While there were some large chunks of diff churn here, none of it jumped out at me as being overly interesting. I think some functions might have got moved around as there were definitely chunks that were coloured as unchanged when using `git diff --color-moved`
- `unpacked/_next/static/chunks/709.js`
  - There are lots of huge sections of diff churn in this file, so while i've tried to guess at what has just been refactored/moved around based on `git diff --color-moved`, it's highly likely that I have missed aspects along the way
  - The following sections are all snippets from the same larger diff chunk
    - ```js
      var P = (0, m.tN)(function (e) {
        return e.activeModals.has(m.B.TempBrowseToast);
      });
      ```
    - ```js
      (0, a.jsxs)(i.Dx, {
        className:
          "text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]",
        children: [
          "We've temporarily disabled the Browse with Bing ",
          (0, eu.V)("beta"),
          " feature",
        ],
      }),
      (0, a.jsxs)(i.dk, {
        className:
          "text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]",
        children: [
          "Read the",
          " ",
          (0, a.jsx)("a", {
            href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
            target: "_blank",
            rel: "noreferrer",
            className: "cursor-pointer underline",
            children: "Help Center article",
          }),
          ".",
        ],
      }),
      ```
      - https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web
    - There was WAY more diff churn here.. but not sure what else to mention.. It looks like a huge chunk of code was either moved around in the churn, or potentially actually refactored. You can find it in the huge chunk of removed code, and the huge chunk of added code. One of the diff hunk headers for the added section was `@@ -13402,6 +11469,2080 @@`
- The following files had nothing much of note:
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/chunks/pages/admin.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-649c262260f890b5.js
https://chat.openai.com/_next/static/chunks/597-ed3dbaa450c308e5.js
https://chat.openai.com/_next/static/chunks/653-787f97cc056c5d35.js
https://chat.openai.com/_next/static/chunks/68a27ff6-6aa8414ae135245e.js
https://chat.openai.com/_next/static/chunks/709-63f54d43205a5aee.js
https://chat.openai.com/_next/static/chunks/pages/_app-5aa27dc312fc926f.js
https://chat.openai.com/_next/static/chunks/pages/index-9f0df292d5056775.js
https://chat.openai.com/_next/static/chunks/webpack-abe2324d74082022.js
https://chat.openai.com/_next/static/f9C5QIWDB4PeBMNfQPho6/_buildManifest.js
https://chat.openai.com/_next/static/f9C5QIWDB4PeBMNfQPho6/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/admin-ac1e7fb0ac94aa9e.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-fd124e55fafc653d.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-e8d8dc9c9f4455ce.js
```

### From `_next/static/chunks/webpack-abe2324d74082022.js`

#### Archived

```
https://chat.openai.com/_next/static/css/76b9661cdb7aed92.css
```

## 2023-06-30Z (`WLHd8p-1ysAW_5sZZPJIy`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A bunch of polish type changes related to `filesModal` and file uploads in general, including limits to the number of files that can be uploaded at once (10), and the total size of files being uploaded (2GB)
  - Something changed from a more purple colour (`#ab68ff`) to a more blueish colour (`#7989FF`)
- `unpacked/_next/static/chunks/496.js`
  - ```diff
      return (0, a.jsxs)(_, {
        className: (0, i.Z)(
    +     "bg-blue-300",
          "redesign" === r
            ? "h-7 w-7 text-xs"
            : "small" === r
            ? "h-5 w-5 text-xs"
    -       : "h-[30px] w-[30px] text-lg",
    +       : "h-[30px] w-[30px] text-sm",
    ```
  - ```js
    s = e.multiple,
    ```
  - Removed
    - ```js
      fileAlreadyExists: {
        id: "filesModal.fileAlreadyExists",
        defaultMessage:
          "A file with the same name already exists. Please delete the existing file before uploading.",
        description:
          "Warning message when a file with the same name already exists",
      },
      ```
  - ```js
    deleteHistoryModalCancel: {
      id: "filesModal.deleteHistoryModalCancel",
      defaultMessage: "Cancel",
      description: "Label for the cancel button",
    },
    confirmDownloadAll: {
      id: "filesModal.confirmDownloadAll",
      defaultMessage: "Are you sure you want to download all files?",
      description: "Confirmation message for downloading all files",
    },
    confirmCancelDownloadAll: {
      id: "filesModal.confirmCancelDownloadAll",
      defaultMessage: "Cancel Download All",
      description:
        "Label for the cancel download all button in the confirmation modal",
    },
    tooManyFilesWithSameName: {
      id: "filesModal.tooManyFilesWithSameName",
      defaultMessage:
        "Too many files with the same name. Please rename your file.",
      description: "Error message when too many files have the same name",
    },
    tooManyFilesUploadedAtOnce: {
      id: "filesModal.tooManyFilesUploadedAtOnce",
      defaultMessage:
        "You can only upload up to {maxFiles} files at a time.",
      description:
        "Error message when too many files are uploaded at once",
    },
    totalFileSizeExceedsLimit: {
      id: "filesModal.totalFileSizeExceedsLimit",
      defaultMessage:
        "The total size of the files exceeds the limit of {maxSize}.",
      description:
        "Error message when the total file size exceeds the limit",
    },
    filesModalDescription: {
      id: "filesModal.filesModalDescription",
      defaultMessage:
        "Files can be used with the My Files Browsing model. {totalUploadedSize} / {maxFileSize} of storage used.",
      description: "Description for the files modal",
    },
    ```
  - ```js
    ((r = i || (i = {})).Uploading = "uploading"), (r.Deleting = "deleting");
    ```
  - Removed
    - ```js
      !window.confirm(m.formatMessage(ey.confirmDeleteAll)) ||
      ```
  - The following snippets are all from the same larger chunk of diff churn:
    - ```js
      eP = (0, u.useMemo)(
        function () {
          return eN.reduce(function (e, t) {
            return e + (t.size || 0);
          }, 0);
        },
        [eN]
      ),
      eZ = (0, u.useMemo)(
        function () {
          return eP / 1073741824;
        },
        [eP]
      ),
      ```
    - ```js
      if (e.length > 10)
        return (
          em.m.warning(
            m.formatMessage(ey.tooManyFilesUploadedAtOnce, {
              maxFiles: 10,
            })
          ),
          [2]
        );
      ```
      - Can upload max of 10 files at once
    - ```js
      if (((l = s.value), (t += l.size) > 2147483648)) {
        em.m.warning(
          m.formatMessage(ey.totalFileSizeExceedsLimit, {
            maxSize: "".concat(2, "GB"),
          })
        );
        break;
      }
      ```
      - Total cumulative file sizes can't exceed 2GB
    - ```js
      if (
        ((u = l.name),
        B.filter(function (e) {
          return e.use_case === eu.Ei.MyFiles;
        }).find(function (e) {
          return e.name === u;
        }))
      )
        try {
          u = eC(u, B);
        } catch (e) {
          em.m.warning(
            m.formatMessage(ey.tooManyFilesWithSameName)
          );
          break;
        }
      ```
    - ```js
      (d = {
        id: "",
        name: u,
        ready_time: new Date().toISOString(),
        use_case: eu.Ei.MyFiles,
        size: l.size,
        state: i.Uploading,
      }),
        N(function (e) {
          return (0, eo._)(e).concat([d]);
        }),
        (c = new File([l], u, { type: l.type })),
        K.mutate(c);
      ```
  - ```js
    (0, C._)((0, h._)({}, ey.filesModalDescription), {
      values: {
        totalUploadedSize: (0, l.jsx)("span", {
          className: "font-bold",
          children: "".concat(
            Number(eZ).toPrecision(2),
            "GB"
          ),
        }),
        maxFileSize: "".concat(2, "GB"),
      },
    })
    ```
  - ```js
    children: [
      (0, l.jsxs)(ec.Z.Item, {
        onClick: ea,
        className: "flex gap-2",
        children: [
          (0, l.jsx)(w.ZP, {
            icon: x._hL,
            size: "small",
          }),
          (0, l.jsx)("span", {
            children: m.formatMessage(
              ey.downloadAll
            ),
          }),
        ],
      }),
      (0, l.jsxs)(ec.Z.Item, {
        onClick: er,
        className: "flex gap-2",
        children: [
          (0, l.jsx)(w.ZP, {
            icon: x.Ybf,
            size: "small",
          }),
          (0, l.jsx)("span", {
            children: m.formatMessage(
              ey.deleteAll
            ),
          }),
        ],
      }),
    ],
    ```
  - ```js
    (0, l.jsx)($.Z, {
      isOpen: H,
      onClose: function () {
        return W(!1);
      },
      type: "danger",
      title: m.formatMessage(ey.confirmDeleteAll),
      primaryButton: (0, l.jsx)(J.ZP.Button, {
        title: m.formatMessage(ey.deleteAll),
        color: "danger",
        onClick: ei,
      }),
      secondaryButton: (0, l.jsx)(J.ZP.Button, {
        title: m.formatMessage(ey.deleteHistoryModalCancel),
        color: "neutral",
        onClick: el,
      }),
    }),
    (0, l.jsx)($.Z, {
      isOpen: Q,
      onClose: function () {
        return Y(!1);
      },
      type: "success",
      title: m.formatMessage(ey.confirmDownloadAll),
      primaryButton: (0, l.jsx)(J.ZP.Button, {
        title: m.formatMessage(ey.downloadAll),
        color: "primary",
        onClick: ep,
      }),
      secondaryButton: (0, l.jsx)(J.ZP.Button, {
        title: m.formatMessage(ey.confirmCancelDownloadAll),
        color: "neutral",
        onClick: ej,
      }),
    }),
    ```
  - This part about 'plugin reviewer' isn't new, but I hadn't noticed it before:
    - ```js
      children: [
        "Please enable a localhost plugin",
        " ",
        A && " (or any plugin if you're a plugin reviewer) ",
        "to use devtools.",
      ],
      ```
- `unpacked/_next/static/chunks/709.js`
  - ```diff
    - var nH = ["#ab68ff"];
    + var nH = ["#7989FF"];
    ```
  - ```diff
      (0, y.jsxs)(n0, {
    +   $isStaticSharedThread: T,
        $isDesktopNavCollapsed: en,
        $isMessageRedesign: J,
    ```
  - ```js
    function (e) {
      return e.$isStaticSharedThread ? "pl-0 pr-4" : "";
    }
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-a3bbd8997fe0f8e4.js
https://chat.openai.com/_next/static/chunks/709-74a24b5cf35d07f9.js
https://chat.openai.com/_next/static/chunks/pages/_app-12cc5faa218e237a.js
https://chat.openai.com/_next/static/chunks/webpack-a3f803c49aba2f8d.js
https://chat.openai.com/_next/static/WLHd8p-1ysAW_5sZZPJIy/_buildManifest.js
https://chat.openai.com/_next/static/WLHd8p-1ysAW_5sZZPJIy/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-a3f803c49aba2f8d.js`

#### Archived

```
https://chat.openai.com/_next/static/css/2ae5d0bc3600f3f7.css
```

## 2023-06-29Z (`HIPozMBuTaTl2Vucglu5e`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Added a new `oai/apps/hasUserContextFirstTime/2023-06-29` section + a number of changes related to `UserContextFirstTimeModal`, and some more changes to `userContextModal`
  - Link to a FAQ on how data is used: https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq
  - Links to usage policies and 'ChatGPT — Feedback' form:
    - https://platform.openai.com/docs/usage-policies/content-policy
    - https://forms.gle/3gyAMj5r5rTEcgbs5
  - A number of changes related to `BrowsingPluginTool` / `BrowsingPlugin` (`PluginTool`), which seems to suggest that perhaps there will be an upcoming feature allowing 'Browsing' mode to be used at the same time as 'Plugins'? (or alternatively, this may related to the 'file search/open' features mentioned below)
  - Some changes related to `myfilesbrowsing`, and the `browsingMessage` namespace; with changes seeming to relate to an upcoming feature for searching and opening files
  - Some changes around `invoked_plugin`/etc to add a new `parsed_function_call`, as well as a number of changes related to `isPlugin`; I wonder if this means that there might be some upcoming support for generic 'function calling' features that recently got added to the OpenAI API models? ([Ref](https://openai.com/blog/function-calling-and-other-api-updates))
    - This seems to be added in the message metadata, which sounds like it will be a feature related to plugins: `metadata?.invoked_plugin?.parsed_function_call?.kwargs?.query`
  - More minor tweaks/refinements to some of the text related to the upcoming 'user context' / 'chat preferences' feature
- `unpacked/_next/static/chunks/496.js`
  - ```diff
    - className: "inline align-top font-medium capitalize",
    + className: "inline align-top font-medium",
    ```
  - ```diff
    - className: "text-base capitalize text-white",
    + className: "text-base text-white",
    ```
  - ```diff
    - "grow overflow-hidden text-ellipsis whitespace-nowrap text-left capitalize text-white",
    + "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
    ```
  - The following changes are all in the same diff block, but i'm leaving out large chunks of uninteresting looking bits:
    - ```js
      D = ""
        .concat("oai/apps/hasUserContextFirstTime", "/")
        .concat("2023-06-29"),
      ```
    - ```js
      U = (0, x.vU)({
        title: {
          id: "UserContextFirstTimeModal.title",
          defaultMessage: "Tell ChatGPT how to improve its responses for you",
          description: "Title of the UserContextFirstTimeModal",
        },
        body1: {
          id: "UserContextFirstTimeModal.body1",
          defaultMessage:
            "Share anything you’d like for ChatGPT to consider in forming its responses.",
          description:
            "Body of the first paragraph UserContextFirstTimeModal",
        },
        body2: {
          id: "UserContextFirstTimeModal.body2",
          defaultMessage:
            "Your instructions will be added to the conversations you start going forward, and you can edit or delete it at any time.",
          description:
            "Body of the second paragraph UserContextFirstTimeModal",
        },
        legal1: {
          id: "UserContextFirstTimeModal.legal1",
          defaultMessage:
            "<strong>Important:</strong> This information will also be used to improve model performance – like teaching the model how to adapt its responses to your instructions without overdoing it.",
          description:
            "Legal text of the first paragraph UserContextFirstTimeModal",
        },
        legal2: {
          id: "UserContextFirstTimeModal.legal2",
          defaultMessage:
            "<article>Learn more</article> about how we use your data and how you can opt out.",
          description:
            "Legal text of the second paragraph UserContextFirstTimeModal",
        },
        ok: {
          id: "UserContextFirstTimeModal.ok",
          defaultMessage: "OK",
          description: "Button to close the UserContextFirstTimeModal",
        },
      }),
      ```
  - ```js
    profileSubhead: {
      id: "userContextModal.subhead",
      defaultMessage:
        "<article>Learn more</article> about chat preferences and how they’re used to help ChatGPT provide better responses.",
      description: "subhead for chat preferences modal",
    },
    ```
  - ```js
    modApiVoilation: {
      id: "userContextModal.modApiVoilation",
      defaultMessage:
        "This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
      description: "error message for mod api voilation",
    },
    ```
  - ```js
     R = "https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",
    ```
  - ```js
    (0, i._)((0, a._)({}, A.modApiVoilation), {
      values: {
        policyLink: function (e) {
          return (0, l.jsx)("a", {
            href: "https://platform.openai.com/docs/usage-policies/content-policy",
            className: "underline",
            target: "_blank",
            rel: "noreferrer",
            children: e,
          });
        },
        feedbackLink: function (e) {
          return (0, l.jsx)("a", {
            href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
            className: "underline",
            target: "_blank",
            rel: "noreferrer",
            children: e,
          });
        },
      },
    }),
    ```
  - ```diff
    -   (r[(r.Unknown = 8)] = "Unknown");
    - var s = [];
    +   (r[(r.BrowsingPlugin = 8)] = "BrowsingPlugin"),
    +   (r[(r.BrowsingPluginTool = 9)] = "BrowsingPluginTool"),
    +   (r[(r.Unknown = 10)] = "Unknown");
    + var s = ["myfilesbrowsing"];
    ```
  - ```diff
    - if (
    -   "browser" === e.recipient ||
    -   "browser_one_box" === e.recipient ||
    -   (null != t && s.includes(t.pluginNamespace))
    - )
    + if ("browser" === e.recipient || "browser_one_box" === e.recipient)
    ```
  - ```diff
    - if (null != t) return a.Plugin;
    + if (null != t)
    +   return s.includes(t.pluginNamespace) ? a.BrowsingPlugin : a.Plugin;
    ```
  - ```diff
    - "browsing_team" === e.author.name ||
    - (null != n && s.includes(n.pluginNamespace))
    + "browsing_team" === e.author.name
    ```
  - ```diff
    - return a.PluginTool;
    + return null != n && s.includes(n.pluginNamespace)
    +   ? a.BrowsingPluginTool
    +   : a.PluginTool;
    ```
- `unpacked/_next/static/chunks/709.js`
  - ```js
    startingFileSearch: {
      id: "browsingMessage.startingFileSearch",
      defaultMessage: "Searching files...",
      description: "Status message when searching files is starting",
    },
    ```
  - ```js
    finishedFileSearch: {
      id: "browsingMessage.finishedFileSearch",
      defaultMessage: "Finished searching files",
      description: "Status message when searching files is finished",
    },
    ```
  - ```diff
    - searchInProgress: {
    -   id: "browsingMessage.command.search.inProgress",
    + searchInProgressWeb: {
    +  id: "browsingMessage.command.search.inProgress.web",
    ```
  - ```js
    searchInProgressFiles: {
      id: "browsingMessage.command.search.inProgress.files",
      defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
      description: "Browsing command to search files is in progress",
    },
    ```
  - ```diff
    - searchFinished: {
    -  id: "browsingMessage.command.search.finished",
    + searchFinishedWeb: {
    +   id: "browsingMessage.command.search.finished.web",
    ```
  - ```js
    searchFinishedFiles: {
      id: "browsingMessage.command.search.finished.files",
      defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
      description: "Browsing command to search files finished",
    },
    ```
  - ```js
    openFileInProgress: {
      id: "browsingMessage.command.openFile.inProgress",
      defaultMessage: "Opening a file...",
      description: "Browsing command to click on a link is in progress",
    },
    ```
  - ```js
    openFileFinished: {
      id: "browsingMessage.command.openFile.finished",
      defaultMessage: "Opened a file",
      description: "Browsing command to click on a link finished",
    },
    ```
  - ```js
    openFileError: {
      id: "browsingMessage.command.openFile.error",
      defaultMessage: "Opening file failed",
      description: "Browsing command to click on a link failed",
    },
    ```
  - ```js
    return l
      ? (a
          ? (t =
              null === (i = l.invoked_plugin) || void 0 === i
                ? void 0
                : null === (o = i.parsed_function_call) ||
                  void 0 === o
                ? void 0
                : o.name)
          : ((t = l.command), (r = l.status)),
        null == t)
        ? null
        : {
            type: t,
            status: r,
            didError: "system_error" === e.content.content_type,
            message: e,
          }
      : null;
    ```
  - ```diff
    - ? (o.push((0, y.jsx)(tt, {}, "finished")),
    -   (t = (0, y.jsx)(tt, { compact: !0 })))
    - : 0 === o.length
    - ? (o.push((0, y.jsx)(te, {}, "waiting")),
    -   (t = (0, y.jsx)(te, { compact: !0 })))
    - : "finished" === s[s.length - 1].status &&
    + ? (l.push((0, y.jsx)(nn, { isPlugin: a }, "finished")),
    +   (n = (0, y.jsx)(nn, { isPlugin: a, compact: !0 })))
    + : 0 === l.length
    + ? (l.push((0, y.jsx)(ne, { isPlugin: a }, "waiting")),
    +   (n = (0, y.jsx)(ne, { isPlugin: a, compact: !0 })))
    + : "finished" === o[o.length - 1].status &&
    ```
    - Basically added the `isPlugin` part to this check
  - ```js
    n ||
      (n = (0, y.jsx)(e5, {
        command: o[o.length - 1],
        isPlugin: a,
        compact: !0,
      }));
    ```
  - ```diff
      var n = e.command,
    +     t = e.isPlugin,
          r = e.compact;
    ```
  - ```diff
    + (a = t
    +     ? null === (i = n.message.metadata) || void 0 === i
          ? void 0
    -     : null === (s = i.args) || void 0 === s
    +     : null === (s = i.invoked_plugin) || void 0 === s
          ? void 0
    -      : s[0];
    - if (null == o) return null;
    +     : null === (o = s.parsed_function_call) || void 0 === o
    +     ? void 0
    +     : null === (l = o.kwargs) || void 0 === l
    +     ? void 0
    +     : l.query
    +   : "browser_one_box" === n.message.author.name
    +   ? null === (u = n.message.metadata) || void 0 === u
    +     ? void 0
    +     : null === (c = u._cite_metadata) || void 0 === c
    +     ? void 0
    +     : c.original_query
    +   : null === (d = n.message.metadata) || void 0 === d
    +   ? void 0
    +   : null === (m = d.args) || void 0 === m
    +   ? void 0
    +   : m[0])
    ```
    - To break that down and make it more readable, here is a reformatted snippet of code that does basically the same thing:
      - ```js
        let metadata = n.message?.metadata;

        if (t) {
            a = metadata?.invoked_plugin?.parsed_function_call?.kwargs?.query;
        } else if (n.message?.author?.name === "browser_one_box") {
            a = metadata?._cite_metadata?.original_query;
        } else {
            a = metadata?.args?.[0];
        }
        ```
  - ```diff
      searchQuery: a,
      isComplete: "finished" === n.status,
    + isPlugin: t,
      compact: r,
    ```
  - ```js
    s = r ? e1.searchInProgressFiles : e1.searchInProgressWeb,
    o = r ? e1.searchFinishedFiles : e1.searchFinishedWeb;
    ```
  - ```diff
      var n,
    +     t = e.isPlugin,
          r = e.pageInfo,
          a = e.compact,
    +     i = t ? e1.openFileInProgress : e1.clickInProgress,
    +     s = t ? e1.openFileFinished : e1.clickFinished;
    ```
  - ```diff
    + var n = e.isPlugin,
          t = e.compact,
    +     r = n ? e1.startingFileSearch : e1.startingBrowsing;
    ```
  - ```js
    (a[(a.BrowsingPlugin = 6)] = "BrowsingPlugin");
    ```
  - ```diff
    - } else if (r === eq.Cs.Plugin || r === eq.Cs.PluginTool) {
    + } else if (
    +             r === eq.Cs.BrowsingPlugin ||
    +             r === eq.Cs.BrowsingPluginTool
    +           ) {
        var l = e[e.length - 1];
    +   (null == l ? void 0 : l.type) === d.BrowsingPlugin
    +     ? l.messages.push(n)
    +     : e.push({ type: d.BrowsingPlugin, messages: [n] });
    +} else if (r === eq.Cs.Plugin || r === eq.Cs.PluginTool) {
    +   var u = e[e.length - 1];
    ```
  - ```diff
      case d.Browsing:
    + case d.BrowsingPlugin:
        var i = n.messages[n.messages.length - 1];
    ```
  - ```diff
      userContextCustomProfileDisclaimer: {
        id: "sharedConversation.userContextCustomProfileDisclaimer",
        defaultMessage:
    -     "The creator of this chat is using a custom profile, which can meaningfully change how the model responds.",
    +     "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds.",
    ```
  - ```diff
      userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
        id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
        defaultMessage:
    -     "The creator of this chat is using a custom profile, which can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
    +     "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
    ```
  - ```diff
      userContextCustomProfileDisclaimer: {
            id: "sharingModal.userContextCustomProfileDisclaimer",
    -       defaultMessage:
    -         "Your custom profile data won’t be shared with recipients.",
    +       defaultMessage: "Your chat preferences won’t be shared with viewers.",
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-ae0fa506c31a3f33.js
https://chat.openai.com/_next/static/chunks/709-a9fffc6ae6d7aceb.js
https://chat.openai.com/_next/static/chunks/pages/_app-86cc76d98e277e37.js
https://chat.openai.com/_next/static/chunks/webpack-2a2d7d1690339bba.js
https://chat.openai.com/_next/static/HIPozMBuTaTl2Vucglu5e/_buildManifest.js
https://chat.openai.com/_next/static/HIPozMBuTaTl2Vucglu5e/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-2a2d7d1690339bba.js`

N/A

## 2023-06-29Z (`Qr8FFr6F9GQHixKSXgAke`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Not much changed in this build, the most notable thing was probably extracting the URL for bing into `getBingLink`, which removed the domain prefix, implying that it's now using a route on the ChatGPT site itself. Playing around a little, this seems to exist at the following URL:
    - https://chat.openai.com/backend-api/bing/redirect?query=
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (U.getBingLink = function (U) {
      var B = new URLSearchParams({ query: U.query });
      return "".concat(tb, "/bing/redirect?").concat(B);
    }),
    ```
- `unpacked/_next/static/chunks/496.js`
  - Removed
    - ```js
      ok: {
        id: "userContextModal.ok",
        defaultMessage: "OK",
        description: "OK button for chat preferences modal",
      },
      ```
  - ```js
    j.m.logEvent(
      "chatgpt_user_context_modal__message_past_limit",
      void 0,
      {
        type: "about_user_message",
        limit: A.toString(),
        character_length:
          null !==
            (e = null == G ? void 0 : G.length.toString()) &&
          void 0 !== e
            ? e
            : "",
      }
    ),
    ```
  - ```js
    j.m.logEvent(
      "chatgpt_user_context_modal__message_past_limit",
      void 0,
      {
        type: "about_model_message",
        limit: A.toString(),
        character_length:
          null !==
            (t = null == $ ? void 0 : $.length.toString()) &&
          void 0 !== t
            ? t
            : "",
      }
    ),
    ```
  - Removed
    - ```js
      primaryButton: (0, s.jsx)(M.ZP.Button, {
        color: "primary",
        onClick: function () {
          return I(!0);
        },
        children: (0, s.jsx)(b.Z, (0, a._)({}, Z.ok)),
      }),
      ```
- `unpacked/_next/static/chunks/709.js`
  - ```diff
    - var n = "https://www.bing.com/search?q=".concat(
    -   encodeURIComponent(t)
    - );
    + var n = ea.ZP.getBingLink({ query: t });
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/259.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/496-40c423232458bf30.js
https://chat.openai.com/_next/static/chunks/709-2241f1fa9eb7c72c.js
https://chat.openai.com/_next/static/chunks/pages/_app-cbf3145722ad53e4.js
https://chat.openai.com/_next/static/chunks/webpack-381bb6c9ae19a9a1.js
https://chat.openai.com/_next/static/Qr8FFr6F9GQHixKSXgAke/_buildManifest.js
https://chat.openai.com/_next/static/Qr8FFr6F9GQHixKSXgAke/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/259-9eec5b7917dedb5d.js
```

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

## 2023-06-15Z (`OYOAZ1aqhcJ0ghEfSRnPf`) (or thereabouts..) `[not archived]`

### Notes

The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.

### Not From Build Manifest

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/734-03d9df820e6eda51.js
https://cdn.oaistatic.com/_next/static/chunks/97-864d9cafbfb4c1dc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-b505480c5fdf1ff2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-811addf93867c009.js
https://cdn.oaistatic.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_buildManifest.js
https://cdn.oaistatic.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_ssgManifest.js
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
