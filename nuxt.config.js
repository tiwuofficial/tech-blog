const Prismic = require('prismic-javascript');

const apiEndpoint = "https://tech-blog.cdn.prismic.io/api/v2";

module.exports = {
  generate: {
    routes: function () {
      return Prismic.getApi(apiEndpoint).then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'tech-blog'));
      }).then(response => {
        return response.results.map(post => {
          return '/blog/' + post.uid;
        });
      }, function (err) {
        console.log("Something went wrong: ", err);
      });
    }
  }
}