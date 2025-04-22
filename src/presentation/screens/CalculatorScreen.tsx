
import { View,Text, Pressable } from 'react-native'
import { colors, styles } from '../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const { number, builderNumber, toggleSign, clean, deleteOperation } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom:20}}>
        <Text 
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.mainResult}>{number}</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={ clean} label="C" blackText color={colors.lightGray}  />
        <CalculatorButton onPress={toggleSign} label="+/-" blackText color={colors.lightGray}  />
        <CalculatorButton onPress={deleteOperation} label="del" blackText color={colors.lightGray}  />
        <CalculatorButton onPress={ () => console.log("÷")} label="÷" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => builderNumber("7")} label="7"/>
        <CalculatorButton onPress={ () => builderNumber("8")} label="8"/>
        <CalculatorButton onPress={ () => builderNumber("9")} label="9"/>
        <CalculatorButton onPress={ () => console.log("X")} label="X" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => builderNumber("4")} label="4"/>
        <CalculatorButton onPress={ () => builderNumber("5")} label="5"/>
        <CalculatorButton onPress={ () => builderNumber("6")} label="6"/>
        <CalculatorButton onPress={ () => console.log("-")} label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => builderNumber("1")} label="1"/>
        <CalculatorButton onPress={ () => builderNumber("2")} label="2"/>
        <CalculatorButton onPress={ () => builderNumber("3")} label="3"/>
        <CalculatorButton onPress={ () => console.log("+")} label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => builderNumber("0")} label="0" doubleSize/>
        <CalculatorButton onPress={ () => builderNumber(".")} label="."/>
        <CalculatorButton onPress={ () => console.log("=")} label="=" color={colors.orange} />
      </View>
    </View>
  )
}

export default CalculatorScreen