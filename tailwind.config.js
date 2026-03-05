/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gov: {
                    blue: '#1e3a8a', // Dark blue for headings/footer
                    primary: '#2563eb', // Royal blue for buttons
                    accent: '#059669', // Emerald/Green for accents
                    light: '#f8fafc', // Light slate background
                    card: '#ffffff', // White cards
                    text: '#334155', // Slate 700 text
                    muted: '#64748b', // Slate 500 text
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0,0,0,0.05)',
                'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        },
    },
    plugins: [],
}
