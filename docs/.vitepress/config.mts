import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-html-preview",
  base: '/vitepress-html-preview/',
  description: "Vue component for embedding external HTML files via iframe in VitePress. Useful for showcasing interactive demos with full HTML/CSS/JS support.",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    logo: 'favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github Page', link: 'https://github.com/miletorix/vitepress-html-preview' },
      { text: 'NPM Page', link: 'https://www.npmjs.com/package/@miletorix/vitepress-html-preview' }
    ],
    sidebar: [
      { text: 'Home', link: '/index' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/miletorix' }
    // ]
  }
})