const RingUserName = process.env['RingUserName'];
const RingPassword = process.env['RingPassword'];

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);
    context.log(RingUserName, RingPassword); 
};