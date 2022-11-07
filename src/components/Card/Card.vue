<template>
  <div class="card">
    <k-text size="15-black">{{ description }}</k-text>
    <k-text size="12-grey-grey">{{ subtitle }}</k-text>
  </div>
</template>

<script>
import { KText } from "@/components";
export default {
  name: "CCard",
  components: {
    KText,
  },
  props: {
    description: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--white);
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;
  padding: 2.3rem 1.6rem;
  display: grid;
  grid-gap: 0.8rem;
  cursor: pointer;
}
</style>
