module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@graphql': './src/graphql',
          '@queries': './src/queries',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
