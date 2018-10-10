create table if not exists user_account (
"user_id" serial not null,
"goal_id" int,
"username" varchar(20) not null,
"password" varchar(20) not null, 
"firstName" varchar(20) not null,
"lastName" varchar(20) not null,
"address" text not null,
"dob" date not null,
"weight" numeric(5,2) not null,
"height" int not null,
"type" varchar(7) not null,
constraint "pk_user_id" primary key ("user_id"));
/
create table if not exists goals (
"goal_id" serial not null,
"user_id" int not null,
"target_weight" numeric(5,2),
"type" text not null,
constraint "pk_goal_id" primary key ("goal_id"),
constraint "fk_user_id" foreign key ("user_id") references user_account ("user_id"));
/
create table if not exists diet (
"diet_id" serial not null,
"calories" int not null,
"protein" int not null,
"fat" int not null,
"carbohydrates" int not null,
"sugar" int not null,
"fiber" int not null,
"details" text
constraint "pk_diet_id" primary key ("diet_id"));
/
