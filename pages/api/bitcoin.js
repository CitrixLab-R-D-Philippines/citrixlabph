const crypto = require('crypto');

// Function to create a hash of a value
function hash(value) {
    return crypto.createHash('sha256').update(value.toString()).digest('hex');
}

// Function to construct a Merkle tree and return the Merkle root
function getMerkleRoot(transactions) {
    if (transactions.length === 0) return null;

    // Step 1: Hash all transactions
    let hashes = transactions.map(tx => hash(tx));

    // Step 2: Build the Merkle Tree
    while (hashes.length > 1) {
        const temp = [];

        // Pair adjacent hashes and hash them together
        for (let i = 0; i < hashes.length; i += 2) {
            if (i + 1 < hashes.length) {
                // Hash pair
                temp.push(hash(hashes[i] + hashes[i + 1]));
            } else {
                // If odd, carry forward the last hash
                temp.push(hashes[i]);
            }
        }

        hashes = temp; // Move to the next level of the tree
    }

    // The last remaining hash is the Merkle root
    return hashes[0];
}

// Exporting the function
module.exports = { getMerkleRoot };
