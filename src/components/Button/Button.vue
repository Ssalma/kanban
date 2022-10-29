<template>
  <div class="custom__btn">
    <button
      :class="['btn', `btn--${variant}`, size ? `btn--${size}` : '']"
      :type="type"
      :variant="variant"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "full",
    },
  },
};
</script>

<style src="./Button.scss" lang="scss"></style>
