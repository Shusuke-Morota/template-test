import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { forceFocus } from './domUtil';

gsap.registerPlugin(ScrollToPlugin);

window.addEventListener(
  'click',
  (event) => {
    const anchorElement = event.target.closest('a[href*="#"]');
    const anchorHash = anchorElement.hash;

    if (!anchorHash) {
      return;
    }

    if (event.button === 0 && !isModifiedEvent(event)) {
      if (location.hash !== anchorHash) {
        history.pushState(null, '', anchorHash);
      }

      let target = document.querySelector(anchorHash);

      if (!target && anchorHash === '#top') {
        target = document.documentElement;
      }

      if (target) {
        scrollIntoView(target);
        forceFocus(target, { preventScroll: true });
        event.preventDefault();
      }
    }
  },
  { capture: true },
);

function isModifiedEvent(event) {
  return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
}

function scrollIntoView(element) {
  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion)').matches;
  const style = getComputedStyle(element);

  gsap.to(window, {
    duration: shouldReduceMotion ? 0 : 0.5,
    scrollTo: {
      ...ScrollToPlugin.getOffset(element, window),
      offsetX: parseFloat(style.scrollMarginLeft),
      offsetY: parseFloat(style.scrollMarginTop),
    },
  });
}
