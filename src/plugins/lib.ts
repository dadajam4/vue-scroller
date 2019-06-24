import Vue from 'vue';

import ResizeObserver from 'resize-observer-polyfill';
if (typeof window !== 'undefined' && !window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}

import lib, { VueScrollerOptions } from '~/lib';

Vue.use<VueScrollerOptions>(lib, {
  window: {
    scrollSizeOvserver: {},
  },
});
