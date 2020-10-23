// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-conference-hall',
      options: {
        apiKey: process.env.CONFERENCE_HALL_API_KEY,
        eventId: process.env.CONFERENCE_HALL_EVENT_ID,
        filterConfirmedTalks: true,
        convertAbstractsToHtml: true,
        speakersPhotoPath: `${path.resolve(
          __dirname
        )}/src/assets/imgs/speakers/`
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {
          whitelist: ['hidden']
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    }
  ],
  templates: {
    Speaker: '/speaker/:displayName',
    Talk: '/talk/:title'
  }
}
