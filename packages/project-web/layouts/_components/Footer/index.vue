<script setup lang="ts"></script>

<template>
  <footer class="w-full bg-neutral-300 dark:bg-neutral-900">
    <div
      class="w-full px-4 2xl:max-w-screen-2xl lg:pt-20 lg:px-16 max-w-[85rem] mx-auto py-10 sm:px-6"
    >
      <div class="grid gap-6 grid-cols-2 md:grid-cols-5 sm:grid-cols-3">
        <div class="flex justify-center col-span-full sm:col-span-1 sm:grid">
          <img
            alt="碎碎念"
            class="h-auto rounded-full w-28"
            decoding="async"
            height="1242"
            loading="eager"
            src="https://pic1.imgdb.cn/item/6759352cd0e0a243d4e1b3ab.jpg"
            width="1242"
            draggable="false"
          />
        </div>
        <div class="text-center col-span-1">
          <h3 class="font-bold dark:text-neutral-200 text-neutral-800">Blog</h3>
          <ul class="grid mt-3 space-y-3">
            <li>
              <a
                href="/posts"
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >Posts</a
              >
            </li>
            <li>
              <a
                href="/time"
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >Timeline</a
              >
            </li>
            <li>
              <a
                href="/category"
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >Categories</a
              >
            </li>
            <li>
              <a
                href="/post"
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >About Me</a
              >
            </li>
          </ul>
        </div>
        <div class="text-center col-span-1">
          <h3 class="font-bold dark:text-neutral-200 text-neutral-800">
            Other
          </h3>
          <ul class="grid mt-3 space-y-3">
            <li>
              <a
                href=""
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >RSS</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >Site Map</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-600 dark:text-neutral-400 dark:focus:outline-none dark:ring-zinc-200 outline-none ring-zinc-500 focus-visible:ring hover:text-neutral-500 rounded-lg dark:hover:text-neutral-300 duration-300 gap-x-2 inline-flex transition"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div class="flex justify-center col-span-2 md:mt-0 mt-10">
          <div
            class="hidden md:block -mt-16 max-h-[320px] max-w-[320px] scale-75"
          >
            <img
              alt="碎碎念"
              class="w-full h-full object-cover object-center"
              decoding="async"
              height="889"
              loading="eager"
              src="https://pic1.imgdb.cn/item/6790570cd0e0a243d4f65879.webp"
              width="898"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center text-center">
        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
          © <span id="current-year">2025</span> 碎碎念
          <a href="" target="_blank">京ICP备2024086514号-1</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
