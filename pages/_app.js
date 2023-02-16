import 'styles/globals.css'
import Layout from 'components/layout'

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.sutoAddCss = false

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
