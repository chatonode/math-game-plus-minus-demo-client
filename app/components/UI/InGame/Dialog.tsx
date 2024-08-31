'use client'

import React from 'react'

import classes from './Dialog.module.css'

type TDialogProps = React.PropsWithChildren & {
    message: string
}

const Dialog = (props: TDialogProps) => {
    return (
        <p className={classes.dialog}>{props.message}</p>
    )
}

export default Dialog
