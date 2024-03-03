# Typescript-Assignments

# Typescript
<!-- Install Typescript -->
npm install --global typescript@5.0.2 
<!-- Check ts version -->
tsc --version / --v

# Commands
<!-- Compile ts to js -->
tsc main.ts
<!-- Run Js file -->
node main.js
<!-- Create tsconfig.json file -->
tsc --init
<!-- Create package.json file -->
npm init -y
<!-- Create 2 Files => node-modules & package-lock.json -->
npm i @types/node -D


# Types of Cases

camelCase
snake_case
PascalCase

# Data Types

String 
Number
Boolean   <!-- True / False  -->
Any

# Additional Primitive  Data Types

Undefined 
Unknown  <!-- when type is not known, alternative of any -->
BigInt   <!-- for big integers that have maximum value allow in number-->
Symbols
Null     <!-- No Value -->

# Declaration 

var   <!-- old method -->
let   <!-- can be change -->
const <!-- remain constant, cannot be change-->

# Errors

Syntax Error
Type Error
Assignability Error

# Joining Variable

`${} ${}` <!-- to join multiple variables -->

let cname1 = name1 + " " + name2
let cname2 = `${name1} ${name2}`

<!--  -->