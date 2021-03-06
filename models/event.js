var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EventSchema   = new Schema({
	name: {type:String, required:[true, 'Name required']},
    time: {type: Date, required:[true, 'Time required']},
    hour: {type: Date, required:[true,'Hours required']},
    place: {type: String, required:[true, 'Place required']},
    description: {type: String, default: ''},
    maximumLimit:{type: String, default: '0'},
    host: {type: String, required:[true, 'Host required']},
    hostId: {type: String, required:[true, 'Host id required']},
    attending: {type: [String], default: []},
    completed: {type: Boolean, default: false},
    foodstyle: {type: String, default: ''},
    occassion: {type: String, default: ''},
    image: {type: String, default: 'http://www.comohotels.com/metropolitanbangkok/sites/default/files/styles/background_image/public/images/background/metbkk_bkg_nahm_restaurant.jpg'},
});

module.exports = mongoose.model('Event', EventSchema);
