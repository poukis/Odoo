<script>
    import CountriesList from '../components/CountriesList.vue'
    import ActivitiesList from '../components/ActivitiesList.vue'
    export default
    {
        name: "Register1View",
        components:
        {
            CountriesList,
            ActivitiesList
        }
    }
</script>

<template>
    <div class="register-box">
            <h2 class="text-center fw-bolder text-primary m-2">INSCRIPTION</h2>
            <div class="form-box m-3">
                    <fieldset class="fieldset p-2 border rounded-3 p-3">
                        <legend class="float-none w-auto px-3">Informations générale de l'entreprise</legend>
                        <div class="row  first">
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                                        </svg>
                                    </span>
                                    <input type="text" class="form-control inputfield" placeholder="Nom" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                        </svg>
                                    </span>
                                    <input type="email" class="form-control inputfield" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/website.svg" alt="tel" width="20px" height="20px">
                                    </span>
                                    <input type="text" class="form-control inputfield" placeholder="Site web" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <label class="input-group-text bg-white" for="inputGroupSelect01">
                                        <img src="../assets/World.svg" alt="tel" width="20px" height="20px">
                                    </label>
                                    <select class="form-select inputfield" id="inputGroupSelect01">
                                        <option selected>Pays</option>
                                        <CountriesList />
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </span>
                                    <input type="email" class="form-control inputfield" placeholder="Siège social" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                                            <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                                        </svg>
                                    </span>
                                    <input type="number" step="1" class="form-control inputfield" placeholder="Nombre d'employés" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-12">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/s.png" alt="tel" width="20px" height="20px">
                                    </span>
                                    <input type="email" class="form-control inputfield" placeholder="Succursale" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            
                        </div>

                        <div class="row first">  
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <label class="input-group-text bg-white" for="inputGroupSelect01">
                                        <img src="../assets/Waiter.svg" alt="tel" width="20px" height="20px">
                                    </label>
                                    <select class="form-select inputfield" id="inputGroupSelect01">
                                        <option selected>Secteur principal</option>
                                        <ActivitiesList />
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="input-group mb-3 p-1 w-md-50 w-sm-100">
                                    <label class="input-group-text bg-white" for="inputGroupSelect01">
                                        <img src="../assets/Waiter.svg" alt="tel" width="20px" height="20px">
                                    </label>
                                    <select class="form-select inputfield" id="inputGroupSelect01">
                                        <option selected>Autres secteurs</option>
                                        <ActivitiesList />
                                    </select>
                                </div> 
                            </div>
                        </div>
                        
                        <div class="row first"> 
                            <div class="col-sm-8">
                                <label for="contact-box"></label>
                                <div class="input-group mb-1 p-1" id="contact-box">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                            <img src="../assets/Vector.svg" alt="tel" width="20px" height="20px">
                                    </span>
                                    <input type="text" class="p-3 form-control inputfield" placeholder="Contacts" aria-label="Username" aria-describedby="basic-addon1">
                                </div> 
                            </div>
                            <div class="col-sm-4">
                                <label for="date-box">Date de création</label>
                                <div class="input-group mb-3 p-1" id="date-box">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                    </span>
                                    <input type="date" class="p-3 form-control inputfield" placeholder="Date de création" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-8">
                                <div class="input-group mb-3 p-1 w-md-50 w-sm-100">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Goal.png" alt="tel" width="20px" height="20px">
                                    </span> 
                                    <textarea name="objectifs" id="objectifs" placeholder="Objectifs" class="form-control inputfield" cols="8" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-4 pt-1">
                                <label for="logo-box">Joindre ici le logo de l'entreprise</label>
                                <div class="input-group mb-3 p-1 mt-4" id="logo-box">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Logo.svg" alt="tel" width="20px" height="20px">
                                    </span>
                                    <input type="file" class="p-3 form-control inputfield" placeholder="Logo" aria-label="file" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        
                    </fieldset>
            </div>
            <div class="submit-box">
                <input type="submit" value="Suivant  >" class="btn btn-primary submit-next">
            </div>
    </div>
</template>

<style scoped>
    fieldset
    {
        border: solid 1px #C4C4C4; 
    }

    .submit-box
    {
        position: relative;
    }
    .submit-next
    {
        position: absolute;
        right: 2vw;
    }
    .inputfield
    {
        border-left: none; 
    }
    #objectifs
    {
        padding-top: 7vh;
    }
    @media screen and ( max-width: 200px ) 
    {
          
    }
</style>