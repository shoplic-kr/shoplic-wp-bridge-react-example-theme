# Shoplic WP Bridge React Example

required plugin: [shoplic-wp-bridge-react](https://gitlab.com/byeongin_shoplic/shoplic-wp-bridge-react)

## 설명
- `./react-app` 폴더에 vite로 생성한 리액트 앱이 있습니다. (필수적으로 vite를 사용해주세요)
- `./react-app-shortcodes.php` 파일에 [shoplic-wp-bridge-react](https://gitlab.com/byeongin_shoplic/shoplic-wp-bridge-react) 에서 제공하는 함수를 사용해 숏코드를 등록했습니다.
- `./functions.php`에서 `./react-app-shortcodes.php`를 import했습니다.
- 원하는 위치에, `./react-app-shortcodes.php`에 등록한 숏코드를 자유롭게 사용해주세요.
- attribute도 넣을 수 있습니다. `[main_slider speed=1000]`. attribute에 넣은 key-value는 리액트에서 props로 받을 수 있습니다.