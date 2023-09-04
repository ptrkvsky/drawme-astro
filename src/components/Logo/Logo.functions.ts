export function isBot() {
  return (
    navigator.userAgent.indexOf("ouse") > -1 ||
    navigator.userAgent.indexOf("eadles") > -1
  );
}
