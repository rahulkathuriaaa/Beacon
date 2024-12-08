module MoonCoin2::moon_coin {
    use std::signer;
    use std::string::{Self, String, utf8};
    use aptos_std::table::{Self, Table};
    use aptos_framework::managed_coin;

    const ENOT_AUTHORIZED: u64 = 1;
    struct MoonCoin2 {}

    // Resource to store coin metadata and creator information
    struct CoinMetadata has key {
        // Table mapping coin names to their creator addresses
        coin_creators: Table<String, address>,
        // Total number of unique coins created
        total_coins: u64,
    }

    // Initializes the module and creates the CoinMetadata resource
    fun init_module(sender: &signer) {
        // Create the CoinMetadata resource for the module
        move_to(sender, CoinMetadata {
            coin_creators: table::new(),
            total_coins: 0
        });
    }

    public entry fun register(dst_addr: &signer){
        managed_coin::register<MoonCoin2>(dst_addr);
    }

    // Creates a new coin with tracking of its creator
    public entry fun create(sender: &signer) acquires CoinMetadata {
        // Validate inputs
        //assert!(coin_name != std::string::utf8(b""), ENOT_AUTHORIZED);
    

        // Get the sender's address
        let creator_addr = signer::address_of(sender);

        // Initialize the coin using managed_coin module
        managed_coin::initialize<MoonCoin2>(
            sender,
            b"IBW",
            b"IBW",
            6,
            false
        );

        // Borrow and update the CoinMetadata
        let metadata = borrow_global_mut<CoinMetadata>(@MoonCoin2);
        
        // Add the coin creator to the table
        //table::add(&mut metadata.coin_creators, *std::string::utf8(b"Hello, Aptos!"), creator_addr);
        
        // Increment total coins
        metadata.total_coins = metadata.total_coins + 1;
    }

    // Mint coins with creator tracking
    public entry fun mint(sender: &signer) acquires CoinMetadata {
        let coin_name = utf8(b"IBW");
        let amount = 100;
        let dst_addr = signer::address_of(sender);
        // Verify the coin exists in the creators table
        let metadata = borrow_global<CoinMetadata>(@MoonCoin2);
        assert!(table::contains(&metadata.coin_creators, coin_name), ENOT_AUTHORIZED);

        // Verify the sender is the original creator
        let creator = table::borrow(&metadata.coin_creators, coin_name);
        assert!(signer::address_of(sender) == *creator, ENOT_AUTHORIZED);

        // Mint the coins
        managed_coin::mint<MoonCoin2>(sender, dst_addr, amount);
    }

    // Burn coins with creator verification
    public entry fun burn(sender: &signer, coin_name: String, amount: u64) acquires CoinMetadata {
        // Verify the coin exists in the creators table
        let metadata = borrow_global<CoinMetadata>(@MoonCoin2);
        assert!(table::contains(&metadata.coin_creators, coin_name), ENOT_AUTHORIZED);

        // Verify the sender is the original creator
        let creator = table::borrow(&metadata.coin_creators, coin_name);
        assert!(signer::address_of(sender) == *creator, ENOT_AUTHORIZED);

        // Burn the coins
        managed_coin::burn<MoonCoin2>(sender, amount);
    }

   
}