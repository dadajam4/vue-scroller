import './scroller-debugger.scss';
import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { VueScroller } from '~/lib';

const DISPLAY_PROPS = [
  'containerWidth',
  'containerHeight',
  'isDestroyed',
  'isPending',
  'isReady',
  'isRunning',
  'lastAxis',
  'lastDirection',
  'lastXDirection',
  'lastYDirection',
  'nowScrolling',
  'scrollEnabled',
  'scrollWidth',
  'scrollHeight',
  'scrollableX',
  'scrollableY',
  'state',
  'scrollTop',
  'scrollBottom',
  'scrollLeft',
  'scrollRight',
];

@Component({
  name: 'scroller-debugger',
  inject: {
    scroller: {
      from: 'scroller',
      default() {
        return this.$window;
      },
    },
  },
})
export default class ScrollerDebugger extends Vue {
  scroller!: VueScroller;

  @Prop({ type: Boolean }) fixed!: boolean;

  protected render(h: CreateElement): VNode {
    const $rows = DISPLAY_PROPS.map(PROP => {
      const value = this.scroller[PROP];

      return h(
        'tr',
        {
          key: PROP,
        },
        [h('th', {}, PROP), h('td', {}, value)],
      );
    });

    const $table = h('table', {}, [h('tbody', {}, $rows)]);

    return h(
      'div',
      {
        staticClass: 'scroller-debugger',
        class: {
          'scroller-debugger--fixed': this.fixed,
        },
      },
      [$table],
    );
  }
}
