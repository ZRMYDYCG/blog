<script setup lang="ts">
import { ref } from 'vue'

const isNavOpen = ref(false)
const isDarkTheme = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}
</script>

<template>
  <header
    class="flex w-full flex-wrap inset-x-0 md:flex-nowrap md:justify-start sticky text-sm top-4 z-50"
  >
    <nav
      aria-label="Global"
      class="w-full px-4 backdrop-blur-md bg-neutral-100 border border-neutral-100 dark:backdrop-blur-md dark:bg-neutral-800/80 dark:border-neutral-700/40 lg:px-8 md:flex md:items-center md:justify-between md:px-6 mx-2 py-3 relative rounded-[36px] xl:mx-auto"
    >
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="font-bold text-xl dark:focus:outline-none dark:ring-zinc-200 flex-none focus-visible:ring h-[42px] outline-none ring-zinc-500 rounded-lg"
          aria-label="Brand"
        >
          <img
            alt="碎碎念"
            class="w-auto h-full object-cover rounded-full"
            decoding="async"
            height="1242"
            loading="eager"
            src="https://pic1.imgdb.cn/item/6759352cd0e0a243d4e1b3ab.jpg"
            width="1242"
            draggable="false"
          />
        </a>
        <div class="md:hidden ml-auto">
          <button
            @click="toggleNav"
            aria-label="Toggle navigation"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none duration-300 transition h-8 items-center justify-center rounded-full w-8 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none flex font-bold hover:bg-neutral-200 hs-collapse-toggle text-sm"
            type="default"
            aria-controls="navbar-collapse-with-animation"
            data-hs-collapse="#navbar-collapse-with-animation"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              stroke-width="2"
              :class="{ hidden: isNavOpen, 'hs-collapse-open:hidden': true }"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              stroke-width="2"
              :class="{ hidden: !isNavOpen, 'hs-collapse-open:block': true }"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <span class="md:hidden inline-block">
          <button
            @click="toggleTheme"
            aria-label="Theme Toggle"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 duration-300 transition dark:hover:text-orange-300 font-medium group h-8 hover:text-orange-400 hs-dark-mode items-center justify-center rounded-full w-8 flex hover:bg-neutral-200"
            type="button"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              stroke-width="2"
              :class="{
                hidden: isDarkTheme,
                'hs-dark-mode-active:hidden': true
              }"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              stroke-width="2"
              :class="{
                hidden: !isDarkTheme,
                'hs-dark-mode-active:flex': true
              }"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 8a2 2 0 1 0 4 4"></path>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>
        </span>
      </div>
      <div
        :class="{ hidden: !isNavOpen, 'md:block': true }"
        class="duration-300 basis-full grow hs-collapse overflow-hidden transition-all"
        id="navbar-collapse-with-animation"
      >
        <div
          class="flex flex-col gap-x-0 gap-y-4 lg:gap-x-7 md:flex-row md:gap-x-4 md:gap-y-0 md:items-center md:justify-end md:mt-0 md:ps-7 mt-5"
        >
          <a
            href="/posts"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg 2xl:text-base dark:hover:text-neutral-500 font-medium md:py-3 md:text-sm text-base"
            data-astro-prefetch
            id="posts"
            >Posts</a
          >
          <a
            href="/category"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg 2xl:text-base dark:hover:text-neutral-500 font-medium md:py-3 md:text-sm text-base"
            data-astro-prefetch
            id="categories"
            >Category</a
          >
          <a
            href="/time"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg 2xl:text-base dark:hover:text-neutral-500 font-medium md:py-3 md:text-sm text-base"
            data-astro-prefetch
            id="timeline"
            >Timeline</a
          >
          <a
            href="/about"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg 2xl:text-base dark:hover:text-neutral-500 font-medium md:py-3 md:text-sm text-base"
            data-astro-prefetch
            id="posts/about-me"
            >About</a
          >
          <a
            href="/friends"
            class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg 2xl:text-base dark:hover:text-neutral-500 font-medium md:py-3 md:text-sm text-base"
            data-astro-prefetch
            id="friends"
            >Friends</a
          >
          <span class="hidden md:inline-block">
            <button
              @click="toggleTheme"
              aria-label="Theme Toggle"
              class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 duration-300 transition dark:hover:text-orange-300 font-medium group h-8 hover:text-orange-400 hs-dark-mode items-center justify-center rounded-full w-8 flex hover:bg-neutral-200"
              type="button"
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                stroke-width="2"
                :class="{ hidden: isDarkTheme }"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                stroke-width="2"
                :class="{ hidden: !isDarkTheme }"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 8a2 2 0 1 0 4 4"></path>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
