'use server';
// Server side part of handle form submission
// Client side will be on the actions/sendEmail.ts

// I will use third party library to send the email RESEND0.16.0 
import { Resend } from 'resend';
// instanciate the Resend
// to access RESEND_API_KEY use process.env
const resend = new Resend(process.env.RESEND_API_KEY)


// sendEmail - will send the data to the server
// FormData - will get the value of the input and textarea
export const sendEmail = async (formData: FormData) => {
// formData.get('senderEmail') - will get the value of the input
// use server - will make the code to be executed only on the server

console.log("Running on the server")
console.log(formData.get('senderEmail'))
console.log(formData.get('message'))
const senderEmail = formData.get('senderEmail')
const message = formData.get('message')

if (!senderEmail || !message) {
    return {
        error: "Invalid message"
    }
}


// now we can use resend variable to send Emails
resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'yakupovdamir93@gmail.com',
    subject: 'New message from the contact form',
    text: `Email: ${senderEmail}\nMessage: ${message}`
})
}

