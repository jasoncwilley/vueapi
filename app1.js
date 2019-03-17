
const apiUrl = "http://nflarrest.com/api/v1/player/topCrimes/";

const vm = new Vue({
    el: '#app',
    data() {
        return {
            name: null,
            results: []
        };
    },
    watch: {
        name(after, before) {
            this.fetch();
        }
    },

    methods: {
        fetch(){
            axios.get("http://nflarrest.com/api/v1/player/topCrimes/"+ this.name)
           .then(response => this.results = response.data)

        }
    }
});