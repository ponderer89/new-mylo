import { connect } from 'react-redux'
import _get from 'lodash.get'

const Translate = ({ dictionary, t }) => {
  const text = _get(dictionary, t)

  if (!text) {
    console.error(`<Translate t=${t} /> returned nothing`)
  }

  return text || null
}

const mapState = ({ i18n: { dictionary } }) => ({ dictionary })

export default connect(mapState)(Translate)
