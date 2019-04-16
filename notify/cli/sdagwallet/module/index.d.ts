/// <reference types="node" />
import { EventEmitter } from 'events';
import { NotifyMessage } from 'sdag.js/build/main/types/sdag';
export default class Wallet extends EventEmitter {
    private address;
    private keyman;
    private hub;
    configHub(address: string): void;
    autoConfigHub(type: 'mainnet' | 'testnet'): void;
    generateMnemonic(): string;
    loginWithMnemonic(mnemonic: string, password?: string): Promise<boolean>;
    readonly mainAddress: string;
    getAddress(): string;
    getPrivateKey(): any;
    getPublicKey(): string;
    getBalance(): Promise<number>;
    getHistory(): Promise<import("sdag.js/build/main/types/sdag").Transaction[]>;
    getUnit(unitId: string): Promise<import("sdag.js/build/main/types/sdag").Joint>;
    send(args: {
        amount: number;
        to: string;
        text?: string;
    }): Promise<{
        hash: any;
        joint: {
            skiplist_units: any[];
            unit: {
                alt: string;
                version: string;
                last_ball: string;
                last_ball_unit: string;
                witness_list_unit: string;
                parent_units: string[];
                authors: any[];
                messages: {
                    app: string;
                    payload_location: string;
                    payload_hash: string;
                    payload: {
                        inputs: import("sdag.js/build/main/types/sdag").Input[];
                        outputs: {
                            address: string;
                            amount: number;
                        }[];
                    };
                }[];
                headers_commission: number;
                payload_commission: number;
                timestamp: number;
                unit: any;
            };
        };
        result: string;
    }>;
    onAssetMessage(cb: (msg: NotifyMessage) => void): void;
    sign(text: string): any;
    verify(text: string, signed: string): boolean;
    logout(): void;
}
