[![korean](https://img.shields.io/badge/lang-ko-blue.svg)](https://github.com/shoplic-kr/shoplic-wp-bridge-react-example-theme/blob/main/readme-ko.md)
[![english](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/shoplic-kr/shoplic-wp-bridge-react-example-theme/blob/main/README.md)

# Shoplic WP Bridge React Example

Required plugin: [shoplic-wp-bridge-react](https://gitlab.com/byeongin_shoplic/shoplic-wp-bridge-react)

## Description
- There is a React app created with Vite in the `./react-app` folder. (Please make sure to use Vite.)
- In the `./react-app-shortcodes.php` file, we registered shortcodes using the function provided by [shoplic-wp-bridge-react](https://gitlab.com/byeongin_shoplic/shoplic-wp-bridge-react).
- We imported `./react-app-shortcodes.php` in `./functions.php`.
- Please feel free to use the shortcodes registered in `./react-app-shortcodes.php` wherever you want.
- You can also include attributes. `[main_slider speed=5400]`. The key-value pairs put in attributes can be received as props in React.