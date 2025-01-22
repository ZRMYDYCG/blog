import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export function useMarkdownRenderer() {
  let buttonId = 0

  const md = new MarkdownIt({
    highlight: function (str, lang) {
      let highlighted = str
      if (lang && hljs.getLanguage(lang)) {
        try {
          highlighted = hljs.highlight(str, {
            language: lang,
            ignoreIllegals: true
          }).value
        } catch (__) {
          highlighted = md.utils.escapeHtml(str)
        }
      } else {
        highlighted = md.utils.escapeHtml(str)
      }

      // 为代码块添加复制按钮
      const uniqueId = `code-${buttonId++}`
      return `<div class="code-block"><pre class="hljs"><code class="${uniqueId}">${highlighted}</code></pre><button class="copy-btn" data-clipboard-target=".${uniqueId}">复制</button></div>`
    }
  })

  return {
    md
  }
}
