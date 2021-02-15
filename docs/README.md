# Spaceship React

An example todo frontend development with react yet using the headless api to consume content.
You can create an interactive image with parts you can highlight

![screenhot 1](lambo.png)  
  
![screenhot 1](falcon.png)  

Developed to run on the following versions of Liferay: `Liferay DXP 7.3`  

**Will only work with authenticated user**


Built with the [Liferay JS Generator](https://help.liferay.com/hc/articles/360029147391-Liferay-JS-Generator).

Based upon https://github.com/carloslancha/spaceship-react/

## Content
You can import the `webcontent.lar` from this repo into a Liferay site.
If needed you can also define the structures yourself with `Spaceship Part.json` and `Spaceship.json`

## How to Build and Deploy to Liferay

### Gradle
Run the task `packageRunBuild` and `packageRunDeploy`

### Npm
Follow the steps below to build and deploy or copy the modules from the [releases](../../releases/latest) page to your Liferay's deploy folder.

1. Update `.npmbuildrc` so that `liferayDir` points to your local Liferay bundle.
2. ` $ npm install // Get all dependencies.`

### Build it
3. ` $ npm run build // Builds project to /dist/${my-project}.jar`

### Deploy to Liferay
3. ` $ npm run deploy // Deploy to your Liferay instance.`

## Usage

[Adding Widgets to a Page.](https://learn.liferay.com/dxp/7.x/en/site-building/creating-pages/using-widget-pages/adding-widgets-to-a-page.html)

1.Make sure you have imported the `webcontent.lar` or create some your own using the content the structures yourself with `Spaceship Part.json` and `Spaceship.json`
   1.1 Make sure to define x-y positions with `%` like `77%`
1. Drag and drop the Spaceship widget onto the page.
1. Configure the Spaceship widget
3.1 You need the site ID (groupID)
3.2 You also need the article ID

### Features

* Define interactive points
* Highlight specs

*Wherever possible, include more images or gifs that explain the features of your project.*

## Issues & Questions Welcome