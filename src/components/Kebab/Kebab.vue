<template>
  <div class="kebab">
    <button @click="toggle" class="kebab-btn">
      <img :src="kebab" alt="" />
    </button>
    <div
      :class="[
        'dropdown__menu',
        show ? 'show' : '',
        'filter-dropdown__menu',
        show ? 'show' : '',
      ]"
    >
      <ul class="dropdown__list">
        <li
          class="dropdown__item"
          v-for="option in options"
          :key="option.value"
        >
          <input
            :name="id + option.value"
            :id="id + option.value"
            type="radio"
            :value="option.value"
            v-model="selectedOption"
          />
          <label
            :class="[
              'dropdown__item-label',
              `dropdown__item-label-${option.value}`,
            ]"
            :for="id + option.value"
            v-html="option.label"
          ></label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import kebab from "../../assets/kebab.svg";
export default {
  name: "KKebab",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectedOption: {
      get() {
        return this.value;
      },
      set(value) {
        if (typeof value === "string") {
          this.$emit("input", value);
          this.$emit("change", value);
        }
      },
    },
    id() {
      return Math.floor(Math.random() * 90000) + 10000;
    },
  },
  watch: {
    selectedOption() {
      this.show = false;
    },
  },
  data: () => ({
    kebab: kebab,
    show: false,
  }),

  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style src="./kebab.scss" lang="scss" scoped></style>
