<template>
  <p :class="['text', size ? `text--${size}` : '']"><slot /></p>
</template>

<script>
export default {
  name: "KText",
  props: {
    size: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
%large {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
}
%medium {
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.3rem;
}
%small {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.9rem;
}
%xsmall {
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 2.4px;
}
.text {
  --text-grey: #828fa3;
  --text-white: #ffffff;
  @extend %large;
  color: var(--dark-400);

  &--24-black {
    @extend %large;
    color: var(--dark-400);
  }
  &--24-grey {
    @extend %large;
    color: var(--medium-grey);
  }
  &--18-black {
    @extend %medium;
    color: var(--dark-400);
  }
  &--18-grey {
    @extend %medium;
    color: var(--medium-grey);
  }
  &--15-black {
    @extend %small;
    color: var(--dark-400);
  }
  &--15-grey {
    @extend %small;
    color: var(--text-grey);
  }
  &--15-white {
    @extend %small;
    color: var(--text-white);
  }
  &--12-grey {
    @extend %xsmall;
    color: var(--medium-grey);
  }
}
</style>
