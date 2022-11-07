<template>
  <div class="create--board">
    <k-text size="18-red">Delete this board</k-text>
    <div class="board-content">
      <k-text size="13-grey"
        >Are you sure you want to delete the ‘Platform Launch’ board? This
        action will remove all columns and tasks and cannot be reversed.</k-text
      >
    </div>
    <div class="btn-wrap">
      <k-button @click="addColumn" variant="destructive" size="slim"
        >Delete</k-button
      >

      <k-button @click="createNewBoard" variant="secondary" size="slim">
        Cancel</k-button
      >
    </div>
  </div>
</template>

<script>
import { KText, KButton } from "@/components";
export default {
  name: "DeleteBoard",
  components: {
    KText,
    KButton,
  },
  data: () => ({
    inputs: [{ name: "" }],
  }),
  methods: {
    addColumn() {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    createNewBoard() {
      this.$emit("close-delete");
    },
  },
};
</script>

<style scoped lang="scss">
.create--board {
  padding: 3.2rem;

  .board-content {
    margin: 3.2rem 0 2rem;
  }

  .btn-wrap {
    display: grid;
    grid: auto / repeat(2, 1fr);
    gap: 1.6rem;
  }
}
</style>
