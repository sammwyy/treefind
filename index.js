function deconstructTree(tree, prefix = "") {
    let structure = {};

    for (const key of Object.keys(tree)) {
        const value = tree[key];
        if (typeof(value) == "object") {
            const subPrefix = prefix + key + ".";
            const child = deconstructTree(value, subPrefix);
            structure = { ...structure, ...child };
        } else {
            structure[prefix + key] = value;
        }
    }

    return structure;
}

function isKeyMatch (pathStr, keyStr) {
    const paths = pathStr.toLowerCase().split(".");
    const keys = keyStr.toLowerCase().split(".");

    for (let i = 0; i < keys.length; i++) {
        const path = paths[i];
        const key = keys[i];

        if (path == null) {
            return false;
        } 
        
        else if (path == "**") {
            return true;
        }

        else if (path == "*") {
            continue;
        }

        else if (path.startsWith("*") && key.endsWith(path.split("*")[1])) {

            continue;
        }

        else if (path.endsWith("*") && key.startsWith(path.split("*")[0])) {
            continue;
        }

        else if (path != key) {
            return false;
        }

        else {
            continue;
        }
    }

    return true;
}

class Treefind {
    constructor(object) {
        this.structure = deconstructTree(object);
    }

    find(pathKey) {
        const values = {};

        for (const key of Object.keys(this.structure)) {
            if (isKeyMatch(pathKey, key)) {
                values[key] = this.structure[key];
            }
        }

        return values;
    }
}

export default Treefind;
module.exports = Treefind;