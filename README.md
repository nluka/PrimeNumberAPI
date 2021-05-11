# primeNumberApi

A simple web API for the prime numbers under one-million.

## API Reference

### Get closest prime number

```HTTP
  GET /closest
```

#### Query parameters

| Parameter         | Type  | Possible Values | Description                       |
| ----------------- | ----- | --------------- | --------------------------------- |
| target (required) | `int` | 1-1,000,000     | The target for the closest prime. |

#### Response

```ts
{
  closestPrime: Number;
  // The closest prime number to the target.
  // If there are 2 equidistant primes, returns the smaller one.
  // If the target is a prime, returns the closest prime to the target that isn't itself.
}
```

#### Examples

Get closest prime number to 123

```HTTP
  GET /closest?target=123
```
