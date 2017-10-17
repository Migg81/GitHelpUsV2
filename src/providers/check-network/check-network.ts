import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class CheckNetworkProvider {

  constructor(
    public network: Network) {
    console.log('Hello CheckNetworkProvider Provider');
  }

  CheckNetworkConnection(): string {
    let networkType: string;
    networkType = this.network.type;
    return networkType;
  }
}
