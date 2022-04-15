<script>
    import DeconnexionBar from '../components/DeconnexionBar.vue'
    export default
    {
        name: "AccountView",
        components:
        {
            DeconnexionBar
        }
    }
</script>

<template> 
    <div>
        <DeconnexionBar />
    <div class="account-box mb-5">
        <h4 class="text-center  fw-bolder w-100 account-title">
            DÉTAILS DE L'ENTREPRISE
        </h4>
        <div class="container-fluid">
             <div class="row rounded mx-sm-3" style="border: 1px solid silver;">
                <h5 class="container-fluid text-center box-title p-2">
                    Informations générales de l'entreprise
                </h5>
                <div class="col-sm-2">
                    <img src="../assets/logo.png" class="rounded mx-auto d-block img-fluid" alt="Logo de l'entreprise" width="150" height="150">
                    <h4 class="text-center fw-bolder startup-name">RINTIO</h4>
                    <p class="text-center">Secteur principal</p>
                    <p class="text-center">Siège social</p>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="input-group mb-3 p-1">
                            <span class="input-group-text input-header" id="basic-addon1">
                                Email
                            </span>
                            <input type="text" readonly class="bg-white form-control inputfield" placeholder="XXXX@gmail.com" aria-label="Email r" ariainput-headeredby="basic-addon1">
                        </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group mb-3 p-1">
                                <span class="input-group-text input-header" id="basic-addon1">
                                    Date de création
                                </span>
                                <input type="text" readonly class="bg-white  form-control inputfield" placeholder="22/04/2004" aria-label="Email r" ariainput-headeredby="basic-addon1">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                        <div class="input-group mb-3 p-1">
                            <span class="input-group-text input-header" id="basic-addon1">
                                Pays
                            </span>
                            <input type="text" readonly class="bg-white  form-control inputfield" placeholder="XXXXXXXXXX" aria-label="Email r" ariainput-headeredby="basic-addon1">
                        </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group mb-3 p-1">
                                <span class="input-group-text input-header" id="basic-addon1">
                                    Nombre d'employées
                                </span>
                                <input type="text" readonly class="bg-white  form-control inputfield" placeholder="24486481961" aria-label="Email r" ariainput-headeredby="basic-addon1">
                            </div>
                        </div>
                    </div>       
                    <div class="col-sm-12 rounded text-areabox mb-3">
                        <span class="ps-5 py-2 row input-header">Objectifs</span>
                        <div class="input-group">
                            <textarea readonly class="bg-white form-control" aria-label="objectifs"></textarea>
                        </div>
                    </div>  

                    <div class="col-sm-12 rounded text-areabox mb-3">
                        <span class="ps-5 py-2 row input-header input-header">Succursale</span>
                        <div class="input-group">
                            <textarea readonly class="bg-white form-control" aria-label="surcusale"></textarea>
                        </div>
                    </div> 

                    <div class="col-sm-12 rounded text-areabox mb-3">
                        <span class="ps-5 py-2 row input-header">Contacts</span>
                        <div class="input-group">
                            <textarea readonly class="bg-white form-control" aria-label="contacts"></textarea>
                        </div>
                    </div>            
                </div>
            </div>
        </div>

        <div class="container-fluid mt-3">
             <div class="row rounded mx-sm-3" style="border: 1px solid silver;">
                <h5 class="container-fluid text-center box-title p-2">
                    Informations financières de l'entreprise
                </h5>

                <div class="row px-sm-5 mb-3">
                    <fieldset class="fieldset border">
                        <legend class="float-none fw-bold">Equipes dirigeante</legend>
                        <table class="w-100 mx-auto mb-5">
                            <thead style="">
                                <th>Nom</th>
                                <th>Position</th>
                                <th>Url</th>
                            </thead>
                            <tbody>
                                <tr style="height: 17vh;">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>

                <div class="row px-sm-5 mb-3">
                    <fieldset class="fieldset border">
                        <legend class="float-none fw-bold">Investisseurs</legend>
                        <table class="w-100 mx-auto mb-5">
                            <thead style="">
                                <th>Nom</th>
                                <th>Position</th>
                                <th>Url</th>
                            </thead>
                            <tbody>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>

                <div class="row px-sm-5 mb-3">
                    <fieldset class="fieldset border">
                        <legend class="float-none fw-bold">Chiffres d'affaire</legend>
                        <table class="w-100 mx-auto mb-5">
                            <thead style="">
                                <th>Années</th>
                                <th>Montant</th> 
                            </thead>
                            <tbody>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td> 
                                </tr>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td> 
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>

                <div class="row px-sm-5 mb-3">
                    <fieldset class="fieldset border">
                        <legend class="float-none fw-bold">Levées de fonds</legend>
                        <table class="w-100 mx-auto mb-5">
                            <thead style="">
                                <th>Années</th>
                                <th>Montant</th> 
                            </thead>
                            <tbody>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td> 
                                </tr>
                                <tr style="height: 8vh;">
                                    <td></td>
                                    <td></td> 
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>
                
             </div>
        </div>
    </div>
         </div>
</template>
    
<style scoped>  
    .text-areabox
    {
        box-sizing: border-box;
        overflow: hidden;
    }
    table 
    {
        border-collapse: collapse;
        border-radius: 6px;
        border-style: hidden; /* hide standard table (collapsed) border */
        box-shadow: 0 0 0 1px #C4C4C4; /* this draws the table border  */ 
    }
    td 
    {
        border: 1.7px solid #C4C4C4;
        text-align: center;
        padding: 6px;
    }
    th
    {
        text-align: center;
        padding: 6px; 
        overflow: hidden;
    }
    legend
    { 
        font-size: 18px;
    }
    .account-title , legend , .startup-name
    {
        color: #6659FE;
    }
    .box-title
    {
        background-color: #9EAEFF;
        font-weight: 900;
    }
    .input-header
    { 
        font-weight: 900;
        color: black;
    } 
    .input-header , th
    {
        background-color: #D4DAFD;
    }
</style>