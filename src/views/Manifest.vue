<template>
<pre id="Manifest"><code class="json">
{
  "short_name": "Faqih",
  "name": "Faqih Fahmi",
  "icons": [
    {
      "src": "<router-link to="/profile">/assets/profile-512.jpg</router-link>",
      "type": "image/jpeg",
      "sizes": "512x512"
    }
  ],
  "start_url": "<a href="//faqihfass.github.io/" target="_blank">//faqihfass.github.io/</a>"
  
}

</code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Manifest',
  mounted() {
    hljs.highlightBlock(document.getElementById('Manifest'))
  }
}
</script>
