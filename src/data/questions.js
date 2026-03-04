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

  // ═══════════════════════════════════════════════════
  //  CATEGORY: lenses  (Ophthalmic Lenses)
  // ═══════════════════════════════════════════════════
  {
    id: 'lens-1',
    category: 'lenses',
    question: 'What is the index of refraction for CR-39 plastic?',
    choices: ['1.498', '1.50', '1.523', '1.586'],
    correctIndex: 1,
    explanation: 'CR-39 has an index of refraction of 1.50 and is the standard plastic lens material.',
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
    correctIndex: 1,
    explanation: 'Slab-off is applied to the most plus (or least minus) lens to correct vertical imbalance at reading level.',
  },
  {
    id: 'rx-9',
    category: 'rx',
    question: 'Vertex distance compensation is necessary for prescriptions exceeding:',
    choices: ['\u00b11.00 D', '\u00b12.00 D', '\u00b14.00 D', '\u00b16.00 D'],
    correctIndex: 2,
    explanation: 'Vertex distance compensation is needed for prescriptions over \u00b14.00 D.',
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
