<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}
h2 {
  font-size: 16px;
  font-weight: 500;
}
</style>
