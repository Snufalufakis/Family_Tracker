INSERT INTO
family_db.department (name)
VALUES (
    'Kitchen'
),
(
    'Living Room'
),
(
    'Bathroom'
),
(
    'Kids Room'
),
(
    'Parents Room'
),
(
    'Trash'
),
(
    'Yard Work'
);
INSERT INTO family_db.role (title, allowance, department_id)
VALUES (
    'Momma Dukes', 9999, 1
),
(
    'Daddy Dukes', 9999, 7
),
(
    'Jackson Dukes', 15, 4
),
(
    'Carl Dukes', 15, 6
),
(
    'Mona Dukes', 15, 2
),
(
    'Daddy Dukes', 9999, 5  
),
(
    'Jessica Dukes', 15, 4
);
UPDATE role

SET title = 'House of Dukes'

WHERE id = 1;
