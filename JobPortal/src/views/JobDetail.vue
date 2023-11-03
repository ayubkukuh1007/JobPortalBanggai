<script>
 import JobDetailTitle from "../components/JobDetailTitle.vue";
 import {AcademicCapIcon,UserIcon,UserMinusIcon,BriefcaseIcon,
  CurrencyDollarIcon,MapIcon, UsersIcon,DocumentTextIcon,
   AtSymbolIcon,PhoneIcon, MapPinIcon,ShareIcon} from "@heroicons/vue/24/outline";
 import {defineComponent} from "vue";
 import JobDetailSummary from "../components/JobDetailSummary.vue";
 import JobDetailDescription from "../components/JobDetailDescription.vue";
 import JobDetailRules from "../components/JobDetailRules.vue";
 import JobDetailSendTo from "../components/JobDetailSendTo.vue";

 export default defineComponent({
   components: {
     JobDetailSendTo,
    JobDetailRules,
    JobDetailDescription,
    JobDetailSummary,
    JobDetailTitle,
    AcademicCapIcon,
    UserIcon,
    UserMinusIcon,
    BriefcaseIcon,
    CurrencyDollarIcon,
    MapIcon,
    UsersIcon,
    DocumentTextIcon,
    AtSymbolIcon,
    PhoneIcon,
    MapPinIcon,
    ShareIcon
}
 })

</script>
<template>
  <JobDetailTitle/>
  <JobDetailSummary/>
  <JobDetailDescription/>
  <JobDetailRules/>
  <JobDetailSendTo/>
  <div class=" grid grid-cols-2 gap-2">
    <div class=" flex flex-row gap-2">
      <ShareIcon class="h-6 w-6" />
      <span>Share Pekerjaan</span>
    </div>
    <div class=" flex flex-row gap-2">
      <span>:</span>
        <button class="rounded p-1 text-customColor9 bg-customColor2">Bagikan</button>
    </div>
  </div>
</template>
