import React from 'react';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from '@expo/vector-icons';
 const IconIcon = ({ type, name, size, color, style }) => {
    const TypeIcon = {
        AntDesign: AntDesign,
        Entypo: Entypo,
        EvilIcons: EvilIcons,
        Feather: Feather,
        FontAwesome: FontAwesome,
        Fontisto: Fontisto,
        Foundation: Foundation,
        Ionicons: Ionicons,
        MaterialCommunityIcons: MaterialCommunityIcons,
        MaterialIcons: MaterialIcons,
        Octicons: Octicons,
        SimpleLineIcons: SimpleLineIcons,
        Zocial: Zocial,
    }
    let I = TypeIcon[type];
    return <I
            name={name}
            size={size}
            color={color}
            style={style}
            />
};
export default function app(){
    return <IconIcon/>
}