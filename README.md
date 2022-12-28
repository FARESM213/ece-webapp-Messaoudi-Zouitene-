# Lab2 

##  Introduction

Ce lab est une introduction a l'utilisation de node.js et de ses modules. 
ygygy
## Installation

- Installer un IDE tel que [VisualStudioCode](https://code.visualstudio.com/)
- Installer Node.js voir [ prerequisites](https://github.com/adaltas/ece-webtech-2022-fall/blob/main/courses/webtech/modules/01.prerequisite/index.md#nodejs-installation)
- Installer nodemon
- Installer Postman pour les test 
- Installer [Express](https://www.npmjs.com/package/express#installation)
- Installer [uuid](https://www.npmjs.com/package/uuid)

```bash
npm install nodemon
npm install snap postman
npm install express
npm install uuid
```

## Running options

Nous devons lancer le serveur avant d'essayer d'acceder au site en local.

La commande suivante permet de lancer le site web de maniere a update toute les modifications sans necessairement relancer le serveur.
```bash
npm run develop
```
Une autre alternative pour lancer le serveur sans mise a jour automatique 
```bash
npm start
```
Une fois le serveur lancé, http://localhost:8080.

## Routing de Base

Un systeme de routing a été mis en place pour ce Lab3. Afin d'acceder a la notice d'utilisation de ces derniers cliquez sur http://localhost:8080/hello.

## Routing plus avancé

Pour le systeme de routing plus avancé concernant la base de donne, nous vous fournissons une fiche d'informations sur le lien suivant : http://localhost:8080/help.

## Sources utilisées

- <https://github.com/adaltas/ece-webtech-2022-fall/blob/main/courses/webtech/modules/02.nodejs/index.md>
- <https://github.com/adaltas/ece-webtech-2022-fall/blob/main/courses/webtech/modules/02.nodejs/lab.md>
- <https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9>

## Auteurs

- name : Zouitene Lydia | email : Lydia.zouitene@edu.ece.fr
- name : Messaoudi Fares | email : Messaoudi.fares@edu.ece.fr



# Blogging application - ECE Webtech project

*presentation, introduction, ...*

## Production 

- Vercel URL: https://ece-webapp-messaoudi-zouitene.vercel.app/
- Supabase project URL: https://lsmbmkrtvagrqakizced.supabase.co

## Usage

*how to start and use the application, run the tests, ...*

* Clone this repository, from your local machine:
  ```
  git clone ...
  cd ...
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm run dev 
  ```
* If you want to check if everythong is correctly built run : 
```bash
  npm run build
```
## Authors

*name, email, ...*

## Tasks
  
**Project management:**

* Naming convention   
 ![images](image/Convention)
  Each Component or variable follows the react, html or css naming conventions. We can see for example the react functions begin with a lowercase.

> **Graduation** The graduation estimation for this section is : 2/2

* Project structure   

  ![images](image/Tree)

  Our Project is well organized with a an app folder divided in several subfolders: 

    * [Component Folder](/app/components): Contain all the necessary components of the app such as [Header](/app/components/header.js) , [Footer](/app/components/footer.js) or even [UserContext](/app/components/UserContext.js)

    * [Pages Folder](/app/pages/) : Contain all the different pages of our app such as [Login](/app/pages/Login.js) or [Equipe](/app/pages/equipe/)

    * [Supabase Folder](/supabase/) : Contain all the necessary information to connect to [Supabase](/supabase/) locally ( or online)

    * [Public Folder](/app/public/) : Contain all the different picture for our app 
    
    * [Style Folder](/app/styles/) : Contain all the different styles and css for each component 

  > **Graduation** The graduation estimation for this section is : 2/2

* Git   

  ![Commit](image/Commit.png)

  Throughout the project, we made regular commits, performed merges and managed conflicts after validation of each feature. We can then follow all our progress chronologically during these last months 

  > **Graduation** The graduation estimation for this section is : 2/2

* Code quality   

  ![Commit](image/Indentation.png)

  In order to evolve efficiently, we have taken the time to focus on indentation, function/variable explicitness and spacing of our code.

  > **Graduation** The graduation estimation for this section is : 3/4

  
* Design, UX, and content   

  ![Commit](image/Orange.png)

  The proposed application has been designed to be as intuitive as possible and offer the user a pleasant experience. This starts with the choice of his favorite theme at any time (accessible through the header)

  Our styles are implemented with Taildwind and classic css like on the following screen :

  ![Commit](image/Styles.png)


  > **Graduation** The graduation estimation for this section is : 3.5/4


**Application development:**

* Home page   

  ![Commit](image/Acceuil.png)

  Our home page offers a search of the teams according to their continent. Thus, you can consult the information of all the teams present at the tournament coming from America, Asia, Africa and Europe

  ![Commit](image/Asie.png)

  > **Graduation** The graduation estimation for this section is : 2/2

* Login and profile page   

  ![Login](image/Login.png)

  The Login page allows the user to connect from his email address or his github account.It also offers to create an account if the user is not yet registered. He will then receive an email for the confirmation of his registration 
  
  ![Login](image/Mail.png)

  Once logged in, the user will have a summary of all his comments and registered teams. He will then be able to make changes to all the information concerning him.
  The modification of an information will be done in real time.

  ![Login](image/profil.png)

  > **Graduation** The graduation estimation for this section is : 4/4 (+bonus)

* New articles creation   

  We can then create a team once connected. If the created team is a national team, enter correctly its Name and it will be affiliated to you the corresponding flag.A confirmation message is displayed

  ![Login](image/add.png)
  ![Login](image/finland.png)

  > **Graduation** The graduation estimation for this section is : 4/4 

* New comment creation

  At the end of the page of each team, we can add our comment of support (or other...)

  ![Login](image/123.png)
  ![Login](image/1234.png)

  > **Graduation** The graduation estimation for this section is : 4/4 

* Resource access control   

  Concerning the security of our code. We have managed to activate a set of policies in order to grant modification, insertion and reading to accepted users. 

    ![Login](image/RLS.png)

  Thus, everyone can see the teams and their comments but only their creator can modify them. The profiles follow the same logic. Finally, only authenticated users can create new teams or new comments. 

    ![Login](image/RLS2.png)

  The display of the application will behave according to these constraints adding or removing several components

    ![Login](image/RLS3.png)

  > **Graduation** The graduation estimation for this section is : 6/6 

* Article modification   
  *place your graduation and comments*
* Article removal   
  *place your graduation and comments*
* Comment modification   

  A comment can be modified at any time. Here for example, I got the wrong country, I confused the flags and commented for Bosnia... No worries, the comment can be modified.
  We made sure then when a comment is created, only the author can see the "edit" button, which opens an editing form. 
  ![Login](image/comu1.png)
  ![Login](image/comu2.png)

  > **Graduation** The graduation estimation for this section is : 2/2 

* Comment removal   
  *place your graduation and comments*
* Account settings   
  *place your graduation and comments*
* WYSIWYG integration   
  *place your graduation and comments*
* Gravatar integration   
  *place your graduation and comments*
* Light/dark theme   
  *place your graduation and comments*
* Accent color selection   
  *place your graduation and comments*

## Bonus

* Task title   
  *place your graduation and comments*























