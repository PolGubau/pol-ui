enum CurrencyCode {
	USD = "USD",
	EUR = "EUR",
	GBP = "GBP",
	JPY = "JPY",
	CAD = "CAD",
	AUD = "AUD",
	CHF = "CHF",
	CNY = "CNY",
	HKD = "HKD",
	NZD = "NZD",
	SEK = "SEK",
	KRW = "KRW",
	SGD = "SGD",
	NOK = "NOK",
	MXN = "MXN",
	INR = "INR",
	RUB = "RUB",
	ZAR = "ZAR",
	TRY = "TRY",
	BRL = "BRL",
}

export function formatCurrency(
	amount: number,
	currencyCode: CurrencyCode = CurrencyCode.USD,
	locale: string = "en-US"
): string {
	const formatter = new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currencyCode,
	});

	return formatter.format(amount);
}
