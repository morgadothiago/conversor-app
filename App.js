import { StatusBar } from "expo-status-bar"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import Button from "./src/components/Button"
import { styles } from "./App.styles"

import { currencies } from "./src/constants/currencies"
import Input from "./src/components/Input"

import { Ionicons } from "@expo/vector-icons"
import ResultCards from "./src/components/ResultCards"
import { exchangteRateApi } from "./src/services/services"
import { convertCurrency } from "./src/utils/convertCurrency"
import { useState } from "react"

export default function App() {
  const [amount, setAmout] = useState("")
  const [fromCurrency, setFormCurrency] = useState("USD")
  const [toCurrency, setToCurrent] = useState("BRL")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [exchangeRate, setExchangeRate] = useState("")

  async function fetchExchangeRate() {
    try {
      setLoading(true)
      const data = await exchangteRateApi(fromCurrency)
      const rate = data.rates[toCurrency]
      const convertedAmount = convertCurrency(amount, rate)
      setExchangeRate(rate)
      setResult(convertedAmount)
    } catch (error) {
      alert("Erro ao buscar taxa de câmbio")
    } finally {
      setLoading(false)
    }
  }

  function handleSwapCurrency() {
    setFormCurrency(toCurrency)
    setToCurrent(fromCurrency)
    setResult("")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView styles={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>

            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  variant="primary"
                  currency={currency}
                  onPress={() => setFormCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                />
              ))}
            </View>

            <Input label={"Valor: "} value={amount} onChangeText={setAmout} />

            <TouchableOpacity
              style={styles.swapArrowContainer}
              onPress={handleSwapCurrency}
            >
              <Ionicons name="arrow-down" size={18} color="white" />
              <Ionicons name="arrow-up" size={18} color="white" />
            </TouchableOpacity>

            <Text style={styles.label}>Para:</Text>

            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  variant="secondary"
                  currency={currency}
                  onPress={() => setToCurrent(currency.code)}
                  isSelected={toCurrency === currency.code}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.swapButton,
              (!amount || loading) && styles.convertButtonDisabled,
            ]}
            onPress={fetchExchangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator color={"white"} />
            ) : (
              <Text style={styles.swapButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCards
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
