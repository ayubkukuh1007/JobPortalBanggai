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
    <div>  
        <div class="flex flex-col w-52 h-80 bg-customColor9 rounded-xl shadow-md p-4 customfont gap-1">
            <div class="flex flex-col">
                <span>Dibutuhkan</span>
                <h3 class=" font-semibold">Teller/Admin</h3>
            </div>
            <img class=" w-full h-24" src="/images/PortalBener4.png">
            <div class="flex flex-row">
                <MapPinIcon class="h-6 w-6 text-blue-500 bg-customColor4" />
                <span class=" font-semibold">PT Indofood Indonesia</span>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row justify-between">
                <div class="flex flex-row">
                    <MapPinIcon class="h-6 w-6 text-blue-500 bg-customColor4" />
                    <span>D3</span>
                    
                </div>
                <div class=" flex flex-row">
                    <MapPinIcon class="h-6 w-6 text-blue-500 bg-customColor4" />
                    <span>Fulltime</span>
                </div>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row">
                <MapPinIcon class="h-6 w-6 text-blue-500 bg-customColor4" />
                <span>Indonesi</span>
            </div>
        </div> 
    </div>
</template>
<style scoped>
.customfont {
  font-family: "Roboto", sans-serif;
}
</style>