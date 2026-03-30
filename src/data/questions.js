// Each question has a category, question text, 4 choices, the correct index,
// and an explanation. Math-based questions use a `generate` function
// that returns a fresh { question, choices, correctIndex, explanation } each time.

const staticQuestions = [
  // ═══════════════════════════════════════════════════
  //  CATEGORY: anatomy  (Ocular Anatomy & Physiology)
  // ═══════════════════════════════════════════════════
  {
    id: 'anat-1',
    category: 'anatomy',
    question: 'Which structure of the eye provides approximately two-thirds of its total refractive power?',
    choices: ['Crystalline lens', 'Cornea', 'Aqueous humor', 'Vitreous humor'],
    correctIndex: 1,
    explanation: 'The cornea provides approximately 43 diopters, which is about two-thirds of the eye\'s total refractive power.',
  },
  {
    id: 'anat-2',
    category: 'anatomy',
    question: 'The fovea centralis contains the highest concentration of which type of photoreceptor?',
    choices: ['Rods', 'Cones', 'Bipolar cells', 'Ganglion cells'],
    correctIndex: 1,
    explanation: 'The fovea centralis has the highest concentration of cones, providing the sharpest visual acuity and color perception.',
  },
  {
    id: 'anat-3',
    category: 'anatomy',
    question: 'What is the blind spot of the eye?',
    choices: ['The fovea', 'The macula', 'The optic disc', 'The pupil'],
    correctIndex: 2,
    explanation: 'The optic disc is where the optic nerve exits the eye. It has no photoreceptors, creating the physiological blind spot.',
  },
  {
    id: 'anat-4',
    category: 'anatomy',
    question: 'Which muscle moves the eye outward (abduction)?',
    choices: ['Medial rectus', 'Lateral rectus', 'Superior oblique', 'Inferior rectus'],
    correctIndex: 1,
    explanation: 'The lateral rectus muscle is responsible for abduction — moving the eye outward (away from the nose).',
  },
  {
    id: 'anat-5',
    category: 'anatomy',
    question: 'Aqueous humor drains through which structure?',
    choices: ['Ciliary body', 'Vitreous chamber', 'Trabecular meshwork into Schlemm\'s canal', 'Lacrimal duct'],
    correctIndex: 2,
    explanation: 'Aqueous humor drains through the trabecular meshwork into Schlemm\'s canal. Blockage can lead to glaucoma.',
  },
  {
    id: 'anat-6',
    category: 'anatomy',
    question: 'Presbyopia is caused by:',
    choices: ['Corneal flattening', 'Increased axial length', 'Loss of flexibility of the crystalline lens', 'Degeneration of the retina'],
    correctIndex: 2,
    explanation: 'Presbyopia results from age-related hardening and loss of flexibility of the crystalline lens, reducing its ability to accommodate.',
  },
  {
    id: 'anat-7',
    category: 'anatomy',
    question: 'Which layer of the eye contains the iris, ciliary body, and choroid?',
    choices: ['Fibrous tunic', 'Vascular tunic (uvea)', 'Neural tunic', 'Conjunctiva'],
    correctIndex: 1,
    explanation: 'The vascular tunic (uvea) is the middle layer containing the iris, ciliary body, and choroid.',
  },
  {
    id: 'anat-8',
    category: 'anatomy',
    question: 'Rods are primarily responsible for:',
    choices: ['Color vision', 'Sharp central vision', 'Dim-light and peripheral vision', 'Near focusing'],
    correctIndex: 2,
    explanation: 'Rods (~120 million) are responsible for scotopic (dim-light) vision and peripheral vision. They do not detect color.',
  },
  {
    id: 'anat-9',
    category: 'anatomy',
    question: 'Myopia is corrected with which type of lens?',
    choices: ['Plus (convex) lens', 'Minus (concave) lens', 'Cylindrical lens', 'Prismatic lens'],
    correctIndex: 1,
    explanation: 'Myopia (nearsightedness) is corrected with a minus (concave/diverging) lens to diverge light so it focuses on the retina.',
  },
  {
    id: 'anat-10',
    category: 'anatomy',
    question: 'How many layers does the cornea have?',
    choices: ['Three', 'Four', 'Five', 'Seven'],
    correctIndex: 2,
    explanation: 'The cornea has five layers: epithelium, Bowman\'s membrane, stroma, Descemet\'s membrane, and endothelium.',
  },
  {
    id: 'anat-11',
    category: 'anatomy',
    question: 'Which part of the eye produces aqueous humor?',
    choices: ['Iris', 'Cornea', 'Ciliary body', 'Choroid'],
    correctIndex: 2,
    explanation: 'The ciliary body produces aqueous humor, which nourishes the cornea and lens and maintains intraocular pressure.',
  },
  {
    id: 'anat-12',
    category: 'anatomy',
    question: 'A cataract is a clouding of the:',
    choices: ['Cornea', 'Vitreous humor', 'Crystalline lens', 'Retina'],
    correctIndex: 2,
    explanation: 'A cataract is the clouding of the crystalline lens, causing decreased vision.',
  },
  {
    id: 'anat-13',
    category: 'anatomy',
    question: 'The crystalline lens is held in place by:',
    choices: ['The iris sphincter', 'Zonules of Zinn (suspensory ligaments)', 'The vitreous humor', 'The ciliary muscle directly'],
    correctIndex: 1,
    explanation: 'The zonules of Zinn (suspensory ligaments) attach the crystalline lens to the ciliary body, holding it in position.',
  },
  {
    id: 'anat-14',
    category: 'anatomy',
    question: 'The normal intraocular pressure (IOP) range is approximately:',
    choices: ['2-8 mmHg', '10-21 mmHg', '25-35 mmHg', '40-50 mmHg'],
    correctIndex: 1,
    explanation: 'Normal IOP is 10-21 mmHg. Elevated IOP is a key risk factor for glaucoma.',
  },
  {
    id: 'anat-15',
    category: 'anatomy',
    question: 'The macula is responsible for:',
    choices: ['Peripheral vision', 'Central, detailed vision', 'Night vision only', 'Intraocular pressure regulation'],
    correctIndex: 1,
    explanation: 'The macula provides central, detailed vision used for reading, driving, and recognizing faces.',
  },
  {
    id: 'anat-16',
    category: 'anatomy',
    question: 'The average axial length of the adult human eye is approximately:',
    choices: ['17 mm', '20 mm', '24 mm', '30 mm'],
    correctIndex: 2,
    explanation: 'The average axial length of the adult eye is approximately 24 mm (about 1 inch).',
  },
  {
    id: 'anat-17',
    category: 'anatomy',
    question: 'Hyperopia (farsightedness) occurs when:',
    choices: ['The eye is too long', 'The eye is too short or the cornea is too flat', 'The lens is too thick', 'The pupil is too large'],
    correctIndex: 1,
    explanation: 'Hyperopia occurs when the eye is too short or the cornea too flat, causing light to focus behind the retina.',
  },
  {
    id: 'anat-18',
    category: 'anatomy',
    question: 'Astigmatism is caused by:',
    choices: ['An irregularly shaped cornea or lens', 'A cloudy lens', 'A detached retina', 'Increased intraocular pressure'],
    correctIndex: 0,
    explanation: 'Astigmatism results from an irregularly shaped (toric) cornea or lens, causing light to focus at multiple points.',
  },
  {
    id: 'anat-19',
    category: 'anatomy',
    question: 'The conjunctiva covers:',
    choices: ['The entire cornea', 'The sclera and inner eyelids', 'Only the iris', 'The retina'],
    correctIndex: 1,
    explanation: 'The conjunctiva is a thin, transparent mucous membrane covering the sclera (bulbar) and lining the inner eyelids (palpebral).',
  },
  {
    id: 'anat-20',
    category: 'anatomy',
    question: 'The pupil size is controlled by:',
    choices: ['The cornea', 'The iris sphincter and dilator muscles', 'The ciliary body', 'The retina'],
    correctIndex: 1,
    explanation: 'The iris sphincter (constricts) and dilator (dilates) muscles control pupil size in response to light and accommodation.',
  },
  {
    id: 'anat-21',
    category: 'anatomy',
    question: 'The optic nerve (cranial nerve II) carries visual information from the retina to the:',
    choices: ['Cerebellum', 'Frontal lobe', 'Occipital lobe (visual cortex)', 'Temporal lobe'],
    correctIndex: 2,
    explanation: 'The optic nerve carries visual signals to the occipital lobe (visual cortex) at the back of the brain for processing.',
  },
  {
    id: 'anat-22',
    category: 'anatomy',
    question: 'The corneal endothelium is important because it:',
    choices: ['Provides the tear film', 'Pumps fluid out of the cornea to maintain clarity', 'Produces aqueous humor', 'Protects against UV radiation'],
    correctIndex: 1,
    explanation: 'The corneal endothelium pumps excess fluid out of the stroma to maintain corneal transparency. These cells do not regenerate.',
  },
  {
    id: 'anat-23',
    category: 'anatomy',
    question: 'The vitreous humor:',
    choices: ['Is continuously produced and drained', 'Is a gel-like substance filling the posterior chamber', 'Is located between the cornea and lens', 'Has a high refractive index of 1.52'],
    correctIndex: 1,
    explanation: 'The vitreous humor is a clear, gel-like substance that fills the large posterior cavity of the eye and helps maintain its shape.',
  },
  {
    id: 'anat-24',
    category: 'anatomy',
    question: 'The sclera is:',
    choices: ['The transparent front of the eye', 'The white, tough outer coat of the eye', 'The pigmented middle layer', 'The light-sensitive inner layer'],
    correctIndex: 1,
    explanation: 'The sclera is the white, tough, fibrous outer coat that forms the protective wall of the eye.',
  },
  {
    id: 'anat-25',
    category: 'anatomy',
    question: 'Which cranial nerve controls the lateral rectus muscle?',
    choices: ['Cranial nerve III (oculomotor)', 'Cranial nerve IV (trochlear)', 'Cranial nerve V (trigeminal)', 'Cranial nerve VI (abducens)'],
    correctIndex: 3,
    explanation: 'Cranial nerve VI (abducens) innervates the lateral rectus. Remember: LR6 SO4, all the rest CN III.',
  },
  {
    id: 'anat-26',
    category: 'anatomy',
    question: 'The tear film consists of how many layers?',
    choices: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'The tear film has three layers: outer lipid (oil), middle aqueous (water), and inner mucin (mucous).',
  },
  {
    id: 'anat-27',
    category: 'anatomy',
    question: 'The meibomian glands contribute which layer to the tear film?',
    choices: ['Mucin layer', 'Aqueous layer', 'Lipid (oil) layer', 'Protein layer'],
    correctIndex: 2,
    explanation: 'Meibomian glands in the eyelids produce the outer lipid (oil) layer that prevents tear evaporation.',
  },
  {
    id: 'anat-28',
    category: 'anatomy',
    question: 'The choroid layer of the eye primarily functions to:',
    choices: ['Refract light', 'Provide blood supply and nourishment to the retina', 'Produce aqueous humor', 'Control pupil size'],
    correctIndex: 1,
    explanation: 'The choroid is a highly vascular layer that provides oxygen and nutrients to the outer layers of the retina.',
  },
  {
    id: 'anat-29',
    category: 'anatomy',
    question: 'The corneal stroma makes up approximately what percentage of corneal thickness?',
    choices: ['50%', '70%', '90%', '99%'],
    correctIndex: 2,
    explanation: 'The stroma (middle layer) comprises approximately 90% of the total corneal thickness.',
  },
  {
    id: 'anat-30',
    category: 'anatomy',
    question: 'Which type of vision do cones provide?',
    choices: ['Scotopic (dim light) vision', 'Photopic (daylight/color) vision', 'Peripheral vision only', 'Motion detection only'],
    correctIndex: 1,
    explanation: 'Cones (~6 million) provide photopic vision: color perception and sharp visual acuity in well-lit conditions.',
  },
  {
    id: 'anat-31',
    category: 'anatomy',
    question: 'The Bowman\'s membrane is located:',
    choices: ['Between the stroma and endothelium', 'Between the epithelium and stroma', 'On the outermost surface of the cornea', 'Behind Descemet\'s membrane'],
    correctIndex: 1,
    explanation: 'Bowman\'s membrane lies between the epithelium and the stroma. It does not regenerate if damaged.',
  },
  {
    id: 'anat-32',
    category: 'anatomy',
    question: 'Glaucoma primarily damages which structure?',
    choices: ['The cornea', 'The crystalline lens', 'The optic nerve', 'The iris'],
    correctIndex: 2,
    explanation: 'Glaucoma damages the optic nerve, typically due to elevated intraocular pressure, leading to progressive vision loss.',
  },
  {
    id: 'anat-33',
    category: 'anatomy',
    question: 'The lacrimal gland is located:',
    choices: ['In the lower eyelid', 'In the upper outer (superotemporal) portion of the orbit', 'Behind the eyeball', 'Inside the nasal cavity'],
    correctIndex: 1,
    explanation: 'The lacrimal gland is located in the superotemporal (upper outer) portion of the orbit and produces the aqueous layer of tears.',
  },
  {
    id: 'anat-34',
    category: 'anatomy',
    question: 'The superior oblique muscle is innervated by:',
    choices: ['Cranial nerve III (oculomotor)', 'Cranial nerve IV (trochlear)', 'Cranial nerve V (trigeminal)', 'Cranial nerve VI (abducens)'],
    correctIndex: 1,
    explanation: 'Cranial nerve IV (trochlear) innervates the superior oblique muscle. Remember: LR6 SO4.',
  },
  {
    id: 'anat-35',
    category: 'anatomy',
    question: 'The retinal pigment epithelium (RPE) functions to:',
    choices: ['Transmit visual signals to the brain', 'Absorb stray light and recycle visual pigments', 'Produce aqueous humor', 'Form the blood-retina barrier only'],
    correctIndex: 1,
    explanation: 'The RPE absorbs stray light, recycles visual pigments (vitamin A), phagocytoses rod outer segments, and supports photoreceptor health.',
  },
  {
    id: 'anat-36',
    category: 'anatomy',
    question: 'Descemet\'s membrane is located:',
    choices: ['Between the epithelium and Bowman\'s layer', 'Between the stroma and endothelium', 'On the anterior surface of the iris', 'Between the choroid and retina'],
    correctIndex: 1,
    explanation: 'Descemet\'s membrane is a tough basement membrane located between the stroma and the endothelium.',
  },
  {
    id: 'anat-37',
    category: 'anatomy',
    question: 'Age-related macular degeneration (AMD) primarily affects:',
    choices: ['Peripheral vision first', 'Central vision', 'Night vision only', 'Color vision only'],
    correctIndex: 1,
    explanation: 'AMD affects the macula, causing loss of central vision needed for reading, driving, and recognizing faces.',
  },
  {
    id: 'anat-38',
    category: 'anatomy',
    question: 'The total refractive power of the human eye is approximately:',
    choices: ['20 diopters', '40 diopters', '60 diopters', '80 diopters'],
    correctIndex: 2,
    explanation: 'The total refractive power of the eye is approximately 60 diopters (cornea ~43D + lens ~17D).',
  },
  {
    id: 'anat-39',
    category: 'anatomy',
    question: 'The anterior chamber is located between the:',
    choices: ['Lens and retina', 'Cornea and iris', 'Iris and lens', 'Sclera and choroid'],
    correctIndex: 1,
    explanation: 'The anterior chamber is the fluid-filled space between the cornea and the iris, containing aqueous humor.',
  },
  {
    id: 'anat-40',
    category: 'anatomy',
    question: 'How many extraocular muscles control each eye?',
    choices: ['Four', 'Five', 'Six', 'Eight'],
    correctIndex: 2,
    explanation: 'Each eye is controlled by six extraocular muscles: four rectus (superior, inferior, medial, lateral) and two oblique (superior, inferior).',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: lenses  (Ophthalmic Lenses)
  // ═══════════════════════════════════════════════════
  {
    id: 'lens-1',
    category: 'lenses',
    question: 'What is the index of refraction for CR-39 plastic?',
    choices: ['1.498', '1.50', '1.523', '1.586'],
    correctIndex: 0,
    explanation: 'CR-39 has an index of refraction of 1.498 and is the standard plastic lens material.',
  },
  {
    id: 'lens-2',
    category: 'lenses',
    question: 'Which lens material is required by the FDA for children\'s eyewear?',
    choices: ['CR-39', 'Crown glass', 'Polycarbonate', 'Hi-index 1.67'],
    correctIndex: 2,
    explanation: 'Polycarbonate is required for children\'s and safety eyewear due to its superior impact resistance.',
  },
  {
    id: 'lens-3',
    category: 'lenses',
    question: 'Which lens material has the highest Abbe value?',
    choices: ['Polycarbonate', 'Crown glass', 'Hi-index 1.67', 'Hi-index 1.74'],
    correctIndex: 1,
    explanation: 'Crown glass has an Abbe value of 59, the highest among common ophthalmic materials.',
  },
  {
    id: 'lens-4',
    category: 'lenses',
    question: 'A progressive lens differs from a bifocal because it:',
    choices: [
      'Has a visible line between distance and near',
      'Provides a smooth, gradual transition with no visible lines',
      'Only corrects for distance vision',
      'Cannot correct astigmatism',
    ],
    correctIndex: 1,
    explanation: 'Progressive lenses provide a smooth transition from distance through intermediate to near with no visible lines.',
  },
  {
    id: 'lens-5',
    category: 'lenses',
    question: 'A minus lens is:',
    choices: [
      'Thicker in the center, thinner at edges',
      'Equal thickness throughout',
      'Thinner in the center, thicker at edges',
      'Flat on both surfaces',
    ],
    correctIndex: 2,
    explanation: 'Minus (concave) lenses are thinner in the center and thicker at the edges.',
  },
  {
    id: 'lens-6',
    category: 'lenses',
    question: 'Anti-reflective (AR) coating:',
    choices: [
      'Makes lenses darker',
      'Reduces reflections and allows more light to pass through',
      'Replaces the need for UV protection',
      'Adds tint to the lens',
    ],
    correctIndex: 1,
    explanation: 'AR coating reduces reflections from lens surfaces, allowing more light to pass through for clearer vision.',
  },
  {
    id: 'lens-7',
    category: 'lenses',
    question: 'Which lens material has built-in 100% UV protection without additional coating?',
    choices: ['CR-39', 'Crown glass', 'Polycarbonate', 'Hi-index 1.60'],
    correctIndex: 2,
    explanation: 'Polycarbonate (and Trivex) inherently block 100% of UV radiation without requiring an additional UV coating.',
  },
  {
    id: 'lens-8',
    category: 'lenses',
    question: 'Photochromic lenses:',
    choices: [
      'Are permanently tinted',
      'Darken in UV light and lighten indoors',
      'Only come in gray tint',
      'Darken fully inside a car',
    ],
    correctIndex: 1,
    explanation: 'Photochromic lenses darken in UV light and return to clear indoors. They may not fully darken in a car since windshields block UV.',
  },
  {
    id: 'lens-9',
    category: 'lenses',
    question: 'An Executive (Franklin) bifocal has:',
    choices: [
      'A round segment',
      'A flat-top 28mm segment',
      'A segment that extends the full width of the lens',
      'No visible segment line',
    ],
    correctIndex: 2,
    explanation: 'The Executive (Franklin) bifocal has a segment that extends across the entire width of the lens.',
  },
  {
    id: 'lens-10',
    category: 'lenses',
    question: 'Trivex lens material is known for:',
    choices: [
      'Highest index of refraction',
      'Being the heaviest material',
      'Excellent impact resistance and the lightest weight',
      'Best scratch resistance of all materials',
    ],
    correctIndex: 2,
    explanation: 'Trivex is the lightest lens material with excellent impact resistance and superior optical clarity (Abbe value 45).',
  },
  {
    id: 'lens-11',
    category: 'lenses',
    question: 'A higher index of refraction means:',
    choices: [
      'A thicker lens for the same Rx',
      'A thinner lens for the same Rx',
      'Better chromatic aberration control',
      'Improved scratch resistance',
    ],
    correctIndex: 1,
    explanation: 'Higher index materials bend light more efficiently, allowing thinner lenses for the same prescription.',
  },
  {
    id: 'lens-12',
    category: 'lenses',
    question: 'Polarized lenses work by:',
    choices: [
      'Blocking all light equally',
      'Blocking horizontally oriented reflected glare',
      'Darkening in sunlight',
      'Filtering blue light only',
    ],
    correctIndex: 1,
    explanation: 'Polarized lenses block horizontally polarized light, eliminating reflected glare from flat surfaces.',
  },
  {
    id: 'lens-13',
    category: 'lenses',
    question: 'The Abbe value measures:',
    choices: ['Lens thickness', 'Impact resistance', 'Chromatic aberration (color dispersion)', 'UV protection level'],
    correctIndex: 2,
    explanation: 'The Abbe value measures a material\'s chromatic dispersion. Higher Abbe value = less color fringing.',
  },
  {
    id: 'lens-14',
    category: 'lenses',
    question: 'What is the index of refraction of crown glass?',
    choices: ['1.498', '1.523', '1.586', '1.60'],
    correctIndex: 1,
    explanation: 'Crown glass has an index of refraction of 1.523 and is the reference standard for ophthalmic lenses.',
  },
  {
    id: 'lens-15',
    category: 'lenses',
    question: 'The Abbe value of polycarbonate is approximately:',
    choices: ['30', '36', '45', '58'],
    correctIndex: 0,
    explanation: 'Polycarbonate has an Abbe value of approximately 30, one of the lowest, meaning more chromatic aberration.',
  },
  {
    id: 'lens-16',
    category: 'lenses',
    question: 'A flat-top 28 (FT-28) bifocal segment measures:',
    choices: ['22mm wide', '25mm wide', '28mm wide', '35mm wide'],
    correctIndex: 2,
    explanation: 'A flat-top 28 (FT-28) bifocal has a 28mm wide D-shaped segment, the most commonly prescribed bifocal.',
  },
  {
    id: 'lens-17',
    category: 'lenses',
    question: 'The corridor length in a progressive lens refers to:',
    choices: ['The total lens height', 'The distance from the fitting cross to the near zone', 'The width of the reading area', 'The distance portion of the lens'],
    correctIndex: 1,
    explanation: 'The corridor length is the distance from the fitting cross (distance reference point) to the beginning of the full near zone.',
  },
  {
    id: 'lens-18',
    category: 'lenses',
    question: 'Which lens type has unwanted astigmatism in the peripheral zones?',
    choices: ['Single vision', 'Flat-top bifocal', 'Progressive', 'Executive bifocal'],
    correctIndex: 2,
    explanation: 'Progressive lenses have unavoidable peripheral distortion (unwanted astigmatism) on either side of the progressive corridor.',
  },
  {
    id: 'lens-19',
    category: 'lenses',
    question: 'Scratch-resistant coating is applied to which lens material most often?',
    choices: ['Crown glass', 'Polycarbonate', 'CR-39', 'All plastic lenses benefit from it'],
    correctIndex: 3,
    explanation: 'All plastic lens materials are softer than glass and benefit from scratch-resistant (hard) coating to improve durability.',
  },
  {
    id: 'lens-20',
    category: 'lenses',
    question: 'Blue-light filtering lenses are designed to:',
    choices: ['Block all visible light', 'Reduce high-energy visible (HEV) blue light', 'Eliminate UV only', 'Darken in sunlight'],
    correctIndex: 1,
    explanation: 'Blue-light filtering lenses reduce high-energy visible (HEV) blue light (approximately 400-450nm) from digital screens and sunlight.',
  },
  {
    id: 'lens-21',
    category: 'lenses',
    question: 'An aspheric lens design provides:',
    choices: ['Thicker edges than spherical lenses', 'Flatter, thinner profile with reduced magnification', 'Built-in prism correction', 'Photochromic properties'],
    correctIndex: 1,
    explanation: 'Aspheric designs use a gradually changing curve to create flatter, thinner lenses with reduced magnification/minification and wider fields of clear vision.',
  },
  {
    id: 'lens-22',
    category: 'lenses',
    question: 'The index of refraction for polycarbonate is:',
    choices: ['1.498', '1.523', '1.586', '1.67'],
    correctIndex: 2,
    explanation: 'Polycarbonate has an index of refraction of 1.586.',
  },
  {
    id: 'lens-23',
    category: 'lenses',
    question: 'A trifocal lens has how many distinct viewing zones?',
    choices: ['Two', 'Three', 'Four', 'Infinite (like a progressive)'],
    correctIndex: 1,
    explanation: 'A trifocal lens has three viewing zones: distance, intermediate, and near, with visible segment lines.',
  },
  {
    id: 'lens-24',
    category: 'lenses',
    question: 'Mirror coatings on lenses primarily:',
    choices: ['Improve impact resistance', 'Reduce light transmission and provide cosmetic effect', 'Eliminate chromatic aberration', 'Add UV protection'],
    correctIndex: 1,
    explanation: 'Mirror coatings reflect light from the front surface, reducing light transmission for bright conditions and providing a cosmetic appearance.',
  },
  {
    id: 'lens-25',
    category: 'lenses',
    question: 'Occupational progressive lenses differ from standard progressives because they:',
    choices: ['Have no near zone', 'Emphasize intermediate and near zones for office/computer work', 'Are only available in polycarbonate', 'Have a longer corridor'],
    correctIndex: 1,
    explanation: 'Occupational (office/computer) progressives are designed with wider intermediate and near zones, sacrificing the distance portion for better workspace vision.',
  },
  {
    id: 'lens-26',
    category: 'lenses',
    question: 'Double-segment (DS) bifocals have segments located:',
    choices: ['Only at the bottom', 'At both the top and bottom of the lens', 'Only at the top', 'In the center of the lens'],
    correctIndex: 1,
    explanation: 'Double-segment bifocals have near segments at both the top and bottom, useful for overhead work such as mechanics or electricians.',
  },
  {
    id: 'lens-27',
    category: 'lenses',
    question: 'The minimum thickness for safety lenses per ANSI Z87.1 is:',
    choices: ['1.0mm', '2.0mm', '3.0mm', '4.0mm'],
    correctIndex: 2,
    explanation: 'ANSI Z87.1 requires safety dress lenses to have a minimum thickness of 3.0mm.',
  },
  {
    id: 'lens-28',
    category: 'lenses',
    question: 'Hi-index 1.74 lenses are best suited for:',
    choices: ['Low prescriptions under +/-2.00 D', 'Children\'s eyewear', 'High prescriptions requiring the thinnest possible lens', 'Safety/industrial applications'],
    correctIndex: 2,
    explanation: 'Hi-index 1.74 provides the thinnest lenses for high prescriptions, but has a lower Abbe value (33) and requires AR coating.',
  },
  {
    id: 'lens-29',
    category: 'lenses',
    question: 'Hydrophobic coating on a lens:',
    choices: ['Attracts water for clearer vision in rain', 'Repels water, oil, and smudges', 'Blocks UV radiation', 'Increases impact resistance'],
    correctIndex: 1,
    explanation: 'Hydrophobic coating repels water, oil, and dirt, making lenses easier to clean and more resistant to smudging.',
  },
  {
    id: 'lens-30',
    category: 'lenses',
    question: 'A plano lens has a power of:',
    choices: ['+1.00 D', '-1.00 D', '0.00 D (no power)', '+0.50 D'],
    correctIndex: 2,
    explanation: 'A plano lens has zero refractive power (0.00 D) and is used for non-prescription eyewear or safety glasses.',
  },
  {
    id: 'lens-31',
    category: 'lenses',
    question: 'A lenticular lens design is used for:',
    choices: ['Mild prescriptions', 'Very high plus prescriptions to reduce weight and thickness', 'Astigmatism only', 'Prism correction'],
    correctIndex: 1,
    explanation: 'Lenticular lenses concentrate the optical power in a central zone, reducing edge thickness and weight for very high plus prescriptions.',
  },
  {
    id: 'lens-32',
    category: 'lenses',
    question: 'The "intermediate" zone of a progressive lens is designed for viewing at approximately:',
    choices: ['6 meters (20 feet)', '60-90 cm (arm\'s length/computer distance)', '30-40 cm (reading distance)', '3 meters (10 feet)'],
    correctIndex: 1,
    explanation: 'The intermediate zone provides clear vision at approximately 60-90 cm, ideal for computer screens and dashboards.',
  },
  {
    id: 'lens-33',
    category: 'lenses',
    question: 'A plus (convex) lens is:',
    choices: ['Thinner in the center, thicker at edges', 'Thicker in the center, thinner at edges', 'Flat on both surfaces', 'Used only for myopia'],
    correctIndex: 1,
    explanation: 'Plus (convex) lenses are thicker in the center and thinner at the edges. They converge light and correct hyperopia.',
  },
  {
    id: 'lens-34',
    category: 'lenses',
    question: 'Crizal, Sapphire, and Unity are examples of:',
    choices: ['Frame brands', 'Anti-reflective coating brands', 'Contact lens solutions', 'Lens materials'],
    correctIndex: 1,
    explanation: 'These are brand names for premium anti-reflective (AR) coatings offered by various lens manufacturers.',
  },
  {
    id: 'lens-35',
    category: 'lenses',
    question: 'Which lens form has the same curve on both surfaces?',
    choices: ['Meniscus', 'Plano-convex', 'Equi-convex (or equi-concave)', 'Lenticular'],
    correctIndex: 2,
    explanation: 'An equi-convex (or equi-concave) lens has equal curvature on both surfaces.',
  },
  {
    id: 'lens-36',
    category: 'lenses',
    question: 'A meniscus lens has:',
    choices: ['Two convex surfaces', 'Two concave surfaces', 'One convex and one concave surface', 'One flat and one convex surface'],
    correctIndex: 2,
    explanation: 'A meniscus lens has one convex and one concave surface. Most modern ophthalmic lenses use meniscus form.',
  },
  {
    id: 'lens-37',
    category: 'lenses',
    question: 'Short-corridor progressive lenses are designed for:',
    choices: ['Large frames only', 'Small or shallow frames with limited vertical height', 'Distance-only prescriptions', 'Children under age 10'],
    correctIndex: 1,
    explanation: 'Short-corridor progressives are designed for smaller frames, fitting the progressive power into a reduced vertical space.',
  },
  {
    id: 'lens-38',
    category: 'lenses',
    question: 'UV radiation is classified into UVA, UVB, and UVC. Which is most harmful to the eye in daily life?',
    choices: ['UVC', 'UVA and UVB together', 'Only UVA', 'Only infrared'],
    correctIndex: 1,
    explanation: 'UVA (315-380nm) and UVB (280-315nm) reach the earth\'s surface and can damage the cornea, lens, and retina. UVC is absorbed by the ozone layer.',
  },
  {
    id: 'lens-39',
    category: 'lenses',
    question: 'Digital free-form lenses are manufactured using:',
    choices: ['Traditional grinding tools only', 'Computer-controlled point-by-point surfacing', 'Injection molding', 'Manual polishing only'],
    correctIndex: 1,
    explanation: 'Free-form (digital) lenses are surfaced point-by-point using CNC (computer numerical control) technology for optimized optics.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: frames  (Frames & Materials)
  // ═══════════════════════════════════════════════════
  {
    id: 'frame-1',
    category: 'frames',
    question: 'In the boxing system, the "A" measurement refers to:',
    choices: ['Bridge size', 'Temple length', 'Horizontal lens width', 'Vertical lens height'],
    correctIndex: 2,
    explanation: 'The "A" measurement (eye size) is the horizontal width of the lens opening at its widest point.',
  },
  {
    id: 'frame-2',
    category: 'frames',
    question: 'Frame PD (Geometric Center Distance) is calculated as:',
    choices: ['A + B', 'A + DBL', 'ED + DBL', 'B + DBL'],
    correctIndex: 1,
    explanation: 'Frame PD = A (eye size) + DBL (bridge size).',
  },
  {
    id: 'frame-3',
    category: 'frames',
    question: 'Which frame material is most commonly used for plastic frames?',
    choices: ['Optyl', 'Propionate', 'Zyl (cellulose acetate)', 'Carbon fiber'],
    correctIndex: 2,
    explanation: 'Zyl (cellulose acetate) is the most common plastic frame material.',
  },
  {
    id: 'frame-4',
    category: 'frames',
    question: 'Pantoscopic tilt refers to:',
    choices: [
      'The lens tilting so the top is closer to the face',
      'The lens tilting so the bottom is closer to the face',
      'The horizontal curvature of the frame front',
      'The width of the bridge',
    ],
    correctIndex: 1,
    explanation: 'Pantoscopic tilt means the bottom of the lens is closer to the face than the top. Standard is 8-12 degrees.',
  },
  {
    id: 'frame-5',
    category: 'frames',
    question: 'Titanium frames are valued because they are:',
    choices: [
      'The cheapest metal option',
      'Lightweight, hypoallergenic, and corrosion-resistant',
      'The most flexible frame material',
      'Easiest to adjust without heat',
    ],
    correctIndex: 1,
    explanation: 'Titanium is lightweight, hypoallergenic, corrosion-resistant, and strong.',
  },
  {
    id: 'frame-6',
    category: 'frames',
    question: 'A semi-rimless (nylon cord) frame:',
    choices: [
      'Has no frame around the lens',
      'Has a full rim around the entire lens',
      'Has a rim on top with a nylon cord holding the bottom',
      'Requires lenses to be drilled',
    ],
    correctIndex: 2,
    explanation: 'Semi-rimless frames have a rim on top and a nylon cord in a groove on the lower edge of the lens.',
  },
  {
    id: 'frame-7',
    category: 'frames',
    question: 'Before adjusting a plastic frame, you should:',
    choices: [
      'Apply heat to make it pliable',
      'Soak it in cold water',
      'Never adjust plastic frames',
      'Apply direct heat to the lens',
    ],
    correctIndex: 0,
    explanation: 'Plastic frames should be heated before adjusting to avoid breakage. Never apply heat directly to lenses.',
  },
  {
    id: 'frame-8',
    category: 'frames',
    question: 'The "B" measurement in the boxing system refers to:',
    choices: ['Bridge size', 'Vertical lens height', 'Temple length', 'Effective diameter'],
    correctIndex: 1,
    explanation: 'The "B" measurement is the vertical height of the lens opening at its tallest point.',
  },
  {
    id: 'frame-9',
    category: 'frames',
    question: 'Which material is recommended for rimless (drill-mount) frames?',
    choices: ['CR-39', 'Crown glass', 'Polycarbonate or Trivex', 'Hi-index 1.74'],
    correctIndex: 2,
    explanation: 'Polycarbonate or Trivex are recommended for rimless frames due to their superior impact resistance.',
  },
  {
    id: 'frame-10',
    category: 'frames',
    question: 'Monel frames may cause allergic reactions because they contain:',
    choices: ['Titanium', 'Beryllium', 'Nickel', 'Aluminum'],
    correctIndex: 2,
    explanation: 'Monel contains nickel, which is a common allergen.',
  },
  {
    id: 'frame-11',
    category: 'frames',
    question: 'The DBL (distance between lenses) measurement refers to:',
    choices: ['Temple length', 'Bridge size (narrowest distance between lenses)', 'Effective diameter', 'Horizontal lens width'],
    correctIndex: 1,
    explanation: 'DBL (distance between lenses) is the bridge size, measured at the narrowest point between the two lenses.',
  },
  {
    id: 'frame-12',
    category: 'frames',
    question: 'The effective diameter (ED) of a lens is:',
    choices: ['The same as the A measurement', 'The longest diagonal measurement of the lens', 'The bridge size plus the A measurement', 'The vertical height of the lens'],
    correctIndex: 1,
    explanation: 'The effective diameter is the longest diagonal measurement across the lens from the geometric center, used for minimum blank size calculations.',
  },
  {
    id: 'frame-13',
    category: 'frames',
    question: 'A rimless (drill-mount) frame:',
    choices: ['Has a full frame around both lenses', 'Has no frame around the lenses; lenses are attached by screws through drilled holes', 'Has a nylon cord on the bottom', 'Cannot use progressive lenses'],
    correctIndex: 1,
    explanation: 'Rimless frames have no frame surrounding the lenses. Lenses are attached to the bridge and temples by screws through drilled holes.',
  },
  {
    id: 'frame-14',
    category: 'frames',
    question: 'Face form (frame wrap) refers to:',
    choices: ['The vertical tilt of the lenses', 'The horizontal curvature of the frame front as it wraps around the face', 'The temple length', 'The nose pad angle'],
    correctIndex: 1,
    explanation: 'Face form (wrap angle) is the horizontal curvature of the frame front. Typical face form is 5-8 degrees.',
  },
  {
    id: 'frame-15',
    category: 'frames',
    question: 'Memory metal (Flexon/beta-titanium) frames are valued because they:',
    choices: ['Are the cheapest option', 'Return to their original shape after being bent', 'Cannot be adjusted', 'Are the heaviest metal option'],
    correctIndex: 1,
    explanation: 'Memory metal frames (Flexon, beta-titanium) return to their original shape after being bent or deformed, providing excellent durability.',
  },
  {
    id: 'frame-16',
    category: 'frames',
    question: 'The temple of a frame:',
    choices: ['Holds the lenses in place', 'Extends from the endpiece to behind the ear', 'Connects the two eyewires at the nose', 'Is the part that holds nose pads'],
    correctIndex: 1,
    explanation: 'Temples extend from the endpieces (hinges) back over or behind the ears to keep the frame in position.',
  },
  {
    id: 'frame-17',
    category: 'frames',
    question: 'Standard temple lengths are most commonly:',
    choices: ['100-110mm', '120-130mm', '135-145mm', '160-170mm'],
    correctIndex: 2,
    explanation: 'Standard temple lengths are most commonly 135mm, 140mm, and 145mm.',
  },
  {
    id: 'frame-18',
    category: 'frames',
    question: 'Retroscopic tilt is:',
    choices: ['The same as pantoscopic tilt', 'The opposite of pantoscopic tilt — the top of the lens tilts away from the face', 'Horizontal curvature of the frame', 'The angle of the nose pads'],
    correctIndex: 1,
    explanation: 'Retroscopic tilt is the opposite of pantoscopic: the top of the lens tilts away from the face (bottom tilts toward). Generally undesirable.',
  },
  {
    id: 'frame-19',
    category: 'frames',
    question: 'Stainless steel frames are known for:',
    choices: ['Being the lightest metal', 'Corrosion resistance and hypoallergenic properties', 'Highest flexibility of all metals', 'Being identical to monel'],
    correctIndex: 1,
    explanation: 'Stainless steel is corrosion-resistant, hypoallergenic, lightweight, and holds adjustments well.',
  },
  {
    id: 'frame-20',
    category: 'frames',
    question: 'Adjustable nose pads are most commonly found on:',
    choices: ['Plastic (zyl) frames', 'Metal frames', 'Wooden frames', 'Nylon frames'],
    correctIndex: 1,
    explanation: 'Metal frames typically have adjustable silicone or PVC nose pads on metal pad arms, allowing precise fitting.',
  },
  {
    id: 'frame-21',
    category: 'frames',
    question: 'The endpiece of a frame:',
    choices: ['Is the tip of the temple', 'Connects the temple to the front of the frame via the hinge', 'Is the bridge', 'Is the nose pad'],
    correctIndex: 1,
    explanation: 'The endpiece is the part of the frame front where the hinge is attached, connecting the temple to the frame front.',
  },
  {
    id: 'frame-22',
    category: 'frames',
    question: 'A skull temple:',
    choices: ['Goes straight back without curving', 'Curves down behind the ear', 'Has a cable that wraps around the ear', 'Is only used for children'],
    correctIndex: 1,
    explanation: 'A skull temple curves downward behind the ear. It is the most common temple style for dress eyewear.',
  },
  {
    id: 'frame-23',
    category: 'frames',
    question: 'A cable temple:',
    choices: ['Is straight with no curve', 'Wraps around and follows the contour of the ear', 'Is shorter than a skull temple', 'Cannot be adjusted'],
    correctIndex: 1,
    explanation: 'Cable temples wrap around the ear following its contour, providing a more secure fit. Common for children and active wear.',
  },
  {
    id: 'frame-24',
    category: 'frames',
    question: 'Optyl frames are notable because they:',
    choices: ['Are the heaviest plastic', 'Are a hypoallergenic, memory plastic that is very lightweight', 'Cannot be adjusted', 'Are identical to zyl'],
    correctIndex: 1,
    explanation: 'Optyl is a hypoallergenic epoxy resin that is approximately 20% lighter than zyl and has memory (returns to shape when heated).',
  },
  {
    id: 'frame-25',
    category: 'frames',
    question: 'When adjusting metal nose pads for a frame that sits too low:',
    choices: ['Widen the pads apart', 'Narrow the pads together (closer)', 'Shorten the temples', 'Increase pantoscopic tilt'],
    correctIndex: 1,
    explanation: 'To raise a frame that sits too low, narrow the nose pads closer together (increase the pad angle) so they grip higher on the nose.',
  },
  {
    id: 'frame-26',
    category: 'frames',
    question: 'The datum system of frame measurement:',
    choices: ['Is the same as the boxing system', 'Uses the midline of the lens as the reference', 'Has been replaced and is no longer used', 'Measures from the optical center'],
    correctIndex: 1,
    explanation: 'The datum (continental) system measures the lens width along a horizontal midline, while the boxing system uses a rectangle around the lens shape.',
  },
  {
    id: 'frame-27',
    category: 'frames',
    question: 'Spring hinges on frames provide:',
    choices: ['A fixed, rigid connection', 'Temples that flex outward beyond 90 degrees for comfort and durability', 'Adjustable nose pads', 'A way to fold temples inward'],
    correctIndex: 1,
    explanation: 'Spring hinges allow temples to flex outward past their normal position, providing a more comfortable fit and increased durability.',
  },
  {
    id: 'frame-28',
    category: 'frames',
    question: 'Nylon (polyamide/grilamid) frame material is known for:',
    choices: ['Being the most rigid plastic', 'Lightweight, flexible, and heat-resistant properties ideal for sports eyewear', 'Having the best color options', 'Being the same as cellulose acetate'],
    correctIndex: 1,
    explanation: 'Nylon/grilamid is lightweight, extremely flexible, heat-resistant, and impact-resistant, making it ideal for sport and safety frames.',
  },
  {
    id: 'frame-29',
    category: 'frames',
    question: 'The vertex distance is affected by frame adjustment when:',
    choices: ['Changing the temple color', 'Increasing or decreasing the pantoscopic tilt', 'Replacing the nose pads with the same size', 'Tightening the hinge screws'],
    correctIndex: 1,
    explanation: 'Changing pantoscopic tilt alters how far the lenses sit from the eyes, affecting vertex distance.',
  },
  {
    id: 'frame-30',
    category: 'frames',
    question: 'Beryllium as a frame material is valued for:',
    choices: ['Being the cheapest metal', 'Corrosion resistance, flexibility, and lightweight properties', 'Its magnetic properties', 'Being hypoallergenic for all wearers'],
    correctIndex: 1,
    explanation: 'Beryllium is lightweight, flexible, corrosion-resistant, and less expensive than titanium. However, some wearers may have sensitivity to it.',
  },
  {
    id: 'frame-31',
    category: 'frames',
    question: 'An aluminum frame is characterized by:',
    choices: ['Being heavy and rigid', 'Lightweight, corrosion-resistant, and easily colored by anodizing', 'Being flexible like memory metal', 'Being hypoallergenic like titanium'],
    correctIndex: 1,
    explanation: 'Aluminum frames are lightweight, corrosion-resistant, and can be anodized to produce vibrant colors.',
  },
  {
    id: 'frame-32',
    category: 'frames',
    question: 'A properly fitted frame should have the temples:',
    choices: ['Touch only at the ear, with space above', 'Rest evenly along the side of the head with gentle pressure', 'Squeeze tightly against the head', 'Not touch the head at all'],
    correctIndex: 1,
    explanation: 'Temples should rest evenly along the side of the head with gentle, even pressure — not too tight (headaches) or too loose (slipping).',
  },
  {
    id: 'frame-33',
    category: 'frames',
    question: 'The bridge of a frame:',
    choices: ['Connects the two eyewires across the nose', 'Holds the lenses to the temples', 'Is the same as the endpiece', 'Extends behind the ear'],
    correctIndex: 0,
    explanation: 'The bridge connects the two eyewires (lens rims) across the nose and rests on the nose or nose pads.',
  },
  {
    id: 'frame-34',
    category: 'frames',
    question: 'When a frame is too wide for a patient\'s face:',
    choices: ['The temples will be too short', 'The frame will slide down the nose', 'The optical centers may be too far from the patient\'s pupils, causing unwanted prism', 'The vertex distance will decrease'],
    correctIndex: 2,
    explanation: 'If the frame PD is much larger than the patient PD, the optical centers will be far from the patient\'s pupils, causing unwanted prismatic effect.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: rx  (Prescription Interpretation)
  // ═══════════════════════════════════════════════════
  {
    id: 'rx-1',
    category: 'rx',
    question: 'OD refers to:',
    choices: ['Left eye', 'Both eyes', 'Right eye', 'Near vision'],
    correctIndex: 2,
    explanation: 'OD (Oculus Dexter) = Right eye. OS = Left eye. OU = Both eyes.',
  },
  {
    id: 'rx-2',
    category: 'rx',
    question: 'In the prescription -2.50 -1.00 x180, the "-1.00" represents:',
    choices: ['Sphere power', 'Cylinder power', 'Add power', 'Prism'],
    correctIndex: 1,
    explanation: 'The second number is the cylinder power, which corrects astigmatism.',
  },
  {
    id: 'rx-3',
    category: 'rx',
    question: 'The axis in a prescription indicates:',
    choices: [
      'The amount of astigmatic correction',
      'The orientation (meridian) where no cylinder power exists',
      'The add power for reading',
      'The prism direction',
    ],
    correctIndex: 1,
    explanation: 'The axis (1-180) indicates the meridian where zero cylinder power is placed.',
  },
  {
    id: 'rx-4',
    category: 'rx',
    question: 'Add power in a prescription is used to correct:',
    choices: ['Myopia', 'Hyperopia', 'Astigmatism', 'Presbyopia'],
    correctIndex: 3,
    explanation: 'The add power provides additional plus power for near vision to compensate for presbyopia.',
  },
  {
    id: 'rx-5',
    category: 'rx',
    question: 'To transpose +2.00 -1.50 x090 to plus cylinder form, the result is:',
    choices: ['+0.50 +1.50 x180', '+3.50 +1.50 x180', '+0.50 -1.50 x180', '+2.00 +1.50 x090'],
    correctIndex: 0,
    explanation: 'Transposition: (1) +2.00+(-1.50)=+0.50 (2) Change cyl sign: +1.50 (3) Axis+90=180. Result: +0.50 +1.50 x180.',
  },
  {
    id: 'rx-6',
    category: 'rx',
    question: 'The spherical equivalent of -4.00 -2.00 x180 is:',
    choices: ['-3.00', '-5.00', '-6.00', '-4.00'],
    correctIndex: 1,
    explanation: 'Spherical equivalent = Sphere + (Cylinder / 2) = -4.00 + (-1.00) = -5.00.',
  },
  {
    id: 'rx-7',
    category: 'rx',
    question: 'A compound myopic astigmatic prescription has:',
    choices: ['Plus power in both meridians', 'Minus power in both meridians', 'Plus in one, minus in the other', 'Plano in one meridian'],
    correctIndex: 1,
    explanation: 'Compound myopic astigmatism means both principal meridians have minus power.',
  },
  {
    id: 'rx-8',
    category: 'rx',
    question: 'Slab-off (bicentric grinding) is applied to which lens?',
    choices: ['The most minus lens', 'The most plus (or least minus) lens', 'Both lenses equally', 'Only the right lens'],
    correctIndex: 0,
    explanation: 'Slab-off (bicentric grinding) is applied to the most minus (or least plus) lens to correct vertical imbalance at reading level. It creates base-up prism. Reverse slab-off is applied to the most plus lens.',
  },
  {
    id: 'rx-9',
    category: 'rx',
    question: 'Vertex distance compensation is necessary for prescriptions exceeding:',
    choices: ['\u00b11.00 D', '\u00b12.00 D', '\u00b14.00 D', '\u00b16.00 D'],
    correctIndex: 2,
    explanation: 'Vertex distance compensation is needed for prescriptions over \u00b14.00 D.',
  },
  {
    id: 'rx-10',
    category: 'rx',
    question: 'A prescription reads -3.00 -1.50 x045. What is the power in the 45-degree meridian?',
    choices: ['-3.00 D', '-4.50 D', '-1.50 D', '-2.25 D'],
    correctIndex: 0,
    explanation: 'The axis indicates where no cylinder power exists, so at 045 the power is the sphere alone: -3.00 D. The full cylinder is at 90 degrees away (135 degrees).',
  },
  {
    id: 'rx-11',
    category: 'rx',
    question: 'What type of astigmatism does the prescription +1.00 -2.50 x090 represent?',
    choices: ['Simple myopic astigmatism', 'Compound myopic astigmatism', 'Mixed astigmatism', 'Simple hyperopic astigmatism'],
    correctIndex: 2,
    explanation: 'The power in one meridian is +1.00 (hyperopic) and in the other is +1.00 + (-2.50) = -1.50 (myopic). Plus in one and minus in the other is mixed astigmatism.',
  },
  {
    id: 'rx-12',
    category: 'rx',
    question: 'The abbreviation "OU" on a prescription means:',
    choices: ['Right eye', 'Left eye', 'Both eyes', 'Near vision only'],
    correctIndex: 2,
    explanation: 'OU (Oculus Uterque) means both eyes. OD = right eye, OS = left eye.',
  },
  {
    id: 'rx-13',
    category: 'rx',
    question: 'When transposing -1.00 +2.00 x090 to minus cylinder, the result is:',
    choices: ['+1.00 -2.00 x180', '-1.00 -2.00 x180', '+1.00 +2.00 x180', '+3.00 -2.00 x180'],
    correctIndex: 0,
    explanation: 'Transposition: (1) -1.00 + (+2.00) = +1.00 sphere; (2) change cylinder sign: -2.00; (3) rotate axis 90 degrees: 180. Result: +1.00 -2.00 x180.',
  },
  {
    id: 'rx-14',
    category: 'rx',
    question: 'What does "DV" or "DVA" on a prescription indicate?',
    choices: ['Dual vision', 'Distance vision', 'Divergent vision', 'Digital visual acuity'],
    correctIndex: 1,
    explanation: 'DV (or DVA) stands for distance vision (distance visual acuity), the portion of the prescription for far viewing.',
  },
  {
    id: 'rx-15',
    category: 'rx',
    question: 'An "add" power of +2.50 means:',
    choices: ['The total power of the reading lens', 'Additional plus power for near vision added to the distance Rx', 'The cylinder power at near', 'Prism correction for near'],
    correctIndex: 1,
    explanation: 'The add power is additional plus power added to the distance prescription for near/reading correction, compensating for presbyopia.',
  },
  {
    id: 'rx-16',
    category: 'rx',
    question: 'The spherical equivalent of +2.00 -1.00 x180 is:',
    choices: ['+1.50 D', '+1.00 D', '+2.50 D', '+0.50 D'],
    correctIndex: 0,
    explanation: 'Spherical equivalent = Sphere + (Cylinder / 2) = +2.00 + (-0.50) = +1.50 D.',
  },
  {
    id: 'rx-17',
    category: 'rx',
    question: 'A patient with a -6.00 D spectacle Rx at 12mm vertex distance needs a contact lens Rx of approximately:',
    choices: ['-5.58 D', '-6.00 D', '-6.44 D', '-5.00 D'],
    correctIndex: 0,
    explanation: 'Using the vertex distance formula: Fc = Fs / (1 - d*Fs) = -6.00 / (1 - 0.012 * (-6.00)) = -6.00 / 1.072 = approximately -5.60 D. The contact lens power is less minus.',
  },
  {
    id: 'rx-18',
    category: 'rx',
    question: 'In power cross notation for -2.00 -1.00 x090, the power at 180 is:',
    choices: ['-2.00 D', '-3.00 D', '-1.00 D', '-0.50 D'],
    correctIndex: 1,
    explanation: 'In power cross notation, the power at the axis meridian (090) is the sphere: -2.00. The power 90 degrees away (180) is sphere + cylinder: -2.00 + (-1.00) = -3.00.',
  },
  {
    id: 'rx-19',
    category: 'rx',
    question: 'A "balanced" prescription means:',
    choices: ['Both lenses are the same power', 'A non-prescription lens is given to balance weight', 'Both eyes are corrected to approximately equal visual acuity', 'The frame is perfectly level'],
    correctIndex: 2,
    explanation: 'A balanced prescription aims to correct both eyes to approximately equal best visual acuity, promoting comfortable binocular vision.',
  },
  {
    id: 'rx-20',
    category: 'rx',
    question: 'Simple hyperopic astigmatism is defined as:',
    choices: ['Plus power in both meridians', 'Minus power in both meridians', 'Plano in one meridian and plus in the other', 'Plano in one meridian and minus in the other'],
    correctIndex: 2,
    explanation: 'Simple hyperopic astigmatism has one meridian that is emmetropic (plano) and the other is hyperopic (plus). Example: pl +1.00 x180.',
  },
  {
    id: 'rx-21',
    category: 'rx',
    question: 'In a prescription, the cylinder axis is measured in:',
    choices: ['Prism diopters', 'Degrees from 1 to 180', 'Diopters', 'Millimeters'],
    correctIndex: 1,
    explanation: 'The cylinder axis is measured in degrees on a scale from 1 to 180, following the TABO standard notation.',
  },
  {
    id: 'rx-22',
    category: 'rx',
    question: 'Anisometropia refers to:',
    choices: ['Equal refractive error in both eyes', 'A significant difference in refractive error between eyes', 'Astigmatism in both eyes', 'Absence of refractive error'],
    correctIndex: 1,
    explanation: 'Anisometropia is a condition in which the two eyes have significantly different refractive errors, which can cause problems with binocular vision.',
  },
  {
    id: 'rx-23',
    category: 'rx',
    question: 'The tentative add power for a 50-year-old patient is typically:',
    choices: ['+1.00 D', '+1.50 D', '+2.00 D', '+2.50 D'],
    correctIndex: 2,
    explanation: 'The typical starting add power by age: 40-45 is +1.00, 45-50 is +1.50, 50-55 is +2.00, 55-60 is +2.25, 60+ is +2.50.',
  },
  {
    id: 'rx-24',
    category: 'rx',
    question: 'What does "NV" on a prescription stand for?',
    choices: ['No vision', 'Near vision', 'Normal vertex', 'Nasal vergence'],
    correctIndex: 1,
    explanation: 'NV stands for near vision, referring to the portion of the prescription for close-up viewing.',
  },
  {
    id: 'rx-25',
    category: 'rx',
    question: 'Antimetropia is a type of anisometropia where:',
    choices: ['Both eyes are myopic by different amounts', 'One eye is myopic and the other is hyperopic', 'Both eyes are hyperopic by different amounts', 'Both eyes have equal astigmatism'],
    correctIndex: 1,
    explanation: 'Antimetropia is a specific form of anisometropia where one eye is myopic and the other is hyperopic.',
  },
  {
    id: 'rx-26',
    category: 'rx',
    question: 'When reading a prescription, x180 means the axis of the cylinder is:',
    choices: ['Vertical', 'Horizontal', 'Oblique at 45 degrees', 'Oblique at 135 degrees'],
    correctIndex: 1,
    explanation: 'Axis 180 is horizontal. Axis 090 is vertical. Axes 045 and 135 are oblique.',
  },
  {
    id: 'rx-27',
    category: 'rx',
    question: 'A prescription for OD: +3.00 DS means the right eye has:',
    choices: ['Sphere and cylinder power', 'Sphere power only, no astigmatism', 'Distance and near power', 'Prism and sphere power'],
    correctIndex: 1,
    explanation: 'DS (Diopters Sphere) indicates sphere power only with no cylinder component. The right eye has +3.00 D of sphere with no astigmatism.',
  },
  {
    id: 'rx-28',
    category: 'rx',
    question: 'Residual astigmatism is the astigmatism that:',
    choices: ['Is fully corrected by spectacle lenses', 'Remains when corneal astigmatism is corrected by a contact lens', 'Is caused by the frame', 'Only appears at near distance'],
    correctIndex: 1,
    explanation: 'Residual astigmatism is the internal (lenticular) astigmatism that remains after corneal astigmatism is neutralized by a contact lens.',
  },
  {
    id: 'rx-29',
    category: 'rx',
    question: 'What is the purpose of a "BVD" notation on a prescription?',
    choices: ['Back vertex distance for vertex compensation', 'Binocular vision disorder notation', 'Base value for disparity', 'Bifocal vertical decentration'],
    correctIndex: 0,
    explanation: 'BVD (Back Vertex Distance) is the distance from the back of the spectacle lens to the front of the cornea, critical for vertex compensation in high prescriptions.',
  },
  {
    id: 'rx-30',
    category: 'rx',
    question: 'A plano lens has a power of:',
    choices: ['+1.00 D', '-1.00 D', '0.00 D (no refractive power)', '+0.50 D'],
    correctIndex: 2,
    explanation: 'A plano (Pl) lens has zero refractive power. It is used for non-prescription protective eyewear or to balance when one eye needs no correction.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: prism
  // ═══════════════════════════════════════════════════
  {
    id: 'prism-1',
    category: 'prism',
    question: 'Light passing through a prism is deviated toward the:',
    choices: ['Apex', 'Base', 'Center', 'Edge'],
    correctIndex: 1,
    explanation: 'Light is always deviated toward the base of the prism.',
  },
  {
    id: 'prism-2',
    category: 'prism',
    question: 'One prism diopter deviates light:',
    choices: ['1 cm at 10 meters', '1 mm at 1 meter', '1 cm at 1 meter', '10 cm at 1 meter'],
    correctIndex: 2,
    explanation: 'One prism diopter deviates light 1 centimeter at a distance of 1 meter.',
  },
  {
    id: 'prism-3',
    category: 'prism',
    question: 'Base In (BI) prism is used to correct:',
    choices: ['Eso deviations (eye turns inward)', 'Exo deviations (eye turns outward)', 'Hyper deviations', 'Hypo deviations'],
    correctIndex: 1,
    explanation: 'BI prism corrects exo deviations where the eye turns outward.',
  },
  {
    id: 'prism-4',
    category: 'prism',
    question: 'When splitting 6 prism diopters Base Out horizontally, the result is:',
    choices: ['6 BO OD only', '3 BI OD, 3 BI OS', '3 BO OD, 3 BO OS', '6 BO OS only'],
    correctIndex: 2,
    explanation: 'Horizontal prism is split evenly with the same base direction: 3 BO each eye.',
  },
  {
    id: 'prism-5',
    category: 'prism',
    question: 'For a plus lens, decentering the optical center inward creates:',
    choices: ['Base Out prism', 'Base In prism', 'Base Up prism', 'No prismatic effect'],
    correctIndex: 1,
    explanation: 'For plus lenses, prism base is in the SAME direction as decentration. Inward = Base In.',
  },
  {
    id: 'prism-6',
    category: 'prism',
    question: 'Fresnel press-on prism is used primarily for:',
    choices: ['Permanent prism correction', 'Cosmetic purposes', 'Temporary or diagnostic prism', 'Impact resistance'],
    correctIndex: 2,
    explanation: 'Fresnel prism is a thin press-on prism used for temporary or diagnostic purposes.',
  },
  {
    id: 'prism-7',
    category: 'prism',
    question: 'When splitting vertical prism of 4 BU OD, the correct split is:',
    choices: ['2 BU OD, 2 BU OS', '4 BU OD, 0 OS', '2 BU OD, 2 BD OS', '2 BD OD, 2 BU OS'],
    correctIndex: 2,
    explanation: 'Vertical prism is split with OPPOSITE base direction in the other eye: 2 BU OD, 2 BD OS.',
  },
  {
    id: 'prism-8',
    category: 'prism',
    question: 'Prentice\'s Rule states that prism (in prism diopters) equals:',
    choices: ['Power x distance (cm from OC)', 'Power / distance', 'Distance / power', 'Power x distance (mm)'],
    correctIndex: 0,
    explanation: 'Prentice\'s Rule: P = F x d, where P is prism in prism diopters, F is lens power in diopters, and d is decentration in centimeters from the optical center.',
  },
  {
    id: 'prism-9',
    category: 'prism',
    question: 'A patient looks 5mm below the optical center of a -4.00 D lens. How much prism is induced?',
    choices: ['0.5 prism diopters', '1.0 prism diopters', '2.0 prism diopters', '4.0 prism diopters'],
    correctIndex: 2,
    explanation: 'Using Prentice\'s Rule: P = F x d = 4.00 x 0.5 cm = 2.0 prism diopters.',
  },
  {
    id: 'prism-10',
    category: 'prism',
    question: 'When looking through a minus lens below the optical center, the induced prism base direction is:',
    choices: ['Base up', 'Base down', 'Base in', 'Base out'],
    correctIndex: 1,
    explanation: 'In a minus lens, the image shifts toward the apex (thinner edge). Looking below OC in a minus lens induces base-down prism (image appears higher).',
  },
  {
    id: 'prism-11',
    category: 'prism',
    question: 'When looking through a plus lens below the optical center, the induced prism base direction is:',
    choices: ['Base up', 'Base down', 'Base in', 'Base out'],
    correctIndex: 0,
    explanation: 'In a plus lens, the image shifts toward the base (thicker edge). Looking below OC in a plus lens induces base-up prism.',
  },
  {
    id: 'prism-12',
    category: 'prism',
    question: 'Horizontal prism is typically split between the two eyes by:',
    choices: ['Placing all prism in the dominant eye', 'Using the SAME base direction in both eyes', 'Splitting equally with the SAME base direction (BI or BO) in both eyes', 'Splitting equally with OPPOSITE base directions'],
    correctIndex: 2,
    explanation: 'Horizontal prism is split with the SAME base direction in both eyes (e.g., 2 BI OD and 2 BI OS for 4 BI total). This differs from vertical prism which uses opposite directions.',
  },
  {
    id: 'prism-13',
    category: 'prism',
    question: 'Prism base-in (BI) is prescribed to treat:',
    choices: ['Esophoria/esotropia', 'Exophoria/exotropia', 'Hyperphoria', 'Hypophoria'],
    correctIndex: 1,
    explanation: 'Base-in prism moves the image nasally, helping patients with exophoria/exotropia (outward eye deviation) by reducing the demand on convergence.',
  },
  {
    id: 'prism-14',
    category: 'prism',
    question: 'Prism base-out (BO) is prescribed to treat:',
    choices: ['Exophoria', 'Esophoria/esotropia', 'Hypertropia', 'Presbyopia'],
    correctIndex: 1,
    explanation: 'Base-out prism moves the image temporally, helping patients with esophoria/esotropia (inward eye deviation) by reducing convergence demand.',
  },
  {
    id: 'prism-15',
    category: 'prism',
    question: 'The resultant prism of 3 prism diopters BO and 4 prism diopters BU in the same eye is approximately:',
    choices: ['7 prism diopters', '1 prism diopter', '5 prism diopters', '12 prism diopters'],
    correctIndex: 2,
    explanation: 'Resultant prism is calculated using the Pythagorean theorem: sqrt(3^2 + 4^2) = sqrt(9+16) = sqrt(25) = 5 prism diopters.',
  },
  {
    id: 'prism-16',
    category: 'prism',
    question: 'Prism thickness is greatest at the:',
    choices: ['Apex', 'Base', 'Optical center', 'Edge closest to the nose'],
    correctIndex: 1,
    explanation: 'A prism is thickest at the base and thinnest at the apex. This is fundamental to how prism bends light toward the base.',
  },
  {
    id: 'prism-17',
    category: 'prism',
    question: 'Compounding prism means combining:',
    choices: ['Two prisms with bases in opposite directions', 'Two prisms with bases in the same direction', 'A prism with a spherical lens', 'A prism with a cylindrical lens'],
    correctIndex: 1,
    explanation: 'Compounding prism combines two prisms with bases in the same direction, increasing the total prismatic effect.',
  },
  {
    id: 'prism-18',
    category: 'prism',
    question: 'Resolving prism means:',
    choices: ['Combining prisms in the same direction', 'Finding a single equivalent prism from two oblique prisms', 'Removing prism from a lens', 'Splitting prism between two eyes'],
    correctIndex: 1,
    explanation: 'Resolving prism means finding a single equivalent resultant prism from two prisms at different orientations, using vector addition.',
  },
  {
    id: 'prism-19',
    category: 'prism',
    question: 'Yoked (conjugate) prisms move both eyes in:',
    choices: ['Opposite directions', 'The same direction', 'Only horizontally', 'Only vertically'],
    correctIndex: 1,
    explanation: 'Yoked (conjugate) prisms shift the visual field in the same direction for both eyes, moving both eyes together (e.g., both right, or both up).',
  },
  {
    id: 'prism-20',
    category: 'prism',
    question: 'A patient with a right hyperphoria would benefit from:',
    choices: ['Base-up prism OD', 'Base-down prism OD (or base-up OS)', 'Base-in prism OD', 'Base-out prism OD'],
    correctIndex: 1,
    explanation: 'Right hyperphoria means the right eye drifts upward. Base-down prism OD (or equivalently base-up prism OS) moves the image up, relieving the upward deviation.',
  },
  {
    id: 'prism-21',
    category: 'prism',
    question: 'The prismatic effect at the reading level of a bifocal depends primarily on:',
    choices: ['Frame color', 'Distance Rx power and seg drop', 'Add power only', 'Lens material only'],
    correctIndex: 1,
    explanation: 'The prismatic effect at the reading level of a bifocal depends on the distance prescription power and the distance from the OC to the reading level (seg drop), per Prentice\'s Rule.',
  },
  {
    id: 'prism-22',
    category: 'prism',
    question: 'Prism by decentration means:',
    choices: ['Adding a separate prism to the lens', 'Moving the optical center of the lens to induce prism', 'Using a Fresnel press-on prism', 'Tilting the lens in the frame'],
    correctIndex: 1,
    explanation: 'Prism by decentration moves the optical center of the lens away from the patient\'s visual axis, inducing prismatic effect per Prentice\'s Rule without grinding prism.',
  },
  {
    id: 'prism-23',
    category: 'prism',
    question: 'The unit of measurement for prism power is:',
    choices: ['Diopter', 'Prism diopter (delta)', 'Millimeter', 'Degree'],
    correctIndex: 1,
    explanation: 'Prism power is measured in prism diopters (represented by the Greek letter delta). One prism diopter deviates light 1 cm at 1 meter.',
  },
  {
    id: 'prism-24',
    category: 'prism',
    question: 'In a plus lens, the base of the effective prism at any point is oriented toward:',
    choices: ['The optical center', 'Away from the optical center', 'The apex of the lens', 'The temporal side always'],
    correctIndex: 0,
    explanation: 'In a plus lens (thickest at center), the base of the effective prism at any point is oriented toward the optical center (thickest part).',
  },
  {
    id: 'prism-25',
    category: 'prism',
    question: 'In a minus lens, the base of the effective prism at any point is oriented:',
    choices: ['Toward the optical center', 'Away from the optical center (toward the edge)', 'Always base up', 'Always base down'],
    correctIndex: 1,
    explanation: 'In a minus lens (thickest at edge), the base of the effective prism at any point is oriented away from the optical center toward the thicker edge.',
  },
  {
    id: 'prism-26',
    category: 'prism',
    question: 'Vertical imbalance at the reading level is most problematic with which type of Rx?',
    choices: ['Equal Rx in both eyes', 'Anisometropia (unequal Rx)', 'Low myopia in both eyes', 'Emmetropia'],
    correctIndex: 1,
    explanation: 'Anisometropia causes unequal prismatic effects at the reading level, creating vertical imbalance that can cause diplopia or discomfort.',
  },
  {
    id: 'prism-27',
    category: 'prism',
    question: 'To calculate vertical imbalance at the reading level, you apply Prentice\'s Rule using:',
    choices: ['The add power of each eye', 'The distance Rx power and the drop from each OC to the reading level', 'The seg height only', 'The PD measurement'],
    correctIndex: 1,
    explanation: 'Vertical imbalance is calculated by applying Prentice\'s Rule (P = F x d) to each eye using the distance Rx and the distance from each optical center to the reading level.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: measurements
  // ═══════════════════════════════════════════════════
  {
    id: 'meas-1',
    category: 'measurements',
    question: 'The near PD is typically how much less than the distance PD?',
    choices: ['1mm', '2mm', '3mm', '5mm'],
    correctIndex: 2,
    explanation: 'Near PD is approximately 3mm less than distance PD due to convergence.',
  },
  {
    id: 'meas-2',
    category: 'measurements',
    question: 'Where is the fitting cross of a progressive lens positioned?',
    choices: ['At the lower lid margin', 'At the center of the pupil', 'At the top of the frame', '2mm below pupil center'],
    correctIndex: 1,
    explanation: 'The fitting cross of a progressive lens is positioned at the center of the pupil.',
  },
  {
    id: 'meas-3',
    category: 'measurements',
    question: 'Standard vertex distance for spectacle lenses is approximately:',
    choices: ['5-8mm', '8-10mm', '12-14mm', '18-20mm'],
    correctIndex: 2,
    explanation: 'Standard vertex distance is 12-14mm.',
  },
  {
    id: 'meas-4',
    category: 'measurements',
    question: 'For every 2 degrees of pantoscopic tilt, you should:',
    choices: ['Decrease seg height by 1mm', 'Add 1mm to seg height', 'Decrease PD by 1mm', 'Increase vertex distance by 2mm'],
    correctIndex: 1,
    explanation: 'For every 2 degrees of pantoscopic tilt, add 1mm to the seg height of progressive lenses.',
  },
  {
    id: 'meas-5',
    category: 'measurements',
    question: 'Monocular PDs are preferred over binocular PDs because:',
    choices: ['They are easier to measure', 'They account for facial asymmetry', 'They are only needed for bifocals', 'They are always equal on both sides'],
    correctIndex: 1,
    explanation: 'Monocular PDs are more accurate because faces are rarely perfectly symmetrical.',
  },
  {
    id: 'meas-6',
    category: 'measurements',
    question: 'A bifocal segment is typically placed at:',
    choices: ['The upper pupil margin', 'The center of the pupil', 'The lower lid margin', 'The bottom of the frame'],
    correctIndex: 2,
    explanation: 'Standard bifocal seg placement is at the lower lid margin.',
  },
  {
    id: 'meas-7',
    category: 'measurements',
    question: 'The most common flat-top bifocal segment width is:',
    choices: ['22mm', '25mm', '28mm', '35mm'],
    correctIndex: 2,
    explanation: 'The FT-28 (flat-top 28mm) is the most commonly prescribed bifocal segment.',
  },
  {
    id: 'meas-8',
    category: 'measurements',
    question: 'Incorrect PD in high-powered lenses primarily causes:',
    choices: ['Lens discoloration', 'Unwanted prismatic effect', 'Change in add power', 'Coating failure'],
    correctIndex: 1,
    explanation: 'Misaligned optical centers cause unwanted prismatic effect per Prentice\'s Rule.',
  },
  {
    id: 'meas-9',
    category: 'measurements',
    question: 'The "A" measurement in the boxing system represents:',
    choices: ['The bridge size', 'The horizontal width of the lens opening', 'The vertical depth of the lens opening', 'The temple length'],
    correctIndex: 1,
    explanation: 'The "A" (or eye size) is the horizontal width of the lens opening measured at the widest point in the boxing system.',
  },
  {
    id: 'meas-10',
    category: 'measurements',
    question: 'The "B" measurement in the boxing system represents:',
    choices: ['The bridge size', 'The horizontal width of the lens', 'The vertical depth of the lens opening', 'The diagonal of the lens'],
    correctIndex: 2,
    explanation: 'The "B" measurement is the vertical depth (height) of the lens opening in the boxing system.',
  },
  {
    id: 'meas-11',
    category: 'measurements',
    question: 'The "DBL" measurement refers to:',
    choices: ['Lens diameter', 'Distance between lenses (bridge size)', 'Distance bifocal length', 'Double base lens'],
    correctIndex: 1,
    explanation: 'DBL (Distance Between Lenses) is the bridge size -- the shortest horizontal distance between the two lenses.',
  },
  {
    id: 'meas-12',
    category: 'measurements',
    question: 'The effective diameter (ED) of a lens is:',
    choices: ['The same as the A measurement', 'The longest diagonal of the lens shape times 2', 'Twice the longest radius from the geometric center to the edge', 'The B measurement plus the bridge'],
    correctIndex: 2,
    explanation: 'The effective diameter (ED) is twice the longest radius measured from the geometric center of the lens opening to its farthest edge.',
  },
  {
    id: 'meas-13',
    category: 'measurements',
    question: 'Minimum blank size (MBS) is calculated as:',
    choices: ['A + DBL', 'ED + decentration + 2mm', 'A + B + DBL', 'ED x 2'],
    correctIndex: 1,
    explanation: 'Minimum blank size = ED + total decentration + 2mm (for edging). This ensures the lens blank is large enough to cut the finished lens.',
  },
  {
    id: 'meas-14',
    category: 'measurements',
    question: 'The frame PD is calculated as:',
    choices: ['A + DBL', 'A + B', 'DBL + temple length', 'A x 2'],
    correctIndex: 0,
    explanation: 'Frame PD (also called geometric center distance) = A measurement + DBL (bridge size). This is the distance between the geometric centers of the two lens openings.',
  },
  {
    id: 'meas-15',
    category: 'measurements',
    question: 'Total decentration per eye is calculated as:',
    choices: ['Patient PD - Frame PD', '(Frame PD - Patient PD) / 2', 'Frame PD / 2', 'A - DBL'],
    correctIndex: 1,
    explanation: 'Decentration per eye = (Frame PD - Patient PD) / 2. This tells you how far to move each optical center inward from the geometric center.',
  },
  {
    id: 'meas-16',
    category: 'measurements',
    question: 'Segment height for a flat-top bifocal is typically measured from:',
    choices: ['The top of the lens to the seg line', 'The bottom of the lens to the top of the seg', 'The pupil center to the bottom of the frame', 'The geometric center to the seg line'],
    correctIndex: 1,
    explanation: 'Seg height is measured from the lowest point of the lens (in the frame) vertically to the top of the bifocal segment line.',
  },
  {
    id: 'meas-17',
    category: 'measurements',
    question: 'Pantoscopic tilt is the angle at which the frame:',
    choices: ['Tilts inward toward the nose', 'Tilts outward at the top', 'Tilts forward at the bottom, angling lenses away from the face at top', 'Tilts backward at the bottom'],
    correctIndex: 2,
    explanation: 'Pantoscopic tilt is the forward tilt of the bottom of the frame, angling the top of the lenses away from the face. Typical is 8-12 degrees.',
  },
  {
    id: 'meas-18',
    category: 'measurements',
    question: 'For every degree of pantoscopic tilt, the optical center should be lowered by:',
    choices: ['0.5mm', '1.0mm', '0.5mm per degree for each 1mm of vertex distance', '2.0mm'],
    correctIndex: 0,
    explanation: 'The general rule is to lower the optical center by 0.5mm for each degree of pantoscopic tilt to keep the optical axis aligned with the visual axis.',
  },
  {
    id: 'meas-19',
    category: 'measurements',
    question: 'Face form (wrap angle) refers to:',
    choices: ['The vertical tilt of the frame', 'The curve of the frame front as viewed from above', 'The pupillary distance', 'The temple bend angle'],
    correctIndex: 1,
    explanation: 'Face form (or wrap angle) is the horizontal curvature of the frame front as viewed from above. Typical is about 5-8 degrees.',
  },
  {
    id: 'meas-20',
    category: 'measurements',
    question: 'Vertex distance is typically measured as:',
    choices: ['Center of the lens to center of the eye', 'Back surface of the lens to the front of the cornea', 'Front surface of the lens to the retina', 'Edge of the frame to the ear'],
    correctIndex: 1,
    explanation: 'Vertex distance is the distance from the back (ocular) surface of the spectacle lens to the front of the cornea, typically about 12-14mm.',
  },
  {
    id: 'meas-21',
    category: 'measurements',
    question: 'The standard temple length options are typically:',
    choices: ['120, 130, 140, 150mm', '135, 140, 145, 150mm', '100, 110, 120, 130mm', '140, 150, 160, 170mm'],
    correctIndex: 1,
    explanation: 'Standard temple lengths come in 135, 140, 145, and 150mm, though other sizes exist. The most common is 140mm.',
  },
  {
    id: 'meas-22',
    category: 'measurements',
    question: 'Monocular PD is measured from:',
    choices: ['The center of one pupil to the center of the other', 'The center of the bridge of the nose to the center of each pupil', 'The temporal edge of one eye to the nasal edge of the other', 'The inner canthus to the outer canthus'],
    correctIndex: 1,
    explanation: 'Monocular PD is measured from the center of the bridge of the nose to the center of each pupil. This gives a PD for each eye individually (right and left).',
  },
  {
    id: 'meas-23',
    category: 'measurements',
    question: 'The typical adult binocular PD range is:',
    choices: ['45-55mm', '54-74mm', '75-85mm', '80-90mm'],
    correctIndex: 1,
    explanation: 'The average adult binocular PD ranges from about 54 to 74mm, with the mean around 63mm for women and 65mm for men.',
  },
  {
    id: 'meas-24',
    category: 'measurements',
    question: 'An OC height (optical center height) is measured from:',
    choices: ['The top of the frame to the pupil', 'The bottom of the lens to the center of the pupil', 'The geometric center to the top of the frame', 'The bridge to the pupil center'],
    correctIndex: 1,
    explanation: 'OC height is measured from the lowest point of the lens opening (inside the frame) vertically up to the center of the patient\'s pupil.',
  },
  {
    id: 'meas-25',
    category: 'measurements',
    question: 'In progressive lenses, the corridor length is the distance between:',
    choices: ['The fitting cross and the near reference point', 'The top of the frame and the bottom', 'The distance OC and the seg line', 'The right and left optical centers'],
    correctIndex: 0,
    explanation: 'The corridor length in a progressive lens is the distance from the fitting cross (distance reference point) down to the near reference point, typically 14-18mm.',
  },
  {
    id: 'meas-26',
    category: 'measurements',
    question: 'The "datum" line in the boxing system is:',
    choices: ['The vertical center line of the lens', 'The horizontal line midway between the top and bottom of the box', 'The line connecting the two optical centers', 'The line at the base of the frame'],
    correctIndex: 1,
    explanation: 'The datum line is the horizontal line midway between the top and bottom of the box (rectangle) enclosing the lens shape in the boxing system.',
  },
  {
    id: 'meas-27',
    category: 'measurements',
    question: 'When ordering lenses, which measurement determines if a specific frame can be used with the patient\'s PD?',
    choices: ['Temple length', 'Minimum blank size', 'B measurement', 'Lens material'],
    correctIndex: 1,
    explanation: 'Minimum blank size calculation determines if an available lens blank is large enough for the frame after decentration. If the required MBS exceeds available blanks, the frame/lens combination will not work.',
  },
  {
    id: 'meas-28',
    category: 'measurements',
    question: 'The 4-point touch adjustment ensures the frame:',
    choices: ['Has equal lens sizes', 'Sits level by touching on both nosepads and both ear pieces simultaneously', 'Has the correct PD', 'Has the correct seg height'],
    correctIndex: 1,
    explanation: 'The 4-point touch means the frame, when placed on a flat surface, touches at all four points (both nosepads and both temple tips) simultaneously, indicating it is properly aligned and level.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: ansi  (ANSI Standards)
  // ═══════════════════════════════════════════════════
  {
    id: 'ansi-1',
    category: 'ansi',
    question: 'The ANSI standard for prescription dress eyewear is:',
    choices: ['Z87.1', 'Z80.1', 'Z80.3', 'Z136.1'],
    correctIndex: 1,
    explanation: 'ANSI Z80.1 is for prescription dress lenses. Z87.1 is for safety eyewear.',
  },
  {
    id: 'ansi-2',
    category: 'ansi',
    question: 'The sphere power tolerance for lenses 0.00 to \u00b16.50 D is:',
    choices: ['\u00b10.10 D', '\u00b10.13 D', '\u00b10.18 D', '\u00b10.25 D'],
    correctIndex: 1,
    explanation: 'Per ANSI Z80.1, sphere power tolerance for 0.00 to \u00b16.50 D is \u00b10.13 D.',
  },
  {
    id: 'ansi-3',
    category: 'ansi',
    question: 'The axis tolerance for a cylinder power of 0.75 to 1.50 D is:',
    choices: ['\u00b12\u00b0', '\u00b13\u00b0', '\u00b15\u00b0', '\u00b17\u00b0'],
    correctIndex: 1,
    explanation: 'For cylinder powers of 0.75 to 1.50 D, axis tolerance is \u00b13\u00b0.',
  },
  {
    id: 'ansi-4',
    category: 'ansi',
    question: 'The FDA drop-ball test uses a steel ball of what diameter?',
    choices: ['1/2 inch', '5/8 inch', '3/4 inch', '1 inch'],
    correctIndex: 1,
    explanation: 'The FDA drop-ball test uses a 5/8-inch steel ball dropped from 50 inches.',
  },
  {
    id: 'ansi-5',
    category: 'ansi',
    question: 'The segment height tolerance per ANSI Z80.1 is:',
    choices: ['\u00b10.5mm', '\u00b11.0mm', '\u00b12.0mm', '\u00b13.0mm'],
    correctIndex: 1,
    explanation: 'ANSI Z80.1 allows \u00b11.0mm tolerance for vertical segment position.',
  },
  {
    id: 'ansi-6',
    category: 'ansi',
    question: 'Safety eyewear is governed by which ANSI standard?',
    choices: ['Z80.1', 'Z87.1', 'Z80.3', 'Z80.5'],
    correctIndex: 1,
    explanation: 'ANSI Z87.1 governs safety eyewear with stricter impact resistance requirements.',
  },
  {
    id: 'ansi-7',
    category: 'ansi',
    question: 'A lensometer is used to verify all of the following EXCEPT:',
    choices: ['Sphere power', 'Cylinder axis', 'Impact resistance', 'Add power'],
    correctIndex: 2,
    explanation: 'A lensometer verifies power, axis, prism, and add. Impact resistance uses the FDA drop-ball test.',
  },
  {
    id: 'ansi-8',
    category: 'ansi',
    question: 'The axis tolerance for cylinder power above 1.50 D is:',
    choices: ['\u00b12\u00b0', '\u00b13\u00b0', '\u00b15\u00b0', '\u00b17\u00b0'],
    correctIndex: 0,
    explanation: 'For cylinder power above 1.50 D, axis tolerance is \u00b12\u00b0 \u2014 the tightest tolerance.',
  },
  {
    id: 'ansi-9',
    category: 'ansi',
    question: 'Add power tolerance for multifocal lenses up to +4.00 D is:',
    choices: ['\u00b10.08 D', '\u00b10.12 D', '\u00b10.15 D', '\u00b10.25 D'],
    correctIndex: 1,
    explanation: 'Per ANSI Z80.1, add power tolerance up to +4.00 D is \u00b10.12 D.',
  },
  {
    id: 'ansi-10',
    category: 'ansi',
    question: 'Lenses should be free of visible defects in the central:',
    choices: ['10mm zone', '20mm zone', '30mm zone', '50mm zone'],
    correctIndex: 2,
    explanation: 'ANSI requires lenses to be free of visible defects in the central 30mm zone.',
  },

  // ═══════════════════════════════════════════════════
  //  CATEGORY: definitions
  // ═══════════════════════════════════════════════════
  {
    id: 'def-1',
    category: 'definitions',
    question: 'A diopter is the reciprocal of:',
    choices: ['Index of refraction', 'Focal length in meters', 'Lens thickness', 'Pupillary distance'],
    correctIndex: 1,
    explanation: 'A diopter (D) = 1 / focal length in meters.',
  },
  {
    id: 'def-2',
    category: 'definitions',
    question: 'Anisometropia is defined as:',
    choices: ['Different image sizes between the eyes', 'A significant difference in refractive error between the two eyes', 'Misalignment of the eyes', 'Double vision'],
    correctIndex: 1,
    explanation: 'Anisometropia is a significant difference in refractive error between the two eyes (typically >1.00 D).',
  },
  {
    id: 'def-3',
    category: 'definitions',
    question: 'Accommodation refers to:',
    choices: ['The bending of light by the cornea', 'The ability of the crystalline lens to change shape for focusing', 'The movement of the eyes inward', 'The adjustment of pupil size'],
    correctIndex: 1,
    explanation: 'Accommodation is the crystalline lens changing shape to focus on near objects.',
  },
  {
    id: 'def-4',
    category: 'definitions',
    question: 'Esotropia describes an eye that turns:',
    choices: ['Outward', 'Upward', 'Inward', 'Downward'],
    correctIndex: 2,
    explanation: 'Esotropia is a strabismus where the eye turns inward. "Eso" = inward.',
  },
  {
    id: 'def-5',
    category: 'definitions',
    question: 'The minimum blank size formula is:',
    choices: ['ED + decentration', 'A + DBL', 'ED + 2(decentration)', 'A + B + DBL'],
    correctIndex: 2,
    explanation: 'MBS = ED + 2(decentration).',
  },
  {
    id: 'def-6',
    category: 'definitions',
    question: 'Decentration is calculated as:',
    choices: ['(Frame PD - Patient PD)', '(Frame PD - Patient PD) / 2', '(Patient PD - Frame PD) / 2', 'Frame PD + Patient PD'],
    correctIndex: 1,
    explanation: 'Decentration per lens = (Frame PD - Patient PD) / 2.',
  },
  {
    id: 'def-7',
    category: 'definitions',
    question: 'The FTC Eyeglass Rule requires:',
    choices: ['All lenses be polycarbonate', 'Prescribers to provide patients with their prescription', 'Opticians to diagnose eye conditions', 'Lenses to pass the drop-ball test'],
    correctIndex: 1,
    explanation: 'The FTC Eyeglass Rule (1978) requires prescribers to provide patients with a copy of their prescription.',
  },
  {
    id: 'def-8',
    category: 'definitions',
    question: 'Chromatic aberration is:',
    choices: ['Distortion at the lens edge', 'Color fringing caused by the lens separating white light', 'Loss of contrast in the center', 'A coating defect'],
    correctIndex: 1,
    explanation: 'Chromatic aberration is color fringing caused by the lens dispersing light. Lower Abbe value = more aberration.',
  },
  {
    id: 'def-9',
    category: 'definitions',
    question: 'Amblyopia (lazy eye) is:',
    choices: ['A misalignment of the eyes', 'Reduced vision in one eye not fully correctable with lenses', 'An age-related condition', 'Double vision'],
    correctIndex: 1,
    explanation: 'Amblyopia is reduced vision in one eye due to abnormal visual development, not fully correctable with lenses.',
  },
  {
    id: 'def-10',
    category: 'definitions',
    question: 'Back vertex power is:',
    choices: ['The power of the front surface', 'The power measured from the back surface, as read by a lensometer', 'The combined power times thickness', 'The power of the eye itself'],
    correctIndex: 1,
    explanation: 'Back vertex power is measured from the back surface and is what the lensometer reads and the Rx specifies.',
  },
];

// ═══════════════════════════════════════════════════════
//  MATH-BASED QUESTIONS (dynamic scenarios)
// ═══════════════════════════════════════════════════════

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function roundTo(val, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}

function roundToQuarter(val) {
  return Math.round(val * 4) / 4;
}

const mathQuestionGenerators = [
  // Prentice's Rule basic
  {
    id: 'math-prentice-1',
    category: 'prism',
    generate() {
      const power = randChoice([2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0]);
      const decentMM = randChoice([3, 4, 5, 6, 7, 8, 10]);
      const decentCM = decentMM / 10;
      const prism = roundTo(decentCM * power, 2);
      const sign = randChoice(['+', '-']);
      const wrong1 = roundTo(prism + 0.5, 2);
      const wrong2 = roundTo(prism * 2, 2);
      const wrong3 = roundTo(decentMM * power, 2);

      return {
        question: `Using Prentice's Rule, what is the prismatic effect of a ${sign}${power.toFixed(2)} D lens decentered ${decentMM}mm?`,
        choices: [`${prism} prism diopters`, `${wrong1} prism diopters`, `${wrong2} prism diopters`, `${wrong3} prism diopters`],
        correctIndex: 0,
        explanation: `Prentice's Rule: prism = c x D = ${decentCM} cm x ${power.toFixed(2)} = ${prism}. Convert mm to cm first!`,
      };
    },
  },
  // Prentice's Rule with direction
  {
    id: 'math-prentice-2',
    category: 'prism',
    generate() {
      const power = randChoice([2.0, 3.0, 4.0, 5.0, 6.0]);
      const decentMM = randChoice([3, 4, 5, 6, 8]);
      const decentCM = decentMM / 10;
      const prism = roundTo(decentCM * power, 2);
      const isPlus = randChoice([true, false]);
      const decDir = randChoice(['inward', 'downward']);
      let baseDir;
      if (isPlus) {
        baseDir = decDir === 'inward' ? 'Base In' : 'Base Down';
      } else {
        baseDir = decDir === 'inward' ? 'Base Out' : 'Base Up';
      }
      const wrongBases = ['Base In', 'Base Out', 'Base Up', 'Base Down'].filter(b => b !== baseDir);

      return {
        question: `A ${isPlus ? '+' : '-'}${power.toFixed(2)} D lens is decentered ${decentMM}mm ${decDir}. What is the amount and direction of prism?`,
        choices: [
          `${prism} ${baseDir}`,
          `${prism} ${wrongBases[0]}`,
          `${roundTo(prism + 1, 2)} ${wrongBases[1]}`,
          `${roundTo(prism * 0.5, 2)} ${wrongBases[2]}`,
        ],
        correctIndex: 0,
        explanation: `prism = ${decentCM} x ${power.toFixed(2)} = ${prism}. For ${isPlus ? 'plus' : 'minus'} lenses, base is ${isPlus ? 'SAME' : 'OPPOSITE'} direction as decentration = ${baseDir}.`,
      };
    },
  },
  // Focal Length
  {
    id: 'math-focal-1',
    category: 'lenses',
    generate() {
      const power = randChoice([1.0, 2.0, 2.5, 4.0, 5.0, 8.0, 10.0]);
      const sign = randChoice(['+', '-']);
      const focal = roundTo(1 / power, 4);
      const focalCM = roundTo(focal * 100, 1);
      const wrong1 = roundTo(power * 100, 1);
      const wrong2 = roundTo(focalCM * 2, 1);
      const wrong3 = roundTo(focalCM / 2, 1);
      return {
        question: `What is the focal length of a ${sign}${power.toFixed(2)} D lens?`,
        choices: [`${focalCM} cm`, `${wrong1} cm`, `${wrong2} cm`, `${wrong3} cm`],
        correctIndex: 0,
        explanation: `Focal length = 1/D = 1/${power.toFixed(2)} = ${focal}m = ${focalCM} cm.`,
      };
    },
  },
  // Transposition
  {
    id: 'math-transpose-1',
    category: 'rx',
    generate() {
      const sph = randChoice([-4.0, -3.0, -2.5, -2.0, -1.0, +1.0, +1.5, +2.0, +3.0]);
      const cyl = randChoice([-0.75, -1.0, -1.25, -1.5, -2.0, -2.5]);
      const axis = randChoice([10, 30, 45, 60, 75, 90, 110, 135, 160, 180]);
      const newSph = roundTo(sph + cyl, 2);
      const newCyl = -cyl;
      const newAxis = axis <= 90 ? axis + 90 : axis - 90;
      const fmtD = (v) => (v >= 0 ? '+' : '') + v.toFixed(2);
      const correct = `${fmtD(newSph)} ${fmtD(newCyl)} x${String(newAxis).padStart(3, '0')}`;
      const wrong1 = `${fmtD(sph - cyl)} ${fmtD(newCyl)} x${String(newAxis).padStart(3, '0')}`;
      const wrong2 = `${fmtD(newSph)} ${fmtD(cyl)} x${String(newAxis).padStart(3, '0')}`;
      const wrong3 = `${fmtD(newSph)} ${fmtD(newCyl)} x${String(axis).padStart(3, '0')}`;
      return {
        question: `Transpose ${fmtD(sph)} ${fmtD(cyl)} x${String(axis).padStart(3, '0')} to the opposite cylinder form.`,
        choices: [correct, wrong1, wrong2, wrong3],
        correctIndex: 0,
        explanation: `(1) New sphere: ${fmtD(sph)}+(${fmtD(cyl)})=${fmtD(newSph)}. (2) Change cyl sign: ${fmtD(newCyl)}. (3) Axis\u00b190\u00b0: ${newAxis}. Answer: ${correct}.`,
      };
    },
  },
  // Spherical Equivalent
  {
    id: 'math-spheq-1',
    category: 'rx',
    generate() {
      const sph = randChoice([-5.0, -4.0, -3.0, -2.0, -1.0, +1.0, +2.0, +3.0]);
      const cyl = randChoice([-1.0, -1.5, -2.0, -2.5, -3.0]);
      const se = roundTo(sph + cyl / 2, 2);
      const fmtD = (v) => (v >= 0 ? '+' : '') + v.toFixed(2);
      const wrong1 = roundTo(sph + cyl, 2);
      const wrong2 = roundTo(sph - cyl / 2, 2);
      const wrong3 = roundTo(sph * 2 + cyl, 2);
      return {
        question: `Calculate the spherical equivalent of ${fmtD(sph)} ${fmtD(cyl)} x180.`,
        choices: [fmtD(se), fmtD(wrong1), fmtD(wrong2), fmtD(wrong3)],
        correctIndex: 0,
        explanation: `Spherical Equivalent = Sphere + (Cyl / 2) = ${fmtD(sph)} + (${fmtD(cyl)}/2) = ${fmtD(se)}.`,
      };
    },
  },
  // Decentration
  {
    id: 'math-decent-1',
    category: 'measurements',
    generate() {
      const patientPD = randChoice([58, 60, 62, 64, 66]);
      const framePD = patientPD + randChoice([4, 6, 8, 10, 12]);
      const dec = (framePD - patientPD) / 2;
      const wrong1 = framePD - patientPD;
      const wrong2 = dec + 1;
      const wrong3 = (framePD + patientPD) / 2;
      return {
        question: `What is the decentration per lens for a frame PD of ${framePD}mm and patient PD of ${patientPD}mm?`,
        choices: [`${dec}mm`, `${wrong1}mm`, `${wrong2}mm`, `${wrong3}mm`],
        correctIndex: 0,
        explanation: `Decentration = (Frame PD - Patient PD) / 2 = (${framePD} - ${patientPD}) / 2 = ${dec}mm per lens.`,
      };
    },
  },
  // Minimum Blank Size
  {
    id: 'math-mbs-1',
    category: 'measurements',
    generate() {
      const ED = randChoice([50, 52, 54, 56, 58, 60]);
      const patientPD = randChoice([60, 62, 64]);
      const framePD = patientPD + randChoice([4, 6, 8, 10]);
      const dec = (framePD - patientPD) / 2;
      const mbs = ED + 2 * dec;
      const wrong1 = ED + dec;
      const wrong2 = ED + 2 * (framePD - patientPD);
      const wrong3 = ED + framePD - patientPD;
      return {
        question: `With an ED of ${ED}mm, frame PD of ${framePD}mm, and patient PD of ${patientPD}mm, what is the minimum blank size?`,
        choices: [`${mbs}mm`, `${wrong1}mm`, `${wrong2}mm`, `${wrong3}mm`],
        correctIndex: 0,
        explanation: `Dec = (${framePD}-${patientPD})/2 = ${dec}mm. MBS = ED + 2(dec) = ${ED} + ${2 * dec} = ${mbs}mm.`,
      };
    },
  },
  // Frame PD
  {
    id: 'math-framepd-1',
    category: 'frames',
    generate() {
      const A = randChoice([48, 50, 52, 54, 56, 58]);
      const DBL = randChoice([16, 17, 18, 19, 20, 22]);
      const framePD = A + DBL;
      const wrong1 = A * 2 + DBL;
      const wrong2 = A - DBL;
      const wrong3 = framePD + 2;
      return {
        question: `A frame has an eye size (A) of ${A}mm and a bridge (DBL) of ${DBL}mm. What is the frame PD?`,
        choices: [`${framePD}mm`, `${wrong1}mm`, `${wrong2}mm`, `${wrong3}mm`],
        correctIndex: 0,
        explanation: `Frame PD = A + DBL = ${A} + ${DBL} = ${framePD}mm.`,
      };
    },
  },
  // Vertex Distance Compensation
  {
    id: 'math-vertex-1',
    category: 'rx',
    generate() {
      const power = randChoice([-8, -10, -12, +8, +10, +12]);
      const vertexMM = 14;
      const vertexM = vertexMM / 1000;
      const compensated = roundTo(power / (1 - vertexM * power), 2);
      const rounded = roundToQuarter(compensated);
      const wrong1 = roundToQuarter(power / (1 + vertexM * power));
      const wrong2 = roundToQuarter(power - 0.75);
      const wrong3 = roundToQuarter(power + 0.50);
      const fmtD = (v) => (v >= 0 ? '+' : '') + v.toFixed(2);
      return {
        question: `A spectacle Rx of ${fmtD(power)} D at ${vertexMM}mm vertex distance needs contact lens conversion. What is the compensated power?`,
        choices: [fmtD(rounded), fmtD(wrong1), fmtD(wrong2), fmtD(wrong3)],
        correctIndex: 0,
        explanation: `Dc = D/(1 - d*D) = ${fmtD(power)}/(1 - ${vertexM}*${fmtD(power)}) = ${fmtD(compensated)} \u2248 ${fmtD(rounded)} D.`,
      };
    },
  },
  // Compounding Prism
  {
    id: 'math-compound-prism-1',
    category: 'prism',
    generate() {
      const h = randChoice([2, 3, 4, 5]);
      const v = randChoice([2, 3, 4]);
      const resultant = roundTo(Math.sqrt(h * h + v * v), 1);
      const wrong1 = h + v;
      const wrong2 = roundTo(resultant + 1, 1);
      const wrong3 = Math.abs(h - v);
      return {
        question: `A lens has ${h} prism diopters Base Out and ${v} prism diopters Base Down. What is the resultant prism?`,
        choices: [`${resultant} prism diopters`, `${wrong1} prism diopters`, `${wrong2} prism diopters`, `${wrong3} prism diopters`],
        correctIndex: 0,
        explanation: `Resultant = sqrt(${h}\u00b2 + ${v}\u00b2) = sqrt(${h * h + v * v}) = ${resultant}.`,
      };
    },
  },
  // Near PD
  {
    id: 'math-nearpd-1',
    category: 'measurements',
    generate() {
      const distPD = randChoice([60, 62, 64, 66, 68, 70]);
      const nearPD = distPD - 3;
      const wrong1 = distPD - 1;
      const wrong2 = distPD - 5;
      const wrong3 = distPD + 3;
      return {
        question: `A patient has a distance PD of ${distPD}mm. What is the estimated near PD?`,
        choices: [`${nearPD}mm`, `${wrong1}mm`, `${wrong2}mm`, `${wrong3}mm`],
        correctIndex: 0,
        explanation: `Near PD = Distance PD - 3mm = ${distPD} - 3 = ${nearPD}mm.`,
      };
    },
  },
  // Seg Height with Pantoscopic Tilt
  {
    id: 'math-segtilt-1',
    category: 'measurements',
    generate() {
      const measuredSeg = randChoice([16, 17, 18, 19, 20]);
      const tiltDeg = randChoice([4, 6, 8, 10, 12]);
      const addMM = tiltDeg / 2;
      const finalSeg = measuredSeg + addMM;
      const wrong1 = measuredSeg;
      const wrong2 = measuredSeg + tiltDeg;
      const wrong3 = measuredSeg - addMM;
      return {
        question: `A progressive lens has a measured seg height of ${measuredSeg}mm and the frame has ${tiltDeg} degrees of pantoscopic tilt. What is the adjusted seg height?`,
        choices: [`${finalSeg}mm`, `${wrong1}mm`, `${wrong2}mm`, `${wrong3}mm`],
        correctIndex: 0,
        explanation: `For every 2 degrees of tilt, add 1mm. ${tiltDeg}/2 = ${addMM}mm. Adjusted seg = ${measuredSeg} + ${addMM} = ${finalSeg}mm.`,
      };
    },
  },
];

// ═══════════════════════════════════════════════════════
//  SHUFFLE & RANDOMIZATION UTILITIES
// ═══════════════════════════════════════════════════════

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuestion(q) {
  if (q.generate) {
    const variation = q.generate();
    const indices = [0, 1, 2, 3];
    const shuffled = shuffle(indices);
    const newChoices = shuffled.map(i => variation.choices[i]);
    const newCorrectIndex = shuffled.indexOf(variation.correctIndex);
    return {
      id: q.id,
      category: q.category,
      question: variation.question,
      choices: newChoices,
      correctIndex: newCorrectIndex,
      explanation: variation.explanation,
    };
  } else {
    const indices = [0, 1, 2, 3];
    const shuffled = shuffle(indices);
    const newChoices = shuffled.map(i => q.choices[i]);
    const newCorrectIndex = shuffled.indexOf(q.correctIndex);
    return { ...q, choices: newChoices, correctIndex: newCorrectIndex };
  }
}

export function getQuestionsByCategory(categoryId) {
  const allQ = [
    ...staticQuestions.filter(q => q.category === categoryId),
    ...mathQuestionGenerators.filter(q => q.category === categoryId),
  ];
  return shuffle(allQ).map(prepareQuestion);
}

export function generateMockTest(numQuestions = 50) {
  const allQ = [...staticQuestions, ...mathQuestionGenerators];
  const selected = shuffle(allQ).slice(0, Math.min(numQuestions, allQ.length));
  return selected.map(prepareQuestion);
}

export function generateCategoryTest(categoryId) {
  return getQuestionsByCategory(categoryId);
}

export function getAvailableCategories() {
  const cats = new Set();
  staticQuestions.forEach(q => cats.add(q.category));
  mathQuestionGenerators.forEach(q => cats.add(q.category));
  return Array.from(cats);
}
