import AceEditor from "react-ace"
import { useSelector } from "react-redux";

import { DARK_MODE } from '../../actions/types'

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";

const IDE = props => {

    const lang = props.lang ? props.lang : 'javascript'

    const theme = useSelector(state => state.theme.mode)
        == DARK_MODE 
        ? 'merbivore_soft'
        : 'theme-kuroir'

    return (
        <AceEditor 
            mode={lang}
            theme={theme}
            name="ide"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="70vh"
            value={props.code}
            fontSize={20}
            highlightActiveLine={true}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            onChange={value => props.setCode(value)}
        />
    )
}

export default IDE