<script>
import { MapIcon, MapPinIcon } from '@heroicons/vue/24/solid';
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
    <div class=" max-w-screen-phone bg-customColor1 sticky top-0 z-10">
        <div class=" flex h-12 items-center mx-5 justify-between">
            <!-- lef logo -->
            <div class="flex-none w-36 h-6">
                <span class=" bg-customColor9 text-customColor2 font-medium">Loker TOLUBA</span>
                <!-- <img src="/images/logo.png"> -->
            </div>
            <!-- right menus -->
            <div class="flex flex-row items-center gap-1">
                <div class=" flex-none">
                    <label for="hamburger" class="flex flex-col gap-1 p-1">
                        <span class=" w-5 h-1 bg-customColor4"></span>
                        <span class=" w-5 h-1 bg-customColor4"></span>
                        <span class=" w-5 h-1 bg-customColor4"></span>
                    </label>
                </div>
                <div class=" flex-none p-1">
                    <MapPinIcon class="h-6 w-6 text-blue-500 bg-customColor4" />
                </div>
                <div class="flex-none customfont">
                    <button class=" rounded-md bg-customColor2 text-customColor4 p-1">Pasang</button>
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