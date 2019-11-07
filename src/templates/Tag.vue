<template>
  <Layout>
       <div id="particles-container-second">
            <div class="nem-main-header">

                        <p class="uk-text-center">{{ $page.tag.title }} tips & tricks</p>

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

            <aside class="uk-width-1-1 uk-width-1-4@s uk-width-1-4@m uk-width-1-5@l uk-width-1-5@xl uk-first-column">

              <h2 class="uk-heading-bullet">{{ $page.tag.title }}</h2>

              <p>Our articles can be found on Codepen.</p>

              <hr class="uk-divider-icon" />

              <h4 class>LAST ARTICLES</h4>

                
                <ArticleList />
                


            </aside>

            <div
              class="uk-width-1-1 uk-width-3-4@s uk-width-3-4@m uk-width-4-5@l uk-width-4-5@xl nem-pa-mar"
              uk-grid
            >
              <div class="uk-width-4-5@m uk-width-4-5@l uk-width-4-5@xl">
                <section class="uk-section uk-padding-remove-top">
                  <div
                    class="uk-container uk-container-large uk-flex"
                    uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true"
                  >
                    <div class="uk-width uk-text-justify">
                      <div
                        class="uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-2@m uk-margin-large-bottom"
                        uk-grid="masonry: true"
                      >
                        <PostCard
                          v-for="edge in $page.tag.belongsTo.edges"
                          :key="edge.node.id"
                          :post="edge.node"
                        />
                      </div>

                    <Pager class="nem-pagination" :info="$page.tag.belongsTo.pageInfo"/>

                    </div>
                  </div>
                </section>
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

query Tag ($id: String!, $page: Int) {
  tag (id: $id) { 
    title
    belongsTo(perPage: 4, page: $page) @paginate {     
      totalCount
    pageInfo {
      totalPages
      currentPage
    }
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            coverImage (width: 860, blur: 0)
            content
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
          }
        }
      }
    }
  }
}

</page-query>

<script>
import {Pager} from 'gridsome'
import PostCard from "~/components/PostCard.vue"
import ArticleList from "~/components/ArticleList.vue"
import Particles from '~/components/Particles.vue'

export default {
  props: ['post'],
  components: {
    PostCard,
    ArticleList,
    Particles,
    Pager
  },
  metaInfo () {
    return {
      title: 'Frontend War - ' + this.$page.tag.title,
    }
  }
}
</script>

