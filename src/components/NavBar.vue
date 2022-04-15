<script>
    export default
    {
        name: "NavBar"
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
                <router-link to="inscription/etape-1" class=" mx-2 text-decoration-none btn btn-primary">
                    Inscription
                </router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/connexion" class=" mx-2 text-decoration-none btn btn-outline-primary">
                      Connexion
                  </router-link>
              </li> 
          </ul>
        </div>
    </nav>    
</template>

