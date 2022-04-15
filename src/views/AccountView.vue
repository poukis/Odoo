<script>
    export default
    {
        name: "AccountView"
    }
</script>

<template> 
    <div class="account-box">
        <h2 class="text-center text-primary fw-bolder">DÉTAILS DE L'ENTREPRISE</h2>
        <div>
            <h4 class="container-fluid text-center bg-primary p-2">
                Informations générales de l'entreprise
            </h4>
            <div class="row">
                <div class="col-sm-2">
                    <img src="../assets/logo.png" class="rounded mx-auto d-block img-fluid" alt="Logo de l'entreprise" width="150" height="150">
                    <h3 class="text-center text-primary">RINTIO</h3>
                    <p class="text-center">Secteur principal</p>
                    <p class="text-center">Siège social</p>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-5">
                        <div class="input-group mb-3 p-1">
                            <span class="input-group-text bg-white" id="basic-addon1">
                                Email
                            </span>
                            <input type="email" readonly class="form-control inputfield" placeholder="XXXX@gmail.com" aria-label="Email r" aria-describedby="basic-addon1">
                        </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="input-group mb-3 p-1">
                                <span class="input-group-text bg-white" id="basic-addon1">
                                    Email
                                </span>
                                <input type="email" readonly class="form-control inputfield" placeholder="XXXX@gmail.com" aria-label="Email r" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
         
</template>

<style scoped> 
</style>