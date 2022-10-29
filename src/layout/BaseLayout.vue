<template>
  <main class="dashboard">
    <div :class="['sidebar', show ? 'is__open' : 'not__open']">
      <transition name="appear">
        <k-sidebar
          :boards="boards"
          v-if="show"
          :class="['isopen']"
          :close="toggleSidebar"
        />
      </transition>
    </div>
    <button
      @click="toggleSidebar"
      :class="['show--sidebar', !show ? 'sidebar__not-open' : '']"
    >
      <img :src="eye" alt="i" />
    </button>

    <div :class="['container', show ? '' : 'container__sidebar-not-open']">
      <div class="navbar">
        <div class="navbar--left-mobile">
          <img class="navbar--left-mobile-menu" :src="menu" alt="i" />
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
          <k-kebab
            :options="options"
            v-model="action"
            @change="getAction"
          ></k-kebab>
        </div>
      </div>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <k-modal v-if="mobileMenu" forNav="nav">
      <div class="sidebar-mobile">
        <k-text size="12-grey">ALL BOARDS (8)</k-text>
        <div v-for="board in boards" :key="board.id">
          <SidebarItem :board="board.name" :id="board.id" />
        </div>
        <create-board></create-board>
        <div class="toggle-theme">
          <img :src="light" alt="i" />
          <k-toggle :value="mode" @input="toggle" />
          <img :src="dark" alt="i" />
        </div>
      </div>
    </k-modal>
  </main>
</template>

<script>
import {
  KSidebar,
  KText,
  KButton,
  KKebab,
  KModal,
  KToggle,
  SidebarItem,
  CreateBoard,
} from "@/components";
import eye from "../assets/eye.svg";
import menu from "../assets/log.svg";
import KLogo from "../components/Sidebar/Logo.vue";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

export default {
  name: "DashboardLayout",
  components: {
    KSidebar,
    KText,
    KButton,
    KKebab,
    KLogo,
    KModal,
    KToggle,
    SidebarItem,
    CreateBoard,
  },
  data: () => ({
    eye: eye,
    menu: menu,
    show: true,
    action: "",
    windowWidth: null,
    light: light,
    dark: dark,
    mode: false,
    mobileMenu: false,
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
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    boardName() {
      return this.$route.query.board;
    },
  },
  watch: {
    windowWidth(val) {
      val < 768 ? (this.show = false) : (this.show = true);
    },
  },
  methods: {
    toggleSidebar() {
      this.show = !this.show;
    },
    getAction(e) {
      console.log(e);
    },
    changeTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    toggle() {
      this.mode = !this.mode;
      const new_theme = this.mode ? "dark" : "light";
      this.changeTheme(new_theme);
    },
    openMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;

  // .sidebar {
  //   display: none;
  //   @media screen and (min-width: 768px) {
  //     display: grid;
  //   }
  // }

  .is__open {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .not__open {
    position: absolute;
    top: 0;
    left: -30rem;
    z-index: 100;
  }

  .container {
    max-width: unset;
    margin-left: 30rem;

    &__sidebar-not-open {
      margin-left: 0;
    }

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

.show--sidebar {
  width: 5.6rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 2.5rem 2.5rem 0;
  background: var(--purple);
  position: absolute;
  left: 0;
  bottom: 3.2rem;
  cursor: pointer;

  &:hover {
    background: var(--purple-light);
  }
}
.appear-enter-active {
  animation: slide-in 0.5s ease-in-out;
}
.appear-leave-active {
  animation: slide-out 0.5s ease-in-out;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(40px);
  }
}
</style>
