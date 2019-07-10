<template>
  <aside>
    <p class="mb-0 px-3 py-2"><small>EXPLORER</small></p>

    <tree-item :item="tree_items"/>
  </aside>
</template>

<script>
import TreeItem from '@/components/TreeItem.vue'

export default {
  name: 'SideBar',
  components: {
    TreeItem
  },
  data() {
    return {
      tree_items: {
        name: 'FAQIHFASS-GITHUB-PAGES',
        font_color: 'inherit',
        children: [
          {
            name: 'dist',
            icon_name: 'folder-open',
            icon_style: 'fas',
            icon_color: '#e57373',
            font_color: '#878888',
            children: [

            ]
          },
          {
            name: 'node_modules',
            icon_name: 'folder-open',
            icon_style: 'fas',
            icon_color: '#8bc34a',
            font_color: '#878888',
            children: [

            ]
          },
          {
            name: 'src',
            icon_name: 'folder-open',
            icon_style: 'fas',
            icon_color: '#4caf50',
            font_color: 'inherit',
            children: [
              {
                name: 'assets',
                icon_name: 'folder-open',
                icon_style: 'fas',
                icon_color: '#fbc02d',
                font_color: 'inherit',
                children: [
                  {
                    name: 'profile-512.jpg',
                    icon_name: 'file-image',
                    icon_style: 'fas',
                    icon_color: '#26a69a',
                    font_color: 'inherit',
                    route: '/profile'
                  }
                ]
              },
              {
                name: 'views',
                icon_name: 'folder-open',
                icon_style: 'fas',
                icon_color: '#ff7043',
                font_color: 'inherit',
                children: [
                  {
                    name: 'contact.html',
                    icon_name: 'html5',
                    icon_style: 'fab',
                    icon_color: '#e44d26',
                    font_color: 'inherit',
                    route: '/contact'
                  },
                  {
                    name: 'projects.html',
                    icon_name: 'html5',
                    icon_style: 'fab',
                    icon_color: '#e44d26',
                    font_color: 'inherit',
                    route: '/projects'
                  }
                ]
              },
              {
                name: 'manifest.json',
                icon_name: 'js',
                icon_style: 'fab',
                icon_color: '#ffca28',
                font_color: 'inherit',
                route: '/manifest'
              }
            ]
          },
          {
            name: 'package.json',
            icon_name: 'node-js',
            icon_style: 'fab',
            icon_color: '#80b247',
            font_color: 'inherit',
            route: '/package'
          },
          {
            name: 'README.md',
            icon_name: 'info-circle',
            icon_style: 'fas',
            icon_color: '#42a5f5',
            font_color: 'inherit',
            route: '/readme'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  -webkit-user-select: none;
}

aside {
  background: #21252b;
  float: right;
  height: 100%;
  width: calc(100% - 3em);
}

p {
  color: #d7dae0;
}
</style>
