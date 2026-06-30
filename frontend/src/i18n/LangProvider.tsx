import { useState, useEffect, ReactNode } from 'react'
import { Lang } from '../types'
import { t as trans, tHtml as transHtml } from './translations'
import { LangContext } from './LangContext'

interface LangProviderProps {
  lang: Lang
  children: ReactNode
}

export default function LangProvider({ lang, children }: LangProviderProps) {
  const t = (key: string) => trans(key, lang)
  const tHtml = (key: string) => transHtml(key, lang)

  return (
    <LangContext.Provider value={{ lang, t, tHtml }}>
      {children}
    </LangContext.Provider>
  )
}
