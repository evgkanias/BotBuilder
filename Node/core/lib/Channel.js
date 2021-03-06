"use strict";
exports.channels = {
    facebook: 'facebook',
    skype: 'skype',
    telegram: 'telegram',
    kik: 'kik',
    email: 'email',
    slack: 'slack',
    groupme: 'groupme',
    sms: 'sms',
    emulator: 'emulator',
    directline: 'directline',
    console: 'console'
};
function supportsKeyboards(session, buttonCnt) {
    if (buttonCnt === void 0) { buttonCnt = 100; }
    switch (getChannelId(session)) {
        case exports.channels.facebook:
            return (buttonCnt <= 10);
        case exports.channels.kik:
            return (buttonCnt <= 20);
        case exports.channels.slack:
        case exports.channels.telegram:
        case exports.channels.emulator:
            return (buttonCnt <= 100);
        default:
            return false;
    }
}
exports.supportsKeyboards = supportsKeyboards;
function supportsCardActions(session, buttonCnt) {
    if (buttonCnt === void 0) { buttonCnt = 100; }
    switch (getChannelId(session)) {
        case exports.channels.facebook:
        case exports.channels.skype:
            return (buttonCnt <= 3);
        case exports.channels.slack:
            return (buttonCnt <= 100);
        default:
            return false;
    }
}
exports.supportsCardActions = supportsCardActions;
function getChannelId(addressable) {
    var channelId;
    if (addressable) {
        if (addressable.hasOwnProperty('message')) {
            channelId = addressable.message.address.channelId;
        }
        else if (addressable.hasOwnProperty('address')) {
            channelId = addressable.address.channelId;
        }
        else if (addressable.hasOwnProperty('channelId')) {
            channelId = addressable.channelId;
        }
    }
    return channelId ? channelId.toLowerCase() : '';
}
exports.getChannelId = getChannelId;
