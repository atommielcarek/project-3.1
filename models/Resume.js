const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const resumeSchema = new Schema(
    {
        info: [
            {
            contact: [
                {
                    name: {
                        type: String,
                        minLength: 3,
                        required: [true, 'Must enter a name'],
                    },
                    phone: {
                        type: Number,
                        min: 10,
                    },
                    email: {
                        type: String,
                        required: [true, 'Must enter an email address']
                    },
                    address: {
                        type: String, 
                    },
                },
            ],
            summary: {
                type: String,
            },
            education: [
                {
                    school: {
                        type: String,
                    },
                    major: {
                        type: String,
                    },
                    graduation: {
                        type: Date,
                    },
                },
            ],
            work: [
                {
                    job: {
                        type: String,
                    },
                    duration: {
                        type: Date,
                    },
                    duties: {
                        type: String,
                    },
                },
            ],
            skills: {
                type: String,
            },
        },
    ]},
    {
        toJSON: {
            virtuals: true
        }
    });

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume; 