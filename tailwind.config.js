module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    groupLevel: 10,
    groupScope: "scope",
    groupVariants: ["hover", "focus", "focus-within"],
    extend: {
      colors: {
        light: '#f6f8f9',
        primary: '#796eff',
        secondary: '#151b26',
        lighter: '#cbd4db',
        icon: '#6f7782',
        hover: '#15072614',
        'menu-hover': '#e8ecee'
      },
      boxShadow: {
        box: '0 0 0 1px #e8ecee, 0 5px 20px 0 rgba(21, 7, 38, 0.08)',
        small: '0 0 0 1px #e8ecee, 0 1px 4px 0 rgba(21, 7, 38, 0.08)'
      },
      fontSize: {
        s: '11px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-nested-groups'),
  ],
}

