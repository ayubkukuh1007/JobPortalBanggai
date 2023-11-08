<script>
import { MapIcon, MapPinIcon } from "@heroicons/vue/24/outline";
import DCardJobPlacement from "./DCardJobPlacement.vue";
export default {
  components: {DCardJobPlacement, MapPinIcon, MapIcon },
  data(){
    return {
      showVacancies : false,
      isNavigationBurger : false
    }
  },
  // emits:['toggleBurger'],
  methods: {
    isPostingVacancies(event) {
      this.showVacancies = !this.showVacancies
    },
    isNav(event) {
      //console.log("IsNav "+this.isNavigationBurger)
      this.isNavigationBurger = !this.isNavigationBurger
      this.$emit('IsNavToggle',true)
    }
  }
}

</script>

<template>
    <!-- tablet -->
    <div class=" max-w-screen-desktop w-screen bg-customColor12 sticky top-0 z-10">
        <div class=" flex h-16 items-center mx-20 justify-between">
            <!-- lef logo -->
            <div class="flex-none h-full">
              <router-link to="/">
                <img src=/images/logo.png alt="#">
              </router-link>
            </div>
            <!-- right menus -->
            <div class="flex items-center gap-1">
              <nav>
                <div class="flex flex-row text-sm items-center gap-4 text-customColor9 text-xl">
                  <a href="#responsive-header" class="block inline-block">
                    Tips Kerja
                  </a>
                  <a href="#responsive-header" class="block inline-block">
                    Kota Lainya
                  </a>
                  <a href="#responsive-header" class="block border rounded inline-block p-1">
                    Pasang Lowongan
                  </a>
                </div>
              </nav>
            </div>
        </div>
        <!-- Modal Ads form -->
      <DCardJobPlacement
          v-if="this.showVacancies"
          :by-header = this.showVacancies
          @close-placement-event="isPostingVacancies">
      </DCardJobPlacement>
    </div>
</template>
<style>

.robotoFOnt {
  font-family: "Roboto", sans-serif;
}
</style>