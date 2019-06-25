import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { width, verticalScale, scale, moderateScale } from '../../Helpers'
import Spinner from './Spinner';

export default SocialButton = (props) => {

    const { text, onPress, wideButton, style, loading, icon, iconStyle, view} = props
    const {
        containerStyle,
        textStyle,
        defaultIconStyle
    } = styles
    let ContianerComponent = view? View: TouchableOpacity
    return (
        <ContianerComponent
            style={[containerStyle, style]}
            onPress={onPress}
        >
            <Image style={[defaultIconStyle, iconStyle]} source={icon} />
            <Text style={textStyle} >{text}</Text>
            {
                loading &&
                <Spinner size={'small'} style={{ marginLeft: scale(10) }} />
            }
        </ContianerComponent>
    )
}

const styles = {
    containerStyle: {
        width: scale(343),
        height: verticalScale(40),
        borderRadius: verticalScale(6),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#0A3D62',
        opacity: .5,
        flexDirection: 'row'
    },
    textStyle: {
        color: '#0A3D62',
        fontSize: moderateScale(13),
        fontWeight: 'bold',
    },
    defaultIconStyle:{
        resizeMode: 'contain',
        width: scale(14),
        height: verticalScale(14),
        marginRight: scale(5)
    }
}