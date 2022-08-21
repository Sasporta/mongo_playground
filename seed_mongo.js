db.companies.insertMany([
	{
		_id: ObjectId('62ffbaedbb1fc0d37638465c'),
		name: 'company1',
		country: 'USA',
		createdAt: '2022-08-19T16:31:41.910+00:00',
		updatedAt: '2022-08-19T16:31:41.910+00:00',
	},
	{
		_id: ObjectId('62ffea64b796fb2a49cfc0cd'),
		name: 'company2',
		country: 'USA',
		createdAt: '2022-08-19T16:31:41.910+00:00',
		updatedAt: '2022-08-19T16:31:41.910+00:00',
	},
	{
		_id: ObjectId('63007a8623493575d6950406'),
		name: 'company3',
		country: 'USA',
		createdAt: '2022-08-19T16:31:41.910+00:00',
		updatedAt: '2022-08-19T16:31:41.910+00:00',
	},
]);

db.employees.insertMany([
	{
		_id: ObjectId('63006941b0ae3380b4ff242f'),
		name: 'grandparent',
		age: '80',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: null,
		createdAt: '2022-08-20T04:55:29.438+00:00',
		updatedAt: '2022-08-20T04:55:29.438+00:00',
	},
	{
		_id: ObjectId('63006988b0ae3380b4ff2433'),
		name: 'parant',
		age: '50',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006941b0ae3380b4ff242f'),
		createdAt: '2022-08-20T04:56:40.660+00:00',
		updatedAt: '2022-08-20T04:56:40.660+00:00',
	},
	{
		_id: ObjectId('63006995b0ae3380b4ff2437'),
		name: 'uncleA',
		age: '50',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006941b0ae3380b4ff242f'),
		createdAt: '2022-08-20T04:56:53.310+00:00',
		updatedAt: '2022-08-20T04:56:53.310+00:00',
	},
	{
		_id: ObjectId('63006999b0ae3380b4ff243b'),
		name: 'uncleB',
		age: '50',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006941b0ae3380b4ff242f'),
		createdAt: '2022-08-20T04:56:57.456+00:00',
		updatedAt: '2022-08-20T04:56:57.456+00:00',
	},
	{
		_id: ObjectId('630069b7b0ae3380b4ff2440'),
		name: 'child',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006988b0ae3380b4ff2433'),
		createdAt: '2022-08-20T04:57:27.293+00:00',
		updatedAt: '2022-08-20T04:57:27.293+00:00',
	},
	{
		_id: ObjectId('630069c5b0ae3380b4ff2444'),
		name: 'brother1',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006988b0ae3380b4ff2433'),
		createdAt: '2022-08-20T04:57:41.836+00:00',
		updatedAt: '2022-08-20T04:57:41.836+00:00',
	},
	{
		_id: ObjectId('630069c9b0ae3380b4ff2448'),
		name: 'brother2',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006988b0ae3380b4ff2433'),
		createdAt: '2022-08-20T04:57:45.972+00:00',
		updatedAt: '2022-08-20T04:57:45.972+00:00',
	},
	{
		_id: ObjectId('630069e2b0ae3380b4ff244d'),
		name: 'cousinA1',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006995b0ae3380b4ff2437'),
		createdAt: '2022-08-20T04:58:10.853+00:00',
		updatedAt: '2022-08-20T04:58:10.853+00:00',
	},
	{
		_id: ObjectId('630069e6b0ae3380b4ff2451'),
		name: 'cousinA2',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006995b0ae3380b4ff2437'),
		createdAt: '2022-08-20T04:58:14.263+00:00',
		updatedAt: '2022-08-20T04:58:14.263+00:00',
	},
	{
		_id: ObjectId('630069f1b0ae3380b4ff2455'),
		name: 'cousinB1',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006999b0ae3380b4ff243b'),
		createdAt: '2022-08-20T04:58:25.092+00:00',
		updatedAt: '2022-08-20T04:58:25.092+00:00',
	},
	{
		_id: ObjectId('630069f4b0ae3380b4ff2459'),
		name: 'cousinB2',
		age: '20',
		companyId: ObjectId('62ffbaedbb1fc0d37638465c'),
		managerId: ObjectId('63006999b0ae3380b4ff243b'),
		createdAt: '2022-08-20T04:58:28.651+00:00',
		updatedAt: '2022-08-20T04:58:28.651+00:00',
	},
]);
