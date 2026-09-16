const fs = require('fs');
const path = require('path');

const seoData = {
  '/': {
    title: "DMFirst - Premium Online Gaming Platform",
    description: "Explore DMFirst online gaming with popular games including Aviator, Roulette, Blackjack, Baccarat, Crash, Plinko and Hi-Lo."
  },
  '/games': {
    title: "Online Casino Games | DMFirst",
    description: "Explore popular online casino games at DMFirst, including Aviator, Roulette, Blackjack, Baccarat, Crash, Plinko and Hi-Lo."
  },
  '/about': {
    title: "About DMFirst | Our Mission & Story",
    description: "Learn more about DMFirst, our platform, mission and the gaming experience we aim to provide."
  },
  '/rewards': {
    title: "DMFirst Rewards & Promotions",
    description: "Explore the rewards and promotions available on DMFirst and learn more about the program."
  },
  '/vip': {
    title: "DMFirst VIP Club",
    description: "Learn more about the DMFirst VIP Club and explore the features available to VIP members."
  },
  '/payment-methods': {
    title: "DMFirst Payment Methods & Deposits",
    description: "Explore the payment methods and deposit options available on DMFirst."
  },
  '/withdrawals': {
    title: "DMFirst Withdrawals & Payouts",
    description: "Learn about the withdrawal and payout options available on DMFirst."
  },
  '/referral': {
    title: "DMFirst Referral Program",
    description: "Learn more about the DMFirst referral program and how the referral system works."
  },
  '/faq': {
    title: "DMFirst Help Center & FAQ",
    description: "Find answers to frequently asked questions about DMFirst, games, accounts, payments and other platform features."
  },
  '/blog': {
    title: "DMFirst Gaming Blog & Guides",
    description: "Read DMFirst gaming guides, helpful articles, terminology explanations and payment-related information."
  },
  '/contact': {
    title: "Contact DMFirst",
    description: "Contact DMFirst for questions, support and information about the platform."
  },
  '/privacy-policy': {
    title: "Privacy Policy | DMFirst",
    description: "Read the DMFirst Privacy Policy to understand how information is handled on the platform."
  },
  '/responsible-gaming': {
    title: "Responsible Gaming | DMFirst",
    description: "Learn about responsible gaming practices and information provided by DMFirst."
  },
  '/terms': {
    title: "Terms & Conditions | DMFirst",
    description: "Read the DMFirst Terms and Conditions governing use of the platform and its services."
  }
};

const srcAppDir = path.join(__dirname, '../src/app');

Object.keys(seoData).forEach(route => {
    let filePath = route === '/' ? path.join(srcAppDir, 'page.tsx') : path.join(srcAppDir, route, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const data = seoData[route];
        
        content = content.replace(/title:\s*'[^']+'/, `title: '${data.title}'`);
        content = content.replace(/description:\s*'[^']+'/, `description: '${data.description}'`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${route}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});
