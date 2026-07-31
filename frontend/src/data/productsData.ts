export interface ProductItem {
  id: string;
  name: string;
  division: 'General' | 'Hormones' | 'Nutraceuticals' | 'Softgel';
  category: string;
  regulatoryType: 'DRUG' | 'FOOD';
  dosageForm: string;
  phRef?: 'IP' | 'BP' | 'USP' | null;
  availableStrengths: string[];
  composition: string;
  ingredients: string[];
  sourcePdf: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    "id": "p-001",
    "name": "Acebrophylline (SR), Montelukast Sodium & Fexofenadine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Acebrophylline (as Sustained Release)",
      "Montelukast Sodium Equivalent to Montelukast",
      "Fexofenadine Hydrochloride"
    ],
    "composition": " \u2022 Acebrophylline (as Sustained Release) \u2022 Montelukast Sodium Equivalent to Montelukast \u2022 Fexofenadine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-002",
    "name": "Acebrophylline Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Acebrophylline"
    ],
    "composition": " \u2022 Acebrophylline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-003",
    "name": "Aceclofenac & Drotaverine Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "200 mg",
      "50 mg"
    ],
    "ingredients": [
      "Aceclofenac",
      "Drotaverine Hydrochloride",
      "Diacerein",
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate"
    ],
    "composition": " \u2022 Aceclofenac \u2022 Drotaverine Hydrochloride \u2022 Diacerein \u2022 Trypsin \u2022 Bromelain \u2022 Rutoside Trihydrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-004",
    "name": "Aceclofenac & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Chlorzoxazone",
      "50000 Armourunitsofenzymaticactivitysuppliedbyapurified concentratewhichhasspecific Trypsinand Chymotrypsinactivityinaratio of approximately six to one."
    ],
    "composition": " \u2022 Aceclofenac \u2022 Paracetamol \u2022 Chlorzoxazone \u2022 50000 Armourunitsofenzymaticactivitysuppliedbyapurified concentratewhichhasspecific Trypsinand Chymotrypsinactivityinaratio of approximately six to one.",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-005",
    "name": "Aceclofenac & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Aceclofenac",
      "Thiocolchicoside"
    ],
    "composition": " \u2022 Aceclofenac \u2022 Thiocolchicoside",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-006",
    "name": "Aceclofenac (SR) & Rabeprazole Sodium (EC) Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Aceclofenac (as sustained release pellets)",
      "Rabeprazole Sodium (as enteric coated pellets)"
    ],
    "composition": " \u2022 Aceclofenac (as sustained release pellets) \u2022 Rabeprazole Sodium (as enteric coated pellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-007",
    "name": "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity)",
      "Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 30, 000 units)"
    ],
    "composition": " \u2022 Aceclofenac \u2022 Paracetamol \u2022 Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity) \u2022 Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 30, 000 units)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-008",
    "name": "Aceclofenac, Paracetamol & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Thiocolchicoside"
    ],
    "composition": " \u2022 Aceclofenac \u2022 Paracetamol \u2022 Thiocolchicoside",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-009",
    "name": "Acitretin Capsules IP",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Acitretin"
    ],
    "composition": " \u2022 Acitretin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-010",
    "name": "Ademetionine (EC) Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "400 mg"
    ],
    "ingredients": [
      "Ademetionine 1, 4\u2013 Butane disulfonate (SD 4) equivalent to Ademetionine ion"
    ],
    "composition": " \u2022 Ademetionine 1, 4\u2013 Butane disulfonate (SD 4) equivalent to Ademetionine ion",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-011",
    "name": "Albendazole Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "400 mg"
    ],
    "ingredients": [
      "Albendazole"
    ],
    "composition": " \u2022 Albendazole",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-012",
    "name": "Alfacalcidol, Calcium Carbonate & Zinc Softgel",
    "division": "Softgel",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "0.25 mcg",
      "500 mg",
      "200 mg",
      "7.5 mg",
      "750 mg",
      "600 mg"
    ],
    "ingredients": [
      "Alfacalcidol 0.25 mcg",
      "Calcium Carbonate 500 mg (Eq. to Elemental Calcium 200 mg)",
      "Zinc Sulphate Monohydrate (Eq. to Elemental Zinc 7.5 mg)",
      "Calcitriol",
      "Calcium Carbonate Equivalent to Elemental Calcium",
      "Zinc Sulphate Monohydrate Equivalent to Elemental Zinc"
    ],
    "composition": " \u2022 Alfacalcidol 0.25 mcg \u2022 Calcium Carbonate 500 mg (Eq. to Elemental Calcium 200 mg) \u2022 Zinc Sulphate Monohydrate (Eq. to Elemental Zinc 7.5 mg) \u2022 Calcitriol \u2022 Calcium Carbonate Equivalent to Elemental Calcium \u2022 Zinc Sulphate Monohydrate Equivalent to Elemental Zinc",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-013",
    "name": "Allylestrenol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg"
    ],
    "ingredients": [
      "Allylestrenol"
    ],
    "composition": " \u2022 Allylestrenol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-014",
    "name": "Alpha Ketoanalogues and Essential Amino Acids Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Alpha-Keto-Isoleucine, Calcium Salt",
      "Alpha-Keto-Leucine, Calcium Salt",
      "Alpha-Keto-Phenylalanine, Calcium Salt",
      "Alpha-Keto-Valine, Calcium Salt",
      "Alpha-Hydroxy Methionine, Calcium Salt",
      "Threonine"
    ],
    "composition": " \u2022 Alpha-Keto-Isoleucine, Calcium Salt \u2022 Alpha-Keto-Leucine, Calcium Salt \u2022 Alpha-Keto-Phenylalanine, Calcium Salt \u2022 Alpha-Keto-Valine, Calcium Salt \u2022 Alpha-Hydroxy Methionine, Calcium Salt \u2022 Threonine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-015",
    "name": "Amisulpride Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "100 mg"
    ],
    "ingredients": [
      "Amisulpride"
    ],
    "composition": " \u2022 Amisulpride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-016",
    "name": "Amitriptyline HCL Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Amitriptyline Hydrochloride Equivalent to Amitriptyline"
    ],
    "composition": " \u2022 Amitriptyline Hydrochloride Equivalent to Amitriptyline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-017",
    "name": "Amlodipine & Atenolol Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "2.5 mg",
      "10 mg",
      "50 mg",
      "25 mg"
    ],
    "ingredients": [
      "Amlodipine Besilate Equivalent to Amlodipine",
      "Atenolol",
      "Amlodipine Besylate Equivalent to Amlodipine",
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform)",
      "Olmesartan Medoxomin",
      "Hydrochlorothiazide"
    ],
    "composition": " \u2022 Amlodipine Besilate Equivalent to Amlodipine \u2022 Atenolol \u2022 Amlodipine Besylate Equivalent to Amlodipine \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform) \u2022 Olmesartan Medoxomin \u2022 Hydrochlorothiazide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-018",
    "name": "Artemether And Lumefantrine Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Artemether",
      "Lumefantrine"
    ],
    "composition": " \u2022 Artemether \u2022 Lumefantrine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-019",
    "name": "Ascorbic Acid (Vitamin C), Sodium Ascorbate & Zinc Chewable Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Ascorbic Acid",
      "Sodium Ascorbate Eq. to Ascorbic Acid",
      "Zinc Citrate",
      "Colour:Sunset Yellow FCF"
    ],
    "composition": " \u2022 Ascorbic Acid \u2022 Sodium Ascorbate Eq. to Ascorbic Acid \u2022 Zinc Citrate \u2022 Colour:Sunset Yellow FCF",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-020",
    "name": "Ascorbic Acid Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 MG",
      "175 MG",
      "147 MG",
      "60 MG",
      "17 MG",
      "20 MG"
    ],
    "ingredients": [
      "Ascorbic Acid",
      "Ascorbic Acid 200 MG",
      "Magnesium Oxide 175 MG",
      "Vitamin EAcetate 147 MG",
      "Coenzyme Q10 60 MG",
      "Zinc Sulphate Monohydrate 17 MG"
    ],
    "composition": " \u2022 Ascorbic Acid \u2022 Ascorbic Acid 200 MG \u2022 Magnesium Oxide 175 MG \u2022 Vitamin EAcetate 147 MG \u2022 Coenzyme Q10 60 MG \u2022 Zinc Sulphate Monohydrate 17 MG",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-021",
    "name": "Aspirin Gastro- resistant & Rosuvastatin Capsules IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg",
      "5 mg",
      "40 mg"
    ],
    "ingredients": [
      "Rosuvastatin Calcium Equivalent to Rosuvastatin (as granules)",
      "Aspirin (asentericcoatedtablet)",
      "Aspirin (asentericcoatedtablets)",
      "Rosuvastatin Calcium Equivalent to Rosuvastatin (as pellets)",
      "Clopidogrel Bisulphate Equivalent to Clopidogrel (aspellets)",
      "Clopidogrel Bisulphate Equivalent to Clopidogrel (as pellets)"
    ],
    "composition": " \u2022 Rosuvastatin Calcium Equivalent to Rosuvastatin (as granules) \u2022 Aspirin (asentericcoatedtablet) \u2022 Aspirin (asentericcoatedtablets) \u2022 Rosuvastatin Calcium Equivalent to Rosuvastatin (as pellets) \u2022 Clopidogrel Bisulphate Equivalent to Clopidogrel (aspellets) \u2022 Clopidogrel Bisulphate Equivalent to Clopidogrel (as pellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-022",
    "name": "Astaxanthin",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "10 %",
      "8 MG",
      "100 MG",
      "2500 MCG",
      "250 MG",
      "10 MG"
    ],
    "ingredients": [
      "Astaxanthin (10 %) 8 MG",
      "Coenzyme Q10 Q10 100 MG",
      "LYCOPENEPOWDER 10 % 2500 MCG",
      "L-Carnitine L-Tartrate 250 MG",
      "Zinc Sulphate Monohydrate 10 MG",
      "PIPERINEPOWDER 95 % 10 MG"
    ],
    "composition": " \u2022 Astaxanthin (10 %) 8 MG \u2022 Coenzyme Q10 Q10 100 MG \u2022 LYCOPENEPOWDER 10 % 2500 MCG \u2022 L-Carnitine L-Tartrate 250 MG \u2022 Zinc Sulphate Monohydrate 10 MG \u2022 PIPERINEPOWDER 95 % 10 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-023",
    "name": "Atenolol Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "25 mg"
    ],
    "ingredients": [
      "Atenolol"
    ],
    "composition": " \u2022 Atenolol",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-024",
    "name": "Atorvastatin & Aspirin Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Atorvastatin Calcium Equivalent to Atorvastatin",
      "Aspirin",
      "Fenofibrate",
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate (as Extended Releaseform)"
    ],
    "composition": " \u2022 Atorvastatin Calcium Equivalent to Atorvastatin \u2022 Aspirin \u2022 Fenofibrate \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate (as Extended Releaseform)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-025",
    "name": "Atorvastatin Calcium & Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg",
      "40 mg"
    ],
    "ingredients": [
      "Atorvastatin Calcium Equivalent to Atorvastatin",
      "Telmisartan"
    ],
    "composition": " \u2022 Atorvastatin Calcium Equivalent to Atorvastatin \u2022 Telmisartan",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-026",
    "name": "Azithromycin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Azithromycin Dihydrate Equivalent to Azithromycin Anhydrous"
    ],
    "composition": " \u2022 Azithromycin Dihydrate Equivalent to Azithromycin Anhydrous",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-027",
    "name": "Benidipine Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "8 mg"
    ],
    "ingredients": [
      "Benidipine"
    ],
    "composition": " \u2022 Benidipine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-028",
    "name": "Beta Carotene",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "30 %",
      "10 mg",
      "70 mcg",
      "2 mg",
      "27.5 mg",
      "30%"
    ],
    "ingredients": [
      "Beta Carotene (30 % Dispersion) 10 mg Selenium (From Selenium Dioxide) 70 mcg Manganese (From Manganese Sulphate) 2 mg Zinc",
      "Sulphate Monohydrate 27.5 mg Copper (From Copper Sulphate Pentahydrat) 2 mg"
    ],
    "composition": " \u2022 Beta Carotene (30 % Dispersion) 10 mg Selenium (From Selenium Dioxide) 70 mcg Manganese (From Manganese Sulphate) 2 mg Zinc \u2022 Sulphate Monohydrate 27.5 mg Copper (From Copper Sulphate Pentahydrat) 2 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-029",
    "name": "Beta Carotene, Alpha Lipoic Acid with Multivitamins & Minerals Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mcg",
      "1500 mcg",
      "100 mg",
      "10 mg",
      "3 mg",
      "1.5 mg"
    ],
    "ingredients": [
      "Methylcobalamin",
      "Alpha Liopoic Acid",
      "Folic Acid",
      "Selenium (as Sodium Selenate)",
      "Calcium Pantothenate",
      "Vitamin B1"
    ],
    "composition": " \u2022 Methylcobalamin \u2022 Alpha Liopoic Acid \u2022 Folic Acid \u2022 Selenium (as Sodium Selenate) \u2022 Calcium Pantothenate \u2022 Vitamin B1",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-030",
    "name": "Betahistine Tablets I.p.",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Betahistine Hydrochloride"
    ],
    "composition": " \u2022 Betahistine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-031",
    "name": "Bilastine & Montelukast Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "400 mg",
      "800 mg",
      "10 mg"
    ],
    "ingredients": [
      "Bilastine",
      "Montelukast Sodium Equivalent to Montelukast",
      "Doxofylline (as Sustained Release)",
      "Desloratadine"
    ],
    "composition": " \u2022 Bilastine \u2022 Montelukast Sodium Equivalent to Montelukast \u2022 Doxofylline (as Sustained Release) \u2022 Desloratadine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-032",
    "name": "Biotin, N-Acetyl Cysteine, Calcium Pantothenateand Minerals Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Biotin",
      "N-Acetyl Cysteine",
      "Calcium Pantothenate",
      "Sodium Selenite Equivalent to Elemental Selenium",
      "Cupric Oxide Equivalent to Elemental Copper",
      "Zinc Oxide Equivalent to Elemental Zinc"
    ],
    "composition": " \u2022 Biotin \u2022 N-Acetyl Cysteine \u2022 Calcium Pantothenate \u2022 Sodium Selenite Equivalent to Elemental Selenium \u2022 Cupric Oxide Equivalent to Elemental Copper \u2022 Zinc Oxide Equivalent to Elemental Zinc",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-033",
    "name": "Bisoprolol Fumarate Tablets USP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Bisoprolol Fumarate"
    ],
    "composition": " \u2022 Bisoprolol Fumarate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-034",
    "name": "Brand Name \u2013 P 2 Levonorgestrel Tablets BP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "0.75 mg"
    ],
    "ingredients": [
      "Levonorgestrel",
      "Titanium Dioxide"
    ],
    "composition": " \u2022 Levonorgestrel \u2022 Titanium Dioxide",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-035",
    "name": "Brandname-toxicon Doxylamine Succinate, Pyridoxine Hydrochloride & Fol ic Acid Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "29 MG",
      "300 MCG",
      "5 MG",
      "30 MCG",
      "2.5 MCG",
      "2 MG"
    ],
    "ingredients": [
      "Doxylamine Succinate",
      "Pyridoxine Hydrochloride",
      "Folic Acid",
      "Titanium Dioxide & Ponceau\u20134 R",
      "CARBONYLIRON 29 MG",
      "FOLICACID 300 MCG"
    ],
    "composition": " \u2022 Doxylamine Succinate \u2022 Pyridoxine Hydrochloride \u2022 Folic Acid \u2022 Titanium Dioxide & Ponceau\u20134 R \u2022 CARBONYLIRON 29 MG \u2022 FOLICACID 300 MCG",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-036",
    "name": "Brivaracetam Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Brivaracetam"
    ],
    "composition": " \u2022 Brivaracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-037",
    "name": "Cabergoline Tablets IP",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "ingredients": [
      "Cabergoline"
    ],
    "composition": " \u2022 Cabergoline",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-038",
    "name": "Calcitriol",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "0.25 mcg"
    ],
    "ingredients": [
      "Calcitriol 0.25 mcg"
    ],
    "composition": " \u2022 Calcitriol 0.25 mcg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-039",
    "name": "Calcium & Vitamin D3 Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 MG",
      "600 IU",
      "750 MG",
      "50 MG",
      "0.25 MCG",
      "7.5 MG"
    ],
    "ingredients": [
      "Calcium Carbonate (Fromanorganicoyster Shell) Equivalent to Elemental Calcium)",
      "Vitamin D3",
      "Calcium Citrate Maleate Equivalent to Elemental Calcium",
      "Calcium Citrate Malate 1250 MG",
      "Vitamin D3 600 IU",
      "Calcium Citrate Malate 750 MG"
    ],
    "composition": " \u2022 Calcium Carbonate (Fromanorganicoyster Shell) Equivalent to Elemental Calcium) \u2022 Vitamin D3 \u2022 Calcium Citrate Maleate Equivalent to Elemental Calcium \u2022 Calcium Citrate Malate 1250 MG \u2022 Vitamin D3 600 IU \u2022 Calcium Citrate Malate 750 MG",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-040",
    "name": "Calcium Citrate Malate, Vitamin D3 & Folic Acid Tablets",
    "division": "Nutraceuticals",
    "category": "Pain & Orthopedics",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1250 MG",
      "1 MG",
      "0.6 MG",
      "2.5 MCG",
      "600 IU",
      "400 MG"
    ],
    "ingredients": [
      "Calcium Carbonate 1250 MG",
      "L-Methylfolate Calcium 1 MG",
      "Pyridoxal-5-Phosphate 0.6 MG",
      "Cyanocobalamin 2.5 MCG",
      "Vitamin D3 STABILIZED 600 IU",
      "Calcium Carbonate 400 MG"
    ],
    "composition": " \u2022 Calcium Carbonate 1250 MG \u2022 L-Methylfolate Calcium 1 MG \u2022 Pyridoxal-5-Phosphate 0.6 MG \u2022 Cyanocobalamin 2.5 MCG \u2022 Vitamin D3 STABILIZED 600 IU \u2022 Calcium Carbonate 400 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-041",
    "name": "Calcium Dobesilate Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Calcium Dobesilate Monohydrate"
    ],
    "composition": " \u2022 Calcium Dobesilate Monohydrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-042",
    "name": "Calcium Orotatewith Vitamin D3 Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "60000I.U.",
      "500 MG",
      "600 IU",
      "225 MG",
      "400 IU",
      "70 MCG"
    ],
    "ingredients": [
      "Calcium Orotate",
      "Vitamin D3",
      "Cholecalciferol ( Vitamin D3) 60, 000 I.U.",
      "Cholecalciferol",
      "Coral Calcium 500 MG",
      "Vitamin D3 STABILIZED 600 IU"
    ],
    "composition": " \u2022 Calcium Orotate \u2022 Vitamin D3 \u2022 Cholecalciferol ( Vitamin D3) 60, 000 I.U. \u2022 Cholecalciferol \u2022 Coral Calcium 500 MG \u2022 Vitamin D3 STABILIZED 600 IU",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-043",
    "name": "Carbohydrate",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "70 G",
      "0 G",
      "24 G",
      "3 G",
      "50 G",
      "500 MG"
    ],
    "ingredients": [
      "CARBOHYDRATE 70 G",
      "SUGAR 0 G",
      "PROTEIN 24 G",
      "FAT 3 G",
      "COLOSTRUM 50 G",
      "Shatavari Extract 500 MG"
    ],
    "composition": " \u2022 CARBOHYDRATE 70 G \u2022 SUGAR 0 G \u2022 PROTEIN 24 G \u2022 FAT 3 G \u2022 COLOSTRUM 50 G \u2022 Shatavari Extract 500 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-044",
    "name": "Carica Papaya Extract",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "350 mg",
      "150 mg"
    ],
    "ingredients": [
      "Carica Papaya Extract 350 mg, Tinospora Cordifolia 150 mg"
    ],
    "composition": " \u2022 Carica Papaya Extract 350 mg, Tinospora Cordifolia 150 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-045",
    "name": "Celecoxib Capsules BP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "ingredients": [
      "Celecoxib"
    ],
    "composition": " \u2022 Celecoxib",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-046",
    "name": "Chlorpheniramine Maleate",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "2 mg",
      "10 mg",
      "5 mg"
    ],
    "ingredients": [
      "Chlorpheniramine Maleate 2 mg Dextromethorphan Hydrobromide 10 mg Phenylephrine Hydrochloride 5 mg"
    ],
    "composition": " \u2022 Chlorpheniramine Maleate 2 mg Dextromethorphan Hydrobromide 10 mg Phenylephrine Hydrochloride 5 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-047",
    "name": "Cilnidipine & Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "40 mg",
      "80 mg",
      "20 mg"
    ],
    "ingredients": [
      "Cilnidipine",
      "Telmisartan",
      "Metoprolol Succinate Equivalent to Metoprplol Tartrate (as extendedreleaseform)",
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform)",
      "Chlorthalidone",
      "Hydrochlorothiazide"
    ],
    "composition": " \u2022 Cilnidipine \u2022 Telmisartan \u2022 Metoprolol Succinate Equivalent to Metoprplol Tartrate (as extendedreleaseform) \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform) \u2022 Chlorthalidone \u2022 Hydrochlorothiazide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-048",
    "name": "Cilnidipine Tablets I.p.",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg",
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Cilnidipine"
    ],
    "composition": " \u2022 Cilnidipine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-049",
    "name": "Cissus Quandragularis Linn Ext",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "400 mg",
      "100 mg"
    ],
    "ingredients": [
      "Cissus Quandragularis Linn Ext 400 mg, Vitex Nirgundo Ext 100 mg, Boswellia Serrata Ext 100 mg,",
      "Withania Somnifera 100 mg"
    ],
    "composition": " \u2022 Cissus Quandragularis Linn Ext 400 mg, Vitex Nirgundo Ext 100 mg, Boswellia Serrata Ext 100 mg, \u2022 Withania Somnifera 100 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-050",
    "name": "Citicoline & Piracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Citicoline Sodium Equivalent to Citicoline",
      "Piracetam"
    ],
    "composition": " \u2022 Citicoline Sodium Equivalent to Citicoline \u2022 Piracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-051",
    "name": "Citicoline Sodium & Piracet am Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Citicoline Sodium",
      "Piracetam"
    ],
    "composition": " \u2022 Citicoline Sodium \u2022 Piracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-052",
    "name": "Citicoline Sodium Tablets I.p.",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Citicoline Sodium Equivalent to Citicoline"
    ],
    "composition": " \u2022 Citicoline Sodium Equivalent to Citicoline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-053",
    "name": "Clindamycin Capsules IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg",
      "300 mg"
    ],
    "ingredients": [
      "Clindamycin Hydrochloride Equivalent to Clindamycin"
    ],
    "composition": " \u2022 Clindamycin Hydrochloride Equivalent to Clindamycin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-054",
    "name": "Clindamycin Phosphate eq. to Clindamycin",
    "division": "Softgel",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "ingredients": [
      "Clindamycin Phosphate eq. to Clindamycin 100 mg Clotrimazole 200 mg",
      "Clindamycin Phosphate Eq. to Clindamycin 100 mg Clotrimazole 100 mg"
    ],
    "composition": " \u2022 Clindamycin Phosphate eq. to Clindamycin 100 mg Clotrimazole 200 mg \u2022 Clindamycin Phosphate Eq. to Clindamycin 100 mg Clotrimazole 100 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-055",
    "name": "Clomifene Citrate Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg",
      "25 mg",
      "50 mg"
    ],
    "ingredients": [
      "Clomifene Citrate"
    ],
    "composition": " \u2022 Clomifene Citrate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-056",
    "name": "Clopidogrel Tablets USP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "PSU",
      "75 mg"
    ],
    "ingredients": [
      "Clopidogrel Bisulfate Equivalent to Clopidogrel"
    ],
    "composition": " \u2022 Clopidogrel Bisulfate Equivalent to Clopidogrel",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-057",
    "name": "Coenzyme Q10",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 MG",
      "180 mg",
      "120 mg",
      "1500 mcg",
      "500 mg",
      "14.9 IU"
    ],
    "ingredients": [
      "Co-enzyme Q 10 100 MG, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, L-Carnitine",
      "500 mg, L-Arginine 100 mg, Vitamin E14.9 IU, Astaxanthin (1 %) 8 mg, Green Tea",
      "Extract 20 mg, Zinc Sulphate 7.5 mg"
    ],
    "composition": " \u2022 Co-enzyme Q 10 100 MG, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, L-Carnitine \u2022 500 mg, L-Arginine 100 mg, Vitamin E14.9 IU, Astaxanthin (1 %) 8 mg, Green Tea \u2022 Extract 20 mg, Zinc Sulphate 7.5 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-058",
    "name": "Coenzyme Q10 & Antioxidant Complex Softgel",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg",
      "500 mg",
      "5000 mcg",
      "8 mg",
      "60 MG",
      "10 %"
    ],
    "ingredients": [
      "Coenzyme Q10 100 mg",
      "L-Carnitine L-Tartrate 500 mg",
      "Lycopene 5000 mcg",
      "Astaxanthin 8 mg",
      "Coenzyme Q10 (Ubiquinone Acetate) 60 MG",
      "Lycopene Powder 10 % 5000 MCG"
    ],
    "composition": " \u2022 Coenzyme Q10 100 mg \u2022 L-Carnitine L-Tartrate 500 mg \u2022 Lycopene 5000 mcg \u2022 Astaxanthin 8 mg \u2022 Coenzyme Q10 (Ubiquinone Acetate) 60 MG \u2022 Lycopene Powder 10 % 5000 MCG",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-059",
    "name": "Coenzyme Q10, L-Arginine & Omega-3 Softgel",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg",
      "500 mg",
      "90 mg",
      "60 mg",
      "70 mcg"
    ],
    "ingredients": [
      "(Ubidecarenone BP) Coenzyme Q10 100 mg L-Arginine 100 mg Omega-3 Fatty acid 500 mg Eq. to Eicosapentaenoic",
      "Acid 90 mg Eq. to Docosahexaenoic Acid 60 mg Selenium Dioxide 70 mcg"
    ],
    "composition": " \u2022 (Ubidecarenone BP) Coenzyme Q10 100 mg L-Arginine 100 mg Omega-3 Fatty acid 500 mg Eq. to Eicosapentaenoic \u2022 Acid 90 mg Eq. to Docosahexaenoic Acid 60 mg Selenium Dioxide 70 mcg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-060",
    "name": "Combipackof",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "A) 1 Mifepristone Tablet Each Uncoated Tablets",
      "Mifepristone",
      "B) 4 Misoprostol Tablets Each Uncoated Tablet",
      "Misoprostol"
    ],
    "composition": " \u2022 A) 1 Mifepristone Tablet Each Uncoated Tablets \u2022 Mifepristone \u2022 B) 4 Misoprostol Tablets Each Uncoated Tablet \u2022 Misoprostol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-061",
    "name": "Combipackof 1 Tabletof Mifepristone and 4 Tablets of Misoprostol",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Combipackof 1 Tabletof Mifepristone and 4 Tablets of Misoprostol"
    ],
    "composition": " \u2022 Combipackof 1 Tabletof Mifepristone and 4 Tablets of Misoprostol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-062",
    "name": "Cranberry Extract",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "200 mg",
      "50 mg",
      "300 mg"
    ],
    "ingredients": [
      "CRANBERRY EXTRACT 200 mg, D-MANNOSE 50 mg",
      "CRANBERRY EXTRACT 300 mg, D-MANNOSE 200 mg"
    ],
    "composition": " \u2022 CRANBERRY EXTRACT 200 mg, D-MANNOSE 50 mg \u2022 CRANBERRY EXTRACT 300 mg, D-MANNOSE 200 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-063",
    "name": "Curcumin",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "25 %",
      "500 mg",
      "10 mg",
      "25%"
    ],
    "ingredients": [
      "Curcumin 25 % 500 mg, Piperine 10 mg"
    ],
    "composition": " \u2022 Curcumin 25 % 500 mg, Piperine 10 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-064",
    "name": "Cyproterone Acetate & Ethinyl Estradiol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "2 mg"
    ],
    "ingredients": [
      "Cyproterone Acetate",
      "Ethinyl Estradiol"
    ],
    "composition": " \u2022 Cyproterone Acetate \u2022 Ethinyl Estradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-065",
    "name": "Dalbergiasissoo Extract",
    "division": "Nutraceuticals",
    "category": "General Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "400 MG",
      "500 MG"
    ],
    "ingredients": [
      "Dalbergiasissoo Extract 400 MG",
      "Cissus Quadrangularis Dry Extract 500 MG"
    ],
    "composition": " \u2022 Dalbergiasissoo Extract 400 MG \u2022 Cissus Quadrangularis Dry Extract 500 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-066",
    "name": "Dapagliflozin & Metformin Hydrochloride (ER) Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "ingredients": [
      "Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin",
      "Metformin Hydrochloride (As Extended Release)"
    ],
    "composition": " \u2022 Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin \u2022 Metformin Hydrochloride (As Extended Release)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-067",
    "name": "Dapoxetine & Sildenafil Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg",
      "60 mg"
    ],
    "ingredients": [
      "Dapoxetine Hydrochloride Equivalent to Dapoxetine",
      "Sildenafil Citrate Equivalent to Sildenafil"
    ],
    "composition": " \u2022 Dapoxetine Hydrochloride Equivalent to Dapoxetine \u2022 Sildenafil Citrate Equivalent to Sildenafil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-068",
    "name": "Deflazacort Tablet",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "6 mg",
      "30 mg",
      "12 mg"
    ],
    "ingredients": [
      "Deflazacort"
    ],
    "composition": " \u2022 Deflazacort",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-069",
    "name": "Dehydroepiandrosterone",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "75 MG",
      "570 MCG",
      "600 IU",
      "100 MG",
      "3 MG"
    ],
    "ingredients": [
      "DEHYDROEPIANDROSTERONE 75 MG",
      "FOLICACID 570 MCG",
      "Vitamin D3 600 IU",
      "Coenzyme Q10 Q10 100 MG",
      "MELATONIN 3 MG",
      "Vitamin D3 STABILIZED 600 IU"
    ],
    "composition": " \u2022 DEHYDROEPIANDROSTERONE 75 MG \u2022 FOLICACID 570 MCG \u2022 Vitamin D3 600 IU \u2022 Coenzyme Q10 Q10 100 MG \u2022 MELATONIN 3 MG \u2022 Vitamin D3 STABILIZED 600 IU",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-070",
    "name": "Dehydroepiandrosterone ((sr)), Folic Acid & Vitamin D3 Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg"
    ],
    "ingredients": [
      "Dehydroepiandrosterone (Micronized) (As Sustained Release)",
      "Folic Acid",
      "Vitamin D3 (Stabilized)"
    ],
    "composition": " \u2022 Dehydroepiandrosterone (Micronized) (As Sustained Release) \u2022 Folic Acid \u2022 Vitamin D3 (Stabilized)",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-071",
    "name": "Desogestrel & Ethinylestradi ol Tablets USP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.150 mg"
    ],
    "ingredients": [
      "Desogestrel",
      "Ethinylestradiol"
    ],
    "composition": " \u2022 Desogestrel \u2022 Ethinylestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-072",
    "name": "Desogestrel and Ethinyloestradiol Tablets U.s.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "0.15 mg"
    ],
    "ingredients": [
      "Desogestrel",
      "Ethinyloestradiol"
    ],
    "composition": " \u2022 Desogestrel \u2022 Ethinyloestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-073",
    "name": "Desogestrel Tablets B.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "75 mcg"
    ],
    "ingredients": [
      "Desogestrel"
    ],
    "composition": " \u2022 Desogestrel",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-074",
    "name": "Desvenlafaxine (ER) Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "50 mg",
      "100 mg"
    ],
    "ingredients": [
      "Desvenlafaxine Succinate Monohydrate Equivalent to Desvenlafaxine"
    ],
    "composition": " \u2022 Desvenlafaxine Succinate Monohydrate Equivalent to Desvenlafaxine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-075",
    "name": "Dexrabeprazole Sodium & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Dexrabeprazole Sodium (as Enteric Coated Pellets)",
      "Domperidone"
    ],
    "composition": " \u2022 Dexrabeprazole Sodium (as Enteric Coated Pellets) \u2022 Domperidone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-076",
    "name": "Dexrabeprazole Sodium Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Dexrabeprazole Sodium"
    ],
    "composition": " \u2022 Dexrabeprazole Sodium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-077",
    "name": "Diacerein Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "Diacerein",
      "Diacertein"
    ],
    "composition": " \u2022 Diacerein \u2022 Diacertein",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-078",
    "name": "Diacerein, Glucosamine Sulphate & Methyl Sulphonyl Methane Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Diacerein",
      "Glucosamine Sulphate Potassium Chloride Equivalent to Glucosamine Sulphate",
      "Methyl Sulphonyl Methane"
    ],
    "composition": " \u2022 Diacerein \u2022 Glucosamine Sulphate Potassium Chloride Equivalent to Glucosamine Sulphate \u2022 Methyl Sulphonyl Methane",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-079",
    "name": "Diclofenac Potassium & Ser ratiopeptidase Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "Diclofenac Potassium",
      "Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 20, 000 units)"
    ],
    "composition": " \u2022 Diclofenac Potassium \u2022 Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 20, 000 units)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-080",
    "name": "Diclofenac Potassium, Paracetamol & Serratiopeptidase Table ts",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "Diclofenac Potassium",
      "Paracetamol",
      "Serratiopeptidase (as Enteric Coated Granules eq. to Enzymaticactivity 30, 000 units)",
      "Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 20, 000 units)"
    ],
    "composition": " \u2022 Diclofenac Potassium \u2022 Paracetamol \u2022 Serratiopeptidase (as Enteric Coated Granules eq. to Enzymaticactivity 30, 000 units) \u2022 Serratiopeptidase (as Enteric Coated Granules eq. to enzymaticactivity 20, 000 units)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-081",
    "name": "Diclofenac Sodium & Thiocolchicoside Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "400 mg",
      "300 mg",
      "60 mg",
      "4 mg",
      "8 mg"
    ],
    "ingredients": [
      "Diclofenac Sodium (asgastroresistantpellets)",
      "Thiocolchicoside (aspellets)",
      "Thiocolchicoside",
      "Diclofenac Sodium (asentericcoatedtablets)",
      "Etodolac",
      "Etoricoxib"
    ],
    "composition": " \u2022 Diclofenac Sodium (asgastroresistantpellets) \u2022 Thiocolchicoside (aspellets) \u2022 Thiocolchicoside \u2022 Diclofenac Sodium (asentericcoatedtablets) \u2022 Etodolac \u2022 Etoricoxib",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-082",
    "name": "Diclofenac Sodium Gastro- Resistant Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Diclofenac Sodium"
    ],
    "composition": " \u2022 Diclofenac Sodium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-083",
    "name": "Dienogest & Ethinylestradiol tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg"
    ],
    "ingredients": [
      "Dienogest",
      "Ethinylestradiol",
      "Approvedcolourused"
    ],
    "composition": " \u2022 Dienogest \u2022 Ethinylestradiol \u2022 Approvedcolourused",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-084",
    "name": "Dienogest Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "2 mg"
    ],
    "ingredients": [
      "Dienogest"
    ],
    "composition": " \u2022 Dienogest",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-085",
    "name": "Diltiazem Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg"
    ],
    "ingredients": [
      "Diltiazem Hydrochloride"
    ],
    "composition": " \u2022 Diltiazem Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-086",
    "name": "Disulfiram Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Disulfiram"
    ],
    "composition": " \u2022 Disulfiram",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-087",
    "name": "Divalproex (ER) Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Divalproex Sodium Equivalent to Valproic Acid"
    ],
    "composition": " \u2022 Divalproex Sodium Equivalent to Valproic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-088",
    "name": "Docusatesodium",
    "division": "Nutraceuticals",
    "category": "General Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "85 %",
      "100 MG",
      "20 %",
      "86 MG",
      "85%"
    ],
    "ingredients": [
      "DOCUSATESODIUM 85 %POWDER 100 MG",
      "SENNADRYEXTRACT 20 % 86 MG"
    ],
    "composition": " \u2022 DOCUSATESODIUM 85 %POWDER 100 MG \u2022 SENNADRYEXTRACT 20 % 86 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-089",
    "name": "Doxecalciferol",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "0.50 mcg",
      "0.25 mcg"
    ],
    "ingredients": [
      "Doxecalciferol 0.50 mcg",
      "Doxecalciferol 0.25 mcg"
    ],
    "composition": " \u2022 Doxecalciferol 0.50 mcg \u2022 Doxecalciferol 0.25 mcg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-090",
    "name": "Doxycycline & Lactic Acid Bacillus Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Doxycycline Hydrochloride Eq. to Doxycycline",
      "Lactic Acid Bacillus"
    ],
    "composition": " \u2022 Doxycycline Hydrochloride Eq. to Doxycycline \u2022 Lactic Acid Bacillus",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-091",
    "name": "Doxylamine Succinate & P yridoxine Hydrochloride Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Doxylamine Succinate",
      "Pyridoxine Hydrochloride"
    ],
    "composition": " \u2022 Doxylamine Succinate \u2022 Pyridoxine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-092",
    "name": "Doxylamine Succinate Tablets USP",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "25 mg"
    ],
    "ingredients": [
      "Doxylamine Succinate"
    ],
    "composition": " \u2022 Doxylamine Succinate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-093",
    "name": "Drospirenone & Ethinylestra diol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "3 mg"
    ],
    "ingredients": [
      "Drospirenone",
      "Ethinylestradiol",
      "Ethinyl Estradiol"
    ],
    "composition": " \u2022 Drospirenone \u2022 Ethinylestradiol \u2022 Ethinyl Estradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-094",
    "name": "Drotaverine Hydrochloride & Mefenamic Acid Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg"
    ],
    "ingredients": [
      "Drotaverine Hydrochloride",
      "Mefenamic Acid"
    ],
    "composition": " \u2022 Drotaverine Hydrochloride \u2022 Mefenamic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-095",
    "name": "Duloxetine Gastro-resistant Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Duloxetine Hydrochloride Equivalent to Duloxetine"
    ],
    "composition": " \u2022 Duloxetine Hydrochloride Equivalent to Duloxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-096",
    "name": "Duloxetine Hydrochloride Gastro-Resistant Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Duloxetine Hydrochloride Equivalent to Duloxetine"
    ],
    "composition": " \u2022 Duloxetine Hydrochloride Equivalent to Duloxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-097",
    "name": "Dutasteride Capsules IP",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "ingredients": [
      "Dutasteride 0.5 mg",
      "Dutasteride"
    ],
    "composition": " \u2022 Dutasteride 0.5 mg \u2022 Dutasteride",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-098",
    "name": "Dydrogesterone Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Dydrogesterone"
    ],
    "composition": " \u2022 Dydrogesterone",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-099",
    "name": "Each",
    "division": "Nutraceuticals",
    "category": "General Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Sachet",
    "phRef": null,
    "availableStrengths": [
      "50 MG",
      "100 MG",
      "1 G"
    ],
    "ingredients": [
      "LACTOBACILLUSACIDOPHILU 312.5 MILLIONSPORES",
      "LACTOBACILLUSRHAMNOSUS 312.5 MILLION SPORES",
      "BIFIDOBACTERIUM LONGUM 312.5 MILLIONSPORES",
      "SACCHAROMYCES BOULARDILL 312.5 MILLIONSPORES",
      "FUNGAL AMYLASE 50 MG",
      "FRUCTO OLIGO SACCHARIDE 100 MG"
    ],
    "composition": " \u2022 LACTOBACILLUSACIDOPHILU 312.5 MILLIONSPORES \u2022 LACTOBACILLUSRHAMNOSUS 312.5 MILLION SPORES \u2022 BIFIDOBACTERIUM LONGUM 312.5 MILLIONSPORES \u2022 SACCHAROMYCES BOULARDILL 312.5 MILLIONSPORES \u2022 FUNGAL AMYLASE 50 MG \u2022 FRUCTO OLIGO SACCHARIDE 100 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-100",
    "name": "Ebastine Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Ebastine"
    ],
    "composition": " \u2022 Ebastine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-101",
    "name": "Empagliflozin and Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12.5 mg"
    ],
    "ingredients": [
      "Empagliflozin",
      "Metformin Hydrochloride"
    ],
    "composition": " \u2022 Empagliflozin \u2022 Metformin Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-102",
    "name": "Empagliflozin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "ingredients": [
      "Empagliflozin"
    ],
    "composition": " \u2022 Empagliflozin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-103",
    "name": "Esomeprazole Gastro- Resistant Tablets I.p.",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Esomeprazole Magnesium Trihydrate Equivalent to Esomeprazole",
      "Esomeprazole Magnesium Equivalent to Esomeprazole (as Enteric Coated Pellets)",
      "Domperidone (asprolonged Releasepellets)"
    ],
    "composition": " \u2022 Esomeprazole Magnesium Trihydrate Equivalent to Esomeprazole \u2022 Esomeprazole Magnesium Equivalent to Esomeprazole (as Enteric Coated Pellets) \u2022 Domperidone (asprolonged Releasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-104",
    "name": "Esterified Estrogen & Methyltestosterone Tablets Pack Size-100 Tabletsinone bottle 50, 000 Nos",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Esterified Estrogen & Methyltestosterone Tablets Pack Size-100 Tabletsinone bottle 50, 000 Nos"
    ],
    "composition": " \u2022 Esterified Estrogen & Methyltestosterone Tablets Pack Size-100 Tabletsinone bottle 50, 000 Nos",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-105",
    "name": "Estradiol and Dydrogesterone Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg"
    ],
    "ingredients": [
      "Estradiol (as hemihydrate)",
      "Dydrogesterone"
    ],
    "composition": " \u2022 Estradiol (as hemihydrate) \u2022 Dydrogesterone",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-106",
    "name": "Estradiol Valerate Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "2 mg"
    ],
    "ingredients": [
      "Estradiol Valerate BP"
    ],
    "composition": " \u2022 Estradiol Valerate BP",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-107",
    "name": "Etamsylate & Tranexamic Acid Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "250 mg"
    ],
    "ingredients": [
      "Etamsylate",
      "Tranexamic Acid"
    ],
    "composition": " \u2022 Etamsylate \u2022 Tranexamic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-108",
    "name": "Ethinylestradiol Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.01 mg"
    ],
    "ingredients": [
      "Ethinylestradiol"
    ],
    "composition": " \u2022 Ethinylestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-109",
    "name": "Ethinyloestradiol Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.05 mg"
    ],
    "ingredients": [
      "Ethinyloestradiol"
    ],
    "composition": " \u2022 Ethinyloestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-110",
    "name": "Etodolac (ER) Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg"
    ],
    "ingredients": [
      "Etodolac"
    ],
    "composition": " \u2022 Etodolac",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-111",
    "name": "Etoricoxib & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "60 mg",
      "4 mg",
      "8 mg",
      "100 mg",
      "50 mg",
      "500 mg"
    ],
    "ingredients": [
      "Diclofenac Potassium",
      "Paracetamol",
      "Chlorzoxazone",
      "Etoricoxib",
      "Lornoxicam",
      "Nimesulide"
    ],
    "composition": " \u2022 Diclofenac Potassium \u2022 Paracetamol \u2022 Chlorzoxazone \u2022 Etoricoxib \u2022 Lornoxicam \u2022 Nimesulide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-112",
    "name": "Etoricoxib Tablet I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "120 mg"
    ],
    "ingredients": [
      "Etoricoxib"
    ],
    "composition": " \u2022 Etoricoxib",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-113",
    "name": "Etoricoxib Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "90 mg"
    ],
    "ingredients": [
      "Etoricoxib"
    ],
    "composition": " \u2022 Etoricoxib",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-114",
    "name": "Evening Primrose Oil",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "ingredients": [
      "Evening Primrose Oil 500 mg",
      "Evening Primrose Oil 1000 mg"
    ],
    "composition": " \u2022 Evening Primrose Oil 500 mg \u2022 Evening Primrose Oil 1000 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-115",
    "name": "Febuxostat Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Febuxostat"
    ],
    "composition": " \u2022 Febuxostat",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-116",
    "name": "Fenofibrate Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Fenofibrate"
    ],
    "composition": " \u2022 Fenofibrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-117",
    "name": "Fexofenadine Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Fexofenadine Hydrochloride"
    ],
    "composition": " \u2022 Fexofenadine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-118",
    "name": "Finasteride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg"
    ],
    "ingredients": [
      "Finasteride"
    ],
    "composition": " \u2022 Finasteride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-119",
    "name": "Flavoxate Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "Flavoxate",
      "Flavoxate Hydrochloride"
    ],
    "composition": " \u2022 Flavoxate \u2022 Flavoxate Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-120",
    "name": "Flaxseed Oil",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "ingredients": [
      "Flaxseed Oil 500 mg",
      "Flaxseed Oil 1000 mg"
    ],
    "composition": " \u2022 Flaxseed Oil 500 mg \u2022 Flaxseed Oil 1000 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-121",
    "name": "Fluconazole Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "Fluconazole"
    ],
    "composition": " \u2022 Fluconazole",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-122",
    "name": "Flunarizine & Propranolol Hydrochloride (SR) Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "ingredients": [
      "Flunarizine Dihydrochloride Equivalent to Flunarizine",
      "Propranolol Hydrochloride (assustainedreleasepellets)"
    ],
    "composition": " \u2022 Flunarizine Dihydrochloride Equivalent to Flunarizine \u2022 Propranolol Hydrochloride (assustainedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-123",
    "name": "Fluoxetine Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Fluoxetine Hydrochloride Equivalent to Fluoxetine"
    ],
    "composition": " \u2022 Fluoxetine Hydrochloride Equivalent to Fluoxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-124",
    "name": "Flupentixol HCL Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "ingredients": [
      "Flupentixol Hydrochloride Equivalent to Flupentixol"
    ],
    "composition": " \u2022 Flupentixol Hydrochloride Equivalent to Flupentixol",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-125",
    "name": "Fructo-oligosaccharide",
    "division": "Nutraceuticals",
    "category": "General Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 MG"
    ],
    "ingredients": [
      "FRUCTO-OLIGOSACCHARIDE 100 MG"
    ],
    "composition": " \u2022 FRUCTO-OLIGOSACCHARIDE 100 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-126",
    "name": "Gabapentin & Nortriptyline Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg",
      "400 mg"
    ],
    "ingredients": [
      "Gabapentin",
      "Nortriptyline Hydrochloride Equivalent to Nortriptyline"
    ],
    "composition": " \u2022 Gabapentin \u2022 Nortriptyline Hydrochloride Equivalent to Nortriptyline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-127",
    "name": "Gabapentin Tablets I.p.",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg",
      "300 mg"
    ],
    "ingredients": [
      "Gabapentin"
    ],
    "composition": " \u2022 Gabapentin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-128",
    "name": "Ginseng Extract Powder 42.",
    "division": "Softgel",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "42.5 mg",
      "10 %",
      "6000 mcg",
      "2000 IU",
      "1 mg",
      "1.5 mg",
      "10 mg",
      "75 mg",
      "58 mg"
    ],
    "ingredients": [
      "Ginseng 42.5 mg, Lycopene 10 % 6000 mcg, Vitamin A2000 IU, Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B6 1 mg, Vitamin",
      "B12 1 mcg, Vitamin D3 200 IU, Vitamin E5 IU, Calcium Pantothenate 2.5 mg, Folic Acid 150 mcg, Niacinamide 18 mg, Vitamin C",
      "40 mg, Iodine as Sodium Iodide 150 mcg, Magnesium as magnesium Oxide 10 mg, Calcium as Calcium Phosphate 75 mg,",
      "Copper as Copper Sulphate 500 mcg, Iron",
      "as Ferrous Fumarate 17 mg, Zinc as Zinc Oxide 10 mg, Manganese as Manganese Chloride 1.5 mg",
      "LYCOPENE 10 % DISPERSION 5000 MCG, LUTEIN 8 % 6 MG, LYSINE HYDROCHLORIDE 50 MG, METHYLCOBALAMIN 500 MCG,",
      "Ginseng Extract Powder 42.5 mg, Vitamin A2000 I.U., Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B3 10 mg, Vitamin B5 5",
      "75 mg, Phosphorus 58 mg, Iron 17 mg, Zinc 10 mg, Magnesium 3 mg, Pottasium 2 mg, Manganese 0.5 mg, Copper 0.5 mg,",
      "Iodine 0.1 mg"
    ],
    "composition": " \u2022 Ginseng 42.5 mg, Lycopene 10 % 6000 mcg, Vitamin A2000 IU, Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B6 1 mg, Vitamin \u2022 B12 1 mcg, Vitamin D3 200 IU, Vitamin E5 IU, Calcium Pantothenate 2.5 mg, Folic Acid 150 mcg, Niacinamide 18 mg, Vitamin C \u2022 40 mg, Iodine as Sodium Iodide 150 mcg, Magnesium as magnesium Oxide 10 mg, Calcium as Calcium Phosphate 75 mg, \u2022 Copper as Copper Sulphate 500 mcg, Iron \u2022 as Ferrous Fumarate 17 mg, Zinc as Zinc Oxide 10 mg, Manganese as Manganese Chloride 1.5 mg \u2022 LYCOPENE 10 % DISPERSION 5000 MCG, LUTEIN 8 % 6 MG, LYSINE HYDROCHLORIDE 50 MG, METHYLCOBALAMIN 500 MCG,",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-129",
    "name": "Glibenclamide & Metformin Hydrochlorid e Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "500 mg",
      "50 mg",
      "100 mg"
    ],
    "ingredients": [
      "Glibenclamide",
      "Metformin Hydrochloride",
      "Metformin Hydrochloride (as Extended Releaseform)",
      "Fenofibrate",
      "Metformin Hydrochloride (as Sustained Release)",
      "Nateglinide"
    ],
    "composition": " \u2022 Glibenclamide \u2022 Metformin Hydrochloride \u2022 Metformin Hydrochloride (as Extended Releaseform) \u2022 Fenofibrate \u2022 Metformin Hydrochloride (as Sustained Release) \u2022 Nateglinide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-130",
    "name": "Glimepiride & Metformin Hcl (SR) Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg",
      "2 mg",
      "1000 mg"
    ],
    "ingredients": [
      "Glimepiride",
      "Metformin Hydrochloride (as Sustained Release)",
      "Metformin Hyrochloride (as Prolonged Release Form)",
      "Metformin Hydrochloride (As Prolonged Release Form)",
      "Metformin Hydrochloride (asprolongedreleaseform)"
    ],
    "composition": " \u2022 Glimepiride \u2022 Metformin Hydrochloride (as Sustained Release) \u2022 Metformin Hyrochloride (as Prolonged Release Form) \u2022 Metformin Hydrochloride (As Prolonged Release Form) \u2022 Metformin Hydrochloride (asprolongedreleaseform)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-131",
    "name": "Glyceryl Trinitrate Controlled Release Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.6 mg",
      "6.4 mg"
    ],
    "ingredients": [
      "Diluted Glyceryl Trinitrate Equivalent to Glyceryl Trinitrate (inacontrolledreleasesystem)",
      "Diluted Glyceryl Trinitrate Equivalent to Glyceryl Trinitrate (in acontrolledreleasesystem)"
    ],
    "composition": " \u2022 Diluted Glyceryl Trinitrate Equivalent to Glyceryl Trinitrate (inacontrolledreleasesystem) \u2022 Diluted Glyceryl Trinitrate Equivalent to Glyceryl Trinitrate (in acontrolledreleasesystem)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-132",
    "name": "Grape Seed Extract",
    "division": "Softgel",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "25 mg",
      "6 %",
      "2 mg",
      "8 %",
      "3 mg",
      "5 mg"
    ],
    "ingredients": [
      "Grape Seed Extract 25 mg Lycopene 6 % 2 mg Lutein 8 % 3 mg Vitamin A Concentrate Oil 5000 I.U. (As Palmitate ) Vitamin B1 5 mg Vitamin",
      "B2 5 mg Vitamin B6 1.50 mg Vitamin B12 15 mcg Folic Acid 1.50 mg Zinc Sulphate",
      "Monohydrate 23 mg Selenium Dioxide Monohydrate 75 mcg"
    ],
    "composition": " \u2022 Grape Seed Extract 25 mg Lycopene 6 % 2 mg Lutein 8 % 3 mg Vitamin A Concentrate Oil 5000 I.U. (As Palmitate ) Vitamin B1 5 mg Vitamin \u2022 B2 5 mg Vitamin B6 1.50 mg Vitamin B12 15 mcg Folic Acid 1.50 mg Zinc Sulphate \u2022 Monohydrate 23 mg Selenium Dioxide Monohydrate 75 mcg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-133",
    "name": "Griseofulvin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Griseofulvin"
    ],
    "composition": " \u2022 Griseofulvin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-134",
    "name": "Guaifenesin Tablets USP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [],
    "ingredients": [
      "Guaifenesin"
    ],
    "composition": " \u2022 Guaifenesin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-135",
    "name": "Indapamide Prolonged Release Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Indapamide"
    ],
    "composition": " \u2022 Indapamide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-136",
    "name": "Isotretinoin",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Isotretinoin 10 mg",
      "Isotretinoin 20 mg"
    ],
    "composition": " \u2022 Isotretinoin 10 mg \u2022 Isotretinoin 20 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-137",
    "name": "Isotretinoin Capsules I.p.",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Isotretinoin"
    ],
    "composition": " \u2022 Isotretinoin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-138",
    "name": "Isoxsuprine Hydrochloride (SR) Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Isoxsuprine Hydrochloride"
    ],
    "composition": " \u2022 Isoxsuprine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-139",
    "name": "Isoxsuprine Hydrochloride Tablets I.p.",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Isoxsuprine Hydrochloride"
    ],
    "composition": " \u2022 Isoxsuprine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-140",
    "name": "Itraconazole Capsules BP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "ingredients": [
      "Itraconazole (aspellets"
    ],
    "composition": " \u2022 Itraconazole (aspellets",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-141",
    "name": "Ivermectin Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "6 mg",
      "12 mg"
    ],
    "ingredients": [
      "Ivermectin"
    ],
    "composition": " \u2022 Ivermectin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-142",
    "name": "L-arginine",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "1000 mg",
      "10 %",
      "2.5 mg"
    ],
    "ingredients": [
      "L-arginine 1000 mg",
      "Lycopenepowder 10 % 2.5 mg",
      "L-ARGININE 1000 MG"
    ],
    "composition": " \u2022 L-arginine 1000 mg \u2022 Lycopenepowder 10 % 2.5 mg \u2022 L-ARGININE 1000 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-143",
    "name": "L-argininehcl",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "140 MG",
      "200 MG",
      "9 MG",
      "7.5 MG"
    ],
    "ingredients": [
      "L-ARGININEHCL 140 MG",
      "Green Tea Extract 200 MG",
      "Chasteberry Dry Extract 200 MG",
      "MAGNESIUMOXIDELIGHT 200 MG",
      "CARBONYLIRON 9 MG",
      "Zinc Gluconate 7.5 MG"
    ],
    "composition": " \u2022 L-ARGININEHCL 140 MG \u2022 Green Tea Extract 200 MG \u2022 Chasteberry Dry Extract 200 MG \u2022 MAGNESIUMOXIDELIGHT 200 MG \u2022 CARBONYLIRON 9 MG \u2022 Zinc Gluconate 7.5 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-144",
    "name": "L-carnitine",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "500 MG",
      "50 MG",
      "10 %",
      "2500 MCG",
      "5 MG",
      "8 MG"
    ],
    "ingredients": [
      "L-CARNITINE 500 MG",
      "COENZYMEQ-10 50 MG",
      "LYCOPENEPOWDER-10 % 2500 MCG",
      "Zinc Sulphate Monohydrate 5 MG",
      "Astaxanthin (10 %) 8 MG"
    ],
    "composition": " \u2022 L-CARNITINE 500 MG \u2022 COENZYMEQ-10 50 MG \u2022 LYCOPENEPOWDER-10 % 2500 MCG \u2022 Zinc Sulphate Monohydrate 5 MG \u2022 Astaxanthin (10 %) 8 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-145",
    "name": "L-Carnitine, Methylcobalamin and Folic Acid Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "L-Carnitine L-Tartrate Equivalent to L-Carnitine",
      "Methylcobalamin",
      "Folic Acid"
    ],
    "composition": " \u2022 L-Carnitine L-Tartrate Equivalent to L-Carnitine \u2022 Methylcobalamin \u2022 Folic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-146",
    "name": "L-carnitinebase",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "50 MG",
      "200 MG",
      "100 MG",
      "0.5 MG",
      "2.5 MCG",
      "17 MG"
    ],
    "ingredients": [
      "L-CARNITINEBASE 50 MG",
      "Coenzyme Q10 200 MG",
      "Lepidium Meyenii Extract 100 MG",
      "L-METHYLFOLATE 0.5 MG",
      "Cyanocobalamin 2.5 MCG",
      "Zinc Sulphate Monohydrate 17 MG"
    ],
    "composition": " \u2022 L-CARNITINEBASE 50 MG \u2022 Coenzyme Q10 200 MG \u2022 Lepidium Meyenii Extract 100 MG \u2022 L-METHYLFOLATE 0.5 MG \u2022 Cyanocobalamin 2.5 MCG \u2022 Zinc Sulphate Monohydrate 17 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-147",
    "name": "L-Glutathione",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "ingredients": [
      "L-Glutathione 500 mg",
      "L-Glutathione 1000 mg"
    ],
    "composition": " \u2022 L-Glutathione 500 mg \u2022 L-Glutathione 1000 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-148",
    "name": "L-isoleucine",
    "division": "Nutraceuticals",
    "category": "Pain & Orthopedics",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5.9 MG",
      "18.3 MG",
      "25 MG",
      "6.7 MG",
      "10 MG",
      "4.2 MG"
    ],
    "ingredients": [
      "L-ISOLEUCINE 5.9 MG",
      "L-LEUCINE 18.3 MG",
      "L-LYSINEHYDROCHLORIDE 25 MG",
      "L-VALINE 6.7 MG",
      "L-METHIONINE 10 MG",
      "L-THREONINE 4.2 MG"
    ],
    "composition": " \u2022 L-ISOLEUCINE 5.9 MG \u2022 L-LEUCINE 18.3 MG \u2022 L-LYSINEHYDROCHLORIDE 25 MG \u2022 L-VALINE 6.7 MG \u2022 L-METHIONINE 10 MG \u2022 L-THREONINE 4.2 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-149",
    "name": "L-Methionine",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 MG",
      "30 MG",
      "15 MG",
      "40 MG"
    ],
    "ingredients": [
      "L-Methionine 50 MG",
      "L-Threonine 30 MG",
      "L-Tryptophan 15 MG",
      "L-Valine 40 MG",
      "L-Isoleucine 30 MG",
      "L-Phenylalanine 40 MG"
    ],
    "composition": " \u2022 L-Methionine 50 MG \u2022 L-Threonine 30 MG \u2022 L-Tryptophan 15 MG \u2022 L-Valine 40 MG \u2022 L-Isoleucine 30 MG \u2022 L-Phenylalanine 40 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-150",
    "name": "L-Methylfolate",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "800 mcg",
      "500 mcg",
      "40 %",
      "200 mg",
      "40%"
    ],
    "ingredients": [
      "L-Methylfolate 800 mcg, Pyridoxal-5-Phosphate 500 mcg, DHA 40 % 200 mg"
    ],
    "composition": " \u2022 L-Methylfolate 800 mcg, Pyridoxal-5-Phosphate 500 mcg, DHA 40 % 200 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-151",
    "name": "Labetalol Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Labetalol Hydrochloride"
    ],
    "composition": " \u2022 Labetalol Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-152",
    "name": "Lactic Acid Bacillus 120 Million Viable Spores Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "120 Million"
    ],
    "ingredients": [
      "Lactic Acid Bacillus Viable Spores"
    ],
    "composition": " \u2022 Lactic Acid Bacillus Viable Spores",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-153",
    "name": "Lactic Acid Bacillus 60 Million Viable Spores Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Lactic Acid Bacillus Viable Spores"
    ],
    "composition": " \u2022 Lactic Acid Bacillus Viable Spores",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-154",
    "name": "Letrozole Tablets IP",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "5 mg"
    ],
    "ingredients": [
      "Letrozole"
    ],
    "composition": " \u2022 Letrozole",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-155",
    "name": "Levetiracetam Prolonged Release Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "750 mg"
    ],
    "ingredients": [
      "Levetiracetam"
    ],
    "composition": " \u2022 Levetiracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-156",
    "name": "Levetiracetam Prolonged Release Tablets IP 500",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Levetiracetam"
    ],
    "composition": " \u2022 Levetiracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-157",
    "name": "Levocarnitine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Levocarnitine"
    ],
    "composition": " \u2022 Levocarnitine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-158",
    "name": "Levocetirizine Dihydrochloride Dispersible Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "5 mg"
    ],
    "ingredients": [
      "Levocetirizine Hydrochloride",
      "Levocetirizine Dihydrochloride"
    ],
    "composition": " \u2022 Levocetirizine Hydrochloride \u2022 Levocetirizine Dihydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-159",
    "name": "Levofloxacin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Levofloxacin Hemihydrate Equivalent to Levofloxacin"
    ],
    "composition": " \u2022 Levofloxacin Hemihydrate Equivalent to Levofloxacin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-160",
    "name": "Levonorgestrel & Ethinyloest radiol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mcg",
      "50 mcg"
    ],
    "ingredients": [
      "Levonorgestrel",
      "Ethinyloestradiol"
    ],
    "composition": " \u2022 Levonorgestrel \u2022 Ethinyloestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-161",
    "name": "Levonorgestrel and Ethinylestradiol Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "0.15 mg"
    ],
    "ingredients": [
      "Levonorgestrel",
      "Ethinylestradiol"
    ],
    "composition": " \u2022 Levonorgestrel \u2022 Ethinylestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-162",
    "name": "Levonorgestrel Tablets BP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "1.5 mg",
      "0.75 mg",
      "IP 1.5 mg",
      "0.03 mg"
    ],
    "ingredients": [
      "Levonorgestrel",
      "Colour:Titanium Dioxide",
      "Approvedcolourused"
    ],
    "composition": " \u2022 Levonorgestrel \u2022 Colour:Titanium Dioxide \u2022 Approvedcolourused",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-163",
    "name": "Levonorgestrel Tablets BP Brand Name-I-72",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "1.5 mg"
    ],
    "ingredients": [
      "Levonorgestrel"
    ],
    "composition": " \u2022 Levonorgestrel",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-164",
    "name": "Levonorgestrel Tablets BP Brand Name-Plusone\u2013D",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "1.5 mg"
    ],
    "ingredients": [
      "Levonorgestrel"
    ],
    "composition": " \u2022 Levonorgestrel",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-165",
    "name": "Levonorgestreltablets BP One Day Tablets Pack Size-10 x 1 x 1 Tablets Quantity-20, 000 Nos",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [],
    "ingredients": [
      "Levonorgestrel One Day Pack Size-10 x 1 x 1 Quantity-20, 000 Nos"
    ],
    "composition": " \u2022 Levonorgestrel One Day Pack Size-10 x 1 x 1 Quantity-20, 000 Nos",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-166",
    "name": "Linezolid Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg"
    ],
    "ingredients": [
      "Linezolid"
    ],
    "composition": " \u2022 Linezolid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-167",
    "name": "Losartan Potassium & C hlorthalidone Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "ingredients": [
      "Losartan Potassium",
      "Chlorthalidone"
    ],
    "composition": " \u2022 Losartan Potassium \u2022 Chlorthalidone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-168",
    "name": "Losartan Potassium Tablets I.p.",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "25 mg"
    ],
    "ingredients": [
      "Losartan Potassium"
    ],
    "composition": " \u2022 Losartan Potassium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-169",
    "name": "Losartan Potassium Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Losartan Potassium"
    ],
    "composition": " \u2022 Losartan Potassium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-170",
    "name": "Lycopene",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "10 %",
      "2000 mcg",
      "2.5 mcg",
      "1.5 mg",
      "25 mg",
      "7.5 mg"
    ],
    "ingredients": [
      "Lycopene 10 % 2000 mcg Cyanocobalamin 2.5 mcg Pyridoxine Hydrochloride 1.5 mg Niacinamide 25 mg Zinc",
      "Sulphate Monohydrate 7.5 mg Copper Sulphate Pentahydrate 1 mg Manganese Sulphate 1.5 mg Beta Carotene 30 % 10 mg Selenium",
      "Dioxide Monohydrate 25 mcg",
      "Lycopene 6 % 2000 mg, Vitamin A200 IU, Vitamin C40 mg, Vitamin E10 IU, Zinc Sulphate Monohydrate",
      "12 mg, Chromium 33 mcg",
      "LYCOPENE 6 % 5000 MCG, LUTEIN 8 % 2000 MCG, Beta Carotene 10 % 4.8 MG, ZINC AS ZINC"
    ],
    "composition": " \u2022 Lycopene 10 % 2000 mcg Cyanocobalamin 2.5 mcg Pyridoxine Hydrochloride 1.5 mg Niacinamide 25 mg Zinc \u2022 Sulphate Monohydrate 7.5 mg Copper Sulphate Pentahydrate 1 mg Manganese Sulphate 1.5 mg Beta Carotene 30 % 10 mg Selenium \u2022 Dioxide Monohydrate 25 mcg \u2022 Lycopene 6 % 2000 mg, Vitamin A200 IU, Vitamin C40 mg, Vitamin E10 IU, Zinc Sulphate Monohydrate \u2022 12 mg, Chromium 33 mcg \u2022 LYCOPENE 6 % 5000 MCG, LUTEIN 8 % 2000 MCG, Beta Carotene 10 % 4.8 MG, ZINC AS ZINC",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-171",
    "name": "Lycopenepowder",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "10 %",
      "2 MG",
      "25 MG",
      "12 MG",
      "50 %",
      "8 MG"
    ],
    "ingredients": [
      "LYCOPENEPOWDER 10 % 2 MG",
      "ASCORBICACIDCOATED 25 MG",
      "Vitamin B3 12 MG",
      "VITAMINEACETATE 50 %POWDER 8 MG",
      "Calcium D-Pantothenate 3 MG",
      "Vitamin B2 0.9 MG"
    ],
    "composition": " \u2022 LYCOPENEPOWDER 10 % 2 MG \u2022 ASCORBICACIDCOATED 25 MG \u2022 Vitamin B3 12 MG \u2022 VITAMINEACETATE 50 %POWDER 8 MG \u2022 Calcium D-Pantothenate 3 MG \u2022 Vitamin B2 0.9 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-172",
    "name": "Lymecycline Capsules BP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [],
    "ingredients": [
      "Lymecycline Equivalent to Tetracyclinebase"
    ],
    "composition": " \u2022 Lymecycline Equivalent to Tetracyclinebase",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-173",
    "name": "Mebeverine Hydrochloride Prolonged Release Capsule",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "Mebeverine Hydrochloride",
      "Mebeverine Hydrochloride (as sustained release form)"
    ],
    "composition": " \u2022 Mebeverine Hydrochloride \u2022 Mebeverine Hydrochloride (as sustained release form)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-174",
    "name": "Mebeverine Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Mebeverine Hydrochloride"
    ],
    "composition": " \u2022 Mebeverine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-175",
    "name": "Mecobalamin with Multivitaminsand Minerals Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mcg",
      "2.5 MG",
      "5 MG",
      "1 MG",
      "0.5 MG",
      "1 MCG"
    ],
    "ingredients": [
      "Mecobalamin",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2"
    ],
    "composition": " \u2022 Mecobalamin \u2022 Vitamin A \u2022 Vitamin D3 \u2022 Vitamin E \u2022 Vitamin B1 \u2022 Vitamin B2",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-176",
    "name": "Mecobalamin, Alpha Lipoic Acid with Multivitamins and Minerals Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "1000 mcg",
      "200 mg",
      "3 mg",
      "500 mcg",
      "1500 mcg"
    ],
    "ingredients": [
      "Gabapentin",
      "Methylcobalamin",
      "Mecobalamin 1000 mcg Alpha Lipoic Acid 200 mg Benfotiamine 100 mg Pyridoxine Hydrochloride 3 mg Inositol 100",
      "Mecobalamin 500 mcg Alpha Lipoic Acid 100 mg",
      "Mecobalamin",
      "Alpha Lipoic Acid"
    ],
    "composition": " \u2022 Gabapentin \u2022 Methylcobalamin \u2022 Mecobalamin 1000 mcg Alpha Lipoic Acid 200 mg Benfotiamine 100 mg Pyridoxine Hydrochloride 3 mg Inositol 100 \u2022 Mecobalamin 500 mcg Alpha Lipoic Acid 100 mg \u2022 Mecobalamin \u2022 Alpha Lipoic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-177",
    "name": "Medroxyprogesterone Acetate Tablets IP",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Medroxyprogesterone Acetate"
    ],
    "composition": " \u2022 Medroxyprogesterone Acetate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-178",
    "name": "Mefenamic Acid & Dicyclomine Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Mefenamic Acid",
      "Dicyclomine Hydrochloride"
    ],
    "composition": " \u2022 Mefenamic Acid \u2022 Dicyclomine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-179",
    "name": "Megestrel Acetate Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "160 mg"
    ],
    "ingredients": [
      "Megestrel Acetate"
    ],
    "composition": " \u2022 Megestrel Acetate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-180",
    "name": "Megestrol Acetate Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "80 mg",
      "40 mg"
    ],
    "ingredients": [
      "Megestrol Acetate"
    ],
    "composition": " \u2022 Megestrol Acetate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-181",
    "name": "Mesterolone Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "ingredients": [
      "Mesterolone"
    ],
    "composition": " \u2022 Mesterolone",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-182",
    "name": "Metformin Hydrochloride (SR) Glimepiride & Voglibose Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Metformin Hydrochloride (as Sustained Release)",
      "Glimepiride",
      "Voglibose"
    ],
    "composition": " \u2022 Metformin Hydrochloride (as Sustained Release) \u2022 Glimepiride \u2022 Voglibose",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-183",
    "name": "Methylcobalamin",
    "division": "Softgel",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "500 mcg",
      "90 mg",
      "60 mg",
      "1.5 mg",
      "3 mg",
      "100 mg"
    ],
    "ingredients": [
      "Methylcobalamin 500 mcg Eicosapentaenoic Acid 90 mg Docosahexaenoic Acid 60 mg Folic Acid 1.5 mg Pyridoxine",
      "Hydrochloride 3 mg Ascorbic Acid 100 mg Vitamin E Acetate 25 I.U. Zinc Oxide eq. to elemental Zinc 15 mg Selenium Dioxide eq. to",
      "elemental Selenium 60 mcg"
    ],
    "composition": " \u2022 Methylcobalamin 500 mcg Eicosapentaenoic Acid 90 mg Docosahexaenoic Acid 60 mg Folic Acid 1.5 mg Pyridoxine \u2022 Hydrochloride 3 mg Ascorbic Acid 100 mg Vitamin E Acetate 25 I.U. Zinc Oxide eq. to elemental Zinc 15 mg Selenium Dioxide eq. to \u2022 elemental Selenium 60 mcg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-184",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine HCL & V itamin D3 Tablets",
    "division": "General",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Alpha Lipoic Acid",
      "Folic Acid",
      "Methylcobalamin",
      "Pyridoxine Hydrochloride",
      "Vitamin D3"
    ],
    "composition": " \u2022 Alpha Lipoic Acid \u2022 Folic Acid \u2022 Methylcobalamin \u2022 Pyridoxine Hydrochloride \u2022 Vitamin D3",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-185",
    "name": "Methylergometrine Maleate Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "125 mcg"
    ],
    "ingredients": [
      "Methylergometrine Maleate"
    ],
    "composition": " \u2022 Methylergometrine Maleate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-186",
    "name": "Methylprednisolone Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "4 mg",
      "16 mg",
      "8 mg"
    ],
    "ingredients": [
      "Methylprednisolone"
    ],
    "composition": " \u2022 Methylprednisolone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-187",
    "name": "Metolazone & Losartan Potassium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg"
    ],
    "ingredients": [
      "Metolazone",
      "Losartan Potassium"
    ],
    "composition": " \u2022 Metolazone \u2022 Losartan Potassium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-188",
    "name": "Metolazone & Ramipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg"
    ],
    "ingredients": [
      "Metolazone",
      "Ramipril"
    ],
    "composition": " \u2022 Metolazone \u2022 Ramipril",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-189",
    "name": "Metoprolol Succinate (ER) & Hydrochlorothiazide Table ts",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform)",
      "Hydrochlorothiazide"
    ],
    "composition": " \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate (as extendedreleaseform) \u2022 Hydrochlorothiazide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-190",
    "name": "Metoprolol Succinate (ER) & Ol mesartan Medoxomil Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Metoprolol Succinate Equivalent to Metoprplol Tartrate (as extendedreleaseform)",
      "Olmesartan Medoxomil"
    ],
    "composition": " \u2022 Metoprolol Succinate Equivalent to Metoprplol Tartrate (as extendedreleaseform) \u2022 Olmesartan Medoxomil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-191",
    "name": "Metoprolol Succinate (ER) Tablets I.p.",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate"
    ],
    "composition": " \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-192",
    "name": "Metoprolol Succinate Prolonged Release Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "ingredients": [
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate",
      "Metoprolol Succinate",
      "Metoprolol Succinnate Equivalent to Metoprolol Tartrate"
    ],
    "composition": " \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate \u2022 Metoprolol Succinate \u2022 Metoprolol Succinnate Equivalent to Metoprolol Tartrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-193",
    "name": "Mifepristone Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "10 mg",
      "25 mg"
    ],
    "ingredients": [
      "Mifepristone"
    ],
    "composition": " \u2022 Mifepristone",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-194",
    "name": "Minoxidil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Minoxidil"
    ],
    "composition": " \u2022 Minoxidil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-195",
    "name": "Mirtazapine Dispersible Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Mirtazapine (Ashemihydrate)"
    ],
    "composition": " \u2022 Mirtazapine (Ashemihydrate)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-196",
    "name": "Mirtazapine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "7.5 mg"
    ],
    "ingredients": [
      "Mirtazapine (Ashemihydrates)"
    ],
    "composition": " \u2022 Mirtazapine (Ashemihydrates)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-197",
    "name": "Misoprostol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "600 mcg",
      "200 mcg"
    ],
    "ingredients": [
      "Misoprostol",
      "Misoprostoltablets 200 mcg N-Prostol Tablets Pack Size-10 x 1 x 4 Tablets Quantity-20, 000 Nos"
    ],
    "composition": " \u2022 Misoprostol \u2022 Misoprostoltablets 200 mcg N-Prostol Tablets Pack Size-10 x 1 x 4 Tablets Quantity-20, 000 Nos",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-198",
    "name": "Misoprostol Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "25 mcg"
    ],
    "ingredients": [
      "Misoprostol (As 1 %HPMCDispersion)"
    ],
    "composition": " \u2022 Misoprostol (As 1 %HPMCDispersion)",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-199",
    "name": "Misoprostrol Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "200 mcg"
    ],
    "ingredients": [
      "Misoprostrol"
    ],
    "composition": " \u2022 Misoprostrol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-200",
    "name": "Montelukast & Levocetirizine Dispersibl e Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "ingredients": [
      "Montelukast Sodium Equivalent to Montelukast",
      "Levocetirizine Hydrochloride"
    ],
    "composition": " \u2022 Montelukast Sodium Equivalent to Montelukast \u2022 Levocetirizine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-201",
    "name": "Montelukast Sodium & Fexofenadine HCL Tablets.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Montelukast Sodium Eq. to Montelukast",
      "Fexofenadine Hydrochloride",
      "Montelukast Sodium Equivalent to Montelukast"
    ],
    "composition": " \u2022 Montelukast Sodium Eq. to Montelukast \u2022 Fexofenadine Hydrochloride \u2022 Montelukast Sodium Equivalent to Montelukast",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-202",
    "name": "Moxifloxacin Tablets BP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [],
    "ingredients": [
      "Moxifloxacin Hydrochloride Equivalent to Moxifloxacin",
      "Colour:Red Oxideof Iron & Titanium Dioxide"
    ],
    "composition": " \u2022 Moxifloxacin Hydrochloride Equivalent to Moxifloxacin \u2022 Colour:Red Oxideof Iron & Titanium Dioxide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-203",
    "name": "Naproxen & Domperidone Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg",
      "500 mg"
    ],
    "ingredients": [
      "Naproxen",
      "Domperidone"
    ],
    "composition": " \u2022 Naproxen \u2022 Domperidone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-204",
    "name": "Naproxen Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Naproxen"
    ],
    "composition": " \u2022 Naproxen",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-205",
    "name": "Nefopam Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "30 mg"
    ],
    "ingredients": [
      "Nefopam Hydrochloride"
    ],
    "composition": " \u2022 Nefopam Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-206",
    "name": "Nicorandil Prolonged Release Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Nicorandil"
    ],
    "composition": " \u2022 Nicorandil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-207",
    "name": "Nicorandil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Nicorandil"
    ],
    "composition": " \u2022 Nicorandil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-208",
    "name": "Nifedipine (SR) Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Nifedipine"
    ],
    "composition": " \u2022 Nifedipine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-209",
    "name": "Nimesulide Mouth Dissolving Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Nimesulide"
    ],
    "composition": " \u2022 Nimesulide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-210",
    "name": "Nimesulide Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Nimesulide"
    ],
    "composition": " \u2022 Nimesulide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-211",
    "name": "Nitrofurantoin (SR) Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Nitrofurantoin"
    ],
    "composition": " \u2022 Nitrofurantoin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-212",
    "name": "Nitrofurantoin Tablets I.p.",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Nitrofurantoin"
    ],
    "composition": " \u2022 Nitrofurantoin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-213",
    "name": "Nitroglycerin Controlled Release Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Diluted Nitroglycerin Equivalent to Nitroglycerin"
    ],
    "composition": " \u2022 Diluted Nitroglycerin Equivalent to Nitroglycerin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-214",
    "name": "Norethisterone & Ethinyl Estradiol Tablets IP",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg"
    ],
    "ingredients": [
      "Norethisterone",
      "Ethinyl Estradiol"
    ],
    "composition": " \u2022 Norethisterone \u2022 Ethinyl Estradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-215",
    "name": "Norethisterone Acetate Controlled Release Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "15 mg",
      "10 mg"
    ],
    "ingredients": [
      "Norethisterone Acetate",
      "Colour:Titanium Dioxide"
    ],
    "composition": " \u2022 Norethisterone Acetate \u2022 Colour:Titanium Dioxide",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-216",
    "name": "Norethisterone Tablets I.p.",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "20 mg",
      "5 mg"
    ],
    "ingredients": [
      "Norethisterone"
    ],
    "composition": " \u2022 Norethisterone",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-217",
    "name": "Norgestrel & Ethinylestrad iol",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg"
    ],
    "ingredients": [
      "Norgestrel",
      "Ethinylestradiol"
    ],
    "composition": " \u2022 Norgestrel \u2022 Ethinylestradiol",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-218",
    "name": "Nortriptyline Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "ingredients": [
      "Nortriptylin Hydrochloride Equivalent to Nortriptyline"
    ],
    "composition": " \u2022 Nortriptylin Hydrochloride Equivalent to Nortriptyline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-219",
    "name": "Ofloxacin & Ornidazole Tablets I.p.",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "Ofloxacin",
      "Ornidazole"
    ],
    "composition": " \u2022 Ofloxacin \u2022 Ornidazole",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-220",
    "name": "Ofloxacin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Ofloxacin"
    ],
    "composition": " \u2022 Ofloxacin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-221",
    "name": "Olmesartan Medoxomil & Ram ipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Olmesartan Medoxomil",
      "Ramipril"
    ],
    "composition": " \u2022 Olmesartan Medoxomil \u2022 Ramipril",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-222",
    "name": "Olmesartan Medoxomil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Olmesartan Medoxomil"
    ],
    "composition": " \u2022 Olmesartan Medoxomil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-223",
    "name": "Omega-3 Fatty Acids (EPA Softgel)",
    "division": "Softgel",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "90 mg",
      "60 mg",
      "10 mg",
      "42.5 mg",
      "15 mg",
      "4G"
    ],
    "ingredients": [
      "Omega-3 Fatty Acids (EPA 90 mg & DHA 60 mg)",
      "Green Tea Extract (Eq. to Polyphenols 10 mg)",
      "Ginseng Extract 42.5 mg",
      "Ginkgo Biloba Extract 10 mg",
      "Grape Seed Extract 15 mg",
      "Multivitamin & Multimineral Complex"
    ],
    "composition": " \u2022 Omega-3 Fatty Acids (EPA 90 mg & DHA 60 mg) \u2022 Green Tea Extract (Eq. to Polyphenols 10 mg) \u2022 Ginseng Extract 42.5 mg \u2022 Ginkgo Biloba Extract 10 mg \u2022 Grape Seed Extract 15 mg \u2022 Multivitamin & Multimineral Complex",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-224",
    "name": "Omeprazole & Domperidone Capsules IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "ingredients": [
      "Omeprazole (as Enteric Coated Pellets)",
      "Domperidone (aspellets)",
      "Domperidone (assustainedreleasepellets)"
    ],
    "composition": " \u2022 Omeprazole (as Enteric Coated Pellets) \u2022 Domperidone (aspellets) \u2022 Domperidone (assustainedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-225",
    "name": "Ondansetron Orally Disintegrating Tablets IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg"
    ],
    "ingredients": [
      "Ondansetron Hydrochloride Equivalent to Ondansetron"
    ],
    "composition": " \u2022 Ondansetron Hydrochloride Equivalent to Ondansetron",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-226",
    "name": "Ondansetron Tablets I.p",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "4 mg",
      "8 mg"
    ],
    "ingredients": [
      "Ondansetron Hydrochloride Equivalent to Ondansetron"
    ],
    "composition": " \u2022 Ondansetron Hydrochloride Equivalent to Ondansetron",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-227",
    "name": "Oxcarbazepine Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg",
      "300 mg",
      "450 mg"
    ],
    "ingredients": [
      "Oxcarbazepine"
    ],
    "composition": " \u2022 Oxcarbazepine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-228",
    "name": "Pantoprazole Gastro- Resistant Tablets IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Pantoprazole Sodium Equivalent to Pantoprazole",
      "Pantoprazole Sodium (as Enteric Coated Pellets)",
      "Levosulpiride (assustainedreleasepellets)",
      "Itopride Hydrochloride (assustainedreleasepellets)",
      "Pantoprazole Sodium Equivalent to Pantoprazole (asgastro-resistantpellets)",
      "Domperidone (asprolongedreleasepellets)"
    ],
    "composition": " \u2022 Pantoprazole Sodium Equivalent to Pantoprazole \u2022 Pantoprazole Sodium (as Enteric Coated Pellets) \u2022 Levosulpiride (assustainedreleasepellets) \u2022 Itopride Hydrochloride (assustainedreleasepellets) \u2022 Pantoprazole Sodium Equivalent to Pantoprazole (asgastro-resistantpellets) \u2022 Domperidone (asprolongedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-229",
    "name": "Paroxetine Prolonged Release Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12.5 mg",
      "25 mg"
    ],
    "ingredients": [
      "Paroxetine Hydrochloride Equivalent to Paroxetine"
    ],
    "composition": " \u2022 Paroxetine Hydrochloride Equivalent to Paroxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-230",
    "name": "Paroxetine Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine"
    ],
    "composition": " \u2022 Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-231",
    "name": "Piracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "800 mg"
    ],
    "ingredients": [
      "Piracetam"
    ],
    "composition": " \u2022 Piracetam",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-232",
    "name": "Prednisolone Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "ingredients": [
      "Prednisolone",
      "Approvedcolourused"
    ],
    "composition": " \u2022 Prednisolone \u2022 Approvedcolourused",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-233",
    "name": "Pregabalin (SR) Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Pregabalin"
    ],
    "composition": " \u2022 Pregabalin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-234",
    "name": "Pregabalin Capsules I.p.",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "150 mg",
      "300 mg"
    ],
    "ingredients": [
      "Pregabalin"
    ],
    "composition": " \u2022 Pregabalin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-235",
    "name": "Pregabalinand Nortriptyline Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "75 mg"
    ],
    "ingredients": [
      "Pregabalin",
      "Nortriptyline Hydrochloride Equivalent to Nortriptyline"
    ],
    "composition": " \u2022 Pregabalin \u2022 Nortriptyline Hydrochloride Equivalent to Nortriptyline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-236",
    "name": "Preprobioticblend",
    "division": "Nutraceuticals",
    "category": "General Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "300 MG"
    ],
    "ingredients": [
      "PREPROBIOTICBLEND 300 MG"
    ],
    "composition": " \u2022 PREPROBIOTICBLEND 300 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-237",
    "name": "Progesterone",
    "division": "Softgel",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg",
      "200 mg",
      "300 mg",
      "400 mg"
    ],
    "ingredients": [
      "Progesterone ( Micronised) 100 mg",
      "Progesterone ( Micronised) 200 mg",
      "Progesterone ( Micronised) 300 mg",
      "Progesterone ( Micronised) 400 mg",
      "Progesterone (Natural Micronized)"
    ],
    "composition": " \u2022 Progesterone ( Micronised) 100 mg \u2022 Progesterone ( Micronised) 200 mg \u2022 Progesterone ( Micronised) 300 mg \u2022 Progesterone ( Micronised) 400 mg \u2022 Progesterone (Natural Micronized)",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-238",
    "name": "Propranolol Hydrochloride (SR) & Flunarizine Dihydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Propranolol Hydrochloride (as sustained release form)",
      "Flunarizine Dihydrochloride Equivalent to Flunarizine"
    ],
    "composition": " \u2022 Propranolol Hydrochloride (as sustained release form) \u2022 Flunarizine Dihydrochloride Equivalent to Flunarizine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-239",
    "name": "Propranolol Prolonged Release Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "60 mg",
      "80 mg",
      "40 mg"
    ],
    "ingredients": [
      "Propranolol Hydrochloride (asprolongedreleasepellets)"
    ],
    "composition": " \u2022 Propranolol Hydrochloride (asprolongedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-240",
    "name": "Protein 43.",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "43.63 G",
      "7.22 G",
      "3.99 G",
      "3.8 G",
      "0.736 G",
      "1.196 G"
    ],
    "ingredients": [
      "PROTEIN 43.63 GM",
      "L-LEUCINE 7.22 GM",
      "L-ISOLEUCINE 3.99 GM",
      "L-VALINE 3.8 GM",
      "L-METHIONINE 0.736 GM",
      "L-PHENYLALANINE 1.196 GM"
    ],
    "composition": " \u2022 PROTEIN 43.63 GM \u2022 L-LEUCINE 7.22 GM \u2022 L-ISOLEUCINE 3.99 GM \u2022 L-VALINE 3.8 GM \u2022 L-METHIONINE 0.736 GM \u2022 L-PHENYLALANINE 1.196 GM",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-241",
    "name": "Quatrefolic",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "570 MCG",
      "2.45 MCG",
      "2.3 MG",
      "10 MG",
      "2.30 MG"
    ],
    "ingredients": [
      "QUATREFOLIC 570 MCG",
      "Cyanocobalamin 2.45 MCG",
      "PYRIDOXAL 5-PHOSPHATE 2.3 MG",
      "L-GLYCINE 10 MG",
      "PYRIDOXAL 5-PHOSPHATE 2.30 MG"
    ],
    "composition": " \u2022 QUATREFOLIC 570 MCG \u2022 Cyanocobalamin 2.45 MCG \u2022 PYRIDOXAL 5-PHOSPHATE 2.3 MG \u2022 L-GLYCINE 10 MG \u2022 PYRIDOXAL 5-PHOSPHATE 2.30 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-242",
    "name": "Quetiapine Prolonged Release Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Quetiapine Fumarate Equivalent to Quetiapine"
    ],
    "composition": " \u2022 Quetiapine Fumarate Equivalent to Quetiapine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-243",
    "name": "Rabeprazole Sodium ((ec)) & Itopride Hydrochloride ((SR) ) Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "40 mg"
    ],
    "ingredients": [
      "Rabeprazole Sodium (as Enteric Coated Pellets)",
      "Itopride Hydrochloride (assustainedreleasepellets)",
      "Rabeprazole Sodium (as enteric coated pellets",
      "Domperidone (assustainedreleasepellets)",
      "Rabeprazole Sodium (asgastro-resistantpellets)",
      "Domperidone (asprolongedreleasepellets)"
    ],
    "composition": " \u2022 Rabeprazole Sodium (as Enteric Coated Pellets) \u2022 Itopride Hydrochloride (assustainedreleasepellets) \u2022 Rabeprazole Sodium (as enteric coated pellets \u2022 Domperidone (assustainedreleasepellets) \u2022 Rabeprazole Sodium (asgastro-resistantpellets) \u2022 Domperidone (asprolongedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-244",
    "name": "Rifaximin Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "400 mg"
    ],
    "ingredients": [
      "Rifaximin"
    ],
    "composition": " \u2022 Rifaximin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-245",
    "name": "Rosehip Extract",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "250 mg",
      "200 mg",
      "40 mg",
      "30 mg"
    ],
    "ingredients": [
      "Rosehip Extract 250 mg, Chondroitin Sulphate 200 mg, Collagen Peptide 40 mg, Vitamin C40 mg, Sodium",
      "Hyaluronate 30 mg"
    ],
    "composition": " \u2022 Rosehip Extract 250 mg, Chondroitin Sulphate 200 mg, Collagen Peptide 40 mg, Vitamin C40 mg, Sodium \u2022 Hyaluronate 30 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-246",
    "name": "Rosuvastatin & Fenofibrate Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg",
      "5 mg"
    ],
    "ingredients": [
      "Rosuvastatin Calcium Equivalent to Rosuvastatin",
      "Fenofibrate",
      "Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin",
      "Metformin Hydrochloride (As Extended Release)"
    ],
    "composition": " \u2022 Rosuvastatin Calcium Equivalent to Rosuvastatin \u2022 Fenofibrate \u2022 Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin \u2022 Metformin Hydrochloride (As Extended Release)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-247",
    "name": "Roxithromycin Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Roxithromycin"
    ],
    "composition": " \u2022 Roxithromycin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-248",
    "name": "Sertaline Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "ingredients": [
      "Sertaline Hydrochloride Equivalent to Sertaline"
    ],
    "composition": " \u2022 Sertaline Hydrochloride Equivalent to Sertaline",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-249",
    "name": "Sevel 800 (Sevelamer Carbonate Tablets)",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "800 mg"
    ],
    "ingredients": [
      "Sevel 800 3 x 10 10, 000"
    ],
    "composition": " \u2022 Sevel 800 3 x 10 10, 000",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-250",
    "name": "Sildenafil Citrate eq. to Sildenafil",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Sildenafil Citrate eq. to Sildenafil 100 mg"
    ],
    "composition": " \u2022 Sildenafil Citrate eq. to Sildenafil 100 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-251",
    "name": "Sildenafil Citrate Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "100 mg"
    ],
    "ingredients": [
      "Sildenafil Citrate Equivalent to Sildenafil"
    ],
    "composition": " \u2022 Sildenafil Citrate Equivalent to Sildenafil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-252",
    "name": "Sildenafil Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "Sildenafil Citrate Equivalent to Sildenafil"
    ],
    "composition": " \u2022 Sildenafil Citrate Equivalent to Sildenafil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-253",
    "name": "Silymarine",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "140 mg",
      "50 mg",
      "150 mg",
      "50 mcg",
      "1.4 mg"
    ],
    "ingredients": [
      "Silymarine 140 mg, Alpha Lipoic Acid 50 mg, L-Ornithine, L-Aspartate 150 mg, Selenium 50 mcg, Thiamine",
      "Mononitrate 1.4 mg"
    ],
    "composition": " \u2022 Silymarine 140 mg, Alpha Lipoic Acid 50 mg, L-Ornithine, L-Aspartate 150 mg, Selenium 50 mcg, Thiamine \u2022 Mononitrate 1.4 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-254",
    "name": "Simvastatin Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "20 mg"
    ],
    "ingredients": [
      "Simvastatin"
    ],
    "composition": " \u2022 Simvastatin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-255",
    "name": "Sitagliptin Phosphate Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "25 mg"
    ],
    "ingredients": [
      "Sitagliptin Phosphate Monohydrate Equivalent to Sitagliptin"
    ],
    "composition": " \u2022 Sitagliptin Phosphate Monohydrate Equivalent to Sitagliptin",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-256",
    "name": "Sodium Bicarbonate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "ingredients": [
      "Sodium Bicarbonate"
    ],
    "composition": " \u2022 Sodium Bicarbonate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-257",
    "name": "Sodium Valproate & Valproic Acid Controll ed Release Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "666 mg",
      "499.5 mg"
    ],
    "ingredients": [
      "Sodium Valproate",
      "Valproic Acid (Bothtogethercorrespondsto Sodium Valproate)"
    ],
    "composition": " \u2022 Sodium Valproate \u2022 Valproic Acid (Bothtogethercorrespondsto Sodium Valproate)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-258",
    "name": "sof Vitamin B Complexwith B12",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Thiamine Mononitrate",
      "Riboflavin",
      "Pyridoxine Hydrochloride",
      "Cyanocobalamin",
      "Nicotinamide",
      "Calcium Pantothenate"
    ],
    "composition": " \u2022 Thiamine Mononitrate \u2022 Riboflavin \u2022 Pyridoxine Hydrochloride \u2022 Cyanocobalamin \u2022 Nicotinamide \u2022 Calcium Pantothenate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-259",
    "name": "Soyaisoflavonesext",
    "division": "Nutraceuticals",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "40 %",
      "100 MG",
      "75 MG",
      "50 %",
      "20 MG",
      "40%"
    ],
    "ingredients": [
      "SOYAISOFLAVONESEXT 40 % 100 MG",
      "MAGNESIUMHYDROXIDE 100 MG",
      "ASCORBICACIDCOATED 75 MG",
      "VITAMINEACETATE 50 %POWDER 20 MG",
      "Vitamin B3 20 MG",
      "Vitamin B6 20 MG"
    ],
    "composition": " \u2022 SOYAISOFLAVONESEXT 40 % 100 MG \u2022 MAGNESIUMHYDROXIDE 100 MG \u2022 ASCORBICACIDCOATED 75 MG \u2022 VITAMINEACETATE 50 %POWDER 20 MG \u2022 Vitamin B3 20 MG \u2022 Vitamin B6 20 MG",
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf"
  },
  {
    "id": "p-260",
    "name": "Stanozolol Tablets USP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [],
    "ingredients": [
      "Stanozolol"
    ],
    "composition": " \u2022 Stanozolol",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-261",
    "name": "Tadalafil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "10 mg",
      "20 mg",
      "5 mg"
    ],
    "ingredients": [
      "Tadalafil"
    ],
    "composition": " \u2022 Tadalafil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-262",
    "name": "Tadalafiland Dapoxetine Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Tadalafil",
      "Dapoxetine Hydrochloride Equivalent to Dapoxetine"
    ],
    "composition": " \u2022 Tadalafil \u2022 Dapoxetine Hydrochloride Equivalent to Dapoxetine",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-263",
    "name": "Tamsulosin Hydrochloride (Modified Release & Tolterodine Tartrate (ER) Capsules)",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg"
    ],
    "ingredients": [
      "Tansulosin Hydrochloride (asmodifiedreleasepellets)",
      "Tolterodine Tartrate (asextendedreleasepellets)"
    ],
    "composition": " \u2022 Tansulosin Hydrochloride (asmodifiedreleasepellets) \u2022 Tolterodine Tartrate (asextendedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-264",
    "name": "Tamsulosin Hydrochloride Prolonged Release and Dutasteride Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg"
    ],
    "ingredients": [
      "Tamsulosin Hydrochloride (asprolongedreleasepellets)",
      "Dutasteride"
    ],
    "composition": " \u2022 Tamsulosin Hydrochloride (asprolongedreleasepellets) \u2022 Dutasteride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-265",
    "name": "Tamsulosin Hydrochloride Prolonged Release Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg",
      "0.2 mg"
    ],
    "ingredients": [
      "Tamsulosin Hydrochloride Equivalent to Tamsulosin",
      "Tamsulosin Hydrochloride (asprolongedreleasepellets)"
    ],
    "composition": " \u2022 Tamsulosin Hydrochloride Equivalent to Tamsulosin \u2022 Tamsulosin Hydrochloride (asprolongedreleasepellets)",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-266",
    "name": "Telmisartan & Amlodipine Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "5 mg",
      "2.5 mg",
      "40 mg",
      "80 mg"
    ],
    "ingredients": [
      "Amlodipine Besylate Equivalent to Amlodipine",
      "Telmisartan",
      "Hydrochlorothiazide"
    ],
    "composition": " \u2022 Amlodipine Besylate Equivalent to Amlodipine \u2022 Telmisartan \u2022 Hydrochlorothiazide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-267",
    "name": "Thiamine Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Thiamine Hydrochloride"
    ],
    "composition": " \u2022 Thiamine Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-268",
    "name": "Thyroxine Sodium Tablets I.p.",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "12.5 mcg",
      "25 mcg",
      "50 mcg",
      "75 mcg",
      "100 mcg",
      "250 mg"
    ],
    "ingredients": [
      "Thyroxine Sodium Equivalent to Anhydrous Thyroxine Sodium"
    ],
    "composition": " \u2022 Thyroxine Sodium Equivalent to Anhydrous Thyroxine Sodium",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-269",
    "name": "Tibolone Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Tibolone"
    ],
    "composition": " \u2022 Tibolone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-270",
    "name": "Tocopheryl Acetate",
    "division": "Softgel",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": "USP",
    "availableStrengths": [
      "400 mg"
    ],
    "ingredients": [
      "Tocopheryl Acetate 400 mg"
    ],
    "composition": " \u2022 Tocopheryl Acetate 400 mg",
    "sourcePdf": "Product List-Softgel.pdf"
  },
  {
    "id": "p-271",
    "name": "Tolperisone Hydrochloride & Dicl ofenac Sodium Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Tolperisone Hydrochloride",
      "Diclofenac Sodium"
    ],
    "composition": " \u2022 Tolperisone Hydrochloride \u2022 Diclofenac Sodium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-272",
    "name": "Tolperisone Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "JP"
    ],
    "ingredients": [
      "Tolperisone Hydrochloride"
    ],
    "composition": " \u2022 Tolperisone Hydrochloride",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-273",
    "name": "Torsemide Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Torsemide"
    ],
    "composition": " \u2022 Torsemide",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-274",
    "name": "Tranexamic Acid & Etamsy late Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "250 mg"
    ],
    "ingredients": [
      "Tranexamic Acid",
      "Etamsylate"
    ],
    "composition": " \u2022 Tranexamic Acid \u2022 Etamsylate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-275",
    "name": "Tranexamic Acid & Mefenamic Acid Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Tranexamic Acid",
      "Mefenamic Acid"
    ],
    "composition": " \u2022 Tranexamic Acid \u2022 Mefenamic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-276",
    "name": "Tranexamic Acid Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "250 mg"
    ],
    "ingredients": [
      "Tranexamic Acid"
    ],
    "composition": " \u2022 Tranexamic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-277",
    "name": "Triamcinolone Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "4 mg"
    ],
    "ingredients": [
      "Triamcinolone"
    ],
    "composition": " \u2022 Triamcinolone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-278",
    "name": "Trypsin Bromelain & Rutoside Trihydrate Tablet",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate"
    ],
    "composition": " \u2022 Trypsin \u2022 Bromelain \u2022 Rutoside Trihydrate",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-279",
    "name": "Trypsin, Bromelain, Rutoside Trihydrate & Diclofenac Sodium Table ts",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "48 mg"
    ],
    "ingredients": [
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate",
      "Diclofenac Sodium"
    ],
    "composition": " \u2022 Trypsin \u2022 Bromelain \u2022 Rutoside Trihydrate \u2022 Diclofenac Sodium",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-280",
    "name": "Trypsin-Chymotrypsin Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "1, 00, 000 Armour Unitsenzymaticactivitysuppliedbyapurified concentratewhichhasspecific Trypsinand Chymotrypsinactivityina ratioofsixtoone",
      "Approvedcolourused"
    ],
    "composition": " \u2022 1, 00, 000 Armour Unitsenzymaticactivitysuppliedbyapurified concentratewhichhasspecific Trypsinand Chymotrypsinactivityina ratioofsixtoone \u2022 Approvedcolourused",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-281",
    "name": "Ulipristal Acetate Tablets",
    "division": "Hormones",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg"
    ],
    "ingredients": [
      "Ulipristal Acetate"
    ],
    "composition": " \u2022 Ulipristal Acetate",
    "sourcePdf": "FORTSCHRITT HORMONES.pdf"
  },
  {
    "id": "p-282",
    "name": "Ursodeoxycholic Acid (SR) Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "450 mg",
      "600 mg",
      "300 mg"
    ],
    "ingredients": [
      "Ursodeoxycholic Acid"
    ],
    "composition": " \u2022 Ursodeoxycholic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-283",
    "name": "Ursodeoxycholic Acid Tablets I.p.",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "150 mg"
    ],
    "ingredients": [
      "Ursodeoxycholic Acid"
    ],
    "composition": " \u2022 Ursodeoxycholic Acid",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-284",
    "name": "Vardenafil Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "ingredients": [
      "Vardenafil Hydrochloride Trihydrate Equivalent to Vardenafil"
    ],
    "composition": " \u2022 Vardenafil Hydrochloride Trihydrate Equivalent to Vardenafil",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-285",
    "name": "Voglibose & Metformin HCL Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Metformin Hydrochloride",
      "Voglibose"
    ],
    "composition": " \u2022 Metformin Hydrochloride \u2022 Voglibose",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-286",
    "name": "Voriconazole Tablets I.p.",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "400 mg"
    ],
    "ingredients": [
      "Voriconazole"
    ],
    "composition": " \u2022 Voriconazole",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  },
  {
    "id": "p-287",
    "name": "Zopiclone Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Zopiclone"
    ],
    "composition": " \u2022 Zopiclone",
    "sourcePdf": "FORTSCHRITT GENERAL.pdf"
  }
];
