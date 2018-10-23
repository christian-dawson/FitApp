create table if not exists user_account (
"account_id" serial not null,
"username" varchar(20) not null,
"password" varchar(20) not null,
"type" varchar(7) not null,
constraint "pk_user_id" primary key ("account_id"));
/
create table if not exists trainer (
"trainer_id" int not null,
"rating" numeric(2,1),
"experience" text,
"first_name" varchar(20) not null,
"last_name" varchar(20) not null,
"address" text not null,
"birthdate" date not null,
"gender" varchar(6) not null,
constraint "pk_trainer_id" primary key (trainer_id),
constraint "fk_trainer_id" foreign key (trainer_id) references user_account ("account_id"));
/
create table if not exists goal (
"goal_id" serial not null,
"target_weight" numeric(5,2),
"type" text not null,
constraint "pk_goal_id" primary key ("goal_id"));
/
create table if not exists trainee (
"trainee_id" int not null,
"weight" numeric(5,2),
"height" int,
"goal_id" int,
"trainer_id" int,
"requested_id" int,
"first_name" varchar(20) not null,
"last_name" varchar(20) not null,
"address" text not null,
"birthdate" date not null,
"gender" varchar(6) not null,
constraint pk_trainee_id primary key (trainee_id),
constraint fk_goal_id foreign key (goal_id) references goal (goal_id),
constraint fk_trainee_id foreign key (trainee_id) references user_account (account_id),
constraint fk_trainer_id foreign key (trainer_id) references trainer (trainer_id),
constraint fk_requested_id foreign key (requested_id) references trainer (trainer_id));
/
create table if not exists diet (
"diet_id" serial not null,
"calories" int not null,
"protein" int not null,
"fat" int not null,
"carbohydrates" int not null,
"sugar" int not null,
"fiber" int not null,
"details" text,
constraint pk_diet_id primary key ("diet_id"));
/
create table if not exists workout (
"workout_id" serial not null,
"exercise_id" int not null,
constraint pk_composite_key primary key ("workout_id", "exercise_id"));
/
create table if not exists fitness_plan (
"plan_id" serial not null,
"trainee_id" int not null,
"trainer_id" int not null,
"diet_id" int not null,
"m_workout" int not null,
"tu_workout" int not null,
"w_workout" int not null,
"th_workout" int not null,
"f_workout" int not null,
"sa_workout" int not null,
"su_workout" int not null,
constraint pk_plan_id primary key (plan_id),
constraint fk_trainee_id foreign key (trainee_id) references trainee (trainee_id),
constraint fk_trainer_id foreign key (trainer_id )references trainer (trainer_id));
/
/*{
        "id": 9,
        "username": "uan",
        "password": "edro",
        "address": "092385 aklfsj",
        "firstName": "Pickleme",
        "lastName": "Timbers",
        "type": "trainer",
        "birthdate": 30365726400000,
        "weight": 30,
        "height": 180,
        "goal": null,
        "trainer": null,
        "trainees": []
    }*/