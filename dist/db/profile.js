"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileModel = void 0;
const mongoose = __importStar(require("mongoose"));
const profileSchema = new mongoose.Schema({
    address: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ""
    },
    accessToken: {
        type: String,
        default: ""
    },
    // profile:{
    //   type:String,
    //   default:''
    // },
    vat: {
        type: String,
        default: ''
    },
    category: {
        type: Array,
        default: []
    },
    faq: {
        type: Array,
        default: []
    },
    service: {
        type: Array,
        default: []
    },
    subscription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    certificateImg: {
        type: String,
        default: ''
    },
    city: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
    },
    proBadge: {
        type: String,
        default: '',
    },
    expiredDate: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    countryCode: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
    },
    availableTime: {
        type: Array,
        default: []
    },
    userId: {
        type: String,
        default: ""
    },
    startDate: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    plan: {
        type: String,
        default: ''
    },
    cretedUser: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    businessName: {
        type: String,
        default: ''
    },
    instagram: {
        type: String,
        default: ''
    },
    facebook: {
        type: String,
        default: ''
    },
    whatsapp: {
        type: String,
        default: ''
    },
    notification: {
        type: String,
        default: ''
    },
    dialStatus: {
        type: Boolean,
        default: true
    },
    priceCatalogStatus: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });
profileSchema.set('toJSON', {
    virtuals: false, transform: (doc, ret, Options) => {
        delete ret.__v;
    }
});
exports.profileModel = mongoose.model('profile', profileSchema);
//# sourceMappingURL=profile.js.map