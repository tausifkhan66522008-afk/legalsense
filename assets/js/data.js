const ipcSections = [
    // --- Existing Sections (Updated with Hinglish) ---
    {
        sectionNumber: "302",
        title: "Punishment for murder",
        title_hinglish: "Murder (Qatl) ki Saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Punishment for intentionally killing someone.",
        meaning_hinglish: "Kisi ko jaan-boojh kar maarne (murder) ki saza.",
        applicability: [
            "Person commits murder",
            "Intention to cause death"
        ],
        applicability_hinglish: [
            "Koi insaan murder karta hai",
            "Marne ka irada (intention) hona"
        ],
        example: "A shoots Z with the intention of killing him. Z dies.",
        example_hinglish: "A ne Z ko maarne ke irade se goli maari. Z mar gaya.",
        punishment: "Death or imprisonment for life, and fine",
        punishment_hinglish: "Maut ki saza (Death penalty) ya umar qaid (Life imprisonment), aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati (Non-Bailable), Sangye (Cognizable)",
        relatedSections: ["300", "307"]
    },
    {
        sectionNumber: "378",
        title: "Theft",
        title_hinglish: "Chori (Theft)",
        category: "Offences Against Property",
        chapter: "XVII",
        meaning: "Dishonestly taking any movable property out of the possession of any person without that person's consent.",
        meaning_hinglish: "Kisi ki movable property (samaan) bina permission ke beimaani se le lena.",
        applicability: [
            "Dishonest intention",
            "Movable property",
            "Taking out of possession",
            "Without consent"
        ],
        applicability_hinglish: [
            "Beimaan irada (Dishonest intention)",
            "Chal sampatti (Movable property)",
            "Kabze se bahar le jana",
            "Bina samhati (consent) ke"
        ],
        example: "A finds a ring belonging to Z on a table in Z's house. A creates a duplicate key, enters Z's house and takes the ring.",
        example_hinglish: "A ko Z ke ghar mein ek anguthi mili. A ne duplicate chabi banayi aur chupke se anguthi le li.",
        punishment: "Imprisonment up to 3 years, or fine, or both",
        punishment_hinglish: "3 saal tak ki jail, ya jurmana, ya dono",
        offenceNature: "Non-Bailable, Cognizable (varies by state)",
        offenceNature_hinglish: "Gair-Zamanati, Sangye (State ke hisaab se alag ho sakta hai)",
        relatedSections: ["379", "380"]
    },
    {
        sectionNumber: "420",
        title: "Cheating and dishonestly inducing delivery of property",
        title_hinglish: "Dhokhadhadi (Cheating) aur beimaani se property lena",
        category: "Offences Against Property",
        chapter: "XVII",
        meaning: "Cheating someone and thereby dishonestly inducing them to deliver any property.",
        meaning_hinglish: "Kisi ko dhoka dekar usse koi property ya paisa nikalvana.",
        applicability: [
            "Deception of any person",
            "Fraudulently or dishonestly inducing delivery of property"
        ],
        applicability_hinglish: [
            "Kisi ko dhoka dena",
            "Beimaani se property dene ke liye majboor karna"
        ],
        example: "A, by pledging as diamonds articles which he knows are not diamonds, intentionally deceives Z, and implies Z to lend money.",
        example_hinglish: "A ne Z ko nakli heere (diamonds) dikhakar asli bolke bech diye aur paise le liye.",
        punishment: "Imprisonment up to 7 years and fine",
        punishment_hinglish: "7 saal tak ki jail aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["415", "417"]
    },
    {
        sectionNumber: "511",
        title: "Punishment for attempting to commit offences punishable with imprisonment for life or other imprisonment",
        title_hinglish: "Apradh karne ki koshish (Attempt to Commit Offence) ki saza",
        category: "Attempts to Commit Offences",
        chapter: "XXIII",
        meaning: "Attempting to commit an offence punishable by imprisonment.",
        meaning_hinglish: "Koi aisa apradh karne ki koshish karna jiski saza jail hai.",
        applicability: [
            "Attempt to commit an offence",
            "Doing any act towards the commission of the offence"
        ],
        applicability_hinglish: [
            "Apradh karne ki koshish",
            "Apradh karne ki disha mein koi kaam karna"
        ],
        example: "A makes an attempt to steal some jewels by breaking open a box, and finds after opening the box, that there is no jewel in it.",
        example_hinglish: "A ne ek sandook tode ke gehne churane ki koshish ki, par sandook khali nikla. Ye attempt mana jayega.",
        punishment: "Imprisonment for half the longest term provided for the offence, or fine, or both",
        punishment_hinglish: "Asli apradh ki aadhi saza (half term), ya jurmana, ya dono",
        offenceNature: "Bailable/Non-Bailable (depends on offence), Cognizable/Non-Cognizable (depends on offence)",
        offenceNature_hinglish: "Zamanati/Gair-Zamanati (Apradh par nirbhar)",
        relatedSections: []
    },
    {
        sectionNumber: "124A",
        title: "Sedition",
        title_hinglish: "Rajdroh (Sedition)",
        category: "Offences Against the State",
        chapter: "VI",
        meaning: "Bringing or attempting to bring into hatred or contempt, or exciting or attempting to excite disaffection towards the Government.",
        meaning_hinglish: "Sarkar ke khilaaf nafrat failana ya logo ko bhadkana.",
        applicability: [
            "Words, either spoken or written, or by signs, or by visible representation",
            "Brings or attempts to bring into hatred or contempt",
            "Excites or attempts to excite disaffection towards the Government established by law in India"
        ],
        applicability_hinglish: [
            "Bolkar, likhkar, ya ishuro se",
            "Nafrat ya apmaan paida karna",
            "Sarkar ke khilaaf asantosh (disaffection) failana"
        ],
        example: "A publishes a pamphlet inciting people to violently overthrow the government.",
        example_hinglish: "A ne ek pamphlet baata jisme logo ko sarkar girane ke liye hinsa (violence) karne ko kaha gaya.",
        punishment: "Imprisonment for life, to which fine may be added, or with imprisonment which may extend to three years, to which fine may be added, or with fine.",
        punishment_hinglish: "Umar qaid aur jurmana, ya 3 saal tak ki jail aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["121", "153A"]
    },
    {
        sectionNumber: "299",
        title: "Culpable homicide",
        title_hinglish: "Aparadhik Manav Vadh (Culpable Homicide)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Causing death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that he is likely by such act to cause death.",
        meaning_hinglish: "Aisa kaam karke kisi ki maut karna jo irade se kiya gaya ho, par murder ki category mein na aaye.",
        applicability: [
            "Causing death",
            "Intention of causing death",
            "Intention of causing bodily injury likely to cause death",
            "Knowledge that act is likely to cause death"
        ],
        applicability_hinglish: [
            "Kisi ki maut hona",
            "Maut ka irada (intention)",
            "Aisi chot pahunchana jisse maut ho sakti hai",
            "Jankaari (knowledge) hona ki isse maut ho sakti hai"
        ],
        example: "A lays sticks and turf over a pit, with the intention of thereby causing death, or with the knowledge that death is likely to be thereby caused. Z believing the ground to be firm, treads on it, falls in and is killed.",
        example_hinglish: "A ne ek gaddhe ko lakaad aur ghaas se dhak diya taki koi gire aur mar jaye. Z wahan se guzra, gira aur mar gaya.",
        punishment: "Punishment provided under Section 304",
        punishment_hinglish: "Section 304 ke tehat saza milegi",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["300", "302", "304"]
    },
    {
        sectionNumber: "354",
        title: "Assault or criminal force to woman with intent to outrage her modesty",
        title_hinglish: "Mahila ki lajja bhang (Outrage Modesty) karna",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Assaulting or using criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.",
        meaning_hinglish: "Kisi mahila par hamla karna ya zor-zabardasti karna taaki uski izzat (modesty) kharab ho.",
        applicability: [
            "Assault or use of criminal force to any woman",
            "Intention or knowledge that modesty will be outraged"
        ],
        applicability_hinglish: [
            "Mahila par hamla ya bal (force) ka prayog",
            "Lajja bhang karne ka irada ya jankaari"
        ],
        example: "A pulls a woman's dupatta with the intent to insult her modesty.",
        example_hinglish: "A ne kisi mahila ka dupatta khincha taaki uski bezzati ho.",
        punishment: "Imprisonment of either description for a term which shall not be less than one year but which may extend to five years, and shall also be liable to fine.",
        punishment_hinglish: "Kam se kam 1 saal se 5 saal tak ki jail, aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["354A", "354B", "354C", "354D", "509"]
    },
    {
        sectionNumber: "503",
        title: "Criminal intimidation",
        title_hinglish: "Aparadhik Dhamki (Criminal Intimidation)",
        category: "Criminal Intimidation, Insult and Annoyance",
        chapter: "XXII",
        meaning: "Threatening another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person.",
        meaning_hinglish: "Kisi ko darrana ya dhamkana ki usse ya uski property ko nuksan pahunchaya jayega.",
        applicability: [
            "Threatening with injury to person, reputation or property",
            "Intent to cause alarm",
            "Intent to cause the person to do any act which he is not legally bound to do"
        ],
        applicability_hinglish: [
            "Chot, badnaami ya property nuksan ki dhamki",
            "Darr paida karne ka irada",
            "Kisi ko wo kaam karne pe majboor karna jo wo nahi karna chahta"
        ],
        example: "A threatens to burn B's house if B does not pay him money.",
        example_hinglish: "A ne B ko dhamki di ki agar paise nahi diye to uska ghar jala dega.",
        punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both (Section 506).",
        punishment_hinglish: "2 saal tak ki jail, ya jurmana, ya dono",
        offenceNature: "Bailable, Non-Cognizable",
        offenceNature_hinglish: "Zamanati, Asangye (Non-Cognizable)",
        relatedSections: ["506"]
    },

    // --- NEW SECTIONS (Offences Against Body) ---

    {
        sectionNumber: "300",
        title: "Murder",
        title_hinglish: "Murder (Qatl) ki paribhasha (Definition)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Defines what constitutes murder. Culpable homicide entails murder if the act is done with the intention of causing death, or specific bodily injury known to be likely to cause death.",
        meaning_hinglish: "Ye batata hai ki Murder kya hota hai. Agar maut ka pakka irada ho, to wo Murder hai.",
        applicability: [
            "Intention of causing death",
            "Intention of causing bodily injury sufficient to cause death",
            "Knowledge that act is imminently dangerous"
        ],
        applicability_hinglish: [
            "Maut ka irada",
            "Aisi chot pahunchana jisse maut pakka ho",
            "Jankaari ki ye kaam khatarnaak hai"
        ],
        example: "A shoots Z with the intention of killing him. Z dies. A is guilty of murder.",
        example_hinglish: "A ne Z ko jaan se maarne ke liye goli maari. Z mar gaya. Ye Murder hai.",
        punishment: "Defined in Section 302",
        punishment_hinglish: "Saza Section 302 mein di gayi hai",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["299", "302"]
    },
    {
        sectionNumber: "304",
        title: "Punishment for Culpable Homicide not amounting to Murder",
        title_hinglish: "Gair-iradatan Hatya (Culpable Homicide) ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Punishment for causing death without the intention or knowledge required for murder.",
        meaning_hinglish: "Maut dena jabki Murder jaisa pakka irada na ho (jaise gusse mein ya achanak).",
        applicability: [
            "Culpable homicide not amounting to murder",
            "Intent to cause death or bodily injury likely to cause death"
        ],
        applicability_hinglish: [
            "Hatya jo Murder nahi hai",
            "Maut ya gahri chot ka irada"
        ],
        example: "A strikes Z with a club. Z dies. A did not intend to kill Z but knew the blow was likely to cause death.",
        example_hinglish: "A ne Z ko dande se mara. Z mar gaya. A ka maarna ka plan nahi tha par use pata tha ki chot lag sakti hai.",
        punishment: "Imprisonment for life or up to 10 years, and fine",
        punishment_hinglish: "Umar qaid ya 10 saal tak ki jail, aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["299", "300"]
    },
    {
        sectionNumber: "307",
        title: "Attempt to Murder",
        title_hinglish: "Jaan se maarne ki koshish (Attempt to Murder)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Doing any act with such intention or knowledge that if it caused death, the person would be guilty of murder.",
        meaning_hinglish: "Kisi ko maarne ki koshish karna. Agar wo bach jaye, tab bhi ye apradh hai.",
        applicability: [
            "Performance of an act",
            "Intention or knowledge to commit murder",
            "The act must be capable of causing death"
        ],
        applicability_hinglish: [
            "Hamla karna",
            "Maarne ka irada hona",
            "Chot aisi ho jisse maut ho sakti thi"
        ],
        example: "A shoots at Z with intent to kill him. The bullet misses. A is liable under this section.",
        example_hinglish: "A ne Z par goli chalayi par nishana chook gaya. Z bach gaya, par A par case chalega.",
        punishment: "Imprisonment up to 10 years and fine; if hurt is caused, life imprisonment",
        punishment_hinglish: "10 saal tak ki jail; agar chot lagi to umar qaid",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["302", "308"]
    },
    {
        sectionNumber: "308",
        title: "Attempt to commit culpable homicide",
        title_hinglish: "Gair-iradatan Hatya ki koshish",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Attempting to commit culpable homicide not amounting to murder.",
        meaning_hinglish: "Aisi hatya ki koshish jo Murder ki category mein na aaye.",
        applicability: [
            "Attempt to commit culpable homicide",
            "Act done with intention or knowledge"
        ],
        applicability_hinglish: [
            "Hatya ki koshish",
            "Karya irade ya jankaari ke saath kiya gaya"
        ],
        example: "A fires a pistol at Z under sudden provocation. If Z dies, it would be culpable homicide not murder. A is liable under this section.",
        example_hinglish: "A ne gusse mein aakar Z par goli chalayi. Ye murder nahi tha par koshish thi.",
        punishment: "Imprisonment up to 3 years, or fine, or both; if hurt is caused, up to 7 years",
        punishment_hinglish: "3 saal tak ki jail; agar chot lagi to 7 saal tak",
        offenceNature: "Bailable (if no hurt), Non-Bailable (if hurt), Cognizable",
        offenceNature_hinglish: "Zamanati (agar chot nahi lagi), Gair-Zamanati (agar chot lagi)",
        relatedSections: ["304", "307"]
    },
    {
        sectionNumber: "319",
        title: "Hurt",
        title_hinglish: "Chot (Hurt) pahunchana",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Causing bodily pain, disease or infirmity to any person.",
        meaning_hinglish: "Kisi ko dard, bimari ya kamzori dena.",
        applicability: [
            "Causing bodily pain",
            "Causing disease",
            "Causing infirmity"
        ],
        applicability_hinglish: [
            "Sharirik dard dena",
            "Bimari dena",
            "Sharirik kamzori dena"
        ],
        example: "A punches Z in the face, causing pain.",
        example_hinglish: "A ne Z ke chehre par ghusa mara jisse dard hua.",
        punishment: "Defined in Section 323",
        punishment_hinglish: "Saza Section 323 mein hai",
        offenceNature: "Non-Cognizable, Bailable",
        offenceNature_hinglish: "Asangye, Zamanati",
        relatedSections: ["323"]
    },
    {
        sectionNumber: "320",
        title: "Grievous Hurt",
        title_hinglish: "Gambhir Chot (Grievous Hurt)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Designates specific severe kinds of hurt, such as permanent loss of sight, hearing, or joint power, or severe pain lasting 20 days.",
        meaning_hinglish: "Bohot gehri chot, jaise aankh fodna, haddi todna ya 20 din tak dard rehna.",
        applicability: [
            "Emasculation",
            "Permanent privation of sight/hearing",
            "Privation of any member or joint",
            "Fracture or dislocation of bone/tooth"
        ],
        applicability_hinglish: [
            "Jaanleva chot",
            "Aankh ya kaan ki shakti khatam karna",
            "Haddi ya daant todna"
        ],
        example: "A breaks Z's arm with a stick.",
        example_hinglish: "A ne dande se maar kar Z ka haath tod diya.",
        punishment: "Defined in Section 325",
        punishment_hinglish: "Saza Section 325 mein hai",
        offenceNature: "Cognizable, Bailable",
        offenceNature_hinglish: "Sangye, Zamanati",
        relatedSections: ["325", "326"]
    },
    {
        sectionNumber: "323",
        title: "Punishment for voluntarily causing hurt",
        title_hinglish: "Chot (Hurt) pahunchane ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Punishment for voluntarily causing bodily pain, disease or infirmity.",
        meaning_hinglish: "Jaan-boojh kar kisi ko chot pahunchane ki saza.",
        applicability: [
            "Voluntarily causing hurt",
            "Without provocation"
        ],
        applicability_hinglish: [
            "Apni marzi se chot pahunchana",
            "Bina kisi uksave ke"
        ],
        example: "A slaps Z during an argument.",
        example_hinglish: "A ne behes ke dauran Z ko thappad mara.",
        punishment: "Imprisonment up to 1 year, or fine up to ₹1,000, or both",
        punishment_hinglish: "1 saal tak ki jail, ya ₹1,000 jurmana, ya dono",
        offenceNature: "Bailable, Non-Cognizable",
        offenceNature_hinglish: "Zamanati, Asangye",
        relatedSections: ["319"]
    },
    {
        sectionNumber: "325",
        title: "Punishment for voluntarily causing grievous hurt",
        title_hinglish: "Gambhir Chot (Grievous Hurt) ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Punishment for voluntarily causing severe physical injury as defined in Section 320.",
        meaning_hinglish: "Jaan-boojh kar kisi ko gehri/gambhir chot pahunchane ki saza.",
        applicability: [
            "Voluntarily causing grievous hurt",
            "Without dangerous weapons"
        ],
        applicability_hinglish: [
            "Gambhir chot pahunchana",
            "Bina khatarnaak hathiyar ke"
        ],
        example: "A pushes Z, causing Z to fall and break a leg.",
        example_hinglish: "A ne Z ko dhakka diya, Z gira aur uska pair toot gaya.",
        punishment: "Imprisonment up to 7 years and fine",
        punishment_hinglish: "7 saal tak ki jail aur jurmana",
        offenceNature: "Bailable, Cognizable",
        offenceNature_hinglish: "Zamanati, Sangye",
        relatedSections: ["320"]
    },
    {
        sectionNumber: "326",
        title: "Voluntarily causing grievous hurt by dangerous weapons or means",
        title_hinglish: "Khatarnaak hathiyar se Gambhir Chot pahunchana",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Causing grievous hurt using instruments for shooting, stabbing, cutting, or using fire, poison, etc.",
        meaning_hinglish: "Chaku, goli, aag, ya zeher se kisi ko gambhir chot pahunchana.",
        applicability: [
            "Voluntarily causing grievous hurt",
            "Using dangerous weapon or means"
        ],
        applicability_hinglish: [
            "Gambhir chot pahunchana",
            "Khatarnaak hathiyar ka istemal"
        ],
        example: "A stabs Z with a knife, causing a deep wound.",
        example_hinglish: "A ne Z ko chaku mara jisse gehri chot lagi.",
        punishment: "Imprisonment for life or up to 10 years, and fine",
        punishment_hinglish: "Umar qaid ya 10 saal tak ki jail, aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["320", "324"]
    },
    {
        sectionNumber: "341",
        title: "Punishment for wrongful restraint",
        title_hinglish: "Galat tarike se rokne (Wrongful Restraint) ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Obstructing a person from proceeding in a direction they have a right to go.",
        meaning_hinglish: "Kisi ko us raaste par jaane se rokna jahan jaane ka uska haq hai.",
        applicability: [
            "Voluntary obstruction",
            "Preventing person from proceeding in allowed direction"
        ],
        applicability_hinglish: [
            "Jaan-boojh kar rukaavat dalna",
            "Sahi disha mein jaane se rokna"
        ],
        example: "A blocks the path so Z cannot pass down a public street.",
        example_hinglish: "A ne sadak gher li taaki Z wahan se na ja sake.",
        punishment: "Imprisonment up to 1 month, or fine up to ₹500, or both",
        punishment_hinglish: "1 mahine tak ki jail, ya ₹500 jurmana, ya dono",
        offenceNature: "Bailable, Cognizable",
        offenceNature_hinglish: "Zamanati, Sangye",
        relatedSections: ["339"]
    },
    {
        sectionNumber: "342",
        title: "Punishment for wrongful confinement",
        title_hinglish: "Galat tarike se qaid karne (Wrongful Confinement) ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Restraining a person within certain circumscribing limits.",
        meaning_hinglish: "Kisi ko ek jagah band kar dena taaki wo wahan se bahar na ja paye.",
        applicability: [
            "Wrongful confinement",
            "Preventing person from leaving a specific area"
        ],
        applicability_hinglish: [
            "Galat tarike se qaid karna",
            "Kisi area se bahar na jaane dena"
        ],
        example: "A locks Z in a room and walks away with the key.",
        example_hinglish: "A ne Z ko kamre mein band kiya aur chabi lekar chala gaya.",
        punishment: "Imprisonment up to 1 year, or fine up to ₹1,000, or both",
        punishment_hinglish: "1 saal tak ki jail, ya ₹1,000 jurmana, ya dono",
        offenceNature: "Bailable, Cognizable",
        offenceNature_hinglish: "Zamanati, Sangye",
        relatedSections: ["340"]
    },
    {
        sectionNumber: "351",
        title: "Assault",
        title_hinglish: "Hamla (Assault)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Making a gesture or preparation that causes apprehension that criminal force is about to be used.",
        meaning_hinglish: "Koi aisa ishara ya taiyari karna jisse dusre ko lage ki uspar hamla hone wala hai.",
        applicability: [
            "Gesture or preparation",
            "Intention/Knowledge to cause apprehension of criminal force"
        ],
        applicability_hinglish: [
            "Ishara ya taiyari dikhana",
            "Darr paida karna ki hamla hoga"
        ],
        example: "A shakes his fist at Z in a threatening manner.",
        example_hinglish: "A ne Z ko marne ke liye ghusa dikhaya.",
        punishment: "Imprisonment up to 3 months, or fine up to ₹500, or both (Section 352)",
        punishment_hinglish: "3 mahine tak ki jail, ya ₹500 jurmana, ya dono",
        offenceNature: "Bailable, Non-Cognizable",
        offenceNature_hinglish: "Zamanati, Asangye",
        relatedSections: ["352"]
    },
    {
        sectionNumber: "363",
        title: "Punishment for kidnapping",
        title_hinglish: "Apaharan (Kidnapping) ki saza",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Taking a minor or person of unsound mind out of the keeping of their lawful guardian without consent.",
        meaning_hinglish: "Kisi nabalik (minor) ko uske guardian ki marzi ke bina le jana.",
        applicability: [
            "Taking or enticing a minor/unsound person",
            "From lawful guardianship",
            "Without consent"
        ],
        applicability_hinglish: [
            "Minor ko behla-fusla kar le jana",
            "Kanooni guardian se door le jana",
            "Bina permission ke"
        ],
        example: "A takes a 14-year-old girl away from her parents' house without their consent.",
        example_hinglish: "A ek 14 saal ki ladki ko uske maa-baap ki marzi ke bina le gaya.",
        punishment: "Imprisonment up to 7 years and fine",
        punishment_hinglish: "7 saal tak ki jail aur jurmana",
        offenceNature: "Bailable, Cognizable",
        offenceNature_hinglish: "Zamanati, Sangye",
        relatedSections: ["359", "360", "361"]
    },
    {
        sectionNumber: "364A",
        title: "Kidnapping for ransom, etc.",
        title_hinglish: "Phirauti ke liye Apaharan (Kidnapping for Ransom)",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Kidnapping or abducting someone and threatening to hurt/kill them to compel a third party to do something (e.g., pay ransom).",
        meaning_hinglish: "Kisi ko kidnap karke paise (phirauti) maangna ya maarne ki dhamki dena.",
        applicability: [
            "Kidnapping or abduction",
            "Threat to cause death or hurt",
            "Demand for ransom"
        ],
        applicability_hinglish: [
            "Kidnapping ya abduction",
            "Maarne ya chot pahunchane ki dhamki",
            "Phirauti (Ransom) maangna"
        ],
        example: "A kidnaps Z and demands ₹10 Lakhs from Z's family for his release.",
        example_hinglish: "A ne Z ko kidnap kiya aur uske parivaar se 10 Lakh rupaye maange.",
        punishment: "Death or imprisonment for life, and fine",
        punishment_hinglish: "Maut ki saza ya umar qaid, aur jurmana",
        offenceNature: "Non-Bailable, Cognizable",
        offenceNature_hinglish: "Gair-Zamanati, Sangye",
        relatedSections: ["363"]
    }
];

// Export for usage if using modules, but for vanilla global scope:
window.ipcData = ipcSections; // Attach to window for global access in simple script setup

