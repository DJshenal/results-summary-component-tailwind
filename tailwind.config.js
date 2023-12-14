/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Main/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Lightred: 'hsl(0, 100%, 67%)',
        OrangeyYellow: 'hsl(39, 100%, 56%)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        CobaltBlue: 'hsl(234, 85%, 45%)',

        Lightreda: 'hsla(0, 100%, 67%,0.07)',
        OrangeyYellowa: 'hsl(39, 100%, 56%,0.07)',
        GreenTeala: 'hsl(166, 100%, 37%,0.07)',
        CobaltBluea: 'hsl(234, 85%, 45%,0.07)',
        
        // Gradients
        LightSlateBlueBackground: 'hsl(252, 100%, 67%)',
        LightRoyalBlueBackground: 'hsl(241, 81%, 54%)',
        
        VioletBlueCircle: 'hsla(256, 72%, 46%, 1)',
        PersianBlueCircle: 'hsla(241, 72%, 46%, 0)',
        
        // Neutral
        White: 'hsl(0, 0%, 100%)',
        PaleBlue: 'hsl(221, 100%, 96%)',
        LightLavender: 'hsl(241, 100%, 89%)',
        DarkGrayBlue: 'hsl(224, 30%, 27%)',
      },
      fontFamily:{
        f1: ['Hanken Grotesk'],
        f2: ['Montserrat'],
        f3: ['Tilt Neon']
      }
    },
  },
  plugins: [],
}

