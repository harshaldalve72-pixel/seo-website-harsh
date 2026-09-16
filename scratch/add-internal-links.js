const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '../src/app');

const linksToAdd = {
  'about': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>\n            <p className="text-[var(--muted-foreground)]">Have questions? Reach out to our <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact Support</Link> team or browse our <Link href="/faq" className="text-[var(--primary)] hover:underline">FAQ</Link>.</p>\n          </div>`,
  'payment-methods': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">For information on cashing out, please review our <Link href="/withdrawals" className="text-[var(--primary)] hover:underline">Withdrawal process</Link>.</p>\n          </div>`,
  'withdrawals': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">To fund your account, view our accepted <Link href="/payment-methods" className="text-[var(--primary)] hover:underline">Payment methods</Link>.</p>\n          </div>`,
  'vip': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">Not a VIP yet? Check out our standard <Link href="/rewards" className="text-[var(--primary)] hover:underline">Promotions & Rewards</Link>.</p>\n          </div>`,
  'rewards': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">Want more exclusive benefits? Learn about our <Link href="/vip" className="text-[var(--primary)] hover:underline">VIP Club</Link>.</p>\n          </div>`,
  'faq': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">Still need help? Please <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact Us</Link> directly.</p>\n          </div>`,
  'responsible-gaming': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">By playing, you agree to our <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms of Service</Link>.</p>\n          </div>`,
  'terms': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">Please also review our <Link href="/privacy-policy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link> to understand how we protect your data.</p>\n          </div>`,
};

Object.keys(linksToAdd).forEach(route => {
    let filePath = path.join(srcAppDir, route, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Ensure Link is imported
        if (!content.includes("import Link from 'next/link';")) {
            content = content.replace(/(import type \{ Metadata \} from 'next';)/, "$1\nimport Link from 'next/link';");
            if (!content.includes("import Link from 'next/link';")) { // fallback
                 content = `import Link from 'next/link';\n` + content;
            }
        }
        
        const block = linksToAdd[route];
        
        // insert block before the final closing divs
        const replaceTarget = /([ \t]*)(<\/div>\s*<\/div>\s*<\/>\s*\)\;\s*\})/;
        content = content.replace(replaceTarget, `$1${block}\n$1$2`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${route}`);
    }
});
