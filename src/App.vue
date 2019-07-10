<template>
  <div class="root">
    <div class="container-fluid m-0 p-0">
      <main class="row w-100 m-0">
        <section class="col-3 p-0 d-none d-lg-block">
          <activity-bar />
          
          <side-bar />
        </section>

        <editor :title="route_name">
          <router-view />
        </editor>

        <editor title="manifest.json">
          <manifest />
        </editor>
      </main>

      <bottom-bar />
    </div>
  </div>
</template>

<script>
import ActivityBar from '@/components/ActivityBar.vue'
import BottomBar from '@/components/BottomBar.vue'
import Editor from '@/components/Editor.vue'
import SideBar from '@/components/SideBar.vue'

import Manifest from '@/views/Manifest.vue'

import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import markdown from 'highlight.js/lib/languages/markdown'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('json', json)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('xml', xml)

import 'highlight.js/styles/atom-one-dark.css'

import '@/assets/text-cursor.css'

export default {
  name: 'App',
  components: {
    ActivityBar,
    BottomBar,
    Editor,
    SideBar,
    Manifest
  },
  computed: {
    route_name() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss">
a {
  color: inherit !important;
}

a:hover {
  text-decoration: none !important;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container-fluid, .row {
  min-height: 100vh;
}

.root {
  min-height: 100vh;
  width: 100vw;
}
</style>
