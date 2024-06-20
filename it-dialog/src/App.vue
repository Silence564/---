<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">

html, body {
  margin: 0px !important;
  padding: 0px !important;
}

html{
    box-sizing: border-box;
}

*, *::before, *::after{
    box-sizing: inherit;
}

@import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap');
#app {
  font-family: "Wix Madefor Display", sans-serif;
}
</style>
