
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_m(0),_v(" "),_m(1),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPER_CASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME [t/TAG]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe t/friend")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("…")]),_v("​ after them can be used multiple times including zero times."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[t/TAG]…​")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}}),_v(" (i.e. 0 times), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend t/family")]),_v(" etc.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME p/PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/PHONE_NUMBER n/NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" maximum positive value is 2^31 - 1 which is 2147483647, larger values will not be accepted due to the limitation of integers in java.")])])])]),_v(" "),_m(5),_v(" "),_c('p',[_v("Shows a message explaning how to access the help page.")]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('p',[_v("Adds a new person to the Insurahub App, the name of the Person must be unique")]),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("Shows a list of all persons in the address book.")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("Edits an existing person in the address book.")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("Finds persons whose names contain any of the given keywords.")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('p',[_v("Deletes the specified person from the address book.")]),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('p',[_v("Filters for all persons in InsuraHub that have the tag being filtered.")]),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('p',[_v("Adds an insurance policy to a client in InsuraHub.")]),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_c('p',[_v("Removes an existing insurance policy from a client currently listed on the Ui of InsuraHub.")]),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('p',[_v("Creates/opens up a folder specific to a client for storing of their documents")]),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('p',[_v("Highlight the specific contact details of the particular client from the application.")]),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_c('p',[_v("Insurahub data are saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, Insurahub will discard all data and start with an empty data file at the next run. Hence, it is recommended to take a backup of the file before editing it.")])]),_v(" "),_m(54),_v(" "),_c('p',[_v("Adds any number of new tags to a client object without deleting the pre-exisiting tags.")]),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_c('p',[_v("Removes any number of pre-existing tags from a client object.")]),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("Creates/opens up a folder specific to a client for storing of their documents. When it is first created, it will be empty. We can add client's documents into the file and it will be saved in the file after closing the window.")]),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_c('p',[_v("Groups clients based on their preferred meeting locations")]),_v(" "),_m(67),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_c('p',[_v("Changes the required password to enter Insurahub.")]),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_c('p',[_v("Toggles between lightMode and DarkMode, the next time InsuraHub is opened the change will be shown.")]),_v(" "),_m(74),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_c('hr'),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_c('hr'),_v(" "),_m(84),_v(" "),_m(85)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"insurahub-user-guide"}},[_v("Insurahub User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#insurahub-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Insurahub is a "),_c('strong',[_v("desktop app for managing clients, optimized for use via a Command Line Interface")]),_v(" (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, Insurahub can get your contact management tasks done faster than traditional GUI apps. This app is mainly used by insurance agents who have many clients and tasks such as appointments to keep track of on a daily basis.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("insurahub.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com//AY2324S1-CS2103-W14-1/tp"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your App.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar insurahub.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note that if a password had been previously set, then this step would be skipped.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/tp/images/setPassword.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/setPassword.png","alt":"SetPassword"}})])])]),_v(" "),_c('li',[_c('p',[_v("After the password has been set, A GUI similar to the previous one should ask the user to enter the password that they set.")])]),_v(" "),_c('li',[_c('p',[_v("After the password is entered A GUI similar to the below should appear in a few seconds.\n"),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" : Lists everyone in InsuraHub.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com a/311, Clementi Ave 2, #02-25 t/friends pmr/west")]),_v(" : Adds a Person named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(" to the application.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag 1 t/classmate")]),_v(" : Adds a \"classmate\" tag to the first user in the address book.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")]),_v(" : Deletes the 3rd person shown in the current list.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag 1 t/classmate")]),_v(" : Deletes the \"classmate\" tag from the first user in the address book if the \"classmate\" tag currently exists")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" : Deletes everyone from InsuraHub.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter t/friend")]),_v(": Filters for all clients in the address book that contains the `friend' tag.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file 1")]),_v(": Creates a folder for the first person in the address book with the person's information")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact 1 pc/phone")]),_v(" : Highlight to show that that is the main form of contact that the client in the first index prefers.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])]),_v(" "),_c('li',[_c('p',[_v("Do remember to only open the application once from one terminal to prevent issues such as updates not being done properly, updates on the first session will not result in the second session to be updated if they are being opened simultaneously.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-new-client-add"}},[_v("Adding a new client: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-new-client-add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONENUMBER e/EMAIL a/ADDRESS [t/TAG] pmr/PREFERREDMEETINGREGION")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" must be Unique in InsuraHub.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONENUMBER")]),_v(" must be 8 numbers long and start with either 6,8 or 9.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAG")]),_v(" should be alphanumeric")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v(" Emails should be of the format local-part@domain and adhere to the following constraints:\n"),_c('ul',[_c('li',[_v("The local-part should only contain alphanumeric characters and these special characters, excluding the parentheses")]),_v(" "),_c('li',[_v("The local-part may not start or end with any special characters")]),_v(" "),_c('li',[_v("This is followed by a '@' and then a domain name.")]),_v(" "),_c('li',[_v("have each domain label start and end with alphanumeric characters")]),_v(" "),_c('li',[_v("have each domain label consist of alphanumeric characters, separated only by hyphens, if any.")])])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(" Addresses can take any values, and it should not be blank\"")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PREFERREDMEETINGREGION")]),_v(" have to be one of these strings west/north/south/east/central.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/JohnnySnake p/91234567 e/johnnythesnake12@gmail.com a/Blk 69 Geylang Street 12, #12-69 pmr/east")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/BetsyCrowe p/92222222 e/betsycrowe@example.com a/Newgate Prison t/friends pmr/north")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-persons-list"}},[_v("Listing all persons : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-person-edit"}},[_v("Editing a person : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-person-edit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [t/TAG]... [pmr/PREFERREDMEETINGREGION]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the displayed person list. The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("When editing tags, the existing tags of the person will be removed i.e adding of tags is not cumulative[Use addTag to add tags, deleteTag to delete tags]")]),_v(" "),_c('li',[_v("You can remove all the person’s tags by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/")]),_v(" without\nspecifying any tags after it.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/91234567 e/johndoe@example.com")]),_v(" Edits the phone number and email address of the 1st person to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("johndoe@example.com")]),_v(" respectively.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/Betsy Crower t/")]),_v(" Edits the name of the 2nd person to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Betsy Crower")]),_v(" and clears all existing tags.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"locating-persons-by-name-find"}},[_v("Locating persons by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#locating-persons-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])]),_v(" "),_c('li',[_v("The order of the keywords does not matter. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Bo")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bo Hans")])]),_v(" "),_c('li',[_v("Only the name is searched")]),_v(" "),_c('li',[_v("Only full words will be matched e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Han")]),_v(" will not match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])]),_v(" "),_c('li',[_v("Persons matching at least one keyword will be returned (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OR")]),_v(" search).\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Bo")]),_v(" will return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Gruber")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bo Yang")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find John")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex david")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex Yeoh")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/findAlexDavidResult.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/findAlexDavidResult.png","alt":"result for 'find alex david'"}})])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-person-delete"}},[_v("Deleting a person : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person-delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed person list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(" deletes the 2nd person in the address book.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(" deletes the 1st person in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-all-entries-clear"}},[_v("Clearing all entries : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-entries-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Clears all entries from Insurahub. Do note that so long as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" is contained in your commands, details in Insurahub will be deleted")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filtering-for-persons-via-tag-filter"}},[_v("Filtering for Persons via tag : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-for-persons-via-tag-filter","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter t/TAG1 t/TAG2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Filters for person objects that contain all the specified tags "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAG1")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAG2")]),_v(".")]),_v(" "),_c('li',[_v("Only person objects that contain all the specified tags will be listed in the Ui.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/FRIEND")]),_v(" will list out all the clients that have the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friend")]),_v(" tag.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/FRIEND t/COLLEAGUE")]),_v(" will list out all the clients that have both the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friend")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("colleague")]),_v("\ntag. Clients that contain only one of either specified tags will not be shown.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-policy-to-a-client-addpolicy"}},[_v("Adding a policy to a client : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPolicy")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-policy-to-a-client-addpolicy","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPolicy <INDEX> [pn/POLICY NAME  pd/POLICY DESCRIPTION  pv/POLICY VALUE  psd/POLICY START DATE  ped/POLICY END DATE]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on InsuraHub.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("POLICY VALUE")]),_v(" have a limit of up to 7 digits.")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPolicy 1 pn/Health Insurance pd/Cancer Plan pv/2000.00 psd/2023-01-01 ped/2024-12-12 ")]),_v("\nwill add a policy with name Health Insurance and other details such as start date 2023-01-01 to the\nfirst client currently listed on the InsuraHub Ui.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"removing-a-policy-from-a-client-removepolicy"}},[_v("Removing a policy from a client : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePolicy")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#removing-a-policy-from-a-client-removepolicy","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePolicy <INDEX_1> <INDEX_2>")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_1")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on InsuraHub.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_2")]),_v(" must be a positive integer less than or equals to the number of policies the client specified by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_1")]),_v(" has.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePolicy 1 1")]),_v(" will remove the first policy (right-most) of the first client currently listed in the InsuraHub Ui.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-policy-of-a-client-viewpolicy"}},[_v("Viewing policy of a client: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("viewPolicy")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-policy-of-a-client-viewpolicy","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("viewPolicy <INDEX_1> <INDEX_2>")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_1")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on InsuraHub.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_2")]),_v(" must be a positive integer less than or equals to the number of policies the client specified by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX_1")]),_v(" has.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("viewPolicy 1 1")]),_v(" will display the first policy (right-most) that was added to the first person shown on the list.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-client-preferred-contact-preferredcontact"}},[_v("Adding a client preferred contact: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-client-preferred-contact-preferredcontact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact <INDEX> pc/PREFERREDCONTACT")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("INDEX")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on Insurahub.")]),_v(" "),_c('li',[_c('strong',[_v("preferred contact method")]),_v(" either Phone number or Email")]),_v(" "),_c('li',[_v("Preferred contact method:\n"),_c('ul',[_c('li',[_v("phone")]),_v(" "),_c('li',[_v("email")])])]),_v(" "),_c('li',[_v("Preferred contact parameter has to be in lowercase.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact 1 pc/phone")]),_v(" will highlight the phone number of the first person in the current list shown")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact 1 pc/email")]),_v(" will highlight the email address of the first person in the current list shown")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Insurahub data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/Insurahub.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-tags-to-a-client-object-addtag"}},[_v("Adding tags to a client object: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-tags-to-a-client-object-addtag","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag <INDEX> t/TAG_1 t/TAG_2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("INDEX")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on Insurahub.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag 1 t/friend")]),_v(" will add the tag 'friend' to the first client on the current list.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-tags-from-a-client-object-deletetag"}},[_v("Deleting tags from a client object: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-tags-from-a-client-object-deletetag","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag <INDEX> t/TAG_1 t/TAG_2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("INDEX")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on Insurahub.")]),_v(" "),_c('li',[_c('ul',[_c('li',[_c('strong',[_v("tag")]),_v(": must be a valid tag in the pre-defined list implemented in the app")])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag 1 t/friend")]),_v(" will remove the tag 'friend' from the first client on the current list.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storing-documents-of-a-client-file"}},[_v("Storing documents of a client: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storing-documents-of-a-client-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file <INDEX>")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("INDEX")]),_v(" must be a positive integer less than or equals to the number of clients currently shown on Insurahub.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file 1")]),_v(" will open up a folder that is named after the first client currently on the list and their hashcode")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"grouping-client-preferred-meeting-locations-groupmeeting"}},[_v("Grouping client preferred meeting locations: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupmeeting")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#grouping-client-preferred-meeting-locations-groupmeeting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupmeeting west/north/south/east/central")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupmeeting west")]),_v(" will group all clients that prefer to meet in the west region and returns a list of clients that prefer to meet in the west region")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"change-password-changepassword"}},[_v("Change password: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#change-password-changepassword","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword op/<OLDPASSWORD> np/<NEWPASSWORD>")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OLDPASSWORD")]),_v(" must be the password string that was previously set")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NEWPASSWORD")]),_v(" can be any string of length >= 1")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword op/boo123 np/pass456")]),_v(" if the previous password is boo123, then the new password is set as pass456.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword op/bad123 np/pass456")]),_v(" if the previous password is not bad123, then the password is unchanged.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"toggling-the-ui-appearance-togglemode"}},[_v("Toggling the Ui appearance: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toggleMode")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#toggling-the-ui-appearance-togglemode","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toggleMode")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toggleMode")]),_v(" will display the mode that Insurahub will be in when it is next opened. If it is lightmode, it will be changed to dark mode and vice versa")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filter-policy-using-policy-description-filterpolicydescription"}},[_v("filter policy using policy description "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterpolicydescription")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-policy-using-policy-description-filterpolicydescription","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Filter policies using policy description, it is case sensative, hence if client have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Cancer Plan")]),_v(" typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CANCER PLAN")]),_v(" will not work.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterpolicydescription POLICYDESCRIPTION")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterpolicydescription Cancer Plans")]),_v(" will filter all the clients who have cancer plans and show the list of clients with them.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous Insurahub home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again. However, doing any edits on the first screen will not update on the second screen simultaneously")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [t/TAG]…​")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/James Ho p/22224444 e/jamesho@example.com a/123, Clementi Rd, 1234665 t/friend t/colleague")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE_NUMBER] [e/EMAIL] [a/ADDRESS] [t/TAG]…​")]),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/James Lee e/jameslee@example.com")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("File")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file INDEX")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find James Jake")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Tag")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag <INDEX> t/TAG1 t/TAG2")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTag 1 t/friend")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("DeleteTag")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag <INDEX> t/TAG1 t/TAG2")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTag 1 t/friend")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Filter Tag")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter t/TAG1 t/TAG2")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter t/friend t/colleague")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Policy")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPolicy <INDEX> [pn/POLICY NAME  pd/POLICY DESCRIPTION  pv/POLICY VALUE  psd/POLICY START DATE  ped/POLICY END DATE]")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPolicy 1 pn/Health Insurance pd/Cancer Plan pv/2000.00 psd/2023-01-01 ped/2024-12-12 ")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Remove Policy")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePolicy <INDEX_1> <INDEX_2")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePolicy 1 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("View Policy")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("viewPolicy <INDEX_1> <INDEX_2>")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("viewPolicy 1 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Filter Policy Description")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterpolicydescription <POLICY DESCRIPTION>")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Preferred Contact")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact INDEX pc/PREFERREDCONTACT")]),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferredContact 1 pc/phone")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Change Password")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword op/OLD PASSWORD np/NEW PASSWORD")]),_c('br'),_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changePassword op/123456 np/foo123")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Toggle UI Mode")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toggleMode")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Group Meeting")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupmeeting PREFERRED MEETING REGION")]),_v(" "),_c('br'),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupmeeting west")])])])])])])}
}];
  