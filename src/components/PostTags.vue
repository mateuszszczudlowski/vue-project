<template>
   <div class="nem-post-tags">
   		<g-link class="nem-post-tags-link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
	.nem-post-tags-link {
		    font-size: 14px;
			margin-top: 10px;
			display: inline-flex;
			font-style: italic;
	}
</style>