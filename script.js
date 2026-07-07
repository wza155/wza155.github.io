const posts = [
  {
    id: "front-end-notes",
    title: "一次前端重构之后，我重新理解了简单",
    category: "技术",
    date: "2026-06-28",
    readTime: "6 分钟",
    summary:
      "重构不只是把代码摆整齐，更像是重新确认系统里哪些复杂度真的值得存在。",
    tags: ["前端", "重构", "工程"],
    content: [
      "我过去很容易把重构理解成一次漂亮的整理：换目录、抽组件、改命名，然后期待系统自然变好。后来才发现，真正让代码变清楚的，不是更精巧的结构，而是更诚实的边界。",
      "这次重构里最有效的动作，是把页面里互相偷看状态的部分拆开。数据流变短之后，测试也变短了；测试变短之后，需求变动时的心理负担也小了很多。",
      "简单不是少写代码，而是让每一段代码只承担它应该承担的重量。这个判断很朴素，但每次做对都很值。"
    ]
  },
  {
    id: "slow-writing",
    title: "慢写作：给想法一点沉淀的时间",
    category: "写作",
    date: "2026-06-12",
    readTime: "4 分钟",
    summary:
      "并不是所有想法都需要立刻发布。有些句子要放几天，才会露出真正的形状。",
    tags: ["写作", "笔记", "习惯"],
    content: [
      "我越来越喜欢把草稿留在一个中间状态。它既不是废稿，也不是成稿，而是一块正在醒面的面团。每天看一眼，偶尔添一句，更多时候只是删掉一句太用力的话。",
      "慢写作的好处，是它允许观点被生活重新校准。当天很确定的判断，隔天也许会变得松动；原本平淡的细节，过几天反而成为文章真正的入口。",
      "写得慢一点，不等于想得迟钝。很多时候，它只是拒绝把第一反应误认为最终答案。"
    ]
  },
  {
    id: "city-walk",
    title: "周日下午的城市散步路线",
    category: "生活",
    date: "2026-05-31",
    readTime: "5 分钟",
    summary:
      "从旧书店到河边，再到一家靠窗的小咖啡馆，城市会在步行里慢慢变亲近。",
    tags: ["城市", "散步", "咖啡"],
    content: [
      "一条好的散步路线，最好不要太满。它需要一个可以停下来的广场，一段不急着过完的树荫路，以及一个能让人自然坐下来的地方。",
      "我喜欢从旧书店开始，因为书店会给下午一个安静的起点。出来以后沿河走二十分钟，风会把脑子里过密的念头吹散一些。",
      "最后坐到靠窗的位置，点一杯不太甜的饮品。看人来人往的时候，会觉得城市不是巨大机器，而是一串可以被记住的片段。"
    ]
  },
  {
    id: "reading-system",
    title: "我的阅读系统：少一点收藏，多一点回访",
    category: "阅读",
    date: "2026-05-16",
    readTime: "7 分钟",
    summary:
      "收藏夹很容易制造拥有知识的错觉，真正改变理解的是反复回访和重新表达。",
    tags: ["阅读", "知识管理", "复盘"],
    content: [
      "以前我很在意保存：好文章要存，金句要摘，书单要列。后来发现保存得越多，回看的比例越低。收藏夹没有变成第二大脑，更像一个越来越沉的仓库。",
      "现在我的做法简单很多：读完只留下三个东西。一个问题，一个我不同意的地方，一个能马上用到的表达。这个约束让我读得更慢，但也更容易真的吸收。",
      "知识管理的重点不是管理知识，而是管理自己和知识再次相遇的方式。能回访，才有可能内化。"
    ]
  },
  {
    id: "toolbox",
    title: "最近让我省心的几个工具",
    category: "技术",
    date: "2026-04-29",
    readTime: "3 分钟",
    summary:
      "好工具不是让人显得更忙，而是把重复、犹豫和切换成本悄悄拿走。",
    tags: ["工具", "效率", "工作流"],
    content: [
      "我判断一个工具值不值得留下，标准变得越来越具体：它有没有减少我每天重复做的动作？有没有让我更少在窗口之间来回找东西？有没有让我更快进入真正要做的事？",
      "最近留下来的工具都有一个共同点：存在感不强。它们不要求我改变太多习惯，只是在关键时刻补上一个小台阶。",
      "效率工具最好的状态，是用久了以后几乎忘记它存在，但一离开就明显觉得手边少了什么。"
    ]
  },
  {
    id: "winter-tea",
    title: "冬天适合整理桌面，也适合整理心情",
    category: "生活",
    date: "2026-04-10",
    readTime: "4 分钟",
    summary:
      "把桌面清空一点，很多搁置的事情也会跟着显出轮廓。",
    tags: ["日常", "整理", "生活"],
    content: [
      "整理桌面这件事很小，却有一种奇怪的心理暗示。纸张归位，线缆收好，杯子洗干净，人的注意力也像被轻轻扶正。",
      "我不会追求极简。桌面上仍然会有常用的笔、正在读的书和一只杯子。重点不是空无一物，而是每个留下来的东西都知道自己为什么在那里。",
      "生活里的秩序感，大概也是这样。不需要完美，只需要足够让人重新开始。"
    ]
  }
];

const state = {
  category: "全部",
  query: ""
};

const postGrid = document.querySelector("#postGrid");
const filters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const archiveList = document.querySelector("#archiveList");
const readerSection = document.querySelector("#reader");
const closeReader = document.querySelector("#closeReader");
const themeToggle = document.querySelector("#themeToggle");
const featuredWrap = document.querySelector("#featuredWrap");
const readerRelated = document.querySelector("#readerRelated");
const readerTags = document.querySelector("#readerTags");
const readProgress = document.querySelector("#readProgress");
const toTop = document.querySelector("#toTop");

const CATEGORY_THEME = {
  "技术": { from: "#2f6f67", to: "#1f554e", dot: "#2f6f67" },
  "写作": { from: "#c4903f", to: "#9c6b27", dot: "#c4903f" },
  "生活": { from: "#b56a6a", to: "#8f4f4f", dot: "#b56a6a" },
  "阅读": { from: "#5d6aa8", to: "#414f86", dot: "#5d6aa8" }
};

function catTheme(category) {
  return CATEGORY_THEME[category] || {
    from: "var(--accent)",
    to: "var(--accent-strong)",
    dot: "var(--muted)"
  };
}

function formatDate(dateText) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateText));
}

function getCategories() {
  return ["全部", ...new Set(posts.map((post) => post.category))];
}

function matchesPost(post) {
  const text = [post.title, post.summary, post.category, ...post.tags]
    .join(" ")
    .toLowerCase();
  const queryMatch = text.includes(state.query.trim().toLowerCase());
  const categoryMatch = state.category === "全部" || post.category === state.category;
  return queryMatch && categoryMatch;
}

function renderFilters() {
  filters.innerHTML = getCategories()
    .map(
      (category) => `
        <button class="filter-button ${category === state.category ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function renderPosts() {
  const visiblePosts = posts.filter(matchesPost);
  const c = (post) => catTheme(post.category);

  postGrid.innerHTML = visiblePosts.length
    ? visiblePosts
        .map(
          (post) => {
            const color = c(post);
            return `
            <article class="post-card reveal" tabindex="0" role="button" data-post-id="${post.id}" aria-label="阅读 ${post.title}" style="--cat:${color.dot}; --cat-from:${color.from}; --cat-to:${color.to}">
              <div class="post-cover" aria-hidden="true"></div>
              <div>
                <div class="post-meta">${formatDate(post.date)} · ${post.readTime} · <span class="cat">${post.category}</span></div>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
              </div>
              <div class="tag-row">
                ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </article>`;
          }
        )
        .join("")
    : `<p class="empty">没有找到相关文章，换个关键词试试。</p>`;

  observeReveal(postGrid.querySelectorAll(".post-card"));
}

function renderArchive() {
  archiveList.innerHTML = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((post) => {
      const color = catTheme(post.category);
      return `
        <article class="archive-item reveal" tabindex="0" role="button" data-post-id="${post.id}" aria-label="阅读 ${post.title}" style="--cat:${color.dot}">
          <span class="archive-date">${formatDate(post.date)}</span>
          <h3>${post.title}</h3>
          <span class="archive-category">${post.category}</span>
        </article>`;
    })
    .join("");

  observeReveal(archiveList.querySelectorAll(".archive-item"));
}

function renderFeatured() {
  const featured = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];
  const color = catTheme(featured.category);

  featuredWrap.innerHTML = `
    <article class="featured-card reveal" tabindex="0" role="button" data-post-id="${featured.id}" aria-label="阅读 ${featured.title}" style="--cat-from:${color.from}; --cat-to:${color.to}">
      <div class="featured-cover" aria-hidden="true"></div>
      <div class="featured-body">
        <p class="eyebrow">精选 · ${featured.category}</p>
        <h3>${featured.title}</h3>
        <p>${featured.summary}</p>
        <div class="tag-row">
          ${featured.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <span class="featured-read">阅读全文 →</span>
      </div>
    </article>`;

  observeReveal(featuredWrap.querySelectorAll(".featured-card"));
}

function renderRelated(post) {
  const related = posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  readerRelated.innerHTML = related.length
    ? `<h3>相关文章</h3>
       <div class="related-grid">
         ${related
           .map(
             (item) => `
             <article class="related-card" tabindex="0" role="button" data-post-id="${item.id}" aria-label="阅读 ${item.title}">
               <h4>${item.title}</h4>
               <span>${formatDate(item.date)} · ${item.readTime}</span>
             </article>`
           )
           .join("")}
       </div>`
    : "";
}

function openPost(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;

  document.querySelector("#readerMeta").textContent = `${formatDate(post.date)} · ${post.readTime} · ${post.category}`;
  document.querySelector("#readerTitle").textContent = post.title;
  document.querySelector("#readerTags").innerHTML = post.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  document.querySelector("#readerContent").innerHTML = post.content
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  renderRelated(post);

  readerSection.hidden = false;
  readerSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closePost() {
  readerSection.hidden = true;
  document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handlePostActivation(event) {
  const target = event.target.closest("[data-post-id]");
  if (!target) return;
  openPost(target.dataset.postId);
}

function handleKeyboardActivation(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest("[data-post-id]");
  if (!target) return;
  event.preventDefault();
  openPost(target.dataset.postId);
}

function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  localStorage.setItem("blog-theme", mode);
}

function initTheme() {
  const savedTheme = localStorage.getItem("blog-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

function observeReveal(nodes) {
  nodes.forEach((node) => revealObserver.observe(node));
}

function updateProgress() {
  if (readerSection.hidden) {
    readProgress.classList.remove("active");
    readProgress.style.width = "0";
    return;
  }
  const rect = readerSection.getBoundingClientRect();
  const total = readerSection.offsetHeight - window.innerHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
  const ratio = total > 0 ? scrolled / total : 0;
  readProgress.classList.add("active");
  readProgress.style.width = (ratio * 100).toFixed(2) + "%";
}

function updateToTop() {
  toTop.hidden = window.scrollY < 700;
}

function applyTagFilter(tag) {
  state.query = tag;
  searchInput.value = tag;
  closePost();
  renderPosts();
  document
    .querySelector("#posts")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function activateFromEvent(event) {
  const postEl = event.target.closest("[data-post-id]");
  if (postEl) openPost(postEl.dataset.postId);
}

function tagFromEvent(event) {
  const tagEl = event.target.closest(".tag");
  if (tagEl) {
    applyTagFilter(tagEl.textContent);
    return true;
  }
  return false;
}

function handleContainerClick(event) {
  if (tagFromEvent(event)) return;
  activateFromEvent(event);
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderPosts();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPosts();
});

postGrid.addEventListener("click", handleContainerClick);
postGrid.addEventListener("keydown", handleKeyboardActivation);
archiveList.addEventListener("click", handleContainerClick);
archiveList.addEventListener("keydown", handleKeyboardActivation);
featuredWrap.addEventListener("click", handleContainerClick);
readerTags.addEventListener("click", tagFromEvent);
readerRelated.addEventListener("click", activateFromEvent);
closeReader.addEventListener("click", closePost);
themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});

window.addEventListener(
  "scroll",
  () => {
    updateProgress();
    updateToTop();
  },
  { passive: true }
);

initTheme();
renderFilters();
renderFeatured();
renderPosts();
renderArchive();
updateProgress();
updateToTop();
