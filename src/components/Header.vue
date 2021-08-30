<template>
  <header class="header">
    <router-link
      aria-current="page" to="/"
      class="logo router-link-active router-link-exact-active absolute lg:fixed m-6
        select-none outline-none"
      focusable="false"
    >
      <img src="@/assets/logo.svg" alt="logo">
    </router-link>
    <nav class="nav">
      <div class="spacer"></div>
      <div class="right">
        <a href="https://dev.to/martiliones">
          <span class="<md:hidden">Blog</span>
          <img src="@/assets/blog.svg" class="md:hidden"/>
        </a>
        <router-link to="Projects">
          <span class="<md:hidden">Projects</span>
          <img src="@/assets/projects.svg" class="md:hidden"/>
        </router-link>
        <a href="https://telegram.me/martiliones_blog" target="_blank" title="Telegram">
          <img src="@/assets/telegram.svg"/>
        </a>
        <a href="https://github.com/martiliones" target="_blank" title="GitHub">
          <img src="@/assets/github.svg"/>
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: rgb(229, 231, 235);
  transition: opacity .2s ease;
  opacity: .6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > *{
  margin: auto;
}

.logo {
  width: 8rem;
}
</style>
