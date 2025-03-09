const path = require('path');
 
module.exports = {
  entry: './src/index.tsx', // Entry point for React app
  output: {
    path: path.resolve(__dirname,'../wwwroot/js'),
    //path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Add this rule to handle CSS files
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development', // or 'production' for production build

};

 


 