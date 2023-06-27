# Figma Plugin React Boilerplate

## Refrence

- [Logrocket](https://blog.logrocket.com/building-figma-plugins-with-react/)

### Development

1. Init the project and create webpack.config.js file
2. Install the webpack and other dev dependencies

```
yarn add html-webpack-plugin husky  prettier react-dev-utils style-loader ts-loader typescript url-loader webpack webpack-cli css-loader @types/react-dom @types/react @figma/plugin-typings -D
```

3. Install React and React Dom as Dependencies
```
yarn add react react-dom
```

4. Configuring webpack
Create the webpack.config.js file in the root directory of your plugin project, define the mode and devtool. Devtool is necessary because Figma's 'eval' works differently than normal eval