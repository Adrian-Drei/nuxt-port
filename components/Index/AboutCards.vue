<script lang="ts" setup>
import { useMouseInElement } from "@vueuse/core";
import { useTemplateRef, defineProps } from "vue";
const colorMode = useColorMode();

const props = defineProps({
  cardType: {
    type: Number,
  },
  selected: {
    type: String,
  },
  isLogo: {
    type: Boolean,
    default: false,
  },
});

const target = useTemplateRef<HTMLDivElement>("target");
const child = useTemplateRef<HTMLDivElement>("child");
const maxDistance = 300;
const minDistance = 50;
const { elementX, elementY, elementHeight, elementWidth } =
  useMouseInElement(target);
const distanceX = computed(() => {
  return elementX.value - elementWidth.value / 2;
});
const distanceY = computed(() => {
  return elementY.value - elementHeight.value / 2;
});
const distance = computed(() => {
  return Math.sqrt(distanceX.value ** 2 + distanceY.value ** 2);
});
const intensity = computed(() => {
  return Math.min(Math.max((distance.value - minDistance) / maxDistance, 0), 1);
});
const moveX = computed(() => {
  return (distanceX.value / 6) * intensity.value;
});
const moveY = computed(() => {
  return (distanceY.value / 8) * intensity.value;
});

watch(
  () => distance.value,
  () => {
    window.requestAnimationFrame(() => {
      if (child.value) {
        if (distance.value > maxDistance) {
          child.value.style.transform = `translate3d(0, 0, 0)`;
          child.value.style.filter = "grayscale(100%)";
          return;
        }
        child.value.style.filter = "grayscale(0%)";
        child.value.style.transform = `translate(${moveX.value}px, ${moveY.value}px)`;
      }
    });
  }
);

const svgName = computed(() => {
  if (props.selected === "about") {
    return "me";
  }
  if (props.selected === "work") {
    return "work";
  }
  if (props.selected === "education") {
    return "school";
  }
});

const svgUrl = computed(() => {
  return `/svgs/${svgName.value}-${props.cardType}.svg`;
});
</script>
<template>
  <div ref="target">
    <!-- :class="isLogo ? 'bg-black' : 'bg-gray-200'" -->
    <div
      :class="{
        'bg-gray-200': isLogo
          ? colorMode.preference === 'dark'
          : colorMode.preference === 'light',
        'bg-charcoal': isLogo
          ? colorMode.preference === 'light'
          : colorMode.preference === 'dark',
      }"
      ref="child"
      class="flex h-24 w-16 border-black border items-center justify-center rounded-xl md:h-36 md:w-24 dark:bg-[#141414] duration-200"
    >
      <Transition v-if="!isLogo" name="blur" mode="out-in">
        <NuxtPicture
          :key="svgUrl"
          :src="svgUrl"
          :imgAttrs="{
            class: 'size-full object-cover',
          }"
        />
      </Transition>
      <Transition v-else name="blur" mode="out-in">
        <NuxtPicture
          :key="svgUrl"
          :src="'/images/logo.png'"
          :imgAttrs="{
            class: 'size-full object-cover',
          }"
        />
      </Transition>
    </div>
  </div>
</template>
<style scoped>
/* Blur Transition */
.blur-enter-active,
.blur-leave-active {
  transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
