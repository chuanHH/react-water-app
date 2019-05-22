 const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
const path =require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#009462' },
 }),
 addWebpackAlias({        
    "assets": path.resolve(__dirname, "src/assets"),        
})
);