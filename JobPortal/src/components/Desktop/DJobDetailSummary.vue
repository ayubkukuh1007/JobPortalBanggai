<script>
import JobDetailTitle from "../components/JobDetailTitle.vue";
import {AcademicCapIcon,UserIcon,UserMinusIcon,BriefcaseIcon,CurrencyDollarIcon,MapIcon, UsersIcon} from "@heroicons/vue/24/outline";
import {defineComponent} from "vue";

export default defineComponent({
  components: { JobDetailTitle, AcademicCapIcon, UserIcon, UserMinusIcon,
    BriefcaseIcon,CurrencyDollarIcon,MapIcon,UsersIcon
  }
})


</script>
<template>
  <div class="flex flex-col justify-between mx-20 gap-3">
    <h2 class=" text-xl font-semibold">Ringkasan</h2>
    <!-- pendidikan -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <AcademicCapIcon class="h-6 w-6" />
        <span>Pendidikan</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>SMP, SMA/SMK</span>
      </div>
    </div>
    <!-- gender -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <UsersIcon class="h-6 w-6" />
        <span>Gender</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>Wanita</span>
      </div>
    </div>
    <!-- umur -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <UserMinusIcon class="h-6 w-6" />
        <span>Umur</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>25-36 tahun</span>
      </div>
    </div>
    <!-- status kerja -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <BriefcaseIcon class="h-6 w-6" />
        <span>Status kerja</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>Full Time</span>
      </div>
    </div>
    <!-- besaran gaji -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <CurrencyDollarIcon class="h-6 w-6" />
        <span>Besaran Gaji</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>3,5 -6jt</span>
      </div>
    </div>
    <!-- lokasi kerja -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <MapIcon class="h-6 w-6" />
        <span>Lokasi Kerja</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span>jakarta Barat,DKI Jakarta</span>
      </div>
    </div>
    <span class="h-px w-full bg-customColor10 rounded-sm"></span>
  </div>
</template>