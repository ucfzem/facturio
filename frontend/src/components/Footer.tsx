import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="center" style={{
      padding: '32px', borderTop: '1px solid var(--border)', opacity: .5
    }}>
      {t('footer.text')}
    </footer>
  )
}
