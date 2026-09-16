const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '../src/app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const baseUrl = 'https://dmfirst-ten.vercel.app';

walkDir(srcAppDir, function(filePath) {
    if (filePath.endsWith('page.tsx') && !filePath.includes('[slug]')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const regex = /export const metadata: Metadata = \{([\s\S]*?)\};/;
        const match = content.match(regex);
        if (match) {
            const originalBlock = match[0];
            
            const titleMatch = originalBlock.match(/title:\s*'([^']+)'/);
            const descMatch = originalBlock.match(/description:\s*'([^']+)'/);
            
            if (titleMatch && descMatch) {
                const title = titleMatch[1];
                const description = descMatch[1];
                
                let route = filePath.replace(srcAppDir, '').replace(/\\/g, '/').replace('/page.tsx', '');
                if (route === '') route = '/';
                const canonicalUrl = route === '/' ? baseUrl + '/' : baseUrl + route;
                
                let robotsStr = '';
                if (route === '/login' || route === '/registration') {
                    robotsStr = `\n  robots: {\n    index: false,\n    follow: false,\n  },`;
                }

                const newMetadata = `export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title}',
    description: '${description}',
    url: '${canonicalUrl}',
  },
  twitter: {
    title: '${title}',
    description: '${description}',
  },${robotsStr}
};`;
                
                const newContent = content.replace(originalBlock, newMetadata);
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log('Updated metadata in', route);
            }
        }
    }
});
