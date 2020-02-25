
const apiUrl = "http://nflarrest.com/api/v1/team/search/?term=";

const vm = new Vue({
    el: '#app',
    data() {
        return {
            team: null,
            team_name: null,
            teamresults: []
        };
    },


    watch: {
        team(after, before) {
            this.loadData();
        }
    },

  methods: {
        loadData: function (){
          var vm = this;
          axios.get("http://nflarrest.com/api/v1/team/search/?term=" + this.team)
           .then( function (response) {
            vm.team = response.data[0].team_code;
            vm.team_name = response.data[0].team_full_name;
          console.log(vm.team)
          console.log(vm.team_name)
        })
            axios.get("http://nflarrest.com/api/v1/team/arrests/" + vm.team)
            .then(response => this.teamresults = response.data)
        }

  }
});
