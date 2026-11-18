# JB HUB

> **JB HUB** — a free, ad-free cloud workspace and Cyber Arcade built with HTML, CSS, JavaScript, Tailwind CSS, Firebase and Font Awesome.

🌐 **Live website:** https://jbhub.ryzn.pro/

## ✨ Overview

JB HUB combines an account-based workspace with an online arcade and community features, wrapped in a dark glassmorphism design with animated purple / pink / blue effects, responsive layouts and four graphics modes for any device.

## 🚀 Features

### 🔐 Accounts
- Sign up with email verification, or continue with Google
- Log in with username or email
- Password-strength indicator (minimum 8 characters for new passwords), confirm-password check, human-verification test
- Account and session safety checks, one-device session protection
- Ban / account-status handling, saved accounts on the device (password encrypted on the device)
- Change username, email, password; full account deletion (also removes your notes, bug reports, chat messages and scores)

### ☁️ Cloud workspace
- Firebase Realtime Database + Firebase Authentication + App Check
- Private cloud notes, global chat (messages follow your username changes), bug reports and suggestions
- Live leaderboards for every game
- Dynamic About Us, rules and Special Thanks content

### 🎮 Cyber Arcade (11 games)
Snake, Memory, Flappy, Glitch, Breakout, 2048, Neon Dodger, Space Invaders and more, each with a global leaderboard.

### 🧰 Extra tools
- **JB AI** – built-in offline assistant (`jb-ai.js`)
- **JB TV** – https://tv.jbhub.ryzn.pro
- **JB GUARD** – https://guard.jbhub.ryzn.pro

### 🛠️ Admin panel
User management, moderation (ban / unban), notes, bug reports, leaderboards, chat control, About Us / rules / Special Thanks, section maintenance, shutdown / online controls. Admin rights are stored only in the database (`/admins`) and enforced by the database rules.

### ⚡ Performance and comfort
Low-graphics mode, animation disabling, reduced-motion support, keyboard focus outlines, responsive mobile / desktop layout, installable as an app (web manifest).

## 🧰 Technologies

| Technology | Purpose |
| --- | --- |
| HTML5 / CSS3 / JavaScript | Structure, styling, logic |
| Tailwind CSS | Utility styling |
| Font Awesome 6.4 | Icons |
| Firebase Realtime Database | Cloud data |
| Firebase Authentication | Login (email, Google) |
| Firebase App Check | Blocks traffic that is not from the real site |

## 📁 Project structure

```text
JB-HUB/
├── index.html                 main application
├── about_us.html              About Us page
├── jb-ai.js                   JB AI assistant
├── logo.png
├── og-banner.png              1200x630 social preview image
├── sitemap.xml
├── robots.txt
├── _headers                   security headers (Cloudflare Pages / Netlify)
├── database.rules.json        Firebase Realtime Database rules
├── .well-known/
│   └── security.txt
└── favicon/
    ├── favicon.svg
    ├── favicon-96x96.png
    ├── apple-touch-icon.png
    ├── web-app-manifest-192x192.png
    ├── web-app-manifest-512x512.png
    └── site.webmanifest
```

## ⚙️ Running the project

Serve the folder with any local HTTP server (opening `index.html` with `file://` does not work correctly with Firebase). Deploy on any static host (Cloudflare Pages, Netlify, GitHub Pages, …).

## 🔥 Firebase and security

JB HUB uses its own Firebase project. The Firebase web configuration is public by design; **the database rules are the real security**.

Checklist before every release:
1. Publish `database.rules.json` and test it in the Rules Playground (sign up, notes, chat, scores, rename, delete, admin).
2. Keep **App Check enforcement** on for Realtime Database and Authentication once real users pass it.
3. Admin rights only in `/admins`, never trusted from the browser.
4. No private keys or secrets in frontend code.
5. Security headers from `_headers` are active (check with securityheaders.com).
6. Re-check the Content Security Policy in `index.html` after adding any new external script, font, image host or embed.
7. Review the rules whenever a feature changes.

Report security problems privately (see `.well-known/security.txt`), not in the public chat.

## 🧑‍💻 Development checklist
1. Edit `index.html`.
2. Test sign-up, login (username / email / Google), logout.
3. Test notes, chat, bug reports, rename, account delete.
4. Test every game and its leaderboard.
5. Test the admin panel with an admin account.
6. Test desktop and mobile; open the browser console and make sure there are no red CSP errors.
7. Commit and push.

## 📱 Compatibility
Modern browsers on Windows, Android, Linux, macOS, ChromeOS and iOS.

## 🌐 Links
- **Website:** https://jbhub.ryzn.pro/
- **Brand:** JB YT GAMER

## 📜 License
No license is currently specified. Add an open-source license if you want others to legally reuse the code.

## 💜 Credits
**JB HUB** — created and maintained by **Johan Biju**.
Special thanks to everyone who helps test, improve and use the platform.
