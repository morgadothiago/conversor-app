import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { colors } from "../../styles/colors"

export default function Input({ value, onChangeText, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance="dark"
      />
    </View>
  )
}
