<template>
    <div id="blog-home">
        <div v-for="(post,index) in posts" :key="post.uid + '_' + index">
            <nuxt-link :to="'/blog/' + post.uid">
                <article>
                    <h2>{{ post.data.title[0].text }}</h2>
                    <figure>
                        <img v-if="post.featured_image" :src="post.featured_image" alt="">
                        <img v-else src="http://via.placeholder.com/250x250" alt="">
                    </figure>
                    <p>{{ post.summary }}</p>
                </article>
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
    article {
        width: 400px;
    }
    img {
        width: 100%;
    }
</style>

<script>
  import Prismic from 'prismic-javascript';

  const apiEndpoint = "https://tech-blog.cdn.prismic.io/api/v2";

  export default {
    data () {
      return {
        posts: []
      }
    },
    asyncData ({ params }) {
      return Prismic.getApi(apiEndpoint).then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'tech-blog'));
      }).then(response => {
        return { posts: response.results }
      }, function(err) {
        console.log("Something went wrong: ", err);
      });
    }
  }
</script>