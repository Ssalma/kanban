<template>
  <div class="page">
    <div class="empty-state" v-if="boardData.length === 0">
      <k-text size="18-grey"
        >This board is empty. Create a new column to get started.</k-text
      >
      <k-button variant="primary" size="small">+ Add New Column</k-button>
    </div>
    <KSelect />
    <div class="content">
      <div class="content-item">
        <div v-for="(item, k) in boardData" :key="k">
          <k-column
            :title="`${item.title} ${item.count}`"
            :color="labelColors[k]"
          >
            <k-card
              @click="() => (showTask = true)"
              v-for="task in item.tasks"
              :key="task"
              :description="task.description"
              :subtitle="task.subtitle"
            ></k-card>
          </k-column>
        </div>
        <div class="add-column">
          <k-text
            @click="() => (showEditBoard = !showEditBoard)"
            size="24-grey-grey"
            >+New Column</k-text
          >
        </div>
      </div>
    </div>
  </div>
  <k-modal v-if="showEditBoard">
    <EditBoard @close-edit="toggleEdit" />
  </k-modal>
  <k-modal v-if="showTask">
    <TaskView @close-edit="toggleEdit" />
  </k-modal>
</template>

<script>
import {
  KText,
  KButton,
  KCard,
  KColumn,
  KModal,
  EditBoard,
  TaskView,
  KSelect,
} from "@/components";
import { boardData, colors } from "./Board";
export default {
  name: "BoardsPage",
  components: {
    KText,
    KButton,
    KColumn,
    KCard,
    KModal,
    EditBoard,
    TaskView,
    KSelect,
  },
  data: () => ({
    createBoard: false,
    showEditBoard: false,
    showTask: false,
    labelColors: colors,
    boardData: boardData,
    optionsDisplay: [
      {
        label: "fjgdfsahf",
        value: "hfdmahsdajh",
      },
    ],
  }),

  methods: {
    toggleEdit() {
      this.showEditBoard = !this.showEditBoard;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 9.5rem);
  width: 100%;
  // border: 1px solid red;
  overflow: hidden;
  .empty-state {
    height: calc(100% - 9.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }

  .add-column {
    width: 28rem;
    background: var(--column-bg);
    border-radius: 6px;
    display: grid;
    place-content: center;
    .text--24-grey-grey {
      cursor: pointer;
    }
  }

  .content {
    // border: 1px solid green;
    height: calc(100vh - 9.5em);
    width: 100%;
    padding: 2.4rem 0 1.6rem 2.4rem;
    overflow: hidden;

    &-item {
      // border: 1px solid magenta;
      // max-width: 78vw;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(28rem, 1fr);
      grid-gap: 2.4rem;
      overflow-x: auto;
      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      @media (min-width: 900px) {
        // border: 1px solid green;
        max-width: 75vw;
      }
    }
  }
}
</style>
