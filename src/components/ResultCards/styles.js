import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 18,
  },
  amount: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  rate: {
    color: colors.textSecondary,
    fontSize: 14,
  },
})
