# JB HUB

> **JB HUB** --- a cloud-powered digital workspace and Cyber Arcade
> built with HTML, CSS, JavaScript, Tailwind CSS, Firebase, and Font
> Awesome.

🌐 **Live Website:** https://jbhub.ryzn.pro/

## ✨ Overview

JB HUB is an interactive web platform combining an account-based
workspace with an online arcade and community features.

The interface uses a dark glassmorphism design with animated
purple/pink/blue visual effects, responsive layouts, interactive
controls, and performance-friendly modes.

## 🚀 Features

### 🔐 Account System

-   Login and account creation
-   Username and password
-   Date-of-birth field
-   Male/Female profile selection
-   Password-strength indicator
-   Confirm-password validation
-   Human-verification test
-   Account/session safety checks
-   Ban and account-status handling
-   Other-device login protection

### ☁️ Cloud Workspace

-   Firebase Realtime Database integration
-   Notes
-   Global chat
-   Bug reports and suggestions
-   Multiple game leaderboards
-   Account information
-   Dynamic About Us, rules, and Special Thanks content

### 🎮 Cyber Arcade

The project includes browser-based games with leaderboard support,
including: - Snake - Memory - Flappy - Glitch - Breakout - 2048 - Neon
Dodger - Space Invaders

### 🛠️ Admin Panel

Administrators can manage users and platform content, including: - User
management - Username/password editing - Date-of-birth and gender
editing - Account moderation controls - Notes management - Bug reports -
Game leaderboards - Global chat/content controls - About Us and platform
rules - Special Thanks - Section maintenance - Server shutdown/online
controls

### ⚡ Performance

-   Low-graphics mode
-   Animation disabling
-   Reduced visual effects
-   Hardware-friendly UI behavior
-   Responsive mobile/desktop layout

## 🎨 Design

JB HUB uses a dark futuristic glassmorphism style with: - Purple, pink,
indigo, and blue accents - Animated `JB HUB` branding - Particle
background - Smooth transitions - Interactive buttons - Responsive cards
and controls

## 🧰 Technologies

  Technology                   Purpose
  ---------------------------- ----------------------------
  HTML5                        Page structure
  CSS3                         Styling and animations
  JavaScript                   Application logic
  Tailwind CSS                 Responsive utility styling
  Font Awesome 6.4             Icons
  Firebase Realtime Database   Cloud data
  Web hosting                  Deployment

## 📁 Project Structure

``` text
JB-HUB/
├── index.html
├── logo.png
├── favicon/
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
└── README.md
```

## ⚙️ Running the Project

### Local

Download or clone the repository and serve `index.html` with a local
HTTP server. Some Firebase/browser features may not work correctly when
the file is opened directly with `file://`.

### GitHub Pages

1.  Upload `index.html` and required assets to your repository.
2.  Open **Settings → Pages**.
3.  Select the branch containing the website.
4.  Select the publishing folder.
5.  Save and open the generated Pages URL.

## 🔥 Firebase

JB HUB uses Firebase Realtime Database.

If you create your own version, create your own Firebase project and
replace the Firebase configuration with your own project configuration.

### Security

Firebase web configuration is normally visible in client-side code. This
is not a substitute for security rules.

Before public deployment: - Restrict database reads and writes with
Firebase Security Rules. - Validate permissions server-side through
Firebase rules. - Do not trust administrator flags supplied only by the
browser. - Never put private API keys or other secrets in frontend
JavaScript. - Validate user-provided data. - Review database rules
whenever features change.

The frontend UI should not be treated as a security boundary.

## 🧑‍💻 Development

1.  Edit `index.html`.
2.  Test the interface locally.
3.  Test account and Firebase functionality.
4.  Test the Admin Panel with an authorized account.
5.  Test all arcade games and leaderboards.
6.  Test desktop and mobile layouts.
7.  Commit and push changes.

## 📱 Compatibility

Designed for modern browsers on Windows, Android, Linux, macOS,
ChromeOS, and other modern browser platforms.

## 🌐 Links

-   **Website:** https://jbhub.ryzn.pro/
-   **GitHub:** Add your repository URL here
-   **Brand:** JB YT GAMER

## 📜 License

No license is currently specified for this project. If you want others
to legally reuse, modify, or distribute the code, add an appropriate
open-source license.

## 💜 Credits

**JB HUB**\
Created and maintained by **Johan Biju**.

Special thanks to everyone who helps test, improve, and use the
platform.

------------------------------------------------------------------------
