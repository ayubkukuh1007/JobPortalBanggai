<script>
import {BriefcaseIcon, GlobeAltIcon} from "@heroicons/vue/20/solid/index.js";
export default {
  components: {BriefcaseIcon,GlobeAltIcon },
  data(){
    return {

    }
  },
}

</script>

<template>
  <!-- tablet -->
  <div class=" max-w-screen-phone w-full h-screen bg-customColor3 fixed top-12 left-0 z-11 customfont">
    <div class=" flex h-48 w-full items-center justify-between">
      <div class="flex flex-col w-full justify-center">
        <span class="h-px w-full bg-customColor10 rounded-sm"></span>
        <div class="flex flex-row mx-5 p-1 gap-4 items-center font-semibold">
          <BriefcaseIcon class="h-6 w-6 rounded-full bg-customColor9"/>
          <span class="block self-center text-customColor4 text-xl">Tips kerja</span>
        </div>
        <span class="h-px w-full bg-customColor10 rounded-sm"></span>
        <div class="flex flex-row mx-5 p-1 gap-4 items-center font-semibold">
          <GlobeAltIcon class="h-6 w-6 rounded-full bg-customColor9"/>
          <span class="block self-center text-customColor4 text-xl">Temukan Kami di :</span>
        </div>
        <div class="flex flex-row justify-around mx-10">
          <span class="block text-customColor4 text-xl">Instagram</span>
          <span class="block text-customColor4 text-xl">Facebook</span>
          <span class="block text-customColor4 text-xl">WhatsUp</span>
        </div>
        <span class="h-px w-full bg-customColor10 rounded-sm"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>

.customfont {
  font-family: "Roboto", sans-serif;
}
</style>