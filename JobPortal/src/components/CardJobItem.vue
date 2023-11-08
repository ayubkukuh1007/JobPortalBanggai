<script>
import {AcademicCapIcon, BuildingOfficeIcon, ClockIcon, MapIcon, MapPinIcon} from '@heroicons/vue/24/outline';

export default {
  components: { MapPinIcon, MapIcon,
    BuildingOfficeIcon, AcademicCapIcon,ClockIcon},
  props : {
    imageLink : String
  },
  data(){
    return {
      symbols : ['S1','SMP','S2/S3'],
      dynamicDegree : '',
      propsImagelink : ''
    }
  },
  methods : {
    slider: function() {
      let a = 0
      let b = []
      setInterval(()=>{
        b[a] = this.symbols[a]
        if (a === 3){
          a = 0
        }
        this.dynamicDegree = b[a]
        a++
        //console.log(b[a])
      }, 3000);
    }
  },
  mounted() {
    this.slider()
  }
}

</script>

<template>
    <!-- tablet -->
    <div>  
        <div class="flex flex-col w-52 h-80 bg-customColor9 rounded-xl shadow-md p-4 customfont gap-1">
            <div class="flex flex-col items-start">
                <span class="block">Dibutuhkan</span>
                <h3 class=" font-semibold">Teller/Admin</h3>
            </div>
            <img class=" w-full h-32" :src="imageLink" alt="/images/PortalBener.svg">
            <div class="flex flex-row gap-1">
                <BuildingOfficeIcon class="h-6 w-6" />
                <span class=" font-semibold">PT Indofood Indonesia</span>
            </div>
            <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-1">
                    <AcademicCapIcon class="h-6 w-6" />
                    <span >{{this.dynamicDegree}}</span>
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