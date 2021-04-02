<template lang="html">
  <section class="footer is-flex-mobile">
    <div class="container is-fluid is-gapless">
      <div class="columns is-gapless">
        <div class="column is-2">
          <h4 class="title is-5 has-text-left">Contact</h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i
            >&nbsp;info@panchamgroup.com
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i
            >&nbsp;+91&nbsp;9109-046-910
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i
            >&nbsp;+91&nbsp;9109-024-910
          </h4>
        </div>
        <!-- <div class="column">
          <h4 class="title is-5 has-text-left">Follow Us</h4>
          <h4 class="title is-6 has-text-left">&nbsp;Instagram</h4>
          <h4 class="title is-6 has-text-left">
            &nbsp;Twitter
          </h4>
          <h4 class="title is-6 has-text-left">&nbsp;Facebook</h4>
        </div> -->
        <div class="column is-2">
          <h4 class="title is-5 has-text-left">Legal</h4>

          <h4 class="title is-6 has-text-left">
            <i class="fa fa-handshake fa-lg" aria-hidden="true"></i
            >&nbsp;<router-link to="terms-services"
              >Terms of Service</router-link
            >&nbsp;
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-address-card fa-lg" aria-hidden="true"></i>
            &nbsp;<router-link to="privacy-policy">Privacy Policy</router-link>
          </h4>

          <h4 class="title is-6 has-text-left">
            <h4 class="title is-6 has-text-left">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              &nbsp;
              <router-link to="/career">Careers</router-link>
            </h4>
          </h4>
        </div>
        <div class="column is-2">
          <h4 class="title is-5 has-text-left">Community</h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-handshake fa-lg" aria-hidden="true"></i
            >&nbsp;<router-link to="/partner">Partner</router-link>&nbsp;
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-book fa-lg" aria-hidden="true"></i
            >&nbsp;<router-link to="/blogs">Blogs</router-link>&nbsp;
          </h4>
          <h4 class="title is-6 has-text-left">
            <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
            &nbsp;<router-link to="/team">Team</router-link>&nbsp;
          </h4>
        </div>

        <div class="column is-4">
          <h6 class="title is-6 has-text-left">
            &copy;&nbsp;Pancham Group of Industries
          </h6>
          <h6 class="title is-6 has-text-left">
            For us to respond well, use forms assigned within our website for
            designated purposes. And for all other queries and enquires, kindly
            reach us on - panchamgroup.com
          </h6>
          <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
        </div>
        <div class="column is-4">
          <div class="column is-4">
            <img width="150" height="150" src="../assets/logo.png" alt="Logo" />
          </div>
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
.container.is-fluid.is-gapless {
  margin-left: 40px;
}
h6.title.is-6.has-text-left {
  margin-top: 10px;
}
img {
  border-radius: 8px;
}
h6.title.is-6.has-text-left {
  color: white;
}
a {
  color: white;
}
a:hover {
  color: white;
}
* {
  padding: 0px;
}
</style>
