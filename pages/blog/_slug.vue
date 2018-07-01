<template>
    <div id="blog-post">
        <h1>{{ title }}</h1>
        <div>{{ contents }}</div>
    </div>
</template>

<script>
  import Prismic from 'prismic-javascript';

  const apiEndpoint = "https://tech-blog.cdn.prismic.io/api/v2";

  export default {
    data () {
      return {
        title: '',
        contents:'',
      }
    },
    asyncData ({ params }) {
      return Prismic.getApi(apiEndpoint).then(api => {
        console.log(params.slug);
        return api.getByUID('tech-blog', params.slug);
      }).then(response => {
        return {
          title: response.data.title[0].text,
          contents: response.data.contents[0].text,
        }
      }, function(err) {
        console.log("Something went wrong: ", err);
      });
    },
  }
</script>