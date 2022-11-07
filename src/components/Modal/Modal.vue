<template>
  <div :class="['modal', forNav ? `modal-${forNav}` : '']">
    <div :class="['modal--content', forNav ? `modal--content-${forNav}` : '']">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "KModal",
  props: {
    forNav: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  z-index: 150;
  &-nav {
    align-items: flex-start;
    padding-top: 1.6rem;
    top: 9.5rem;
  }

  &--content {
    background: var(--modal-bg);
    width: 100%;
    max-width: 48rem;
    border-radius: 6px;

    &-nav {
      max-width: 26.5rem;
    }
  }
}
</style>
