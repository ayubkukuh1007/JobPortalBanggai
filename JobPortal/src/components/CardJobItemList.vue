<script>
import {AcademicCapIcon, BuildingOfficeIcon, ClockIcon, MapIcon, MapPinIcon,CurrencyDollarIcon} from '@heroicons/vue/24/outline';

export default {
  components: { MapPinIcon, MapIcon,
    BuildingOfficeIcon, AcademicCapIcon,ClockIcon,CurrencyDollarIcon},
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
                    <img class=" block self-center w-10 h-10 overflow-hidden" src="/images/PortalBener.svg" alt="#">
                    <div class="flex flex-col">
                        <span>Dibutuhkan</span>
                        <h3 class=" font-semibold">Teller/Admin</h3>
                    </div>                  
                </div>
                <div class="flex flex-row gap-1">
                    <ClockIcon class="h-6 w-6"/>
                    <span>hari ini</span>
                </div> 
            </div>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row w-full justify-between">
                    <div class="flex flex-row gap-1">
                        <BuildingOfficeIcon class="h-6 w-6" />
                        <span class=" font-semibold">PT. Greenly Lifestyle</span>
                    </div>
                    <div class="flex flex-row gap-1">
                        <CurrencyDollarIcon class="h-6 w-6" />
                        <span>Kompetitif</span>
                    </div>
                </div>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row justify-between w-full items-center">
                <div class="flex flex-row gap-1">
                    <AcademicCapIcon class="h-6 w-6" />
                    <span>D3</span>
                </div>
                <div class=" flex flex-row gap-1">
                    <ClockIcon class="h-6 w-6" />
                    <span>Fulltime</span>
                </div>
                <div class="flex flex-row gap-1">
                    <MapPinIcon class="h-6 w-6" />
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