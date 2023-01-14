#!/usr/bin/env ts-node-esm
async function fetch_iso_content(platform_id, link) {
    if (platform_id == 'twitter') {
        console.log("link: " + link);
    }
    else if (platform_id == 'instagram') { }
    else {
        process.exit(1);
    }
}
async function main() {
    fetch_iso_content("twitter", "test");
}
main();
export {};
//# sourceMappingURL=index.js.map