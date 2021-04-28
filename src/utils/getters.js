export function getSpace({
  m, margin, p, padding,
}) {
  const marge = margin || m || '';
  const padd = padding || p || '';
  return {
    margin: marge && marge.split(' ').map((elem) => `fr-${elem}`),
    padding: padd && padd.split(' ').map((elem) => `fr-${elem}`),
  };
}

export function getColSize(n, offset) {
  return {
    n: n && n.split(' ').map((elem) => `fr-col-${elem}`),
    offset: offset && offset.split(' ').map((elem) => `fr-col-offset-${elem}`),
  };
}
