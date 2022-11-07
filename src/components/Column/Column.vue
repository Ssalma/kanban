<template>
  <div class="column">
    <div class="title-wrap">
      <div :class="['dot']" :style="styles"></div>
      <k-text size="12-grey-grey">{{ title }}</k-text>
    </div>
    <div class="column-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { KText } from "@/components";
export default {
  name: "KColumn",
  props: {
    title: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  components: {
    KText,
  },
  computed: {
    styles() {
      return {
        background: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  width: 28rem;

  .title-wrap {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2.4rem;
  }

  .dot {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: none;
  }

  .column-content {
    display: grid;
    grid-gap: 2rem;
  }
}
</style>
