const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: path.resolve(__dirname, 'src/shell-app/index.tsx'),
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        accounts: 'accounts@http://localhost:3001/remoteEntry.js',
        transactions: 'transactions@http://localhost:3002/remoteEntry.js',
        profile: 'profile@http://localhost:3003/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react-router-dom': { singleton: true },
        '@supabase/supabase-js': { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/shell-app/index.html') })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};
