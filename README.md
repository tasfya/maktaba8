# Getting Started

### requirements:

  - docker-compose

### Install guide:


```bash
git clone https://github.com/tasfya/maktaba8.git
cd maktaba8
docker-compose build
docker-compose up
```

visit http://localhost:8080

make sure to add this line on settings.php:
`$config_directories['staging'] = 'config/staging';`

### Directory structure:
- web/config : contains Drupal CMI config files

### Development:
- to export the configuration:
```docker exec -it drupal drush config-export staging```
- to import the configuration:
```git pull
docker exec -it drupal drush config-import staging```

## Useful commands
Run drush commands: ```docker exec -it drupal drush status```
