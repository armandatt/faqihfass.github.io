<template>
  <section>
    <div class="outer">
      <div class="inner">
        <img src="@/assets/profile-512.jpg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
* {
  -webkit-user-select: none;
}

img {
  width: 50%;
}

.inner {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.outer {
  display: table;
  margin-top: -1em;
  min-height: calc(100vh - 64px);
}
</style>
