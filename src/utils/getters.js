export function getSpace({
  m, margin, p, padding,
}) {
  const marge = margin || m || '';
  const padd = padding || p || '';
  return {
    margin: marge && marge.split(' ').map((elem) => `rf-${elem}`),
    padding: padd && padd.split(' ').map((elem) => `rf-${elem}`),
  };
}

export function getColSize(n, offset) {
  return {
    n: n && n.split(' ').map((elem) => `rf-col-${elem}`),
    offset: offset && offset.split(' ').map((elem) => `rf-col-offset-${elem}`),
  };
}

export function getScheme(scheme) {
  if (scheme) return `rf-scheme-${scheme}`;
  return null;
}
