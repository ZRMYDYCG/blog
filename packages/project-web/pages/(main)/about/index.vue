<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl bg-neutral-200 dark:bg-neutral-800 selection:bg-yellow-400 selection:text-neutral-700"
    data-astro-cid-37fxchfa
  >
    <main>
      <section
        class="mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 max-w-6xl pb-12 pt-8"
      >
        <div class="mt-4 shadow-none sm:mt-0 sm:shadow-sm">
          <div class="max-w-6xl">
            <img
              alt="About Me"
              class="w-full object-cover rounded-tl-sm rounded-tr-sm"
              decoding="async"
              draggable="false"
              height="1272"
              loading="lazy"
              src="https://pic4.zhimg.com/v2-7f5e7ec5909bc70c37badc889ed52089_r.jpg"
              width="1920"
            />
          </div>
          <div
            class="lg:px-14 md:px-10 px-0 py-6 sm:bg-neutral-100 sm:dark:bg-neutral-900/30 sm:px-6"
          >
            <div class="mb-10">
              <h2
                class="font-bold text-neutral-800 dark:text-neutral-300 lg:text-5xl md:text-4xl text-3xl text-balance tracking-tight"
              >
                关于我
              </h2>
              <ol class="items-center flex mt-2 whitespace-nowrap">
                <li class="items-center inline-flex">
                  <a
                    href="/categories/life"
                    class="items-center flex text-sm focus:outline-none focus:text-orange-500 hover:text-orange-500 text-orange-400"
                    >我的生活 💃</a
                  >
                  <svg
                    class="flex-shrink-0 dark:text-neutral-600 mx-2 size-5 text-neutral-500"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13L10 3"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </li>
                <li
                  class="items-center focus:outline-none inline-flex dark:focus:text-neutral-400 dark:hover:text-neutral-400 dark:text-neutral-500 focus:text-neutral-600 hover:text-neutral-600 text-neutral-500 text-sm"
                >
                  7个月前
                  <svg
                    class="flex-shrink-0 dark:text-neutral-600 mx-2 size-5 text-neutral-500"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13L10 3"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </li>
                <li
                  class="items-center focus:outline-none inline-flex dark:focus:text-neutral-400 dark:hover:text-neutral-400 dark:text-neutral-500 focus:text-neutral-600 hover:text-neutral-600 text-neutral-500 text-sm"
                  aria-current="page"
                >
                  2分钟阅读
                </li>
              </ol>
            </div>
            <article
              class="dark:prose-invert max-w-none prose prose-blog sm:prose-lg"
              v-html="renderedMarkdown"
            ></article>
            <div
              class="grid gap-y-5 max-w-screen-lg md:mt-14 mt-10 mx-auto sm:flex sm:gap-y-0 sm:items-center sm:justify-between"
            >
              <div
                class="flex-wrap flex gap-x-2 gap-y-1 sm:flex-nowrap sm:gap-y-0 sm:items-center"
              >
                <span
                  class="items-center focus:outline-none inline-flex bg-neutral-400/30 dark:bg-neutral-700/60 dark:text-neutral-300 focus-visible:outline-none focus-visible:ring font-medium gap-x-1.5 outline-none px-3 py-1.5 rounded-lg text-neutral-700 text-xs"
                  >生活</span
                >
              </div>
              <!-- <div class="flex items-center justify-end gap-x-1.5">
                  <Bookmark />
                  <div class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div>
                  <div class="inline-flex">
                      <SocialShare :pageTitle="post.data.title" />
                  </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMarkdownRenderer } from '~/hooks/useMarkdownRenderer'
import ClipboardJS from 'clipboard'

// 使用Markdown渲染器
const { md } = useMarkdownRenderer()

const markdownContent = `
# 关于我

**你好**，我叫张伟，是一名有着多年经验的前端开发工程师。我对编程充满热情，尤其擅长使用JavaScript、Vue.js和React.js进行开发。通过不断学习和实践，我不断提升自己的技术能力，致力于创建高效、可维护的代码。

除了编程，我还热爱阅读和旅行。阅读不仅帮助我拓宽视野，还激发了我的创造力。旅行则让我有机会体验不同的文化和风景，这些经历极大地丰富了我的人生。此外，我还对摄影有着浓厚的兴趣，通过相机记录下旅途中的美好瞬间。

在业余时间，我还积极参与开源项目，与社区中的其他开发者交流经验，分享自己的知识。我相信开放和分享是推动技术进步的重要力量。

如果你对我的项目或技术有任何问题，欢迎随时联系我。期待与你的交流和合作！

\`\`\`javascript
console.log('Hello, World!')
\`\`\`
`

// 渲染Markdown内容
const renderedMarkdown = ref(md.render(markdownContent))

// 初始化剪贴板功能
const initClipboard = () => {
  // 选择所有的复制按钮
  document.querySelectorAll('.copy-btn').forEach((button) => {
    let timeoutId: number | undefined // 用于存储定时器ID

    // 为每个按钮创建一个ClipboardJS实例
    const clipboard = new ClipboardJS(button)

    clipboard
      .on('success', function (e) {
        // 清除之前的定时器（如果有）
        if (timeoutId) clearTimeout(timeoutId)

        // 显示提示信息
        timeoutId = setTimeout(() => {
          alert('复制成功！')
        }, 2000)
      })
      .on('error', function (e) {
        // 处理错误
        alert('复制失败！')
      })
  })
}

// 在组件挂载时初始化剪贴板功能
onMounted(() => {
  initClipboard()
})
</script>

<style>
.code-block {
  position: relative;
  margin: 1em 0;
  padding: 1em;
  border-radius: 5px;
  overflow: auto;
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.copy-btn:hover {
  background-color: #0056b3;
}

.hljs {
  font-size: 14px;
}
</style>
