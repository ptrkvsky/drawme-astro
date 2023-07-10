export function scrollToTop(
  button: Element,
  smoother: globalThis.ScrollSmoother
) {
  button.addEventListener('click', () => {
    smoother.scrollTo('body', false);
  });
}
