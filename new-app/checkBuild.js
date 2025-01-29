const { execSync } = require('child_process');
let serverSidePatternFound = false;
console.log("checking build output to confirm it's only SSG");
try {
    const output = execSync("cat log.txt | grep \"server-side\"");
    console.log("Build process output is: ", output.toString());
    serverSidePatternFound = true;
} catch(e) {

}

if(serverSidePatternFound) {
    throw new Error("Build is not only SSG")
}

console.log("not SSR pattern found, continue...");

return 0;
