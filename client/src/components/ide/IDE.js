import { useEffect } from "react";
import { useSelector } from "react-redux";
import AceEditor from "react-ace"

import { DARK_MODE } from '../../actions/types'
import Compile from './Compiler'

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";

const DEFAULT_LANG = 'javascript'

const IDE = props => {
    const lang = props.lang ? props.lang : DEFAULT_LANG
    const theme = useSelector(state => state.theme.mode)
        == DARK_MODE 
        ? 'merbivore_soft'
        : 'theme-kuroir'

    useEffect(() => {
        Compile(props.code, lang, props.onCompile)
    }, [props.code])

    return (
        <AceEditor 
            mode={lang}
            theme={theme}
            name="ide"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="60vh"
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