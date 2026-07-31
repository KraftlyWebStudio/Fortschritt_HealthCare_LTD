# Temporary Modifications & Revert Guide

This document records all recent project modifications, file changes, dataset overhauls, and UI enhancements made to **Fortschritt Healthcare LTD**. Use this reference to understand what was changed or to easily revert any temporary setting.

---

## 1. Temporary Development Port Changes (Current: 3001 & 5002)

To accommodate concurrent running servers, local development ports were temporarily updated from `3000` & `5001` to **`3001`** (Frontend) and **`5002`** (Backend).

### Files Modified & Exact Values:

1. **`scripts/dev.sh`**
   - **Line 18-19**: Port killing changed from `3000 5001` to `3001 5002`.
   - **Line 55-58**: Console logs updated to `http://localhost:5002` and `http://localhost:3001`.
   - *Revert*: Change `3001` back to `3000`, and `5002` back to `5001`.

2. **`frontend/package.json`**
   - **Line 6**: `"dev": "next dev --webpack -p 3001"`
   - *Revert*: Change to `"dev": "next dev --webpack"`.

3. **`backend/.env`**
   - `SERVER_PORT=5002`
   - `FRONTEND_LOCAL_URL=http://localhost:3001`
   - `BACKEND_LOCAL_URL=http://localhost:5002`
   - *Revert*: Change `SERVER_PORT=5001`, `FRONTEND_LOCAL_URL=http://localhost:3000`, `BACKEND_LOCAL_URL=http://localhost:5001`.

4. **`frontend/.env`**
   - `NEXT_PUBLIC_FRONTEND_LOCAL_URL=http://localhost:3001`
   - `NEXT_PUBLIC_BACKEND_LOCAL_URL=http://localhost:5002`
   - *Revert*: Change `NEXT_PUBLIC_FRONTEND_LOCAL_URL=http://localhost:3000`, `NEXT_PUBLIC_BACKEND_LOCAL_URL=http://localhost:5001`.

5. **`frontend/src/api/contact.ts`**
   - **Line 5**: `const API_BASE_URL = env.BACKEND_URL || "http://localhost:5002";`
   - *Revert*: Change `"http://localhost:5002"` to `"http://localhost:5001"`.

6. **`backend/src/configs/env.config.js`**
   - **Line 4**: `SERVER_PORT: z.string().default("5002")`
   - *Revert*: Change `"5002"` to `"5001"`.

---

## 2. Senior PhD Doctor Pharmaceutical Dataset Overhaul

### Master Dataset (`frontend/src/data/productsData.ts`)
- **PDF Extraction**: Extracted 764 raw table entries across all 4 PDF catalogs (`FORTSCHRITT GENERAL.pdf`, `FORTSCHRITT HORMONES.pdf`, `FORTSCHRITT FOOD + SACHET + PROTEIN POWDER.pdf`, `Product List-Softgel.pdf`) into verbatim markdown files in `data_to_add/`.
- **Smart 5-in-1 Data Merging**: Consolidated raw table rows into **287 master formulations** (198 General, 43 Hormones, 30 Softgel, 19 Nutraceuticals).
- **Dosage Strengths Accumulation**: When multiple variant rows exist for a molecule (e.g. 5 different strengths for `Progesterone` or `Aceclofenac`), **all unique dosage strengths were accumulated** into the `availableStrengths` array (`["100 mg", "200 mg", "300 mg", "400 mg"]`).
- **Excipients & Colorants Filtering**: Inactive excipients (`Excipients`, `Excipients q.s.`) and coloring agents (`Approved Colour Used`, `Approved Colour Used in Capsule Shell`) were removed from active formulation lists so only pure **Active Pharmaceutical Ingredients (APIs)** are rendered under `ACTIVE FORMULATION`.
- **Pharmacopeia Reference Metadata**: Quality references (`IP`, `BP`, `USP`) were moved out of the `availableStrengths` dosage pills and placed into the dedicated `phRef` metadata field.
- **Title Spacing Standard**: Fixed concatenated release abbreviations across titles (e.g., `Acebrophylline(SR)` → `Acebrophylline (SR)`).

---

## 3. UI Cleanups & Layout Enhancements

1. **Search Bar Relocation (Location 1 Integration)**
   - **Location 1 (Sub-Filters Card)**: Integrated full-width live search bar directly inside the white filter card right above product cards for optimal UX.
   - **Location 2 (Hero Section)**: Removed duplicate search input from top dark hero banner.

2. **Card Title Truncation & Grid Height Alignment (`frontend/src/app/products/page.tsx`)**
   - Restricted card titles to **maximum 2 lines** (`line-clamp-2`) with fixed height (`h-[3.25rem]`).
   - Added hover tooltip `title={product.name}` and enabled clicking title to view **100% full, untruncated name** in the Enquire Now modal.
   - Standardized composition box (`h-[110px]`) and dosage pills container (`h-[52px]`) for clean, uniform grid height alignment across all rows.

3. **Modal Footer (`frontend/src/app/products/page.tsx`)**
   - Removed raw PDF filename text (`Source: FORTSCHRITT GENERAL.pdf`) from the Enquire Now modal footer.
   - Replaced with WHO-GMP certification badge:
     ```tsx
     <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
       <span className="material-icons text-xs text-primary">verified</span> WHO-GMP Certified Manufacturing
     </div>
     ```

4. **PDF Catalog Downloads Removed (`frontend/src/app/products/page.tsx`)**
   - Removed top PDF download action bar and deleted `frontend/public/catalogs/`.

5. **Partner Logos (`frontend/src/components/home/Partners.tsx`)**
   - Removed white card containers (`bg-white rounded-xl shadow-xs border border-slate-100 p-3`) to allow transparent logo rendering.

---

## 4. How to Command Revert Ports

If you ask to revert ports back to `3000` & `5001`, run or request the following command:

```bash
# Revert ports script
sed -i '' 's/3001/3000/g' scripts/dev.sh backend/.env frontend/.env frontend/src/api/contact.ts
sed -i '' 's/5002/5001/g' scripts/dev.sh backend/.env frontend/.env frontend/src/api/contact.ts backend/src/configs/env.config.js
sed -i '' 's/-p 3001//g' frontend/package.json
```
