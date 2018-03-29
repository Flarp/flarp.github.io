/* global fetch */

const generate = () => {
    fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json")
        .then(plain => plain.json())
        .then(json => {
            const getRandom = (arr) => {
                return arr[Math.floor(Math.random() * arr.length)]
            }
            const type = ['Imperative', 'Declaritive']
            const language = ['JavaScript', 'CoffeeScript', 'TypeScript']
            const based = ['jQuery', 'React', 'Angular', 'Vue']
            const split = json.nouns[Math.floor(Math.random() * json.nouns.length)].split('')
            split[0] = String.fromCharCode(split[0].charCodeAt(0) - 32)
            const noun = split.join('')
            const licenses = ['MIT', 'BSD', 'GPL-3.0', 'MPL', 'Apache-2.0', 'GPL-3.0']
            console.log(noun)
            const data = ['JSON', 'XML']
            const format = getRandom(data)
            const final = `<h1>${noun}</h1>
            <br>
            \t<p>${noun} is a new ${getRandom(language)} MVC framework inspired by ${getRandom(based)}. This new library can be got from npm using - </p>
            <br>
            <br>
            <center><code>npm install ${noun.toLowerCase()}</code></center>
            <br>
            <br>
            <h2>Features</h2>
            <ul>
                <li> <b>${getRandom(type)}</b>: Syntax recognized by many programmers makes it much easier to use, as many people are familiar with this kind of programming.</li>
                <li> <b>It's Just JavaScript</b>: It's nothing more than simple JavaScript in the end, just makes everything a little easier. </li>
                <li> <b>Small</b>: Is only ${Math.random() * 1000}kb!</li>
                <li> <b>Intuitive virtual DOM</b>: The virtual DOM is in ${format} format, so you don't need to learn a whole new kind of DSL! </li>
                <li> <b>Fast</b>: Updating a branch of ${Math.floor(Math.random() * 1000)} children only takes ${Math.floor(Math.random() * 100)} milliseconds. </li>
            </ul>
            <br>
            <br>
            <h2>Example</h2>
            <code>
            <pre>
            ${format === 'XML' 
                ? `<script>
                    var myArr = ["${noun} is cool!", "HTML5 is cooler!"]
                </script>
                
                <div className="${noun}-body">
                    <${noun}-header size="1">This is a test ${noun} header!</${noun}-header>
                    <${noun}-paragraph>This is a test ${noun} paragraph!</${noun}-paragraph>
                    <${noun}-map val="myVal" arr="myArr">
                        <${noun}-paragraph>Array says {myVal}</${noun}-paragraph>
                    </${noun}-map>
            </div>`.split('<').join('&lt;').split('>').join('&gt;')
                : `var myArr = ["${noun} is cool!", "HTML5 is cooler!"]
                
                new ${noun}.Element({
                    type: 'body',
                    content: [new ${noun}.Element({
                        type: 'h1',
                        options: {
                            size: 1
                        },
                        content: This is a test ${noun} header!
                    }),
                    new ${noun}.Element({
                        type: 'p',
                        content: 'This is a test ${noun} paragraph!
                    }),
                    new ${noun}.Element({
                        type: '${noun}-map'
                        options: {
                            val: 'myVar',
                            arr, myArr
                        },
                        content: Array says {myVar}
                    })
                    ]
                })`
            }
            </pre>
            </code>
            <br>
            <br>
            <br>
            <h2>License</h2>
            <br>
            <p>This program is licensed under the ${getRandom(licenses)} license.</p> 
            <br>
            <br>
            <br>
            <br>
            <button onclick='generate()' class='btn btn-success'>Generate another framework</button>
            `
            document.getElementById('result').innerHTML = final;
        })
    
    
}
