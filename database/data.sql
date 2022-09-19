insert into "business" (
  "businessLocation",
	"businessEmail",
	"businessHours",
	"businessName",
	"hashedPassword"
)
values (
  'Irvine, CA',
  'abc123@gmail.com',
  'closed',
  'filoKitchen oc',
  'password'
);

insert into "waitList" (
  "patronWaitId",
  "patronETA",
  "patronPartySize",
	"patronFirstName",
	"patronLastName",
	"patronMobile",
	"patronComments"
)
values (
  1,
  '12:00 PM',
  4,
  'John',
  'Doe',
  '123-456-7890',
  'You Got This!'
);
