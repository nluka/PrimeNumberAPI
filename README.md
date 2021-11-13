# primeNumberApi

A simple web API for the prime numbers under one-million.

- [Servers](#servers)
- [API Reference](#api-reference)
  - [Get Closest Prime Number](#get-closest-prime-number)

## Servers

| Name       | URL                                                                                | Description                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Production | [https://prime-number-api.herokuapp.com/](https://prime-number-api.herokuapp.com/) | The primary server. Note that it may take some time to respond to the first call, as the free heroku server is starting up. |

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
