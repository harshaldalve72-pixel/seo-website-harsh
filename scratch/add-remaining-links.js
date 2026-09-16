const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '../src/app');

const linksToAdd = {
  'privacy-policy': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">For our service rules, please read our <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms of Service</Link>.</p>\n          </div>`,
  'contact': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">Looking for quick answers? Check our <Link href="/faq" className="text-[var(--primary)] hover:underline">Help Center & FAQ</Link>.</p>\n          </div>`,
  'referral': `          <div className="mt-8 pt-8 border-t border-[var(--border)]">\n            <p className="text-[var(--muted-foreground)]">You might also be interested in our <Link href="/rewards" className="text-[var(--primary)] hover:underline">Promotions & Rewards</Link> program.</p>\n          </div>`,
};

Object.keys(linksToAdd).forEach(route => {
    let filePath = path.join(srcAppDir, route, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes("import Link from 'next/link';")) {
            content = content.replace(/(import type \{ Metadata \} from 'next';)/, "$1\nimport Link from 'next/link';");
            if (!content.includes("import Link from 'next/link';")) { 
                 content = `import Link from 'next/link';\n` + content;
            }
        }
        
        const block = linksToAdd[route];
        const replaceTarget = /([ \t]*)(<\/div>\s*<\/div>\s*<\/>\s*\)\;\s*\})/;
        content = content.replace(replaceTarget, `$1${block}\n$1$2`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${route}`);
    }
});
