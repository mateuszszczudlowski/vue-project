<template>
  <Layout>

      <div id="particles-container">

            <div class="nem-main-header">

                        <p class="uk-text-center">Make something special</p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="480.3" height="495.2" class="nem-special-svg"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-890.72" y1="811.726" x2="-633.223" y2="668.403" gradientTransform="matrix(.4452 -.5719 .5701 .3859 37.265 -325.792)"><stop offset="0" stop-color="#a6c0fe"/><stop offset=".596" stop-color="#a6c0fe" stop-opacity=".4"/><stop offset="1" stop-color="#a6c0fe" stop-opacity="0"/></linearGradient><path d="M239.8 396.1l-67.4 99.1-119.9-.2L0 395.6l67.3-99.2 119.9.2 52.6 99.5z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-767.29" y1="826.896" x2="-421.493" y2="634.423" gradientTransform="matrix(.4452 -.5719 .5701 .3859 37.265 -325.792)"><stop offset="0" stop-color="#a6c0fe"/><stop offset=".596" stop-color="#a6c0fe" stop-opacity=".4"/><stop offset="1" stop-color="#a6c0fe" stop-opacity="0"/></linearGradient><path d="M350.2 296.7l-90.5 133.1-161-.3L28.1 296l90.5-133.1 161 .3 70.6 133.5z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-591.415" y1="838.287" x2="-160.027" y2="598.175" gradientTransform="matrix(.4452 -.5719 .5701 .3859 37.265 -325.792)"><stop offset="0" stop-color="#a6c0fe"/><stop offset=".43" stop-color="#a6c0fe" stop-opacity=".4"/><stop offset="1" stop-color="#a6c0fe" stop-opacity="0"/></linearGradient><path d="M480.3 167L367.4 333.1l-200.9-.4-88-166.5L191.4 0l200.9.4 88 166.6z" fill="url(#c)"/></svg>


            </div>

<ClientOnly>
     <Particles />
</ClientOnly>
       
      </div>
    
    <main>

     <section class="uk-section">

            <div class="uk-container uk-margin-medium uk-container-expand-left uk-flex" uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">

                <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-text-justify uk-grid nem-wb nem-shadow-box uk-margin-remove-left">


                    <div class="uk-first-column uk-padding">

                        <h2 class="uk-heading-bullet">CSS</h2>
                        <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like for example HTML. CSS is a cornerstone technology of the World Wide Web, alongside JavaScript
                            and HTML.
                        </p>
                        <hr class="uk-divider-icon">
                        <p>

                            On our website you can find many different buttons, links, hover effects, animation, code snippets and tips how to create our own unique effects. Why we do this? Because we love CSS.

                        </p>

                    </div>
                    <g-image src="../assets/svg/css-logo.svg" width="500" class="nem-img" alt="CSS definition"/>

                </div>

            </div>

      </section>

      <section class="uk-section">

            <div class="uk-container uk-margin-medium uk-container-expand-right uk-flex" uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">

                <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-text-justify uk-grid nem-flex-dire nem-wb nem-shadow-box">


                    <g-image src="../assets/svg/html-logo.svg" width="500" class="nem-img uk-padding-remove-left" alt="HTML definition" />


                    <div class="uk-padding">

                        <h2 class="uk-heading-bullet">HTML</h2>
                        <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as JavaScript (scripting language) and Cascading Style Sheets (CSS).
                            Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.

                        </p>

                        <hr class="uk-divider-icon">

                        <p>
                            Here at Frontend War we help you build web forms, basic column layouts and typical but semantically correct HTML structures.
                        </p>


                    </div>

                </div>

            </div>

      </section>

      <section class="uk-section">

            <div class="uk-container uk-flex" uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">

                <div class="uk-width uk-text-justify">

                    <h2 class="uk-heading-bullet uk-margin-medium-bottom">Last articles</h2>

                    <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-margin-large-bottom uk-grid" uk-grid="">

                          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
           

                    </div>


                </div>


            </div>
       
      </section>


    </main>
 
  </Layout>
</template>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        description
        coverImage (width: 770, height: 380, blur: 0)
        tags {
          id
          title
          path
        }
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import Particles from '~/components/Particles.vue'

export default {
  components: {
    PostCard,
    Particles
  },
     metaInfo () {
        return {
          title: 'Frontend War - free css, html tips and tricks for web development',
        }
      }
}

</script>
