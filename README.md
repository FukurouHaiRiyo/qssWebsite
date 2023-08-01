This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# QSS (Quality, Safety, Security)

This project aims to scan phone numbers, email addresses and links to ensure they're not spam, malicious or scams.




## Features

- Email Validation API - validate email addresses and analyze email reputations with real-time checks

- Phone Validation & Reputation API - validate phone numbers in any country while retrieving the risk score and recent abuse


- Malicious URL Scanner & Domain Reputation API - scan URLs and domains to identify zero-day phishing, malware, and suspicious links. Detect parked or hijacked domains and abusive links with real-time domain intelligence backed by advanced machine learning models.


## API Reference

### Email check

| Method    | Value    | Example                    |
| :-------- | :------- | :------------------------- |
| GET       | key      | ?key={key}&email=noreply@ipqualityscore.com |
| POST      | key      | key={key}&email=noreply@ipqualityscore.com  |

#### Values interpretation

| Field     | Description    | Possible Values            |
| :-------- | :-------       | :------------------------- |
| fraud_score     | The overall Fraud Score of the user based on the email's reputation and recent behavior across the IPQS threat network. Fraud Scores >= 75 are suspicious, but not necessarily fraudulent.       | float |
| recent_abuse | This value will indicate if there has been any recently verified abuse across our network for this email address            | boolean  |
| suspect | This value indicates if the mail server is currently replying with a temporary error and unable to verify the email address | boolean


### Phone check 
| Method    | Value    | Example                    |
| :-------- | :------- | :------------------------- |
| GET       | key      | ?key={key}&phone=18007132618 |
| POST      | key      | key={key}&phone=18007132618  |


#### Values interpretation

| Field     | Description    | Possible Values            |
| :-------- | :-------       | :------------------------- |
| valid     | Is the phone number properly formatted and considered valid       | boolean |
| active | Is this phone number a live usable phone number that is currently active?| boolean, null
| fraud_score | The IPQS risk score which estimates how likely a phone number is to be fraudulent| float
| recent_abuse | Has this phone number been associated with recent or ongoing fraud?| boolean, null
| risky| Is this phone number associated with fraudulent activity, scams, robo calls, fake accounts, or other unfriendly behavior?| boolean, null
| spammer | Indicates if the phone number has recently been reported for spam or harassing calls/texts. | boolean





## Documentation
The official documentation for this API can be viewd by accessing [this link](https://www.ipqualityscore.com/documentation/overview).


## FAQ

#### 1. Does this app collect and store any data?

No, this app doesn't collect and doesn't store any data and personal information. Please check https://www.ipqualityscore.com/ for more information.


#### 2. Does this app display, store and collect any personal information?

No, this app doesn't display, store and collect any personal information.
Please check https://www.ipqualityscore.com/ for more information.


#### 3. What does this app show me?

This app will show you how trustworthy are emails, phone numbers and links.
