<template>
  <div class="select-root">
    <div class="input-wrap" @click.stop="closeOptionsHandler">
      <input
        type="text"
        v-model="innerValue"
        class="inputField"
        @click.stop
        @keyup.stop
        :tabindex="isSelectOpen ? 0 : -1"
      />
      <img src="@/assets/arr.svg" alt="arrow" />
    </div>
    <div :class="['options-list', { 'option-hidden': !isSelectOpen }]">
      <template v-if="optionsDisplay">
        <div class="list">
          <div
            v-for="[value, display] in Object.entries(optionsDisplay)"
            :key="value"
            :data-value="value"
            :tabindex="isSelectOpen ? 0 : -1"
            :title="display"
            class="option"
            @click="enterOption"
          >
            <k-text size="15-black">
              {{ display }}
            </k-text>
          </div>
        </div>
      </template>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
import { KText } from "@/components";
export default {
  name: "KSelect",
  components: {
    KText,
  },
  props: {
    value: {
      type: String,
    },
    optionsDisplay: {
      type: Object,
    },
  },
  data: () => ({
    isSelectOpen: false,
    filter: "",
    innerValue: null,
  }),
  methods: {
    closeOptionsHandler() {
      this.isSelectOpen = !this.isSelectOpen;
    },
    enterOption(e) {
      console.log(e);
      this.selectOption({ target: document.activeElement });
      // this.isSelectOpen = false;
    },
    selectOption(e) {
      const { target } = e;
      if (target.classList.contains("option") || target.tagName === "OPTION") {
        this.innerValue = target.dataset.value;
        this.$emit("input", target.dataset.value);
        // this.filter = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select-root {
  position: relative;
}

.input-wrap {
  position: relative;

  img {
    position: absolute;
    right: 1.6rem;
    padding: 1.5rem 0.4rem;
    cursor: pointer;
    // height: 100%;
  }
  .inputField {
    background: var(--white);
    padding-left: 1.6rem;
    height: 4rem;
    border: none;
    width: 100%;
    border-radius: 0.4rem;
    border: 1px solid rgba(130, 143, 163, 0.25);

    &:focus {
      outline: none;
    }
  }
}

.list {
  width: 100%;
  background: var(--white);
  border-radius: 0.4rem;
  border: 1px solid rgba(130, 143, 163, 0.25);
}
.option {
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  // &:hover {
  //   background: var(--hover-bg);
  // }
  // &:hover + .text {
  //   // background: var(--hover-bg);
  //   color: var(--purple);
  // }
}

.options-list {
  margin-top: 1.6rem;
  position: absolute;
  top: 4rem;
  right: 0;
  left: 0;
}
.option-hidden {
  display: none;
}
</style>
