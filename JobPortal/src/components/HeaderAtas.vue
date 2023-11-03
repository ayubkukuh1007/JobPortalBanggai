<script>
import { MapIcon, MapPinIcon } from "@heroicons/vue/24/outline";
export default {
  components: { MapPinIcon, MapIcon },
  data(){
    return {

    }
  },
}

</script>

<template>
    <!-- tablet -->
    <div class=" max-w-screen-phone bg-customColor6 sticky top-0 z-10">
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
                    <label for="hamburger" class="flex flex-col gap-1 p-1">
                        <span class=" w-5 h-1 bg-customColor9"></span>
                        <span class=" w-5 h-1 bg-customColor9"></span>
                        <span class=" w-5 h-1 bg-customColor9"></span>
                    </label>
                </div>
                <div class=" flex-none p-1">
                    <MapPinIcon class="h-6 w-6 bg-customColor9 rounded"/>
                </div>
                <div class="flex-none customfont">
                    <button class=" rounded-md bg-customColor2 text-customColor9 p-1">Pasang</button>
                </div>
            </div>

        </div>
    </div>
</template>
<style>

.customfont {
  font-family: "Roboto", sans-serif;
}
</style>