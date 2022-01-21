import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x106E5D566ABc02908d10dd3B1b8a1345D17C750a");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            // The collection's name, ex. CryptoPunks
            name: "TaxDAO New Membership",
            // A description for the collection.
            description: "A new DAO for TAX sovereign spenders.",
            // The image for the collection that will show up on OpenSea.
            image: readFileSync("scripts/assets/tax-image.jpeg"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primarySaleRecipientAddress: "0x0f5b2FD00d4A2Bc6F0Fb01d375Bb089d2cA8631d",
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()