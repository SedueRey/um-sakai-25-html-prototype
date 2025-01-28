<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import { getRandomToolList, type Tool } from '@/contexts/tools/toolList'

const tools: Ref<Tool[]> = ref([])

onMounted(() => {
  tools.value = getRandomToolList(Math.floor(Math.random() * 30) + 1)
})
</script>

<template>
  <nav class="toolList">
    <ul v-if="tools.length > 0" class="toolItem__list">
      <li v-for="(tool, index) in tools" :key="index">
        <div
          class="toolItem"
          :title="tool.name"
          :class="`${tool.classes}${index === 0 ? ' icon-active' : ''}`"
        >
          <i class="fa-light fa-calendar-days" />
          <span class="toolItem__title">{{ tool.name }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.toolList {
  padding: 0.75rem 0.5rem;
}
.toolItem {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 0.95rem;
  font-weight: 400;
  gap: 0.5rem;
  margin: 0 0 0.75rem 0;
  padding: 0.15rem 0.5rem;
  user-select: none;
  &.icon-active {
    font-weight: 600;
    background-color: var(--p-slate-50);
    border-radius: 6px;
    border: 1px solid var(--p-slate-200);
    font-weight: 600;
    padding: 0.5rem;
  }
  &__title {
    max-width: 11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
