# Database

## docker mariadb

```docker
docker run -d --name mariadb -p 3306:3306 -v C:\dockers\mariadb_volume:/var/lib/mysql
-e MARIADB_ROOT_PASSWORD=1234 -e MARIADB_DATABASE=test  mariadb:10.5
```

## db setting

```
CREATE DATABASE malldb;

CREATE USER 'malldbuser'@'localhost' IDENTIFIED BY 'malldbuser';
CREATE USER 'malldbuser'@'%' IDENTIFIED BY 'malldbuser';

GRANT ALL PRIVILEGES ON malldb.* TO 'malldbuser'@'localhost';
GRANT ALL PRIVILEGES ON malldb.* TO 'malldbuser'@'%';
```

# application.properties

```
spring.datasource.driver-classname=org.mariadb.jdbc.Driver
spring.datasource.url=jdbc:mariadb://localhost:3306/malldb
spring.datasource.username=malldbuser
spring.datasource.password=malldbuser
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.show-sql=true
```
