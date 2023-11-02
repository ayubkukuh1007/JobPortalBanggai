<script setup>
  import HeaderAtas from './components/HeaderAtas.vue';
  import HeaderSub from './components/HeaderSub.vue';
  import Cardjobsearch from './components/CardjobSearch.vue';
  import CardHideefect from './components/CardHideeffect.vue';
  import Footer from './components/Footer.vue';
  import BurgerNav from "./components/BurgerNav.vue";
  import {computed} from "vue";

  const isMobile = computed(() => {
    return screen.width <= 760;
  });

</script>

<template>
    <div class="container mx-auto max-w-screen-phone">
      <HeaderAtas/>
      <HeaderSub/>
      <Cardjobsearch/>
      <CardHideefect/>
        <router-view></router-view>
      <Footer/>
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

