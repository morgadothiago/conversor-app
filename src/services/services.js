const BASE_URL = `https://api.exchangerate-api.com/v4/latest`

export async function exchangteRateApi(fromCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
