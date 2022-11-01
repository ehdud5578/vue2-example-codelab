<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.fullpath"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.fullpath"></router-view>
  </div>
</template>
<script>
export default {};
</script>
