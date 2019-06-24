import { PluginObject } from 'vue/types';
import { ScrollerSetting } from '@dadajam4/scroller';
import VueScroller from './components/VueScroller';
export { default as VueScroller } from './components/VueScroller';

declare module 'vue/types/vue' {
  interface Vue {
    $window: VueScroller;
  }
}

export interface VueScrollerOptions {
  window?: Partial<Omit<ScrollerSetting, 'el'>>;
}

const plugin: PluginObject<VueScrollerOptions> = {
  installed: false,

  install(Vue, opts = {}) {
    if (this.installed) return;

    const $window = new VueScroller({
      propsData: {
        target: 'body',
        scrollerSetting: opts.window,
      },
    });

    Vue.prototype.$window = $window;

    this.installed = true;
  },
};

export default plugin;
