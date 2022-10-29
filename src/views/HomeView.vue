<template>
  <div class="home">
    <p>this is home</p>
    <k-button>Button primary</k-button>
    <k-button size="small" variant="secondary">Button secondary</k-button>
    <k-button size="small" variant="destructive">Button secondary</k-button>
    <k-input label="Enter Label" holder="this is plceholder" name="username" />
    <k-input
      label="Enter Label 2"
      holder="this is plceholder"
      name="username"
      :warning="true"
      v-model="inputVal"
    />
  </div>
</template>

<script>
import { KButton, KInput } from "@/components";
export default {
  name: "HomeView",
  components: {
    KButton,
    KInput,
  },
  data: () => ({
    inputVal: "",
  }),
  mounted() {
    console.log(this.inputVal);
  },
};
</script>
