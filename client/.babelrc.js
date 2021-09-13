module.exports ={
  presets: [
    "@babel/preset-env", 
    "@babel/preset-react", 
    "@babel/preset-typescript"
  ],
  plugins:[
    [
      "babel-plugin-transform-imports",
      {
        "@material-ui/core": {
          transform: "@material-ui/core/esm/${member}",
          preventFullImport: true
        },
        "@material-ui/icons": {
          transform: "@material-ui/icons/esm/${member}",
          preventFullImport: true
        }
      }
    ]
  ]
}
