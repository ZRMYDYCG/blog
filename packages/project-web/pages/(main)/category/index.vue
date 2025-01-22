<script setup lang="ts"></script>

<template>
  <main>
    <section class="px-4 lg:px-8 mx-auto sm:px-6 2xl:max-w-full lg:pt-10 mt-10">
      <div class="md:flex md:justify-between md:items-center flex-wrap">
        <div class="w-full md:w-auto">
          <h1
            class="block dark:text-neutral-200 font-bold lg:text-6xl md:text-5xl text-4xl text-balance text-neutral-800 tracking-tight"
          >
            Categories
          </h1>
          <p
            class="text-neutral-600 dark:text-neutral-400 mt-4 text-lg text-pretty"
          >
            Here are some categories that logan is interested in, including
            Swift, JavaScript, Java, and his life.
          </p>
        </div>
      </div>
    </section>

    <section
      class="px-4 lg:px-8 mx-auto sm:px-6 2xl:max-w-full lg:pt-10 lg:py-14 py-10"
    >
      <div
        class="items-center gap-6 grid lg:grid-cols-3 md:gap-10 sm:grid-cols-2"
      >
        <a
          href="/categories/book"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  Book
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            阅读书籍，摘抄佳句
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              3 posts
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated 3 days ago
            </span>
          </div>
        </a>

        <a
          href="/categories/dev"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  Dev 🐛
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            开发中遇到的问题和解决方法
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              5 posts
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated 1 month ago
            </span>
          </div>
        </a>

        <a
          href="/categories/life"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  My Life 💃
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            柴米油盐，就是生活，养个娃，做个菜，打个游戏，再在沙发墩上跟朋友聊天
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              7 posts
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated 7 hours ago
            </span>
          </div>
        </a>

        <a
          href="/categories/tool"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  Tools 🪜
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            Please don't stop trying anything
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              3 posts
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated 7 months ago
            </span>
          </div>
        </a>

        <a
          href="/categories/vue"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  Vue 🔖
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            The web framework for content-driven websites
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              0 posts
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated today
            </span>
          </div>
        </a>

        <a
          href="/categories/work"
          class="flex justify-between bg-neutral-100 dark:bg-neutral-900/30 flex-col group p-5 rounded-lg shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center justify-center gap-x-4">
              <div class="flex-shrink-0">
                <h3
                  class="text-neutral-600 text-lg dark:group-hover:text-orange-300 dark:text-neutral-300 font-semibold group-hover:text-orange-400 tracking-tight"
                >
                  Work
                </h3>
              </div>
            </div>
          </div>
          <p
            class="dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 text-neutral-500 block min-h-[60px]"
          >
            记录我对工作的一些思考.
          </p>
          <div class="flex gap-x-5 mb-0 mt-2">
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="4" rx="1" width="8" x="8" y="2"></rect>
                <path
                  d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
                ></path>
                <path d="M16 4h2a2 2 0 0 1 1.73 1"></path>
                <path d="M8 18h1"></path>
                <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"></path>
              </svg>
              1 post
            </span>
            <span
              class="items-center dark:group-hover:text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 inline-flex me-2 rounded text-neutral-500 text-xs"
            >
              <svg
                class="h-3 me-1.5 w-3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              updated 16 hours ago
            </span>
          </div>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
