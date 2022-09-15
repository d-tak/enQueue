set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."business" (
	"businessId" serial NOT NULL,
	"businessLocation" TEXT NOT NULL,
	"businessEmail" TEXT NOT NULL,
	"businessHours" TEXT,
	"businessUserFirstName" TEXT NOT NULL,
	"businessUserLastName" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "business_pk" PRIMARY KEY ("businessId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."waitList" (
	"businessId" integer NOT NULL,
	"patronWaitId" serial NOT NULL,
	"patronFirstName" TEXT NOT NULL,
	"patronLastName" TEXT NOT NULL,
	"patronMobile" TEXT NOT NULL,
	"patronComments" TEXT NOT NULL,
	CONSTRAINT "waitList_pk" PRIMARY KEY ("patronWaitId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "waitList" ADD CONSTRAINT "waitList_fk0" FOREIGN KEY ("businessId") REFERENCES "business"("businessId");
