'use client'

import classes from './Backdrop.module.css'

import * as React from 'react'
import { createPortal } from 'react-dom'

export default function Backdrop({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return mounted ? createPortal(<div className={classes.backdrop}>{children}</div>, document.body) : null
}
