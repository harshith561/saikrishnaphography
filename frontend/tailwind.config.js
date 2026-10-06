/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#060606', // The user prompt says pure black #060606 for the Astronomia Luxe style, but the mahi.txt says warm ivory base (#F7F3EC), warm charcoal text (#2B2622), and antique gold accent (#B98A4E). Wait, the prompt says "my clinet work yhis so buidl preiminu site @[...] Animated Website Prompts ... Build a single-page marketing site for Astronomia Luxe ...". Ah, the user gave two different prompts: Sai Krishna Photography AND Astronomia Luxe. Wait, the user attached the "Create_an_ultra_premium_cinema (online-video-cutter.com)-frames" which matches the Astronomia Luxe scroll sequence style, and in mahi.txt they explicitly said "same format as the Astronomia Luxe reference... The flagship Home page... full scroll-scrubbed sequence ... warm ivory base (#F7F3EC)...".
        // Wait, for Sai Krishna, we need the warm palette. But wait, the 300 frames provided are for the Astronomia Luxe? Or did they replace the frames with the wedding images?
        // Let's use the warm palette as defined in mahi.txt for Sai Krishna, but with a deep background for the cinematic feel if needed. Wait, mahi.txt says "Palette: warm ivory/cream base (#F7F3EC), warm charcoal text (#2B2622), one accent — antique gold (#B98A4E)".
        // Wait, the frames we have are probably the Astronomia watch (since the folder is 'Create_an_ultra_premium_cinema'). But the client wants "Sai Krishna Photography" built WITH that mechanism using the watch video or their own frames?
        // Actually, if the frames provided are for the watch, and the client wants the Sai Krishna site to look premium using those frames as a demo, I should follow the Astronomia Luxe dark theme for the animation part, or the warm theme for the Sai Krishna content. Let's use the warm theme since it's a photography site, but maybe the animation section requires a dark background? 
        // mahi.txt: "warm ivory studio backdrop... film grain... settle into a clean grid... warm ivory base... no text baked into any image". 
        brand: {
          ivory: '#F7F3EC',
          charcoal: '#2B2622',
          gold: '#B98A4E',
          dark: '#060606' // Added just in case for the cinematic section
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
