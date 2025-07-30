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

    codeStubs: [
        {
            language: {
                type: String,
                enum: ["CPP", "JAVA", "PYTHON"],
                required: true
            },
            startSnippet: {
                type: String,
            },
            endSnippet: {
                type: String,
            },
            userSnippet: {
                type: String,
            }
        }
    ],

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
