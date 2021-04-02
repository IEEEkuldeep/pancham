<template lang="html">
  <div class="services">
    <div class="">
      <HelloWorld />
    </div>
    <section class="services mt-6">
      <div class="container">
        <h2 class="title is-2">Title 2</h2>
        <div class="content">
          <p>hjkbjhjhj</p>
        </div>
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
        <div class="columns is-centered mb-6">
          <div class="column is-half">
            <b-button type="is-danger" outlined>Request a Quote</b-button>
          </div>
        </div>
      </div>
    </section>

    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script lang="js">
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

  export default  {
    name: 'services',
    components: {
    HelloWorld,
    Footer,
  },

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
.level-item.has-text-centered:hover {
  padding-top: 10px;
  background-color: darkred;
  color: white;
  padding-bottom: 10px;
}
.level-item.has-text-centered {
  padding-top: 10px;

  color: black;
  padding-bottom: 10px;
}
</style>
