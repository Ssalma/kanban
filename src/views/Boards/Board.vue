<template>
  <div class="page">
    <div class="empty-state">
      <k-text size="18-grey"
        >This board is empty. Create a new column to get started.</k-text
      >
      <k-button variant="primary" size="small">+ Add New Column</k-button>
    </div>
  </div>
</template>

<script>
import { KText, KButton } from "@/components";
export default {
  name: "BoardsPage",
  components: {
    KText,
    KButton,
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 9.5rem);
  .empty-state {
    height: calc(100% - 9.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }
}
</style>
