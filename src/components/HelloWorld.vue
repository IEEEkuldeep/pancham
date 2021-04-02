<template>
  <div class="container is-danger is-light">
    <!-- fixed-top -->
    <b-navbar transparent fixed-top mobile-burger centred collapsible>
      <template #brand> </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img class="logo" src="../assets/logo.png" alt="Logo" />
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
        <b-navbar-dropdown label="Calibration">
          <b-navbar-item href="#">
            <router-link to="/mechanical">Mechanical</router-link>
          </b-navbar-item>

          <b-navbar-item href="#">
            <router-link to="/dimension">Dimension</router-link>
          </b-navbar-item>

          <b-navbar-item href="#">
            <router-link to="/thermal">Thermal</router-link>
          </b-navbar-item>

          <b-navbar-item href="#">
            <router-link to="/pressure">Pressure</router-link>
          </b-navbar-item>

          <b-navbar-item href="#">
            <router-link to="/electrical">Electrical</router-link>
          </b-navbar-item>

          <b-navbar-item href="#">
            <router-link to="/mass">Mass</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link to="/validation">Validation</router-link>
          </b-navbar-item>
        </b-navbar-dropdown>
        <!-- <b-navbar-item href="#">
         <router-link to="/services"> Services</router-link>
        </b-navbar-item> -->
        <b-navbar-item href="#">
          <router-link to="/repair">Repair</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/">Equipment Sales</router-link>
        </b-navbar-item>

        <b-navbar-dropdown label="Info">
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
            <a class="button is-success is-light" size="is-large">
              <router-link to="/about"> <i class="fas fa-location-arrow"></i>&nbsp; <strong>Requet a Quote</strong></router-link>
            
            </a>
            
            <a class="button  is-light">
              <i class="fas fa-user-plus"></i>&nbsp;
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">&nbsp;
              <i class="fas fa-user-plus"></i>
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
<style>
/* li {
  padding: 20px;
} */
ul {
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  /* list-style: none; */
}
.navbar-menu {
  margin-left: 10.5rem;
}

.navbar-item {
  margin-right: 2.5rem;
}
.navbar-item img {
  max-height: 4.75rem !important;
}
a.navbar-item, .navbar-link {
    color: black;
}

</style>
