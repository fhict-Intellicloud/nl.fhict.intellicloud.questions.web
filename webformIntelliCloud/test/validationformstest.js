test("IsEmailTest", function() {
	equal(IsEmail("asdf@asdf.com"), true);//1
	equal(IsEmail("asdf"), false);//2
	equal(IsEmail(1), false);//3
	equal(IsEmail(1.0000), false);//4
	equal(IsEmail("example@example.co.uk"), true);//5
	equal(IsEmail(false), false);//6
	equal(IsEmail(true), false);//7
	equal(IsEmail("a@a.a"), false);//8
	equal(IsEmail("a@a.lange"), false);//9
	equal(IsEmail("museum@museum.museum"), false);//10
	equal(IsEmail("aa@aa.aa"), true);//11
	equal(IsEmail(null), false);//12
	equal(IsEmail(""), false);//13
	equal(IsEmail("@."), false);//14
	equal(IsEmail("asdf@.com"), false);//15
	equal(IsEmail("@asdf.com"), false);//16
	equal(IsEmail("asdf@asdf."), false);//17
	equal(IsEmail(), false);//18
	equal(IsEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@asdf.com"), true);//19
	equal(IsEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), false);//20
	equal(IsEmail("asdf@student.fontys.nl"),true);//21
});