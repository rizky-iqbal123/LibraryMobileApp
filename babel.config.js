module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@root': './src',
          '@screen': './src/screen',
          '@global': './src/global'
        }
      }
    ],
    'jest-hoist'
  ]
}
