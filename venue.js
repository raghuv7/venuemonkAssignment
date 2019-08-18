'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const venueSchema = new Schema({
  prevenueId: String,
  isPrimary: {
    type: Boolean,
    default: false
  },
  subPrevenueId: String,
  parentId: String,
  subVenues: ["String"],
  venueTrackerId: String,
  venuecontact: String,
  venuecontract: String,
  review: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  vm_id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  sub_area: {
    type: String,
    trim: true
  },
  sub_area_seo: {
    type: String,
    trim: true
  },
  locations: ['String'],
  searchLocations: ['String'],
  region: {
    type: String,
    trim: true
  },
  landmark: String,
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: String,
  country: String,
  zipCode: Number,
  loc: {
    long: {
      type: Number,
      default: 0
    },
    lat: {
      type: Number,
      default: 0
    }
  },
  isNewFormat: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    trim: true,
    default: ""
  },
  approachDesc: {
    type: String,
    trim: true,
    default: ""
  },
  ambienceDesc: {
    type: String,
    trim: true,
    default: ""
  },
  serviceDesc: {
    type: String,
    trim: true,
    default: ""
  },
  uspDesc: {
    type: String,
    trim: true,
    default: ""
  },
  shortDescription: {
    type: String,
    trim: true
  },
  occasions: [""],
  suitable_occasions: [{
    type: Schema.ObjectId,
    ref: 'Occasion'
  }], //todo: array of strings
  facilities: [{
    type: Schema.ObjectId,
    ref: 'Facility'
  }],
  cuisines: ['String'],
  amenities: ['String'],
  isRoomsAvailable: Boolean,
  roomCount: Number,
  parkingCount: Number,
  venuetypes: [{
    type: Schema.ObjectId,
    ref: 'Venuetype'
  }],
  propertyType: ['String'],
  schemaType: {
    type: String,
    default: 'Place'
  },
  searchVenueTypes: ['String'],
  searchAmenities: ['String'],
  searchOccasions: ['String'],
  website: String,
  images: ['String'],
  newImages: ["String"],
  primaryImages: ["String"],
  approved: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    default: 0
  },
  vmrating: {
    type: Number,
    default: 0
  },
  oldrating: {
    type: Number,
    default: 3
  },
  vm_tag: String,
  vmDescription: String,
  keywords: ['String'],
  uspTags: ['String'],
  viewCount: {
    type: Number,
    default: 0
  },
  shortlistCount: {
    type: Number,
    default: 0
  },
  features: [{
    _id: false,
    text: String,
    isAllowed: {
      type: Boolean,
      default: true
    }
  }],
  area: Number,
  floorLocation: String,
  highlights: {
    outsidecaterer: {
      type: Boolean,
      default: false
    },
    outsidedecorator: {
      type: Boolean,
      default: false
    },
    outsidedj: {
      type: Boolean,
      default: false
    },
    outsidedrinks: {
      type: Boolean,
      default: false
    }
  },
  onboarded: {
    type: Boolean,
    default: false
  },
  isOnboarded: {
    type: Boolean,
    default: false
  },
  isVegAvailable: {
    type: Boolean,
    default: false
  },
  veg_min: {
    type: Number,
    default: 0
  },
  veg_show: {
    type: Number,
    default: 0
  },
  isNonVegAvailable: {
    type: Boolean,
    default: false
  },
  nonveg_min: {
    type: Number,
    default: 0
  },
  nonveg_show: {
    type: Number,
    default: 0
  },
  isLiquorAvailable: {
    type: Boolean,
    default: false
  },
  liq_min: {
    type: Number,
    default: 0
  },
  liq_show: {
    type: Number,
    default: 0
  },
  isConferencePossible: {
    type: Boolean,
    default: false
  },
  conf_min: {
    type: Number,
    default: 0
  },
  conf_show: {
    type: Number,
    default: 0
  },
  rental: Number,
  taxes: Number,
  isSocialFunctionPossible: {
    type: Boolean,
    default: false
  },
  social_min: {
    type: Number,
    default: 0
  },
  social_show: {
    type: Number,
    default: 0
  },
  cap_min: {
    type: Number,
    default: 15
  },
  cap_max: {
    type: Number,
    default: 0
  },
  seatingStyles: [{
    _id: false,
    name: String,
    count: Number,
    logo: String,
    area: Number
  }],
  liqPolicy: ['String'],
  cateringPolicy: ['String'],
  decoratorPolicy: ['String'],
  djPolicy: ['String'],
  similarVenues: ["String"],
  infoComplete: Number,
  isContractSigned: {
    type: Boolean,
    default: false
  },
  shortlink: {
    type: String,
    default: ''
  },
  isShortlinkCreated: {
    type: Boolean,
    default: false
  },
  menuLink: {
    type: String,
    default: ''
  },
  isMenuLinkCreated: {
    type: Boolean,
    default: false
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  onboarded_on: {
    type: Date
  },
  last_updated: {
    type: Date
  },
  isPermanentlyClosed: {
    type: Boolean,
    default: false
  },
  isTemporarilyClosed: {
    type: Boolean,
    default: false
  },
  isNewLyOpened: {
    type: Boolean,
    default: false
  },
  uploadCount: {
    type: Number,
    default: 0
  },
  isWheelChairAccessible: Boolean,
  isSwimmingPoolAvailable: Boolean,
  isRoomAvailable: Boolean,
  roomCapacity: Number,
  avgRoomPriceRange: String,
  isHookahAvailable: Boolean,
  isChangingRoomAvailable: Boolean,
  isParkingAvailable: Boolean,
  isValetParking: Boolean,
  parkingCapacity: Number,
  isDanceFloorAvailable: Boolean,
  isOutsideLiquorAllowed: Boolean,
  outsideCorkageCharges: Number,
  isOutsideDecoratorAllowed: Boolean,
  decoratorCommission: Number,
  isOutsideDjAllowed: Boolean,
  djCommission: Number,
  isOutsideCatererAllowed: Boolean,
  advanceBookingCharge: Number,
  bookingPolicy: String,
  cancellationCharge: Number,
  cancellationPolicy: String,
  isAutoFeatured: Boolean,
  autoFeaturedId: String,
  isRealEventPresent: Boolean,
  realeventCount: {
    type: Number,
    default: 0
  },
  isPackageAvailable: Boolean,
  packageCount: {
    type: Number,
    default: 0
  },
  shortlistedCountLastThirty: {
    type: Number,
    default: 0
  },
  isReviewAvailable: {
    type: Boolean,
    default: false
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  publicImageCount: {
    type: Number,
    defualt: 0
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  isRedirectLinkAvailable: {
    type: Boolean,
    default: false,
  },
  redirectToLink: {
    type: String,
    trim: true,
    default: '/'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isCustomMetaAvailable: {
    type: Boolean,
    default: false
  },
  overviewPageTitle: {
    type: String,
    default: ''
  },
  overviewPageMetaDescription: {
    type: String,
    default: ''
  },
  overviewPageKeywords: {
    type: String,
    default: ''
  },
  photoPageTitle: {
    type: String,
    default: ''
  },
  photoPageMetaDescription: {
    type: String,
    default: ''
  },
  photoPageKeywords: {
    type: String,
    default: ''
  },
  packagePageTitle: {
    type: String,
    default: ''
  },
  packagePageMetaDescription: {
    type: String,
    default: ''
  },
  packagePageKeywords: {
    type: String,
    default: ''
  },
  reviewPageTitle: {
    type: String,
    default: ''
  },
  reviewPageMetaDescription: {
    type: String,
    default: ''
  },
  reviewPageKeywords: {
    type: String,
    default: ''
  },
}, { usePushEach: true });

venueSchema.set('versionKey', false);
export default mongoose.model('Venue', venueSchema);
