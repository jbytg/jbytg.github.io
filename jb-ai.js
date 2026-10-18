/* ==========================================================
   JB AI  -  offline website assistant for JB HUB
   Works fully in the browser (no API key, no server).
   Loaded by index.html with:  <script src="jb-ai.js"></script>
   To teach it something new, add an entry to KNOWLEDGE below
   (id, title, keys = words/phrases people may type, answer).
   ========================================================== */
(function () {
  'use strict';

  /* ---------------- 1. KNOWLEDGE BASE ---------------- */
  const SITE = {
    name: 'JB HUB',
    url: 'https://jbhub.ryzn.pro/',
    credit: 'JB YT GAMER',
    owner: 'Johan Biju',
    email: 'johanbiju15@gmail.com'
  };

  const KNOWLEDGE = [
    {
      id: 'about',
      title: 'About JB HUB',
      keys: ['about', 'jb hub', 'jbhub', 'platform', 'details', 'info', 'introduce', 'overview', 'this website', 'this site', 'the website', 'what is this', 'website'],
      answer:
        '**JB HUB** is a Digital and Cloud Platform: an all-in-one **Cloud Workspace** and **Cyber Arcade**.\n' +
        'It is free, fast and completely **ad-free**, built for both work (notes, chat) and play (8 arcade games).\n' +
        'Website: ' + SITE.url + '\nOwner: ' + SITE.owner + ' (' + SITE.email + ')'
    },
    {
      id: 'sections',
      title: 'Sections / menu',
      keys: ['section', 'sections', 'menu', 'tabs', 'pages', 'what can i do', 'navigation', 'sidebar', 'three dots', 'menu items', 'menu options'],
      answer:
        'Open the **three-dots button** (top-left) to see the menu:\n' +
        '• **Settings** – performance options\n' +
        '• **Notes** – private notes\n' +
        '• **Global Chat** – public chat\n' +
        '• **Cyber Arcade** – 8 games\n' +
        '• **Bug & Suggest** – send bugs/ideas\n' +
        '• **Leaderboard** – arcade high scores\n' +
        '• **Tools** – extra tools such as **JB TV**\n' +
        '• **Admin Message** – rules & announcements\n' +
        '• **Account** – your profile\n' +
        '• **About Us**\n' +
        '• **Admin Panel** – admins only\n' +
        '• **Logout**'
    },
    {
      id: 'notes',
      title: 'Notes',
      keys: ['note', 'notes', 'private note', 'save note', 'write note', 'diary', 'notebook', 'my notes', 'add note', 'new note', 'create note'],
      answer:
        '**Notes** (⋮ menu → Notes) keeps your private notes in the cloud:\n' +
        '• Type a **title** and your text, then press **Save Note**\n' +
        '• Saved notes appear as cards – you can **edit** or **delete** each one\n' +
        '• To colour words, **highlight them in the box first**, then choose a colour\n' +
        '• Saving needs an internet connection\n' +
        'Other users cannot see your notes.'
    },
    {
      id: 'chat',
      title: 'Global Chat',
      keys: ['chat', 'global chat', 'message', 'messages', 'talk', 'public chat', 'cooldown', 'cool off', 'delete message'],
      answer:
        '**Global Chat** is a public chat that everyone can see.\n' +
        '• Messages automatically clear every **24 hours**.\n' +
        '• There is a **5 second cooldown** between messages.\n' +
        '• You can delete your own messages anytime.\n' +
        '• Admins can clear all messages.'
    },
    {
      id: 'arcade',
      title: 'Cyber Arcade',
      keys: ['arcade', 'game', 'games', 'play', 'cyber arcade', 'how many games', 'list games', 'fun'],
      answer:
        '**Cyber Arcade** has **8 games**:\n' +
        '1. Cyber Snake\n2. Memory Matrix\n3. Cyber Flap (Flappy Bird style)\n4. Brick Breaker\n5. 2048\n6. Glitch Hunter\n7. Neon Dodger\n8. Space Invaders\n' +
        'Most have on-screen touch controls for mobile. Ask me about any game by name!'
    },
    {
      id: 'snake',
      title: 'Cyber Snake',
      keys: ['how to play snake', 'play snake', 'snake controls', 'snake keys', 'snake', 'cyber snake', 'snake game', 'snake level', 'snake speed'],
      answer: '**Cyber Snake** – eat the food to grow and score. PC: **Arrow keys or W/A/S/D**, **Space** to pause, **Enter** to restart. Mobile: use the on-screen **direction pad**.\nYou level up every **50 points** and the snake gets faster. High scores sync to the leaderboard.'
    },
    {
      id: 'memory',
      title: 'Memory Matrix',
      keys: ['how to play memory', 'play memory', 'memory controls', 'memory keys', 'memory', 'memory matrix', 'cards', 'matching', 'pairs', 'card game', 'flip cards', 'memory game'],
      answer: '**Memory Matrix** – tap two cards to flip them; matching symbols stay revealed. The cards are shuffled into new positions every game. Fewer moves and a faster time give a higher score.'
    },
    {
      id: 'flappy',
      title: 'Cyber Flap',
      keys: ['how to play flappy', 'play flappy', 'flappy controls', 'flappy keys', 'how to play flap', 'play flap', 'flap controls', 'flap keys', 'flappy', 'flap', 'cyber flap', 'bird', 'pipes', 'flappy bird'],
      answer: '**Cyber Flap** – PC: press **Space** or click the board to flap, **Enter** to restart. Mobile: tap the board or the flap button. Dodge the pipes; the game slowly speeds up the further you fly.'
    },
    {
      id: 'breakout',
      title: 'Brick Breaker',
      keys: ['how to play brick breaker', 'play brick breaker', 'brick breaker controls', 'brick breaker keys', 'how to play breakout', 'play breakout', 'breakout controls', 'breakout keys', 'breakout', 'brick', 'bricks', 'brick breaker', 'paddle', 'ball', 'lives', 'life'],
      answer: '**Brick Breaker** – PC: **Arrow keys or A/D** move the paddle, **Enter** restarts. Mobile: drag your finger across the board or use the buttons. You have **3 lives**; every brick adds to your score and clearing the whole board gives a bonus.'
    },
    {
      id: '2048',
      title: '2048',
      keys: ['how to play 2048', 'play 2048', '2048 controls', '2048 keys', '2048', 'tiles', 'merge', 'swipe', 'tile game', 'number game'],
      answer: '**2048** – PC: **Arrow keys or W/A/S/D** slide the tiles. Mobile: **swipe** up, down, left or right. Merge matching tiles and reach **2048** (and beyond!). Your best score is saved on this device.'
    },
    {
      id: 'glitch',
      title: 'Glitch Hunter',
      keys: ['how to play glitch hunter', 'play glitch hunter', 'glitch hunter controls', 'glitch hunter keys', 'how to play glitch', 'play glitch', 'glitch controls', 'glitch keys', 'glitch', 'glitch hunter', 'hunter', 'number keys', 'glowing tile'],
      answer: '**Glitch Hunter** – hit the glowing tile before it vanishes. PC: press the number keys **1-9** that match the tile. Mobile: tap the tile. You get **+1** for every hit, miss **3** and it is game over. The pace ramps up as your score rises.'
    },
    {
      id: 'dodger',
      title: 'Neon Dodger',
      keys: ['dodge game', 'dodge keys', 'dodge controls', 'how to play dodge', 'play dodge', 'how to play neon dodger', 'play neon dodger', 'neon dodger controls', 'neon dodger keys', 'how to play dodger', 'play dodger', 'dodger controls', 'dodger keys', 'neon', 'dodger', 'neon dodger', 'falling blocks', 'dodge'],
      answer: '**Neon Dodger** – dodge the falling blocks and survive as long as you can. PC: **Arrow keys or A/D**. Mobile: touch buttons.'
    },
    {
      id: 'invaders',
      title: 'Space Invaders',
      keys: ['how to play space invaders', 'play space invaders', 'space invaders controls', 'space invaders keys', 'how to play invaders', 'play invaders', 'invaders controls', 'invaders keys', 'space invaders', 'invaders', 'space', 'alien', 'aliens', 'wave', 'waves'],
      answer: '**Space Invaders** – clear endless alien waves. Each wave is faster and gives more points. PC: **A/D or Arrow keys + Space** to fire. Mobile: touch controls with a FIRE button.'
    },
    {
      id: 'leaderboard',
      title: 'Leaderboard',
      keys: ['leaderboard', 'score', 'scores', 'rank', 'ranking', 'high score', 'highscore', 'top players', 'best', 'top 10', 'top ten', 'winners', 'champion'],
      answer:
        'The **Leaderboard** (⋮ menu) shows a separate **top 10** list for each arcade game: Snake, Memory, Flappy Bird, Glitch Hunter, Breakout, 2048, Neon Dodger and Space Invaders.\n' +
        'Your **username** is what appears on the boards, and you must be **logged in and online** for a score to be saved.'
    },
    {
      id: 'bugs',
      title: 'Bug & Suggest',
      keys: ['bug', 'bugs', 'report', 'suggest', 'suggestion', 'idea', 'feedback', 'bug report', 'report bug'],
      answer: '**Bug & Suggest** – have an idea or found a bug? Write a title and message there and press **Submit**. Admins can read and reply to them.'
    },
    {
      id: 'rules',
      title: 'Admin Message',
      keys: ['admin message', 'rules', 'rule', 'announcement', 'announcements', 'notice'],
      answer: '**Admin Message** shows the rules and announcements set by the admin. Check it for the latest notices.'
    },
    {
      id: 'login',
      title: 'Login & Sign up',
      keys: ['login', 'log in', 'sign in', 'signin', 'sign up', 'signup', 'register', 'create account', 'new account', 'join', 'google', 'continue with google', 'how to create account', 'how to make account', 'make account', 'make an account', 'create an account', 'open account', 'open an account', 'register account', 'how to register', 'how to sign up', 'how to join'],
      answer:
        '**Login:** enter your **username or email** and password, or press **Continue with Google**.\n' +
        '**Create Account:** choose a username (shown on leaderboards), date of birth, gender and a password (a strength bar helps you), tick **Verify as human**, then confirm via the **email verification link** we send you. ' +
        'Your account is created once the email is verified.'
    },
    {
      id: 'forgot',
      title: 'Forgot password',
      keys: ['forgot', 'forget', 'reset', 'lost password', 'password reset', 'forgot password', 'reset password', 'no account found', 'new password', 'recover account', 'recover password'],
      answer:
        'On the login screen press **Forgot password?**, type the **email** on your account and press send. You will get an email with a link to set a new password (check **spam** too). Then log in with the new password.\n' +
        'If you see **No account found with this email**, that email is not registered – check the spelling or try the email you signed up with.\n' +
        'Google accounts have no password: use **Continue with Google** instead.'
    },
    {
      id: 'password',
      title: 'Passwords',
      keys: ['password', 'strong password', 'strength', 'change password', 'password length', 'password rules', 'minimum password', 'confirm password'],
      answer:
        'Passwords must be **at least 6 characters**. The sign-up form shows a **Password Strength** bar and asks you to type it twice. To change it later go to **Account → Change Password** and enter your **current password**.\n' +
        'Passwords are verified by **Firebase Authentication**, so they are not kept as plain text in the JB HUB database. If you changed your password and cannot log in, use **Forgot password?** once to re-sync it.\n' +
        'Tip: use a strong password that you do not use on any other website, and never share it.'
    },
    {
      id: 'verify',
      title: 'Email verification',
      keys: ['verify', 'verification', 'verified', 'email link', 'human', 'human verification', 'captcha', 'human check', 'verify as human', 'arithmetic', 'math test', 'robot', 'not a robot', 'verify email'],
      answer:
        '**Email verification:** after you press Create Account we send a link to your email. Open it, return to JB HUB and press **I\'ve verified my email** (it also re-checks every few seconds). Your account is created only once the email is verified. No email? Check spam or press **Resend link**.\n' +
        '**Verify as human:** on the sign-up form tick the checkbox, press the test button and solve the small **addition sum** (for example 7 + 5). A wrong answer shows "Incorrect answer! Please try again."'
    },
    {
      id: 'account',
      title: 'Account',
      keys: ['account', 'profile', 'username', 'change username', 'email', 'dob', 'birth', 'gender', 'update account', 'edit profile'],
      answer:
        'In **Account** you can update your **username, email, date of birth, gender** and **password**. ' +
        'You must type your **current password** to save changes, and you can make up to **2 account updates per day**.'
    },
    {
      id: 'delete',
      title: 'Delete account',
      keys: ['delete account', 'remove account', 'danger zone', 'close account', 'delete my account', 'erase account', 'deactivate', 'delete everything'],
      answer: 'Go to **Account → Danger Zone → Delete My Account**. A confirmation window appears first. Deleting permanently removes your private notes and account records, so it **cannot be undone**.'
    },
    {
      id: 'settings',
      title: 'Settings / graphics modes',
      keys: ['settings', 'setting', 'graphics', 'graphic', 'graphics mode', 'graphics settings', 'low graphics', 'medium graphics', 'high graphics', 'ultra graphics', 'quality', 'default graphics', 'performance', 'lag', 'slow', 'laggy', 'lagging', 'lags', 'freeze', 'stuck', 'fast', 'speed', 'animation', 'animations', 'particles', 'blur', 'glow', 'low mode', 'ultra mode', 'optimize', 'reduce motion', 'smooth', 'hang', 'hanging', 'battery', 'fps'],
      answer:
        'Open **Settings** from the ⋮ menu (it is available even before login) and choose a **graphics mode**:\n' +
        '• **Low** – static background, no blur, no animations (best for slow phones)\n' +
        '• **Medium** – light animated background, smooth and battery friendly (**default for every new user**)\n' +
        '• **High** – glass blur, glowing text and buttons\n' +
        '• **Ultra** – sharper, denser background and extra glow (needs a strong device)\n' +
        'Tap a mode, then press **Confirm**. Your choice is saved on this device. If the site lags, switch to **Low**.\n' +
        'The window also shows whether your device\'s own **Reduce Motion** setting is on – if it is, motion looks switched off whatever mode you pick.'
    },
    {
      id: 'admin',
      title: 'Admin Panel',
      keys: ['admin', 'admin panel', 'administrator', 'moderator', 'manage', 'control', 'admin powers', 'what can admin do', 'become admin', 'get admin'],
      answer:
        'The **Admin Panel** is only visible to admins. Admins can:\n' +
        '• edit the About text, rules and Special Thanks\n' +
        '• set **section maintenance** or a full **Server Shutdown**\n' +
        '• manage user accounts (see who is online/offline, give **temporary or permanent bans** with a reason, send a **password reset email** – admins cannot see passwords)\n' +
        '• read bug reports, set **Pending / In Progress / Solved** and reply\n' +
        '• manage leaderboard entries for all 8 games\n' +
        '• control notes and clear Global Chat\n' +
        'Admin access is given by the owner, so it cannot be requested here.'
    },
    {
      id: 'maintenance',
      title: 'Maintenance / shutdown',
      keys: ['maintenance', 'under maintenance', 'shutdown', 'shut down', 'server down', 'back soon', 'site down', 'locked section', 'section locked', 'black screen', 'temporarily closed'],
      answer:
        'Admins can put one of these sections **under maintenance**: Notes, Global Chat, Cyber Arcade, Bug & Suggest, Leaderboard or Tools. They can also run a full **Server Shutdown**: a full-screen message with no close button that blocks all regular users until an admin turns it off.\n' +
        'During that time please wait and come back later. If it lasts very long, email **' + SITE.email + '**.'
    },
    {
      id: 'banned',
      title: 'Suspended account',
      keys: ['suspended', 'banned', 'ban', 'blocked', 'temporary ban', 'permanent ban', 'unban', 'appeal', 'why banned', 'ban reason', 'suspension', 'account suspended', 'got banned', 'i am banned'],
      answer:
        '**Account Suspended** means an admin banned the account. The screen shows the ban type (**Temporary** or **Permanent**) and the **reason**. A temporary ban lifts automatically on the date shown.\n' +
        'If you think it is a mistake, email the owner at **' + SITE.email + '** with your username. (The different message **Logged Out For Safety** just means your account was logged in on another device.)'
    },
    {
      id: 'security',
      title: 'Security & data',
      keys: ['secure', 'security', 'safe', 'safety', 'firebase', 'database', 'cloud', 'sync', 'hacked', 'hacker', 'trust', 'trustworthy', 'scam', 'fake', 'legit', 'is it safe'],
      answer:
        'JB HUB is a cloud platform: accounts, notes, chat and leaderboards are synced through **Firebase** (database + authentication) over the internet. Your notes are private to your account.\n' +
        'Passwords are checked by **Firebase Authentication** on Firebase\'s servers, which also **blocks repeated wrong guesses**. For protected accounts the password is **not stored in the JB HUB database**, and admins cannot see it.\n' +
        'To stay safe: never share your password, use one you do not use elsewhere, log out on shared devices, and do not store very sensitive information in notes. If you notice something suspicious, email **' + SITE.email + '**.'
    },
    {
      id: 'price',
      title: 'Free / ads',
      keys: ['is it free', 'is jb hub free', 'is free', 'free to use', 'free or paid', 'any charges', 'any fees', 'fees', 'subscription', 'premium', 'donate', 'paid or free', 'free', 'cost', 'price', 'paid', 'money', 'ads', 'ad-free', 'advertisement', 'pay'],
      answer: 'JB HUB is **100% free** and **completely ad-free**.'
    },
    {
      id: 'mobile',
      title: 'Mobile support',
      keys: ['mobile', 'phone', 'android', 'iphone', 'ios', 'touch', 'tablet', 'responsive', 'device', 'pc', 'keyboard', 'controls'],
      answer: 'JB HUB works on phones, tablets and PC. Games have **on-screen touch controls** for mobile and **keyboard controls** (arrow keys / A-D / Space) on PC.'
    },
    {
      id: 'creator',
      title: 'Creator / thanks',
      keys: ['creator', 'owner', 'made by', 'who made', 'developer', 'author', 'special thanks', 'credit', 'jb yt gamer', 'youtube', 'who created', 'founder', 'johan', 'biju', 'johan biju', 'who built', 'who owns', 'your owner', 'your creator', 'owner name', 'creator name', 'who is johan', 'who developed', 'who designed', 'who coded', 'who is the owner', 'who made this', 'who made this website', 'who made this site', 'who created this', 'who made it', 'who is behind', 'who runs this', 'who created jb hub', 'who made jb hub'],
      answer:
        'JB HUB was created by **Johan Biju**.\n' +
        'Contact: **' + SITE.email + '**\n' +
        'Under **About Us → Special Thanks** the site credits **' + SITE.credit + '**.'
    },
    {
      id: 'link',
      title: 'Website link',
      keys: ['link', 'url', 'address', 'domain', 'open website', 'visit', 'website link', 'site link', 'share', 'invite', 'invite friends'],
      answer: 'Official website: **' + SITE.url + '**\nShare this link with friends so they can join too!'
    },
    {
      id: 'tech',
      title: 'Technology',
      keys: ['tech', 'technology', 'built with', 'made with', 'framework', 'tailwind', 'html', 'javascript', 'stack', 'source code'],
      answer: 'The site is a single-page web app using **HTML, JavaScript, Tailwind CSS, Font Awesome** and **Firebase** (Realtime Database + Authentication).'
    },
    {
      id: 'logout',
      title: 'Logout',
      keys: ['logout', 'log out', 'sign out', 'signout', 'exit'],
      answer: 'Open the three-dots menu and press **Logout** (red button at the bottom).'
    },

    /* ====== NEW: location, features, purpose, getting started ====== */
    {
      id: 'menu_location',
      title: 'Where is the menu',
      keys: ['main menu', 'where is menu', 'where is the menu', 'menu located', 'menu location', 'menu button', 'find menu', 'open menu', "cant find menu", "can't find menu", 'locate menu', 'where menu', 'menu missing', 'no menu', 'side menu', 'hamburger', 'where is settings', 'where is notes', 'where is chat', 'where is leaderboard', 'where are games', 'where is arcade', 'where is account', 'where is logout', 'where to find'],
      answer:
        'The **main menu** is the **three-dots button (⋮)** in the **top-left corner** of the screen. Tap it and a side menu slides in from the left.\n' +
        '• **Before login** it shows only **Settings** (the **About Us** link is on the login screen).\n' +
        '• **After login** it also shows Notes, Global Chat, Cyber Arcade, Bug & Suggest, Leaderboard, Tools, Admin Message, Account, About Us and **Logout** (red, at the bottom).\n' +
        'Tap the **×** at the top of the menu, or tap anywhere outside it, to close it.'
    },
    {
      id: 'features_all',
      title: 'Features overview',
      keys: ['all features', 'what features', 'about features', 'about the features', 'jb hub features', 'features of', 'tell about features', 'list features', 'feature list', 'main features', 'highlights', 'what does it offer', 'what do you offer', 'capabilities', 'features', 'feature'],
      answer:
        '**JB HUB features:**\n' +
        '• **Cloud Notes** – private notes with text-colour highlighting, edit and delete, synced to your account\n' +
        '• **Global Chat** – public chat that resets every 24 hours\n' +
        '• **Cyber Arcade** – 8 games with touch and keyboard controls\n' +
        '• **Leaderboards** – a separate ranking for every game\n' +
        '• **Bug & Suggest** – send bugs/ideas and read admin replies\n' +
        '• **Secure accounts** – email verification, Google login, password reset, human check\n' +
        '• **Account tools** – edit profile, change password, delete account\n' +
        '• **Performance settings** – low-lag mode for slow devices\n' +
        '• **Admin tools** – announcements, maintenance mode, moderation\n' +
        '• **100% free and ad-free**, works on phone, tablet and PC\n' +
        'Ask me about any of them for details.'
    },
    {
      id: 'purpose',
      title: 'What is it used for',
      keys: ['use', 'uses', 'useful', 'usage', 'what is the use', 'what is it used for', 'used for', 'why use', 'why should i use', 'benefit', 'benefits', 'advantage', 'advantages', 'what is it for', 'what for', 'why jb hub', 'is it worth'],
      answer:
        'JB HUB gives you one free place for **work and play**:\n' +
        '• Save **private notes** and open them again from any device\n' +
        '• Talk with other users in **Global Chat**\n' +
        '• Play **8 arcade games** and compete on **leaderboards**\n' +
        '• Send **bugs and ideas** straight to the admin\n' +
        'There are no ads, and you just open the website to use it.'
    },
    {
      id: 'getting_started',
      title: 'Getting started',
      keys: ['how to use', 'how do i use', 'how to start', 'get started', 'getting started', 'beginner', 'guide', 'tutorial', 'first time', 'new user', 'new here', 'steps', 'where to start'],
      answer:
        '**Getting started:**\n' +
        '1. Open ' + SITE.url + '\n' +
        '2. Press **Create Account** (verify your email) or **Continue with Google**\n' +
        '3. Tap the **three-dots button (⋮)** at the top-left\n' +
        '4. Pick **Notes**, **Global Chat** or **Cyber Arcade** and enjoy\n' +
        'Tip: if the site feels slow, open **Settings** and turn on the performance options.'
    },
    {
      id: 'how_play',
      title: 'How to play games',
      keys: ['how to play', 'how do i play', 'start game', 'start a game', 'play game', 'open game', 'game not starting', 'game controls', 'restart game', 'play again', 'pause'],
      answer:
        'Open the **⋮ menu → Cyber Arcade**, choose a game and press **Start** (or tap/click the game). ' +
        'On PC use **arrow keys / A-D / Space**; on mobile use the **on-screen buttons** or touch.\n' +
        'When a game ends press **Play Again**. Ask me about any game by name for its exact controls.'
    },
    {
      id: 'score_save',
      title: 'How scores are saved',
      keys: ['how to get on leaderboard', 'get on leaderboard', 'appear on leaderboard', 'not on leaderboard', 'my score not showing', 'score not showing', 'score not saving', 'score not saved', 'score missing', 'scores saved', 'save score', 'save my score', 'personal best', 'best score', 'leaderboard not updating'],
      answer:
        'To appear on the **Leaderboard**: be **logged in**, be **online**, and finish a game. Your **username** is shown and the board keeps your **best** score.\n' +
        'Games also remember your best score in your browser. If a score does not show, check your internet, refresh and try again.'
    },
    {
      id: 'notes_color',
      title: 'Notes: colour, edit, delete',
      keys: ['colour my note', 'color my note', 'colour note', 'color note', 'change colour', 'change color', 'coloured text', 'colored note', 'how to colour', 'how to color', 'color', 'colour', 'text color', 'text colour', 'highlight', 'highlight text', 'colored text', 'edit note', 'delete note', 'update note', 'format note', 'change note', 'remove note'],
      answer:
        'In **Notes** you can **edit** or **delete** a saved note from your list. To colour text, **highlight (select) the words in the note box first**, then pick a colour. ' +
        'If you see "Highlight text in the box first to apply color", you tried to colour without selecting any text.'
    },
    {
      id: 'contact',
      title: 'Contact the owner',
      keys: ['contact', 'contact owner', 'contact admin', 'contact us', 'contact email', 'email owner', 'owner email', 'owner mail', 'owner gmail', 'admin email', 'support email', 'your email', 'email address', 'mail id', 'email id', 'gmail', 'johanbiju15', 'support', 'customer care', 'talk to admin', 'talk to owner', 'speak to owner', 'report user', 'complain', 'complaint', 'reach admin', 'reach owner', 'get in touch', 'helpline', 'whatsapp', 'phone number', 'call owner', 'owner number', 'mail owner', 'send email', 'email you'],
      answer:
        '**Contact the owner:** email **' + SITE.email + '** (Johan Biju).\n' +
        'While you are logged in you can also use **Bug & Suggest** (⋮ menu) – admins read it and reply there. I do not know of a phone number, so email is the best way.\n' +
        'Tip: include your **username** and describe the problem (copy the exact red message if there was one).'
    },
    {
      id: 'future',
      title: 'New games / feature requests',
      keys: ['new game', 'new games', 'more games', 'add game', 'add a game', 'coming soon', 'upcoming', 'request feature', 'feature request', 'new feature', 'new features', 'next update'],
      answer: 'Have an idea for a new game or feature? Send it in **Bug & Suggest** – admins read every suggestion. I cannot promise what will be added, but suggestions are how the site grows.'
    },
    {
      id: 'ai_about',
      title: 'About JB AI',
      keys: ['are you chatgpt', 'are you real ai', 'are you a bot', 'are you human', 'are you ai', 'how do you work', 'chatgpt', 'gpt', 'gemini', 'offline ai', 'what can you do', 'what can you help', 'your features', 'commands', 'how to ask', 'help me'],
      answer:
        'I am **JB AI**, a helper built into JB HUB. I am **not** ChatGPT: I run in your browser and match your question to what I know about the site, so nothing you type is sent anywhere.\n' +
        'Ask me about: the **menu**, **features**, **games**, **sign-up/login**, **errors**, **chat**, **notes**, **leaderboard**, **account**, **settings**, **who made JB HUB** and more. If I do not understand, try different words.'
    },

    /* ====== NEW: error help ====== */
    {
      id: 'err_overview',
      title: 'Errors – why they happen',
      keys: ['error', 'errors', 'why error', 'why this error', 'error happens', 'error message', 'red message', 'red box', 'problem', 'problems', 'issue', 'issues', 'not working', "doesn't work", 'doesnt work', 'failed', 'something went wrong', 'troubleshoot', 'fix error', 'error fix'],
      answer:
        'A **red message** at the top of the screen means something went wrong. Tell me its exact words and I can explain it. The most common ones:\n' +
        '• **No Internet / Cant connect to server** – connection problem\n' +
        '• **Invalid username/email or password** – wrong login details\n' +
        '• **Username/email already exists** – already registered\n' +
        '• **Please wait Ns before sending another message** – chat cooldown\n' +
        '• **Daily limit reached** – only 2 account updates per day\n' +
        '• **Could not save score / leaderboard blocked** – the database could not be reached\n\n' +
        '**General fixes:** check your internet, wait a few minutes and try again (note: refreshing the page signs you out, so you would have to log in again). The site may also be in **maintenance**. If it keeps happening, report it in **Bug & Suggest** or email **' + SITE.email + '**.'
    },
    {
      id: 'err_network',
      title: 'No Internet / Cant connect to server',
      keys: ['no internet', 'cant connect', "can't connect", 'cant connect to server', 'connect to server', 'connection', 'internet', 'wifi', 'wi-fi', 'network', 'server connection', 'loading forever', 'not loading'],
      answer:
        '**No Internet** means your device is offline. **Cant connect to server** means JB HUB cannot reach its **Firebase** database at the moment.\n' +
        'Try: check Wi-Fi or mobile data, reload the page (you will need to log in again), switch off any VPN or ad-blocker that may block it, and wait a minute. ' +
        'Saving notes, chat, bug reports and scores all need a connection, so they stay blocked until it returns. If other websites load fine, JB HUB may be under **maintenance**.'
    },
    {
      id: 'err_login',
      title: 'Login errors',
      keys: ['invalid username', 'invalid password', 'wrong password', 'incorrect password', 'invalid credentials', 'invalid username or password', 'password wrong', 'not able to login', 'unable to login', 'login failed', 'login error', "cant log in", "can't log in", "cant login", "can't login", 'cannot login', 'cant sign in', "can't sign in", 'login not working', 'account uses google', 'account removed', 'renamed'],
      answer:
        'If login fails:\n' +
        '• **Invalid username/email or password** – check spelling and Caps Lock, or try your **email** instead of the username. Forgot it? Press **Forgot password?**\n' +
        '• **This account uses Google sign-in** – tap **Continue with Google** instead of typing a password.\n' +
        '• **This account was removed or renamed** – just log in again.\n' +
        '• **Could not connect this account to Firebase Authentication** – re-check the email and your current password.\n' +
        '• **Account Suspended** – an admin restricted the account; email **' + SITE.email + '**.\n' +
        '• **Security check / captcha** – appears after 3 wrong attempts; type the characters shown.\n' +
        '• **Too many attempts** – Firebase temporarily paused sign-in after repeated wrong passwords; wait a few minutes or use **Forgot password?**\n' +
        '• **No Internet / Cant connect to server** – fix your connection first.'
    },
    {
      id: 'login_captcha',
      title: 'Login captcha / too many attempts',
      keys: ['captcha', 'security check', 'verify human', 'prove human', 'prove you are human', 'wrong attempts', 'too many wrong', 'too many login', 'three times', '3 times', 'more than 3', 'captcha login', 'login captcha', 'why captcha', 'captcha appears', 'captcha not working', 'wrong captcha', 'incorrect captcha', 'new captcha', 'refresh captcha', 'cant read captcha', "can't read captcha", 'enter the characters', 'characters you see'],
      answer:
        'After **3 wrong username/email or password attempts**, a **Security check** (captcha) appears on the login form. Type the **5 characters** shown in the picture to continue.\n' +
        '• Can\'t read it? Tap the **refresh (↻) button** for a new one. A new captcha also appears after every failed attempt.\n' +
        '• **Incorrect captcha** just means the characters did not match – letters are not case-sensitive, and the code never contains 0, O, 1 or I.\n' +
        '• It disappears after a **successful login**, and old failed attempts are forgotten after **30 minutes**.\n' +
        '• Besides the captcha, **Firebase blocks repeated wrong guesses on its own servers** – if you see **Too many attempts**, wait a few minutes or use **Forgot password?**.\n' +
        'Forgot your details? Use **Forgot password?** or **Continue with Google**.'
    },
    {
      id: 'tools',
      title: 'Tools / JB TV',
      keys: ['tools', 'tool', 'tools section', 'tools menu', 'extra tools', 'jb tv', 'jbtv', 'tv', 'jb television', 'open jb tv', 'where is jb tv', 'what is jb tv'],
      answer:
        'Open the **⋮ menu → Tools** (you need to be logged in). Right now it contains **JB TV** – tap its card and it opens **https://jbhub.ryzn.pro/jb_tv/** in a **new tab**, so you do not lose your JB HUB session.\n' +
        'New tools will appear in the same place.'
    },
    {
      id: 'err_signup',
      title: 'Sign-up errors',
      keys: ['username already exists', 'username exists', 'username taken', 'email already exists', 'email already', 'already exists', 'passwords do not match', 'password mismatch', 'password too short', 'at least 6', 'weak password', 'age must be', 'account protection', 'username rules', 'username must', 'cannot contain', 'sign up error', 'signup error', "cant sign up", "can't sign up", "cant create account", "can't create account", 'valid email', 'select male or female', 'date of birth required'],
      answer:
        'Sign-up messages and what to do:\n' +
        '• **Username already exists / was just taken** – choose another username\n' +
        '• **Username must be at least 3 characters** and cannot contain **@ . # $ [ ] /**\n' +
        '• **An account with this email already exists** – press Login instead (or **Forgot password?**)\n' +
        '• **Password must be at least 6 characters / Passwords do not match** – retype both\n' +
        '• **Please enter your Date of Birth / Select Male or Female** – fill every field\n' +
        '• **Account Protection: Age must be greater than 1 year** – the date of birth looks wrong, re-check it\n' +
        '• **Please complete the human verification test** – tick **Verify as human** and solve the sum'
    },
    {
      id: 'err_verify',
      title: 'Email verification problems',
      keys: ['not receiving', 'not receiving email', 'receive email', 'receiving verification', 'verification email', 'verification email not', 'email not received', 'not receiving verification email', 'cant receive', 'did not get', 'verification link', 'verification not working', 'not received email', 'didnt get email', "didn't get email", 'did not receive', 'no email', 'resend', 'resend link', 'link expired', 'session expired', 'not confirmed verification', 'too many attempts', 'too many requests', 'verification failed', 'email not coming', 'spam', 'wait before resending', 'verified my email', 'not getting email'],
      answer:
        'Verification email problems:\n' +
        '• Check **Spam/Junk** and make sure you typed the right email.\n' +
        '• Open the link, return to JB HUB and press **I\'ve verified my email** (it also re-checks every few seconds).\n' +
        '• **Firebase has not confirmed verification yet** – the link has not been opened yet; open it, then try again.\n' +
        '• Press **Resend link** for a new one. If it says **Please wait Ns**, wait for the timer.\n' +
        '• **Too many attempts / link already sent recently** – wait a few minutes.\n' +
        '• **Session expired. Please sign up again.** – start the sign-up form again.'
    },
    {
      id: 'err_google',
      title: 'Google sign-in problems',
      keys: ['google error', 'google login', 'google not working', 'google popup', 'popup blocked', 'pop-up', 'google sign-in', 'google sign in', 'google cancelled', 'unauthorised domain', 'unauthorized domain', 'not authorised', 'local file', 'google login failed', 'google session'],
      answer:
        '• **Google pop-up blocked** – allow pop-ups for the site and try again.\n' +
        '• **Google sign-in was cancelled** – the pop-up was closed before finishing.\n' +
        '• **Google account has no verified email** – use a Google account with a verified email.\n' +
        '• **Google session expired** – start Continue with Google again.\n' +
        '• **This domain is not authorised / needs http(s), not a local file** – open the official website link instead of the file; the site owner (**' + SITE.email + '**) must also authorise the domain in Firebase.\n' +
        'First time with Google? You will choose a username, date of birth and gender to finish.'
    },
    {
      id: 'err_chat',
      title: 'Chat errors',
      keys: ['chat message not sending', 'chat not sending', 'messages not sending', 'message not send', 'not sending', 'cant send', 'cannot send', 'unable to send', 'please wait', 'wait before sending', "cant send message", "can't send message", 'message not sending', 'message cannot be empty', 'message too long', 'character limit', 'max length', 'chat error', 'chat not working', 'chat limit', 'send message'],
      answer:
        'Chat rules behind the errors:\n' +
        '• **Please wait Ns before sending another message** – there is a **5 second cooldown**.\n' +
        '• **Message cannot be empty** – type something first.\n' +
        '• Messages are limited to **500 characters**.\n' +
        '• **No Internet / Cant connect to server** – chat needs a connection.\n' +
        'Also, all chat messages clear automatically every **24 hours**.'
    },
    {
      id: 'err_save',
      title: 'Cannot save (notes, bugs, scores)',
      keys: ['could not save', "cant save", "can't save", 'not saving', 'note not saving', 'title and text', 'title and description', 'cannot be empty', 'leaderboard blocked', 'could not save score', 'bug not submitting', 'submit not working'],
      answer:
        '• **Title and text cannot be empty** (Notes) / **Title and description cannot be empty** (Bug & Suggest) – fill in both boxes.\n' +
        '• Nothing saves when you see **No Internet** or **Cant connect to server** – restore the connection and try again.\n' +
        '• **Could not save score / leaderboard blocked** – the database refused or could not be reached. Refresh and play again; if it keeps happening, report it in Bug & Suggest or email **' + SITE.email + '**.'
    },
    {
      id: 'err_limit',
      title: 'Daily update limit',
      keys: ['daily limit', 'daily limit reached', 'update limit', 'only 2 times', "cant update account", "can't update account", 'update account error', 'try again tomorrow', 'limit reached', 'account update limit'],
      answer: '**Daily limit reached** means you already updated your account **2 times today**. The limit resets the next day. Account changes also need your **current password**, so a wrong password will block the save too.'
    },

    /* ====== ROUND 2: more website questions ====== */
    {
      id: 'bug_status',
      title: 'Bug report status & replies',
      keys: ['pending', 'in progress', 'solved', 'bug report', 'report', 'bug', 'pending bug', 'pending report', 'solved bug', 'solved report', 'what is pending', 'what does pending mean', 'what does solved mean', 'what does in progress mean', 'bug status', 'status of bug', 'bug report status', 'admin reply', 'reply', 'replied', 'delete bug', 'delete my report', 'my bug', 'my report', 'my suggestion', 'bug solved', 'unsolved', 'no reply', 'when will admin reply'],
      answer:
        'Every **Bug & Suggest** report has a **status**: **Pending** (unsolved), **In Progress** (being worked on) or **Solved**. When an admin answers you will see an **Admin Reply** under your report, and you can delete your own report.\n' +
        'Replies take as long as the admin needs; for something urgent email **' + SITE.email + '**.'
    },
    {
      id: 'one_device',
      title: 'Logged Out For Safety (another device)',
      keys: ['another device', 'other device', 'two devices', 'multiple devices', 'logged out automatically', 'logged out suddenly', 'logged out for safety', 'logged out', 'signed out', 'kicked out', 'session signed out', 'same account two', 'logged in elsewhere', 'login on another phone', 'single login', 'one device', 'why logged out'],
      answer:
        '**Logged Out For Safety** appears when your account was logged in on **another device**. JB HUB allows **one active session per account**, so the older session is signed out automatically. Press **OK, Back to Login** to continue.\n' +
        'If it was not you, **change your password immediately**.'
    },
    {
      id: 'refresh_logout',
      title: 'Refresh / leaving the page',
      keys: ['refresh', 'reload', 'refresh page', 'reload page', 'after refresh', 'leave page', 'leaving page', 'close tab', 'close browser', 'back button', 'stay logged in', 'keep me logged in', 'remember me', 'auto login', 'session ended', 'terminate session', 'warning leave', 'leave site', 'are you sure you want to leave', 'logged out after refresh', 'refreshed', 'i refreshed', 'refreshed and got logged out', 'refreshed and logged out', 'reloaded', 'logged out after reload', 'lost my note', 'lost progress', 'progress lost', 'game progress lost'],
      answer:
        'Refreshing or leaving the page **ends your JB HUB session** – the browser even shows a warning first. After a refresh you must **log in again**, and anything temporary (an unsaved note in the box, a game in progress) is lost.\n' +
        'Saved notes, scores and your account stay safe in the cloud.'
    },
    {
      id: 'username_rules',
      title: 'Username rules',
      keys: ['username rules', 'username rule', 'username format', 'username allowed', 'username characters', 'choose username', 'what username', 'username length', 'special characters', 'symbols', 'username min', 'good username', 'username ideas'],
      answer:
        'A username must be **at least 3 characters**, **unique**, and **cannot contain @ . # $ [ ] /**. It is what other people see in **Global Chat** and on the **Leaderboards**, so pick one you like.\n' +
        'You can change it later in **Account** (each account update counts toward the 2-per-day limit).'
    },
    {
      id: 'multiple_accounts',
      title: 'Multiple accounts',
      keys: ['two accounts', 'multiple accounts', 'second account', 'another account', 'same email two', 'more than one account', 'many accounts', 'switch account', 'change account', 'different account'],
      answer:
        'You get **one account per email**, and every **username must be unique**. For a second account use a different email and username. To switch accounts, press **Logout** in the ⋮ menu and log in with the other one.\n' +
        'Remember: an account can be active on **only one device at a time**.'
    },
    {
      id: 'account_dob',
      title: 'Date of birth & gender',
      keys: ['why dob', 'why date of birth', 'why gender', 'why do you ask age', 'age limit', 'age requirement', 'minimum age', 'how old', 'age restriction', 'too young', 'dob wrong', 'birthday'],
      answer: 'Sign-up asks for your **date of birth** and **gender** (Male or Female) as part of your profile, and there is a basic age check – you will see **Account Protection: Age must be greater than 1 year** if the date looks wrong. You can edit both later in **Account**.'
    },
    {
      id: 'privacy',
      title: 'Privacy & your data',
      keys: ['privacy', 'privacy policy', 'terms', 'terms and conditions', 'cookies', 'personal data', 'my data', 'data collected', 'what data', 'who can see', 'see my notes', 'see my password', 'admin see', 'is my data safe', 'are my passwords safe', 'password safe', 'store password', 'delete my data', 'gdpr'],
      answer:
        'JB HUB stores your **account details, notes, chat messages and scores** in the **Firebase** cloud database, and keeps small settings (performance options, best scores) in **your browser**. Other users cannot read your notes, but the site **admins have management tools**, so do not save very sensitive things in notes. Passwords of protected accounts are verified by **Firebase Authentication** and are not stored in the database, so admins cannot see them.\n' +
        'You can erase your account and notes any time from **Account → Danger Zone**. I do not have a formal privacy policy to quote – for questions email **' + SITE.email + '**.'
    },
    {
      id: 'browser',
      title: 'Browsers & devices',
      keys: ['browser', 'chrome', 'firefox', 'safari', 'edge', 'opera', 'which browser', 'best browser', 'supported browser', 'compatible', 'compatibility', 'old phone', 'windows', 'mac', 'linux', 'laptop', 'ipad'],
      answer:
        'JB HUB is a website, so it runs in any modern, up-to-date browser (Chrome, Edge, Firefox, Safari) on phone, tablet or PC. You need an **internet connection**, and you should open the official link (' + SITE.url + ') instead of a saved file – otherwise Google login will not work.\n' +
        'If it feels slow, try the options in **Settings**.'
    },
    {
      id: 'app_install',
      title: 'Is there an app?',
      keys: ['app', 'apk', 'install', 'download', 'play store', 'app store', 'ios app', 'android app', 'add to home screen', 'download app', 'is there an app', 'pwa', 'shortcut'],
      answer: 'I do not know of a separate JB HUB app – you simply open the website: **' + SITE.url + '**. On a phone you can use your browser menu and choose **Add to Home Screen** to get a shortcut.'
    },
    {
      id: 'offline_use',
      title: 'Using JB HUB offline',
      keys: ['play offline', 'without internet', 'offline mode', 'use offline', 'work offline', 'no wifi', 'without wifi', 'no data'],
      answer: 'JB HUB needs the internet to log in and to save notes, chat, bug reports and scores – offline you will see **No Internet**. I (JB AI) keep working once the page has loaded, because I run inside your browser.'
    },
    {
      id: 'multiplayer',
      title: 'Multiplayer / playing with friends',
      keys: ['multiplayer', 'multi player', 'play with friends', 'play together', 'two player', '2 player', 'versus', 'battle friends', 'compete', 'challenge friend'],
      answer: 'All 8 arcade games are **single-player**. You compete with others through the **Leaderboards** (top 10 per game) and can talk to them in **Global Chat**.'
    },
    {
      id: 'tips',
      title: 'Game tips & recommendations',
      keys: ['tips', 'tricks', 'how to win', 'high score tips', 'strategy', 'best game', 'hardest game', 'easiest game', 'which game', 'recommend game', 'suggest game', 'bored', "im bored", "i'm bored", 'what should i play', 'favourite game', 'favorite game'],
      answer:
        '**Quick tips:**\n' +
        '• **Cyber Snake** – plan your path and keep away from walls; speed rises every 50 points\n' +
        '• **Memory Matrix** – remember card positions; fewer moves = higher score\n' +
        '• **Cyber Flap** – short, steady taps\n' +
        '• **Brick Breaker** – keep the paddle under the ball and protect your 3 lives\n' +
        '• **2048** – keep your biggest tile in one corner\n' +
        '• **Glitch Hunter** – on PC use the number keys for speed\n' +
        '• **Neon Dodger** – stay near the middle so you can dodge both ways\n' +
        '• **Space Invaders** – keep moving while you fire\n' +
        'Not sure where to start? Try **Cyber Snake** or **2048** first.'
    },
    {
      id: 'jb_meaning',
      title: 'What does JB mean',
      keys: ['what does jb mean', 'jb stand for', 'jb meaning', 'full form', 'full form of jb', 'meaning of jb hub', 'meaning of jb', 'why jb hub', 'name of the site', 'site name'],
      answer: '**JB HUB** is the name of this platform – a Cloud Workspace and Cyber Arcade created by **Johan Biju**.'
    },
    {
      id: 'security_report',
      title: 'Report a security problem',
      keys: ['security bug', 'security issue', 'vulnerability', 'found a vulnerability', 'report vulnerability', 'report security', 'exploit', 'data leak'],
      answer: 'Thank you for caring about security! Please email the details privately to **' + SITE.email + '** instead of posting them in Global Chat, and include the steps to reproduce the problem.'
    }
  ];

  const GREETINGS = ['hi', 'hello', 'hey', 'hii', 'hiii', 'heyy', 'hlo', 'hola', 'howdy', 'yo', 'sup', 'good morning', 'good evening', 'good afternoon', 'good day', 'namaste', 'namaskaram', 'vanakkam'];
  const THANKS = ['nice', 'great', 'cool', 'awesome', 'ok', 'okay', 'fine', 'perfect', 'good', 'super', 'wow', 'got it', 'understood', 'k', 'oh', 'ohh', 'i see', 'alright'];
  const BYES = ['bye', 'bye bye', 'goodbye', 'see you', 'see ya', 'cya', 'good night', 'take care', 'ok bye', 'gn', 'tata'];
  const FILLER = new Set(['jb', 'ai', 'jbai', 'bro', 'buddy', 'friend', 'there', 'sir', 'mam', 'bot', 'assistant', 'dear', 'hub', 'all', 'everyone']);

  const SUGGESTIONS = ['What is JB HUB?', 'Where is the menu?', 'Tell me the features', 'Why do I get an error?', 'List the games', 'How do I sign up?', 'Fix lag', 'Contact the owner', 'Who made this?'];

  /* ---------------- 2. THE "AI" (smart matching) ---------------- */
  const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'to', 'of', 'in', 'on', 'for', 'and', 'or', 'do', 'does', 'i', 'me', 'my', 'you', 'your', 'can', 'how', 'what', 'where', 'when', 'why', 'it', 'this', 'that', 'with', 'about', 'please', 'tell', 'there', 'any', 'have', 'has', 'be', 'at', 'from', 'get', 'am', 'im', 'was', 'will', 'would', 'could', 'should', 'so', 'if', 'then', 'its', 'we', 'us', 'our', 'they', 'them', 'he', 'she', 'his', 'her', 'did', 'been', 'being', 'just', 'some', 'want', 'know', 'need', 'like', 'very', 'really', 'also']);

  // texting shortcuts -> normal words
  const SLANG = {
    u: 'you', ur: 'your', r: 'are', y: 'why', pls: 'please', plz: 'please', plss: 'please', pleas: 'please',
    wat: 'what', wht: 'what', hw: 'how', abt: 'about', wen: 'when', wer: 'where', whr: 'where',
    wats: 'what is', whats: 'what is', "what's": 'what is', hows: 'how is', "how's": 'how is', "where's": 'where is', wheres: 'where is', "who's": 'who is',
    bcz: 'because', coz: 'because', cuz: 'because', msg: 'message', msgs: 'messages',
    acc: 'account', acct: 'account', accnt: 'account', pwd: 'password', passwd: 'password', pswd: 'password', paswrd: 'password',
    usrname: 'username', uname: 'username', lgin: 'login', logn: 'login',
    gm: 'good morning', dis: 'this', dat: 'that', tht: 'that', wid: 'with',
    lb: 'leaderboard', gms: 'games', admn: 'admin', hlp: 'help', nd: 'and', n: 'and', dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", wont: "won't"
  };

  const COMMON = ('about above after again all also always and any are ask back bad because been before best better between big both but call can change check clear close come could create day did does doing done down each easy enter even every fast feel find first fix for forgot found free from game get give going good got great had has have help here home how into just keep know last later less let like little look made make many may more most much must name need never new next not now off old once only open other our out over own page part people play please problem put question read really right run said same save say see send set should show since slow some something soon still stop such take tell than thank that their them then there these they thing think this those time too try turn under until use used user very wait want was way well went were what when where which while who why will with without work would write wrong yes yet you your hello thanks bye sorry love joke funny live from country date today tomorrow phone mobile computer laptop mode dark light sound music video photo picture image color colour language english hindi malayalam tamil school college student teacher friend family money cheap price cost buy sell shop order delivery complete finish start begin end stop pause resume restart again once twice thrice many few lot lots whole half full empty open close lock unlock safe danger hidden secret public private').split(' ');

  const KEYWORDS = new Set();
  const CAND = new Set(COMMON);
  const KNOWN = new Set(COMMON);
  STOP.forEach(function (w) { CAND.add(w); KNOWN.add(w); });

  function norm(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // Levenshtein distance with adjacent-letter swaps counted as one typo
  function lev(a, b) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > 2) return 3;
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
    return dp[a.length][b.length];
  }

  // vocabulary = every word the knowledge base uses
  KNOWLEDGE.forEach(function (e) {
    norm(e.keys.join(' ') + ' ' + e.title).split(' ').forEach(function (w) {
      if (w.length >= 3) { CAND.add(w); KNOWN.add(w); KEYWORDS.add(w); }
    });
    norm(String(e.answer).replace(/\*\*/g, '')).split(' ').forEach(function (w) { if (w) KNOWN.add(w); });
  });
  const CAND_LIST = Array.from(CAND).filter(function (w) { return w.length >= 3 && /^[a-z]+$/.test(w); });

  // Fix ONE word: texting shortcuts, joined words (mainmenu), and spelling mistakes (hapends -> happens)
  function correctWord(w) {
    if (SLANG[w]) return SLANG[w];
    if (w.length < 4 || KNOWN.has(w) || /[^a-z]/.test(w)) return w;
    if (w.length >= 6) {
      for (let i = 3; i <= w.length - 3; i++) {
        const a = w.slice(0, i), b = w.slice(i);
        if (CAND.has(a) && CAND.has(b)) return a + ' ' + b;
      }
    }
    const maxD = w.length <= 5 ? 1 : 2;
    let best = null, bestPen = 99;
    for (const c of CAND_LIST) {
      if (Math.abs(c.length - w.length) > maxD) continue;
      const d = lev(w, c);
      if (d > maxD) continue;
      const pen = d + (c[0] === w[0] ? 0 : 0.6) - (KEYWORDS.has(c) ? 0.05 : 0);
      if (pen <= maxD && pen < bestPen) { best = c; bestPen = pen; }
    }
    return best || w;
  }

  // Fix a whole (already normalised) question
  function fixQuery(q) {
    return norm(q.split(' ').map(function (w) {
      return correctWord(w.replace(/(.)\1{2,}/g, '$1$1'));
    }).join(' '));
  }

  function score(q, entry) {
    const all = q.split(' ');
    const words = all.filter(function (w) { return w && !STOP.has(w); });
    const wset = new Set(all);
    let total = 0;
    for (const key of entry.keys) {
      const k = norm(key);
      if (!k) continue;
      if (k.includes(' ')) {
        const kw = k.split(' ');
        if (q.includes(k)) total += 4 + kw.length;                              // exact phrase
        else if (kw.every(function (x) { return wset.has(x); })) total += 3 + kw.length; // same words, any order
        continue;
      }
      for (const w of words) {
        if (w === k) total += 3;
        else if (w.length > 3 && k.length > 3 && (w.startsWith(k) || k.startsWith(w))) total += 2;
        else if (w.length > 4 && k.length > 4 && lev(w, k) <= 1) total += 2; // typo tolerance
      }
    }
    // title in the query is a strong signal
    const tn = norm(entry.title);
    if (tn && q.includes(tn)) { const n = tn.split(' ').length; total += n === 1 ? 2 : 4 + 2 * n; }
    return total;
  }

  // rank every topic for a piece of text (checks the typed words AND the auto-corrected words)
  function rank(raw) {
    const o = norm(raw);
    const f = fixQuery(o);
    return KNOWLEDGE
      .map(function (e) { return { e: e, s: Math.max(score(o, e), score(f, e)) }; })
      .filter(function (x) { return x.s > 0; })
      .sort(function (a, b) { return b.s - a.s; });
  }

  const MIN_SCORE = 3;
  const MORE_RE = /^(more|tell me more|more info|more details|explain|explain more|explain it|elaborate|go on|continue|what else|anything else|next)$/;
  const AGAIN_RE = /^(again|repeat|say again|say that again|repeat that|once more)$/;
  const JOKES = [
    'Why did the gamer bring a ladder? To reach the high score!',
    'Why was the computer cold? It left its Windows open!',
    'Why do programmers prefer dark mode? Because light attracts bugs!',
    'Why did the snake win the arcade? It always knew how to grow!',
    'What do you call a sleeping bull in the arcade? A bulldozer... of high scores!'
  ];

  const state = { name: '', ranked: [], shown: new Set(), lastText: '', joke: 0 };

  function combine(list) {
    return list.map(function (e) { return '**' + e.title + '**\n' + e.answer; }).join('\n\n');
  }

  function fallback() {
    return {
      text: "Sorry, I don't have details about that yet. Try different words, or ask about the **menu, features, games, login/sign-up, errors, chat, notes, leaderboard, account, settings** or **who made JB HUB**.\n" +
        'For anything else, email the owner at **' + SITE.email + '**.',
      chips: true
    };
  }

  function reply(query) {
    const raw = String(query || '');
    const q = norm(raw);
    if (!q) return { text: 'Type a question about JB HUB and I will help.' };
    const fq = fixQuery(q);
    const core = fq.split(' ').filter(function (w) { return !FILLER.has(w); }).join(' ');
    const reply1 = function (text, chips) { state.lastText = text; return { text: text, chips: chips }; };

    // ---- a topic chip was clicked (exact title) ----
    const exact = KNOWLEDGE.find(function (e) { return norm(e.title) === q; });
    if (exact) {
      state.ranked = rank(exact.keys.slice(0, 3).join(' ')).map(function (x) { return x.e; });
      state.shown = new Set([exact.id]);
      const rel = state.ranked.filter(function (e) { return e.id !== exact.id; }).slice(0, 3).map(function (e) { return e.title; });
      return reply1(exact.answer, rel.length ? rel : true);
    }

    // ---- small talk ----
    if (GREETINGS.includes(core) || GREETINGS.includes(q.split(' ').filter(function (w) { return !FILLER.has(w); }).join(' ')))
      return reply1('Hi! I am **JB AI**, the assistant for **JB HUB**. Ask me about the menu, features, games, login, errors, chat, notes, settings or anything on this website.', true);
    if (/^(thanks|thank you|thank u|thx|tysm|ty)\b/.test(q) || /^(thanks|thank you) /.test(fq) || THANKS.includes(q))
      return reply1('You are welcome! Ask me anything else about JB HUB.');
    if (BYES.includes(q) || BYES.includes(fq)) return reply1('Bye! Have fun on JB HUB.');

    const nm = q.match(/^(?:hi |hello |hey )?my name is ([a-z][a-z .'-]{0,30})$/);
    if (nm) {
      const who = nm[1].trim().replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); });
      state.name = who;
      const creator = /^johan( biju)?$/i.test(who);
      return reply1('Nice to meet you, **' + who + '**!' + (creator ? " That is the name of JB HUB's creator." : '') + ' What would you like to know about JB HUB?');
    }
    if (/^(what'?s? is my name|do you know my name|who am i|what is my name)$/.test(q) || /\bmy name\b/.test(q) && /\b(what|know|remember)\b/.test(q))
      return reply1(state.name ? 'Your name is **' + state.name + '**.' : 'You have not told me yet. Type "my name is ..." and I will remember it for this chat.');
    if (/\b(who are you|your name|what are you)\b/.test(q))
      return reply1('I am **JB AI**, a built-in helper that knows the details of **JB HUB**. I run inside your browser, so no data is sent anywhere.');
    if (/\b(how are you|how r u|how do you do|whats up|what's up|wassup|how is it going)\b/.test(q))
      return reply1('I am doing great, thanks for asking! How can I help you with JB HUB?', true);
    if (/\b(joke|make me laugh|funny)\b/.test(q)) { const j = JOKES[state.joke++ % JOKES.length]; return reply1(j + '\n\nWant to play a game now? Ask me about the **Cyber Arcade**!'); }
    if (/\b(i love you|love you|marry me|you are the best|you are awesome)\b/.test(q))
      return reply1('Aww, thank you! I am just a helper bot, but I am happy to help you enjoy JB HUB.');
    if (/^(sorry|my bad|oops|pardon)\b/.test(q)) return reply1('No problem at all! What would you like to know?');
    if (/\b(stupid|useless|idiot|dumb|worst bot|bad bot|nonsense)\b/.test(q))
      return reply1('Sorry I could not help properly. Try asking in different words, or email the owner at **' + SITE.email + '** and they will help you.');
    if (/\b(what time|current time|time now|what date|todays date|today date|what day)\b/.test(q))
      return reply1('Your device says it is **' + new Date().toLocaleString() + '**.');
    if (/\b(how old are you|your age)\b/.test(q)) return reply1('I do not have an age – I am a small helper script living inside JB HUB.');
    if (/\bwhere (are you from|do you live)\b/.test(q)) return reply1('I live inside the JB HUB website, right here in your browser.');
    if (/^(help|\?|commands)$/.test(q)) {
      const h = KNOWLEDGE.find(function (e) { return e.id === 'ai_about'; });
      return reply1(h.answer, true);
    }
    if (AGAIN_RE.test(q)) return reply1(state.lastText || 'Ask me a question first and I can repeat the answer.');
    if (MORE_RE.test(q)) {
      const nxt = state.ranked.filter(function (e) { return !state.shown.has(e.id); }).slice(0, 2);
      if (!nxt.length) return reply1('That is everything I know about this topic. Ask me something else, or email the owner at **' + SITE.email + '**.', true);
      nxt.forEach(function (e) { state.shown.add(e.id); });
      return reply1(combine(nxt));
    }

    // ---- several questions in one message? ("where is menu and why error") ----
    const segs = raw.toLowerCase().split(/\s+(?:and|also|plus|then|but)\s+|[,;?!\n]+/).map(function (s) { return s.trim(); }).filter(Boolean);
    if (segs.length > 1) {
      const picks = [];
      segs.forEach(function (sg) {
        const r = rank(sg);
        const words = norm(sg).split(' ').length;
        const asks = /\b(what|where|when|why|how|who|which|is|are|can|do|does|did|tell|list|show|explain|give)\b/.test(norm(sg));
        if (r.length && r[0].s >= MIN_SCORE && (asks || (words <= 2 && r[0].s >= 6)) && !picks.some(function (p) { return p.id === r[0].e.id; })) picks.push(r[0].e);
      });
      if (picks.length > 1) {
        const shown = picks.slice(0, 3);
        state.ranked = rank(raw).map(function (x) { return x.e; });
        state.shown = new Set(shown.map(function (e) { return e.id; }));
        return reply1(combine(shown), true);
      }
    }

    // ---- one question ----
    const ranked = rank(raw);
    if (!ranked.length || ranked[0].s < MIN_SCORE) return fallback();

    const best = ranked[0];
    let text = best.e.answer;
    const related = ranked.slice(1, 4).filter(function (x) { return x.s >= MIN_SCORE; }).map(function (x) { return x.e; });
    const close = related.filter(function (e, i) { return i < 2 && ranked[i + 1].s >= best.s * 0.6; });
    if (close.length) text += '\n\nYou may also want: ' + close.map(function (r) { return '**' + r.title + '**'; }).join(', ') + '.';
    state.ranked = ranked.filter(function (x) { return x.s >= MIN_SCORE; }).map(function (x) { return x.e; });
    state.shown = new Set([best.e.id]);
    return reply1(text, related.length ? related.map(function (e) { return e.title; }) : true);
  }

  /* ---------------- 3. UI ---------------- */
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function format(s) {
    return escapeHtml(s)
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g, '<a href="mailto:$1">$1</a>')
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');
  }

  const CSS = `
  #jbai-fab{position:fixed;right:16px;bottom:16px;z-index:60;width:54px;height:54px;border-radius:50%;border:1px solid rgba(255,255,255,.2);cursor:pointer;color:#fff;font-size:22px;background:linear-gradient(135deg,#9333ea,#6366f1);box-shadow:0 0 18px rgba(168,85,247,.6);display:flex;align-items:center;justify-content:center;transition:transform .2s}
  #jbai-fab:hover{transform:scale(1.08)}
  #jbai-panel{position:fixed;right:16px;bottom:80px;z-index:60;width:360px;max-width:calc(100vw - 24px);height:480px;max-height:calc(100vh - 100px);display:none;flex-direction:column;overflow:hidden;border-radius:18px;background:rgba(15,15,25,.96);border:1px solid rgba(168,85,247,.4);box-shadow:0 10px 40px rgba(0,0,0,.6);font-family:sans-serif;color:#f3f4f6}
  #jbai-panel.open{display:flex}
  .jbai-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:linear-gradient(90deg,rgba(147,51,234,.5),rgba(99,102,241,.4));border-bottom:1px solid rgba(255,255,255,.1)}
  .jbai-head b{font-size:14px}.jbai-head small{display:block;font-size:10px;color:#ddd6fe}
  .jbai-head button{background:rgba(255,255,255,.12);border:0;color:#fff;width:28px;height:28px;border-radius:8px;cursor:pointer}
  #jbai-log{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}
  .jbai-msg{max-width:85%;padding:9px 12px;border-radius:14px;font-size:13px;line-height:1.45;word-wrap:break-word}
  .jbai-msg a{color:#c4b5fd;text-decoration:underline}
  .jbai-bot{align-self:flex-start;background:rgba(255,255,255,.08);border-bottom-left-radius:4px}
  .jbai-user{align-self:flex-end;background:linear-gradient(135deg,#9333ea,#6366f1);border-bottom-right-radius:4px}
  .jbai-chips{display:flex;flex-wrap:nowrap;gap:6px;padding:0 12px 8px;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
  .jbai-chips button{flex:0 0 auto;white-space:nowrap;font-size:11px;padding:5px 10px;border-radius:999px;border:1px solid rgba(168,85,247,.5);background:rgba(168,85,247,.15);color:#e9d5ff;cursor:pointer}
  .jbai-chips button:hover{background:rgba(168,85,247,.35)}
  .jbai-form{display:flex;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.1)}
  .jbai-form input{flex:1;min-width:0;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#fff;font-size:13px;outline:none}
  .jbai-form input:focus{border-color:#a855f7}
  .jbai-form button{padding:0 14px;border:0;border-radius:12px;background:linear-gradient(135deg,#9333ea,#6366f1);color:#fff;cursor:pointer;font-weight:700}
  .jbai-typing span{display:inline-block;width:6px;height:6px;margin:0 2px;border-radius:50%;background:#c4b5fd;animation:jbaiBlink 1s infinite}
  .jbai-typing span:nth-child(2){animation-delay:.15s}.jbai-typing span:nth-child(3){animation-delay:.3s}
  @keyframes jbaiBlink{0%,80%,100%{opacity:.25}40%{opacity:1}}
  `;

  function build() {
    if (document.getElementById('jbai-fab')) return;

    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    const fab = document.createElement('button');
    fab.id = 'jbai-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Open JB AI assistant');
    fab.innerHTML = '<i class="fa-solid fa-robot"></i>';

    const panel = document.createElement('div');
    panel.id = 'jbai-panel';
    panel.innerHTML =
      '<div class="jbai-head"><div><b>JB AI</b><small>Ask me about JB HUB</small></div>' +
      '<button type="button" id="jbai-close" aria-label="Close">&times;</button></div>' +
      '<div id="jbai-log"></div>' +
      '<div class="jbai-chips" id="jbai-chips"></div>' +
      '<div class="jbai-form"><input id="jbai-input" type="text" autocomplete="off" placeholder="Type your question...">' +
      '<button type="button" id="jbai-send">Send</button></div>';

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const log = panel.querySelector('#jbai-log');
    const input = panel.querySelector('#jbai-input');
    const chips = panel.querySelector('#jbai-chips');

    function add(text, who) {
      const d = document.createElement('div');
      d.className = 'jbai-msg ' + (who === 'user' ? 'jbai-user' : 'jbai-bot');
      d.innerHTML = who === 'user' ? escapeHtml(text) : format(text);
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
      return d;
    }

    function showChips() {
      chips.innerHTML = '';
      SUGGESTIONS.forEach(s => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = s;
        b.onclick = () => ask(s);
        chips.appendChild(b);
      });
    }

    function ask(text) {
      text = (text || '').trim();
      if (!text) return;
      add(text, 'user');
      input.value = '';
      const t = add('<span class="jbai-typing"><span></span><span></span><span></span></span>', 'bot');
      t.innerHTML = '<span class="jbai-typing"><span></span><span></span><span></span></span>';
      setTimeout(function () {
        const r = reply(text);
        t.innerHTML = format(r.text);
        log.scrollTop = log.scrollHeight;
      }, 450);
    }

    function toggle(open) {
      const willOpen = open === undefined ? !panel.classList.contains('open') : open;
      panel.classList.toggle('open', willOpen);
      if (willOpen) setTimeout(() => input.focus(), 50);
    }

    fab.addEventListener('click', () => toggle());
    panel.querySelector('#jbai-close').addEventListener('click', () => toggle(false));
    panel.querySelector('#jbai-send').addEventListener('click', () => ask(input.value));
    input.addEventListener('keydown', function (e) {
      e.stopPropagation(); // keep the site's own key handlers/games from reacting
      if (e.key === 'Enter') { e.preventDefault(); ask(input.value); }
    });
    ['keyup', 'keypress'].forEach(ev => input.addEventListener(ev, e => e.stopPropagation()));

    add("Hi! I am **JB AI**. Ask me about JB HUB's menu, features, games, login, errors, chat, notes, leaderboard, settings or how to contact the owner. Spelling mistakes are fine – I will still understand. What would you like to know?", 'bot');
    showChips();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  // Expose for testing / extending from the console
  window.JBAI = { ask: reply, knowledge: KNOWLEDGE, fix: function (t) { return fixQuery(norm(t)); } };
})();
