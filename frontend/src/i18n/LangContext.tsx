import { createContext, useContext } from 'react'
import { Lang } from '../types'

interface LangContextType {
  lang: Lang
  t: (key: string) => string
  tHtml: (key: string) => { html: string; hasGradient: boolean }
}

export const LangContext = createContext<LangContextType>(null!)

export function useLang() {
  return useContext(LangContext)
}
