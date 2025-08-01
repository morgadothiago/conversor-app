import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Button({
  variant = "primary",
  currency,
  onPress,
  isSelected,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.containerButton,
        isSelected &&
          (variant === "primary"
            ? styles.buttonPrimary
            : styles.buttonSecondary),
      ]}
      onPress={onPress}
    >
      <Text style={styles.containerButtonText}>{currency.code}</Text>
    </TouchableOpacity>
  )
}
