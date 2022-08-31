-- Insert department names for perdetermined family members.
INSERT INTO department (dept_id,dept_name) VALUES (1,'Homemaker'), (2,'House Wife'), (3,'House Husband'), (4,'The Black Sheep'), (5,'Bread Winner'), (6,'Role Model'), (7,'Leader'), (8,'Provider'), (9,'Wall Doodler'), (10,'Daiper Changer'), (11,'Nanny'), (12,'The Apple Of My Eyes'), (13,'Stay at Home Mom'), (14,'Stay at home Dad'), (15,'Work From Home'), (16,'Father Figure'), (17,'Wears the trousers'), (18,'Rules the roost');

INSERT INTO family_role (title, allowance, department) VALUES
('Third Cousin', 6091.00, 16), 
('Second Cousin Once Removed', 3630.00, 3
),
('First Cousin Twice Removed', 3372.00, 12),
('Great-Grand Uncle', 556.00, 1 ),
('Great-Grand Aunt', 6860.00, 6
),                
('Great-Great Grandsie', 7833.00, 17),
('Great-Great Grandpa', 7064.00, 6),
('Third Cousin Once Removed', 8434.00, 1),
('Third Cousin Twice Removed', 6802.00, 16),
('Great Grandpa', 8761.00, 11),
('Great-Grandma', 1846.00, 18),
('Uncle', 5923.00, 2),
('Aunt', 6426.00, 9),
('Great Uncle', 5550.00, 4),
('Great Aunt', 8935.00, 6),
('First Cousin Once Removed', 4674.00, 8),
('Nephew', 6549.00, 7),
('Niece', 8338.00, 5),
('Parent', 3518.00, 4),
('Brother', 3260.00, 3),
('Sister', 8694.00, 13),
('Tirst Cousin Trice Removed', 4457.00, 14);



INSERT INTO family_members (first_name, last_name, fm_role_id, manager_id) VALUES
('Luke ', 'Thomas', 1, null),
('Marvin ', 'Morgan', 6, 1),
('Nellie ', 'Henderson', 2, null),
('Bob', 'Jovie', 3, null),
('Karen', ' Morgan', 7, null);