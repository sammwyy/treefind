# Treefind
Find specific nested props inside objects.

## Install library
```bash
# If you are using NPM.
npm install treefind

# If you are using Yarn.
yarn add treefind
```

## How to use
```javascript
// Import library.
const Treefind = require("treefind");

// Instantiate with an object.
const tree = new Treefind({
    name: "sammwy",
    age: 20,
    isAlive: true,
    skills: {
        javascript: "good",
        java: "normal",
        python: "low"
    },
    projects: {
        dotmsn: {
            name: "Dot MSN",
            type: "application",
            description: "Secure messaging application",
            repository: {
                type: "git",
                link: "https://github.com/dotmsn"
            }
        },
        strawci: {
            name: "StrawCI",
            type: "service",
            description: "Cloud CI",
            repository: {
                type: "git",
                link: "https://github.com/strawci"
            }
        }
    }
});

// Get an specific prop
console.log(tree.find("name")); 
// returns:
{
  "name": "sammwy"
}

// Get a nested prop
console.log(tree.find("skills.python"));
// returns:
{ 
  "skills.python": "low"
}

// Get all nested props
console.log(tree.find("skills.*"));
// returns:
{ 
  "skills.javascript": "good",
  "skills.java": "normal",
  "skills.python": "low"
}

// Get all nested prop if key starts with "java"
console.log(tree.find("skills.java*")); 
// returns:
{
  "skills.javascript": "good", 
  "skills.java": "normal"
}

// Get all nested prop if key ends with "e"
console.log(tree.find("*e")); 
// returns:
{
  "name": "sammwy", 
  "isAlive": true
}

// Get all specific child of all matching props.
console.log(tree.find("projects.*.name")); 
// returns:
{
  "projects.strawci.name": "StrawCI", 
  "projects.dotmsn.name": "Dot MSN"
}
```
