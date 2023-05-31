/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 * 
 * @public
 */
export interface IQuery {
	cards_platform?: string;
	count?: number;
	cursor?: string;
	ext?: string;
	include_blocked_by?: number;
	include_blocking?: number;
	include_can_dm?: number;
	include_can_media_tag?: number;
	include_cards?: number;
	include_entities?: boolean;
	include_ext_alt_text?: boolean;
	include_ext_collab_control?: boolean;
	include_ext_edit_control?: boolean;
	include_ext_has_nft_avatar?: number;
	include_ext_is_blue_verified?: number;
	include_ext_limited_action_results?: boolean;
	include_ext_media_availability?: boolean;
	include_ext_media_color?: boolean;
	include_ext_sensitive_media_warning?: boolean;
	include_ext_trusted_friends_metadata?: boolean;
	include_ext_verified_type?: number;
	include_ext_views?: boolean;
	include_followed_by?: number;
	include_mute_edge?: number;
	include_profile_interstitial_type?: number;
	include_quote_count?: boolean;
	include_reply_count?: number;
	include_user_entities?: boolean;
	include_want_retweets?: number;
	pc?: number;
	q?: string;
	query_source?: string;
	send_error_codes?: boolean;
	simple_quoted_tweet?: boolean;
	skip_status?: number;
	spelling_corrections?: number;
	tweet_mode?: string;
	tweet_search_mode?: string;
}
