<script>
    import CountriesList from '../components/CountriesList.vue'
    import ActivitiesList from '../components/ActivitiesList.vue'
    import NavBar from '../components/NavBar.vue'

    // Importation du mapState
    import { mapState } from 'vuex'

    export default
    {
        name: "Register1View",
        data()
        {
            return  {
                    contacts: "",
                    succursale: ""
            }
        },
        components:
        {
            CountriesList,
            ActivitiesList,
            NavBar
        },
        methods:
        {
            handleSubmit()
            { 
                // Récupération et insertion du secteur principal selectioné
                let spSelector = document.getElementById('secteur').value  
                this.startup.sectors.push(spSelector)

                // Récupération et insertion des autres secteurs selectionés
                var options = document.getElementById('autreSecteurs').selectedOptions
                var values = Array.from(options).map(({ value }) => value)
                for ( let i = 0; i < values.length ; i++ )
                {
                    // On exclus les répétitions et les champs non évaluables
                    if ( values[i] != spSelector && values[i] != "autres-secteurs" )
                        this.startup.sectors.push(values[i])
                } 

                // Récupération des contacts
                let contactsArray = this.contacts.split(/(\s+)/)
                for ( let i = 0; i < contactsArray.length; i++ )
                {
                    if ( contactsArray[i] != " " )
                        this.startup.contacts.push(contactsArray[i])
                }

                // Récupération des localisations
                let locationsArray = this.succursale.split(/(\s+)/)
                for ( let i = 0; i < locationsArray.length; i++ )
                {
                    if ( locationsArray[i] != " " )
                        this.startup.location.push(locationsArray[i])
                }

                console.warn(this.startup); 
            }
        },
        computed:
        {
            ...mapState([ 'startup' ]),
            getActualDate()
            {
                // Récuperation des données
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1             
                let day = date.getDate()
                let d = day
                let m = month
                
                // Gestion du formattage
                if ( month < 10 )
                    m = "0" + month
                if ( day < 10 )
                    d = "0" + day       
                
                // Retour de la date
                return year + '-' + m + '-' + d
            }
        }
    }
</script>

<template>
    <div>
        <NavBar />
    <div class="register-box">

            <h4 class="text-center fw-bolder m-2 register-title">INSCRIPTION</h4>
            <div class="form-box m-3">
                    <fieldset class="fieldset p-2 border rounded-3 p-3">
                        <legend class="float-none w-auto px-3 register-title">
                            Informations générale de l'entreprise
                        </legend>
                    
                        <form @submit.prevent="handleSubmit" method="post">
                        <div class="row  first">
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="nomlabel">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                                        </svg>
                                    </span>
                                    <input type="text" v-model="startup.name" class="form-control inputfield" id="nom" required placeholder="Nom" aria-label="Username" aria-describedby="nomlabel">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                        </svg>
                                    </span>
                                    <input type="email" v-model="startup.email" class="form-control inputfield" id="email" required placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/website.svg" alt="tel" width="25px" height="25px">
                                    </span>
                                    <input type="url" v-model="startup.web_site" class="form-control inputfield" id="website" required  placeholder="Site web" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <label class="input-group-text bg-white" for="countrySelector">
                                        <img src="../assets/World.svg" alt="tel" width="25px" height="25px">
                                    </label>
                                    <select v-model="startup.country" class="form-select inputfield" id="countrySelector" required>
                                        <CountriesList />
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </span>
                                    <input type="text" v-model="startup.address" class="form-control inputfield" required id="siege" placeholder="Siège social" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="nbreEmployesLabel">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                                            <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                                        </svg>
                                    </span>
                                    <input type="number" v-model="startup.employees_size" min="0" step="1" class="form-control inputfield" required id="nbreEmployes" placeholder="Nombre d'employés" aria-label="Username" aria-describedby="nbreEmployesLabel">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-12">
                                <div class="input-group mb-3 p-1">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/s.png" alt="tel" width="29px" height="25px">
                                    </span>
                                    <input type="text" v-model="succursale" class="form-control inputfield" placeholder="Succursale" required id="succursale" aria-label="succusale" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            
                        </div>

                        <div class="row first">  
                            <div class="col-sm-4">
                                <div class="input-group mb-3 p-1">
                                    <label class="input-group-text bg-white" for="secteurPrincipal">
                                        <img src="../assets/Waiter.svg" alt="tel" width="25px" height="25px">
                                    </label>
                                    <select class="form-select inputfield" required id="secteur">
                                        <option value= "" hidden disabled selected>Secteur principal</option>
                                        <ActivitiesList />
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="input-group mb-3 p-1 w-md-50 w-sm-100">
                                    <label class="input-group-text bg-white" for="autreSecteurs">
                                        <img src="../assets/Waiter.svg" alt="tel" width="25px" height="25px">
                                    </label>
                                    <select class="form-select inputfield" required id="autreSecteurs" multiple multiselect-search="true">
                                        <option value= "autres-secteurs" hidden disabled selected>Autres secteurs</option>
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
                                    <input type="text" v-model="contacts" class="p-3 form-control inputfield" required id="contacts" placeholder="Contacts" aria-label="Username" aria-describedby="basic-addon1">
                                </div> 
                            </div>
                            <div class="col-sm-4">
                                <label for="date-box">Date de création</label>
                                <div class="input-group mb-3 p-1" id="date-box">
                                    <span class="input-group-text bg-white" id="dateCreationLabel">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                    </span>
                                    <input type="date" v-model="startup.creation_date" pattern="\d{4}-\d{2}-\d{2}" class="p-3 form-control inputfield" :max=getActualDate required id="dateCreation"  placeholder="Date de création" aria-label="Username" aria-describedby="dateCreationLabel">
                                </div>
                            </div>
                        </div>

                        <div class="row first"> 
                            <div class="col-sm-8">
                                <div class="input-group mb-3 p-1 w-md-50 w-sm-100">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Goal.png" alt="tel" width="25px" height="25px">
                                    </span> 
                                    <textarea v-model="startup.goal" name="objectifs" id="objectifs" required placeholder="Objectifs" class="form-control inputfield" cols="8" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-4 pt-1">
                                <label for="logo-box">Joindre ici le logo de l'entreprise</label>
                                <div class="input-group mb-3 p-1 mt-2" id="logo-box">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <img src="../assets/Logo.svg" alt="tel" width="25px" height="25px">
                                    </span>
                                    <input type="file" class="p-3 form-control inputfield" id="logo" placeholder="Logo" aria-label="file" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        <div class="submit-box mb-4">
                            <button type="submit" class="btn text-white registerBtn submit-next">Suivant  ></button>
                        </div>
                        </form>
                    </fieldset>
            </div>
            
    </div>  
    
    </div>
</template>

<style scoped>
    fieldset
    {
        border: solid 1px #C4C4C4; 
    }
    legend
    {
        font-size: 19px;
    }
    .registerBtn
    {
        background-color: #6659FE;
        color: white;
    }
    .register-title
    {
        color: #6659FE;
    }
    .register-title, .registerBtn
    {
        font-weight: 900;
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
</style>