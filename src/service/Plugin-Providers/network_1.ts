import { Network } from '@ionic-native/network';
import { Injectable } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';


@Injectable()
export class NetworkProvider {

    constructor(
        public network: Network,
        public platform: Platform
    ) {
        console.log('Hello AuthenticateService Provider');
    }

    CheckNetworkConnection(): string {
        let networkType: string;

        this.platform.ready().then(() => {
            networkType = this.network.type;
        });

        return networkType;
    }
}