import { defineConfig, presetTypography, presetWind3, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
    presets: [
        presetWind3({}),
        presetTypography()
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
})