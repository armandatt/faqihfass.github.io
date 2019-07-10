<template>
<pre id="Projects"><code class="xml">
&lt;ul&gt;
  &lt;li&gt;
    <a href="//faqihfass.github.io/" target="_blank">&lt;a href=&quot;//faqihfass.github.io/&quot;&gt;
      This website
    &lt;/a&gt;</a>
  &lt;/li&gt;
  &lt;!-- WIP --&gt;
  
&lt;/ul&gt;
<span class="text-cursor"></span></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Projects',
  mounted() {
    hljs.highlightBlock(document.getElementById('Projects'))
  }
}
</script>
