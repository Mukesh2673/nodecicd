import * as mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  address: {
    type: String,
    default: ''
  },
  password:{
    type: String,
    default:""
  },
  accessToken:{
    type: String,
    default:""
  },
  // profile:{
  //   type:String,
  //   default:''
  // },
  vat:{
    type:String,
    default:''
  },
  category: {
    type: Array,
    default: []
  },
  faq:{
  type: Array,
  default: []
  },
  service:{
  type: Array,
  default: []
},
subscription:{
  type: String,
  default: ''
},
image:{
  type: String,
  default: ''
},
certificateImg:{
  type: String,
  default: '' 
},
city:{
  type: Array,
  default: []
},
description: {
    type: String,
    default: ''
  },
email:{
    type: String,
    default: '',
  },
 
proBadge:{
  type: String,
  default: '',
}, 
expiredDate: {
    type: String,
    default:''
  },

phone:{
    type:String,
    default:''
  },
countryCode:{
  type:String,
  default:''
},
status:{
    type:Boolean,
    default:false
  },
availableTime:{
    type:Array,
    default: []
  }, 

userId:{
  type:String,
  default:""
},
startDate:{
    type:String,
    default:'' 
},
subtitle:{
    type:String,
    default:''  
},
title:{
    type:String,
    default:''  
},
plan:{
  type:String,
  default:''
},
cretedUser:{
  type:String,
  default:''
},
isDeleted:{
    type:Boolean,
    default:false 
},
businessName:{
  type: String,
  default:''
},
instagram:{
  type:String,
  default:''
},
facebook:{
  type:String,
  default:''
},
whatsapp:{
  type:String,
  default:''
},
notification:{
  type:String,
  default:''
},
dialStatus:{
  type:Boolean,
  default:true
},
priceCatalogStatus:{
  type:Boolean,
  default:true
}

},
  { timestamps: true });

  profileSchema.set('toJSON', {
  virtuals: false, transform: (doc, ret, Options) => {
    delete ret.__v
  }
})

export const profileModel = mongoose.model('profile', profileSchema);