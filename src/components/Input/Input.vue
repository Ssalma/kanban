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
      ]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "KInput",
  emits: ["update:modelValue"],
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
  },
};
</script>

<style src="./Input.scss" lang="scss"></style>
