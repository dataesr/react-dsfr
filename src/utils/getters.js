export function getSpace(spacing) {
  const margin = spacing && spacing.split(' ').map((s) => s.startsWith('m') && `fr-${s}`);
  const padding = spacing && spacing.split(' ').map((s) => s.startsWith('p') && `fr-${s}`);
  return { margin, padding };
}

export function getColSize(n, offset) {
  return {
    n: n && n.split(' ').map((elem) => `fr-col-${elem}`),
    offset: offset && offset.split(' ').map((elem) => `fr-col-offset-${elem}`),
  };
}
