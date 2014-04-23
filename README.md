Recursive Navigation in Backbone.js
=========================

__Author:__ Joni Halabi (www.jhalabi.com)

Description
-----------

This component is a Backbone.js model and view that can be used to construct an infinitely deep navigation or nested list.  All of the files for this component are in the */scripts/navigation/* directory.

Implementation Notes
-----------

The component includes an *index.html* file in the root directory that you can use to view an example of the view.  The example is unstyled - feel free to add your own styles to meet your needs.

**Important note:** This component requires that you view it through a server and has been tested via Apache.  It will not work if you just double-click on the HTML file to open it in your browser.

Navigation Model
-----------

The navigation model can contain a series of nested **navigation** objects.  Each navigation object represents a new level of the navigation or list and contains 3 basic attributes:

* **title**: This is the user-visible text for the item.
* **type**: This specifies what kind of item this item is. The type can either be *navigation* (or a link), *event*, or *title* (or simple text).
* **value**: This is the link or id of the item.  The value is placed as the href attribute in the link tag for items of type *navigation*; it is placed as the ID of the link tag for items of type *event*.

The navigation model is populated with the information in */scripts/navigation/mock/navigationJSON.js* via mockjax.  This is here simply for demonstrative purposes and can be replaced with any REST call from your application.

Navigation View
-----------

The navigation view takes the model as a parameter and displays the *navigationView* Handlebars template.  This template uses a Handlebars helper - *navigationHelper* - to call a nested *navigationLevel* template.  

The *navigationLevel* template displays each item and then recursively calls itself if the given item contains a nested *navigation* object.

The navigation view includes another Handlebars helper - *ifCond* - that provides the templates with a more robust conditional statement.

Libraries Used
-----------

This component relies on several Javascript libraries.  These libraries are in the */scripts/lib/* directory:

* Backbone.js
* Handlebars.js
* jQuery 1.11.0 *(dependency of Backbone)*
* Mockjax *(used for the mock service)*
* Require.js
* text.js *(dependency of Handlebars)*
* underscore.js *(dependency of Backbone)*