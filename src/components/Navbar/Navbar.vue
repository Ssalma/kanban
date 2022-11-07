<template>
  <div class="navbar">
    <div class="navbar--left-mobile">
      <img class="navbar--left-mobile-menu" src="@/assets/log.svg" alt="i" />
      <k-text size="18-black">{{ boardName }}</k-text>
      <button @click="openMobileMenu" aria-label="button">+</button>
    </div>
    <div class="navbar--left">
      <k-logo v-if="!show" class="navbar--left-logo"></k-logo>

      <div :class="[!show ? 'navbar--left-text' : '']">
        <k-text size="24-black">{{ boardName }}</k-text>
      </div>
    </div>
    <div class="navbar--right">
      <k-button variant="secondary" size="small" class="sec-btn"
        >+ Add new task</k-button
      >
      <k-button variant="secondary" size="small" class="sec-btn-mobile"
        >+</k-button
      >
      <k-kebab :options="options" @change="getAction" :value="action"></k-kebab>
    </div>
  </div>
  <k-modal v-if="mobileMenu" forNav="nav">
    <div class="sidebar-mobile">
      <k-text size="12-grey">ALL BOARDS (8)</k-text>
      <div v-for="board in boards" :key="board.id">
        <SidebarItem :board="board.name" :id="board.id" />
      </div>
      <create-board-button></create-board-button>
      <div class="toggle-theme">
        <img src="@/assets/light.svg" alt="i" />
        <k-toggle :value="mode" @input="toggle" />
        <img src="@/assets/dark.svg" alt="i" />
      </div>
    </div>
  </k-modal>
</template>

<script>
import {
  KText,
  KButton,
  KKebab,
  KModal,
  KToggle,
  SidebarItem,
  CreateBoardButton,
} from "@/components";
import KLogo from "../Sidebar/Logo.vue";
export default {
  name: "NavBar",
  emits: ["edit", "deleteboard"],
  components: {
    KLogo,
    CreateBoardButton,
    KToggle,
    SidebarItem,
    KKebab,
    KModal,
    KText,
    KButton,
  },
  data: () => ({
    mobileMenu: false,
    show: true,
    action: "",
    mode: false,
    options: [
      {
        label: "Edit board",
        value: "edit",
      },
      {
        label: "Delete Board",
        value: "delete",
      },
    ],
    boards: [
      {
        name: "Platform Launch",
        id: "1",
      },
      {
        name: "Marketing",
        id: "2",
      },
      {
        name: "Roadmap Launch",
        id: "3",
      },
    ],
  }),
  computed: {
    boardName() {
      return this.$route.query.board;
    },
  },
  methods: {
    openMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
    getAction(e) {
      const val = e.target.value;
      val === "edit" ? this.$emit("edit", val) : this.$emit("deleteBoard", val);
    },
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
.navbar {
  height: 9.5rem;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2.4rem;

  &--right {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .sec-btn {
      display: none;
      @media (min-width: 640px) {
        display: flex;
      }
    }
    .sec-btn-mobile {
      display: flex;
      width: 4.8rem;
      height: 3.2rem;
      font-size: 2.4rem;
      margin-right: 2.4rem;
      @media (min-width: 640px) {
        display: none;
      }
    }
  }

  &--left {
    display: none;
    align-items: center;
    position: relative;

    &-text {
      margin-left: 3.2rem;
      .text {
        padding-left: 3.2rem;
        font-size: 2rem;
        @media (min-width: 768px) {
          font-size: 2.4rem;
        }
      }
      &::before {
        content: "";
        border: 0.5px solid var(--lines);
        position: absolute;
        top: -3.2rem;
        bottom: 0;
        height: 9.5rem;
      }
    }

    &-mobile {
      display: flex;
      .text {
        margin-left: 2.4rem;
      }
      @media (min-width: 640px) {
        display: none;
      }
    }

    @media (min-width: 640px) {
      display: flex;
    }
  }
}

.sidebar-mobile {
  padding: 1.6rem 0;
  width: 24rem;

  .sidebar-link {
    margin-left: 0;
  }

  .create-board {
    margin-left: 0;
    width: 100%;
  }

  .text {
    padding-left: 3.2rem;
    margin-bottom: 2rem;
  }

  .toggle-theme {
    width: 100%;
    height: 4.8rem;
    background: var(--dark-grey-to-dark);
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
    margin: 1.6rem 0 0 1.2rem;
  }
}
</style>
