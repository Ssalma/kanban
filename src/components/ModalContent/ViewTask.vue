<template>
  <div class="single-task">
    <div class="top">
      <k-text size="18-black"
        >Research pricing points of various competitors and trial different
        business models</k-text
      >
      <k-kebab :options="options" @change="getAction" :value="action"></k-kebab>
    </div>
    <k-text size="13-grey"
      >We know what we're planning to build for version one. Now we need to
      finalise the first pricing model we'll use. Keep iterating the subtasks
      until we have a coherent proposition.</k-text
    >
    <k-text size="12-grey-grey">Subtasks (2 of 3)</k-text>
    <KCheckbox label="Research competitor pricing and business models" />
    <KCheckbox label="Research competitor pricing and business models" />
    <KCheckbox label="Research competitor pricing and business models" />
  </div>
  <!-- <KSelect :optionsDisplay="optionsDisplay" /> -->
</template>

<script>
import { KText, KKebab, KCheckbox } from "@/components";
// import KSelect from "../Select/Select.vue";
export default {
  name: "TaskView",
  components: {
    KText,
    KKebab,
    KCheckbox,
    // KSelect,
  },
  data: () => ({
    action: "",
    optionsDisplay: {
      value: "fjgdfsahf",
      label: "hfdmahsdajh",
    },

    options: [
      {
        label: "Edit board",
        value: "edit",
      },
      {
        label: "Close",
        value: "close",
      },
    ],
  }),
  methods: {
    getAction(e) {
      const val = e.target.value;
      val === "edit" ? this.$emit("edit", val) : this.$emit("deleteBoard", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.single-task {
  padding: 3.2rem;
  display: grid;
  grid-gap: 2.4rem;

  .top {
    display: grid;
    grid: 1fr / 1fr auto;
    align-items: center;
    // margin-bottom: 2.4rem;
  }
}
</style>
