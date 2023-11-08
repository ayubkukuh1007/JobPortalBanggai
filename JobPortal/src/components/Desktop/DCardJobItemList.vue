<script>
import {AcademicCapIcon, BuildingOfficeIcon, ClockIcon,LockClosedIcon, MapIcon, MapPinIcon,CurrencyDollarIcon} from '@heroicons/vue/24/outline';

export default {
  components: { MapPinIcon, MapIcon,
    BuildingOfficeIcon, AcademicCapIcon,ClockIcon,CurrencyDollarIcon,LockClosedIcon},
  data(){
    return {

    }
  },
}

</script>

<template>
    <!-- tablet -->
        <div class="flex flex-row bg-customColor9 justify-between rounded-xl shadow-md p-4 CustomFont gap-2">
            <div class="flex">
              <img class="w-52 h-32" src="/images/PortalBener.svg" alt="">
            </div>
            <div class="flex flex-col w-full gap-1">
              <div class="flex flex-row justify-between items-stretch gap-2">
                <span>Dibutuhkan</span>
                <div class="flex items-center gap-2 flex-row">
                  <span class="text-lg"> <ClockIcon class="h-4 w-4"/></span>
                  <span class="text-lg">hari ini</span>
                </div>
              </div>
               <h3 class=" font-semibold text-2xl">Teller/Admin - Accounting & Finance - Waiter & Waiterss</h3>
              <div class="flex flex-row w-full justify-between">
                <div class="flex flex-row gap-1">
                  <BuildingOfficeIcon class="h-6 w-6" />
                  <span class="text-xl font-semibold ">PT. Greenly Lifestyle</span>
                </div>
                <div class="flex flex-row gap-1">
                  <CurrencyDollarIcon class="h-6 w-6" />
                  <span>Kompetitif</span>
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
.CustomFont {
  font-family: "Roboto", sans-serif;
}
</style>