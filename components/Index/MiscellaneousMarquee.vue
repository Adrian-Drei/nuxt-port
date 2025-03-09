<script lang="ts" setup>
const emits = defineEmits(["mouse-enter"]);
const colorMode = useColorMode();

const techStack = [
  {
    technology: "Blade",
    description:
      "A simple yet powerful templating engine for Laravel to build dynamic web pages.",
    image: "/images/blade.svg",
  },
  {
    technology: "WordPress",
    description:
      "A popular platform for creating and managing websites without coding.",
    image: "/images/wordpress.webp",
  },
  {
    technology: "Elementor",
    description:
      "A drag-and-drop WordPress builder for designing custom web pages visually.",
    image: "/images/elementor.png",
  },
  {
    technology: "Figma",
    description:
      "A collaborative design tool for creating website and app prototypes.",
    image: "/images/figma.png",
  },
  {
    technology: "Photoshop",
    description:
      "A powerful image editing software for creating and enhancing visuals.",
    image: "/images/photoshop.png",
  },
];

const handleMouseOver = (tech: object) => {
  emits("mouse-enter", tech);
};
</script>
<template>
  <NuxtMarquee
    :speed="100"
    style="width: 100%"
    :pauseOnHover="true"
    :style="{ '--tech-count': techStack.length }"
    :gradient="true"
    :gradientColor="colorMode.preference === 'dark' ? 'black' : 'white'"
    class="my-5 h-20 overflow-x-hidden"
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
