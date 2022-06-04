export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_CHEC_PUBLIC_API_KEY: string;
		}
	}
}
