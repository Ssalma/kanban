<template>
  <div class="select-root">
    <input type="text" v-model="selectOption" />
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
          {{ display }}
        </div>
      </div>
    </template>
    <slot v-else></slot>
  </div>
  <div>{{ selectOption }}</div>
</template>

<script>
export default {
  name: "KSelect",
  props: {
    value: {
      type: String,
    },
  },
  data: () => ({
    isSelectOpen: true,
    filter: "",
    selectOption: "",
    optionsDisplay: {
      edit: "edit",
      delete: "delete",
    },
  }),
  methods: {
    closeOptionsHandler() {
      this.isSelectOpen = false;
    },
    enterOption(e) {
      if (e.code === "Enter") {
        console.log(e);
        this.selectOption({ target: document.activeElement });
        // this.isSelectOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select-root {
  position: relative;
}
.list {
  width: 100%;
  background: var(--white);
}
.option {
  padding: 1.6rem 2.4rem;
  cursor: pointer;
}
</style>
