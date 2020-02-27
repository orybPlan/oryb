module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true
  },
  //此项是用来配置标准的js风格
  extends: [
    '@vue/airbnb',
    'plugin:vue/essential',
  ],
  // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
  rules: {
    // 0表示不处理，1表示警告，2表示错误并退出
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'prefer-template': 0, // 拼接字符串允许使用 +号
    'no-underscore-dangle': 0,// 标识符不能以_开头或结尾zz
    'no-param-reassign': 0, // 禁止给参数重新赋值
    'no-console': 0,
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    'prefer-destructuring': 0,
    'linebreak-style':  ["off", "windows"],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
  }
}
