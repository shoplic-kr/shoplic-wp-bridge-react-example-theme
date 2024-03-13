<?php
$absoluteDistPath = get_template_directory() . '/react-app/dist';
$localhostUrl = 'http://localhost:5173';

shoplic_wp_bridge_react()->addShortcode([
    'shortcode_name' => 'main_slider', // shortcode 이름
    'props' => [
        'absolute_dist_path' => $absoluteDistPath, // React 컴포넌트 번들 파일의 절대 경로
        'localhost_url' => $localhostUrl, // 개발 서버 URL
        'object_name' => 'main_slider_props',
        'root_id' => 'main-slider-root-id', // React 컴포넌트를 렌더링할 HTML 요소의 ID
        'speed' => 500,                                                                
    ],
    'entry_file_name' => 'main-slider/main-slider.tsx', // 엔트리 파일 경로
]);
