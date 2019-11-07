<template>

  <div class="uk-position-relative">

    <h1 class="uk-hidden">HTML, CSS free tips & tricks</h1>

    
    <header class="uk-position-relative">
      
      
              <div class="uk-position-top">

              <nav class="uk-navbar-container uk-navbar-transparent cd-auto-hide-header" uk-navbar>

                    <h2 class="uk-hidden">Navigation</h2>

              <div class="uk-navbar-left">

                  <div class="uk-navbar-item">
                  <g-link class="nem-logo" to="/">
                  
                            Frontend war logo
                  
                            <svg xmlns="http://www.w3.org/2000/svg" height="69.548" width="61.386"><circle id="circle4" r="8.077" cy="13.518" cx="14.199" class="st0" fill="#fff"/><circle id="circle6" r="8.757" cy="8.757" cx="24.316" class="st0" fill="#fff"/><circle id="circle8" r="7.737" cy="9.777" cx="36.049" class="st0" fill="#fff"/><circle id="circle10" r="8.757" cy="12.838" cx="49.228" class="st0" fill="#fff"/><circle id="circle12" r="7.397" cy="20.915" cx="53.989" class="st0" fill="#fff"/><circle id="circle14" r="10.118" cy="20.915" cx="38.515" class="st0" fill="#fff"/><circle id="circle16" r="9.777" cy="20.575" cx="21.936" class="st0" fill="#fff"/><circle id="circle18" r="8.757" cy="22.276" cx="8.757" class="st0" fill="#fff"/>
                            <path id="path20" d="M33.584 31.373c-.936.34-2.041.085-2.551-.765-.34.51-1.02.85-1.7.85-.426 0-.85-.17-1.19-.34v14.114h6.12V30.948c-.17.17-.34.255-.68.425zm-2.381 27.292c-2.976 0-5.697-.765-8.247-1.956-1.275 2.466-2.72 4.762-4.336 7.057 2.805 3.571 7.227 5.782 12.158 5.782 5.271 0 10.032-2.636 12.838-6.632-1.445-2.04-2.72-4.251-3.826-6.462a17.892 17.892 0 0 1-8.587 2.21z" class="st0" fill="#fff"/><path id="path22" d="M36.984 50.418c-1.36-3.656-2.295-7.567-2.805-11.563-1.19-.255-2.296-.425-3.571-.425-.765 0-1.616.085-2.38.255-.426 4.25-1.446 8.247-2.892 12.073 1.7.935 3.571 1.445 5.612 1.445 2.125-.17 4.251-.68 6.036-1.785z" class="st0" fill="#fff"/><path id="path24" d="M36.05 38.175c.254 1.19.594 2.21.85 3.316 3.485 1.19 5.78 3.23 5.78 5.696 0 3.656-5.185 6.547-11.477 6.547-6.292 0-11.478-2.891-11.478-6.547 0-2.466 2.38-4.676 5.952-5.696.255-1.106.595-2.211.85-3.316-6.887 1.19-11.903 4.76-11.903 9.097 0 5.186 7.397 9.437 16.579 9.437s16.58-4.25 16.58-9.437c0-4.251-4.932-7.907-11.734-9.097z" class="st0" fill="#fff"/><path id="path26" d="M17.855 10.543v4.506c0 .255.255.51.51.51H24.4c.255 0 .51.255.51.51v1.786c0 .255-.255.51-.51.51h-6.036c-.255 0-.51.255-.51.51v6.546c0 .256-.256.51-.51.51h-2.466c-.255 0-.51-.254-.51-.51V7.481c0-.17.17-.254.255-.254h11.053c.255 0 .51.255.51.51v1.785c0 .255-.255.51-.51.51H18.45c-.34 0-.595.17-.595.51z" class="st1" fill="#f68084"/><path id="path28" d="M51.268 7.567l-5.696 18.195c0 .085-.17.17-.255.17h-2.721c-.085 0-.255-.085-.255-.17L38.26 13.178c-.17-.255-.255-.68-.255-1.19-.085.255-.085.425-.17.595-.085.255-.085.34-.17.51l-4.081 12.584c0 .085-.17.17-.256.17h-2.72c-.085 0-.255-.085-.255-.17L24.74 7.482c-.085-.17.085-.255.255-.255h2.551c.255 0 .595.085.765.255.17.17.34.34.425.595l3.231 11.138.255.85c.085.255.17.68.255 1.02.085-.34.17-.765.255-1.02.085-.255.17-.595.255-.85L36.56 7.992c.085-.255.255-.34.425-.51.255-.17.426-.255.766-.255h1.02c.255 0 .595.085.765.255.255.17.34.34.425.595l3.656 11.138c.17.51.34 1.19.51 1.785.17-.68.255-1.275.34-1.785l3.146-11.138c.085-.255.255-.425.34-.595.17-.17.425-.255.765-.255h2.381c.085 0 .17.17.17.34z" class="st1" fill="#f68084"/></svg>
                  
                  </g-link>

                  </div>
  

                    <ul class="uk-navbar-nav">

                                      <li><g-link class="nav__link" to="/category/css">CSS</g-link></li>
                                      <li><g-link class="nav__link" to="/category/html">HTML</g-link></li> 
                                      
                    </ul>

              </div>

       </nav>
            </div>

    </header>

    <slot/>

    <footer class="uk-text-center">
        <p>© COPYRIGHTS {{ new Date().getFullYear() }} NEMIS</p>

    </footer>

    <CookieMessage position="bottom" />

  </div>

</template>

<script>

  import CookieMessage from '~/components/CookieMessage.vue'

  export default {
    components: {
      CookieMessage
    }

    
  }

</script>

