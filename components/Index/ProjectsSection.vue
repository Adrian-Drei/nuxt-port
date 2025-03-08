<script lang="ts" setup>
const containerRef = ref(null);
const activeIndex = ref(0) as any;
const swiper = useSwiper(containerRef);

const projectsContents = [
  {
    title: "LionsPrideRX",
    tech: "Vue, Nuxt, Laravel, Tailwind CSS",
    link: "https://lionspriderx.com/",
    description:
      "A telehealth platform where users can log in, consult with a doctor via messaging, receive prescriptions, and order male enhancement drugs.",
    imgUrl: "/images/projects/34.png",
  },
  {
    title: "TotalMaleRx Blogs",
    tech: "Wordpress",
    link: "https://www.totalmalerx.com/blog",
    description:
      "A blog covering men's health topics, telehealth advancements, and expert advice on treatments, including male enhancement solutions.",
    imgUrl: "/images/projects/33.png",
  },
  {
    title: "TotalMaleRx",
    tech: "Vue, Nuxt, Laravel, Tailwind CSS",
    link: "https://totalmalerx.com/",
    description:
      "A telehealth platform where users can log in, consult with a doctor via messaging, receive prescriptions, and order male enhancement drugs.",
    imgUrl: "/images/projects/32.png",
  },
  {
    title: "SizeBiotic",
    tech: "Tailwind, Alpine, Laravel, Livewire, Tailwind CSS",
    link: "https://staging.sizebiotic.com/enhancements/sizebiotic/",
    description:
      "An online pharmacy where users can browse and purchase male enhancement drugs with ease, ensuring a discreet and convenient shopping experience.",
    imgUrl: "/images/projects/25.png",
  },
  {
    title: "Zentra Wellness Landing Page",
    tech: "Tailwind, Alpine, Laravel, Livewire, Tailwind CSS",
    link: "https://zentrawellness.com/zen1/calm-&-energize",
    description:
      "An online pharmacy where users can browse and purchase male enhancement drugs with ease, ensuring a discreet and convenient shopping experience.",
    imgUrl: "/images/projects/24.png",
  },
  {
    title: "Zentra Wellness",
    tech: "Tailwind, Alpine, Laravel, Livewire, Tailwind CSS",
    link: "https://zentrawellness.com/",
    description:
      "An online pharmacy where users can browse and purchase male enhancement drugs with ease, ensuring a discreet and convenient shopping experience.",
    imgUrl: "/images/projects/23.png",
  },
  {
    title: "Ascend Landing Page",
    tech: "Tailwind, Alpine, Laravel, Livewire, Tailwind CSS",
    link: "https://ascndformen.com/lp1/ascnd-youth/",
    description:
      "An online pharmacy where users can browse and purchase male enhancement drugs with ease, ensuring a discreet and convenient shopping experience.",
    imgUrl: "/images/projects/22.png",
  },
  {
    title: "Ascend",
    tech: "Tailwind, Alpine, Laravel, Livewire, Tailwind CSS",
    link: "https://ascndformen.com/",
    description:
      "An online pharmacy where users can browse and purchase male enhancement drugs with ease, ensuring a discreet and convenient shopping experience.",
    imgUrl: "/images/projects/21.png",
  },
  {
    title: "Lexcode PH",
    tech: "Wordpress, Elementor",
    link: "https://ph.lexcode.com/",
    description:
      "A local business website for Lexcode, built with WordPress and Elementor. It features a responsive design, SEO optimization, and a user-friendly layout to showcase services, contact details, and company information effectively.",
    imgUrl: "/images/projects/20.png",
  },
  {
    title: "Mines",
    tech: "React",
    link: "https://engradrian.github.io/mines/",
    description:
      "This React JS project features a grid-based game where players uncover hidden gems while avoiding mines. Earn diamonds to increase the price, with the current multiplier displayed in the upper right. Set your bet and track your balance in the upper left. Reset your balance to 1,000 if needed. The project utilizes local storage to save game settings and balance for a seamless user experience.",
    imgUrl: "/images/projects/19.png",
  },
  {
    title: "Walkclub",
    tech: "CSS, HTML, JavaScript, Google analytics",
    link: "https://engradrian.github.io/walkclub/",
    description:
      "Walkclub is a user-friendly app designed to turn daily walks into a source of income. Developed as my first project with Itechno, the app features a banner swiper section highlighting current offers. Additionally, it incorporates interactive elements such as a straightforward how to start guide, a benefits section, and a shoe display with swipe navigation for exploring various footwear options and details.",
    imgUrl: "/images/projects/18.png",
  },
  {
    title: "Online Casino Website",
    tech: "React",
    link: "https://engradrian.github.io/onlinecasino/",
    description:
      "A simple front-end interface of an online gaming casino built using React.",
    imgUrl: "/images/projects/17.png",
  },
  {
    title: "Viet Website",
    tech: "CSS, HTML, JavaScript",
    link: "https://engradrian.github.io/newsite/",
    description: "A simple Vietnamese landing page website.",
    imgUrl: "/images/projects/16.png",
  },
  {
    title: "Winner Picker",
    tech: "CSS, HTML, JavaScript",
    link: "https://engradrian.github.io/draw/",
    description:
      "This project selects a winner from the users every day at 8 pm. It features a dynamic moving background implemented with JavaScript, creating an engaging visual experience. Additionally, a confetti effect is triggered when the winner is announced at 8 pm, adding a festive and celebratory element to the draw.",
    imgUrl: "/images/projects/15.png",
  },
  {
    title: "Blissful Bites",
    tech: "React",
    link: "https://engradrian.github.io/blissfulbites/",
    description:
      "This is just a simple front-end interface of a restaurant website built using React",
    imgUrl: "/images/projects/14.png",
  },
  {
    title: "Movies",
    tech: "React",
    link: "https://engradrian.github.io/movies/",
    description:
      "This is just a simple front-end interface of a movie website built using React",
    imgUrl: "/images/projects/13.png",
  },
  {
    title: "Winwin",
    tech: "CSS, HTML, JavaScript, Google Analytics, Adjust SDK",
    link: "https://engradrian.github.io/winwin/",
    description:
      "JavaScript played a key role in integrating third-party scripts like Google Analytics and the Adjust SDK, enabling interactive features such as button clicks and event tracking. SEO optimization was implemented through meta tags, and image optimization, including the use of the webp format, was employed for faster loading. The site also features third-party integrations for live chat functionality (LiveChat). Social media icons were linked to respective profiles, and security measures were taken to ensure the secure loading of external scripts using HTTPS. The implementation of a favicon enhances brand recognition in the browser tab.",
    imgUrl: "/images/projects/12.png",
  },
  {
    title: "Blackjack",
    tech: "React",
    link: "https://engradrian.github.io/blackjack/",
    description:
      "Introducing a React-based Blackjack game app with local storage integration, this web application offers a straightforward and enjoyable experience. The goal is to provide users with a classic card game, where players aim to reach a card value of 21 without exceeding it. With local storage, the game ensures that progress is saved, allowing for easy resumption of play.",
    imgUrl: "/images/projects/11.png",
  },
  {
    title: "Notes",
    tech: "React",
    link: "https://engradrian.github.io/notes/",
    description:
      "This is a basic note-taking app created with React that uses local storage. It provides a simple and fuss-free interface for jotting down, managing, and persisting your notes. The app allows easy creation, editing, and deletion of notes, offering a straightforward solution for efficient note management",
    imgUrl: "/images/projects/10.png",
  },
  {
    title: "Network",
    tech: "CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL",
    link: "https://network29.pythonanywhere.com/",
    description:
      "I created a social network using Django, where users can make posts, follow other users, and like posts. This project helped me understand the intricacies of building a large-scale web application, including managing user-generated content, building a scalable data model, and implementing user-to-user interactions.",
    imgUrl: "/images/projects/9.jpg",
  },
  {
    title: "Commerce",
    tech: "CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL",
    link: "https://commerce29.pythonanywhere.com/",
    description:
      "I built an e-commerce site using Django, where users can browse products, add them to their cart, and complete a purchase. This project helped me understand the complexities of building a real-world web application, including managing user data, integrating with third-party APIs, and handling payments.",
    imgUrl: "/images/projects/8.jpg",
  },
  {
    title: "Budget Tracker",
    tech: "React",
    link: "https://engradrian.github.io/budget-tracker/",
    description:
      "This app, built with React.js, is a handy budget tracker. It keeps tabs on your current expenses and smartly uses local storage to remember your data. So, even the page is reloaded, the budget details stay right where there. Simple, practical, and user-friendly.",
    imgUrl: "/images/projects/7.png",
  },
  {
    title: "Mail",
    tech: "CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL",
    link: "https://mail01.pythonanywhere.com/",
    description:
      "Mail involved building a simple email client using Django, where users can send and receive emails, reply to them, and archive them. Through this project, I gained valuable experience in building interactive web applications with real-time functionality, including working with websockets and implementing email functionality using simple mail transfer protocol.",
    imgUrl: "/images/projects/6.jpg",
  },
  {
    title: "Quizzical",
    tech: "React",
    link: "https://engradrian.github.io/quizzical/",
    description:
      "This Scrimba Frontend Career Path final solo challenge involved creating a quiz app from a provided Figma design. Implemented using React, React Hooks, HTML, and CSS, the project fetched quiz data from the Open Trivia Database API. Notable problem-solving included ensuring correct display of special characters and randomizing answer orders.s",
    imgUrl: "/images/projects/4.png",
  },
  {
    title: "Workout",
    tech: "CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL",
    link: "https://engrdrei.pythonanywhere.com/",
    description:
      "I developed a website app that tracks exercise routines and uses the Django framework and SQL database. Before using the website, users must register and log in. You can add routines on the home page, and when you go to a particular routine, it will prompt you for the name of the exercise, the number of sets, the number of repetitions per set, the time per set, and the time to rest. The first exercise in the program will begin automatically when you click the play button below the description div, and it will continue until all of the exercises in the routine have finished.",
    imgUrl: "/images/projects/3.jpg",
  },
  {
    title: "Wiki",
    tech: "CSS, HTML, Bootstrap, Python, Django",
    link: "https://adrian0129.pythonanywhere.com/",
    description:
      "I created a simple wiki using Django, a Python-based web framework. This project allowed me to understand how to build a dynamic web application from scratch, where users can create new pages, edit existing ones, and search for pages. Through this project, I learned how to use Django to manage user authentication, create dynamic templates, and interact with a database.",
    imgUrl: "/images/projects/2.jpg",
  },
  {
    title: "Search",
    tech: "CSS, HTML, JavaScript, Bootstrap",
    link: "https://searchpage.github.io/",
    description:
      "I recreated the Google search results page using HTML and CSS. This project taught me how to design and implement a complex user interface using modern web technologies, and helped me improve my attention to detail and problem-solving skills.",
    imgUrl: "/images/projects/1.jpg",
  },
];

const projectsContent = computed(() => projectsContents[activeIndex.value]);

onMounted(() => {
  if (swiper.instance.value) {
    swiper.instance.value.on("slideChange", () => {
      activeIndex.value = swiper.instance.value?.activeIndex;
    });
  }
});
</script>

<template>
  <div id="projects" class="px-4 py-20">
    <div
      class="w-full relative max-w-6xl mx-auto rounded-[40px] border border-[#E8E8EB] bg-[#F5F5F7] px-4 py-10 duration-200 dark:bg-[#141414] dark:border-[#080808] dark:text-white md:px-24"
    >
      <Transition name="fade" mode="out-in">
        <div
          class="text-center mb-10 space-y-3"
          v-if="projectsContent"
          :key="activeIndex"
        >
          <h2
            class="font-bold text-2xl mb-3 md:text-4xl h-[1.15em] smb-10 bg-gradient-to-r from-primaryDark to-primary inline-block text-transparent bg-clip-text"
          >
            {{ projectsContent["title"] }}
          </h2>
          <p>
            Built With:
            <span class="text-primary">{{ projectsContent["tech"] }}</span>
          </p>
          <p class="text-sm md:text-base mb-3">
            {{ projectsContent["description"] }}
          </p>
          <a :href="projectsContent['link']" target="_blank">
            <button
              class="btn-primary group flex mt-3 mx-auto btn button bg-gradient-to-r from-primaryDark to-primary rounded-xl p-3 text-white"
            >
              <svg
                class="size-7"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.6 122.88"
                style="enable-background: new 0 0 122.6 122.88"
                fill="currentColor"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                  />
                </g>
              </svg>
              <p
                class="group-hover:max-w-52 group-hover:ml-2 overflow-hidden max-w-0 duration-200 whitespace-nowrap"
              >
                Try {{ projectsContent["title"] }}
              </p>
            </button>
          </a>
        </div>
      </Transition>
      <swiper-container
        ref="containerRef"
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        class="mySwiper h-64 mb-3"
        thumbs-swiper=".mySwiper2"
        space-between="10"
        effect="coverflow"
        :grab-cursor="true"
        :centered-slides="true"
        slides-per-view="auto"
        coverflow-effect-rotate="50"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="true"
      >
        <swiper-slide v-for="project in projectsContents">
          <img :src="project['imgUrl']" />
        </swiper-slide>
      </swiper-container>

      <swiper-container
        class="mySwiper2 !h-24"
        :space-between="10"
        :slides-per-view="5"
        :free-mode="true"
        :watch-slides-progress="true"
        :breakpoints="{
          320: { slidesPerView: 4, spaceBetween: 5 },
          570: { slidesPerView: 6, spaceBetween: 10 },
          950: { slidesPerView: 8, spaceBetween: 15 },
          1280: { slidesPerView: 10, spaceBetween: 20 }, // Large screens
        }"
      >
        <swiper-slide v-for="project in projectsContents">
          <img :src="project['imgUrl']" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
}

swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper {
  width: 100%;
}

.mySwiper2 {
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
  border: 2px solid #ff6c21;
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
