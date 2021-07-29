import Backend from '../../api/backend'

const compile = async (code, lang, cb) => {
    try {
        const response = await Backend.post(`/ide/${lang}`, {code})
        cb(response.data)
    } catch (err) {
        cb(err.response.data)
    }
}

export default compile