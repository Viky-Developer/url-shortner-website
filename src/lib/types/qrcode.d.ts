declare module 'qrcode' {
	interface QRCodeColorOptions {
		dark?: string;
		light?: string;
	}

	interface QRCodeToDataURLOptions {
		version?: number;
		errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | 'low' | 'medium' | 'quartile' | 'high';
		width?: number;
		margin?: number;
		color?: QRCodeColorOptions;
	}

	function toDataURL(text: string, options?: QRCodeToDataURLOptions): Promise<string>;
	function toDataURL(
		text: string,
		options: QRCodeToDataURLOptions,
		callback: (error: Error | null | undefined, url: string) => void
	): void;

	export { toDataURL };
}
