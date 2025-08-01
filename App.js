import { StatusBar } from "expo-status-bar"
import {
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

export default function App() {
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
                />
              ))}
            </View>
            <Input label={"Valor: "} value={0} onChangeText={() => {}} />

            <TouchableOpacity style={styles.swapArrowContainer}>
              <Ionicons name="arrow-down" size={18} color="white" />
              <Ionicons name="arrow-up" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
