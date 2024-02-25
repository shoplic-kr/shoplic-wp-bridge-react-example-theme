<?php
$absoluteDistPath = get_template_directory() . '/react-app/dist';
$localhostUrl = 'http://localhost:5173';

shoplic_wp_bridge_react($absoluteDistPath, $localhostUrl)->addShortcode([
    'shortcode_name' => 'main_slider', // shortcode 이름
    'props' => [
        'object_name' => 'main_slider_props',
        'root_id' => 'main-slider-root-id', // React 컴포넌트를 렌더링할 HTML 요소의 ID
        'speed' => 500,                                                                
    ],
    'entry_file_name' => 'main-slider/main-slider.tsx', // 엔트리 파일 경로
]);
