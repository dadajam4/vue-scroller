<template>
  <div>
    <section v-for="pn in 10" :key="pn">
      <h2>section</h2>
      <div>
        <button type="button" @click="toTop">toTop</button>
        <button type="button" @click="toBottom">toBottom</button>
      </div>
      <p v-for="n in 10" :key="n">{{ n }}行目</p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

@Component({
  name: 'index-view',
})
export default class IndexView extends Vue {
  async toTop() {
    await this.$window.toTop().promise;
    console.log('scrolled!!');
  }
  async toBottom() {
    await this.$window.toBottom().promise;
    console.log('scrolled!!');
  }
}
</script>
