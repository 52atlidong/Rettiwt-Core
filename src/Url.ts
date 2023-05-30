// ENUMS
import { EResourceType } from './enums/Resources';

// PAYLOADS
import { Args } from './payloads/Args';
import { Query } from './params/Query';

/**
 * A class that deals with generation of URLs to various resources on Twitter.
 */
export class Url {
	/** The base Twitter API url. */
	private baseUrl: string = 'https://api.twitter.com';

	/** The fully initialized target resource URL. */
	public fullUrl: string;

	/**
	 * Initializes a URL for fetching the specified resource, using the given arguments.
	 *
	 * @param resourceType The type of resource to fetch.
	 * @param args Any additional arguments.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		/**
		 * Initializing full URL along with additional URL parameters.
		 */
		this.fullUrl = `${this.baseUrl}${resourceType}?${new Query(resourceType, args).toString()}`;
	}

	/**
	 * @returns The string representation of thi Url.
	 */
	public toString(): string {
		return this.fullUrl;
	}
}
