insert into "business" (
  "businessLocation",
	"businessEmail",
	"businessHours",
	"businessUserFirstName",
	"businessUserLastName",
	"hashedPassword"
)
values (
  'Irvine, CA',
  'abc123@gmail.com',
  'closed',
  'John',
  'Doe',
  'password'
);

insert into "waitList" (
  "patronWaitId",
	"patronFirstName",
	"patronLastName",
	"patronMobile",
	"patronComments"
)
values (
  1,
  'John',
  'Doe',
  '123-456-7890',
  'You Got This!'
);
