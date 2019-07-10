<template>
  <section class="col-xs-12 col-sm p-0 editor">
    <b-tabs content-class="mt-3">
      <b-tab :title="title" active>
        <slot></slot>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
export default {
  name: 'Editor',
  props: {
    title: {
      required: true
    }
  }
}
</script>

<style lang="scss">
pre {
  color: #abb2bf !important;
  cursor: text !important;
  margin-bottom: 0 !important;
  padding-left: 2em !important;
  padding-right: 2em !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
}

.editor {
  background: #282c34 !important;
  border-right: 1px solid #181a1f !important;
}

.nav-link {
  border-bottom: none !important;
  border-left: none !important;
  border-right: 1px solid #181a1f !important;
  border-top: none !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.nav-link.active {
  background-color: #282c34 !important;
  color: #d7dae0 !important;
  cursor: default !important;
  font-size: 80% !important;
  font-weight: 600 !important;
  padding: 11px 5em 11px 1em !important;
}

.nav-tabs {
  background: #21252b !important;
  border-bottom: none !important;
  -webkit-user-select: none !important;
}
</style>
