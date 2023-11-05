<script>
import { MapIcon, MapPinIcon } from "@heroicons/vue/24/outline";
import CardJobPlacement from "./CardJobPlacement.vue";
export default {
  components: {CardJobPlacement, MapPinIcon, MapIcon },
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
    <div class=" max-w-screen-phone bg-customColor12 sticky top-0 z-10">
        <div class=" flex h-12 items-center mx-5 justify-between">
            <!-- lef logo -->
            <div class="flex-none w-36 h-6">
              <router-link to="/">
                <span class="text-customColor9 font-semibold p-1">LOKER TOLUBA</span>
              </router-link>
            </div>
            <!-- right menus -->
            <div class="flex flex-row items-center gap-1">
                <div class=" flex-none">
                  <button @click="isNav">
                      <span aria-hidden="true" class="block h-1 w-5 bg-customColor9 transform transition duration-500 ease-in-out" :class="{'rotate-45 translate-y-1': isNavigationBurger,' -translate-y-1': !isNavigationBurger }"></span>
                      <span aria-hidden="true" class="block h-1 w-4 bg-customColor9 transform transition duration-500 ease-in-out" :class="{'opacity-0': isNavigationBurger } "></span>
                      <span aria-hidden="true" class="block h-1 w-5 bg-customColor9 transform  transition duration-500 ease-in-out" :class="{'-rotate-45 -translate-y-1': isNavigationBurger, ' translate-y-1': !isNavigationBurger}"></span>
                  </button>
                </div>
                <div class=" flex-none p-1">
                    <MapPinIcon class="h-6 w-6 bg-customColor9 rounded"/>
                </div>
                <div class="flex-none robotoFOnt">
                    <button @click="isPostingVacancies" class=" rounded-md bg-customColor13 text-customColor9 p-1">Pasang</button>
                </div>
            </div>
        </div>
        <!-- Modal Ads form -->
      <CardJobPlacement
          v-if="this.showVacancies"
          :by-header = this.showVacancies
          @close-placement-event="isPostingVacancies">
      </CardJobPlacement>
    </div>
</template>
<style>

.robotoFOnt {
  font-family: "Roboto", sans-serif;
}
</style>