# Bra Size Validation 

Validate bra size input for US, EU, Japan, & Australia.

```javascript
/^(((([0-4])(0|2|4|6|8))|(6|8))|(((6|7|8|9)(0|5))|(1[01][05])))((AAA)|(AA)|(DD)|(DDD)|(HH)|(HHH)|[A-I])$/
```

## Criteria

**Note:** All ranges mentioned below are to be understood as inclusive.

In the US, bra sizes begin with an even number in the range `[28-48]`.
They are followed by any letter in the range `[A-I]`; alternatively, one of:
`[ 'AAA', 'AA', 'DD', 'DDD', 'HH', 'HHH']`

In the EU, Japan, & Australia, they begin with an even number in the range `[6-28]`, 
or any multiple of `5` in the range `[60-115]`.