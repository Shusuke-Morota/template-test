export function forceFocus(element, focusOptions) {
  element.focus(focusOptions);

  if (document.activeElement !== element) {
    element.tabIndex = -1;
    element.focus(focusOptions);
  }
}
