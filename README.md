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

// Get all nested prop if key starts with "java"
console.log(tree.find("skills.java*")); 
// returns:
{
  "skills.javascript": "good", 
  "skills.java": "normal"
}
```
