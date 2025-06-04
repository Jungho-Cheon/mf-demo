<template>
  <div>
    <h1>Vue App 1</h1>
    <p>마이크로 프론트엔드 데모 - Vue 앱 1</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  props: {
    name: String,
    mountParcel: Function,
    singleSpa: Object,
  },
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style> 