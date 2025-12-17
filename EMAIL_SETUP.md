# 📧 Email Configuration Guide

Your contact form now sends emails! Follow these steps to set it up:

## 🔧 **Step 1: Local Development Setup**

### Option A: Using Gmail (Recommended for Testing)

1. **Go to [Google Account Security](https://myaccount.google.com/security)**
2. **Enable 2-Step Verification** (if not already enabled)
3. **Create an App Password**:
   - Go to App passwords
   - Select Mail and Windows Computer (or your device)
   - Google will generate a 16-character password
4. **Create `.env.local` file** in your project root:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   CONTACT_EMAIL=your-gmail@gmail.com
   ```
5. **Test locally:**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Go to Contact section
   - Submit the form
   - Check your email

### Option B: Using Another Email Service (Outlook, Yahoo, etc.)

Update `.env.local` with your provider's SMTP settings:

```
# For Outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
CONTACT_EMAIL=your-email@outlook.com
```

For other providers, update the `service` in `app/api/contact/route.js`:
- Gmail: `service: 'gmail'`
- Outlook: `service: 'outlook'`
- Yahoo: `service: 'yahoo'`
- Or manually set SMTP host/port

## 🌐 **Step 2: Vercel Deployment Setup**

1. **Go to your Vercel Dashboard**
2. **Select your `my-portfolio` project**
3. **Click Settings → Environment Variables**
4. **Add these three variables:**
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASSWORD`: your-app-password
   - `CONTACT_EMAIL`: your-email@gmail.com
5. **Save and Redeploy:**
   - Go back to Deployments
   - Click the three dots on latest deployment
   - Click "Redeploy"

## ✅ **Testing the Email**

1. **Local test:**
   ```bash
   npm run dev
   ```
   - Submit a test message via the contact form
   - Check if email arrives

2. **Production test:**
   - Go to your live portfolio URL (vercel.com)
   - Submit a test message
   - Verify email received

## 📧 **What Happens When Someone Contacts You**

1. **They fill the form** with name, email, message
2. **Click "Send Message"**
3. **You receive an email** with their message
4. **They receive a confirmation email** thanking them
5. **Form clears** with success message

## 🔐 **Security Notes**

- ✅ Never commit `.env.local` to GitHub (it's in .gitignore)
- ✅ App passwords are safer than storing your actual Gmail password
- ✅ Email validation happens on both client and server
- ✅ The API route runs only on Vercel servers (secure)

## 🐛 **Troubleshooting**

### "Failed to send email"
- Check that `.env.local` is created locally
- Check that Vercel environment variables are set
- Verify your app password is correct (copy-paste carefully)

### "Gmail says 'Less secure app' error"
- You must use an App Password, not your regular password
- Regular Gmail password won't work with Nodemailer

### "Email never arrives"
- Check spam/junk folder
- Verify the CONTACT_EMAIL environment variable is correct
- Check browser console for error messages

## 📝 **Customization**

You can customize the email template in `app/api/contact/route.js`:
- Change email subject
- Modify email HTML layout
- Add more recipient emails
- Change the signature

## 🚀 **Done!**

Your contact form is now fully functional with email notifications!

Questions? Check:
- Nodemailer docs: https://nodemailer.com/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
