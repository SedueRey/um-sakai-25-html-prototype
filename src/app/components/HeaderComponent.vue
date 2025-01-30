<script lang="ts" setup>
import { Avatar } from 'primevue'
</script>

<template>
  <header class="headerComponent">
    <span class="siteName">
      PCEO GRADO EN MATEMATICAS Y GRADO EN INGENIERIA INFORMATICA [PLAN 2009] [23/24]
    </span>
    <i class="fa-solid fa-bell"></i>
    <span class="headerComponent__search">
      <i class="fa fa-th" aria-hidden="true" />
      <input type="search" placeholder="Mis asignaturas / Sitios" />
    </span>
    <Avatar
      class="headerComponent__avatar"
      image="/private/img/avatar.png"
      size="normal"
      shape="circle"
    />
  </header>
</template>

<style lang="scss">
.siteName {
  color: var(--p-slate-600);
  display: block;
  font-weight: 700;
  flex-grow: 2;
  padding: 0 0 0 0.25rem;
  max-width: calc(100% - 19rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.headerComponent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 1px solid var(--p-slate-200);
  border-bottom: 1px solid var(--p-slate-200);
  left: var(--sites-menu-width);
  padding: 0.5rem;
  background-color: var(--sakai-bg-color);
  &__avatar {
    cursor: pointer;
  }
  &__search {
    padding: 0.15rem 0.35rem;
    border-radius: 6px;
    border: 1px solid var(--p-slate-300);
    input {
      border: none;
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      padding: 0.25rem;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
