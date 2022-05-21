module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
    ],
    "rules": {
        "semi": ["warn", "always"],
        "max-len": ["warn", 100],
        "react/jsx-filename-extension": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
    },
    // 用来修正 webpack alias 的依赖报错
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./webpack/webpack.config.js"
            }
        }
    }
}
