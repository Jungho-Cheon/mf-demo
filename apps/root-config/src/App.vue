<template>
  <div class="root-config">
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex gap-4">
        <router-link to="/react1" class="hover:text-gray-300">React App 1</router-link>
        <router-link to="/react2" class="hover:text-gray-300">React App 2</router-link>
        <router-link to="/vue1" class="hover:text-gray-300">Vue App 1</router-link>
        <router-link to="/vue2" class="hover:text-gray-300">Vue App 2</router-link>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <div id="single-spa-application"></div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style> 