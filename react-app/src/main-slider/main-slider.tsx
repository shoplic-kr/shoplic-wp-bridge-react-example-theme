import 'vite/modulepreload-polyfill' // 중요 polyfill을 import해주어야 합니다
import {createRoot} from 'react-dom/client'
import MainSlider from './MainSlider'
import '@common/styles/global.scss'

// typescript를 사용하는 경우에만 설정해주세요
declare global {
    const main_slider_props: { // main_slider_props는 props.object_name에 할당한 이름과 동일한 이름을 사용해야 합니다.
        root_id: string,
        speed: string,
    }
}

console.log('main_slider_props', main_slider_props);
/*
console.log result:
main_slider_props {root_id: "main-slider-root-id", speed: "5400"}
*/

const {root_id, speed} = main_slider_props;

const root = document.getElementById(root_id)
if (root) {
    createRoot(root).render(<MainSlider speed={Number(speed)} />)
}