/**
 * DTCP plot / vacant land photography placeholders.
 * Prefer empty parcels, approach roads, and aerial layouts — not houses, villas, or beaches.
 * Replace with your own site photos under public/images/ when ready.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const plotImages = {
  /** Hero — open land ready for plotting */
  hero: u('photo-1625246333195-78d9c38ad449', 2000),
  /** Aerial farmland / parcel grid feel */
  aerialParcels: u('photo-1625246333195-78d9c38ad449'),
  aerialParcelsSm: u('photo-1625246333195-78d9c38ad449', 1400),
  /** Approach / internal road through land */
  approachRoad: u('photo-1500934896980-4ac4780d5a3c'),
  approachRoadSm: u('photo-1500934896980-4ac4780d5a3c', 1200),
  /** Open vacant green land */
  vacantGreen: u('photo-1500382017468-9049fed747ef'),
  vacantGreenWide: u('photo-1500382017468-9049fed747ef', 2000),
  vacantGreenSm: u('photo-1500382017468-9049fed747ef', 1200),
  /** Cleared / earthworks plot site */
  clearedSite: u('photo-1504307651254-35680f356dfd'),
  clearedSiteSm: u('photo-1504307651254-35680f356dfd', 1200),
  /** Vacant lot / undeveloped parcel */
  vacantLot: u('photo-1589939705384-5185137a7f0f'),
  vacantLotSm: u('photo-1589939705384-5185137a7f0f', 1200),
  /** Soil / earth grade for plot formation */
  earthGrade: u('photo-1541888946425-d81bb19240f5'),
  earthGradeSm: u('photo-1541888946425-d81bb19240f5', 1200),
  /** Crop rows — reads as orderly layout */
  layoutRows: u('photo-1464226184884-fa280b87c399'),
  layoutRowsSm: u('photo-1464226184884-fa280b87c399', 1200),
  /** Open agriculture — large saleable acreage */
  openAcreage: u('photo-1574943320219-553fb309f703'),
  openAcreageSm: u('photo-1574943320219-553fb309f703', 1400),
  /** Flat land under sky */
  flatLand: u('photo-1560493676-04071c5f77b0'),
  flatLandSm: u('photo-1560493676-04071c5f77b0', 1200),
  /** Planted / demarcated ground */
  demarcatedGround: u('photo-1416879595882-3373a0480b5b'),
  demarcatedGroundSm: u('photo-1416879595882-3373a0480b5b', 1200),
  /** Golden hour field — investment atmosphere without buildings */
  goldenField: u('photo-1470252649378-9c29740c9ff8'),
  goldenFieldSm: u('photo-1470252649378-9c29740c9ff8', 1200),
  /** Soft green meadow parcel */
  meadowParcel: u('photo-1472214103451-9374bd1c798e'),
  meadowParcelSm: u('photo-1472214103451-9374bd1c798e', 1400),
} as const

/** @deprecated Use plotImages.* keys above — kept for any leftover imports */
export const legacyPlotAliases = plotImages
