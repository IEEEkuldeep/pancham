<template lang="html">
  <section class="footer is-flex-mobile">
    <div class="container is-fluid">
      <div class="columns is-mobile">
        
          <div class="column">
            <img width="200" height="200" src="../assets/logo.png" alt="Logo" />
          </div>
        
        <div class="column">
          <h4 class="title is-5 has-text-left">Contact</h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>&nbsp;E-Mail
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>&nbsp;+91 -7999
            98204
          </h4>
        </div>
        <div class="column">
          <h4 class="title is-5 has-text-left">Follow Us</h4>
          <h4 class="title is-6 has-text-left">&nbsp;Instagram</h4>
          <h4 class="title is-6 has-text-left">
            &nbsp;Twitter
          </h4>
          <h4 class="title is-6 has-text-left">&nbsp;Facebook</h4>
        </div>
        <div class="column">
          <h4 class="title is-5 has-text-left">Legal</h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-handshake fa-lg" aria-hidden="true"></i>&nbsp;Terms
            of Service
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-address-card fa-lg" aria-hidden="true"></i
            >&nbsp;Privacy Policy
          </h4>
        </div>
        <div class="column">
          <h4 class="title is-5 has-text-left">Community</h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-handshake fa-lg" aria-hidden="true"></i
            >&nbsp;Partners
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-book fa-lg" aria-hidden="true"></i>&nbsp;Blog
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
            &nbsp;Team
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.title.is-5,
h4.title.is-6.has-text-left {
  color: white;
}
.footer {
  background-color: darkred;
}
img {
  border-radius: 50px;
}
</style>
