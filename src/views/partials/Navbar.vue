<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Tu Anh Nguyen</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="nav-item logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Contact_energy_logo13.png" alt="FCMS logo">
    </a>
    <a class="navbar-brand" href="#">InstagramVue</a>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/register" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Friend</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Account</router-link>
        </li>
      </ul>
    </div>
  </nav> -->
</template>
<style>
    nav.custom-color {
        background: #f9f9f9;
    }
    .logo img {
        width: 50px;
    }
</style>
<script>

export default {

    data() {
        return {
            auth: "Tu Anh"
        }
    },

    methods: {
        logout() {
            auth.logout()
        }
    }
}

</script>
