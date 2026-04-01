-- ============================================
-- SEED DATA FOR ABO PREP APP
-- ============================================

-- ============================================
-- CATEGORIES
-- ============================================
INSERT INTO categories (id, name, icon, description, display_order) VALUES
('anatomy', 'Ocular Anatomy & Physiology', '👁', 'Structure and function of the eye and visual system.', 1),
('lenses', 'Ophthalmic Lenses', '🔍', 'Lens types, materials, designs, and optical properties.', 2),
('frames', 'Frames & Materials', '🕶', 'Frame styles, materials, measurements, and standards.', 3),
('rx', 'Prescription (Rx) Interpretation', '📋', 'Reading and interpreting ophthalmic prescriptions.', 4),
('prism', 'Prism', '🔺', 'Prism types, effects, calculations, and applications.', 5),
('measurements', 'Patient Measurements & Fittings', '📏', 'PD, seg heights, vertex distance, frame fitting, and adjustments.', 6),
('ansi', 'ANSI Standards', '📐', 'ANSI Z80.1 tolerances and quality standards for ophthalmic lenses.', 7),
('definitions', 'Optical Terminology & Definitions', '📖', 'Key terms, definitions, and concepts in opticianry.', 8);

-- ============================================
-- QUESTIONS
-- ============================================
INSERT INTO questions (id, category_id, question, choices, correct_index, explanation, is_generator) VALUES
-- ANATOMY
('anat-1', 'anatomy', 'Which structure of the eye provides approximately two-thirds of its total refractive power?', '["Crystalline lens", "Cornea", "Aqueous humor", "Vitreous humor"]', 1, 'The cornea provides approximately 43 diopters, which is about two-thirds of the eye''s total refractive power.', false),
('anat-2', 'anatomy', 'The fovea centralis contains the highest concentration of which type of photoreceptor?', '["Rods", "Cones", "Bipolar cells", "Ganglion cells"]', 1, 'The fovea centralis has the highest concentration of cones, providing the sharpest visual acuity and color perception.', false),
('anat-3', 'anatomy', 'What is the blind spot of the eye?', '["The fovea", "The macula", "The optic disc", "The pupil"]', 2, 'The optic disc is where the optic nerve exits the eye. It has no photoreceptors, creating the physiological blind spot.', false),
('anat-4', 'anatomy', 'Which muscle moves the eye outward (abduction)?', '["Medial rectus", "Lateral rectus", "Superior oblique", "Inferior rectus"]', 1, 'The lateral rectus muscle is responsible for abduction — moving the eye outward (away from the nose).', false),
('anat-5', 'anatomy', 'Aqueous humor drains through which structure?', '["Ciliary body", "Vitreous chamber", "Trabecular meshwork into Schlemm''s canal", "Lacrimal duct"]', 2, 'Aqueous humor drains through the trabecular meshwork into Schlemm''s canal. Blockage can lead to glaucoma.', false),
('anat-6', 'anatomy', 'Presbyopia is caused by:', '["Corneal flattening", "Increased axial length", "Loss of flexibility of the crystalline lens", "Degeneration of the retina"]', 2, 'Presbyopia results from age-related hardening and loss of flexibility of the crystalline lens, reducing its ability to accommodate.', false),
('anat-7', 'anatomy', 'Which layer of the eye contains the iris, ciliary body, and choroid?', '["Fibrous tunic", "Vascular tunic (uvea)", "Neural tunic", "Conjunctiva"]', 1, 'The vascular tunic (uvea) is the middle layer containing the iris, ciliary body, and choroid.', false),
('anat-8', 'anatomy', 'Rods are primarily responsible for:', '["Color vision", "Sharp central vision", "Dim-light and peripheral vision", "Near focusing"]', 2, 'Rods (~120 million) are responsible for scotopic (dim-light) vision and peripheral vision. They do not detect color.', false),
('anat-9', 'anatomy', 'Myopia is corrected with which type of lens?', '["Plus (convex) lens", "Minus (concave) lens", "Cylindrical lens", "Prismatic lens"]', 1, 'Myopia (nearsightedness) is corrected with a minus (concave/diverging) lens to diverge light so it focuses on the retina.', false),
('anat-10', 'anatomy', 'How many layers does the cornea have?', '["Three", "Four", "Five", "Seven"]', 2, 'The cornea has five layers: epithelium, Bowman''s membrane, stroma, Descemet''s membrane, and endothelium.', false),
('anat-11', 'anatomy', 'Which part of the eye produces aqueous humor?', '["Iris", "Cornea", "Ciliary body", "Choroid"]', 2, 'The ciliary body produces aqueous humor, which nourishes the cornea and lens and maintains intraocular pressure.', false),
('anat-12', 'anatomy', 'A cataract is a clouding of the:', '["Cornea", "Vitreous humor", "Crystalline lens", "Retina"]', 2, 'A cataract is the clouding of the crystalline lens, causing decreased vision.', false),
('anat-13', 'anatomy', 'The crystalline lens is held in place by:', '["The iris sphincter", "Zonules of Zinn (suspensory ligaments)", "The vitreous humor", "The ciliary muscle directly"]', 1, 'The zonules of Zinn (suspensory ligaments) attach the crystalline lens to the ciliary body, holding it in position.', false),
('anat-14', 'anatomy', 'The normal intraocular pressure (IOP) range is approximately:', '["2-8 mmHg", "10-21 mmHg", "25-35 mmHg", "40-50 mmHg"]', 1, 'Normal IOP is 10-21 mmHg. Elevated IOP is a key risk factor for glaucoma.', false),
('anat-15', 'anatomy', 'The macula is responsible for:', '["Peripheral vision", "Central, detailed vision", "Night vision only", "Intraocular pressure regulation"]', 1, 'The macula provides central, detailed vision used for reading, driving, and recognizing faces.', false),
('anat-16', 'anatomy', 'The average axial length of the adult human eye is approximately:', '["17 mm", "20 mm", "24 mm", "30 mm"]', 2, 'The average axial length of the adult eye is approximately 24 mm (about 1 inch).', false),
('anat-17', 'anatomy', 'Hyperopia (farsightedness) occurs when:', '["The eye is too long", "The eye is too short or the cornea is too flat", "The lens is too thick", "The pupil is too large"]', 1, 'Hyperopia occurs when the eye is too short or the cornea too flat, causing light to focus behind the retina.', false),
('anat-18', 'anatomy', 'Astigmatism is caused by:', '["An irregularly shaped cornea or lens", "A cloudy lens", "A detached retina", "Increased intraocular pressure"]', 0, 'Astigmatism results from an irregularly shaped (toric) cornea or lens, causing light to focus at multiple points.', false),
('anat-19', 'anatomy', 'The conjunctiva covers:', '["The entire cornea", "The sclera and inner eyelids", "Only the iris", "The retina"]', 1, 'The conjunctiva is a thin, transparent mucous membrane covering the sclera (bulbar) and lining the inner eyelids (palpebral).', false),
('anat-20', 'anatomy', 'The pupil size is controlled by:', '["The cornea", "The iris sphincter and dilator muscles", "The ciliary body", "The retina"]', 1, 'The iris sphincter (constricts) and dilator (dilates) muscles control pupil size in response to light and accommodation.', false),
('anat-21', 'anatomy', 'The optic nerve (cranial nerve II) carries visual information from the retina to the:', '["Cerebellum", "Frontal lobe", "Occipital lobe (visual cortex)", "Temporal lobe"]', 2, 'The optic nerve carries visual signals to the occipital lobe (visual cortex) at the back of the brain for processing.', false),
('anat-22', 'anatomy', 'The corneal endothelium is important because it:', '["Provides the tear film", "Pumps fluid out of the cornea to maintain clarity", "Produces aqueous humor", "Protects against UV radiation"]', 1, 'The corneal endothelium pumps excess fluid out of the stroma to maintain corneal transparency. These cells do not regenerate.', false),
('anat-23', 'anatomy', 'The vitreous humor:', '["Is continuously produced and drained", "Is a gel-like substance filling the posterior chamber", "Is located between the cornea and lens", "Has a high refractive index of 1.52"]', 1, 'The vitreous humor is a clear, gel-like substance that fills the large posterior cavity of the eye and helps maintain its shape.', false),
('anat-24', 'anatomy', 'The sclera is:', '["The transparent front of the eye", "The white, tough outer coat of the eye", "The pigmented middle layer", "The light-sensitive inner layer"]', 1, 'The sclera is the white, tough, fibrous outer coat that forms the protective wall of the eye.', false),
('anat-25', 'anatomy', 'Which cranial nerve controls the lateral rectus muscle?', '["Cranial nerve III (oculomotor)", "Cranial nerve IV (trochlear)", "Cranial nerve V (trigeminal)", "Cranial nerve VI (abducens)"]', 3, 'Cranial nerve VI (abducens) innervates the lateral rectus. Remember: LR6 SO4, all the rest CN III.', false),
('anat-26', 'anatomy', 'The tear film consists of how many layers?', '["One", "Two", "Three", "Four"]', 2, 'The tear film has three layers: outer lipid (oil), middle aqueous (water), and inner mucin (mucous).', false),
('anat-27', 'anatomy', 'The meibomian glands contribute which layer to the tear film?', '["Mucin layer", "Aqueous layer", "Lipid (oil) layer", "Protein layer"]', 2, 'Meibomian glands in the eyelids produce the outer lipid (oil) layer that prevents tear evaporation.', false),
('anat-28', 'anatomy', 'The choroid layer of the eye primarily functions to:', '["Refract light", "Provide blood supply and nourishment to the retina", "Produce aqueous humor", "Control pupil size"]', 1, 'The choroid is a highly vascular layer that provides oxygen and nutrients to the outer layers of the retina.', false),
('anat-29', 'anatomy', 'The corneal stroma makes up approximately what percentage of corneal thickness?', '["50%", "70%", "90%", "99%"]', 2, 'The stroma (middle layer) comprises approximately 90% of the total corneal thickness.', false),
('anat-30', 'anatomy', 'Which type of vision do cones provide?', '["Scotopic (dim light) vision", "Photopic (daylight/color) vision", "Peripheral vision only", "Motion detection only"]', 1, 'Cones (~6 million) provide photopic vision: color perception and sharp visual acuity in well-lit conditions.', false),
('anat-31', 'anatomy', 'The Bowman''s membrane is located:', '["Between the stroma and endothelium", "Between the epithelium and stroma", "On the outermost surface of the cornea", "Behind Descemet''s membrane"]', 1, 'Bowman''s membrane lies between the epithelium and the stroma. It does not regenerate if damaged.', false),
('anat-32', 'anatomy', 'Glaucoma primarily damages which structure?', '["The cornea", "The crystalline lens", "The optic nerve", "The iris"]', 2, 'Glaucoma damages the optic nerve, typically due to elevated intraocular pressure, leading to progressive vision loss.', false),
('anat-33', 'anatomy', 'The lacrimal gland is located:', '["In the lower eyelid", "In the upper outer (superotemporal) portion of the orbit", "Behind the eyeball", "Inside the nasal cavity"]', 1, 'The lacrimal gland is located in the superotemporal (upper outer) portion of the orbit and produces the aqueous layer of tears.', false),
('anat-34', 'anatomy', 'The superior oblique muscle is innervated by:', '["Cranial nerve III (oculomotor)", "Cranial nerve IV (trochlear)", "Cranial nerve V (trigeminal)", "Cranial nerve VI (abducens)"]', 1, 'Cranial nerve IV (trochlear) innervates the superior oblique muscle. Remember: LR6 SO4.', false),
('anat-35', 'anatomy', 'The retinal pigment epithelium (RPE) functions to:', '["Transmit visual signals to the brain", "Absorb stray light and recycle visual pigments", "Produce aqueous humor", "Form the blood-retina barrier only"]', 1, 'The RPE absorbs stray light, recycles visual pigments (vitamin A), phagocytoses rod outer segments, and supports photoreceptor health.', false),
('anat-36', 'anatomy', 'Descemet''s membrane is located:', '["Between the epithelium and Bowman''s layer", "Between the stroma and endothelium", "On the anterior surface of the iris", "Between the choroid and retina"]', 1, 'Descemet''s membrane is a tough basement membrane located between the stroma and the endothelium.', false),
('anat-37', 'anatomy', 'Age-related macular degeneration (AMD) primarily affects:', '["Peripheral vision first", "Central vision", "Night vision only", "Color vision only"]', 1, 'AMD affects the macula, causing loss of central vision needed for reading, driving, and recognizing faces.', false),
('anat-38', 'anatomy', 'The total refractive power of the human eye is approximately:', '["20 diopters", "40 diopters", "60 diopters", "80 diopters"]', 2, 'The total refractive power of the eye is approximately 60 diopters (cornea ~43D + lens ~17D).', false),
('anat-39', 'anatomy', 'The anterior chamber is located between the:', '["Lens and retina", "Cornea and iris", "Iris and lens", "Sclera and choroid"]', 1, 'The anterior chamber is the fluid-filled space between the cornea and the iris, containing aqueous humor.', false),
('anat-40', 'anatomy', 'How many extraocular muscles control each eye?', '["Four", "Five", "Six", "Eight"]', 2, 'Each eye is controlled by six extraocular muscles: four rectus (superior, inferior, medial, lateral) and two oblique (superior, inferior).', false),

-- LENSES
('lens-1', 'lenses', 'What is the index of refraction for CR-39 plastic?', '["1.498", "1.50", "1.523", "1.586"]', 0, 'CR-39 has an index of refraction of 1.498 and is the standard plastic lens material.', false),
('lens-2', 'lenses', 'Which lens material is required by the FDA for children''s eyewear?', '["CR-39", "Crown glass", "Polycarbonate", "Hi-index 1.67"]', 2, 'Polycarbonate is required for children''s and safety eyewear due to its superior impact resistance.', false),
('lens-3', 'lenses', 'Which lens material has the highest Abbe value?', '["Polycarbonate", "Crown glass", "Hi-index 1.67", "Hi-index 1.74"]', 1, 'Crown glass has an Abbe value of 59, the highest among common ophthalmic materials.', false),
('lens-4', 'lenses', 'A progressive lens differs from a bifocal because it:', '["Has a visible line between distance and near", "Provides a smooth, gradual transition with no visible lines", "Only corrects for distance vision", "Cannot correct astigmatism"]', 1, 'Progressive lenses provide a smooth transition from distance through intermediate to near with no visible lines.', false),
('lens-5', 'lenses', 'A minus lens is:', '["Thicker in the center, thinner at edges", "Equal thickness throughout", "Thinner in the center, thicker at edges", "Flat on both surfaces"]', 2, 'Minus (concave) lenses are thinner in the center and thicker at the edges.', false),
('lens-6', 'lenses', 'Anti-reflective (AR) coating:', '["Makes lenses darker", "Reduces reflections and allows more light to pass through", "Replaces the need for UV protection", "Adds tint to the lens"]', 1, 'AR coating reduces reflections from lens surfaces, allowing more light to pass through for clearer vision.', false),
('lens-7', 'lenses', 'Which lens material has built-in 100% UV protection without additional coating?', '["CR-39", "Crown glass", "Polycarbonate", "Hi-index 1.60"]', 2, 'Polycarbonate (and Trivex) inherently block 100% of UV radiation without requiring an additional UV coating.', false),
('lens-8', 'lenses', 'Photochromic lenses:', '["Are permanently tinted", "Darken in UV light and lighten indoors", "Only come in gray tint", "Darken fully inside a car"]', 1, 'Photochromic lenses darken in UV light and return to clear indoors. They may not fully darken in a car since windshields block UV.', false),
('lens-9', 'lenses', 'An Executive (Franklin) bifocal has:', '["A round segment", "A flat-top 28mm segment", "A segment that extends the full width of the lens", "No visible segment line"]', 2, 'The Executive (Franklin) bifocal has a segment that extends across the entire width of the lens.', false),
('lens-10', 'lenses', 'Trivex lens material is known for:', '["Highest index of refraction", "Being the heaviest material", "Excellent impact resistance and the lightest weight", "Best scratch resistance of all materials"]', 2, 'Trivex is the lightest lens material with excellent impact resistance and superior optical clarity (Abbe value 45).', false),
('lens-11', 'lenses', 'A higher index of refraction means:', '["A thicker lens for the same Rx", "A thinner lens for the same Rx", "Better chromatic aberration control", "Improved scratch resistance"]', 1, 'Higher index materials bend light more efficiently, allowing thinner lenses for the same prescription.', false),
('lens-12', 'lenses', 'Polarized lenses work by:', '["Blocking all light equally", "Blocking horizontally oriented reflected glare", "Darkening in sunlight", "Filtering blue light only"]', 1, 'Polarized lenses block horizontally polarized light, eliminating reflected glare from flat surfaces.', false),
('lens-13', 'lenses', 'The Abbe value measures:', '["Lens thickness", "Impact resistance", "Chromatic aberration (color dispersion)", "UV protection level"]', 2, 'The Abbe value measures a material''s chromatic dispersion. Higher Abbe value = less color fringing.', false),
('lens-14', 'lenses', 'What is the index of refraction of crown glass?', '["1.498", "1.523", "1.586", "1.60"]', 1, 'Crown glass has an index of refraction of 1.523 and is the reference standard for ophthalmic lenses.', false),
('lens-15', 'lenses', 'The Abbe value of polycarbonate is approximately:', '["30", "36", "45", "58"]', 0, 'Polycarbonate has an Abbe value of approximately 30, one of the lowest, meaning more chromatic aberration.', false),
('lens-16', 'lenses', 'A flat-top 28 (FT-28) bifocal segment measures:', '["22mm wide", "25mm wide", "28mm wide", "35mm wide"]', 2, 'A flat-top 28 (FT-28) bifocal has a 28mm wide D-shaped segment, the most commonly prescribed bifocal.', false),
('lens-17', 'lenses', 'The corridor length in a progressive lens refers to:', '["The total lens height", "The distance from the fitting cross to the near zone", "The width of the reading area", "The distance portion of the lens"]', 1, 'The corridor length is the distance from the fitting cross (distance reference point) to the beginning of the full near zone.', false),
('lens-18', 'lenses', 'Which lens type has unwanted astigmatism in the peripheral zones?', '["Single vision", "Flat-top bifocal", "Progressive", "Executive bifocal"]', 2, 'Progressive lenses have unavoidable peripheral distortion (unwanted astigmatism) on either side of the progressive corridor.', false),
('lens-19', 'lenses', 'Scratch-resistant coating is applied to which lens material most often?', '["Crown glass", "Polycarbonate", "CR-39", "All plastic lenses benefit from it"]', 3, 'All plastic lens materials are softer than glass and benefit from scratch-resistant (hard) coating to improve durability.', false),
('lens-20', 'lenses', 'Blue-light filtering lenses are designed to:', '["Block all visible light", "Reduce high-energy visible (HEV) blue light", "Eliminate UV only", "Darken in sunlight"]', 1, 'Blue-light filtering lenses reduce high-energy visible (HEV) blue light (approximately 400-450nm) from digital screens and sunlight.', false),
('lens-21', 'lenses', 'An aspheric lens design provides:', '["Thicker edges than spherical lenses", "Flatter, thinner profile with reduced magnification", "Built-in prism correction", "Photochromic properties"]', 1, 'Aspheric designs use a gradually changing curve to create flatter, thinner lenses with reduced magnification/minification and wider fields of clear vision.', false),
('lens-22', 'lenses', 'The index of refraction for polycarbonate is:', '["1.498", "1.523", "1.586", "1.67"]', 2, 'Polycarbonate has an index of refraction of 1.586.', false),
('lens-23', 'lenses', 'A trifocal lens has how many distinct viewing zones?', '["Two", "Three", "Four", "Infinite (like a progressive)"]', 1, 'A trifocal lens has three viewing zones: distance, intermediate, and near, with visible segment lines.', false),
('lens-24', 'lenses', 'Mirror coatings on lenses primarily:', '["Improve impact resistance", "Reduce light transmission and provide cosmetic effect", "Eliminate chromatic aberration", "Add UV protection"]', 1, 'Mirror coatings reflect light from the front surface, reducing light transmission for bright conditions and providing a cosmetic appearance.', false),
('lens-25', 'lenses', 'Occupational progressive lenses differ from standard progressives because they:', '["Have no near zone", "Emphasize intermediate and near zones for office/computer work", "Are only available in polycarbonate", "Have a longer corridor"]', 1, 'Occupational (office/computer) progressives are designed with wider intermediate and near zones, sacrificing the distance portion for better workspace vision.', false),
('lens-26', 'lenses', 'Double-segment (DS) bifocals have segments located:', '["Only at the bottom", "At both the top and bottom of the lens", "Only at the top", "In the center of the lens"]', 1, 'Double-segment bifocals have near segments at both the top and bottom, useful for overhead work such as mechanics or electricians.', false),
('lens-27', 'lenses', 'The minimum thickness for safety lenses per ANSI Z87.1 is:', '["1.0mm", "2.0mm", "3.0mm", "4.0mm"]', 2, 'ANSI Z87.1 requires safety dress lenses to have a minimum thickness of 3.0mm.', false),
('lens-28', 'lenses', 'Hi-index 1.74 lenses are best suited for:', '["Low prescriptions under +/-2.00 D", "Children''s eyewear", "High prescriptions requiring the thinnest possible lens", "Safety/industrial applications"]', 2, 'Hi-index 1.74 provides the thinnest lenses for high prescriptions, but has a lower Abbe value (33) and requires AR coating.', false),
('lens-29', 'lenses', 'Hydrophobic coating on a lens:', '["Attracts water for clearer vision in rain", "Repels water, oil, and smudges", "Blocks UV radiation", "Increases impact resistance"]', 1, 'Hydrophobic coating repels water, oil, and dirt, making lenses easier to clean and more resistant to smudging.', false),
('lens-30', 'lenses', 'A plano lens has a power of:', '["+1.00 D", "-1.00 D", "0.00 D (no power)", "+0.50 D"]', 2, 'A plano lens has zero refractive power (0.00 D) and is used for non-prescription eyewear or safety glasses.', false),
('lens-31', 'lenses', 'A lenticular lens design is used for:', '["Mild prescriptions", "Very high plus prescriptions to reduce weight and thickness", "Astigmatism only", "Prism correction"]', 1, 'Lenticular lenses concentrate the optical power in a central zone, reducing edge thickness and weight for very high plus prescriptions.', false),
('lens-32', 'lenses', 'The "intermediate" zone of a progressive lens is designed for viewing at approximately:', '["6 meters (20 feet)", "60-90 cm (arm''s length/computer distance)", "30-40 cm (reading distance)", "3 meters (10 feet)"]', 1, 'The intermediate zone provides clear vision at approximately 60-90 cm, ideal for computer screens and dashboards.', false),
('lens-33', 'lenses', 'A plus (convex) lens is:', '["Thinner in the center, thicker at edges", "Thicker in the center, thinner at edges", "Flat on both surfaces", "Used only for myopia"]', 1, 'Plus (convex) lenses are thicker in the center and thinner at the edges. They converge light and correct hyperopia.', false),
('lens-34', 'lenses', 'Crizal, Sapphire, and Unity are examples of:', '["Frame brands", "Anti-reflective coating brands", "Contact lens solutions", "Lens materials"]', 1, 'These are brand names for premium anti-reflective (AR) coatings offered by various lens manufacturers.', false),
('lens-35', 'lenses', 'Which lens form has the same curve on both surfaces?', '["Meniscus", "Plano-convex", "Equi-convex (or equi-concave)", "Lenticular"]', 2, 'An equi-convex (or equi-concave) lens has equal curvature on both surfaces.', false),
('lens-36', 'lenses', 'A meniscus lens has:', '["Two convex surfaces", "Two concave surfaces", "One convex and one concave surface", "One flat and one convex surface"]', 2, 'A meniscus lens has one convex and one concave surface. Most modern ophthalmic lenses use meniscus form.', false),
('lens-37', 'lenses', 'Short-corridor progressive lenses are designed for:', '["Large frames only", "Small or shallow frames with limited vertical height", "Distance-only prescriptions", "Children under age 10"]', 1, 'Short-corridor progressives are designed for smaller frames, fitting the progressive power into a reduced vertical space.', false),
('lens-38', 'lenses', 'UV radiation is classified into UVA, UVB, and UVC. Which is most harmful to the eye in daily life?', '["UVC", "UVA and UVB together", "Only UVA", "Only infrared"]', 1, 'UVA (315-380nm) and UVB (280-315nm) reach the earth''s surface and can damage the cornea, lens, and retina. UVC is absorbed by the ozone layer.', false),
('lens-39', 'lenses', 'Digital free-form lenses are manufactured using:', '["Traditional grinding tools only", "Computer-controlled point-by-point surfacing", "Injection molding", "Manual polishing only"]', 1, 'Free-form (digital) lenses are surfaced point-by-point using CNC (computer numerical control) technology for optimized optics.', false),

-- FRAMES
('frame-1', 'frames', 'In the boxing system, the "A" measurement refers to:', '["Bridge size", "Temple length", "Horizontal lens width", "Vertical lens height"]', 2, 'The "A" measurement (eye size) is the horizontal width of the lens opening at its widest point.', false),
('frame-2', 'frames', 'Frame PD (Geometric Center Distance) is calculated as:', '["A + B", "A + DBL", "ED + DBL", "B + DBL"]', 1, 'Frame PD = A (eye size) + DBL (bridge size).', false),
('frame-3', 'frames', 'Which frame material is most commonly used for plastic frames?', '["Optyl", "Propionate", "Zyl (cellulose acetate)", "Carbon fiber"]', 2, 'Zyl (cellulose acetate) is the most common plastic frame material.', false),
('frame-4', 'frames', 'Pantoscopic tilt refers to:', '["The lens tilting so the top is closer to the face", "The lens tilting so the bottom is closer to the face", "The horizontal curvature of the frame front", "The width of the bridge"]', 1, 'Pantoscopic tilt means the bottom of the lens is closer to the face than the top. Standard is 8-12 degrees.', false),
('frame-5', 'frames', 'Titanium frames are valued because they are:', '["The cheapest metal option", "Lightweight, hypoallergenic, and corrosion-resistant", "The most flexible frame material", "Easiest to adjust without heat"]', 1, 'Titanium is lightweight, hypoallergenic, corrosion-resistant, and strong.', false),
('frame-6', 'frames', 'A semi-rimless (nylon cord) frame:', '["Has no frame around the lens", "Has a full rim around the entire lens", "Has a rim on top with a nylon cord holding the bottom", "Requires lenses to be drilled"]', 2, 'Semi-rimless frames have a rim on top and a nylon cord in a groove on the lower edge of the lens.', false),
('frame-7', 'frames', 'Before adjusting a plastic frame, you should:', '["Apply heat to make it pliable", "Soak it in cold water", "Never adjust plastic frames", "Apply direct heat to the lens"]', 0, 'Plastic frames should be heated before adjusting to avoid breakage. Never apply heat directly to lenses.', false),
('frame-8', 'frames', 'The "B" measurement in the boxing system refers to:', '["Bridge size", "Vertical lens height", "Temple length", "Effective diameter"]', 1, 'The "B" measurement is the vertical height of the lens opening at its tallest point.', false),
('frame-9', 'frames', 'Which material is recommended for rimless (drill-mount) frames?', '["CR-39", "Crown glass", "Polycarbonate or Trivex", "Hi-index 1.74"]', 2, 'Polycarbonate or Trivex are recommended for rimless frames due to their superior impact resistance.', false),
('frame-10', 'frames', 'Monel frames may cause allergic reactions because they contain:', '["Titanium", "Beryllium", "Nickel", "Aluminum"]', 2, 'Monel contains nickel, which is a common allergen.', false),
('frame-11', 'frames', 'The DBL (distance between lenses) measurement refers to:', '["Temple length", "Bridge size (narrowest distance between lenses)", "Effective diameter", "Horizontal lens width"]', 1, 'DBL (distance between lenses) is the bridge size, measured at the narrowest point between the two lenses.', false),
('frame-12', 'frames', 'The effective diameter (ED) of a lens is:', '["The same as the A measurement", "The longest diagonal measurement of the lens", "The bridge size plus the A measurement", "The vertical height of the lens"]', 1, 'The effective diameter is the longest diagonal measurement across the lens from the geometric center, used for minimum blank size calculations.', false),
('frame-13', 'frames', 'A rimless (drill-mount) frame:', '["Has a full frame around both lenses", "Has no frame around the lenses; lenses are attached by screws through drilled holes", "Has a nylon cord on the bottom", "Cannot use progressive lenses"]', 1, 'Rimless frames have no frame surrounding the lenses. Lenses are attached to the bridge and temples by screws through drilled holes.', false),
('frame-14', 'frames', 'Face form (frame wrap) refers to:', '["The vertical tilt of the lenses", "The horizontal curvature of the frame front as it wraps around the face", "The temple length", "The nose pad angle"]', 1, 'Face form (wrap angle) is the horizontal curvature of the frame front. Typical face form is 5-8 degrees.', false),
('frame-15', 'frames', 'Memory metal (Flexon/beta-titanium) frames are valued because they:', '["Are the cheapest option", "Return to their original shape after being bent", "Cannot be adjusted", "Are the heaviest metal option"]', 1, 'Memory metal frames (Flexon, beta-titanium) return to their original shape after being bent or deformed, providing excellent durability.', false),
('frame-16', 'frames', 'The temple of a frame:', '["Holds the lenses in place", "Extends from the endpiece to behind the ear", "Connects the two eyewires at the nose", "Is the part that holds nose pads"]', 1, 'Temples extend from the endpieces (hinges) back over or behind the ears to keep the frame in position.', false),
('frame-17', 'frames', 'Standard temple lengths are most commonly:', '["100-110mm", "120-130mm", "135-145mm", "160-170mm"]', 2, 'Standard temple lengths are most commonly 135mm, 140mm, and 145mm.', false),
('frame-18', 'frames', 'Retroscopic tilt is:', '["The same as pantoscopic tilt", "The opposite of pantoscopic tilt — the top of the lens tilts away from the face", "Horizontal curvature of the frame", "The angle of the nose pads"]', 1, 'Retroscopic tilt is the opposite of pantoscopic: the top of the lens tilts away from the face (bottom tilts toward). Generally undesirable.', false),
('frame-19', 'frames', 'Stainless steel frames are known for:', '["Being the lightest metal", "Corrosion resistance and hypoallergenic properties", "Highest flexibility of all metals", "Being identical to monel"]', 1, 'Stainless steel is corrosion-resistant, hypoallergenic, lightweight, and holds adjustments well.', false),
('frame-20', 'frames', 'Adjustable nose pads are most commonly found on:', '["Plastic (zyl) frames", "Metal frames", "Wooden frames", "Nylon frames"]', 1, 'Metal frames typically have adjustable silicone or PVC nose pads on metal pad arms, allowing precise fitting.', false),
('frame-21', 'frames', 'The endpiece of a frame:', '["Is the tip of the temple", "Connects the temple to the front of the frame via the hinge", "Is the bridge", "Is the nose pad"]', 1, 'The endpiece is the part of the frame front where the hinge is attached, connecting the temple to the frame front.', false),
('frame-22', 'frames', 'A skull temple:', '["Goes straight back without curving", "Curves down behind the ear", "Has a cable that wraps around the ear", "Is only used for children"]', 1, 'A skull temple curves downward behind the ear. It is the most common temple style for dress eyewear.', false),
('frame-23', 'frames', 'A cable temple:', '["Is straight with no curve", "Wraps around and follows the contour of the ear", "Is shorter than a skull temple", "Cannot be adjusted"]', 1, 'Cable temples wrap around the ear following its contour, providing a more secure fit. Common for children and active wear.', false),
('frame-24', 'frames', 'Optyl frames are notable because they:', '["Are the heaviest plastic", "Are a hypoallergenic, memory plastic that is very lightweight", "Cannot be adjusted", "Are identical to zyl"]', 1, 'Optyl is a hypoallergenic epoxy resin that is approximately 20% lighter than zyl and has memory (returns to shape when heated).', false),
('frame-25', 'frames', 'When adjusting metal nose pads for a frame that sits too low:', '["Widen the pads apart", "Narrow the pads together (closer)", "Shorten the temples", "Increase pantoscopic tilt"]', 1, 'To raise a frame that sits too low, narrow the nose pads closer together (increase the pad angle) so they grip higher on the nose.', false),
('frame-26', 'frames', 'The datum system of frame measurement:', '["Is the same as the boxing system", "Uses the midline of the lens as the reference", "Has been replaced and is no longer used", "Measures from the optical center"]', 1, 'The datum (continental) system measures the lens width along a horizontal midline, while the boxing system uses a rectangle around the lens shape.', false),
('frame-27', 'frames', 'Spring hinges on frames provide:', '["A fixed, rigid connection", "Temples that flex outward beyond 90 degrees for comfort and durability", "Adjustable nose pads", "A way to fold temples inward"]', 1, 'Spring hinges allow temples to flex outward past their normal position, providing a more comfortable fit and increased durability.', false),
('frame-28', 'frames', 'Nylon (polyamide/grilamid) frame material is known for:', '["Being the most rigid plastic", "Lightweight, flexible, and heat-resistant properties ideal for sports eyewear", "Having the best color options", "Being the same as cellulose acetate"]', 1, 'Nylon/grilamid is lightweight, extremely flexible, heat-resistant, and impact-resistant, making it ideal for sport and safety frames.', false),
('frame-29', 'frames', 'The vertex distance is affected by frame adjustment when:', '["Changing the temple color", "Increasing or decreasing the pantoscopic tilt", "Replacing the nose pads with the same size", "Tightening the hinge screws"]', 1, 'Changing pantoscopic tilt alters how far the lenses sit from the eyes, affecting vertex distance.', false),
('frame-30', 'frames', 'Beryllium as a frame material is valued for:', '["Being the cheapest metal", "Corrosion resistance, flexibility, and lightweight properties", "Its magnetic properties", "Being hypoallergenic for all wearers"]', 1, 'Beryllium is lightweight, flexible, corrosion-resistant, and less expensive than titanium. However, some wearers may have sensitivity to it.', false),
('frame-31', 'frames', 'An aluminum frame is characterized by:', '["Being heavy and rigid", "Lightweight, corrosion-resistant, and easily colored by anodizing", "Being flexible like memory metal", "Being hypoallergenic like titanium"]', 1, 'Aluminum frames are lightweight, corrosion-resistant, and can be anodized to produce vibrant colors.', false),
('frame-32', 'frames', 'A properly fitted frame should have the temples:', '["Touch only at the ear, with space above", "Rest evenly along the side of the head with gentle pressure", "Squeeze tightly against the head", "Not touch the head at all"]', 1, 'Temples should rest evenly along the side of the head with gentle, even pressure — not too tight (headaches) or too loose (slipping).', false),
('frame-33', 'frames', 'The bridge of a frame:', '["Connects the two eyewires across the nose", "Holds the lenses to the temples", "Is the same as the endpiece", "Extends behind the ear"]', 0, 'The bridge connects the two eyewires (lens rims) across the nose and rests on the nose or nose pads.', false),
('frame-34', 'frames', 'When a frame is too wide for a patient''s face:', '["The temples will be too short", "The frame will slide down the nose", "The optical centers may be too far from the patient''s pupils, causing unwanted prism", "The vertex distance will decrease"]', 2, 'If the frame PD is much larger than the patient PD, the optical centers will be far from the patient''s pupils, causing unwanted prismatic effect.', false),

-- RX
('rx-1', 'rx', 'OD refers to:', '["Left eye", "Both eyes", "Right eye", "Near vision"]', 2, 'OD (Oculus Dexter) = Right eye. OS = Left eye. OU = Both eyes.', false),
('rx-2', 'rx', 'In the prescription -2.50 -1.00 x180, the "-1.00" represents:', '["Sphere power", "Cylinder power", "Add power", "Prism"]', 1, 'The second number is the cylinder power, which corrects astigmatism.', false),
('rx-3', 'rx', 'The axis in a prescription indicates:', '["The amount of astigmatic correction", "The orientation (meridian) where no cylinder power exists", "The add power for reading", "The prism direction"]', 1, 'The axis (1-180) indicates the meridian where zero cylinder power is placed.', false),
('rx-4', 'rx', 'Add power in a prescription is used to correct:', '["Myopia", "Hyperopia", "Astigmatism", "Presbyopia"]', 3, 'The add power provides additional plus power for near vision to compensate for presbyopia.', false),
('rx-5', 'rx', 'To transpose +2.00 -1.50 x090 to plus cylinder form, the result is:', '["+0.50 +1.50 x180", "+3.50 +1.50 x180", "+0.50 -1.50 x180", "+2.00 +1.50 x090"]', 0, 'Transposition: (1) +2.00+(-1.50)=+0.50 (2) Change cyl sign: +1.50 (3) Axis+90=180. Result: +0.50 +1.50 x180.', false),
('rx-6', 'rx', 'The spherical equivalent of -4.00 -2.00 x180 is:', '["-3.00", "-5.00", "-6.00", "-4.00"]', 1, 'Spherical equivalent = Sphere + (Cylinder / 2) = -4.00 + (-1.00) = -5.00.', false),
('rx-7', 'rx', 'A compound myopic astigmatic prescription has:', '["Plus power in both meridians", "Minus power in both meridians", "Plus in one, minus in the other", "Plano in one meridian"]', 1, 'Compound myopic astigmatism means both principal meridians have minus power.', false),
('rx-8', 'rx', 'Slab-off (bicentric grinding) is applied to which lens?', '["The most minus lens", "The most plus (or least minus) lens", "Both lenses equally", "Only the right lens"]', 0, 'Slab-off (bicentric grinding) is applied to the most minus (or least plus) lens to correct vertical imbalance at reading level. It creates base-up prism. Reverse slab-off is applied to the most plus lens.', false),
('rx-9', 'rx', 'Vertex distance compensation is necessary for prescriptions exceeding:', '["±1.00 D", "±2.00 D", "±4.00 D", "±6.00 D"]', 2, 'Vertex distance compensation is needed for prescriptions over ±4.00 D.', false),
('rx-10', 'rx', 'A prescription reads -3.00 -1.50 x045. What is the power in the 45-degree meridian?', '["-3.00 D", "-4.50 D", "-1.50 D", "-2.25 D"]', 0, 'The axis indicates where no cylinder power exists, so at 045 the power is the sphere alone: -3.00 D. The full cylinder is at 90 degrees away (135 degrees).', false),
('rx-11', 'rx', 'What type of astigmatism does the prescription +1.00 -2.50 x090 represent?', '["Simple myopic astigmatism", "Compound myopic astigmatism", "Mixed astigmatism", "Simple hyperopic astigmatism"]', 2, 'The power in one meridian is +1.00 (hyperopic) and in the other is +1.00 + (-2.50) = -1.50 (myopic). Plus in one and minus in the other is mixed astigmatism.', false),
('rx-12', 'rx', 'The abbreviation "OU" on a prescription means:', '["Right eye", "Left eye", "Both eyes", "Near vision only"]', 2, 'OU (Oculus Uterque) means both eyes. OD = right eye, OS = left eye.', false),
('rx-13', 'rx', 'When transposing -1.00 +2.00 x090 to minus cylinder, the result is:', '["+1.00 -2.00 x180", "-1.00 -2.00 x180", "+1.00 +2.00 x180", "+3.00 -2.00 x180"]', 0, 'Transposition: (1) -1.00 + (+2.00) = +1.00 sphere; (2) change cylinder sign: -2.00; (3) rotate axis 90 degrees: 180. Result: +1.00 -2.00 x180.', false),
('rx-14', 'rx', 'What does "DV" or "DVA" on a prescription indicate?', '["Dual vision", "Distance vision", "Divergent vision", "Digital visual acuity"]', 1, 'DV (or DVA) stands for distance vision (distance visual acuity), the portion of the prescription for far viewing.', false),
('rx-15', 'rx', 'An "add" power of +2.50 means:', '["The total power of the reading lens", "Additional plus power for near vision added to the distance Rx", "The cylinder power at near", "Prism correction for near"]', 1, 'The add power is additional plus power added to the distance prescription for near/reading correction, compensating for presbyopia.', false),
('rx-16', 'rx', 'The spherical equivalent of +2.00 -1.00 x180 is:', '["+1.50 D", "+1.00 D", "+2.50 D", "+0.50 D"]', 0, 'Spherical equivalent = Sphere + (Cylinder / 2) = +2.00 + (-0.50) = +1.50 D.', false),
('rx-17', 'rx', 'A patient with a -6.00 D spectacle Rx at 12mm vertex distance needs a contact lens Rx of approximately:', '["-5.58 D", "-6.00 D", "-6.44 D", "-5.00 D"]', 0, 'Using the vertex distance formula: Fc = Fs / (1 - d*Fs) = -6.00 / (1 - 0.012 * (-6.00)) = -6.00 / 1.072 = approximately -5.60 D. The contact lens power is less minus.', false),
('rx-18', 'rx', 'In power cross notation for -2.00 -1.00 x090, the power at 180 is:', '["-2.00 D", "-3.00 D", "-1.00 D", "-0.50 D"]', 1, 'In power cross notation, the power at the axis meridian (090) is the sphere: -2.00. The power 90 degrees away (180) is sphere + cylinder: -2.00 + (-1.00) = -3.00.', false),
('rx-19', 'rx', 'A "balanced" prescription means:', '["Both lenses are the same power", "A non-prescription lens is given to balance weight", "Both eyes are corrected to approximately equal visual acuity", "The frame is perfectly level"]', 2, 'A balanced prescription aims to correct both eyes to approximately equal best visual acuity, promoting comfortable binocular vision.', false),
('rx-20', 'rx', 'Simple hyperopic astigmatism is defined as:', '["Plus power in both meridians", "Minus power in both meridians", "Plano in one meridian and plus in the other", "Plano in one meridian and minus in the other"]', 2, 'Simple hyperopic astigmatism has one meridian that is emmetropic (plano) and the other is hyperopic (plus). Example: pl +1.00 x180.', false),
('rx-21', 'rx', 'In a prescription, the cylinder axis is measured in:', '["Prism diopters", "Degrees from 1 to 180", "Diopters", "Millimeters"]', 1, 'The cylinder axis is measured in degrees on a scale from 1 to 180, following the TABO standard notation.', false),
('rx-22', 'rx', 'Anisometropia refers to:', '["Equal refractive error in both eyes", "A significant difference in refractive error between eyes", "Astigmatism in both eyes", "Absence of refractive error"]', 1, 'Anisometropia is a condition in which the two eyes have significantly different refractive errors, which can cause problems with binocular vision.', false),
('rx-23', 'rx', 'The tentative add power for a 50-year-old patient is typically:', '["+1.00 D", "+1.50 D", "+2.00 D", "+2.50 D"]', 2, 'The typical starting add power by age: 40-45 is +1.00, 45-50 is +1.50, 50-55 is +2.00, 55-60 is +2.25, 60+ is +2.50.', false),
('rx-24', 'rx', 'What does "NV" on a prescription stand for?', '["No vision", "Near vision", "Normal vertex", "Nasal vergence"]', 1, 'NV stands for near vision, referring to the portion of the prescription for close-up viewing.', false),
('rx-25', 'rx', 'Antimetropia is a type of anisometropia where:', '["Both eyes are myopic by different amounts", "One eye is myopic and the other is hyperopic", "Both eyes are hyperopic by different amounts", "Both eyes have equal astigmatism"]', 1, 'Antimetropia is a specific form of anisometropia where one eye is myopic and the other is hyperopic.', false),
('rx-26', 'rx', 'When reading a prescription, x180 means the axis of the cylinder is:', '["Vertical", "Horizontal", "Oblique at 45 degrees", "Oblique at 135 degrees"]', 1, 'Axis 180 is horizontal. Axis 090 is vertical. Axes 045 and 135 are oblique.', false),
('rx-27', 'rx', 'A prescription for OD: +3.00 DS means the right eye has:', '["Sphere and cylinder power", "Sphere power only, no astigmatism", "Distance and near power", "Prism and sphere power"]', 1, 'DS (Diopters Sphere) indicates sphere power only with no cylinder component. The right eye has +3.00 D of sphere with no astigmatism.', false),
('rx-28', 'rx', 'Residual astigmatism is the astigmatism that:', '["Is fully corrected by spectacle lenses", "Remains when corneal astigmatism is corrected by a contact lens", "Is caused by the frame", "Only appears at near distance"]', 1, 'Residual astigmatism is the internal (lenticular) astigmatism that remains after corneal astigmatism is neutralized by a contact lens.', false),
('rx-29', 'rx', 'What is the purpose of a "BVD" notation on a prescription?', '["Back vertex distance for vertex compensation", "Binocular vision disorder notation", "Base value for disparity", "Bifocal vertical decentration"]', 0, 'BVD (Back Vertex Distance) is the distance from the back of the spectacle lens to the front of the cornea, critical for vertex compensation in high prescriptions.', false),
('rx-30', 'rx', 'A plano lens has a power of:', '["+1.00 D", "-1.00 D", "0.00 D (no refractive power)", "+0.50 D"]', 2, 'A plano (Pl) lens has zero refractive power. It is used for non-prescription protective eyewear or to balance when one eye needs no correction.', false),

-- PRISM
('prism-1', 'prism', 'Light passing through a prism is deviated toward the:', '["Apex", "Base", "Center", "Edge"]', 1, 'Light is always deviated toward the base of the prism.', false),
('prism-2', 'prism', 'One prism diopter deviates light:', '["1 cm at 10 meters", "1 mm at 1 meter", "1 cm at 1 meter", "10 cm at 1 meter"]', 2, 'One prism diopter deviates light 1 centimeter at a distance of 1 meter.', false),
('prism-3', 'prism', 'Base In (BI) prism is used to correct:', '["Eso deviations (eye turns inward)", "Exo deviations (eye turns outward)", "Hyper deviations", "Hypo deviations"]', 1, 'BI prism corrects exo deviations where the eye turns outward.', false),
('prism-4', 'prism', 'When splitting 6 prism diopters Base Out horizontally, the result is:', '["6 BO OD only", "3 BI OD, 3 BI OS", "3 BO OD, 3 BO OS", "6 BO OS only"]', 2, 'Horizontal prism is split evenly with the same base direction: 3 BO each eye.', false),
('prism-5', 'prism', 'For a plus lens, decentering the optical center inward creates:', '["Base Out prism", "Base In prism", "Base Up prism", "No prismatic effect"]', 1, 'For plus lenses, prism base is in the SAME direction as decentration. Inward = Base In.', false),
('prism-6', 'prism', 'Fresnel press-on prism is used primarily for:', '["Permanent prism correction", "Cosmetic purposes", "Temporary or diagnostic prism", "Impact resistance"]', 2, 'Fresnel prism is a thin press-on prism used for temporary or diagnostic purposes.', false),
('prism-7', 'prism', 'When splitting vertical prism of 4 BU OD, the correct split is:', '["2 BU OD, 2 BU OS", "4 BU OD, 0 OS", "2 BU OD, 2 BD OS", "2 BD OD, 2 BU OS"]', 2, 'Vertical prism is split with OPPOSITE base direction in the other eye: 2 BU OD, 2 BD OS.', false),
('prism-8', 'prism', 'Prentice''s Rule states that prism (in prism diopters) equals:', '["Power x distance (cm from OC)", "Power / distance", "Distance / power", "Power x distance (mm)"]', 0, 'Prentice''s Rule: P = F x d, where P is prism in prism diopters, F is lens power in diopters, and d is decentration in centimeters from the optical center.', false),
('prism-9', 'prism', 'A patient looks 5mm below the optical center of a -4.00 D lens. How much prism is induced?', '["0.5 prism diopters", "1.0 prism diopters", "2.0 prism diopters", "4.0 prism diopters"]', 2, 'Using Prentice''s Rule: P = F x d = 4.00 x 0.5 cm = 2.0 prism diopters.', false),
('prism-10', 'prism', 'When looking through a minus lens below the optical center, the induced prism base direction is:', '["Base up", "Base down", "Base in", "Base out"]', 1, 'In a minus lens, the image shifts toward the apex (thinner edge). Looking below OC in a minus lens induces base-down prism (image appears higher).', false),
('prism-11', 'prism', 'When looking through a plus lens below the optical center, the induced prism base direction is:', '["Base up", "Base down", "Base in", "Base out"]', 0, 'In a plus lens, the image shifts toward the base (thicker edge). Looking below OC in a plus lens induces base-up prism.', false),
('prism-12', 'prism', 'Horizontal prism is typically split between the two eyes by:', '["Placing all prism in the dominant eye", "Using the SAME base direction in both eyes", "Splitting equally with the SAME base direction (BI or BO) in both eyes", "Splitting equally with OPPOSITE base directions"]', 2, 'Horizontal prism is split with the SAME base direction in both eyes (e.g., 2 BI OD and 2 BI OS for 4 BI total). This differs from vertical prism which uses opposite directions.', false),
('prism-13', 'prism', 'Prism base-in (BI) is prescribed to treat:', '["Esophoria/esotropia", "Exophoria/exotropia", "Hyperphoria", "Hypophoria"]', 1, 'Base-in prism moves the image nasally, helping patients with exophoria/exotropia (outward eye deviation) by reducing the demand on convergence.', false),
('prism-14', 'prism', 'Prism base-out (BO) is prescribed to treat:', '["Exophoria", "Esophoria/esotropia", "Hypertropia", "Presbyopia"]', 1, 'Base-out prism moves the image temporally, helping patients with esophoria/esotropia (inward eye deviation) by reducing convergence demand.', false),
('prism-15', 'prism', 'The resultant prism of 3 prism diopters BO and 4 prism diopters BU in the same eye is approximately:', '["7 prism diopters", "1 prism diopter", "5 prism diopters", "12 prism diopters"]', 2, 'Resultant prism is calculated using the Pythagorean theorem: sqrt(3^2 + 4^2) = sqrt(9+16) = sqrt(25) = 5 prism diopters.', false),
('prism-16', 'prism', 'Prism thickness is greatest at the:', '["Apex", "Base", "Optical center", "Edge closest to the nose"]', 1, 'A prism is thickest at the base and thinnest at the apex. This is fundamental to how prism bends light toward the base.', false),
('prism-17', 'prism', 'Compounding prism means combining:', '["Two prisms with bases in opposite directions", "Two prisms with bases in the same direction", "A prism with a spherical lens", "A prism with a cylindrical lens"]', 1, 'Compounding prism combines two prisms with bases in the same direction, increasing the total prismatic effect.', false),
('prism-18', 'prism', 'Resolving prism means:', '["Combining prisms in the same direction", "Finding a single equivalent prism from two oblique prisms", "Removing prism from a lens", "Splitting prism between two eyes"]', 1, 'Resolving prism means finding a single equivalent resultant prism from two prisms at different orientations, using vector addition.', false),
('prism-19', 'prism', 'Yoked (conjugate) prisms move both eyes in:', '["Opposite directions", "The same direction", "Only horizontally", "Only vertically"]', 1, 'Yoked (conjugate) prisms shift the visual field in the same direction for both eyes, moving both eyes together (e.g., both right, or both up).', false),
('prism-20', 'prism', 'A patient with a right hyperphoria would benefit from:', '["Base-up prism OD", "Base-down prism OD (or base-up OS)", "Base-in prism OD", "Base-out prism OD"]', 1, 'Right hyperphoria means the right eye drifts upward. Base-down prism OD (or equivalently base-up prism OS) moves the image up, relieving the upward deviation.', false),
('prism-21', 'prism', 'The prismatic effect at the reading level of a bifocal depends primarily on:', '["Frame color", "Distance Rx power and seg drop", "Add power only", "Lens material only"]', 1, 'The prismatic effect at the reading level of a bifocal depends on the distance prescription power and the distance from the OC to the reading level (seg drop), per Prentice''s Rule.', false),
('prism-22', 'prism', 'Prism by decentration means:', '["Adding a separate prism to the lens", "Moving the optical center of the lens to induce prism", "Using a Fresnel press-on prism", "Tilting the lens in the frame"]', 1, 'Prism by decentration moves the optical center of the lens away from the patient''s visual axis, inducing prismatic effect per Prentice''s Rule without grinding prism.', false),
('prism-23', 'prism', 'The unit of measurement for prism power is:', '["Diopter", "Prism diopter (delta)", "Millimeter", "Degree"]', 1, 'Prism power is measured in prism diopters (represented by the Greek letter delta). One prism diopter deviates light 1 cm at 1 meter.', false),
('prism-24', 'prism', 'In a plus lens, the base of the effective prism at any point is oriented toward:', '["The optical center", "Away from the optical center", "The apex of the lens", "The temporal side always"]', 0, 'In a plus lens (thickest at center), the base of the effective prism at any point is oriented toward the optical center (thickest part).', false),
('prism-25', 'prism', 'In a minus lens, the base of the effective prism at any point is oriented:', '["Toward the optical center", "Away from the optical center (toward the edge)", "Always base up", "Always base down"]', 1, 'In a minus lens (thickest at edge), the base of the effective prism at any point is oriented away from the optical center toward the thicker edge.', false),
('prism-26', 'prism', 'Vertical imbalance at the reading level is most problematic with which type of Rx?', '["Equal Rx in both eyes", "Anisometropia (unequal Rx)", "Low myopia in both eyes", "Emmetropia"]', 1, 'Anisometropia causes unequal prismatic effects at the reading level, creating vertical imbalance that can cause diplopia or discomfort.', false),
('prism-27', 'prism', 'To calculate vertical imbalance at the reading level, you apply Prentice''s Rule using:', '["The add power of each eye", "The distance Rx power and the drop from each OC to the reading level", "The seg height only", "The PD measurement"]', 1, 'Vertical imbalance is calculated by applying Prentice''s Rule (P = F x d) to each eye using the distance Rx and the distance from each optical center to the reading level.', false),

-- MEASUREMENTS
('meas-1', 'measurements', 'The near PD is typically how much less than the distance PD?', '["1mm", "2mm", "3mm", "5mm"]', 2, 'Near PD is approximately 3mm less than distance PD due to convergence.', false),
('meas-2', 'measurements', 'Where is the fitting cross of a progressive lens positioned?', '["At the lower lid margin", "At the center of the pupil", "At the top of the frame", "2mm below pupil center"]', 1, 'The fitting cross of a progressive lens is positioned at the center of the pupil.', false),
('meas-3', 'measurements', 'Standard vertex distance for spectacle lenses is approximately:', '["5-8mm", "8-10mm", "12-14mm", "18-20mm"]', 2, 'Standard vertex distance is 12-14mm.', false),
('meas-4', 'measurements', 'For every 2 degrees of pantoscopic tilt, you should:', '["Decrease seg height by 1mm", "Add 1mm to seg height", "Decrease PD by 1mm", "Increase vertex distance by 2mm"]', 1, 'For every 2 degrees of pantoscopic tilt, add 1mm to the seg height of progressive lenses.', false),
('meas-5', 'measurements', 'Monocular PDs are preferred over binocular PDs because:', '["They are easier to measure", "They account for facial asymmetry", "They are only needed for bifocals", "They are always equal on both sides"]', 1, 'Monocular PDs are more accurate because faces are rarely perfectly symmetrical.', false),
('meas-6', 'measurements', 'A bifocal segment is typically placed at:', '["The upper pupil margin", "The center of the pupil", "The lower lid margin", "The bottom of the frame"]', 2, 'Standard bifocal seg placement is at the lower lid margin.', false),
('meas-7', 'measurements', 'The most common flat-top bifocal segment width is:', '["22mm", "25mm", "28mm", "35mm"]', 2, 'The FT-28 (flat-top 28mm) is the most commonly prescribed bifocal segment.', false),
('meas-8', 'measurements', 'Incorrect PD in high-powered lenses primarily causes:', '["Lens discoloration", "Unwanted prismatic effect", "Change in add power", "Coating failure"]', 1, 'Misaligned optical centers cause unwanted prismatic effect per Prentice''s Rule.', false),
('meas-9', 'measurements', 'The "A" measurement in the boxing system represents:', '["The bridge size", "The horizontal width of the lens opening", "The vertical depth of the lens opening", "The temple length"]', 1, 'The "A" (or eye size) is the horizontal width of the lens opening measured at the widest point in the boxing system.', false),
('meas-10', 'measurements', 'The "B" measurement in the boxing system represents:', '["The bridge size", "The horizontal width of the lens", "The vertical depth of the lens opening", "The diagonal of the lens"]', 2, 'The "B" measurement is the vertical depth (height) of the lens opening in the boxing system.', false),
('meas-11', 'measurements', 'The "DBL" measurement refers to:', '["Lens diameter", "Distance between lenses (bridge size)", "Distance bifocal length", "Double base lens"]', 1, 'DBL (Distance Between Lenses) is the bridge size -- the shortest horizontal distance between the two lenses.', false),
('meas-12', 'measurements', 'The effective diameter (ED) of a lens is:', '["The same as the A measurement", "The longest diagonal of the lens shape times 2", "Twice the longest radius from the geometric center to the edge", "The B measurement plus the bridge"]', 2, 'The effective diameter (ED) is twice the longest radius measured from the geometric center of the lens opening to its farthest edge.', false),
('meas-13', 'measurements', 'Minimum blank size (MBS) is calculated as:', '["A + DBL", "ED + decentration + 2mm", "A + B + DBL", "ED x 2"]', 1, 'Minimum blank size = ED + total decentration + 2mm (for edging). This ensures the lens blank is large enough to cut the finished lens.', false),
('meas-14', 'measurements', 'The frame PD is calculated as:', '["A + DBL", "A + B", "DBL + temple length", "A x 2"]', 0, 'Frame PD (also called geometric center distance) = A measurement + DBL (bridge size). This is the distance between the geometric centers of the two lens openings.', false),
('meas-15', 'measurements', 'Total decentration per eye is calculated as:', '["Patient PD - Frame PD", "(Frame PD - Patient PD) / 2", "Frame PD / 2", "A - DBL"]', 1, 'Decentration per eye = (Frame PD - Patient PD) / 2. This tells you how far to move each optical center inward from the geometric center.', false),
('meas-16', 'measurements', 'Segment height for a flat-top bifocal is typically measured from:', '["The top of the lens to the seg line", "The bottom of the lens to the top of the seg", "The pupil center to the bottom of the frame", "The geometric center to the seg line"]', 1, 'Seg height is measured from the lowest point of the lens (in the frame) vertically to the top of the bifocal segment line.', false),
('meas-17', 'measurements', 'Pantoscopic tilt is the angle at which the frame:', '["Tilts inward toward the nose", "Tilts outward at the top", "Tilts forward at the bottom, angling lenses away from the face at top", "Tilts backward at the bottom"]', 2, 'Pantoscopic tilt is the forward tilt of the bottom of the frame, angling the top of the lenses away from the face. Typical is 8-12 degrees.', false),
('meas-18', 'measurements', 'For every degree of pantoscopic tilt, the optical center should be lowered by:', '["0.5mm", "1.0mm", "0.5mm per degree for each 1mm of vertex distance", "2.0mm"]', 0, 'The general rule is to lower the optical center by 0.5mm for each degree of pantoscopic tilt to keep the optical axis aligned with the visual axis.', false),
('meas-19', 'measurements', 'Face form (wrap angle) refers to:', '["The vertical tilt of the frame", "The curve of the frame front as viewed from above", "The pupillary distance", "The temple bend angle"]', 1, 'Face form (or wrap angle) is the horizontal curvature of the frame front as viewed from above. Typical is about 5-8 degrees.', false),
('meas-20', 'measurements', 'Vertex distance is typically measured as:', '["Center of the lens to center of the eye", "Back surface of the lens to the front of the cornea", "Front surface of the lens to the retina", "Edge of the frame to the ear"]', 1, 'Vertex distance is the distance from the back (ocular) surface of the spectacle lens to the front of the cornea, typically about 12-14mm.', false),
('meas-21', 'measurements', 'The standard temple length options are typically:', '["120, 130, 140, 150mm", "135, 140, 145, 150mm", "100, 110, 120, 130mm", "140, 150, 160, 170mm"]', 1, 'Standard temple lengths come in 135, 140, 145, and 150mm, though other sizes exist. The most common is 140mm.', false),
('meas-22', 'measurements', 'Monocular PD is measured from:', '["The center of one pupil to the center of the other", "The center of the bridge of the nose to the center of each pupil", "The temporal edge of one eye to the nasal edge of the other", "The inner canthus to the outer canthus"]', 1, 'Monocular PD is measured from the center of the bridge of the nose to the center of each pupil. This gives a PD for each eye individually (right and left).', false),
('meas-23', 'measurements', 'The typical adult binocular PD range is:', '["45-55mm", "54-74mm", "75-85mm", "80-90mm"]', 1, 'The average adult binocular PD ranges from about 54 to 74mm, with the mean around 63mm for women and 65mm for men.', false),
('meas-24', 'measurements', 'An OC height (optical center height) is measured from:', '["The top of the frame to the pupil", "The bottom of the lens to the center of the pupil", "The geometric center to the top of the frame", "The bridge to the pupil center"]', 1, 'OC height is measured from the lowest point of the lens opening (inside the frame) vertically up to the center of the patient''s pupil.', false),
('meas-25', 'measurements', 'In progressive lenses, the corridor length is the distance between:', '["The fitting cross and the near reference point", "The top of the frame and the bottom", "The distance OC and the seg line", "The right and left optical centers"]', 0, 'The corridor length in a progressive lens is the distance from the fitting cross (distance reference point) down to the near reference point, typically 14-18mm.', false),
('meas-26', 'measurements', 'The "datum" line in the boxing system is:', '["The vertical center line of the lens", "The horizontal line midway between the top and bottom of the box", "The line connecting the two optical centers", "The line at the base of the frame"]', 1, 'The datum line is the horizontal line midway between the top and bottom of the box (rectangle) enclosing the lens shape in the boxing system.', false),
('meas-27', 'measurements', 'When ordering lenses, which measurement determines if a specific frame can be used with the patient''s PD?', '["Temple length", "Minimum blank size", "B measurement", "Lens material"]', 1, 'Minimum blank size calculation determines if an available lens blank is large enough for the frame after decentration. If the required MBS exceeds available blanks, the frame/lens combination will not work.', false),
('meas-28', 'measurements', 'The 4-point touch adjustment ensures the frame:', '["Has equal lens sizes", "Sits level by touching on both nosepads and both ear pieces simultaneously", "Has the correct PD", "Has the correct seg height"]', 1, 'The 4-point touch means the frame, when placed on a flat surface, touches at all four points (both nosepads and both temple tips) simultaneously, indicating it is properly aligned and level.', false),

-- ANSI
('ansi-1', 'ansi', 'The ANSI standard for prescription dress eyewear is:', '["Z87.1", "Z80.1", "Z80.3", "Z136.1"]', 1, 'ANSI Z80.1 is for prescription dress lenses. Z87.1 is for safety eyewear.', false),
('ansi-2', 'ansi', 'The sphere power tolerance for lenses 0.00 to ±6.50 D is:', '["±0.10 D", "±0.13 D", "±0.18 D", "±0.25 D"]', 1, 'Per ANSI Z80.1, sphere power tolerance for 0.00 to ±6.50 D is ±0.13 D.', false),
('ansi-3', 'ansi', 'The axis tolerance for a cylinder power of 0.75 to 1.50 D is:', '["±2°", "±3°", "±5°", "±7°"]', 1, 'For cylinder powers of 0.75 to 1.50 D, axis tolerance is ±3°.', false),
('ansi-4', 'ansi', 'The FDA drop-ball test uses a steel ball of what diameter?', '["1/2 inch", "5/8 inch", "3/4 inch", "1 inch"]', 1, 'The FDA drop-ball test uses a 5/8-inch steel ball dropped from 50 inches.', false),
('ansi-5', 'ansi', 'The segment height tolerance per ANSI Z80.1 is:', '["±0.5mm", "±1.0mm", "±2.0mm", "±3.0mm"]', 1, 'ANSI Z80.1 allows ±1.0mm tolerance for vertical segment position.', false),
('ansi-6', 'ansi', 'Safety eyewear is governed by which ANSI standard?', '["Z80.1", "Z87.1", "Z80.3", "Z80.5"]', 1, 'ANSI Z87.1 governs safety eyewear with stricter impact resistance requirements.', false),
('ansi-7', 'ansi', 'A lensometer is used to verify all of the following EXCEPT:', '["Sphere power", "Cylinder axis", "Impact resistance", "Add power"]', 2, 'A lensometer verifies power, axis, prism, and add. Impact resistance uses the FDA drop-ball test.', false),
('ansi-8', 'ansi', 'The axis tolerance for cylinder power above 1.50 D is:', '["±2°", "±3°", "±5°", "±7°"]', 0, 'For cylinder power above 1.50 D, axis tolerance is ±2° — the tightest tolerance.', false),
('ansi-9', 'ansi', 'Add power tolerance for multifocal lenses up to +4.00 D is:', '["±0.08 D", "±0.12 D", "±0.15 D", "±0.25 D"]', 1, 'Per ANSI Z80.1, add power tolerance up to +4.00 D is ±0.12 D.', false),
('ansi-10', 'ansi', 'Lenses should be free of visible defects in the central:', '["10mm zone", "20mm zone", "30mm zone", "50mm zone"]', 2, 'ANSI requires lenses to be free of visible defects in the central 30mm zone.', false),
('ansi-11', 'ansi', 'According to ANSI Z80.1, the tolerance for sphere power between 0 and ±6.50 D is:', '["±0.09 D", "±0.13 D", "±0.15 D", "±0.25 D"]', 1, 'ANSI Z80.1 specifies ±0.13 D tolerance for sphere powers between 0 and ±6.50 D.', false),
('ansi-12', 'ansi', 'For ANSI Z80.1, the cylinder power tolerance for cylinders up to ±2.00 D is:', '["±0.09 D", "±0.13 D", "±0.15 D", "±0.20 D"]', 1, 'Cylinder powers up to ±2.00 D have a tolerance of ±0.13 D per ANSI Z80.1.', false),
('ansi-13', 'ansi', 'ANSI Z80.1 requires that the axis tolerance for a cylinder of -0.50 D is:', '["±7°", "±5°", "±3°", "±14°"]', 3, 'For cylinder powers from 0.25 to 0.50 D, the axis tolerance is ±14°.', false),
('ansi-14', 'ansi', 'What is the ANSI axis tolerance for a cylinder power of -1.00 D?', '["±2°", "±3°", "±5°", "±7°"]', 3, 'For cylinder powers from 0.75 to 1.50 D, the axis tolerance is ±7°.', false),
('ansi-15', 'ansi', 'The ANSI axis tolerance for a cylinder power of -3.00 D is:', '["±2°", "±3°", "±5°", "±7°"]', 1, 'For cylinder powers over 2.50 D, the axis tolerance is ±3°.', false),
('ansi-16', 'ansi', 'According to ANSI Z80.1, the horizontal prism imbalance tolerance between the two lenses is:', '["0.25Δ", "0.33Δ", "0.50Δ", "0.67Δ"]', 3, 'ANSI Z80.1 allows up to 0.67Δ (2/3Δ) horizontal prism imbalance between the two lenses.', false),
('ansi-17', 'ansi', 'The vertical prism imbalance tolerance per ANSI Z80.1 is:', '["0.25Δ", "0.33Δ", "0.50Δ", "0.67Δ"]', 1, 'ANSI Z80.1 allows up to 0.33Δ (1/3Δ) vertical prism imbalance between the two lenses.', false),
('ansi-18', 'ansi', 'ANSI Z87.1 covers standards for:', '["Ophthalmic prescription lenses", "Safety eyewear", "Sunglasses", "Contact lenses"]', 1, 'ANSI Z87.1 is the standard for occupational and educational personal eye and face protection devices (safety eyewear).', false),
('ansi-19', 'ansi', 'High-velocity impact resistance testing per ANSI Z87.1 uses a steel ball of what diameter?', '["1/4 inch", "3/8 inch", "1/2 inch", "1 inch"]', 0, 'ANSI Z87.1 high-velocity impact testing uses a 1/4 inch steel ball fired at the lens.', false),
('ansi-20', 'ansi', 'The FDA requires all dress (non-safety) lenses to pass:', '["ANSI Z87.1 high-velocity test", "The 1-inch steel ball drop test", "The 5/8 inch steel ball drop test at 50 inches", "No impact test is required"]', 2, 'Per FDA 21 CFR 801.410, all dress lenses must withstand impact from a 5/8 inch steel ball dropped from 50 inches.', false),
('ansi-21', 'ansi', 'ANSI Z80.1 tolerance for sphere power above ±6.50 D is:', '["±0.13 D", "±0.20 D", "±0.25 D", "±2% of sphere power"]', 2, 'For sphere powers above ±6.50 D, the tolerance increases to ±0.25 D.', false),
('ansi-22', 'ansi', 'Per ANSI Z80.1, the cylinder power tolerance for cylinders above ±2.00 D and up to ±4.50 D is:', '["±0.13 D", "±0.15 D", "±0.20 D", "±0.25 D"]', 1, 'Cylinder powers above ±2.00 D and up to ±4.50 D have a tolerance of ±0.15 D.', false),
('ansi-23', 'ansi', 'Safety frames per ANSI Z87.1 must be marked with:', '["The letter \"S\"", "The letter \"Z87\"", "The manufacturer logo only", "No marking is required"]', 1, 'ANSI Z87.1 requires safety frames to be marked with "Z87" on the frame front and temples.', false),
('ansi-24', 'ansi', 'ANSI Z80.3 covers standards for:', '["Dress eyeglasses", "Non-prescription sunglasses", "Safety eyewear", "Contact lenses"]', 1, 'ANSI Z80.3 covers requirements for non-prescription sunglasses and fashion eyewear.', false),
('ansi-25', 'ansi', 'The prism reference point (PRP) tolerance for horizontal placement per ANSI Z80.1 is:', '["±0.5mm", "±1.0mm", "±2.5mm", "±5.0mm"]', 1, 'The PRP must be within ±1.0mm of the specified horizontal position per ANSI Z80.1.', false),
('ansi-26', 'ansi', 'According to ANSI Z87.1, which marking indicates a lens meets high-impact requirements?', '["Z87", "Z87+", "Z80.1", "ANSI-HI"]', 1, 'The "+" marking (Z87+) indicates the lens meets high-impact requirements per ANSI Z87.1.', false),
('ansi-27', 'ansi', 'The ANSI Z80.1 tolerance for add power above +4.00 D is:', '["±0.12 D", "±0.15 D", "±0.18 D", "±0.25 D"]', 2, 'Add power tolerance above +4.00 D is ±0.18 D per ANSI Z80.1.', false),
('ansi-28', 'ansi', 'ANSI Z80.1 specifies that seg placement (vertical) tolerance for multifocals is:', '["±0.5mm", "±1.0mm", "±2.0mm", "±3.0mm"]', 1, 'Segment height (vertical placement) tolerance is ±1.0mm per ANSI Z80.1.', false),
('ansi-29', 'ansi', 'The minimum center thickness for safety lenses (non-prescription) per ANSI Z87.1 is:', '["1.0mm", "2.0mm", "3.0mm", "4.0mm"]', 2, 'ANSI Z87.1 requires a minimum center thickness of 3.0mm for non-prescription safety lenses.', false),
('ansi-30', 'ansi', 'ANSI Z80.1 axis tolerance for a cylinder power of -2.25 D is:', '["±2°", "±3°", "±5°", "±7°"]', 2, 'For cylinder powers from 1.75 to 2.50 D, the axis tolerance is ±5°.', false),

-- DEFINITIONS
('def-1', 'definitions', 'A diopter is the reciprocal of:', '["Index of refraction", "Focal length in meters", "Lens thickness", "Pupillary distance"]', 1, 'A diopter (D) = 1 / focal length in meters.', false),
('def-2', 'definitions', 'Anisometropia is defined as:', '["Different image sizes between the eyes", "A significant difference in refractive error between the two eyes", "Misalignment of the eyes", "Double vision"]', 1, 'Anisometropia is a significant difference in refractive error between the two eyes (typically >1.00 D).', false),
('def-3', 'definitions', 'Accommodation refers to:', '["The bending of light by the cornea", "The ability of the crystalline lens to change shape for focusing", "The movement of the eyes inward", "The adjustment of pupil size"]', 1, 'Accommodation is the crystalline lens changing shape to focus on near objects.', false),
('def-4', 'definitions', 'Esotropia describes an eye that turns:', '["Outward", "Upward", "Inward", "Downward"]', 2, 'Esotropia is a strabismus where the eye turns inward. "Eso" = inward.', false),
('def-5', 'definitions', 'The minimum blank size formula is:', '["ED + decentration", "A + DBL", "ED + 2(decentration)", "A + B + DBL"]', 2, 'MBS = ED + 2(decentration).', false),
('def-6', 'definitions', 'Decentration is calculated as:', '["(Frame PD - Patient PD)", "(Frame PD - Patient PD) / 2", "(Patient PD - Frame PD) / 2", "Frame PD + Patient PD"]', 1, 'Decentration per lens = (Frame PD - Patient PD) / 2.', false),
('def-7', 'definitions', 'The FTC Eyeglass Rule requires:', '["All lenses be polycarbonate", "Prescribers to provide patients with their prescription", "Opticians to diagnose eye conditions", "Lenses to pass the drop-ball test"]', 1, 'The FTC Eyeglass Rule (1978) requires prescribers to provide patients with a copy of their prescription.', false),
('def-8', 'definitions', 'Chromatic aberration is:', '["Distortion at the lens edge", "Color fringing caused by the lens separating white light", "Loss of contrast in the center", "A coating defect"]', 1, 'Chromatic aberration is color fringing caused by the lens dispersing light. Lower Abbe value = more aberration.', false),
('def-9', 'definitions', 'Amblyopia (lazy eye) is:', '["A misalignment of the eyes", "Reduced vision in one eye not fully correctable with lenses", "An age-related condition", "Double vision"]', 1, 'Amblyopia is reduced vision in one eye due to abnormal visual development, not fully correctable with lenses.', false),
('def-10', 'definitions', 'Back vertex power is:', '["The power of the front surface", "The power measured from the back surface, as read by a lensometer", "The combined power times thickness", "The power of the eye itself"]', 1, 'Back vertex power is measured from the back surface and is what the lensometer reads and the Rx specifies.', false),
('def-11', 'definitions', 'The optical center of a lens is:', '["The geometric center of the lens shape", "The point through which light passes undeviated", "The thickest point of the lens", "The point where the lens contacts the frame"]', 1, 'The optical center is the point on a lens through which light passes without being deviated (bent).', false),
('def-12', 'definitions', 'Vertex distance is:', '["The distance between the two lenses", "The distance from the back surface of the lens to the front of the cornea", "The thickness of the lens at its center", "The distance from the lens to the retina"]', 1, 'Vertex distance is the distance from the back (ocular) surface of the spectacle lens to the front of the cornea, typically about 12-14mm.', false),
('def-13', 'definitions', 'Pantoscopic tilt is:', '["The tilt of the lens toward the cheek at the bottom", "The tilt of the lens away from the face", "The horizontal angle of the frame", "The wrap angle of the frame around the face"]', 0, 'Pantoscopic tilt is the inward tilt of the bottom of the frame/lens toward the cheeks, typically 8-12 degrees.', false),
('def-14', 'definitions', 'Retinoscopy is:', '["An imaging test of the retina", "An objective method to determine refractive error by observing the reflex from the retina", "A subjective refraction technique", "A test for color vision deficiency"]', 1, 'Retinoscopy is an objective technique where the examiner observes the retinal reflex to determine the refractive error.', false),
('def-15', 'definitions', 'Anisometropia is:', '["Equal refractive error in both eyes", "A significant difference in refractive error between the two eyes", "An irregular pupil shape", "Unequal pupil sizes"]', 1, 'Anisometropia is a condition where the two eyes have significantly different refractive errors.', false),
('def-16', 'definitions', 'Chromatic aberration is:', '["A lens defect causing color fringing because different wavelengths focus at different points", "A coating defect on the lens", "Distortion caused by lens thickness", "The color tint applied to a lens"]', 0, 'Chromatic aberration occurs because a lens refracts different wavelengths (colors) of light by different amounts, causing color fringing.', false),
('def-17', 'definitions', 'The Abbe value (V-number) of a lens material measures:', '["Impact resistance", "UV protection level", "Dispersion (chromatic aberration)", "Scratch resistance"]', 2, 'The Abbe value quantifies a material''s dispersion. Higher Abbe values mean less chromatic aberration. Crown glass has ~59, polycarbonate ~30.', false),
('def-18', 'definitions', 'Emmetropia is:', '["Nearsightedness", "Farsightedness", "The condition where the eye has no refractive error", "Unequal vision between the two eyes"]', 2, 'Emmetropia is the ideal refractive state where parallel light focuses directly on the retina without correction.', false),
('def-19', 'definitions', 'Phoria refers to:', '["A constant eye turn visible at all times", "A latent tendency for the eyes to deviate, kept in check by fusion", "An involuntary rhythmic eye movement", "A drooping eyelid"]', 1, 'A phoria is a latent deviation of the eyes that is controlled by fusion. It is only revealed when binocular vision is disrupted (e.g., cover test).', false),
('def-20', 'definitions', 'Tropia (strabismus) is:', '["A latent eye deviation", "A manifest (constant) eye turn visible without dissociation", "Normal binocular alignment", "An involuntary eye movement"]', 1, 'A tropia (strabismus) is a manifest, constant misalignment of the eyes that is present even with both eyes open.', false),
('def-21', 'definitions', 'The pupillary distance (PD) is:', '["The distance from the pupil to the retina", "The distance between the centers of the pupils of the two eyes", "The diameter of the pupil", "The distance from the cornea to the lens"]', 1, 'PD is the distance (in mm) between the centers of the two pupils, used to align the optical centers of lenses.', false),
('def-22', 'definitions', 'An anti-reflective (AR) coating works by:', '["Absorbing all reflected light", "Using destructive interference to cancel reflected light waves", "Adding a dark tint to the lens", "Increasing the index of refraction"]', 1, 'AR coatings use thin layers that create destructive interference, canceling reflected light waves and allowing more light to pass through.', false),
('def-23', 'definitions', 'The datum line (center line) of a frame is:', '["The line along the top of the frame", "The horizontal line bisecting the lens opening", "The bridge of the frame", "The line connecting the temples"]', 1, 'The datum line is a horizontal line that bisects the lens opening into equal upper and lower halves, used as a reference for measurements.', false),
('def-24', 'definitions', 'Convergence is:', '["The eyes turning outward", "The simultaneous inward turning of both eyes to focus on a near object", "The dilation of the pupils", "The flattening of the cornea"]', 1, 'Convergence is the simultaneous inward rotation of both eyes to maintain single binocular vision when viewing a near object.', false),
('def-25', 'definitions', 'Accommodation is:', '["The adjustment of pupil size", "The change in shape of the crystalline lens to focus at different distances", "The movement of the eye muscles", "The adaptation to dark conditions"]', 1, 'Accommodation is the process by which the crystalline lens changes shape (becomes more convex) to increase its power for near focus.', false),
('def-26', 'definitions', 'Index of refraction is:', '["The weight of a lens material", "The ratio of the speed of light in a vacuum to its speed in the material", "The thickness of the lens", "The color of the material"]', 1, 'Index of refraction (n) = speed of light in vacuum / speed of light in the material. Higher index means thinner lenses for the same power.', false),
('def-27', 'definitions', 'The segment height (seg height) is measured from:', '["The top of the lens to the seg line", "The lowest point of the lens to the top of the segment", "The optical center to the seg line", "The pupil center to the frame top"]', 1, 'Segment height is measured from the lowest point of the lens (in the frame) to the top of the multifocal segment.', false),
('def-28', 'definitions', 'A plano lens has:', '["+1.00 D power", "-1.00 D power", "Zero refractive power", "Variable power"]', 2, 'A plano lens has zero refractive power (0.00 D). It does not converge or diverge light.', false),
('def-29', 'definitions', 'The effective diameter (ED) of a lens is:', '["The A measurement of the frame", "Twice the longest radius from the geometric center to the edge of the lens", "The diagonal measurement of the lens", "The diameter of the optical zone"]', 1, 'ED is twice the longest radius measured from the geometric center of the lens shape to any point on the edge.', false),
('def-30', 'definitions', 'Total internal reflection occurs when:', '["Light hits a convex surface", "Light passes from a denser to a less dense medium at an angle greater than the critical angle", "Light is absorbed by the lens", "Light passes through a prism"]', 1, 'Total internal reflection occurs when light traveling in a denser medium hits the boundary at an angle exceeding the critical angle, reflecting all light back.', false);

-- ============================================
-- STUDY MATERIAL
-- ============================================
INSERT INTO study_material (category_id, section_title, content, display_order) VALUES
-- ANATOMY
('anatomy', 'The Eye — External Structures', 'The eye is protected and supported by several external structures:

• **Orbit** — The bony socket that houses the eye, made up of seven bones. It protects the globe from trauma.

• **Eyelids (Palpebrae)** — Protect the eye from debris and distribute tears across the cornea with each blink. The upper lid is more mobile and covers more of the cornea.

• **Conjunctiva** — A thin, transparent mucous membrane that lines the inner surface of the eyelids (palpebral conjunctiva) and covers the anterior sclera (bulbar conjunctiva). It produces mucus to help lubricate the eye.

• **Lacrimal System** — Produces, distributes, and drains tears. The lacrimal gland (located superiorly and laterally) secretes tears that wash across the eye and drain through the puncta into the nasolacrimal duct.

• **Extraocular Muscles** — Six muscles control eye movement:
  - Medial Rectus → moves eye inward (adduction)
  - Lateral Rectus → moves eye outward (abduction)
  - Superior Rectus → moves eye upward
  - Inferior Rectus → moves eye downward
  - Superior Oblique → rotates eye inward and downward
  - Inferior Oblique → rotates eye outward and upward', 1),

('anatomy', 'The Globe — Layers of the Eye', 'The eyeball (globe) has three main layers:

**1. Fibrous Tunic (Outer Layer)**
• **Sclera** — The "white of the eye," a tough, opaque tissue that maintains the shape of the eye and protects internal structures. It is continuous with the cornea anteriorly.
• **Cornea** — The transparent, avascular front surface of the eye. It provides approximately **two-thirds (about 43 diopters)** of the eye''s total refractive power. It has five layers: epithelium, Bowman''s membrane, stroma, Descemet''s membrane, and endothelium.

**2. Vascular Tunic (Middle Layer / Uvea)**
• **Iris** — The colored part of the eye that controls the size of the pupil and regulates the amount of light entering the eye.
• **Ciliary Body** — Produces aqueous humor and contains the ciliary muscle, which controls accommodation (focusing at different distances) by changing the shape of the crystalline lens.
• **Choroid** — A highly vascular layer that supplies nutrients and oxygen to the retina. It lies between the sclera and retina.

**3. Neural Tunic (Inner Layer)**
• **Retina** — The light-sensitive layer containing photoreceptors:
  - **Rods** (~120 million) — Responsible for dim-light (scotopic) and peripheral vision. They do not detect color.
  - **Cones** (~6 million) — Responsible for bright-light (photopic) vision, color perception, and fine detail. Concentrated in the **macula**.
• **Macula Lutea** — The central area of the retina responsible for sharp, central vision.
• **Fovea Centralis** — The center of the macula with the highest concentration of cones. Provides the sharpest visual acuity.
• **Optic Disc** — Where the optic nerve exits the eye. It has no photoreceptors, creating the **blind spot**.', 2),

('anatomy', 'Internal Structures & Refractive Media', '**Aqueous Humor**
• A clear fluid produced by the ciliary body that fills the anterior and posterior chambers (between the cornea and the lens).
• Provides nutrients to the cornea and lens, and maintains intraocular pressure (IOP).
• Drains through the **trabecular meshwork** into **Schlemm''s canal**. Blocked drainage can lead to glaucoma.

**Crystalline Lens**
• A biconvex, transparent structure located behind the iris.
• Provides approximately **one-third** of the eye''s total refractive power (about 15-20 diopters).
• Changes shape during **accommodation** — becomes more convex for near vision, flatter for distance vision.
• Loss of lens flexibility with age causes **presbyopia** (typically begins around age 40).
• Cloudiness of the lens is called a **cataract**.

**Vitreous Humor**
• A clear, gel-like substance filling the space between the lens and the retina (vitreous chamber).
• Helps maintain the shape of the eye and holds the retina in place.

**Refractive Path of Light:**
Cornea → Aqueous Humor → Pupil → Crystalline Lens → Vitreous Humor → Retina', 3),

('anatomy', 'Common Refractive Errors', '**Emmetropia** — Normal vision; light focuses directly on the retina without correction.

**Myopia (Nearsightedness)**
• The eye is too long or the cornea too steep, causing light to focus in front of the retina.
• Corrected with **minus (concave/diverging)** lenses.
• Distant objects appear blurry; near vision is relatively clear.

**Hyperopia (Farsightedness)**
• The eye is too short or the cornea too flat, causing light to focus behind the retina.
• Corrected with **plus (convex/converging)** lenses.
• Near objects are more blurry; some distance blur may also occur.

**Astigmatism**
• The cornea or lens has an irregular shape (like a football rather than a basketball), causing light to focus at multiple points.
• Corrected with **cylindrical** lenses that have power in one specific meridian.
• The Rx includes a cylinder power and axis.

**Presbyopia**
• Age-related loss of accommodation due to hardening of the crystalline lens.
• Corrected with **plus power for near** (reading glasses, bifocals, progressives).
• Typically becomes noticeable around age **40**.

**Aphakia**
• Absence of the crystalline lens (usually after cataract surgery without an IOL implant).
• Requires high-plus correction (approximately +10.00 to +14.00 D).', 4),

-- LENSES
('lenses', 'Lens Types and Forms', '**Single Vision Lenses**
• Have one prescription power throughout the entire lens.
• Used to correct myopia, hyperopia, or astigmatism.

**Multifocal Lenses**

• **Bifocals** — Two distinct viewing zones: distance on top, near (segment/seg) on bottom.
  - Common styles: Flat-Top (D-seg/straight-top) 28mm, Flat-Top 35mm, Round seg, Executive (Franklin)
  - The **Executive** (Franklin) bifocal has a seg that extends the full width of the lens.
  - The seg line is the dividing line between distance and near.

• **Trifocals** — Three zones: distance (top), intermediate (middle), near (bottom).
  - The intermediate zone is typically half the add power.

• **Progressive Addition Lenses (PALs)** — No visible lines; a smooth, gradual transition from distance through intermediate to near.
  - Advantages: cosmetically appealing, no image jump, continuous vision at all distances.
  - Disadvantages: peripheral distortion/swim, adaptation period required, narrower intermediate and near zones.
  - The fitting cross is used for alignment and is positioned at the center of the pupil.

**Lens Forms (Meniscus)**
• Most ophthalmic lenses are **meniscus** shaped — convex on the front (base curve) and concave on the back.
• **Plus lenses** — Thicker in the center, thinner at the edges.
• **Minus lenses** — Thinner in the center, thicker at the edges.
• **Plano lenses** — No refractive power.', 1),

('lenses', 'Lens Materials', '**CR-39 (Columbia Resin #39)**
• Index of refraction: **1.50**
• The standard plastic lens material.
• Lightweight, good optical clarity, accepts tints well.
• Lower impact resistance than polycarbonate or Trivex.

**Polycarbonate**
• Index of refraction: **1.586**
• High impact resistance — required by FDA for children and safety eyewear.
• Thinner and lighter than CR-39.
• Built-in UV protection.
• Lower Abbe value (30) — more chromatic aberration.
• Requires scratch-resistant coating (softer material).

**Trivex**
• Index of refraction: **1.53**
• Excellent impact resistance (comparable to polycarbonate).
• Superior optical clarity — higher Abbe value (45) than polycarbonate.
• Lightest lens material available.
• Built-in UV protection.

**High-Index Plastics (1.60, 1.67, 1.74)**
• Thinner and lighter for strong prescriptions.
• Higher index = thinner lens but lower Abbe value (more chromatic aberration).
• 1.74 is the thinnest plastic lens material currently available.
• Recommended for prescriptions above ±4.00 D.

**Crown Glass**
• Index of refraction: **1.523**
• Excellent optical clarity, scratch-resistant.
• Heavy and prone to shattering — rarely used today.
• Abbe value: 59 (best optical quality).

**Abbe Value** — A measure of chromatic aberration (color fringing). Higher Abbe = less distortion.
| Material      | Index | Abbe Value |
|---------------|-------|-----------|
| CR-39         | 1.50  | 58        |
| Crown Glass   | 1.523 | 59        |
| Trivex        | 1.53  | 45        |
| Polycarbonate | 1.586 | 30        |
| Hi-Index 1.60 | 1.60  | 36        |
| Hi-Index 1.67 | 1.67  | 32        |
| Hi-Index 1.74 | 1.74  | 33        |', 2),

('lenses', 'Lens Treatments and Coatings', '**Anti-Reflective (AR) Coating**
• Reduces reflections from the lens surfaces, allowing more light to pass through.
• Improves visual clarity, especially for night driving and computer use.
• Reduces glare and ghosting; makes lenses appear nearly invisible.
• Applied to both front and back surfaces for best results.

**Scratch-Resistant Coating**
• A hard coating applied to protect the lens surface.
• Required for polycarbonate and high-index lenses (softer materials).
• Does not make lenses scratch-proof, only scratch-resistant.

**UV Protection**
• Blocks harmful ultraviolet radiation (UV-A and UV-B).
• Polycarbonate and Trivex have built-in 100% UV protection.
• CR-39 and other materials require a UV coating to be added.
• UV exposure can contribute to cataracts, macular degeneration, and pterygium.

**Photochromic Lenses**
• Darken automatically in UV light (outdoors) and return to clear indoors.
• Do not fully darken inside a car (windshields block UV).
• Newer generations activate and fade faster than older versions.
• Example brand: Transitions.

**Polarized Lenses**
• Eliminate reflected glare from flat surfaces (water, roads, snow).
• Contain a filter that blocks horizontally oriented light.
• Excellent for driving, fishing, and outdoor activities.
• May interfere with viewing LCD screens.

**Blue Light Filtering**
• Reduces exposure to high-energy visible (HEV) blue light from digital screens.
• May help reduce digital eye strain.', 3),

('lenses', 'Lens Surfacing and Optical Concepts', '**Base Curve**
• The front (convex) curve of the lens.
• Determined by the prescription and lens design.
• A flatter base curve = lower number; a steeper base curve = higher number.
• Choosing the correct base curve minimizes peripheral aberrations.

**Nominal Lens Formula (Approximate):**
Front Surface Power + Back Surface Power = Total Power
Example: +6.00 base curve + (-8.00) = -2.00 D lens

**True Power (Compensated):**
Uses the lensmaker''s equation which accounts for lens thickness.

**Focal Length:**
f (in meters) = 1 / D (diopter power)
• A +2.00 D lens has a focal length of 0.50 m (50 cm).
• A -4.00 D lens has a focal length of -0.25 m (-25 cm).

**Transposition** — Converting between plus cylinder and minus cylinder forms:
1. Add the sphere and cylinder together to get the new sphere.
2. Change the sign of the cylinder.
3. Change the axis by 90 degrees.

Example: +2.00 -1.00 x090 → +1.00 +1.00 x180

**Optical Center** — The point on the lens where light passes through without deviation (no prismatic effect). The optical center should align with the patient''s pupil center.

**Vertex Distance** — The distance between the back surface of the lens and the front of the cornea (typically 12-14mm). Vertex distance compensation is needed for prescriptions over ±4.00 D.', 4),

-- FRAMES
('frames', 'Frame Measurements (Boxing System)', 'The **Boxing System** is the standard method for measuring frames used in opticianry.

**Key Measurements:**
• **A (Eye Size)** — The horizontal width of the lens opening (widest point of the box).
• **B (Vertical Size)** — The vertical height of the lens opening (tallest point of the box).
• **DBL (Bridge Size)** — The distance between the two lenses at the narrowest point of the bridge.
• **ED (Effective Diameter)** — The longest diagonal measurement of the lens opening. Used to determine minimum blank size.
• **Temple Length** — The length of the temple piece, measured from the hinge to the end of the temple tip.

**Frame PD = A + DBL**
This is also called the **Geometric Center Distance (GCD)**.

**Minimum Blank Size (MBS):**
MBS = ED + 2(decentration)
Decentration = (Frame PD - Patient PD) / 2

This tells you the smallest lens blank that will fill the frame after the optical center has been positioned correctly.

**Datum Line** — The horizontal line that divides the lens opening exactly in half vertically. This is also called the 180-degree line.', 1),

('frames', 'Frame Types and Styles', '**Full-Rim Frames**
• The frame completely surrounds the lens.
• Most durable and secure; holds lenses firmly in place.
• Available in the widest variety of materials and styles.

**Semi-Rimless (Nylon Cord/Groove)**
• Frame rim covers only the top of the lens; bottom is held by a nylon cord fitted into a groove cut into the lens edge.
• Lightweight and less visible than full-rim frames.
• The lens must have a groove (bevel) on the lower edge.

**Rimless (Drill-Mount)**
• No frame around the lenses; lenses are attached directly to the bridge and temples via drilled holes and screws/bushings.
• Most lightweight and least visible.
• Lenses must be impact-resistant material (polycarbonate or Trivex recommended).
• More fragile and prone to loosening.

**Frame Categories by Material:**

**Metal Frames**
• Monel — Base metal alloy, affordable, may cause allergic reactions (contains nickel).
• Titanium — Lightweight, hypoallergenic, corrosion-resistant, strong. Premium material.
• Beta Titanium — More flexible than pure titanium.
• Stainless Steel — Affordable, lightweight, hypoallergenic.
• Beryllium — Resistant to corrosion, good for high-acid-content skin.
• Memory Metal (Flexon) — Returns to original shape when bent.

**Plastic Frames**
• Zyl (Zylonite/Cellulose Acetate) — Most common plastic frame material. Easy to adjust with heat, available in many colors.
• Propionate (Nylon-based) — Lightweight, hypoallergenic. Harder to adjust than zyl.
• Optyl — Epoxy resin; lightweight, holds adjustments well, memory plastic.
• TR-90 (Grilamid) — Very flexible and lightweight; popular for sports frames.
• Carbon Fiber — Extremely strong and lightweight.', 2),

('frames', 'Frame Adjustments and Fitting', '**Standard Fitting Alignment:**
• Frame should sit level on the face.
• Temples should touch the ear at the mastoid bone and curve down gently.
• Nosepads (or bridge) should distribute weight evenly on both sides of the nose.
• Lenses should be close to the eyes (vertex distance ~12-14mm) but not touching eyelashes.

**Common Adjustments:**

• **Pantoscopic Tilt** — The frame tilts so the bottom of the lens is closer to the face than the top. Standard tilt is about **8-12 degrees**. This helps align the lens with the natural downward reading gaze.

• **Retroscopic Tilt** — The opposite of pantoscopic tilt; the top of the lens is closer to the face. Rarely desired.

• **Face Form (Wrap)** — The curve of the frame front as seen from above. Slight face form is normal; ensures the frame follows the curvature of the face.

• **Temple Spread** — Adjusting temples in or out for comfortable fit against the sides of the head.

• **Vertex Distance** — Adjusting the distance between the lens and the eye. Critical for high prescriptions.

**Adjustment Tools and Techniques:**
• Heat plastic frames before adjusting to avoid breakage (frame warmer at about 250-275°F / 120-135°C).
• Never apply heat directly to lenses.
• Use pliers with nylon jaws or protective sleeves to avoid scratching.
• Metal frames can be adjusted without heat.', 3),

-- RX
('rx', 'Reading an Ophthalmic Prescription', '**Standard Rx Format:**
OD (Right Eye): Sphere / Cylinder x Axis
OS (Left Eye): Sphere / Cylinder x Axis
Add: (for reading/near vision)

**Example:**
OD: -2.50 -0.75 x 180
OS: -3.00 -1.25 x 010
Add: +2.00

**Components:**

• **Sphere (Sph)** — Corrects myopia (-) or hyperopia (+). Measured in diopters (D).
  - Minus (-) = nearsighted correction (concave/diverging lens)
  - Plus (+) = farsighted correction (convex/converging lens)

• **Cylinder (Cyl)** — Corrects astigmatism. Always accompanied by an axis.
  - Can be written in minus cylinder or plus cylinder form.
  - Ophthalmologists typically write in plus cylinder; optometrists in minus cylinder.

• **Axis** — The meridian (in degrees from 1-180) at which zero cylinder power is placed.
  - Axis 90 = vertical; Axis 180 = horizontal.
  - The axis defines the ORIENTATION of the correction, not the location of the problem.

• **Add Power** — Additional plus power for near vision (presbyopia correction).
  - Always a positive number.
  - Typically ranges from +0.75 to +3.00 D.
  - The same add power applies to both eyes in most prescriptions.

**OD vs OS:**
• OD = Oculus Dexter = Right Eye
• OS = Oculus Sinister = Left Eye
• OU = Oculus Uterque = Both Eyes', 1),

('rx', 'Transposition and Rx Conversion', '**Flat Transposition (Plus to Minus Cylinder or Vice Versa):**
Used to convert between plus and minus cylinder forms.

**Steps:**
1. Algebraically add the sphere and cylinder to get the new sphere.
2. Change the sign of the cylinder (keep the same magnitude).
3. Change the axis by 90° (add or subtract 90; keep between 1-180).

**Example 1:** Convert +1.00 -0.50 x090 to plus cylinder
1. +1.00 + (-0.50) = +0.50 (new sphere)
2. -0.50 → +0.50 (change sign)
3. 090 + 90 = 180 (new axis)
**Answer:** +0.50 +0.50 x180

**Example 2:** Convert -3.25 +1.75 x045 to minus cylinder
1. -3.25 + 1.75 = -1.50 (new sphere)
2. +1.75 → -1.75 (change sign)
3. 045 + 90 = 135 (new axis)
**Answer:** -1.50 -1.75 x135

**Spherical Equivalent:**
Sphere + (Cylinder / 2)
Used for contact lens fitting or quick estimation.

Example: -3.00 -1.00 x180
Spherical Equivalent = -3.00 + (-1.00/2) = -3.00 + (-0.50) = **-3.50**

**Vertex Distance Compensation:**
For Rx over ±4.00 D, the effective power changes as the lens moves closer to or further from the eye.

Compensated Power = D / (1 - d × D)
Where: D = original lens power, d = change in vertex distance in METERS.', 2),

('rx', 'Special Prescriptions and Notations', '**Prism in the Rx:**
• Written as prism amount (in prism diopters Δ) and base direction.
• Base directions: BU (Base Up), BD (Base Down), BI (Base In), BO (Base Out).
• Example: 2Δ BO OD — 2 prism diopters, base out, right eye.

**Slab-Off (Bicentric Grinding):**
• Used to correct vertical imbalance in multifocal lenses when anisometropia (unequal Rx) exists.
• Applied to the lens with the LEAST minus (or MOST plus) power.
• Addresses the differential prismatic effect at the reading level.

**Compound Lenses:**
• A lens that has both spherical and cylindrical power.
• Example: -2.00 -1.50 x180 is a compound myopic astigmatic correction.

**Power Cross:**
• A diagram used to show the power in each meridian of a lens with cylinder.
• For -2.00 -1.00 x180:
  - At 180°: -2.00 (sphere only)
  - At 090°: -3.00 (sphere + cylinder)

**Determining the Type of Prescription:**
• Both meridians minus → Compound Myopic Astigmatism
• Both meridians plus → Compound Hyperopic Astigmatism
• One meridian plano, other minus → Simple Myopic Astigmatism
• One meridian plano, other plus → Simple Hyperopic Astigmatism
• One meridian plus, other minus → Mixed Astigmatism', 3),

-- PRISM
('prism', 'Prism Basics', '**What is Prism?**
Prism bends (deviates) light toward its **base**. The image appears to shift toward the **apex** (the thinnest edge).

**Prism Diopter (Δ)**
One prism diopter deviates light **1 cm at a distance of 1 meter**.

**Uses of Prism in Eyewear:**
• Corrects eye alignment problems (strabismus, phoria)
• Relieves symptoms of binocular vision dysfunction (double vision, eyestrain, headaches)
• Can be ground into the lens (ground-in prism) or applied temporarily (Fresnel press-on prism)

**Base Directions:**
• **BI (Base In)** — The thick edge (base) is toward the nose. Used for exo deviations (eye turns outward).
• **BO (Base Out)** — The thick edge (base) is toward the temples. Used for eso deviations (eye turns inward).
• **BU (Base Up)** — Base is at the top. Used for hyper deviations of the opposite eye or hypo deviations of the same eye.
• **BD (Base Down)** — Base is at the bottom.

**Fresnel Prism:**
• Thin, flexible plastic press-on prism applied to the back surface of the lens.
• Used for temporary or diagnostic prism.
• Reduces visual acuity slightly due to the grooved surface.

**Prism Thinning:**
• Adding equal base-down prism to both lenses (usually in plus prescriptions) to reduce the thick top edge.
• Does not change the prismatic effect because it''s equal in both eyes.', 1),

('prism', 'Prentice''s Rule and Prismatic Effect', '**Prentice''s Rule:**
Δ = c × D

Where:
• Δ = prismatic effect in prism diopters
• c = decentration in CENTIMETERS from the optical center
• D = lens power in diopters (use absolute value)

**Example 1:** A -4.00 D lens, looking 5mm below the optical center.
Δ = 0.5 cm × 4.00 = **2.0Δ**
Direction: For a minus lens, looking below the OC → Base UP (prism is toward the thinner edge, which is the center for minus lenses).

**Example 2:** A +3.00 D lens, decentered 8mm inward.
Δ = 0.8 cm × 3.00 = **2.4Δ Base In**

**Rules for Prism Direction:**
• **Plus lenses:** Prism base is in the SAME direction as decentration.
  - Decentered in → Base In. Decentered down → Base Down.
• **Minus lenses:** Prism base is in the OPPOSITE direction as decentration.
  - Decentered in → Base Out. Decentered down → Base Up.

**Memory aid:** Think of plus lenses as magnifying glasses — they''re thick in the middle, so decentering them moves the thick part (base) in the same direction.

**Compounding and Resolving Prism:**
When prism exists in both horizontal and vertical directions, use the resultant:
Resultant = √(Horizontal² + Vertical²)
Direction (angle) = arctan(Vertical / Horizontal)', 2),

('prism', 'Prescribed Prism and Splitting', '**Prescribed Prism:**
Prism may be prescribed to help align the eyes. It is specified as a diopter amount and a base direction.

**Splitting Prism:**
When total prism is split between two eyes, it is divided equally to reduce lens thickness.

**Horizontal Prism Splitting:**
• BO is split: half in each eye, both BO.
• BI is split: half in each eye, both BI.
• Example: 6Δ BO total → 3Δ BO OD, 3Δ BO OS.

**Vertical Prism Splitting:**
• If prescribed 4Δ BU OD → split as 2Δ BU OD and 2Δ BD OS.
• Vertical prism is split by putting the OPPOSITE base direction in the other eye.

**Verifying Prism with a Lensometer:**
• Place the lens on the lensometer and read the prism at the point that corresponds to the patient''s PD.
• The distance between the target center and the lensometer''s crosshair indicates the amount of prism.
• Each ring on the prism scale typically represents 1Δ.

**Imbalance at Near (for Multifocals):**
• When eyes have different vertical powers and the patient looks through the reading zone, unequal prismatic effects occur.
• This is called **vertical imbalance**.
• Corrected with: slab-off, reverse slab-off, dissimilar segs, or press-on prism.
• **Slab-off** is applied to the most PLUS (or least MINUS) lens.', 3),

-- MEASUREMENTS
('measurements', 'Pupillary Distance (PD)', '**PD (Pupillary Distance)** — The distance between the centers of the pupils, measured in millimeters.

**Types of PD:**
• **Binocular PD** — Total distance from one pupil center to the other (e.g., 64mm).
• **Monocular PD** — Distance from the center of the bridge of the nose to each pupil center individually (e.g., OD 32 / OS 32).
  - Monocular PDs are more accurate because faces are rarely perfectly symmetrical.

**Distance PD vs. Near PD:**
• Distance PD — Measured while the patient looks at a distant target. Used for distance glasses.
• Near PD — Approximately **3mm less** than the distance PD (due to convergence of the eyes for near tasks).
  - For bifocals/progressives, the near PD is critical for proper seg placement.

**Measuring PD:**
1. Stand approximately 16 inches (40 cm) from the patient.
2. Hold a PD ruler against the patient''s brow.
3. Close your right eye, align the zero mark with the patient''s right pupil center.
4. Open your right eye, close your left eye, and read the measurement at the patient''s left pupil.
5. For monocular PDs, measure from the center of the nose bridge to each pupil.

**Why PD Matters:**
• The optical center of the lens must align with the patient''s pupil.
• Incorrect PD causes unwanted prismatic effect (per Prentice''s Rule).
• Even 1-2mm of error can cause eye strain and discomfort, especially in higher Rx.', 1),

('measurements', 'Segment Height and Multifocal Measurements', '**Segment (Seg) Height:**
• The vertical distance from the lowest point of the lens (in the frame) to the top of the bifocal/trifocal segment or the fitting cross of a progressive lens.

**Measuring Seg Height:**
1. Fit the frame on the patient and adjust for proper alignment.
2. Using a marker or ruler, measure from the bottom of the lens opening to:
   - **Bifocal:** The lower eyelid margin (standard placement), typically at the lower pupil margin.
   - **Trifocal:** Typically at the lower pupil margin as well; the intermediate portion sits at pupil center.
   - **Progressive (PAL):** The center of the pupil (the fitting cross goes here).
3. Always measure with the frame properly adjusted on the patient''s face.

**Standard Seg Heights:**
• Bifocal seg is typically placed at the lower lid margin or lower pupil edge.
• Progressive fitting cross is at pupil center.
• A seg set too high → patient uses the reading zone when looking at distance.
• A seg set too low → patient must tilt their head back excessively to read.

**Minimum Fitting Height:**
• Each progressive lens design has a minimum fitting height (typically 14-18mm).
• The frame''s B measurement must accommodate this minimum.

**Seg Width / Type:**
• FT-28: Flat-top seg, 28mm wide — most common bifocal style.
• FT-35: Flat-top seg, 35mm wide — provides a wider near field.
• Round seg: Circular bifocal segment.
• Executive: Full-width segment extending across the entire lens.', 2),

('measurements', 'Vertex Distance and Other Measurements', '**Vertex Distance:**
• The distance from the back surface of the spectacle lens to the front of the cornea.
• Standard vertex distance: **12-14mm**.
• Must be compensated when converting between spectacle and contact lens prescriptions, especially for powers over **±4.00 D**.

**Vertex Distance Compensation Formula:**
Dc = D / (1 - d × D)
• Dc = compensated power
• D = original spectacle power
• d = change in vertex distance in METERS

**Example:** Spectacle Rx -8.00 at 14mm vertex distance. What is the contact lens power?
Dc = -8.00 / (1 - (0.014 × -8.00))
Dc = -8.00 / (1 + 0.112)
Dc = -8.00 / 1.112 = **-7.19 → -7.25 D (rounded)**

**Key Rule:**
• Moving a minus lens closer to the eye → less minus needed.
• Moving a plus lens closer to the eye → more plus needed.

**Pantoscopic Tilt Compensation:**
For every 2 degrees of pantoscopic tilt, add 1mm to the seg height of a progressive lens.

**Wrap Angle / Face Form:**
The curvature of the frame front. Excessive wrap can induce unwanted prismatic and power effects.

**Fitting Triangle / Frame Alignment:**
Ensure the frame is level, the vertex distance is equal for both eyes, and the PD is properly positioned.', 3),

-- ANSI
('ansi', 'ANSI Z80.1 Overview', '**ANSI Z80.1** is the American National Standard for Prescription Ophthalmic Lenses. It establishes tolerances (acceptable limits of variation) for finished prescription lenses.

**Why ANSI Standards Matter:**
• They define the quality control standards for all prescription eyewear.
• Opticians must verify that finished lenses meet ANSI tolerances before dispensing.
• Non-compliant lenses should be rejected and remade.

**The standard covers tolerances for:**
• Sphere power
• Cylinder power
• Cylinder axis
• Add power
• Prismatic effect (prism)
• Prism imbalance between lenses
• Segment placement
• Impact resistance
• Lens surface quality

**Categories of Lenses Under ANSI:**
• **Single Vision**
• **Multifocal** (bifocal, trifocal, progressive)
• **Dress Eyewear** vs. **Safety Eyewear** (safety has tighter tolerances)

**Verification Process:**
Opticians use a **lensometer** (also called a focimeter or vertometer) to verify:
1. Sphere power
2. Cylinder power and axis
3. Prism amount and direction
4. Add power (for multifocals)
5. Optical center position', 1),

('ansi', 'Sphere, Cylinder, and Axis Tolerances', '**Single Vision Lens Tolerances (ANSI Z80.1):**

**Sphere Power Tolerance:**
| Sphere Power        | Tolerance |
|---------------------|-----------|
| 0.00 to ±6.50 D    | ±0.13 D   |
| Above ±6.50 D      | ±0.15 D   |

**Cylinder Power Tolerance:**
| Cylinder Power      | Tolerance |
|---------------------|-----------|
| 0.00 to 2.00 D     | ±0.13 D   |
| 2.12 to 4.50 D     | ±0.15 D   |
| Above 4.50 D        | 4% of cylinder power |

**Cylinder Axis Tolerance:**
| Cylinder Power      | Axis Tolerance |
|---------------------|---------------|
| 0.00 to 0.25 D     | ±14°          |
| 0.25 to 0.50 D     | ±7°           |
| 0.50 to 0.75 D     | ±5°           |
| 0.75 to 1.50 D     | ±3°           |
| Above 1.50 D       | ±2°           |

**Key Points:**
• Higher cylinder powers have tighter axis tolerances because even a small axis error causes more visual disturbance.
• Axis tolerance is most critical — a 5° axis error on a -2.00 cylinder creates more problem than a 0.13 D power error.
• Always verify axis accuracy carefully on the lensometer.', 2),

('ansi', 'Prism, Add Power, and Other Tolerances', '**Prism Tolerance (Unprescribed/Unwanted Prism):**

**Horizontal Prism (at the PRP — Prism Reference Point):**
| Sphere Power        | Tolerance      |
|---------------------|---------------|
| 0.00 to ±3.375 D   | ±0.33Δ per lens |
| Above ±3.375 D     | Determined by 1mm decentration |

**Vertical Prism:**
• Vertical imbalance between the two lenses: ±0.33Δ

**Prescribed Prism Tolerance:**
• ±0.33Δ for horizontal and vertical prism
• Base direction must match the prescription

**Add Power Tolerances (for Multifocals):**
| Add Power           | Tolerance |
|---------------------|-----------|
| Up to +4.00 D       | ±0.12 D   |
| Above +4.00 D       | ±0.18 D   |

**Segment Placement Tolerances:**
• Horizontal seg position: ±1.0mm from specified position
• Vertical seg position (seg height): ±1.0mm from specified position
• Seg tilt: ±2° from horizontal

**Impact Resistance:**
• All dress ophthalmic lenses must pass the FDA drop-ball test (a 5/8-inch steel ball dropped from 50 inches).
• Lenses must withstand impact without fracturing.
• This is a separate requirement from ANSI — it is an FDA regulation (21 CFR 801.410).

**Other Requirements:**
• Lenses should be free of visible defects (waves, bubbles, scratches) in the central 30mm zone.
• Cosmetic defects outside this zone may be acceptable.', 3),

-- DEFINITIONS
('definitions', 'Fundamental Optical Terms', '**Diopter (D)** — The unit of measurement for the refractive power of a lens. It is the reciprocal of the focal length in meters: D = 1/f.

**Index of Refraction** — A number that describes how much a material bends light. Higher index = more bending = thinner lenses. Air = 1.00; CR-39 = 1.50; Polycarbonate = 1.586.

**Focal Point** — The point where parallel light rays converge (plus lens) or appear to diverge from (minus lens) after passing through a lens.

**Focal Length** — The distance from the lens to its focal point. f = 1/D.

**Vergence** — The direction and amount of bending of light rays. Measured in diopters.
• Convergence (+ vergence) — light rays coming together.
• Divergence (- vergence) — light rays spreading apart.

**Refraction** — The bending of light as it passes from one medium to another.

**Snell''s Law** — Describes the relationship between angles of incidence and refraction: n₁ sin θ₁ = n₂ sin θ₂.

**Total Internal Reflection** — When light strikes a boundary at an angle greater than the critical angle, it reflects entirely back into the material.

**Abbe Value (V-number)** — A measure of a material''s dispersion (how much it separates white light into its component colors). Higher Abbe value = less chromatic aberration.

**Chromatic Aberration** — Color fringing around objects, caused by the lens dispersing light into its component wavelengths. More noticeable with low Abbe value materials.', 1),

('definitions', 'Lens and Frame Terminology', '**Optical Center (OC)** — The point on a lens through which light passes without any prismatic deviation.

**Major Reference Point (MRP) / Prism Reference Point (PRP)** — The point at which prism is measured; in lenses without prescribed prism, this coincides with the optical center.

**Geometric Center** — The physical center of the lens opening in the frame. May differ from the optical center.

**Decentration** — Moving the optical center of the lens from the geometric center of the frame to align with the patient''s pupil. Decentration = (Frame PD - Patient PD) / 2.

**Effective Diameter (ED)** — The longest diameter of the lens shape, used to determine the minimum blank size needed.

**Minimum Blank Size (MBS)** — The smallest uncut lens blank that will fill the frame: MBS = ED + 2 × decentration.

**Surfacing** — The process of grinding a lens to the correct curvature and power.

**Edging** — The process of cutting a lens to the shape of the frame.

**Seg Drop** — The vertical distance from the geometric center of the lens to the top of the bifocal segment.

**Base Curve** — The curve on the front surface of the lens from which other curves are calculated.

**Back Vertex Power** — The power of the lens measured from the back surface; this is what the lensometer reads and what the Rx specifies.', 2),

('definitions', 'Clinical and Dispensing Terms', '**Accommodation** — The ability of the crystalline lens to change shape to focus at different distances. Decreases with age (leading to presbyopia).

**Amplitude of Accommodation** — The maximum amount of accommodation available, measured in diopters. Approximate formula: 18.5 - (0.3 × age).

**Convergence** — The inward turning of the eyes to maintain single binocular vision when viewing near objects.

**Anisometropia** — A significant difference in refractive error between the two eyes (typically >1.00 D difference).

**Aniseikonia** — A difference in the perceived image size between the two eyes.

**Amblyopia (Lazy Eye)** — Reduced vision in one eye due to abnormal visual development, not fully correctable with lenses.

**Strabismus** — A misalignment of the eyes. Types:
• Esotropia — eye turns inward
• Exotropia — eye turns outward
• Hypertropia — eye turns upward
• Hypotropia — eye turns downward

**Phoria** — A latent tendency for the eyes to deviate, corrected by the fusion mechanism.
• Esophoria — tendency to turn inward
• Exophoria — tendency to turn outward

**Diplopia** — Double vision. Can be monocular (one eye) or binocular (both eyes).

**Vertex Distance** — Distance from the back of the lens to the cornea (~12-14mm).

**Pantoscopic Tilt** — The angle at which the lower rim of the frame is closer to the face than the upper rim. Standard: 8-12°.

**Retroscopic Tilt** — The reverse of pantoscopic tilt; the upper rim is closer to the face.

**Pupillary Distance (PD)** — Distance between the centers of the pupils.', 3),

('definitions', 'Regulations and Professional Standards', '**ABO (American Board of Opticianry)** — The certifying body for opticians in the United States. The ABO certification demonstrates competency in dispensing ophthalmic eyewear.

**NCLE (National Contact Lens Examiners)** — Certifying body for contact lens fitting.

**FDA (Food and Drug Administration)** — Regulates impact resistance requirements for ophthalmic lenses. All lenses must pass the drop-ball test.

**Drop-Ball Test (21 CFR 801.410):**
• A 5/8-inch (15.88mm) steel ball is dropped from a height of 50 inches (127 cm).
• The lens must not fracture.
• Applies to all dress ophthalmic lenses in the United States.
• Raised center lenses must be tested individually (plus lenses where the center is the thinnest point after edging are exempt from batch testing).

**OSHA (Occupational Safety and Health Administration):**
• Sets workplace safety standards, including requirements for safety eyewear.
• Safety lenses must meet ANSI Z87.1 (not Z80.1) standards — these are stricter.
• Safety lenses must withstand high-velocity impact testing.
• Must be stamped with "Z87" on the lens and frame.

**ANSI Z80.1** — Standard for prescription dress eyewear (the primary standard for ABO).
**ANSI Z87.1** — Standard for safety eyewear (occupational and educational).

**FTC Eyeglass Rule (1978):** Requires prescribers to provide patients with a copy of their prescription immediately after an eye examination.

**Optician Scope of Practice:** Varies by state. Generally, opticians fit and dispense eyewear prescribed by ophthalmologists or optometrists. Opticians do NOT diagnose, treat, or prescribe.', 4);
