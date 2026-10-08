import type Swup from "swup";

declare global {
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}

	interface Window {
		// Injected by the Swup integration.
		swup: Swup;
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};
		mobileTOCInit?: () => void;
		semifullScrollHandler?: (() => void) | null;
		initSemifullScrollDetection?: () => void;
		closeAnnouncement?: () => void;
		iconifyLoaded?: boolean;
		__iconifyLoader?: {
			load: () => Promise<void>;
			isLoaded: boolean;
			addToPreloadQueue: (icons: string[]) => void;
			onLoad: (callback: () => void) => void;
		};
		galleryManager: {
			isInitialized: boolean;
			init: () => void;
			cleanup: () => void;
		};
	}
}

export interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}
