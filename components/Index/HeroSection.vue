<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <section
    class="pt-44 flex flex-col items-center justify-center text-center relative overflow-hidden text-white md:min-h-[95vh]"
  >
    <div class="gradient-bg absolute top-0 left-0 size-full -z-20">
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div class="interactive"></div>
      </div>
    </div>
    <div class="staticBackground absolute top-0 left-0 -z-10 size-full"></div>
    <h1 class="text-4xl px-4 md:text-7xl font-bold mb-10">
      James Adrian Merano
    </h1>
    <div class="relative mb-44">
      <p class="text-lg px-4 md:text-xl font-medium max-w-4xl">
        A passionate Front-End Developer crafting sleek, responsive, and
        user-friendly web experiences. I specialize in Vue.js, Nuxt, Tailwind
        CSS, JavaScript, and the TALL stack (Tailwind, Alpine.js, Laravel,
        Livewire) to build dynamic and scalable applications. Let’s create
        something amazing! 🚀
      </p>
      <NuxtLink to="/#projects">
        <div
          class="size-16 rounded-full border-2 flex items-end justify-center duration-200 border-white pb-5 absolute z-10 left-1/2 -translate-x-1/2 top-[calc(100%+5rem)] md:top-[calc(100%+2rem)] hover:h-28"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_280_170)">
              <path
                d="M18.0494 17.79C17.9565 17.6963 17.8459 17.6219 17.724 17.5711C17.6021 17.5203 17.4714 17.4942 17.3394 17.4942C17.2074 17.4942 17.0767 17.5203 16.9549 17.5711C16.833 17.6219 16.7224 17.6963 16.6294 17.79L12.9994 21.42V1C12.9994 0.734784 12.8941 0.48043 12.7065 0.292893C12.519 0.105357 12.2646 0 11.9994 0C11.7342 0 11.4799 0.105357 11.2923 0.292893C11.1048 0.48043 10.9994 0.734784 10.9994 1V21.41L7.37943 17.79C7.29371 17.6728 7.18351 17.5757 7.05647 17.5054C6.92944 17.4351 6.78861 17.3933 6.64379 17.3829C6.49897 17.3725 6.35363 17.3938 6.21786 17.4452C6.08209 17.4967 5.95915 17.5771 5.8576 17.6809C5.75604 17.7846 5.6783 17.9093 5.62977 18.0461C5.58124 18.183 5.5631 18.3287 5.5766 18.4733C5.59009 18.6179 5.63491 18.7577 5.70793 18.8832C5.78094 19.0087 5.88042 19.1168 5.99943 19.2L9.91943 23.12C10.4819 23.6818 11.2444 23.9974 12.0394 23.9974C12.8344 23.9974 13.5969 23.6818 14.1594 23.12L18.0794 19.2C18.2617 19.0087 18.3609 18.753 18.3553 18.4888C18.3497 18.2246 18.2397 17.9734 18.0494 17.79Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_280_170">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </NuxtLink>
    </div>

    <svg
      :class="colorMode.preference === 'dark' ? 'text-black' : 'text-white'"
      class="w-full !translate-y-[1px] absolute bottom-0 duration-200 hidden md:block"
      viewBox="0 0 1922 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0V174H1922V0C1922 27.6143 1899.61 50 1872 50H1165.62C1124.58 50 1092.29 84.4023 1068.39 117.772C1044.44 151.21 1005.27 173 961 173C916.734 173 877.557 151.21 853.609 117.772C829.711 84.4023 797.422 50 756.377 50H50C22.3858 50 0 27.6143 0 0Z"
        fill="currentColor"
      />
    </svg>

    <svg
      :class="colorMode.preference === 'dark' ? 'text-black' : 'text-white'"
      class="w-full !translate-y-[1px] duration-200 md:hidden"
      viewBox="0 0 430 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0V162H430V0C430 22.0914 412.091 40 390 40H329.678C310.312 40 291.326 51 272.339 62C253.352 73 234.366 84 215 84C195.634 84 176.648 73 157.661 62C138.674 51 119.688 40 100.322 40H40C17.9086 40 0 22.0914 0 0Z"
        fill="currentColor"
      />
    </svg>
  </section>
</template>

<style></style>
