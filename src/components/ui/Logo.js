import React from 'react'
import { Icon } from "@material-ui/core";
import WCLogoText from './winkingcatlogo-notext.svg'

function Logo() {
    return <Icon>
        <img src={WCLogoText} height={25} width={25}/>
    </Icon>
}

export default Logo;