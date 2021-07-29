const courseDatas = [
    {
        id: 1,
        position: 0,
        name: 'Javascript Variables',
        content: `## Javascript Variables

Variables are containers for storing data (values).

In this example, x, y, and z, are variables, declared with the var, let, and const keywords:
\`\`\`javascript
var x = 5;
let y = 6;
const z = x + y;
\`\`\`
From the example above, you can expect:
* x stores the value 5
* y stores the value 6
* z stores the value 11
    
In programming, just like in algebra, we use variables (like price1) to hold values.

---
## Try it yourself
Print a string in the output console  
Expected output:

\`Welcome to doesthecode.work\``,
expectedOutput: `Welcome to doesthecode.work`,
defaultSnippet: `console.log('Hello World');`
    }
]

const getCourse = (position) => courseDatas.find(course => course.position === position)

export default getCourse