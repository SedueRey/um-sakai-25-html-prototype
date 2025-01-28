<script lang="ts" setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import NavSitesList from '../components/NavSitesList.vue'
import ToolList from '../components/ToolList.vue'
import { useUIStore } from '../stores/ui'
import { computed, type Ref } from 'vue'

const uiStore = useUIStore()

const sitesClass: Ref<string> = computed(() => (uiStore.isCollapsedSites ? 'is-collapsed' : ''))
const toolsClass: Ref<string> = computed(() => (uiStore.isCollapsedTools ? 'is-collapsed' : ''))

const toggleSites = () => {
  if (document.body) {
    document.body.classList.toggle('is-collapsed-sites')
  }
  uiStore.isCollapsedSites = !uiStore.isCollapsedSites
}
</script>

<template>
  <HeaderComponent />
  <main class="sitesView">
    <nav class="sitesView__listContainer" :class="sitesClass">
      <img
        src="/private/img/SelloUMU-positivo.png"
        class="sitesView__logoCollapsed"
        v-if="uiStore.isCollapsedSites"
      />
      <img src="/private/img/LogosimboloUMU-positivo.png" class="sitesView__logo" v-else />
      <span class="sitesView__toggleSites" @click="toggleSites">
        <span v-if="!uiStore.isCollapsedSites">Ocultar sitios</span>
        <i class="fa-solid fa-chevron-left" v-if="!uiStore.isCollapsedSites" />
        <i class="fa-solid fa-chevron-right" v-else />
      </span>
      <NavSitesList title="Recientes" icon-class="fa-regular fa-clock" />
      <NavSitesList title="Favoritos" icon-class="fa-duotone fa-star" />
    </nav>
    <nav class="sitesView__toolsContainer" :class="toolsClass">
      <ToolList />
    </nav>
    <section class="sitesView__toolContainer"></section>
  </main>
  <div class="sitesView__bg" v-if="uiStore.shouldShowBG" />
</template>

<style lang="scss">
.sitesView {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  min-height: 100vh;
  &__logo {
    display: block;
    max-width: var(--sites-menu-width);
  }
  &__logoCollapsed {
    display: block;
    max-width: calc(var(--sites-menu-width) - 2rem);
    margin: 0.5rem;
  }
  &__toggleSites {
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    justify-content: flex-end;
    text-align: right;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--p-slate-50);
    background-color: var(--p-slate-500);
    padding: 0.5rem;
    border-radius: 6px;
    margin: 0.25rem;
  }
  &__toolsContainer {
    padding: 3rem 0 0 0;
  }
  &__listContainer {
    background-color: var(--p-slate-50);
    border-right: 1px solid var(--p-slate-200);
  }
  &__bg {
    background-color: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: var(--sites-menu-width);
  }
}
body.is-collapsed-sites {
  .sitesView__listContainer {
    padding: 0.25rem 0;
  }
  .sitesView__toggleSites {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 0.5rem;
  }
}
</style>
