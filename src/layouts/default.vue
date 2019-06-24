<template>
  <div class="app">
    <nuxt/>
    <ScrollerDebugger fixed/>
  </div>
</template>

<script lang="ts">
import ScrollerDebugger from '~/components/ScrollerDebugger';
export default {
  components: {
    ScrollerDebugger,
  },
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // padding-top: $nav-height;
}

// .nav {
//   position: fixed;
//   z-index: 32767;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: $nav-height;
//   border-bottom: solid 1px rgba(0, 0, 0, 0.3);
//   background: rgba(255, 255, 255, 0.9);

//   &__link {
//     font-weight: bold;
//     color: #2c3e50;
//     text-decoration: none;

//     &--active,
//     &.nuxt-link-exact-active {
//       color: #42b983;
//       pointer-events: none;
//     }
//   }

//   &__divider {
//     margin: 0 1em;
//   }
// }
</style>
