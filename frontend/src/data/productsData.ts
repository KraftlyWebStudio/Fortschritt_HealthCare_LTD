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
    "name": "Acebrophylline (SR) & Montelukast Sodium Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Acebrophylline (SR) 200 mg",
      "Montelukast Sodium 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-001",
    "composition": " \u2022 Acebrophylline (SR) 200 mg \u2022 Montelukast Sodium 10 mg"
  },
  {
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
      "Acebrophylline 100 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-002",
    "composition": " \u2022 Acebrophylline 100 mg"
  },
  {
    "name": "Aceclofenac (SR) & Rabeprazole Sodium (EC) Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg",
      "20 mg"
    ],
    "ingredients": [
      "Aceclofenac (SR) IP 200 mg",
      "Rabeprazole Sodium (EC) IP 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-003",
    "composition": " \u2022 Aceclofenac (SR) IP 200 mg \u2022 Rabeprazole Sodium (EC) IP 20 mg"
  },
  {
    "name": "Acitretin Capsules IP",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "25 MG"
    ],
    "ingredients": [
      "Acitretin 25 MG"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-004",
    "composition": " \u2022 Acitretin 25 MG"
  },
  {
    "name": "Ademetionine Enteric Coated Tablets",
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
      "Ademetionine Enteric Coated 200 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-005",
    "composition": " \u2022 Ademetionine Enteric Coated 200 mg"
  },
  {
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
      "Albendazole IP 400 mg",
      "Albendazole 400 MG"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-006",
    "composition": " \u2022 Albendazole IP 400 mg \u2022 Albendazole 400 MG"
  },
  {
    "name": "Amisulpride Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Amisulpride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-007",
    "composition": " \u2022 Amisulpride"
  },
  {
    "name": "Amitriptyline Hcl Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg"
    ],
    "ingredients": [
      "Amitriptyline Hcl 25 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-008",
    "composition": " \u2022 Amitriptyline Hcl 25 mg"
  },
  {
    "name": "Amlodipine & Atenolol Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "50 mg"
    ],
    "ingredients": [
      "Amlodipine 5 mg",
      "Atenolol 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-009",
    "composition": " \u2022 Amlodipine 5 mg \u2022 Atenolol 50 mg"
  },
  {
    "name": "Amlodipine Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Amlodipine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-010",
    "composition": " \u2022 Amlodipine"
  },
  {
    "name": "Artemether And Lumefantrine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg",
      "480 mg"
    ],
    "ingredients": [
      "Artemether And Lumefantrine 80 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-011",
    "composition": " \u2022 Artemether And Lumefantrine 80 mg"
  },
  {
    "name": "Ascorbic Acid (Coated)",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "65 MG",
      "100 MG",
      "200 MG",
      "75 MG",
      "50%",
      "10 MG"
    ],
    "ingredients": [
      "Ascorbic Acid (Coated) 65 MG",
      "Lepidium Meyenii Extract 100 MG",
      "Coenzyme Q10 200 MG",
      "Zinc Amino Acetate Chelate 75 MG",
      "Vitamin E Acetate (50% Powder) 10 MG",
      "LCARNITINE 50 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-012",
    "composition": " \u2022 Ascorbic Acid (Coated) 65 MG \u2022 Lepidium Meyenii Extract 100 MG \u2022 Coenzyme Q10 200 MG \u2022 Zinc Amino Acetate Chelate 75 MG \u2022 Vitamin E Acetate (50% Powder) 10 MG \u2022 LCARNITINE 50 MG"
  },
  {
    "name": "Astaxanthin Powder (8%)",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "10%",
      "8 MG",
      "100 MG",
      "2500 MCG",
      "250 MG",
      "10 MG"
    ],
    "ingredients": [
      "Astaxanthin (10%) 8 MG",
      "Coenzyme Q10 100 MG",
      "Lycopene (10%) 2500 MCG",
      "L-Carnitine L-Tartrate 250 MG",
      "Zinc Sulphate Monohydrate 10 MG",
      "Piperine (95%) 10 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-013",
    "composition": " \u2022 Astaxanthin (10%) 8 MG \u2022 Coenzyme Q10 100 MG \u2022 Lycopene (10%) 2500 MCG \u2022 L-Carnitine L-Tartrate 250 MG \u2022 Zinc Sulphate Monohydrate 10 MG \u2022 Piperine (95%) 10 MG"
  },
  {
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
      "Atenolol IP 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-014",
    "composition": " \u2022 Atenolol IP 50 mg"
  },
  {
    "name": "Azithromycin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Azithromycin 500 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-015",
    "composition": " \u2022 Azithromycin 500 mg"
  },
  {
    "name": "Benfotiamine & Multivitamin Complex",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1.5 MG",
      "30 MCG",
      "45 MG",
      "25 MG",
      "2.0 MG",
      "30%"
    ],
    "ingredients": [
      "BENFOTIAMINE 1.5 MG",
      "D-BIOTIN 30 MCG",
      "Calcium Ascorbate 45 MG",
      "Choline Bitartrate 25 MG",
      "Citrus Bioflavonoids 2.0 MG",
      "Docosahexaenoic Acid (DHA)(DHA 30%) 60 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-016",
    "composition": " \u2022 BENFOTIAMINE 1.5 MG \u2022 D-BIOTIN 30 MCG \u2022 Calcium Ascorbate 45 MG \u2022 Choline Bitartrate 25 MG \u2022 Citrus Bioflavonoids 2.0 MG \u2022 Docosahexaenoic Acid (DHA)(DHA 30%) 60 MG"
  },
  {
    "name": "Betahistine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Betahistine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-017",
    "composition": " \u2022 Betahistine"
  },
  {
    "name": "Bilastine & Montelukast Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "10 mg"
    ],
    "ingredients": [
      "Bilastine & Montelukast 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-018",
    "composition": " \u2022 Bilastine & Montelukast 20 mg"
  },
  {
    "name": "Bisoprolol Fumarate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "ingredients": [
      "Bisoprolol Fumarate IP 5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-019",
    "composition": " \u2022 Bisoprolol Fumarate IP 5 mg"
  },
  {
    "name": "Brivaracetam Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Brivaracetam 100 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-020",
    "composition": " \u2022 Brivaracetam 100 mg"
  },
  {
    "name": "Calcium Carbonate",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1250 MG",
      "1 MG",
      "0.6 MG",
      "2.5 MCG",
      "600 IU"
    ],
    "ingredients": [
      "Calcium Carbonate 1250 MG",
      "L-Methylfolate Calcium 1 MG",
      "PYRIDOXAL 5 PHOSPHATE 0.6 MG cyanocobalamin 2.5 MCG",
      "Vitamin D3 STABILIZED 600 IU"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-021",
    "composition": " \u2022 Calcium Carbonate 1250 MG \u2022 L-Methylfolate Calcium 1 MG \u2022 PYRIDOXAL 5 PHOSPHATE 0.6 MG cyanocobalamin 2.5 MCG \u2022 Vitamin D3 STABILIZED 600 IU"
  },
  {
    "name": "Calcium Citrate",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1000 MG",
      "300 MG",
      "55 MCG"
    ],
    "ingredients": [
      "Calcium Citrate 1000 MG",
      "Magnesium Oxide 300 MG",
      "Vitamin K2 55 MCG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-022",
    "composition": " \u2022 Calcium Citrate 1000 MG \u2022 Magnesium Oxide 300 MG \u2022 Vitamin K2 55 MCG"
  },
  {
    "name": "Calcium Citrate Malate",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1250 MG",
      "600 IU"
    ],
    "ingredients": [
      "Calcium Citrate Malate 1250 MG",
      "Vitamin D3 600 IU"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-023",
    "composition": " \u2022 Calcium Citrate Malate 1250 MG \u2022 Vitamin D3 600 IU"
  },
  {
    "name": "Calcium Citrate Malate, Vitamin D3 & Folic Acid Tablets IP",
    "division": "General",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 mg",
      "250 mg",
      "100 IU",
      "50 mcg"
    ],
    "ingredients": [
      "Calcium Citrate Malate Equivalent to Elemental Calcium IP 1250 mg 250 mg",
      "Cholecalciferol (as Stabilized Vitamin D3) IP 100 IU",
      "Folic Acid IP 50 mcg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-024",
    "composition": " \u2022 Calcium Citrate Malate Equivalent to Elemental Calcium IP 1250 mg 250 mg \u2022 Cholecalciferol (as Stabilized Vitamin D3) IP 100 IU \u2022 Folic Acid IP 50 mcg"
  },
  {
    "name": "Carbohydrate & Protein Powder",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
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
      "Carbohydrate & Protein Powder 70 G",
      "SUGAR 0 G",
      "PROTEIN 24 G",
      "FAT 3 G",
      "COLOSTRUM 50 G",
      "Shatavari Extract 500 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-025",
    "composition": " \u2022 Carbohydrate & Protein Powder 70 G \u2022 SUGAR 0 G \u2022 PROTEIN 24 G \u2022 FAT 3 G \u2022 COLOSTRUM 50 G \u2022 Shatavari Extract 500 MG"
  },
  {
    "name": "Carbonyl Iron & Folic Acid",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "29 MG",
      "300 MCG",
      "5 MG",
      "30 MCG",
      "2.5 MCG",
      "2 MG"
    ],
    "ingredients": [
      "Carbonyl Iron & Folic Acid 29 MG",
      "Folic Acid 300 MCG",
      "Calcium D-Pantothenate 5 MG",
      "D-BIOTIN 30 MCG",
      "Cyanocobalamin 2.5 MCG",
      "Vitamin B1 2 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-026",
    "composition": " \u2022 Carbonyl Iron & Folic Acid 29 MG \u2022 Folic Acid 300 MCG \u2022 Calcium D-Pantothenate 5 MG \u2022 D-BIOTIN 30 MCG \u2022 Cyanocobalamin 2.5 MCG \u2022 Vitamin B1 2 MG"
  },
  {
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
      "Celecoxib BP 100 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-027",
    "composition": " \u2022 Celecoxib BP 100 mg"
  },
  {
    "name": "Cilnidipine & Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "40 mg"
    ],
    "ingredients": [
      "Cilnidipine 10 mg",
      "Telmisartan 40 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-028",
    "composition": " \u2022 Cilnidipine 10 mg \u2022 Telmisartan 40 mg"
  },
  {
    "name": "Cilnidipine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Cilnidipine 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-029",
    "composition": " \u2022 Cilnidipine 10 mg"
  },
  {
    "name": "Citicoline & Piracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "800 mg"
    ],
    "ingredients": [
      "Citicoline Sodium Equivalent to Citicoline IP 500 mg",
      "Piracetam IP 800 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-030",
    "composition": " \u2022 Citicoline Sodium Equivalent to Citicoline IP 500 mg \u2022 Piracetam IP 800 mg"
  },
  {
    "name": "Clindamycin Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg",
      "300 mg"
    ],
    "ingredients": [
      "Clindamycin Hydrochloride Equivalent to Clindamycin IP 150 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-031",
    "composition": " \u2022 Clindamycin Hydrochloride Equivalent to Clindamycin IP 150 mg"
  },
  {
    "name": "Clopidogrel Bisulphate Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg"
    ],
    "ingredients": [
      "Clopidogrel Bisulphate Eq. to Clopidogrel 75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-032",
    "composition": " \u2022 Clopidogrel Bisulphate Eq. to Clopidogrel 75 mg"
  },
  {
    "name": "Clopidogrel Tablets USP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "75 mg"
    ],
    "ingredients": [
      "Clopidogrel Bisulfate Eq. to Clopidogrel USP 75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-033",
    "composition": " \u2022 Clopidogrel Bisulfate Eq. to Clopidogrel USP 75 mg"
  },
  {
    "name": "Coenzyme Q10",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "50 MG",
      "10%",
      "5000 MCG",
      "225 MG",
      "18 MG",
      "10 MG"
    ],
    "ingredients": [
      "Coenzyme Q10 50 MG",
      "Lycopene (10%) 5000 MCG",
      "Coral Calcium 225 MG",
      "Magnesium Sulphate 18 MG",
      "Vitamin E Acetate 10 MG",
      "Green Tea Extract 10 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-034",
    "composition": " \u2022 Coenzyme Q10 50 MG \u2022 Lycopene (10%) 5000 MCG \u2022 Coral Calcium 225 MG \u2022 Magnesium Sulphate 18 MG \u2022 Vitamin E Acetate 10 MG \u2022 Green Tea Extract 10 MG"
  },
  {
    "name": "Coenzyme Q10 (100 mg)",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 MG",
      "500 MG",
      "10%",
      "8 MG",
      "30 MG",
      "5 MG"
    ],
    "ingredients": [
      "Coenzyme Q10 100 MG",
      "L-Carnitine L-Tartrate 500 MG",
      "Astaxanthin (10%) 8 MG",
      "Lycopene (10%) 30 MG",
      "ZINC SULPHATE MONOHYDRATE 5 MG",
      "SODIUM SELENATE Eq. to ELEMENTALSELENIUM 40 MCG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-035",
    "composition": " \u2022 Coenzyme Q10 100 MG \u2022 L-Carnitine L-Tartrate 500 MG \u2022 Astaxanthin (10%) 8 MG \u2022 Lycopene (10%) 30 MG \u2022 ZINC SULPHATE MONOHYDRATE 5 MG \u2022 SODIUM SELENATE Eq. to ELEMENTALSELENIUM 40 MCG"
  },
  {
    "name": "Coenzyme Q10(Ubiquinone Acetate)",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "60 MG",
      "10%",
      "5000 MCG",
      "500 MG",
      "8 MG",
      "100 MG"
    ],
    "ingredients": [
      "Coenzyme Q10(Ubiquinone Acetate) 60 MG",
      "Lycopene Powder 10% 5000 MCG",
      "L-Carnitine L-Tartrate 500 MG",
      "Astaxanthin (10%) 8 MG",
      "L-Arginine HCl 100 MG",
      "Zinc Sulphate Monohydrate 5 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-036",
    "composition": " \u2022 Coenzyme Q10(Ubiquinone Acetate) 60 MG \u2022 Lycopene Powder 10% 5000 MCG \u2022 L-Carnitine L-Tartrate 500 MG \u2022 Astaxanthin (10%) 8 MG \u2022 L-Arginine HCl 100 MG \u2022 Zinc Sulphate Monohydrate 5 MG"
  },
  {
    "name": "Coralcalcium",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 MG",
      "600 IU"
    ],
    "ingredients": [
      "Coralcalcium 500 MG",
      "Vitamin D3 STABILIZED 600 IU"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-037",
    "composition": " \u2022 Coralcalcium 500 MG \u2022 Vitamin D3 STABILIZED 600 IU"
  },
  {
    "name": "Dalbergia Sissoo Extract 400",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "400 MG",
      "500 MG"
    ],
    "ingredients": [
      "Dalbergia Sissoo Extract 400 MG",
      "Cissus Quadrangularis Dry Extract 500 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-038",
    "composition": " \u2022 Dalbergia Sissoo Extract 400 MG \u2022 Cissus Quadrangularis Dry Extract 500 MG"
  },
  {
    "name": "Dapagliflozin & Metformin Hydrochloride ER Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "1000 mg",
      "10 mg",
      "500 mg"
    ],
    "ingredients": [
      "Release Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin IH 10 mg",
      "Metformin Hydrochloride (As Extended Release) IP 1000 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-039",
    "composition": " \u2022 Release Dapagliflozin Propanediol Monohydrate Equivalent to Dapagliflozin IH 10 mg \u2022 Metformin Hydrochloride (As Extended Release) IP 1000 mg"
  },
  {
    "name": "Dapoxetine & Sildenafil Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg",
      "50 mg",
      "60 mg",
      "100 mg"
    ],
    "ingredients": [
      "Dapoxetine 30 mg",
      "Sildenafil 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-040",
    "composition": " \u2022 Dapoxetine 30 mg \u2022 Sildenafil 50 mg"
  },
  {
    "name": "Deflazacort Tablet",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "6 mg",
      "30 mg"
    ],
    "ingredients": [
      "Deflazacort Tablet 30 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-041",
    "composition": " \u2022 Deflazacort Tablet 30 mg"
  },
  {
    "name": "Dehydroepi & Progesterone (Sustained Release)",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Dehydroepi",
      "Progesterone (Sustained Release)"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-042",
    "composition": " \u2022 Dehydroepi \u2022 Progesterone (Sustained Release)"
  },
  {
    "name": "Dehydroepi & Rosterone",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
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
      "Dehydroepiandrosterone (DHEA) 75 MG",
      "Folic Acid 570 MCG",
      "Vitamin D3 600 IU",
      "Coenzyme Q10 100 MG",
      "MELATONIN 3 MG",
      "Dehydroepiandrosterone (DHEA)(DHEA) 75 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-043",
    "composition": " \u2022 Dehydroepiandrosterone (DHEA) 75 MG \u2022 Folic Acid 570 MCG \u2022 Vitamin D3 600 IU \u2022 Coenzyme Q10 100 MG \u2022 MELATONIN 3 MG \u2022 Dehydroepiandrosterone (DHEA)(DHEA) 75 MG"
  },
  {
    "name": "Diacerein Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "Diacertein IP 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-044",
    "composition": " \u2022 Diacertein IP 50 mg"
  },
  {
    "name": "Diclofenac Sodium Gastro- Resistant Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg"
    ],
    "ingredients": [
      "E a c h G a s t r o-Resistant Tablet Diclofenac Sodium IP 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-045",
    "composition": " \u2022 E a c h G a s t r o-Resistant Tablet Diclofenac Sodium IP 50 mg"
  },
  {
    "name": "Diltiazem Hydrochloride Tablets IP",
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
      "Diltiazem Hydrochloride 30 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-046",
    "composition": " \u2022 Diltiazem Hydrochloride 30 mg"
  },
  {
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
      "Disulfiram 500 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-047",
    "composition": " \u2022 Disulfiram 500 mg"
  },
  {
    "name": "Docusatesodium Powder 100",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "85%",
      "100 MG",
      "20%",
      "86 MG"
    ],
    "ingredients": [
      "DOCUSATESODIUM 85%POWDER 100 MG",
      "SENNADRYEXTRACT 20% 86 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-048",
    "composition": " \u2022 DOCUSATESODIUM 85%POWDER 100 MG \u2022 SENNADRYEXTRACT 20% 86 MG"
  },
  {
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
      "s Contains : Doxylamine Succinate USP 25 mg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-049",
    "composition": " \u2022 s Contains : Doxylamine Succinate USP 25 mg"
  },
  {
    "name": "Doxylaminesuccinate",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "20 MG",
      "1.0 MG",
      "10 MG",
      "2.5 MCG"
    ],
    "ingredients": [
      "DOXYLAMINESUCCINATE 20 MG",
      "L-Methylfolate Calcium 1.0 MG",
      "PYRIDOXAL 5 PHOSPHATE 10 MG",
      "Cyanocobalamin 2.5 MCG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-050",
    "composition": " \u2022 DOXYLAMINESUCCINATE 20 MG \u2022 L-Methylfolate Calcium 1.0 MG \u2022 PYRIDOXAL 5 PHOSPHATE 10 MG \u2022 Cyanocobalamin 2.5 MCG"
  },
  {
    "name": "Dutasteride Capsules IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.5 MG"
    ],
    "ingredients": [
      "Dutasteride IP 0.5 MG"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-051",
    "composition": " \u2022 Dutasteride IP 0.5 MG"
  },
  {
    "name": "Empagliflozin and Metformin Hydrochloride",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Empagliflozin and Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-052",
    "composition": " \u2022 Empagliflozin and Metformin Hydrochloride"
  },
  {
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
      "Empagliflozin IH 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-053",
    "composition": " \u2022 Empagliflozin IH 10 mg"
  },
  {
    "name": "Estradiol and Dydrogesterone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg",
      "10 mg"
    ],
    "ingredients": [
      "Estradiol and Dydrogesterone 2 mg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-054",
    "composition": " \u2022 Estradiol and Dydrogesterone 2 mg"
  },
  {
    "name": "Etoricoxib & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Etoricoxib",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-055",
    "composition": " \u2022 Etoricoxib \u2022 Thiocolchicoside"
  },
  {
    "name": "Etoricoxib Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "120 mg"
    ],
    "ingredients": [
      "Etoricoxib IP 120 mg",
      "Etoricoxib"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-056",
    "composition": " \u2022 Etoricoxib IP 120 mg \u2022 Etoricoxib"
  },
  {
    "name": "Febuxostat Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "80 mg"
    ],
    "ingredients": [
      "Febuxostat 80 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-057",
    "composition": " \u2022 Febuxostat 80 mg"
  },
  {
    "name": "Ferric Pyrophosphate (Liposomal",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "15 mg",
      "35 mg",
      "2.5 mcg",
      "570 mcg",
      "50 mg"
    ],
    "ingredients": [
      "Ferric Pyrophosphate (Liposomal grade ) 15 mg",
      "Ascorbic Acid Coated(Vitamin C) 35 mg",
      "Cyanocobalamin 2.5 mcg",
      "Folic Acid 570 mcg",
      "Lactoferrin 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-058",
    "composition": " \u2022 Ferric Pyrophosphate (Liposomal grade ) 15 mg \u2022 Ascorbic Acid Coated(Vitamin C) 35 mg \u2022 Cyanocobalamin 2.5 mcg \u2022 Folic Acid 570 mcg \u2022 Lactoferrin 50 mg"
  },
  {
    "name": "Ferric Pyrophosphate 30",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "30 mg",
      "35 mg",
      "0.5 mcg",
      "570 mcg"
    ],
    "ingredients": [
      "Ferric Pyrophosphate 30 mg",
      "Ascorbic Acidcoated(Vitamin C) 35 mg",
      "Cyanocobalamin 0.5 mcg",
      "Folic Acid 570 mcg"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-059",
    "composition": " \u2022 Ferric Pyrophosphate 30 mg \u2022 Ascorbic Acidcoated(Vitamin C) 35 mg \u2022 Cyanocobalamin 0.5 mcg \u2022 Folic Acid 570 mcg"
  },
  {
    "name": "Ferricpyrophosphate",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "30 MG",
      "35 MG",
      "0.5 MCG",
      "570 MCG"
    ],
    "ingredients": [
      "FERRICPYROPHOSPHATE 30 MG",
      "Ascorbic Acid 35 MG",
      "Cyanocobalamin 0.5 MCG",
      "Folic Acid 570 MCG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-060",
    "composition": " \u2022 FERRICPYROPHOSPHATE 30 MG \u2022 Ascorbic Acid 35 MG \u2022 Cyanocobalamin 0.5 MCG \u2022 Folic Acid 570 MCG"
  },
  {
    "name": "Ferrous Ascorbate, Folic Acid & Methylcobalamin Softgel",
    "division": "Softgel",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "5 mg",
      "750 mcg",
      "100 mg",
      "1.5 mg",
      "22.5 mg",
      "75 mg"
    ],
    "ingredients": [
      "Folic Acid 5 mg",
      "Methylcobalamin 750 mcg",
      "Ferrous Ascorbate Eq. to Elemental Iron 100 mg",
      "Folic Acid 1.5 mg",
      "Methylcobalamin 1.5 mg",
      "Zinc Sulphate Monohydrate Eq. to elemental Zinc 22.5 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-061",
    "composition": " \u2022 Folic Acid 5 mg \u2022 Methylcobalamin 750 mcg \u2022 Ferrous Ascorbate Eq. to Elemental Iron 100 mg \u2022 Folic Acid 1.5 mg \u2022 Methylcobalamin 1.5 mg \u2022 Zinc Sulphate Monohydrate Eq. to elemental Zinc 22.5 mg"
  },
  {
    "name": "Ferrousbisglycinate",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "40 MG",
      "5 MG",
      "570 MCG",
      "2.5 MCG",
      "2 MG"
    ],
    "ingredients": [
      "FERROUSBISGLYCINATE 200 mg",
      "Eq. toelementaliron 40 MG",
      "Calcium D-Pantothenate 5 MG",
      "Folic Acid 570 MCG",
      "Cyanocobalamin 2.5 MCG",
      "Vitamin B1 2 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-062",
    "composition": " \u2022 FERROUSBISGLYCINATE 200 mg \u2022 Eq. toelementaliron 40 MG \u2022 Calcium D-Pantothenate 5 MG \u2022 Folic Acid 570 MCG \u2022 Cyanocobalamin 2.5 MCG \u2022 Vitamin B1 2 MG"
  },
  {
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
      "Flavoxate Hydrochloride IP 200 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-063",
    "composition": " \u2022 Flavoxate Hydrochloride IP 200 mg"
  },
  {
    "name": "Fluconazole Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg"
    ],
    "ingredients": [
      "Fluconazole 150 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-064",
    "composition": " \u2022 Fluconazole 150 mg"
  },
  {
    "name": "Folic Acid Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 IU",
      "50 mcg",
      "5 mg"
    ],
    "ingredients": [
      "Folic Acid IP 50 mcg",
      "Folic Acid Tablets IP 5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-065",
    "composition": " \u2022 Folic Acid IP 50 mcg \u2022 Folic Acid Tablets IP 5 mg"
  },
  {
    "name": "Fructo-oligosaccharide",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 MG"
    ],
    "ingredients": [
      "FRUCTO-OLIGOSACCHARIDE 100 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-066",
    "composition": " \u2022 FRUCTO-OLIGOSACCHARIDE 100 MG"
  },
  {
    "name": "Gabapentin & Methylcobalamin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Gabapentin",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-067",
    "composition": " \u2022 Gabapentin \u2022 Methylcobalamin"
  },
  {
    "name": "Gabapentin Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2018 G",
      "200 mg"
    ],
    "ingredients": [
      "Export Only) IP 2018 Gabapentin IP 200 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-068",
    "composition": " \u2022 Export Only) IP 2018 Gabapentin IP 200 mg"
  },
  {
    "name": "Garlic Extract, Ginger Extract & Herbal Softgel Complex",
    "division": "Softgel",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "FOOD",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "15 mg",
      "50 mg",
      "2 mg",
      "20 mg",
      "10 mg",
      "5 mg"
    ],
    "ingredients": [
      "L- Glutathione 2 mg",
      "Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg",
      "Vitamin D3 200 IU wheat Germ Oil 25 mg",
      "Menadione Sodium Bisulphate (Vit.K) 10 mcg",
      "Benfotiamine 1.5 mg",
      "Vitamin B6 1 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-069",
    "composition": " \u2022 L- Glutathione 2 mg \u2022 Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg \u2022 Vitamin D3 200 IU wheat Germ Oil 25 mg \u2022 Menadione Sodium Bisulphate (Vit.K) 10 mcg \u2022 Benfotiamine 1.5 mg \u2022 Vitamin B6 1 mg"
  },
  {
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
      "Griseofulvin IP 500 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-070",
    "composition": " \u2022 Griseofulvin IP 500 mg"
  },
  {
    "name": "Indapamide Prolonged Release Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1.5 mg"
    ],
    "ingredients": [
      "Indapamide Prolonged Release 1.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-071",
    "composition": " \u2022 Indapamide Prolonged Release 1.5 mg"
  },
  {
    "name": "Iodine as Sodium Iodide Complex",
    "division": "Softgel",
    "category": "Gastroenterology",
    "regulatoryType": "FOOD",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "40 mg",
      "150 mcg",
      "10 mg",
      "75 mg",
      "500 mcg",
      "17 mg"
    ],
    "ingredients": [
      "Iodine as Sodium Iodide 150 mcg",
      "Magnesium as magnesium Oxide 10 mg",
      "Calcium as Calcium Phosphate 75 mg",
      "Iron as Ferrous Fumarate 17 mg",
      "Zinc as Zinc Oxide 10 mg",
      "Alpha Lipoic Acid 50 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-072",
    "composition": " \u2022 Iodine as Sodium Iodide 150 mcg \u2022 Magnesium as magnesium Oxide 10 mg \u2022 Calcium as Calcium Phosphate 75 mg \u2022 Iron as Ferrous Fumarate 17 mg \u2022 Zinc as Zinc Oxide 10 mg \u2022 Alpha Lipoic Acid 50 mg"
  },
  {
    "name": "Iodine, Magnesium & Trace Mineral Softgel",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "65 mcg",
      "25 mcg",
      "20 mcg",
      "4 mg",
      "3.6 mg",
      "150 mcg"
    ],
    "ingredients": [
      "Magnesium 65 mcg",
      "Trace Mineral 25 mcg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-073",
    "composition": " \u2022 Magnesium 65 mcg \u2022 Trace Mineral 25 mcg"
  },
  {
    "name": "Isoxsuprine Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "20 mg"
    ],
    "ingredients": [
      "Isoxsuprine Hydrochloride IP 40 mg",
      "Isoxsuprine Hydrochloride 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-074",
    "composition": " \u2022 Isoxsuprine Hydrochloride IP 40 mg \u2022 Isoxsuprine Hydrochloride 20 mg"
  },
  {
    "name": "Ivermectin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "6 mg"
    ],
    "ingredients": [
      "Ivermectin Tablets IP (Active Pharmaceutical Ingredient)"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-075",
    "composition": " \u2022 Ivermectin Tablets IP (Active Pharmaceutical Ingredient)"
  },
  {
    "name": "L-arginine",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "1000 mg",
      "10%",
      "2.5 mg"
    ],
    "ingredients": [
      "L-arginine 1000 mg",
      "Lycopenepowder 10% 2.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-076",
    "composition": " \u2022 L-arginine 1000 mg \u2022 Lycopenepowder 10% 2.5 mg"
  },
  {
    "name": "L-argininehcl",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "140 MG",
      "200 MG",
      "9 MG",
      "7.5 MG",
      "3 MG",
      "200 MCG"
    ],
    "ingredients": [
      "L-Arginine HCl 140 MG",
      "Green Tea Extract 200 MG",
      "CHASTBERRYDRYEXTRACT 200 MG",
      "Magnesium Oxide LIGHT 200 MG",
      "Carbonyl Iron & Folic Acid 9 MG",
      "ZINCGLUCONATE 7.5 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-077",
    "composition": " \u2022 L-Arginine HCl 140 MG \u2022 Green Tea Extract 200 MG \u2022 CHASTBERRYDRYEXTRACT 200 MG \u2022 Magnesium Oxide LIGHT 200 MG \u2022 Carbonyl Iron & Folic Acid 9 MG \u2022 ZINCGLUCONATE 7.5 MG"
  },
  {
    "name": "L-carnitine",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "500 MG",
      "50 MG",
      "10%",
      "2500 MCG",
      "5 MG",
      "8 MG"
    ],
    "ingredients": [
      "L-CARNITINE 500 MG",
      "Coenzyme Q10-10 50 MG",
      "Lycopene (10%) 2500 MCG",
      "Zinc Sulphate Monohydrate 5 MG",
      "Astaxanthin (10%) 8 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-078",
    "composition": " \u2022 L-CARNITINE 500 MG \u2022 Coenzyme Q10-10 50 MG \u2022 Lycopene (10%) 2500 MCG \u2022 Zinc Sulphate Monohydrate 5 MG \u2022 Astaxanthin (10%) 8 MG"
  },
  {
    "name": "L-carnitinebase",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
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
      "LEPIDIUM 100 MG",
      "L-METHYLFOLATE 0.5 MG",
      "Cyanocobalamin 2.5 MCG",
      "Zinc Sulphate Monohydrate 17 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-079",
    "composition": " \u2022 L-CARNITINEBASE 50 MG \u2022 Coenzyme Q10 200 MG \u2022 LEPIDIUM 100 MG \u2022 L-METHYLFOLATE 0.5 MG \u2022 Cyanocobalamin 2.5 MCG \u2022 Zinc Sulphate Monohydrate 17 MG"
  },
  {
    "name": "L-carnitinel-tartrate",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "200 mg",
      "10%",
      "30 mg",
      "5 mg",
      "8 mg"
    ],
    "ingredients": [
      "L-Carnitine L-Tartrate 500 mg",
      "Coenzyme Q10(UBIQUINONEACETATE) 200 mg",
      "Lycopene (10%) 30 mg",
      "Zincsulphate Monohydrate 5 mg",
      "Astaxanthin 10%powder 8 mg"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-080",
    "composition": " \u2022 L-Carnitine L-Tartrate 500 mg \u2022 Coenzyme Q10(UBIQUINONEACETATE) 200 mg \u2022 Lycopene (10%) 30 mg \u2022 Zincsulphate Monohydrate 5 mg \u2022 Astaxanthin 10%powder 8 mg"
  },
  {
    "name": "L-isoleucine",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg",
      "65 mg",
      "80 mg",
      "35 mg",
      "15 mg",
      "5 mg"
    ],
    "ingredients": [
      "L-isoleucine 50 mg",
      "L-leucine 65 mg",
      "Llysinehydrochloride 80 mg",
      "L-valine 35 mg",
      "L-methionine 15 mg",
      "L-threonine 15 mg"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-081",
    "composition": " \u2022 L-isoleucine 50 mg \u2022 L-leucine 65 mg \u2022 Llysinehydrochloride 80 mg \u2022 L-valine 35 mg \u2022 L-methionine 15 mg \u2022 L-threonine 15 mg"
  },
  {
    "name": "L-Methionine",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 MG",
      "30 MG",
      "15 MG",
      "40 MG",
      "500 MG",
      "25 MG"
    ],
    "ingredients": [
      "L-Methionine 50 MG",
      "L-Threonine 30 MG",
      "L-Tryptophan 15 MG",
      "L-Valine 40 MG",
      "L-Isoleucine 30 MG",
      "L-Phenylalanine 40 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-082",
    "composition": " \u2022 L-Methionine 50 MG \u2022 L-Threonine 30 MG \u2022 L-Tryptophan 15 MG \u2022 L-Valine 40 MG \u2022 L-Isoleucine 30 MG \u2022 L-Phenylalanine 40 MG"
  },
  {
    "name": "Lactic Acid Bacillus 120 Million Viable Spores",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Lactic Acid Bacillus 120 Million Viable Spores"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-083",
    "composition": " \u2022 Lactic Acid Bacillus 120 Million Viable Spores"
  },
  {
    "name": "Lactic Acid Bacillus 60 Million Viable Spores",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Lactic Acid Bacillus 60 Million Viable Spores"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-084",
    "composition": " \u2022 Lactic Acid Bacillus 60 Million Viable Spores"
  },
  {
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
      "Levetiracetam Prolonged Release 750 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-085",
    "composition": " \u2022 Levetiracetam Prolonged Release 750 mg"
  },
  {
    "name": "Losartan Potassium & Chlorthalidone Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "6.25 mg"
    ],
    "ingredients": [
      "Losartan Potassium 25 mg",
      "Chlorthalidone 6.25 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-086",
    "composition": " \u2022 Losartan Potassium 25 mg \u2022 Chlorthalidone 6.25 mg"
  },
  {
    "name": "Losartan Potassium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "ingredients": [
      "IP 25 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-087",
    "composition": " \u2022 IP 25 mg"
  },
  {
    "name": "Lycopenepowder 2",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "10%",
      "2 MG",
      "25 MG",
      "12 MG",
      "50%",
      "8 MG"
    ],
    "ingredients": [
      "Lycopene (10%) 2 MG",
      "Ascorbic Acid (Coated) 25 MG",
      "Vitamin B3 12 MG",
      "Vitamin E Acetate (50% Powder) 8 MG",
      "Calcium D-Pantothenate 3 MG",
      "Vitamin B2 0.9 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-088",
    "composition": " \u2022 Lycopene (10%) 2 MG \u2022 Ascorbic Acid (Coated) 25 MG \u2022 Vitamin B3 12 MG \u2022 Vitamin E Acetate (50% Powder) 8 MG \u2022 Calcium D-Pantothenate 3 MG \u2022 Vitamin B2 0.9 MG"
  },
  {
    "name": "Lymecycline Capsules BP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [
      "408 mg",
      "300 mg"
    ],
    "ingredients": [
      "Lymecycline Equivalent to Tetracyclinebase BP 408 mg 300 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-089",
    "composition": " \u2022 Lymecycline Equivalent to Tetracyclinebase BP 408 mg 300 mg"
  },
  {
    "name": "Magnesiumbisglycinate",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "350 MG",
      "1000 MG",
      "600 IU"
    ],
    "ingredients": [
      "MAGNESIUMBISGLYCINATE 350 MG",
      "Calcium Citrate MALATE 1000 MG",
      "Vitamin D3 STABILIZED 600 IU"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-090",
    "composition": " \u2022 MAGNESIUMBISGLYCINATE 350 MG \u2022 Calcium Citrate MALATE 1000 MG \u2022 Vitamin D3 STABILIZED 600 IU"
  },
  {
    "name": "Manganese, Copper & Trace Mineral Softgel Complex",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "30 mg",
      "1.5 mg",
      "0.5 mg",
      "65 mcg",
      "25 mcg",
      "20 mcg"
    ],
    "ingredients": [
      "Green tea extract Eq. to Polyphenol 10 mg",
      "Ginseng extarct 42.5 mg",
      "Ginkgo Biloba extract 10 mg",
      "Grape Seed extract 15 mg",
      "Garlic Extract 50 mg",
      "Ginger Extract 2 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-091",
    "composition": " \u2022 Green tea extract Eq. to Polyphenol 10 mg \u2022 Ginseng extarct 42.5 mg \u2022 Ginkgo Biloba extract 10 mg \u2022 Grape Seed extract 15 mg \u2022 Garlic Extract 50 mg \u2022 Ginger Extract 2 mg"
  },
  {
    "name": "Mebeverine Hydrochloride (as sustained",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "ingredients": [
      "Mebeverine Hydrochloride (as sustained release form) IP 200 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-092",
    "composition": " \u2022 Mebeverine Hydrochloride (as sustained release form) IP 200 mg"
  },
  {
    "name": "Mebeverine Hydrochloride Prolonged Release Capsule",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Mebeverine Hydrochloride Prolonged Release"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-093",
    "composition": " \u2022 Mebeverine Hydrochloride Prolonged Release"
  },
  {
    "name": "Mebeverine Hydrochloride Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "135 mg"
    ],
    "ingredients": [
      "Mebeverine Hydrochloride 135 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-094",
    "composition": " \u2022 Mebeverine Hydrochloride 135 mg"
  },
  {
    "name": "Mefenamic Acid & Dicyclomine Hydrochloride",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg",
      "10 mg"
    ],
    "ingredients": [
      "Tablets IP Mefenamic Acid IP 250 mg",
      "Dicyclomine Hydrochloride IP 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-095",
    "composition": " \u2022 Tablets IP Mefenamic Acid IP 250 mg \u2022 Dicyclomine Hydrochloride IP 10 mg"
  },
  {
    "name": "Megestrol Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg",
      "40 mg"
    ],
    "ingredients": [
      "USP s Megestrol Acetate IP 80 mg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-096",
    "composition": " \u2022 USP s Megestrol Acetate IP 80 mg"
  },
  {
    "name": "Mesterolone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Mesterolone 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-097",
    "composition": " \u2022 Mesterolone 10 mg"
  },
  {
    "name": "Metformin Hydrochloride Prolonged Release Tablet",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1000 mg"
    ],
    "ingredients": [
      "Metformin Hydrochloride Prolonged Release 1000 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-098",
    "composition": " \u2022 Metformin Hydrochloride Prolonged Release 1000 mg"
  },
  {
    "name": "Methylcobalamin, Alpha Lipoic Acid & Multivitamin Complex",
    "division": "General",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Methylcobalamin, Alpha Loic Acid",
      "Multi Vitamin Complex"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-099",
    "composition": " \u2022 Methylcobalamin, Alpha Loic Acid \u2022 Multi Vitamin Complex"
  },
  {
    "name": "Methylcobalamin, Alpha Lipoicv Acid, Thiamine",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "500 mcg",
      "100 mg",
      "10 mg",
      "3 mg",
      "1.5 mg"
    ],
    "ingredients": [
      "Pyridoxine Hcl & Folic Acid Capsules s Methylcobalamin IP 500 mcg",
      "Alpha Lipoic Acid USP 100 mg",
      "Thiamine Mononitrate IP 10 mg",
      "Pyridoxine Hydrochloride IP 3 mg",
      "Folic Acid IP 1.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-100",
    "composition": " \u2022 Pyridoxine Hcl & Folic Acid Capsules s Methylcobalamin IP 500 mcg \u2022 Alpha Lipoic Acid USP 100 mg \u2022 Thiamine Mononitrate IP 10 mg \u2022 Pyridoxine Hydrochloride IP 3 mg \u2022 Folic Acid IP 1.5 mg"
  },
  {
    "name": "Methylcobalamin, Folic Acid & Pyridoxal-5-Phosphate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Methylcobalamin, Folic Acid",
      "Pyridoxal-5-Phosphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-101",
    "composition": " \u2022 Methylcobalamin, Folic Acid \u2022 Pyridoxal-5-Phosphate"
  },
  {
    "name": "Methylcobalamin, Vitamin A5000 I.",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mcg",
      "5000 IU",
      "400 IU",
      "25 mg",
      "50 mg",
      "10 mg"
    ],
    "ingredients": [
      "Methylcobalamin 500 mcg",
      "Vitamin A5000 IU",
      "Vitamin D3 400 IU",
      "Calcium Pantothenate 50 mg",
      "L-Glutamic Acid 50 mg",
      "Vitamin B1 10 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-102",
    "composition": " \u2022 Methylcobalamin 500 mcg \u2022 Vitamin A5000 IU \u2022 Vitamin D3 400 IU \u2022 Calcium Pantothenate 50 mg \u2022 L-Glutamic Acid 50 mg \u2022 Vitamin B1 10 mg"
  },
  {
    "name": "Methylprednisolone Tablets",
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
      "IP 16 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-103",
    "composition": " \u2022 IP 16 mg"
  },
  {
    "name": "Metoprolol Succinate (er) & Hydrochlorothiazide SR Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "47.50 mg",
      "50 mg",
      "12.5 mg"
    ],
    "ingredients": [
      "Metoprolol Succinate Equivalent to Metoprolol Tartrate(as extendedreleaseform) IP 47.50 mg 50 mg",
      "Hydrochlorothiazide IP 12.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-104",
    "composition": " \u2022 Metoprolol Succinate Equivalent to Metoprolol Tartrate(as extendedreleaseform) IP 47.50 mg 50 mg \u2022 Hydrochlorothiazide IP 12.5 mg"
  },
  {
    "name": "Metoprolol Succinate (er) & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Metoprolol Succinate (ER)",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-105",
    "composition": " \u2022 Metoprolol Succinate (ER) \u2022 Hydrochlorothiazide"
  },
  {
    "name": "Metoprolol Succinate Extended Release",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "23.75 mg",
      "25 mg",
      "12.5 mg"
    ],
    "ingredients": [
      "Hydrochlorothiazide Table ts Metoprolol Succinate Equivalent to Metoprolol Tartrate(as extendedreleaseform) IP 23.75 mg 25 mg",
      "Hydrochlorothiazide IP 12.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-106",
    "composition": " \u2022 Hydrochlorothiazide Table ts Metoprolol Succinate Equivalent to Metoprolol Tartrate(as extendedreleaseform) IP 23.75 mg 25 mg \u2022 Hydrochlorothiazide IP 12.5 mg"
  },
  {
    "name": "Metoprolol Succinate Prolonged Release Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Metoprolol Succinate Prolonged Release"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-107",
    "composition": " \u2022 Metoprolol Succinate Prolonged Release"
  },
  {
    "name": "Metoprolol Succinate(ER) & Telmisartan Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Metoprolol Succinate(ER)",
      "Telmisartan"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-108",
    "composition": " \u2022 Metoprolol Succinate(ER) \u2022 Telmisartan"
  },
  {
    "name": "Metoprolol Succinnate Equivalent to",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "23.75 mg",
      "47.50 mg"
    ],
    "ingredients": [
      "Metoprolol Succinnate Equivalent to Metoprolol Tartrate IP 23.75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-109",
    "composition": " \u2022 Metoprolol Succinnate Equivalent to Metoprolol Tartrate IP 23.75 mg"
  },
  {
    "name": "Minoxidil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "5.0 mg"
    ],
    "ingredients": [
      "Minoxidil IP 2.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-110",
    "composition": " \u2022 Minoxidil IP 2.5 mg"
  },
  {
    "name": "Misoprostrol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "200 mcg"
    ],
    "ingredients": [
      "Misoprostrol 200 mcg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-111",
    "composition": " \u2022 Misoprostrol 200 mcg"
  },
  {
    "name": "Moxifloxacin Tablets BP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "400 mg"
    ],
    "ingredients": [
      "Moxifloxacin Tablets BP (Active Pharmaceutical Ingredient)"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-112",
    "composition": " \u2022 Moxifloxacin Tablets BP (Active Pharmaceutical Ingredient)"
  },
  {
    "name": "Myo-inositol",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "550 MG",
      "13.8 MG",
      "10%",
      "500 MG",
      "0.5 MG",
      "1 MCG"
    ],
    "ingredients": [
      "MYO-INOSITOL 550 MG",
      "D-Chiro Inositol 13.8 MG",
      "BERBERINE 10%HYDROCHLORIDE 500 MG",
      "L-Methylfolate Calcium 0.5 MG",
      "Cyanocobalamin 1 MCG",
      "INOSITOL 550 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-113",
    "composition": " \u2022 MYO-INOSITOL 550 MG \u2022 D-Chiro Inositol 13.8 MG \u2022 BERBERINE 10%HYDROCHLORIDE 500 MG \u2022 L-Methylfolate Calcium 0.5 MG \u2022 Cyanocobalamin 1 MCG \u2022 INOSITOL 550 MG"
  },
  {
    "name": "Myo-Inositol & D-Chiro Inositol",
    "division": "Nutraceuticals",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "550 MG",
      "228 MG",
      "13.8 MG",
      "50 MG",
      "200 MCG",
      "7.5 MG"
    ],
    "ingredients": [
      "Myo-Inositol & D-Chiro Inositol 550 MG",
      "CINNAMONDRYEXTRACT 228 MG",
      "D-Chiro Inositol 13.8 MG",
      "N-ACETYLL-CYSTEINE 50 MG",
      "L-Methylfolate Calcium 200 MCG",
      "Zinc Sulphate Monohydrate 7.5 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-114",
    "composition": " \u2022 Myo-Inositol & D-Chiro Inositol 550 MG \u2022 CINNAMONDRYEXTRACT 228 MG \u2022 D-Chiro Inositol 13.8 MG \u2022 N-ACETYLL-CYSTEINE 50 MG \u2022 L-Methylfolate Calcium 200 MCG \u2022 Zinc Sulphate Monohydrate 7.5 MG"
  },
  {
    "name": "Naproxen & Domperidone Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "10 mg"
    ],
    "ingredients": [
      "Naproxen 500 mg",
      "Domperidone 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-115",
    "composition": " \u2022 Naproxen 500 mg \u2022 Domperidone 10 mg"
  },
  {
    "name": "Naproxen Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg",
      "500 mg"
    ],
    "ingredients": [
      "Naproxen IP 250 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-116",
    "composition": " \u2022 Naproxen IP 250 mg"
  },
  {
    "name": "Nicor & il Prolonged Release Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Nicor 10 mg",
      "il Prolonged Release 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-117",
    "composition": " \u2022 Nicor 10 mg \u2022 il Prolonged Release 10 mg"
  },
  {
    "name": "Nicor & il Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "ingredients": [
      "Nicor & il IP 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-118",
    "composition": " \u2022 Nicor & il IP 10 mg"
  },
  {
    "name": "Nifedipine Sustained Release Tablets IP",
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
      "Nifedine Sustained Release 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-119",
    "composition": " \u2022 Nifedine Sustained Release 10 mg"
  },
  {
    "name": "Nitrofurantoin Sustained Release Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Nitrofurantoin Sustained Release 100 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-120",
    "composition": " \u2022 Nitrofurantoin Sustained Release 100 mg"
  },
  {
    "name": "Norethisterone Tablets IP",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "20 mg"
    ],
    "ingredients": [
      "Norethisterone 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-121",
    "composition": " \u2022 Norethisterone 20 mg"
  },
  {
    "name": "Ofloxacin & Ornidazole Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "500 mg"
    ],
    "ingredients": [
      "Ofloxacin 200 mg",
      "Ornidazole 500 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-122",
    "composition": " \u2022 Ofloxacin 200 mg \u2022 Ornidazole 500 mg"
  },
  {
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
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-123",
    "composition": " \u2022 Ofloxacin"
  },
  {
    "name": "Omeprazole Enteric Coated Granules",
    "division": "Softgel",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "FOOD",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "20 mg",
      "75 mg",
      "1500 mcg",
      "6%",
      "5000 mcg",
      "60 mg"
    ],
    "ingredients": [
      "Enteric coated granules of Omeprazole Eq. to Omeprazole 20 mg",
      "Pregabalin 75 mg (as sustained release ) Methylcobalamin 1500 mcg",
      "Lycopene 6% 5000 mcg",
      "Ginkgo Biloba 60 mg",
      "Iron as Carbonyl Iron 10.25 mg",
      "Calcium as Calcium Carbonate 22.75 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-124",
    "composition": " \u2022 Enteric coated granules of Omeprazole Eq. to Omeprazole 20 mg \u2022 Pregabalin 75 mg (as sustained release ) Methylcobalamin 1500 mcg \u2022 Lycopene 6% 5000 mcg \u2022 Ginkgo Biloba 60 mg \u2022 Iron as Carbonyl Iron 10.25 mg \u2022 Calcium as Calcium Carbonate 22.75 mg"
  },
  {
    "name": "Ondansetron Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "8 mg"
    ],
    "ingredients": [
      "Ondansetron Hydrochloride Equivalent to Ondansetron IP 8 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-125",
    "composition": " \u2022 Ondansetron Hydrochloride Equivalent to Ondansetron IP 8 mg"
  },
  {
    "name": "Oxcarbazepine Tablets IP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg"
    ],
    "ingredients": [
      "Oxcarbazepine 300 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-126",
    "composition": " \u2022 Oxcarbazepine 300 mg"
  },
  {
    "name": "Pantoprazole Sodium (ec) & Itopride Hydrochloride SR Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "150 mg"
    ],
    "ingredients": [
      "Hydrochloride(Sustained Release )Capsules s Pantoprazole Sodium (as Enteric Coated Pellets) IP 40 mg",
      "Itopride Hydrochloride (as Sustained Releasepellets) 150 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-127",
    "composition": " \u2022 Hydrochloride(Sustained Release )Capsules s Pantoprazole Sodium (as Enteric Coated Pellets) IP 40 mg \u2022 Itopride Hydrochloride (as Sustained Releasepellets) 150 mg"
  },
  {
    "name": "Pantoprazole Sodium (Enteric Coated",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "75 mg"
    ],
    "ingredients": [
      ") & Levosulpiride(Sustained Release )Capsules s Pantoprazole Sodium (as Enteric Coated Pellets) IP 40 mg",
      "Levosulpiride (as Sustained Releasepellets) 75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-128",
    "composition": " \u2022 ) & Levosulpiride(Sustained Release )Capsules s Pantoprazole Sodium (as Enteric Coated Pellets) IP 40 mg \u2022 Levosulpiride (as Sustained Releasepellets) 75 mg"
  },
  {
    "name": "Paracetamol Tablets IP",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "650 mg",
      "500 mg"
    ],
    "ingredients": [
      "Paracetamol 650 mg",
      "Paracetamol BP 500 mg",
      "Paracetamol 500 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-129",
    "composition": " \u2022 Paracetamol 650 mg \u2022 Paracetamol BP 500 mg \u2022 Paracetamol 500 mg"
  },
  {
    "name": "Paroxetine Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "ingredients": [
      "Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine IP 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-130",
    "composition": " \u2022 Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine IP 20 mg"
  },
  {
    "name": "Phosphorus, Iron, Zinc",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "75 mg",
      "58 mg",
      "17 mg",
      "10 mg",
      "3 mg",
      "2 mg"
    ],
    "ingredients": [
      "Phosphorus 58 mg",
      "Iron 17 mg",
      "Zinc 10 mg",
      "Magnesium 3 mg",
      "Vitamin B1 1 mg",
      "Vitamin B2 1.5 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-131",
    "composition": " \u2022 Phosphorus 58 mg \u2022 Iron 17 mg \u2022 Zinc 10 mg \u2022 Magnesium 3 mg \u2022 Vitamin B1 1 mg \u2022 Vitamin B2 1.5 mg"
  },
  {
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
      "Prednisolone 5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-132",
    "composition": " \u2022 Prednisolone 5 mg"
  },
  {
    "name": "Pregabalin Capsules BP",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [
      "300 mg"
    ],
    "ingredients": [
      "Pregabalin 300 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-133",
    "composition": " \u2022 Pregabalin 300 mg"
  },
  {
    "name": "Pregabalin Sustained Release Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg"
    ],
    "ingredients": [
      "Pregabalin Sustained Release 75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-134",
    "composition": " \u2022 Pregabalin Sustained Release 75 mg"
  },
  {
    "name": "Preprobioticblend",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "300 MG"
    ],
    "ingredients": [
      "PREPROBIOTICBLEND 300 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-135",
    "composition": " \u2022 PREPROBIOTICBLEND 300 MG"
  },
  {
    "name": "Propranolol Hydrochloride Sustained Release &",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "ingredients": [
      "Flunarizine Dihydrochloride Tablets Contains : Propranolol Hydrochloride (as sustained release form) IP 40 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-136",
    "composition": " \u2022 Flunarizine Dihydrochloride Tablets Contains : Propranolol Hydrochloride (as sustained release form) IP 40 mg"
  },
  {
    "name": "Protein & Essential Amino Acids Powder",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Sachet",
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
      "PROTEIN 43.63 GM L-LEUCINE 7.22 GM L-ISOLEUCINE 3.99 GM L-VALINE 3.8 GM L-METHIONINE 0.736 GM L-PHENYLALANINE 1.196 GM L-THREONINE 2.484 GM L-TRYPTOPHAN 0.644 GM L-HISTIDINE 0.51 GM L-ALANINE 2.11 GM L-ARGININE 1.16 GM ASPARTICACID 4.46 GM CYSTEINE 0.89 GM L-GLUTAMICACID 7.3 GM GLYCINE 0.8 GM PROLINE 2.44 G",
      "Distt.Solan(H.P) SERINE 2.11 GM TYROSIN 1.26 GM L-CARNITINE 0.05 GM PALATINOSE(ISOMALTULOSE) 23.96 GM CALCIUM 386 MG",
      "PHOSPHORUS 240 MG",
      "MAGNESIUM 78 MG",
      "Vitamin D3 120 IU",
      "Vitamin K18 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-137",
    "composition": " \u2022 PROTEIN 43.63 GM L-LEUCINE 7.22 GM L-ISOLEUCINE 3.99 GM L-VALINE 3.8 GM L-METHIONINE 0.736 GM L-PHENYLALANINE 1.196 GM L-THREONINE 2.484 GM L-TRYPTOPHAN 0.644 GM L-HISTIDINE 0.51 GM L-ALANINE 2.11 GM L-ARGININE 1.16 GM ASPARTICACID 4.46 GM CYSTEINE 0.89 GM L-GLUTAMICACID 7.3 GM GLYCINE 0.8 GM PROLINE 2.44 G \u2022 Distt.Solan(H.P) SERINE 2.11 GM TYROSIN 1.26 GM L-CARNITINE 0.05 GM PALATINOSE(ISOMALTULOSE) 23.96 GM CALCIUM 386 MG \u2022 PHOSPHORUS 240 MG \u2022 MAGNESIUM 78 MG \u2022 Vitamin D3 120 IU \u2022 Vitamin K18 MG"
  },
  {
    "name": "Quatrefolic (L-Methylfolate) & Active B-Complex Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "570 mcg",
      "2.5 mcg",
      "2.3 mg",
      "600 IU"
    ],
    "ingredients": [
      "Quatrefolic (5-MTHF) 570 mcg",
      "Cyanocobalamin (Vitamin B12) 2.5 mcg",
      "Pyridoxal-5-Phosphate (Vitamin B6) 2.3 mg",
      "L-Glycine 10 mg",
      "Vitamin D3 600 IU"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-138",
    "composition": " \u2022 Quatrefolic (5-MTHF) 570 mcg \u2022 Cyanocobalamin (Vitamin B12) 2.5 mcg \u2022 Pyridoxal-5-Phosphate (Vitamin B6) 2.3 mg \u2022 L-Glycine 10 mg \u2022 Vitamin D3 600 IU"
  },
  {
    "name": "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "30 mg"
    ],
    "ingredients": [
      "Rabeprazole Sodium (EC) IP 20 mg",
      "Domperidone (SR) IP 30 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-139",
    "composition": " \u2022 Rabeprazole Sodium (EC) IP 20 mg \u2022 Domperidone (SR) IP 30 mg"
  },
  {
    "name": "Rabeprazole Sodium (EC) & Itopride Hydrochloride (SR) Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "150 mg"
    ],
    "ingredients": [
      "Rabeprazole Sodium (EC) IP 20 mg",
      "Itopride Hydrochloride (SR) 150 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-140",
    "composition": " \u2022 Rabeprazole Sodium (EC) IP 20 mg \u2022 Itopride Hydrochloride (SR) 150 mg"
  },
  {
    "name": "Rabeprazole Sodium Enteric Coated Tablets IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "ingredients": [
      "Rabeprazole Sodium (EC) IP 20 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-141",
    "composition": " \u2022 Rabeprazole Sodium (EC) IP 20 mg"
  },
  {
    "name": "Rifaximin Tablets IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg",
      "400 mg"
    ],
    "ingredients": [
      "Rifaximin IP 400 mg",
      "Rifaximin IP 200 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-142",
    "composition": " \u2022 Rifaximin IP 400 mg \u2022 Rifaximin IP 200 mg"
  },
  {
    "name": "Rosuvastatin & Ezetimibe Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg",
      "20 mg",
      "40 mg"
    ],
    "ingredients": [
      "Rosuvastatin IP 5 mg",
      "Ezetimibe IP 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-143",
    "composition": " \u2022 Rosuvastatin IP 5 mg \u2022 Ezetimibe IP 10 mg"
  },
  {
    "name": "Rosuvastatin & Fenofibrate Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg",
      "160 mg"
    ],
    "ingredients": [
      "Rosuvastatin IP 10 mg",
      "Fenofibrate IP 160 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-144",
    "composition": " \u2022 Rosuvastatin IP 10 mg \u2022 Fenofibrate IP 160 mg"
  },
  {
    "name": "Rosuvastatin, Aspirin & Clopidogrel Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "75 mg"
    ],
    "ingredients": [
      "Rosuvastatin Calcium 10 mg",
      "Aspirin 75 mg",
      "Clopidogrel Bisulfate 75 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-145",
    "composition": " \u2022 Rosuvastatin Calcium 10 mg \u2022 Aspirin 75 mg \u2022 Clopidogrel Bisulfate 75 mg"
  },
  {
    "name": "Roxithromycin Tablets IP",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg"
    ],
    "ingredients": [
      "Roxithromycin IP 150 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-146",
    "composition": " \u2022 Roxithromycin IP 150 mg"
  },
  {
    "name": "Sevelamer Carbonate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "800 mg"
    ],
    "ingredients": [
      "Sevelamer Carbonate 800 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-147",
    "composition": " \u2022 Sevelamer Carbonate 800 mg"
  },
  {
    "name": "Sildenafil Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "ingredients": [
      "Sildenafil Citrate Equivalent to Sildenafil IP 100 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-148",
    "composition": " \u2022 Sildenafil Citrate Equivalent to Sildenafil IP 100 mg"
  },
  {
    "name": "Sodium Bicarbonate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "ingredients": [
      "USP Each Film Coated Tablet Contains : Sodium Bicarbonate IP 1000 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-149",
    "composition": " \u2022 USP Each Film Coated Tablet Contains : Sodium Bicarbonate IP 1000 mg"
  },
  {
    "name": "Sodium Feredetate, Folic Acid, Vitamin B12 & Zinc Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "350 mg",
      "1.5 mg",
      "15 mcg",
      "61.8 mg"
    ],
    "ingredients": [
      "Sulphate Tablets Contains : 14.10.25 Sodium Feredetate BP 350 mg",
      "Folic Acid IP 1.5 mg",
      "Vitamin B12 IP 15 mcg",
      "Zinc Sulphate Monohydrate IP 61.8 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-150",
    "composition": " \u2022 Sulphate Tablets Contains : 14.10.25 Sodium Feredetate BP 350 mg \u2022 Folic Acid IP 1.5 mg \u2022 Vitamin B12 IP 15 mcg \u2022 Zinc Sulphate Monohydrate IP 61.8 mg"
  },
  {
    "name": "Soyaisoflavonesext 100",
    "division": "Nutraceuticals",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [
      "40%",
      "100 MG",
      "75 MG",
      "50%",
      "20 MG",
      "15 MG"
    ],
    "ingredients": [
      "SOYAISOFLAVONESEXT 40% 100 MG",
      "MAGNESIUMHYDROXIDE 100 MG",
      "Ascorbic Acid (Coated) 75 MG",
      "Vitamin E Acetate (50% Powder) 20 MG",
      "Vitamin B3 20 MG",
      "Vitamin B6 20 MG"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "id": "p-151",
    "composition": " \u2022 SOYAISOFLAVONESEXT 40% 100 MG \u2022 MAGNESIUMHYDROXIDE 100 MG \u2022 Ascorbic Acid (Coated) 75 MG \u2022 Vitamin E Acetate (50% Powder) 20 MG \u2022 Vitamin B3 20 MG \u2022 Vitamin B6 20 MG"
  },
  {
    "name": "Tadalafil Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "5 mg"
    ],
    "ingredients": [
      "Tadalafil IP 2.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-152",
    "composition": " \u2022 Tadalafil IP 2.5 mg"
  },
  {
    "name": "Tadalafiland Dapoxetine Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "ingredients": [
      "Tadalafiland Dapoxetine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-153",
    "composition": " \u2022 Tadalafiland Dapoxetine"
  },
  {
    "name": "Telmisartan & Indapami de (sr)",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "1.5 mg"
    ],
    "ingredients": [
      "Telmisartan 40 mg",
      "Indapami de (SR) 1.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-154",
    "composition": " \u2022 Telmisartan 40 mg \u2022 Indapami de (SR) 1.5 mg"
  },
  {
    "name": "Telmisartan & Ramipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "2.5 mg"
    ],
    "ingredients": [
      "Telmisartan 40 mg",
      "Ramril 2.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-155",
    "composition": " \u2022 Telmisartan 40 mg \u2022 Ramril 2.5 mg"
  },
  {
    "name": "Thiocolchicoside Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "4 mg",
      "8 mg"
    ],
    "ingredients": [
      "IP 4 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-156",
    "composition": " \u2022 IP 4 mg"
  },
  {
    "name": "Torsemide Tablets IP",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "ingredients": [
      "Torsemide IP 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-157",
    "composition": " \u2022 Torsemide IP 10 mg"
  },
  {
    "name": "Toxicon Doxylamine Succinate",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg",
      "2.5 mg"
    ],
    "ingredients": [
      "Pyridoxine Hydrochloride & Fol ic Acid Tablets Each Enteric Coated Tablet Doxylamine Succinate USP 10 mg",
      "Pyridoxine Hydrochloride BP 10 mg",
      "Folic Acid BP 2.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-158",
    "composition": " \u2022 Pyridoxine Hydrochloride & Fol ic Acid Tablets Each Enteric Coated Tablet Doxylamine Succinate USP 10 mg \u2022 Pyridoxine Hydrochloride BP 10 mg \u2022 Folic Acid BP 2.5 mg"
  },
  {
    "name": "Tranexamic Acid Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg"
    ],
    "ingredients": [
      "Tranexamic Acid IP 500 mg",
      "Tranexamic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-159",
    "composition": " \u2022 Tranexamic Acid IP 500 mg \u2022 Tranexamic Acid"
  },
  {
    "name": "Triamcinolone Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "4 mg"
    ],
    "ingredients": [
      "Triamcinolone 4 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-160",
    "composition": " \u2022 Triamcinolone 4 mg"
  },
  {
    "name": "Trypsin, Bromelain & Rutoside Trihydrate Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [],
    "ingredients": [
      "Trypsin, Bromelain",
      "Rutoside Trihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-161",
    "composition": " \u2022 Trypsin, Bromelain \u2022 Rutoside Trihydrate"
  },
  {
    "name": "Trypsin-Chymotrypsin & Diclofenac Potassium Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "325 mg"
    ],
    "ingredients": [
      "Paracetamol Tablets Each Enteric Coated Tablet Contains : 50000 Armour units of enzymatic activity supplied by a purified concentrate which hs specific Trypsin & Chymotrypsin activity in a ratio of approximately 6:1 Diclofenac Potassium IP 50 mg",
      "Paracetamol IP 325 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-162",
    "composition": " \u2022 Paracetamol Tablets Each Enteric Coated Tablet Contains : 50000 Armour units of enzymatic activity supplied by a purified concentrate which hs specific Trypsin & Chymotrypsin activity in a ratio of approximately 6:1 Diclofenac Potassium IP 50 mg \u2022 Paracetamol IP 325 mg"
  },
  {
    "name": "Ulipristal Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "ingredients": [
      "Ulristal Acetate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-163",
    "composition": " \u2022 Ulristal Acetate"
  },
  {
    "name": "Ursodeoxycholic Acid Sustained Release Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "450 mg"
    ],
    "ingredients": [
      "Ursodeoxycholic Acid Sustained Release 450 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-164",
    "composition": " \u2022 Ursodeoxycholic Acid Sustained Release 450 mg"
  },
  {
    "name": "Ursodeoxycholic Acid Tablets IP",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 MG"
    ],
    "ingredients": [
      "Ursodeoxycholic Acid 300 MG"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-165",
    "composition": " \u2022 Ursodeoxycholic Acid 300 MG"
  },
  {
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
      "Vardenafil Hydrochloride Trihydrate Equivalent to Vardenafil BP 10 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-166",
    "composition": " \u2022 Vardenafil Hydrochloride Trihydrate Equivalent to Vardenafil BP 10 mg"
  },
  {
    "name": "Vitamin B",
    "division": "General",
    "category": "Orthopedics & Joint Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "3 mg",
      "15 mcg",
      "45 mg",
      "50 mg"
    ],
    "ingredients": [
      "B12 Thiamine Mononitrate IP 10 mg",
      "Riboflavin IP 10 mg",
      "Pyridoxine Hydrochloride IP 3 mg",
      "Cyanocobalamin IP 15 mcg",
      "Nicotinamide IP 45 mg",
      "Calcium Pantothenate IP 50 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-167",
    "composition": " \u2022 B12 Thiamine Mononitrate IP 10 mg \u2022 Riboflavin IP 10 mg \u2022 Pyridoxine Hydrochloride IP 3 mg \u2022 Cyanocobalamin IP 15 mcg \u2022 Nicotinamide IP 45 mg \u2022 Calcium Pantothenate IP 50 mg"
  },
  {
    "name": "Vitamin D3 (Stabilized)",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4.5 mg",
      "3000 IU"
    ],
    "ingredients": [
      "Vitamin D3 (Stabilized) IP 3000 IU"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "id": "p-168",
    "composition": " \u2022 Vitamin D3 (Stabilized) IP 3000 IU"
  },
  {
    "name": "Voglibose & Metformin Hcl Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "0.2 mg"
    ],
    "ingredients": [
      "Voglibose 500 mg",
      "Metformin Hcl 0.2 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-169",
    "composition": " \u2022 Voglibose 500 mg \u2022 Metformin Hcl 0.2 mg"
  },
  {
    "name": "Zinc Oxide, Ferrous Fumarate & Multivitamin Softgel",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "162 mg",
      "12 mg",
      "17 mg",
      "33 mcg",
      "1.35 mg",
      "1.4 mcg"
    ],
    "ingredients": [
      "Zinc as Zinc Oxide 12 mg",
      "Iron as Ferrous Fumarate 17 mg",
      "Sodium as Sodium Carbonate 60 mcg",
      "Vitamin B1 1.4 mg",
      "Vitamin B2 1.6 mg",
      "Vitamin B6 2 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-170",
    "composition": " \u2022 Zinc as Zinc Oxide 12 mg \u2022 Iron as Ferrous Fumarate 17 mg \u2022 Sodium as Sodium Carbonate 60 mcg \u2022 Vitamin B1 1.4 mg \u2022 Vitamin B2 1.6 mg \u2022 Vitamin B6 2 mg"
  },
  {
    "name": "Zinc Oxide, Potassium Iodide & Multimineral Softgel",
    "division": "Softgel",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "FOOD",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "30 mg",
      "15 mg",
      "150 mcg",
      "1.5 mg",
      "0.5 mg",
      "65 mcg"
    ],
    "ingredients": [
      "L- Glutathione 2 mg",
      "Green tea extract Eq. to Polyphenol 10 mg",
      "Ginseng extarct 42.5 mg",
      "Ginkgo Biloba extract 10 mg",
      "Grape Seed extract 15 mg",
      "Garlic Extract 50 mg"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "id": "p-171",
    "composition": " \u2022 L- Glutathione 2 mg \u2022 Green tea extract Eq. to Polyphenol 10 mg \u2022 Ginseng extarct 42.5 mg \u2022 Ginkgo Biloba extract 10 mg \u2022 Grape Seed extract 15 mg \u2022 Garlic Extract 50 mg"
  },
  {
    "name": "Zopiclone Tablets IP",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "7.5 mg"
    ],
    "ingredients": [
      "Zopiclone IP 7.5 mg"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "id": "p-172",
    "composition": " \u2022 Zopiclone IP 7.5 mg"
  }
];
