<script>

  import NavBar from './components/NavBar.vue'

  export default
  {
      components:
      {
          NavBar
      }
  }
</script>

<template>
  <div id="app"> 
        <NavBar />
        <router-view/>
  </div>
</template>

<style lang="scss">
#app 
{
  font-family: 'Roboto', sans-serif;
  color: black;
  box-sizing: border-box; 
}

.nav-links
{
    position: absolute;
    right: 6px;
}

</style>
