<template>
  <main class="dashboard">
    <div :class="['sidebar', show ? 'is__open' : 'not__open']">
      <transition name="appear">
        <k-sidebar
          :boards="boards"
          v-if="show"
          :class="['isopen']"
          :close="toggleSidebar"
          @create-board="createBoard"
        />
      </transition>
    </div>
    <button
      @click="toggleSidebar"
      :class="['show--sidebar', !show ? 'sidebar__not-open' : '']"
    >
      <img src="@/assets/eye.svg" alt="i" />
    </button>

    <div :class="['container', show ? '' : 'container__sidebar-not-open']">
      <Navbar @edit="editBoard" @deleteBoard="deleteBoard" />
      <router-view v-slot="{ Component }">
        <!-- <transition> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </div>

    <k-modal v-if="showCreateBoard">
      <CreateBoard @close-create="() => (showCreateBoard = !showCreateBoard)" />
    </k-modal>

    <k-modal v-if="showEditBoard">
      <EditBoard @close-edit="toggleEdit" />
    </k-modal>

    <k-modal v-if="showDeleteBoard">
      <DeleteBoard @close-delete="toggleDelete" />
    </k-modal>
  </main>
</template>

<script>
import { KSidebar, KButton, KModal, KInput, EditBoard } from "@/components";
import CreateBoard from "../components/ModalContent/CreateBoard.vue";
import DeleteBoard from "../components/ModalContent/DeleteBoard.vue";
import Navbar from "../components/Navbar/Navbar.vue";

export default {
  name: "DashboardLayout",
  components: {
    KSidebar,
    KButton,
    KModal,
    CreateBoard,
    KInput,
    EditBoard,
    DeleteBoard,
    Navbar,
  },
  data: () => ({
    show: true,
    windowWidth: null,
    showCreateBoard: false,
    showEditBoard: false,
    showDeleteBoard: false,
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
    // boardName() {
    //   return this.$route.query.board;
    // },
  },
  watch: {
    windowWidth(val) {
      val < 900 ? (this.show = false) : (this.show = true);
    },
  },
  methods: {
    toggleSidebar() {
      this.show = !this.show;
    },
    toggleDelete() {
      this.showDeleteBoard = !this.showDeleteBoard;
    },
    toggleEdit() {
      this.showEditBoard = !this.showEditBoard;
    },
    editBoard(e) {
      e === "edit" ? (this.showEditBoard = true) : null;
    },
    deleteBoard(e) {
      e === "delete" ? (this.showDeleteBoard = true) : null;
    },
    changeTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    createBoard() {
      this.showCreateBoard = !this.showCreateBoard;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;

  .is__open {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .not__open {
    position: absolute;
    top: 0;
    left: -30%;
    z-index: 100;
  }

  .container {
    // max-width: unset;
    margin-left: 30rem;
    width: calc(100% - 30rem);
    overflow: hidden;

    &__sidebar-not-open {
      width: 100%;
      margin-left: 0;
      border: 1px solid green;
    }
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
</style>
