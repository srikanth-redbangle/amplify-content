/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    "md:w-[78.7rem]",
    "w-[calc(100%_+_2rem)]",
    "space-y-6",
    "space-x-4",
    "w-[15rem]"
  ],
  theme: {
    extend: {
      colors: {
        rb: {
          red: '#07ef5a', //'#DB2F2C',
          black: '#000000',
          white: '#FFFFFF',
          mercury: '#F1F2F6',
          scarlet: '#930000',
          'milano-red': '#00e546',
          'torch-red': '#00e546',
          'campaign':'#fd0138',
          production:'#fcb4b4',
          tech:'#fd96ad',
          design:'#e5011c',
          rosa: '#fd406f',
          dune: '#333333',
          stroke: '#DDE1E6',
          'stroke-dark': '#BABEC2',
          'davy-grey': '#525252',
          'storm-dust': '#64686A',
          'ironside-grey': '#666666',
          'border-grey': '#C8CACE',
          geyser: '#E0E0E0',
          'cotton-seed': '#BDBDBD',
          'service-grey': '#F2F4F8',
          'grayish' : '#4A4A49',
          'dark-grey' : '#666666',
          'bluish-gray' : '#5A5F6B',
          'light-gray' : '#898989',
          'btn-green': '#07ef5a',
          'btn-hover': '#00e546',
          'link-green': '#13c33f',
          'link-green2': '#0c7d29',
          'gray': '#7f7f7f',
        },
      },
      spacing: {
        1.75: '0.4375rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11.5: '2.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17.5: '4.375rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22.5: '5.625rem',
        23: '5.75rem',
        25: '6.25rem',
        30: '7.5rem',
        31: '7.75rem',
      },
      width: {
        headingLine: '3.375rem',
      },
      maxWidth: {
        container: '78.75rem',
      },
      fontFamily: {
        everett: ['var(--font-everett)'],
        opensans: ['var(--font-opensans)'],
      },
      fontSize: {
        sm: ['0.875rem', '1.25rem'], // 14px 20px
        input: [
          '0.75rem', // 12px 17px
          {
            lineHeight: '1.0625rem',
            letterSpacing: '-0.24px',
          },
        ],
        'input-large': [
          '1.125rem', // 18px 24px
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.36px',
          },
        ],
        'acc-large': [
          '1.125rem', // 18px 26px
          {
            lineHeight: '1.625rem',
            letterSpacing: '-0.36px',
          },
        ],
        'social-small': [
          '1.125rem', // 18px 39px
          {
            lineHeight: '2.4375rem',
            letterSpacing: '-0.55px',
          },
        ],
        social: [
          '1.375rem', // 22px 38.7px
          {
            lineHeight: '2.41rem',
            letterSpacing: '-0.554px',
          },
        ],
        'reveal-small': [
          '1.625rem', // 26px 38px
          {
            lineHeight: '2.375rem',
            letterSpacing: '-0.52px',
          },
        ],
        title: [
          '1.625rem', // 26px 28px
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
            letterSpacing: '-0.52px',
          },
        ],
        label: [
          '0.875rem', //14px 18px
          {
            lineHeight: '1.125rem',
            letterSpacing: '-0.56px',
          },
        ],
        'label-large': [
          '1.5rem', //24px 30px
          {
            lineHeight: '1.875rem',
            letterSpacing: '-0.96px',
          },
        ],
        accordion: [
          '1.5rem', // 24px 28px
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.96px',
          },
        ],
        'accordion-medium': [
          '1.25rem', // 20px 24px
          {
            lineHeight: '1.55rem',
            letterSpacing: '-0.8px',
          },
        ],
        'accordion-large': [
          '2rem', // 32px 38px
          {
            lineHeight: '2.375rem',
            letterSpacing: '-1.28px',
          },
        ],
        'title-md': [
          '3.25rem', // 52px 54px
          {
            fontWeight: '500',
            lineHeight: '3.375rem',
            letterSpacing: '-1.04px',
          },
        ],
        'title-md-tight': [
          '3.25rem', // 52px 54px
          {
            fontWeight: '500',
            lineHeight: '3.375rem',
            letterSpacing: '-2.08px',
          },
        ],
        'title-lg': [
          '3.375rem', // 54px 54px
          {
            fontWeight: '500',
            lineHeight: '3.375rem',
            letterSpacing: '-2.16px',
          },
        ],
        'reveal-large': [
          '3.25rem', // 52px 62px
          {
            lineHeight: '3.875rem',
            letterSpacing: '-1.04px',
          },
        ],
        stat: [
          '5.375rem', // 86px 88px
          {
            lineHeight: '5.5rem',
            letterSpacing: '-2.58px',
          },
        ],
      },
      lineHeight: {
        2.5: '0.625rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        14: '3.5rem',
      },
      borderOpacity: {
        15: '0.15',
        52: '0.52',
      },
      borderRadius: {
        3.5: '0.875rem',
        '6xl': '2rem',
        8.5: '2.125rem',
      },
      keyframes: {
        'slide-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'slide-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      boxShadow: {
        menu: '0px 4px 8px 0px #1110101C',
      },
      cursor: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
