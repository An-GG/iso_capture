#!/usr/bin/env ts-node-esm
import getStdin from "get-stdin";


async function fetch_iso_content(platform_id: 'twitter' : 'instagram', link: string) {
    if (platform_id == 'twitter')       { } else 
    if (platform_id == 'instagram')     { } else
    { process.exit(1); }
}

async function main() {
    fetch_iso_content();
}

main()
