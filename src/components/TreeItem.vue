<template>
  <li id="TreeItem">
    <div :class="is_active ? 'active' : ''" @click="handleItemClick">
      <span v-if="is_folder">
        <font-awesome-icon v-if="is_open" class="mr-1" :icon="['fas', 'caret-down']" style="transform: rotate(-45deg);" />

        <font-awesome-icon v-else class="mr-1" :icon="['fas', 'caret-right']" />
      </span>

      <span v-else style="margin-left: 1em;"></span>

      <font-awesome-icon v-if="item.icon_name" class="ml-1 mr-2" :icon="[item.icon_style, item.icon_name]" :style="{ color: item.icon_color }" />

      <span :style="{ color: item.font_color }">{{ item.name }}</span>
    </div>

    <ul v-show="is_open" v-if="is_folder">
      <tree-item class="item" v-for="(child, index) in item.children" :key="index" :item="child" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data() {
    return {
      is_open: true
    }
  },
  computed: {
    is_active() {
      return this.item.route === this.$route.path
    },
    is_folder() {
      return this.item.children
    }
  },
  methods: {
    handleItemClick() {
      if (this.is_folder) {
        this.toggleFolder()
      } else {
        this.loadPage()
      }
    },
    loadPage() {
      this.$router.replace(this.item.route)
    },
    toggleFolder() {
      this.is_open = !this.is_open
    }
  },
  mounted() {
    const root_item = document.getElementById('TreeItem').firstElementChild

    root_item.style.background = '#282c34'
    root_item.style.fontSize = '12px'
    root_item.style.fontWeight = 'bold'
    root_item.style.padding = '2.5px 0 2.5px 16px'
  }
}
</script>

<style lang="scss" scoped>
* {
  -webkit-user-select: none;
}

li {
  color: #d7dae0;
  cursor: pointer;
  font-size: 13px;
  list-style-type: none;
}

ul {
  padding-left: 1em;
}

.active, div:hover {
  background: #282c34;
}

.item {
  div {
    margin-left: -40px;
    padding: 2px 0 2px 4em;
  }
}
</style>
