<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0">Projects</h1>
    <p class="opacity-50 !-mt-6 italic">List of projects that I am proud of</p>
  </div>

  <div class="prose m-auto">
    <div v-for="(category, index) in projects" :key="index">
      <h4 class="mt-10 font-bold">{{ category.name }}</h4>
      <div class="project-grid py-2 -mx-3 gap-2">
        <ProjectPreview
          v-for="(project, index) in category.list"
          :key="index"
          :title="project.name"
          :description="project.description"
          :link="project.link"
          :icon="project.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/ProjectPreview.vue';
import LibTelegramIcon from '@/components/icons/LibTelegram.vue';
import IconSetCreatorIcon from '@/components/icons/IconSetCreator.vue';
import OpenStudyIcon from '@/components/icons/OpenStudy.vue';
import I18nLibTgIcon from '@/components/icons/I18nLibTg.vue';
import AntiFloodIcon from '@/components/icons/AntiFlood.vue';

export default {
  components: {
    ProjectPreview,
  },
  data() {
    return {
      projects: [
        {
          name: 'Latest',
          list: [
            {
              name: 'LibTelegram',
              description: 'Modern JavaScript framework for building Telegram Bots',
              link: 'https://github.com/libtelegram/libtelegram',
              icon: LibTelegramIcon,
            },
            {
              name: 'icon-set-creator',
              description: 'CLI for generating React-Native app icons',
              link: 'https://github.com/martiliones/icon-set-creator',
              icon: IconSetCreatorIcon,
            },
            {
              name: 'Open Study',
              description: 'Open Source Education app for android and ios',
              link: 'https://github.com/OpenQazaqstan/OpenStudy',
              icon: OpenStudyIcon,
            },
          ],
        },
        {
          name: 'LibTelegram Ecosystem',
          list: [
            {
              name: 'LibTelegram',
              description: 'Modern JavaScript framework for building Telegram Bots',
              link: 'https://github.com/libtelegram/libtelegram',
              icon: LibTelegramIcon,
            },
            {
              name: 'i18n',
              description: 'Internationalization library for LibTelegram',
              link: 'https://github.com/libtelegram/i18n',
              icon: I18nLibTgIcon,
            },
            {
              name: 'Anti Flood',
              description: 'Plugin to resolve telegram limits',
              link: 'https://github.com/libtelegram/anti-flood',
              icon: AntiFloodIcon,
            },
          ],
        },
        {
          name: 'Tools',
          list: [
            {
              name: 'icon-set-creator',
              description: 'CLI for generating React-Native app icons',
              link: 'https://github.com/martiliones/icon-set-creator',
              icon: IconSetCreatorIcon,
            },
          ],
        },
        {
          name: 'Apps',
          list: [
            {
              name: 'Open Study',
              description: 'Open Source Education app for android and ios',
              link: 'https://github.com/OpenQazaqstan/OpenStudy',
              icon: OpenStudyIcon,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,.5fr));
}

.prose h4 {
  color: inherit;
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: .5em;
  line-height: 1.5;
}
</style>
