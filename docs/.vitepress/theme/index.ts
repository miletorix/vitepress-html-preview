import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { Card, CardsGroup } from '@miletorix/vitepress-enhanced-site-links'
import '@miletorix/vitepress-enhanced-site-links/style.css'

import 'virtual:group-icons.css'

import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed'
import '@miletorix/vitepress-youtube-embed/style.css'

import { ImageGroup } from '@miletorix/vitepress-image-group'
import '@miletorix/vitepress-image-group/style.css'

import { HtmlPreview } from '@miletorix/vitepress-html-preview'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Card', Card) 
    ctx.app.component('CardsGroup', CardsGroup)
    ctx.app.component('YouTubeEmbed', YouTubeEmbed)
    ctx.app.component('ImageGroup', ImageGroup)
    ctx.app.component('HtmlPreview', HtmlPreview)
  }
}