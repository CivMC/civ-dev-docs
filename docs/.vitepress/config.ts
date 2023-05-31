import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CivMC Developer Docs',
  description: 'Yeehaw',
    
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Getting Started', link: '/getting-started/' },
        { text: 'Github', link: 'https://github.com/CivMC' },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: "Getting Started",
        link: '/getting-started/',
        items: [
          { text: 'Project Overview', link: '/getting-started/projects' },
          { text: 'Building with Gradle', link: '/getting-started/building-with-gradle' },
        ]
      },
      {
        text: "Code Style",
        link: '/code-style/',
        items: [
          { text: 'Java Code Style', link: '/code-style/java-code-style' },
        ]
      },
      {
        text: "Plugin Standards",
        link: '/plugin-standards/',
        items: [
          { text: 'Event Handling', link: '/plugin-standards/event-handling' },
          { text: 'Permissions', link: '/plugin-standards/permissions' },
        ],
      },
    ],
  },
});
