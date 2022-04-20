<script>
export default {
  name: "ConnexionView",
};
</script>

<template>
  <div class="connexion-bloc w-100 pt-5">
    <div class="container connexion-box rounded w-50 mx-auto">
     <p style="text-align:center"> <img
        src="../assets/logo.jpg"
        alt="Logo"
        class="img-logo rounded w-50 mx-auto"
      /></p>
      <h2 class="text-primary fw-bolder text-center">CONNEXION</h2>
      <form action="">
        <div class="input-group mb-3 p-1">
          <span class="input-group-text bg-white" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
              />
            </svg> </span
          ><input
            v-model="userename"
            type="text"
            class="form-control inputfield"
            placeholder="Username"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div class="input-group mb-3 p-1">
          <span class="input-group-text bg-white" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2
                                                 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
              />
            </svg>
          </span>
          <input
            v-model="password"
            type="text"
            class="form-control inputfield"
            placeholder="Mot de passe"
            aria-describedby="basic-addon1"
            required
            pattern="{4}[0-9]"
          />
          <span class="input-group-text bg-white ps-3" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3
   5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 
   5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
              />
              <path
                d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5
   2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
              />
            </svg>
          </span>
        </div>
        <b-form-checkbox class="col-sm-5 w-100 mb-3">
          <span class="ms-2">Se souvenir de moi</span>
        </b-form-checkbox>
        <div class="col-sm-12" style="text-align:center">
          <button
            type="submit"
            class="w-100 mb-3 btn btn-primary"
            variant="primary"
          >
            CONNEXION
          </button>
          <br />
          <router-link class="text-decoration-none" to="/"
            >Mot de passe oublié?</router-link
          >
          <br />
          <router-link class="text-decoration-none" to="/inscription3"
            >S'inscrire</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnexionView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.connexion-bloc {
  background-color: rgb(187, 201, 240);
  min-height: 100vh;
}
.img-logo {
  margin-bottom: 10vh;
  position: center;
  left: 8vw;
}
.connexion-box {
  background-color: rgb(246, 248, 255);
}
form {
  margin-left: 10vh;
  margin-right: 10vh;
}
input {
  padding-left: 0px;
}
b-form-checkbox {
  margin-right: 100px;
}
</style>