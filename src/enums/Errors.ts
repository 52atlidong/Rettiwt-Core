/**
 * The different error messages.
 *
 * @public
 */
export enum EErrors {
	VALIDATION_ERROR = 'One or more validation errors occured. Check details',
}

/**
 * The different error codes received from Twitter API.
 *
 * @public
 */
export enum EErrorCodes {
	COULD_NOT_AUTHENTICATE = 32,
	RESOURCE_NOT_FOUND = 34,
	USER_NOT_SUSPENDED = 37,
	MISSING_PARAMETER = 38,
	USER_NOT_FOUND = 50,
	USER_SUSPENDED = 63,
	ACCOUNT_SUSPENDED = 64,
	RATE_LIMIT_EXCEEDED = 88,
	INTERNAL_ERROR = 131,
	TIME_ERROR = 135,
	ALREADY_FAVORITED = 139,
	STATUS_NOT_FOUND = 144,
	NOT_AUTHORIZED = 179,
	DAILY_STATUS_LIMIT_EXCEEDED = 185,
	TWEET_LENGTH_EXCEEDED = 186,
	DUPLICATE_STATUS = 187,
	BAD_AUTHENTICATION = 215,
	RESOURCE_NOT_ALLOWED = 220,
	AUTOMATED_REQUEST_ERROR = 226,
	ACCOUNT_LOCKED = 326,
	ALREADY_RETWEETED = 327,
	TWEET_NOT_FOUND = 421,
	TWEET_VIOLATED_RULES = 422,
	DISABLED_TWEET_ACTIONS = 425,
}
