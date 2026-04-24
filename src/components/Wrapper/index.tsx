import { type FC, type ReactNode } from 'react'

import styles from './Wrapper.module.css'

interface IProps {
  children: ReactNode
  classes?: unknown
}

export const Wrapper: FC<IProps> = ({ children, classes }) => (
  <div className={`${styles.wrapper} ${classes || ''}`}>{children}</div>
)
