<template>
  <footer>
    <p><small>2019 &nbsp; Faqih Fahmi &nbsp; <font-awesome-icon :icon="['fab', 'vuejs']" /></small></p>
  </footer>
</template>

<script>
export default {
  name: 'BottomBar'  
}
</script>

<style lang="scss" scoped>
* {
  -webkit-user-select: none;
}

footer {
  background: #21252b;
  bottom: 0;
  position: fixed;
  width: 100vw;
  z-index: 100;
}

p {
  color: #abb2bf;
  margin-bottom: 0;
  padding-left: 1em;
  padding-right: 1em;
  text-align: right;
}

@media (max-width: 414px) {
  footer {
    position: sticky;
  }
}
</style>
