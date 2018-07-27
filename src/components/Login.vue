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
import {HTTP} from "../axios";

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
        let body = {
          grant_type: "password",
          email: "tuanhnt1712@gmail.com",
          password: "12345678"
        }
        HTTP.post('http://localhost:3000/api/auth/sign_in', body )
          .then((request) => {
            this.loginSuccessful(request); 
            alert("ok")}
            )
          .catch(() => this.loginFailed())
      },
      loginSuccessful (req) {
        if (!req.data.token) {
          this.loginFailed()
          return
        }

        localStorage.token = req.data.token
        this.error = false

        this.$router.replace(this.$route.query.redirect || '/authors')
      },

      loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
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