<script>
export default {
  props: {
    isBurgerNav: Boolean,
  },
  data(){
    return {

    }
  },
}

</script>

<template>
  <div class="transition transform max-w-screen-phone w-full h-screen bg-customColor12 fixed top-12 z-11"
       :class="{
            'translate-x-full' : !isBurgerNav,
            'opacity-0' : !isBurgerNav,
       }">
    <div class="flex flex-col h-14 w-full items-center justify-between shadow">
      <Transition name="slideTrans">
        <div v-if="isBurgerNav" class="flex flex-row mx-5 p-1 items-center self-start gap-2 text-customColor9">
          <font-awesome-icon icon="fa-solid fa-list" />
          <span class="block text-2xl font-thin">Tips Kerja</span>
        </div>
      </Transition>
    </div>
    <div class="flex flex-col w-full justify-center mt-4 gap-4 ">
      <Transition name="slideTrans">
        <span v-if="isBurgerNav" class="self-center text-customColor9 text-xl">Temukan Kami di</span>
      </Transition>
      <div class="flex flex-row p-1 items-center">
        <Transition name="slideTrans">
          <div v-if="isBurgerNav" class="flex flex-row w-full gap-4 items-center justify-center text-customColor9 text-2xl">
            <font-awesome-icon icon="fa-brands fa-google-play" />
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <font-awesome-icon icon="fa-brands fa-telegram" />
            <span><font-awesome-icon icon="fa-brands fa-instagram" /></span>
            <span><font-awesome-icon icon="fa-brands fa-square-facebook" /></span>
            <span><font-awesome-icon icon="fa-brands fa-whatsapp" /></span>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<style scoped>

.slideTrans-enter-active {
  animation: slideTrans-in 0.5s;
}
  @keyframes slideTrans-in {
    0% {
      transform: translateX(10%);
    }
    50% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>