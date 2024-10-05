import {
    defineConfig,
    // presetAttributify,
    // presetIcons,
    presetUno,
    // presetWebFonts
} from 'unocss'

export default defineConfig({
    theme: {},
    shortcuts: {
        _input_base: 'border border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none',
        _btn_base: '!important bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700',
    },
    presets: [
        presetUno(),
        // ...
    ],
    safelist: []
})