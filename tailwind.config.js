module.exports = {
  theme: {
    truncate: {
      lines: {
        2: '2'
      }
    },
    minHeight: {
      '1/3': '33vh'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    ((variants = []) => ({ addUtilities, config, e }) => {
      const lines = config('theme.truncate.lines')
      const keys = Object.keys(lines)

      if (!keys.length) return

      const utilities = keys.map(key => ({
        [`.${e(`truncate-${key}-lines`)}`]: {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': lines[key],
          '-webkit-box-orient': 'vertical'
        }
      }))

      addUtilities(utilities, variants)
    })()
  ]
}
