export type ReleaseArtifact = {
  id: number;
  name: string;
  appKey: string;
  version: string;
  buildNumber: number;
  hash: string;
  buildTime: string;
  updatedAt: string;
  deployedAt: string | null;
  ticketNumber: string;
  isRemoved: boolean;
};

export const mockReleaseArtifacts: ReleaseArtifact[] = [
  { id: 1, name: "Transcof", appKey: "JAVA", version: "v 5.4", buildNumber: 23, hash: "7990H98GW", buildTime: "2024-10-06", updatedAt: "2024-08-21", deployedAt: "2024-05-18", ticketNumber: "UJI-4352", isRemoved: false },
  { id: 2, name: "Tres-Zap", appKey: "SPRINGBOOT", version: "v 4.1", buildNumber: 7, hash: "744NG46SB", buildTime: "2024-09-08", updatedAt: "2025-04-13", deployedAt: "2024-07-22", ticketNumber: "AFO-0500", isRemoved: false },
  { id: 3, name: "Stim", appKey: "SPRINGBOOT", version: "v 9.6.0", buildNumber: 15, hash: "039DX62IA", buildTime: "2025-02-11", updatedAt: "2024-05-14", deployedAt: "2024-08-26", ticketNumber: "DKY-0151", isRemoved: false },
  { id: 4, name: "Cardguard", appKey: "JAVA", version: "v 0.3.9", buildNumber: 3, hash: "264FL31XB", buildTime: "2025-02-20", updatedAt: "2024-07-28", deployedAt: "2024-11-19", ticketNumber: "GPC-0755", isRemoved: false },
  { id: 5, name: "Quo Lux", appKey: "JAVA", version: "v 0.96", buildNumber: 3, hash: "702CK84HG", buildTime: "2025-03-13", updatedAt: "2025-02-25", deployedAt: "2024-12-16", ticketNumber: "PYN-5045", isRemoved: false },
  { id: 6, name: "A-Solowarm", appKey: "WWW", version: "v 0.29", buildNumber: 10, hash: "127UF78WF", buildTime: "2024-10-27", updatedAt: "2024-05-14", deployedAt: "2025-02-23", ticketNumber: "RSL-5121", isRemoved: true },
  { id: 7, name: "Lotstring", appKey: "WWW", version: "v 0.7.7", buildNumber: 14, hash: "535CB14MF", buildTime: "2025-01-28", updatedAt: "2024-10-12", deployedAt: "2024-10-28", ticketNumber: "MJQ-5232", isRemoved: true },
  { id: 8, name: "Aerified", appKey: "WWW", version: "v 4.5", buildNumber: 24, hash: "957HB32WH", buildTime: "2025-02-17", updatedAt: "2025-02-10", deployedAt: "2024-05-16", ticketNumber: "LDZ-7242", isRemoved: false },
  { id: 9, name: "Alpha", appKey: "WWW", version: "v 4.6.7", buildNumber: 20, hash: "115QL95RH", buildTime: "2025-01-26", updatedAt: "2024-06-06", deployedAt: "2024-10-01", ticketNumber: "QOP-0169", isRemoved: true },
  { id: 10, name: "Zamit", appKey: "REACT", version: "v 3.1.3", buildNumber: 19, hash: "313TF21KD", buildTime: "2024-05-22", updatedAt: "2025-04-16", deployedAt: "2024-09-16", ticketNumber: "PXM-2766", isRemoved: false },
  { id: 11, name: "Job", appKey: "WWW", version: "v 5.78", buildNumber: 1, hash: "446ZQ31HK", buildTime: "2024-11-17", updatedAt: "2025-04-28", deployedAt: "2024-11-22", ticketNumber: "DAO-0159", isRemoved: false },
  { id: 12, name: "Keylex", appKey: "WWW", version: "v 6.86", buildNumber: 1, hash: "674FZ58IQ", buildTime: "2024-06-22", updatedAt: "2024-12-25", deployedAt: "2024-11-26", ticketNumber: "GYF-7959", isRemoved: false },
];
