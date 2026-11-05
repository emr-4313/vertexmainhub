export type PlaceExt = "rbxl" | "rbxm";

export type PlaceFile = {
  id: string;
  name: string;
  file: string;
  downloadName: string;
  bytes: number;
  ext: PlaceExt;
  kind: string;
  note: string;
};

export const PLACES: PlaceFile[] = [
  {
    id: "realistic",
    name: "Realistic ACS",
    file: "Realistic_Acs.rbxl",
    downloadName: "Realistic_Acs.rbxl",
    bytes: 31343808,
    ext: "rbxl",
    kind: "Yer",
    note: "Studio'da Dosya → Dosyadan aç.",
  },
  {
    id: "som",
    name: "som ACS test",
    file: "somACStest.rbxl",
    downloadName: "somACStest.rbxl",
    bytes: 14902584,
    ext: "rbxl",
    kind: "Yer",
    note: "Test yeri. Studio'da Dosya → Dosyadan aç.",
  },
  {
    id: "nuycs",
    name: "nuycs ACS v2",
    file: "nuycs_acs_v2.rbxm",
    downloadName: "nuycs_acs_v2.rbxm",
    bytes: 12731872,
    ext: "rbxm",
    kind: "Model",
    note: "Model. Studio Explorer'a sürükle.",
  },
  {
    id: "va",
    name: "V.A. ACS",
    file: "VA_ACS_Roblox_Studios.rbxl",
    downloadName: "VA_ACS_Roblox_Studios.rbxl",
    bytes: 8719022,
    ext: "rbxl",
    kind: "Yer",
    note: "Studio'da Dosya → Dosyadan aç.",
  },
  {
    id: "ots",
    name: "OTS ACS",
    file: "OTS_ACS.rbxl",
    downloadName: "OTS_ACS.rbxl",
    bytes: 3973813,
    ext: "rbxl",
    kind: "Yer",
    note: "Omuz üstü ACS yeri. Dosyadan aç.",
  },
  {
    id: "aether",
    name: "Shattered Aether Map",
    file: "Shattered_Aether_Map.rbxl",
    downloadName: "Shattered_Aether_Map.rbxl",
    bytes: 954581,
    ext: "rbxl",
    kind: "Harita",
    note: "Harita yeri. Studio'da Dosya → Dosyadan aç.",
  },
];

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  const mb = bytes / (1024 * 1024);
  return `${mb >= 10 ? mb.toFixed(1) : mb.toFixed(2)} MB`;
}

export const ARCHIVE_BYTES = PLACES.reduce((sum, file) => sum + file.bytes, 0);
