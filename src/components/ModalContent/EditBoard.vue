<template>
  <div class="create--board">
    <k-text size="18-black">Edit Board</k-text>
    <div class="board-content">
      <k-input label="Name" holder="Board Name"></k-input>

      <div v-for="(inp, k) in inputs" :key="k">
        <k-input
          v-model="inp.name"
          :dynamic="true"
          @remove="remove(k)"
          :label="k === 0 ? 'Board Columns' : ''"
        ></k-input>
      </div>
      <k-button @click="addColumn" variant="secondary-type2" size="slim"
        >+ Add New Column</k-button
      >
    </div>
    <k-button @click="createNewBoard" variant="primary" size="slim">
      Save Changes</k-button
    >
  </div>
</template>

<script>
import { KInput, KText, KButton } from "@/components";
export default {
  name: "EditBoard",
  components: {
    KInput,
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
      this.$emit("close-edit");
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

  .label {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
  }
  .lable-item {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
    margin-bottom: 1.2rem;
  }
}
</style>
