# Getting Started

### requirements:

  - docker-compose

### Install guide Web Drupal:


```bash
git clone https://github.com/tasfya/maktaba8.git
cd maktaba8
docker-compose build
docker-compose up
```

Visit http://localhost:8080


### Directory structure:
- web/config : contains Drupal CMI config files

### Development:
- to export the configuration:
```docker exec -it maktaba8_drupal drush config-export staging```
- to import the configuration:
```docker exec -it drupal drush config-import staging```

## Useful commands
Run drush commands: ```docker exec -it maktaba8_drupal drush status```
