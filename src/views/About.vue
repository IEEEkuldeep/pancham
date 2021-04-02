<template>
    <section>
        <div class="cl">
            <HelloWorld msg="Welcome to Your Vue.js App" />
          </div> 
        <!-- <b-button
            label="Launch component modal"
            type="is-primary"
            size="is-medium"
            @click="isComponentModalActive = true" />

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            full-screen
            :can-cancel="false">
            <modal-form v-bind="formProps"></modal-form>
        </b-modal> -->


        

            <b-steps type="is-danger">
                <b-step-item  label="Account" icon="user-circle" icon-pack="far">
                   <div class="container">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                          <input class="input" type="email" placeholder="Email">
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <p class="control has-icons-left">
                          <input class="input" type="password" placeholder="Password">
                          <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      




                      <div class="field has-addons">
                        <div class="control is-expanded">
                          <div class="select is-fullwidth">
                            <select name="country">
                              <option value="Argentina">Argentina</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Chile">Chile</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Venezuela">Venezuela</option>
                            </select>
                          </div>
                        </div>
                        <div class="control">
                          <button type="submit" class="button is-primary">Choose</button>
                        </div>
                      </div>
                   </div>
                </b-step-item>
                <b-step-item  label="Quote" icon="id-card" icon-pack="far">
                   <div class="container">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Details</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <p class="control is-expanded has-icons-left">
                              <input class="input" type="text" placeholder="Name">
                              <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                              </span>
                            </p>
                          </div>
                          <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                              <input class="input " type="email" placeholder="Email">
                              <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                              </span>
                              <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label"></div>
                        <div class="field-body">
                          <div class="field is-expanded">
                            <div class="field has-addons">
                              <p class="control">
                                <a class="button is-static">
                                  +91
                                </a>
                              </p>
                              <p class="control is-expanded">
                                <input class="input" type="tel" placeholder="Your phone number">
                              </p>
                            </div>
                            <!-- <p class="help">Do not enter the first zero</p> -->
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Department</label>
                        </div>
                        <div class="field-body">
                          <div class="field is-narrow">
                            <div class="control">
                              <div class="select is-fullwidth">
                                <select>
                                  <option>Business development</option>
                                  <option>Marketing</option>
                                  <option>Sales</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label">
                          <label class="label">Already a member?</label>
                        </div>
                        <div class="field-body">
                          <div class="field is-narrow">
                            <div class="control">
                              <label class="radio">
                                <input type="radio" name="member">
                                Yes
                              </label>
                              <label class="radio">
                                <input type="radio" name="member">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Subject</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <div class="control">
                              <input class="input " type="text" placeholder="e.g. Partnership opportunity">
                            </div>
                            <!-- <p class="help is-danger">
                              This field is required
                            </p> -->
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Question</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <div class="control">
                              <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="field is-horizontal">
                        <div class="field-label">
                          <!-- Left empty for spacing -->
                        </div>
                      
                      </div>
                   </div>
                </b-step-item>
                <b-step-item type="is-success"  label="Success" icon="check-square" icon-pack="far"> 
                    <div class='container has-text-centered'>
                        <div class='columns is-mobile is-centered'>
                          <div class='column is-6'>
                            <div class='notification'>
                              <h1 class='title'>
                                Geek for Geeks
                                <button class="delete"></button>
                              </h1>
                      
                              <p class='is-family-monospace'>
                                'GeeksforGeeks' is a computer science 
                                portal. It was created with a goal in 
                                mind to provide well written, well 
                                thought and well explained solutions 
                                for selected questions. The core team
                                of five super geeks constituting of 
                                technology lovers and computer science 
                                enthusiasts have been constantly working
                                in this direction.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="notification is-danger is-light">
                            <button class="delete"></button>
                            Primar lorem ipsum dolor sit amet, consectetur
                            adipiscing elit lorem ipsum dolor. tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
                          </div>
                          
                      </div>
                     
                </b-step-item>
            </b-steps>
        


        <!-- <div id="app">
<div>
        <form-wizard @on-complete="onComplete" 
                      shape="tab"
                      color="#9b59b6">
            <tab-content title="Personal details"
                         icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>
 </div>
</div> -->
<footer style="margin-top: 30px;">
    <Footer msg="Welcome to Footer" />
</footer>
    </section>
</template>

<script lang="js">
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
    export default  {
      name: 'mechanical',
      components: {
    HelloWorld,
    Footer
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
  /* .mechanical {
  
    } */
  </style>