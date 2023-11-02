<script>
import {AcademicCapIcon, BuildingOfficeIcon, ClockIcon, MapIcon, MapPinIcon} from '@heroicons/vue/24/outline';
export default {
  components: { MapPinIcon, MapIcon,
    BuildingOfficeIcon, AcademicCapIcon,ClockIcon},
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
            <div class="flex flex-row gap-1">
                <BuildingOfficeIcon class="h-6 w-6" />
                <span class=" font-semibold">PT Indofood Indonesia</span>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-1">
                    <AcademicCapIcon class="h-6 w-6" />
                    <span>D3</span>
                </div>
                <div class=" flex flex-row gap-1">
                    <ClockIcon class="h-6 w-6" />
                    <span>Fulltime</span>
                </div>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row gap-1">
                <MapPinIcon class="h-6 w-6" />
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