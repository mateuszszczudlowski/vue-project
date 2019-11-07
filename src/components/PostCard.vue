<template>

                        <div>

                            <div class="uk-card uk-card-default">

                                <div class="nem-articles-img">
                                         <g-image alt="Cover image" v-if="post.coverImage" :src="post.coverImage" />

                                </div>

                                <div class="uk-card-body nem-card-body">
                                    <h3 class="uk-card-title" v-html="post.title" />

                                    <p v-html="post.description" />

                                <PostTags :post="post" />

                                </div>

                                <g-link class="btn-hover color-7" :to="post.path">read more</g-link>

                            </div>
                        </div>

          


</template>

<script>
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostTags
  },
  props: ['post'],
}
</script>

