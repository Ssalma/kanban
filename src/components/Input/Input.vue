<template>
  <div class="custom-input">
    <label class="inputLabel" for="name">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="holder"
      :class="[
        'input',
        warning ? 'input--error' : '',
        size ? `input--${size}` : '',
        dynamic ? 'input--dynamic' : '',
      ]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <img
      @click="$emit('remove')"
      v-if="dynamic"
      src="@/assets/close.svg"
      alt="i"
      :class="['close', label ? 'close--with-label' : '']"
    />
  </div>
</template>

<script>
export default {
  name: "KInput",
  emits: ["update:modelValue", "remove"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    holder: {
      type: String,
      default: "",
    },
    warning: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./Input.scss" lang="scss"></style>
