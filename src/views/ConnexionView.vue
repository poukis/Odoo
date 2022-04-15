<script>
    export default
    {
        name: 'ConnexionView',
        // Méthode pour gérer le changement de visibilité
        methods:
        {
            switchVisibility()
            {
                const passwordField = document.getElementById("password");

                if ( passwordField.getAttribute("type") === "password" )
                    passwordField.setAttribute("type", "text");
                else
                    passwordField.setAttribute("type", "password");
            }
        }
    }
</script>

<template>
    <div class="connexion-bloc  w-100 pt-4">
            <div class="container connexion-box rounded col-sm-7 mx-auto bg-white">
                <img src="../assets/logo.jpg" alt="Logo" width="300px" height="100px" class="rounded mx-auto d-block img-fluid">

                <h4 class="text-primary fw-bolder text-center mt-2">CONNEXION</h4>
                <form action="">
                    <div class="input-group mb-3 p-1">
                        <span class="input-group-text bg-white" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                            </svg>
                        </span>
                        <input type="text" class="form-control inputfield p-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3 p-1">
                        <span class="input-group-text bg-white" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                        </span>
                        <input type="password" class="passwordInput form-control inputfield p-3" id="password" placeholder="Mot de passe" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text bg-white" id="basic-addon1">
                            <svg @click="switchVisibility" class="bi bi-eye eye" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                        </span>
                        
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                             Se souvenir de moi
                        </label>
                    </div>
                    <input type="submit" value="CONNEXION" class="btn p-3 w-100 my-3 btn-primary fw-bolder text-white">
                    <div class="other-options pb-2">
                        <span class="d-block text-center ">
                                <router-link class="text-decoration-none" to="#">Mot de passe oublié ?</router-link>
                        </span>
                        <span class="d-block text-center">
                                <router-link class="text-decoration-none" to="/inscription/etape-1">S'inscrire</router-link>
                        </span>              
                    </div>
                    </form>
            </div>
    </div>
</template>

<style scoped> 
    form
    {
        padding-left: 5vw;
        padding-right: 5vw;
    }
    .connexion-bloc
    {
        background-color: rgb(198, 245, 229);
        min-height: 100vh;
    }
    .connexion-box
    {
        margin-top: 8vh; 
        max-width: 500px;
    }
    .img-logo
    {
        margin-bottom: 5vh;
        position: relative;
        left: 15vw;
    } 
    input
    {
        border-left: none;
    }
    .passwordInput
    {
        border-right: none;
    }

 /* Responsive */
    @media only screen and ( max-width: 300px ) 
    {
        form
        {
            padding-left: 0px;
            padding-right: 0px;
        }    
    }
</style>