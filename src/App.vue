<template>
  <Header/>

  <main class="px-7 py-10">
    <router-view/>

    <Footer/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
:root {
  --c-bg:#fff;
  --c-scrollbar:#eee;
  --c-scrollbar-hover:#bbb;
  --fg: #555;
  --fg-deep: #222;
  --fg-deeper: #000;
  --logo: #2F80ED;
}

html {
  background-color: var(--c-bg);
  --tw-text-opacity: 1;
  color: rgba(55,65,81, var(--tw-text-opacity));
  overflow: scroll;
  -webkit-text-size-adjust: 100%;
  font-family: "Inter", Inter var,system-ui,
    -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,
    Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
    !important;
  line-height: 1.5;
}

html.dark {
  --c-bg: #050505;
  --c-scrollbar: #111;
  --c-scrollbar-hover: #222;
  --fg: #bbb;
  --fg-deep: #ddd;
  --fg-deeper: #FFF;
  --logo: #eee;
  --nav-link: rgb(229, 231, 235);
}
</style>
