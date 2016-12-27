# Getting Started

### requirements:

  - docker-compose

### Install:


```bash
git clone https://github.com/tasfya/maktaba8.git
cd maktaba8
docker-compose build
docker-compose up
```

Wait for the db setup and then clear drupal cache
```
docker-compose exec web drush cr
```
Visit http://localhost:8080


####Admin User:

username: admin

password: password



### Directory structure:
- web/config : contains Drupal CMI config files

### Development:
- to export the configuration:
```docker-compose exec web drush config-export staging```
- to import the configuration:
```docker-compose exec web drush config-import staging```

## Useful commands
Run drush commands: ```docker-compose exec web drush status```
