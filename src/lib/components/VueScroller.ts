import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Scroller, {
  ScrollerSetting,
  ScrollerObserver,
  ScrollerState,
  ScrollAxis,
  ScrollDirection,
  ScrollXDirection,
  ScrollYDirection,
  ScrollerScrollOptions,
  ScrollResult,
  ScrollPosition,
  ScrollToElementTarget,
  ScrollerScrollToElementOptions,
  ScrollToSideTargets,
  ScrollStopper,
} from '@dadajam4/scroller';

const INITIAL_VALUE: any = null;

@Component({
  name: 'v-scroller',
})
export default class VueScroller extends Vue implements ScrollerObserver {
  @Prop({
    type: String,
    default: 'self',
  })
  target!: 'self' | 'body';
  @Prop({ type: Object }) scrollerSetting?: Omit<ScrollerSetting, 'el'>;

  private _scroller!: Scroller;
  readonly containerHeight: number = INITIAL_VALUE;
  readonly containerWidth: number = INITIAL_VALUE;
  readonly isDestroyed: boolean = INITIAL_VALUE;
  readonly isPending: boolean = INITIAL_VALUE;
  readonly isReady: boolean = INITIAL_VALUE;
  readonly isRunning: boolean = INITIAL_VALUE;
  readonly lastAxis: ScrollAxis = INITIAL_VALUE;
  readonly lastDirection: ScrollDirection = INITIAL_VALUE;
  readonly lastXDirection: ScrollXDirection = INITIAL_VALUE;
  readonly lastYDirection: ScrollYDirection = INITIAL_VALUE;
  readonly nowScrolling: boolean = INITIAL_VALUE;
  readonly scrollEnabled: boolean = INITIAL_VALUE;
  readonly scrollHeight: number = INITIAL_VALUE;
  readonly scrollWidth: number = INITIAL_VALUE;
  readonly scrollableX: boolean = INITIAL_VALUE;
  readonly scrollableY: boolean = INITIAL_VALUE;
  readonly state: ScrollerState = INITIAL_VALUE;
  readonly scrollBottom: number = INITIAL_VALUE;
  readonly scrollLeft: number = INITIAL_VALUE;
  readonly scrollRight: number = INITIAL_VALUE;
  readonly scrollTop: number = INITIAL_VALUE;

  ready(): Promise<void> {
    return this._scroller.ready();
  }

  start(): Promise<void> {
    return this._scroller.start();
  }

  stop(): void {
    return this._scroller.stop();
  }

  destroy() {
    return this._scroller.destroy();
  }

  update(): void {
    return this._scroller.update();
  }

  toJSON(): ScrollerObserver {
    return this._scroller.toJSON();
  }

  toString(): string {
    return this._scroller.toString();
  }

  cancel() {
    return this._scroller.cancel();
  }

  by(
    diffX: number,
    diffY: number,
    options?: ScrollerScrollOptions,
  ): ScrollResult {
    return this._scroller.by(diffX, diffY, options);
  }

  to(
    scrollPosition: Partial<ScrollPosition>,
    options?: ScrollerScrollOptions,
  ): ScrollResult {
    return this._scroller.to(scrollPosition, options);
  }

  toElement(
    target: ScrollToElementTarget,
    options?: ScrollerScrollToElementOptions,
  ) {
    return this._scroller.toElement(target, options);
  }

  toSide(
    targets: ScrollToSideTargets,
    options?: ScrollerScrollOptions,
  ): ScrollResult {
    return this._scroller.toSide(targets, options);
  }

  toTop(options?: ScrollerScrollOptions) {
    return this._scroller.toTop(options);
  }

  toRight(options?: ScrollerScrollOptions) {
    return this._scroller.toRight(options);
  }

  toBottom(options?: ScrollerScrollOptions) {
    return this._scroller.toBottom(options);
  }

  toLeft(options?: ScrollerScrollOptions) {
    return this._scroller.toLeft(options);
  }

  toLeftTop(options?: ScrollerScrollOptions) {
    return this._scroller.toLeftTop(options);
  }

  toLeftBottom(options?: ScrollerScrollOptions) {
    return this._scroller.toLeftBottom(options);
  }

  toRightTop(options?: ScrollerScrollOptions) {
    return this._scroller.toRightTop(options);
  }

  toRightBottom(options?: ScrollerScrollOptions) {
    return this._scroller.toRightBottom(options);
  }

  pushScrollStopper(stopper: ScrollStopper) {
    return this._scroller.pushScrollStopper(stopper);
  }

  removeScrollStopper(stopper: ScrollStopper) {
    return this._scroller.removeScrollStopper(stopper);
  }

  protected created() {
    const $target = this.target === 'self' ? this.$el : undefined;
    this._scroller = new Scroller({
      el: $target,
      ...this.scrollerSetting,
    });
    this._scroller.observe(this);
  }

  protected mounted() {
    if (this.target === 'self') {
      this._scroller.setElement(this.$el);
    }
  }

  protected beforeDestroy() {
    this._scroller.destroy();
    delete this._scroller;
  }
}
