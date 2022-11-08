This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation 

First, you have to install npx:
```bash
npm install -g npx
```
Continue with the json-server installation
```bash
npm install -g json-server
```
## Getting Started

First, you have to post the databases on a sever to handle the users and articles informations : 
```bash
npm run debut
# or
yarn debut
```
Then open an other terminal and run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next Js Build deployment](https://nextjs.org/docs/deployment) - learn how to deploy the app

## Routing 

You can search a specific article by routing its Id, Try to root : /users/3 for example to see a the third users

You can also root /about , /contacts , articles and /  to see the differents pages. A footer is at the bottom of each page to allow a easy navigation.

## Information

Each article or user is linked to its own Detail page containing its personnal informations. The informations are dynamically updated according to the .json files.

Add for example your profile into the list_users.json according to this pattern :
```json
{
      "id": "yourId",
      "name": "yourName",
      "username": "yourUserName",
      "email": "your@email"
}
```
 
 