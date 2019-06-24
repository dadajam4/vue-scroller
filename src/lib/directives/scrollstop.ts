import { VNode } from 'vue/types';
import {
  DirectiveFunction,
  DirectiveOptions,
  DirectiveBinding,
} from 'vue/types/options';

const elementTick = (
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode,
) => {
  const { context } = vnode;
  if (!context) return;

  const { $window } = context;
  if (!$window) return;

  let value = binding.value;
  if (typeof value === 'function') value = value();

  if (value === undefined || !!value) {
    $window.pushScrollStopper(el);
  } else {
    $window.removeScrollStopper(el);
  }
};

const inserted: DirectiveFunction = function inserted(el, binding, vnode) {
  elementTick(el, binding, vnode);
};

const componentUpdated: DirectiveFunction = function inserted(
  el,
  binding,
  vnode,
) {
  elementTick(el, binding, vnode);
};

const unbind: DirectiveFunction = function unbind(el, binding, vnode) {
  const { context } = vnode;
  if (!context) return;

  const { $window } = context;
  if (!$window) return;

  $window.removeScrollStopper(el);
};

const directiveOptions: DirectiveOptions = {
  inserted,
  componentUpdated,
  unbind,
};

export default {
  name: 'scrollstop',
  ...directiveOptions,
} as DirectiveOptions;
