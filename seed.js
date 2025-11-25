// Simple script to seed doctors
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hospital';
mongoose.connect(MONGO_URI).then(async ()=>{
  await Doctor.deleteMany({});
  const docs = [
    { name: 'Dr. Asha Patel', specialization: 'General Physician', slots: ['2025-11-26T10:00','2025-11-26T11:00','2025-11-26T14:00'] },
    { name: 'Dr. Raj Kumar', specialization: 'Cardiologist', slots: ['2025-11-27T10:00','2025-11-27T12:00'] }
  ];
  await Doctor.insertMany(docs);
  console.log('Seeded doctors'); process.exit(0);
}).catch(e=>console.error(e));
