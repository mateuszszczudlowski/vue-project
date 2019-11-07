<template>
  <Layout>

        <div id="particles-container-second">
            <div class="nem-main-header">

                      <p class="uk-text-center"> {{ $page.post.category.title }} tips & tricks</p>

                      <div id="particles-js"></div>

              </div>
              <Particles />
        </div>

    <main>

      <section class="uk-section nem-blog">
        <h2 class="uk-hidden">Articles</h2>

        <div
          class="uk-container uk-margin-medium uk-container-xsmall uk-container-expand uk-flex"
          uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true">


                    <div uk-grid>

                     <aside class="uk-width-1-1 uk-width-1-4@s uk-width-1-4@m uk-width-1-5@l uk-width-1-5@xl">
                              <h2 class="uk-heading-bullet">{{ $page.post.category.title }}</h2>
                              <p>Our articles can be found on Codepen.
                              </p>

                              <hr class="uk-divider-icon">

                              <h4 class="">LAST ARTICLES</h4>

                               <ArticleList />
                               

                      </aside>

                      <div class="uk-width-1-1 uk-width-3-4@s uk-width-3-4@m uk-width-4-5@l uk-width-4-5@xl nem-pa-mar" uk-grid>

                                      <div class="uk-width-4-5@m uk-width-4-5@l uk-width-4-5@xl">
      
                                          <article class="uk-article">

                                                <div uk-grid>
                                                    <div class="uk-width-1-1 uk-width-1-1@s uk-width-1-1@m uk-width-3-5@l uk-width-3-5@xl uk-flex">

                                                    <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage" />
                                                    </div>

                                                    <div class="uk-width-1-1 uk-width-1-1@s uk-width-1-1@m uk-width-2-5@l uk-width-2-5@xl">

                                                        <h1 class="uk-article-title uk-heading-bullet">   {{ $page.post.title }}</h1>

                                                        <p class="uk-article-meta">    <PostMeta :post="$page.post" />
                                                        </p>

                                                        <p class="nem-article-short">{{ $page.post.description }}</p>

                                                    </div>

                                                </div>

                                                <div class="nem-article">


                                                    <hr class="uk-divider-icon">
                                                      <div class="post content-box">
                                      

                                                                  <div class="post__content" v-html="$page.post.content" />

                                                                      <div class="post__footer">
                                                                          <PostTags :post="$page.post" />
                                                                      </div>


                                                      </div>

                                                    </div>
                                                              
                                                      
                                          </article>
       
                                        </div>


                                      <div class="uk-width-1-5@m uk-width-1-5@l uk-width-1-5@xl"></div>

                          </div>

                         

                      
                      
                    </div>


         </div>

      </section>  

    </main>




  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    category {
      id
      title
      path
    }
    description
    content
    coverImage (width: 860, blur: 10)
  }
}
</page-query>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import ArticleList from "~/components/ArticleList.vue"
import Particles from '~/components/Particles.vue'

export default {
  props: ['post'],
  components: {
    PostMeta,
    PostTags,
    ArticleList,
    Particles
  },
  metaInfo () {
    return {
      title: 'Frontend War - ' + this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>