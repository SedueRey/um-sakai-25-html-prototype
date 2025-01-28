import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const siteId: Ref<string | null> = ref(null)
  const getSiteId = computed(() => siteId.value)
  const shouldShowBG = computed(() => siteId.value !== null)
  const isCollapsedSites: Ref<boolean> = ref(false)
  const isCollapsedTools: Ref<boolean> = ref(false)
  const updateSiteId = (id: string) => {
    if (siteId.value !== id) {
      siteId.value = id
    } else {
      siteId.value = null
    }
  }
  return {
    getSiteId,
    shouldShowBG,
    updateSiteId,
    isCollapsedSites,
    isCollapsedTools,
  }
})
