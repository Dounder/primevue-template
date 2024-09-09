<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.store'
import { PrimeIcons as icons } from '@primevue/core/api'
import { storeToRefs } from 'pinia'
import { getMenuOptions } from '../data/menu-options.data'
import OptionsMenu from './OptionsMenu.vue'

const authStore = useAuthStore()
const { userRoles } = storeToRefs(authStore)
const items = getMenuOptions(userRoles.value || [])
</script>

<template>
  <Menubar :model="items" class="dark:bg-dark-950">
    <template #item="{ item, props, hasSubmenu, root }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'p-2']" />
          <span v-if="item.label">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple class="flex items-center" v-bind="props.action">
        <span :class="[item.icon, 'p-2']" />
        <span v-if="item.label">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
        >
          {{ item.shortcut }}
        </span>
        <i v-if="hasSubmenu" :class="['ml-auto', root ? icons.ANGLE_DOWN : icons.ANGLE_RIGHT]"></i>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto border-none" />
        <OptionsMenu />
      </div>
    </template>
  </Menubar>
</template>
