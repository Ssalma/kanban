<template>
  <div class="wrap">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="checkbox"
      :name="name"
      :id="name"
      class="input"
    />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "KCheckbox",
  emits: ["update:modelValue"],
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background: var(--dark-grey-to-dark);
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  &:hover {
    background: var(--purple-hover-bg);
  }
}
label {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--dark-400);
  margin-left: 1.8rem;
}
input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: var(--dark-400);
  opacity: 0.5;
}
.input {
  --white-c: #fff;
  position: relative;
  border-radius: 2px;
  &:checked {
    border: 0.1rem solid var(--purple);
  }
  &[type="checkbox"]::before {
    content: "";
    position: absolute;
    height: 1.6rem;
    width: 1.6rem;
    background-color: var(--white);
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.248914);
  }
  &[type="checkbox"]:checked::before {
    content: "";
    background-color: var(--purple);
    border-radius: 2px;
  }
  &[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0.25rem;
    width: 9.76px;
    height: 5px;
    border-left: 2px solid var(--white-c);
    border-bottom: 2px solid var(--white-c);
    -webkit-transform: translateY(-1.5px) rotate(-45deg);
    transform: translateY(-1.5px) rotate(-45deg);
  }
}
</style>
