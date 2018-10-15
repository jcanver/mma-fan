import React from 'React'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import theme from 'src/theme'
import Touchable from 'src/components/Touchable'
import Text from 'src/components/Text'

class Button extends React.PureComponent {
  /** Clear the pressTimer */
  // componentWillUnmount() {
  //   clearTimeout(this.pressTimer);
  // }
  // -1
  // /**
  //  * - Create a timer for the button to prevent it from being pressed too quickly
  //  * - Call `this.props.onPress` if available
  //  */
  // onPress = () => {
  //   if (this.props.disabled) return;
  //   if (this.canPress) {
  //     this.canPress = false;
  //     this.props.onPress();
  //     this.pressTimer = setTimeout(() => { this.canPress = true; }, this.props.pressTimeout || 500);
  //   }
  // }

  canPress: boolean = true
  pressTimer: setTimeout|void = null

  render() {
    const {
      accessibilityLabel,
      title,
      hasTVPreferredFocus,
      disabled,
      children,
      bold,
      semiBold,
      fontSize,
      width
    } = this.props;
    const accessibilityTraits = ['button']
    if (disabled) {
      accessibilityTraits.push('disabled')
    }
    if (!this.props.onPress) {
      const noOnPress = new Error('Button without onPress prop (not rendered to the user)')
      logger.error(noOnPress.message)
      return null
    }
    return (
        <View style={{ elevation: 4, padding: 8}}>
          <Touchable
            accessibilityComponentType="button"
            accessibilityLabel={accessibilityLabel}
            accessibilityTraits={accessibilityTraits}
            hasTVPreferredFocus={hasTVPreferredFocus}
            disabled={disabled}
            onPress={this.props.onPress}
          >
            <View style={[styles.wrapper, { width } ]}>
              {children || (
                <Text style={styles.title} fontSize={fontSize || 18} bold={bold} semiBold={semiBold} color="white" centered>
                  {title}
                </Text>
              )}
            </View>
          </Touchable>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: theme.primary,
    borderRadius: 10
  },
  title: {

  }
})

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  accessibilityLabel: PropTypes.string,
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // pressTimeout: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  hasTVPreferredFocus: PropTypes.bool,
  fontSize: PropTypes.number,
}

export default Button
