<template>
  <header class="header">
    <router-link
      aria-current="page" to="/"
      class="logo router-link-active router-link-exact-active absolute lg:fixed m-6
        select-none outline-none"
      focusable="false"
    >
      <Logo/>
    </router-link>
    <nav class="nav">
      <div class="spacer"></div>
      <div class="right">
        <a href="https://dev.to/martiliones">
          <span class="<md:hidden">Blog</span>
          <BlogIcon class="md:hidden"/>
        </a>
        <router-link to="Projects">
          <span class="<md:hidden">Projects</span>
          <ProjectsIcon class="md:hidden"/>
        </router-link>
        <a href="https://telegram.me/martiliones_blog" target="_blank" title="Telegram">
          <TelegramIcon/>
        </a>
        <a href="https://github.com/martiliones" target="_blank" title="GitHub">
          <GithubIcon/>
        </a>
        <a @click="switchTheme">
          <SunIcon v-if="isDarkTheme"/>
          <MoonIcon v-else/>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/icons/Logo.vue';
import TelegramIcon from '@/components/icons/Telegram.vue';
import GithubIcon from '@/components/icons/Github.vue';
import ProjectsIcon from '@/components/icons/Projects.vue';
import BlogIcon from '@/components/icons/Blog.vue';
import MoonIcon from '@/components/icons/Moon.vue';
import SunIcon from '@/components/icons/Sun.vue';

export default {
  components: {
    Logo,
    TelegramIcon,
    GithubIcon,
    ProjectsIcon,
    BlogIcon,
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      isDarkTheme: (
        localStorage.getItem('dark')
        || window.matchMedia('(prefers-color-scheme: dark)').matches
      ),
    };
  },
  mounted() {
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  },
  methods: {
    switchTheme() {
      if (this.isDarkTheme) {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('dark');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark', true);
      }

      this.isDarkTheme = !this.isDarkTheme;
    },
  },
};
</script>

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
  color: var(--nav-link);
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
  color: var(--logo);
}
</style>
