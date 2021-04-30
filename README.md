# primeNumberApi

A simple web API for prime numbers.

## API Reference

### Get random prime(s)

```HTTP
  GET /random
```

#### Query parameters

| Parameter        | Type  | Default Value | Possible Values | Description                                                                                                                         |
| ---------------- | ----- | ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| min (optional)   | `int` | 1             | 1-1,000,000     | The smallest number allowed.                                                                                                        |
| max (optional)   | `int` | 1,000,000     | 1-1,000,000     | The largest number allowed.                                                                                                         |
| count (optional) | `int` | 1             | 1-100           | The number of prime numbers to return. If there are less than `count` primes between `min` and `max`, will return as many as exist. |

#### Response

```ts
{
  randomPrimes: number[]
  // The array of random primes.
  // Will contain `count` number of items (defaults to 1).
}
```

#### Examples

Get one random prime number between 1 and 1,000,000

```HTTP
  GET /random
```

Get five random prime numbers between 1 and 1,000,000

```HTTP
  GET /random?count=5
```

Get one random prime number between 10 and 20

```HTTP
  GET /random?min=10&max=20
```

Get one random prime number between 1 and 100

```HTTP
  GET /random?min=100
```

### Get closest prime number

```HTTP
  GET /closest
```

#### Query parameters

| Parameter         | Type  | Default Value | Possible Values | Description                       |
| ----------------- | ----- | ------------- | --------------- | --------------------------------- |
| target (required) | `int` | null          | 1-1,000,000     | The target for the closest prime. |

#### Response

```ts
{
  closestPrime: number;
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
