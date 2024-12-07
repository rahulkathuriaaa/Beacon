"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import {Button} from "@/components/ui/button";
import {Copy, ExternalLink, Loader2,} from "lucide-react";

import { useEffect } from "react";
// Assuming these components are imported from elsewhere
// import { WalletButton } from "./WalletButton";
// import { ProfileModal } from "./ProfileModal";
// import { MobileMenu } from "./MobileMenu";
// import Logo from "./path-to-logo";

export const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
    },
    {
        id: 2,
        url: "/events",
        text: "Events",
    },
    {
        id: 3,
        url: "/community",
        text: "Community",
    },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<string[]>([]);
    const [networkData, setNetworkData] = useState<any>();
    const [balance, setBalance] = useState<string>("");




    let supraProvider: any =
    typeof window !== "undefined" && (window as any)?.starkey?.supra;

const [isExtensionInstalled, setIsExtensionInstalled] =
    useState<boolean>(!!supraProvider);

    const getNetworkData = async () => {
        if (supraProvider) {
            const data = await supraProvider.getChainId();
            if (data) {
                setNetworkData(data)
            }
        }
    };

    const updateAccounts = async () => {
        if (supraProvider) {
            try {
                const response_acc = await supraProvider.account();
                if (response_acc.length > 0) {
                    setAccounts(response_acc);
                } else {
                    setAccounts([]);
                }
            } catch (e) {
                setAccounts([]);
            }
            updateBalance().then();
            getNetworkData().then();
        }
    };

    useEffect(() => {
        if (accounts) {
            updateBalance().then();
            getNetworkData().then();
        }
    }, [accounts]);
    const updateBalance = async () => {
        if (supraProvider && accounts.length) {
            const balance = await supraProvider.balance();
            if (balance) {
                setBalance(`${balance.formattedBalance} ${balance.displayUnit}`);
            }
        } else {
            setBalance("");
        }
    };

    
    // Assuming you have a user and logout method from context or props
    const user = null; // Replace with actual user context/state
    const logout = () => {}; // Replace with actual logout method

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const resetWalletWalletData = ()=>{
        setAccounts([]);
        setBalance("");
        setNetworkData({});
    }
    const disconnectWallet = async () => {
        if (supraProvider) {
            await supraProvider.disconnect();
        }
        resetWalletWalletData()
    };


    const handleProfile = () => {
        setProfileOpen(!profileOpen);
    };
    const connectWallet = async () => {
        // setLoading(true)
        const response = await supraProvider.connect();
        console.log({response});
        updateAccounts().then();
        setLoading(false);
    };


    return (
        <div className="w-full flex flex-col gap-3 h-full py-[1.1rem] px-5 md:px-14 lg:px-16 bg-[#030202] sticky top-0 z-30">
            <div className="w-full flex items-center justify-between">
                <Link href="/"> 
                    <div className="flex flex-row gap-2 items-center">
                        {/* <img src={Logo} alt="logo" />  Uncomment and provide Logo */}
                        <h5 className="text-[#F57328] font-['Stoke'] text-[1.1rem]">
                            TicketMynt
                        </h5>
                    </div>
                </Link>

                <ul className="hidden lg:flex items-center gap-5 lg:gap-8">
                    {links.map((link) => (
                        <li className="group relative" key={link.id}>
                            <Link 
                                href={link.url} 
                                className={`text-[#F57328] text-[0.9rem] transition duration-300 ease-in ${
                                    // Replace location with actual route checking method
                                    // location.pathname === link.url
                                    false
                                        ? "text-[#F57328]"
                                        : "text-[#fdfcfdc4]"
                                }`}
                            >
                                {link.text}
                            </Link>
                            <div className="absolute w-full left-0 h-0.5 bg-[#F57328] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex flex-row gap-6 items-center justify-between">
                    
                <div>
                                    <div className="inline-block">
                                        <Button onClick={connectWallet} disabled={loading}>
                                            {loading && (
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                            )}
                                            Connect Wallet{" "}
                                        </Button>
                                    </div>
                                </div>
                    

                    {/* <WalletButton /> */}
                </div>

                <div className="flex lg:hidden flex-row gap-6 items-center justify-between">

                    <button onClick={handleMenu}>
                        {menuOpen ? (
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ color: "#FFFDFC" }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faBars}
                                style={{ color: "#FFFDFC" }}
                            />
                        )}
                    </button>
                </div>
            </div>
            {menuOpen && (
                // <MobileMenu />
                <div>Mobile Menu</div>
            )}
        </div>
    );
};

export default Navbar;