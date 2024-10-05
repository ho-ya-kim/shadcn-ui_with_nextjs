import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    // theme: {},
    shortcuts: {
        "custom-input": 'border border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500 focus:outline-none',
        "custom-btn": 'bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700',
    },
    presets: [
        presetUno(),
        presetWebFonts(),
        presetAttributify(),
        presetIcons()
        // ...
    ],
    safelist: [
        'custom-input',
        'custom-btn'
    ]
})