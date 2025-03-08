<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import Drawer from "primevue/drawer";

const { directions } = useWindowScroll();
const direction = ref<string | null>(null);
const visibleRight = ref<boolean>(false);

watch(
  () => directions,
  () => {
    if (directions.top) {
      direction.value = "up";
    }
    if (directions.bottom) {
      direction.value = "down";
    }
  },
  { deep: true }
);

const toggleDrawer = () => {
  visibleRight.value = !visibleRight.value;
  console.log("Drawer visible:", visibleRight.value);
};
</script>

<template>
  <header class="flex justify-center">
    <div
      :class="direction === 'down' ? '-translate-y-44 opacity-0' : ''"
      class="bg-[#111111] mx-auto text-white flex items-center mt-5 py-5 px-8 rounded-full justify-between fixed z-50 border-2 border-transparent duration-1000 dark:border-[#292929] w-11/12 xs:px-16"
    >
      <Drawer
        class="!w-full sm:!w-[15rem] md:!w-[22rem] lg:!w-[30rem] p-5 !bg-slate"
        v-model:visible="visibleRight"
        position="right"
      >
        <ul
          class="bg-base-200 dark:bg-black dark:text-white text-base-content text-lg min-h-full w-full pt-12"
        >
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#projects">Projects</NuxtLink>
          </li>
          <hr class="h-px border-none bg-gray-400 my-2" />
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#about">About</NuxtLink>
          </li>
          <hr class="h-px border-none bg-gray-400 my-2" />
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#tech">Tech Stack</NuxtLink>
          </li>
          <hr class="h-px border-none bg-gray-400 my-2 w-full" />
          <li class="mt-4">
            <a
              href="{{ url('/signup') }}"
              class="bg-gradient-to-r mx-auto text-white px-5 mt-3 from-primaryDark to-primary rounded-full py-1 w-full duration-200 justify-center items-center text-xl transition-all bg-pos-10 text-center max-w-32 xl:max-w-44 hover:bg-pos-100 font-medium"
              >Resume</a
            >
          </li>
        </ul>
      </Drawer>
      <NuxtLink to="/">
        <img src="/images/logo.png" class="h-8 lg:h-16 w-auto" alt="" />
      </NuxtLink>
      <div
        class="w-2/5 justify-between flex items-center xs:w-28 lg:w-3/4 xl:w-3/4 xl:justify-between"
      >
        <ul
          class="items-center text-xl font-bold hidden w-2/3 justify-between xl:w-3/5 lg:flex"
        >
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#projects">Projects</NuxtLink>
          </li>
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#about">About</NuxtLink>
          </li>
          <li class="hover:text-primary duration-200">
            <NuxtLink to="/#tech">Tech Stack</NuxtLink>
          </li>
        </ul>
        <a
          href="/Merano_CV.pdf" download=""
          class="rounded-full py-4 w-full duration-200 justify-center items-center font-bold text-xl transition-all bg-pos-10 hidden text-center max-w-32 gradientButton lg:flex xl:max-w-44"
          >Resume</a
        >
        <div class="flex flex-col size-7 overflow-hidden">
          <svg
            onclick="nightMode()"
            class="size-7 text-white duration-500 cursor-pointer flex-shrink-0 nightModeButton dark:-translate-y-7 hover:text-primary"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_60_500)">
              <path
                d="M23.5217 22.6223C22.283 23.8592 20.7987 24.8226 19.1646 25.4503C17.5305 26.0781 15.7829 26.3562 14.0347 26.2668C12.2791 26.1827 10.5615 25.7261 8.99588 24.9275C7.43022 24.1288 6.0523 23.0064 4.95353 21.6346C3.25119 19.492 2.29093 16.8545 2.21734 14.119C2.14374 11.3835 2.96079 8.69808 4.54548 6.46712C5.58831 5.04329 6.8982 3.83597 8.40215 2.91243C8.80163 2.67627 9.25695 2.55114 9.72101 2.55C10.1851 2.54886 10.641 2.67174 11.0416 2.90593C11.4423 3.14012 11.773 3.47711 11.9997 3.88203C12.2264 4.28696 12.3408 4.7451 12.331 5.20906C12.0408 11.6364 17.104 16.1162 23.5394 15.2286C24.0015 15.1729 24.47 15.2421 24.8963 15.4289C25.3226 15.6157 25.691 15.9134 25.9633 16.2909C26.2355 16.6684 26.4016 17.112 26.4442 17.5754C26.4869 18.0389 26.4045 18.5053 26.2058 18.9262C25.5124 20.2925 24.6064 21.5401 23.5217 22.6223ZM7.37317 6.36179C6.95862 6.77434 6.5769 7.21862 6.23148 7.69056C4.91172 9.54759 4.23089 11.7831 4.29147 14.0605C4.35204 16.3379 5.15075 18.5341 6.56736 20.3183C7.48369 21.4644 8.63345 22.4024 9.94025 23.0699C11.2471 23.7374 12.681 24.1191 14.1467 24.1897C16.2577 24.2585 18.3433 23.7131 20.1504 22.6198C21.9576 21.5265 23.4086 19.9323 24.3275 18.0305C24.3655 17.947 24.3808 17.8548 24.3717 17.7635C24.3627 17.6721 24.3296 17.5848 24.2759 17.5103C24.2223 17.4358 24.1498 17.3768 24.066 17.3394C23.9822 17.3019 23.89 17.2872 23.7987 17.2969C16.1332 18.3657 9.88781 12.8141 10.248 5.14277C10.2513 5.0539 10.2297 4.96588 10.1858 4.88859C10.1418 4.8113 10.0771 4.7478 9.99904 4.70524C9.91971 4.65653 9.82858 4.63044 9.73549 4.62979C9.6424 4.62914 9.55091 4.65396 9.47092 4.70156C8.7073 5.16838 8.00293 5.72584 7.37317 6.36179Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_500">
                <rect
                  width="28"
                  height="28"
                  fill="currentColor"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            onclick="lightMode()"
            class="size-7 text-white duration-500 cursor-pointer flex-shrink-0 lightModeButton dark:-translate-y-7 hover:text-primary"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 17.7083C9.625 17.7083 7.29167 15.375 7.29167 12.5C7.29167 9.625 9.625 7.29167 12.5 7.29167C15.375 7.29167 17.7083 9.625 17.7083 12.5C17.7083 15.375 15.375 17.7083 12.5 17.7083ZM12.5 9.375C10.7812 9.375 9.375 10.7812 9.375 12.5C9.375 14.2187 10.7812 15.625 12.5 15.625C14.2187 15.625 15.625 14.2187 15.625 12.5C15.625 10.7812 14.2187 9.375 12.5 9.375ZM13.5417 4.16667V1.04167C13.5417 0.46875 13.0729 0 12.5 0C11.9271 0 11.4583 0.46875 11.4583 1.04167V4.16667C11.4583 4.73958 11.9271 5.20833 12.5 5.20833C13.0729 5.20833 13.5417 4.73958 13.5417 4.16667ZM13.5417 23.9583V20.8333C13.5417 20.2604 13.0729 19.7917 12.5 19.7917C11.9271 19.7917 11.4583 20.2604 11.4583 20.8333V23.9583C11.4583 24.5312 11.9271 25 12.5 25C13.0729 25 13.5417 24.5312 13.5417 23.9583ZM5.20833 12.5C5.20833 11.9271 4.73958 11.4583 4.16667 11.4583H1.04167C0.46875 11.4583 0 11.9271 0 12.5C0 13.0729 0.46875 13.5417 1.04167 13.5417H4.16667C4.73958 13.5417 5.20833 13.0729 5.20833 12.5ZM25 12.5C25 11.9271 24.5312 11.4583 23.9583 11.4583H20.8333C20.2604 11.4583 19.7917 11.9271 19.7917 12.5C19.7917 13.0729 20.2604 13.5417 20.8333 13.5417H23.9583C24.5312 13.5417 25 13.0729 25 12.5ZM6.98958 6.98958C7.39583 6.58333 7.39583 5.92708 6.98958 5.52083L4.90625 3.4375C4.5 3.03125 3.84375 3.03125 3.4375 3.4375C3.03125 3.84375 3.03125 4.5 3.4375 4.90625L5.52083 6.98958C5.72917 7.19792 5.98958 7.29167 6.26042 7.29167C6.53125 7.29167 6.79167 7.1875 7 6.98958H6.98958ZM21.5729 21.5729C21.9792 21.1667 21.9792 20.5104 21.5729 20.1042L19.4896 18.0208C19.0833 17.6146 18.4271 17.6146 18.0208 18.0208C17.6146 18.4271 17.6146 19.0833 18.0208 19.4896L20.1042 21.5729C20.3125 21.7812 20.5729 21.875 20.8438 21.875C21.1146 21.875 21.375 21.7708 21.5833 21.5729H21.5729ZM4.90625 21.5729L6.98958 19.4896C7.39583 19.0833 7.39583 18.4271 6.98958 18.0208C6.58333 17.6146 5.92708 17.6146 5.52083 18.0208L3.4375 20.1042C3.03125 20.5104 3.03125 21.1667 3.4375 21.5729C3.64583 21.7812 3.90625 21.875 4.17708 21.875C4.44792 21.875 4.70833 21.7708 4.91667 21.5729H4.90625ZM19.4896 6.98958L21.5729 4.90625C21.9792 4.5 21.9792 3.84375 21.5729 3.4375C21.1667 3.03125 20.5104 3.03125 20.1042 3.4375L18.0208 5.52083C17.6146 5.92708 17.6146 6.58333 18.0208 6.98958C18.2292 7.19792 18.4896 7.29167 18.7604 7.29167C19.0312 7.29167 19.2917 7.1875 19.5 6.98958H19.4896Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <!-- Burger Icon -->
        <button class="lg:hidden" @click="toggleDrawer">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style></style>
