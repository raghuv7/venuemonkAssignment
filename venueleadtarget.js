'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var venueleadtargetModel = function() {
    var venueleadtargetSchema = new mongoose.Schema({
        event_id: String,
        venue_id: String,
        venue_name: String,
        lead_date: Date,
        quality: String,
        category: String,
        isPaid: {
            type: Boolean,
            default: false
        },
        subscription_type: String,
    },  { usePushEach: true });
    venueleadtargetSchema.set('versionKey', false);
    return mongoose.model('Venueleadtarget', venueleadtargetSchema);
};

module.exports = new venueleadtargetModel();
