const fs = require('fs');
const path = require('path');

const replacements = {
    'section-heading': 'text-3xl md:text-4xl font-black text-center text-gov-blue mb-4',
    'section-subheading': 'text-base text-center text-gov-muted max-w-2xl mx-auto mb-10 leading-relaxed',
    'heading-underline': 'w-12 h-1.5 bg-gov-accent mx-auto rounded-full mb-8',
    'glass-card': 'bg-white rounded-3xl shadow-card border border-slate-100/50 p-8 hover:shadow-xl transition-shadow duration-300',
    'btn-primary': 'px-7 py-3 rounded-md font-semibold transition-all duration-300 transform active:scale-95 inline-flex items-center justify-center gap-2 bg-gov-accent text-white hover:bg-emerald-700 shadow-md',
    'btn-outline': 'px-7 py-3 rounded-md font-semibold transition-all duration-300 transform active:scale-95 inline-flex items-center justify-center gap-2 border hover:bg-slate-50 text-gov-primary border-gov-primary bg-white hover:text-blue-800'
};

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            for (const [key, value] of Object.entries(replacements)) {
                // Replace exact class name respecting boundaries and handling backticks/quotes
                const regex = new RegExp(`\\b${key}\\b`, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, value);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Class replacement complete.');
