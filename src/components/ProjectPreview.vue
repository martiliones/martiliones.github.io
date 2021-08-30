<template>
  <a class="item relative flex" :href="link" target="_blank">
    <div class="pt-2 pr-5">
      <div
        class="text-3xl opacity-50"
        style="vertical-align: text-bottom; min-width: 1em; min-height: 1em;"
      >
        <component :is="icon" />
      </div>
    </div>
    <div class="flex-auto">
      <div class="text-normal">{{ title }}</div>
      <div class="desc text-sm opacity-50 font-normal">
        {{ description }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'icon'],
};
</script>

<style lang="scss" scoped>
a {
  padding: .8em 1em;
  background: transparent;
  font-size: 1.1rem;
  transition: .2s all ease-out;
  text-decoration: none;
  border-bottom: none !important;
  opacity: .6;

  &:hover {
    background: #88888808;
    opacity: 1;
  }
}
</style>
