<script lang="ts" setup>
const colorMode = useColorMode();

const technology = ref("Technologies I Work With");
const techDescription = ref(
  "A collection of tools and frameworks I use to build modern, high-performance websites and applications."
);

interface Tech {
  technology: string;
  description: string;
}

const handleMouseEnter = (tech: Tech) => {
  technology.value = tech.technology;
  techDescription.value = tech.description;
};
</script>
<template>
  <section
    id="tech"
    :class="colorMode.preference === 'dark' ? 'bg-black text-white' : ''"
    class="pb-20"
  >
    <div class="text-center mx-auto container py-12">
      <Transition name="fade" mode="out-in">
        <div v-if="technology" :key="technology">
          <h2
            class="font-bold text-3xl md:text-6xl mb-10 bg-gradient-to-r from-primaryDark to-primary inline-block text-transparent bg-clip-text h-[1.15em]"
          >
            {{ technology }}
          </h2>
          <p class="text-lg md:text-xl">
            {{ techDescription }}
          </p>
        </div>
      </Transition>
    </div>
    <IndexFrontendMarquee @mouse-enter="handleMouseEnter" />
    <IndexBackendMarquee @mouse-enter="handleMouseEnter" />
    <IndexMiscellaneousMarquee @mouse-enter="handleMouseEnter" />
  </section>
</template>
<style scoped>
:deep(.vfm-parent) {
  width: 100% !important;
  display: grid;
  justify-content: space-evenly;
  margin-inline: 10px;
  grid-template-columns: repeat(var(--tech-count, 1), minmax(0, 1fr));
}
/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
