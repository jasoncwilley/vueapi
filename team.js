const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("http://nflarrest.com/api/v1/team/")
      .then(response => {this.results = response.data})
    }
  });
