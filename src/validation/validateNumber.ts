export default function validateTarget(target: any) {
  if (typeof target !== "string") {
    return new TypeError(`invalid type ${typeof target} for target`);
  }

  const parsed = parseInt(target);

  if (Number.isNaN(parsed)) {
    return new TypeError(`failed to parse target ${JSON.stringify(target)}`);
  }
  if (parsed < 0 || parsed > 1_000_000) {
    return new RangeError(`target ${parsed} is not in range 0-1,000,000`);
  }

  return parsed;
}
