import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // typescript를 사용하는 경우에만 넣어주세요
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        assetsDir: 'assets',
        emptyOutDir: true, // 빌드시 outDir 폴더를 삭제합니다(기본적으로 outDir는 'dist'로 설정되어 있습니다)
        manifest: true, // [필수] manifest파일을 생성합니다. 
        rollupOptions: {
            input: [ // [필수] entry 파일들을 나열해 줍니다. 숏코드 하나당 엔트리 포인트 한개가 매칭됩니다.
                './src/main-slider/main-slider.tsx',
            ]
        },
        sourcemap: true, // 소스맵을 출력할지 여부를 결정합니다.
    },
    plugins: [
        react(),
        tsconfigPaths(), // typescript를 사용하는 경우에만 넣어주세요
    ],
    publicDir: false, // 기본적으로 Vite는 빌드할 때 publicDir에서 outDir로 파일을 복사합니다. 이를 비활성화하기 위해 false로 설정해줍니다.
})