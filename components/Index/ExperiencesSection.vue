<script lang="ts" setup>
const selected = ref("about");
const colorMode = useColorMode();

const svgBases: Record<"education" | "about" | "work", string> = {
  education: "school",
  about: "me",
  work: "work",
};

const selectedSvgs = computed(() => {
  const base = svgBases[selected.value as keyof typeof svgBases] || "work";
  return [1, 2, 3, 4].map((num) => `/svgs/${base}-${num}.svg`);
});

const changeSelection = (selection: string) => {
  selected.value = selection;
};
</script>

<template>
  <section
    :class="
      colorMode.preference === 'dark'
        ? 'bg-black'
        : ''
    "
    id="about"
    ref="bottleCardContainer"
    class="relative flex items-center justify-center overflow-x-hidden py-40"
  >
    <div
      class="z-10 absolute left-1/2 mx-auto grid w-max -translate-x-1/2 grid-cols-12 gap-3 md:gap-7"
    >
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div ref="cardType1">
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="4" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl text-white duration-200 md:h-36 md:w-24 dark:bg-white dark:text-black"
        >
          <IndexAboutCards
            :is-logo="true"
            :selected="selected"
            :card-type="2"
          />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="flex h-24 w-16 items-center justify-center rounded-xl md:h-36 md:w-24"
        ></div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="flex h-24 w-16 items-center justify-center rounded-xl md:h-36 md:w-24"
        ></div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType4 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="3" />
        </div>
        <div
          class="cardType1 bottleCard flex h-24 w-16 items-center justify-center rounded-xl text-white duration-200 md:h-36 md:w-24 dark:bg-white dark:text-black"
        >
          <IndexAboutCards
            :is-logo="true"
            :selected="selected"
            :card-type="2"
          />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center gap-3 md:gap-7">
        <div
          class="cardType2 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="1" />
        </div>
        <div
          class="cardType3 bottleCard flex h-24 w-16 items-center justify-center rounded-xl duration-200 md:h-36 md:w-24 dark:bg-[#141414]"
        >
          <IndexAboutCards :selected="selected" :card-type="2" />
        </div>
        <div
          class="flex h-24 w-16 items-center justify-center rounded-xl md:h-36 md:w-24"
        ></div>
        <div
          class="flex h-24 w-16 items-center justify-center rounded-xl md:h-36 md:w-24"
        ></div>
      </div>
    </div>
    <IndexExperiencesOverlay
      :selected="selected"
      @change-selection="changeSelection"
    />
    <!-- <IndexExperiencesOverlay :selected="selected" @change-selection="changeSelection" /> -->
  </section>
</template>
