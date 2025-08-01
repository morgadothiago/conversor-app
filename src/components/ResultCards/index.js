import { Text, View } from "react-native"
import { styles } from "./styles"

export default function ResultCards({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
  currencies,
}) {
  if (!result || !exchangeRate) return null
  const toSymbol = currencies.find((c) => c.code === toCurrency).symbol

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.amount}>
        {toSymbol} {result}
      </Text>
      <Text style={styles.rate}>
        Taxa de cambio 1: {fromCurrency} = {exchangeRate.toFixed(4)}{" "}
        {toCurrency}
      </Text>
    </View>
  )
}
