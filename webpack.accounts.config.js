const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: path.resolve(__dirname, 'src/accounts-mfe/index.tsx'),
  mode: 'development',
  devtool: 'inline-source-map',
  output: { publicPath: 'auto' },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'accounts',
      filename: 'remoteEntry.js',
      exposes: {
        './AccountsApp': './src/accounts-mfe/App'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
        '@supabase/supabase-js': { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/accounts-mfe/index.html') })
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true
  }
};
