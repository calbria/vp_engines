<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{
  name: string;
  dropdown?: string[]; 
}>()

const menu = [
    {
        name: 'home',
        dropdown: null
    },
    {
        name: 'services',
        dropdown: ['repair', 'tuning', 'expertise']
    },
    {
        name: 'projects',
        dropdown: null
    },
    {
        name: 'company',
        dropdown: ['about', 'working-process', 'blog']
    },
    {
        name: 'contacts',
        dropdown: null
    },
]
</script>
<template>

          <li v-if="dropdown" class="menu__item menu__dropdown">
            <div class="menu__link">
              <span>
                {{ t(`common.menu.${name}`) }}
              </span>
            </div>

            <ul class="dropdown">
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" :to="{ name: 'repair' }">
                    <span>
                        {{t('common.submenu-service.repair')}}
                    </span>
                </RouterLink>
              </li>
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" :to="{ name: 'tuning' }">{{
                  t('common.submenu-service.tuning')
                }}
                </RouterLink>
              </li>
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" :to="{ name: 'expertise' }">{{
                  t('common.submenu-service.expertise')
                }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="menu__item">
            <RouterLink class="menu__link" :to="{ name: 'home' }">
              <span>
                {{ t('common.menu.home') }}
              </span>
            </RouterLink>
          </li>
        
</template>
<style scoped lang='scss'>


</style>