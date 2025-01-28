<script lang="ts" setup>
import { computed } from 'vue'
import type { Site } from '@/contexts/sites/siteList'
import ToolList from './ToolList.vue'
import { useUIStore } from '../stores/ui'

const props = withDefaults(
  defineProps<{
    site: Site
    showIcons?: boolean
  }>(),
  {
    showIcons: false,
  },
)

const uiStore = useUIStore()
const className = computed(() => (props.site.isFavorite ? 'fav' : ''))
const showTools = () => {
  uiStore.updateSiteId(props.site.siteID)
}
</script>

<template>
  <div
    class="siteItem"
    :class="className"
    :title="props.site.fullSiteName"
    :data-site-id="props.site.siteID"
  >
    <span class="siteItem__icons" v-if="showIcons">
      <i class="fa-solid fa-star" v-if="props.site.isFavorite" />
      <i class="fa-regular fa-star" v-else />
    </span>
    <span class="siteItem__title">{{ props.site.siteName }}</span>
    <span class="siteItem__toggleTools" @click="showTools">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <div class="siteItem__tools" v-if="uiStore.getSiteId === props.site.siteID">
      <ToolList />
    </div>
  </div>
</template>

<style lang="scss">
.siteItem {
  font-weight: 300;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0 0 0.5rem 0;
  &__title {
    font-size: 0.9rem;
    flex-grow: 2;
  }
  &__icons {
    font-size: 0.875rem;
  }
  &__tools {
    border: 1px solid var(--p-slate-200);
    background-color: #fff;
    padding: 0.25rem;
    border-radius: 6px;
    position: absolute;
    left: var(--sites-menu-width);
    margin: -1.5rem 0 0 0;
    z-index: 3;
  }
}
</style>
