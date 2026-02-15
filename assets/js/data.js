const ipcSections = [
    {
        sectionNumber: "302",
        title: "Punishment for murder",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Punishment for intentionally killing someone.",
        applicability: [
            "Person commits murder",
            "Intention to cause death"
        ],
        example: "A shoots Z with the intention of killing him. Z dies.",
        punishment: "Death or imprisonment for life, and fine",
        offenceNature: "Non-Bailable, Cognizable",
        relatedSections: ["300", "307"]
    },
    {
        sectionNumber: "378",
        title: "Theft",
        category: "Offences Against Property",
        chapter: "XVII",
        meaning: "Dishonestly taking any movable property out of the possession of any person without that person's consent.",
        applicability: [
            "Dishonest intention",
            "Movable property",
            "Taking out of possession",
            "Without consent"
        ],
        example: "A finds a ring belonging to Z on a table in Z's house. A creates a duplicate key, enters Z's house and takes the ring.",
        punishment: "Imprisonment up to 3 years, or fine, or both",
        offenceNature: "Non-Bailable, Cognizable (varies by state)",
        relatedSections: ["379", "380"]
    },
    {
        sectionNumber: "420",
        title: "Cheating and dishonestly inducing delivery of property",
        category: "Offences Against Property",
        chapter: "XVII",
        meaning: "Cheating someone and thereby dishonestly inducing them to deliver any property.",
        applicability: [
            "Deception of any person",
            "Fraudulently or dishonestly inducing delivery of property"
        ],
        example: "A, by pledging as diamonds articles which he knows are not diamonds, intentionally deceives Z, and implies Z to lend money.",
        punishment: "Imprisonment up to 7 years and fine",
        offenceNature: "Non-Bailable, Cognizable",
        relatedSections: ["415", "417"]
    },
    {
        sectionNumber: "511",
        title: "Punishment for attempting to commit offences punishable with imprisonment for life or other imprisonment",
        category: "Attempts to Commit Offences",
        chapter: "XXIII",
        meaning: "Attempting to commit an offence punishable by imprisonment.",
        applicability: [
            "Attempt to commit an offence",
            "Doing any act towards the commission of the offence"
        ],
        example: "A makes an attempt to steal some jewels by breaking open a box, and finds after opening the box, that there is no jewel in it.",
        punishment: "Imprisonment for half the longest term provided for the offence, or fine, or both",
        offenceNature: "Bailable/Non-Bailable (depends on offence), Cognizable/Non-Cognizable (depends on offence)",
        relatedSections: []
    },
    {
        sectionNumber: "124A",
        title: "Sedition",
        category: "Offences Against the State",
        chapter: "VI",
        meaning: "Bringing or attempting to bring into hatred or contempt, or exciting or attempting to excite disaffection towards the Government.",
        applicability: [
            "Words, either spoken or written, or by signs, or by visible representation",
            "Brings or attempts to bring into hatred or contempt",
            "Excites or attempts to excite disaffection towards the Government established by law in India"
        ],
        example: "A publishes a pamphlet inciting people to violently overthrow the government.",
        punishment: "Imprisonment for life, to which fine may be added, or with imprisonment which may extend to three years, to which fine may be added, or with fine.",
        offenceNature: "Non-Bailable, Cognizable",
        relatedSections: ["121", "153A"]
    },
    {
        sectionNumber: "299",
        title: "Culpable homicide",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Causing death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that he is likely by such act to cause death.",
        applicability: [
            "Causing death",
            "Intention of causing death",
            "Intention of causing bodily injury likely to cause death",
            "Knowledge that act is likely to cause death"
        ],
        example: "A lays sticks and turf over a pit, with the intention of thereby causing death, or with the knowledge that death is likely to be thereby caused. Z believing the ground to be firm, treads on it, falls in and is killed.",
        punishment: "Punishment provided under Section 304",
        offenceNature: "Non-Bailable, Cognizable",
        relatedSections: ["300", "302", "304"]
    },
    {
        sectionNumber: "354",
        title: "Assault or criminal force to woman with intent to outrage her modesty",
        category: "Offences Against Body",
        chapter: "XVI",
        meaning: "Assaulting or using criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.",
        applicability: [
            "Assault or use of criminal force to any woman",
            "Intention or knowledge that modesty will be outraged"
        ],
        example: "A pulls a woman's dupatta with the intent to insult her modesty.",
        punishment: "Imprisonment of either description for a term which shall not be less than one year but which may extend to five years, and shall also be liable to fine.",
        offenceNature: "Non-Bailable, Cognizable",
        relatedSections: ["354A", "354B", "354C", "354D", "509"]
    },
    {
        sectionNumber: "503",
        title: "Criminal intimidation",
        category: "Criminal Intimidation, Insult and Annoyance",
        chapter: "XXII",
        meaning: "Threatening another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person.",
        applicability: [
            "Threatening with injury to person, reputation or property",
            "Intent to cause alarm",
            "Intent to cause the person to do any act which he is not legally bound to do"
        ],
        example: "A threatens to burn B's house if B does not pay him money.",
        punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both (Section 506).",
        offenceNature: "Bailable, Non-Cognizable",
        relatedSections: ["506"]
    }
];

// Export for usage if using modules, but for vanilla global scope:
window.ipcData = ipcSections; // Attach to window for global access in simple script setup
