export default function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}
