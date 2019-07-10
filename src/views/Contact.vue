<template>
<pre id="Contact"><code class="xml">
&lt;ul&gt;
  &lt;li&gt;
    <a href="mailto:faqihfass@icloud.com" target="_blank">&lt;a href=&quot;mailto:faqihfass@icloud.com&quot;&gt;
      Send me an email
    &lt;/a&gt;</a>
  &lt;/li&gt;

  &lt;li&gt;
    <a href="//linkedin.com/in/faqihfass" target="_blank">&lt;a href=&quot;//linkedin.com/in/faqihfass&quot;&gt;
      Connect with me on LinkedIn
    &lt;/a&gt;</a>
  &lt;/li&gt;

  &lt;li&gt;
    <a href="//twitter.com/faqihfass" target="_blank">&lt;a href=&quot;//twitter.com/faqihfass&quot;&gt;
      DM me on Twitter
    &lt;/a&gt;</a>
  &lt;/li&gt;
&lt;/ul&gt;
<span class="text-cursor"></span></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'

export default {
  name: 'Contact',
  mounted() {
    hljs.highlightBlock(document.getElementById('Contact'))
  }
}
</script>
