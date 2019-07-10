<template>
  <aside>
    <b-list-group>
      <b-list-group-item>
        <font-awesome-icon :icon="['far', 'file']" style="color: #d7dae0;" />
      </b-list-group-item>

      <b-list-group-item v-b-tooltip.hover.right="'Visit my GitHub profile'">
        <a href="//github.com/faqihfass" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </b-list-group-item>

      <b-list-group-item v-b-tooltip.hover.right="'See me on Instagram'">
        <a href="//instagram.com/faqihfass" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </b-list-group-item>

      <b-list-group-item v-b-tooltip.hover.right="'Connect with me on LinkedIn'">
        <a href="//linkedin.com/in/faqihfass" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </b-list-group-item>

      <b-list-group-item v-b-tooltip.hover.right="'Follow me on Twitter'">
        <a href="//twitter.com/faqihfass" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </b-list-group-item>

      <b-list-group-item class="w-100" style="bottom: 24px; position: absolute; text-align: center;" v-b-tooltip.hover.right="'View source on GitHub'">
        <a href="" target="_blank">
          <font-awesome-icon :icon="['fas', 'code-branch']" />
        </a>
      </b-list-group-item>
    </b-list-group>
  </aside>
</template>

<script>
export default {
  name: 'ActivityBar'  
}
</script>

<style lang="scss" scoped>
* {
  -webkit-user-select: none;
}

aside {
  background: #282c34;
  float: left;
  height: 100%;
  width: 3em;
}

.list-group {
  height: 100%;
  position: relative;
}

.list-group .list-group-item {
  background: none;
}

.list-group-item {
  border: none;
  font-size: 1.5em;
  padding: 8px 0;
  text-align: center;

  svg {
    color: #abb2bf;
  }

  svg:hover {
    color: #d7dae0;
    cursor: pointer;
  }
}
</style>
