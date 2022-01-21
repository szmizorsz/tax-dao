import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x9D61F1DFa764a4cAd11ddFDb3aF7Ffa2ea96A8D0",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Tax payer",
                description: "This NFT will give you access to TaxDAO!",
                image: readFileSync("scripts/assets/tax.jpeg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()