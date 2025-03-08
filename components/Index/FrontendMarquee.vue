<script lang="ts" setup>
const emits = defineEmits(["mouse-enter"]);

const techStack = [
  {
    technology: "Alpine JS",
    description:
      "A lightweight JavaScript framework for adding simple interactivity to web pages.",
    image: "/images/alpine.svg",
  },
  {
    technology: "CSS",
    description:
      "A styling language used to design and layout web pages beautifully.",
    image: "/images/css.png",
  },
  {
    technology: "HTML",
    description:
      "The standard language for creating and structuring web pages.",
    image: "/images/html.png",
  },
  {
    technology: "Javascript",
    description:
      "A programming language that makes websites interactive and dynamic.",
    image: "/images/javascript.png",
  },
  {
    technology: "React",
    description:
      "A JavaScript library for building fast and interactive user interfaces.",
    image: "/images/react.svg",
  },
  {
    technology: "Tailwind",
    description:
      "A utility-first CSS framework that simplifies styling with pre-built classes.",
    image: "/images/tailwind.png",
  },
  {
    technology: "Vue",
    description:
      "A progressive JavaScript framework for building modern web applications.",
    image: "/images/vue.png",
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
