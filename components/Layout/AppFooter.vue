<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <footer class="md:py-20 md:pt-0 pt-20 relative">
    <div
      :class="colorMode.preference === 'dark' ? 'bg-black' : ''"
      class="absolute size-full top-0 left-0 duration-200 -z-30"
    ></div>

    <div
      class="w-full md:w-11/12 mx-auto rounded-3xl relative text-white p-5 md:p-20 overflow-hidden"
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

      <div
        class="flex flex-wrap items-end justify-between lg:flex-row md:px-0 px-6"
      >
        <NuxtLink to="/">
          <img src="/images/logo.png" class="h-24 w-auto mb-3" alt="" />
        </NuxtLink>

        <ul class="font-bold flex md:gap-6 gap-2">
          <li class="text-white duration-200 hover:text-[#ffd454]">
            <NuxtLink to="/#projects">Projects</NuxtLink>
          </li>
          <li class="text-white duration-200 hover:text-[#ffd454]">
            <NuxtLink to="/#about">About</NuxtLink>
          </li>
          <li class="text-white duration-200 hover:text-[#ffd454]">
            <NuxtLink to="/#tech">Tech Stack</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-5" />
      <div
        class="flex flex-col-reverse gap-8 lg:flex-row justify-between items-center"
      >
        <p class="font-medium text-xs mr-10 text-center lg:text-base"></p>

        <div
          class="flex flex-wrap justify-end items-center flex-shrink-0 w-full gap-3 lg:w-[33rem]"
        >
          <div class="flex flex-wrap justify-center items-center gap-5">
            <!-- Messenger -->
            <a href="https://m.me/jamesadrian.merano">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="currentColor"
                class="size-8 duration-200 hover:scale-110 text-white"
              >
                <path
                  d="M 25 2 C 12.300781 2 2 11.601563 2 23.5 C 2 29.800781 4.898438 35.699219 10 39.800781 L 10 48.601563 L 18.601563 44.101563 C 20.699219 44.699219 22.800781 44.898438 25 44.898438 C 37.699219 44.898438 48 35.300781 48 23.398438 C 48 11.601563 37.699219 2 25 2 Z M 27.300781 30.601563 L 21.5 24.398438 L 10.699219 30.5 L 22.699219 17.800781 L 28.601563 23.699219 L 39.101563 17.800781 Z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a href="https://www.facebook.com/jamesadrian.merano">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="size-8 duration-200 hover:scale-110 text-white"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                />
              </svg>
            </a>

            <!-- Telegram -->
            <a href="https://telegram.me/eytrigan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="currentColor"
                class="size-8 duration-200 hover:scale-110 text-white"
              >
                <path
                  d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
                />
              </svg>
            </a>

            <!-- VIBER -->
            <a href="viber://chat?number=+639239052827">
              <svg
                fill="currentColor"
                class="size-8 duration-200 hover:scale-110 text-white"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 52.511 52.511"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M31.256,0H21.254C10.778,0,2.255,8.521,2.255,18.995v9.01c0,7.8,4.793,14.81,12,17.665v5.841
			c0,0.396,0.233,0.754,0.595,0.914c0.13,0.058,0.268,0.086,0.405,0.086c0.243,0,0.484-0.089,0.671-0.259L21.725,47h9.531
			c10.476,0,18.999-8.521,18.999-18.995v-9.01C50.255,8.521,41.732,0,31.256,0z M48.255,28.005C48.255,37.376,40.63,45,31.256,45
			h-9.917c-0.248,0-0.487,0.092-0.671,0.259l-4.413,3.997v-4.279c0-0.424-0.267-0.802-0.667-0.942
			C8.81,41.638,4.255,35.196,4.255,28.005v-9.01C4.255,9.624,11.881,2,21.254,2h10.002c9.374,0,16.999,7.624,16.999,16.995V28.005z"
                    />
                    <path
                      d="M39.471,30.493l-6.146-3.992c-0.672-0.437-1.472-0.585-2.255-0.423c-0.784,0.165-1.458,0.628-1.895,1.303l-0.289,0.444
			c-2.66-0.879-5.593-2.002-7.349-7.085l0.727-0.632h0c1.248-1.085,1.379-2.983,0.294-4.233l-4.808-5.531
			c-0.362-0.417-0.994-0.46-1.411-0.099l-3.019,2.624c-2.648,2.302-1.411,5.707-1.004,6.826c0.018,0.05,0.04,0.098,0.066,0.145
			c0.105,0.188,2.612,4.662,6.661,8.786c4.065,4.141,11.404,7.965,11.629,8.076c0.838,0.544,1.781,0.805,2.714,0.805
			c1.638,0,3.244-0.803,4.202-2.275l2.178-3.354C40.066,31.413,39.934,30.794,39.471,30.493z M35.91,34.142
			c-0.901,1.388-2.763,1.782-4.233,0.834c-0.073-0.038-7.364-3.835-11.207-7.75c-3.592-3.659-5.977-7.724-6.302-8.291
			c-0.792-2.221-0.652-3.586,0.464-4.556l2.265-1.968l4.152,4.776c0.369,0.424,0.326,1.044-0.096,1.411l-1.227,1.066
			c-0.299,0.26-0.417,0.671-0.3,1.049c2.092,6.798,6.16,8.133,9.13,9.108l0.433,0.143c0.433,0.146,0.907-0.021,1.155-0.403
			l0.709-1.092c0.146-0.226,0.37-0.379,0.63-0.434c0.261-0.056,0.527-0.004,0.753,0.143l5.308,3.447L35.91,34.142z"
                    />
                    <path
                      d="M28.538,16.247c-0.532-0.153-1.085,0.156-1.236,0.688c-0.151,0.531,0.157,1.084,0.688,1.235
			c1.49,0.424,2.677,1.613,3.097,3.104c0.124,0.44,0.525,0.729,0.962,0.729c0.09,0,0.181-0.012,0.272-0.037
			c0.531-0.15,0.841-0.702,0.691-1.234C32.405,18.578,30.69,16.859,28.538,16.247z"
                    />
                    <path
                      d="M36.148,22.219c0.09,0,0.181-0.012,0.272-0.037c0.532-0.15,0.841-0.703,0.691-1.234c-1.18-4.183-4.509-7.519-8.689-8.709
			c-0.531-0.153-1.084,0.158-1.235,0.689c-0.151,0.531,0.157,1.084,0.688,1.235c3.517,1,6.318,3.809,7.311,7.328
			C35.311,21.931,35.711,22.219,36.148,22.219z"
                    />
                    <path
                      d="M27.991,7.582c-0.532-0.153-1.085,0.156-1.236,0.689c-0.151,0.531,0.157,1.084,0.688,1.235
			c5.959,1.695,10.706,6.453,12.388,12.416c0.124,0.44,0.525,0.729,0.962,0.729c0.09,0,0.181-0.012,0.272-0.037
			c0.531-0.15,0.841-0.703,0.691-1.234C39.887,14.753,34.613,9.467,27.991,7.582z"
                    />
                  </g>
                </g>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/james-adrian-merano-3932891b2/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
                class="size-8 duration-200 hover:scale-110 text-white"
              >
                <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="staticBackground absolute top-0 left-0 -z-10 size-full"></div>
    </div>
  </footer>
</template>

<style></style>
