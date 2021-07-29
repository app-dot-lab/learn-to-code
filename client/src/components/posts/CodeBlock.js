import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { LIGHT_MODE } from '../../actions/types'

const CodeBlock = () => {
    const theme = useSelector(state => state.theme)
    return {
        code ({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter style={ theme.mode == LIGHT_MODE ? a11yLight : anOldHope} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
                <code className={className} {...props} style={{fontFamily: 'monospace'}}>
                {children}
                </code>
            )
        }
    }
}

export default CodeBlock