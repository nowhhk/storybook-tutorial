module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      require.resolve("react-docgen-typescript-loader"),
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};

//ts 및 tsx 확장자에 대하여 babel-loader 와 react-docgen-typescript-loader 를 사용하도록 설정해주었습니다.
