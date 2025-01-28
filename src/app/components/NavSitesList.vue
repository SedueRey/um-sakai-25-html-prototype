<script lang="ts" setup>
import { computed, onMounted, ref, type Ref } from 'vue'
import { getRandomSites, type Site } from '@/contexts/sites/siteList'
import SiteItem from './SiteItem.vue'
import { useUIStore } from '../stores/ui'
const props = defineProps<{
  title: string
  iconClass: string
}>()

const uiStore = useUIStore()
const sites: Ref<Site[]> = ref([])

const shouldShowSites = computed(() => !uiStore.isCollapsedSites && sites.value.length > 0)

onMounted(() => {
  sites.value = getRandomSites(Math.floor(Math.random() * 8) + 1)
})
</script>

<template>
  <div class="navSiteListCollapsed" v-if="uiStore.isCollapsedSites">
    <i class="navSiteListCollapsed__icons" :class="props.iconClass" />
    <span class="navSiteListCollapsed__title">
      {{ props.title }}
    </span>
  </div>
  <div class="navSiteList" v-else>
    <span class="navSiteList__title">
      <span class="navSiteList__tag">{{ sites.length }}</span>
      {{ props.title }}
    </span>
    <ul v-if="shouldShowSites" class="navSiteList__siteList">
      <li v-for="(site, index) in sites" :key="index">
        <SiteItem :site="site" :show-icons="props.title.toLocaleLowerCase() === 'favoritos'" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.navSiteList {
  padding: 1rem;
  width: var(--sites-menu-width);
  z-index: 2;
  &__title {
    display: block;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.09rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--p-slate-600);
    padding: 0 0 0.25rem 0;
    margin: 0 0 0.35rem 0;
  }
  &__siteList {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
.navSiteListCollapsed {
  display: block;
  margin: 1.25rem 0;
  text-align: center;
  &__icons {
    display: block;
    font-size: 1.5rem;
  }
  &__title {
    font-family: Verdana, sans-serif;
    display: block;
    margin: 0.5rem 0;
    font-size: 0.65rem;
  }
}
</style>
