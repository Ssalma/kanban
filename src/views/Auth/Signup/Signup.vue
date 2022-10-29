<template>
  <div class="container">
    <div class="content">
      <h1>Kanban</h1>
      <form class="form-item">
        <k-input
          label="Username"
          holder="username"
          name="username"
          type="text"
          v-model="user.username"
          size="large"
        />
        <k-input
          label="Email"
          holder="Email"
          name="username"
          type="email"
          v-model="user.email"
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
          <k-button variant="primary">Signup</k-button>
        </div>

        <router-link to="/login">Already have an account? Login</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { KInput, KButton } from "@/components";
export default {
  name: "SignupAuth",
  components: {
    KInput,
    KButton,
  },
  data: () => ({
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
  h1 {
    font-size: 2.4rem;
    color: var(--dark-400);
    line-height: 3rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
}
.form-item {
  border: 1px solid rgba(130, 143, 163, 0.25);
  width: 42rem;
  padding: 2.4rem 1.6rem;
  border-radius: 0.8rem;
}

.btn--wrap {
  margin-bottom: 1.6rem;
}
</style>
