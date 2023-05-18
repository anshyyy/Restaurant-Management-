const mongoose = require('mongoose');

const department = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique:true
    }
},{timestamps:true});

const Department= mongoose.model("Department",department);


// Create an array of objects representing the names
const names = [
  { name: 'Department of English' },
  { name: 'Department of Germanic & Romance Studies' },
  { name: 'Department of Hindi' },
  { name: 'Department of Library & Information Science' },
  { name: 'Department of Linguistics' },
  { name: 'Department of Modern Indian Languages and Literary Studies' },
  { name: 'Department of Philosophy' },
  { name: 'Department of Psychology' },
  { name: 'Department of Sanskrit' },
  { name: 'Department of Finance and Business Economics' },
  { name: 'Department of Commerce' },
  { name: 'Department of Biochemistry' },
  { name: 'Department of Electronics Science' },
  { name: 'Department of Physical Education & Sports Sciences' },
  { name: 'Department of Microbiology' },
  { name: 'Institute of Informatics & Communication (IIC)' },
  { name: 'Department of Law' },
  { name: 'Department of Business Management & Industrial Administration' },
  { name: 'Department of Statistics' },
  { name: 'Department of Mathematics' },
  { name: 'Department of Computer Science' },
  { name: 'Department of Dermatology, Venereology & Leprosy' },
  { name: 'Department of Medicine' },
  { name: 'Department of Physiology' },
  { name: 'Department of Forensic Medicine' },
  { name: 'Department of Music' },
  { name: 'Department of Fine Arts' },
  { name: 'Department of Distance & Continuing Education' },
  { name: 'Department of Zoology' },
  { name: 'Department of Physics & Astrophysics' },
  { name: 'Department of Geology' },
  { name: 'Department of Environmental Studies' },
  { name: 'Department of Chemistry' },
  { name: 'Department of Home Science' },
  { name: 'Department of Political Science' },
  { name: 'Department of Sociology' },
  { name: 'Department of Economics' },
  { name: 'Department of Journalism' },
  { name: 'Department of Geography' },
  { name: 'Department of History' },
  { name: 'Department of Applied Sciences & Humanities' }
];


Department.find().then((value)=>{

console.log("department",value.length);

if(value.length===0){
// Define an async function for the bulk insertion
const bulkInsertNames = async () => {
  try {
    // Use the insertMany method with ordered: false to perform bulk insertion
    const batchSize = 20; // Batch size for insertion

    for (let i = 0; i < names.length; i += batchSize) {
      const batch = names.slice(i, i + batchSize);
      const result = await Department.insertMany(batch, { ordered: false });
      console.log('Bulk insertion successful:', result);
    }
    
  } catch (error) {
    console.error('Bulk insertion error:', error);
  }
};

// Call the async function to execute the bulk insertion
bulkInsertNames();

}

}
);



module.exports = Department;