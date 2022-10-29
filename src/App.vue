<template>
  <router-view />
  <!-- <div>
    <button @click="changeTheme('dark')">dark</button>
    <button @click="changeTheme('light')">light</button>
  </div> -->
</template>

<script>
export default {
  data: () => ({
    theme: "light",
  }),
  mounted() {
    this.changeTheme("light");
  },
  methods: {
    changeTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles.scss";
</style>
