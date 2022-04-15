<script>
    export default
    {
        name: "DeconnexionBar"
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
            <img src="../assets/logo.jpg" alt="Logo" width="200px" height="50px" class="ms-4">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav nav-links"> 
              <li class="nav-item"> 
              <li class="nav-item">
                  <router-link to="/connexion" class=" mx-2 text-decoration-none btn rounded text-white btndec">
                      DECONNEXION
                  </router-link>
              </li> 
          </ul>
        </div>
    </nav>    
</template>

<style scoped>
    .btndec
    {
        background: #6659FE;
        font-weight: 900;
    }
</style>