# Database Documentation

To start MariaDB on XAMPP:
1. Open Shell
2. Run:
    ```
    mysql -u root -p
    ```
    or
    ```
    mysql -u root -r
    ```
3. Enter password if any or simply enter

## DDL:

CREATE DATABASE IBENTO;

USE IBENTO;

#### For College Table

```
CREATE TABLE COLLEGES (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    contact BIGINT,
    address VARCHAR(255),
    email VARCHAR(255),
    pincode INT(6),
    emailDomain VARCHAR(50),
    userCount BIGINT,
    status ENUM('Active', 'Inactive', 'Pending'),
    dateOfJoining DATE
);
```

#### ROLE TABLE:

```
CREATE TABLE ROLES (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
name ENUM('Admin', 'Director', 'Dean', 'Registrar', 'Head of Activities', 'Faculty in Charge', 'Faculty', 'Club Lead', 'Co-Lead', 'Student', 'Guest'),
accessLevel JSON
);
```

#### USER TABLE:

```
CREATE TABLE USERS (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    collegeId BIGINT,
    name VARCHAR(255),
    email VARCHAR(255),
    roleId BIGINT,
    department VARCHAR(255),
    password VARCHAR(255),
    joiningDate DATE,
    FOREIGN KEY (roleId) REFERENCES ROLES(id),
    FOREIGN KEY (collegeId) REFERENCES COLLEGES(id)
);
```

#### EVENT:
```
```