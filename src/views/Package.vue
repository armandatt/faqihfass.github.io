<template>
<pre id="Package"><code class="json">
{
  "name": "Faqih Fahmi",
  "dependencies": {
    "core-js": "^2.6.5",
    "php": "^5.5 || ^7.0",
    "laravel/framework": "5.8.*",
    "vue": "^2.6.10",
    "sass": "^1.18.0"

  }

}
<span class="text-cursor"></span></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Package',
  mounted() {
    hljs.highlightBlock(document.getElementById('Package'))
  }
}
</script>
