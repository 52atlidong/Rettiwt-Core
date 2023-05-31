// PACKAGE
import { IsArray, IsBoolean, IsNumberString, IsString, IsOptional, IsDateString, validateSync } from 'class-validator';

// TYPES
import { ITweetFilter } from '../../types/request/payloads/TweetFilter';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * The filter to be used for fetching tweets from Twitter.
 * 
 * @internal
 */
export class TweetFilter implements ITweetFilter {
    /** The list of words to search. */
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    words?: string[];

    /** The list of hashtags to search.
     *
     * @remarks
     * '#' must be excluded from the hashtag!
     */
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    hashtags?: string[];

    /** The list of usernames whose tweets are to be searched.
     *
     * @remarks
     * '@' must be excluded from the username!
     */
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    fromUsers?: string[];

    /** The list of username to whom the tweets to be searched, are adressed.
     *
     * @remarks
     * '@' must be excluded from the username!
     */
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    toUsers?: string[];

    /** The list of username mentioned in the tweets to search.
     *
     * @remarks
     * '@' must be excluded from the username!
     */
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    mentions?: string[];

    /** The date starting from which tweets are to be searched.
     *
     * @remarks
     * Must be in the format YYYY-MM-DD.
     */
    @IsOptional()
    @IsDateString()
    startDate?: string;

    /** The date upto which tweets are to be searched.
     *
     * @remarks
     * Must be in the format YYYY-MM-DD.
     */
    @IsOptional()
    @IsDateString()
    endDate?: string;

    /** The id of the tweet, after which the tweets are to be searched. */
    @IsNumberString()
    @IsOptional()
    sinceId?: string;

    /** The id of the tweet which is quoted in the tweets to search. */
    @IsNumberString()
    @IsOptional()
    quoted?: string;

    /** Whether to fetch tweets that are links or not.
     *
     * @defaultValue false
     */
    @IsBoolean()
    @IsOptional()
    links?: boolean;

    /**
     * @param this The incoming this in JSON format.
     */
    constructor(filter: TweetFilter) {
        this.endDate = filter.endDate;
        this.fromUsers = filter.fromUsers;
        this.hashtags = filter.hashtags;
        this.links = filter.links;
        this.mentions = filter.mentions;
        this.quoted = filter.quoted;
        this.sinceId = filter.sinceId;
        this.startDate = filter.startDate;
        this.toUsers = filter.toUsers;
        this.words = filter.words;

        // Validating the this
        const validationResult = validateSync(this);

        // If valiation error occured
        if (validationResult.length) {
            throw new Error(EErrors.INVALID_FILTER);
        }
    }

    /**
     * Converts this object to it's string representation.
     * 
     * @returns 'this' object's string representation.
     */
    toString(): string {
        return [
            this.words ? this.words.join(' ') : '',
            this.hashtags ? `(${this.hashtags.map(hashtag => '#' + hashtag).join(' OR ')})` : '',
            this.fromUsers ? `(${this.fromUsers.map(user => `from:${user}`).join(' OR ')})` : '',
            this.toUsers ? `(${this.toUsers.map(user => `to:${user}`).join(' OR ')})` : '',
            this.mentions ? `(${this.mentions.map(mention => '@' + mention).join(' OR ')})` : '',
            this.startDate ? `since:${this.startDate}` : '',
            this.endDate ? `until:${this.endDate}` : '',
            this.sinceId ? `since_id:${this.sinceId}` : '',
            this.quoted ? `quoted_tweet_id:${this.quoted}` : ''
        ]
            .filter(item => item !== '()' && item !== '')
            .join(' ') + (!this.links ? ' -this:links' : '');
    }
}