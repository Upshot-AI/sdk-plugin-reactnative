import { NativeModules, NativeEventEmitter} from 'react-native';
import { UpshotActivityType } from './UpshotConstants'

const UpshotReact = NativeModules.UpshotReact;
var upshotEmitter = new NativeEventEmitter(UpshotReact)


var Upshot = {
    
    /**
    * initialize Upshot using config file
    * Authentication status will be notified through event listener
    */

    initializeUpshot: function() {
        UpshotReact.initializeUpshot();
    },
         

    /**
    * Create PageView / ScreenView event
    *  
    * @param {string} ScreenName - the current screen name
    * @param {function(eventId)} callback- on success of event creation will get eventId else null as a callback 
    */
    createPageViewEvent: function(screenName, callback) {
        UpshotReact.createPageViewEvent(screenName, callback);
    },

    /**
    * Create custom event
    *  
    * @param {string} eventName - the current screen name
    * @param {string} payload - the payload should be json string
    * @param {boolean} isTimed - isTimed true for Timed events
    * @param {function(eventId)} callback - on success of event creation will get eventId else null as a callback 
    */
    createCustomEvent: function(eventName, payload, isTimed, callback) {
        UpshotReact.createCustomEvent(eventName, payload, isTimed, callback); 
    },

    /**
    * Set data and close custom event for eventId
    *  
    * @param {string} payload - the payload should be json string
    * @param {string} eventId - eventId to close event 
    */
   
    setValueAndClose: function(payload, eventId) {

        UpshotReact.setValueAndClose(payload, eventId);
    },

    /**
    * close custom event for eventId
    *  
    * @param {string} eventId - eventId to close event
    */

    closeEventForId: function(eventId) {

        UpshotReact.closeEventForId(eventId);
    },

    /** 
    *  Dispatch all events to server
    *  
    * @param {boolean} timed - timed is true will send all events to server including timed events
    * @param {function(status)} callback - get the status of dispatch events
    */

    dispatchEventsWithTimedEvents: function(timed, callback) {
        UpshotReact.dispatchEventsWithTimedEvents(timed, callback);
    },


    /** 
    *  Create location event 
    *  
    * @param {string} latitude - latitude
    * @param {string} longitude - longitude
    */
    createLocationEvent: function(latitude, longitude) {

        UpshotReact.createLocationEvent(latitude, longitude);
    },

    
    /** 
    *  Send user details to upshot
    *  
    * @param {string} userData - userData is jsonString
    * @param {function(status)} callback - get the status of profile updation
    */
    setUserProfile: function(userData, callback) {

        UpshotReact.setUserProfile(userData, callback);
    },

    /** 
    *  get list of user details from Upshot
    *      
    * @param {function(response)} callback - get json string as a callback with list of user details
    */
    getUserDetails: function(callback) {

        UpshotReact.getUserDetails(callback);
    },

    /** 
    *  Show Activity with type and tag
    *      
    * @param {Int} activityType - activityType will get from dashboard
    * @param {string} tag - requested tag
    */
    showActivityWithType: function(type, tag) {

        UpshotReact.showActivityWithType(type, tag);
    },

    /** 
    *  Show Activity with activityId
    *      
    * @param {string} activityId - activityId given by Upshot
    */

    showActivityWithId: function(activityId) {

        UpshotReact.showActivityWithId(activityId);
    },

    /** 
    *  Remove upshot tutorials
    *          
    */
    removeTutorials: function() {
        UpshotReact.removeTutorials();
    },

    /** 
    *  get list of campaign data from Upshot
    *      
    * @param {function(response)} callback - get json string as a callback with list of user details
    */

    fetchInboxInfo: function(callback) {
        
        UpshotReact.fetchInboxInfo(callback);
    },

    /** 
    *  get list of user badges from Upshot
    *      
    * @param {function(response)} callback - get json string as a callback with list of user details
    */
    getUserBadges: function(callback) {
        UpshotReact.getUserBadges(callback);
    },

    /** 
    *  register for push
    *  requires for only ios
    * @param {boolean} enableForeground - show push notification in foreground
    * @param {function(status)} callback - get the status of push registration
    */
    registerForPush: function(enableForeground, callback) {

        UpshotReact.registerForPush(enableForeground, callback);
    },

    /** 
    *  Send device token to Upshot
    *  
    * @param {string} token - device token
    */
    sendDeviceToken: function(token) {

        UpshotReact.sendDeviceToken(token);
    },

    /** 
    *  Send push click payload to Upshot
    *  
    * @param {string} pushPayload - push click payload
    */
    sendPushDataToUpshot: function(pushPayload) {

        UpshotReact.sendPushDataToUpshot(pushPayload);
    },

    /** 
    *  Send device based push with custom payload
    *  
    * @param {string} pushDetails - push payload like title, message..
    * @param {function(status)} callback - get the status of push
    */
    sendPushNotificationWithDetails: function(pushDetails, callback) {

        UpshotReact.sendPushNotificationWithDetails(pushDetails, callback);
    },

    
    /** 
    *  Disable / delete user as per GDPR
    *  
    * @param {boolean} shouldDisable - shouldDisable true for delete account and false for enable
    * @param {function(status)} callback - get the status of diable account status
    */
    disableUser: function(shouldDisable, callback) {

        UpshotReact.disableUser(shouldDisable, callback);
    },

    /** 
    *  Get upshot userId
    *      
    * @param {function(userId)} callback - get userId generated by Upshot
    */
    getUserId: function(callback) {
        UpshotReact.getUserId(callback);
    },

    /** 
    *  Get Upshot SDk version
    *      
    * @param {function(version)} callback - get Upshot sdk version
    */
    getSDKVersion: function(callback) {

        UpshotReact.getSDKVersion(callback);
    },

    
    /** 
    *  Get list of active reward program
    *      
    * @param {function(response)} successCallback - response is in json string
    * @param {function(error)} failureCallback - will get error in case of any failure
    */
    getRewardsList: function(successCallback, failureCallback) {

        UpshotReact.getRewardsList(successCallback, failureCallback);        
    },

    /** 
    *  Get history of reward for a given programId
    * @param {string} programId - reward programId
    * @param {Int} historyType - reward history type
    * @param {function(response)} successCallback - response is in json string
    * @param {function(error)} failureCallback - will get error in case of any failure
    */
    getRewardHistoryForProgram: function(programId, historyType, successCallback, failureCallback) {

        UpshotReact.getRewardHistoryForProgram()
    },

    /** 
    *  Get history of reward for a given programId
    * @param {string} programId - reward programId    
    * @param {function(response)} successCallback - response is in json string
    * @param {function(error)} failureCallback - will get error in case of any failure
    */
    getRewardRulesforProgram: function(programId, successCallback, failurecallback) {

        UpshotReact.getRewardRulesforProgram(programId, successCallback, failurecallback);
    },


    /** 
    * Redeem rewards for a given programId with redeem amount 
    * @param {string} programId - reward programId    
    * @param {Int} transactionValue - transactionValue
    * @param {Int} redeemValue - redeem amount
    * @param {string} tag - tag to redeem
    * @param {function(response)} successCallback - response is in json string
    * @param {function(error)} failureCallback - will get error in case of any failure
    */
    redeemRewardsForProgram: function(programId, transactionValue, redeemValue, tag, successCallback, failurecallback) {

        UpshotReact.redeemRewardsForProgram(programId, transactionValue, redeemValue, tag, successCallback, failurecallback);        
    },

    /** 
    * terminate Upshot
    *     
    */
    terminate: function() {
        UpshotReact.terminate();
    },

    /**
    * Add Upshot event listener
    * supported events UpshotAuthStatus, UpshotActivityDidAppear, UpshotActivityDidDismiss, UpshotDeepLink, UpshotPushToken, UpshotPushPayload
    * @param {string} eventName - the Upshot event name
    * @param {function(event)} your event handler
    */
   addListener: function(eventName, handler) {
    if (upshotEmitter) {
        upshotEmitter.addListener(eventName, handler);
    }
},
};

export { UpshotActivityType }

export default Upshot;
