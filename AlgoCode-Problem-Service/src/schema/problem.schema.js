import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    difficulty : {
        type : String,
        enum : ['easy','medium','hard'],
        required : true,
        default : 'easy'
    },

    testCases : [
        {
            input : {
                type : String,
                required : true
            },
            output : {
                type : String,
                required : true
            }
        }
    ],

    editorial : {
        type : String
    }
})

export const Problem = mongoose.model('Problems',problemSchema);
