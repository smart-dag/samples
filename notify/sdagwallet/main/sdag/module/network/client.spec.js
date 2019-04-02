import test from 'ava';
import Client from './client';
let client = new Client();
test.before(async () => {
    await client.connect('ws://10.168.3.131:6615');
});
test('gets free joints', async (t) => {
    let joints = await client.getFreeJoints();
    t.true(joints.length > 0);
});
test('gets mci', async (t) => {
    t.true(client.connected);
    let joints = await client.getJointsByMci(1);
    t.true(joints.length > 0);
    let jointsLevel = await client.getJointsByLevel(20, 50);
    t.true(jointsLevel.length > 0);
    let statistics = await client.getNetStatistics();
    t.true(statistics != null);
});
test('gets balance', async (t) => {
    t.true(client.connected);
    let balance = await client.getBalance('KOQXPPXPNJL5RYI4JO37HEBDTMYB7BGT');
    t.true(!balance.error);
    t.true(balance.balance >= 0);
    // balance = await client.getBalance('WUUWY32RQTXHSIYIDBPUW7AOEEAFKQOH');
    // t.true(balance.balance > 0);
    // let joint = await client.getJoint('sKm2SUIwJ37KPHNCGF2616+VmdqLRnyuV5WfVq9Xj8Q=');
    // t.true(!joint.error);
    // t.true(joint.joint.unit.unit === 'sKm2SUIwJ37KPHNCGF2616+VmdqLRnyuV5WfVq9Xj8Q=');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbmV0d29yay9jbGllbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRTlCLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNuQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekIsSUFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUxQixJQUFJLFdBQVcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9CLElBQUksVUFBVSxHQUFHLE1BQU0sTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7QUFFL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QixJQUFJLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU3Qix5RUFBeUU7SUFDekUsK0JBQStCO0lBRS9CLHFGQUFxRjtJQUNyRix3QkFBd0I7SUFDeEIsb0ZBQW9GO0FBQ3hGLENBQUMsQ0FBQyxDQUFDIn0=