import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:group-icons.css'

import { HtmlPreview } from '@miletorix/vitepress-html-preview'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('HtmlPreview', HtmlPreview)
  }
}