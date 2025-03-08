<script lang="ts" setup>
const props = defineProps({
  selected: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["change-selection"]);

const handleClick = (selection: string) => {
  emits("change-selection", selection);
};

const selectedEducation = ref(0);

type EducationContent = {
  title: string;
  content: (string | { title: string; content: string[] })[];
};

const educationContent: EducationContent[] = [
  {
    title: "College",
    content: [
      "Bachelor of Science in Construction Engineering (BSConE)",
      "Antipolo Institute of Technology",
      "Sitio Cabading. Brgy. San Jose, Antipolo City",
      "2015 to 2020",
    ],
  },
  {
    title: "Highschool",
    content: [
      "Don Antonio De Zuzuarregui Sr. Memorial Academy (DAZSMA)",
      "2010 to 2015",
    ],
  },
  {
    title: "Post-grad",
    content: [
      "CS50's Introduction to Computer Science - edx",
      "HarvardX: CS50's Web Programming with Python and JavaScript - edx",
      "Learn React with Bob Ziroll - scrimba",
    ],
  },
  {
    title: "Certificates",
    content: [
      {
        title: "Tech Industry",
        content: [
          "CS50's Introduction to Computer Science",
          "Hardware Servicing Business Software Application Adobe Photoshop ICT Web Page Design",
        ],
      },
      {
        title: "Construction Industry",
        content: [
          "Masonry (2017)",
          "Tile Setting (2019)",
          "Shielded Metal Arc Welding (2019)",
          "Electrical Installation and Management (2019)",
          "Plumbing (2019)",
        ],
      },
    ],
  },
];

const selectedWork = ref(0);

const workContent = [
  {
    title: "Web Developer",
    company: "Stealth Solutions & Digital Marketing",
    address: "Kingston Tower, Ayala-Alabang, Muntinlupa City",
    date: "March 2024 to Present",
    highlights: [
      "Developed over 100 mid sites using TALL stack.",
      "Built and launched two pharma e-commerce sites with prescription logic based on survey responses using Nuxt and Vue for frontend side.",
      "Implemented Google Pay, Apple Pay, Google Sign-In, and real-time chat for enhanced user experience.",
      "Developed a full-stack web application, SizeBiotic, from scratch.",
      "Collaborated with marketing teams to improve user engagement and sales strategies.",
      "Added new features and optimizations to existing Yii-based websites.",
      "Focused on SEO strategies, particularly for pharma websites, to improve visibility and ranking.",
      "Created a blog site to support content marketing efforts and user education.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Lexcode",
    address: "",
    date: "February 2024 to April 2024",
    highlights: [
      "Designed and implemented a high-converting landing page using WordPress and Elementor.",
      "Collaborated with UI/UX designers to enhance visual appeal and user experience.",
      "Worked with developers and project managers to ensure smooth execution and functionality.",
      "Suggested improvements for better performance and faster loading speeds.",
      "Integrated marketing strategies to optimize engagement and conversions.",
    ],
  },
  {
    title: "Web Developer",
    company: "Itechno Specialist Inc.",
    address: "RCBC Plaza, Ayala Avenue, Makati City",
    date: "May 2023 to January 2024",
    highlights: [
      "Design and implement user interfaces for websites and web applications.",
      "Develop responsive, cross-browser compatible layouts using HTML, CSS, and JavaScript.",
      "Translate design wireframes and mockups into functional code in collaboration with UX/UI designers.",
      "Integrate user-facing elements with server-side logic in collaboration with back-end developers.",
      "Optimize web applications for performance, considering loading times and user experience.",
      "Create dynamic and responsive user interfaces using React, leveraging a component-based architecture for scalability.",
      "Developed a Telegram chatbot showcasing proficiency in bot development, natural language processing, and integration with external APIs.",
      "Integrated a Facebook chatbot using ChatGPT for intelligent and context-aware responses, enhancing customer engagement and support.",
    ],
  },
  {
    title: "Project Manager",
    company:
      "Future Home of Alterations Plus, RowyVilla Construction Co. (RVCC)",
    address: "33 Polaris, Bel-Air Village, Makati City",
    date: "July 2022 to February 2023",
    highlights: [
      "Monitored general contractor’s and subcontractors’ daily manpower count and daily activities.",
      "Prepared and submitted daily accomplishment reports.",
      "Coordinated on-site activities, and relayed problems from the contractors to the owner side and vice versa.",
      "Prepared and conducted meetings with the owner, general contractor, and subcontractors to discuss construction activities and resolve various problems.",
      "Ensured manpower is enough to meet activity schedules.",
      "Met up with neighbor’s representatives to solve issues caused by former contractors and project management.",
      "Sought materials and equipment suppliers for the project.",
    ],
  },
  {
    title: "Project Manager",
    company: "Navotas Hospital Extension, RowyVilla Construction Co. (RVCC)",
    address: "San Jose, Navotas City",
    date: "December 2020 to February 2023",
    highlights: [
      "Monitored general contractor’s daily manpower count.",
      "Monitored general contractor’s daily activities.",
      "Prepared and submitted daily accomplishment reports.",
      "Coordinated on-site activities, and relayed problems from the general contractor to the owner side and vice versa.",
      "Attended meetings together with the owner, hospital admin, and general contractor to discuss construction activities and resolve various problems.",
      "Ensured manpower is enough to meet activity schedules.",
    ],
  },
  {
    title: "Project Manager",
    company:
      "Renovation of Residential House at Dasmariñas Village, RowyVilla Construction Co. (RVCC)",
    address: "Makati, Metro Manila",
    date: "May 2022 to December 2022",
    highlights: [
      "Facilitates roof repair and waterproofing",
      "Facilitates repair of tile flooring",
    ],
  },
  {
    title: "Site Inspector",
    company:
      "Water Tank Project at MWSS Compound, RowyVilla Construction Co. (RVCC)",
    address: "San Juan, Metro Manila",
    date: "March 2021 to June 2021",
    highlights: [
      "Facilitates formworks erection.",
      "Inspected rebars before concrete pouring.",
      "Facilitates and instructs during concrete pouring.",
    ],
  },
  {
    title: "Project-in-Charge",
    company: "SMDC Park Residences, AAMB Construction",
    address: "Sta. Rosa Laguna",
    date: "July 2020 to November 2020",
    highlights: [
      "In charge of the implementation of daily activities on site.",
      "In charge of daily toolbox meetings.",
      "Prepared and submitted project accomplishment reports.",
      "Prepared progress billings and its supporting documents.",
      "Prepared weekly payroll for manpower.",
      "Estimated concrete pouring.",
      "Ensured rebar and formwork is according to plan and meets standards before inspection of consultant.",
      "Determined and monitored materials on site.",
    ],
  },
];
</script>

<template>
  <div>
    <div
      class="z-30 flex mx-auto w-10/12 flex-col overflow-hidden rounded-2xl border-2 border-[#2b2b2b] bg-black duration-200 xs:max-w-screen-xs md:w-full md:max-w-screen-sm dark:bg-white dark:text-black"
    >
      <div
        class="grid text-center text-sm md:text-base h-20 w-full grid-cols-3 gap-1 bg-gradient-to-r from-primaryDark to-primary pt-8 font-medium"
      >
        <div
          @click="$emit('change-selection', 'education')"
          :class="
            props.selected == 'education'
              ? 'bg-slate border-black text-primary font-bold'
              : 'bg-white border-b border-black font-semibold'
          "
          class="flex cursor-pointer items-center justify-center rounded-t-xl border-x border-t"
        >
          EDUCATION
        </div>
        <div
          @click="handleClick('about')"
          :class="
            props.selected == 'about'
              ? 'bg-slate border-black text-primary font-bold'
              : 'bg-white border-b border-black'
          "
          class="flex cursor-pointer items-center justify-center rounded-t-xl border-x border-t"
        >
          ABOUT ME
        </div>
        <div
          @click="handleClick('work')"
          :class="
            props.selected === 'work'
              ? 'bg-slate border-slate text-primary font-bold'
              : 'bg-white border-b border-black'
          "
          class="flex cursor-pointer items-center justify-center rounded-t-xl border-x border-t"
        >
          WORK EXPERIENCES
        </div>
      </div>
      <div class="bg-slate text-black">
        <Transition
          mode="out-in"
          :name="
            props.selected === 'about'
              ? 'fade'
              : props.selected === 'education'
              ? 'slideLeft'
              : 'slideRight'
          "
        >
          <div :key="props.selected">
            <!-- EDUCATION TAB -->
            <div
              v-if="props.selected == 'education'"
              class="flex flex-col md:flex-row"
            >
              <div
                class="h-auto md:w-1/3 flex-shrink-0 space-y-3 bg-slate px-4 py-10 lg:min-h-[620px]"
              >
                <button
                  v-for="(educationContent, index) in educationContent"
                  :key="index"
                  class="cursor-pointer w-full rounded-lg border border-black p-2 duration-500"
                  :class="
                    selectedEducation === index
                      ? 'bg-gradient-to-r from-primary to-primaryDark text-white'
                      : ''
                  "
                  @click="selectedEducation = index"
                >
                  {{ educationContent["title"] }}
                </button>
              </div>
              <div class="h-auto md:w-2/3 flex-shrink-0 bg-white p-5 pl-10">
                <Transition name="fade" mode="out-in">
                  <div
                    v-if="educationContent[selectedEducation]['content']"
                    :key="selectedEducation"
                    class="list-disc space-y-2 duration-500 md:mt-20 h-full"
                  >
                    <div
                      v-for="(highlight, index) in educationContent[
                        selectedEducation
                      ]['content']"
                      :key="index"
                    >
                      <div
                        v-if="
                          typeof highlight === 'object' && highlight['title']
                        "
                      >
                        <p>
                          {{ highlight["title"] }}
                        </p>
                        <ul class="list-disc ml-5 mt-2 mb-5">
                          <li
                            v-for="(subHighlight, index) in highlight[
                              'content'
                            ]"
                            :key="index"
                          >
                            {{ subHighlight }}
                          </li>
                        </ul>
                      </div>
                      <p v-else class="text-center">
                        {{ highlight }}
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <!-- ABOUT TAB -->
            <div
              v-if="props.selected == 'about'"
              x-transition:enter.duration.500ms
              class="bg-slate p-5 lg:min-h-[620px]"
            >
              <h2 class="mb-2 text-2xl font-bold">FRONTEND DEVELOPER</h2>
              <p>
                I have been working as a web developer since 2023, where I have
                gained proficiency in various frameworks and technologies
                including React. As a Construction Engineer with a strong
                interest in technology and software development, my experience
                includes overseeing the design and construction of various
                infrastructure projects. My technical skills encompass CSS, C,
                JavaScript, Python, SQL, Django, Bootstrap, HTML, React, and
                Flask. I find satisfaction in tackling the complexities of
                creating scalable and efficient software solutions. While
                leveraging my expertise in construction engineering, I am now
                actively pursuing a career transition to further enhance my
                skills and excel in the field of software development.
              </p>
            </div>

            <!-- WORK TAB -->
            <div
              v-if="props.selected == 'work'"
              class="flex flex-col-reverse md:flex-row lg:min-h-[620px]"
            >
              <div class="h-auto md:w-2/3 flex-shrink-0 bg-white p-5 pl-10">
                <Transition name="fade" mode="out-in">
                  <div
                    v-if="workContent[selectedWork]['highlights']"
                    :key="selectedWork"
                    class=""
                  >
                    <div class="mb-5">
                      <p>
                        <strong>{{
                          workContent[selectedWork]["company"]
                        }}</strong>
                        <span v-if="workContent[selectedWork]['address']">
                          - {{ workContent[selectedWork]["address"] }}
                        </span>
                      </p>
                      <p>
                        {{ workContent[selectedWork]["date"] }}
                      </p>
                    </div>
                    <ul class="list-disc space-y-1 duration-500 ml-5">
                      <li
                        v-for="(highlight, index) in workContent[selectedWork][
                          'highlights'
                        ]"
                        :key="index"
                      >
                        {{ highlight }}
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
              <div
                class="h-auto md:w-1/3 flex-shrink-0 space-y-3 bg-slate px-4 py-10"
              >
                <button
                  v-for="(workContent, index) in workContent"
                  :key="index"
                  class="cursor-pointer w-full rounded-lg border border-black p-2 duration-500"
                  :class="
                    selectedWork === index
                      ? 'bg-gradient-to-r from-primary to-primaryDark text-white'
                      : ''
                  "
                  @click="selectedWork = index"
                >
                  {{ workContent["title"] }}
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Left Animation */
.slideLeft-enter-active,
.slideLeft-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slideLeft-enter-from {
  transform: translateX(100%);
}
.slideLeft-leave-to {
  transform: translateX(100%);
}

/* Slide Right Animation */
.slideRight-enter-active,
.slideRight-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slideRight-enter-from {
  transform: translateX(-100%);
}
.slideRight-leave-to {
  transform: translateX(-100%);
}
</style>
