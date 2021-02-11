<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-carousel
      :autoplay="false"
      with-carousel-list
      :indicator="false"
      :overlay="gallery"
      @click="switchGallery(true)"
    >
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <figure class="image">
          <img :src="item.image" />
        </figure>
      </b-carousel-item>
      <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      />
      <template #list="props">
        <b-carousel-list
          v-model="props.active"
          :data="items"
          v-bind="al"
          @switch="props.switch($event, false)"
          as-indicator
        />
      </template>
      <template #overlay>
        <div class="has-text-centered has-text-white">
          Hello i'am overlay!
        </div>
      </template>
    </b-carousel>
    <div class="container">
      <!-- <nav class="breadcrumb is-centered mt-5"  aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active">
            <a href="#" aria-current="page">Breadcrumb</a>
          </li>
        </ul>
      </nav> -->
    </div>
    <div class="container">
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://specials-images.forbesimg.com/imageserve/5ea0bf898c2caa0006e718e2/960x0.jpg?fit=scale"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            Haifa's nutritional solutions combine quality fertilizers and highly
            efficient application methods.
          </h2>
          <h6 class="subtitle is-6">
            The daily application rate of nutrients through Nutrigation is
            changing during the growing season and is planned to follow plant
            daily demand according to its nutrients uptake pattern. Nutrigation,
            in any irrigation system, requires the injection of soluble
            fertilizer solutions into the irrigation water by a dosing
            devices-injectors. High quality, fully water soluble fertilizers are
            required for the preparation of an appropriate nutrient
            solutions[...].
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://www.foodbusinessnews.net/ext/resources/2019/9/TractorFarm_Lead.jpg?t=1569426080&width=1080"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            Nutrigation™ - The optimal match between nutrition and growth
            requirements
          </h2>
          <h6 class="subtitle is-6">
            The application of nutrients through irrigation systems is referred
            to as Nutrigation™ or Fertigation. The incorporation of soluble
            fertilizers into the irrigation water is facilitated the integration
            and harmonization between the application of water and plant
            nutrients. Using Nutrigation™, an adequate supply of nutrients and
            water can be directed towards the plant root zone to satisfy plant
            demands during the various growth stages[...].
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://img.etimg.com/thumb/msid-76014718,width-300,imgsize-645630,,resizemode-4,quality-100/19.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">CRF Application</h2>
          <h6 class="subtitle is-6">
            A single pre-planting application of controlled release fertilizer
            (CRF) can fill a crop’s nutritional requirements throughout its
            growth season. CRF products are designed to feed plants
            continuously, at maximum nutrient uptake efficiency. controlled
            release fertilizers save labor and application costs, enable
            application independent of the irrigation system, and require no
            sophisticated equipment.[...]
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            HaifaStim™ Nutritional supplements for healthy crops
          </h2>
          <h6 class="subtitle is-6">
            Support high yielding crops: HaifaStim™ products help the plant to
            produce the metabolites and enzymes required to produce maximum
            yield. Counteract stresses: HaifaStim™ products help the plant to
            recover its metabolism, and reactivate biochemical processes and
            enzyme synthesize necessary for growth. Maintain all crops in
            optimal condition: HaifaStim™ products nourish the plant with
            physio-nutritional compounds that help to carry on its productive
            cycle and to avoid stresses. As carriers for weed-killers and
            fungicides: HaifaStim™ products facilitate the activity of the
            agrochemicals and accelerate their transfer in the plan.[...]
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <video id="v1" width="450" controls src="http://techslides.com/demos/sample-videos/small.mp4"></video>
                <!-- <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                  alt="Placeholder image"
                /> -->
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            Haifa Turbo-K™ - Granular NPK Complex Fertilizer based on Potassium
            Nitrate
          </h2>
          <h6 class="subtitle is-6">
            In one uniform granule, your plant is provided with highly valuable
            nutrients combining the Multi-K™ potassium nitrate benefits plus
            essential macro and micro nutrients. Haifa Turbo-K™ complex
            fertilizer is ideal for open field, greenhouses, orchards and turf
            production. Geared fertilizer technology to maximize crop
            revenue.[...]
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://spontaneousorder.in/wp-content/uploads/2020/02/Swatantra.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            Multi-K™ potassium nitrate fertilizers
          </h2>
          <h6 class="subtitle is-6">
            Multi-K™, Haifa’s flagship potassium nitrate brand, is the basis of
            a whole line of plain and enriched potassium nitrate products,
            designed for optimal plant nutrition. Potassium nitrate is a high
            quality source of both potassium and nitrogen, two essential
            macronutrients (primary nutrients) for plants. Since a healthy
            growth requires large amounts of nitrogen and potassium, these
            elements have to be applied to the soil regulary. That's where Haifa
            Multi-K™ potassium nitrate based fertilizers enter the picture.[...]
          </h6>
        </div>
      </div>
      <div class="columns box mt-5" v-on:click="fun" >
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                
               <img src="https://images.outlookindia.com/public/uploads/articles/2020/5/28/Picture_(3).jpg"
                alt="Placeholder image" />
              </figure>
              
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">
            The most common soil application method used mainly for open field
            crops is fertilizer broadcast.
          </h2>
          <h6 class="subtitle is-6">
            It is a method by which the fertilizers are applied on the surface
            across an entire field. Often high capacity spreaders are used to
            spin dry fertilizer on the soil surface. Broadcast fertilization can
            be improved by incorporating fertilizer through plowing or disking.
            The advantages of the soil application methods are that they are
            relatively fast and economical.[...]
          </h6>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer msg="Welcome to Footer" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer,
  },
  data() {
    return {
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6,
          },
        },
      },
      items: [
        {
          title: "Slide 1",
          image: "https://www.bahrainedb.com/app/uploads/2020/08/MattWardle_EDB_Library_Instagram_640px-7156.jpg",
        },
        {
          title: "Slide 2",
          image: "https://egovspace.co.in/wp-content/uploads/2019/01/TaaS.jpg",
        },
        {
          title: "Slide 3",
          image: "https://picsum.photos/id/2/1230/500",
        },
        {
          title: "Slide 4",
          image: "https://picsum.photos/id/3/1230/500",
        },
        {
          title: "Slide 5",
          image: "https://picsum.photos/id/4/1230/500",
        },
        {
          title: "Slide 6",
          image: "https://picsum.photos/id/5/1230/500",
        },
        {
          title: "Slide 7",
          image: "https://picsum.photos/id/6/1230/500",
        },
        {
          title: "Slide 8",
          image: "https://picsum.photos/id/7/1230/500",
        },
      ],
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
     fun: function () {
       document.getElementById("v1");
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.name + '!')
      // // `event` is the native DOM event
      // if (event) {
      //   alert(event.target.tagName)
      // }
    }
  },

};

// new Vue({
//   el:"#app",
//   data:{
//     video: "https://www.w3schools.com/tags/movie.mp4"
//   },
//   methods:{
//     changeVideo(){
//       this.video = "http://techslides.com/demos/sample-videos/small.mp4"
//     }
//   }
// })
</script>
