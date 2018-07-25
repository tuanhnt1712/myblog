<template>
	<form>
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1">
	    <label class="form-check-label" for="exampleCheck1">Check me out</label>
	  </div>
	  <button type="submit" class="btn btn-primary" @click="fetchData">Submit</button>
	</form>
</template>
<script>
import axios from "axios";

	export default {
		data() {
      return {
				email: '',
				password: ''
			}
		},
		methods: {
      onCouponApplied() {
          alert("ahihi");
      },
      prev() {
          if(this.model.prev_page_url) {
              this.params.page--
              this.fetchData()
          }
      },
      sort(column) {
          if(column === this.params.column) {
              if(this.params.direction === 'desc') {
                  this.params.direction = 'asc'
              } else {
                  this.params.direction = 'desc'
              }
          } else {
              this.params.column = column
              this.params.direction = 'asc'
          }
          this.fetchData()
      },
      fetchData() {
        debugger
        let body = {
          grant_type: "password",
          email: "tuanhnt1712@gmail.com",
          password: "12345678"
        }
        axios.post('localhost:3000/api/auth/sign_in', body)
                    .then(this.onSuccess)
                    .catch(error => this.errors.record(error.response.data));
      },
      buildURL() {
          var p = this.params
          return `${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`
      }
    },
	  name: 'Login',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  }
}
</script>