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
        <div class="flex flex-col w-full bg-customColor9 rounded-xl shadow-md p-4 customfont gap-2">
            <div class="flex flex-row justify-between items-stretch">
                <div class="flex flex-row justify-between items-stretch gap-2">
                    <img class=" block self-center w-10 h-10 rounded-full overflow-hidden" src="/images/PortalBener4.png">
                    <div class="flex flex-col">
                        <span>Dibutuhkan</span>
                        <h3 class=" font-semibold">Teller/Admin</h3>
                    </div>                  
                </div>
                <div class="flex flex-row">
                    <MapPinIcon class="h-6 w-6 text-blue-500" />
                    <span>hari ini</span>
                </div> 
            </div>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row w-full justify-between">
                    <div class="flex flex-row">
                        <MapPinIcon class="h-6 w-6 text-blue-500" />
                        <span class=" font-semibold">PT. Greenly Lifestyle</span>
                    </div>
                    <div class="flex flex-row">
                        <MapPinIcon class="h-6 w-6 text-blue-50" />
                        <span>Fulltime</span>
                    </div>
                </div>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row">
                        <MapPinIcon class="h-6 w-6 text-blue-500" />
                        <span>D3</span>
                    </div>
                    <div class=" flex flex-row">
                        <MapPinIcon class="h-6 w-6 text-blue-50" />
                        <span>Fulltime</span>
                    </div>
                </div>
                <div class="flex flex-row">
                    <MapPinIcon class="h-6 w-6 text-blue-500" />
                    <span>PT Indofood Indonesia</span>
                </div>
            </div>
        </div> 
    </div>
</template>
<style scoped>
.customfont {
  font-family: "Roboto", sans-serif;
}
</style>