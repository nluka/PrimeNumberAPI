import numberMap from "./numberMap";
// const numberMap = new Map<number, boolean>();

export default function getClosestPrime(target: number) {
  let offset = 1;

  while (offset < 1_000_000) {
    const behind = target - offset;
    if (behind >= 0 && numberMap.get(behind)) {
      return behind;
    }

    const ahead = target + offset;
    if (ahead <= 1_000_000 && numberMap.get(ahead)) {
      return ahead;
    }

    ++offset;
  }

  throw new Error("failed to find nearest prime");
}
