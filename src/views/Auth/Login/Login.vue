<template>
  <div class="container">
    <div class="content">
      <img :src="logo" alt="i" />
      <form class="form-item">
        <k-input
          label="Email/Username"
          holder="Email/username"
          name="username"
          type="text"
          v-model="user.username"
          size="large"
        />
        <k-input
          label="Password"
          type="password"
          holder="......."
          name="password"
          v-model="user.password"
          size="large"
        />

        <div class="btn--wrap">
          <k-button variant="primary">Login</k-button>
        </div>
        <router-link to="/signup">Don't have an account? Register</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { KInput, KButton } from "@/components";
import Logo from "@/assets/kanban.svg";
export default {
  name: "LoginAuth",
  components: {
    KInput,
    KButton,
  },
  data: () => ({
    logo: Logo,
    user: {
      username: "",
      password: "",
    },
  }),
};
</script>

<style lang="scss" scoped>
a {
  margin-top: 1.6rem;
  color: var(--purple);
  text-align: center;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  margin-bottom: 1.6rem;
  border: 1px solid var(--lines);
  padding: 2.4rem 1.6rem;
  border-radius: 0.8rem;

  img {
    margin-bottom: 3.2rem;
  }
}
.form-item {
  width: 42rem;
}

.btn--wrap {
  margin-bottom: 1.6rem;
}
</style>
