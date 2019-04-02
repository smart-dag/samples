// import Wallet from 'sdagwallet.js';
import Wallet from '../index';
import { Keyman } from 'sdag.js';
async function demo() {
    let code = 'sea absorb guilt regular retire fire invest urge tone peace enroll asthma';
    let wallet = new Wallet();
    wallet.configHub('ws://10.168.3.131:6615');
    await wallet.loginWithMnemonic(code);
    let key = new Keyman(code);
    console.log(wallet.mainAddress, key.mainAddress);
    // console.log('Balance: ', await wallet.getBalance());
    // console.log('Send to FVC55XN6VRX7BUJKJXM73EBGTUYB3YJT', (await wallet.send({ amount: 1, to: 'FVC55XN6VRX7BUJKJXM73EBGTUYB3YJT', text: 'Hello' })).joint.unit.unit);
    // await (new Promise((resolve) => setTimeout(resolve, 3000)));
    // console.log('Balance: ', await wallet.getBalance());
    wallet.onAssetMessage(msg => console.log(msg));
    // await wallet.send({ amount: 2, to: wallet.mainAddress });
    // await (new Promise((resolve) => setTimeout(resolve, 3000)));
    console.log('Balance: ', await wallet.getBalance());
}
demo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZW1vL2Zhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRWpDLEtBQUssVUFBVSxJQUFJO0lBQ2YsSUFBSSxJQUFJLEdBQUcsMkVBQTJFLENBQUM7SUFDdkYsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUUxQixNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0MsTUFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVqRCx1REFBdUQ7SUFFdkQsc0tBQXNLO0lBQ3RLLCtEQUErRDtJQUMvRCx1REFBdUQ7SUFFdkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUvQyw0REFBNEQ7SUFDNUQsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFFeEQsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIn0=