<template>
  <button class="create-board" @click="$emit('createBoard')">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
        fill=""
      />
    </svg>

    + Create New Board
  </button>
</template>

<script>
export default {
  name: "CreateBoard",
};
</script>

<style lang="scss" scoped>
.create-board {
  width: 27.5rem;
  height: 4.8rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.9rem;
  border-radius: 0 2.5rem 2.5rem 0;
  color: var(--purple);
  margin-left: -3.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  padding-left: 3.2rem;

  svg {
    fill: var(--purple);
    margin-right: 2.5rem;
  }

  &:hover {
    background: var(--hover-bg);
  }
}
</style>
