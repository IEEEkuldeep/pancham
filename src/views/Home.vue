<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-carousel
      :autoplay="100"
      with-carousel-list
      :indicator="false"
      :overlay="gallery"
      @click="switchGallery(false)"
    >
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <figure class="image">
          <img :src="item.image" />
        </figure>
      </b-carousel-item>
      <!-- <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      /> -->
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
        <div class="column">
          <h2 class="subtitle is-2">
            Calibration
          </h2>
          <div class="content is-large has-text-center">
            Pancham calibration is the group of pancham industries leader
            providing comprehensive calibration service solutions since 2021
            Pancham calibration services a broad range of applications and
            industry sectors globally with instrument calibration, repair,
            validation, and other services.
          </div>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column">
          <h2 class="subtitle is-2">
            Laboratory Calibration
          </h2>

          <h6 class="subtitle is-6">
            <div class="content is-medium has-text-left">
              Pancham calibration providing reliable localized support.
              Environmentally controlled facilities to ensure high quality and
              accurate calibrations and measurements support. Certified
              metrologists staffing laboratories in North INDIA,Middle East
              globally providing reliable localized support Expedited
              calibration services available Pickup and delivery services
              available
            </div>
          </h6>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/instrument-calibration-services.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/single-source-calibration-solutions-management.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="subtitle is-2">Single Source Calibration Solutions</h2>
          <h6 class="subtitle is-6">
            <div class="content is-medium has-text-left">
              Pancham calibration can manage all of your calibration needs. In
              the instances where we do not have internal capability, let us
              manage your calibration needs and be your Single Source
              Calibration Solutions provider. We have team of specialists
              working directly with OEMs and other specialty providers to meet
              your needs. Benefits include: Working with one provider, not many
              Let Pancham calibration research and source the appropriate
              provider for your specialized needs Minimize administration costs
              while allowing Pancham calibration to vett and maintain external
              vendors, less vendors to maintain Calibration results and
              documentation are reviewed and approved by Pancham calibration
              before releasing to customer
            </div>
          </h6>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column">
          <h2 class="subtitle is-2">
            Embedded Calibration Solutions
          </h2>
          <h6 class="subtitle is-6">
            <div class="content is-medium has-text-left">
              <b
                >For those customer’s who’s needs are not met by our laboratory
                or onsite services, embedded solutions may be the right move.</b
              >
              By embedding our staff into your facility you gain a world of
              benefits. Solution customized to meet your needs Flexibility, can
              be modified as your needs change Embedded personnel are pancham
              group of employees and have access and support of the Global
              Pancham calibration team. Metrology expertise, quality and
              technical resources, operational support, customer service, etc.
              Embedded solutions reduce logistical costs, reduce risk of damage
              during transit to provider, reduce downtime, increase equipment
              utilization.
            </div>
          </h6>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="../assets/embedded-calibration-solutions.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column">
          <div class="">
            <div class="card-image">
              <div class="column">
                <h2 class="subtitle is-4">
                  Calibration Service Levels
                </h2>
                <h6 class="subtitle is-6">
                  <div class="content is-medium has-text-center">
                    To meet the quality and technical requirements of your
                    company and industry standards, Pancham calibration offers
                    multiple calibration service levels.
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column">
          <table class="table">
            <thead>
              <tr class="has-text-left">
                <th>Type of Service</th>
                <th>Traceable</th>
                <th>Traceable with Data</th>
                <th>Accredited(ISO:IEC:17025:2017,Z540.3)</th>
              </tr>
            </thead>

            <tbody>
              <tr class="has-text-left">
                <th>
                  Calibrated to manufacturers specifications traceable to SI
                  Units
                </th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>ISO 9000 Compliant</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>
                  Logo from Accreditation body, Expanded Measurement Uncertainty
                </th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>
                  Calibration certificates, data, maintained on secure web based
                  tool (CDM)
                </th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>
                  Detailed calibration certificates and calibration stickers
                </th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>Instrument adjustment (if found out of tolerance)</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>ANSI/NCSL Z540-1 compliant</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>Calibration Data</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>IATF:16949:2016</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>ISO:9001:2015</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr class="has-text-left">
                <th>ISO:14001</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="columns box mt-5">
        <div class="column">
          <div class="">
            <div class="card-image">
              <div class="column">
                <h2 class="subtitle is-4">
                  Search Our Equipment Database
                </h2>
                <h6 class="subtitle is-6">
                  <div class="content is-medium">
                    We support calibration, repair, global solutions, and
                    equipment leasing & sales for a variety of equipment types,
                    manufacturers and industries. Inquire on specific equipment
                    or if the model number you are after is not available,
                    please contact us and we guide you through servicing your
                    specific needs.
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
      <div class="columns box mt-5" v-on:click="fun">
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest ">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/Validation-black.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Validation
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/Calibration-black.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Calibration
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/temp.-RH.png"
                  alt="Placeholder image"
                />

                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Temperature and RH Mapping
                </h6>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="columns box mt-5" v-on:click="fun">
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest ">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/HVAC-black.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  HVAC and Clean Room Validation
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/SQT-black.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  ISO 9001 Validation
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/cav-1.png"
                  alt="Placeholder image"
                />

                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Process Validation
                </h6>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="columns box mt-5" v-on:click="fun">
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest ">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/cav-1.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Pressure Guage Validation
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2018/03/HVAC-black.png"
                  alt="Placeholder image"
                />
                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Thermal Calibration & Testing
                </h6>
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card1">
            <div class="card-image">
              <figure class="imagetest">
                <img
                  src="https://oorjatechnical.in/wp-content/uploads/2019/11/17169166.jpg"
                  alt="Placeholder image"
                />

                <h6 class="subtitle is-4 mt-4 pt-4 pb-4">
                  Electrical Calibration & Testing
                </h6>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
          <h2 class="subtitle is-4">
            Meet Our Customer’s
          </h2>
        </div>
      <div class="columns mt-4 mb-3">
        
        <swiper
          class="swiper"
          :options="swiperOption"
          
        >
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/BharatBenz.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/bridgestone.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/Eicher-logo.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/force.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/hmmotor.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/hyunadai.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/jeep.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/peguot.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/mahindra.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/man.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/Premier.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/SK STEEL.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/suzuki.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="box">
              <div class="level-item has-text-centered">
                <div>
                  <img
                    src="../assets/clientlogo/tata.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
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
      swiperOption: {
        
        slidesPerView: 3,
        spaceBetween: 30,
        
        loop: true,
        autoplay: {
                        delay: 2000,
                        // disableOnInteraction: true
                    },
        speed: 1000,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      gallery: false,
      arrow: true,
      // pauseHover: false,
      // pauseInfo: false,
      interval: 100,
      // "indicator-spaced"	:"5.5rem",
      "indicator-style": "is-dots",
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 3,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 3,
          },
        },
      },
      items: [
        {
          title: "Slide 1",
          image: require("@/assets/webslider/mod002.jpg"),
        },
        {
          title: "Slide 2",
          image: "https://egovspace.co.in/wp-content/uploads/2019/01/TaaS.jpg",
        },
        {
          title: "Slide 3",
          image: "https://www.bahrainedb.com/app/uploads/2020/08/MattWardle_EDB_Library_Instagram_640px-7156.jpg",
        },
        {
          title: "Slide 4",
          image:require("@/assets/webslider/mod003.jpg"),
        },
        {
          title: "Slide 5",
          image: require("@/assets/webslider/mod1.jpg"),
        },
        {
          title: "Slide 6",
          image: require("@/assets/webslider/mod0.jpg"),
        },
        {
          title: "Slide 7",
          image: require("@/assets/webslider/mod005.jpg"),
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
    switchGalleryTest(value) {
      this.gallerypic = value;
      if (value) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
    // pauseTimer() {
    //   this.isPause = true;
    //   if (this.timer) {
    //     clearInterval(this.timer);
    //     this.timer = null;
    //   }
    // },
    fun: function() {
      document.getElementById("v1");
      // `this` inside methods points to the Vue instance
      // alert('Hello ' + this.name + '!')
      // // `event` is the native DOM event
      // if (event) {
      //   alert(event.target.tagName)
      // }
    },
  },
  mounted(){
  this.swiper.slideTo(3, 100, false);
}
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

<style scoped>
.fa-check.fa-w-16 {
  color: green;
}
/* img {
    height: 4.5rem;
} */
.imagetest img {
  height: 6.5rem;
  object-fit: cover;
}
.card1 {
  border: 2px groove;
  border-radius: 10px;
  border-color: darkred;
}
h6.subtitle.is-4.pt-4.pb-4 {
  background-color: darkred;
  color: whitesmoke;
}
@media only screen and (max-width: 1500px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    border: 1px solid #ccc;
  }
  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 200px;
    margin-left: 150px;
  }
  td:before {
    position: absolute;
    top: 12px;
    left: 6px;
    width: 200px;
    padding-right: 40px;
    white-space: nowrap;
    margin-left: -150px;
  }
  td:nth-of-type(1):before {
    content: "Option";
  }
  td:nth-of-type(2):before {
    content: "Description";
  }
  td:nth-of-type(3):before {
    content: "Type";
  }
  td:nth-of-type(4):before {
    content: "Default";
  }
}
table {
  overflow-x: auto;     
}
</style>
