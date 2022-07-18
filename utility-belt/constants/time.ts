// Explain: Multiplication in many places.
/* eslint-disable no-magic-numbers */

export const TIME = {
  SECONDS_IN_ONE_MINUTE: 60,
  TENTH_OF_A_SECOND: 100,
  QUARTER_SECOND: 250,
  HALF_A_SECOND: 500,
  ONE_SECOND: 1000,
  TWO_SECONDS: 2000,
  THREE_SECONDS: 3000,
  FIVE_SECONDS: 5000,
  TEN_SECONDS: 10000,
  FIFTEEN_SECONDS: 15000,
  HALF_A_MINUTE: 30000,
  MS_IN_ONE_SECOND: 1000,
  TIMEOUT_MAX: 2147483647,
  ONE_MONTH_30: 30 * 24 * 60 * 60 * 1000,
} as const;