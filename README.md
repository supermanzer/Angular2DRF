# Angular2DRF
---
A simple application utilizing [Angular 7](https://angular.io/) and [Django Rest Framework](https://www.django-rest-framework.org/).

<p>
This represents my initial attempt to use my existing Django skills to develop my response front-end skills.  Due to the MVT approach taken by Django as well as the "Batteries Included", I have found the complete framework approach of Angular to be a more natural fit than Vue or React.
</p>

## Getting Started

If you wish to try this out for yourself start by cloning the repo, then navigate to the `server/` directory in the terminal (or Windows equivalent) and issue the following commands:
```
# Generate initial migrations
python manage.py makemigrations

# Create database and tables to match the schema described in the migrations
python manage.py migrate

# Create a user with full privileges -- complete the following prompts
python manage.py createsuperuser

# Spin up the Django Rest Framwork server -- defaults to port 8000
python manage.py runserver
```

The basic [Django settings](https://docs.djangoproject.com/en/2.2/topics/settings/) are in the `config/` directory while the app specific data model, serializers, and views making up the REST API are in the `todo/` directory. I've made a simple Todo model that should allow enough data capturing to replicate most of Google's Tasks app.  

## Angular Approach
I'm a fan of the Material Design aesthetic so, in addition to making a responsive and well tested front-end application, I plan to employ the resources of `@angular/material` to further enhance my UI.  

While I've been working with Django and Django Rest Framework for a few years, I'm a total newbie at Angular.  Any suggestions/tips would be most welcome, providing you can explain why your approach is good/better.
