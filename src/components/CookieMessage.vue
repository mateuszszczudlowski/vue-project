<template>

  <transition name="cookie-hide-it">
        <div class="nem-cookie-info" :class="containerPosition" v-if="isOpen">

                    <svg class="nem-cookie-m" xmlns="http://www.w3.org/2000/svg" 
                    width="101.707" height="62.826" viewBox="0 0 26.91 16.623">
                          <path d="M6.349 7s-.905-1.027-1.208-.68c-.12.138.338.431.338.431s-1.502-.843-1.88-.335c-.31.42.343.724.178 1.218-.275.826-2.293.945-2.293.945s1.18.418 1.152.66c-.092.804-1.93-.225-2.41.43-.209.286-.03.744.145 1.052.254.444 1.032.476 1.205.957.309.86-.762 1.784-.578 2.678.173.841 1.493 2.105 1.493 2.105h23.514s.805-.443.771-.813c-.048-.534-1.023-.498-1.3-.957-.503-.83-.779-1.965-.434-2.87.14-.37.923-.37.915-.765-.01-.545-1.182-.472-1.3-1.005-.161-.717 1.19-1.248 1.011-1.96-.17-.678-1.758-.498-1.735-1.196.01-.28.767-.155.723-.43-.12-.744-1.544-.85-2.216-.503-.17.087-.217.526-.217.526l-.265.502-.53.718-.675.514-.783.43-.686.216-.783.107-.88-.083-1-.287-.722-.383-.892-.801-.626-.98-.325-1.03-.181.635-.458.896-.694.74-.477.381-.67.333-.982.285-1.248.046-1.152-.312-1.175-.672z" fill="#287bad" stroke="#287bad" stroke-width=".265"/>
                          <ellipse cx="18.43" cy="4.819" rx="4.337" ry="4.305" opacity=".98" fill="#fff" 
                          fill-rule="evenodd"/><ellipse cx="9.853" cy="4.437" rx="4.337" ry="4.305" 
                          fill="#fff" fill-rule="evenodd"/><ellipse class="nem-right-pupil" cx="16.632"
                          cy="3.909" rx="1.253" ry="1.244" fill-rule="evenodd" stroke="#000" stroke-width=".794"/>
                          <ellipse class="nem-left-pupil" cx="11.687" cy="5.764" rx="1.253" 
                          ry="1.244" fill-rule="evenodd" stroke="#000" stroke-width=".794"/>
                          <path d="M6.384 16.49h13.78s.604-2.144 1.35-2.918c.461-.479 1.421-.35 1.782-.908a1.12 1.12 0 0 0 .048-1.053c-.104-.205-.352-.434-.578-.382-.217.05-.298.355-.337.574-.031.175.199.38.096.526-.715 1.026-2.479.922-3.71.67-.397-.082-.695-.921-1.012-.67-.39.308.892 1.047.53 1.387-.778.731-2.116-1.973-2.939-1.292-.317.263.625.957.29 1.196-.54.385-1.023-1.064-1.687-1.052-.486.009-.963.867-1.446.813-.327-.036-.113-.643-.433-.717-.535-.125-1.232 1.023-1.542.574-.22-.317.964-.529.77-.861-.4-.691-1.905 1.135-2.36.478-.12-.171.474-.369.337-.526-.516-.595-1.553 1.45-2.168.956-.307-.245.57-.932.24-1.148-.49-.32-.858.967-1.445 1.005-.867.056-1.807-.494-2.313-1.196-.123-.17.057-.477-.096-.622-.222-.21-.688-.42-.964-.239-.258.17-.256.623-.145.909.453 1.164 2.18 1.404 2.94 2.344.5.617 1.012 2.152 1.012 2.152z" 
                          stroke="#000" stroke-width=".265"/>
                    </svg>

              <slot name="message">
                  <p>{{ message }}</p>
              </slot>

          <div class="nem-cookie-btns">
              <div class="cookie__button accept" @click="accept">
              {{ buttonTextAccept }}
              </div>
              <div class="cookie__button deny" @click="deny">
              {{ buttonTextDeny }}
              </div> 
          </div>
              

      </div>
  </transition>


</template>

<script>
  export default {
    name: 'CookieMessage',
    props: {
      buttonTextAccept: {
        type: String,
        default: 'Accept'
      },
      buttonTextDeny: {
        type: String,
        default: 'Deny'
      },
      message: {
        type: String,
        default: 'We use cookies to personalise content and ads, to provide social \
        media features and to analyse our traffic. We also share information about \
        your use of our site with our social media.'
      },
      position: {
        type: String,
        default: 'top'
      },
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      containerPosition() {
        return `cookie--${this.position}`;
      }
    },
    created () {
      if (!this.getGDPR() === true) {
        this.isOpen = true;
      }
    },
    methods: {

      getGDPR() {
        return localStorage.getItem('GDPR:accepted', true);
      },
      accept() {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', true);
      },
      deny() {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', false);
      }

    }
  }
</script>