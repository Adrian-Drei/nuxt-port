<script lang="ts" setup>
const emits = defineEmits(["mouse-enter"]);

const marquee = ref<any>(null) // Use HTMLElement as a fallback

const pauseMarquee = () => {
  marquee.value?.pause();
};

const resumeMarquee = () => {
  marquee.value?.play();
};
const techStack = [
  {
    technology: "Laravel",
    description:
      "A PHP framework that simplifies web development with built-in tools for security, database management, and routing.",
    image: "/images/laravel.png",
  },
  {
    technology: "Livewire",
    description:
      "A Laravel extension that enables real-time, interactive user interfaces without writing JavaScript.",
    image: "/images/livewire.png",
  },
  {
    technology: "Nuxt",
    description:
      "A JavaScript framework for building high-performance websites with automatic optimizations and SEO-friendly features.",
    image: "/images/nuxt.svg",
  },
];

const handleMouseOver = (tech: object) => {
  emits("mouse-enter", tech);
};
</script>
<template>
  <NuxtMarquee
    :speed="100"
    ref="marquee"
    @touchstart="pauseMarquee"
    @touchend="resumeMarquee"
    style="width: 100%"
    :pauseOnHover="true"
    :style="{ '--tech-count': techStack.length }"
    :gradient="true"
    class="my-5 h-20 overflow-x-hidden"
    :direction="'right'"
  >
    <div
      @mouseenter="handleMouseOver(tech)"
      v-for="(tech, index) in techStack"
      :key="index"
      class="size-16 grayscale flex items-center justify-center hover:grayscale-0 duration-500"
    >
      <img
        class="hover:-translate-y-2 duration-200 object-contain size-full"
        :src="tech.image"
        alt=""
      />
    </div>
  </NuxtMarquee>
</template>
<style scoped>
:deep(.vfm-parent) {
  width: 100% !important;
  display: grid;
  overflow-y: visible;
  justify-content: space-evenly;
  margin-inline: 10px;
  grid-template-columns: repeat(var(--tech-count, 1), minmax(0, 1fr));
}
</style>
