<script>
  import HeaderAtas from './components/HeaderAtas.vue';
  import HeaderSub from './components/HeaderSub.vue';
  import Cardjobsearch from './components/CardjobSearch.vue';
  import CardHideefect from './components/CardHideeffect.vue';
  import Footer from './components/Footer.vue';
  import BurgerNav from "./components/BurgerNav.vue";

  export default {
    components: {HeaderAtas, HeaderSub,
      BurgerNav,Cardjobsearch,
      CardHideefect,Footer},

    data(){
      return {
        navBurger : false
      }
    },
    methods : {
      isNavBurger(){
        this.navBurger = !this.navBurger
      }
    },
    computed : {
      isMobile() {
        return screen.width <= 760;
      }
    }
  }

</script>

<template>
  <div class="container mx-auto max-w-screen-phone">
    <HeaderAtas @is-nav-toggle="isNavBurger"/>
    <HeaderSub/>
    <Cardjobsearch/>
    <CardHideefect/>
      <router-view></router-view>
    <Footer/>
    <BurgerNav :is-burger-nav="navBurger" />
  </div>
</template>

<style>
  @font-face {
    font-family: "Roboto";
    src:
      local("Montserrat"),
      url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
  }
</style>

