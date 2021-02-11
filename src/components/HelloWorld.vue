<template>
  <div class="container is-danger is-light">
    <b-navbar transparent>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/logo.png" alt="Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#">
          <router-link to="/">HOME</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
         <router-link to="/">SERVICES</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
         <router-link to="/">WHAT WE DO</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
         <router-link to="/">OUR PRODUCTS</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
         <router-link to="/">CARRIER</router-link>
        </b-navbar-item>
        <b-navbar-dropdown label="INFO">
          <b-navbar-item href="#">
            <router-link to="/about">About</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-danger is-light">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
li {
  padding: 20px;
}
ul {
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  /* list-style: none; */
}
</style>
