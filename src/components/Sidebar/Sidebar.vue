<template>
  <div class="sidebar">
    <k-logo />

    <div class="sidebar-content">
      <k-text size="12-grey">ALL BOARDS (8)</k-text>
      <div class="sidebar-content-item">
        <div v-for="board in boards" :key="board.id">
          <SidebarItem :board="board.name" :id="board.id" />
        </div>
        <create-board></create-board>
      </div>
    </div>
    <div class="toggle-hide-sidebar">
      <div class="toggle-theme">
        <img :src="light" alt="i" />
        <k-toggle :value="mode" @input="toggle" />
        <img :src="dark" alt="i" />
      </div>
      <HideSidebar :close="close" />
    </div>
  </div>
</template>

<script>
import light from "@/assets/light.svg";
import dark from "@/assets/dark.svg";
import eyeSlash from "@/assets/eye-slash.svg";
import KToggle from "../Button/Toggle.vue";
import KText from "../Text/Text.vue";
import KLogo from "./Logo.vue";
import SidebarItem from "./SidebarItem";
import CreateBoard from "./CreateBoard.vue";
import HideSidebar from "./HideSidebar.vue";

export default {
  name: "SideBar",
  components: {
    KToggle,
    KText,
    KLogo,
    SidebarItem,
    CreateBoard,
    HideSidebar,
  },
  props: {
    close: {
      type: Function,
    },
    boards: {
      type: Array,
    },
  },
  data: () => ({
    light: light,
    dark: dark,
    eye: eyeSlash,
    mode: false,
  }),
  methods: {
    changeTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    toggle() {
      this.mode = !this.mode;
      const new_theme = this.mode ? "dark" : "light";
      this.changeTheme(new_theme);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 3.2rem 3.2rem;
  background: var(--white);
  height: 100vh;
  width: 30rem;
  display: grid;
  grid: max-content auto max-content / 1fr;
  border-right: 1px solid var(--lines);

  .toggle-theme {
    width: 100%;
    height: 4.8rem;
    background: var(--dark-grey-to-dark);
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
    margin-bottom: 0.8rem;
  }

  &-content {
    margin-top: 4rem;
    &-item {
      margin-top: 2.4rem;
      display: grid;
    }
  }
}
</style>
