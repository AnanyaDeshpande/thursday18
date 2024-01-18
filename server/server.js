const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://01fe21bcs180:Sonikanti%402003@database.lvyvjl3.mongodb.net/SE', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connect('mongodb://localhost:27017/khushi', {
  mongoose.connect('mongodb://localhost:27017/irca', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongodb://localhost:27017/

const formDataSchema = new mongoose.Schema({
  addictname: String,
  original_pname:String,
  maritalStatus: String,
  occupation: String,
  age: Number,
  dob: String,
  dateOfIntake: String,
  bpl: String,
  yearOfDrinking: Number,
  yearOfExcessiveDrinking: Number,
  presentPatternOfDrinking: String,
  useOfOtherDrugs: String,
  psychiatricProblem: String,
  denial: String,
  physicalProblems: String,
  priorTreatment: String,
  use_of_other_drugs: String,
  motivatingFactor: String,

  issue1: String,
  issue2: String,
  issue3: String,
  issue4: String,
  impression: String,
  actionTaken: String,
  address: String,
  mobNo1: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo2: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo3: {
    number: Number,
    name: String,
    relation: String
  },
  landlineNo1: {
    number: Number,
    name: String,
    relation: String
  },
  remarks: String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: String,
  ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: String,
  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: String,
  ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: String,
  ಮೊಬೈಲ: Number,
  
  ಹೆಸರು: String,
  ನಿವಾಸ: String,
  age: String,
  place: String,
  ಸಾಕ್ಷಿದಾರ1: String,
  ನಿವಾಸ1: String,
  ಸಾಕ್ಷಿದಾರ2: String,
  ನಿವಾಸ2: String,
  name1: String,
  age1: String,
  place1: String,
  name2: String,
  age2: String,
  place2: String,

  SpecialNoteವಿಶೇಷಸೂಚನೆ:String,
  name:String,
  MobileNo:Number,
  ದಿನ:Number,
  ತಿಂಗಳು:String,
  ವರ್ಷ:Number,
  Date:Number,
  Month:String,
  Year: Number,
  attenderName1:String,
  attenderName2:String,
  date:Number,
  MonthYear:String,
  sig1:String,
  sig2:String,
  sig3:String,
  sig4:String,
  sig5:String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಸಹಿ:String,
  signature1: String,
  signature2: String,
  PhysicalComplications:String,

  signature71: String,
  signature72: String,

  signature21: String,

  signature31:String,
  signature32:String,
  photo:String,

  //-----------------------------------------------------------------------------------------
  nm: String,
    ag: String,
    dor: String,
    c1:String,
    c2:String,
    c3:String,
    c4:String,
    c5:String,
    c6:String,
    c7:String,
    c8:String,
    a1:String,
    a2:String,
    a3:String,
    a4:String,
    a5:String,
    a6:String,
    a7:String,
    a8:String,
    a9:String,
    a10:String,
    a11:String,
    a12:String,
    a13:String,
    a14:String,
    a15:String,
    a16:String,
    a17:String,
    a18:String,
    a19:String,
    a20:String,
    a21:String,
    a22:String,
    a23:String,
    a24:String,
    a25:String,
    a26:String,
    a27:String,
    a28:String,
    a29:String,
    a30:String,
    a31:String,
    a32:String,
    a33:String,
    a34:String,
    a35:String,
    a36:String,
    a37:String,
    a38:String,
    a39:String,
    a40:String,
    a41:String,
    a42:String,
    a43:String,
    a44:String,
    a45:String,
    a46:String,
    a47:String,
    a48:String,


    n1: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    p5: String,
    p6: String,
  drugtremor:String,
  druginsomnia:String,
  drugdiarrhoea:String,
  drugseverepain:String,
  drugrestless:String,
  knowledge_9:String,
    p7: String,
    p8: String,
    p9: String,
    p10: String,
    p11: String,
    p12: String,
    p13: String,
    p14: String,
    p15: String,
    p16: String,
    p17: String,
    p18: String,
    p19:String,
    t1:String,
    t2:String,
    t3:String,
    t4:String,
    t5:String,
    t6:String,
    t7:String,
    t8:String,
    t9:String,
    t10:String,
    t11:String,
    t12:String,
    t13:String,
    t14:String,
    t15:String,
    t16:String,
    t17:String,
    t18:String,
    t19:String,
    t20:String,
    t21:String,
    t22:String,
    t23:String,
    t24:String,
    t25:String,
    t26:String,
    t27:String,
    t28:String,
    t29:String,
    t30:String,
    t31:String,
    t32:String,
    t33:String,
    t34:String,
    t35:String,

    denial_type_10:String,
    rc41: String,
rc42: String,
rc43: String,
rc44: String,
rc45: String,
rc46: String,
rc47: String,
rc48: String,
rc49: String,
rc50: String,
rc51: String,
rc52: String,
rc53: String,
rc54: String,
rc55: String,
rc56: String,
rc57: String,
rc58: String,
rc59: String,
rc60: String,
rc61: String,
rc62: String,
rc63: String,
rc64: String,
rc65: String,
rc66: String,
rc67: String,
rc68: String,
rc69: String,
rc70: String,
rc71: String,
rc72: String,
rc73: String,
rc74: String,
rc75: String,
rc76: String,
rc77: String,
rc78: String,
rc79: String,
rc80: String,
rc81: String,
rc82: String,
rc83: String,
rc84: String,

fourthname: String,
age : String,
dateofad : String,
his : String,
phy : String,
past : String,
psyc : String,
with : String,
tre : String,
    

rc1: String,
rc2: String,
rc3: String,
rc4: String,
rc5: String,
rc6: String,
rc7: String,
rc8: String,
rc9: String,
rc10: String,
rc11: String,
rc12: String,
rc13: String,
rc14: String,
rc15: String,
rc16: String,
rc17: String,
rc18: String,
rc19: String,
rc20: String,
rc21: String,
rc22: String,
rc23: String,
rc24: String,
rc25: String,
rc26: String,
rc27: String,
rc28: String,
rc29: String,
rc30: String,
rc31: String,
rc32: String,
rc33: String,
rc34: String,
rc35: String,
rc36: String,
rc37: String,
rc38: String,
rc39: String,
rc40: String,
name_14:String,
reg_14:String,
bpdetail1_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail2_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail3_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail4_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail5_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail6_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail7_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail8_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail9_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail10_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
name_15:String,
reg_15:String,
//------------------------
bpdetail1_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail2_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail3_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail4_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail5_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail6_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail7_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail8_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail9_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail10_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
name_19:String,
age_19:Number,
regid_19:String,
reddetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
orangedetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
yellowdetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
greendetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
bluedetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
antidiabeticdetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
medidetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
insulindetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
tempdatedetail_19:{
tdate1_19:String,
tdate2_19:String,
tdate3_19:String,
tdate4_19:String
},
fdetail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f107detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f106detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f105detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f104detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f103detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f102detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f101detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f100detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f99detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f98detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f97detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
pulse_19:{
p1_19:[0],
p2_19:[0],
p3_19:[0],
p4_19:[0]
},
bp_19:{
bp1_19:[0],
bp2_19:[0],
bp3_19:[0],
bp4_19:[0]
},
    // --------------------------------------------------------------------
  detail1_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail2_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail3_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail4_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail5_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail6_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail7_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail8_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail9_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail10_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  mother_death_reason: String,
  father_death_reason: String,
  father_death_age: Number,
  mother_death_age: Number,
  mtongue_21: String,
  knownLang: String,
  denial_type: String,
  causefactor_22:String,
  tolerence_22:String,
  blackout_22:String,

  behaviour1_22:String,
  behaviour2_22:String,
  behaviour3_22:String,
  behaviour4_22:String,
  behaviour5_22:String,
  behaviour6_22:String,

  childhood_22:String,
  exp15_1:String,
  exp15_2:String,
  exp15_3:String,
  exp15_4:String,
  exp15_5:String,
  exp15_6:String,
  exp15_7:String,
  exp15_8:String,

  years_23:Number,
  prob15_1:String,
  prob15_2:String,
  prob15_3:String,
  prob15_4:String,
  prob15_5:String,
  prob15_6:String,
  prob15_7:String,
  prob15_8:String,

  pastAch_1:String,
  pastAch_2:String,
  name_23:String,
  age_23:Number,
  religion_23:String,
  education_23:String,
  occupation_23:String,
  income_23:String,
  myears_23:Number,
  marriageType:String,

  acceptedByFamily_24:String,
  previousMarriages_24:String,
  separatedDueToAddiction_24:String,
  suspiciousOfWife_24:String,
  familyViolence_24:String,
  verbalabuse_24:String,
  neighbourviolence_24:String,
  articlebreak_24:String,
  maleChildrenCount:Number,
  femaleChildrenCount:Number,
  
health1_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health2_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health3_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health4_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health5_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health6_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
relation1_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation2_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation3_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation4_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation5_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation6_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
damagetype_25:String,
extramarital_25:String,
age_25:Number,
sustrel_25:String,
years_25:Number,

livarr_26:String,
child_26:String,
highrisk_26:String,
sx_26:String,
q24_26:String,
hivtest_26:String,
prob26_1:String,
prob26_2:String,
prob26_3:String,
prob26_4:String,
prob26_5:String,

regno:String,

    nm:String,
    s:String,
    age:String,
    dor:String,
    rel:String,
    com:String,
    edu:String,
    occu:String,
    ms:String,
    income:String,
    la:String,
    mem:String,
    tele:String,
    q122:String,
    q123:String,
    q124:String,
    q125:String,
    q126:String,
    q127:String,
    q128:String,
    q129:String,
    q130:String,



    work:String,
    award:String,
    job:String,
    jobs:String,
    unemployment:String,
    jobs1:String,
    z59:String,
    z60:String,
    z61:String,
    z62:String,
    z63:String,
    z64:String,
    z65:String,
    z66:String,
    z67:String,
    z68:String,
    z69:String,
    // z70:String,
    z71:String,
    z72:String,
    z73:String,
    z74:String,
    z75:String,
    z76:String,
    z77:String,
    z78:String,
    z79:String,
    z80:String,
    cwork:String,
    mild:String,
    mild1:String ,  
    
    
    law:String,
    law1:String,
    law2:String,
    law3:String,
    other:String,
    z81:String,
    z82:String,
    z83:String,
    z84:String,
    z85:String,
    z86:String,
    z87:String,
    z88:String,
    z89:String,
    z90:String,
    z91:String,
    z92:String,
    z93:String,
    z94:String,
    z95:String,
    temple1:String,
    pilgrimage1:String,
    festival1:String,




    visit:String,
    ref:String,
    at:String,
    org:String,
    z96:String,
    z97:String,
    z98:String,
    z99:String,
    z100:String,
    z101:String,
    z102:String,
    z103:String,
    z104:String,
    z105:String,
    z106:String,
    z107:String,
    z108:String,
    z109:String,
    z110:String,
    z111:String,
    drop:String,
    lackofmotivation_29:String,
    familysupport_29:String,
    poverty_29:String,
    legalproblem_29:String,
    unabletocope_29:String,
    inadequatefacilities_29:String,
    anyother_29:String,
    extn:String,
    reason:String

});

const FormDataModel = mongoose.model('formData', formDataSchema);

let isSaving = false;

app.post('/api/saveFormData/:addictName', async (req, res) => {
  try {
    while (isSaving) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isSaving = true;

    const formData = req.body;
    const componentName = formData.component;
    const addictName = req.params.addictName;

    let formDataModel;

    formDataModel = await FormDataModel.findOne({ addictname: addictName });
  // ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: 
  //formData.ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು

    if (!formDataModel) {
      console.log("formdata null");
      formDataModel = new FormDataModel(formData);
      await formDataModel.save();
    } else {
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          formDataModel[key] = formData[key];
        }
      }
    }

    await formDataModel.save();
    res.json({ success: true, data: formDataModel });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    isSaving = false;
  }
});


app.get('/api/getFormData/:addictName', async (req, res) => {
  try {
    const addictName = req.params.addictName;

    // Perform a query to retrieve data based on the addictName
    const formData = await FormDataModel.findOne({ addictname: addictName });

    if (!formData) {
      res.status(404).json({ success: false, error: 'Addict not found' });
      return;
    }

    res.json({ success: true, data: formData });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/api/getAllAddictDetails', async (req, res) => {
  try {
    
    
    // Perform a query to retrieve all data
    const allFormData = await FormDataModel.find();

    if (!allFormData || allFormData.length === 0) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }

    // Extracting addict details from the retrieved data
    const allAddictDetails = allFormData.map(formData => {
      return {
        addictName: formData.addictname,
        patientName: formData.original_pname, // Assuming pat_name is a field in your schema
        photo: formData.photo // Assuming photo is a field in your schema
        
      };
    });
    

    res.json({ success: true, data: allAddictDetails });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const flattenSchema = (schema, parentKey = '') => {
  let flattened = {};
  for (const key in schema.paths) {
    const fullPath = parentKey ? `${parentKey}.${key}` : key;
    
    if (schema.paths[key].schema) {
      // Check for specific nested schema
      if (schema.paths[key].schema.paths) {
        const nestedKeys = Object.keys(schema.paths[key].schema.paths);
        nestedKeys.forEach(nestedKey => {
          const nestedFullPath = `${fullPath}.${nestedKey}`;
          flattened[nestedFullPath] = schema.paths[key].schema.paths[nestedKey].instance;
        });
      } else {
        flattened = { ...flattened, ...flattenSchema(schema.paths[key].schema, fullPath) };
      }
    } else {
      flattened[fullPath] = schema.paths[key].instance;
    }
  }
  return flattened;
};

app.get('/api/downloadCsv', async (req, res) => {
  try {
    
    // Perform a query to retrieve all data
    const allFormData = await FormDataModel.find();
    console.log("downloading");

    if (!allFormData || allFormData.length === 0) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }


    const flattenedSchema = flattenSchema(formDataSchema);

    // Get column headers
    const keys = Object.keys(flattenedSchema);

    // Create CSV writer
    const csvWriter = createCsvWriter({
      path: 'formData.csv',
      header: keys.map((key) => ({ id: key, title: key })),
    });

    // Write data to the CSV file
    await csvWriter.writeRecords(allFormData.map((data) => flattenData(data._doc, flattenedSchema)));

    
    res.json({ success: true, data: {y:"car"} });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const flattenData = (data, flattenedSchema) => {
  let flattenedData = {};
  for (const key in flattenedSchema) {
    const nestedKeys = key.split('.');
    let nestedData = data;
    for (const nestedKey of nestedKeys) {
      if (nestedData && nestedData[nestedKey] !== undefined) {
        nestedData = nestedData[nestedKey];
      } else {
        nestedData = undefined;
        break;
      }
    }
    flattenedData[key] = nestedData;
  }
  return flattenedData;
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*
const express = require('express');
const mongoose = require('mongoose');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async function () {
  // Define your MongoDB model/schema
  const FormDataModel = mongoose.model('FormData', formDataSchema);

  try {
    // Fetch all data from MongoDB
    const allFormData = await FormDataModel.find();

    if (!allFormData || allFormData.length === 0) {
      console.log('No data found in MongoDB');
      mongoose.disconnect();
      return;
    }

    // Define CSV writer
    const csvWriter = createCsvWriter({
      path: 'path/to/your/output/file.csv',
      header: Object.keys(allFormData[0]).map((key) => ({ id: key, title: key })),
    });

    // Write data to the CSV file
    await csvWriter.writeRecords(allFormData);

    console.log('CSV file was written successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error fetching or writing data:', error);
    mongoose.disconnect();
  }
});

// Serve the CSV file for download
app.get('/download', (req, res) => {
  const file = 'path/to/your/output/file.csv';
  res.download(file, 'formData.csv', (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/

