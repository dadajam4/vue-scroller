<template>
  <div>
    <button
      type="button"
      v-for="i in scrollStoppers"
      :key="`stopper-${i}`"
      @click="() => { removeScrollStopper(i) }"
      v-scrollstop
    >stopper {{ i }}</button>
    <section v-for="pn in 10" :key="pn">
      <h2>section</h2>
      <div>
        <button type="button" @click="toTop">toTop</button>
        <button type="button" @click="toBottom">toBottom</button>
        <button type="button" @click="pushScrollStopper">pushScrollStopper</button>
        <button type="button" @click="clearScrollStopper">clearScrollStopper</button>
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
  scrollStoppersId: number = 0;
  scrollStoppers: number[] = [];

  pushScrollStopper() {
    const id = this.scrollStoppersId + 1;
    this.scrollStoppersId = id;
    this.scrollStoppers.push(id);
  }

  removeScrollStopper(id: number) {
    const index = this.scrollStoppers.indexOf(id);
    if (index !== -1) {
      this.scrollStoppers.splice(index, 1);
    }
  }

  clearScrollStopper(id: number) {
    this.scrollStoppers = [];
    this.scrollStoppersId = 0;
  }

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
