// Import main css
import '~/assets/css/uikit.min.css'
import '~/assets/scss/frondendwars.scss'
import '~/assets/js/particles.js'
import '~/assets/js/uikit.min.js'
import '~/assets/js/uikit-icons.min.js'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import Uikit from 'uikit'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {

    Vue.component('Layout', DefaultLayout)

    head.htmlAttrs = { lang: 'pl' }

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
    });

}