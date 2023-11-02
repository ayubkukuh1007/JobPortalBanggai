<script>
 import JobDetailTitle from "../components/JobDetailTitle.vue";
 import {AcademicCapIcon,UserIcon,UserMinusIcon,BriefcaseIcon,CurrencyDollarIcon,MapIcon, UsersIcon} from "@heroicons/vue/24/outline";
 import {defineComponent} from "vue";
 import JobDetailSummary from "../components/JobDetailSummary.vue";

 export default defineComponent({
   components: {
     JobDetailSummary, JobDetailTitle, AcademicCapIcon, UserIcon, UserMinusIcon,
    BriefcaseIcon,CurrencyDollarIcon,MapIcon,UsersIcon
  }
 })


</script>
<template>
  <JobDetailTitle/>
  <JobDetailSummary/>
  <div class="flex flex-col justify-between mx-5 gap-3">

  </div>
</template>