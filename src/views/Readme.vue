<template>
<pre id="README"><code class="markdown">
# faqihfass-github-pages

This is my portfolio website. Design is based on Visual Studio Code with Atom's One Dark UI theme.

## Main dependencies

  - vue
  - bootstrap-vue
  - @fortawesome/vue-fontawesome
  - highlight.js

### Project setup

```
npm install
```
<span class="text-cursor"></span></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Readme',
  mounted() {
    hljs.highlightBlock(document.getElementById('README'))
  }
}
</script>
