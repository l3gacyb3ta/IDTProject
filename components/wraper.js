import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'
import Switcher from './switcher'
import { Container } from 'theme-ui'


export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}><Switcher />{ children }</ThemeProvider> 
  )
}