// src/components/windows/authModals/WalletConnectModal.js

import React from 'react';
import {
    Card,
    Button,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import './AuthModals.css';

const WalletConnectModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <section className="px-8">
                    <div className="container mx-auto h-screen grid place-items-center">
                        <Card
                            shadow={false}
                            className="md:px-24 md:py-14 py-8 border border-gray-300"
                        >
                            <CardHeader shadow={false} floated={false} className="text-center">
                                <Typography
                                    variant="h1"
                                    color="blue-gray"
                                    className="mb-4 !text-3xl lg:text-4xl"
                                >
                                    Connect Your Wallet
                                </Typography>
                                <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
                                    Securely connect your wallet to access various Web3 platforms.
                                </Typography>
                            </CardHeader>
                            <CardBody>
                                <Button
                                    variant="outlined"
                                    size="lg"
                                    className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
                                    fullWidth
                                >
                                    <CpuChipIcon className="h-6 w-6" />
                                    Wallet Connect
                                </Button>
                                <Typography
                                    variant="small"
                                    className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600 mt-4"
                                >
                                    By connecting your wallet, you agree to our{" "}
                                    <a href="#" className="text-gray-900">
                                        Terms of Service
                                    </a>{" "}
                                    &{" "}
                                    <a href="#" className="text-gray-900">
                                        Privacy Policy.
                                    </a>
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WalletConnectModal;
