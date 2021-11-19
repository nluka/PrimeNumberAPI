# prime-number-api

A simple web API for the prime numbers under one-million.

- [API Reference](#api-reference)
  - [Get Closest Prime Number](#get-closest-prime-number)

## API Reference

### Get Closest Prime Number

```HTTP
GET /closest
```

#### Query Parameters

| Parameter         | Type  | Possible Values | Description                       |
| ----------------- | ----- | --------------- | --------------------------------- |
| target (required) | `int` | 1-1,000,000     | The target for the closest prime. |

#### Response

```ts
{
  target: Number;
  // the target the request received

  closest: Number;
  // the closest prime number to the target
  // if the target is prime, returns the closest prime to the target that isn't itself
  // if there are 2 equidistant primes, returns the smaller one
}
```

#### Examples

Get closest prime number to 123

```HTTP
GET /closest?target=123
```
