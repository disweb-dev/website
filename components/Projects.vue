<template>
  <section>
    projects
    {{ projects }}
  </section>
</template>

<script>
export default {
  props: {
    projects: Object,
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: seashell;
}
</style>